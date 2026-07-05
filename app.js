document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile navigation toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
        const spans = menuToggle.querySelectorAll('span');
        if (menuToggle.classList.contains('open')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
            menuToggle.querySelectorAll('span').forEach(span => span.style.transform = 'none');
            menuToggle.querySelectorAll('span')[1].style.opacity = '1';
        });
    });

    // 3. B2B Quotation Form wizard
    const steps = document.querySelectorAll('.builder-step');
    const progressDots = document.querySelectorAll('.progress-dot');
    const btnNext = document.getElementById('btn-next');
    const btnBack = document.getElementById('btn-back');
    const btnSubmit = document.getElementById('btn-submit');
    const quoteForm = document.getElementById('quoteForm');
    
    let currentStep = 0;

    const updateStep = () => {
        steps.forEach((step, idx) => {
            step.classList.toggle('active', idx === currentStep);
        });
        
        progressDots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx <= currentStep);
        });

        btnBack.style.display = currentStep > 0 ? 'inline-flex' : 'none';
        btnBack.innerText = "पीछे";

        if (currentStep === steps.length - 1) {
            btnNext.style.display = 'none';
            btnSubmit.style.display = 'inline-flex';
        } else {
            btnNext.style.display = 'inline-flex';
            btnNext.innerText = "आगे बढ़ें";
            btnSubmit.style.display = 'none';
        }
    };

    btnNext.addEventListener('click', () => {
        if (currentStep === 0) {
            const clientName = document.getElementById('clientName').value.trim();
            const companyName = document.getElementById('companyName').value.trim();
            if (!clientName || !companyName) {
                alert('कृपया अपना नाम और दुकान का नाम भरें।');
                return;
            }
        }
        
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateStep();
        }
    });

    btnBack.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateStep();
        }
    });

    // Option Selector in form (Step 2)
    const formOptions = document.querySelectorAll('#step-2 .option-select');
    const hiddenService = document.getElementById('selectedService');

    formOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            formOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            hiddenService.value = opt.getAttribute('data-value');
        });
    });

    // Submit inquiry form
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const clientName = document.getElementById('clientName').value.trim();
        const companyName = document.getElementById('companyName').value.trim();
        const deliveryArea = document.getElementById('industrySelect').value;
        const product = hiddenService.value;
        const specs = document.getElementById('bagSizes').value.trim();
        const scale = document.getElementById('orderScale').value;
        const requirements = document.getElementById('requirements').value.trim();

        const salesPhoneNumber = '917644000929';

        let whatsappText = `नमस्ते अरविंद ट्रेडिंग,\n\n`;
        whatsappText += `मैंने आपकी वेबसाइट से थोक पूछताछ भेजी है:\n\n`;
        whatsappText += `*नाम:* ${clientName}\n`;
        whatsappText += `*दुकान/स्थान:* ${companyName}\n`;
        whatsappText += `*डिलीवरी क्षेत्र:* ${deliveryArea}\n`;
        whatsappText += `*उत्पाद:* ${product}\n`;
        whatsappText += `*साइज/विवरण:* ${specs}\n`;
        whatsappText += `*अनुमानित आर्डर पैमाना:* ${scale}\n`;
        if (requirements) {
            whatsappText += `*विशेष नोट:* ${requirements}\n`;
        }
        whatsappText += `\nकृपया थोक मूल्य साझा करें। धन्यवाद!`;

        window.open(`https://wa.me/${salesPhoneNumber}?text=${encodeURIComponent(whatsappText)}`, '_blank');
    });


    // 4. Interactive Configurator Logic
    const configProductSelector = document.querySelectorAll('#product-selector-row .selector-item');
    const configColorSelector = document.querySelectorAll('#color-selector-row .color-dot');
    const configSizeRow = document.getElementById('size-selector-row');
    const configImg = document.getElementById('config-product-img');
    const configTitle = document.getElementById('config-product-title');
    const configSummary = document.getElementById('config-summary');
    const configColorLabel = document.getElementById('selected-color-label');
    const configWhatsappBtn = document.getElementById('config-whatsapp-btn');

    let selectedProduct = "CarryBags";
    let selectedProductName = "कैरी बैग (Carry Bags)";
    let selectedColor = "सफेद";
    let selectedSize = "8x10 इंच (5 kg)";

    // Product Size Maps
    const sizeMap = {
        Tripal: ["12x15 फ़ीट", "15x18 फ़ीट", "18x24  फ़ीट", "24x30  फ़ीट"],
        Rassi: ["4mm मोटाई", "6mm मोटाई", "8mm मोटाई", "10mm मोटाई", "12mm मोटाई"],
        CarryBags: ["8x10 इंच (5 kg)", "9x13 इंच (10 kg)", "11x16 इंच (15 kg)", "16x20 इंच (25 kg)", "20x26 इंच (50 kg)"]
    };

    const updateConfigSummary = () => {
        configSummary.innerText = `${selectedColor} रंग | ${selectedSize}`;
    };

    // Render sizes dynamically
    const renderSizes = (productType) => {
        configSizeRow.innerHTML = "";
        const sizes = sizeMap[productType];
        sizes.forEach((size, idx) => {
            const item = document.createElement('div');
            item.className = `selector-item ${idx === 0 ? 'selected' : ''}`;
            item.innerText = size;
            item.setAttribute('data-size', size);
            
            if (idx === 0) selectedSize = size;

            item.addEventListener('click', () => {
                configSizeRow.querySelectorAll('.selector-item').forEach(el => el.classList.remove('selected'));
                item.classList.add('selected');
                selectedSize = size;
                updateConfigSummary();
            });

            configSizeRow.appendChild(item);
        });
        updateConfigSummary();
    };

    // Product selection event
    configProductSelector.forEach(item => {
        item.addEventListener('click', () => {
            configProductSelector.forEach(el => el.classList.remove('selected'));
            item.classList.add('selected');
            
            selectedProduct = item.getAttribute('data-value');
            selectedProductName = item.innerText;
            configTitle.innerText = selectedProductName;
            
            // Update preview image
            configImg.src = item.getAttribute('data-img');
            
            // Re-render matching sizes
            renderSizes(selectedProduct);
        });
    });

    // Color selection event
    configColorSelector.forEach(dot => {
        dot.addEventListener('click', () => {
            configColorSelector.forEach(el => el.classList.remove('selected'));
            dot.classList.add('selected');
            
            selectedColor = dot.getAttribute('data-color');
            configColorLabel.innerText = selectedColor;
            updateConfigSummary();
        });
    });

    // WhatsApp Action from Configurator
    configWhatsappBtn.addEventListener('click', () => {
        const salesNumber = '917644000929';
        let msg = `नमस्ते अरविंद ट्रेडिंग,\n\n`;
        msg += `मैं आपकी वेबसाइट से सीधे इस उत्पाद कॉम्बिनेशन के लिए आर्डर/रेट जानना चाहता हूँ:\n\n`;
        msg += `*उत्पाद:* ${selectedProductName}\n`;
        msg += `*पसंदीदा रंग:* ${selectedColor}\n`;
        msg += `*चुना गया आकार:* ${selectedSize}\n\n`;
        msg += `कृपया इस कॉम्बिनेशन का थोक मूल्य और स्टॉक की उपलब्धता बताएं। धन्यवाद!`;

        window.open(`https://wa.me/${salesNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    });

    // Initial load
    renderSizes("CarryBags");

    // Visitor Hit Counter
    fetch('https://api.counterapi.dev/v1/arvindtrading/hits/up')
        .then(res => res.json())
        .then(data => {
            const countEl = document.getElementById('visitor-count-val');
            if (countEl) countEl.innerText = data.value;
        })
        .catch(() => {
            const countEl = document.getElementById('visitor-count-val');
            if (countEl) countEl.innerText = '1,248+';
        });
});

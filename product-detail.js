document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile navigation toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (menuToggle && navLinks) {
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
    }

    // 2. Parse Query Parameter for Product ID
    const getProductId = () => {
        const params = new URLSearchParams(window.location.search);
        return parseInt(params.get('id')) || 1; // Default to ID 1 (Blue Tripal)
    };

    const productId = getProductId();
    // Retrieve product from productsData (declared in products.js)
    const product = typeof productsData !== 'undefined' 
        ? productsData.find(p => p.id === productId) 
        : null;

    if (!product) {
        document.getElementById('detail-title').innerText = "उत्पाद नहीं मिला";
        return;
    }

    // 3. Populate Page Details
    const mainImg = document.getElementById('detail-main-img');
    const breadCategory = document.getElementById('bread-category');
    const detailTitle = document.getElementById('detail-title');
    const detailSubtitle = document.getElementById('detail-subtitle');
    const detailMrp = document.getElementById('detail-mrp');
    const detailPrice = document.getElementById('detail-price');
    const detailDiscount = document.getElementById('detail-discount');
    const detailLongDesc = document.getElementById('detail-long-desc');
    const sizesRow = document.getElementById('detail-sizes-row');
    const colorsRow = document.getElementById('detail-colors-row');

    // Breadcrumb and Titles
    if (product.category === 'tripal') {
        breadCategory.innerText = "तिरपाल (Tripal)";
        detailSubtitle.innerText = "बारिश की ढाल, अरविंद तिरपाल";
    } else if (product.category === 'rassi') {
        breadCategory.innerText = "रस्सी (Rassi)";
        detailSubtitle.innerText = "अटूट मजबूती, अरविंद रस्सियां";
    } else {
        breadCategory.innerText = "थोक कैरी बैग (Carry Bags)";
        detailSubtitle.innerText = "प्रीमियम और मजबूत कैरी बैग";
    }

    detailTitle.innerText = product.name;
    mainImg.src = product.image;
    detailLongDesc.innerText = product.desc;

    // Pricing calculation mock based on category
    let baseMrp = 2520;
    if (product.category === 'rassi') baseMrp = 950;
    if (product.category === 'carrybags') baseMrp = 480;

    // Dynamic Sizing Pills
    let selectedSize = '';
    const sizeList = product.sizes || (product.gsm ? [product.gsm] : []);

    const updatePricingDisplay = () => {
        detailMrp.innerText = '';
        detailPrice.innerText = `₹${baseMrp}`;
        detailDiscount.style.display = 'none';
    };

    sizeList.forEach((size, idx) => {
        const pill = document.createElement('div');
        pill.className = `selector-item ${idx === 0 ? 'selected' : ''}`;
        pill.innerText = size;
        pill.setAttribute('data-size', size);
        if (idx === 0) {
            selectedSize = size;
        }

        pill.addEventListener('click', () => {
            sizesRow.querySelectorAll('.selector-item').forEach(el => el.classList.remove('selected'));
            pill.classList.add('selected');
            selectedSize = size;
            updatePricingDisplay();
        });

        sizesRow.appendChild(pill);
    });

    // Call pricing display initially
    updatePricingDisplay();

    // Dynamic Color Swatches & Swatch Image Changers
    let selectedColor = '';
    const colorLabelText = document.getElementById('detail-color-label');
    const colorsList = product.colors || [];

    // Image mapping for swatches to match variant colors
    const imageMap = {
        "नीला": "tarpaulin_tripal.png",
        "पीला": "tripal_yellow.png",
        "काला": "tripal_black.png",
        "हरा": "tripal_green.png",
        "नारंगी": "tripal_yellow.png",
        "सफेद": "rassi_white.png",
        "लाल": "tarpaulin_tripal.png"
    };

    colorsList.forEach((col, idx) => {
        const dot = document.createElement('span');
        dot.className = `catalog-color-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('data-color', col);
        
        let dotBg = '#1E3E62';
        if (col === 'पीला') dotBg = '#E2B13C';
        else if (col === 'हरा') dotBg = '#2D6A4F';
        else if (col === 'काला') dotBg = '#111111';
        else if (col === 'लाल') dotBg = '#A32626';
        else if (col === 'सफेद') dotBg = '#F8FAFC';
        else if (col === 'नारंगी') dotBg = '#E67E22';

        dot.style.backgroundColor = dotBg;
        if (idx === 0) {
            selectedColor = col;
            colorLabelText.innerText = col;
        }

        dot.addEventListener('click', () => {
            colorsRow.querySelectorAll('.catalog-color-dot').forEach(el => el.classList.remove('active'));
            dot.classList.add('active');
            selectedColor = col;
            colorLabelText.innerText = col;

            // Change image based on color choice dynamically
            let mappedImg = imageMap[col];
            if (product.category === 'rassi') {
                if (col === 'पीला') mappedImg = 'rassi_yellow.png';
                else if (col === 'सफेद') mappedImg = 'rassi_white.png';
                else if (col === 'लाल' || col === 'नीला') mappedImg = 'rassi_multicolor.png';
            } else if (product.category === 'carrybags') {
                if (col === 'काला') mappedImg = 'bags_black.png';
                else if (col === 'सफेद') mappedImg = 'bags_transparent.png';
                else if (col === 'लाल' || col === 'पीला') mappedImg = 'bags_apparel.png';
            }

            if (mappedImg) {
                mainImg.src = mappedImg;
            } else {
                mainImg.src = product.image;
            }
        });

        colorsRow.appendChild(dot);
    });

    // 4. Quantity Selector Counter
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');
    const qtyValue = document.getElementById('qty-value');
    let quantity = 1;

    qtyMinus.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            qtyValue.innerText = quantity;
        }
    });

    qtyPlus.addEventListener('click', () => {
        quantity++;
        qtyValue.innerText = quantity;
    });

    // 5. Pincode Serviceability Checker
    const pincodeCheckBtn = document.getElementById('pincode-check-btn');
    const pincodeInput = document.getElementById('pincode-input');
    const pincodeStatusText = document.getElementById('pincode-status-text');

    const servicePincodes = ["813105", "813210", "813201", "812002", "813101"]; // Jagdishpur, Bhagalpur, Sanhola, Asarganj, Sultanganj

    pincodeCheckBtn.addEventListener('click', () => {
        const val = pincodeInput.value.trim();
        if (!val) {
            alert('कृपया 6 अंकों का पिनकोड दर्ज करें।');
            return;
        }

        // Bihar area checks (starts with 8)
        if (val.startsWith("8")) {
            pincodeStatusText.style.color = "#25D366";
            pincodeStatusText.innerText = "✓ इस पिनकोड पर अरविंद ट्रेडिंग द्वारा सीधे थोक होम डिलीवरी उपलब्ध है!";
        } else {
            pincodeStatusText.style.color = "#E2B13C";
            pincodeStatusText.innerText = "✓ इस क्षेत्र में डिलीवरी ट्रांसपोर्ट पार्टनर के माध्यम से उपलब्ध है।";
        }
    });

    // 6. WhatsApp B2B Checkout Routing
    const whatsappBtn = document.getElementById('detail-whatsapp-btn');
    whatsappBtn.addEventListener('click', () => {
        const salesNumber = '917644000929';
        let msg = `नमस्ते अरविंद ट्रेडिंग,\n\n`;
        msg += `मैं आपकी वेबसाइट से सीधे इस उत्पाद के थोक आर्डर के लिए रेट जानना चाहता हूँ:\n\n`;
        msg += `*उत्पाद:* ${product.name}\n`;
        if (selectedSize) msg += `*साइज/गेज:* ${selectedSize}\n`;
        if (selectedColor) msg += `*चुना गया रंग:* ${selectedColor}\n`;
        msg += `*ऑर्डर मात्रा:* ${quantity} पीस / बंडल\n`;
        msg += `*चेक किया गया पिनकोड:* ${pincodeInput.value.trim() || 'नहीं भरा गया'}\n\n`;
        msg += `कृपया थोक दर, कुल बिल मूल्य और डिलीवरी का समय बताएं। धन्यवाद!`;

        window.open(`https://wa.me/${salesNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    });

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

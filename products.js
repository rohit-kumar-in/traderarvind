const productsData = [
    // === Carry Bags - 20 items (FIRST) ===
    {
        id: 41,
        name: "थोक किराना कैरी बैग (Grocery Carry Bags - 5kg to 50kg)",
        category: "carrybags",
        image: "carry_bags.png",
        sizes: ["8x10 इंच (5 kg क्षमता)", "9x13 इंच (10 kg क्षमता)", "11x16 इंच (15 kg क्षमता)", "16x20 इंच (25 kg क्षमता)", "20x26 इंच (50 kg क्षमता)"],
        colors: ["सफेद", "काला", "नीला"],
        desc: "किराना दुकान, अनाज, सब्जी मंडियों और बर्तनों के लिए 5 किलोग्राम से 50 किलोग्राम वजन क्षमता में उपलब्ध प्रीमियम डबल-मजबूती वाले थोक कैरी बैग।"
    },
    {
        id: 42,
        name: "प्रीमियम शोरूम लूप-हैंडल कपड़ों के बैग",
        category: "carrybags",
        image: "bags_apparel.png",
        sizes: ["मध्यम (Medium)", "बड़ा (Large)", "बहुत बड़ा (Extra Large)"],
        colors: ["लाल", "काला", "पीला"],
        desc: "कपड़ों की दुकानों, रेडिमेड गारमेंट्स और मॉल के लिए सुंदर लूप हैंडल प्रिंटेड बैग।"
    },
    {
        id: 43,
        name: "थोक बर्तनों के लिए एक्स्ट्रा थिक बैग (Utensil Bags)",
        category: "carrybags",
        image: "carry_bags.png",
        sizes: ["बड़ा (Large)", "बहुत बड़ा (Extra Large)"],
        colors: ["काला", "नीला"],
        desc: "स्टील और पीतल के बर्तनों, कटलरी और भारी सामानों के लिए विशेष मोटे गेज वाले कैरी बैग।"
    },
    {
        id: 44,
        name: "काले रंग के मजबूत कूड़ा और पैकेजिंग बैग",
        category: "carrybags",
        image: "bags_black.png",
        sizes: ["मध्यम (Medium)", "बड़ा (Large)", "बहुत बड़ा (Extra Large)"],
        colors: ["काला"],
        desc: "कचरा निपटान, थोक भंडारण और गुप्त पार्सल पैकेजिंग के लिए मजबूत ब्लैक कैरी बैग।"
    },
    {
        id: 45,
        name: "लचीला चमकदार एलएलडीपीई कैरी बैग",
        category: "carrybags",
        image: "bags_apparel.png",
        sizes: ["छोटा (Small)", "मध्यम (Medium)", "बड़ा (Large)"],
        colors: ["लाल", "नीला", "हरा"],
        desc: "शाइनिंग फिनिश और उच्च इलास्टिसिटी वाले बैग। आसानी से फटते नहीं हैं।"
    },
    {
        id: 46,
        name: "क्रिस्प एचडीपीई किराना कैरी बैग (सफेद)",
        category: "carrybags",
        image: "bags_transparent.png",
        sizes: ["छोटा (Small)", "मध्यम (Medium)", "बड़ा (Large)"],
        colors: ["सफेद"],
        desc: "पारंपरिक सफेद खड़खड़िया एचडीपीई बैग। थोक किराना और सब्जी मंडियों की पहली पसंद।"
    },
    {
        id: 47,
        name: "प्रीमियम डी-कट मॉल कैरी बैग (काला)",
        category: "carrybags",
        image: "bags_apparel.png",
        sizes: ["मध्यम (Medium)", "बड़ा (Large)"],
        colors: ["काला", "लाल"],
        desc: "फैशनेबल पंच-होल डी-कट बैग। मोबाइल शॉप, कॉस्मेटिक्स और गिफ्ट गैलरी के लिए।"
    },
    {
        id: 48,
        name: "सुपर लार्ज हैवी ड्यूटी बर्तन बैग (नीला)",
        category: "carrybags",
        image: "carry_bags.png",
        sizes: ["बहुत बड़ा (Extra Large)"],
        colors: ["नीला", "काला"],
        desc: "किचन बर्नर, थाली सेट और कड़ाही जैसे बड़े मेटल आइटम ले जाने के लिए एक्स्ट्रा वाइड बैग।"
    },
    {
        id: 49,
        name: "पीले रंग के प्रिंटेड किराना थैले",
        category: "carrybags",
        image: "carry_bags.png",
        sizes: ["मध्यम (Medium)", "बड़ा (Large)"],
        colors: ["पीला"],
        desc: "प्रिंटेड डिज़ाइन वाले मजबूत बैग जो ग्राहकों को प्रीमियम लुक प्रदान करते हैं।"
    },
    {
        id: 50,
        name: "हरे रंग के टिकाऊ सब्जी कैरी बैग",
        category: "carrybags",
        image: "carry_bags.png",
        sizes: ["मध्यम (Medium)", "बड़ा (Large)"],
        colors: ["हरा"],
        desc: "सब्जियों और फलों की थोक पैकिंग के लिए उपयुक्त हवादार व मजबूत पॉलीथीन बैग।"
    },
    {
        id: 51,
        name: "कस्टम लोगो प्रिंटेड बुटीक थैले",
        category: "carrybags",
        image: "bags_apparel.png",
        sizes: ["मध्यम (Medium)", "बड़ा (Large)"],
        colors: ["लाल", "काला", "पीला"],
        desc: "लूप हैंडल वाले आकर्षक थैले जिन पर आप अपनी दुकान का नाम प्रिंट करवा सकते हैं।"
    },
    {
        id: 52,
        name: "एचडीपीई पारदर्शी पार्सल बैग",
        category: "carrybags",
        image: "bags_transparent.png",
        sizes: ["छोटा (Small)", "मध्यम (Medium)", "बड़ा (Large)"],
        colors: ["सफेद"],
        desc: "आर-पार दिखने वाले वाटरप्रूफ पारदर्शी पैकेट बैग। बिल बुक्स और कूरियर आइटम हेतु।"
    },
    {
        id: 53,
        name: "अल्ट्रा थिक ब्लैक कैरी बैग (50 माइक्रोन)",
        category: "carrybags",
        image: "bags_black.png",
        sizes: ["बड़ा (Large)", "बहुत बड़ा (Extra Large)"],
        colors: ["काला"],
        desc: "सरकारी नियमों के अनुसार बने 50 माइक्रोन से ऊपर के री-यूजेबल मोटे काले बैग।"
    },
    {
        id: 54,
        name: "रॉयल रेड लूप हैंडल बैग",
        category: "carrybags",
        image: "bags_apparel.png",
        sizes: ["मध्यम (Medium)", "बड़ा (Large)"],
        colors: ["लाल"],
        desc: "शादियों, त्योहारों और उपहार देने के मौसम के लिए विशेष लाल रंग के फैंसी कैरी बैग।"
    },
    {
        id: 55,
        name: "मिडियम साइज पीला डी-कट बैग",
        category: "carrybags",
        image: "bags_apparel.png",
        sizes: ["मध्यम (Medium)"],
        colors: ["पीला"],
        desc: "स्टेशनरी, किताबों, और दवाइयों के लिए अनुकूल चमकीला पीला पंच हैंडल बैग।"
    },
    {
        id: 56,
        name: "हैवी एलएलडीपीई ब्लैक बकेट शीट्स",
        category: "carrybags",
        image: "bags_black.png",
        sizes: ["बहुत बड़ा (Extra Large)"],
        colors: ["काला"],
        desc: "थोक कृषि बीज भंडारण और खाद बंडलों के पैकिंग के लिए अनुकूल इलास्टिक ब्लैक बैग।"
    },
    {
        id: 57,
        name: "सॉफ्ट फोल्ड गारमेंट बैग (हरा)",
        category: "carrybags",
        image: "bags_apparel.png",
        sizes: ["मध्यम (Medium)", "बड़ा (Large)"],
        colors: ["हरा"],
        desc: "साड़ी, सूट और महंगे कपड़ों को धूल और नमी से बचाने वाले सॉफ्ट फील पॉली बैग।"
    },
    {
        id: 58,
        name: "मिनी किराना बैग (छोटा नीला)",
        category: "carrybags",
        image: "carry_bags.png",
        sizes: ["छोटा (Small)"],
        colors: ["नीला"],
        desc: "मसाले, चायपत्ती और छोटी किराना वस्तुओं को पैक करने के लिए 1-2 किलो कैपेसिटी वाले बैग।"
    },
    {
        id: 59,
        name: "थ्री-लेयर हैवी ड्यूटी बर्तन थैले",
        category: "carrybags",
        image: "carry_bags.png",
        sizes: ["बड़ा (Large)", "बहुत बड़ा (Extra Large)"],
        colors: ["काला", "नीला"],
        desc: "बर्तन दुकानों पर कुकर, तवा और डिनर सेट जैसे बंडलों को एक साथ रखने के लिए मजबूत बैग।"
    },
    {
        id: 60,
        name: "प्रीमियम ब्लैक लूप हैंडल शोरूम बैग",
        category: "carrybags",
        image: "bags_apparel.png",
        sizes: ["बड़ा (Large)", "बहुत बड़ा (Extra Large)"],
        colors: ["काला"],
        desc: "सूट और शेरवानी जैसे प्रीमियम वस्त्रों की डिलीवरी के लिए अत्यंत आकर्षक लक्ज़री ब्लैक लूप बैग।"
    },

    // === Tarpulin (Tripal) - 20 items (SECOND) ===
    {
        id: 1,
        name: "अल्ट्रा स्ट्रांग वाटरप्रूफ नीला तिरपाल",
        category: "tripal",
        image: "tarpaulin_tripal.png",
        gsm: "250 GSM",
        sizes: ["12x15 फ़ीट", "15x18 फ़ीट", "18x24 - फ़ीट", "24x30 - फ़ीट"],
        colors: ["नीला", "पीला", "हरा"],
        desc: "खेती-बाड़ी, अनाज सुरक्षा और भारी वाहनों को ढकने के लिए 100% वाटरप्रूफ ब्लू तिरपाल।"
    },
    {
        id: 2,
        name: "प्रीमियम पीला तिरपाल (कृषि विशेष)",
        category: "tripal",
        image: "tripal_yellow.png",
        gsm: "200 GSM",
        sizes: ["9x12 - फ़ीट", "12x15 - फ़ीट", "15x18 - फ़ीट"],
        colors: ["पीला", "नीला"],
        desc: "फसल सुखाने और खेतों में अनाज को धूप-बारिश से बचाने के लिए हल्का और टिकाऊ तिरपाल।"
    },
    {
        id: 3,
        name: "हैवी ड्यूटी काला तिरपाल (औद्योगिक ग्रेड)",
        category: "tripal",
        image: "tripal_black.png",
        gsm: "340 GSM",
        sizes: ["18x24 - - फ़ीट", "24x30 - - फ़ीट"],
        colors: ["काला"],
        desc: "कंस्ट्रक्शन साइट, ईंट भट्ठों और लंबे समय तक धूप में सामान सुरक्षित रखने हेतु मोटा ब्लैक तिरपाल।"
    },
    {
        id: 4,
        name: "डबल लेयर वाटरप्रूफ हरा तिरपाल",
        category: "tripal",
        image: "tripal_green.png",
        gsm: "220 GSM",
        sizes: ["12x15 फ़ीट", "15x18 फ़ीट", "18x24 - फ़ीट"],
        colors: ["हरा", "नीला"],
        desc: "नर्सरी, गार्डनिंग और छोटे वाहनों के लिए कस्टमाइज्ड वाटरप्रूफ ग्रीन शीट्स।"
    },
    {
        id: 5,
        name: "सुपर हैवी लायन तिरपाल (लाल रंग)",
        category: "tripal",
        image: "tarpaulin_tripal.png",
        gsm: "450 GSM",
        sizes: ["20x25 फ़ीट", "24x30 फ़ीट", "30x40 - फ़ीट"],
        colors: ["लाल", "नीला"],
        desc: "ट्रांसपोर्टर ट्रकों और गोदामों के लिए सर्वाधिक मजबूत और पंचर-प्रतिरोधी तिरपाल।"
    },
    {
        id: 6,
        name: "लाइटवेट ऑरेंज तिरपाल",
        category: "tripal",
        image: "tripal_yellow.png",
        gsm: "120 GSM",
        sizes: ["9x12 फ़ीट", "12x15 - फ़ीट"],
        colors: ["नारंगी"],
        desc: "अस्थायी तंबू, कैंपिंग और हल्की सुरक्षा के लिए बजट-अनुकूल तिरपाल।"
    },
    {
        id: 7,
        name: "सिल्वर-ब्लैक सनशील्ड तिरपाल",
        category: "tripal",
        image: "tripal_black.png",
        gsm: "280 GSM",
        sizes: ["15x18 - - फ़ीट", "18x24 - - - फ़ीट"],
        colors: ["काला", "नीला"],
        desc: "सूरज की हानिकारक यूवी किरणों और गर्मी से बचाव के लिए खास सिल्वर रिफ्लेक्टिव लेयर तिरपाल।"
    },
    {
        id: 8,
        name: "क्रॉस लैमिनेटेड मजबूत तिरपाल",
        category: "tripal",
        image: "tarpaulin_tripal.png",
        gsm: "150 GSM",
        sizes: ["12x15 फ़ीट", "15x18 फ़ीट"],
        colors: ["नीला", "हरा", "पीला"],
        desc: "फटता नहीं है! क्रॉस लैमिनेटेड तकनीक से बनी टिकाऊ बहुउद्देश्यीय तिरपाल।"
    },
    {
        id: 9,
        name: "सुपर गार्ड पीला-नीला तिरपाल",
        category: "tripal",
        image: "tripal_yellow.png",
        gsm: "240 GSM",
        sizes: ["12x15 फ़ीट", "15x18 फ़ीट", "18x24 - फ़ीट"],
        colors: ["नीला", "पीला"],
        desc: "दोतरफा उपयोग के लिए डबल शेड पीला और नीला हैवी ड्यूटी तिरपाल।"
    },
    {
        id: 10,
        name: "लचीला पारदर्शी पॉली तिरपाल",
        category: "tarpaulin_tripal.png",
        gsm: "180 GSM",
        sizes: ["9x12 फ़ीट", "12x15 - फ़ीट"],
        colors: ["सफेद"],
        desc: "पारदर्शी सुरक्षा शीट्स, बरसात में दुकानों के आगे लगाने के लिए विशेष तिरपाल।"
    },
    {
        id: 11,
        name: "अल्ट्रा गार्ड ग्रीन तिरपाल (300 GSM)",
        category: "tripal",
        image: "tripal_green.png",
        gsm: "300 GSM",
        sizes: ["15x18 फ़ीट", "18x24 - - - फ़ीट"],
        colors: ["हरा", "काला"],
        desc: "अनाज मंडी और भारी वेयरहाउस शेड्स के लिए सुपर थिक वाटरप्रूफ ग्रीन शीट्स।"
    },
    {
        id: 12,
        name: "मिनी डोमेस्टिक तिरपाल (नीला)",
        category: "tripal",
        image: "tarpaulin_tripal.png",
        gsm: "100 GSM",
        sizes: ["6x8 फ़ीट", "8x10 फ़ीट", "9x12 - फ़ीट"],
        colors: ["नीला"],
        desc: "घरेलू सामान, वाशिंग मशीन, कूलर और बाइक ढकने के लिए वाटरप्रूफ नीली शीट्स।"
    },
    {
        id: 13,
        name: "मल्टीपर्पस व्हाइट एचडीपीई तिरपाल",
        category: "tripal",
        image: "tarpaulin_tripal.png",
        gsm: "210 GSM",
        sizes: ["12x15 फ़ीट", "15x18 फ़ीट"],
        colors: ["सफेद"],
        desc: "डेयरी फार्मिंग और पशु आश्रयों के लिए गर्मी से राहत देने वाली सफेद तिरपाल।"
    },
    {
        id: 14,
        name: "सुपर शील्ड लाल-नीला तिरपाल",
        category: "tripal",
        image: "tarpaulin_tripal.png",
        gsm: "260 GSM",
        sizes: ["15x18 फ़ीट", "18x24 - फ़ीट"],
        colors: ["लाल", "नीला"],
        desc: "वाहन लोडिंग और हैवी कमर्शियल कार्यों के लिए आकर्षक डबल शेड रेड एंड ब्लू तिरपाल।"
    },
    {
        id: 15,
        name: "एग्रो शील्ड ग्रीन नेट तिरपाल",
        category: "tripal",
        image: "tripal_green.png",
        gsm: "150 GSM",
        sizes: ["12x18 फ़ीट", "15x20 - फ़ीट"],
        colors: ["हरा"],
        desc: "कृषि और बागवानी नर्सरी के लिए धूप से बचाव हेतु 75% ग्रीन शेड तिरपाल।"
    },
    {
        id: 16,
        name: "थ्री-लेयर लैमिनेटेड ब्लैक तिरपाल",
        category: "tripal",
        image: "tripal_black.png",
        gsm: "400 GSM",
        sizes: ["20x30 - - - फ़ीट", "24x36 - - - - - फ़ीट"],
        colors: ["काला"],
        desc: "खनन कार्यों, रेलवे वैगन ढकने और अत्यधिक प्रतिकूल मौसम के लिए सुपर थिक तिरपाल।"
    },
    {
        id: 17,
        name: "बजट सुरक्षा पीला तिरपाल (130 GSM)",
        category: "tripal",
        image: "tripal_yellow.png",
        gsm: "130 GSM",
        sizes: ["9x12 - - - - - फ़ीट"],
        colors: ["पीला"],
        desc: "छोटे दुकानदारों और रेहड़ी-पटरी के लिए किफायती पीली वाटरप्रूफ शीट्स।"
    },
    {
        id: 18,
        name: "एक्वा गार्ड पूल शीट्स (नीला)",
        category: "tripal",
        image: "tarpaulin_tripal.png",
        gsm: "220 GSM",
        sizes: ["12x15 फ़ीट", "15x18 फ़ीट", "18x24 - फ़ीट"],
        colors: ["नीला"],
        desc: "अस्थायी पानी के टैंकों, मछली पालन तालाब और वॉटर प्रूफिंग के लिए वाटरप्रूफ नीली शीट।"
    },
    {
        id: 19,
        name: "सॉलिड आर्मी ग्रीन तिरपाल",
        category: "tripal",
        image: "tripal_green.png",
        gsm: "350 GSM",
        sizes: ["18x24 - - - - फ़ीट"],
        colors: ["हरा", "काला"],
        desc: "सेना कैंपिंग स्टाइल, भारी ट्रक सुरक्षा और कठिन इलाकों के लिए ऑल वेदर ग्रीन तिरपाल।"
    },
    {
        id: 20,
        name: "फ्लावर गार्ड फ्लोरल प्रिंट तिरपाल",
        category: "tripal",
        image: "tripal_green.png",
        gsm: "160 GSM",
        sizes: ["12x15 - - - फ़ीट"],
        colors: ["हरा", "नीला"],
        desc: "होटल, रेस्टोरेंट और घरों के बाहरी लॉन के लिए आकर्षक वाटरप्रूफ फ्लोरल शीट्स।"
    },

    // === Ropes (Rassi) - 20 items (THIRD) ===
    {
        id: 21,
        name: "एचडीपीई मजबूत पीली रस्सी (Rassi)",
        category: "rassi",
        image: "rassi_yellow.png",
        thickness: "6mm",
        sizes: ["6mm मोटाई", "8mm मोटाई", "10mm मोटाई"],
        colors: ["पीला", "नीला", "लाल"],
        desc: "कृषि बंडल बनाने, कुएं से पानी निकालने और घरेलू सामान बांधने के लिए मजबूत पॉली रस्सियां।"
    },
    {
        id: 22,
        name: "सुपर ग्रिप नायलॉन रस्सी (सफेद)",
        category: "rassi",
        image: "rassi_white.png",
        thickness: "10mm",
        sizes: ["8mm मोटाई", "10mm मोटाई", "12mm मोटाई"],
        colors: ["सफेद"],
        desc: "सर्वाधिक खिंचाव क्षमता और ग्रिप वाली सॉफ्ट नायलॉन रोप। भारी वजन उठाने के लिए बेस्ट।"
    },
    {
        id: 23,
        name: "पीपी वर्जिन ग्रीन रोप (रस्सी)",
        category: "rassi",
        image: "ropes_rassi.png",
        thickness: "4mm",
        sizes: ["4mm मोटाई", "6mm मोटाई", "8mm मोटाई"],
        colors: ["हरा", "पीला"],
        desc: "घरेलू कपड़े सुखाने, जालियां बनाने और पैकेजिंग के लिए वर्जिन पॉलीप्रोपाइलीन रस्सी।"
    },
    {
        id: 24,
        name: "टाइगर प्रिंट मल्टीकलर रस्सियां",
        category: "rassi",
        image: "rassi_multicolor.png",
        thickness: "8mm",
        sizes: ["6mm मोटाई", "8mm मोटाई", "10mm मोटाई", "12mm मोटाई"],
        colors: ["पीला", "नीला", "लाल"],
        desc: "खूबसूरत डबल-शेड टाइगर प्रिंट रस्सियां। सजावटी और पैकेजिंग कार्यों के लिए उपयुक्त।"
    },
    {
        id: 25,
        name: "थिन पैकेजिंग सूत रस्सी (पीली)",
        category: "rassi",
        image: "rassi_yellow.png",
        thickness: "2mm",
        sizes: ["2mm मोटाई", "3mm मोटाई", "4mm मोटाई"],
        colors: ["पीला", "सफेद"],
        desc: "थोक सामान पैकेटों, कार्टन डिब्बों और बंडलों को जल्दी बांधने के लिए महीन टिकाऊ सुतली।"
    },
    {
        id: 26,
        name: "सुपर थिक मरीन ग्रेड नायलॉन रस्सा",
        category: "rassi",
        image: "rassi_white.png",
        thickness: "16mm",
        sizes: ["14mm  मोटाई", "16mm  मोटाई"],
        colors: ["सफेद", "नीला"],
        desc: "क्रेन वर्क, गहरे कुएं, और भारी ट्रैक्टर टोइंग के लिए औद्योगिक ग्रेड मरीन रोप।"
    },
    {
        id: 27,
        name: "एचडीपीई ब्लू ट्विस्टेड रस्सी",
        category: "rassi",
        image: "ropes_rassi.png",
        thickness: "8mm",
        sizes: ["6mm मोटाई", "8mm  मोटाई"],
        colors: ["नीला", "हरा"],
        desc: "3-स्ट्रैंड ट्विस्टेड रस्सी। पानी और यूवी प्रतिरोधी, खेतों में सिंचाई पाइप बांधने के काम आती है।"
    },
    {
        id: 28,
        name: "फ्लोरोसेंट ऑरेंज सेफ्टी रस्सी",
        category: "rassi",
        image: "rassi_multicolor.png",
        thickness: "12mm",
        sizes: ["10mm मोटाई", "12mm मोटाई"],
        colors: ["नारंगी"],
        desc: "दूर से दिखाई देने वाली चमकीली नारंगी सेफ्टी रोप। बोरवेल मोटर लटकाने के लिए सुरक्षित।"
    },
    {
        id: 29,
        name: "वर्जिन नायलॉन पिंक सुतली (रस्सी)",
        category: "rassi",
        image: "rassi_multicolor.png",
        thickness: "3mm",
        sizes: ["2mm मोटाई", "3mm मोटाई"],
        colors: ["लाल", "पीला"],
        desc: "सब्जियों की बेल चढ़ाने और हलकी पैकिंग के लिए टिकाऊ चमकीली सुतली।"
    },
    {
        id: 30,
        name: "आर्मी ग्रीन नायलॉन रस्सी (6mm)",
        category: "rassi",
        image: "ropes_rassi.png",
        thickness: "6mm",
        sizes: ["6mm मोटाई", "8mm मोटाई"],
        colors: ["हरा", "काला"],
        desc: "टेंट लगाने, कैम्पिंग करने और मजबूत आउटडोर ग्रिपिंग के लिए खास मिलिट्री ग्रीन रस्सी।"
    },
    {
        id: 31,
        name: "सॉलिड व्हाइट कपास-मिश्रित रस्सी",
        category: "rassi",
        image: "rassi_white.png",
        thickness: "10mm",
        sizes: ["8mm मोटाई", "10mm मोटाई"],
        colors: ["सफेद"],
        desc: "नरम और घर्षण-मुक्त कॉटन मिक्स रोप। पशुओं को बांधने और हाथ की सुरक्षा के लिए श्रेष्ठ।"
    },
    {
        id: 32,
        name: "एचडीपीई रेड कोइल्ड रस्सी",
        category: "rassi",
        image: "rassi_multicolor.png",
        thickness: "5mm",
        sizes: ["4mm मोटाई", "6mm मोटाई"],
        colors: ["लाल", "नीला"],
        desc: "आसान रीइलिंग वाली लाल गोल रस्सी। दुकानों में काउंटर पैकिंग के लिए आदर्श।"
    },
    {
        id: 33,
        name: "सुपर स्ट्रेच रबर-कोर बंजी रस्सी",
        category: "rassi",
        image: "ropes_rassi.png",
        thickness: "8mm",
        sizes: ["8mm मोटाई", "10mm मोटाई"],
        colors: ["काला", "नीला"],
        desc: "अंदर रबर और बाहर नायलॉन थ्रेड वाली लचीली रस्सियां। बाइक और ट्रकों पर तिरपाल कसने के लिए।"
    },
    {
        id: 34,
        name: "सुपर नायलॉन  ब्लू ग्रिप (14mm)",
        category: "rassi",
        image: "ropes_rassi.png",
        thickness: "14mm",
        sizes: ["12mm मोटाई", "14mm मोटाई"],
        colors: ["नीला"],
        desc: "भारी कार्गो शिपमेंट और बड़े ट्रकों पर भारी वजन रोकने के लिए सुपर स्ट्रांग ब्लू रस्सी।"
    },
    {
        id: 35,
        name: "वर्जिन पीपी येलो यार्न सुतली",
        category: "rassi",
        image: "rassi_yellow.png",
        thickness: "2mm",
        sizes: ["2mm मोटाई"],
        colors: ["पीला"],
        desc: "सुपर इकोनॉमी बंडल यार्न। किराना स्टोर पर अनाज की बोरियां सिलने और बांधने के लिए।"
    },
    {
        id: 36,
        name: "टफ शिल्ड ब्लैक मोनो रस्सी",
        category: "rassi",
        image: "ropes_rassi.png",
        thickness: "12mm",
        sizes: ["10mm मोटाई", "12mm मोटाई"],
        colors: ["काला"],
        desc: "अत्यंत कड़े वातावरण में जंग और घिसने से सुरक्षित रहने वाली मोनोफिलामेंट काली रस्सी।"
    },
    {
        id: 37,
        name: "एचडीपीई ट्राई-कलर कंबाइंड रस्सी",
        category: "rassi",
        image: "rassi_multicolor.png",
        thickness: "8mm",
        sizes: ["6mm  मोटाई", "8mm  मोटाई"],
        colors: ["नीला", "लाल", "पीला"],
        desc: "आकर्षक तीन रंगों के धागों से बनी तिरंगा स्टाइल रस्सी। मजबूत और सुंदर।"
    },
    {
        id: 38,
        name: "सॉफ्ट टच रेड नायलॉन रोप",
        category: "rassi",
        image: "rassi_multicolor.png",
        thickness: "6mm",
        sizes: ["6mm  मोटाई", "8mm  मोटाई"],
        colors: ["लाल"],
        desc: "अत्यंत लचीली लाल नायलॉन रस्सी। घरों में झूला लगाने या कपड़े सुखाने के लिए एकदम सही।"
    },
    {
        id: 39,
        name: "LIGHTWEIGHT PP GREEN THREAD",
        category: "rassi",
        image: "ropes_rassi.png",
        thickness: "3mm",
        sizes: ["2mm मोटाई", "3mm मोटाई"],
        colors: ["हरा"],
        desc: "सस्ती ग्रीन पॉली सुतली। सब्जियों की लताओं और छोटे डिब्बों की पैकिंग के लिए।"
    },
    {
        id: 40,
        name: "अल्ट्रा कोर स्टील-इंटरवेव नायलॉन रस्सी",
        category: "rassi",
        image: "rassi_white.png",
        thickness: "10mm",
        sizes: ["10mm मोटाई", "12mm मोटाई"],
        colors: ["सफेद", "काला"],
        desc: "भीतरी धागे में मिश्रित मेटल मजबूती वाली एंटी-कट औद्योगिक सुरक्षा रस्सियां।"
    }
];

// If window is defined, expose it globally
if (typeof window !== 'undefined') {
    window.productsData = productsData;
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
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

    // 2. Catalog Filtering and Search
    const searchInput = document.getElementById('product-search');
    const searchCount = document.getElementById('search-count');
    const tabFilters = document.querySelectorAll('.tab-filter');
    const productsGrid = document.getElementById('products-catalog-grid');

    if (!productsGrid) return; // Prevent errors if loaded on other pages

    let currentCategory = 'all';
    let searchQuery = '';

    const renderCatalog = () => {
        productsGrid.innerHTML = '';

        const filtered = productsData.filter(prod => {
            const matchesCat = currentCategory === 'all' || prod.category === currentCategory;
            const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  prod.desc.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });

        searchCount.innerText = filtered.length;

        if (filtered.length === 0) {
            productsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem;">
                    <p style="font-size: 1.2rem; color: var(--text-muted);">कोई उत्पाद नहीं मिला। कृपया दूसरा कीवर्ड खोजें।</p>
                </div>
            `;
            return;
        }

        // Keep Carry Bags first in general listing
        const sorted = [...filtered].sort((a, b) => {
            if (a.category === 'carrybags' && b.category !== 'carrybags') return -1;
            if (a.category !== 'carrybags' && b.category === 'carrybags') return 1;
            return a.id - b.id;
        });

        sorted.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.style.padding = '1.5rem';
            card.style.display = 'flex';
            card.style.flexDirection = 'column';
            card.style.justifyContent = 'space-between';

            // Generate size selector items HTML
            let sizeOptionsHTML = '';
            const sizeList = prod.sizes || (prod.gsm ? [prod.gsm] : []);
            sizeList.forEach((sz, idx) => {
                sizeOptionsHTML += `<span class="catalog-size-item ${idx === 0 ? 'active' : ''}" data-val="${sz}">${sz}</span>`;
            });

            // Generate color dots HTML
            let colorDotsHTML = '';
            const colorsList = prod.colors || [];
            colorsList.forEach((col, idx) => {
                let dotBg = '#1E3E62';
                if (col === 'पीला') dotBg = '#E2B13C';
                else if (col === 'हरा') dotBg = '#2D6A4F';
                else if (col === 'काला') dotBg = '#111111';
                else if (col === 'लाल') dotBg = '#A32626';
                else if (col === 'सफेद') dotBg = '#F8FAFC';
                else if (col === 'नारंगी') dotBg = '#E67E22';

                colorDotsHTML += `<span class="catalog-color-dot ${idx === 0 ? 'active' : ''}" style="background-color: ${dotBg};" data-color="${col}"></span>`;
            });

            card.innerHTML = `
                <div>
                    <div class="config-image-wrapper" style="height: 180px;">
                        <img class="catalog-card-img" src="${prod.image}" alt="${prod.name}">
                    </div>
                    <h3 style="font-size: 1.25rem; margin-top: 1rem; margin-bottom: 0.5rem; color: var(--text-light); line-height: 1.4;">${prod.name}</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">${prod.desc}</p>
                    
                    ${sizeList.length > 0 ? `
                        <div style="margin-bottom: 1rem;">
                            <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-light); margin-bottom: 0.4rem;">साइज/गेज:</div>
                            <div class="catalog-sizes-container">${sizeOptionsHTML}</div>
                        </div>
                    ` : ''}

                    ${colorsList.length > 0 ? `
                        <div style="margin-bottom: 1.5rem;">
                            <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-light); margin-bottom: 0.4rem;">रंग उपलब्ध:</div>
                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">${colorDotsHTML}</div>
                        </div>
                    ` : ''}
                </div>

                <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-glass);">
                    <button class="btn btn-primary catalog-order-btn" style="width: 100%; padding: 0.8rem 1rem; font-size: 0.9rem;">
                        उत्पाद विवरण और आर्डर
                    </button>
                </div>
            `;

            // Active option changes
            const sizeBadges = card.querySelectorAll('.catalog-size-item');
            sizeBadges.forEach(badge => {
                badge.addEventListener('click', (e) => {
                    e.stopPropagation();
                    sizeBadges.forEach(b => b.classList.remove('active'));
                    badge.classList.add('active');
                });
            });

            const colorBadges = card.querySelectorAll('.catalog-color-dot');
            colorBadges.forEach(badge => {
                badge.addEventListener('click', (e) => {
                    e.stopPropagation();
                    colorBadges.forEach(b => b.classList.remove('active'));
                    badge.classList.add('active');
                });
            });

            card.querySelector('.catalog-order-btn').addEventListener('click', () => {
                window.location.href = `product-detail.html?id=${prod.id}`;
            });

            productsGrid.appendChild(card);
        });
    };

    tabFilters.forEach(tab => {
        tab.addEventListener('click', () => {
            tabFilters.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.getAttribute('data-category');
            renderCatalog();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderCatalog();
        });
    }

    renderCatalog();
});

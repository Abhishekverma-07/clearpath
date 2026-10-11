const testCatalog = {
  ssc: {
    label: "SSC",
    subject: "SSC COMPETITIVE EXAM",
    durationSeconds: 600,
    description: "General awareness, aptitude, and exam reasoning practice.",
    questions: [
      {
        en: { title: "If 20% of a number is 50, what is the number?", options: ["200", "250", "300", "350"] },
        hi: { title: "यदि किसी संख्या का 20% 50 है, तो वह संख्या क्या है?", options: ["200", "250", "300", "350"] },
        answer: 1,
      },
      {
        en: { title: "Which constitutional body conducts elections in India?", options: ["Election Commission of India", "Union Public Service Commission", "Comptroller and Auditor General", "Finance Commission"] },
        hi: { title: "भारत में चुनाव कौन सा संवैधानिक निकाय करवाता है?", options: ["भारत निर्वाचन आयोग", "संघ लोक सेवा आयोग", "नियंत्रक एवं महालेखा परीक्षक", "वित्त आयोग"] },
        answer: 0,
      },
      {
        en: { title: "A sum of ₹800 is divided in the ratio 3:5. What is the smaller share?", options: ["₹240", "₹300", "₹360", "₹400"] },
        hi: { title: "₹800 को 3:5 के अनुपात में बाँटा गया है। छोटा हिस्सा कितना है?", options: ["₹240", "₹300", "₹360", "₹400"] },
        answer: 2,
      },
      {
        en: { title: "Solve the equation shown below for x.", options: ["10", "12", "14", "16"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>x</mi><mo>+</mo><mn>7</mn><mo>=</mo><mn>19</mn></mrow></math>', mathLabel: "x plus 7 equals 19." },
        hi: { title: "नीचे दिए गए समीकरण में x का मान ज्ञात कीजिए।", options: ["10", "12", "14", "16"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>x</mi><mo>+</mo><mn>7</mn><mo>=</mo><mn>19</mn></mrow></math>', mathLabel: "x प्लस 7 बराबर 19." },
        answer: 1,
      },
      {
        en: { title: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Mercury"] },
        hi: { title: "किस ग्रह को लाल ग्रह कहा जाता है?", options: ["शुक्र", "मंगल", "बृहस्पति", "बुध"] },
        answer: 1,
      },
      {
        en: { title: "What is three quarters of 80?", options: ["40", "50", "60", "70"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>×</mo><mn>80</mn><mo>=</mo><mo>?</mo></mrow></math>', mathLabel: "three fourths times 80 equals question mark." },
        hi: { title: "80 का तीन चौथाई कितना है?", options: ["40", "50", "60", "70"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>×</mo><mn>80</mn><mo>=</mo><mo>?</mo></mrow></math>', mathLabel: "तीन बटा चार गुणा 80 बराबर प्रश्नवाचक चिन्ह." },
        answer: 2,
      },
      {
        en: { title: "Who is the head of the Union executive in India?", options: ["The President", "The Prime Minister", "The Chief Justice", "The Speaker"] },
        hi: { title: "भारत में संघ कार्यपालिका का प्रमुख कौन होता है?", options: ["राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश", "लोकसभा अध्यक्ष"] },
        answer: 0,
      },
      {
        en: { title: "What is the average of 12 and 18?", options: ["12", "14", "15", "16"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn>12</mn><mo>+</mo><mn>18</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mo>?</mo></mrow></math>', mathLabel: "12 plus 18 divided by 2 equals question mark." },
        hi: { title: "12 और 18 का औसत कितना है?", options: ["12", "14", "15", "16"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn>12</mn><mo>+</mo><mn>18</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mo>?</mo></mrow></math>', mathLabel: "12 प्लस 18 बटा 2 बराबर प्रश्नवाचक चिन्ह." },
        answer: 2,
      },
      {
        en: { title: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"] },
        hi: { title: "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस अवशोषित करते हैं?", options: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"] },
        answer: 2,
      },
      {
        en: { title: "A price rises from ₹100 to ₹120. What is the percentage increase?", options: ["10%", "15%", "20%", "25%"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn>120</mn><mo>−</mo><mn>100</mn></mrow><mn>100</mn></mfrac><mo>×</mo><mn>100</mn><mo>=</mo><mo>?</mo></mrow></math>', mathLabel: "120 minus 100 divided by 100, times 100, equals question mark." },
        hi: { title: "किसी वस्तु का मूल्य 100 रुपये से 120 रुपये हो जाता है। प्रतिशत वृद्धि कितनी है?", options: ["10%", "15%", "20%", "25%"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn>120</mn><mo>−</mo><mn>100</mn></mrow><mn>100</mn></mfrac><mo>×</mo><mn>100</mn><mo>=</mo><mo>?</mo></mrow></math>', mathLabel: "120 माइनस 100 बटा 100, गुणा 100, बराबर प्रश्नवाचक चिन्ह." },
        answer: 2,
      },
    ],
  },
  railway: {
    label: "Railway",
    subject: "RAILWAY RECRUITMENT",
    durationSeconds: 600,
    description: "Speed, arithmetic, and general reasoning for railway exams.",
    questions: [
      {
        en: { title: "A train travels at 60 kilometres per hour. How far will it travel in 18 seconds?", options: ["240 metres", "300 metres", "360 metres", "420 metres"] },
        hi: { title: "एक ट्रेन 60 किलोमीटर प्रति घंटे की गति से चलती है। 18 सेकंड में वह कितनी दूरी तय करेगी?", options: ["240 मीटर", "300 मीटर", "360 मीटर", "420 मीटर"] },
        answer: 1,
      },
      {
        en: { title: "Find the next number in the series: 12, 18, 24, 30, ?", options: ["34", "36", "38", "42"] },
        hi: { title: "श्रृंखला में अगली संख्या ज्ञात कीजिए: 12, 18, 24, 30, ?", options: ["34", "36", "38", "42"] },
        answer: 1,
      },
      {
        en: { title: "Five workers complete a job in 12 days. How many days will ten workers take at the same rate?", options: ["4 days", "6 days", "8 days", "10 days"] },
        hi: { title: "पाँच कर्मचारी एक काम को 12 दिनों में पूरा करते हैं। उसी दर पर दस कर्मचारी कितने दिनों में काम पूरा करेंगे?", options: ["4 दिन", "6 दिन", "8 दिन", "10 दिन"] },
        answer: 1,
      },
      {
        en: { title: "Solve the equation shown below for x.", options: ["4", "6", "8", "10"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>5</mn><mo>=</mo><mn>17</mn></mrow></math>', mathLabel: "2 x plus 5 equals 17." },
        hi: { title: "नीचे दिए गए समीकरण में x का मान ज्ञात कीजिए।", options: ["4", "6", "8", "10"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>5</mn><mo>=</mo><mn>17</mn></mrow></math>', mathLabel: "2 x प्लस 5 बराबर 17." },
        answer: 1,
      },
      {
        en: { title: "Which is the longest railway route in India?", options: ["Dibrugarh–Kanyakumari", "Delhi–Mumbai", "Kolkata–Chennai", "Amritsar–Kochi"] },
        hi: { title: "भारत में सबसे लंबा रेलवे मार्ग कौन सा है?", options: ["डिब्रूगढ़–कन्याकुमारी", "दिल्ली–मुंबई", "कोलकाता–चेन्नई", "अमृतसर–कोच्चि"] },
        answer: 0,
      },
      {
        en: { title: "A vehicle covers 150 km in 3 hours. What is its average speed?", options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>150</mn><mn>3</mn></mfrac><mo>=</mo><mo>?</mo><mtext> km/h</mtext></mrow></math>', mathLabel: "150 divided by 3 equals question mark kilometres per hour." },
        hi: { title: "एक वाहन 3 घंटे में 150 किलोमीटर चलता है। इसकी औसत गति कितनी है?", options: ["30 किमी/घंटा", "40 किमी/घंटा", "50 किमी/घंटा", "60 किमी/घंटा"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>150</mn><mn>3</mn></mfrac><mo>=</mo><mo>?</mo><mtext> किमी/घंटा</mtext></mrow></math>', mathLabel: "150 बटा 3 बराबर प्रश्नवाचक चिन्ह किलोमीटर प्रति घंटा." },
        answer: 2,
      },
      {
        en: { title: "Which instrument measures atmospheric pressure?", options: ["Thermometer", "Barometer", "Speedometer", "Hygrometer"] },
        hi: { title: "वायुमंडलीय दबाव मापने का यंत्र कौन सा है?", options: ["थर्मामीटर", "बैरोमीटर", "स्पीडोमीटर", "हाइग्रोमीटर"] },
        answer: 1,
      },
      {
        en: { title: "If a train leaves at 09:20 and travels for 2 hours 45 minutes, when does it arrive?", options: ["11:45", "12:05", "12:15", "12:25"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>09</mn><mo>:</mo><mn>20</mn><mo>+</mo><mn>2</mn><mtext> hours </mtext><mo>+</mo><mn>45</mn><mtext> minutes</mtext></mrow></math>', mathLabel: "09:20 plus 2 hours plus 45 minutes." },
        hi: { title: "एक ट्रेन 09:20 पर चलती है और 2 घंटे 45 मिनट यात्रा करती है। वह कब पहुँचेगी?", options: ["11:45", "12:05", "12:15", "12:25"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>09</mn><mo>:</mo><mn>20</mn><mo>+</mo><mn>2</mn><mtext> घंटे </mtext><mo>+</mo><mn>45</mn><mtext> मिनट</mtext></mrow></math>', mathLabel: "09:20 प्लस 2 घंटे प्लस 45 मिनट." },
        answer: 1,
      },
      {
        en: { title: "What is the smallest prime number?", options: ["0", "1", "2", "3"] },
        hi: { title: "सबसे छोटी अभाज्य संख्या कौन सी है?", options: ["0", "1", "2", "3"] },
        answer: 2,
      },
      {
        en: { title: "A worker earns ₹600 for 5 days. What is the daily wage?", options: ["₹100", "₹110", "₹120", "₹150"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>600</mn><mn>5</mn></mfrac><mo>=</mo><mo>?</mo></mrow></math>', mathLabel: "600 divided by 5 equals question mark rupees." },
        hi: { title: "एक कर्मचारी 5 दिनों के लिए 600 रुपये कमाता है। दैनिक मजदूरी कितनी है?", options: ["₹100", "₹110", "₹120", "₹150"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>600</mn><mn>5</mn></mfrac><mo>=</mo><mo>?</mo></mrow></math>', mathLabel: "600 बटा 5 बराबर प्रश्नवाचक चिन्ह रुपये." },
        answer: 2,
      },
    ],
  },
  banking: {
    label: "Banking",
    subject: "BANKING AWARENESS",
    durationSeconds: 600,
    description: "Banking awareness, interest, and numerical ability practice.",
    questions: [
      {
        en: { title: "What is the simple interest on ₹2,000 at 5% per year for 2 years?", options: ["₹100", "₹200", "₹250", "₹300"] },
        hi: { title: "₹2,000 पर 5% वार्षिक दर से 2 वर्षों का साधारण ब्याज कितना होगा?", options: ["₹100", "₹200", "₹250", "₹300"] },
        answer: 1,
      },
      {
        en: { title: "What does RBI stand for?", options: ["Reserve Bank of India", "Regional Bank of India", "Rural Banking Institution", "Reserve Board of India"] },
        hi: { title: "RBI का पूरा नाम क्या है?", options: ["भारतीय रिज़र्व बैंक", "भारत का क्षेत्रीय बैंक", "ग्रामीण बैंकिंग संस्था", "भारत का रिज़र्व बोर्ड"] },
        answer: 0,
      },
      {
        en: { title: "What is the average of 5, 10, 15, and 20?", options: ["10", "12.5", "15", "17.5"] },
        hi: { title: "5, 10, 15 और 20 का औसत कितना है?", options: ["10", "12.5", "15", "17.5"] },
        answer: 1,
      },
      {
        en: { title: "Calculate the simple interest using the formula shown.", options: ["₹100", "₹150", "₹200", "₹250"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2000</mn><mo>×</mo><mn>5</mn><mo>×</mo><mn>2</mn></mrow><mn>100</mn></mfrac></mrow></math>', mathLabel: "I equals 2000 times 5 times 2 divided by 100." },
        hi: { title: "दिए गए सूत्र का उपयोग करके साधारण ब्याज ज्ञात कीजिए।", options: ["₹100", "₹150", "₹200", "₹250"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2000</mn><mo>×</mo><mn>5</mn><mo>×</mo><mn>2</mn></mrow><mn>100</mn></mfrac></mrow></math>', mathLabel: "I बराबर 2000 गुणा 5 गुणा 2 बटा 100." },
        answer: 2,
      },
      {
        en: { title: "Which account is generally used for frequent business transactions?", options: ["Savings account", "Current account", "Fixed deposit", "Recurring deposit"] },
        hi: { title: "लगातार व्यावसायिक लेन-देन के लिए सामान्यतः किस खाते का उपयोग किया जाता है?", options: ["बचत खाता", "चालू खाता", "सावधि जमा", "आवर्ती जमा"] },
        answer: 1,
      },
      {
        en: { title: "What is 15% of ₹400?", options: ["₹40", "₹50", "₹60", "₹80"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>15</mn><mn>100</mn></mfrac><mo>×</mo><mn>400</mn><mo>=</mo><mo>?</mo></mrow></math>', mathLabel: "15 divided by 100 times 400 equals question mark." },
        hi: { title: "400 रुपये का 15 प्रतिशत कितना है?", options: ["₹40", "₹50", "₹60", "₹80"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>15</mn><mn>100</mn></mfrac><mo>×</mo><mn>400</mn><mo>=</mo><mo>?</mo></mrow></math>', mathLabel: "15 बटा 100 गुणा 400 बराबर प्रश्नवाचक चिन्ह." },
        answer: 2,
      },
      {
        en: { title: "Which institution regulates monetary policy in India?", options: ["SEBI", "RBI", "NITI Aayog", "NABARD"] },
        hi: { title: "भारत में मौद्रिक नीति को कौन सी संस्था नियंत्रित करती है?", options: ["सेबी", "आरबीआई", "नीति आयोग", "नाबार्ड"] },
        answer: 1,
      },
      {
        en: { title: "A deposit doubles in 8 years at simple interest. What is the total amount as a multiple of the principal?", options: ["One half", "One", "Two", "Three"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><mi>P</mi></mrow></math>', mathLabel: "A equals 2 P." },
        hi: { title: "साधारण ब्याज पर कोई जमा 8 वर्षों में दोगुनी हो जाती है। मूलधन के कितने गुना राशि होगी?", options: ["आधा", "एक", "दो", "तीन"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><mi>P</mi></mrow></math>', mathLabel: "A बराबर 2 P." },
        answer: 2,
      },
      {
        en: { title: "What does ATM stand for?", options: ["Automatic Transfer Machine", "Any Time Money", "Automated Teller Machine", "Account Transfer Method"] },
        hi: { title: "ATM का पूरा नाम क्या है?", options: ["ऑटोमेटिक ट्रांसफर मशीन", "एनी टाइम मनी", "ऑटोमेटेड टेलर मशीन", "अकाउंट ट्रांसफर मेथड"] },
        answer: 2,
      },
      {
        en: { title: "If the ratio of savings to spending is 2:3 and total income is ₹5,000, how much is saved?", options: ["₹1,500", "₹2,000", "₹2,500", "₹3,000"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>2</mn><mn>5</mn></mfrac><mo>×</mo><mn>5000</mn><mo>=</mo><mo>?</mo></mrow></math>', mathLabel: "2 divided by 5 times 5000 equals question mark." },
        hi: { title: "बचत और खर्च का अनुपात 2:3 है और कुल आय 5,000 रुपये है। बचत कितनी है?", options: ["₹1,500", "₹2,000", "₹2,500", "₹3,000"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>2</mn><mn>5</mn></mfrac><mo>×</mo><mn>5000</mn><mo>=</mo><mo>?</mo></mrow></math>', mathLabel: "2 बटा 5 गुणा 5000 बराबर प्रश्नवाचक चिन्ह." },
        answer: 1,
      },
    ],
  },
  "math-accessible": {
    label: "Math & Science Accessibility Lab",
    subject: "ACCESSIBLE MATHEMATICS & SCIENCE",
    durationSeconds: 480,
    description: "Visual mathematics with semantic MathML, spoken descriptions, and accessible diagrams.",
    questions: [
      {
        en: { title: "What is the area of the triangle shown?", options: ["20 cm²", "30 cm²", "40 cm²", "60 cm²"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mn>10</mn><mo>×</mo><mn>6</mn></mrow></math>', mathLabel: "Area equals one half times 10 times 6, so the area is 30 square centimetres.", graphic: { type: "triangle", desc: "A triangle has a base of 10 centimetres and a perpendicular height of 6 centimetres." } },
        hi: { title: "दिखाए गए त्रिभुज का क्षेत्रफल कितना है?", options: ["20 वर्ग सेंटीमीटर", "30 वर्ग सेंटीमीटर", "40 वर्ग सेंटीमीटर", "60 वर्ग सेंटीमीटर"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mn>10</mn><mo>×</mo><mn>6</mn></mrow></math>', mathLabel: "क्षेत्रफल बराबर आधा गुणा 10 गुणा 6, इसलिए क्षेत्रफल 30 वर्ग सेंटीमीटर है।", graphic: { type: "triangle", desc: "त्रिभुज का आधार 10 सेंटीमीटर और लंबवत ऊंचाई 6 सेंटीमीटर है।" } },
        answer: 1,
      },
      {
        en: { title: "The bar chart shows books read by four students. How many books did they read in total?", options: ["20", "23", "25", "28"], graphic: { type: "bar", labels: ["A", "B", "C", "D"], values: [4, 7, 5, 9], desc: "A bar chart shows A read 4 books, B read 7, C read 5, and D read 9." } },
        hi: { title: "बार चार्ट में चार विद्यार्थियों द्वारा पढ़ी गई किताबें दिखाई गई हैं। कुल कितनी किताबें पढ़ी गईं?", options: ["20", "23", "25", "28"], graphic: { type: "bar", labels: ["A", "B", "C", "D"], values: [4, 7, 5, 9], desc: "बार चार्ट में A ने 4, B ने 7, C ने 5 और D ने 9 किताबें पढ़ीं।" } },
        answer: 2,
      },
      {
        en: { title: "What is the distance between 2 and 8 on the number line?", options: ["4", "5", "6", "10"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>|</mo><mn>8</mn><mo>−</mo><mn>2</mn><mo>|</mo><mo>=</mo><mn>6</mn></mrow></math>', mathLabel: "The absolute value of 8 minus 2 equals 6.", graphic: { type: "numberline", desc: "A number line from 0 to 10 highlights the distance from 2 to 8." } },
        hi: { title: "संख्या रेखा पर 2 और 8 के बीच की दूरी कितनी है?", options: ["4", "5", "6", "10"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>|</mo><mn>8</mn><mo>−</mo><mn>2</mn><mo>|</mo><mo>=</mo><mn>6</mn></mrow></math>', mathLabel: "8 माइनस 2 का निरपेक्ष मान 6 है।", graphic: { type: "numberline", desc: "0 से 10 तक की संख्या रेखा पर 2 और 8 के बीच की दूरी दिखाई गई है।" } },
        answer: 2,
      },
      {
        en: { title: "A circle has radius 7 cm. Using π = 22/7, what is its area?", options: ["44 cm²", "77 cm²", "154 cm²", "308 cm²"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>22</mn><mn>7</mn></mfrac><mo>×</mo><mn>7</mn><mo>×</mo><mn>7</mn></mrow></math>', mathLabel: "Area equals pi r squared. With pi equal to 22 over 7 and radius 7 centimetres, the area is 154 square centimetres.", graphic: { type: "circle", desc: "A circle is shown with radius 7 centimetres marked from the centre to the edge." } },
        hi: { title: "एक वृत्त की त्रिज्या 7 सेंटीमीटर है। π = 22/7 का उपयोग करके क्षेत्रफल कितना है?", options: ["44 वर्ग सेंटीमीटर", "77 वर्ग सेंटीमीटर", "154 वर्ग सेंटीमीटर", "308 वर्ग सेंटीमीटर"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>22</mn><mn>7</mn></mfrac><mo>×</mo><mn>7</mn><mo>×</mo><mn>7</mn></mrow></math>', mathLabel: "क्षेत्रफल बराबर पाई आर वर्ग। पाई 22 बटा 7 और त्रिज्या 7 सेंटीमीटर होने पर क्षेत्रफल 154 वर्ग सेंटीमीटर है।", graphic: { type: "circle", desc: "एक वृत्त दिखाया गया है जिसकी त्रिज्या 7 सेंटीमीटर है।" } },
        answer: 2,
      },
      {
        en: { title: "Which quadrant contains the point (2, 2)?", options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mo>(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>)</mo></mrow></math>', mathLabel: "Point P has coordinates 2 comma 2. Both coordinates are positive, so it is in quadrant one.", graphic: { type: "grid", desc: "A coordinate grid shows point P at coordinates 2 comma 2, in the upper-right quadrant." } },
        hi: { title: "बिंदु (2, 2) किस चतुर्थांश में है?", options: ["प्रथम चतुर्थांश", "द्वितीय चतुर्थांश", "तृतीय चतुर्थांश", "चतुर्थ चतुर्थांश"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mo>(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>)</mo></mrow></math>', mathLabel: "बिंदु P के निर्देशांक 2 कॉमा 2 हैं। दोनों निर्देशांक धनात्मक हैं, इसलिए यह प्रथम चतुर्थांश में है।", graphic: { type: "grid", desc: "निर्देशांक ग्रिड पर बिंदु P, 2 कॉमा 2 पर ऊपरी दाएँ चतुर्थांश में है।" } },
        answer: 0,
      },
      {
        en: { title: "A force acts on a 5 kg object with acceleration 4 m/s². What is the force?", options: ["9 N", "20 N", "25 N", "40 N"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mi>m</mi><mi>a</mi><mo>=</mo><mn>5</mn><mo>×</mo><mn>4</mn><mo>=</mo><mn>20</mn><mtext> N</mtext></mrow></math>', mathLabel: "Force equals mass times acceleration. 5 times 4 equals 20 newtons." },
        hi: { title: "5 किलोग्राम की वस्तु पर 4 मीटर प्रति सेकंड वर्ग का त्वरण है। बल कितना है?", options: ["9 न्यूटन", "20 न्यूटन", "25 न्यूटन", "40 न्यूटन"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mi>m</mi><mi>a</mi><mo>=</mo><mn>5</mn><mo>×</mo><mn>4</mn><mo>=</mo><mn>20</mn><mtext> N</mtext></mrow></math>', mathLabel: "बल बराबर द्रव्यमान गुणा त्वरण। 5 गुणा 4 बराबर 20 न्यूटन।" },
        answer: 1,
      },
      {
        en: { title: "Which value of x satisfies the quadratic equation x² − 5x + 6 = 0?", options: ["x = 1 or 6", "x = 2 or 3", "x = 2 or 4", "x = 3 or 4"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>6</mn><mo>=</mo><mn>0</mn></mrow></math>', mathLabel: "x squared minus 5 x plus 6 equals zero. The roots are 2 and 3." },
        hi: { title: "द्विघात समीकरण x² − 5x + 6 = 0 के लिए x के मान कौन से हैं?", options: ["x = 1 या 6", "x = 2 या 3", "x = 2 या 4", "x = 3 या 4"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>6</mn><mo>=</mo><mn>0</mn></mrow></math>', mathLabel: "x वर्ग माइनस 5 x प्लस 6 बराबर शून्य। मूल 2 और 3 हैं।" },
        answer: 1,
      },
      {
        en: { title: "The rectangle shown has length 12 cm and width 5 cm. What is its perimeter?", options: ["17 cm", "24 cm", "34 cm", "60 cm"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mo>(</mo><mn>12</mn><mo>+</mo><mn>5</mn><mo>)</mo><mo>=</mo><mn>34</mn><mtext> cm</mtext></mrow></math>', mathLabel: "Perimeter equals 2 times 12 plus 5, which equals 34 centimetres.", graphic: { type: "rectangle", desc: "A rectangle has a length of 12 centimetres and a width of 5 centimetres." } },
        hi: { title: "दिखाए गए आयत की लंबाई 12 सेंटीमीटर और चौड़ाई 5 सेंटीमीटर है। परिमाप कितना है?", options: ["17 सेंटीमीटर", "24 सेंटीमीटर", "34 सेंटीमीटर", "60 सेंटीमीटर"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mo>(</mo><mn>12</mn><mo>+</mo><mn>5</mn><mo>)</mo><mo>=</mo><mn>34</mn><mtext> सेंटीमीटर</mtext></mrow></math>', mathLabel: "परिमाप बराबर 2 गुणा 12 प्लस 5, यानी 34 सेंटीमीटर।", graphic: { type: "rectangle", desc: "एक आयत की लंबाई 12 सेंटीमीटर और चौड़ाई 5 सेंटीमीटर है।" } },
        answer: 2,
      },
    ],
  },
  logical: {
    label: "Logical reasoning",
    subject: "LOGICAL REASONING",
    durationSeconds: 600,
    description: "Sequences, classification, and deductions in accessible formats.",
    questions: [
      {
        en: { title: "Find the next number in the sequence: 3, 6, 12, 24, ?", options: ["36", "42", "48", "54"] },
        hi: { title: "श्रृंखला में अगली संख्या ज्ञात कीजिए: 3, 6, 12, 24, ?", options: ["36", "42", "48", "54"] },
        answer: 2,
      },
      {
        en: { title: "Which one is different from the others?", options: ["Square", "Triangle", "Circle", "Cube"] },
        hi: { title: "इनमें से कौन बाकी से अलग है?", options: ["वर्ग", "त्रिभुज", "वृत्त", "घन"] },
        answer: 3,
      },
      {
        en: { title: "All roses are flowers. Which statement must be true?", options: ["All roses are flowers", "All flowers are roses", "No roses are flowers", "Some roses are not flowers"] },
        hi: { title: "सभी गुलाब फूल हैं। इनमें से कौन सा कथन निश्चित रूप से सही है?", options: ["सभी गुलाब फूल हैं", "सभी फूल गुलाब हैं", "कोई गुलाब फूल नहीं है", "कुछ गुलाब फूल नहीं हैं"] },
        answer: 0,
      },
      {
        en: { title: "What number completes the pattern shown below?", options: ["10", "12", "14", "16"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>8</mn><mo>,</mo><mn>?</mn></mrow></math>', mathLabel: "2, 4, 8, question mark." },
        hi: { title: "नीचे दिए गए पैटर्न में कौन सी संख्या आएगी?", options: ["10", "12", "14", "16"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>8</mn><mo>,</mo><mn>?</mn></mrow></math>', mathLabel: "2, 4, 8, प्रश्नवाचक चिन्ह." },
        answer: 3,
      },
      {
        en: { title: "Book is to reading as fork is to:", options: ["Drawing", "Writing", "Eating", "Cooking"] },
        hi: { title: "पुस्तक का संबंध पढ़ने से है, उसी प्रकार कांटे का संबंध किससे है?", options: ["चित्र बनाने", "लिखने", "खाने", "पकाने"] },
        answer: 2,
      },
      {
        en: { title: "If all cats are mammals and Luna is a cat, what must be true?", options: ["Luna is a mammal", "All mammals are cats", "Luna is a bird", "No cats are mammals"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Cats</mi><mo>⊂</mo><mi>Mammals</mi><mo>,</mo><mspace width="0.3em"></mspace><mi>Luna</mi><mo>∈</mo><mi>Cats</mi></mrow></math>', mathLabel: "Cats are a subset of mammals, and Luna belongs to cats." },
        hi: { title: "यदि सभी बिल्लियाँ स्तनधारी हैं और लूना एक बिल्ली है, तो क्या निश्चित रूप से सही है?", options: ["लूना स्तनधारी है", "सभी स्तनधारी बिल्लियाँ हैं", "लूना पक्षी है", "कोई बिल्ली स्तनधारी नहीं है"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Cats</mi><mo>⊂</mo><mi>Mammals</mi><mo>,</mo><mspace width="0.3em"></mspace><mi>Luna</mi><mo>∈</mo><mi>Cats</mi></mrow></math>', mathLabel: "बिल्लियाँ स्तनधारियों का उपसमुच्चय हैं और लूना बिल्लियों में है." },
        answer: 0,
      },
      {
        en: { title: "Which word does not belong with the others?", options: ["Rose", "Lotus", "Oak", "Jasmine"] },
        hi: { title: "इनमें से कौन सा शब्द बाकी से अलग है?", options: ["गुलाब", "कमल", "ओक", "चमेली"] },
        answer: 2,
      },
      {
        en: { title: "A clock shows 3:00. What is the angle between its hands?", options: ["30 degrees", "60 degrees", "90 degrees", "180 degrees"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><mn>90</mn><mo>°</mo></mrow></math>', mathLabel: "theta equals 90 degrees." },
        hi: { title: "एक घड़ी में 3 बजे हैं। उसकी सुइयों के बीच कोण कितना है?", options: ["30 डिग्री", "60 डिग्री", "90 डिग्री", "180 डिग्री"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><mn>90</mn><mo>°</mo></mrow></math>', mathLabel: "थीटा बराबर 90 डिग्री." },
        answer: 2,
      },
      {
        en: { title: "Complete the series: 5, 10, 20, 40, ?", options: ["50", "60", "80", "100"] },
        hi: { title: "श्रृंखला पूरी कीजिए: 5, 10, 20, 40, ?", options: ["50", "60", "80", "100"] },
        answer: 2,
      },
      {
        en: { title: "If A is taller than B and B is taller than C, who is shortest?", options: ["A", "B", "C", "Cannot be determined"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>></mo><mi>B</mi><mo>></mo><mi>C</mi></mrow></math>', mathLabel: "A is greater than B, which is greater than C." },
        hi: { title: "यदि A, B से लंबा है और B, C से लंबा है, तो सबसे छोटा कौन है?", options: ["A", "B", "C", "निर्धारित नहीं किया जा सकता"], mathml: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>></mo><mi>B</mi><mo>></mo><mi>C</mi></mrow></math>', mathLabel: "A, B से बड़ा है और B, C से बड़ा है." },
        answer: 2,
      },
    ],
  },
};

const languageCatalog = {
  en: { name: "English", locale: "en-IN", recognitionLocales: ["en-IN", "en-US"], option: "Option", question: "Question", yes: ["yes", "yeah", "yep", "correct", "right", "okay", "ok"], no: ["no", "nope", "wrong", "incorrect"] },
  hi: { name: "Hindi", locale: "hi-IN", recognitionLocales: ["hi-IN", "hi", "en-IN"], option: "विकल्प", question: "प्रश्न", yes: ["हां", "हाँ", "सही", "ठीक"], no: ["नहीं", "नही", "गलत"] },
  bn: { name: "বাংলা", locale: "bn-IN", recognitionLocales: ["bn-IN", "bn-BD", "bn", "en-IN"], option: "বিকল্প", question: "প্রশ্ন", yes: ["হ্যাঁ", "সঠিক", "ঠিক"], no: ["না", "ভুল"] },
  mr: { name: "मराठी", locale: "mr-IN", recognitionLocales: ["mr-IN", "mr", "hi-IN", "en-IN"], option: "पर्याय", question: "प्रश्न", yes: ["हो", "बरोबर", "योग्य"], no: ["नाही", "चूक", "चुकीचे"] },
  ta: { name: "தமிழ்", locale: "ta-IN", recognitionLocales: ["ta-IN", "ta", "en-IN"], option: "விருப்பம்", question: "கேள்வி", yes: ["ஆம்", "சரி"], no: ["இல்லை", "தவறு"] },
  te: { name: "తెలుగు", locale: "te-IN", recognitionLocales: ["te-IN", "te", "en-IN"], option: "ఎంపిక", question: "ప్రశ్న", yes: ["అవును", "సరైనది"], no: ["కాదు", "తప్పు"] },
  gu: { name: "ગુજરાતી", locale: "gu-IN", recognitionLocales: ["gu-IN", "gu", "hi-IN", "en-IN"], option: "વિકલ્પ", question: "પ્રશ્ન", yes: ["હા", "સાચું"], no: ["ના", "ખોટું"] },
};

const voicePhrases = {
  en: {
    changed: "Language changed to English.",
    loginInstructions: "ClearPath candidate sign in. Enter your email address and password by voice or keyboard, then press Enter on Sign in. You can also use the accessible demo. For support, call 7805027450.",
    listening: "Microphone active. Say option A, B, C, or D.",
    questionOf: (index, total) => `Question ${index} of ${total}.`,
    remaining: (minutes, seconds) => minutes > 0 ? `${minutes} minute${minutes === 1 ? "" : "s"} remaining` : `${seconds} seconds remaining`,
    answer: (letter) => `Answer ${letter} selected.`,
  },
  hi: {
    changed: "भाषा हिंदी में बदल दी गई है।",
    loginInstructions: "क्लियरपाथ उम्मीदवार साइन इन। अपना ईमेल और पासवर्ड बोलकर या टाइप करके भरें, फिर साइन इन दबाएँ। आप सुलभ डेमो भी इस्तेमाल कर सकते हैं। सहायता के लिए 7805027450 पर कॉल करें।",
    listening: "माइक्रोफ़ोन सक्रिय है। विकल्प A, B, C या D बोलें।",
    questionOf: (index, total) => `प्रश्न ${index}, कुल ${total} में से।`,
    remaining: (minutes, seconds) => minutes > 0 ? `${minutes} मिनट शेष` : `${seconds} सेकंड शेष`,
    answer: (letter) => `विकल्प ${letter} चुना गया।`,
  },
  bn: {
    changed: "ভাষা বাংলায় পরিবর্তন করা হয়েছে।",
    loginInstructions: "ক্লিয়ারপাথ প্রার্থী সাইন ইন। ভয়েস বা কীবোর্ড দিয়ে আপনার ইমেল এবং পাসওয়ার্ড লিখুন, তারপর সাইন ইন চাপুন। সাহায্যের জন্য ৭৮০৫০২৭৪৫০ নম্বরে কল করুন।",
    listening: "মাইক্রোফোন সক্রিয়। বিকল্প A, B, C অথবা D বলুন।",
    questionOf: (index, total) => `প্রশ্ন ${index}, মোট ${total}টির মধ্যে।`,
    remaining: (minutes, seconds) => minutes > 0 ? `${minutes} মিনিট বাকি` : `${seconds} সেকেন্ড বাকি`,
    answer: (letter) => `বিকল্প ${letter} নির্বাচিত হয়েছে।`,
  },
  mr: {
    changed: "भाषा मराठीमध्ये बदलली आहे.",
    loginInstructions: "क्लिअरपाथ उमेदवार साइन इन. आवाजाने किंवा कीबोर्डने ईमेल आणि पासवर्ड भरा आणि साइन इन दाबा. मदतीसाठी ७८०५०२७४५० वर कॉल करा.",
    listening: "मायक्रोफोन सुरू आहे. पर्याय A, B, C किंवा D बोला.",
    questionOf: (index, total) => `प्रश्न ${index}, एकूण ${total} पैकी.`,
    remaining: (minutes, seconds) => minutes > 0 ? `${minutes} मिनिटे शिल्लक` : `${seconds} सेकंद शिल्लक`,
    answer: (letter) => `पर्याय ${letter} निवडला आहे.`,
  },
  ta: {
    changed: "மொழி தமிழாக மாற்றப்பட்டது.",
    loginInstructions: "கிளியர்பாத் தேர்வாளர் உள்நுழைவு. குரல் அல்லது விசைப்பலகை மூலம் மின்னஞ்சல் மற்றும் கடவுச்சொல்லை உள்ளிட்டு, உள்நுழைவை அழுத்தவும். உதவிக்கு 7805027450 என்ற எண்ணை அழைக்கவும்.",
    listening: "மைக்ரோஃபோன் செயல்பாட்டில் உள்ளது. விருப்பம் A, B, C அல்லது D என்று சொல்லுங்கள்.",
    questionOf: (index, total) => `கேள்வி ${index}, மொத்தம் ${total}.`,
    remaining: (minutes, seconds) => minutes > 0 ? `${minutes} நிமிடங்கள் மீதம்` : `${seconds} வினாடிகள் மீதம்`,
    answer: (letter) => `விருப்பம் ${letter} தேர்ந்தெடுக்கப்பட்டது.`,
  },
  te: {
    changed: "భాష తెలుగులోకి మార్చబడింది.",
    loginInstructions: "క్లియర్‌పాత్ అభ్యర్థి సైన్ ఇన్. వాయిస్ లేదా కీబోర్డ్‌తో మీ ఇమెయిల్ మరియు పాస్‌వర్డ్ నమోదు చేసి, సైన్ ఇన్ నొక్కండి. సహాయం కోసం 7805027450కు కాల్ చేయండి.",
    listening: "మైక్రోఫోన్ సక్రియంగా ఉంది. ఎంపిక A, B, C లేదా D చెప్పండి.",
    questionOf: (index, total) => `ప్రశ్న ${index}, మొత్తం ${total} లో.`,
    remaining: (minutes, seconds) => minutes > 0 ? `${minutes} నిమిషాలు మిగిలి ఉన్నాయి` : `${seconds} సెకన్లు మిగిలి ఉన్నాయి`,
    answer: (letter) => `ఎంపిక ${letter} ఎంచుకోబడింది.`,
  },
  gu: {
    changed: "ભાષા ગુજરાતીમાં બદલાઈ ગઈ છે.",
    loginInstructions: "ક્લિયરપાથ ઉમેદવાર સાઇન ઇન. વૉઇસ અથવા કીબોર્ડથી તમારું ઇમેઇલ અને પાસવર્ડ દાખલ કરો, પછી સાઇન ઇન દબાવો. મદદ માટે 7805027450 પર કૉલ કરો.",
    listening: "માઇક્રોફોન સક્રિય છે. વિકલ્પ A, B, C અથવા D બોલો.",
    questionOf: (index, total) => `પ્રશ્ન ${index}, કુલ ${total} માંથી.`,
    remaining: (minutes, seconds) => minutes > 0 ? `${minutes} મિનિટ બાકી` : `${seconds} સેકન્ડ બાકી`,
    answer: (letter) => `વિકલ્પ ${letter} પસંદ થયો.`,
  },
};

function getVoicePhrases() {
  return voicePhrases[state.language] || voicePhrases.en;
}

const state = {
  currentView: "dashboard",
  testKey: "ssc",
  questionIndex: 0,
  selected: null,
  saved: false,
  reviewed: new Set(),
  seconds: 300,
  timer: null,
  advanceTimer: null,
  reminderMarks: new Set(),
  answers: [],
  latestResultText: "",
  recognition: null,
  loginRecognition: null,
  loginVoiceField: null,
  loginVoiceConfirming: false,
  speechTimer: null,
  lastSpeechText: "",
  lastSpeechAt: 0,
  speechActive: false,
  audioContext: null,
  returnFocus: null,
  user: null,
  notifications: [],
  knownNotificationIds: new Set((() => { try { return JSON.parse(localStorage.getItem("clearpath-known-notifications") || "[]"); } catch { return []; } })()),
  notificationTimer: null,
  textSize: localStorage.getItem("clearpath-text-size") || "large",
  language: languageCatalog[localStorage.getItem("clearpath-language")] ? localStorage.getItem("clearpath-language") : "en",
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function getCurrentTest() {
  return testCatalog[state.testKey] || testCatalog.ssc;
}

function getCurrentQuestion() {
  const test = getCurrentTest();
  const question = test.questions[state.questionIndex] || test.questions[test.questions.length - 1];
  return {
    ...question,
    content: question[state.language] || question.en,
  };
}

function renderQuestionGraphic(graphic, label = "Mathematical graphic") {
  const container = $("#question-graphic");
  if (!container) return;
  container.innerHTML = "";
  if (!graphic) { container.hidden = true; return; }
  container.hidden = false;
  container.setAttribute("aria-label", label);
  const wrap = document.createElement("div");
  wrap.className = `math-graphic math-graphic-${graphic.type}`;
  if (graphic.type === "triangle") {
    wrap.innerHTML = `<svg viewBox="0 0 520 280" role="img" aria-labelledby="graphic-title graphic-desc"><title id="graphic-title">Triangle diagram</title><desc id="graphic-desc"></desc><polygon points="80,220 440,220 300,55" fill="none" stroke="currentColor" stroke-width="6"/><text x="64" y="242">A</text><text x="445" y="242">B</text><text x="302" y="42">C</text><text x="245" y="245">10 cm</text><text x="310" y="145">6 cm</text></svg>`;
    wrap.querySelector('#graphic-desc').textContent = graphic.desc;
  } else if (graphic.type === "bar") {
    const bars = graphic.values.map((v,i)=>`<g><rect x="${70+i*100}" y="${220-v*12}" width="58" height="${v*12}" rx="8"></rect><text x="${99+i*100}" y="245" text-anchor="middle">${graphic.labels[i]}</text><text x="${99+i*100}" y="${210-v*12}" text-anchor="middle">${v}</text></g>`).join("");
    wrap.innerHTML = `<svg viewBox="0 0 520 280" role="img" aria-labelledby="graphic-title graphic-desc"><title id="graphic-title">Bar chart</title><desc id="graphic-desc"></desc><line x1="60" y1="220" x2="480" y2="220" stroke="currentColor" stroke-width="4"/><line x1="60" y1="40" x2="60" y2="220" stroke="currentColor" stroke-width="4"/>${bars}</svg>`;
    wrap.querySelector('#graphic-desc').textContent = graphic.desc;
  } else if (graphic.type === "numberline") {
    const points = [0,1,2,3,4,5,6,7,8,9,10].map(n=>`<g><circle cx="${50+n*42}" cy="145" r="8"/><text x="${50+n*42}" y="180" text-anchor="middle">${n}</text></g>`).join("");
    wrap.innerHTML = `<svg viewBox="0 0 520 220" role="img" aria-labelledby="graphic-title graphic-desc"><title id="graphic-title">Number line</title><desc id="graphic-desc"></desc><line x1="45" y1="145" x2="475" y2="145" stroke="currentColor" stroke-width="5"/>${points}<path d="M260 105 C300 60 340 60 380 105" fill="none" stroke="currentColor" stroke-width="5" marker-end="url(#arrow)"/><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="currentColor"/></marker></defs></svg>`;
    wrap.querySelector('#graphic-desc').textContent = graphic.desc;
  } else if (graphic.type === "rectangle") {
    wrap.innerHTML = `<svg viewBox="0 0 520 280" role="img" aria-labelledby="graphic-title graphic-desc"><title id="graphic-title">Rectangle diagram</title><desc id="graphic-desc"></desc><rect x="110" y="60" width="300" height="130" fill="none" stroke="currentColor" stroke-width="6"/><text x="235" y="215">12 cm</text><text x="420" y="132">5 cm</text></svg>`;
    wrap.querySelector('#graphic-desc').textContent = graphic.desc;
  } else if (graphic.type === "circle") {
    wrap.innerHTML = `<svg viewBox="0 0 520 280" role="img" aria-labelledby="graphic-title graphic-desc"><title id="graphic-title">Circle diagram</title><desc id="graphic-desc"></desc><circle cx="260" cy="140" r="92" fill="none" stroke="currentColor" stroke-width="6"/><line x1="260" y1="140" x2="352" y2="140" stroke="currentColor" stroke-width="5"/><circle cx="260" cy="140" r="6" fill="currentColor"/><text x="302" y="128">r = 7 cm</text></svg>`;
    wrap.querySelector('#graphic-desc').textContent = graphic.desc;
  } else if (graphic.type === "grid") {
    let lines=""; for(let i=40;i<=480;i+=44) lines+=`<line x1="${i}" y1="30" x2="${i}" y2="250"/>`; for(let y=30;y<=250;y+=44) lines+=`<line x1="40" y1="${y}" x2="480" y2="${y}"/>`;
    wrap.innerHTML = `<svg viewBox="0 0 520 280" role="img" aria-labelledby="graphic-title graphic-desc"><title id="graphic-title">Coordinate grid</title><desc id="graphic-desc"></desc><g stroke="currentColor" opacity=".22">${lines}</g><line x1="40" y1="140" x2="480" y2="140" stroke="currentColor" stroke-width="4"/><line x1="260" y1="30" x2="260" y2="250" stroke="currentColor" stroke-width="4"/><circle cx="348" cy="96" r="9" fill="currentColor"/><text x="360" y="88">(2, 2)</text></svg>`;
    wrap.querySelector('#graphic-desc').textContent = graphic.desc;
  }
  container.appendChild(wrap);
}

function getLanguageName() {
  return languageCatalog[state.language]?.name || languageCatalog.en.name;
}

function getSpeechLocale() {
  return languageCatalog[state.language]?.locale || languageCatalog.en.locale;
}

function getRecognitionLocales() {
  return languageCatalog[state.language]?.recognitionLocales || languageCatalog.en.recognitionLocales;
}

function getRecognitionLocale() {
  return getRecognitionLocales()[0] || getSpeechLocale();
}

function getSpeechVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  const locale = getSpeechLocale().toLowerCase();
  return voices.find((voice) => voice.lang.toLowerCase() === locale)
    || voices.find((voice) => voice.lang.toLowerCase().startsWith(state.language))
    || voices.find((voice) => voice.default)
    || null;
}

function setLanguage(language, announce = true) {
  state.language = languageCatalog[language] ? language : "en";
  localStorage.setItem("clearpath-language", state.language);
  document.documentElement.lang = getSpeechLocale();
  if ($("#test-language")) $("#test-language").value = state.language;
  if ($("#login-language")) $("#login-language").value = state.language;
  if ($("#accessibility-language")) $("#accessibility-language").value = state.language;
  if ($("#login-read-aloud")) {
    $("#login-read-aloud").textContent = state.language === "en"
      ? "◖ Read sign-in instructions aloud"
      : `◖ ${getLanguageName()} voice instructions`;
  }
  if ($("#login-email-voice")) {
    $("#login-email-voice").setAttribute("aria-label", state.language === "en" ? "Enter email address by voice" : `${getLanguageName()} email voice input`);
  }
  if ($("#login-password-voice")) {
    $("#login-password-voice").setAttribute("aria-label", state.language === "en" ? "Enter password by voice" : `${getLanguageName()} password voice input`);
  }
  if ($("#test-modal") && !$("#test-modal").hidden) renderQuestion(true);
  if (announce) {
    speak(getVoicePhrases().changed);
  }
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  announce(message);
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function announce(message) {
  const liveAnnouncer = $("#live-announcer");
  if (!liveAnnouncer) return;
  liveAnnouncer.textContent = "";
  window.setTimeout(() => { liveAnnouncer.textContent = message; }, 20);
}

function playAudioCue(kind = "confirm") {
  if (!$("#audio-toggle")?.checked || !window.AudioContext && !window.webkitAudioContext) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!state.audioContext) state.audioContext = new AudioContext();
  const context = state.audioContext;
  if (context.state === "suspended") context.resume();
  const settings = {
    confirm: { frequency: 660, duration: 0.09, type: "sine" },
    navigate: { frequency: 440, duration: 0.08, type: "triangle" },
    warning: { frequency: 260, duration: 0.18, type: "sawtooth" },
    complete: { frequency: 880, duration: 0.12, type: "sine" },
  }[kind] || { frequency: 660, duration: 0.09, type: "sine" };
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = settings.type;
  oscillator.frequency.value = settings.frequency;
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + settings.duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + settings.duration + 0.02);
}

function speak(text, { onend, force = false, rate = 1.08 } = {}) {
  if (!text) { onend?.(); return; }
  if (!("speechSynthesis" in window)) {
    showToast("Speech support is not available in this browser.");
    onend?.();
    return;
  }
  const now = Date.now();
  if (!force && !onend && text === state.lastSpeechText && now - state.lastSpeechAt < 450) return;
  state.lastSpeechText = text;
  state.lastSpeechAt = now;
  window.clearTimeout(state.speechTimer);
  state.speechActive = false;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = getSpeechLocale();
  utterance.voice = getSpeechVoice();
  utterance.rate = rate;
  utterance.pitch = 1;
  let finished = false;
  const done = () => { if (finished) return; finished = true; state.speechActive = false; onend?.(); };
  utterance.onend = done;
  utterance.onerror = done;
  // Some Chromium builds need a tick after cancel() before accepting a new utterance.
  window.setTimeout(() => {
    state.speechActive = true;
    window.speechSynthesis.speak(utterance);
  }, 20);
}

function readCurrentQuestion({ autoListen = false } = {}) {
  if ($("#test-modal").hidden) return;
  const optionWord = languageCatalog[state.language]?.option || languageCatalog.en.option;
  const question = getCurrentQuestion();
  const options = [...document.querySelectorAll(".answer-option")]
    .map((option, index) => {
      const answerText = option.querySelector("span:not(.answer-letter)")?.textContent?.trim() || "";
      const letter = String.fromCharCode(65 + index);
      return answerText.toUpperCase() === letter
        ? `${optionWord} ${letter}`
        : `${optionWord} ${letter}: ${answerText}`;
    })
    .join(". ");
  const minutes = Math.floor(state.seconds / 60);
  const seconds = state.seconds % 60;
  const remaining = getVoicePhrases().remaining(minutes, seconds);
  const questionNumber = getVoicePhrases().questionOf(state.questionIndex + 1, getCurrentTest().questions.length);
  const visualDescription = question.content.graphic?.desc ? `${question.content.graphic.desc}.` : "";
  const speechText = `${questionNumber} ${$("#test-title").textContent}. ${question.content.mathLabel ? `${question.content.mathLabel}.` : ""} ${visualDescription} ${options}. ${remaining}.`;
  speak(speechText, {
    force: true,
    rate: 0.98,
    onend: () => {
      if (autoListen && !$("#test-modal").hidden && state.selected === null) {
        window.setTimeout(() => startVoiceAnswer({ auto: true }), 120);
      }
    }
  });
}

function setView(viewName) {
  state.currentView = viewName;
  $$(".view").forEach((view) => view.classList.toggle("is-visible", view.id === `${viewName}-view`));
  $$(".nav-item").forEach((item) => {
    const active = item.dataset.view === viewName;
    item.classList.toggle("is-active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  const activeNav = $(`.nav-item[data-view="${viewName}"]`);
  $("#page-title").textContent = activeNav ? activeNav.textContent.trim() : viewName;
  const activeView = $(`#${viewName}-view`);
  activeView?.focus({ preventScroll: true });
  playAudioCue("navigate");
  announce(`${activeNav ? activeNav.textContent.trim() : viewName} view opened.`);
  window.scrollTo({ top: 0, behavior: document.body.classList.contains("reduce-motion") ? "auto" : "smooth" });
}

function openTest(testKey = "ssc") {
  state.returnFocus = document.activeElement;
  const submitConfirmation = $("#submit-confirmation");
  if (submitConfirmation) $("#test-modal").appendChild(submitConfirmation);
  state.testKey = testKey;
  state.questionIndex = 0;
  state.selected = null;
  state.saved = false;
  state.reviewed = new Set();
  state.answers = [];
  state.reminderMarks = new Set();
  state.seconds = getCurrentTest().durationSeconds;
  $("#test-language").value = state.language;
  $("#test-modal").hidden = false;
  document.body.classList.add("modal-open");
  renderQuestion(true);
  startTimer();
  playAudioCue("navigate");
  announce(`${getCurrentTest().label} test started in full screen. ${getCurrentTest().questions.length} questions, ${Math.round(getCurrentTest().durationSeconds / 60)} minutes.`);
  enterTestFullscreen();
  window.setTimeout(() => $(".answer-option")?.focus(), 320);
}

function closeTest() {
  stopVoiceAnswer();
  $("#submit-confirmation").hidden = true;
  const submitConfirmation = $("#submit-confirmation");
  if (submitConfirmation) document.body.appendChild(submitConfirmation);
  window.clearTimeout(state.advanceTimer);
  $("#test-modal").hidden = true;
  document.body.classList.remove("modal-open");
  window.clearInterval(state.timer);
  exitTestFullscreen();
  state.returnFocus?.focus?.({ preventScroll: true });
}

function enterTestFullscreen() {
  const target = $("#test-modal");
  document.body.classList.add("test-fullscreen-fallback");
  if (document.fullscreenElement || !target?.requestFullscreen) return;
  target.requestFullscreen().then(() => {
    document.body.classList.remove("test-fullscreen-fallback");
  }).catch(() => {
    showToast("Browser full screen was unavailable, so the test is using the full window instead.");
  });
}

function exitTestFullscreen() {
  if (document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
  document.body.classList.remove("test-fullscreen-fallback");
}

function renderQuestion(autoRead = true) {
  const question = getCurrentQuestion();
  const test = getCurrentTest();
  state.selected = state.answers[state.questionIndex] ?? null;
  $("#test-subject").textContent = test.subject;
  $("#test-title").textContent = question.content.title;
  const mathContainer = $("#question-math");
  mathContainer.innerHTML = "";
  if (question.content.mathml) {
    mathContainer.innerHTML = question.content.mathml;
    mathContainer.hidden = false;
    mathContainer.setAttribute("aria-label", question.content.mathLabel || "Mathematical expression");
    const spoken = document.createElement("span");
    spoken.className = "sr-only math-spoken-description";
    spoken.textContent = question.content.mathLabel || "Mathematical expression";
    mathContainer.appendChild(spoken);
  } else {
    mathContainer.hidden = true;
    mathContainer.removeAttribute("aria-label");
  }
  renderQuestionGraphic(question.content.graphic, question.content.graphic?.desc || "Mathematical graphic");
  $("#question-count").textContent = `Question ${state.questionIndex + 1} of ${test.questions.length}`;
  $("#question-count").setAttribute("aria-label", state.language === "hi"
    ? `प्रश्न ${state.questionIndex + 1}, कुल ${test.questions.length} में से`
    : `Question ${state.questionIndex + 1} of ${test.questions.length}`);
  announce(getVoicePhrases().questionOf(state.questionIndex + 1, test.questions.length));
  $("#test-progress-fill").style.width = `${((state.questionIndex + 1) / test.questions.length) * 100}%`;
  $(".test-progress").setAttribute("aria-valuenow", String(state.questionIndex + 1));
  renderQuestionPalette();
  $("#previous-question").disabled = state.questionIndex === 0;
  $("#next-question").innerHTML = state.questionIndex === test.questions.length - 1
    ? "Submit test <span aria-hidden=\"true\">✓</span>"
    : "Next question <span aria-hidden=\"true\">→</span>";
  $("#save-question").classList.toggle("is-saved", state.saved);
  $("#save-question").setAttribute("aria-pressed", String(state.saved));
  $("#review-question").classList.toggle("is-reviewed", state.reviewed.has(state.questionIndex));
  $("#review-question").setAttribute("aria-pressed", String(state.reviewed.has(state.questionIndex)));
  $("#review-question").innerHTML = `${state.reviewed.has(state.questionIndex) ? "⚑" : "⚐"} <span>${state.reviewed.has(state.questionIndex) ? "Marked for review" : "Mark for review"}</span>`;
  $("#save-question").innerHTML = `${state.saved ? "★" : "☆"} <span>${state.saved ? "Saved" : "Save question"}</span>`;
  $("#answer-progress").textContent = "";
  $("#timer-announcement").textContent = "";
  const options = $("#answer-options");
  options.innerHTML = "";
  question.content.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "answer-option";
    label.setAttribute("tabindex", "0");
     label.innerHTML = `<input type="radio" name="answer" value="${index}" aria-label="${option}" /><span class="answer-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    const input = label.querySelector("input");
     input.checked = state.selected === index;
    input.addEventListener("change", () => selectAnswer(index));
    label.addEventListener("keydown", (event) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        input.checked = true;
        selectAnswer(index);
      }
    });
     label.classList.toggle("selected", state.selected === index);
    options.appendChild(label);
  });
  if (autoRead) {
    window.setTimeout(() => readCurrentQuestion({ autoListen: true }), 80);
    window.setTimeout(() => $(".answer-option")?.focus(), 320);
  }
}

function renderQuestionPalette() {
  const palette = $("#question-palette-buttons");
  if (!palette) return;
  const test = getCurrentTest();
  palette.innerHTML = "";
  test.questions.forEach((question, index) => {
    const button = document.createElement("button");
    const answered = state.answers[index] !== undefined && state.answers[index] !== null;
    button.type = "button";
    button.className = "question-palette-button";
    button.dataset.questionIndex = String(index);
    button.textContent = String(index + 1);
    button.setAttribute("aria-label", state.language === "hi"
      ? `प्रश्न ${index + 1}${answered ? ", उत्तर दिया गया" : ", उत्तर नहीं दिया गया"}`
      : `Question ${index + 1}${answered ? ", answered" : ", not answered"}`);
    button.setAttribute("aria-current", index === state.questionIndex ? "step" : "false");
    button.classList.toggle("current", index === state.questionIndex);
    button.classList.toggle("answered", answered);
    button.classList.toggle("reviewed", state.reviewed.has(index));
    palette.appendChild(button);
  });
}

function jumpToQuestion(index) {
  const test = getCurrentTest();
  if (index < 0 || index >= test.questions.length || index === state.questionIndex) return;
  window.clearTimeout(state.advanceTimer);
  stopVoiceAnswer();
  state.questionIndex = index;
  state.selected = state.answers[index] ?? null;
  renderQuestion(true);
  playAudioCue("navigate");
}

function queueNextQuestion(afterSpeech = false) {
  window.clearTimeout(state.advanceTimer);
  const advance = () => {
    if (!$("#test-modal").hidden && state.selected !== null) nextQuestion();
  };
  if (afterSpeech) return;
  state.advanceTimer = window.setTimeout(advance, 700);
}

function selectAnswer(index, { fromVoice = false } = {}) {
  const test = getCurrentTest();
  const question = getCurrentQuestion();
  if (index < 0 || index >= question.content.options.length) return;
  window.clearTimeout(state.advanceTimer);
  state.selected = index;
  state.answers[state.questionIndex] = index;
  $$(".answer-option").forEach((option, optionIndex) => option.classList.toggle("selected", optionIndex === index));
  const letter = String.fromCharCode(65 + index);
  const answerText = question.content.options[index] || "";
  const feedback = state.language === "hi"
    ? `विकल्प ${letter} चुना गया। ${answerText}`
    : `Option ${letter} selected. ${answerText}`;
  $("#answer-progress").textContent = feedback;
  announce(feedback);
  if ($("#audio-toggle")?.checked) playAudioCue("confirm");

  // One deterministic flow for mouse, keyboard, and voice: confirm the answer,
  // wait for speech to finish, then move to the next question and read it.
  const advanceAfterConfirmation = () => {
    if ($("#test-modal").hidden || state.selected !== index) return;
    window.setTimeout(() => {
      if (!$("#test-modal").hidden && state.selected === index) nextQuestion();
    }, 120);
  };
  if ($("#speech-toggle")?.checked) {
    speak(feedback, { force: true, rate: 1.0, onend: advanceAfterConfirmation });
  } else {
    advanceAfterConfirmation();
  }
}

function startTimer() {
  window.clearInterval(state.timer);
  updateTimer();
  state.timer = window.setInterval(() => {
    state.seconds -= 1;
    updateTimer();
    if (state.seconds <= 0) {
      window.clearInterval(state.timer);
      playAudioCue("warning");
      showToast("Time is up. Your practice session is being submitted.");
      completeTest();
    }
  }, 1000);
}

function updateTimer() {
  const mins = Math.max(0, Math.floor(state.seconds / 60)).toString().padStart(2, "0");
  const secs = Math.max(0, state.seconds % 60).toString().padStart(2, "0");
  $("#timer-value").textContent = `${mins}:${secs}`;
  $("#timer-value").setAttribute("aria-label", `${mins} minutes ${secs} seconds remaining`);
  const reminderMarks = {
    300: getVoicePhrases().remaining(5, 0),
    180: getVoicePhrases().remaining(3, 0),
    120: getVoicePhrases().remaining(2, 0),
    60: getVoicePhrases().remaining(1, 0),
    30: getVoicePhrases().remaining(0, 30),
    10: getVoicePhrases().remaining(0, 10),
  };
  if ($("#test-modal") && !$("#test-modal").hidden && reminderMarks[state.seconds] && !state.reminderMarks.has(state.seconds)) {
    state.reminderMarks.add(state.seconds);
    playAudioCue("warning");
    $("#timer-announcement").textContent = reminderMarks[state.seconds];
    if ($("#speech-toggle").checked) {
      speak(reminderMarks[state.seconds]);
    }
  }
}

function nextQuestion() {
  window.clearTimeout(state.advanceTimer);
  // The final navigation control is a Submit action. It must always open the
  // safety confirmation, even when the current question is unanswered.
  if (state.questionIndex === getCurrentTest().questions.length - 1) {
    requestSubmitConfirmation();
    return;
  }
  if (state.selected === null) {
    showToast("Choose an answer before moving on.");
    $("#answer-options").querySelector("label")?.focus();
    return;
  }
  state.questionIndex += 1;
  state.selected = null;
  renderQuestion(true);
  window.setTimeout(() => $(".answer-option")?.focus(), 320);
}

function previousQuestion() {
  window.clearTimeout(state.advanceTimer);
  if (state.questionIndex === 0) {
    showToast("You are on the first question.");
    return;
  }
  state.questionIndex -= 1;
  renderQuestion(true);
  playAudioCue("navigate");
  announce(`Question ${state.questionIndex + 1} of ${getCurrentTest().questions.length}.`);
  window.setTimeout(() => $(".answer-option")?.focus(), 320);
}

function completeTest() {
  const test = getCurrentTest();
  const total = test.questions.length;
  const correct = test.questions.reduce((score, question, index) => score + (state.answers[index] === question.answer ? 1 : 0), 0);
  const accuracy = Math.round((correct / total) * 100);
  const resultText = state.language === "hi"
    ? `${test.label} परीक्षा पूरी हुई। आपने ${total} में से ${correct} प्रश्न सही किए। आपकी सटीकता ${accuracy} प्रतिशत है।`
    : `${test.label} test complete. You answered ${correct} out of ${total} correctly. Your accuracy is ${accuracy} percent.`;
  state.latestResultText = resultText;
  $("#result-test-name").textContent = test.label;
  $("#result-detail").textContent = state.language === "hi"
    ? `आपने ${total} में से ${correct} प्रश्न सही किए।`
    : `You answered ${correct} of ${total} questions correctly.`;
  $("#result-accuracy").textContent = `${accuracy}%`;
  $("#latest-result").hidden = false;
  closeTest();
  playAudioCue("complete");
  announce(`${test.label} test complete. ${correct} of ${total} correct.`);
  setView("progress");
  showToast(`${test.label} test complete: ${accuracy}% accuracy.`);
  if ($("#speech-toggle").checked) window.setTimeout(() => speak(resultText), 250);
}

function readOptions() {
  if (!$("#test-modal") || $("#test-modal").hidden) return;
  const options = getCurrentQuestion().content.options.map((option, index) =>
    `Option ${String.fromCharCode(65 + index)}: ${option}`
  ).join(". ");
  speak(options);
}

function setVoiceStatus(message) {
  $("#voice-status").textContent = message;
}

function finishVoiceUi() {
  state.recognition = null;
  $("#voice-answer").classList.remove("is-listening");
  $("#voice-answer").setAttribute("aria-pressed", "false");
}

function stopVoiceAnswer() {
  state.voiceAutoListening = false;
  state.voiceStarting = false;
  if (state.recognition) state.recognition.stop();
  finishVoiceUi();
}

const spokenNumberAliases = {
  zero: "0",
  oh: "0",
  nought: "0",
  nil: "0",
  शून्य: "0",
  शुन्य: "0",
  जीरो: "0",
  एक: "1",
  दो: "2",
  तीन: "3",
  चार: "4",
  জিরো: "0",
  শূন্য: "0",
  এক: "1",
  দুই: "2",
  তিন: "3",
  চার: "4",
  दोन: "2",
  பூஜ்யம்: "0",
  சூனியம்: "0",
  சுழியம்: "0",
  ஒன்று: "1",
  இரண்டு: "2",
  மூன்று: "3",
  நான்கு: "4",
  సున్నా: "0",
  ఒకటి: "1",
  రెండు: "2",
  మూడు: "3",
  నాలుగు: "4",
  શૂન્ય: "0",
  એક: "1",
  બે: "2",
  ત્રણ: "3",
  ચાર: "4",
  one: "1",
  first: "1",
  two: "2",
  second: "2",
  three: "3",
  third: "3",
  four: "4",
  fourth: "4",
  five: "5",
  fifth: "5",
  six: "6",
  sixth: "6",
  seven: "7",
  seventh: "7",
  eight: "8",
  eighth: "8",
  nine: "9",
  ninth: "9",
  ten: "10",
};

function normalizeVoiceText(value) {
  return value.toLowerCase()
    .replace(/[.,!?]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeSpokenNumber(value) {
  return normalizeVoiceText(value)
    .replace(/[₹$,%]/g, "")
    .split(" ")
    .map((part) => spokenNumberAliases[part] || part)
    .join(" ");
}

const voiceLetterAliases = {
  0: ["a", "ए", "ऐ", "এ", "অ", "ஏ", "ఎ", "એ"],
  1: ["b", "बी", "বি", "பி", "బి", "બી"],
  2: ["c", "सी", "সি", "சி", "సి", "સી"],
  3: ["d", "डी", "ডি", "டி", "డి", "ડી"],
};

const voiceAnswerPrefixes = /^(?:option|answer|choice|विकल्प|उत्तर|पर्याय|বিকল্প|উত্তর|விருப்பம்|பதில்|ఎంపిక|సమాధానం|વિકલ્પ|જવાબ)\s+/i;

function findVoiceAnswer(transcript) {
  const normalized = normalizeVoiceText(transcript);
  const letterMatch = normalized.match(/\b(?:option|answer|choice)?\s*([abcd])(?:\s+\1)?\b/);
  if (letterMatch) return letterMatch[1].charCodeAt(0) - 97;
  const withoutPrefix = normalized.replace(voiceAnswerPrefixes, "");
  const localizedLetterIndex = Object.entries(voiceLetterAliases).find(([, aliases]) => aliases.some((alias) => {
    return withoutPrefix === alias || withoutPrefix === `${alias} ${alias}` || normalized.endsWith(` ${alias}`);
  }));
  if (localizedLetterIndex) return Number(localizedLetterIndex[0]);
  const options = getCurrentQuestion().content.options;
  const spokenValue = normalizeSpokenNumber(withoutPrefix);
  const textIndex = options.findIndex((option) => {
    const optionValue = normalizeSpokenNumber(option);
    return spokenValue === optionValue
      || normalized === normalizeVoiceText(option)
      || normalized.includes(normalizeVoiceText(option));
  });
  return textIndex;
}

function startVoiceAnswer({ auto = false } = {}) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    setVoiceStatus(state.language === "hi"
      ? "इस ब्राउज़र में वॉइस उत्तर उपलब्ध नहीं है। Chrome या Edge का उपयोग करें।"
      : "Voice answers are not supported in this browser. Try Chrome or Edge.");
    if (auto) state.voiceAutoListening = false;
    return;
  }
  if (state.recognition) {
    if (auto) return;
    stopVoiceAnswer();
    setVoiceStatus(state.language === "hi" ? "वॉइस इनपुट बंद है।" : "Voice input stopped.");
    return;
  }

  state.voiceAutoListening = auto || state.voiceAutoListening;
  state.voiceStarting = true;
  const recognition = new Recognition();
  state.recognition = recognition;
  recognition.lang = getRecognitionLocale();
  recognition.interimResults = false;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    state.voiceStarting = false;
    $("#voice-answer").classList.add("is-listening");
    $("#voice-answer").setAttribute("aria-pressed", "true");
    setVoiceStatus(getVoicePhrases().listening);
    playAudioCue("confirm");
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.trim();
    const normalized = normalizeVoiceText(transcript);
    const skipWords = state.language === "hi"
      ? ["skip", "स्किप", "छोड़ो", "छोड़", "अगला", "आगे"]
      : ["skip", "skip question", "next", "next question"];

    if (skipWords.some((word) => normalized === normalizeVoiceText(word) || normalized.includes(normalizeVoiceText(word)))) {
      state.voiceAutoListening = false;
      stopVoiceAnswer();
      setVoiceStatus(state.language === "hi" ? "प्रश्न छोड़ा गया।" : "Question skipped.");
      nextQuestion();
      return;
    }

    const answerIndex = findVoiceAnswer(transcript);
    if (answerIndex >= 0 && answerIndex < getCurrentQuestion().content.options.length) {
      state.voiceAutoListening = false;
      selectAnswer(answerIndex, { fromVoice: true });
      setVoiceStatus(state.language === "hi"
        ? `“${transcript}” सुना। विकल्प ${String.fromCharCode(65 + answerIndex)} चुना गया।`
        : `Heard “${transcript}”. Answer ${String.fromCharCode(65 + answerIndex)} selected.`);
      return;
    }

    setVoiceStatus(state.language === "hi"
      ? `“${transcript}” समझा नहीं गया। A, B, C या D बोलें, या स्किप बोलें।`
      : `I heard “${transcript}”, but could not match it. Say A, B, C, D, or skip.`);
  };

  recognition.onerror = (event) => {
    state.voiceStarting = false;
    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      state.voiceAutoListening = false;
      setVoiceStatus(state.language === "hi"
        ? "माइक्रोफ़ोन की अनुमति नहीं मिली।"
        : "Microphone permission was denied.");
      showToast(state.language === "hi" ? "वॉइस उत्तर के लिए माइक्रोफ़ोन की अनुमति दें।" : "Allow microphone access to answer by voice.");
    } else if (event.error !== "aborted" && state.voiceAutoListening && !$("#test-modal").hidden && state.selected === null) {
      setVoiceStatus(state.language === "hi" ? "फिर से सुन रहा हूँ…" : "Listening again…");
      window.setTimeout(() => startVoiceAnswer({ auto: true }), 180);
    }
  };

  recognition.onend = () => {
    state.recognition = null;
    state.voiceStarting = false;
    $("#voice-answer").classList.remove("is-listening");
    $("#voice-answer").setAttribute("aria-pressed", "false");

    if (state.voiceAutoListening && !$("#test-modal").hidden && state.selected === null) {
      window.setTimeout(() => startVoiceAnswer({ auto: true }), 140);
    } else if (!state.voiceAutoListening) {
      setVoiceStatus(state.language === "hi" ? "वॉइस उत्तर तैयार है।" : "Voice answer ready.");
    }
  };

  try {
    recognition.start();
  } catch (error) {
    state.recognition = null;
    state.voiceStarting = false;
    if (state.voiceAutoListening) {
      window.setTimeout(() => startVoiceAnswer({ auto: true }), 220);
    } else {
      setVoiceStatus(state.language === "hi" ? "वॉइस इनपुट शुरू नहीं हो सका।" : "Voice input could not start.");
    }
  }
}

function finishLoginVoice() {
  state.loginRecognition = null;
  state.loginVoiceField = null;
  $$(".field-voice-button").forEach((button) => {
    button.classList.remove("is-listening");
    button.setAttribute("aria-pressed", "false");
  });
}

const spokenDigitReplacements = {
  zero: "0",
  oh: "0",
  nought: "0",
  शून्य: "0",
  शुन्य: "0",
  जीरो: "0",
  জিরো: "0",
  শূন্য: "0",
  சுழியம்: "0",
  சுனியம்: "0",
  సున్నా: "0",
  શૂન્ય: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function replaceSpokenDigits(value) {
  return value.replace(/\b(?:zero|oh|nought|one|two|three|four|five|six|seven|eight|nine)\b|शून्य|शुन्य|जीरो|জিরো|শূন্য|சுழியம்|சுனியம்|సున్నా|શૂન્ય/giu, (spoken) => spokenDigitReplacements[spoken.toLowerCase()] || spokenDigitReplacements[spoken] || spoken);
}

function normalizeEmailTranscript(transcript) {
  let normalized = replaceSpokenDigits(transcript)
    .toLowerCase()
    .replace(/^(?:my\s+)?(?:email\s+address|email)\s+(?:is|equals)\s+/i, "")
    .replace(/(?:\s+at\s+|\s*@\s*| एट | एटदरेट | at the rate | অ্যাট | अॅट | அட் | ఎట్ | એટ )/gi, "@")
    .replace(/(?:\s+dot\s+|\s*\.\s*| डॉट | बिंदु | ডট | டாட் | డాట్ | ડોટ )/gi, ".")
    .replace(/(?:\s+dash\s+| डैश | ড্যাশ | டாஷ் | డాష్ | ડૅશ )/gi, "-")
    .replace(/(?:\s+underscore\s+| अंडरस्कोर | আন্ডারস্কোর | அண்டர்ஸ்கோர் | అండర్‌స్కోర్ | અન્ડરસ્કોર )/gi, "_")
    .replace(/(?:\s+space\s+| स्पेस | স্পেস | ஸ்பேஸ் | స్పేస్ | સ્પેસ )/gi, "");
  return normalized.replace(/\s+/g, "");
}

function getLoginSpeechValue(fieldId, value) {
  if (fieldId === "login-email") {
    return value.replace(/@/g, state.language === "hi" ? " एट " : " at ")
      .replace(/\./g, state.language === "hi" ? " डॉट " : " dot ");
  }
  return value;
}

function isVoiceConfirmationYes(transcript) {
  const normalized = transcript.toLowerCase().replace(/[.,!?]/g, " ").replace(/\s+/g, " ").trim();
  const accepted = new Set([
    ...(languageCatalog[state.language]?.yes || []),
    ...languageCatalog.en.yes,
    "true",
    "बिल्कुल",
  ]);
  return accepted.has(normalized);
}

function isVoiceConfirmationNo(transcript) {
  const normalized = transcript.toLowerCase().replace(/[.,!?]/g, " ").replace(/\s+/g, " ").trim();
  const rejected = new Set([
    ...(languageCatalog[state.language]?.no || []),
    ...languageCatalog.en.no,
    "false",
    "not correct",
    "फिर से",
    "दोबारा",
  ]);
  return rejected.has(normalized);
}

function startLoginConfirmation(fieldId, buttonId, value) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) return;
  state.loginVoiceConfirming = true;
  const label = fieldId === "login-email"
    ? (state.language === "hi" ? "ईमेल" : "email address")
    : (state.language === "hi" ? "पासवर्ड" : "password");
  const spokenValue = getLoginSpeechValue(fieldId, value);
  const prompt = state.language === "hi"
    ? `मैंने ${label} ${spokenValue} सुना। क्या यह सही है? सही या गलत बोलें।`
    : `I heard your ${label} as ${spokenValue}. Is that correct? Say yes or no.`;
  speak(prompt, { onend: () => {
    if (state.loginVoiceConfirming) listenForLoginConfirmation(fieldId, buttonId);
  }});
}

function listenForLoginConfirmation(fieldId, buttonId) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new Recognition();
  state.loginRecognition = recognition;
  recognition.lang = getRecognitionLocale();
  recognition.interimResults = false;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;
  recognition.onstart = () => {
    const button = $(`#${buttonId}`);
    button.classList.add("is-listening");
    button.setAttribute("aria-pressed", "true");
    $("#login-voice-status").textContent = state.language === "hi"
      ? "सही या गलत बोलिए।"
      : "Say yes if it is correct, or no to enter it again.";
  };
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.trim();
    finishLoginVoice();
    if (isVoiceConfirmationYes(transcript)) {
      state.loginVoiceConfirming = false;
      $("#login-voice-status").textContent = state.language === "hi" ? "जानकारी सही मानी गई।" : "Details confirmed.";
      speak(state.language === "hi" ? "जानकारी सही मानी गई।" : "Details confirmed.");
      return;
    }
    if (isVoiceConfirmationNo(transcript)) {
      state.loginVoiceConfirming = false;
      const input = $(`#${fieldId}`);
      input.value = "";
      input.focus();
      const retryMessage = state.language === "hi"
        ? "ठीक है। इसे फिर से बोलिए।"
        : "Okay. Please say it again.";
      $("#login-voice-status").textContent = retryMessage;
      speak(retryMessage, { onend: () => startLoginVoice(fieldId, buttonId) });
      return;
    }
    state.loginVoiceConfirming = false;
    const unclearMessage = state.language === "hi"
      ? "मैंने सही या गलत स्पष्ट रूप से नहीं सुना। फिर से कोशिश करें।"
      : "I did not hear yes or no clearly. Please try again.";
    $("#login-voice-status").textContent = unclearMessage;
    speak(unclearMessage);
  };
  recognition.onerror = (event) => {
    finishLoginVoice();
    if (event.error !== "aborted") {
      state.loginVoiceConfirming = false;
      showToast(state.language === "hi" ? "पुष्टि सुनाई नहीं दी। फिर से कोशिश करें।" : "I could not hear the confirmation. Try again.");
    }
  };
  recognition.onend = () => {
    if (state.loginRecognition === recognition) finishLoginVoice();
  };
  try {
    recognition.start();
  } catch {
    finishLoginVoice();
    state.loginVoiceConfirming = false;
    showToast(state.language === "hi" ? "पुष्टि फिर से आज़माएँ।" : "Try the confirmation again.");
  }
}

function startLoginVoice(fieldId, buttonId) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    showToast(state.language === "hi"
      ? "इस ब्राउज़र में आवाज़ से लिखना उपलब्ध नहीं है। Chrome या Edge आज़माएँ।"
      : "Voice typing is not supported in this browser. Try Chrome or Edge.");
    return;
  }
  if (state.loginRecognition) {
    state.loginRecognition.stop();
    finishLoginVoice();
    return;
  }
  state.loginVoiceConfirming = false;
  const recognition = new Recognition();
  state.loginRecognition = recognition;
  state.loginVoiceField = fieldId;
  recognition.lang = getRecognitionLocale();
  recognition.interimResults = false;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;
  recognition.onstart = () => {
    const button = $(`#${buttonId}`);
    button.classList.add("is-listening");
    button.setAttribute("aria-pressed", "true");
    $("#login-voice-status").textContent = state.language === "en"
      ? "Microphone active. Speak now."
      : `${getLanguageName()} voice input active. Speak now.`;
    playAudioCue("confirm");
  };
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.trim();
    const input = $(`#${fieldId}`);
    const value = fieldId === "login-email" ? normalizeEmailTranscript(transcript) : replaceSpokenDigits(transcript);
    input.value = value;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.focus();
    finishLoginVoice();
    $("#login-voice-status").textContent = state.language === "hi"
      ? `${fieldId === "login-email" ? "ईमेल" : "पासवर्ड"} सुना गया। पुष्टि की प्रतीक्षा है।`
      : `${fieldId === "login-email" ? "Email address" : "Password"} heard. Waiting for confirmation.`;
    startLoginConfirmation(fieldId, buttonId, value);
  };
  recognition.onerror = (event) => {
    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      showToast(state.language === "hi"
        ? "आवाज़ से लिखने के लिए माइक्रोफ़ोन की अनुमति दें।"
        : "Allow microphone access to use voice typing.");
    } else if (event.error !== "aborted") {
      showToast(state.language === "hi" ? "आवाज़ इनपुट फिर से आज़माएँ।" : "Voice input could not start. Try again.");
    }
  };
  recognition.onend = () => {
    if (state.loginRecognition === recognition) finishLoginVoice();
  };
  try {
    recognition.start();
  } catch {
    finishLoginVoice();
    showToast(state.language === "hi" ? "आवाज़ इनपुट फिर से आज़माएँ।" : "Try voice input again.");
  }
}


function getExamStats() {
  const total = getCurrentTest().questions.length;
  const answered = state.answers.filter((value) => value !== undefined && value !== null).length;
  return { total, answered, unanswered: total - answered, reviewed: state.reviewed.size, remaining: state.seconds };
}
function formatRemaining(seconds) {
  const m = Math.floor(Math.max(0, seconds) / 60), s = Math.max(0, seconds) % 60;
  return `${m} minute${m === 1 ? "" : "s"} and ${s} second${s === 1 ? "" : "s"}`;
}
function requestSubmitConfirmation() {
  if ($("#test-modal").hidden) return;
  const s = getExamStats();
  const text = state.language === "hi"
    ? `आपने ${s.total} में से ${s.answered} प्रश्नों के उत्तर दिए हैं। ${s.unanswered} प्रश्न बिना उत्तर के हैं और ${s.reviewed} प्रश्न review के लिए marked हैं। ${formatRemaining(s.remaining)} बाकी है। क्या आप परीक्षा submit करना चाहते हैं?`
    : `You have answered ${s.answered} of ${s.total} questions. ${s.unanswered} are unanswered and ${s.reviewed} are marked for review. ${formatRemaining(s.remaining)} remaining. Are you sure you want to submit your exam?`;
  $("#submit-confirm-summary").textContent = text;
  $("#submit-confirm-live").textContent = text;
  $("#submit-confirmation").hidden = false;
  $("#cancel-submit").focus();
  speak(text);
}
function cancelSubmitConfirmation() {
  $("#submit-confirmation").hidden = true;
  $("#next-question").focus();
  const msg = state.language === "hi" ? "ठीक है। परीक्षा जारी रखें।" : "Okay. Continue your exam.";
  announce(msg); speak(msg);
}
function confirmSubmitExam() {
  $("#submit-confirmation").hidden = true;
  completeTest();
}
function increaseTextSize() {
  const order = ["large","xlarge","xxlarge","maximum"];
  const i = Math.max(0, order.indexOf(state.textSize));
  applyTextSize(order[Math.min(order.length - 1, i + 1)]);
  const msg = state.language === "hi" ? "टेक्स्ट बड़ा किया गया।" : "Text size increased.";
  announce(msg); speak(msg);
}
function decreaseTextSize() {
  const order = ["large","xlarge","xxlarge","maximum"];
  const i = Math.max(0, order.indexOf(state.textSize));
  applyTextSize(order[Math.max(0, i - 1)]);
  const msg = state.language === "hi" ? "टेक्स्ट छोटा किया गया।" : "Text size decreased.";
  announce(msg); speak(msg);
}
function setAccessibilityTheme(theme) {
  const allowed = ["standard","red-green","green-red","blue-yellow","yellow-blue","monochrome","dark-high"];
  if (!allowed.includes(theme)) theme = "standard";
  document.body.dataset.colorTheme = theme;
  localStorage.setItem("clearpath-color-theme", theme);
  if (theme === "dark-high") {
    $("#dark-toggle").checked = true;
    document.body.classList.add("dark-theme");
    localStorage.setItem("clearpath-dark","true");
  }
  $$(".theme-choice").forEach((b) => {
    const selected = b.dataset.themeChoice === theme;
    b.setAttribute("aria-selected", String(selected));
    b.querySelector("b").textContent = selected ? "Selected" : "Select";
  });
  announce(`Accessibility colour theme changed to ${theme}.`);
}
function applySavedAccessibilityTheme() {
  setAccessibilityTheme(localStorage.getItem("clearpath-color-theme") || "standard");
}

function saveUser(user, remember) {
  const storage = remember ? localStorage : sessionStorage;
  storage.setItem("clearpath-user", JSON.stringify(user));
}

function readSavedUser() {
  for (const storage of [sessionStorage, localStorage]) {
    const saved = storage.getItem("clearpath-user");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        storage.removeItem("clearpath-user");
      }
    }
  }
  return null;
}

function showApp(user) {
  state.user = user;
  $("#login-screen").hidden = true;
  $("#app-shell").hidden = false;
  $("#profile-name").textContent = user.name;
  $("#dashboard-candidate-name").textContent = user.name;
  $("#logout-button").setAttribute("aria-label", `Sign out of ${user.name}`);
}

function readLoginInstructions() {
  speak(getVoicePhrases().loginInstructions);
}

function showLogin() {
  state.user = null;
  $("#app-shell").hidden = true;
  $("#login-screen").hidden = false;
  setLanguage(state.language, false);
  window.setTimeout(() => {
    $("#login-email").focus();
    readLoginInstructions();
  }, 250);
}

function signIn(email, password, remember = false) {
  const trimmedEmail = email.trim();
  if (!trimmedEmail || !trimmedEmail.includes("@")) {
    $("#login-status").textContent = "Enter a valid email address.";
    $("#login-email").focus();
    return;
  }
  if (password.length < 4) {
    $("#login-status").textContent = "Your password must be at least 4 characters.";
    $("#login-password").focus();
    return;
  }
  const localName = trimmedEmail.split("@")[0].replace(/[._-]+/g, " ").trim();
  const name = localName ? localName.replace(/\b\w/g, (letter) => letter.toUpperCase()) : "ClearPath candidate";
  const user = { name, email: trimmedEmail };
  saveUser(user, remember);
  $("#login-status").textContent = "";
  showApp(user);
  showToast(`Welcome back, ${name}.`);
}

function applyPreferences() {
  const savedTheme = localStorage.getItem("clearpath-dark");
  const savedContrast = localStorage.getItem("clearpath-contrast");
  const savedMotion = localStorage.getItem("clearpath-motion");
  const savedSpeech = localStorage.getItem("clearpath-speech");
  const savedAudio = localStorage.getItem("clearpath-audio");
  if (savedTheme === "true") { $("#dark-toggle").checked = true; document.body.classList.add("dark-theme"); }
  if (savedContrast === "true") { $("#contrast-toggle").checked = true; document.body.classList.add("high-contrast"); }
  if (savedMotion === "true") { $("#motion-toggle").checked = true; document.body.classList.add("reduce-motion"); }
  $("#speech-toggle").checked = savedSpeech !== "false";
  $("#audio-toggle").checked = savedAudio !== "false";
  setLanguage(state.language, false);
  applyTextSize(localStorage.getItem("clearpath-text-size") || "large");
  applySavedAccessibilityTheme();
}

function applyTextSize(size) {
  const values = {
    large: { fontSize: "18px", scale: "1.125", label: "Large" },
    xlarge: { fontSize: "22px", scale: "1.375", label: "Extra Large" },
    xxlarge: { fontSize: "27px", scale: "1.6875", label: "Very Large" },
    maximum: { fontSize: "32px", scale: "2", label: "Maximum (200%)" },
  };
  const selected = values[size] || values.large;
  const root = document.documentElement;
  root.style.setProperty("--font-size", selected.fontSize);
  root.style.setProperty("--font-scale", selected.scale);
  root.dataset.textSize = size in values ? size : "large";
  state.textSize = root.dataset.textSize;
  localStorage.setItem("clearpath-text-size", state.textSize);
  document.querySelectorAll("[data-text-size]").forEach((button) => {
    const active = button.dataset.textSize === state.textSize;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const live = document.getElementById("dashboard-font-size-live");
  if (live) live.textContent = selected.label;
}

function readPageSummary() {
  if (state.language === "hi") {
    speak("यह क्लियरपाथ कार्यक्षेत्र है। यहाँ आप परीक्षा अभ्यास, अपनी प्रगति, सहेजे गए प्रश्न और सहायता विकल्प देख सकते हैं।");
    return;
  }
  speak(document.querySelector(".view.is-visible")?.innerText.slice(0, 450) || "ClearPath workspace");
}

async function refreshNotifications({ announceNew = true } = {}) {
  try {
    const response = await fetch("notifications.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Notification feed unavailable");
    const payload = await response.json();
    const now = Date.now();
    state.notifications = Array.isArray(payload.tests)
      ? payload.tests.filter(item => !item.availableAt || new Date(item.availableAt).getTime() <= now)
      : [];
    const newItems = state.notifications.filter(item => !state.knownNotificationIds.has(item.id));
    newItems.forEach(item => state.knownNotificationIds.add(item.id));
    localStorage.setItem("clearpath-known-notifications", JSON.stringify([...state.knownNotificationIds]));
    renderNotifications();
    const badge = $("#notifications-button");
    if (badge) badge.classList.toggle("has-dot", state.notifications.length > 0);
    if (announceNew && newItems.length) {
      const item = newItems[0];
      showToast(`New test available: ${item.title}`);
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("ClearPath — New test", { body: item.message });
      }
    }
  } catch {
    renderNotifications();
  }
}

function renderNotifications() {
  const list = $("#notifications-list");
  if (!list) return;
  if (!state.notifications.length) {
    list.innerHTML = `<p class="notification-empty">No new test notifications.</p>`;
    return;
  }
  list.innerHTML = state.notifications.map(item => `<article class="notification-item"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.message)}</p><small>Available ${new Date(item.availableAt).toLocaleString()}</small><button class="outline-button compact" type="button" data-notification-test="${escapeHtml(item.testKey || "ssc")}">Open test</button></article>`).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[char]));
}

async function openNotifications() {
  await refreshNotifications({ announceNew: false });
  $("#notifications-panel").hidden = false;
  $("#notifications-button").setAttribute("aria-expanded", "true");
  $("#close-notifications").focus();
  if ("Notification" in window && Notification.permission === "default") {
    try { await Notification.requestPermission(); } catch {}
  }
}

function closeNotifications() {
  $("#notifications-panel").hidden = true;
  $("#notifications-button").setAttribute("aria-expanded", "false");
  $("#notifications-button").focus();
}

function filterPracticeCards(filterValue) {
  $$(".library-card").forEach((card) => {
    card.hidden = filterValue !== "all" && card.dataset.testCard !== filterValue;
  });
  $$(".filter-pill").forEach((pill) => {
    const selected = pill.dataset.filter === filterValue;
    pill.classList.toggle("selected", selected);
    pill.setAttribute("aria-pressed", String(selected));
  });
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  if (nav) setView(nav.dataset.view);
  const target = event.target.closest("[data-view-target]");
  if (target) setView(target.dataset.viewTarget);
  const action = event.target.closest("[data-action]");
  if (action) {
    const { action: type, test } = action.dataset;
    if (type === "open-practice") setView("practice");
    if (type === "start-test") openTest(test || "ssc");
    if (type === "resume-test") openTest(test || "ssc");
  }
  const filter = event.target.closest(".filter-pill");
  if (filter) {
    filterPracticeCards(filter.dataset.filter || "all");
    showToast(`${filter.textContent.trim()} selected`);
  }
  const paletteButton = event.target.closest(".question-palette-button");
  if (paletteButton) jumpToQuestion(Number(paletteButton.dataset.questionIndex));
  const notificationTest = event.target.closest("[data-notification-test]");
  if (notificationTest) { closeNotifications(); openTest(notificationTest.dataset.notificationTest || "ssc"); }
});

$("#contrast-toggle").addEventListener("change", (event) => {
  document.body.classList.toggle("high-contrast", event.target.checked);
  localStorage.setItem("clearpath-contrast", event.target.checked);
});
$("#dark-toggle").addEventListener("change", (event) => {
  document.body.classList.toggle("dark-theme", event.target.checked);
  localStorage.setItem("clearpath-dark", event.target.checked);
});
$("#motion-toggle").addEventListener("change", (event) => {
  document.body.classList.toggle("reduce-motion", event.target.checked);
  localStorage.setItem("clearpath-motion", event.target.checked);
});
$("#speech-toggle").addEventListener("change", (event) => {
  localStorage.setItem("clearpath-speech", event.target.checked);
  if (event.target.checked) {
    showToast("Questions will be read aloud.");
  } else {
    window.speechSynthesis?.cancel();
    showToast("Read questions aloud is turned off.");
  }
});
$("#audio-toggle").addEventListener("change", (event) => {
  localStorage.setItem("clearpath-audio", event.target.checked);
  showToast(event.target.checked ? "Audio feedback is on." : "Audio feedback is off.");
});
$$("[data-text-size]").forEach((button) => button.addEventListener("click", () => applyTextSize(button.dataset.textSize)));
$("#read-support").addEventListener("click", () => speak(state.language === "hi"
  ? "स्वतंत्र उपयोग के लिए बनाया गया। क्लियरपाथ स्क्रीन रीडर, केवल कीबोर्ड नेविगेशन, स्पष्ट फ़ोकस और हर अभ्यास परीक्षा में अर्थपूर्ण शीर्षकों का समर्थन करता है।"
  : "Designed for independent use. ClearPath supports screen readers, keyboard-only navigation, visible focus states, and semantic headings throughout every practice test."));
$("#announce-button").addEventListener("click", readPageSummary);
$("#read-question").addEventListener("click", () => readCurrentQuestion());
$("#test-language").addEventListener("change", (event) => setLanguage(event.target.value));
$("#login-language").addEventListener("change", (event) => setLanguage(event.target.value));
$("#accessibility-language").addEventListener("change", (event) => setLanguage(event.target.value));
$("#save-question").addEventListener("click", () => {
  state.saved = !state.saved;
  renderQuestion(false);
  playAudioCue("confirm");
  showToast(state.saved ? "Question saved for later." : "Question removed from saved.");
});
$("#voice-answer").addEventListener("click", startVoiceAnswer);
$("#login-email-voice").addEventListener("click", () => startLoginVoice("login-email", "login-email-voice"));
$("#login-password-voice").addEventListener("click", () => startLoginVoice("login-password", "login-password-voice"));
$("#next-question").addEventListener("click", nextQuestion);
$("#previous-question").addEventListener("click", previousQuestion);
$("#read-result").addEventListener("click", () => {
  if (state.latestResultText) speak(state.latestResultText);
});
$("#login-read-aloud").addEventListener("click", readLoginInstructions);
$(".close-test").addEventListener("click", closeTest);
$("#test-modal").addEventListener("click", (event) => { if (event.target.id === "test-modal") closeTest(); });
function getFocusReadableName(element) {
  if (!element || element === document.body) return "";
  const aria = element.getAttribute("aria-label") || element.getAttribute("aria-labelledby");
  let label = element.getAttribute("aria-label") || "";
  if (!label && element.getAttribute("aria-labelledby")) {
    label = element.getAttribute("aria-labelledby").split(/\s+/).map(id => document.getElementById(id)?.textContent?.trim()).filter(Boolean).join(" ");
  }
  if (!label && element.tagName === "INPUT") {
    const associated = element.id ? document.querySelector(`label[for="${CSS.escape(element.id)}"]`) : element.closest("label");
    label = associated?.textContent?.trim() || element.placeholder || element.name || "Input";
  }
  if (!label) label = element.textContent?.replace(/\s+/g, " ").trim() || "";
  if (!label && aria) label = aria;
  return label.slice(0, 220);
}

let focusReaderTimer = null;
let lastFocusedElement = null;
document.addEventListener("focusin", (event) => {
  const el = event.target;
  if (!el.matches('button, a, input, select, textarea, [role=button], [role=option], [role=tab], .answer-option, [tabindex]:not([tabindex="-1"])')) return;
  if (el === lastFocusedElement && document.visibilityState !== "hidden") return;
  lastFocusedElement = el;
  window.clearTimeout(focusReaderTimer);
  focusReaderTimer = window.setTimeout(() => {
    if (state.speechActive || window.speechSynthesis?.speaking) return;
    const name = getFocusReadableName(el);
    if (!name) return;
    const checked = el.getAttribute("aria-checked") === "true" || (el.matches("input[type=radio],input[type=checkbox]") && el.checked);
    const pressed = el.getAttribute("aria-pressed") === "true";
    const stateText = checked ? ", selected" : pressed ? ", pressed" : "";
    speak(name + stateText);
  }, 45);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && !$("#test-modal").hidden) {
    const focusable = [...$("#test-modal").querySelectorAll("button, select, input, [tabindex]:not([tabindex='-1'])")]
      .filter((element) => !element.disabled && element.offsetParent !== null);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  if (event.altKey && event.key.toLowerCase() === "r" && !$("#test-modal").hidden) {
    event.preventDefault();
    $("#read-question").click();
  }
  if (event.key === "Escape" && !$("#notifications-panel").hidden) { event.preventDefault(); closeNotifications(); return; }
  if (event.key === "Escape" && !$("#test-modal").hidden) closeTest();
});

$("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  signIn($("#login-email").value, $("#login-password").value, $("#remember-me").checked);
});
$("#demo-login").addEventListener("click", () => {
  const user = { name: "Alex Nair", email: "alex@example.com" };
  saveUser(user, false);
  $("#login-status").textContent = "";
  showApp(user);
  playAudioCue("confirm");
  showToast("Demo access enabled.");
});
$("#password-toggle").addEventListener("click", () => {
  const password = $("#login-password");
  const visible = password.type === "text";
  password.type = visible ? "password" : "text";
  $("#password-toggle").textContent = visible ? "Show" : "Hide";
  $("#password-toggle").setAttribute("aria-label", visible ? "Show password" : "Hide password");
});
$("#forgot-password").addEventListener("click", () => {
  $("#login-status").textContent = "Password reset support is available through your institution.";
});
$("#logout-button").addEventListener("click", () => {
  sessionStorage.removeItem("clearpath-user");
  localStorage.removeItem("clearpath-user");
  closeTest();
  showLogin();
  showToast("You have been signed out.");
});


$("#review-question").addEventListener("click", () => {
  state.reviewed.has(state.questionIndex) ? state.reviewed.delete(state.questionIndex) : state.reviewed.add(state.questionIndex);
  renderQuestion(false); renderQuestionPalette();
  const msg = state.reviewed.has(state.questionIndex) ? "Question marked for review." : "Question removed from review.";
  showToast(msg); announce(msg); playAudioCue("confirm");
});

$("#enable-notifications")?.addEventListener("click", async () => {
  if (!("Notification" in window)) { showToast("Browser notifications are not supported here."); return; }
  const permission = await Notification.requestPermission();
  showToast(permission === "granted" ? "New test notifications are enabled." : "Notification permission was not granted.");
});
$("#notifications-button").addEventListener("click", openNotifications);
$("#close-notifications").addEventListener("click", closeNotifications);
$("#notifications-panel").addEventListener("click", (event) => { if (event.target.id === "notifications-panel") closeNotifications(); });

$("#cancel-submit").addEventListener("click", cancelSubmitConfirmation);
$("#confirm-submit").addEventListener("click", confirmSubmitExam);
$("#submit-confirmation").addEventListener("keydown", (event) => {
  if (event.key === "Escape") { event.preventDefault(); cancelSubmitConfirmation(); }
});
$$(".theme-choice").forEach((button)=>button.addEventListener("click",()=>setAccessibilityTheme(button.dataset.themeChoice)));
$("#test-modal").addEventListener("keydown",(e)=>{ if(!$("#submit-confirmation").hidden && e.key==="Enter") e.stopPropagation(); });
applyPreferences();
refreshNotifications({ announceNew: false });
state.notificationTimer = window.setInterval(() => refreshNotifications({ announceNew: true }), 30000);
const savedUser = readSavedUser();
if (savedUser) showApp(savedUser);
else showLogin();

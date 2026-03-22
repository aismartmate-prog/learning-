// ========================================================================
// שכבת גיל: כיתה ט' | נושא: חזקות ושורשים (48 שאלות מלאות)
// קובץ: grade9_powers_and_roots.js
// >>> גרסה 2.5 פרימיום - מהדורה יציבה, גופן מתמטי ענק, פתרונות מפורטים <<<
// חוקי ברזל שיושמו: 
// 1. שימוש ב-\dfrac לשברים גדולים וקריאים.
// 2. אפס עברית בתוך math_expression (סטריליות מוחלטת).
// 3. ללא איורים מיותרים, למניעת עומס וקריסות.
// 4. ללא עטיפת מילים במערך התשובות והאפשרויות.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: חוקי חזקות עם מעריך טבעי ואפס (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך טבעי ואפס",
        question_text: "פשטו את הביטוי האלגברי הבא למעריך אחד בודד:\n\\( \\dfrac{(x^5 \\times x^2)^3}{x^6} = ? \\)",
        options: ["x^{15}", "x^{21}", "x^9", "x^{11}"],
        correctAnswer: 0,
        hint: "בצעו קודם את חיבור המעריכים בתוך הסוגריים, לאחר מכן כפלו בחזקה החיצונית (חזקה של חזקה), ולבסוף חסרו את מעריך המכנה.",
        solution_steps: [
            { verbal_explanation: "שלב א: נחבר את המעריכים של הבסיסים הזהים בתוך הסוגריים.", math_expression: "5 + 2 = 7" },
            { verbal_explanation: "שלב ב: נשתמש בחוק חזקה של חזקה ונכפול את המעריך שקיבלנו במעריך החיצוני.", math_expression: "7 \\times 3 = 21" },
            { verbal_explanation: "שלב ג: נבצע את פעולת חילוק החזקות על ידי חיסור מעריך המכנה ממעריך המונה.", math_expression: "21 - 6 = 15" },
            { verbal_explanation: "התוצאה הסופית היא הבסיס המקורי בחזקת ההפרש שקיבלנו.", math_expression: "x^{15}" }
        ],
        final_answer: "x^{15}"
    },
    // שאלה 2
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך טבעי ואפס",
        question_text: "צמצמו את השבר האלגברי הבא ככל האפשר:\n\\( \\dfrac{(3a^2b^4)^3}{9a^4b^{10}} = ? \\)",
        options: ["3a^2b^2", "a^2b^2", "27a^2b^2", "3a^1b^2"],
        correctAnswer: 0,
        hint: "העלו את כל הגורמים במונה בחזקת 3. זכרו שגם המקדם המספרי 3 מועלה בחזקה. לאחר מכן חלקו מקדמים וחסרו מעריכים.",
        solution_steps: [
            { verbal_explanation: "שלב א: נפתח את החזקה במונה עבור כל גורם בנפרד (מקדם ומשתנים).", math_expression: "3^3 = 27 \\quad , \\quad (a^2)^3 = a^6 \\quad , \\quad (b^4)^3 = b^{12}" },
            { verbal_explanation: "שלב ב: נחלק את המקדם של המונה במקדם של המכנה.", math_expression: "27 : 9 = 3" },
            { verbal_explanation: "שלב ג: נצמצם את המשתנים על ידי חיסור מעריכי המכנה ממעריכי המונה.", math_expression: "a^{6-4} = a^2 \\quad , \\quad b^{12-10} = b^2" },
            { verbal_explanation: "נאחד את כל התוצאות לביטוי אחד מצומצם.", math_expression: "3a^2b^2" }
        ],
        final_answer: "3a^2b^2"
    },
    // שאלה 3
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך טבעי ואפס",
        question_text: "מהו הערך של הנעלם x במשוואה המעריכית הבאה?\n\\( \\dfrac{2^{x+3}}{2^5} = 2^4 \\)",
        options: ["6", "1", "9", "2"],
        correctAnswer: 0,
        hint: "השתמשו בחוק חיסור מעריכים באגף שמאל (מונה פחות מכנה), ולאחר מכן השוו את המעריך שקיבלתם למעריך שבאגף ימין.",
        solution_steps: [
            { verbal_explanation: "שלב א: נבצע חילוק חזקות באגף שמאל באמצעות חיסור המעריכים.", math_expression: "(x + 3) - 5 = x - 2" },
            { verbal_explanation: "שלב ב: מכיוון שהבסיסים שווים משני צידי המשוואה, נשווה את המעריכים זה לזה.", math_expression: "x - 2 = 4" },
            { verbal_explanation: "שלב ג: נעביר את ה-2 אגף בפעולת חיבור ונפתור עבור x.", math_expression: "x = 4 + 2 = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 4
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך טבעי ואפס",
        question_text: "פשטו את הביטוי הבא והציגו אותו כחזקה אחת בבסיס 5:\n\\( \\dfrac{(5^2 \\times 5^x)^3}{(5^3)^x} = ? \\)",
        options: ["5^6", "5^{2x+6}", "5^{6x}", "1"],
        correctAnswer: 0,
        hint: "עבדו בשיטתיות: חיבור מעריכים בתוך הסוגריים במונה, כפל בחזקה החיצונית, כפל במכנה, ולבסוף חיסור בין המונה למכנה.",
        solution_steps: [
            { verbal_explanation: "שלב א: נחבר את המעריכים בתוך הסוגריים במונה.", math_expression: "5^{2+x}" },
            { verbal_explanation: "שלב ב: נכפול את המעריך שקיבלנו בחזקה החיצונית של המונה.", math_expression: "3 \\times (2 + x) = 6 + 3x" },
            { verbal_explanation: "שלב ג: נחשב את מעריך המכנה בעזרת כפל חזקה של חזקה.", math_expression: "(5^3)^x = 5^{3x}" },
            { verbal_explanation: "שלב ד: נבצע חילוק על ידי חיסור מעריך המכנה ממעריך המונה.", math_expression: "(6 + 3x) - 3x = 6" },
            { verbal_explanation: "נרשום את התוצאה הסופית כבסיס 5 בחזקה שקיבלנו.", math_expression: "5^6" }
        ],
        final_answer: "5^6"
    },
    // שאלה 5
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך טבעי ואפס",
        question_text: "חשבו את ערכו המספרי של הביטוי הבא המשלב חזקת אפס:\n\\( \\dfrac{10^5 \\times (4x^2 - 8x + 1)^0}{10^3} = ? \\)",
        options: ["100", "10", "1", "0"],
        correctAnswer: 0,
        hint: "זכרו שכל ביטוי המועלה בחזקת אפס (בתנאי שאינו אפס בעצמו) שווה ל-1, ללא קשר למורכבות התוכן שבתוך הסוגריים.",
        solution_steps: [
            { verbal_explanation: "שלב א: נזהה שהפולינום הארוך בסוגריים מועלה כולו בחזקת 0, ולכן ערכו הכולל הוא 1.", math_expression: "1" },
            { verbal_explanation: "שלב ב: נבצע חלוקת חזקות בין המונה למכנה (בסיס 10) על ידי חיסור המעריכים.", math_expression: "10^{5-3} = 10^2" },
            { verbal_explanation: "נחשב את הערך המספרי של 10 בריבוע.", math_expression: "100" }
        ],
        final_answer: "100"
    },
    // שאלה 6
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך טבעי ואפס",
        question_text: "בטאו את תוצאת המכפלה הבאה כחזקה אחת בבסיס 2:\n\\( 16 \\times 4^n \\times 2 = ? \\)",
        options: ["2^{2n+5}", "2^{2n+4}", "2^{n+5}", "2^{8n}"],
        correctAnswer: 0,
        hint: "כדי לכפול חזקות, הבסיסים חייבים להיות זהים. המירו תחילה את 16 ו-4 לחזקות בבסיס 2, ואז חברו מעריכים.",
        solution_steps: [
            { verbal_explanation: "שלב א: נמיר את המספרים 16 ו-4 לבסיס 2.", math_expression: "16 = 2^4 \\quad , \\quad 4 = 2^2" },
            { verbal_explanation: "שלב ב: נציב בחזרה ונכפול מעריכים (חזקה של חזקה עבור ה-4).", math_expression: "2^4 \\times (2^2)^n \\times 2^1 = 2^4 \\times 2^{2n} \\times 2^1" },
            { verbal_explanation: "שלב ג: נחבר את כל המעריכים (כפל בסיסים זהים).", math_expression: "4 + 2n + 1 = 2n + 5" },
            { verbal_explanation: "התוצאה הסופית.", math_expression: "2^{2n+5}" }
        ],
        final_answer: "2^{2n+5}"
    },
    // שאלה 7
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך טבעי ואפס",
        question_text: "פשטו את השבר האלגברי הבא:\n\\( \\dfrac{12x^8}{3x^2 \\times 2x^2} = ? \\)",
        options: ["2x^4", "4x^4", "2x^6", "4x^6"],
        correctAnswer: 0,
        hint: "קודם כפלו את האיברים במכנה (מקדמים ומשתנים בנפרד), ורק אז חלקו את המונה בתוצאה שקיבלתם.",
        solution_steps: [
            { verbal_explanation: "שלב א: נחשב את המכפלה במכנה על ידי כפל מקדמים וחיבור מעריכים.", math_expression: "3 \\times 2 = 6 \\quad , \\quad x^2 \\times x^2 = x^4" },
            { verbal_explanation: "שלב ב: כעת נחלק את המקדם של המונה במקדם של המכנה שקיבלנו.", math_expression: "12 : 6 = 2" },
            { verbal_explanation: "שלב ג: נחסר את מעריך המכנה ממעריך המונה.", math_expression: "8 - 4 = 4" },
            { verbal_explanation: "הביטוי הסופי המצומצם.", math_expression: "2x^4" }
        ],
        final_answer: "2x^4"
    },
    // שאלה 8
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך טבעי ואפס",
        question_text: "פשטו ככל האפשר (שימו לב לסימן המינוס):\n\\( (-2a^2)^3 \\times (a^4)^0 = ? \\)",
        options: ["-8a^6", "8a^6", "-6a^6", "-8a^5"],
        correctAnswer: 0,
        hint: "חזקה אי-זוגית משאירה את סימן המינוס של הבסיס. זכרו בנוסף שהביטוי השני כולו שווה ל-1.",
        solution_steps: [
            { verbal_explanation: "שלב א: נעלה את מינוס 2 בחזקת 3. מכיוון שהמעריך אי-זוגי, המינוס נשאר.", math_expression: "(-2)^3 = -8" },
            { verbal_explanation: "שלב ב: כפל מעריכים למשתנה a.", math_expression: "(a^2)^3 = a^6" },
            { verbal_explanation: "שלב ג: האיבר השני מועלה בחזקת 0, לכן ערכו הוא 1.", math_expression: "1" },
            { verbal_explanation: "כפל סופי של כל החלקים.", math_expression: "-8a^6 \\times 1 = -8a^6" }
        ],
        final_answer: "-8a^6"
    },
    // שאלה 9
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך טבעי ואפס",
        question_text: "מצאו את הערך המספרי של הביטוי הבא:\n\\( \\dfrac{10^n \\times 10^{n+2}}{10^{2n}} = ? \\)",
        options: ["100", "10", "1", "10^n"],
        correctAnswer: 0,
        hint: "חברו את המעריכים האלגבריים במונה, ולאחר מכן חסרו מהסכום את המעריך שבמכנה.",
        solution_steps: [
            { verbal_explanation: "שלב א: חיבור מעריכים במונה.", math_expression: "n + (n+2) = 2n+2" },
            { verbal_explanation: "שלב ב: חיסור מעריך המכנה מסכום המונה.", math_expression: "(2n+2) - 2n = 2" },
            { verbal_explanation: "קיבלנו 10 בחזקת 2, נחשב את הערך המספרי.", math_expression: "100" }
        ],
        final_answer: "100"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך טבעי ואפס",
        question_text: "פשטו את השבר האלגברי:\n\\( \\dfrac{(a \\times b^2)^4}{(a^2 \\times b)^2} = ? \\)",
        options: ["b^6", "a^2b^2", "a^0b^6", "b^4"],
        correctAnswer: 0,
        hint: "הפיצו את החזקה החיצונית לכל אחד מהמשתנים בתוך הסוגריים במונה ובמכנה, ואז בצעו צמצום.",
        solution_steps: [
            { verbal_explanation: "שלב א: הפעלת חזקה 4 על גורמי המונה.", math_expression: "a^4 \\times (b^2)^4 = a^4b^8" },
            { verbal_explanation: "שלב ב: הפעלת חזקה 2 על גורמי המכנה.", math_expression: "(a^2)^2 \\times b^2 = a^4b^2" },
            { verbal_explanation: "שלב ג: המשתנה a מצטמצם לחלוטין מכיוון שחזקתו שווה במונה ובמכנה.", math_expression: "a^{4-4} = a^0 = 1" },
            { verbal_explanation: "שלב ד: נחסר את מעריכי המשתנה b.", math_expression: "b^{8-2} = b^6" }
        ],
        final_answer: "b^6"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך טבעי ואפס",
        question_text: "מהי התוצאה של:\n\\( 8^3 \\times 0.125^3 = ? \\)",
        options: ["1", "8", "0.125", "64"],
        correctAnswer: 0,
        hint: "כאשר המעריכים זהים, ניתן לכפול את הבסיסים יחד תחת אותה חזקה. שימו לב ש-0.125 הוא השבר שמינית.",
        solution_steps: [
            { verbal_explanation: "שלב א: נאחד את הבסיסים תחת החזקה המשותפת 3.", math_expression: "(8 \\times 0.125)^3" },
            { verbal_explanation: "שלב ב: נחשב את המכפלה בתוך הסוגריים (8 כפול שמינית שווה 1).", math_expression: "1^3" },
            { verbal_explanation: "אחד בחזקת כל מספר טבעי שווה ל-1.", math_expression: "1" }
        ],
        final_answer: "1"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך טבעי ואפס",
        question_text: "פשטו ככל האפשר את השבר הבא:\n\\( \\dfrac{2^5 \\times 3^5}{6^4} = ? \\)",
        options: ["6", "1", "36", "6^9"],
        correctAnswer: 0,
        hint: "אחדו תחילה את הבסיסים במונה לבסיס משותף בעזרת חוק המעריכים הזהים, ואז בצעו חילוק חזקות.",
        solution_steps: [
            { verbal_explanation: "שלב א: מכיוון שלבסיסים במונה יש מעריך משותף, נכפול אותם תחת אותו מעריך.", math_expression: "(2 \\times 3)^5 = 6^5" },
            { verbal_explanation: "שלב ב: נבצע חלוקת חזקות בעלות בסיס זהה על ידי חיסור המעריכים.", math_expression: "6^{5-4} = 6^1" },
            { verbal_explanation: "התוצאה הסופית.", math_expression: "6" }
        ],
        final_answer: "6"
    },

    // ==========================================================
    // תת נושא 2: חוקי חזקות עם מעריך שלילי (12 שאלות)
    // ==========================================================
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך שלילי",
        question_text: "פשטו את הביטוי הבא והמירו אותו לביטוי בעל מעריך חיובי בלבד:\n\\( \\dfrac{x^{-3} \\times x^6}{x^{-2}} = ? \\)",
        options: ["x^5", "x^{-5}", "x^1", "x^{-1}"],
        correctAnswer: 0,
        hint: "חברו את המעריכים במונה, ולאחר מכן חסרו מהם את המעריך שבמכנה. זכרו שחיסור של מספר שלילי הופך לחיבור.",
        solution_steps: [
            { verbal_explanation: "שלב א: נחבר את המעריכים במונה.", math_expression: "-3 + 6 = 3" },
            { verbal_explanation: "שלב ב: נחסר את מעריך המכנה מסכום המונה.", math_expression: "3 - (-2)" },
            { verbal_explanation: "שלב ג: חיסור של מינוס הופך לפלוס.", math_expression: "3 + 2 = 5" },
            { verbal_explanation: "התוצאה הסופית.", math_expression: "x^5" }
        ],
        final_answer: "x^5"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך שלילי",
        question_text: "חשבו את הערך המדויק של:\n\\( \\dfrac{3^{-2} \\times 2^{-2}}{6^{-3}} = ? \\)",
        options: ["6", "1", "36", "\\dfrac{1}{6}"],
        correctAnswer: 0,
        hint: "אחדו תחילה את בסיסי המונה לבסיס 6 (היות והמעריכים זהים), ואז בצעו חיסור מעריכים אל מול המכנה.",
        solution_steps: [
            { verbal_explanation: "שלב א: נאחד את בסיסי המונה למכפלה תחת המעריך המשותף.", math_expression: "(3 \\times 2)^{-2} = 6^{-2}" },
            { verbal_explanation: "שלב ב: נחסר את מעריך המכנה ממעריך המונה.", math_expression: "-2 - (-3)" },
            { verbal_explanation: "שלב ג: נחשב את החיסור (מינוס של מינוס הוא פלוס).", math_expression: "-2 + 3 = 1" },
            { verbal_explanation: "הערך הסופי.", math_expression: "6^1 = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך שלילי",
        question_text: "פשטו והציגו כשבר בעל מעריכים חיוביים:\n\\( (x^{-3}y^2)^{-2} = ? \\)",
        options: ["\\dfrac{x^6}{y^4}", "x^6y^4", "\\dfrac{y^4}{x^6}", "x^{-5}y^0"],
        correctAnswer: 0,
        hint: "הפיצו את החזקה החיצונית (מינוס 2) לכל גורם בעזרת כפל מעריכים. לאחר מכן, המירו חזקה שלילית לשבר כדי להפוך אותה לחיובית.",
        solution_steps: [
            { verbal_explanation: "שלב א: נכפול את המעריך של המשתנה הראשון.", math_expression: "-3 \\times (-2) = 6" },
            { verbal_explanation: "שלב ב: נכפול את המעריך של המשתנה השני.", math_expression: "2 \\times (-2) = -4" },
            { verbal_explanation: "שלב ג: נמיר את המשתנה עם המעריך השלילי לשבר עם חזקה חיובית במכנה.", math_expression: "y^{-4} = \\dfrac{1}{y^4}" },
            { verbal_explanation: "נאחד את שני המשתנים לביטוי אחד.", math_expression: "x^6 \\times \\dfrac{1}{y^4} = \\dfrac{x^6}{y^4}" }
        ],
        final_answer: "\\dfrac{x^6}{y^4}"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך שלילי",
        question_text: "חשבו את הערך של סכום החזקות הבא:\n\\( 5^{-1} + 2^{-1} = ? \\)",
        options: ["0.7", "0.5", "0.2", "0.1"],
        correctAnswer: 0,
        hint: "המירו כל חזקה שלילית לשבר עשרוני (חמישית וחצי) ולאחר מכן חברו את התוצאות.",
        solution_steps: [
            { verbal_explanation: "שלב א: נמיר את האיבר הראשון לשבר עשרוני.", math_expression: "5^{-1} = \\dfrac{1}{5} = 0.2" },
            { verbal_explanation: "שלב ב: נמיר את האיבר השני לשבר עשרוני.", math_expression: "2^{-1} = \\dfrac{1}{2} = 0.5" },
            { verbal_explanation: "שלב ג: נחבר את התוצאות.", math_expression: "0.2 + 0.5 = 0.7" }
        ],
        final_answer: "0.7"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך שלילי",
        question_text: "פשטו את הביטוי הבא והמירו את כל החזקות לחיוביות:\n\\( \\left(\\dfrac{a^{-3}}{b^2}\\right)^{-2} = ? \\)",
        options: ["a^6b^4", "\\dfrac{a^6}{b^4}", "a^{-5}b^0", "a^6b^{-4}"],
        correctAnswer: 0,
        hint: "כפלו את המעריך החיצוני במונה ובמכנה. זכרו שהעלאת איבר מהמכנה למונה משנה את סימן המעריך שלו.",
        solution_steps: [
            { verbal_explanation: "שלב א: נכפול במעריך החיצוני במונה.", math_expression: "-3 \\times (-2) = 6" },
            { verbal_explanation: "שלב ב: נכפול במעריך החיצוני במכנה.", math_expression: "2 \\times (-2) = -4" },
            { verbal_explanation: "נקבל משתנה במכנה בחזקה שלילית.", math_expression: "\\dfrac{a^6}{b^{-4}}" },
            { verbal_explanation: "שלב ג: נעלה את המשתנה למונה כדי להפוך את מעריכו לחיובי.", math_expression: "a^6b^4" }
        ],
        final_answer: "a^6b^4"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך שלילי",
        question_text: "איזה מהערכים הבאים שווה בדיוק ל- \\( -3^{-2} \\)?",
        options: ["-\\dfrac{1}{9}", "\\dfrac{1}{9}", "-9", "9"],
        correctAnswer: 0,
        hint: "זהירות! סימן המינוס ממוקם לפני הביטוי ולא בתוך סוגריים. החזקה פועלת רק על המספר 3.",
        solution_steps: [
            { verbal_explanation: "שלב א: נזהה שהמינוס נשאר בחוץ ללא שינוי מהחזקה.", math_expression: "- (3^{-2})" },
            { verbal_explanation: "שלב ב: נהפוך את החזקה השלילית לשבר חיובי.", math_expression: "- \\left(\\dfrac{1}{3^2}\\right)" },
            { verbal_explanation: "שלב ג: נחשב את הערך במכנה.", math_expression: "-\\dfrac{1}{9}" }
        ],
        final_answer: "-\\dfrac{1}{9}"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך שלילי",
        question_text: "פשטו את השבר האלגברי הבא:\n\\( \\dfrac{12x^{-3}y^4}{4x^{-5}y^{-2}} = ? \\)",
        options: ["3x^2y^6", "3x^{-8}y^2", "8x^2y^6", "3x^2y^2"],
        correctAnswer: 0,
        hint: "חלקו מקדמים, וחסרו מעריכים לכל משתנה בנפרד (מונה פחות מכנה).",
        solution_steps: [
            { verbal_explanation: "שלב א: נחלק את המקדמים המספריים.", math_expression: "12 : 4 = 3" },
            { verbal_explanation: "שלב ב: נחסר את מעריכי המשתנה הראשון.", math_expression: "-3 - (-5) = 2" },
            { verbal_explanation: "שלב ג: נחסר את מעריכי המשתנה השני.", math_expression: "4 - (-2) = 6" },
            { verbal_explanation: "נאחד את הכל לביטוי אחד.", math_expression: "3x^2y^6" }
        ],
        final_answer: "3x^2y^6"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך שלילי",
        question_text: "חשבו את הערך של הביטוי המורכב הבא:\n\\( \\dfrac{(4^{-1})^3}{4^{-4}} = ? \\)",
        options: ["4", "1", "16", "64"],
        correctAnswer: 0,
        hint: "בצעו כפל מעריכים במונה (חזקה של חזקה), ולאחר מכן חסרו את מעריך המכנה מהתוצאה.",
        solution_steps: [
            { verbal_explanation: "שלב א: נכפול מעריכים במונה.", math_expression: "-1 \\times 3 = -3" },
            { verbal_explanation: "שלב ב: נבצע חילוק חזקות על ידי חיסור מעריך המכנה.", math_expression: "-3 - (-4) = 1" },
            { verbal_explanation: "נחשב את הערך הסופי.", math_expression: "4^1 = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך שלילי",
        question_text: "איזה מהביטויים הבאים שווה ל: \\( \\dfrac{1}{x^7} \\)?",
        options: ["x^{-7}", "7x", "x^7", "-x^7"],
        correctAnswer: 0,
        hint: "העלאת איבר מהמכנה אל המונה מחייבת לשנות את סימן המעריך שלו לנגדי.",
        solution_steps: [
            { verbal_explanation: "לפי חוק ההיפוך בחזקות, מעבר ממונה למכנה (או להיפך) הופך את סימן המעריך.", math_expression: "x^{-7}" }
        ],
        final_answer: "x^{-7}"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך שלילי",
        question_text: "פשטו את הביטוי הבא:\n\\( (x^{-4} \\times x^0)^{-2} = ? \\)",
        options: ["x^8", "x^{-8}", "1", "x^6"],
        correctAnswer: 0,
        hint: "המשתנה בחזקת אפס שווה ל-1 ולכן לא משפיע. כפלו את המעריכים הנותרים.",
        solution_steps: [
            { verbal_explanation: "שלב א: נזהה שאיקס בחזקת אפס שווה 1.", math_expression: "1" },
            { verbal_explanation: "שלב ב: נכפול את המעריכים הנותרים (חזקה של חזקה).", math_expression: "-4 \\times (-2) = 8" },
            { verbal_explanation: "התוצאה הסופית.", math_expression: "x^8" }
        ],
        final_answer: "x^8"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך שלילי",
        question_text: "מהו הערך של שרשרת המכפלות הבאה?\n\\( 10^6 \\times 10^{-8} \\times 10^2 = ? \\)",
        options: ["1", "10", "0.1", "0"],
        correctAnswer: 0,
        hint: "חברו את כל המעריכים יחד מכיוון שהבסיס זהה. מה קורה כאשר הסכום מתאפס?",
        solution_steps: [
            { verbal_explanation: "שלב א: נחבר את כל המעריכים של בסיס 10.", math_expression: "6 + (-8) + 2 = 0" },
            { verbal_explanation: "שלב ב: כל מספר (שאינו אפס) בחזקת אפס שווה ל-1.", math_expression: "10^0 = 1" }
        ],
        final_answer: "1"
    },
    {
        topic: "powers_and_roots",
        subTopic: "חוקי חזקות עם מעריך שלילי",
        question_text: "פשטו את הביטוי (זהירות עם המקדם המועלה בחזקה):\n\\( (3x^{-2})^{-2} = ? \\)",
        options: ["\\dfrac{x^4}{9}", "9x^4", "\\dfrac{x^4}{3}", "x^4"],
        correctAnswer: 0,
        hint: "החזקה החיצונית (מינוס 2) פועלת גם על המספר 3 וגם על המשתנה x.",
        solution_steps: [
            { verbal_explanation: "שלב א: נעלה את המקדם 3 בחזקת מינוס 2 ונהפוך לשבר.", math_expression: "3^{-2} = \\dfrac{1}{3^2} = \\dfrac{1}{9}" },
            { verbal_explanation: "שלב ב: נכפול את המעריכים עבור המשתנה x.", math_expression: "-2 \\times (-2) = 4" },
            { verbal_explanation: "נאחד את התוצאות לביטוי סופי.", math_expression: "\\dfrac{x^4}{9}" }
        ],
        final_answer: "\\dfrac{x^4}{9}"
    },

    // ==========================================================
    // 3. כתיב מדעי (12 שאלות)
    // ==========================================================
    {
        topic: "powers_and_roots",
        subTopic: "כתיב מדעי",
        question_text: "המירו את המרחק הממוצע מכדור הארץ לשמש (149600000 ק\"מ) לכתיב מדעי תקני.",
        options: ["1.496 \\times 10^8", "14.96 \\times 10^7", "1.496 \\times 10^7", "0.1496 \\times 10^9"],
        correctAnswer: 0,
        hint: "בכתיב מדעי, המקדם חייב להיות בין 1 ל-10. ספרו כמה צעדים שמאלה יש להזיז את הנקודה.",
        solution_steps: [
            { verbal_explanation: "שלב א: נקבע את המקדם המדעי כך שיישאר רק מספר אחד לפני הנקודה.", math_expression: "1.496" },
            { verbal_explanation: "שלב ב: נספור כמה צעדים שמאלה הנקודה זזה מסוף המספר המקורי.", math_expression: "8" },
            { verbal_explanation: "שלב ג: נרשום את התוצאה כמכפלה של 10 בחזקת מספר הצעדים.", math_expression: "1.496 \\times 10^8" }
        ],
        final_answer: "1.496 \\times 10^8"
    },
    {
        topic: "powers_and_roots",
        subTopic: "כתיב מדעי",
        question_text: "גודלו של אטום מימן הוא בערך 0.000000000106 מטרים. רשמו זאת בכתיב מדעי.",
        options: ["1.06 \\times 10^{-10}", "1.06 \\times 10^{10}", "10.6 \\times 10^{-11}", "0.106 \\times 10^{-9}"],
        correctAnswer: 0,
        hint: "הזיזו את הנקודה ימינה עד שתגיע אחרי הספרה הראשונה שאינה אפס. מספר הצעדים הוא המעריך השלילי.",
        solution_steps: [
            { verbal_explanation: "שלב א: נקבע את המקדם התקני.", math_expression: "1.06" },
            { verbal_explanation: "שלב ב: נספור כמה צעדים ימינה הנקודה זזה.", math_expression: "10" },
            { verbal_explanation: "שלב ג: עבור מספרים הקטנים מאחד, המעריך מצוין בסימן שלילי.", math_expression: "1.06 \\times 10^{-10}" }
        ],
        final_answer: "1.06 \\times 10^{-10}"
    },
    {
        topic: "powers_and_roots",
        subTopic: "כתיב מדעי",
        question_text: "חשבו את המכפלה ותקנו את התוצאה לכתיב מדעי במידת הצורך:\n\\( (4 \\times 10^6) \\times (5 \\times 10^3) = ? \\)",
        options: ["2 \\times 10^{10}", "20 \\times 10^9", "2 \\times 10^9", "20 \\times 10^{18}"],
        correctAnswer: 0,
        hint: "כפלו מקדמים וחברו מעריכים. אם המקדם החדש הוא 20, תקנו אותו ל-2 והגדילו את המעריך ב-1.",
        solution_steps: [
            { verbal_explanation: "שלב א: נכפול מקדמים ונחבר את המעריכים של 10.", math_expression: "20 \\times 10^9" },
            { verbal_explanation: "שלב ב: נתקן את המקדם 20 לכתיב מדעי (2 כפול 10).", math_expression: "2 \\times 10^1 \\times 10^9" },
            { verbal_explanation: "שלב ג: נחבר שוב מעריכים לתוצאה סופית תקינה.", math_expression: "2 \\times 10^{10}" }
        ],
        final_answer: "2 \\times 10^{10}"
    },
    {
        topic: "powers_and_roots",
        subTopic: "כתיב מדעי",
        question_text: "חשבו את החילוק ותקנו במידת הצורך:\n\\( \\dfrac{1.2 \\times 10^8}{3 \\times 10^2} = ? \\)",
        options: ["4 \\times 10^5", "0.4 \\times 10^6", "4 \\times 10^6", "0.4 \\times 10^4"],
        correctAnswer: 0,
        hint: "חלקו מקדמים וחסרו מעריכים. אם המקדם שהתקבל הוא 0.4, הגדילו אותו ל-4 והקטינו את המעריך ב-1.",
        solution_steps: [
            { verbal_explanation: "שלב א: נחלק את המקדמים ונחסר את המעריכים.", math_expression: "0.4 \\times 10^6" },
            { verbal_explanation: "שלב ב: נתקן את המקדם. הגדלת המקדם מ-0.4 ל-4 מורידה את המעריך ב-1.", math_expression: "4 \\times 10^5" }
        ],
        final_answer: "4 \\times 10^5"
    },
    {
        topic: "powers_and_roots",
        subTopic: "כתיב מדעי",
        question_text: "המירו את הכתיב המדעי הבא למספר עשרוני רגיל:\n\\( 6.7 \\times 10^{-4} = ? \\)",
        options: ["0.00067", "0.0067", "0.000067", "67000"],
        correctAnswer: 0,
        hint: "המעריך השלילי משמעותו שעליכם להזיז את הנקודה העשרונית 4 צעדים שמאלה מהספרה 6.",
        solution_steps: [
            { verbal_explanation: "נזיז את הנקודה שמאלה ארבעה צעדים ונשלים באפסים ריקים.", math_expression: "0.00067" }
        ],
        final_answer: "0.00067"
    },
    {
        topic: "powers_and_roots",
        subTopic: "כתיב מדעי",
        question_text: "חשבו את פעולת החיבור (שימו לב למעריכים שונים):\n\\( 2 \\times 10^4 + 3 \\times 10^3 = ? \\)",
        options: ["2.3 \\times 10^4", "5 \\times 10^7", "5 \\times 10^4", "2.3 \\times 10^7"],
        correctAnswer: 0,
        hint: "לא ניתן לחבר ישר. השוו את המעריכים על ידי המרת אחד האיברים לאותה חזקת 10 כמו השני.",
        solution_steps: [
            { verbal_explanation: "שלב א: נמיר את האיבר הראשון למעריך 3 כדי להשוות בסיסים.", math_expression: "20 \\times 10^3" },
            { verbal_explanation: "שלב ב: כעת נחבר את המקדמים כאשר החזקה משותפת.", math_expression: "(20 + 3) \\times 10^3 = 23 \\times 10^3" },
            { verbal_explanation: "שלב ג: נחזיר את התוצאה לכתיב מדעי תקני על ידי הזזת הנקודה.", math_expression: "2.3 \\times 10^4" }
        ],
        final_answer: "2.3 \\times 10^4"
    },
    {
        topic: "powers_and_roots",
        subTopic: "כתיב מדעי",
        question_text: "איזה מהמספרים הקטנים הבאים הוא הקטן ביותר?",
        options: ["9.9 \\times 10^{-10}", "8.5 \\times 10^{-9}", "1.2 \\times 10^{-8}", "4.4 \\times 10^{-9}"],
        correctAnswer: 0,
        hint: "במספרים קטנים, הסתכלו תמיד על המעריך. המעריך ה'שלילי' ביותר (הכי רחוק מאפס) מעיד על המספר הקטן ביותר.",
        solution_steps: [
            { verbal_explanation: "שלב א: נשווה את המעריכים השליליים.", math_expression: "-10 < -9 < -8" },
            { verbal_explanation: "שלב ב: המספר בעל המעריך מינוס 10 קטן מכולם, ללא קשר למקדם.", math_expression: "9.9 \\times 10^{-10}" }
        ],
        final_answer: "9.9 \\times 10^{-10}"
    },
    {
        topic: "powers_and_roots",
        subTopic: "כתיב מדעי",
        question_text: "מהירות האור היא בערך \\( 3 \\times 10^8 \\) מטרים לשנייה. מהו המרחק שיעבור האור ב-60 שניות?",
        options: ["1.8 \\times 10^{10}", "180 \\times 10^8", "1.8 \\times 10^9", "3.6 \\times 10^{10}"],
        correctAnswer: 0,
        hint: "כפלו את המהירות בזמן (60). לאחר מכן, תקנו את התוצאה לכתיב מדעי על ידי המרת 180 ל-1.8.",
        solution_steps: [
            { verbal_explanation: "שלב א: נכפול את המהירות בזמן.", math_expression: "3 \\times 10^8 \\times 60 = 180 \\times 10^8" },
            { verbal_explanation: "שלב ב: נתקן את המקדם לכתיב מדעי. 180 הופך ל-1.8 כפול 100.", math_expression: "1.8 \\times 10^2 \\times 10^8" },
            { verbal_explanation: "שלב ג: נחבר מעריכים.", math_expression: "1.8 \\times 10^{10}" }
        ],
        final_answer: "1.8 \\times 10^{10}"
    },
    {
        topic: "powers_and_roots",
        subTopic: "כתיב מדעי",
        question_text: "תקנו את הביטוי הבא לכתיב מדעי תקני:\n\\( 0.0052 \\times 10^8 = ? \\)",
        options: ["5.2 \\times 10^5", "5.2 \\times 10^{11}", "5.2 \\times 10^6", "0.52 \\times 10^7"],
        correctAnswer: 0,
        hint: "הזיזו את הנקודה 3 צעדים ימינה כדי להגדיל את המקדם. כפיצוי, הקטינו את המעריך ב-3.",
        solution_steps: [
            { verbal_explanation: "שלב א: נמיר את המקדם לכתיב מדעי (הזזה של 3 צעדים ימינה).", math_expression: "0.0052 = 5.2 \\times 10^{-3}" },
            { verbal_explanation: "שלב ב: נחבר את המעריך החדש עם המעריך הקיים.", math_expression: "-3 + 8 = 5" },
            { verbal_explanation: "התוצאה התקנית.", math_expression: "5.2 \\times 10^5" }
        ],
        final_answer: "5.2 \\times 10^5"
    },
    {
        topic: "powers_and_roots",
        subTopic: "כתיב מדעי",
        question_text: "כמות המים באוקיינוסים היא בערך \\( 1.3 \\times 10^9 \\) יחידות. אם כל יחידה מכילה \\( 10^9 \\) ליטרים, מהי הכמות הכוללת בליטרים?",
        options: ["1.3 \\times 10^{18}", "1.3 \\times 10^{81}", "1.3 \\times 10^1", "13 \\times 10^{20}"],
        correctAnswer: 0,
        hint: "בצעו כפל חזקות בין שתי הכמויות (חיבור מעריכים).",
        solution_steps: [
            { verbal_explanation: "שלב א: נרשום את פעולת המכפלה בין שני הערכים.", math_expression: "1.3 \\times 10^9 \\times 10^9" },
            { verbal_explanation: "שלב ב: נחבר את המעריכים של הבסיס 10.", math_expression: "9 + 9 = 18" },
            { verbal_explanation: "התוצאה הסופית.", math_expression: "1.3 \\times 10^{18}" }
        ],
        final_answer: "1.3 \\times 10^{18}"
    },
    {
        topic: "powers_and_roots",
        subTopic: "כתיב מדעי",
        question_text: "שטח פנים של תא מסוים הוא \\( 4 \\times 10^{-10} \\) מ\"ר. מה יהיה שטח הפנים הכולל של מיליון (\\( 10^6 \\)) תאים כאלו?",
        options: ["4 \\times 10^{-4}", "4 \\times 10^{-16}", "0.0004", "התשובות 1 ו-3 נכונות"],
        correctAnswer: 3,
        hint: "כפלו את השטח של תא אחד בכמות התאים (חיבור מעריכים). שימו לב גם לערך העשרוני של התוצאה.",
        solution_steps: [
            { verbal_explanation: "שלב א: נכפול את שטח התא במיליון.", math_expression: "4 \\times 10^{-10} \\times 10^6" },
            { verbal_explanation: "שלב ב: נחבר את המעריכים.", math_expression: "-10 + 6 = -4" },
            { verbal_explanation: "התוצאה בכתיב מדעי היא 4 כפול 10 במינוס 4, שזה זהה למספר העשרוני 0.0004.", math_expression: "4 \\times 10^{-4} = 0.0004" }
        ],
        final_answer: "התשובות 1 ו-3 נכונות"
    },
    {
        topic: "powers_and_roots",
        subTopic: "כתיב מדעי",
        question_text: "פשטו את השבר הבא המשלב מעריכים שליליים:\n\\( \\dfrac{1.5 \\times 10^{-3}}{0.5 \\times 10^{-7}} = ? \\)",
        options: ["3 \\times 10^4", "3 \\times 10^{-10}", "3 \\times 10^{-4}", "0.3 \\times 10^5"],
        correctAnswer: 0,
        hint: "חלקו את המקדמים, וחסרו את המעריכים (מינוס 3 פחות מינוס 7).",
        solution_steps: [
            { verbal_explanation: "שלב א: נחלק את המקדמים המספריים.", math_expression: "1.5 : 0.5 = 3" },
            { verbal_explanation: "שלב ב: נחסר את המעריכים (מינוס של מינוס הופך לחיבור).", math_expression: "-3 - (-7) = 4" },
            { verbal_explanation: "התוצאה הסופית.", math_expression: "3 \\times 10^4" }
        ],
        final_answer: "3 \\times 10^4"
    },

    // ==========================================================
    // 4. שורש ריבועי ומשוואות עם שורשים (12 שאלות)
    // ==========================================================
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי ומשוואות עם שורשים",
        question_text: "חשבו את הערך של השורש הריבועי הבא:\n\\( \\sqrt{1.44} = ? \\)",
        options: ["1.2", "12", "0.12", "0.72"],
        correctAnswer: 0,
        hint: "התעלמו תחילה מהנקודה העשרונית: השורש של 144 הוא 12. לאחר מכן, החזירו ספרה אחת אחרי הנקודה לתוצאה.",
        solution_steps: [
            { verbal_explanation: "שלב א: נחשב את השורש של המספר השלם.", math_expression: "\\sqrt{144} = 12" },
            { verbal_explanation: "שלב ב: מכיוון שיש שתי ספרות אחרי הנקודה תחת השורש, לתוצאה תהיה ספרה אחת.", math_expression: "1.2" },
            { verbal_explanation: "נוודא על ידי העלאה בריבוע.", math_expression: "1.2 \\times 1.2 = 1.44" }
        ],
        final_answer: "1.2"
    },
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי ומשוואות עם שורשים",
        question_text: "פתרו את המשוואה הבאה ומצאו את כל ערכי x:\n\\( 3x^2 = 75 \\)",
        options: ["5, -5", "5", "25", "0"],
        correctAnswer: 0,
        hint: "בודדו את איקס בריבוע על ידי חלוקת שני האגפים ב-3. למשוואה ריבועית יש לרוב שני פתרונות.",
        solution_steps: [
            { verbal_explanation: "שלב א: נחלק את המשוואה ב-3 כדי לבודד את המשתנה.", math_expression: "x^2 = 25" },
            { verbal_explanation: "שלב ב: נוציא שורש ריבועי משני האגפים.", math_expression: "x = \\pm \\sqrt{25}" },
            { verbal_explanation: "הפתרונות הם חיובי ושלילי.", math_expression: "x = 5, -5" }
        ],
        final_answer: "5, -5"
    },
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי ומשוואות עם שורשים",
        question_text: "פתרו את משוואת השורש הבאה:\n\\( \\sqrt{2x - 6} = 4 \\)",
        options: ["11", "5", "10", "22"],
        correctAnswer: 0,
        hint: "כדי לבטל את השורש, העלו את שני אגפי המשוואה בחזקה שנייה.",
        solution_steps: [
            { verbal_explanation: "שלב א: נעלה את שני האגפים בריבוע.", math_expression: "2x - 6 = 16" },
            { verbal_explanation: "שלב ב: נעביר את ה-6 אגף בפעולת חיבור.", math_expression: "2x = 22" },
            { verbal_explanation: "שלב ג: נחלק ב-2 למציאת איקס.", math_expression: "x = 11" }
        ],
        final_answer: "11"
    },
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי ומשוואות עם שורשים",
        question_text: "מהו תחום ההצבה של הביטוי הבא?\n\\( \\sqrt{10 - 2x} \\)",
        options: ["x \\le 5", "x \\ge 5", "x < 5", "x = 5"],
        correctAnswer: 0,
        hint: "הביטוי הנמצא תחת שורש ריבועי חייב להיות חיובי או אפס. פתרו את אי השוויון המתאים.",
        solution_steps: [
            { verbal_explanation: "שלב א: נדרוש שהתוכן אינו שלילי.", math_expression: "10 - 2x \\ge 0" },
            { verbal_explanation: "שלב ב: נעביר את 2x אגף.", math_expression: "10 \\ge 2x" },
            { verbal_explanation: "שלב ג: נחלק ב-2. המשמעות היא ש-x קטן או שווה ל-5.", math_expression: "5 \\ge x" }
        ],
        final_answer: "x \\le 5"
    },
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי ומשוואות עם שורשים",
        question_text: "חשבו את תוצאת הביטוי (שימו לב לסדר פעולות):\n\\( \\sqrt{10^2 - 8^2} = ? \\)",
        options: ["6", "2", "36", "4"],
        correctAnswer: 0,
        hint: "אסור להוציא שורש נפרד לכל איבר! חשבו קודם את הריבועים, לאחר מכן חסרו, ורק בסוף הוציאו שורש מהתוצאה.",
        solution_steps: [
            { verbal_explanation: "שלב א: נחשב את החזקות בתוך השורש.", math_expression: "100 - 64" },
            { verbal_explanation: "שלב ב: נבצע את פעולת החיסור.", math_expression: "36" },
            { verbal_explanation: "שלב ג: נוציא שורש ריבועי מהתוצאה.", math_expression: "\\sqrt{36} = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי ומשוואות עם שורשים",
        question_text: "פתרו את המשוואה הבאה:\n\\( \\sqrt{x^2} = 9 \\)",
        options: ["9, -9", "9", "81", "0"],
        correctAnswer: 0,
        hint: "שורש ריבועי של מספר המועלה בריבוע שווה לערך המוחלט של המספר.",
        solution_steps: [
            { verbal_explanation: "שלב א: נשתמש בזהות של שורש וריבוע.", math_expression: "|x| = 9" },
            { verbal_explanation: "שלב ב: המשמעות היא שהמספר יכול להיות חיובי או שלילי.", math_expression: "x = \\pm 9" }
        ],
        final_answer: "9, -9"
    },
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי ומשוואות עם שורשים",
        question_text: "פשטו את הביטוי (הניחו שכל המשתנים חיוביים):\n\\( \\sqrt{25a^4b^6} = ? \\)",
        options: ["5a^2b^3", "5a^2b^2", "25a^2b^3", "5a^8b^{12}"],
        correctAnswer: 0,
        hint: "הוציאו שורש ריבועי מכל גורם בנפרד. במשתנים, פעולת השורש הריבועי מחלקת את המעריך ב-2.",
        solution_steps: [
            { verbal_explanation: "שלב א: נוציא שורש מהמקדם המספרי.", math_expression: "\\sqrt{25} = 5" },
            { verbal_explanation: "שלב ב: נוציא שורש מהמשתנים על ידי חלוקת המעריכים ב-2.", math_expression: "a^{4:2} = a^2 \\quad , \\quad b^{6:2} = b^3" },
            { verbal_explanation: "נאחד את התוצאות.", math_expression: "5a^2b^3" }
        ],
        final_answer: "5a^2b^3"
    },
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי ומשוואות עם שורשים",
        question_text: "חשבו את תוצאת הביטוי המורכב הבא:\n\\( \\sqrt{16} + \\sqrt{9} \\times \\sqrt{4} = ? \\)",
        options: ["10", "14", "26", "11"],
        correctAnswer: 0,
        hint: "פעלו לפי סדר פעולות חשבון: קודם פתרו את כל השורשים, לאחר מכן בצעו את הכפל, ורק בסוף חברו.",
        solution_steps: [
            { verbal_explanation: "שלב א: נחשב את כל השורשים.", math_expression: "4 + 3 \\times 2" },
            { verbal_explanation: "שלב ב: נבצע את פעולת הכפל.", math_expression: "3 \\times 2 = 6" },
            { verbal_explanation: "שלב ג: נחבר את התוצאות.", math_expression: "4 + 6 = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי ומשוואות עם שורשים",
        question_text: "פתרו את המשוואה הבאה עבור x:\n\\( 4\\sqrt{x} + 2 = 14 \\)",
        options: ["9", "3", "81", "16"],
        correctAnswer: 0,
        hint: "בודדו את השורש בצד אחד: קודם החסירו 2, לאחר מכן חלקו ב-4, ובסוף העלו את המשוואה בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב א: נחסר 2 משני אגפי המשוואה.", math_expression: "4\\sqrt{x} = 12" },
            { verbal_explanation: "שלב ב: נחלק ב-4 כדי לבודד את השורש.", math_expression: "\\sqrt{x} = 3" },
            { verbal_explanation: "שלב ג: נעלה בריבוע את שני האגפים כדי לחלץ את איקס.", math_expression: "x = 3^2 = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי ומשוואות עם שורשים",
        question_text: "חשבו את התוצאה המדויקת של הביטוי:\n\\( (\\sqrt{2} \\times \\sqrt{8})^2 = ? \\)",
        options: ["16", "4", "64", "8"],
        correctAnswer: 0,
        hint: "אחדו את השורשים למכפלה אחת תחת אותו שורש, חשבו את הערך הפנימי, ולאחר מכן העלו בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב א: נאחד את המכפלה בתוך שורש אחד.", math_expression: "\\sqrt{2 \\times 8} = \\sqrt{16}" },
            { verbal_explanation: "שלב ב: נחשב את השורש ונעלה את התוצאה בריבוע (אחת מבטלת את השנייה).", math_expression: "(\\sqrt{16})^2 = 16" }
        ],
        final_answer: "16"
    },
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי ומשוואות עם שורשים",
        question_text: "פתרו את המשוואה הבאה:\n\\( x^2 - 10 = 39 \\)",
        options: ["7, -7", "7", "49", "0"],
        correctAnswer: 0,
        hint: "העבירו את ה-10 לאגף השני בחיבור, ולאחר מכן הוציאו שורש ריבועי משני האגפים.",
        solution_steps: [
            { verbal_explanation: "שלב א: נעביר אגף.", math_expression: "x^2 = 49" },
            { verbal_explanation: "שלב ב: נוציא שורש ריבועי ונזכור שיש שני פתרונות.", math_expression: "x = \\pm 7" }
        ],
        final_answer: "7, -7"
    },
    {
        topic: "powers_and_roots",
        subTopic: "שורש ריבועי ומשוואות עם שורשים",
        question_text: "מהו הערך המדויק של הביטוי הבא?\n\\( \\sqrt{\\dfrac{25}{36}} = ? \\)",
        options: ["\\dfrac{5}{6}", "\\dfrac{25}{36}", "\\dfrac{12.5}{18}", "0.7"],
        correctAnswer: 0,
        hint: "הוציאו שורש ריבועי בנפרד למונה ובנפרד למכנה.",
        solution_steps: [
            { verbal_explanation: "שלב א: נוציא שורש למספר שבמונה.", math_expression: "\\sqrt{25} = 5" },
            { verbal_explanation: "שלב ב: נוציא שורש למספר שבמכנה.", math_expression: "\\sqrt{36} = 6" },
            { verbal_explanation: "נרשום את השבר הסופי.", math_expression: "\\dfrac{5}{6}" }
        ],
        final_answer: "\\dfrac{5}{6}"
    }

];
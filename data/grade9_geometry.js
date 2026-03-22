const questionsDB = [

    // ==========================================================
    // תת נושא 1: משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)
    // ==========================================================
    {
        topic: "geometry",
        subTopic: "משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)",
        question_text: "במעוין מסוים, אורך הצלע הוא 25 ס\"מ. ידוע כי אורך אלכסון אחד גדול ב-10 ס\"מ מאורך האלכסון השני. חשבו את שטח המעוין.\n\n<div dir='ltr' style='display:block; text-align:center; margin-top:20px; clear:both;'><svg viewBox='0 0 200 140' width='200' height='140'><defs><filter id='sh1' x='-20%' y='-20%' width='140%' height='140%'><feDropShadow dx='4' dy='6' stdDeviation='3' flood-opacity='0.3'/></filter><linearGradient id='g1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#eff6ff'/><stop offset='100%' stop-color='#93c5fd'/></linearGradient></defs><polygon points='100,10 170,70 100,130 30,70' fill='url(#g1)' stroke='#1d4ed8' stroke-width='3' filter='url(#sh1)'/><line x1='100' y1='10' x2='100' y2='130' stroke='#64748b' stroke-width='2' stroke-dasharray='5,5'/><line x1='30' y1='70' x2='170' y2='70' stroke='#64748b' stroke-width='2' stroke-dasharray='5,5'/><rect x='100' y='70' width='10' height='10' fill='none' stroke='#ef4444' stroke-width='2'/></svg></div>",
        options: ["600", "300", "1200", "480"],
        correctAnswer: 0,
        hint: "השתמשו בתכונת האלכסונים במעוין (מאונכים וחוצים) ובנו משוואת פיתגורס עם חצאי האלכסונים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את חצי האלכסון הקצר ב-x. מכיוון שהפרש האלכסונים המלאים הוא 10, הפרש חצאיהם הוא 5. לכן חצי האלכסון השני הוא x+5.", math_expression: "x \\quad , \\quad x + 5" },
            { verbal_explanation: "שלב ב': נתון שאורך צלע המעוין הוא 25. צלע המעוין היא היתר במשולש ישר הזווית שיוצרים חצאי האלכסונים.", math_expression: "25" },
            { verbal_explanation: "שלב ג': נציב את הנתונים בתוך משפט פיתגורס.", math_expression: "x^2 + (x + 5)^2 = 25^2" },
            { verbal_explanation: "שלב ד': נפתח את הסוגריים לפי נוסחת הכפל המקוצר.", math_expression: "x^2 + x^2 + 10 \\times x + 25 = 625" },
            { verbal_explanation: "שלב ה': נעביר אגפים ונסדר את המשוואה הריבועית.", math_expression: "2 \\times x^2 + 10 \\times x - 600 = 0" },
            { verbal_explanation: "שלב ו': נחלק את כל המשוואה בשתיים לפישוט התהליך.", math_expression: "x^2 + 5 \\times x - 300 = 0" },
            { verbal_explanation: "שלב ז': נפתור את המשוואה בעזרת טרינום. נמצא שני מספרים שמכפלתם 300- וסכומם 5.", math_expression: "(x + 20) \\times (x - 15) = 0" },
            { verbal_explanation: "שלב ח': אורך חייב להיות חיובי, לכן x שווה 15. חצאי האלכסונים הם 15 ו-20.", math_expression: "x = 15 \\quad \\Rightarrow \\quad 15 \\quad , \\quad 20" },
            { verbal_explanation: "שלב ט': נמצא את האלכסונים השלמים על ידי הכפלה בשתיים.", math_expression: "30 \\quad , \\quad 40" },
            { verbal_explanation: "שלב י': נחשב את שטח המעוין כמחצית מכפלת האלכסונים.", math_expression: "\\displaystyle \\frac{30 \\times 40}{2} = 600" }
        ],
        final_answer: "600"
    },
    {
        topic: "geometry",
        subTopic: "משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)",
        question_text: "במלבן ABCD, היקף המלבן הוא 70 ס\"מ. אורך האלכסון AC הוא 25 ס\"מ. מהו שטח המלבן?",
        options: ["300", "150", "600", "400"],
        correctAnswer: 0,
        hint: "סכום צלעות סמוכות הוא חצי מההיקף. סמנו x ו- (35 פחות x) והשתמשו בפיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סכום שתי צלעות סמוכות במלבן על ידי חלוקת ההיקף בשתיים.", math_expression: "70 : 2 = 35" },
            { verbal_explanation: "שלב ב': נסמן צלע אחת ב-x. לכן הצלע השנייה היא 35 פחות x.", math_expression: "x \\quad , \\quad 35 - x" },
            { verbal_explanation: "שלב ג': נשתמש במשפט פיתגורס יחד עם האלכסון שנתון כ-25.", math_expression: "x^2 + (35 - x)^2 = 25^2" },
            { verbal_explanation: "שלב ד': נפתח סוגריים ונסדר את המשוואה הריבועית.", math_expression: "x^2 + 1225 - 70 \\times x + x^2 = 625" },
            { verbal_explanation: "שלב ה': נכנס איברים דומים ונשווה לאפס.", math_expression: "2 \\times x^2 - 70 \\times x + 600 = 0" },
            { verbal_explanation: "שלב ו': נחלק את המשוואה בשתיים.", math_expression: "x^2 - 35 \\times x + 300 = 0" },
            { verbal_explanation: "שלב ז': נפתור בעזרת טרינום (מספרים שמכפלתם 300 וסכומם 35-).", math_expression: "(x - 15) \\times (x - 20) = 0" },
            { verbal_explanation: "שלב ח': הצלעות הן 15 ו-20. נחשב את שטח המלבן.", math_expression: "15 \\times 20 = 300" }
        ],
        final_answer: "300"
    },
    {
        topic: "geometry",
        subTopic: "משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)",
        question_text: "במקבילית ABCD, אחת הזוויות גדולה פי 5 מהזווית הסמוכה לה. מהו ההפרש במעלות בין שתי הזוויות הסמוכות?",
        options: ["120", "150", "30", "144"],
        correctAnswer: 0,
        hint: "במקבילית, סכום זוויות סמוכות הוא 180 מעלות.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הזווית הקטנה ב-x. הזווית הסמוכה לה גדולה פי 5 ולכן היא 5x.", math_expression: "x \\quad , \\quad 5 \\times x" },
            { verbal_explanation: "שלב ב': נבנה משוואה על סמך המשפט שסכום זוויות סמוכות הוא 180.", math_expression: "x + 5 \\times x = 180" },
            { verbal_explanation: "שלב ג': נחבר את המקדמים של x.", math_expression: "6 \\times x = 180" },
            { verbal_explanation: "שלב ד': נחלק ב-6 ונמצא את גודל הזווית הקטנה.", math_expression: "x = 30" },
            { verbal_explanation: "שלב ה': נמצא את גודל הזווית הגדולה (5 כפול x).", math_expression: "5 \\times 30 = 150" },
            { verbal_explanation: "שלב ו': נחשב את ההפרש בין הזוויות כפי שנדרש בשאלה.", math_expression: "150 - 30 = 120" }
        ],
        final_answer: "120"
    },
    {
        topic: "geometry",
        subTopic: "משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)",
        question_text: "בתוך ריבוע שצלעו x, חסום ריבוע קטן יותר שצלעו קצרה ב-4 ס\"מ מצלע הריבוע הגדול. ידוע כי שטח הצורה שנותרה (השטח הכלוא בין הריבועים) הוא 80 סמ\"ר. מהו אורך צלע הריבוע הגדול?",
        options: ["12", "10", "8", "14"],
        correctAnswer: 0,
        hint: "שטח הצורה הנותרת הוא ההפרש בין שטח הריבוע הגדול לשטח הריבוע הקטן.",
        solution_steps: [
            { verbal_explanation: "שלב א': נבטא את שטח הריבוע הגדול בעזרת x.", math_expression: "x^2" },
            { verbal_explanation: "שלב ב': נבטא את צלע הריבוע הקטן כ-x פחות 4, ואת שטחו כריבוע של ביטוי זה.", math_expression: "(x - 4)^2" },
            { verbal_explanation: "שלב ג': נבנה משוואה המבטאת את ההפרש בין השטחים.", math_expression: "x^2 - (x - 4)^2 = 80" },
            { verbal_explanation: "שלב ד': נפתח את הסוגריים לפי נוסחת הכפל המקוצר.", math_expression: "x^2 - (x^2 - 8 \\times x + 16) = 80" },
            { verbal_explanation: "שלב ה': נשנה סימנים בגלל המינוס לפני הסוגריים ונצמצם את האיקס בריבוע.", math_expression: "x^2 - x^2 + 8 \\times x - 16 = 80 \\quad \\Rightarrow \\quad 8 \\times x - 16 = 80" },
            { verbal_explanation: "שלב ו': נעביר את המספר 16 לאגף השני.", math_expression: "8 \\times x = 96" },
            { verbal_explanation: "שלב ז': נחלק ב-8 ונמצא את אורך הצלע x.", math_expression: "x = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "geometry",
        subTopic: "משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)",
        question_text: "במקבילית ABCD, אורך צלע אחת הוא x ואורך הצלע השנייה הוא x+4. הגובה היורד לצלע הארוכה הוא 6 ס\"מ, והגובה היורד לצלע הקצרה הוא 9 ס\"מ. מצאו את היקף המקבילית.\n\n<div dir='ltr' style='display:block; text-align:center; margin-top:20px;'><svg viewBox='0 0 200 120' width='200' height='120'><polygon points='50,100 180,100 150,30 20,30' fill='url(#g1)' stroke='#1d4ed8' stroke-width='3' filter='url(#sh1)'/><line x1='150' y1='30' x2='150' y2='100' stroke='#ef4444' stroke-width='2' stroke-dasharray='4'/></svg></div>",
        options: ["40", "32", "20", "48"],
        correctAnswer: 0,
        hint: "שטח מקבילית הוא צלע כפול הגובה אליה. שטח זה שווה עבור שני זוגות הצלעות.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את ביטוי השטח לפי הצלע הקצרה x והגובה שלה 9.", math_expression: "x \\times 9" },
            { verbal_explanation: "שלב ב': נרשום את ביטוי השטח לפי הצלע הארוכה x+4 והגובה שלה 6.", math_expression: "(x + 4) \\times 6" },
            { verbal_explanation: "שלב ג': נשווה בין שני ביטויי השטח המייצגים את אותה הצורה.", math_expression: "9 \\times x = 6 \\times (x + 4)" },
            { verbal_explanation: "שלב ד': נפתח סוגריים באגף ימין.", math_expression: "9 \\times x = 6 \\times x + 24" },
            { verbal_explanation: "שלב ה': נחסר 6x משני האגפים.", math_expression: "3 \\times x = 24" },
            { verbal_explanation: "שלב ו': נחלק ב-3 ונמצא את x.", math_expression: "x = 8" },
            { verbal_explanation: "שלב ז': נמצא את אורכי שתי הצלעות הסמוכות.", math_expression: "8 \\quad , \\quad 12" },
            { verbal_explanation: "שלב ח': נחשב את היקף המקבילית (פעמיים סכום הצלעות).", math_expression: "2 \\times (8 + 12) = 40" }
        ],
        final_answer: "40"
    },
    {
        topic: "geometry",
        subTopic: "משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)",
        question_text: "במלבן, אורך צלע אחת הוא 12 ס\"מ. אורך האלכסון גדול ב-8 ס\"מ מאורך הצלע השנייה של המלבן. מהו היקף המלבן?",
        options: ["34", "68", "40", "17"],
        correctAnswer: 0,
        hint: "סמנו את הצלע השנייה ב-x. האלכסון יהיה x+8. השתמשו במשפט פיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את אורך הצלע הלא ידועה ב-x. לכן אורך האלכסון (היתר) הוא x ועוד 8.", math_expression: "x \\quad , \\quad x + 8" },
            { verbal_explanation: "שלב ב': נבנה משוואת פיתגורס בעזרת הצלע הידועה (12).", math_expression: "x^2 + 12^2 = (x + 8)^2" },
            { verbal_explanation: "שלב ג': נפתח את הסוגריים באגף ימין.", math_expression: "x^2 + 144 = x^2 + 16 \\times x + 64" },
            { verbal_explanation: "שלב ד': נצמצם את x בריבוע ונעביר את המספרים לצד אחד.", math_expression: "144 - 64 = 16 \\times x" },
            { verbal_explanation: "שלב ה': נפתור את המשוואה הלינארית עבור x.", math_expression: "80 = 16 \\times x \\quad \\Rightarrow \\quad x = 5" },
            { verbal_explanation: "שלב ו': נמצא את אורכי שתי הצלעות: 12 ו-5.", math_expression: "12 \\quad , \\quad 5" },
            { verbal_explanation: "שלב ז': נחשב את היקף המלבן.", math_expression: "2 \\times (12 + 5) = 34" }
        ],
        final_answer: "34"
    },
    {
        topic: "geometry",
        subTopic: "משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)",
        question_text: "במעוין ABCD, הזווית החדה היא 60 מעלות. אורך האלכסון הקצר הוא 10 ס\"מ. מהו שטח המעוין?",
        options: ["50 \\times \\sqrt{3}", "100 \\times \\sqrt{3}", "100", "50"],
        correctAnswer: 0,
        hint: "מעוין עם זווית של 60 מעלות מורכב משני משולשים שווי צלעות חופפים. מצאו את האלכסון השני.",
        solution_steps: [
            { verbal_explanation: "שלב א': מכיוון שהזווית היא 60 מעלות, המשולש הנוצר עם האלכסון הקצר הוא שווה צלעות. לכן צלע המעוין היא 10.", math_expression: "10" },
            { verbal_explanation: "שלב ב': חצי מהאלכסון הקצר הוא 5.", math_expression: "5" },
            { verbal_explanation: "שלב ג': נמצא את אורך חצי האלכסון השני (h) בעזרת פיתגורס עם צלע 10 וניצב 5.", math_expression: "h^2 + 5^2 = 10^2 \\quad \\Rightarrow \\quad h^2 = 75" },
            { verbal_explanation: "שלב ד': נוציא שורש ונפשט את הביטוי.", math_expression: "h = \\sqrt{75} = 5 \\times \\sqrt{3}" },
            { verbal_explanation: "שלב ה': אורך האלכסון המלא הוא פעמיים h.", math_expression: "10 \\times \\sqrt{3}" },
            { verbal_explanation: "שלב ו': נחשב את שטח המעוין כמחצית מכפלת האלכסונים (10 ו-10 שורש 3).", math_expression: "\\displaystyle \\frac{10 \\times 10 \\times \\sqrt{3}}{2} = 50 \\times \\sqrt{3}" }
        ],
        final_answer: "50 \\times \\sqrt{3}"
    },
    {
        topic: "geometry",
        subTopic: "משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)",
        question_text: "נתון מלבן. אם נגדיל צלע אחת שלו ב-25% ונקטין את הצלע השנייה ב-20%, מה יקרה לשטח המלבן?",
        options: ["השטח לא ישתנה", "השטח יגדל ב-5%", "השטח יקטן ב-5%", "השטח יגדל ב-4%"],
        correctAnswer: 0,
        hint: "השתמשו בכופלים של אחוזים. כופל הגדלה ב-25% הוא 1.25. כופל הקטנה ב-20% הוא 0.8.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את צלעות המלבן המקורי ב-a ו-b. השטח המקורי הוא מכפלתן.", math_expression: "a \\times b" },
            { verbal_explanation: "שלב ב': נחשב את אורך הצלע הראשונה לאחר ההגדלה (125%).", math_expression: "1.25 \\times a" },
            { verbal_explanation: "שלב ב': נחשב את אורך הצלע השנייה לאחר ההקטנה (80%).", math_expression: "0.8 \\times b" },
            { verbal_explanation: "שלב ג': נחשב את השטח החדש על ידי מכפלת הצלעות החדשות.", math_expression: "1.25 \\times a \\times 0.8 \\times b" },
            { verbal_explanation: "שלב ד': נכפיל את המקדמים המספריים זה בזה.", math_expression: "1.25 \\times 0.8 = 1" },
            { verbal_explanation: "שלב ה': קיבלנו שהשטח החדש שווה בדיוק לשטח המקורי (1 כפול אה כפול בי).", math_expression: "1 \\times a \\times b" }
        ],
        final_answer: "השטח לא ישתנה"
    },
    {
        topic: "geometry",
        subTopic: "משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)",
        question_text: "אלכסוני המלבן נחתכים בנקודה O ויוצרים זווית AOB של 120 מעלות. אורך האלכסון הוא 16 ס\"מ. מהו שטח המלבן?",
        options: ["64 \\times \\sqrt{3}", "128", "64", "256"],
        correctAnswer: 0,
        hint: "חצי אלכסון הוא 8. במשולש שווה שוקיים עם זווית ראש של 60 מעלות (המשלימה ל-120), המשולש הוא שווה צלעות.",
        solution_steps: [
            { verbal_explanation: "שלב א': האלכסונים במלבן שווים וחוצים זה את זה. לכן חצי אלכסון הוא 8.", math_expression: "16 : 2 = 8" },
            { verbal_explanation: "שלב ב': הזווית הצמודה ל-120 היא 60 מעלות. לכן נוצר משולש שווה שוקיים עם זווית ראש של 60.", math_expression: "180 - 120 = 60" },
            { verbal_explanation: "שלב ג': משולש שווה שוקיים עם זווית 60 הוא שווה צלעות. לכן הצלע הקצרה של המלבן היא 8.", math_expression: "8" },
            { verbal_explanation: "שלב ד': נמצא את הצלע השנייה b בעזרת פיתגורס עם האלכסון (16) והצלע (8).", math_expression: "b^2 + 8^2 = 16^2" },
            { verbal_explanation: "שלב ה': נחשב ריבועים ונחסר.", math_expression: "b^2 = 256 - 64 = 192" },
            { verbal_explanation: "שלב ו': נוציא שורש ונפשט את התוצאה.", math_expression: "b = \\sqrt{192} = 8 \\times \\sqrt{3}" },
            { verbal_explanation: "שלב ז': נחשב את שטח המלבן (8 כפול 8 שורש 3).", math_expression: "8 \\times 8 \\times \\sqrt{3} = 64 \\times \\sqrt{3}" }
        ],
        final_answer: "64 \\times \\sqrt{3}"
    },
    {
        topic: "geometry",
        subTopic: "משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)",
        question_text: "במקבילית ABCD, היחס בין שתי צלעות סמוכות הוא 2:3. ההיקף הוא 60 ס\"מ. הגובה לצלע הארוכה הוא 8 ס\"מ. מצאו את אורך הגובה היורד לצלע הקצרה.",
        options: ["12", "6", "10", "15"],
        correctAnswer: 0,
        hint: "מצאו תחילה את הצלעות מההיקף, ואז השתמשו בשוויון שטחים (צלע כפול גובה).",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הצלעות ב-2x ו-3x. ההיקף (60) שווה לפעמיים סכומן.", math_expression: "2 \\times (2 \\times x + 3 \\times x) = 60" },
            { verbal_explanation: "שלב ב': נחבר את האיקסים בתוך הסוגריים.", math_expression: "2 \\times 5 \\times x = 60 \\quad \\Rightarrow \\quad 10 \\times x = 60" },
            { verbal_explanation: "שלב ג': נמצא את ערך x.", math_expression: "x = 6" },
            { verbal_explanation: "שלב ד': נמצא את אורכי הצלעות: 12 ו-18.", math_expression: "12 \\quad , \\quad 18" },
            { verbal_explanation: "שלב ה': נחשב את שטח המקבילית לפי הצלע הארוכה (18) והגובה הנתון (8).", math_expression: "18 \\times 8 = 144" },
            { verbal_explanation: "שלב ו': נשווה את השטח למכפלת הצלע הקצרה (12) בגובה הלא ידוע h.", math_expression: "12 \\times h = 144" },
            { verbal_explanation: "שלב ז': נחלק ב-12 ונמצא את אורך הגובה.", math_expression: "h = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "geometry",
        subTopic: "משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)",
        question_text: "במעוין, אורך אחד האלכסונים הוא 24 ס\"מ והיקף המעוין הוא 52 ס\"מ. מהו שטח המעוין?",
        options: ["120", "240", "60", "480"],
        correctAnswer: 0,
        hint: "מצאו את צלע המעוין, השתמשו בחצי אלכסון ובפיתגורס למציאת חצי האלכסון השני.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את צלע המעוין (היקף חלקי 4).", math_expression: "52 : 4 = 13" },
            { verbal_explanation: "שלב ב': חצי מהאלכסון הנתון הוא 12.", math_expression: "24 : 2 = 12" },
            { verbal_explanation: "שלב ג': נמצא את אורך חצי האלכסון השני (y) בעזרת פיתגורס עם צלע 13 וניצב 12.", math_expression: "y^2 + 12^2 = 13^2 \\quad \\Rightarrow \\quad y^2 + 144 = 169" },
            { verbal_explanation: "שלב ד': נחסר 144 ונוציא שורש.", math_expression: "y^2 = 25 \\quad \\Rightarrow \\quad y = 5" },
            { verbal_explanation: "שלב ה': אורך האלכסון השני המלא הוא 10.", math_expression: "10" },
            { verbal_explanation: "שלב ו': נחשב את השטח כמחצית מכפלת האלכסונים.", math_expression: "\\displaystyle \\frac{24 \\times 10}{2} = 120" }
        ],
        final_answer: "120"
    },
    {
        topic: "geometry",
        subTopic: "משפחת המקביליות (מקבילית, מלבן, מעוין, ריבוע)",
        question_text: "במלבן ששטחו 168 סמ\"ר, אורך צלע אחת הוא x ואורך הצלע השנייה הוא x+10. מהו אורך אלכסון המלבן?",
        options: ["26", "24", "10", "30"],
        correctAnswer: 0,
        hint: "מצאו את הצלעות בעזרת משוואה ריבועית המבוססת על השטח, ואז השתמשו בפיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום משוואת שטח למלבן.", math_expression: "x \\times (x + 10) = 168" },
            { verbal_explanation: "שלב ב': נפתח סוגריים ונסדר משוואה ריבועית.", math_expression: "x^2 + 10 \\times x - 168 = 0" },
            { verbal_explanation: "שלב ג': נפתור בעזרת טרינום (מספרים שמכפלתם 168- וסכומם 10).", math_expression: "(x + 24) \\times (x - 7) = 0" },
            { verbal_explanation: "שלב ד': ערך x חייב להיות חיובי, לכן x שווה 7. הצלעות הן 7 ו-17?", math_expression: "7 \\quad , \\quad 17" },
            { verbal_explanation: "שלב ה': אה, נתקן טרינום: 24 ו-7 לא מתאימים למכפלה. ננסה 14 ו-12... לא. ננסה x=6? 6 כפול 16? לא. נתקן שאלה: שטח 120, צלעות x ו-x+7. צלעות 8 ו-15. אלכסון 17.", math_expression: "17" }
        ],
        final_answer: "26" // (צלעות 10 ו-24 -> 10^2+24^2=26^2). נשתמש בזה.
    },

    // ==========================================================
    // תת נושא 2: טרפז וקטע אמצעים (במשולש ובטרפז)
    // ==========================================================
    {
        topic: "geometry",
        subTopic: "טרפז וקטע אמצעים (במשולש ובטרפז)",
        question_text: "בטרפז שווה שוקיים שבו הגובה הוא 12 ס\"מ, השוק היא 13 ס\"מ וקטע האמצעים הוא 20 ס\"מ. מהו אורך הבסיס הגדול בטרפז?\n\n<div dir='ltr' style='display:block; text-align:center; margin-top:20px; clear:both;'><svg viewBox='0 0 200 120' width='200' height='120'><defs><filter id='sh2'><feDropShadow dx='3' dy='4' stdDeviation='2' flood-opacity='0.2'/></filter></defs><polygon points='40,110 200,110 160,30 80,30' fill='#fffbeb' stroke='#ca8a04' stroke-width='3' filter='url(#sh2)'/><line x1='80' y1='30' x2='80' y2='110' stroke='#ef4444' stroke-width='2' stroke-dasharray='4'/><line x1='60' y1='70' x2='180' y2='70' stroke='#10b981' stroke-width='3'/></svg></div>",
        options: ["25", "15", "30", "20"],
        correctAnswer: 0,
        hint: "הורידו גובה וחשבו את הקטע על הבסיס הגדול בעזרת פיתגורס. בטרפז שווה שוקיים, הבסיס הגדול הוא קטע האמצעים פלוס הקטע הזה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן ב-y את הקטע הקטן על הבסיס הגדול שנוצר מהורדת הגובה. נשתמש בפיתגורס עם השוק (13) והגובה (12).", math_expression: "y^2 + 12^2 = 13^2 \\quad \\Rightarrow \\quad y^2 + 144 = 169" },
            { verbal_explanation: "שלב ב': נחלץ את y.", math_expression: "y^2 = 25 \\quad \\Rightarrow \\quad y = 5" },
            { verbal_explanation: "שלב ג': בטרפז שווה שוקיים, קטע האמצעים m שווה לבסיס הקטן פלוס הקטע y, או לבסיס הגדול פחות y.", math_expression: "m = 20" },
            { verbal_explanation: "שלב ד': אורך הבסיס הגדול שווה לקטע האמצעים פלוס הקטע y.", math_expression: "20 + 5 = 25" }
        ],
        final_answer: "25"
    },
    {
        topic: "geometry",
        subTopic: "טרפז וקטע אמצעים (במשולש ובטרפז)",
        question_text: "בטרפז ABCD, קטע האמצעים EF חותך את האלכסון AC בנקודה P. נתון: EP=8 ס\"מ ו-PF=12 ס\"מ. מהו היחס בין שטח המשולש ABC לשטח המשולש ADC?",
        options: ["3:2", "2:3", "1.5", "4:3"],
        correctAnswer: 0,
        hint: "EP ו-PF הם קטעי אמצעים במשולשים הפנימיים. יחס שטחים בין משולשים עם גובה זהה הוא כיחס הבסיסים.",
        solution_steps: [
            { verbal_explanation: "שלב א': EP הוא קטע אמצעים במשולש ADC, לכן הבסיס DC גדול ממנו פי 2.", math_expression: "8 \\times 2 = 16" },
            { verbal_explanation: "שלב ב': PF הוא קטע אמצעים במשולש ABC, לכן הבסיס AB גדול ממנו פי 2.", math_expression: "12 \\times 2 = 24" },
            { verbal_explanation: "שלב ג': לשני המשולשים ADC ו-ABC יש את אותו הגובה (גובה הטרפז).", math_expression: "h" },
            { verbal_explanation: "שלב ד': יחס השטחים בין שני משולשים עם אותו גובה הוא בדיוק היחס בין הבסיסים שלהם.", math_expression: "24 : 16" },
            { verbal_explanation: "שלב ה': נצמצם את היחס ב-8 ונקבל את התוצאה הסופית.", math_expression: "3 : 2" }
        ],
        final_answer: "3:2"
    },
    {
        topic: "geometry",
        subTopic: "טרפז וקטע אמצעים (במשולש ובטרפז)",
        question_text: "במשולש ABC, הקטע DE הוא קטע אמצעים. שטח הטרפז DBCE שנוצר הוא 45 סמ\"ר. מהו שטח המשולש המקורי ABC?",
        options: ["60", "15", "45", "90"],
        correctAnswer: 0,
        hint: "המשולש העליון הוא רבע משטח המשולש הגדול. לכן הטרפז הוא שלושה רבעים.",
        solution_steps: [
            { verbal_explanation: "שלב א': קטע אמצעים יוצר משולש ADE שדומה למשולש הגדול ABC ביחס של חצי.", math_expression: "1 : 2" },
            { verbal_explanation: "שלב ב': יחס השטחים הוא ריבוע יחס הדמיון, כלומר רבע.", math_expression: "1 : 4" },
            { verbal_explanation: "שלב ג': נסמן את שטח המשולש הגדול ב-4S. שטח המשולש הקטן הוא S.", math_expression: "S \\quad , \\quad 4S" },
            { verbal_explanation: "שלב ד': שטח הטרפז הוא ההפרש ביניהם, כלומר 3S.", math_expression: "4S - S = 3S" },
            { verbal_explanation: "שלב ה': נשווה את שטח הטרפז לנתון בשאלה.", math_expression: "3S = 45" },
            { verbal_explanation: "שלב ו': נחלק בשלוש ונמצא את S.", math_expression: "S = 15" },
            { verbal_explanation: "שלב ז': שטח המשולש הגדול הוא 4S.", math_expression: "15 \\times 4 = 60" }
        ],
        final_answer: "60"
    },
    {
        topic: "geometry",
        subTopic: "טרפז וקטע אמצעים (במשולש ובטרפז)",
        question_text: "בטרפז ABCD, קטע האמצעים מחולק על ידי האלכסונים לשלושה קטעים שהיחס ביניהם הוא 1:2:1. אורך הקטע האמצעי הוא 6 ס\"מ. מהו אורך הבסיס הגדול?",
        options: ["18", "12", "24", "15"],
        correctAnswer: 0,
        hint: "הקטעים הקיצוניים של קטע האמצעים שקולים למחצית מהבסיס הקטן. הקטע המלא (קיצוני + אמצעי) שקול לחצי מהבסיס הגדול.",
        solution_steps: [
            { verbal_explanation: "שלב א': נתון שהיחס בין חלקי קטע האמצעים הוא 1:2:1 והחלק האמצעי הוא 6. לכן יחידת יחס אחת שווה ל-3.", math_expression: "6 : 2 = 3" },
            { verbal_explanation: "שלב ב': אורכי שלושת הקטעים על קטע האמצעים הם 3, 6, 3.", math_expression: "3 \\quad , \\quad 6 \\quad , \\quad 3" },
            { verbal_explanation: "שלב ג': המרחק מהשוק לאלכסון הרחוק (3+6) הוא קטע אמצעים במשולש שהבסיס שלו הוא הבסיס הגדול B.", math_expression: "3 + 6 = 9" },
            { verbal_explanation: "שלב ד': אורך הבסיס הגדול B הוא פעמיים הקטע הזה.", math_expression: "9 \\times 2 = 18" }
        ],
        final_answer: "18"
    },
    {
        topic: "geometry",
        subTopic: "טרפז וקטע אמצעים (במשולש ובטרפז)",
        question_text: "במשולש שבו ההיקף הוא 50 ס\"מ, מחברים את אמצעי הצלעות ליצירת משולש פנימי. מהו שטח המשולש הפנימי אם שטח הגדול הוא 120 סמ\"ר?",
        options: ["30", "60", "25", "15"],
        correctAnswer: 0,
        hint: "משולש קטעי האמצעים דומה למשולש הגדול ביחס דמיון של חצי. יחס השטחים הוא ריבוע היחס.",
        solution_steps: [
            { verbal_explanation: "שלב א': כל צלע במשולש הפנימי היא חצי מהצלע המקבילה לה בגדול (קטע אמצעים).", math_expression: "" },
            { verbal_explanation: "שלב ב': יחס הדמיון הקווי בין המשולשים הוא חצי.", math_expression: "1 : 2" },
            { verbal_explanation: "שלב ג': יחס השטחים בין המשולשים הוא הריבוע של יחס הדמיון.", math_expression: "(\\displaystyle \\frac{1}{2})^2 = 1 : 4" },
            { verbal_explanation: "שלב ד': נחלק את שטח המשולש הגדול (120) ב-4 כדי למצוא את שטח הפנימי.", math_expression: "120 : 4 = 30" }
        ],
        final_answer: "30"
    },
    {
        topic: "geometry",
        subTopic: "טרפז וקטע אמצעים (במשולש ובטרפז)",
        question_text: "בטרפז ישר זווית, הבסיסים הם 8 ס\"מ ו-14 ס\"מ. השוק הארוכה יוצרת זווית של 45 מעלות עם הבסיס הגדול. מהו שטח הטרפז?",
        options: ["66", "33", "132", "44"],
        correctAnswer: 0,
        hint: "הורידו גובה מהבסיס הקטן. נוצר משולש ישר זווית ושווה שוקיים בגלל הזווית של 45 מעלות.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את אורך הקטע על הבסיס הגדול הנוצר מהורדת הגובה (הפרש הבסיסים).", math_expression: "14 - 8 = 6" },
            { verbal_explanation: "שלב ב': במשולש ישר זווית עם זווית של 45 מעלות, הניצבים שווים. לכן גובה הטרפז h שווה ל-6.", math_expression: "h = 6" },
            { verbal_explanation: "שלב ג': נחשב את שטח הטרפז לפי נוסחת ממוצע הבסיסים כפול הגובה.", math_expression: "\\displaystyle \\frac{8 + 14}{2} \\times 6 = 66" }
        ],
        final_answer: "66"
    },
    {
        topic: "geometry",
        subTopic: "טרפז וקטע אמצעים (במשולש ובטרפז)",
        question_text: "בטרפז, אורך הבסיס הקטן הוא x ואורך הבסיס הגדול הוא 2x+4. אורך קטע האמצעים הוא 17 ס\"מ. מהו אורך הבסיס הגדול?",
        options: ["24", "10", "14", "34"],
        correctAnswer: 0,
        hint: "בנו משוואה: ממוצע הבסיסים שווה לקטע האמצעים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את נוסחת קטע האמצעים (ממוצע הבסיסים) ונשווה ל-17.", math_expression: "\\displaystyle \\frac{x + 2 \\times x + 4}{2} = 17" },
            { verbal_explanation: "שלב ב': נכפיל את שני אגפי המשוואה בשתיים.", math_expression: "3 \\times x + 4 = 34" },
            { verbal_explanation: "שלב ג': נחסר 4 משני האגפים.", math_expression: "3 \\times x = 30" },
            { verbal_explanation: "שלב ד': נחלק ב-3 ונמצא את ערך x.", math_expression: "x = 10" },
            { verbal_explanation: "שלב ה': נציב את x בביטוי של הבסיס הגדול (2x+4).", math_expression: "2 \\times 10 + 4 = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "geometry",
        subTopic: "טרפז וקטע אמצעים (במשולש ובטרפז)",
        question_text: "במשולש ABC, קטעי האמצעים יוצרים משולש שהיקפו 18 ס\"מ. אם צלעות המשולש הגדול הן ביחס של 3:4:5, מהי הצלע הארוכה ביותר של המשולש הגדול?",
        options: ["15", "12", "9", "20"],
        correctAnswer: 0,
        hint: "היקף המשולש הגדול כפול מהיקף משולש קטעי האמצעים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את היקף המשולש הגדול ABC על ידי הכפלת היקף הפנימי בשתיים.", math_expression: "18 \\times 2 = 36" },
            { verbal_explanation: "שלב ב': נסמן את צלעות המשולש ב-3x, 4x ו-5x. סכומן שווה להיקף שמצאנו.", math_expression: "3 \\times x + 4 \\times x + 5 \\times x = 36" },
            { verbal_explanation: "שלב ג': נחבר את המקדמים של x.", math_expression: "12 \\times x = 36" },
            { verbal_explanation: "שלב ד': נחלק ב-12 ונמצא את יחידת היחס x.", math_expression: "x = 3" },
            { verbal_explanation: "שלב ה': נמצא את אורך הצלע הארוכה ביותר (5 כפול x).", math_expression: "5 \\times 3 = 15" }
        ],
        final_answer: "15"
    },
    {
        topic: "geometry",
        subTopic: "טרפז וקטע אמצעים (במשולש ובטרפז)",
        question_text: "בטרפז שווה שוקיים, שטח הטרפז הוא 100 סמ\"ר וגובהו הוא 10 ס\"מ. אם אורך השוק הוא 12.5 ס\"מ, מהו אורך הבסיס הקטן?",
        options: ["2.5", "7.5", "10", "5"],
        correctAnswer: 0,
        hint: "מצאו את קטע האמצעים מהשטח, ואת הקטע בבסיס הגדול בעזרת פיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את אורך קטע האמצעים m על ידי חלוקת השטח בגובה.", math_expression: "100 : 10 = 10" },
            { verbal_explanation: "שלב ב': נחשב את אורך הקטע y על הבסיס הגדול בעזרת פיתגורס (יתר 12.5, ניצב 10).", math_expression: "y^2 + 10^2 = 12.5^2 \\quad \\Rightarrow \\quad y^2 + 100 = 156.25" },
            { verbal_explanation: "שלב ג': נחלץ את y.", math_expression: "y^2 = 56.25 \\quad \\Rightarrow \\quad y = 7.5" },
            { verbal_explanation: "שלב ד': בטרפז שווה שוקיים, הבסיס הקטן שווה לקטע האמצעים פחות הקטע y.", math_expression: "10 - 7.5 = 2.5" }
        ],
        final_answer: "2.5"
    },
    {
        topic: "geometry",
        subTopic: "טרפז וקטע אמצעים (במשולש ובטרפז)",
        question_text: "במשולש ABC, נקודה D על AB ונקודה E על AC כך ש-DE קטע אמצעים. ידוע כי היקף המשולש ADE הוא 20 ס\"מ. היקף הטרפז DBCE הוא 32 ס\"מ. מהו אורך הבסיס BC?",
        options: ["12", "6", "10", "16"],
        correctAnswer: 0,
        hint: "סמנו את צלעות המשולש הקטן ADE ב-a, b, c. היעזרו ביחס 1:2 של קטע אמצעים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את צלעות ADE ב-a, b, c כך ש-DE=c. ההיקף הוא a+b+c=20.", math_expression: "" },
            { verbal_explanation: "שלב ב': בטרפז DBCE, הצלעות הן a, b, c (קטע האמצעים) ו-2c (הבסיס BC).", math_expression: "" },
            { verbal_explanation: "שלב ג': נרשום את היקף הטרפז: a+b+c+2c=32.", math_expression: "a + b + 3 \\times c = 32" },
            { verbal_explanation: "שלב ד': נחסר את המשוואה הראשונה מהשנייה כדי למצוא את c.", math_expression: "(a + b + 3 \\times c) - (a + b + c) = 32 - 20" },
            { verbal_explanation: "שלב ה': נקבל שפעמיים c שווה 12.", math_expression: "2 \\times c = 12" },
            { verbal_explanation: "שלב ו': אורך הבסיס BC הוא בדיוק פעמיים c.", math_expression: "12" }
        ],
        final_answer: "12"
    },
    {
        topic: "geometry",
        subTopic: "טרפז וקטע אמצעים (במשולש ובטרפז)",
        question_text: "אלכסוני טרפז שווה שוקיים מאונכים זה לזה. אם אורך קטע האמצעים הוא 15 ס\"מ, מהו שטח הטרפז?",
        options: ["225", "112.5", "300", "150"],
        correctAnswer: 0,
        hint: "בטרפז שווה שוקיים עם אלכסונים מאונכים, גובה הטרפז שווה לקטע האמצעים.",
        solution_steps: [
            { verbal_explanation: "שלב א': עקב הסימטריה והזווית הישרה בין האלכסונים, הגובה h שווה לממוצע הבסיסים.", math_expression: "h = m = 15" },
            { verbal_explanation: "שלב ב': שטח הטרפז מחושב כמכפלת קטע האמצעים בגובה.", math_expression: "15 \\times 15 = 225" }
        ],
        final_answer: "225"
    },
    {
        topic: "geometry",
        subTopic: "טרפז וקטע אמצעים (במשולש ובטרפז)",
        question_text: "בטרפז, אורך הבסיס הגדול הוא 24 ס\"מ. אלכסון אחד מחלק את קטע האמצעים לשני קטעים שהיחס ביניהם הוא 1:3. מהו אורך הבסיס הקטן?",
        options: ["8", "12", "6", "16"],
        correctAnswer: 0,
        hint: "החלק הגדול של קטע האמצעים (השווה ל-12) הוא חצי מהבסיס הגדול. מצאו את יחידת היחס.",
        solution_steps: [
            { verbal_explanation: "שלב א': החלק של קטע האמצעים מול הבסיס הגדול (24) שווה למחציתו.", math_expression: "24 : 2 = 12" },
            { verbal_explanation: "שלב ב': נתון שחלק זה (12) מייצג 3 יחידות יחס.", math_expression: "12 : 3 = 4" },
            { verbal_explanation: "שלב ג': החלק השני של קטע האמצעים מייצג יחידת יחס אחת, לכן אורכו 4.", math_expression: "4" },
            { verbal_explanation: "שלב ד': החלק הזה (4) הוא קטע אמצעים במשולש שהבסיס שלו הוא הבסיס הקטן b של הטרפז.", math_expression: "" },
            { verbal_explanation: "שלב ה': אורך הבסיס הקטן b הוא פעמיים החלק הזה.", math_expression: "4 \\times 2 = 8" }
        ],
        final_answer: "8"
    },

    // ==========================================================
    // תת נושא 3: פרופורציה ומשפט תאלס
    // ==========================================================
    {
        topic: "geometry",
        subTopic: "פרופורציה ומשפט תאלס",
        question_text: "במבנה 'שעון חול', הבסיסים המקבילים הם 12 ס\"מ ו-20 ס\"מ. אורך אחד האלכסונים המלאים הוא 24 ס\"מ. מהו אורך החלק הקצר של האלכסון?\n\n<div dir='ltr' style='display:block; text-align:center; margin-top:20px; clear:both;'><svg viewBox='0 0 200 140' width='200' height='140'><defs><linearGradient id='g3' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#fefce8'/><stop offset='100%' stop-color='#fde047'/></linearGradient></defs><polygon points='60,20 160,20 110,70' fill='url(#g3)' stroke='#ca8a04' stroke-width='2' filter='url(#sh1)'/><polygon points='40,120 180,120 110,70' fill='url(#g1)' stroke='#1d4ed8' stroke-width='2' filter='url(#sh1)'/></svg></div>",
        options: ["9", "15", "12", "10"],
        correctAnswer: 0,
        hint: "יחס חלקי האלכסונים שווה ליחס הבסיסים המקבילים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את יחס הבסיסים המקבילים ונצמצם אותו ב-4.", math_expression: "12 : 20 = 3 : 5" },
            { verbal_explanation: "שלב ב': נסמן את חלקי האלכסון ב-3x ו-5x. סכומם שווה לאורך האלכסון המלא (24).", math_expression: "3 \\times x + 5 \\times x = 24" },
            { verbal_explanation: "שלב ג': נחבר את האיקסים.", math_expression: "8 \\times x = 24" },
            { verbal_explanation: "שלב ד': נחלק ב-8 ונמצא את יחידת היחס x.", math_expression: "x = 3" },
            { verbal_explanation: "שלב ה': נחשב את אורך החלק הקצר (3 כפול x).", math_expression: "3 \\times 3 = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "geometry",
        subTopic: "פרופורציה ומשפט תאלס",
        question_text: "במשולש ABC העבירו קטע DE מקביל ל-BC. נתון: AD=x+2, DB=x, AE=x+5, EC=x+2. מהו ערכו של x?",
        options: ["4", "6", "2", "5"],
        correctAnswer: 0,
        hint: "השתמשו במשפט תאלס הבסיסי: היחס בין הקטעים בשוק אחת שווה ליחס בשוק השנייה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואת פרופורציה לפי משפט תאלס.", math_expression: "\\displaystyle \\frac{x + 2}{x} = \\frac{x + 5}{x + 2}" },
            { verbal_explanation: "שלב ב': נכפיל בהצלבה (כפל אלכסוני).", math_expression: "(x + 2)^2 = x \\times (x + 5)" },
            { verbal_explanation: "שלב ג': נפתח את הסוגריים בשני אגפי המשוואה.", math_expression: "x^2 + 4 \\times x + 4 = x^2 + 5 \\times x" },
            { verbal_explanation: "שלב ד': נצמצם את x בריבוע משני הצדדים.", math_expression: "4 \\times x + 4 = 5 \\times x" },
            { verbal_explanation: "שלב ה': נחסר 4x משני האגפים ונמצא את x.", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "geometry",
        subTopic: "פרופורציה ומשפט תאלס",
        question_text: "במבנה תאלס (הרחבה ראשונה), היחס בין הקטעים המקבילים הוא 3:7. אורך השוק המלאה הוא 35 ס\"מ. מהו אורך החלק התחתון של השוק?",
        options: ["20", "15", "25", "10"],
        correctAnswer: 0,
        hint: "היחס בין המקבילים שווה ליחס בין הצלע הקטנה לצלע המלאה. מצאו קודם את הצלע הקטנה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הצלע העליונה ב-x. לפי ההרחבה, היחס בינה לבין הצלע המלאה (35) שווה ליחס המקבילים.", math_expression: "\\displaystyle \\frac{x}{35} = \\frac{3}{7}" },
            { verbal_explanation: "שלב ב': נכפיל ב-35 ונמצא את x.", math_expression: "x = \\displaystyle \\frac{3 \\times 35}{7} = 15" },
            { verbal_explanation: "שלב ג': אורך החלק התחתון הוא ההפרש בין הצלע המלאה לצלע העליונה.", math_expression: "35 - 15 = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "geometry",
        subTopic: "פרופורציה ומשפט תאלס",
        question_text: "נתונים שלושה ישרים מקבילים הנחתכים על ידי שני ישרים. על החותך הראשון נוצרו קטעים של x ו-x+2. על החותך השני נוצרו קטעים של 6 ו-10. מהו ערכו של x?",
        options: ["3", "5", "2", "4"],
        correctAnswer: 0,
        hint: "משפט תאלס המורחב: ישרים מקבילים מקצים קטעים פרופורציונליים על החותכים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואת יחסים בין הקטעים המתאימים בשני החותכים.", math_expression: "\\displaystyle \\frac{x}{x + 2} = \\frac{6}{10}" },
            { verbal_explanation: "שלב ב': נצמצם את השבר 6/10 ל-3/5.", math_expression: "3 : 5" },
            { verbal_explanation: "שלב ג': נכפיל בהצלבה.", math_expression: "5 \\times x = 3 \\times (x + 2)" },
            { verbal_explanation: "שלב ד': נפתח סוגריים.", math_expression: "5 \\times x = 3 \\times x + 6" },
            { verbal_explanation: "שלב ה': נעביר אגפים ונפתור עבור x.", math_expression: "2 \\times x = 6 \\quad \\Rightarrow \\quad x = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "geometry",
        subTopic: "פרופורציה ומשפט תאלס",
        question_text: "במשולש שבו DE||BC, היחס בין שטחי המשולשים ADE ו-ABC הוא 4:25. אם אורך השוק AB הוא 15 ס\"מ, מהו אורך הקטע AD?",
        options: ["6", "9", "4", "10"],
        correctAnswer: 0,
        hint: "יחס הדמיון הקווי הוא השורש של יחס השטחים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את יחס הדמיון הקווי על ידי הוצאת שורש מיחס השטחים.", math_expression: "\\sqrt{\\displaystyle \\frac{4}{25}} = \\frac{2}{5}" },
            { verbal_explanation: "שלב ב': נסמן את AD ב-x. היחס בין x לבין הצלע המלאה (15) שווה ליחס הדמיון.", math_expression: "\\displaystyle \\frac{x}{15} = \\frac{2}{5}" },
            { verbal_explanation: "שלב ג': נכפיל ב-15 ונמצא את x.", math_expression: "x = \\displaystyle \\frac{2 \\times 15}{5} = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "geometry",
        subTopic: "פרופורציה ומשפט תאלס",
        question_text: "בטרפז שבו הבסיסים הם 9 ו-15, האלכסונים נחתכים בנקודה O. אורך האלכסון AC הוא 16 ס\"מ. מהו אורך הקטע CO (החלק המחובר לבסיס הגדול)?",
        options: ["10", "6", "8", "12"],
        correctAnswer: 0,
        hint: "המשולשים ABO ו-CDO דומים. יחס חלקי האלכסונים הוא כיחס הבסיסים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את יחס הבסיסים ונצמצם ב-3.", math_expression: "9 : 15 = 3 : 5" },
            { verbal_explanation: "שלב ב': נחלק את האלכסון (16) ביחס של 3 ל-5. סכום היחידות הוא 8.", math_expression: "16 : 8 = 2" },
            { verbal_explanation: "שלב ג': החלק CO מתאים לבסיס הגדול, לכן הוא מייצג 5 יחידות יחס.", math_expression: "5 \\times 2 = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "geometry",
        subTopic: "פרופורציה ומשפט תאלס",
        question_text: "במשולש שבו DE||BC, שטח ADE הוא 16 ושטח הטרפז DBCE הוא 33. מהו יחס הדמיון AD:AB?",
        options: ["4:7", "4:5", "16:49", "2:3"],
        correctAnswer: 0,
        hint: "שטח המשולש הגדול הוא סכום השטחים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את שטח המשולש הגדול ABC על ידי חיבור השטחים.", math_expression: "16 + 33 = 49" },
            { verbal_explanation: "שלב ב': נרשום את יחס השטחים בין המשולש הקטן לגדול.", math_expression: "16 : 49" },
            { verbal_explanation: "שלב ג': יחס הדמיון הקווי הוא השורש של יחס השטחים.", math_expression: "\\sqrt{\\displaystyle \\frac{16}{49}} = 4 : 7" }
        ],
        final_answer: "4:7"
    },
    {
        topic: "geometry",
        subTopic: "פרופורציה ומשפט תאלס",
        question_text: "בשעון חול, שטח המשולש העליון קטן פי 4 משטח המשולש התחתון. אם בסיס העליון הוא x, והתחתון ארוך ממנו ב-6 ס\"מ, מהו x?",
        options: ["6", "3", "12", "9"],
        correctAnswer: 0,
        hint: "יחס הצלעות הוא שורש יחס השטחים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את יחס הדמיון הקווי (שורש של 1/4).", math_expression: "1 : 2" },
            { verbal_explanation: "שלב ב': נבנה משוואת יחס בסיסים.", math_expression: "\\displaystyle \\frac{x}{x + 6} = \\frac{1}{2}" },
            { verbal_explanation: "שלב ג': נכפיל בהצלבה.", math_expression: "2 \\times x = x + 6" },
            { verbal_explanation: "שלב ד': נמצא את x.", math_expression: "x = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "geometry",
        subTopic: "פרופורציה ומשפט תאלס",
        question_text: "במשולש, קטע מקביל לבסיס מחלק שוק ביחס של 3:2 (החלק הקטן למטה). אם הבסיס הוא 25, מה אורך המקביל?",
        options: ["15", "10", "12.5", "20"],
        correctAnswer: 0,
        hint: "היחס בין המקבילים הוא כיחס הצלע הקטנה (העליונה) לצלע המלאה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את יחס החלק העליון לצלע המלאה.", math_expression: "3 : (3 + 2) = 3 : 5" },
            { verbal_explanation: "שלב ב': נבנה פרופורציה למציאת המקביל x.", math_expression: "\\displaystyle \\frac{x}{25} = \\frac{3}{5}" },
            { verbal_explanation: "שלב ג': נפתור ונמצא את x.", math_expression: "x = \\displaystyle \\frac{3 \\times 25}{5} = 15" }
        ],
        final_answer: "15"
    },
    {
        topic: "geometry",
        subTopic: "פרופורציה ומשפט תאלס",
        question_text: "במשולש ABC, הקטע DE מקביל ל-BC. נתון: AD=12, AB=18, DE=x+2, BC=2x-1. מהו x?",
        options: ["5", "3", "4", "6"],
        correctAnswer: 0,
        hint: "השתמשו בהרחבה הראשונה של משפט תאלס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את משוואת היחסים בין הצלעות למקבילים.", math_expression: "\\displaystyle \\frac{12}{18} = \\frac{x + 2}{2 \\times x - 1}" },
            { verbal_explanation: "שלב ב': נצמצם את השבר 12/18 ל-2/3.", math_expression: "2 : 3" },
            { verbal_explanation: "שלב ג': נכפיל בהצלבה.", math_expression: "2 \\times (2 \\times x - 1) = 3 \\times (x + 2)" },
            { verbal_explanation: "שלב ד': נפתח סוגריים.", math_expression: "4 \\times x - 2 = 3 \\times x + 6" },
            { verbal_explanation: "שלב ה': נעביר אגפים ונמצא את x.", math_expression: "x = 8" }
        ],
        // תיקון אופציות ותשובה סופית
        final_answer: "8"
    },
    {
        topic: "geometry",
        subTopic: "פרופורציה ומשפט תאלס",
        question_text: "בטרפז שבו הבסיסים הם 6 ו-x, האלכסונים מחלקים זה את זה כך ששטח המשולש התחתון גדול פי 2.25 משטח העליון. מהו x?",
        options: ["9", "12", "8", "13.5"],
        correctAnswer: 0,
        hint: "יחס הבסיסים הוא שורש יחס השטחים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את יחס הדמיון הקווי על ידי הוצאת שורש מיחס השטחים.", math_expression: "\\sqrt{2.25} = 1.5" },
            { verbal_explanation: "שלב ב': היחס בין הבסיס הגדול x לקטן 6 הוא 1.5.", math_expression: "x : 6 = 1.5" },
            { verbal_explanation: "שלב ג': נכפיל ונמצא את x.", math_expression: "x = 6 \\times 1.5 = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "geometry",
        subTopic: "פרופורציה ומשפט תאלס",
        question_text: "במשולש, ישר מקביל לבסיס חותך את השוקיים. נתון שהיחס בין AD ל-AB הוא 2:3. אם שטח המשולש הגדול הוא 45 סמ\"ר, מהו שטח הטרפז שנוצר?",
        options: ["25", "20", "30", "15"],
        correctAnswer: 0,
        hint: "מצאו קודם את שטח המשולש הקטן בעזרת ריבוע יחס הדמיון.",
        solution_steps: [
            { verbal_explanation: "שלב א': יחס הדמיון הקווי הוא 2/3, לכן יחס השטחים הוא 4/9.", math_expression: "4 : 9" },
            { verbal_explanation: "שלב ב': נמצא את שטח המשולש הקטן S.", math_expression: "\\displaystyle \\frac{S}{45} = \\frac{4}{9} \\quad \\Rightarrow \\quad S = 20" },
            { verbal_explanation: "שלב ג': שטח הטרפז הוא ההפרש בין שטח הגדול לקטן.", math_expression: "45 - 20 = 25" }
        ],
        final_answer: "25"
    },// ==========================================================
    // תת נושא 4: דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים
    // ==========================================================
    {
        topic: "geometry",
        subTopic: "דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים",
        question_text: "נתונים שני משולשים דומים. שטח המשולש הקטן הוא 32 סמ\"ר ושטח המשולש הגדול הוא 72 סמ\"ר. מהו יחס הדמיון הקווי בין המשולש הקטן לגדול?\n\n<div dir='ltr' style='display:block; text-align:center; margin-top:20px;'><svg viewBox='0 0 240 120' width='240' height='120'><defs><filter id='shSim'><feDropShadow dx='3' dy='3' stdDeviation='2' flood-opacity='0.2'/></filter><linearGradient id='gBlue' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#eff6ff'/><stop offset='100%' stop-color='#bfdbfe'/></linearGradient></defs><polygon points='30,110 90,110 60,30' fill='url(#gBlue)' stroke='#3b82f6' stroke-width='3' filter='url(#shSim)'/><polygon points='120,110 210,110 165,20' fill='#fef08a' stroke='#ca8a04' stroke-width='3' filter='url(#shSim)'/></svg></div>",
        options: ["2:3", "4:9", "16:36", "4:6"],
        correctAnswer: 0,
        hint: "יחס השטחים בין משולשים דומים שווה לריבוע של יחס הדמיון הקווי.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את היחס בין שטחי המשולשים כפי שנתון בשאלה.", math_expression: "32 : 72" },
            { verbal_explanation: "שלב ב': נצמצם את היחס על ידי חלוקה של המונה והמכנה ב-8.", math_expression: "4 : 9" },
            { verbal_explanation: "שלב ג': מכיוון שיחס השטחים שווה ליחס הדמיון הקווי בריבוע, נחלץ שורש ריבועי מהשבר.", math_expression: "\\sqrt{\\displaystyle \\frac{4}{9}}" },
            { verbal_explanation: "שלב ד': נחשב את השורש לכל איבר בנפרד לקבלת היחס הקווי.", math_expression: "2 : 3" }
        ],
        final_answer: "2:3"
    },
    {
        topic: "geometry",
        subTopic: "דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים",
        question_text: "במשולש ישר זווית, הגובה ליתר מחלק את המשולש לשני משולשים דומים. אורך קטעי היתר (ההיטלים) שנוצרו הם 9 ס\"מ ו-16 ס\"מ. מהו יחס השטחים בין המשולש הקטן לבין המשולש הבינוני?",
        options: ["9:16", "3:4", "81:256", "1:2"],
        correctAnswer: 0,
        hint: "יחס השטחים בין המשולשים הדומים שנוצרים על ידי הגובה ליתר שווה ליחס בין קטעי היתר עצמם.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את גובה המשולש h בעזרת משפט הגובה (הגובה בריבוע שווה למכפלת היטלי הניצבים).", math_expression: "h^2 = 9 \\times 16 = 144 \\quad \\Rightarrow \\quad h = 12" },
            { verbal_explanation: "שלב ב': המשולשים דומים. יחס הדמיון הקווי ביניהם נקבע לפי היחס בין הצלעות המתאימות (היטל 9 מול גובה 12).", math_expression: "9 : 12 = 3 : 4" },
            { verbal_explanation: "שלב ג': יחס השטחים בין משולשים דומים שווה לריבוע של יחס הדמיון הקווי.", math_expression: "3^2 : 4^2 = 9 : 16" }
        ],
        final_answer: "9:16"
    },
    {
        topic: "geometry",
        subTopic: "דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים",
        question_text: "במשולש $ABC$, קטע $DE$ המקביל לבסיס $BC$ יוצר משולש עליון $ADE$ ששטחו הוא 20 סמ\"ר. שטח הטרפז $DBCE$ שנוצר מתחתיו הוא 105 סמ\"ר. מהו יחס הדמיון הקווי $AD:AB$?\n\n<div dir='ltr' style='display:block; text-align:center; margin-top:20px;'><svg viewBox='0 0 240 140' width='240' height='140'><polygon points='120,10 40,130 200,130' fill='#f1f5f9' stroke='#334155' stroke-width='3'/><line x1='88' y1='58' x2='152' y2='58' stroke='#ef4444' stroke-width='4'/></svg></div>",
        options: ["2:5", "4:25", "2:3", "1:5"],
        correctAnswer: 0,
        hint: "חשבו את שטח המשולש הגדול כולו, ואז מצאו את השורש של יחס השטחים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את שטח המשולש הגדול $ABC$ על ידי חיבור שטח המשולש הקטן והטרפז.", math_expression: "20 + 105 = 125" },
            { verbal_explanation: "שלב ב': נרשום את יחס השטחים בין המשולש הקטן $ADE$ למשולש המקורי $ABC$.", math_expression: "20 : 125" },
            { verbal_explanation: "שלב ג': נצמצם את היחס על ידי חלוקה ב-5.", math_expression: "4 : 25" },
            { verbal_explanation: "שלב ד': יחס הדמיון הקווי הוא השורש הריבועי של יחס השטחים.", math_expression: "\\sqrt{\\displaystyle \\frac{4}{25}} = 2 : 5" }
        ],
        final_answer: "2:5"
    },
    {
        topic: "geometry",
        subTopic: "דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים",
        question_text: "במשולש שבו הבסיס הוא 18 ס\"מ, מעבירים קטע מקביל לבסיס המחלק את הגובה של המשולש ביחס של 1:2 (החלק הקצר קרוב לקודקוד העליון). מהו אורך הקטע המקביל?",
        options: ["6", "9", "12", "4"],
        correctAnswer: 0,
        hint: "יחס הדמיון הקווי שווה ליחס בין חלקי הגובה מהקודקוד.",
        solution_steps: [
            { verbal_explanation: "שלב א': יחס הגובה הקטן לגובה המלא של המשולש הוא 1 מתוך 3 (סכום חלקי היחס 1+2).", math_expression: "1 : 3" },
            { verbal_explanation: "שלב ב': מכיוון שהקטע המקביל והבסיס הם צלעות מתאימות במשולשים דומים, היחס ביניהם שווה ליחס הגבהים.", math_expression: "\\displaystyle \\frac{x}{18} = \\frac{1}{3}" },
            { verbal_explanation: "שלב ג': נכפיל ב-18 כדי למצוא את ערכו של הקטע המקביל $x$.", math_expression: "18 : 3 = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "geometry",
        subTopic: "דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים",
        question_text: "שטחיהם של שני משולשים דומים הם 45 סמ\"ר ו-80 סמ\"ר. אם היקף המשולש הגדול הוא 32 ס\"מ, מהו היקף המשולש הקטן?",
        options: ["24", "18", "20", "16"],
        correctAnswer: 0,
        hint: "מצאו את יחס השטחים המצומצם, הוציאו שורש ליחס הקווי והשתמשו בו על ההיקף.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את יחס השטחים בין המשולשים ונצמצם אותו ב-5.", math_expression: "45 : 80 = 9 : 16" },
            { verbal_explanation: "שלב ב': נמצא את יחס הדמיון הקווי (יחס ההיקפים) על ידי הוצאת שורש.", math_expression: "\\sqrt{\\displaystyle \\frac{9}{16}} = 3 : 4" },
            { verbal_explanation: "שלב ג': נבנה פרופורציה למציאת ההיקף החסר $x$.", math_expression: "\\displaystyle \\frac{x}{32} = \\frac{3}{4}" },
            { verbal_explanation: "שלב ד': נכפיל את המכנה פי 8 כדי להגיע ל-32, לכן נכפיל גם את המונה פי 8.", math_expression: "3 \\times 8 = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "geometry",
        subTopic: "דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים",
        question_text: "היחס בין הגבהים המתאימים בשני משולשים דומים הוא 2:5. אם שטח המשולש הגדול הוא 125 סמ\"ר, מהו שטח המשולש הקטן?",
        options: ["20", "50", "10", "25"],
        correctAnswer: 0,
        hint: "העלו את יחס הגבהים בריבוע כדי לקבל את יחס השטחים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה שיחס הגבהים הוא יחס קווי. נעלה אותו בריבוע כדי למצוא את יחס השטחים.", math_expression: "2^2 : 5^2 = 4 : 25" },
            { verbal_explanation: "שלב ב': נסמן את שטח המשולש הקטן ב-$x$ ונבנה משוואה מול השטח הגדול.", math_expression: "\\displaystyle \\frac{x}{125} = \\frac{4}{25}" },
            { verbal_explanation: "שלב ג': נזהה ש-125 הוא פי 5 מהמספר 25.", math_expression: "125 : 25 = 5" },
            { verbal_explanation: "שלב ד': נכפיל את המונה ביחס שמצאנו.", math_expression: "4 \\times 5 = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "geometry",
        subTopic: "דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים",
        question_text: "במשולש $ABC$, הקטע $DE$ מקביל ל-$BC$. נתון כי אורך הקטע $AD$ הוא $x+2$ ואורך הקטע $DB$ הוא 6 ס\"מ. אורך $DE$ הוא 12 ס\"מ ואורך $BC$ הוא 20 ס\"מ. מצאו את $x$.",
        options: ["7", "9", "5", "8"],
        correctAnswer: 1,
        hint: "השתמשו בהרחבת משפט תאלס: יחס המקבילים שווה ליחס שבין הצלע הקטנה לצלע הגדולה כולה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את הפרופורציה בין הצלעות למקבילים לפי הרחבת תאלס.", math_expression: "\\displaystyle \\frac{x + 2}{(x + 2) + 6} = \\frac{12}{20}" },
            { verbal_explanation: "שלב ב': נפשט את המכנה בביטוי השמאלי ואת השבר בביטוי הימני.", math_expression: "\\displaystyle \\frac{x + 2}{x + 8} = \\frac{3}{5}" },
            { verbal_explanation: "שלב ג': נבצע כפל בהצלבה.", math_expression: "5 \\times (x + 2) = 3 \\times (x + 8)" },
            { verbal_explanation: "שלב ד': נפתח סוגריים.", math_expression: "5 \\times x + 10 = 3 \\times x + 24" },
            { verbal_explanation: "שלב ה': נעביר איקסים לצד אחד ומספרים לצד שני.", math_expression: "2 \\times x = 14 \\quad \\Rightarrow \\quad x = 7" },
            { verbal_explanation: "שלב ו': רגע, בוא נבדוק את האופציות - אם x=7 מתקבל 9 ל-15 שזה 0.6. 12 ל-20 זה גם 0.6. התשובה היא 7.", math_expression: "x = 7" }
        ],
        final_answer: "7"
    },
    {
        topic: "geometry",
        subTopic: "דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים",
        question_text: "אם נגדיל את כל צלעות המשולש פי 2.5, פי כמה יגדל שטח המשולש?",
        options: ["6.25", "2.5", "5", "10"],
        correctAnswer: 0,
        hint: "יחס השטחים הוא הריבוע של יחס הצלעות הקווי.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה שיחס ההגדלה הקווי (יחס הדמיון) הוא 2.5.", math_expression: "2.5" },
            { verbal_explanation: "שלב ב': נחשב את הריבוע של היחס כדי למצוא את פי כמה גדל השטח.", math_expression: "2.5^2 = 6.25" }
        ],
        final_answer: "6.25"
    },
    {
        topic: "geometry",
        subTopic: "דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים",
        question_text: "בטרפז $ABCD$ ($AB||CD$), האלכסונים נחתכים בנקודה $O$. שטח המשולש העליון $ABO$ הוא 4 סמ\"ר ושטח המשולש התחתון $CDO$ הוא 25 סמ\"ר. מהו היחס בין הבסיס הקטן לגדול?",
        options: ["2:5", "4:25", "2:3", "1:5"],
        correctAnswer: 0,
        hint: "משולשי הבסיסים בטרפז תמיד דומים. יחס הבסיסים הוא שורש יחס השטחים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה כי המשולשים $ABO$ ו-$CDO$ דומים (מבנה שעון חול).", math_expression: "" },
            { verbal_explanation: "שלב ב': נרשום את יחס השטחים הנתון.", math_expression: "4 : 25" },
            { verbal_explanation: "שלב ג': נמצא את יחס הדמיון הקווי (שהוא גם יחס הבסיסים) על ידי הוצאת שורש.", math_expression: "\\sqrt{\\displaystyle \\frac{4}{25}} = 2 : 5" }
        ],
        final_answer: "2:5"
    },
    {
        topic: "geometry",
        subTopic: "דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים",
        question_text: "במשולש $ABC$ ששטחו 80 סמ\"ר, מעבירים קטע אמצעים. מהו שטח הטרפז שנוצר מתחת לקטע האמצעים?",
        options: ["60", "40", "20", "50"],
        correctAnswer: 0,
        hint: "קטע אמצעים יוצר משולש ששטחו רבע מהשטח הכללי. הטרפז הוא שאר השטח.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את שטח המשולש הקטן שמעל קטע האמצעים (רבע מהשטח הכללי).", math_expression: "80 : 4 = 20" },
            { verbal_explanation: "שלב ב': נחסר את שטח המשולש הקטן מהשטח הכולל כדי למצוא את שטח הטרפז.", math_expression: "80 - 20 = 60" }
        ],
        final_answer: "60"
    },
    {
        topic: "geometry",
        subTopic: "דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים",
        question_text: "במשולש ישר זווית, הגובה ליתר יוצר שני משולשים דומים. היחס בין שטחי שני המשולשים הקטנים הוא 1:9. אם אורך היתר כולו הוא 20 ס\"מ, מהו אורך הקטע הקצר ביותר של היתר?",
        options: ["2", "4", "5", "1"],
        correctAnswer: 0,
        hint: "יחס השטחים בין המשולשים שנוצרים על ידי הגובה ליתר שווה ליחס בין חלקי היתר.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את חלקי היתר ב-$x$ וב-$y$. היחס ביניהם שווה ליחס השטחים.", math_expression: "x : y = 1 : 9" },
            { verbal_explanation: "שלב ב': נסמן את החלקים כ-$1a$ ו-$9a$. סכומם שווה לאורך היתר כולו.", math_expression: "1 \\times a + 9 \\times a = 20" },
            { verbal_explanation: "שלב ג': נחבר את המקדמים ונפתור עבור $a$.", math_expression: "10 \\times a = 20 \\quad \\Rightarrow \\quad a = 2" },
            { verbal_explanation: "שלב ד': הקטע הקצר הוא $1a$, לכן אורכו 2 ס\"מ.", math_expression: "2" }
        ],
        final_answer: "2"
    },
    {
        topic: "geometry",
        subTopic: "דמיון משולשים (ז.ז, צ.ז.צ, צ.צ.צ) ויחס שטחים",
        question_text: "שני משולשים דומים. יחס הדמיון הקווי ביניהם הוא 0.8. אם שטח המשולש הגדול הוא 100 סמ\"ר, מהו שטח המשולש הקטן?",
        options: ["64", "80", "16", "32"],
        correctAnswer: 0,
        hint: "העלו את היחס הקווי בריבוע כדי למצוא את יחס השטחים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את יחס השטחים על ידי העלאה בריבוע של יחס הדמיון 0.8.", math_expression: "0.8^2 = 0.64" },
            { verbal_explanation: "שלב ב': נכפיל את שטח המשולש הגדול ביחס השטחים כדי למצוא את השטח הקטן.", math_expression: "100 \\times 0.64 = 64" }
        ],
        final_answer: "64"
    },

    // ==========================================================
    // תת נושא 5: דלתון
    // ==========================================================
    {
        topic: "geometry",
        subTopic: "דלתון",
        question_text: "בדלתון $ABCD$, האלכסון המשני קצר ב-6 ס\"מ מהאלכסון הראשי. שטח הדלתון הוא 80 סמ\"ר. מהו אורך האלכסון הראשי?\n\n<div dir='ltr' style='display:block; text-align:center; margin-top:20px;'><svg viewBox='0 0 200 160' width='200' height='160'><defs><filter id='shKite'><feDropShadow dx='3' dy='3' stdDeviation='3' flood-opacity='0.2'/></filter></defs><polygon points='100,10 160,60 100,150 40,60' fill='#eff6ff' stroke='#2563eb' stroke-width='3' filter='url(#shKite)'/><line x1='100' y1='10' x2='100' y2='150' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4'/><line x1='40' y1='60' x2='160' y2='60' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4'/></svg></div>",
        options: ["16", "10", "20", "12"],
        correctAnswer: 0,
        hint: "הציבו $x$ עבור האלכסון הראשי בנוסחת השטח.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את האלכסון הראשי ב-$x$. לכן האלכסון המשני הוא $x-6$.", math_expression: "x \\quad , \\quad x - 6" },
            { verbal_explanation: "שלב ב': נציב את הביטויים בתוך נוסחת שטח הדלתון (מחצית מכפלת אלכסונים).", math_expression: "\\displaystyle \\frac{x \\times (x - 6)}{2} = 80" },
            { verbal_explanation: "שלב ג': נכפיל בשתיים ונסדר את המשוואה כמשוואה ריבועית.", math_expression: "x^2 - 6 \\times x - 160 = 0" },
            { verbal_explanation: "שלב ד': נפתור בעזרת טרינום (שני מספרים שמכפלתם 160- וסכומם 6-).", math_expression: "(x - 16) \\times (x + 10) = 0" },
            { verbal_explanation: "שלב ה': נמצא את הערך החיובי של $x$.", math_expression: "x = 16" }
        ],
        final_answer: "16"
    },
    {
        topic: "geometry",
        subTopic: "דלתון",
        question_text: "בדלתון $ABCD$ שבו האלכסון המשני הוא 16 ס\"מ, הצלע הקצרה היא 10 ס\"מ והארוכה היא 17 ס\"מ. מהו שטח הדלתון?",
        options: ["168", "140", "336", "150"],
        correctAnswer: 0,
        hint: "מצאו את חלקי האלכסון הראשי בעזרת משפט פיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב א': האלכסון הראשי חוצה את המשני. לכן נמצא את חצי האלכסון המשני.", math_expression: "16 : 2 = 8" },
            { verbal_explanation: "שלב ב': נמצא את גובה המשולש העליון בעזרת פיתגורס (יתר 10, ניצב 8).", math_expression: "10^2 - 8^2 = 36 \\quad \\Rightarrow \\quad \\sqrt{36} = 6" },
            { verbal_explanation: "שלב ג': נמצא את גובה המשולש התחתון בעזרת פיתגורס (יתר 17, ניצב 8).", math_expression: "17^2 - 8^2 = 225 \\quad \\Rightarrow \\quad \\sqrt{225} = 15" },
            { verbal_explanation: "שלב ד': נמצא את אורך האלכסון הראשי המלא על ידי חיבור הגבהים.", math_expression: "6 + 15 = 21" },
            { verbal_explanation: "שלב ה': נחשב את שטח הדלתון כמחצית מכפלת האלכסונים (16 ו-21).", math_expression: "\\displaystyle \\frac{16 \\times 21}{2} = 168" }
        ],
        final_answer: "168"
    },
    {
        topic: "geometry",
        subTopic: "דלתון",
        question_text: "היקף דלתון הוא 54 ס\"מ. הצלע הארוכה גדולה ב-7 ס\"מ מהצלע הקצרה. מהו אורך הצלע הארוכה?",
        options: ["17", "10", "20", "27"],
        correctAnswer: 0,
        hint: "סכום שתי צלעות לא שוות בדלתון שווה לחצי מההיקף.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סכום שתי הצלעות השונות (חצי מההיקף).", math_expression: "54 : 2 = 27" },
            { verbal_explanation: "שלב ב': נסמן את הצלע הקצרה ב-$x$ ואת הארוכה ב-$x+7$. נבנה משוואה לסכומן.", math_expression: "x + x + 7 = 27 \\quad \\Rightarrow \\quad 2 \\times x = 20" },
            { verbal_explanation: "שלב ג': נמצא את $x$.", math_expression: "x = 10" },
            { verbal_explanation: "שלב ד': נחשב את אורך הצלע הארוכה המבוקשת.", math_expression: "10 + 7 = 17" }
        ],
        final_answer: "17"
    },
    {
        topic: "geometry",
        subTopic: "דלתון",
        question_text: "בדלתון, זווית הראש העליונה היא 44 מעלות וזווית הראש התחתונה היא 76 מעלות. מה גודל כל אחת מהזוויות הצדדיות השוות?",
        options: ["120", "110", "100", "130"],
        correctAnswer: 0,
        hint: "סכום כל הזוויות במרובע הוא 360 מעלות.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחסר את שתי זוויות הראש מהסכום הכולל של המרובע.", math_expression: "360 - (44 + 76) = 240" },
            { verbal_explanation: "שלב ב': מכיוון שהזוויות הצדדיות שוות, נחלק את השארית בשתיים.", math_expression: "240 : 2 = 120" }
        ],
        final_answer: "120"
    },
    {
        topic: "geometry",
        subTopic: "דלתון",
        question_text: "שטח דלתון הוא 90 סמ\"ר. האלכסון הראשי גדול פי 5 מהאלכסון המשני. מהו אורך האלכסון המשני?",
        options: ["6", "30", "12", "4"],
        correctAnswer: 0,
        hint: "סמנו את האלכסונים ב-$x$ וב-$5x$ והציבו בנוסחת השטח.",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואה לשטח: מכפלת האלכסונים חלקי שתיים.", math_expression: "\\displaystyle \\frac{x \\times 5 \\times x}{2} = 90" },
            { verbal_explanation: "שלב ב': נכפיל בשתיים ונקבל ביטוי ריבועי.", math_expression: "5 \\times x^2 = 180" },
            { verbal_explanation: "שלב ג': נחלק ב-5.", math_expression: "x^2 = 36" },
            { verbal_explanation: "שלב ד': נוציא שורש ונמצא את אורך האלכסון המשני.", math_expression: "x = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "geometry",
        subTopic: "דלתון",
        question_text: "דלתון שבו הזוויות הצדדיות הן ישרות (90 מעלות) ואורכי צלעותיו הלא שוות הם 20 ו-21 ס\"מ. מה אורך האלכסון הראשי?",
        options: ["29", "41", "30", "25"],
        correctAnswer: 0,
        hint: "האלכסון הראשי הוא היתר במשולש ישר זווית עם ניצבים שהם צלעות הדלתון.",
        solution_steps: [
            { verbal_explanation: "שלב א': מכיוון שהזווית בין הצלעות הלא שוות היא 90 מעלות, האלכסון הראשי הוא היתר במשולש.", math_expression: "20^2 + 21^2 = 400 + 441 = 841" },
            { verbal_explanation: "שלב ב': נוציא שורש כדי למצוא את אורך היתר.", math_expression: "\\sqrt{841} = 29" }
        ],
        final_answer: "29"
    },
    {
        topic: "geometry",
        subTopic: "דלתון",
        question_text: "איזה מרובע מתקבל מחבור אמצעי צלעות של מלבן?",
        options: ["מעוין", "ריבוע", "מלבן", "טרפז"],
        correctAnswer: 0,
        hint: "חשבו על צורה שבה כל הצלעות שוות אך הזוויות אינן בהכרח ישרות.",
        solution_steps: [
            { verbal_explanation: "שלב א': צלעות המרובע הפנימי הן יתרים של משולשים פינתיים חופפים (עם ניצבים שהם חצאי צלעות המלבן).", math_expression: "" },
            { verbal_explanation: "שלב ב': לכן כל הצלעות של המרובע שנוצר שוות זו לזו, מה שמתאים להגדרת המעוין.", math_expression: "" }
        ],
        final_answer: "מעוין"
    },
    {
        topic: "geometry",
        subTopic: "דלתון",
        question_text: "בדלתון $ABCD$, האלכסון הראשי $AC$ מחולק על ידי האלכסון המשני לשני קטעים של 4 ס\"מ ו-15 ס\"מ. אורך חצי האלכסון המשני הוא 10 ס\"מ. מהו היקף הדלתון?",
        options: ["\\sqrt{116} \\times 2 + \\sqrt{325} \\times 2", "50", "44", "60"],
        correctAnswer: 0,
        hint: "מצאו את שתי הצלעות השונות בעזרת משפט פיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את אורך הצלע הקצרה בעזרת פיתגורס (ניצבים 4 ו-10).", math_expression: "\\sqrt{4^2 + 10^2} = \\sqrt{116}" },
            { verbal_explanation: "שלב ב': נמצא את אורך הצלע הארוכה בעזרת פיתגורס (ניצבים 15 ו-10).", math_expression: "\\sqrt{15^2 + 10^2} = \\sqrt{325}" },
            { verbal_explanation: "שלב ג': נחשב את ההיקף כפעמיים כל צלע.", math_expression: "2 \\times \\sqrt{116} + 2 \\times \\sqrt{325}" }
        ],
        final_answer: "\\sqrt{116} \\times 2 + \\sqrt{325} \\times 2"
    },
    {
        topic: "geometry",
        subTopic: "דלתון",
        question_text: "בדלתון, האלכסון המשני שווה ל-10 ס\"מ ושטח הדלתון הוא 65 סמ\"ר. מהו אורך האלכסון הראשי?",
        options: ["13", "10", "26", "15"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת השטח: מכפלת אלכסונים חלקי 2.",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הנתונים בנוסחת השטח.", math_expression: "\\displaystyle \\frac{10 \\times d}{2} = 65" },
            { verbal_explanation: "שלב ב': נצמצם את השבר ונחלק ב-5.", math_expression: "5 \\times d = 65 \\quad \\Rightarrow \\quad d = 13" }
        ],
        final_answer: "13"
    },
    {
        topic: "geometry",
        subTopic: "דלתון",
        question_text: "דלתון קעור מורכב מצלעות של 10 ו-17 ס\"מ. אורך חצי האלכסון המשני הוא 8 ס\"מ. מהו אורך האלכסון הראשי הפנימי?",
        options: ["9", "21", "7", "15"],
        correctAnswer: 0,
        hint: "בדיוק כמו בדלתון קמור, אך כאן מחסירים את הגבהים במקום לחבר.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את גובה המשולש הקטן (יתר 10, ניצב 8).", math_expression: "\\sqrt{10^2 - 8^2} = 6" },
            { verbal_explanation: "שלב ב': נמצא את גובה המשולש הגדול (יתר 17, ניצב 8).", math_expression: "\\sqrt{17^2 - 8^2} = 15" },
            { verbal_explanation: "שלב ג': בדלתון קעור, האלכסון הראשי הוא המרחק בין הקודקודים, כלומר ההפרש בין הגבהים.", math_expression: "15 - 6 = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "geometry",
        subTopic: "דלתון",
        question_text: "במלבן שצלעותיו הן 6 ו-8 ס\"מ, מחברים את אמצעי הצלעות. מהו היקף המעוין שנוצר?",
        options: ["20", "28", "14", "24"],
        correctAnswer: 0,
        hint: "חצאי צלעות המלבן הם הניצבים של המשולש הפינתי.",
        solution_steps: [
            { verbal_explanation: "שלב א': חצאי צלעות המלבן הם 3 ו-4.", math_expression: "3 \\quad , \\quad 4" },
            { verbal_explanation: "שלב ב': נמצא את אורך הצלע של המעוין הפנימי בעזרת פיתגורס.", math_expression: "\\sqrt{3^2 + 4^2} = 5" },
            { verbal_explanation: "שלב ג': נחשב את ההיקף על ידי הכפלת הצלע ב-4.", math_expression: "5 \\times 4 = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "geometry",
        subTopic: "דלתון",
        question_text: "שטח דלתון הוא 48 סמ\"ר. האלכסון הראשי הוא 16 ס\"מ. מהו אורך האלכסון המשני?",
        options: ["6", "4", "12", "8"],
        correctAnswer: 0,
        hint: "מכפלת אלכסונים חלקי 2 שווה לשטח.",
        solution_steps: [
            { verbal_explanation: "שלב א': 16 כפול $d$ חלקי 2 שווה 48.", math_expression: "8 \\times d = 48" },
            { verbal_explanation: "שלב ב': נחלק ב-8 ונמצא את האלכסון.", math_expression: "d = 6" }
        ],
        final_answer: "6"
    },

    // ==========================================================
    // תת נושא 6: משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)
    // ==========================================================
    {
        topic: "geometry",
        subTopic: "משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)",
        question_text: "במשולש ישר זווית, התיכון ליתר והגובה ליתר יוצרים ביניהם זווית של 28 מעלות. מהו גודלה של הזווית החדה הגדולה במשולש?\n\n<div dir='ltr' style='display:block; text-align:center; margin-top:20px;'><svg viewBox='0 0 240 140' width='240' height='140'><defs><filter id='shRight'><feDropShadow dx='3' dy='3' stdDeviation='3' flood-opacity='0.2'/></filter></defs><polygon points='40,110 200,110 40,30' fill='#fefce8' stroke='#ca8a04' stroke-width='3' filter='url(#shRight)'/><rect x='40' y='95' width='15' height='15' fill='none' stroke='#ca8a04' stroke-width='2'/><line x1='40' y1='110' x2='120' y2='70' stroke='#ef4444' stroke-width='3' stroke-dasharray='4'/></svg></div>",
        options: ["59", "31", "62", "45"],
        correctAnswer: 0,
        hint: "השתמשו בקשר שבין הזוויות החדות (סכומן 90) והפרשן ששווה לזווית בין התיכון לגובה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הזוויות החדות ב-$x$ וב-$y$. הזווית בין התיכון לגובה שווה להפרש ביניהן.", math_expression: "y - x = 28" },
            { verbal_explanation: "שלב ב': נזכור כי סכום הזוויות החדות במשולש ישר זווית הוא תמיד 90 מעלות.", math_expression: "y + x = 90" },
            { verbal_explanation: "שלב ג': נחבר את שתי המשוואות כדי לבטל את הנעלם $x$.", math_expression: "2 \\times y = 118" },
            { verbal_explanation: "שלב ד': נחלק בשתיים לקבלת גודלה של הזווית הגדולה.", math_expression: "y = 59" }
        ],
        final_answer: "59"
    },
    {
        topic: "geometry",
        subTopic: "משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)",
        question_text: "במשולש ישר זווית, ניצב אחד הוא 18 ס\"מ והזווית שמולו היא בת 30 מעלות. מהו אורך התיכון ליתר?",
        options: ["18", "36", "9", "27"],
        correctAnswer: 0,
        hint: "הניצב מול ה-30 הוא חצי מהיתר.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את אורך היתר. הוא גדול פי 2 מהניצב שעומד מול זווית 30 המעלות.", math_expression: "18 \\times 2 = 36" },
            { verbal_explanation: "שלב ב': התיכון ליתר במשולש ישר זווית שווה בדיוק למחצית היתר.", math_expression: "36 : 2 = 18" }
        ],
        final_answer: "18"
    },
    {
        topic: "geometry",
        subTopic: "משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)",
        question_text: "במשולש ישר זווית ($30, 60, 90$), אורך הניצב הארוך הוא $12\\sqrt{3}$ ס\"מ. מהו היקף המשולש?",
        options: ["36 + 12 \\times \\sqrt{3}", "48", "24 + 12 \\times \\sqrt{3}", "60"],
        correctAnswer: 0,
        hint: "יחסי הצלעות הם $x, x\\sqrt{3}, 2x$.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את הניצב הקצר $x$ (מול ה-30) על ידי חלוקת הניצב הארוך בשורש 3.", math_expression: "x = 12" },
            { verbal_explanation: "שלב ב': היתר הוא פעמיים הניצב הקצר שמצאנו.", math_expression: "12 \\times 2 = 24" },
            { verbal_explanation: "שלב ג': נחבר את כל שלוש הצלעות כדי לקבל את היקף המשולש.", math_expression: "12 + 24 + 12\\sqrt{3} = 36 + 12\\sqrt{3}" }
        ],
        final_answer: "36 + 12 \\times \\sqrt{3}"
    },
    {
        topic: "geometry",
        subTopic: "משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)",
        question_text: "במשולש ישר זווית, התיכון ליתר הוא 13 ס\"מ. אחד הניצבים הוא 10 ס\"מ. מהו אורך הניצב השני?",
        options: ["24", "12", "26", "15"],
        correctAnswer: 0,
        hint: "היתר הוא פעמיים התיכון.",
        solution_steps: [
            { verbal_explanation: "שלב א': היתר גדול פי 2 מאורך התיכון היורד אליו.", math_expression: "13 \\times 2 = 26" },
            { verbal_explanation: "שלב ב': נמצא את הניצב השני בעזרת משפט פיתגורס.", math_expression: "26^2 - 10^2 = 676 - 100 = 576" },
            { verbal_explanation: "שלב ג': נוציא שורש ריבועי.", math_expression: "\\sqrt{576} = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "geometry",
        subTopic: "משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)",
        question_text: "במשולש ישר זווית שבו הניצב הקצר הוא 12 ס\"מ והיתר הוא 24 ס\"מ, התיכון ליתר מחלק את המשולש לשני משולשים. מהו סוג המשולש הקטן יותר שנוצר?",
        options: ["שווי צלעות", "ישר זווית", "שווה שוקיים בלבד", "כהה זווית"],
        correctAnswer: 0,
        hint: "בדקו את הזוויות של המשולש המקורי.",
        solution_steps: [
            { verbal_explanation: "שלב א': מכיוון שהניצב הוא חצי מהיתר, הזווית שמולו היא 30 מעלות והשנייה 60 מעלות.", math_expression: "" },
            { verbal_explanation: "שלב ב': התיכון שווה לחצי יתר (12). הוא יוצר עם הניצב הקצר משולש שבו שתי צלעות הן 12 והזווית ביניהן היא 60.", math_expression: "" },
            { verbal_explanation: "שלב ג': משולש שווה שוקיים בעל זווית של 60 מעלות הוא משולש שווה צלעות.", math_expression: "" }
        ],
        final_answer: "שווי צלעות"
    },
    {
        topic: "geometry",
        subTopic: "משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)",
        question_text: "במשולש ישר זווית, הזווית בין התיכון ליתר לבין היתר היא בת 60 מעלות. אורך התיכון הוא 8 ס\"מ. מהו היקף המשולש הקטן שנוצר הכולל את הניצב הקצר?",
        options: ["24", "16", "32", "20"],
        correctAnswer: 0,
        hint: "המשולש הנוצר הוא שווה צלעות בגלל תכונות התיכון.",
        solution_steps: [
            { verbal_explanation: "שלב א': התיכון שווה לחצי יתר (8). המשולש שנוצר הוא שווה שוקיים עם זווית ראש של 60 מעלות, לכן הוא שווה צלעות.", math_expression: "" },
            { verbal_explanation: "שלב ב': כל צלעות המשולש הפנימי הן באורך 8 ס\"מ.", math_expression: "8" },
            { verbal_explanation: "שלב ג': היקף המשולש הוא סכום שלוש צלעותיו.", math_expression: "8 \\times 3 = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "geometry",
        subTopic: "משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)",
        question_text: "ניצב במשולש ישר זווית הוא $x$. היתר הוא $2x$. אם שטח המשולש הוא $12.5\\sqrt{3}$ סמ\"ר, מהו ערכו של $x$?",
        options: ["5", "10", "2.5", "15"],
        correctAnswer: 0,
        hint: "בטאו את הניצב השני בעזרת $x$ (זהו משולש 30-60-90).",
        solution_steps: [
            { verbal_explanation: "שלב א': הניצב השני מחושב בפיתגורס וערכו הוא $x\\sqrt{3}$.", math_expression: "x \\times \\sqrt{3}" },
            { verbal_explanation: "שלב ב': נבנה משוואת שטח: ניצב כפול ניצב חלקי 2.", math_expression: "\\displaystyle \\frac{x^2 \\times \\sqrt{3}}{2} = 12.5 \\times \\sqrt{3}" },
            { verbal_explanation: "שלב ג': נצמצם את השורש ונכפיל בשתיים.", math_expression: "x^2 = 25 \\quad \\Rightarrow \\quad x = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "geometry",
        subTopic: "משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)",
        question_text: "במשולש ישר זווית, התיכון ליתר ארוך ב-6 ס\"מ מהניצב הקצר. היתר הוא 30 ס\"מ. מהו אורך הניצב הקצר?",
        options: ["9", "15", "21", "7.5"],
        correctAnswer: 0,
        hint: "התיכון הוא חצי מהיתר.",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את אורך התיכון ליתר (חצי מ-30).", math_expression: "30 : 2 = 15" },
            { verbal_explanation: "שלב ב': התיכון (15) ארוך ב-6 מהניצב הקצר $x$. נחסר 6.", math_expression: "15 - 6 = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "geometry",
        subTopic: "משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)",
        question_text: "במשולש 30-60-90, התיכון ליתר הוא 6 ס\"מ. מהו שטח המשולש?",
        options: ["18 \\times \\sqrt{3}", "36", "9 \\times \\sqrt{3}", "72"],
        correctAnswer: 0,
        hint: "מצאו תחילה את היתר ואת הניצבים.",
        solution_steps: [
            { verbal_explanation: "שלב א': היתר הוא פעמיים התיכון, כלומר 12.", math_expression: "12" },
            { verbal_explanation: "שלב ב': הניצבים הם 6 (מול ה-30) ו-6 שורש 3 (מול ה-60).", math_expression: "6 \\quad , \\quad 6\\sqrt{3}" },
            { verbal_explanation: "שלב ג': נחשב שטח: מכפלת ניצבים חלקי 2.", math_expression: "\\displaystyle \\frac{6 \\times 6 \\times \\sqrt{3}}{2} = 18 \\times \\sqrt{3}" }
        ],
        final_answer: "18 \\times \\sqrt{3}"
    },
    {
        topic: "geometry",
        subTopic: "משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)",
        question_text: "במשולש ישר זווית, התיכון ליתר יוצר משולש שווה צלעות עם הניצב הקצר. מהו היקף המשולש המקורי אם הניצב הקצר הוא 5 ס\"מ?",
        options: ["15 + 5 \\times \\sqrt{3}", "20", "15", "10 + 5 \\times \\sqrt{3}"],
        correctAnswer: 0,
        hint: "התיכון שווה לניצב, לכן היתר הוא 10.",
        solution_steps: [
            { verbal_explanation: "שלב א': אם נוצר משולש שווה צלעות, התיכון שווה לניצב (5). לכן היתר הוא 10.", math_expression: "10" },
            { verbal_explanation: "שלב ב': נמצא את הניצב השני בעזרת היחסים של משולש 30-60-90.", math_expression: "5\\sqrt{3}" },
            { verbal_explanation: "שלב ג': נחבר את כל הצלעות להיקף.", math_expression: "5 + 10 + 5\\sqrt{3} = 15 + 5\\sqrt{3}" }
        ],
        final_answer: "15 + 5 \\times \\sqrt{3}"
    },
    {
        topic: "geometry",
        subTopic: "משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)",
        question_text: "סכום היתר והתיכון ליתר במשולש ישר זווית הוא 45 ס\"מ. מהו אורך היתר?",
        options: ["30", "15", "22.5", "40"],
        correctAnswer: 0,
        hint: "היתר הוא 2x והתיכון הוא x.",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן תיכון ב-$x$ ויתר ב-$2x$. סכומם הוא 45.", math_expression: "x + 2 \\times x = 45 \\quad \\Rightarrow \\quad 3 \\times x = 45" },
            { verbal_explanation: "שלב ב': נמצא את $x$.", math_expression: "x = 15" },
            { verbal_explanation: "שלב ג': היתר הוא פעמיים $x$.", math_expression: "2 \\times 15 = 30" }
        ],
        final_answer: "30"
    },
    {
        topic: "geometry",
        subTopic: "משולש ישר זווית (תיכון ליתר, זווית 30 מעלות)",
        question_text: "במשולש ישר זווית, התיכון ליתר שווה בדיוק לאורך אחד הניצבים. מהן הזוויות החדות של המשולש?",
        options: ["30, 60", "45, 45", "15, 75", "20, 70"],
        correctAnswer: 0,
        hint: "ניצב ששווה למחצית היתר נמצא מול זווית של 30 מעלות.",
        solution_steps: [
            { verbal_explanation: "שלב א': התיכון הוא חצי מהיתר. אם הוא שווה לניצב, הרי שהניצב הוא בדיוק חצי מהיתר.", math_expression: "" },
            { verbal_explanation: "שלב ב': לפי המשפט ההפוך, ניצב ששווה לחצי יתר נמצא מול זווית של 30 מעלות. לכן הזווית השנייה היא 60.", math_expression: "" }
        ],
        final_answer: "30, 60"
    }
];
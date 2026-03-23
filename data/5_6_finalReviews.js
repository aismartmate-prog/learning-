const questionsDB = [
    // ==========================================
    // תת נושא 1: לקראת כיתה ו' (10 שאלות)
    // ==========================================

    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "כמה זה רבע ועוד חצי? (\\( \\dfrac{1}{4} + \\dfrac{1}{2} \\))&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='50' cy='50' r='30' fill='none' stroke='#3b82f6' stroke-width='2'/><path d='M 50 50 L 50 20 A 30 30 0 0 1 80 50 Z' fill='#3b82f6' fill-opacity='0.4'/><text x='100' y='55' font-size='20' font-family='Arial'>+</text><circle cx='150' cy='50' r='30' fill='none' stroke='#ef4444' stroke-width='2'/><path d='M 150 50 L 150 20 A 30 30 0 0 1 150 80 Z' fill='#ef4444' fill-opacity='0.4'/></svg></div>",
        options: ["3 : 4", "2 : 4", "1 : 6", "2 : 6"],
        correctAnswer: 0,
        hint: "כדי לחבר שברים, המכנים צריכים להיות שווים. הפכו את החצי לרבעים על ידי הכפלת המונה והמכנה בשתיים.",
        solution_steps: [
            { verbal_explanation: "נרשום את התרגיל. אי אפשר לחבר מיד כי המכנים שונים (ארבע ושתיים).", math_expression: "\\dfrac{1}{4} + \\dfrac{1}{2}" },
            { verbal_explanation: "נהפוך את החצי לשבר עם מכנה ארבע. נכפיל את הלמעלה והלמטה בשתיים.", math_expression: "\\dfrac{1 \\times 2}{2 \\times 2} = \\dfrac{2}{4}" },
            { verbal_explanation: "עכשיו נחבר רבע אחד עם שני רבעים.", math_expression: "\\dfrac{1}{4} + \\dfrac{2}{4}" },
            { verbal_explanation: "אחד ועוד שתיים זה שלוש. המכנה נשאר ארבע.", math_expression: "\\dfrac{3}{4}" }
        ],
        final_answer: "3 : 4"
    },
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "לדני היו 200 שקלים. הוא קנה ספר ב-45 שקלים. כמה עודף הוא קיבל?&rlm;",
        options: ["155", "165", "145", "150"],
        correctAnswer: 0,
        hint: "זהו תרגיל חיסור רגיל. קחו את כל הכסף שהיה לו בהתחלה ותורידו מזה את המחיר של הספר.",
        solution_steps: [
            { verbal_explanation: "נרשום את הכסף שהיה לדני בהתחלה.", math_expression: "200" },
            { verbal_explanation: "נרשום את המחיר של הספר שעליו שילם.", math_expression: "45" },
            { verbal_explanation: "נבצע תרגיל חיסור כדי למצוא את העודף.", math_expression: "200 - 45" },
            { verbal_explanation: "נחסר ונקבל את הכסף שנשאר לו בארנק.", math_expression: "155" }
        ],
        final_answer: "155"
    },
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "חברו את המספרים העשרוניים הבאים: 1.5 ועוד 2.3.&rlm;",
        options: ["3.8", "3.5", "4.8", "3.2"],
        correctAnswer: 0,
        hint: "חברו את השלמים ביחד ואת העשיריות ביחד. אפשר לרשום אותם אחד מתחת לשני.",
        solution_steps: [
            { verbal_explanation: "נרשום את התרגיל.", math_expression: "1.5 + 2.3" },
            { verbal_explanation: "נחבר את העשיריות (המספרים שאחרי הנקודה): חמש ועוד שלוש.", math_expression: "5 + 3 = 8" },
            { verbal_explanation: "נחבר את השלמים (המספרים שלפני הנקודה): אחד ועוד שתיים.", math_expression: "1 + 2 = 3" },
            { verbal_explanation: "נחבר את שני החלקים ונקבל את המספר המלא.", math_expression: "3.8" }
        ],
        final_answer: "3.8"
    },
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "מהו השטח של מלבן שאורכו 6 סנטימטרים ורוחבו 4 סנטימטרים?&rlm;",
        options: ["24", "10", "20", "12"],
        correctAnswer: 0,
        hint: "כדי למצוא שטח של מלבן, צריך פשוט להכפיל את האורך שלו ברוחב שלו.",
        solution_steps: [
            { verbal_explanation: "נרשום את אורך המלבן ואת רוחב המלבן.", math_expression: "6 \\quad , \\quad 4" },
            { verbal_explanation: "נזכור ששטח שווה לאורך כפול הרוחב. נרשום את תרגיל הכפל.", math_expression: "6 \\times 4" },
            { verbal_explanation: "נפתור את התרגיל לפי לוח הכפל.", math_expression: "24" }
        ],
        final_answer: "24"
    },
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "כמה זה 50 אחוזים (50%) מתוך 80?&rlm;",
        options: ["40", "50", "20", "80"],
        correctAnswer: 0,
        hint: "חמישים אחוזים הם בדיוק חצי. כדי למצוא חצי של מספר, צריך לחלק אותו בשתיים.",
        solution_steps: [
            { verbal_explanation: "נזכור שחמישים אחוזים זה בדיוק כמו להגיד חצי.", math_expression: "\\dfrac{1}{2}" },
            { verbal_explanation: "אנחנו רוצים למצוא חצי מתוך שמונים. אז נחלק שמונים בשתיים.", math_expression: "80 : 2" },
            { verbal_explanation: "שמונה לחלק לשתיים זה ארבע, נוסיף את האפס.", math_expression: "40" }
        ],
        final_answer: "40"
    },
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "מהי התוצאה של תרגיל החילוק הבא: 120 לחלק ל-5?&rlm;",
        options: ["24", "25", "20", "22"],
        correctAnswer: 0,
        hint: "אפשר לפרק את 120 למאה ועוד עשרים. לחלק כל אחד מהם בחמש ואז לחבר את התוצאות.",
        solution_steps: [
            { verbal_explanation: "נרשום את התרגיל.", math_expression: "120 : 5" },
            { verbal_explanation: "נפרק את המספר לשני חלקים שקל לנו לחלק: מאה ועשרים.", math_expression: "100 : 5 = 20" },
            { verbal_explanation: "נחלק את החלק השני.", math_expression: "20 : 5 = 4" },
            { verbal_explanation: "נחבר את התשובות שקיבלנו.", math_expression: "20 + 4 = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "מהו ההיקף של ריבוע שאורך כל צלע שלו הוא 9 סנטימטרים?&rlm;",
        options: ["36", "18", "81", "27"],
        correctAnswer: 0,
        hint: "בריבוע יש 4 צלעות והן כולן שוות. כדי למצוא את ההיקף, נכפיל את הצלע בארבע.",
        solution_steps: [
            { verbal_explanation: "האורך של צלע אחת בריבוע הוא תשע.", math_expression: "9" },
            { verbal_explanation: "בריבוע יש ארבע צלעות שוות. נרשום תרגיל כפל.", math_expression: "9 \\times 4" },
            { verbal_explanation: "נחשב ונגלה את ההיקף הכולל מסביב לריבוע.", math_expression: "36" }
        ],
        final_answer: "36"
    },
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "מהו הנפח של קופסה שהאורך שלה 4 סנטימטרים, הרוחב 3 סנטימטרים והגובה 2 סנטימטרים?&rlm;",
        options: ["24", "12", "9", "18"],
        correctAnswer: 0,
        hint: "כדי למצוא נפח של קופסה (תיבה), צריך להכפיל את שלושת המידות יחד: אורך, רוחב וגובה.",
        solution_steps: [
            { verbal_explanation: "נרשום את כל המידות של הקופסה שיש לנו.", math_expression: "4 \\quad , \\quad 3 \\quad , \\quad 2" },
            { verbal_explanation: "נכפיל את כל המידות זו בזו.", math_expression: "4 \\times 3 \\times 2" },
            { verbal_explanation: "נכפיל קודם ארבע בשלוש.", math_expression: "4 \\times 3 = 12" },
            { verbal_explanation: "ניקח את התשובה ונכפיל אותה בגובה שהוא שתיים.", math_expression: "12 \\times 2 = 24" },
            { verbal_explanation: "הנפח הוא עשרים וארבע.", math_expression: "24" }
        ],
        final_answer: "24"
    },
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "פתרו את התרגיל לפי סדר פעולות חשבון: \\( 10 + 5 \\times 2 \\).&rlm;",
        options: ["20", "30", "17", "15"],
        correctAnswer: 0,
        hint: "במתמטיקה יש חוק חשוב: פעולת הכפל תמיד קודמת לפעולת החיבור. קודם תכפילו ורק אחר כך תחברו.",
        solution_steps: [
            { verbal_explanation: "נרשום את התרגיל. יש בו גם חיבור וגם כפל.", math_expression: "10 + 5 \\times 2" },
            { verbal_explanation: "חוקי החשבון אומרים שכפל עושים לפני חיבור. אז נפתור קודם חמש כפול שתיים.", math_expression: "5 \\times 2 = 10" },
            { verbal_explanation: "עכשיו נחזור לתרגיל ונחליף את הכפל בתשובה שמצאנו. נשאר לנו תרגיל חיבור.", math_expression: "10 + 10" },
            { verbal_explanation: "נחבר הכל ונקבל עשרים.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "כמה הם 3 חמישיות (\\( \\dfrac{3}{5} \\)) מתוך 20 תפוחים?&rlm;",
        options: ["12", "15", "4", "8"],
        correctAnswer: 0,
        hint: "כדי למצוא חלק מכמות, קודם מחלקים את הכמות הכוללת במכנה (5), ואז מכפילים את מה שיצא במונה (3).",
        solution_steps: [
            { verbal_explanation: "יש לנו עשרים תפוחים. אנחנו רוצים לחלק אותם לחמש קבוצות שוות (המשמעות של חמישיות).", math_expression: "20 : 5" },
            { verbal_explanation: "נפתור ונגלה שבכל קבוצה יש ארבעה תפוחים. זה אומר שחמישית אחת שווה ארבע.", math_expression: "20 : 5 = 4" },
            { verbal_explanation: "אנחנו רוצים לדעת כמה הם שלוש חמישיות, אז ניקח את הארבע שמצאנו ונכפיל בשלוש.", math_expression: "4 \\times 3" },
            { verbal_explanation: "נחשב ונגלה את כמות התפוחים שלנו.", math_expression: "12" }
        ],
        final_answer: "12"
    },

    // ==========================================
    // תת נושא 2: מבדק מחצית שנה (10 שאלות)
    // ==========================================

    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "מהי התוצאה של תרגיל הכפל העשרוני הבא: 1.2 כפול 4?&rlm;",
        options: ["4.8", "4.2", "48", "0.48"],
        correctAnswer: 0,
        hint: "כפל עשרוני עובד כמו כפל רגיל, פשוט זכרו להחזיר את הנקודה העשרונית למקום שלה. אפשר גם לחשב: אחד כפול ארבע, ושתי עשיריות כפול ארבע.",
        solution_steps: [
            { verbal_explanation: "נכפיל קודם את החלק השלם של המספר בארבע.", math_expression: "1 \\times 4 = 4" },
            { verbal_explanation: "עכשיו נכפיל את החלק של העשיריות (החלק שאחרי הנקודה) בארבע.", math_expression: "0.2 \\times 4 = 0.8" },
            { verbal_explanation: "נחבר את השלמים והעשיריות יחד לקבלת התשובה המלאה.", math_expression: "4 + 0.8" },
            { verbal_explanation: "התשובה היא ארבע נקודה שמונה.", math_expression: "4.8" }
        ],
        final_answer: "4.8"
    },
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "בקולנוע יש 150 כיסאות. 20 אחוזים (20%) מהם ריקים. כמה כיסאות ריקים יש בקולנוע?&rlm;",
        options: ["30", "15", "20", "50"],
        correctAnswer: 0,
        hint: "עשרים אחוזים זה כמו להגיד עשרים מתוך מאה. אפשר למצוא קודם כל עשרה אחוזים על ידי חלוקה בעשר, ואז להכפיל בשתיים.",
        solution_steps: [
            { verbal_explanation: "קודם נמצא כמה זה עשרה אחוזים. עשרה אחוזים הם עשירית מהכל, אז נחלק בעשר.", math_expression: "150 : 10 = 15" },
            { verbal_explanation: "גילינו שעשרה אחוזים שווים לחמישה עשר כיסאות. אנחנו צריכים עשרים אחוזים.", math_expression: "20\\%" },
            { verbal_explanation: "לכן, נכפיל את מה שקיבלנו פי שניים.", math_expression: "15 \\times 2" },
            { verbal_explanation: "נפתור ונגלה את מספר הכיסאות הריקים.", math_expression: "30" }
        ],
        final_answer: "30"
    },
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "היחס בין בנים לבנות בחוג מחול הוא 2 : 3 (על כל 2 בנים יש 3 בנות). בסך הכל יש 30 ילדים בחוג. כמה בנים יש בחוג?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='30' y='30' width='40' height='40' fill='#3b82f6' rx='8'/><rect x='130' y='30' width='40' height='40' fill='#ef4444' rx='8'/><text x='45' y='55' font-size='16' fill='white' font-family='Arial'>2</text><text x='145' y='55' font-size='16' fill='white' font-family='Arial'>3</text><text x='95' y='55' font-size='16' font-family='Arial'>:</text></svg></div>",
        options: ["12", "18", "10", "15"],
        correctAnswer: 0,
        hint: "חברו את חלקי היחס יחד (2+3). חלקו את סך כל הילדים (30) במספר שקיבלתם כדי לדעת כמה ילדים יש בקבוצה אחת קטנה. לבסוף, הכפילו את התשובה בחלק של הבנים (2).",
        solution_steps: [
            { verbal_explanation: "נחבר את מספרי היחס כדי לדעת לכמה קבוצות שוות אנחנו מחלקים את החוג.", math_expression: "2 + 3 = 5" },
            { verbal_explanation: "נחלק את שלושים הילדים שבחוג לחמש קבוצות שוות.", math_expression: "30 : 5 = 6" },
            { verbal_explanation: "גילינו שבכל קבוצה כזו יש שישה ילדים. הבנים מקבלים שתי קבוצות כאלה לפי היחס.", math_expression: "2" },
            { verbal_explanation: "נכפיל שש בשתיים כדי למצוא את כל הבנים.", math_expression: "6 \\times 2" },
            { verbal_explanation: "נפתור ונגיע לתשובה.", math_expression: "12" }
        ],
        final_answer: "12"
    },
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "קוטר של פיצה עגולה הוא 12 סנטימטרים. מהו הרדיוס של הפיצה הזו?&rlm;",
        options: ["6", "24", "12", "3"],
        correctAnswer: 0,
        hint: "הקוטר הוא הקו שעובר מצד לצד דרך המרכז. הרדיוס הוא מהמרכז ועד לקצה, לכן הוא תמיד בדיוק חצי מהקוטר.",
        solution_steps: [
            { verbal_explanation: "הקוטר שווה לשתים עשרה.", math_expression: "12" },
            { verbal_explanation: "אנחנו זוכרים שהרדיוס הוא בדיוק חצי מקוטר. אז נחלק בשתיים.", math_expression: "12 : 2" },
            { verbal_explanation: "נפתור את התרגיל ונגלה את הרדיוס.", math_expression: "6" }
        ],
        final_answer: "6"
    },
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "רוכב אופניים נסע מרחק של 100 קילומטרים. המהירות שלו הייתה קבועה - 25 קילומטרים בשעה. כמה שעות לקחה לו הנסיעה?&rlm;",
        options: ["4", "5", "3", "2500"],
        correctAnswer: 0,
        hint: "כדי למצוא את הזמן בבעיות תנועה, צריך לחלק את המרחק כולו במהירות שבה נסעו.",
        solution_steps: [
            { verbal_explanation: "המרחק שהרוכב עבר הוא מאה.", math_expression: "100" },
            { verbal_explanation: "המהירות שלו הייתה עשרים וחמש לשעה.", math_expression: "25" },
            { verbal_explanation: "נחלק את המרחק במהירות כדי למצוא כמה שעות זה לקח.", math_expression: "100 : 25" },
            { verbal_explanation: "נחשב כמה פעמים עשרים וחמש נכנס במאה. עשרים וחמש, חמישים, שבעים וחמש, מאה. ארבע פעמים.", math_expression: "4" }
        ],
        final_answer: "4"
    },
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "מה תהיה התוצאה אם נחבר את המספר המעורב 1 וחצי עם המספר המעורב 2 ורבע? (\\( 1\\dfrac{1}{2} + 2\\dfrac{1}{4} \\))&rlm;",
        options: ["3 3:4", "3 1:4", "4 3:4", "3 1:2"],
        correctAnswer: 0,
        hint: "חברו קודם את המספרים השלמים. אחר כך, הפכו את החצי לרבעים כדי שתוכלו לחבר אותו עם הרבע.",
        solution_steps: [
            { verbal_explanation: "נרשום את התרגיל.", math_expression: "1\\dfrac{1}{2} + 2\\dfrac{1}{4}" },
            { verbal_explanation: "נחבר את המספרים השלמים קודם: אחד ועוד שתיים.", math_expression: "1 + 2 = 3" },
            { verbal_explanation: "עכשיו נטפל בשברים. החצי שלנו שווה לשני רבעים. נרשום את זה ככה כדי שנוכל לחבר.", math_expression: "\\dfrac{1}{2} = \\dfrac{2}{4}" },
            { verbal_explanation: "נחבר את שני הרבעים עם הרבע הנוסף שיש לנו בתרגיל.", math_expression: "\\dfrac{2}{4} + \\dfrac{1}{4} = \\dfrac{3}{4}" },
            { verbal_explanation: "נחבר את השלמים והשברים יחד למספר מעורב אחד.", math_expression: "3\\dfrac{3}{4}" }
        ],
        final_answer: "3 3:4"
    },
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "רבע (25%) ממחיר של חולצה הוא 10 שקלים. מה המחיר המלא (100%) של החולצה כולה?&rlm;",
        options: ["40", "50", "20", "30"],
        correctAnswer: 0,
        hint: "עשרים וחמישה אחוזים הם בדיוק רבע משלם. אם רבע עולה 10 שקלים, אז כמה עולים 4 רבעים?",
        solution_steps: [
            { verbal_explanation: "אנחנו יודעים שעשרים וחמישה אחוזים זה כמו להגיד חלק אחד מתוך ארבעה חלקים (רבע).", math_expression: "\\dfrac{1}{4}" },
            { verbal_explanation: "החלק הזה (הרבע) שווה לעשרה שקלים.", math_expression: "10" },
            { verbal_explanation: "החולצה המלאה בנויה מארבעה רבעים כאלה. לכן, נכפיל את העשר בארבע.", math_expression: "10 \\times 4" },
            { verbal_explanation: "נפתור את התרגיל ונגלה את המחיר השלם.", math_expression: "40" }
        ],
        final_answer: "40"
    },
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "פתרו את תרגיל החילוק העשרוני: 4.5 לחלק ל-0.5.&rlm;",
        options: ["9", "45", "5", "0.9"],
        correctAnswer: 0,
        hint: "אפשר להכפיל את שני המספרים ב-10 כדי להיפטר מהנקודה העשרונית, ואז תקבלו תרגיל חילוק רגיל לגמרי של 45 לחלק ל-5.",
        solution_steps: [
            { verbal_explanation: "נרשום את התרגיל. קשה קצת לחלק כשיש נקודות עשרוניות.", math_expression: "4.5 : 0.5" },
            { verbal_explanation: "כדי לעשות את זה קל, נזיז את הנקודה צעד אחד ימינה בשני המספרים (זה כמו להכפיל הכל בעשר).", math_expression: "45 : 5" },
            { verbal_explanation: "קיבלנו תרגיל פשוט מלוח הכפל.", math_expression: "45 : 5" },
            { verbal_explanation: "נחשב כמה פעמים חמש נכנס בארבעים וחמש. התשובה היא תשע.", math_expression: "9" }
        ],
        final_answer: "9"
    },
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "במשולש, אורך הבסיס הוא 10 סנטימטרים ואורך הגובה לבסיס זה הוא 4 סנטימטרים. מהו שטח המשולש?&rlm;",
        options: ["20", "40", "14", "5"],
        correctAnswer: 0,
        hint: "כדי למצוא שטח של משולש, מכפילים את הבסיס בגובה ואז - חשוב מאוד - מחלקים את התוצאה בשתיים.",
        solution_steps: [
            { verbal_explanation: "נרשום את המספרים שיש לנו מתוך השאלה: הבסיס והגובה.", math_expression: "10 \\quad , \\quad 4" },
            { verbal_explanation: "בשטח משולש קודם מכפילים את הבסיס בגובה.", math_expression: "10 \\times 4 = 40" },
            { verbal_explanation: "עכשיו, חובה לחלק את התשובה שקיבלנו לשתיים.", math_expression: "40 : 2" },
            { verbal_explanation: "ארבעים לחלק לשתיים זה עשרים. וזהו השטח.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "דני קיבל במבחן הראשון 80, במבחן השני 100, ובמבחן השלישי 120 (בונוס). מהו ממוצע הציונים שלו?&rlm;",
        options: ["100", "90", "110", "300"],
        correctAnswer: 0,
        hint: "ממוצע מוצאים על ידי חיבור כל המספרים יחד, וחלוקת הסכום במספר המבחנים (שזה 3).",
        solution_steps: [
            { verbal_explanation: "נחבר את הציון הראשון והשני יחד.", math_expression: "80 + 100 = 180" },
            { verbal_explanation: "נוסיף לסכום את הציון השלישי שלו כדי לגלות כמה נקודות צבר בסך הכל.", math_expression: "180 + 120 = 300" },
            { verbal_explanation: "יש לנו שלושה מבחנים סך הכל, אז נחלק את הסכום בשלוש.", math_expression: "300 : 3" },
            { verbal_explanation: "נפתור ונגלה את הממוצע היפה שלו.", math_expression: "100" }
        ],
        final_answer: "100"
    },

    // ==========================================
    // תת נושא 3: שאלות אתגר רב-שלביות (10 שאלות)
    // ==========================================

    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "נעליים שעלו 200 שקלים נמכרו בסוף העונה בהנחה של 20%. שבוע לאחר מכן, היה מבצע של עוד 10% הנחה על המחיר החדש. כמה עולות הנעליים עכשיו?&rlm;",
        options: ["144", "140", "150", "160"],
        correctAnswer: 0,
        hint: "חשבו שלב שלב. קודם הורידו 20% מ-200 וקבלו את המחיר החדש. רק אז, תורידו 10% מהמחיר החדש הזה שמצאתם.",
        solution_steps: [
            { verbal_explanation: "נמצא קודם כמה שווה ההנחה הראשונה של עשרים אחוזים. נחלק מאתיים במאה ונכפיל בעשרים.", math_expression: "200 : 100 \\times 20 = 40" },
            { verbal_explanation: "נוריד את ההנחה מהמחיר המקורי כדי לדעת כמה הנעליים עולות אחרי ההנחה הראשונה.", math_expression: "200 - 40 = 160" },
            { verbal_explanation: "עכשיו יש עוד הנחה, הפעם של עשרה אחוזים, אבל היא מחושבת על המחיר החדש. עשרה אחוזים זה כמו לחלק בעשר.", math_expression: "160 : 10 = 16" },
            { verbal_explanation: "נוריד את ההנחה השנייה מהמחיר.", math_expression: "160 - 16" },
            { verbal_explanation: "נקבל את המחיר הסופי של הנעליים היום.", math_expression: "144" }
        ],
        final_answer: "144"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "לרוכל יש 120 תפוחים. שליש מהתפוחים הם אדומים, רבע מהתפוחים הם ירוקים, ושאר התפוחים הם צהובים. כמה תפוחים צהובים יש לו?&rlm;",
        options: ["50", "40", "30", "70"],
        correctAnswer: 0,
        hint: "חשבו כמה תפוחים אדומים יש (על ידי חלוקה ל-3). אחר כך חשבו כמה ירוקים יש (על ידי חלוקה ל-4). חברו אותם וחסרו מהסך הכל.",
        solution_steps: [
            { verbal_explanation: "נמצא כמה תפוחים אדומים יש. שליש זה אומר לחלק בשלוש.", math_expression: "120 : 3 = 40" },
            { verbal_explanation: "נמצא כמה ירוקים יש. רבע זה אומר לחלק בארבע.", math_expression: "120 : 4 = 30" },
            { verbal_explanation: "נחבר את האדומים והירוקים יחד כדי לראות כמה ספרנו עד עכשיו.", math_expression: "40 + 30 = 70" },
            { verbal_explanation: "כדי למצוא את הצהובים (שהם השארית), ניקח את כל התפוחים שהיו לנו מההתחלה ונחסר מהם את מה שספרנו.", math_expression: "120 - 70" },
            { verbal_explanation: "נפתור ונגלה את מספר התפוחים הצהובים.", math_expression: "50" }
        ],
        final_answer: "50"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "רוכב א' יצא מעיר צפון ורכב דרומה במהירות 15 קילומטרים בשעה. באותו הזמן, רוכב ב' יצא מעיר דרום ורכב צפונה במהירות 20 קילומטרים בשעה. הם נפגשו כעבור 3 שעות. מה המרחק שהיה בין הערים?&rlm;",
        options: ["105", "45", "60", "90"],
        correctAnswer: 0,
        hint: "כשהם נוסעים אחד לקראת השני, המהירות שבה הם מתקרבים היא סכום המהירויות שלהם. חברו את המהירויות ואז הכפילו בזמן.",
        solution_steps: [
            { verbal_explanation: "שני הרוכבים באים אחד מול השני. נחבר את המהירויות שלהם כדי לגלות בכמה קילומטרים הם מצמצמים את הפער ביניהם כל שעה.", math_expression: "15 + 20 = 35" },
            { verbal_explanation: "הם התקרבו במהירות הזו במשך שלוש שעות תמימות. נכפיל את המהירות המשותפת שלהם בזמן.", math_expression: "35 \\times 3" },
            { verbal_explanation: "נפתור את התרגיל. שלושים כפול שלוש זה תשעים, וחמש כפול שלוש זה חמש עשרה. נחבר ונקבל את המרחק השלם.", math_expression: "105" }
        ],
        final_answer: "105"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "רצפת חדר היא בצורת מלבן. אורך החדר 5 מטרים ורוחבו 4 מטרים. רוצים לרצף את החדר באריחים (מרצפות) שצורתם ריבוע ואורך הצלע שלהם הוא 0.5 מטרים (חצי מטר). כמה אריחים יצטרכו?&rlm;",
        options: ["80", "20", "40", "100"],
        correctAnswer: 0,
        hint: "חשבו את השטח של החדר. אחר כך, חשבו את השטח של אריח אחד קטן (חצי כפול חצי). בסוף, חלקו את השטח הגדול בשטח הקטן.",
        solution_steps: [
            { verbal_explanation: "נחשב קודם את השטח של החדר כולו במטרים רבועים. אורך כפול רוחב.", math_expression: "5 \\times 4 = 20" },
            { verbal_explanation: "עכשיו נחשב מה השטח שתופסת מרצפת אחת קטנה. חצי כפול חצי שווה לרבע.", math_expression: "0.5 \\times 0.5 = 0.25" },
            { verbal_explanation: "כדי לדעת כמה מרצפות נכנסות בחדר, נחלק את השטח הגדול של החדר בשטח של המרצפת.", math_expression: "20 : 0.25" },
            { verbal_explanation: "זה כמו לשאול: כמה פעמים נכנס רבע בתוך עשרים שלמים? בכל שלם יש ארבעה רבעים, אז בעשרים יהיו שמונים.", math_expression: "80" }
        ],
        final_answer: "80"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "סבא מחלק 500 שקלים לשני נכדיו ביחס של 2 : 3. כמה שקלים יקבל הנכד שקיבל את החלק הגדול יותר?&rlm;",
        options: ["300", "200", "250", "400"],
        correctAnswer: 0,
        hint: "חברו את חלקי היחס כדי לדעת לכמה מנות חולק הכסף. חלקו את 500 במנות אלו, והכפילו ב-3 (החלק הגדול).",
        solution_steps: [
            { verbal_explanation: "נחבר את המספרים של היחס כדי לדעת לכמה חתיכות שוות סבא חילק את הכסף סך הכל.", math_expression: "2 + 3 = 5" },
            { verbal_explanation: "נחלק את חמש מאות השקלים לחמש חתיכות.", math_expression: "500 : 5 = 100" },
            { verbal_explanation: "גילינו שכל חתיכה שווה למאה שקלים. הנכד עם החלק הגדול קיבל שלוש חתיכות כאלה.", math_expression: "3" },
            { verbal_explanation: "נכפיל את המאה שקלים בשלוש החתיכות שלו.", math_expression: "100 \\times 3" },
            { verbal_explanation: "זהו הסכום שהוא יקבל לידיו.", math_expression: "300" }
        ],
        final_answer: "300"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "נפח של בריכה הוא 1000 ליטרים. צינור אחד מכניס מים לבריכה בקצב של 50 ליטרים בדקה, אך יש חור בבריכה שממנו בורחים 10 ליטרים בדקה. תוך כמה דקות תתמלא הבריכה?&rlm;",
        options: ["25", "20", "16", "30"],
        correctAnswer: 0,
        hint: "קודם מצאו כמה מים באמת נשארים בבריכה כל דקה (המים שנכנסים פחות המים שיוצאים). אחר כך, חלקו את כל הנפח בקצב הזה.",
        solution_steps: [
            { verbal_explanation: "נמצא כמה מים נשארים בבריכה כל דקה. נחסר מהמים שנכנסים את המים שבורחים מהחור.", math_expression: "50 - 10 = 40" },
            { verbal_explanation: "גילינו שכל דקה הבריכה מתמלאת בארבעים ליטרים. הבריכה כולה צריכה אלף ליטרים. נחלק את האלף בארבעים.", math_expression: "1000 : 40" },
            { verbal_explanation: "נוריד אפס מכל צד. קיבלנו מאה לחלק לארבע. התשובה היא עשרים וחמש דקות.", math_expression: "100 : 4 = 25" }
        ],
        final_answer: "25"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "לדן היו 4 מבחנים והממוצע שלו בהם היה 90. במבחן הראשון קיבל 80, בשני 90 ובשלישי 100. מה הציון שקיבל דן במבחן הרביעי?&rlm;",
        options: ["90", "100", "80", "95"],
        correctAnswer: 0,
        hint: "אם הממוצע של 4 מבחנים הוא 90, חשבו כמה נקודות הוא צבר בסך הכל בכולם יחד. חברו את הציונים של 3 המבחנים שאתם יודעים, וחסרו מהסך הכל.",
        solution_steps: [
            { verbal_explanation: "נמצא את סך כל הנקודות שדן אסף בארבעת המבחנים יחד. נכפיל את הממוצע שלו בארבע.", math_expression: "90 \\times 4 = 360" },
            { verbal_explanation: "עכשיו נחבר את הציונים של שלושת המבחנים שאנחנו כבר מכירים.", math_expression: "80 + 90 + 100" },
            { verbal_explanation: "נחשב ונגלה שהסכום שלהם הוא מאתיים ושבעים.", math_expression: "270" },
            { verbal_explanation: "כדי למצוא את הציון האחרון, ניקח את סך הכל הנקודות ונחסר ממנו את מה שחיברנו עכשיו.", math_expression: "360 - 270" },
            { verbal_explanation: "נקבל את הציון שהיה חסר לנו.", math_expression: "90" }
        ],
        final_answer: "90"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "טל הגיעה לקניון. בחנות הראשונה היא הוציאה בדיוק חצי (\\( \\dfrac{1}{2} \\)) מכל הכסף שהיה לה. בחנות השנייה היא הוציאה שליש (\\( \\dfrac{1}{3} \\)) מהכסף שנותר לה. כשיצאה מהקניון נשארו לה 40 שקלים. כמה כסף היה לה כשהגיעה לקניון?&rlm;",
        options: ["120", "100", "80", "60"],
        correctAnswer: 0,
        hint: "לכו מהסוף להתחלה. אם נשארו לה 40 אחרי שהוציאה שליש ממה שנותר, אז ה-40 האלו הם שני שלישים מהסכום לפני החנות השנייה. מצאו את הסכום לפני החנות השנייה, שהוא בדיוק החצי מהכסף המקורי.",
        solution_steps: [
            { verbal_explanation: "בחנות השנייה היא הוציאה שליש, ולכן נשארו לה שני שלישים מהכסף שהיה לה באותו רגע.", math_expression: "1 - \\dfrac{1}{3} = \\dfrac{2}{3}" },
            { verbal_explanation: "אומרים לנו שהשני שלישים האלו שווים לארבעים שקלים. כדי למצוא כמה כסף היה לה לפני שנכנסה לחנות הזו, נחלק לשתיים (כדי למצוא כמה שווה שליש אחד) ונכפיל בשלוש (כדי למצוא את השלם).", math_expression: "40 : 2 \\times 3 = 60" },
            { verbal_explanation: "שישים השקלים האלו הם הכסף שנשאר לה אחרי שיצאה מהחנות הראשונה. אבל בחנות הראשונה היא הוציאה חצי מהכסף, לכן שישים השקלים הם בעצם החצי השני.", math_expression: "60" },
            { verbal_explanation: "אם שישים הם חצי מהכסף שהיה לה בהתחלה, נכפיל בשתיים כדי למצוא כמה היה לה כשנכנסה לקניון.", math_expression: "60 \\times 2" },
            { verbal_explanation: "הגענו לסכום המקורי המלא.", math_expression: "120" }
        ],
        final_answer: "120"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "היקף של מלבן הוא 40 סנטימטרים. אורך המלבן גדול פי 3 מרוחב המלבן. מהו השטח של המלבן הזה?&rlm;",
        options: ["75", "100", "50", "80"],
        correctAnswer: 0,
        hint: "חצי היקף המלבן הוא 20. ה-20 האלו מורכבים מצלע אחת קצרה וצלע אחת שארוכה ממנה פי 3. כלומר יחד יש פה '4 חלקים'. חלקו את 20 ב-4 כדי למצוא את הרוחב.",
        solution_steps: [
            { verbal_explanation: "נחלק את ההיקף הכולל של המלבן בשתיים, כדי למצוא את הסכום של שתי צלעות סמוכות בלבד (אורך פלוס רוחב).", math_expression: "40 : 2 = 20" },
            { verbal_explanation: "אנחנו יודעים שהאורך הוא כמו שלושה רוחבים ביחד. אז סך הכל יש לנו רוחב אחד ועוד שלושה רוחבים, שהם ארבעה חלקים שווים.", math_expression: "1 + 3 = 4" },
            { verbal_explanation: "נחלק את הסכום שלנו (עשרים) בארבעת החלקים האלו כדי למצוא כמה שווה חלק אחד, שזה בעצם הרוחב הקצר.", math_expression: "20 : 4 = 5" },
            { verbal_explanation: "אם הרוחב הוא חמש, אז האורך, שהוא גדול פי שלוש, הוא חמש עשרה.", math_expression: "5 \\times 3 = 15" },
            { verbal_explanation: "עכשיו כשיש לנו את הצלעות, נחשב את השטח על ידי הכפלת האורך ברוחב.", math_expression: "15 \\times 5" },
            { verbal_explanation: "נקבל את השטח של המלבן.", math_expression: "75" }
        ],
        final_answer: "75"
    },
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "עובד מרוויח 30 שקלים בשעה. הוא עבד 8 שעות ביום במשך 5 ימים. לאחר שקיבל את המשכורת שלו, הוא הוציא 20 אחוזים מהכסף כדי לקנות בגדים. כמה כסף נשאר לו?&rlm;",
        options: ["960", "240", "1000", "800"],
        correctAnswer: 0,
        hint: "חשבו כמה שעות עבד בסך הכל (כפל). הכפילו בשכר לשעה. מצאו כמה זה 20% מהמשכורת וחסרו אותם.",
        solution_steps: [
            { verbal_explanation: "נחשב כמה שעות הוא עבד בסך הכל בכל השבוע. שמונה שעות כפול חמישה ימים.", math_expression: "8 \\times 5 = 40" },
            { verbal_explanation: "נחשב את המשכורת הכוללת שלו על ידי הכפלת כל השעות שלו בשכר לשעה.", math_expression: "40 \\times 30 = 1200" },
            { verbal_explanation: "הוא הוציא עשרים אחוזים מזה. נחשב כמה זה עשרים אחוזים. נחלק במאה (נקבל שתים עשרה) ונכפיל בעשרים.", math_expression: "1200 : 100 \\times 20 = 240" },
            { verbal_explanation: "זה הכסף שהוא בזבז. כדי לדעת כמה נשאר לו נחסר את מה שבזבז מהמשכורת הכוללת שלו.", math_expression: "1200 - 240" },
            { verbal_explanation: "התוצאה היא הכסף שנותר לו בכיס.", math_expression: "960" }
        ],
        final_answer: "960"
    }
];
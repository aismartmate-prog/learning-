const questionsDB = [
    // ==========================================
    // תת נושא 1: הגדרת מודל מעריכי (12 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "exponential_models_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: "במעבדה יש תרבית של 500 חיידקים. ידוע כי כמות החיידקים מכפילה את עצמה בכל שעה. איזו פונקציה מעריכית מתארת את כמות החיידקים לאחר t שעות?&rlm;",
        options: ["M_{t} = 500 \\times 2^{t}", "M_{t} = 2 \\times 500^{t}", "M_{t} = 500 + 2^{t}", "M_{t} = 500 \\times 1.2^{t}"],
        correctAnswer: 0,
        hint: "הכמות ההתחלתית היא המספר שכופלים בו. מכיוון שהכמות 'מכפילה את עצמה', מקדם הגדילה (הבסיס) הוא 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הכמות ההתחלתית של החיידקים מתוך הנתונים בשאלה.", math_expression: "M_{0} = 500" },
            { verbal_explanation: "שלב 2: זיהוי מקדם הגדילה (הכפלה פירושה כפל בשתיים).", math_expression: "q = 2" },
            { verbal_explanation: "שלב 3: כתיבת תבנית הפונקציה המעריכית הכללית.", math_expression: "M_{t} = M_{0} \\times q^{t}" },
            { verbal_explanation: "שלב 4: הצבת הכמות ההתחלתית במקומה בתבנית.", math_expression: "M_{t} = 500 \\times q^{t}" },
            { verbal_explanation: "שלב 5: הצבת המקדם בבסיס החזקה להשלמת הפונקציה.", math_expression: "M_{t} = 500 \\times 2^{t}" },
            { verbal_explanation: "שלב 6: בחירת התשובה המתאימה מתוך האפשרויות.", math_expression: "M_{t} = 500 \\times 2^{t}" }
        ],
        final_answer: "M_{t} = 500 \\times 2^{t}"
    },

    // שאלה מספר 2
    {
        topic: "exponential_models_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: "מסה של חומר רדיואקטיבי היא 100 גרם. המסה קטנה ב-10% בכל שעה. איזו פונקציה מתארת את כמות החומר שנותר לאחר t שעות?&rlm;",
        options: ["M_{t} = 100 \\times 0.9^{t}", "M_{t} = 100 \\times 1.1^{t}", "M_{t} = 100 \\times 0.1^{t}", "M_{t} = 100 - 10^{t}"],
        correctAnswer: 0,
        hint: "כדי למצוא את המקדם כשיש ירידה באחוזים, חסרו את האחוז (10 מתוך 100) מהמספר 1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הכמות ההתחלתית בגרמים.", math_expression: "M_{0} = 100" },
            { verbal_explanation: "שלב 2: ציון אחוז הדעיכה כפי שמופיע בשאלה.", math_expression: "p = 10" },
            { verbal_explanation: "שלב 3: חישוב המקדם (בסיס הפונקציה) על ידי חיסור האחוז מהשלם.", math_expression: "q = 1 - \\dfrac{10}{100}" },
            { verbal_explanation: "שלב 4: המרת השבר למספר עשרוני וביצוע החיסור.", math_expression: "q = 1 - 0.1 = 0.9" },
            { verbal_explanation: "שלב 5: הרכבת הפונקציה המעריכית השלמה.", math_expression: "M_{t} = 100 \\times 0.9^{t}" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה במערכת.", math_expression: "M_{t} = 100 \\times 0.9^{t}" }
        ],
        final_answer: "M_{t} = 100 \\times 0.9^{t}"
    },

    // שאלה מספר 3
    {
        topic: "exponential_models_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: "אוכלוסיית עיר מונה 20,000 תושבים. האוכלוסייה גדלה בקצב של 5% בכל שנה. מהי הפונקציה המעריכית המתארת את מספר התושבים לאחר t שנים?&rlm;",
        options: ["M_{t} = 20000 \\times 1.05^{t}", "M_{t} = 20000 \\times 1.5^{t}", "M_{t} = 20000 \\times 0.95^{t}", "M_{t} = 20000 \\times 0.05^{t}"],
        correctAnswer: 0,
        hint: "גדילה באחוזים דורשת חיבור לשלם (1). 5% הם 0.05 (חמש מאיות) ולא 0.5 (חמישים אחוז).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הערך ההתחלתי של האוכלוסייה.", math_expression: "M_{0} = 20000" },
            { verbal_explanation: "שלב 2: זיהוי אחוז הגדילה והצבתו בנוסחת המקדם.", math_expression: "q = 1 + \\dfrac{5}{100}" },
            { verbal_explanation: "שלב 3: המרת השבר (חמש חלקי מאה) לשבר עשרוני.", math_expression: "q = 1 + 0.05" },
            { verbal_explanation: "שלב 4: חיבור למציאת בסיס החזקה.", math_expression: "q = 1.05" },
            { verbal_explanation: "שלב 5: כתיבת הפונקציה המלאה עם המקדם המעודכן.", math_expression: "M_{t} = 20000 \\times 1.05^{t}" },
            { verbal_explanation: "שלב 6: בחירת החלופה הנכונה.", math_expression: "M_{t} = 20000 \\times 1.05^{t}" }
        ],
        final_answer: "M_{t} = 20000 \\times 1.05^{t}"
    },

    // שאלה מספר 4
    {
        topic: "exponential_models_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: "ערכו של רכב בעת קנייתו היה 80,000 שקלים. ידוע שערך הרכב יורד ב-15% בכל שנה. מהי הפונקציה המתארת את מחיר הרכב לאחר t שנים?&rlm;",
        options: ["M_{t} = 80000 \\times 0.85^{t}", "M_{t} = 80000 \\times 1.15^{t}", "M_{t} = 80000 \\times 0.15^{t}", "M_{t} = 80000 - 15^{t}"],
        correctAnswer: 0,
        hint: "ירידת ערך היא דעיכה מעריכית. חסרו 0.15 מ-1 כדי לקבל את בסיס החזקה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המחיר ההתחלתי.", math_expression: "M_{0} = 80000" },
            { verbal_explanation: "שלב 2: שימוש באחוז הפחת לחישוב מקדם הדעיכה.", math_expression: "q = 1 - \\dfrac{15}{100}" },
            { verbal_explanation: "שלב 3: ביצוע החיסור מתוך אחד שלם.", math_expression: "q = 1 - 0.15 = 0.85" },
            { verbal_explanation: "שלב 4: הצבת המשתנים לתבנית המודל.", math_expression: "M_{t} = 80000 \\times 0.85^{t}" },
            { verbal_explanation: "שלב 5: התשובה המדויקת להזנה.", math_expression: "M_{t} = 80000 \\times 0.85^{t}" }
        ],
        final_answer: "M_{t} = 80000 \\times 0.85^{t}"
    },

    // שאלה מספר 5
    {
        topic: "exponential_models_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: "אדם הפקיד בתוכנית חיסכון 5,000 שקלים בריבית שנתית קבועה של 3%. איזה מודל מתאר את סכום הכסף בחיסכון כעבור t שנים?&rlm;",
        options: ["M_{t} = 5000 \\times 1.03^{t}", "M_{t} = 5000 \\times 1.3^{t}", "M_{t} = 5000 \\times 0.97^{t}", "M_{t} = 5000 \\times 3^{t}"],
        correctAnswer: 0,
        hint: "ריבית היא תוספת חיובית לכסף (גדילה). 3% הם 3 מתוך 100, או 0.03.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי סכום ההפקדה ההתחלתי.", math_expression: "M_{0} = 5000" },
            { verbal_explanation: "שלב 2: בניית המקדם מתוך אחוז הריבית.", math_expression: "q = 1 + \\dfrac{3}{100}" },
            { verbal_explanation: "שלב 3: חישוב פעולת החיבור.", math_expression: "q = 1 + 0.03 = 1.03" },
            { verbal_explanation: "שלב 4: שילוב הנתונים לתוך המודל המעריכי.", math_expression: "M_{t} = 5000 \\times 1.03^{t}" },
            { verbal_explanation: "שלב 5: וידוא מול אפשרויות התשובה.", math_expression: "M_{t} = 5000 \\times 1.03^{t}" }
        ],
        final_answer: "M_{t} = 5000 \\times 1.03^{t}"
    },

    // שאלה מספר 6
    {
        topic: "exponential_models_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: "ביער היו 4,000 עצים. בכל שנה שריפות ומחלות מכלות 20% מהעצים. מהי הפונקציה המתארת את כמות העצים הנותרת?&rlm;",
        options: ["M_{t} = 4000 \\times 0.8^{t}", "M_{t} = 4000 \\times 1.2^{t}", "M_{t} = 4000 \\times 0.2^{t}", "M_{t} = 4000 \\times 0.08^{t}"],
        correctAnswer: 0,
        hint: "דעיכה של 20% פירושה שנותרים 80% מהעצים בכל שנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת כמות העצים ההתחלתית.", math_expression: "M_{0} = 4000" },
            { verbal_explanation: "שלב 2: חישוב מקדם להישרדות העצים.", math_expression: "q = 1 - \\dfrac{20}{100}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החיסור לקבלת המקדם העשרוני.", math_expression: "q = 1 - 0.2 = 0.8" },
            { verbal_explanation: "שלב 4: הרכבת המודל הדעיכתי.", math_expression: "M_{t} = 4000 \\times 0.8^{t}" },
            { verbal_explanation: "שלב 5: התשובה הנבחרת.", math_expression: "M_{t} = 4000 \\times 0.8^{t}" }
        ],
        final_answer: "M_{t} = 4000 \\times 0.8^{t}"
    },

    // שאלה מספר 7
    {
        topic: "exponential_models_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: "בבריכה היו 1,000 ליטרים של מים. בכל יום מתאדים 2% מהמים. מהי הפונקציה המתארת את כמות המים שנותרת לאחר t ימים?&rlm;",
        options: ["M_{t} = 1000 \\times 0.98^{t}", "M_{t} = 1000 \\times 1.02^{t}", "M_{t} = 1000 \\times 0.2^{t}", "M_{t} = 1000 \\times 0.02^{t}"],
        correctAnswer: 0,
        hint: "אידוי הוא דעיכה. חסרו 0.02 (שזה 2 מתוך 100) מ-1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ציון הכמות ההתחלתית בבריכה.", math_expression: "M_{0} = 1000" },
            { verbal_explanation: "שלב 2: חישוב מקדם הדעיכה על ידי חיסור שני אחוזים מהשלם.", math_expression: "q = 1 - \\dfrac{2}{100}" },
            { verbal_explanation: "שלב 3: ביצוע החיסור להשגת המקדם העשרוני.", math_expression: "q = 1 - 0.02 = 0.98" },
            { verbal_explanation: "שלב 4: הרכבת המודל עם הנתונים הללו.", math_expression: "M_{t} = 1000 \\times 0.98^{t}" },
            { verbal_explanation: "שלב 5: בחירת הנוסחה הנכונה מהרשימה.", math_expression: "M_{t} = 1000 \\times 0.98^{t}" }
        ],
        final_answer: "M_{t} = 1000 \\times 0.98^{t}"
    },

    // שאלה מספר 8
    {
        topic: "exponential_models_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: "עץ שניטע בגובה של 3 מטרים גדל ב-10% בכל שנה. מהי הפונקציה המעריכית המתארת את גובהו?&rlm;",
        options: ["M_{t} = 3 \\times 1.1^{t}", "M_{t} = 3 \\times 0.9^{t}", "M_{t} = 3 \\times 1.01^{t}", "M_{t} = 3 \\times 10^{t}"],
        correctAnswer: 0,
        hint: "גדילה ב-10 אחוזים מקבילה למקדם של 1.1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הגובה ההתחלתי.", math_expression: "M_{0} = 3" },
            { verbal_explanation: "שלב 2: אחוז הגדילה שניתן.", math_expression: "p = 10" },
            { verbal_explanation: "שלב 3: בניית המקדם מתוך האחוז.", math_expression: "q = 1 + \\dfrac{10}{100} = 1.1" },
            { verbal_explanation: "שלב 4: שילוב הנתונים בנוסחה הכללית.", math_expression: "M_{t} = 3 \\times 1.1^{t}" },
            { verbal_explanation: "שלב 5: התשובה המוכנה.", math_expression: "M_{t} = 3 \\times 1.1^{t}" }
        ],
        final_answer: "M_{t} = 3 \\times 1.1^{t}"
    },

    // שאלה מספר 9
    {
        topic: "exponential_models_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: "נתונה סדרה של מדידות (לפי שעות 0, 1, 2): בתחילה היו 100 חיידקים. כעבור שעה 120. כעבור שעתיים 144. מהו מקדם הגדילה של המודל?&rlm;",
        options: ["1.2", "20", "1.44", "0.2"],
        correctAnswer: 0,
        hint: "חלקו את כמות החיידקים בשעה 1 לכמות ההתחלתית בשעה 0 כדי למצוא את יחס ההכפלה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קריאת הנתונים מהסדרה המוצגת.", math_expression: "M_{0} = 100 \\quad , \\quad M_{1} = 120 \\quad , \\quad M_{2} = 144" },
            { verbal_explanation: "שלב 2: שימוש בנוסחה למציאת מקדם מקפיצה בודדת.", math_expression: "q = M_{1} : M_{0}" },
            { verbal_explanation: "שלב 3: הצבת הערכים במשוואת המנה.", math_expression: "q = 120 : 100" },
            { verbal_explanation: "שלב 4: חישוב המנה.", math_expression: "q = 1.2" },
            { verbal_explanation: "שלב 5: אימות בעזרת הקפיצה השנייה.", math_expression: "144 : 120 = 1.2" },
            { verbal_explanation: "שלב 6: המקדם המאומת הוא אחת נקודה שתיים.", math_expression: "1.2" }
        ],
        final_answer: "1.2"
    },

    // שאלה מספר 10
    {
        topic: "exponential_models_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: "נתונה סדרה של מדידות משקל של חומר: ביום האפס 200 גרם. ביום הראשון 100 גרם. ביום השני 50 גרם. מהו מקדם הדעיכה של המודל?&rlm;",
        options: ["0.5", "100", "2", "0.25"],
        correctAnswer: 0,
        hint: "כמו בגדילה, המקדם מתקבל מחלוקת נתון עכשווי בנתון קודם. 100 חלקי 200.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הנתונים של מדידות עוקבות.", math_expression: "M_{0} = 200 \\quad , \\quad M_{1} = 100" },
            { verbal_explanation: "שלב 2: בניית היחס בין שלב ראשון לאפס.", math_expression: "q = 100 : 200" },
            { verbal_explanation: "שלב 3: ביצוע החלוקה לקבלת השבר.", math_expression: "q = 0.5" },
            { verbal_explanation: "שלב 4: אימות על ידי יום שתיים ויום אחד.", math_expression: "50 : 100 = 0.5" },
            { verbal_explanation: "שלב 5: התוצאה הסופית עבור בסיס הדעיכה.", math_expression: "0.5" }
        ],
        final_answer: "0.5"
    },

    // שאלה מספר 11
    {
        topic: "exponential_models_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: "איזה מבין המקדמים הבאים מתאר תהליך של הקטנת הכמות למחצית מערכה (דעיכה של 50%) בכל פרק זמן?&rlm;",
        options: ["0.5", "50", "1.5", "0.05"],
        correctAnswer: 0,
        hint: "הקטנה לחצי משמעותה להכפיל בחצי (0.5).",
        solution_steps: [
            { verbal_explanation: "שלב 1: תרגום מילולי לאחוז דעיכה.", math_expression: "p = 50" },
            { verbal_explanation: "שלב 2: בניית משוואת המקדם.", math_expression: "q = 1 - \\dfrac{50}{100}" },
            { verbal_explanation: "שלב 3: הפיכת השבר לעשרוני.", math_expression: "q = 1 - 0.5" },
            { verbal_explanation: "שלב 4: פעולת החיסור.", math_expression: "q = 0.5" },
            { verbal_explanation: "שלב 5: המסקנה לזיהוי המקדם.", math_expression: "0.5" }
        ],
        final_answer: "0.5"
    },

    // שאלה מספר 12
    {
        topic: "exponential_models_35371",
        subTopic: "הגדרת מודל מעריכי",
        question_text: "איזה מבין המקדמים הבאים מתאר תהליך של עלייה ב-25% בכל פרק זמן?&rlm;",
        options: ["1.25", "1.025", "0.75", "1.2"],
        correctAnswer: 0,
        hint: "25% הם רבע מהשלם (0.25). חברו זאת ל-1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום האחוז שניתן.", math_expression: "p = 25" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת מקדם גדילה.", math_expression: "q = 1 + \\dfrac{25}{100}" },
            { verbal_explanation: "שלב 3: מעבר לשבר עשרוני.", math_expression: "q = 1 + 0.25" },
            { verbal_explanation: "שלב 4: חישוב סופי.", math_expression: "q = 1.25" },
            { verbal_explanation: "שלב 5: הרישום לבחירה.", math_expression: "1.25" }
        ],
        final_answer: "1.25"
    },

    // ==========================================
    // תת נושא 2: שימוש בנוסחאות מעריכיות לבעיה נתונה (12 שאלות)
    // ==========================================

    // שאלה מספר 13
    {
        topic: "exponential_models_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: "לאחר שעתיים (t=2), כמות חיידקים הגיעה ל-144. מקדם הגדילה השעתי הוא 1.2. מה הייתה הכמות ההתחלתית בנקודת האפס?&rlm;",
        options: ["100", "120", "144", "100.8"],
        correctAnswer: 0,
        hint: "הציבו בנוסחה כשהכמות ההתחלתית היא הנעלם. חלקו את 144 ב-1.2 בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת הגדילה המעריכית.", math_expression: "144 = M_{0} \\times 1.2^{2}" },
            { verbal_explanation: "שלב 2: העלאת המקדם בחזקה שנייה.", math_expression: "1.2^{2} = 1.44" },
            { verbal_explanation: "שלב 3: הצבת הערך המחושב לתוך המשוואה.", math_expression: "144 = M_{0} \\times 1.44" },
            { verbal_explanation: "שלב 4: חלוקת אגפי המשוואה כדי לבודד את הכמות ההתחלתית.", math_expression: "M_{0} = 144 : 1.44" },
            { verbal_explanation: "שלב 5: קבלת התוצאה לאחר חלוקה.", math_expression: "M_{0} = 100" },
            { verbal_explanation: "שלב 6: בחירת התשובה.", math_expression: "100" }
        ],
        final_answer: "100"
    },

    // שאלה מספר 14
    {
        topic: "exponential_models_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: "לאחר שנתיים של ירידת ערך, מחיר רכב עומד על 810 שקלים. מקדם הדעיכה (ירידת ערך) הוא 0.9 לשנה. מה היה מחירו המקורי של הרכב?&rlm;",
        options: ["1000", "900", "1100", "890"],
        correctAnswer: 0,
        hint: "בדיוק כמו גדילה, בנו משוואה וחלקו במקדם בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת מודל הדעיכה עם כמות התחלתית כנעלם.", math_expression: "810 = M_{0} \\times 0.9^{2}" },
            { verbal_explanation: "שלב 2: חישוב החזקה עבור בסיס קטן מאחת.", math_expression: "0.9^{2} = 0.81" },
            { verbal_explanation: "שלב 3: הצבה במשוואה.", math_expression: "810 = M_{0} \\times 0.81" },
            { verbal_explanation: "שלב 4: חלוקת המשוואה בשבר העשרוני.", math_expression: "M_{0} = 810 : 0.81" },
            { verbal_explanation: "שלב 5: חישוב התוצאה למחיר ההתחלתי.", math_expression: "M_{0} = 1000" },
            { verbal_explanation: "שלב 6: הרישום לסיום.", math_expression: "1000" }
        ],
        final_answer: "1000"
    },

    // שאלה מספר 15
    {
        topic: "exponential_models_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: "לאחר 3 שעות (t=3), נותרו 250 גרם של חומר פעיל במעבדה. מקדם הדעיכה הוא 0.5. מה הייתה הכמות ההתחלתית בגרמים?&rlm;",
        options: ["2000", "1000", "750", "500"],
        correctAnswer: 0,
        hint: "חצי בחזקת 3 זה 0.125 (שמינית). חלקו 250 בשמינית (כלומר, הכפילו פי 8).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הרכבת משוואת דעיכה לפרק זמן של שלוש שעות.", math_expression: "250 = M_{0} \\times 0.5^{3}" },
            { verbal_explanation: "שלב 2: העלאת חצי בשלישית.", math_expression: "0.5^{3} = 0.125" },
            { verbal_explanation: "שלב 3: כתיבת המשוואה המעודכנת.", math_expression: "250 = M_{0} \\times 0.125" },
            { verbal_explanation: "שלב 4: חלוקת שני הצדדים באפס נקודה מאה עשרים וחמש.", math_expression: "M_{0} = 250 : 0.125" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החילוק (שקולה לכפל בשמונה).", math_expression: "M_{0} = 2000" },
            { verbal_explanation: "שלב 6: ציון הפתרון.", math_expression: "2000" }
        ],
        final_answer: "2000"
    },

    // שאלה מספר 16
    {
        topic: "exponential_models_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: "לאחר 4 מחזורים (t=4), כמות וירוסים עומדת על 160. מקדם ההתרבות (הגדילה) הוא 2. מהי הכמות ההתחלתית?&rlm;",
        options: ["10", "40", "80", "16"],
        correctAnswer: 0,
        hint: "2 בחזקת 4 זה 16. חלקו 160 ב-16.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת נתוני הגדילה במשוואה.", math_expression: "160 = M_{0} \\times 2^{4}" },
            { verbal_explanation: "שלב 2: ביצוע חזקה למקדם (שתיים כפול שתיים כפול שתיים כפול שתיים).", math_expression: "2^{4} = 16" },
            { verbal_explanation: "שלב 3: כתיבת המשוואה עם המספר שחושב.", math_expression: "160 = M_{0} \\times 16" },
            { verbal_explanation: "שלב 4: בידוד הכמות על ידי חלוקה בשש עשרה.", math_expression: "M_{0} = 160 : 16" },
            { verbal_explanation: "שלב 5: פתרון החלוקה.", math_expression: "M_{0} = 10" },
            { verbal_explanation: "שלב 6: אישור התשובה.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 17
    {
        topic: "exponential_models_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: "בזמן אפס היו 100 חיידקים בצלחת. לאחר שנתיים (t=2) היו 121 חיידקים. מהו מקדם הגדילה של החיידקים?&rlm;",
        options: ["1.1", "1.21", "1.11", "0.9"],
        correctAnswer: 0,
        hint: "הפעם הנעלם הוא מקדם הגדילה בחזקת 2. חלקו את 121 ב-100 והוציאו שורש ריבועי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה כאשר בסיס החזקה נעלם.", math_expression: "121 = 100 \\times q^{2}" },
            { verbal_explanation: "שלב 2: חלוקת המשוואה במאה לבידוד החזקה.", math_expression: "q^{2} = 121 : 100" },
            { verbal_explanation: "שלב 3: ביצוע חלוקה עשרונית.", math_expression: "q^{2} = 1.21" },
            { verbal_explanation: "שלב 4: הוצאת שורש ריבועי כדי למצוא את המקדם הנקי.", math_expression: "q = \\sqrt{1.21}" },
            { verbal_explanation: "שלב 5: התוצאה.", math_expression: "q = 1.1" },
            { verbal_explanation: "שלב 6: הרישום הרלוונטי.", math_expression: "1.1" }
        ],
        final_answer: "1.1"
    },

    // שאלה מספר 18
    {
        topic: "exponential_models_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: "חומר שקל 100 גרם במקור. כעבור שנתיים משקלו ירד ל-64 גרם. מהו מקדם הדעיכה (הפחתה)?&rlm;",
        options: ["0.8", "0.64", "0.9", "0.85"],
        correctAnswer: 0,
        hint: "חלקו 64 ב-100 והוציאו שורש. השורש של 0.64 הוא 0.8.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת תבנית הדעיכה עם המקדם כנעלם.", math_expression: "64 = 100 \\times q^{2}" },
            { verbal_explanation: "שלב 2: בידוד החזקה באגף ימין על ידי חלוקה.", math_expression: "q^{2} = 64 : 100" },
            { verbal_explanation: "שלב 3: התוצאה למנה.", math_expression: "q^{2} = 0.64" },
            { verbal_explanation: "שלב 4: הפעלת שורש ריבועי על שני הצדדים.", math_expression: "q = \\sqrt{0.64}" },
            { verbal_explanation: "שלב 5: התוצאה למקדם הדעיכה.", math_expression: "q = 0.8" },
            { verbal_explanation: "שלב 6: רישום הפתרון.", math_expression: "0.8" }
        ],
        final_answer: "0.8"
    },

    // שאלה מספר 19
    {
        topic: "exponential_models_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: "לפני שנתיים נשתל שתיל שגובהו 4 מטרים. היום (t=2) גובהו 36 מטרים. מהו מקדם הגדילה של העץ?&rlm;",
        options: ["3", "9", "4", "2"],
        correctAnswer: 0,
        hint: "36 חלקי 4 זה 9. שורש של 9 ייתן לכם את המקדם השנתי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית הפרופורציה בתוך נוסחת הגדילה.", math_expression: "36 = 4 \\times q^{2}" },
            { verbal_explanation: "שלב 2: חלוקת המספר הגדול במספר הקטן.", math_expression: "q^{2} = 36 : 4" },
            { verbal_explanation: "שלב 3: מציאת המנה הריבועית.", math_expression: "q^{2} = 9" },
            { verbal_explanation: "שלב 4: הוצאת שורש פשוט.", math_expression: "q = \\sqrt{9}" },
            { verbal_explanation: "שלב 5: מקדם הגדילה.", math_expression: "q = 3" },
            { verbal_explanation: "שלב 6: התשובה שתוצג.", math_expression: "3" }
        ],
        final_answer: "3"
    },

    // שאלה מספר 20
    {
        topic: "exponential_models_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: "מספר התחלתי של חרקים היה 1. לאחר שנתיים (t=2), נספרו 49 חרקים. מהו מקדם ההתרבות (גדילה) של חרקים אלו?&rlm;",
        options: ["7", "49", "24.5", "14"],
        correctAnswer: 0,
        hint: "הכמות ההתחלתית היא אחת, לכן אין צורך לחלק. רק הוציאו שורש ריבועי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הכנסת הנתונים למשוואה.", math_expression: "49 = 1 \\times q^{2}" },
            { verbal_explanation: "שלב 2: חזקה מוכפלת באחת שווה לעצמה.", math_expression: "q^{2} = 49" },
            { verbal_explanation: "שלב 3: הפעלת שורש על ארבעים ותשע.", math_expression: "q = \\sqrt{49}" },
            { verbal_explanation: "שלב 4: מציאת מקדם הגדילה המדויק.", math_expression: "q = 7" },
            { verbal_explanation: "שלב 5: אישור התוצאה.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 21
    {
        topic: "exponential_models_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: "כמות תרופה בדם הייתה 1.44 פעמים הכמות המקורית לאחר שעתיים (כלומר סכום סופי = 1.44 כפול סכום מקורי). מה היה מקדם הגדילה?&rlm;",
        options: ["1.2", "1.44", "0.72", "1.12"],
        correctAnswer: 0,
        hint: "כשהכמות הסופית מוצגת ככפולה של ההתחלתית, פשוט השוו את מקדם החזקה למכפיל, והוציאו שורש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית הקשר בין כמות התחלתית לסופית דרך הנעלם.", math_expression: "1.44 \\times M_{0} = M_{0} \\times q^{2}" },
            { verbal_explanation: "שלב 2: צמצום הכמות ההתחלתית משני הצדדים.", math_expression: "1.44 = q^{2}" },
            { verbal_explanation: "שלב 3: הוצאת שורש על אחד נקודה ארבעים וארבע.", math_expression: "q = \\sqrt{1.44}" },
            { verbal_explanation: "שלב 4: התוצאה של השורש.", math_expression: "q = 1.2" },
            { verbal_explanation: "שלב 5: התשובה הישירה.", math_expression: "1.2" }
        ],
        final_answer: "1.2"
    },

    // שאלה מספר 22
    {
        topic: "exponential_models_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: "ערך מחשב עומד על 0.25 מהערך המקורי שלו לאחר שנתיים. מהו מקדם הדעיכה?&rlm;",
        options: ["0.5", "0.25", "0.75", "1.5"],
        correctAnswer: 0,
        hint: "היחס לאחר שנתיים הוא רבע (0.25). השורש הריבועי של רבע ייתן את מקדם הדעיכה השנתי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתון כיחס בין כמות סופית להתחלתית.", math_expression: "0.25 \\times M_{0} = M_{0} \\times q^{2}" },
            { verbal_explanation: "שלב 2: צמצום המשתנה של הכמות ההתחלתית.", math_expression: "0.25 = q^{2}" },
            { verbal_explanation: "שלב 3: הוצאת שורש ריבועי.", math_expression: "q = \\sqrt{0.25}" },
            { verbal_explanation: "שלב 4: ערך המקדם שחולץ.", math_expression: "q = 0.5" },
            { verbal_explanation: "שלב 5: הבחירה הנכונה.", math_expression: "0.5" }
        ],
        final_answer: "0.5"
    },

    // שאלה מספר 23
    {
        topic: "exponential_models_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: "לאחר חודש אחד (t=1), היו באוכלוסייה 105 ארנבים. ידוע שמקדם הגדילה הוא 1.05. מה הייתה הכמות ההתחלתית במדויק?&rlm;",
        options: ["100", "105", "110.25", "95"],
        correctAnswer: 0,
        hint: "בזמן אחד אין צורך בחזקה. פשוט חלקו את 105 ב-1.05.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת הפונקציה במצב בו חזקת הזמן היא אחת.", math_expression: "105 = M_{0} \\times 1.05^{1}" },
            { verbal_explanation: "שלב 2: העלמת החזקה.", math_expression: "105 = M_{0} \\times 1.05" },
            { verbal_explanation: "שלב 3: בידוד הכמות דרך חלוקה אריתמטית.", math_expression: "M_{0} = 105 : 1.05" },
            { verbal_explanation: "שלב 4: קבלת התוצאה למספר הארנבים המקורי.", math_expression: "M_{0} = 100" },
            { verbal_explanation: "שלב 5: בחירת התשובה.", math_expression: "100" }
        ],
        final_answer: "100"
    },

    // שאלה מספר 24
    {
        topic: "exponential_models_35371",
        subTopic: "שימוש בנוסחאות מעריכיות לבעיה נתונה",
        question_text: "לאחר שעה אחת (t=1), נותרו מנוזל 90 מיליליטר. מקדם הדעיכה שלו הוא 0.9. כמה מיליליטר היו במקור?&rlm;",
        options: ["100", "81", "90", "110"],
        correctAnswer: 0,
        hint: "ממש כמו בשאלה הקודמת, זהו שלב דעיכה בודד. חלקו את 90 ב-0.9.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת דעיכה לשעה בודדת.", math_expression: "90 = M_{0} \\times 0.9^{1}" },
            { verbal_explanation: "שלב 2: חזקת אחת שומרת על הערך.", math_expression: "90 = M_{0} \\times 0.9" },
            { verbal_explanation: "שלב 3: העברת שבר עשרוני לצד שמאל תוך חילוק.", math_expression: "M_{0} = 90 : 0.9" },
            { verbal_explanation: "שלב 4: פתרון.", math_expression: "M_{0} = 100" },
            { verbal_explanation: "שלב 5: הרישום לבדיקה.", math_expression: "100" }
        ],
        final_answer: "100"
    },

    // ==========================================
    // תת נושא 3: חישוב גודל בעת זמן נתון (12 שאלות)
    // ==========================================

    // שאלה מספר 25
    {
        topic: "exponential_models_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: "כמות תאים ביולוגיים התחלתית עומדת על 100. קצב ההתרבות (מקדם) הוא 2 (כלומר מכפילים). כמה תאים יהיו לאחר 3 מחזורים (t=3)?&rlm;",
        options: ["800", "600", "400", "900"],
        correctAnswer: 0,
        hint: "זכרו ש-2 בחזקת 3 זה 8, ולא 6. הכפילו 100 ב-8.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים הרלוונטיים בנוסחה המעריכית.", math_expression: "M_{3} = 100 \\times 2^{3}" },
            { verbal_explanation: "שלב 2: חישוב החזקה.", math_expression: "2^{3} = 8" },
            { verbal_explanation: "שלב 3: כתיבת תרגיל הכפל הפשוט לאחר פעולת החזקה.", math_expression: "M_{3} = 100 \\times 8" },
            { verbal_explanation: "שלב 4: חישוב סופי למספר התאים.", math_expression: "M_{3} = 800" },
            { verbal_explanation: "שלב 5: המסקנה.", math_expression: "800" }
        ],
        final_answer: "800"
    },

    // שאלה מספר 26
    {
        topic: "exponential_models_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: "כמות החומר הפעיל בתרופה מסוימת היא 1000 מ''ג בהתחלה. מקדם הדעיכה עקב ספיגה בגוף הוא 0.5 לכל שעה. כמה יישאר לאחר שעתיים (t=2)?&rlm;",
        options: ["250", "500", "125", "200"],
        correctAnswer: 0,
        hint: "העלו 0.5 בריבוע כדי לקבל רבע (0.25). חלקו את 1000 ב-4 או הכפילו ברבע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בפונקציה למציאת המסה לאחר ספיגה של שעתיים.", math_expression: "M_{2} = 1000 \\times 0.5^{2}" },
            { verbal_explanation: "שלב 2: חישוב המקדם הריבועי המקטין.", math_expression: "0.5^{2} = 0.25" },
            { verbal_explanation: "שלב 3: ביצוע כפל של הכמות בחומר הנותר בערך שבר.", math_expression: "M_{2} = 1000 \\times 0.25" },
            { verbal_explanation: "שלב 4: התוצאה הסופית שהיא גם חלוקת אלף בארבע.", math_expression: "M_{2} = 250" },
            { verbal_explanation: "שלב 5: התשובה לרישום.", math_expression: "250" }
        ],
        final_answer: "250"
    },

    // שאלה מספר 27
    {
        topic: "exponential_models_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: "הופקדו 500 שקלים בחיסכון, בעל מקדם גדילה שנתי של 1.1. כמה כסף יהיה בחיסכון לאחר שנתיים?&rlm;",
        options: ["605", "550", "600", "610"],
        correctAnswer: 0,
        hint: "העלו 1.1 בריבוע (קבלו 1.21), והכפילו ב-500.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בפונקציית ריבית דריבית.", math_expression: "M_{2} = 500 \\times 1.1^{2}" },
            { verbal_explanation: "שלב 2: חישוב הערך המעריכי.", math_expression: "1.1^{2} = 1.21" },
            { verbal_explanation: "שלב 3: כתיבת תרגיל הכפל האחרון בבעיה.", math_expression: "M_{2} = 500 \\times 1.21" },
            { verbal_explanation: "שלב 4: ביצוע הכפל לקבלת הסכום.", math_expression: "M_{2} = 605" },
            { verbal_explanation: "שלב 5: זהו הסכום שנחסך.", math_expression: "605" }
        ],
        final_answer: "605"
    },

    // שאלה מספר 28
    {
        topic: "exponential_models_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: "ערך של מוצר לאספנים מתחיל ב-2000 שקלים ומאבד מערכו עם מקדם דעיכה של 0.9 לשנה. מה יהיה ערכו לאחר שנתיים?&rlm;",
        options: ["1620", "1800", "1600", "1700"],
        correctAnswer: 0,
        hint: "0.9 בריבוע זה 0.81. הכפילו את ה-2000 ב-0.81.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית פונקציית פחת שנתית.", math_expression: "M_{2} = 2000 \\times 0.9^{2}" },
            { verbal_explanation: "שלב 2: חישוב החזקה.", math_expression: "0.9^{2} = 0.81" },
            { verbal_explanation: "שלב 3: שילוב הנתון במשוואה.", math_expression: "M_{2} = 2000 \\times 0.81" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "M_{2} = 1620" },
            { verbal_explanation: "שלב 5: התשובה הדרושה.", math_expression: "1620" }
        ],
        final_answer: "1620"
    },

    // שאלה מספר 29
    {
        topic: "exponential_models_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: "מספר המבקרים באתר מתחיל ב-10,000, ומקדם הגדילה החודשי הוא 1.05. כמה מבקרים יהיו לאחר חודשיים?&rlm;",
        options: ["11025", "11000", "10500", "11200"],
        correctAnswer: 0,
        hint: "1.05 בחזקת 2 שווה ל-1.1025. הכפילו זאת ב-10,000 (הזיזו את הנקודה העשרונית).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הרכבת פונקציית צפי המבקרים.", math_expression: "M_{2} = 10000 \\times 1.05^{2}" },
            { verbal_explanation: "שלב 2: חישוב אחוז הגדילה המשוקלל לחודשיים.", math_expression: "1.05^{2} = 1.1025" },
            { verbal_explanation: "שלב 3: כפל במספר השלם הראשוני.", math_expression: "M_{2} = 10000 \\times 1.1025" },
            { verbal_explanation: "שלב 4: הזזת הנקודה לקבלת כמות המבקרים.", math_expression: "M_{2} = 11025" },
            { verbal_explanation: "שלב 5: התוצאה המוצגת בחלופות.", math_expression: "11025" }
        ],
        final_answer: "11025"
    },

    // שאלה מספר 30
    {
        topic: "exponential_models_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: "קבוצה של 50,000 צמחים סובלת ממחסור במים ודועכת עם מקדם של 0.8 בשבוע. כמה צמחים יישארו לאחר 3 שבועות?&rlm;",
        options: ["25600", "40000", "32000", "20000"],
        correctAnswer: 0,
        hint: "העלו 0.8 בחזקת 3. התוצאה היא 0.512. הכפילו אותה בכמות ההתחלתית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית מודל הדעיכה לצמחים לתקופה של שלושה שבועות.", math_expression: "M_{3} = 50000 \\times 0.8^{3}" },
            { verbal_explanation: "שלב 2: פתרון החזקה במחשבון.", math_expression: "0.8^{3} = 0.512" },
            { verbal_explanation: "שלב 3: הצבת המקדם שחושב לנוסחה.", math_expression: "M_{3} = 50000 \\times 0.512" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "M_{3} = 25600" },
            { verbal_explanation: "שלב 5: התשובה המבוקשת במדויק.", math_expression: "25600" }
        ],
        final_answer: "25600"
    },

    // שאלה מספר 31
    {
        topic: "exponential_models_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: "ערך מניה הוא 400. היא מתחזקת עם מקדם גדילה של 1.5. מה יהיה ערך המניה בעוד יומיים (t=2)?&rlm;",
        options: ["900", "600", "1000", "800"],
        correctAnswer: 0,
        hint: "1.5 בחזקת 2 שווה ל-2.25. הכפילו את התוצאה ב-400.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת ערכי המניה ושינוי יומי בנוסחה.", math_expression: "M_{2} = 400 \\times 1.5^{2}" },
            { verbal_explanation: "שלב 2: פתרון החזקה.", math_expression: "1.5^{2} = 2.25" },
            { verbal_explanation: "שלב 3: כפל הערך ההתחלתי בתוצאת החזקה.", math_expression: "M_{2} = 400 \\times 2.25" },
            { verbal_explanation: "שלב 4: התוצאה היא ערך המניה החדש.", math_expression: "M_{2} = 900" },
            { verbal_explanation: "שלב 5: המסקנה לרישום.", math_expression: "900" }
        ],
        final_answer: "900"
    },

    // שאלה מספר 32
    {
        topic: "exponential_models_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: "חומר פעיל בתמיסה שוקל 800 גרם והוא נספג במהירות עם מקדם דעיכה של 0.25 (רבע). כמה גרם חומר יישארו לאחר שעתיים?&rlm;",
        options: ["50", "200", "100", "25"],
        correctAnswer: 0,
        hint: "רבע (0.25) בחזקת 2 זה אחד חלקי שש עשרה (0.0625). הכפילו ב-800.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית פונקציית ספיגת החומר.", math_expression: "M_{2} = 800 \\times 0.25^{2}" },
            { verbal_explanation: "שלב 2: חישוב החזקה של רבע.", math_expression: "0.25^{2} = 0.0625" },
            { verbal_explanation: "שלב 3: הצבה במשוואה.", math_expression: "M_{2} = 800 \\times 0.0625" },
            { verbal_explanation: "שלב 4: תוצאת פעולת החישוב.", math_expression: "M_{2} = 50" },
            { verbal_explanation: "שלב 5: הכמות שתישאר בגרמים.", math_expression: "50" }
        ],
        final_answer: "50"
    },

    // שאלה מספר 33
    {
        topic: "exponential_models_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: "מוצר שהושק בהצלחה מוכר 200 יחידות ביום הראשון. המכירות צומחות עם מקדם של 1.2 ביום. כמה יימכרו כעבור יומיים נוספים (t=2)?&rlm;",
        options: ["288", "240", "300", "250"],
        correctAnswer: 0,
        hint: "העלו את 1.2 בריבוע כדי לקבל 1.44. לאחר מכן הכפילו בכמות ההתחלתית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת מודל המכירות עם הנתונים הידועים.", math_expression: "M_{2} = 200 \\times 1.2^{2}" },
            { verbal_explanation: "שלב 2: פתרון העלאת המקדם בריבוע.", math_expression: "1.2^{2} = 1.44" },
            { verbal_explanation: "שלב 3: כפל במספר היחידות הראשוני.", math_expression: "M_{2} = 200 \\times 1.44" },
            { verbal_explanation: "שלב 4: חישוב כמות המכירות העתידית.", math_expression: "M_{2} = 288" },
            { verbal_explanation: "שלב 5: התשובה למערכת.", math_expression: "288" }
        ],
        final_answer: "288"
    },

    // שאלה מספר 34
    {
        topic: "exponential_models_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: "חברת תעופה מטיסה 300 נוסעים בקווים מסוימים. עקב משבר, ישנה דעיכה במקדם של 0.9 בשבוע. כמה נוסעים יהיו כעבור שבועיים?&rlm;",
        options: ["243", "270", "250", "200"],
        correctAnswer: 0,
        hint: "העלו 0.9 בריבוע וקבלו 0.81. לאחר מכן הכפילו ב-300.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בפונקציית צפי הנוסעים העתידי.", math_expression: "M_{2} = 300 \\times 0.9^{2}" },
            { verbal_explanation: "שלב 2: העלאת מקדם המשבר בריבוע.", math_expression: "0.9^{2} = 0.81" },
            { verbal_explanation: "שלב 3: הכפלת התוצאה בכמות המקורית של הנוסעים.", math_expression: "M_{2} = 300 \\times 0.81" },
            { verbal_explanation: "שלב 4: תוצאת הכפל.", math_expression: "M_{2} = 243" },
            { verbal_explanation: "שלב 5: הרישום לבחירה.", math_expression: "243" }
        ],
        final_answer: "243"
    },

    // שאלה מספר 35
    {
        topic: "exponential_models_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: "כמות מסוימת של חומר עומדת על 10 יחידות, ומקדם הגדילה הוא 3. מה תהיה הכמות לאחר שלושה מחזורי זמן (t=3)?&rlm;",
        options: ["270", "90", "30", "120"],
        correctAnswer: 0,
        hint: "3 בחזקת 3 שווה ל-27. הכפילו את התוצאה ב-10.",
        solution_steps: [
            { verbal_explanation: "שלב 1: יצירת המשוואה המתאימה מתוך הנתונים המוצגים.", math_expression: "M_{3} = 10 \\times 3^{3}" },
            { verbal_explanation: "שלב 2: ביצוע חזקה למקדם.", math_expression: "3^{3} = 27" },
            { verbal_explanation: "שלב 3: הרכבת המכפלה האחרונה.", math_expression: "M_{3} = 10 \\times 27" },
            { verbal_explanation: "שלב 4: פתרון.", math_expression: "M_{3} = 270" },
            { verbal_explanation: "שלב 5: התשובה הישירה.", math_expression: "270" }
        ],
        final_answer: "270"
    },

    // שאלה מספר 36
    {
        topic: "exponential_models_35371",
        subTopic: "חישוב גודל בעת זמן נתון",
        question_text: "מיכל מים מלא ב-100 ליטרים, אך נוזל ממנו תוכן באופן מעריכי עם מקדם דעיכה של 0.1. כמה ליטרים יישארו בו לאחר שעתיים?&rlm;",
        options: ["1", "10", "5", "81"],
        correctAnswer: 0,
        hint: "המקדם נתון ישירות בשאלה (0.1). העלו אותו בריבוע והכפילו ב-100.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בנוסחת דעיכה מהירה כפי שנתונה.", math_expression: "M_{2} = 100 \\times 0.1^{2}" },
            { verbal_explanation: "שלב 2: חישוב חזקה.", math_expression: "0.1^{2} = 0.01" },
            { verbal_explanation: "שלב 3: כפל במאה מבטל את המאית.", math_expression: "M_{2} = 100 \\times 0.01" },
            { verbal_explanation: "שלב 4: תוצאת החישוב.", math_expression: "M_{2} = 1" },
            { verbal_explanation: "שלב 5: ליטר אחד יישאר.", math_expression: "1" }
        ],
        final_answer: "1"
    },

    // ==========================================
    // תת נושא 4: חיזוי שינויים על פי מודל מעריכי (12 שאלות)
    // ==========================================

    // שאלה מספר 37
    {
        topic: "growth_decay_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: "קיימות שתי אוכלוסיות. באוכלוסייה א' יש 1000 פרטים והיא גדלה עם מקדם 1.2. באוכלוסייה ב' יש 1000 פרטים, אך היא קטנה עם מקדם 0.8. מה יהיה ההפרש במספר הפרטים ביניהן לאחר שנתיים?&rlm;",
        options: ["800", "400", "200", "1000"],
        correctAnswer: 0,
        hint: "חשבו את הכמות הסופית בכל אוכלוסייה בנפרד, ואז חסרו את הקטנה מהגדולה. (אחת תהיה 1440, השנייה 640).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב גודל אוכלוסייה א' בעזרת המודל שלה.", math_expression: "M_{A} = 1000 \\times 1.2^{2} = 1440" },
            { verbal_explanation: "שלב 2: חישוב גודל אוכלוסייה ב' בעזרת המודל השני.", math_expression: "M_{B} = 1000 \\times 0.8^{2} = 640" },
            { verbal_explanation: "שלב 3: כתיבת פעולת החיסור למציאת ההפרש.", math_expression: "x = 1440 - 640" },
            { verbal_explanation: "שלב 4: ביצוע החיסור.", math_expression: "x = 800" },
            { verbal_explanation: "שלב 5: התשובה שנבחרה.", math_expression: "800" }
        ],
        final_answer: "800"
    },

    // שאלה מספר 38
    {
        topic: "growth_decay_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: "מחירו של מוצר היה 100 שקלים. בשנה הראשונה מחירו עלה ב-10%. בשנה השנייה מחירו ירד ב-10%. מהו מחירו הסופי לאחר השנתיים הללו?&rlm;",
        options: ["99", "100", "101", "90"],
        correctAnswer: 0,
        hint: "עליות וירידות באחוזים אינן מבטלות זו את זו. הכפילו ב-1.1 ואת התוצאה ב-0.9.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת מקדם השנה הראשונה.", math_expression: "q_{1} = 1.1" },
            { verbal_explanation: "שלב 2: קביעת מקדם השנה השנייה.", math_expression: "q_{2} = 0.9" },
            { verbal_explanation: "שלב 3: הרכבת משוואה משולבת עם שני המקדמים.", math_expression: "M_{2} = 100 \\times 1.1 \\times 0.9" },
            { verbal_explanation: "שלב 4: ביצוע הכפל הדו-שלבי.", math_expression: "M_{2} = 110 \\times 0.9" },
            { verbal_explanation: "שלב 5: תוצאת הכפל הסופי.", math_expression: "M_{2} = 99" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "99" }
        ],
        final_answer: "99"
    },

    // שאלה מספר 39
    {
        topic: "growth_decay_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: "מחירו של מחשב היה 200 שקלים. בשנה הראשונה הוא ירד ב-20%, ובשנה השנייה עלה ב-20%. מהו מחירו הסופי?&rlm;",
        options: ["192", "200", "208", "160"],
        correctAnswer: 0,
        hint: "הכפילו את 200 קודם במקדם הירידה (0.8), ואת התוצאה במקדם העלייה (1.2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת מקדם הירידה לשנה א'.", math_expression: "q_{1} = 0.8" },
            { verbal_explanation: "שלב 2: קביעת מקדם העלייה לשנה ב'.", math_expression: "q_{2} = 1.2" },
            { verbal_explanation: "שלב 3: כתיבת הפונקציה המלאה עם כל הנתונים.", math_expression: "M_{2} = 200 \\times 0.8 \\times 1.2" },
            { verbal_explanation: "שלב 4: ביצוע השלב הראשון בכפל.", math_expression: "M_{2} = 160 \\times 1.2" },
            { verbal_explanation: "שלב 5: ביצוע השלב השני בכפל.", math_expression: "M_{2} = 192" },
            { verbal_explanation: "שלב 6: אישור התוצאה כפי שתוזן למערכת.", math_expression: "192" }
        ],
        final_answer: "192"
    },

    // שאלה מספר 40
    {
        topic: "growth_decay_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: "אוכלוסייה א' מונה 500 תושבים ומכפילה את עצמה (מקדם 2) בכל שנה. אוכלוסייה ב' מונה 2000 תושבים ופוחתת לחצי (מקדם 0.5) בכל שנה. מה יהיה ההפרש במספר התושבים ביניהן כעבור שנתיים?&rlm;",
        options: ["1500", "1000", "0", "500"],
        correctAnswer: 0,
        hint: "חשבו את הכמות בשתי האוכלוסיות לאחר שנתיים (אוכלוסייה א' תגדל ל-2000, אוכלוסייה ב' תרד ל-500).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב תהליך הגדילה.", math_expression: "M_{A} = 500 \\times 2^{2} = 2000" },
            { verbal_explanation: "שלב 2: חישוב תהליך הדעיכה.", math_expression: "M_{B} = 2000 \\times 0.5^{2} = 500" },
            { verbal_explanation: "שלב 3: בניית התרגיל למציאת ההפרש.", math_expression: "x = 2000 - 500" },
            { verbal_explanation: "שלב 4: ביצוע פעולת החיסור.", math_expression: "x = 1500" },
            { verbal_explanation: "שלב 5: התשובה הישירה.", math_expression: "1500" }
        ],
        final_answer: "1500"
    },

    // שאלה מספר 41
    {
        topic: "growth_decay_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: "חברה רושמת עלייה ברווחים של 20% בשנה אחת, ועלייה של 20% בשנה שאחריה. העלייה הזו שקולה לעלייה מצטברת אחת של איזה אחוז בסך הכל מתחילת התקופה? (רמז: הכפילו את המקדמים זה בזה).&rlm;",
        options: ["44", "40", "20", "44.4"],
        correctAnswer: 0,
        hint: "המקדם הכללי שווה ל-1.2 כפול 1.2 (שזה 1.44). אחוז הגידול מחושב מתוך התוספת למספר אחת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת שני המקדמים.", math_expression: "q_{1} = 1.2 \\quad , \\quad q_{2} = 1.2" },
            { verbal_explanation: "שלב 2: הכפלת המקדמים לקבלת מקדם כולל.", math_expression: "q = 1.2 \\times 1.2" },
            { verbal_explanation: "שלב 3: התוצאה למקדם הכללי.", math_expression: "q = 1.44" },
            { verbal_explanation: "שלב 4: המרת המקדם הכללי בחזרה לאחוזים.", math_expression: "p = (1.44 - 1) \\times 100" },
            { verbal_explanation: "שלב 5: פתרון המשוואה לחילוץ האחוז המצטבר.", math_expression: "p = 0.44 \\times 100 = 44" },
            { verbal_explanation: "שלב 6: הרישום הרלוונטי.", math_expression: "44" }
        ],
        final_answer: "44"
    },

    // שאלה מספר 42
    {
        topic: "growth_decay_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: "כמות תרופה בדם פוחתת ב-10% בכל שעה במשך שעתיים ברצף. הירידה הזו שקולה לדעיכה אחת כוללת של איזה אחוז בסך הכל? (רמז: חסרו את מקדם הדעיכה הכולל מהשלם).&rlm;",
        options: ["19", "20", "18.1", "21"],
        correctAnswer: 0,
        hint: "הכפילו את מקדמי הדעיכה 0.9 כפול 0.9. התוצאה היא 0.81. כעת, בדקו כמה חסר מ-0.81 כדי להשלים ל-1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת שני מקדמי הדעיכה.", math_expression: "q_{1} = 0.9 \\quad , \\quad q_{2} = 0.9" },
            { verbal_explanation: "שלב 2: הכפלתם לקבלת המקדם המייצג את התקופה כולה.", math_expression: "q = 0.9 \\times 0.9" },
            { verbal_explanation: "שלב 3: התוצאה של המקדם הכולל.", math_expression: "q = 0.81" },
            { verbal_explanation: "שלב 4: בניית נוסחת האחוזים לדעיכה לחילוץ האחוז.", math_expression: "p = (1 - 0.81) \\times 100" },
            { verbal_explanation: "שלב 5: חישוב הערך.", math_expression: "p = 0.19 \\times 100 = 19" },
            { verbal_explanation: "שלב 6: בחירת התשובה.", math_expression: "19" }
        ],
        final_answer: "19"
    },

    // שאלה מספר 43
    {
        topic: "growth_decay_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: "הושקעו 1000 שקלים בריבית דריבית של 10% (מקדם 1.1) לתקופה של שנתיים. תוכנית שנייה הציעה ריבית גבוהה של 21% (מקדם 1.21) לתקופה של שנה אחת על אותו סכום. מה ההבדל ברווח הסופי? (חשבו ללא השקלים, רק את המקדמים).&rlm;",
        options: ["0", "1", "10", "100"],
        correctAnswer: 0,
        hint: "העלו 1.1 בחזקת 2 והשוו למקדם 1.21.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המקדם הכללי לתוכנית הראשונה.", math_expression: "q_{1} = 1.1^{2} = 1.21" },
            { verbal_explanation: "שלב 2: המקדם הכללי לתוכנית השנייה.", math_expression: "q_{2} = 1.21" },
            { verbal_explanation: "שלב 3: חישוב ההפרש בין המקדמים.", math_expression: "x = 1.21 - 1.21" },
            { verbal_explanation: "שלב 4: המסקנה העולה מן ההשוואה.", math_expression: "x = 0" },
            { verbal_explanation: "שלב 5: התשובה הישירה.", math_expression: "0" }
        ],
        final_answer: "0"
    },

    // שאלה מספר 44
    {
        topic: "growth_decay_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: "כמות בסיסית היא 100. היא עוברת גדילה של 50% (מקדם 1.5) פעמיים ברציפות. מה ההפרש בין התוצאה הסופית לכמות המקורית?&rlm;",
        options: ["125", "225", "100", "150"],
        correctAnswer: 0,
        hint: "חשבו את הכמות לאחר פעמיים 1.5. התוצאה היא 225. חסרו מהתוצאה את הכמות המקורית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: יצירת משוואת הגדילה לחישוב הכמות הסופית.", math_expression: "M_{2} = 100 \\times 1.5^{2}" },
            { verbal_explanation: "שלב 2: פתרון פעולת החזקה קודם כל.", math_expression: "1.5^{2} = 2.25" },
            { verbal_explanation: "שלב 3: הכפלת הבסיס להשלמת החישוב.", math_expression: "M_{2} = 100 \\times 2.25 = 225" },
            { verbal_explanation: "שלב 4: בניית תרגיל החיסור למציאת ההפרש.", math_expression: "x = 225 - 100" },
            { verbal_explanation: "שלב 5: קבלת התשובה הנכונה להפרש.", math_expression: "x = 125" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה במערכת.", math_expression: "125" }
        ],
        final_answer: "125"
    },

    // שאלה מספר 45
    {
        topic: "growth_decay_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: "מסה התחלתית היא 1000 גרם, היא חווה הפחתה למחצית מן המסה (מקדם 0.5) פעמיים ברציפות (t=2). איזו כמות תישאר בסוף התהליך?&rlm;",
        options: ["250", "500", "125", "200"],
        correctAnswer: 0,
        hint: "העלו 0.5 בריבוע כדי לקבל 0.25 (רבע). הכפילו ב-1000.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בפונקציית דעיכה מהירה.", math_expression: "M_{2} = 1000 \\times 0.5^{2}" },
            { verbal_explanation: "שלב 2: ביצוע חזקה לפעולה של הכפלת חצי בחצי.", math_expression: "0.5^{2} = 0.25" },
            { verbal_explanation: "שלב 3: הכפלת המסה המקורית במקדם החדש שנוצר.", math_expression: "M_{2} = 1000 \\times 0.25" },
            { verbal_explanation: "שלב 4: פעולת החישוב.", math_expression: "M_{2} = 250" },
            { verbal_explanation: "שלב 5: המאזן הנותר מחומר זה בגרמים.", math_expression: "250" }
        ],
        final_answer: "250"
    },

    // שאלה מספר 46
    {
        topic: "growth_decay_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: "עלות פריט היא 50 שקלים. המחיר עולה ב-10% ולאחר שנה עולה בעוד 10%. מה המחיר הסופי לאחר שנתיים?&rlm;",
        options: ["60.5", "60", "55", "61.5"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה הרגילה עם 1.1 בריבוע והכפילו ב-50.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת המקדם מתוך עשרה אחוזי עלייה.", math_expression: "q = 1.1" },
            { verbal_explanation: "שלב 2: כתיבת הפונקציה לחישוב המחיר הסופי לאחר שתי עליות.", math_expression: "M_{2} = 50 \\times 1.1^{2}" },
            { verbal_explanation: "שלב 3: העלאת המקדם בחזקה שתיים.", math_expression: "1.1^{2} = 1.21" },
            { verbal_explanation: "שלב 4: כפל המחיר המקורי בתוצאת החזקה שחישבנו.", math_expression: "M_{2} = 50 \\times 1.21" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החישוב.", math_expression: "M_{2} = 60.5" },
            { verbal_explanation: "שלב 6: זהו המחיר החדש.", math_expression: "60.5" }
        ],
        final_answer: "60.5"
    },

    // שאלה מספר 47
    {
        topic: "growth_decay_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: "עלות שירות היא 400 שקלים. ניתן לקבל הנחה של 25% ולאחריה עוד הנחה של 20%. מה העלות הסופית של השירות?&rlm;",
        options: ["240", "300", "220", "260"],
        correctAnswer: 0,
        hint: "הנחה של 25% היא מקדם של 0.75. הנחה של 20% היא מקדם של 0.8. הכפילו את 400 בשניהם ברצף.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המקדם עבור ההנחה הראשונה.", math_expression: "q_{1} = 1 - 0.25 = 0.75" },
            { verbal_explanation: "שלב 2: חישוב המקדם עבור ההנחה השנייה.", math_expression: "q_{2} = 1 - 0.2 = 0.8" },
            { verbal_explanation: "שלב 3: כתיבת תרגיל משולב של כל ההנחות על המחיר הראשוני.", math_expression: "M_{2} = 400 \\times 0.75 \\times 0.8" },
            { verbal_explanation: "שלב 4: כפל המחיר במקדם ההנחה הראשון.", math_expression: "M_{1} = 300 \\times 0.8" },
            { verbal_explanation: "שלב 5: כפל המחיר החדש במקדם השני.", math_expression: "M_{2} = 240" },
            { verbal_explanation: "שלב 6: הרישום של התשובה לבחירה.", math_expression: "240" }
        ],
        final_answer: "240"
    },

    // שאלה מספר 48
    {
        topic: "growth_decay_35371",
        subTopic: "חיזוי שינויים על פי מודל מעריכי",
        question_text: "מספר עוקבים ברשת חברתית מתחיל ב-100. המספר מוכפל (עולה ב-100%, מקדם 2). בשנה שלאחר מכן, המספר צונח בחצי (דעיכה של 50%, מקדם 0.5). בכמה מספר העוקבים השתנה בסך הכל ביחס ליום הראשון?&rlm;",
        options: ["0", "20", "50", "100"],
        correctAnswer: 0,
        hint: "הכפלה של 2 (עלייה) כפול 0.5 (ירידה) מחזירה את המקדם הכללי בדיוק למספר 1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת מקדם הגדילה הראשוני על פי הנתון.", math_expression: "q_{1} = 2" },
            { verbal_explanation: "שלב 2: הצבת מקדם הדעיכה שבא לאחר מכן.", math_expression: "q_{2} = 0.5" },
            { verbal_explanation: "שלב 3: בניית המשוואה המשולבת לכמות העוקבים הסופית.", math_expression: "M_{2} = 100 \\times 2 \\times 0.5" },
            { verbal_explanation: "שלב 4: ביצוע הכפל בין המקדמים תחילה.", math_expression: "M_{2} = 100 \\times 1" },
            { verbal_explanation: "שלב 5: מכפלה באחת אינה משנה את הכמות.", math_expression: "M_{2} = 100" },
            { verbal_explanation: "שלב 6: ההפרש בסך הכל.", math_expression: "x = 100 - 100 = 0" },
            { verbal_explanation: "שלב 7: הרישום הרלוונטי למסקנה שהתקבלה.", math_expression: "0" }
        ],
        final_answer: "0"
    }
];
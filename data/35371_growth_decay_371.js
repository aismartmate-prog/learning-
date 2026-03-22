const questionsDB = [
    // ==========================================
    // תת נושא 1: אחוזי שינוי (חיובי ושלילי) (12 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "growth_decay_35371",
        subTopic: "אחוזי שינוי (חיובי ושלילי)",
        question_text: "מחיר מוצר עלה ב-20%. מהו מקדם הגדילה (הבסיס q) שבו נכפיל את המחיר המקורי כדי לקבל את המחיר החדש?&rlm;",
        options: ["1.2", "0.2", "1.02", "1.25"],
        correctAnswer: 0,
        hint: "כדי למצוא את מקדם הגדילה, מוסיפים את האחוז הנתון חלקי מאה למספר אחת (השלם).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי אחוז השינוי החיובי מתוך השאלה.", math_expression: "p = 20" },
            { verbal_explanation: "שלב 2: כתיבת הנוסחה למציאת מקדם גדילה.", math_expression: "q = 1 + \\dfrac{p}{100}" },
            { verbal_explanation: "שלב 3: הצבת האחוז הנתון בנוסחה.", math_expression: "q = 1 + \\dfrac{20}{100}" },
            { verbal_explanation: "שלב 4: המרת השבר למספר עשרוני.", math_expression: "q = 1 + 0.2" },
            { verbal_explanation: "שלב 5: חיבור המספרים לקבלת המקדם.", math_expression: "q = 1.2" },
            { verbal_explanation: "שלב 6: הרישום הסופי.", math_expression: "1.2" }
        ],
        final_answer: "1.2"
    },

    // שאלה מספר 2
    {
        topic: "growth_decay_35371",
        subTopic: "אחוזי שינוי (חיובי ושלילי)",
        question_text: "מחיר מוצר ירד ב-15%. מהו מקדם הדעיכה (הבסיס q)?&rlm;",
        options: ["0.85", "1.15", "0.15", "0.085"],
        correctAnswer: 0,
        hint: "כאשר ישנה ירידה או הנחה, מחסרים את האחוז חלקי מאה מהמספר אחת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי אחוז השינוי השלילי (דעיכה).", math_expression: "p = 15" },
            { verbal_explanation: "שלב 2: כתיבת הנוסחה למציאת מקדם דעיכה.", math_expression: "q = 1 - \\dfrac{p}{100}" },
            { verbal_explanation: "שלב 3: הצבת האחוז בנוסחה.", math_expression: "q = 1 - \\dfrac{15}{100}" },
            { verbal_explanation: "שלב 4: המרת השבר למספר עשרוני.", math_expression: "q = 1 - 0.15" },
            { verbal_explanation: "שלב 5: ביצוע החיסור מתוך השלם.", math_expression: "q = 0.85" },
            { verbal_explanation: "שלב 6: התוצאה המוכנה להזנה.", math_expression: "0.85" }
        ],
        final_answer: "0.85"
    },

    // שאלה מספר 3
    {
        topic: "growth_decay_35371",
        subTopic: "אחוזי שינוי (חיובי ושלילי)",
        question_text: "נתון שמקדם הגדילה של אוכלוסייה הוא 1.08. מהו אחוז הגידול (השינוי החיובי) של האוכלוסייה?&rlm;",
        options: ["8", "108", "0.8", "80"],
        correctAnswer: 0,
        hint: "חסרו אחת ממקדם הגדילה, והכפילו את התוצאה במאה כדי לקבל את האחוז.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת מקדם הגדילה הידוע במשוואה.", math_expression: "1.08 = 1 + \\dfrac{p}{100}" },
            { verbal_explanation: "שלב 2: החסרת המספר אחת משני האגפים.", math_expression: "0.08 = \\dfrac{p}{100}" },
            { verbal_explanation: "שלב 3: הכפלת המשוואה במאה כדי לבודד את האחוז.", math_expression: "p = 0.08 \\times 100" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "p = 8" },
            { verbal_explanation: "שלב 5: התשובה המייצגת שמונה אחוזים.", math_expression: "8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 4
    {
        topic: "growth_decay_35371",
        subTopic: "אחוזי שינוי (חיובי ושלילי)",
        question_text: "נתון שמקדם הדעיכה הוא 0.75. מהו אחוז הירידה?&rlm;",
        options: ["25", "75", "0.25", "2.5"],
        correctAnswer: 0,
        hint: "האחוז החסר הוא ההשלמה של המקדם לאחת. חסרו את המקדם מאחת והכפילו במאה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בנוסחת מקדם הדעיכה.", math_expression: "0.75 = 1 - \\dfrac{p}{100}" },
            { verbal_explanation: "שלב 2: העברת השבר של האחוז ימינה והמספר העשרוני שמאלה.", math_expression: "\\dfrac{p}{100} = 1 - 0.75" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החיסור.", math_expression: "\\dfrac{p}{100} = 0.25" },
            { verbal_explanation: "שלב 4: בידוד האחוז באמצעות כפל במאה.", math_expression: "p = 0.25 \\times 100" },
            { verbal_explanation: "שלב 5: קבלת הערך המספרי של האחוז.", math_expression: "p = 25" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "25" }
        ],
        final_answer: "25"
    },

    // שאלה מספר 5
    {
        topic: "growth_decay_35371",
        subTopic: "אחוזי שינוי (חיובי ושלילי)",
        question_text: "מחירו ההתחלתי של מוצר היה 200 שקלים. המחיר עלה ב-10%. מהו מחירו החדש של המוצר?&rlm;",
        options: ["220", "210", "20", "180"],
        correctAnswer: 0,
        hint: "חשבו תחילה את מקדם הגדילה עבור 10%, ולאחר מכן הכפילו את המחיר המקורי במקדם זה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הכמות ההתחלתית ואחוז השינוי.", math_expression: "M_{0} = 200 \\quad , \\quad p = 10" },
            { verbal_explanation: "שלב 2: חישוב מקדם הגדילה.", math_expression: "q = 1 + \\dfrac{10}{100} = 1.1" },
            { verbal_explanation: "שלב 3: בניית המשוואה למציאת הכמות הסופית לאחר שלב אחד.", math_expression: "M_{1} = 200 \\times 1.1" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "M_{1} = 220" },
            { verbal_explanation: "שלב 5: הצגת התשובה למחיר החדש.", math_expression: "220" }
        ],
        final_answer: "220"
    },

    // שאלה מספר 6
    {
        topic: "growth_decay_35371",
        subTopic: "אחוזי שינוי (חיובי ושלילי)",
        question_text: "מחירו של מחשב היה 500 שקלים. לקראת החג ניתנה הנחה של 20%. מהו המחיר לאחר ההנחה?&rlm;",
        options: ["400", "100", "480", "420"],
        correctAnswer: 0,
        hint: "הנחה משמעותה ירידה (דעיכה). חשבו את המקדם של ירידה ב-20%, ואז הכפילו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הנתונים הבסיסיים של הבעיה.", math_expression: "M_{0} = 500 \\quad , \\quad p = 20" },
            { verbal_explanation: "שלב 2: חישוב מקדם הדעיכה עקב ההנחה.", math_expression: "q = 1 - \\dfrac{20}{100} = 0.8" },
            { verbal_explanation: "שלב 3: כתיבת תרגיל הכפל למציאת המחיר החדש.", math_expression: "M_{1} = 500 \\times 0.8" },
            { verbal_explanation: "שלב 4: פתרון המכפלה.", math_expression: "M_{1} = 400" },
            { verbal_explanation: "שלב 5: התשובה המסכמת.", math_expression: "400" }
        ],
        final_answer: "400"
    },

    // שאלה מספר 7
    {
        topic: "growth_decay_35371",
        subTopic: "אחוזי שינוי (חיובי ושלילי)",
        question_text: "מניית בורסה ששוויה 100 שקלים, עלתה ביום ראשון ב-10%, וביום שני ירדה ב-10%. מהו שוויה בסוף יום שני?&rlm;",
        options: ["99", "100", "101", "90"],
        correctAnswer: 0,
        hint: "האחוזים מחושבים תמיד על הערך החדש! כפלו את הערך ההתחלתי במקדם הגדילה (1.1), ואת התוצאה כפלו במקדם הדעיכה (0.9).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת מקדם הגדילה של יום ראשון.", math_expression: "q_{1} = 1 + \\dfrac{10}{100} = 1.1" },
            { verbal_explanation: "שלב 2: הגדרת מקדם הדעיכה של יום שני.", math_expression: "q_{2} = 1 - \\dfrac{10}{100} = 0.9" },
            { verbal_explanation: "שלב 3: בניית משוואה לשני שלבי השינוי ברצף.", math_expression: "M_{2} = 100 \\times 1.1 \\times 0.9" },
            { verbal_explanation: "שלב 4: ביצוע הכפל הראשון.", math_expression: "M_{1} = 110 \\times 0.9" },
            { verbal_explanation: "שלב 5: ביצוע הכפל השני לקבלת המחיר הסופי.", math_expression: "M_{2} = 99" },
            { verbal_explanation: "שלב 6: המסקנה (המחיר לא חזר ל-100).", math_expression: "99" }
        ],
        final_answer: "99"
    },

    // שאלה מספר 8
    {
        topic: "growth_decay_35371",
        subTopic: "אחוזי שינוי (חיובי ושלילי)",
        question_text: "מהו מקדם הגדילה התואם לעלייה של 5%?&rlm;",
        options: ["1.05", "1.5", "0.05", "1.50"],
        correctAnswer: 0,
        hint: "שימו לב היטב: 5% הם 5 מתוך 100, ולא 50 מתוך 100. הקפידו על מיקום הנקודה העשרונית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ציון אחוז העלייה.", math_expression: "p = 5" },
            { verbal_explanation: "שלב 2: שימוש בנוסחת מקדם הגדילה.", math_expression: "q = 1 + \\dfrac{5}{100}" },
            { verbal_explanation: "שלב 3: המרת השבר לעשרוני (חמש מאיות).", math_expression: "q = 1 + 0.05" },
            { verbal_explanation: "שלב 4: סכום הפעולה.", math_expression: "q = 1.05" },
            { verbal_explanation: "שלב 5: בחירת התשובה הנכונה מהרשימה.", math_expression: "1.05" }
        ],
        final_answer: "1.05"
    },

    // שאלה מספר 9
    {
        topic: "growth_decay_35371",
        subTopic: "אחוזי שינוי (חיובי ושלילי)",
        question_text: "מהו מקדם הדעיכה התואם לירידה של 3.5%?&rlm;",
        options: ["0.965", "0.65", "1.035", "0.935"],
        correctAnswer: 0,
        hint: "חלקו 3.5 ב-100. את התוצאה חסרו מ-1 (השלם).",
        solution_steps: [
            { verbal_explanation: "שלב 1: ציון אחוז הירידה שכולל נקודה עשרונית.", math_expression: "p = 3.5" },
            { verbal_explanation: "שלב 2: בניית נוסחת מקדם הדעיכה.", math_expression: "q = 1 - \\dfrac{3.5}{100}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החילוק במאה (הזזת הנקודה שמאלה פעמיים).", math_expression: "q = 1 - 0.035" },
            { verbal_explanation: "שלב 4: חיסור הערך מתוך אחד שלם.", math_expression: "q = 0.965" },
            { verbal_explanation: "שלב 5: התוצאה המדויקת למקדם.", math_expression: "0.965" }
        ],
        final_answer: "0.965"
    },

    // שאלה מספר 10
    {
        topic: "growth_decay_35371",
        subTopic: "אחוזי שינוי (חיובי ושלילי)",
        question_text: "אם כמות מסוימת מכפילה את עצמה (גדלה פי 2), מהו אחוז הגידול שלה?&rlm;",
        options: ["100", "200", "50", "2"],
        correctAnswer: 0,
        hint: "מקדם הגדילה במקרה של הכפלה הוא 2. הציבו זאת בנוסחה וחפשו את האחוז.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנה שהכפלה פירושה מקדם גדילה של שתיים.", math_expression: "q = 2" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת המקדם המקשרת לאחוזים.", math_expression: "2 = 1 + \\dfrac{p}{100}" },
            { verbal_explanation: "שלב 3: חיסור אחד משני האגפים.", math_expression: "1 = \\dfrac{p}{100}" },
            { verbal_explanation: "שלב 4: הכפלה במאה לחילוץ האחוז.", math_expression: "p = 1 \\times 100" },
            { verbal_explanation: "שלב 5: התוצאה. הוספת מאה אחוזים פירושה הכפלת הכמות.", math_expression: "p = 100" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "100" }
        ],
        final_answer: "100"
    },

    // שאלה מספר 11
    {
        topic: "growth_decay_35371",
        subTopic: "אחוזי שינוי (חיובי ושלילי)",
        question_text: "אם כמות מסוימת קטנה למחצית מערכה (נהיית חצי), מהו אחוז הירידה?&rlm;",
        options: ["50", "0.5", "100", "25"],
        correctAnswer: 0,
        hint: "מקדם הדעיכה במקרה של ירידה לחצי הוא 0.5. הציבו וחשבו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנה שהקטנה לחצי פירושה מקדם דעיכה של חצי.", math_expression: "q = 0.5" },
            { verbal_explanation: "שלב 2: הצבת המקדם בנוסחת הדעיכה.", math_expression: "0.5 = 1 - \\dfrac{p}{100}" },
            { verbal_explanation: "שלב 3: העברת שבר האחוז שמאלה והמספר ימינה לבידוד.", math_expression: "\\dfrac{p}{100} = 1 - 0.5" },
            { verbal_explanation: "שלב 4: חישוב החיסור.", math_expression: "\\dfrac{p}{100} = 0.5" },
            { verbal_explanation: "שלב 5: הכפלה במאה לקבלת האחוז.", math_expression: "p = 0.5 \\times 100 = 50" },
            { verbal_explanation: "שלב 6: התשובה.", math_expression: "50" }
        ],
        final_answer: "50"
    },

    // שאלה מספר 12
    {
        topic: "growth_decay_35371",
        subTopic: "אחוזי שינוי (חיובי ושלילי)",
        question_text: "מחירו של מוצר היה 300. לאחר התייקרות, מחירו החדש הוא 330. מהו אחוז ההתייקרות?&rlm;",
        options: ["10", "30", "1.1", "110"],
        correctAnswer: 0,
        hint: "חלקו את המחיר החדש (330) במחיר הישן (300) כדי למצוא את המקדם, ואז הפכו לאחוזים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים במשוואת הגדילה למציאת המקדם.", math_expression: "330 = 300 \\times q" },
            { verbal_explanation: "שלב 2: חלוקה בשלוש מאות לבידוד המקדם.", math_expression: "q = 330 : 300" },
            { verbal_explanation: "שלב 3: ביצוע החלוקה.", math_expression: "q = 1.1" },
            { verbal_explanation: "שלב 4: שימוש בנוסחת המקדם למציאת האחוז.", math_expression: "1.1 = 1 + \\dfrac{p}{100}" },
            { verbal_explanation: "שלב 5: חיסור אחד והכפלה במאה.", math_expression: "0.1 = \\dfrac{p}{100} \\Rightarrow p = 10" },
            { verbal_explanation: "שלב 6: ההתייקרות היא של עשרה אחוזים.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // ==========================================
    // תת נושא 2: גדילה מעריכית ודעיכה מעריכית (12 שאלות)
    // ==========================================

    // שאלה מספר 13
    {
        topic: "growth_decay_35371",
        subTopic: "גדילה מעריכית ודעיכה מעריכית",
        question_text: "נתונה הפונקציה המעריכית \\( M_{t} = 50 \\times 1.2^{t} \\). איזה תהליך היא מתארת?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='130' x2='180' y2='130' stroke='#64748b' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='130' stroke='#64748b' stroke-width='2'/><path d='M 20 110 Q 100 110 160 30' fill='none' stroke='#10b981' stroke-width='3'/></svg></div>",
        options: ["גדילה", "דעיכה", "קבוע", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "הסתכלו על בסיס החזקה (המקדם). אם הוא גדול מאחת, מדובר בתהליך של גדילה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי מקדם הפונקציה (בסיס החזקה).", math_expression: "q = 1.2" },
            { verbal_explanation: "שלב 2: השוואת המקדם למספר אחת (השלם).", math_expression: "1.2 > 1" },
            { verbal_explanation: "שלב 3: הפקת מסקנה על סמך חוקי פונקציה מעריכית.", math_expression: "q > 1" },
            { verbal_explanation: "שלב 4: התשובה המילולית למצב זה.", math_expression: "1.2 > 1" }
        ],
        final_answer: "גדילה"
    },

    // שאלה מספר 14
    {
        topic: "growth_decay_35371",
        subTopic: "גדילה מעריכית ודעיכה מעריכית",
        question_text: "נתונה הפונקציה המעריכית \\( M_{t} = 100 \\times 0.8^{t} \\). איזה תהליך היא מתארת?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='130' x2='180' y2='130' stroke='#64748b' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='130' stroke='#64748b' stroke-width='2'/><path d='M 20 30 Q 100 110 160 120' fill='none' stroke='#ef4444' stroke-width='3'/></svg></div>",
        options: ["דעיכה", "גדילה", "קבוע", "ליניארי"],
        correctAnswer: 0,
        hint: "אם בסיס החזקה קטן מאחת (וגדול מאפס), מדובר בתהליך של דעיכה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי מקדם הפונקציה.", math_expression: "q = 0.8" },
            { verbal_explanation: "שלב 2: בדיקת התחום שאליו שייך המקדם.", math_expression: "0 < 0.8 < 1" },
            { verbal_explanation: "שלב 3: הבנה שמקדם שבר עשרוני קטן מאחת מקטין את הכמות בכל צעד.", math_expression: "q < 1" },
            { verbal_explanation: "שלב 4: בחירת התשובה הנכונה המייצגת דעיכה.", math_expression: "0.8 < 1" }
        ],
        final_answer: "דעיכה"
    },

    // שאלה מספר 15
    {
        topic: "growth_decay_35371",
        subTopic: "גדילה מעריכית ודעיכה מעריכית",
        question_text: "כמות מסוימת מתרבה (גדלה) לפי הפונקציה \\( M_{t} = 100 \\times 1.1^{t} \\). מה תהיה הכמות לאחר שנתיים (t=2)?&rlm;",
        options: ["121", "120", "110", "122.1"],
        correctAnswer: 0,
        hint: "הציבו את הזמן הנתון בתור החזקה, וחשבו את הביטוי על פי סדר פעולות חשבון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הזמן כחזקה במשוואה.", math_expression: "M_{2} = 100 \\times 1.1^{2}" },
            { verbal_explanation: "שלב 2: חישוב החזקה (אחד נקודה אחת כפול אחד נקודה אחת).", math_expression: "1.1^{2} = 1.21" },
            { verbal_explanation: "שלב 3: ביצוע הכפל בכמות ההתחלתית.", math_expression: "M_{2} = 100 \\times 1.21" },
            { verbal_explanation: "שלב 4: הזזת הנקודה העשרונית שתי פעמים ימינה עקב הכפל במאה.", math_expression: "M_{2} = 121" },
            { verbal_explanation: "שלב 5: התשובה המבוקשת.", math_expression: "121" }
        ],
        final_answer: "121"
    },

    // שאלה מספר 16
    {
        topic: "growth_decay_35371",
        subTopic: "גדילה מעריכית ודעיכה מעריכית",
        question_text: "חומר רדיואקטיבי דועך לפי הנוסחה \\( M_{t} = 2000 \\times 0.5^{t} \\). מה תהיה מסת החומר לאחר 3 שנים (t=3)?&rlm;",
        options: ["250", "500", "750", "200"],
        correctAnswer: 0,
        hint: "העלו את החצי (0.5) בחזקת 3. התוצאה היא שמינית (0.125). הכפילו זאת בכמות ההתחלתית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הזמן בנוסחה המעריכית.", math_expression: "M_{3} = 2000 \\times 0.5^{3}" },
            { verbal_explanation: "שלב 2: חישוב החזקה של חצי בשלישית.", math_expression: "0.5^{3} = 0.125" },
            { verbal_explanation: "שלב 3: הצבת התוצאה במשוואה המקורית.", math_expression: "M_{3} = 2000 \\times 0.125" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "M_{3} = 250" },
            { verbal_explanation: "שלב 5: המסה הנותרת היא מאתים וחמישים.", math_expression: "250" }
        ],
        final_answer: "250"
    },

    // שאלה מספר 17
    {
        topic: "growth_decay_35371",
        subTopic: "גדילה מעריכית ודעיכה מעריכית",
        question_text: "לאחר שנתים של גדילה (t=2), כמות אוכלוסייה עומדת על 144. ידוע שמקדם הגדילה הוא 1.2. מה הייתה הכמות ההתחלתית בנקודת האפס?&rlm;",
        options: ["100", "120", "144", "100.8"],
        correctAnswer: 0,
        hint: "הנעלם שלכם הפעם הוא הכמות ההתחלתית. חלקו את הכמות הסופית במקדם הגדילה המועלה בחזקת הזמן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה כאשר הכמות ההתחלתית היא הנעלם.", math_expression: "144 = M_{0} \\times 1.2^{2}" },
            { verbal_explanation: "שלב 2: חישוב החזקה של המקדם.", math_expression: "1.2^{2} = 1.44" },
            { verbal_explanation: "שלב 3: הצבת התוצאה אל המשוואה.", math_expression: "144 = M_{0} \\times 1.44" },
            { verbal_explanation: "שלב 4: בידוד הכמות ההתחלתית באמצעות פעולת חילוק.", math_expression: "M_{0} = 144 : 1.44" },
            { verbal_explanation: "שלב 5: התוצאה המתקבלת היא הכמות בנקודת ההתחלה.", math_expression: "M_{0} = 100" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "100" }
        ],
        final_answer: "100"
    },

    // שאלה מספר 18
    {
        topic: "growth_decay_35371",
        subTopic: "גדילה מעריכית ודעיכה מעריכית",
        question_text: "נתונות שתי פונקציות המתארות גדילת חיסכונות בבנקים שונים. בנק א': מקדם גדילה של 1.05. בנק ב': מקדם גדילה של 1.15. באיזה בנק הגדילה תהיה מהירה יותר ובעלת שיפוע תלול יותר בגרף?&rlm;",
        options: ["בנק ב'", "בנק א'", "הגדילה שווה", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "ככל שמקדם הגדילה גדול יותר, הפונקציה צומחת בקצב מהיר יותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי מקדם הגדילה של האופציה הראשונה.", math_expression: "q_{1} = 1.05" },
            { verbal_explanation: "שלב 2: זיהוי מקדם הגדילה של האופציה השנייה.", math_expression: "q_{2} = 1.15" },
            { verbal_explanation: "שלב 3: ביצוע השוואה מספרית בין המקדמים.", math_expression: "1.15 > 1.05" },
            { verbal_explanation: "שלב 4: מסקנה מתמטית התואמת לגדילה מהירה יותר.", math_expression: "q_{2} > q_{1}" },
            { verbal_explanation: "שלב 5: בחירת התשובה הנכונה מבין האפשרויות.", math_expression: "1.15 > 1.05" }
        ],
        final_answer: "בנק ב'"
    },

    // שאלה מספר 19
    {
        topic: "growth_decay_35371",
        subTopic: "גדילה מעריכית ודעיכה מעריכית",
        question_text: "כמות התחלתית היא 50. מקדם הדעיכה הוא 0.9. מה תהיה הכמות לאחר פרק זמן אחד (t=1)?&rlm;",
        options: ["45", "40", "55", "49.1"],
        correctAnswer: 0,
        hint: "כאשר הזמן שווה לאחת, החזקה אינה משנה את המקדם. פשוט הכפילו את הכמות במקדם פעם אחת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בפונקציית הדעיכה.", math_expression: "M_{1} = 50 \\times 0.9^{1}" },
            { verbal_explanation: "שלב 2: כל מספר בחזקת אחת שווה לעצמו.", math_expression: "0.9^{1} = 0.9" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל.", math_expression: "M_{1} = 50 \\times 0.9" },
            { verbal_explanation: "שלב 4: חישוב התוצאה.", math_expression: "M_{1} = 45" },
            { verbal_explanation: "שלב 5: הכמות הנותרת היא ארבעים וחמש.", math_expression: "45" }
        ],
        final_answer: "45"
    },

    // שאלה מספר 20
    {
        topic: "growth_decay_35371",
        subTopic: "גדילה מעריכית ודעיכה מעריכית",
        question_text: "כמות תרופה בדם מתחילה מ-400 מ''ג. הכמות גדלה ב-5% בכל שעה (מקדם 1.05). מה תהיה הכמות לאחר שעתיים?&rlm;",
        options: ["441", "420", "440", "405"],
        correctAnswer: 0,
        hint: "הציבו את כל הנתונים לנוסחה המלאה. זמן שווה ל-2, מקדם שווה 1.05.",
        solution_steps: [
            { verbal_explanation: "שלב 1: איסוף הנתונים מהשאלה להצבה מסודרת.", math_expression: "M_{0} = 400 \\quad , \\quad q = 1.05 \\quad , \\quad t = 2" },
            { verbal_explanation: "שלב 2: כתיבת הפונקציה לזמן הנדרש.", math_expression: "M_{2} = 400 \\times 1.05^{2}" },
            { verbal_explanation: "שלב 3: חישוב החזקה תחילה.", math_expression: "1.05^{2} = 1.1025" },
            { verbal_explanation: "שלב 4: הכפלת הכמות המקורית בתוצאת החזקה.", math_expression: "M_{2} = 400 \\times 1.1025" },
            { verbal_explanation: "שלב 5: חישוב לקבלת הכמות המדויקת.", math_expression: "M_{2} = 441" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה במערכת.", math_expression: "441" }
        ],
        final_answer: "441"
    },

    // שאלה מספר 21
    {
        topic: "growth_decay_35371",
        subTopic: "גדילה מעריכית ודעיכה מעריכית",
        question_text: "הכמות ההתחלתית של חומר היא 1000 גרם. החומר דועך בקצב של 10% בשנה (מקדם 0.9). מה תהיה המסה לאחר שנתיים?&rlm;",
        options: ["810", "800", "900", "890"],
        correctAnswer: 0,
        hint: "העלו את המקדם של הדעיכה (0.9) בריבוע לפני שתכפילו ב-1000.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים הרלוונטיים בנוסחה המעריכית.", math_expression: "M_{2} = 1000 \\times 0.9^{2}" },
            { verbal_explanation: "שלב 2: ביצוע פעולת החזקה של המקדם העשרוני.", math_expression: "0.9^{2} = 0.81" },
            { verbal_explanation: "שלב 3: הצבת התוצאה במשוואה לצד הכמות ההתחלתית.", math_expression: "M_{2} = 1000 \\times 0.81" },
            { verbal_explanation: "שלב 4: הכפלה באלף על ידי הזזת הנקודה העשרונית שלושה מקומות ימינה.", math_expression: "M_{2} = 810" },
            { verbal_explanation: "שלב 5: זוהי הכמות הנותרת של החומר.", math_expression: "810" }
        ],
        final_answer: "810"
    },

    // שאלה מספר 22
    {
        topic: "growth_decay_35371",
        subTopic: "גדילה מעריכית ודעיכה מעריכית",
        question_text: "תרבית חיידקים מכפילה את כמותה כל שעה (מקדם שווה ל-2). הכמות ההתחלתית היא 5. כמה חיידקים יהיו לאחר 4 שעות?&rlm;",
        options: ["80", "20", "40", "160"],
        correctAnswer: 0,
        hint: "הכפלה כל שעה אומרת בסיס חזקה 2. העלו 2 בחזקת 4, והכפילו ב-5.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בפונקציית הגדילה עם מקדם הכפלה.", math_expression: "M_{4} = 5 \\times 2^{4}" },
            { verbal_explanation: "שלב 2: פתרון החזקה (שתיים כפול שתיים כפול שתיים כפול שתיים).", math_expression: "2^{4} = 16" },
            { verbal_explanation: "שלב 3: הצבת התוצאה למכפלה האחרונה.", math_expression: "M_{4} = 5 \\times 16" },
            { verbal_explanation: "שלב 4: ביצוע הכפל לקבלת מספר החיידקים הכולל.", math_expression: "M_{4} = 80" },
            { verbal_explanation: "שלב 5: התשובה.", math_expression: "80" }
        ],
        final_answer: "80"
    },

    // שאלה מספר 23
    {
        topic: "growth_decay_35371",
        subTopic: "גדילה מעריכית ודעיכה מעריכית",
        question_text: "מספר אטומי רדיואקטיביים קטן לחצי בכל שעה (מקדם 0.5). היו 80 אטומים בתחילה. כמה אטומים יישארו לאחר 4 שעות?&rlm;",
        options: ["5", "10", "20", "2.5"],
        correctAnswer: 0,
        hint: "דעיכה לחצי משמעה שמכפילים ב-0.5 ארבע פעמים ברציפות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת זמן מחצית החיים במודל המעריכי.", math_expression: "M_{4} = 80 \\times 0.5^{4}" },
            { verbal_explanation: "שלב 2: חישוב חצי בחזקת ארבע.", math_expression: "0.5^{4} = 0.0625" },
            { verbal_explanation: "שלב 3: הצבה במשוואה המקורית לצורך כפל.", math_expression: "M_{4} = 80 \\times 0.0625" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "M_{4} = 5" },
            { verbal_explanation: "שלב 5: התוצאה הסופית.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 24
    {
        topic: "growth_decay_35371",
        subTopic: "גדילה מעריכית ודעיכה מעריכית",
        question_text: "נתונות שתי פונקציות מעריכיות על גרף דעיכה: פונקציה א' בעלת מקדם 0.2. פונקציה ב' בעלת מקדם 0.8. איזו מהפונקציות תרד מהר יותר ותהיה תלולה יותר כלפי מטה?&rlm;",
        options: ["פונקציה א'", "פונקציה ב'", "שתיהן אותו הדבר", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "בדעיכה, ככל שהמקדם קטן יותר (קרוב יותר לאפס), הכמות נעלמת בקצב מהיר יותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שני מקדמי הדעיכה לבחינה.", math_expression: "q_{1} = 0.2 \\quad , \\quad q_{2} = 0.8" },
            { verbal_explanation: "שלב 2: השוואה מספרית בין המקדמים.", math_expression: "0.2 < 0.8" },
            { verbal_explanation: "שלב 3: הבנה שמקדם שבר עשרוני קטן מאיץ את הדעיכה בכל צעד.", math_expression: "q_{1} < q_{2}" },
            { verbal_explanation: "שלב 4: המסקנה היא שפונקציה א' יורדת בצורה תלולה ומהירה יותר.", math_expression: "0.2 < 0.8" },
            { verbal_explanation: "שלב 5: בחירת התשובה הנכונה מהרשימה.", math_expression: "1" }
        ],
        final_answer: "פונקציה א'"
    },

    // ==========================================
    // תת נושא 3: נוסחאות גדילה ודעיכה (12 שאלות)
    // ==========================================

    // שאלה מספר 25
    {
        topic: "growth_decay_35371",
        subTopic: "נוסחאות גדילה ודעיכה",
        question_text: "אוכלוסיית עיר עומדת על 5000 תושבים. האוכלוסייה גדלה בקצב של 4% בכל שנה. מה יהיה גודל האוכלוסייה בעוד שנתיים (t=2)?&rlm;",
        options: ["5408", "5200", "5400", "5008"],
        correctAnswer: 0,
        hint: "מצאו את קבוע הגדילה מתוך האחוז (1 פלוס 4 חלקי 100), והציבו הכל בנוסחת הגדילה והדעיכה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב קבוע הגדילה מתוך האחוז שניתן.", math_expression: "q = 1 + \\dfrac{4}{100} = 1.04" },
            { verbal_explanation: "שלב 2: הצבת כל הנתונים בנוסחה המלאה.", math_expression: "M_{2} = 5000 \\times 1.04^{2}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החזקה קודם כל.", math_expression: "1.04^{2} = 1.0816" },
            { verbal_explanation: "שלב 4: הצבת התוצאה במכפלה.", math_expression: "M_{2} = 5000 \\times 1.0816" },
            { verbal_explanation: "שלב 5: חישוב התוצאה הסופית המהווה את גודל האוכלוסייה.", math_expression: "M_{2} = 5408" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "5408" }
        ],
        final_answer: "5408"
    },

    // שאלה מספר 26
    {
        topic: "growth_decay_35371",
        subTopic: "נוסחאות גדילה ודעיכה",
        question_text: "חומר מתנדף דועך בקצב של 5% כל שעה. הכמות ההתחלתית היא 2000 גרם. מה תהיה הכמות בעוד שעתיים (t=2)?&rlm;",
        options: ["1805", "1800", "1900", "1810"],
        correctAnswer: 0,
        hint: "כיוון שזו דעיכה (מתנדף), יש לחסר 5% מ-1 לקבלת המקדם 0.95. לאחר מכן הציבו בנוסחה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת מקדם הדעיכה באמצעות חיסור.", math_expression: "q = 1 - \\dfrac{5}{100} = 0.95" },
            { verbal_explanation: "שלב 2: הצבה בנוסחה למציאת המסה בזמן שתיים.", math_expression: "M_{2} = 2000 \\times 0.95^{2}" },
            { verbal_explanation: "שלב 3: פתרון החזקה של המקדם העשרוני.", math_expression: "0.95^{2} = 0.9025" },
            { verbal_explanation: "שלב 4: הכפלת הכמות ההתחלתית במקדם החדש.", math_expression: "M_{2} = 2000 \\times 0.9025" },
            { verbal_explanation: "שלב 5: התוצאה של פעולת הכפל.", math_expression: "M_{2} = 1805" },
            { verbal_explanation: "שלב 6: המסה שנותרה בגרמים.", math_expression: "1805" }
        ],
        final_answer: "1805"
    },

    // שאלה מספר 27
    {
        topic: "growth_decay_35371",
        subTopic: "נוסחאות גדילה ודעיכה",
        question_text: "לאחר 3 שנים (t=3), בתוכנית חיסכון בעלת מקדם גדילה של 1.1, הצטברו 1331 שקלים. מהו הסכום ההתחלתי שהופקד בתוכנית?&rlm;",
        options: ["1000", "1100", "1210", "900"],
        correctAnswer: 0,
        hint: "הציבו את כל הנתונים, כאשר ההשקעה ההתחלתית היא הנעלם. חלקו את הסכום המצטבר ב-1.1 בחזקת 3.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת המשוואה המלאה כשהנעלם הוא הכמות בזמן אפס.", math_expression: "1331 = M_{0} \\times 1.1^{3}" },
            { verbal_explanation: "שלב 2: פתרון החזקה באגף ימין.", math_expression: "1.1^{3} = 1.331" },
            { verbal_explanation: "שלב 3: עדכון המשוואה עם המספר שחושב.", math_expression: "1331 = M_{0} \\times 1.331" },
            { verbal_explanation: "שלב 4: חלוקת שני הצדדים בערך החזקה לבידוד הנעלם.", math_expression: "M_{0} = 1331 : 1.331" },
            { verbal_explanation: "שלב 5: קבלת הסכום שהושקע ביום הראשון.", math_expression: "M_{0} = 1000" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "1000" }
        ],
        final_answer: "1000"
    },

    // שאלה מספר 28
    {
        topic: "growth_decay_35371",
        subTopic: "נוסחאות גדילה ודעיכה",
        question_text: "כמות תאי דם התחלתית היא 100. לאחר שעתיים, כמותם גדלה ל-144. מהו מקדם הגדילה של התאים (q)?&rlm;",
        options: ["1.2", "1.44", "1.02", "1.4"],
        correctAnswer: 0,
        hint: "בנו משוואה שבה מקדם הגדילה בחזקת 2 הוא הנעלם. חלקו ב-100, והוציאו שורש ריבועי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית נוסחת הגדילה מתוך הנתונים כאשר בסיס החזקה הוא נעלם.", math_expression: "144 = 100 \\times q^{2}" },
            { verbal_explanation: "שלב 2: חלוקת המשוואה במאה כדי לבודד את המקדם בחזקה.", math_expression: "q^{2} = 144 : 100" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החילוק.", math_expression: "q^{2} = 1.44" },
            { verbal_explanation: "שלב 4: הוצאת שורש ריבועי כדי למצוא את המקדם הנקי.", math_expression: "q = \\sqrt{1.44}" },
            { verbal_explanation: "שלב 5: התוצאה למקדם הגדילה.", math_expression: "q = 1.2" },
            { verbal_explanation: "שלב 6: הרישום הרלוונטי.", math_expression: "1.2" }
        ],
        final_answer: "1.2"
    },

    // שאלה מספר 29
    {
        topic: "growth_decay_35371",
        subTopic: "נוסחאות גדילה ודעיכה",
        question_text: "כמות התחלתית של חומר נדיף היא 1000. לאחר יומיים (t=2), נותרו רק 810. מהו מקדם הדעיכה היומי?&rlm;",
        options: ["0.9", "0.81", "0.19", "0.8"],
        correctAnswer: 0,
        hint: "זהה לתרגיל הקודם, אך זהו תהליך דעיכה ולכן התוצאה צריכה להיות שבר קטן מ-1.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואה לפי הנתונים הנתונים.", math_expression: "810 = 1000 \\times q^{2}" },
            { verbal_explanation: "שלב 2: חלוקת שני האגפים באלף כדי לבודד את הנעלם הריבועי.", math_expression: "q^{2} = 810 : 1000" },
            { verbal_explanation: "שלב 3: התוצאה העשרונית של החילוק.", math_expression: "q^{2} = 0.81" },
            { verbal_explanation: "שלב 4: הפעלת שורש ריבועי למציאת המקדם.", math_expression: "q = \\sqrt{0.81}" },
            { verbal_explanation: "שלב 5: קבלת התוצאה הסופית המייצגת דעיכה.", math_expression: "q = 0.9" },
            { verbal_explanation: "שלב 6: התשובה הדרושה.", math_expression: "0.9" }
        ],
        final_answer: "0.9"
    },

    // שאלה מספר 30
    {
        topic: "growth_decay_35371",
        subTopic: "נוסחאות גדילה ודעיכה",
        question_text: "משכורת חודשית מתחילה ב-8000 שקלים. בכל שנה המשכורת עולה ב-10%. מה תהיה המשכורת לאחר שנתיים (t=2)?&rlm;",
        options: ["9680", "9600", "8800", "10000"],
        correctAnswer: 0,
        hint: "חשבו את מקדם הגדילה של עשרה אחוזים (1.1). הציבו אותו ואת שאר הנתונים בנוסחה המעריכית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המקדם התואם לגדילה של עשרה אחוזים.", math_expression: "q = 1 + \\dfrac{10}{100} = 1.1" },
            { verbal_explanation: "שלב 2: הצבת הנתונים בפונקציה למציאת המשכורת העתידית.", math_expression: "M_{2} = 8000 \\times 1.1^{2}" },
            { verbal_explanation: "שלב 3: ביצוע החזקה תחילה על המקדם העשרוני.", math_expression: "1.1^{2} = 1.21" },
            { verbal_explanation: "שלב 4: הצבת התוצאה למכפלה האחרונה.", math_expression: "M_{2} = 8000 \\times 1.21" },
            { verbal_explanation: "שלב 5: ביצוע פעולת הכפל.", math_expression: "M_{2} = 9680" },
            { verbal_explanation: "שלב 6: המשכורת החדשה בשקלים.", math_expression: "9680" }
        ],
        final_answer: "9680"
    },

    // שאלה מספר 31
    {
        topic: "growth_decay_35371",
        subTopic: "נוסחאות גדילה ודעיכה",
        question_text: "ערכו של רכב חדש הוא 100,000 שקלים. הוא מאבד מערכו (דעיכה) 20% בכל שנה. מה יהיה ערכו לאחר שנתיים?&rlm;",
        options: ["64000", "60000", "80000", "65000"],
        correctAnswer: 0,
        hint: "דעיכה של 20% שקולה למקדם של 0.8. העלו אותו בריבוע והכפילו בערך המקורי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המקדם התואם לירידת ערך של עשרים אחוזים.", math_expression: "q = 1 - \\dfrac{20}{100} = 0.8" },
            { verbal_explanation: "שלב 2: בניית המשוואה המלאה למציאת הערך החדש.", math_expression: "M_{2} = 100000 \\times 0.8^{2}" },
            { verbal_explanation: "שלב 3: פתרון החזקה של המקדם השברי.", math_expression: "0.8^{2} = 0.64" },
            { verbal_explanation: "שלב 4: הכפלת הערך ההתחלתי של הרכב בתוצאה שהתקבלה.", math_expression: "M_{2} = 100000 \\times 0.64" },
            { verbal_explanation: "שלב 5: קבלת התוצאה למחיר הסופי לאחר פחת.", math_expression: "M_{2} = 64000" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "64000" }
        ],
        final_answer: "64000"
    },

    // שאלה מספר 32
    {
        topic: "growth_decay_35371",
        subTopic: "נוסחאות גדילה ודעיכה",
        question_text: "תוכנית חיסכון מציעה ריבית שנתית (גדילה) של 3%. מופקדים 10,000 שקלים. כמה כסף יהיה בחיסכון לאחר שנתיים?&rlm;",
        options: ["10609", "10600", "10300", "10900"],
        correctAnswer: 0,
        hint: "מקדם הגדילה עבור 3% הוא 1.03. הציבו וחשבו את המכפלה כרגיל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: יצירת מקדם הגדילה בהתבסס על אחוז הריבית.", math_expression: "q = 1 + \\dfrac{3}{100} = 1.03" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת ריבית דריבית (גדילה מעריכית).", math_expression: "M_{2} = 10000 \\times 1.03^{2}" },
            { verbal_explanation: "שלב 3: חישוב החזקה של המקדם להגדלה דו שנתית.", math_expression: "1.03^{2} = 1.0609" },
            { verbal_explanation: "שלב 4: הכפלת הקרן הראשונית בגורם זה.", math_expression: "M_{2} = 10000 \\times 1.0609" },
            { verbal_explanation: "שלב 5: קבלת הסכום בחיסכון.", math_expression: "M_{2} = 10609" },
            { verbal_explanation: "שלב 6: הרישום המסכם לתשובה.", math_expression: "10609" }
        ],
        final_answer: "10609"
    },

    // שאלה מספר 33
    {
        topic: "growth_decay_35371",
        subTopic: "נוסחאות גדילה ודעיכה",
        question_text: "בנוסחת הגדילה והדעיכה הכללית, מה תפקידו ומשמעותו של המשתנה המסומן באות קיו (q)?&rlm;",
        options: ["מקדם הגדילה או הדעיכה", "הכמות ההתחלתית", "זמן התהליך", "הכמות הסופית"],
        correctAnswer: 0,
        hint: "זהו הבסיס של החזקה, אשר קובע את הקצב שבו הכמות משתנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת מבנה הנוסחה הכללית לנושא זה.", math_expression: "M_{t} = M_{0} \\times q^{t}" },
            { verbal_explanation: "שלב 2: זיהוי כל אחד מהגורמים.", math_expression: "M_{t} , M_{0} , q , t" },
            { verbal_explanation: "שלב 3: האות קיו היא הבסיס עליו מופעל הזמן בחזקה.", math_expression: "q" },
            { verbal_explanation: "שלב 4: התאמה לאפשרות בתשובות.", math_expression: "1" }
        ],
        final_answer: "מקדם הגדילה או הדעיכה"
    },

    // שאלה מספר 34
    {
        topic: "growth_decay_35371",
        subTopic: "נוסחאות גדילה ודעיכה",
        question_text: "לאחר פרק זמן בודד (t=1), הכמות עומדת על 1050. מקדם הגדילה הוא 1.05. מה הייתה הכמות ההתחלתית במדויק?&rlm;",
        options: ["1000", "1050", "950", "1102.5"],
        correctAnswer: 0,
        hint: "בזמן אחד, אין השפעה לחזקה. פשוט בנו משוואה בסיסית וחלקו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בפונקציה עבור זמן שווה לאחת.", math_expression: "1050 = M_{0} \\times 1.05^{1}" },
            { verbal_explanation: "שלב 2: העלמת החזקה כיוון שהיא אחת.", math_expression: "1050 = M_{0} \\times 1.05" },
            { verbal_explanation: "שלב 3: בידוד הכמות ההתחלתית על ידי חלוקה.", math_expression: "M_{0} = 1050 : 1.05" },
            { verbal_explanation: "שלב 4: פתרון החלוקה.", math_expression: "M_{0} = 1000" },
            { verbal_explanation: "שלב 5: התשובה שתבחר.", math_expression: "1000" }
        ],
        final_answer: "1000"
    },

    // שאלה מספר 35
    {
        topic: "growth_decay_35371",
        subTopic: "נוסחאות גדילה ודעיכה",
        question_text: "חשבו את הערך הסופי כאשר: כמות התחלתית היא 10, מקדם הגדילה הוא 2 (הכפלה), והזמן שעבר הוא 4 מחזורים (t=4).&rlm;",
        options: ["160", "80", "14", "40"],
        correctAnswer: 0,
        hint: "קודם כל העלו 2 בחזקת 4 (שזה 16), ואז הכפילו ב-10.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה מלאה בנוסחה למציאת הכמות הסופית.", math_expression: "M_{4} = 10 \\times 2^{4}" },
            { verbal_explanation: "שלב 2: פתרון החזקה (שתיים כפול שתיים כפול שתיים כפול שתיים).", math_expression: "2^{4} = 16" },
            { verbal_explanation: "שלב 3: כתיבת תרגיל הכפל האחרון.", math_expression: "M_{4} = 10 \\times 16" },
            { verbal_explanation: "שלב 4: ביצוע הכפל לקבלת התוצאה.", math_expression: "M_{4} = 160" },
            { verbal_explanation: "שלב 5: זהו הערך הסופי שחיפשנו.", math_expression: "160" }
        ],
        final_answer: "160"
    },

    // שאלה מספר 36
    {
        topic: "growth_decay_35371",
        subTopic: "נוסחאות גדילה ודעיכה",
        question_text: "חשבו את הערך הסופי כאשר: כמות התחלתית היא 800, מקדם דעיכה הוא 0.5 (חצייה), והזמן שעבר הוא 3 מחזורים (t=3).&rlm;",
        options: ["100", "400", "200", "50"],
        correctAnswer: 0,
        hint: "להעלות חצי בשלישית זה כמו לחלק לשתיים שלוש פעמים ברצף. נסו זאת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הרכבת המשוואה עם נתוני הדעיכה.", math_expression: "M_{3} = 800 \\times 0.5^{3}" },
            { verbal_explanation: "שלב 2: חישוב חצי בחזקת שלוש (חצי כפול חצי כפול חצי).", math_expression: "0.5^{3} = 0.125" },
            { verbal_explanation: "שלב 3: הצבת התוצאה.", math_expression: "M_{3} = 800 \\times 0.125" },
            { verbal_explanation: "שלב 4: ביצוע הכפל להגעה לתוצאה (שקול לשמונה מאות חלקי שמונה).", math_expression: "M_{3} = 100" },
            { verbal_explanation: "שלב 5: התשובה הישירה לתרגיל זה.", math_expression: "100" }
        ],
        final_answer: "100"
    },

    // ==========================================
    // תת נושא 4: מודלים של אוכלוסייה וקרינה (12 שאלות)
    // ==========================================

    // שאלה מספר 37
    {
        topic: "growth_decay_35371",
        subTopic: "מודלים של אוכלוסייה וקרינה",
        question_text: "מספר התושבים בעיר מסוימת הוא 50,000. האוכלוסייה גדלה בקצב אחיד של 2% לשנה. כמה תושבים יהיו בעיר בעוד שנתיים?&rlm;",
        options: ["52020", "52000", "54000", "51000"],
        correctAnswer: 0,
        hint: "המירו את 2% למקדם גדילה (1.02), העלו בריבוע והכפילו ב-50,000.",
        solution_steps: [
            { verbal_explanation: "שלב 1: תרגום אחוז הגדילה למקדם עשרוני.", math_expression: "q = 1 + \\dfrac{2}{100} = 1.02" },
            { verbal_explanation: "שלב 2: כתיבת מודל האוכלוסייה המלא לחישוב הזמן המבוקש.", math_expression: "M_{2} = 50000 \\times 1.02^{2}" },
            { verbal_explanation: "שלב 3: פתרון החזקה תחילה על פי סדר פעולות חשבון.", math_expression: "1.02^{2} = 1.0404" },
            { verbal_explanation: "שלב 4: הצבת המספר לצורך הכפלה.", math_expression: "M_{2} = 50000 \\times 1.0404" },
            { verbal_explanation: "שלב 5: חישוב כמות התושבים הסופית.", math_expression: "M_{2} = 52020" },
            { verbal_explanation: "שלב 6: בחירת החלופה התואמת לתשובה.", math_expression: "52020" }
        ],
        final_answer: "52020"
    },

    // שאלה מספר 38
    {
        topic: "growth_decay_35371",
        subTopic: "מודלים של אוכלוסייה וקרינה",
        question_text: "במעבדה יש תרבית של 1000 חיידקים. הכמות מכפילה את עצמה (גדלה פי 2) בכל שעה. כמה חיידקים יהיו לאחר 3 שעות?&rlm;",
        options: ["8000", "6000", "3000", "4000"],
        correctAnswer: 0,
        hint: "המקדם קיו הוא 2 (הכפלה). הזמן הוא 3. העלו 2 בחזקת 3 והכפילו ב-1000.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת המונח הכפלה כמקדם גדילה.", math_expression: "q = 2" },
            { verbal_explanation: "שלב 2: הצבת הנתונים בפונקציית הגדילה על בסיס שעות.", math_expression: "M_{3} = 1000 \\times 2^{3}" },
            { verbal_explanation: "שלב 3: חישוב החזקה כהכפלה חוזרת (שתיים בשלישית).", math_expression: "2^{3} = 8" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל בכמות ההתחלתית של החיידקים.", math_expression: "M_{3} = 1000 \\times 8" },
            { verbal_explanation: "שלב 5: התוצאה המדויקת של כמות החיידקים.", math_expression: "M_{3} = 8000" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "8000" }
        ],
        final_answer: "8000"
    },

    // שאלה מספר 39
    {
        topic: "growth_decay_35371",
        subTopic: "מודלים של אוכלוסייה וקרינה",
        question_text: "כמות תאים ביולוגיים מתחילה ב-200. הכמות גדלה ב-50% בכל שעה. כמה תאים יהיו לאחר שעתיים?&rlm;",
        options: ["450", "400", "300", "500"],
        correctAnswer: 0,
        hint: "גדילה של 50% פירושה שהמקדם הוא 1.5. הציבו, העלו בריבוע והכפילו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: תרגום אחוז הגדילה למקדם עבור מודל זה.", math_expression: "q = 1 + \\dfrac{50}{100} = 1.5" },
            { verbal_explanation: "שלב 2: בניית המשוואה.", math_expression: "M_{2} = 200 \\times 1.5^{2}" },
            { verbal_explanation: "שלב 3: העלאת המקדם בריבוע.", math_expression: "1.5^{2} = 2.25" },
            { verbal_explanation: "שלב 4: כתיבת תרגיל הכפל האחרון.", math_expression: "M_{2} = 200 \\times 2.25" },
            { verbal_explanation: "שלב 5: פתרון המכפלה לידי קבלת כמות התאים.", math_expression: "M_{2} = 450" },
            { verbal_explanation: "שלב 6: התשובה למערכת.", math_expression: "450" }
        ],
        final_answer: "450"
    },

    // שאלה מספר 40
    {
        topic: "growth_decay_35371",
        subTopic: "מודלים של אוכלוסייה וקרינה",
        question_text: "מסה של חומר רדיואקטיבי היא 100 גרם. זמן מחצית החיים שלו (הזמן שלוקח למסה לקטון בחצי, או מקדם 0.5) הוא שנה אחת. מה תהיה המסה בעוד 3 שנים?&rlm;",
        options: ["12.5", "25", "50", "33.3"],
        correctAnswer: 0,
        hint: "מקדם הדעיכה הוא 0.5 מכיוון שזו דעיכת חצי חיים. הזמן שעבר הוא 3 שנים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת המונח מחצית חיים כירידה לחצי בכל יחידת זמן.", math_expression: "q = 0.5" },
            { verbal_explanation: "שלב 2: הצבה במודל הדעיכה הרדיואקטיבית הסטנדרטי.", math_expression: "M_{3} = 100 \\times 0.5^{3}" },
            { verbal_explanation: "שלב 3: חישוב החזקה (חצי בשלישית שווה שמינית).", math_expression: "0.5^{3} = 0.125" },
            { verbal_explanation: "שלב 4: כפל במסה ההתחלתית.", math_expression: "M_{3} = 100 \\times 0.125" },
            { verbal_explanation: "שלב 5: התוצאה לקבלת הגרמים שנותרו.", math_expression: "M_{3} = 12.5" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "12.5" }
        ],
        final_answer: "12.5"
    },

    // שאלה מספר 41
    {
        topic: "growth_decay_35371",
        subTopic: "מודלים של אוכלוסייה וקרינה",
        question_text: "מסה של חומר מסוים היא 400 גרם. החומר מאבד 10% ממסתו מדי שנה כתוצאה מקרינה. כמה חומר יישאר בעוד שנתיים?&rlm;",
        options: ["324", "320", "360", "340"],
        correctAnswer: 0,
        hint: "אובדן של 10% משמעו מקדם דעיכה של 0.9. פעלו לפי השלבים הקבועים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: המרת אחוז האובדן למקדם הפונקציה.", math_expression: "q = 1 - \\dfrac{10}{100} = 0.9" },
            { verbal_explanation: "שלב 2: כתיבת מודל הקרינה המסוים הזה.", math_expression: "M_{2} = 400 \\times 0.9^{2}" },
            { verbal_explanation: "שלב 3: חישוב החזקה (תשע עשיריות בריבוע).", math_expression: "0.9^{2} = 0.81" },
            { verbal_explanation: "שלב 4: הכפלת המסה המקורית במקדם החדש.", math_expression: "M_{2} = 400 \\times 0.81" },
            { verbal_explanation: "שלב 5: קבלת התוצאה למסה שתישאר.", math_expression: "M_{2} = 324" },
            { verbal_explanation: "שלב 6: סיום התרגיל וקביעת הפתרון.", math_expression: "324" }
        ],
        final_answer: "324"
    },

    // שאלה מספר 42
    {
        topic: "growth_decay_35371",
        subTopic: "מודלים של אוכלוסייה וקרינה",
        question_text: "אוכלוסיית עיירה מסוימת, המונה 10,000 תושבים, קטנה בקצב של 5% לשנה בעקבות הגירה שלילית. כמה תושבים יישארו בעיירה בעוד שנתיים?&rlm;",
        options: ["9025", "9000", "9500", "9050"],
        correctAnswer: 0,
        hint: "ירידה של 5% פירושה מקדם 0.95. הציבו בנוסחה וחשבו כרגיל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מקדם ההגירה (דעיכה) השנתית.", math_expression: "q = 1 - \\dfrac{5}{100} = 0.95" },
            { verbal_explanation: "שלב 2: בניית המודל המתאים לעיירה.", math_expression: "M_{2} = 10000 \\times 0.95^{2}" },
            { verbal_explanation: "שלב 3: ביצוע החזקה למקדם (תשעים וחמש מאיות).", math_expression: "0.95^{2} = 0.9025" },
            { verbal_explanation: "שלב 4: כפל באוכלוסייה ההתחלתית.", math_expression: "M_{2} = 10000 \\times 0.9025" },
            { verbal_explanation: "שלב 5: קבלת המספר הסופי על ידי הזזת הנקודה.", math_expression: "M_{2} = 9025" },
            { verbal_explanation: "שלב 6: הרישום.", math_expression: "9025" }
        ],
        final_answer: "9025"
    },

    // שאלה מספר 43
    {
        topic: "growth_decay_35371",
        subTopic: "מודלים של אוכלוסייה וקרינה",
        question_text: "ביער ישנם 2000 עצים. מחלה פוגעת בעצים ומקטינה את מספרם ב-20% מדי שנה. כמה עצים בריאים יישארו לאחר שנתיים?&rlm;",
        options: ["1280", "1200", "1600", "1440"],
        correctAnswer: 0,
        hint: "מקדם הדעיכה הוא 0.8. העלו אותו בריבוע והכפילו ב-2000.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת מקדם המחלה המדללת את היער.", math_expression: "q = 1 - \\dfrac{20}{100} = 0.8" },
            { verbal_explanation: "שלב 2: הצבת הנתונים בפונקציית דעיכה מעריכית.", math_expression: "M_{2} = 2000 \\times 0.8^{2}" },
            { verbal_explanation: "שלב 3: העלאת המקדם בריבוע.", math_expression: "0.8^{2} = 0.64" },
            { verbal_explanation: "שלב 4: מציאת כמות העצים על ידי כפל.", math_expression: "M_{2} = 2000 \\times 0.64" },
            { verbal_explanation: "שלב 5: התוצאה של פעולת הכפל.", math_expression: "M_{2} = 1280" },
            { verbal_explanation: "שלב 6: רישום עבור המערכת.", math_expression: "1280" }
        ],
        final_answer: "1280"
    },

    // שאלה מספר 44
    {
        topic: "growth_decay_35371",
        subTopic: "מודלים של אוכלוסייה וקרינה",
        question_text: "בניסוי, כמות החיידקים גדלה בקצב אחיד של 20% בשעה. ידוע שלאחר שעתיים היו בניסוי 14,400 חיידקים. כמה חיידקים היו בתחילת הניסוי?&rlm;",
        options: ["10000", "12000", "14400", "1000"],
        correctAnswer: 0,
        hint: "הכמות ההתחלתית היא הנעלם. בנו משוואה, בה הכמות הסופית (14400) שווה לנעלם כפול 1.2 בחזקת 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית מקדם הגדילה של החיידקים.", math_expression: "q = 1 + \\dfrac{20}{100} = 1.2" },
            { verbal_explanation: "שלב 2: בניית משוואה שבה הנעלם הוא הכמות בהתחלה.", math_expression: "14400 = M_{0} \\times 1.2^{2}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החזקה באגף ימין.", math_expression: "1.2^{2} = 1.44" },
            { verbal_explanation: "שלב 4: חילוף המשוואה לחלוקה (בידוד הנעלם).", math_expression: "M_{0} = 14400 : 1.44" },
            { verbal_explanation: "שלב 5: חישוב החלוקה להשגת מספר החיידקים המקורי.", math_expression: "M_{0} = 10000" },
            { verbal_explanation: "שלב 6: זהו המספר שחיפשנו.", math_expression: "10000" }
        ],
        final_answer: "10000"
    },

    // שאלה מספר 45
    {
        topic: "growth_decay_35371",
        subTopic: "מודלים של אוכלוסייה וקרינה",
        question_text: "מסה של חומר מתחילה ב-50 גרם. בדיוק לאחר יום אחד נותרו 25 גרם מהחומר. מהו מקדם הדעיכה היומי של החומר?&rlm;",
        options: ["0.5", "0.25", "2", "1"],
        correctAnswer: 0,
        hint: "לשם מציאת המקדם (כאשר עבר יום אחד בלבד ואין צורך בשורשים), פשוט חלקו את הכמות הסופית בכמות ההתחלתית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בפונקציה עבור זמן של יום אחד בלבד.", math_expression: "25 = 50 \\times q^{1}" },
            { verbal_explanation: "שלב 2: חזקת אחת אינה משפיעה ולכן אפשר להשמיט אותה.", math_expression: "25 = 50 \\times q" },
            { verbal_explanation: "שלב 3: חלוקת המשוואה בחמישים כדי לבודד את המקדם.", math_expression: "q = 25 : 50" },
            { verbal_explanation: "שלב 4: קבלת התוצאה השברית (או עשרונית).", math_expression: "q = 0.5" },
            { verbal_explanation: "שלב 5: זהו המקדם המעיד על חציון הכמות.", math_expression: "0.5" }
        ],
        final_answer: "0.5"
    },

    // שאלה מספר 46
    {
        topic: "growth_decay_35371",
        subTopic: "מודלים של אוכלוסייה וקרינה",
        question_text: "אצות בבריכה מתרבות כך שכמותן משלשת את עצמה (גדלה פי 3) בכל שבוע. אם בתחילה היו 10 אצות, כמה אצות יהיו לאחר 3 שבועות?&rlm;",
        options: ["270", "90", "30", "120"],
        correctAnswer: 0,
        hint: "מקדם הגדילה q הוא 3. העלו 3 בחזקת 3 (הזמן) והכפילו ב-10.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת מקדם הגדילה כפעולת שילוש.", math_expression: "q = 3" },
            { verbal_explanation: "שלב 2: בניית המודל לשלושה שבועות.", math_expression: "M_{3} = 10 \\times 3^{3}" },
            { verbal_explanation: "שלב 3: ביצוע החזקה על בסיס שלוש (שלוש כפול שלוש כפול שלוש).", math_expression: "3^{3} = 27" },
            { verbal_explanation: "שלב 4: הכפלת הכמות ההתחלתית בתוצאת החזקה.", math_expression: "M_{3} = 10 \\times 27" },
            { verbal_explanation: "שלב 5: תוצאת המכפלה היא כמות האצות החדשה.", math_expression: "M_{3} = 270" },
            { verbal_explanation: "שלב 6: הרישום לבחירה בתשובות.", math_expression: "270" }
        ],
        final_answer: "270"
    },

    // שאלה מספר 47
    {
        topic: "growth_decay_35371",
        subTopic: "מודלים של אוכלוסייה וקרינה",
        question_text: "בשתי עיירות שונות היו 1000 תושבים בתחילה. עיירה א' גדלה ב-10% בכל שנה, ואילו עיירה ב' קטנה ב-10% בכל שנה. מה יהיה ההפרש במספר התושבים בין העיירות לאחר שנתיים?&rlm;",
        options: ["400", "200", "0", "100"],
        correctAnswer: 0,
        hint: "חשבו בנפרד כל עיירה. מקדם הראשונה הוא 1.1, מקדם השנייה הוא 0.9. חסרו את התוצאות לאחר מכן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המודל לעיירה א' ופתרונו לאחר שנתיים.", math_expression: "M_{A} = 1000 \\times 1.1^{2} = 1210" },
            { verbal_explanation: "שלב 2: חישוב המודל לעיירה ב' ופתרונו לאותו פרק זמן.", math_expression: "M_{B} = 1000 \\times 0.9^{2} = 810" },
            { verbal_explanation: "שלב 3: כתיבת הפעולה למציאת ההפרש בין שתי העיירות.", math_expression: "1210 - 810" },
            { verbal_explanation: "שלב 4: חישוב פעולת החיסור.", math_expression: "400" },
            { verbal_explanation: "שלב 5: זהו ההפרש המבוקש במספר האנשים.", math_expression: "400" }
        ],
        final_answer: "400"
    },

    // שאלה מספר 48
    {
        topic: "growth_decay_35371",
        subTopic: "מודלים של אוכלוסייה וקרינה",
        question_text: "אוכלוסייתה של מדינה גדולה עומדת כעת על 1,000,000 תושבים והיא גדלה בקצב יציב של 1% בכל שנה. מה יהיה גודל האוכלוסייה בעוד שנתיים בדיוק?&rlm;",
        options: ["1020100", "1020000", "1002000", "1200100"],
        correctAnswer: 0,
        hint: "מקדם גדילה של 1% משמעותו 1.01. עבדו בזהירות עם האפסים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: יצירת מקדם הגדילה עבור אחוז בודד.", math_expression: "q = 1 + \\dfrac{1}{100} = 1.01" },
            { verbal_explanation: "שלב 2: הצבת הנתונים בפונקציה עבור התחזית העתידית.", math_expression: "M_{2} = 1000000 \\times 1.01^{2}" },
            { verbal_explanation: "שלב 3: פתרון החזקה (אחד נקודה אפס אחת כפול עצמו).", math_expression: "1.01^{2} = 1.0201" },
            { verbal_explanation: "שלב 4: הצבת המקדם למכפלה האחרונה.", math_expression: "M_{2} = 1000000 \\times 1.0201" },
            { verbal_explanation: "שלב 5: הכפלת המיליון גוררת תזוזת נקודה שישה מקומות ימינה.", math_expression: "M_{2} = 1020100" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "1020100" }
        ],
        final_answer: "1020100"
    }
];
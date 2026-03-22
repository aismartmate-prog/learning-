const questionsDB = [
    // ==========================================
    // תת נושא 1: פונקציות סינוס, קוסינוס, וטנגנס (12 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "trigonometry_35371",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question_text: "במשולש ישר זווית, אורך הניצב מול הזווית איקס הוא 6, ואורך היתר הוא 10. מהו הערך של סינוס איקס?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 160,40' fill='none' stroke='#3b82f6' stroke-width='3'/><polyline points='140,160 140,140 160,140' fill='none' stroke='#3b82f6' stroke-width='2'/><path d='M 70 160 A 30 30 0 0 0 60 140' fill='none' stroke='#ef4444' stroke-width='2'/><text x='75' y='145' font-size='14' fill='#ef4444'>x</text><text x='170' y='105' font-size='14' fill='#334155'>6</text><text x='90' y='90' font-size='14' fill='#334155'>10</text></svg></div>",
        options: ["0.6", "0.8", "0.75", "1.66"],
        correctAnswer: 0,
        hint: "פונקציית הסינוס מוגדרת כיחס בין הניצב שמול הזווית לבין היתר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הניצב שמול הזווית והיתר מתוך הנתונים.", math_expression: "6 , 10" },
            { verbal_explanation: "שלב 2: כתיבת משוואת הסינוס לפי ההגדרה הרשמית.", math_expression: "\\sin(x) = \\dfrac{6}{10}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החילוק להמרת השבר למספר עשרוני.", math_expression: "6 : 10" },
            { verbal_explanation: "שלב 4: תוצאת החלוקה.", math_expression: "0.6" },
            { verbal_explanation: "שלב 5: התשובה הסופית לסינוס הזווית.", math_expression: "0.6" }
        ],
        final_answer: "0.6"
    },

    // שאלה מספר 2
    {
        topic: "trigonometry_35371",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question_text: "במשולש ישר זווית, אורך הניצב שליד הזווית וואי הוא 8, ואורך היתר הוא 10. מהו הערך של קוסינוס וואי?&rlm;",
        options: ["0.8", "0.6", "1.25", "0.75"],
        correctAnswer: 0,
        hint: "פונקציית הקוסינוס מתארת את היחס בין הניצב הסמוך לזווית (ליד) לבין היתר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הניצב ליד הזווית והיתר.", math_expression: "8 , 10" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת הקוסינוס המקשרת ביניהם.", math_expression: "\\cos(y) = \\dfrac{8}{10}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החלוקה של המונה במכנה.", math_expression: "8 : 10" },
            { verbal_explanation: "שלב 4: קבלת התוצאה כערך עשרוני.", math_expression: "0.8" },
            { verbal_explanation: "שלב 5: הרישום לבחירה בתשובות.", math_expression: "0.8" }
        ],
        final_answer: "0.8"
    },

    // שאלה מספר 3
    {
        topic: "trigonometry_35371",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question_text: "במשולש ישר זווית, הניצב שמול הזווית איקס שווה ל-5, והניצב שליד הזווית שווה ל-12. מהו טנגנס איקס?&rlm;",
        options: ["5 : 12", "12 : 5", "5 : 13", "12 : 13"],
        correctAnswer: 0,
        hint: "הטנגנס הוא היחס בין הניצב ממול לניצב שליד. אין צורך לחשב את היתר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הניצב מול והניצב ליד מתוך הנתונים.", math_expression: "5 , 12" },
            { verbal_explanation: "שלב 2: כתיבת תבנית הטנגנס (מול חלקי ליד).", math_expression: "\\tan(x) = \\dfrac{5}{12}" },
            { verbal_explanation: "שלב 3: כתיבת השבר בצורת חילוק לסימון התשובה.", math_expression: "5 : 12" },
            { verbal_explanation: "שלב 4: הצגת הפתרון המתאים מהאפשרויות.", math_expression: "5 : 12" },
            { verbal_explanation: "שלב 5: השלמת התרגיל.", math_expression: "5 : 12" }
        ],
        final_answer: "5 : 12"
    },

    // שאלה מספר 4
    {
        topic: "trigonometry_35371",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question_text: "נתון משולש ישר זווית שבו סינוס הזווית איקס שווה ל-0.5. היתר שווה ל-20. מהו אורך הניצב מול הזווית איקס?&rlm;",
        options: ["10", "40", "5", "15"],
        correctAnswer: 0,
        hint: "הציבו את הערך של הסינוס בנוסחה. הכפילו את היתר ביחס זה כדי למצוא את הניצב ממול.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת נוסחת הסינוס הכוללת את הנעלם וייצוג היתר.", math_expression: "\\sin(x) = \\dfrac{y}{20}" },
            { verbal_explanation: "שלב 2: הצבת הערך העשרוני של הסינוס כפי שנתון בשאלה.", math_expression: "0.5 = \\dfrac{y}{20}" },
            { verbal_explanation: "שלב 3: חילוץ הנעלם באמצעות הכפלת שני האגפים בעשרים.", math_expression: "y = 20 \\times 0.5" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "10" },
            { verbal_explanation: "שלב 5: אורך הניצב הרלוונטי נמצא.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 5
    {
        topic: "trigonometry_35371",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question_text: "נתון שקוסינוס הזווית איקס הוא 0.8. אורך הניצב שליד הזווית הוא 16. מהו אורך היתר?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 160,40' fill='none' stroke='#10b981' stroke-width='3'/><polyline points='140,160 140,140 160,140' fill='none' stroke='#10b981' stroke-width='2'/><path d='M 70 160 A 30 30 0 0 0 60 140' fill='none' stroke='#ef4444' stroke-width='2'/><text x='75' y='145' font-size='14' fill='#ef4444'>x</text><text x='100' y='180' font-size='14' fill='#334155'>16</text><text x='90' y='90' font-size='14' fill='#334155'>y</text></svg></div>",
        options: ["20", "12.8", "10", "32"],
        correctAnswer: 0,
        hint: "היתר נמצא במכנה בנוסחת הקוסינוס. הציבו, החליפו מיקומים בין היתר לערך העשרוני, וחלקו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה לפי הגדרת הקוסינוס והצבת הנתונים.", math_expression: "0.8 = \\dfrac{16}{y}" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה בנעלם כדי להעבירו מהמכנה.", math_expression: "0.8 \\times y = 16" },
            { verbal_explanation: "שלב 3: בידוד היתר על ידי חלוקת שני האגפים בשבר העשרוני.", math_expression: "y = 16 : 0.8" },
            { verbal_explanation: "שלב 4: ביצוע פעולת החילוק (שקול לשש עשרה כפול עשר חלקי שמונה).", math_expression: "20" },
            { verbal_explanation: "שלב 5: התשובה המבוקשת לאורך היתר.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 6
    {
        topic: "trigonometry_35371",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question_text: "במשולש ישר זווית נתון כי טנגנס הזווית איקס שווה ל-1. אורך הניצב שליד הזווית הוא 7. מהו אורך הניצב שמול הזווית?&rlm;",
        options: ["7", "1", "14", "3.5"],
        correctAnswer: 0,
        hint: "טנגנס השווה לאחת מרמז על כך שהניצבים שווים זה לזה. המשולש הוא גם ישר זווית וגם שווה שוקיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה ישירה למשוואת הטנגנס עם הנעלם המייצג את הניצב מול.", math_expression: "1 = \\dfrac{y}{7}" },
            { verbal_explanation: "שלב 2: בידוד הנעלם על ידי הכפלת שני הצדדים בשבע.", math_expression: "y = 1 \\times 7" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל הפשוטה.", math_expression: "7" },
            { verbal_explanation: "שלב 4: אימות העובדה שניצבים שווים יוצרים טנגנס אחת.", math_expression: "7 : 7 = 1" },
            { verbal_explanation: "שלב 5: קבלת התוצאה המסכמת.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 7
    {
        topic: "trigonometry_35371",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question_text: "במשולש ישר זווית, אורך הניצב שמול הזווית איקס הוא 9, ואורך היתר הוא 15. מהו הערך של קוסינוס איקס?&rlm;",
        options: ["0.8", "0.6", "0.75", "1.33"],
        correctAnswer: 0,
        hint: "קוסינוס דורש את הניצב שלצד הזווית. מצאו אותו תחילה בעזרת משפט פיתגורס, ואז חשבו את הקוסינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש במשפט פיתגורס למציאת הניצב החסר.", math_expression: "y^{2} + 9^{2} = 15^{2}" },
            { verbal_explanation: "שלב 2: העלאה בריבוע של הערכים המוכרים.", math_expression: "y^{2} + 81 = 225" },
            { verbal_explanation: "שלב 3: בידוד הנעלם בחיסור.", math_expression: "y^{2} = 225 - 81 = 144" },
            { verbal_explanation: "שלב 4: הוצאת שורש למציאת הניצב ליד הזווית.", math_expression: "y = 12" },
            { verbal_explanation: "שלב 5: הרכבת משוואת הקוסינוס עם הניצב שמצאנו והיתר.", math_expression: "\\cos(x) = \\dfrac{12}{15}" },
            { verbal_explanation: "שלב 6: חלוקת המונה במכנה להשגת מספר עשרוני.", math_expression: "0.8" },
            { verbal_explanation: "שלב 7: הפתרון הוא שמונה עשיריות.", math_expression: "0.8" }
        ],
        final_answer: "0.8"
    },

    // שאלה מספר 8
    {
        topic: "trigonometry_35371",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question_text: "אורך הניצב שליד הזווית איקס הוא 15, ואורך היתר הוא 17. למה שווה סינוס איקס?&rlm;",
        options: ["8 : 17", "15 : 17", "8 : 15", "17 : 8"],
        correctAnswer: 0,
        hint: "סינוס דורש את הניצב מול הזווית. מצאו אותו עם פיתגורס, ואז בנו את השבר המתאים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בפיתגורס למציאת הניצב מול הזווית.", math_expression: "y^{2} + 15^{2} = 17^{2}" },
            { verbal_explanation: "שלב 2: חישוב הריבועים.", math_expression: "y^{2} + 225 = 289" },
            { verbal_explanation: "שלב 3: חיסור והוצאת שורש.", math_expression: "y^{2} = 64 \\Rightarrow y = 8" },
            { verbal_explanation: "שלב 4: הניצב מול שווה לשמונה. הרכבת נוסחת הסינוס.", math_expression: "\\sin(x) = \\dfrac{8}{17}" },
            { verbal_explanation: "שלב 5: התשובה נשארת בצורת חלוקה/שבר.", math_expression: "8 : 17" }
        ],
        final_answer: "8 : 17"
    },

    // שאלה מספר 9
    {
        topic: "trigonometry_35371",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question_text: "במשולש ישר זווית, אורך הניצב מול זווית איקס הוא 9, ואורך הניצב ליד הוא 12. מהו סינוס הזווית איקס?&rlm;",
        options: ["0.6", "0.8", "0.75", "1.33"],
        correctAnswer: 0,
        hint: "עליכם למצוא קודם את היתר של המשולש (הצלע הארוכה) ואז לחשב את יחס הסינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת היתר בעזרת משפט פיתגורס.", math_expression: "y^{2} = 9^{2} + 12^{2}" },
            { verbal_explanation: "שלב 2: העלאה בריבוע.", math_expression: "y^{2} = 81 + 144" },
            { verbal_explanation: "שלב 3: חיבור והוצאת שורש לקבלת היתר.", math_expression: "y^{2} = 225 \\Rightarrow y = 15" },
            { verbal_explanation: "שלב 4: כתיבת פונקציית סינוס לפי ההגדרה.", math_expression: "\\sin(x) = \\dfrac{9}{15}" },
            { verbal_explanation: "שלב 5: המרה לערך עשרוני.", math_expression: "9 : 15 = 0.6" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "0.6" }
        ],
        final_answer: "0.6"
    },

    // שאלה מספר 10
    {
        topic: "trigonometry_35371",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question_text: "ידוע שסינוס הזווית איקס שווה לחצי (0.5). למה שווה הזווית איקס במעלות?&rlm;",
        options: ["30", "60", "45", "90"],
        correctAnswer: 0,
        hint: "משולש ישר זווית שבו הניצב שווה למחצית היתר, הזווית שמול הניצב הזה קבועה וידועה. ניתן גם להשתמש בפונקציה ההפוכה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום הנתון.", math_expression: "\\sin(x) = 0.5" },
            { verbal_explanation: "שלב 2: שימוש בפונקציה טריגונומטרית הפוכה לחילוץ הזווית (שיפט סינוס).", math_expression: "x = \\sin^{-1}(0.5)" },
            { verbal_explanation: "שלב 3: הוצאת הערך מהזיכרון או מהמחשבון.", math_expression: "30^{\\circ}" },
            { verbal_explanation: "שלב 4: זוהי זווית מיוחדת וידועה.", math_expression: "30" },
            { verbal_explanation: "שלב 5: התוצאה להקלדה.", math_expression: "30" }
        ],
        final_answer: "30"
    },

    // שאלה מספר 11
    {
        topic: "trigonometry_35371",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question_text: "טנגנס הזווית איקס שווה ל-2.4. אורך הניצב שליד הזווית הוא 5. מהו אורך היתר במשולש?&rlm;",
        options: ["13", "12", "15", "10"],
        correctAnswer: 0,
        hint: "ראשית, היעזרו בטנגנס למציאת הניצב מול הזווית. רק לאחר שיש לכם את שני הניצבים, מצאו את היתר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואה בעזרת הטנגנס למציאת הניצב מול.", math_expression: "2.4 = \\dfrac{y}{5}" },
            { verbal_explanation: "שלב 2: חילוץ הנעלם בכפל.", math_expression: "y = 2.4 \\times 5" },
            { verbal_explanation: "שלב 3: ביצוע הכפל. עכשיו שני הניצבים ידועים.", math_expression: "y = 12" },
            { verbal_explanation: "שלב 4: הפעלת פיתגורס למציאת היתר.", math_expression: "c^{2} = 5^{2} + 12^{2}" },
            { verbal_explanation: "שלב 5: חישוב השורש המוכר של 169.", math_expression: "c = \\sqrt{25 + 144} = 13" },
            { verbal_explanation: "שלב 6: היתר הוא שלוש עשרה.", math_expression: "13" }
        ],
        final_answer: "13"
    },

    // שאלה מספר 12
    {
        topic: "trigonometry_35371",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question_text: "במשולש ישר זווית, שני הניצבים שווים באורכם זה לזה. למה שווה טנגנס הזווית החדה (איקס)?&rlm;",
        options: ["1", "0.5", "0.707", "2"],
        correctAnswer: 0,
        hint: "הטנגנס הוא מול חלקי ליד. אם שני המספרים שווים, מה קורה בחלוקה?",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת התנאי הגיאומטרי בניסוח אלגברי.", math_expression: "a = b" },
            { verbal_explanation: "שלב 2: כתיבת תבנית הטנגנס הרגילה.", math_expression: "\\tan(x) = \\dfrac{a}{b}" },
            { verbal_explanation: "שלב 3: הצבת השוויון בתוך התבנית.", math_expression: "\\tan(x) = \\dfrac{a}{a}" },
            { verbal_explanation: "שלב 4: חלוקת כל מספר (שונה מאפס) בעצמו תיתן תמיד את אותה התוצאה.", math_expression: "1" },
            { verbal_explanation: "שלב 5: המסקנה הכללית לגבי משולש זה.", math_expression: "1" }
        ],
        final_answer: "1"
    },

    // ==========================================
    // תת נושא 2: שימוש בטבלאות טריגונומטריות (12 שאלות)
    // ==========================================

    // שאלה מספר 13
    {
        topic: "trigonometry_35371",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question_text: "אורך היתר במשולש הוא 14. הזווית החדה איקס היא 30 מעלות. מהו אורך הניצב מול הזווית?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 160,160 160,40' fill='none' stroke='#f59e0b' stroke-width='3'/><polyline points='140,160 140,140 160,140' fill='none' stroke='#f59e0b' stroke-width='2'/><path d='M 70 160 A 30 30 0 0 0 60 140' fill='none' stroke='#ef4444' stroke-width='2'/><text x='75' y='145' font-size='12' fill='#ef4444'>30°</text><text x='170' y='105' font-size='14' fill='#334155'>y</text><text x='90' y='90' font-size='14' fill='#334155'>14</text></svg></div>",
        options: ["7", "12.12", "14", "28"],
        correctAnswer: 0,
        hint: "היעזרו בסינוס (מול ויתר). סינוס של 30 מעלות שווה תמיד ל-0.5.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בפונקציה המתאימה.", math_expression: "\\sin(30^{\\circ}) = \\dfrac{y}{14}" },
            { verbal_explanation: "שלב 2: חילוץ הנעלם.", math_expression: "y = 14 \\times \\sin(30^{\\circ})" },
            { verbal_explanation: "שלב 3: מציאת ערך הסינוס מתוך טבלה או מחשבון.", math_expression: "\\sin(30^{\\circ}) = 0.5" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "y = 14 \\times 0.5" },
            { verbal_explanation: "שלב 5: התוצאה.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 14
    {
        topic: "trigonometry_35371",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question_text: "זווית חדה איקס במשולש היא 60 מעלות. אורך הניצב שליד הזווית הוא 8. מה אורך היתר?&rlm;",
        options: ["16", "8", "4", "13.85"],
        correctAnswer: 0,
        hint: "קוסינוס 60 שווה ל-0.5. הציבו את הניצב ליד ואת היתר (כנעלם במכנה) ופתרו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה.", math_expression: "\\cos(60^{\\circ}) = \\dfrac{8}{y}" },
            { verbal_explanation: "שלב 2: חילוף מיקומים כדי לבודד את היתר.", math_expression: "y = 8 : \\cos(60^{\\circ})" },
            { verbal_explanation: "שלב 3: המרת פונקציית הקוסינוס למספר.", math_expression: "\\cos(60^{\\circ}) = 0.5" },
            { verbal_explanation: "שלב 4: ביצוע חלוקה.", math_expression: "y = 8 : 0.5" },
            { verbal_explanation: "שלב 5: התוצאה למבחן.", math_expression: "16" }
        ],
        final_answer: "16"
    },

    // שאלה מספר 15
    {
        topic: "trigonometry_35371",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question_text: "זווית במשולש היא 45 מעלות. הניצב שלידה הוא 10. מה אורך הניצב שמולה?&rlm;",
        options: ["10", "14.14", "5", "20"],
        correctAnswer: 0,
        hint: "טנגנס של 45 מעלות הוא בדיוק 1. זה אומר שהניצבים שווים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בפונקציה המקשרת שני ניצבים.", math_expression: "\\tan(45^{\\circ}) = \\dfrac{y}{10}" },
            { verbal_explanation: "שלב 2: זיהוי ערך הטנגנס.", math_expression: "\\tan(45^{\\circ}) = 1" },
            { verbal_explanation: "שלב 3: הצבה במשוואה.", math_expression: "1 = \\dfrac{y}{10}" },
            { verbal_explanation: "שלב 4: בידוד ופתרון.", math_expression: "y = 10 \\times 1" },
            { verbal_explanation: "שלב 5: קבלת התשובה.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 16
    {
        topic: "trigonometry_35371",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question_text: "אורך הניצב מול הזווית איקס הוא 5, ואורך היתר הוא 10. מצאו את הזווית איקס במעלות.&rlm;",
        options: ["30", "60", "45", "90"],
        correctAnswer: 0,
        hint: "חשבו את יחס הסינוס (5 חלקי 10, שהם 0.5). איזו זווית נותנת סינוס זה?",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת סינוס עם הערכים הנתונים.", math_expression: "\\sin(x) = \\dfrac{5}{10}" },
            { verbal_explanation: "שלב 2: צמצום.", math_expression: "\\sin(x) = 0.5" },
            { verbal_explanation: "שלב 3: שימוש בפעולה ההפוכה לחילוץ הזווית.", math_expression: "x = \\sin^{-1}(0.5)" },
            { verbal_explanation: "שלב 4: שליפת התוצאה.", math_expression: "30^{\\circ}" },
            { verbal_explanation: "שלב 5: הרישום לבחירה.", math_expression: "30" }
        ],
        final_answer: "30"
    },

    // שאלה מספר 17
    {
        topic: "trigonometry_35371",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question_text: "אורך הניצב ליד הזווית איקס הוא 7, ואורך היתר הוא 14. מצאו את הזווית איקס במעלות.&rlm;",
        options: ["60", "30", "45", "70"],
        correctAnswer: 0,
        hint: "יחס של חצי בקוסינוס מרמז על זווית ספציפית מאוד. השתמשו בקוסינוס הפוך.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת הפרופורציה.", math_expression: "\\cos(x) = \\dfrac{7}{14}" },
            { verbal_explanation: "שלב 2: מעבר לעשרוני.", math_expression: "\\cos(x) = 0.5" },
            { verbal_explanation: "שלב 3: הפעלת פונקציה הפוכה.", math_expression: "x = \\cos^{-1}(0.5)" },
            { verbal_explanation: "שלב 4: מציאת המעלות.", math_expression: "60^{\\circ}" },
            { verbal_explanation: "שלב 5: סוף החישוב.", math_expression: "60" }
        ],
        final_answer: "60"
    },

    // שאלה מספר 18
    {
        topic: "trigonometry_35371",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question_text: "אורך הניצב מול הזווית איקס הוא 8, וגם אורך הניצב שליד הזווית איקס הוא 8. מצאו את הזווית איקס.&rlm;",
        options: ["45", "90", "60", "30"],
        correctAnswer: 0,
        hint: "היחס בין הניצבים הוא 1. איזו זווית מקבלת טנגנס של 1?",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת הטנגנס.", math_expression: "\\tan(x) = \\dfrac{8}{8}" },
            { verbal_explanation: "שלב 2: חלוקה.", math_expression: "\\tan(x) = 1" },
            { verbal_explanation: "שלב 3: פעולת טנגנס הפוך.", math_expression: "x = \\tan^{-1}(1)" },
            { verbal_explanation: "שלב 4: הזווית המתקבלת.", math_expression: "45^{\\circ}" },
            { verbal_explanation: "שלב 5: התשובה.", math_expression: "45" }
        ],
        final_answer: "45"
    },

    // שאלה מספר 19
    {
        topic: "trigonometry_35371",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question_text: "ידוע מתוך טבלאות כי סינוס הזווית איקס שווה בקירוב ל-0.707. מהו ערכה של איקס במעלות?&rlm;",
        options: ["45", "30", "60", "90"],
        correctAnswer: 0,
        hint: "השתמשו בפונקציה ההפוכה לסינוס על הערך הנתון. הערך הוא למעשה שורש שתיים חלקי שתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום הנתון.", math_expression: "\\sin(x) = 0.707" },
            { verbal_explanation: "שלב 2: ביצוע פעולה הפוכה במחשבון.", math_expression: "x = \\sin^{-1}(0.707)" },
            { verbal_explanation: "שלב 3: קבלת תוצאה קרובה מאוד למספר שלם.", math_expression: "x \\approx 44.99" },
            { verbal_explanation: "שלב 4: עיגול לפי המקובל בזוויות קלאסיות.", math_expression: "45^{\\circ}" },
            { verbal_explanation: "שלב 5: התשובה לסימון.", math_expression: "45" }
        ],
        final_answer: "45"
    },

    // שאלה מספר 20
    {
        topic: "trigonometry_35371",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question_text: "ידוע ש- \\( \\tan(x) = 1.732 \\). מהי הזווית איקס בקרוב?&rlm;",
        options: ["60", "30", "45", "80"],
        correctAnswer: 0,
        hint: "המספר 1.732 הוא קירוב לשורש שלוש. הקישו טנגנס הפוך במחשבון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום הנתון המספרי.", math_expression: "\\tan(x) = 1.732" },
            { verbal_explanation: "שלב 2: שימוש בשיפט טנגנס.", math_expression: "x = \\tan^{-1}(1.732)" },
            { verbal_explanation: "שלב 3: התוצאה העשרונית שמתקבלת.", math_expression: "x \\approx 59.99" },
            { verbal_explanation: "שלב 4: עיגול מתמטי פשוט.", math_expression: "60^{\\circ}" },
            { verbal_explanation: "שלב 5: הבחירה הנכונה.", math_expression: "60" }
        ],
        final_answer: "60"
    },

    // שאלה מספר 21
    {
        topic: "trigonometry_35371",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question_text: "במשולש, היתר הוא 20. זווית חדה היא 30 מעלות. חשבו את אורך הניצב שליד הזווית (עגלו ל-2 ספרות).&rlm;",
        options: ["17.32", "10", "15", "14.14"],
        correctAnswer: 0,
        hint: "ניצב ליד ויתר דורשים קוסינוס. קוסינוס 30 הוא כ-0.866.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחירת הפונקציה המתאימה לנתונים.", math_expression: "\\cos(30^{\\circ}) = \\dfrac{y}{20}" },
            { verbal_explanation: "שלב 2: חילוץ הנעלם.", math_expression: "y = 20 \\times \\cos(30^{\\circ})" },
            { verbal_explanation: "שלב 3: שליפת הערך מהמחשבון.", math_expression: "y = 20 \\times 0.866" },
            { verbal_explanation: "שלב 4: ביצוע המכפלה.", math_expression: "y = 17.32" },
            { verbal_explanation: "שלב 5: רישום פתרון מעוגל.", math_expression: "17.32" }
        ],
        final_answer: "17.32"
    },

    // שאלה מספר 22
    {
        topic: "trigonometry_35371",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question_text: "זווית היא 60 מעלות. אורך הניצב שמול הזווית הוא 12. חשבו את הניצב שליד הזווית (עגלו ל-2 ספרות).&rlm;",
        options: ["6.93", "20.78", "13.86", "24"],
        correctAnswer: 0,
        hint: "היחס בין שני הניצבים הוא טנגנס. הנעלם שלנו הפעם נמצא במכנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בטנגנס (מול חלקי ליד).", math_expression: "\\tan(60^{\\circ}) = \\dfrac{12}{y}" },
            { verbal_explanation: "שלב 2: חילוף אלגברי לבידוד הנעלם שבמכנה.", math_expression: "y = 12 : \\tan(60^{\\circ})" },
            { verbal_explanation: "שלב 3: מציאת ערך הטנגנס.", math_expression: "\\tan(60^{\\circ}) \\approx 1.732" },
            { verbal_explanation: "שלב 4: ביצוע החלוקה.", math_expression: "y = 12 : 1.732" },
            { verbal_explanation: "שלב 5: התוצאה העשרונית.", math_expression: "y \\approx 6.93" },
            { verbal_explanation: "שלב 6: התשובה המעוגלת כנדרש.", math_expression: "6.93" }
        ],
        final_answer: "6.93"
    },

    // שאלה מספר 23
    {
        topic: "trigonometry_35371",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question_text: "הזווית היא 45 מעלות. הניצב שלידה הוא 10. חשבו את אורך היתר.&rlm;",
        options: ["14.14", "10", "20", "7.07"],
        correctAnswer: 0,
        hint: "השתמשו בקוסינוס 45 מעלות וחילצו את היתר מתוך המכנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית הפרופורציה.", math_expression: "\\cos(45^{\\circ}) = \\dfrac{10}{y}" },
            { verbal_explanation: "שלב 2: בידוד היתר.", math_expression: "y = 10 : \\cos(45^{\\circ})" },
            { verbal_explanation: "שלב 3: מציאת הערך.", math_expression: "\\cos(45^{\\circ}) \\approx 0.707" },
            { verbal_explanation: "שלב 4: ביצוע חלוקה.", math_expression: "y = 10 : 0.707" },
            { verbal_explanation: "שלב 5: התוצאה המחושבת.", math_expression: "y \\approx 14.14" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "14.14" }
        ],
        final_answer: "14.14"
    },

    // שאלה מספר 24
    {
        topic: "trigonometry_35371",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question_text: "במשולש ישר זווית, הזוויות החדות הן 30 ו-60 מעלות. היתר שווה ל-18. מה אורכה של הצלע הקצרה ביותר במשולש?&rlm;",
        options: ["9", "15.58", "18", "4.5"],
        correctAnswer: 0,
        hint: "הצלע הקצרה ביותר תמיד מונחת מול הזווית הקטנה ביותר (30). השתמשו בסינוס של 30.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שהצלע הקטנה תהיה מול זווית שלושים.", math_expression: "\\sin(30^{\\circ}) = \\dfrac{y}{18}" },
            { verbal_explanation: "שלב 2: חילוץ הנעלם.", math_expression: "y = 18 \\times \\sin(30^{\\circ})" },
            { verbal_explanation: "שלב 3: הצבת ערך הסינוס שהוא חצי בדיוק.", math_expression: "y = 18 \\times 0.5" },
            { verbal_explanation: "שלב 4: חישוב.", math_expression: "y = 9" },
            { verbal_explanation: "שלב 5: התוצאה לצלע הקצרה.", math_expression: "9" }
        ],
        final_answer: "9"
    },

    // ==========================================
    // תת נושא 3: פתרון משולש ישר זווית (חישוב זוויות וצלעות) (12 שאלות - רמה גבוהה)
    // ==========================================

    // שאלה מספר 25
    {
        topic: "trigonometry_35371",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question_text: "אלכסון של מלבן אורכו 20. הזווית בינו לבין הצלע הארוכה היא 30 מעלות. חשבו את היקף המלבן.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='30' y='60' width='140' height='80' fill='none' stroke='#10b981' stroke-width='3'/><line x1='30' y1='140' x2='170' y2='60' stroke='#f59e0b' stroke-dasharray='5,5' stroke-width='2'/><text x='95' y='110' font-size='14' fill='#334155'>20</text><text x='55' y='135' font-size='12' fill='#ef4444'>30°</text></svg></div>",
        options: ["54.64", "27.32", "60", "40"],
        correctAnswer: 0,
        hint: "זהו תרגיל רב-שלבי. מצאו את שתי הצלעות (אחת עם סינוס, אחת עם קוסינוס) ואז חשבו היקף.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בסינוס למציאת הצלע הקצרה של המלבן.", math_expression: "\\sin(30^{\\circ}) = \\dfrac{y}{20}" },
            { verbal_explanation: "שלב 2: חילוץ וחישוב.", math_expression: "y = 20 \\times 0.5 = 10" },
            { verbal_explanation: "שלב 3: שימוש בקוסינוס למציאת הצלע הארוכה.", math_expression: "\\cos(30^{\\circ}) = \\dfrac{x}{20}" },
            { verbal_explanation: "שלב 4: חילוץ וחישוב.", math_expression: "x = 20 \\times 0.866 = 17.32" },
            { verbal_explanation: "שלב 5: חישוב היקף המלבן לפי שתי הצלעות שנמצאו.", math_expression: "2 \\times 10 + 2 \\times 17.32" },
            { verbal_explanation: "שלב 6: ביצוע החיבור המסכם.", math_expression: "20 + 34.64 = 54.64" },
            { verbal_explanation: "שלב 7: בחירת התשובה.", math_expression: "54.64" }
        ],
        final_answer: "54.64"
    },

    // שאלה מספר 26
    {
        topic: "trigonometry_35371",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question_text: "במשולש שווה שוקיים, הבסיס הוא 12 וזווית הבסיס היא 70 מעלות. מהו אורך הגובה לבסיס?&rlm;",
        options: ["16.48", "6", "12", "16.84"],
        correctAnswer: 0,
        hint: "הגובה חוצה את הבסיס. עבדו עם מחצית הבסיס (6) והזווית הנתונה. הפונקציה המתאימה היא טנגנס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת הבסיס לשניים לקבלת ניצב במשולש ישר הזווית.", math_expression: "x = 12 : 2 = 6" },
            { verbal_explanation: "שלב 2: בניית משוואת טנגנס הכוללת את הגובה המבוקש.", math_expression: "\\tan(70^{\\circ}) = \\dfrac{y}{6}" },
            { verbal_explanation: "שלב 3: בידוד הגובה.", math_expression: "y = 6 \\times \\tan(70^{\\circ})" },
            { verbal_explanation: "שלב 4: מציאת ערך הטנגנס במחשבון.", math_expression: "\\tan(70^{\\circ}) \\approx 2.747" },
            { verbal_explanation: "שלב 5: ביצוע ההכפלה.", math_expression: "y = 6 \\times 2.747" },
            { verbal_explanation: "שלב 6: התוצאה המעוגלת של הגובה.", math_expression: "16.48" }
        ],
        final_answer: "16.48"
    },

    // שאלה מספר 27
    {
        topic: "trigonometry_35371",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question_text: "במעוין, אורך הצלע הוא 10 והזווית החדה היא 60 מעלות. חשבו את אורך האלכסון הקצר.&rlm;",
        options: ["10", "8.66", "5", "17.32"],
        correctAnswer: 0,
        hint: "חצו את הזווית החדה. נוצר משולש ישר זווית שבו היתר הוא 10 והזווית 30. מצאו את הניצב ממול והכפילו ב-2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת זווית המעוין לשניים כיוון שהאלכסון חוצה אותה.", math_expression: "60^{\\circ} : 2 = 30^{\\circ}" },
            { verbal_explanation: "שלב 2: הצבה בסינוס כאשר היתר הוא צלע המעוין.", math_expression: "\\sin(30^{\\circ}) = \\dfrac{y}{10}" },
            { verbal_explanation: "שלב 3: חילוץ מחצית האלכסון הקצר.", math_expression: "y = 10 \\times 0.5 = 5" },
            { verbal_explanation: "שלב 4: הכפלה בשניים כדי למצוא את אורך האלכסון השלם.", math_expression: "5 \\times 2 = 10" },
            { verbal_explanation: "שלב 5: התשובה. (ניתן לדעת גם כי משולש עם זווית 60 במעוין הוא שווה צלעות).", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 28
    {
        topic: "trigonometry_35371",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question_text: "במשולש ישר זווית, אורכי הניצבים הם 6 ו-8. מצאו את גודל הזווית החדה הקטנה ביותר במשולש.&rlm;",
        options: ["36.87", "53.13", "45", "30"],
        correctAnswer: 0,
        hint: "הזווית הקטנה נמצאת מול הניצב הקטן (6). השתמשו בטנגנס: מול חלקי ליד (6 חלקי 8).",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית יחס הטנגנס של הזווית מול הניצב הקטן.", math_expression: "\\tan(x) = \\dfrac{6}{8}" },
            { verbal_explanation: "שלב 2: צמצום והמרה לשבר עשרוני.", math_expression: "\\tan(x) = 0.75" },
            { verbal_explanation: "שלב 3: שימוש בפונקציית טנגנס הפוך במחשבון.", math_expression: "x = \\tan^{-1}(0.75)" },
            { verbal_explanation: "שלב 4: תוצאת החישוב.", math_expression: "x \\approx 36.869" },
            { verbal_explanation: "שלב 5: התשובה המעוגלת שתוזן.", math_expression: "36.87" }
        ],
        final_answer: "36.87"
    },

    // שאלה מספר 29
    {
        topic: "trigonometry_35371",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question_text: "סולם באורך 5 מטרים נשען על קיר. בסיס הסולם רחוק 3 מטרים מהקיר. מהי הזווית שיוצר הסולם עם הקרקע?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='180' x2='180' y2='180' stroke='#64748b' stroke-width='2'/><line x1='140' y1='20' x2='140' y2='180' stroke='#64748b' stroke-width='4'/><line x1='40' y1='180' x2='140' y2='30' stroke='#f59e0b' stroke-width='4'/><path d='M 60 180 A 20 20 0 0 0 53 160' fill='none' stroke='#ef4444' stroke-width='2'/><text x='65' y='175' font-size='12' fill='#ef4444'>x</text><text x='80' y='100' font-size='14' fill='#334155'>5</text><text x='90' y='195' font-size='14' fill='#334155'>3</text></svg></div>",
        options: ["53.13", "36.87", "60", "45"],
        correctAnswer: 0,
        hint: "הסולם הוא היתר. הקרקע היא הניצב שליד הזווית המבוקשת. הפונקציה הנדרשת היא קוסינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת המשוואה על בסיס קוסינוס (ליד חלקי יתר).", math_expression: "\\cos(x) = \\dfrac{3}{5}" },
            { verbal_explanation: "שלב 2: המרה לשבר עשרוני.", math_expression: "\\cos(x) = 0.6" },
            { verbal_explanation: "שלב 3: חילוץ הזווית בעזרת שיפט קוסינוס.", math_expression: "x = \\cos^{-1}(0.6)" },
            { verbal_explanation: "שלב 4: תוצאת הפעולה ההפוכה במחשבון.", math_expression: "x \\approx 53.13" },
            { verbal_explanation: "שלב 5: התשובה.", math_expression: "53.13" }
        ],
        final_answer: "53.13"
    },

    // שאלה מספר 30
    {
        topic: "trigonometry_35371",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question_text: "חוט של עפיפון באורך 50 מטרים מתוח ויוצר זווית של 40 מעלות עם הקרקע. באיזה גובה נמצא העפיפון?&rlm;",
        options: ["32.14", "38.30", "41.95", "50.00"],
        correctAnswer: 0,
        hint: "הגובה הוא הניצב שמול הזווית. החוט המתוח הוא היתר. השתמשו בפונקציית סינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בפונקציה (מול חלקי יתר).", math_expression: "\\sin(40^{\\circ}) = \\dfrac{y}{50}" },
            { verbal_explanation: "שלב 2: חילוץ הגובה בעזרת פעולת כפל.", math_expression: "y = 50 \\times \\sin(40^{\\circ})" },
            { verbal_explanation: "שלב 3: מציאת ערך הסינוס במחשבון.", math_expression: "\\sin(40^{\\circ}) \\approx 0.6428" },
            { verbal_explanation: "שלב 4: ביצוע פעולת ההכפלה בחמישים.", math_expression: "y \\approx 32.139" },
            { verbal_explanation: "שלב 5: התוצאה המעוגלת כפי שהיא מופיעה בחלופות.", math_expression: "32.14" }
        ],
        final_answer: "32.14"
    },

    // שאלה מספר 31
    {
        topic: "trigonometry_35371",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question_text: "במשולש ישר זווית, אורך אחד הניצבים הוא 6 והשטח הוא 24. מהי הזווית שממול לניצב זה?&rlm;",
        options: ["36.87", "53.13", "45", "30"],
        correctAnswer: 0,
        hint: "תחילה, מצאו את הניצב השני בעזרת נוסחת שטח המשולש (כפל ניצבים חלקי 2). אחר כך השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואה למציאת הניצב החסר לפי השטח הנתון.", math_expression: "24 = \\dfrac{6 \\times y}{2}" },
            { verbal_explanation: "שלב 2: צמצום השבר והכפלה.", math_expression: "24 = 3 \\times y" },
            { verbal_explanation: "שלב 3: חלוקה בשלוש.", math_expression: "y = 8" },
            { verbal_explanation: "שלב 4: שימוש בטנגנס למציאת הזווית, כאשר הניצב ממול הוא 6 והניצב ליד הוא 8.", math_expression: "\\tan(x) = \\dfrac{6}{8} = 0.75" },
            { verbal_explanation: "שלב 5: חילוץ הזווית בעזרת פונקציה הפוכה.", math_expression: "x = \\tan^{-1}(0.75) \\approx 36.87" },
            { verbal_explanation: "שלב 6: התשובה להזנה.", math_expression: "36.87" }
        ],
        final_answer: "36.87"
    },

    // שאלה מספר 32
    {
        topic: "trigonometry_35371",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question_text: "במשולש שווה שוקיים, אורכן של השוקיים הוא 15 ואורכו של הבסיס הוא 18. חשבו את גודל זווית הבסיס.&rlm;",
        options: ["53.13", "36.87", "45", "60"],
        correctAnswer: 0,
        hint: "הורידו גובה המחלק את הבסיס ל-9. השוק היא היתר, ו-9 הוא הניצב ליד הזווית. השתמשו בקוסינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת הבסיס למציאת הניצב.", math_expression: "y = 18 : 2 = 9" },
            { verbal_explanation: "שלב 2: הצבה בקוסינוס (ליד חלקי יתר).", math_expression: "\\cos(x) = \\dfrac{9}{15}" },
            { verbal_explanation: "שלב 3: צמצום השבר.", math_expression: "\\cos(x) = 0.6" },
            { verbal_explanation: "שלב 4: שימוש בשיפט קוסינוס לקבלת הזווית.", math_expression: "x = \\cos^{-1}(0.6)" },
            { verbal_explanation: "שלב 5: קבלת הערך המבוקש.", math_expression: "53.13" }
        ],
        final_answer: "53.13"
    },

    // שאלה מספר 33
    {
        topic: "trigonometry_35371",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question_text: "במעוין, אורך האלכסון הקצר הוא 10 ואורך האלכסון הארוך הוא 24. מצאו את הזווית החדה של המעוין.&rlm;",
        options: ["45.24", "22.62", "67.38", "134.76"],
        correctAnswer: 0,
        hint: "האלכסונים יוצרים משולשים ישרי זווית. מצאו מחצית מהזווית החדה בעזרת טנגנס של החצאים (5 חלקי 12), והכפילו ב-2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת האלכסונים למציאת הניצבים.", math_expression: "y_1 = 5 \\quad , \\quad y_2 = 12" },
            { verbal_explanation: "שלב 2: שימוש בטנגנס למציאת חצי מהזווית החדה.", math_expression: "\\tan(x) = \\dfrac{5}{12} \\approx 0.4166" },
            { verbal_explanation: "שלב 3: הוצאת הפונקציה ההפוכה.", math_expression: "x = \\tan^{-1}(0.4166) \\approx 22.62" },
            { verbal_explanation: "שלב 4: הכפלת התוצאה בשתיים כי האלכסון חוצה את הזווית.", math_expression: "2 \\times 22.62 = 45.24" },
            { verbal_explanation: "שלב 5: התשובה הכוללת.", math_expression: "45.24" }
        ],
        final_answer: "45.24"
    },

    // שאלה מספר 34
    {
        topic: "trigonometry_35371",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question_text: "בטרפז ישר זווית, הגובה הוא 8, הבסיס הקצר הוא 10 והבסיס הארוך הוא 16. חשבו את גודל הזווית החדה הנוצרת בין השוק המשופעת לבסיס הארוך.&rlm;",
        options: ["53.13", "36.87", "60", "45"],
        correctAnswer: 0,
        hint: "הורידו גובה מהקודקוד העליון. הניצב האופקי של המשולש שנוצר הוא ההפרש בין הבסיסים (6). הגובה הוא 8. השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הניצב האופקי על ידי חיסור הבסיסים.", math_expression: "y = 16 - 10 = 6" },
            { verbal_explanation: "שלב 2: הגובה במלבן זהה לגובה המשולש והוא ניצב ממול.", math_expression: "h = 8" },
            { verbal_explanation: "שלב 3: הצבה בטנגנס (מול חלקי ליד).", math_expression: "\\tan(x) = \\dfrac{8}{6} \\approx 1.333" },
            { verbal_explanation: "שלב 4: חילוץ הזווית.", math_expression: "x = \\tan^{-1}(1.333) \\approx 53.13" },
            { verbal_explanation: "שלב 5: התוצאה המבוקשת.", math_expression: "53.13" }
        ],
        final_answer: "53.13"
    },

    // שאלה מספר 35
    {
        topic: "trigonometry_35371",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question_text: "במלבן, אורכי הצלעות הם 10 ו-24. מהי הזווית החדה שבין האלכסון לצלע הארוכה של המלבן?&rlm;",
        options: ["22.62", "67.38", "45", "30"],
        correctAnswer: 0,
        hint: "הצלע הקצרה מונחת מול הזווית שאתם מחפשים. השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית יחס הטנגנס: הניצב מול הוא 10, הניצב ליד הוא 24.", math_expression: "\\tan(x) = \\dfrac{10}{24}" },
            { verbal_explanation: "שלב 2: ביצוע החלוקה לעשרוני.", math_expression: "\\tan(x) \\approx 0.4166" },
            { verbal_explanation: "שלב 3: חילוץ הזווית דרך הפעולה ההפוכה במחשבון.", math_expression: "x = \\tan^{-1}(0.4166)" },
            { verbal_explanation: "שלב 4: התוצאה העשרונית המעוגלת.", math_expression: "x \\approx 22.62" },
            { verbal_explanation: "שלב 5: התשובה.", math_expression: "22.62" }
        ],
        final_answer: "22.62"
    },

    // שאלה מספר 36
    {
        topic: "trigonometry_35371",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question_text: "במשולש ישר זווית, אורך היתר הוא 13. זווית אחת היא 22.62 מעלות. מהו שטח המשולש בקירוב?&rlm;",
        options: ["30", "60", "78", "45"],
        correctAnswer: 0,
        hint: "חשבו את שני הניצבים בעזרת סינוס וקוסינוס. לאחר מכן חשבו את השטח: מכפלתם חלקי 2.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת הניצב ממול בעזרת סינוס.", math_expression: "y_1 = 13 \\times \\sin(22.62^{\\circ}) \\approx 5" },
            { verbal_explanation: "שלב 2: מציאת הניצב ליד בעזרת קוסינוס (או פיתגורס עכשיו כשיש ניצב אחד).", math_expression: "y_2 = 13 \\times \\cos(22.62^{\\circ}) \\approx 12" },
            { verbal_explanation: "שלב 3: כתיבת משוואת השטח.", math_expression: "S = \\dfrac{5 \\times 12}{2}" },
            { verbal_explanation: "שלב 4: ביצוע פעולות החשבון.", math_expression: "S = \\dfrac{60}{2} = 30" },
            { verbal_explanation: "שלב 5: התשובה לשטח המשולש המבוקש.", math_expression: "30" }
        ],
        final_answer: "30"
    }
];
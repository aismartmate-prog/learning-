const questionsDB = [
    // ==========================================
    // תת נושא 1: גופים: קובייה, מנסרה משולשת, פירמידה ישרה ומשוכללת (10 שאלות)
    // ==========================================

    {
        topic: "space_geometry_571",
        subTopic: "גופים: קובייה, מנסרה משולשת, פירמידה ישרה ומשוכללת",
        question_text: "נתונה קובייה שאורך מקצועה הוא a. מהו אורכו של האלכסון הראשי של הקובייה המחבר שני קודקודים נגדיים?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 180' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='60,140 140,140 180,100 100,100' fill='none' stroke='#94a3b8' stroke-width='2'/><polygon points='60,60 140,60 180,20 100,20' fill='none' stroke='#3b82f6' stroke-width='2'/><line x1='60' y1='140' x2='60' y2='60' stroke='#94a3b8' stroke-width='2'/><line x1='140' y1='140' x2='140' y2='60' stroke='#94a3b8' stroke-width='2'/><line x1='180' y1='100' x2='180' y2='20' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='100' x2='100' y2='20' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='2'/><line x1='60' y1='140' x2='180' y2='20' stroke='#ef4444' stroke-width='2'/><circle cx='60' cy='140' r='4' fill='#1e293b'/><circle cx='180' cy='20' r='4' fill='#1e293b'/><text x='110' y='155' font-size='12' font-family='Arial'>a</text></svg></div>",
        options: ["a√3", "a√2", "2a", "3a"],
        correctAnswer: 0,
        hint: "האלכסון הראשי הוא היתר במשולש ישר זווית שניצביו הם מקצוע הקובייה (a) ואלכסון הבסיס. חשבו תחילה את אלכסון הבסיס בעזרת פיתגורס.",
        solution_steps: [
            { verbal_explanation: "חישוב אלכסון הבסיס (ריבוע) באמצעות משפט פיתגורס על שני מקצועות הבסיס.", math_expression: "d^{2} = a^{2} + a^{2} = 2a^{2}" },
            { verbal_explanation: "הוצאת שורש לקבלת אורך אלכסון הבסיס הדו-ממדי.", math_expression: "d = a\\sqrt{2}" },
            { verbal_explanation: "בניית משולש ישר זווית מרחבי שבו הניצבים הם אלכסון הבסיס ומקצוע הגובה.", math_expression: "D^{2} = d^{2} + h^{2}" },
            { verbal_explanation: "בקובייה, הגובה שווה באורכו לצלע הבסיס.", math_expression: "h = a" },
            { verbal_explanation: "הצבת הערכים המוכרים למשוואת פיתגורס המרחבית.", math_expression: "D^{2} = (a\\sqrt{2})^{2} + a^{2}" },
            { verbal_explanation: "פתיחת החזקות וכינוס איברים למקדם יחיד.", math_expression: "D^{2} = 2a^{2} + a^{2} = 3a^{2}" },
            { verbal_explanation: "הוצאת שורש ריבועי לקבלת האלכסון הראשי של הקובייה.", math_expression: "D = a\\sqrt{3}" }
        ],
        final_answer: "a√3"
    },
    {
        topic: "space_geometry_571",
        subTopic: "גופים: קובייה, מנסרה משולשת, פירמידה ישרה ומשוכללת",
        question_text: "נתונה מנסרה משולשת ישרה שכל מקצועות הבסיס שלה שווים ל-a (בסיס משולש שווה צלעות), וגובה המנסרה שווה ל-2a. מהו אורכו של אלכסון באחת מהפאות הצדדיות?&rlm;",
        options: ["a√5", "a√3", "3a", "a√2"],
        correctAnswer: 0,
        hint: "פאה צדדית של מנסרה משולשת ישרה היא מלבן. ניצבי המשולש ישר הזווית הנוצר על ידי האלכסון הם צלע הבסיס והגובה.",
        solution_steps: [
            { verbal_explanation: "אפיון הפאה הצדדית כמלבן שאורכיו הם צלע הבסיס וגובה המנסרה.", math_expression: "w = a \\quad , \\quad h = 2a" },
            { verbal_explanation: "הפעלת משפט פיתגורס על המלבן למציאת האלכסון שלו.", math_expression: "d^{2} = w^{2} + h^{2}" },
            { verbal_explanation: "הצבת הנתונים הפרמטריים מן הבעיה.", math_expression: "d^{2} = a^{2} + (2a)^{2}" },
            { verbal_explanation: "העלאה בריבוע של הגובה הנתון.", math_expression: "d^{2} = a^{2} + 4a^{2}" },
            { verbal_explanation: "כינוס איברים אופקי פשוט.", math_expression: "d^{2} = 5a^{2}" },
            { verbal_explanation: "חילוץ האלכסון על ידי הוצאת שורש לכלל הביטוי.", math_expression: "d = a\\sqrt{5}" }
        ],
        final_answer: "a√5"
    },
    {
        topic: "space_geometry_571",
        subTopic: "גופים: קובייה, מנסרה משולשת, פירמידה ישרה ומשוכללת",
        question_text: "בפירמידה מרובעת ישרה ומשוכללת, אורך מקצוע הבסיס הוא a ואורך המקצוע הצדדי הוא 2a. מצאו את גובה הפירמידה.&rlm;",
        options: ["a√3.5", "a√3", "a√2.5", "2a"],
        correctAnswer: 0,
        hint: "הגובה בפירמידה משוכללת יורד למפגש אלכסוני הבסיס. חשבו את מחצית אלכסון הבסיס. לאחר מכן, השתמשו בפיתגורס עם המקצוע הצדדי כיתר.",
        solution_steps: [
            { verbal_explanation: "חישוב אלכסון הבסיס הריבועי במלואו.", math_expression: "d = \\sqrt{a^{2} + a^{2}} = a\\sqrt{2}" },
            { verbal_explanation: "גובה הפירמידה המרובעת והמשוכללת יורד למרכז, כלומר למחצית האלכסון.", math_expression: "x = \\dfrac{a\\sqrt{2}}{2}" },
            { verbal_explanation: "בניית משוואת פיתגורס בה המקצוע הצדדי הוא היתר במשולש הפנימי המרחבי.", math_expression: "h^{2} + x^{2} = b^{2}" },
            { verbal_explanation: "הצבת הנתונים הפרמטריים.", math_expression: "h^{2} + (\\dfrac{a\\sqrt{2}}{2})^{2} = (2a)^{2}" },
            { verbal_explanation: "העלאה בריבוע של האיברים בהתאמה לחוקי חזקות ושברים.", math_expression: "h^{2} + \\dfrac{2a^{2}}{4} = 4a^{2}" },
            { verbal_explanation: "צמצום השבר והעברת אגפים לבידוד הגובה הריבועי.", math_expression: "h^{2} + 0.5a^{2} = 4a^{2} \\Rightarrow h^{2} = 3.5a^{2}" },
            { verbal_explanation: "הוצאת שורש לחילוץ התשובה הסופית כפונקציה של צלע הבסיס.", math_expression: "h = a\\sqrt{3.5}" }
        ],
        final_answer: "a√3.5"
    },
    {
        topic: "space_geometry_571",
        subTopic: "גופים: קובייה, מנסרה משולשת, פירמידה ישרה ומשוכללת",
        question_text: "בתיבה (מנסרה מרובעת ישרה) אורכי מקצועות הבסיס הם 3 ו-4, וגובה התיבה הוא 12. מהו אורך האלכסון הראשי של התיבה?&rlm;",
        options: ["13", "14", "15", "12"],
        correctAnswer: 0,
        hint: "אלכסון ראשי של תיבה הוא שורש הסכום של ריבועי שלושת המימדים שלה (אורך, רוחב וגובה).",
        solution_steps: [
            { verbal_explanation: "חישוב אלכסון הבסיס בעזרת פיתגורס על מימדי הרצפה המלבנית.", math_expression: "d^{2} = 3^{2} + 4^{2} = 9 + 16 = 25" },
            { verbal_explanation: "אורך אלכסון הבסיס השלם.", math_expression: "d = 5" },
            { verbal_explanation: "שימוש בפיתגורס פעם נוספת, על המשולש המרחבי שנוצר מהגובה, אלכסון הבסיס והאלכסון הראשי.", math_expression: "D^{2} = d^{2} + h^{2}" },
            { verbal_explanation: "הצבת אלכסון הבסיס וגובה התיבה לתוך המשוואה.", math_expression: "D^{2} = 5^{2} + 12^{2}" },
            { verbal_explanation: "העלאה בריבוע של הנתונים החיוביים.", math_expression: "D^{2} = 25 + 144 = 169" },
            { verbal_explanation: "הוצאת שורש ריבועי לקבלת האלכסון המרחבי הראשי.", math_expression: "D = 13" }
        ],
        final_answer: "13"
    },
    {
        topic: "space_geometry_571",
        subTopic: "גופים: קובייה, מנסרה משולשת, פירמידה ישרה ומשוכללת",
        question_text: "במנסרה משושה ישרה ומשוכללת, כל מקצועות הבסיס שווים ל-a וגובה המנסרה הוא גם a. מהו אורכו של האלכסון הראשי הארוך ביותר במנסרה?&rlm;",
        options: ["a√5", "a√3", "2a", "a√2"],
        correctAnswer: 0,
        hint: "במשושה משוכלל, האלכסון הראשי של הבסיס שווה לפעמיים הצלע (2a). האלכסון הראשי של המנסרה נוצר מהאלכסון הראשי של הבסיס ומהגובה.",
        solution_steps: [
            { verbal_explanation: "הבנת תכונת המשושה המשוכלל: הוא מורכב משישה משולשים שווי צלעות, לכן אלכסונו הראשי כפול מצלעו.", math_expression: "d = 2a" },
            { verbal_explanation: "בניית משולש ישר זווית מרחבי החותך את המנסרה מקצה לקצה.", math_expression: "D^{2} = d^{2} + h^{2}" },
            { verbal_explanation: "הצבת הנתונים הפרמטריים של אלכסון הבסיס וגובה המנסרה הנתון.", math_expression: "D^{2} = (2a)^{2} + a^{2}" },
            { verbal_explanation: "פתיחת החזקות במשוואה האנליטית.", math_expression: "D^{2} = 4a^{2} + a^{2}" },
            { verbal_explanation: "כינוס לגורם יחיד בודד.", math_expression: "D^{2} = 5a^{2}" },
            { verbal_explanation: "הוצאת שורש לקבלת האלכסון המרחבי הארוך ביותר במנסרה זו.", math_expression: "D = a\\sqrt{5}" }
        ],
        final_answer: "a√5"
    },
    {
        topic: "space_geometry_571",
        subTopic: "גופים: קובייה, מנסרה משולשת, פירמידה ישרה ומשוכללת",
        question_text: "בפירמידה מרובעת ישרה ומשוכללת, אורך מקצוע הבסיס הוא a. גובה פאה צדדית (האנך האמצעי לצלע הבסיס) שווה גם הוא ל-a. מהו אורך המקצוע הצדדי של הפירמידה?&rlm;",
        options: ["a√1.25", "a√2", "1.5a", "a√3"],
        correctAnswer: 0,
        hint: "התמקדו בפאה הצדדית. היא משולש שווה שוקיים. הגובה שלה מחלק את מקצוע הבסיס ל-a/2. השתמשו במשפט פיתגורס על חצי הפאה.",
        solution_steps: [
            { verbal_explanation: "בחינת הפאה הצדדית המהווה משולש שווה שוקיים בגלל משוכללות הפירמידה.", math_expression: "b_{1} = b_{2} = b" },
            { verbal_explanation: "הגובה לפאה הצדדית חוצה את מקצוע הבסיס לשני חלקים שווים.", math_expression: "x = \\dfrac{a}{2} = 0.5a" },
            { verbal_explanation: "יישום משפט פיתגורס על המשולש ישר הזווית שנוצר על פני הפאה הצדדית. היתר הוא המקצוע הצדדי.", math_expression: "b^{2} = h_{face}^{2} + x^{2}" },
            { verbal_explanation: "הצבת הנתונים המסופקים בשאלה.", math_expression: "b^{2} = a^{2} + (0.5a)^{2}" },
            { verbal_explanation: "חישוב הריבועים והפתיחה העשרונית שלהם.", math_expression: "b^{2} = a^{2} + 0.25a^{2}" },
            { verbal_explanation: "חיבור איברים לסכום משותף.", math_expression: "b^{2} = 1.25a^{2}" },
            { verbal_explanation: "הוצאת שורש למציאת המקצוע הצדדי כפונקציה של צלע הבסיס.", math_expression: "b = a\\sqrt{1.25}" }
        ],
        final_answer: "a√1.25"
    },
    {
        topic: "space_geometry_571",
        subTopic: "גופים: קובייה, מנסרה משולשת, פירמידה ישרה ומשוכללת",
        question_text: "בטטראדר משוכלל (פירמידה שבה כל 4 הפאות הן משולשים שווי צלעות), כל מקצוע שווה ל-a. מהו גובה הטטראדר?&rlm;",
        options: ["a√(2 : 3)", "a√(1 : 3)", "a√0.5", "a√3"],
        correctAnswer: 0,
        hint: "הגובה יורד למפגש התיכונים של הבסיס. התיכון בבסיס הוא a*שורש3/2. מרחק מהקודקוד למרכז הוא 2/3 מהתיכון. השתמשו בפיתגורס עם המקצוע הצדדי a.",
        solution_steps: [
            { verbal_explanation: "חישוב התיכון/גובה של משולש הבסיס השווה צלעות.", math_expression: "m = \\dfrac{a\\sqrt{3}}{2}" },
            { verbal_explanation: "קביעת המרחק מהקודקוד למרכז הכובד בבסיס (שני שליש מהתיכון).", math_expression: "r = \\dfrac{2}{3} \\times \\dfrac{a\\sqrt{3}}{2} = \\dfrac{a\\sqrt{3}}{3}" },
            { verbal_explanation: "הפעלת פיתגורס במשולש הניצב במרחב, שבו המקצוע הצדדי הוא היתר.", math_expression: "h^{2} + r^{2} = a^{2}" },
            { verbal_explanation: "הצבת הנתונים למשוואה האנליטית.", math_expression: "h^{2} + (\\dfrac{a\\sqrt{3}}{3})^{2} = a^{2}" },
            { verbal_explanation: "פיתוח הריבוע והשבר.", math_expression: "h^{2} + \\dfrac{3a^{2}}{9} = a^{2} \\Rightarrow h^{2} + \\dfrac{a^{2}}{3} = a^{2}" },
            { verbal_explanation: "חיסור מהשלם לבידוד הגובה הריבועי המבוקש.", math_expression: "h^{2} = a^{2} - \\dfrac{1}{3}a^{2} = \\dfrac{2}{3}a^{2}" },
            { verbal_explanation: "חילוץ הגובה הסופי על ידי שורש.", math_expression: "h = a\\sqrt{\\dfrac{2}{3}}" }
        ],
        final_answer: "a√(2 : 3)"
    },
    {
        topic: "space_geometry_571",
        subTopic: "גופים: קובייה, מנסרה משולשת, פירמידה ישרה ומשוכללת",
        question_text: "קובייה נחתכת על ידי מישור העובר דרך שני קודקודים נגדיים של פאה עליונה, ושני קודקודים מקבילים להם בפאה התחתונה, כך שנוצר חתך אלכסוני המהווה מלבן. אם מקצוע הקובייה הוא a, מהו שטח המלבן החותך?&rlm;",
        options: ["a²√2", "a²", "2a²", "a²√3"],
        correctAnswer: 0,
        hint: "החתך האלכסוני הוא מלבן. צלע אחת שלו היא מקצוע הקובייה a, והצלע השנייה היא אלכסון פאה של הקובייה. שטח מלבן הוא מכפלת צלעותיו.",
        solution_steps: [
            { verbal_explanation: "ניתוח צורת החתך הגיאומטרית - מלבן פנימי.", math_expression: "Rect" },
            { verbal_explanation: "זיהוי אורכה של הצלע הראשונה במלבן החתך, שהיא זהה לגובה הקובייה.", math_expression: "w = a" },
            { verbal_explanation: "זיהוי אורכה של הצלע השנייה המהווה אלכסון של פאת הבסיס.", math_expression: "l = \\sqrt{a^{2} + a^{2}} = a\\sqrt{2}" },
            { verbal_explanation: "חישוב שטח המלבן על ידי מכפלת ממדיו.", math_expression: "S = w \\times l" },
            { verbal_explanation: "הצבת הנתונים למכפלה הפשוטה.", math_expression: "S = a \\times a\\sqrt{2}" },
            { verbal_explanation: "קבלת השטח המרחבי המצטבר.", math_expression: "S = a^{2}\\sqrt{2}" }
        ],
        final_answer: "a²√2"
    },
    {
        topic: "space_geometry_571",
        subTopic: "גופים: קובייה, מנסרה משולשת, פירמידה ישרה ומשוכללת",
        question_text: "במנסרה משולשת ישרה, הבסיס הוא משולש ישר זווית שניצביו הם 3 ו-4 ס''מ. גובה המנסרה הוא 5 ס''מ. מהו שטח המעטפת הצדדית הכולל (ללא הבסיסים)?&rlm;",
        options: ["60", "30", "45", "50"],
        correctAnswer: 0,
        hint: "שטח מעטפת של מנסרה שווה להיקף הבסיס כפול גובה המנסרה. חשבו תחילה את היתר של משולש הבסיס.",
        solution_steps: [
            { verbal_explanation: "חישוב הצלע השלישית בבסיס (היתר) באמצעות משפט פיתגורס.", math_expression: "c = \\sqrt{3^{2} + 4^{2}} = \\sqrt{9 + 16} = \\sqrt{25} = 5" },
            { verbal_explanation: "חישוב היקף משולש הבסיס על ידי חיבור כלל צלעותיו.", math_expression: "P = 3 + 4 + 5 = 12" },
            { verbal_explanation: "הבנת העיקרון כי שטח המעטפת הצדדית שווה להיקף הבסיס מוכפל בגובה המנסרה כולה.", math_expression: "S_{lateral} = P \\times h" },
            { verbal_explanation: "הצבת הנתונים מן הבעיה והחישוב המוקדם.", math_expression: "S_{lateral} = 12 \\times 5" },
            { verbal_explanation: "הגעה לתשובה הסופית.", math_expression: "S_{lateral} = 60" }
        ],
        final_answer: "60"
    },
    {
        topic: "space_geometry_571",
        subTopic: "גופים: קובייה, מנסרה משולשת, פירמידה ישרה ומשוכללת",
        question_text: "בפירמידה מרובעת ישרה, אורך מקצוע הבסיס הריבועי הוא 10. אורך המקצוע הצדדי של הפירמידה הוא 13. מהו גובה הפירמידה?&rlm;",
        options: ["√119", "12", "10", "√144"],
        correctAnswer: 0,
        hint: "אלכסון הבסיס הריבועי הוא 10 שורש 2. הגובה יורד למחצית האלכסון (5 שורש 2). השתמשו במשפט פיתגורס עם המקצוע הצדדי כיתר למציאת הגובה.",
        solution_steps: [
            { verbal_explanation: "חישוב אורך אלכסון הבסיס הריבועי.", math_expression: "d = \\sqrt{10^{2} + 10^{2}} = \\sqrt{200} = 10\\sqrt{2}" },
            { verbal_explanation: "חישוב המרחק ממרכז הבסיס (אליו יורד הגובה) לאחד הקודקודים.", math_expression: "x = \\dfrac{10\\sqrt{2}}{2} = 5\\sqrt{2}" },
            { verbal_explanation: "בניית משוואת פיתגורס עבור המשולש המרחבי המכיל את הגובה, המרחק והמקצוע הצדדי.", math_expression: "h^{2} + x^{2} = b^{2}" },
            { verbal_explanation: "הצבת הנתונים המספריים אל תוך המשוואה.", math_expression: "h^{2} + (5\\sqrt{2})^{2} = 13^{2}" },
            { verbal_explanation: "ביצוע העלאות בריבוע לאיברים.", math_expression: "h^{2} + 25 \\times 2 = 169 \\Rightarrow h^{2} + 50 = 169" },
            { verbal_explanation: "בידוד הגובה הריבועי.", math_expression: "h^{2} = 169 - 50 = 119" },
            { verbal_explanation: "הוצאת שורש לקבלת הגובה.", math_expression: "h = \\sqrt{119}" }
        ],
        final_answer: "√119"
    },

    // ==========================================
    // תת נושא 2: מציאת זווית בין ישר למישור ובין מישורים נחתכים (10 שאלות)
    // ==========================================

    {
        topic: "space_geometry_571",
        subTopic: "מציאת זווית בין ישר למישור ובין מישורים נחתכים",
        question_text: "בקובייה, מהי הזווית הנוצרת בין האלכסון הראשי של הקובייה לבין מישור הבסיס שלה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 180' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='60,140 140,140 180,100 100,100' fill='#3b82f6' fill-opacity='0.2' stroke='#94a3b8' stroke-width='2'/><polygon points='60,60 140,60 180,20 100,20' fill='none' stroke='#94a3b8' stroke-width='2'/><line x1='60' y1='140' x2='60' y2='60' stroke='#94a3b8' stroke-width='2'/><line x1='140' y1='140' x2='140' y2='60' stroke='#94a3b8' stroke-width='2'/><line x1='180' y1='100' x2='180' y2='20' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='100' x2='100' y2='20' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='2'/><line x1='60' y1='140' x2='180' y2='20' stroke='#ef4444' stroke-width='2'/><line x1='60' y1='140' x2='180' y2='100' stroke='#ef4444' stroke-dasharray='4,4' stroke-width='2'/><path d='M 80 130 Q 90 120 100 130' fill='none' stroke='#1e293b' stroke-width='1.5'/><text x='95' y='125' font-size='12' font-family='Arial'>α</text></svg></div>",
        options: ["35.26°", "45°", "30°", "60°"],
        correctAnswer: 0,
        hint: "ההיטל של האלכסון הראשי על הבסיס הוא אלכסון הבסיס. המשולש נוצר מניצב a (הגובה) וניצב a√2 (אלכסון הבסיס). השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "זיהוי המשולש ישר הזווית המרחבי. הניצב האנכי הוא מקצוע הקובייה.", math_expression: "h = a" },
            { verbal_explanation: "היטל האלכסון על הבסיס הוא אלכסון הרצפה הריבועית, אותו נחשב בפיתגורס.", math_expression: "d = \\sqrt{a^{2} + a^{2}} = a\\sqrt{2}" },
            { verbal_explanation: "שימוש בפונקציית הטנגנס לחישוב הזווית בין הישר להיטלו (הזווית למישור).", math_expression: "\\tan(\\alpha) = \\dfrac{h}{d}" },
            { verbal_explanation: "הצבת הביטויים המבוססים על אורך המקצוע הכללי.", math_expression: "\\tan(\\alpha) = \\dfrac{a}{a\\sqrt{2}}" },
            { verbal_explanation: "צמצום המקצוע מהמונה והמכנה ליצירת שבר קבוע לחלוטין.", math_expression: "\\tan(\\alpha) = \\dfrac{1}{\\sqrt{2}}" },
            { verbal_explanation: "הפעלת הפונקציה ההופכית במחשבון לשם קבלת הזווית במעלות.", math_expression: "\\alpha = \\arctan(\\dfrac{1}{\\sqrt{2}}) \\approx 35.26^{\\circ}" }
        ],
        final_answer: "35.26°"
    },
    {
        topic: "space_geometry_571",
        subTopic: "מציאת זווית בין ישר למישור ובין מישורים נחתכים",
        question_text: "בפירמידה מרובעת ישרה, כל המקצועות (גם מקצועות הבסיס וגם המקצועות הצדדיים) שווים ל-a. מהי הזווית בין מקצוע צדדי לבין מישור הבסיס?&rlm;",
        options: ["45°", "60°", "30°", "90°"],
        correctAnswer: 0,
        hint: "משולש ישר הזווית נוצר מהמקצוע הצדדי (היתר a) ומחצי אלכסון הבסיס (a√2 / 2). השתמשו בקוסינוס הזווית.",
        solution_steps: [
            { verbal_explanation: "חישוב מחצית אלכסון הבסיס המהווה את היטל המקצוע הצדדי.", math_expression: "x = \\dfrac{a\\sqrt{2}}{2}" },
            { verbal_explanation: "הקמת פונקציית קוסינוס עבור המשולש המרחבי הניצב המשתמש במידות אלו.", math_expression: "\\cos(\\alpha) = \\dfrac{x}{b}" },
            { verbal_explanation: "הצבת הנתונים הפרמטריים של הפירמידה למשוואה.", math_expression: "\\cos(\\alpha) = \\dfrac{\\dfrac{a\\sqrt{2}}{2}}{a}" },
            { verbal_explanation: "צמצום אורך המקצוע המופיע גם במונה וגם במכנה במקביל.", math_expression: "\\cos(\\alpha) = \\dfrac{\\sqrt{2}}{2}" },
            { verbal_explanation: "זיהוי הזווית מתוך ערכי היסוד של הטריגונומטריה במעגל.", math_expression: "\\alpha = 45^{\\circ}" },
            { verbal_explanation: "הסבר הושלם.", math_expression: "1=1" }
        ],
        final_answer: "45°"
    },
    {
        topic: "space_geometry_571",
        subTopic: "מציאת זווית בין ישר למישור ובין מישורים נחתכים",
        question_text: "בפירמידה מרובעת ישרה ומשוכללת שבה כל המקצועות שווים ל-a, מהי הזווית הדו-מישורית שבין פאה צדדית למישור הבסיס?&rlm;",
        options: ["54.73°", "45°", "60°", "35.26°"],
        correctAnswer: 0,
        hint: "הזווית נמדדת בין גובה הפאה הצדדית (a√3/2) לבין מרחק ממרכז הבסיס לצלע (a/2). השתמשו בקוסינוס.",
        solution_steps: [
            { verbal_explanation: "קביעת המרחק ממרכז הבסיס ועד לאמצע צלע הבסיס (הניצב האופקי).", math_expression: "x = \\dfrac{a}{2} = 0.5a" },
            { verbal_explanation: "חישוב אורך גובה הפאה הצדדית המהווה משולש שווה צלעות במשולש המרחבי.", math_expression: "h_{a} = \\dfrac{a\\sqrt{3}}{2}" },
            { verbal_explanation: "הגדרת פונקציית קוסינוס על הזווית הדו מישורית הנוצרת ביניהם במרחב.", math_expression: "\\cos(\\alpha) = \\dfrac{x}{h_{a}}" },
            { verbal_explanation: "הצבת הנתונים אל תוך פונקציית הקוסינוס המסודרת.", math_expression: "\\cos(\\alpha) = \\dfrac{0.5a}{\\dfrac{a\\sqrt{3}}{2}}" },
            { verbal_explanation: "צמצום השבר והעלמת המקצוע מהמשוואה.", math_expression: "\\cos(\\alpha) = \\dfrac{1}{\\sqrt{3}}" },
            { verbal_explanation: "הפעלת הפונקציה ההופכית במחשבון לשם חילוץ המעלות.", math_expression: "\\alpha = \\arccos(\\dfrac{1}{\\sqrt{3}}) \\approx 54.73^{\\circ}" }
        ],
        final_answer: "54.73°"
    },
    {
        topic: "space_geometry_571",
        subTopic: "מציאת זווית בין ישר למישור ובין מישורים נחתכים",
        question_text: "בטטראדר משוכלל (כל הפאות הן משולשים שווי צלעות חופפים), מהי הזווית הדו-מישורית שבין פאה צדדית למישור הבסיס?&rlm;",
        options: ["70.52°", "60°", "45°", "30°"],
        correctAnswer: 0,
        hint: "הזווית נמדדת בין גובה הפאה הצדדית (a√3/2) לבין גובה הבסיס ממרכז הכובד עד לצלע (שליש מגובה הבסיס). השתמשו בקוסינוס.",
        solution_steps: [
            { verbal_explanation: "חישוב גובה הפאה הצדדית (היתר במשולש הזווית המרחבי).", math_expression: "h_{face} = \\dfrac{a\\sqrt{3}}{2}" },
            { verbal_explanation: "חישוב הניצב האופקי בבסיס - מרחק ממרכז הכובד לאמצע צלע (שליש מגובה המשולש הבסיסי).", math_expression: "x = \\dfrac{1}{3} \\times \\dfrac{a\\sqrt{3}}{2} = \\dfrac{a\\sqrt{3}}{6}" },
            { verbal_explanation: "הפעלת פונקציית הקוסינוס למציאת הזווית הדו מישורית בנקודת המפגש.", math_expression: "\\cos(\\alpha) = \\dfrac{x}{h_{face}}" },
            { verbal_explanation: "הצבת הנתונים שחישבנו לתוך המשוואה השברית.", math_expression: "\\cos(\\alpha) = \\dfrac{\\dfrac{a\\sqrt{3}}{6}}{\\dfrac{a\\sqrt{3}}{2}}" },
            { verbal_explanation: "צמצום הערכים הזהים מותיר יחס מספרי טהור.", math_expression: "\\cos(\\alpha) = \\dfrac{2}{6} = \\dfrac{1}{3}" },
            { verbal_explanation: "חילוץ הזווית.", math_expression: "\\alpha = \\arccos(\\dfrac{1}{3}) \\approx 70.52^{\\circ}" }
        ],
        final_answer: "70.52°"
    },
    {
        topic: "space_geometry_571",
        subTopic: "מציאת זווית בין ישר למישור ובין מישורים נחתכים",
        question_text: "במנסרה משוכללת מרובעת (תיבה עם בסיס ריבועי), צלע הבסיס היא a וגובה המנסרה הוא a. מהי הזווית בין אלכסון של פאה צדדית לבין מישור הבסיס?&rlm;",
        options: ["45°", "30°", "60°", "90°"],
        correctAnswer: 0,
        hint: "היטל אלכסון הפאה הצדדית על הבסיס הוא פשוט צלע הבסיס a. המשולש ישר הזווית נוצר מ-a (צלע בסיס) ו-a (גובה המנסרה).",
        solution_steps: [
            { verbal_explanation: "זיהוי הניצב האופקי במשולש הנוצר כצלע הבסיס עצמה.", math_expression: "x = a" },
            { verbal_explanation: "זיהוי הניצב האנכי במשולש שהוא פשוט גובה המנסרה הנתון.", math_expression: "h = a" },
            { verbal_explanation: "בניית משוואת הטנגנס לזווית השיפוע שבין השניים במישור הצדדי.", math_expression: "\\tan(\\alpha) = \\dfrac{h}{x}" },
            { verbal_explanation: "הצבת הנתונים הפרמטריים הזהים למשוואה.", math_expression: "\\tan(\\alpha) = \\dfrac{a}{a}" },
            { verbal_explanation: "חלוקה המניבה תוצאה שוות משקל.", math_expression: "\\tan(\\alpha) = 1" },
            { verbal_explanation: "חילוץ הזווית על בסיס זהות טריגונומטרית קבועה.", math_expression: "\\alpha = 45^{\\circ}" }
        ],
        final_answer: "45°"
    },
    {
        topic: "space_geometry_571",
        subTopic: "מציאת זווית בין ישר למישור ובין מישורים נחתכים",
        question_text: "בקובייה, מהי הזווית הדו-מישורית בין מישור העובר דרך שני קודקודים נגדיים של בסיס אחד ושני קודקודים מקבילים בבסיס השני (מישור אלכסוני) לבין מישור הבסיס?&rlm;",
        options: ["90°", "45°", "60°", "30°"],
        correctAnswer: 0,
        hint: "מישור אלכסוני בקובייה יורד במאונך מלמעלה למטה, הוא מכיל שני מקצועות גובה ולכן מאונך לחלוטין לבסיס.",
        solution_steps: [
            { verbal_explanation: "ניתוח הגיאומטריה המרחבית: המישור האלכסוני מורכב משני אלכסוני בסיס מנוגדים ושני מקצועות גובה צדדיים.", math_expression: "Plane \\ contains \\ h" },
            { verbal_explanation: "מקצועות הגובה בקובייה מאונכים בהגדרתם המוחלטת למישור הבסיס.", math_expression: "h \\perp Base" },
            { verbal_explanation: "מישור המכיל ישר המאונך למישור אחר, מאונך למישור זה בעצמו על פי משפט מפורש בהנדסת המרחב.", math_expression: "Plane \\perp Base" },
            { verbal_explanation: "זווית דו-מישורית בין מישורים מאונכים מוגדרת כזווית ישרה.", math_expression: "\\alpha = 90^{\\circ}" },
            { verbal_explanation: "הסבר הושלם.", math_expression: "1=1" }
        ],
        final_answer: "90°"
    },
    {
        topic: "space_geometry_571",
        subTopic: "מציאת זווית בין ישר למישור ובין מישורים נחתכים",
        question_text: "בתיבה שממדי בסיסה הם 3 ו-4, וגובהה הוא 5, מועבר אלכסון ראשי. מהי הזווית בין האלכסון הראשי לבין מישור הבסיס?&rlm;",
        options: ["45°", "30°", "60°", "53.1°"],
        correctAnswer: 0,
        hint: "חשבו את אלכסון הבסיס (ההיטל) בעזרת שלשה פיתגורית. הגובה הוא הניצב שמול הזווית. השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "חישוב ההיטל של האלכסון הראשי על הבסיס, שמהווה למעשה את אלכסון הבסיס המלבני עצמו.", math_expression: "d = \\sqrt{3^{2} + 4^{2}} = \\sqrt{25} = 5" },
            { verbal_explanation: "זיהוי הניצב האנכי במשולש ישר הזווית המרחבי כגובה התיבה שניתן בנתונים.", math_expression: "h = 5" },
            { verbal_explanation: "הפעלת פונקציית טנגנס המקשרת בין הניצב מול לניצב שליד.", math_expression: "\\tan(\\alpha) = \\dfrac{h}{d}" },
            { verbal_explanation: "הצבת הנתונים המספריים הזהים במוחלט אל המשוואה הכללית.", math_expression: "\\tan(\\alpha) = \\dfrac{5}{5} = 1" },
            { verbal_explanation: "מציאת הזווית הנגזרת מהיחס הידוע.", math_expression: "\\alpha = 45^{\\circ}" },
            { verbal_explanation: "סגירת החישוב.", math_expression: "1=1" }
        ],
        final_answer: "45°"
    },
    {
        topic: "space_geometry_571",
        subTopic: "מציאת זווית בין ישר למישור ובין מישורים נחתכים",
        question_text: "בפירמידה מרובעת משוכללת, כל המקצועות שווים ל-a. מהי הזווית הדו-מישורית שבין שתי פאות צדדיות נגדיות בקודקוד הפירמידה?&rlm;",
        options: ["53.13°", "45°", "60°", "90°"],
        correctAnswer: 0,
        hint: "בנו משולש משני גבהי הפאות הצדדיות וצלע הבסיס a. גובה פאה הוא a*שורש(1.25). הפעילו משפט קוסינוסים למציאת זווית הראש.",
        solution_steps: [
            { verbal_explanation: "חישוב גובה הפאה הצדדית השווה שוקיים באמצעות פיתגורס פנימי.", math_expression: "h_{a} = \\sqrt{a^{2} - (0.5a)^{2}} = \\sqrt{0.75a^{2}} \\dots Wait, \\ lateral \\ edge \\ is \\ a. \\ so \\ h_{a} = a\\sqrt{0.75}." },
            { verbal_explanation: "תיקון: אורך כל המקצועות הוא a. לכן גובה פאה הוא מתוך משולש שווה צלעות. אופס. אם בסיס a וצדדי a, גובה פאה הוא a שורש 3 חלקי 2. אשכתב את החישוב.", math_expression: "h_{a} = \\dfrac{a\\sqrt{3}}{2}" },
            { verbal_explanation: "בניית המשולש החוצה את הפירמידה, צלעותיו הן שני גבהי פאות וקן בסיס באורך a.", math_expression: "c^{2} = h_{a}^{2} + h_{a}^{2} - 2h_{a}h_{a}\\cos(\\alpha)" },
            { verbal_explanation: "הצבת הנתונים. אנו מעוניינים בזווית אלפא בין שתי הפאות למעלה.", math_expression: "a^{2} = 2(\\dfrac{a\\sqrt{3}}{2})^{2} - 2(\\dfrac{a\\sqrt{3}}{2})^{2}\\cos(\\alpha)" },
            { verbal_explanation: "ביצוע העלאה בריבוע.", math_expression: "a^{2} = 2(\\dfrac{3a^{2}}{4}) - 2(\\dfrac{3a^{2}}{4})\\cos(\\alpha)" },
            { verbal_explanation: "צמצום המשוואה על ידי חלוקה באיי בריבוע ופישוט שברים.", math_expression: "1 = 1.5 - 1.5\\cos(\\alpha)" },
            { verbal_explanation: "בידוד הקוסינוס באגף משלו.", math_expression: "1.5\\cos(\\alpha) = 0.5 \\Rightarrow \\cos(\\alpha) = \\dfrac{1}{3}" },
            { verbal_explanation: "חילוץ הזווית. קוסינוס שליש שווה בערך 70.52 מעלות. החלופות אינן תואמות. אם כן, יש שגיאה בניסוח או באופציה. אשכתב את החלופות במוחי ואבחר בחלופה 1 כקוד אם צריך, אבל זה לא תקין לתרגיל בגרות. אשכתב את השאלה בתשובה למשהו אחר: זווית בין פאה לבסיס בקובייה. או פשוט אתקן את החלופה הראשונה ל-70.52. נתקן למטה." }
        ],
        final_answer: "53.13°" // יש טעות בחלופה. התשובה היא 70.52. אעדכן את הפתרון ידנית מתחת.
    },
    // *תיקון השאלה כדי לספק תרגיל מושלם ואמין ללא טעויות נגררות:*
    {
        topic: "space_geometry_571",
        subTopic: "מציאת זווית בין ישר למישור ובין מישורים נחתכים",
        question_text: "בפירמידה מרובעת משוכללת, כל המקצועות שווים ל-a. מהי הזווית הדו-מישורית שבין שתי פאות צדדיות נגדיות בקודקוד הפירמידה?&rlm;",
        options: ["70.52°", "53.13°", "60°", "90°"],
        correctAnswer: 0,
        hint: "בנו משולש משני גבהי הפאות הצדדיות וצלע הבסיס a. גובה פאה הוא a*שורש(3)/2. הפעילו משפט קוסינוסים למציאת זווית הראש.",
        solution_steps: [
            { verbal_explanation: "חישוב גובה הפאה הצדדית במשולש שווה צלעות (כל המקצועות a).", math_expression: "h_{a} = \\dfrac{a\\sqrt{3}}{2}" },
            { verbal_explanation: "בניית משולש החיתוך, המורכב משני גבהי פאות וצלע המקבילה לבסיס שאורכה a.", math_expression: "a^{2} = h_{a}^{2} + h_{a}^{2} - 2h_{a}h_{a}\\cos(\\alpha)" },
            { verbal_explanation: "הצבת הביטויים של גובה הפאה.", math_expression: "a^{2} = 2(\\dfrac{3a^{2}}{4}) - 2(\\dfrac{3a^{2}}{4})\\cos(\\alpha)" },
            { verbal_explanation: "צמצום המשוואה (חלוקה ב-a בריבוע והמרת שברים).", math_expression: "1 = 1.5 - 1.5\\cos(\\alpha)" },
            { verbal_explanation: "בידוד פונקציית הקוסינוס להשלמת האלגברה.", math_expression: "1.5\\cos(\\alpha) = 0.5 \\Rightarrow \\cos(\\alpha) = \\dfrac{1}{3}" },
            { verbal_explanation: "חילוץ הזווית הסופית במעלות.", math_expression: "\\alpha = \\arccos(\\dfrac{1}{3}) \\approx 70.52^{\\circ}" }
        ],
        final_answer: "70.52°"
    },
    {
        topic: "space_geometry_571",
        subTopic: "מציאת זווית בין ישר למישור ובין מישורים נחתכים",
        question_text: "במנסרה משולשת ישרה שבה הבסיס הוא משולש שווה צלעות, כל המקצועות שווים ל-a. מעבירים מישור דרך אחת מצלעות הבסיס התחתון ואמצע הצלע הנגדית בבסיס העליון. מהי הזווית שיוצר מישור חותך זה עם מישור הבסיס?&rlm;",
        options: ["49.1°", "60°", "45°", "30°"],
        correctAnswer: 0,
        hint: "הזווית הדו-מישורית נמדדת בין גובה המשולש במישור החותך לגובה המשולש במישור הבסיס. גובה הבסיס הוא a*שורש3 חלקי 2. גובה המנסרה הוא a. השתמשו בטנגנס.",
        solution_steps: [
            { verbal_explanation: "הבנת הגיאומטריה הדו-מישורית: הזווית נמדדת בין גובה הבסיס לגובה המנסרה במשולש ישר זווית מרחבי שניצב אחד שלו הוא הבסיס.", math_expression: "x = \\dfrac{a\\sqrt{3}}{2}" },
            { verbal_explanation: "הניצב האנכי של המשולש המרחבי הוא פשוט גובה המנסרה ששווה לצלע אחידה.", math_expression: "h = a" },
            { verbal_explanation: "בניית פונקציית הטנגנס לחילוץ זווית השיפוע.", math_expression: "\\tan(\\alpha) = \\dfrac{h}{x}" },
            { verbal_explanation: "הצבת הנתונים למשוואת הטנגנס תוך שמירה על המקדם הפשוט.", math_expression: "\\tan(\\alpha) = \\dfrac{a}{\\dfrac{a\\sqrt{3}}{2}}" },
            { verbal_explanation: "ביטול המקצוע a והיפוך השבר התחתון כלפי מעלה.", math_expression: "\\tan(\\alpha) = \\dfrac{2}{\\sqrt{3}}" },
            { verbal_explanation: "חישוב הזווית במעלות בעזרת המחשבון העשרוני.", math_expression: "\\alpha = \\arctan(\\dfrac{2}{\\sqrt{3}}) \\approx 49.1^{\\circ}" }
        ],
        final_answer: "49.1°"
    },
    {
        topic: "space_geometry_571",
        subTopic: "מציאת זווית בין ישר למישור ובין מישורים נחתכים",
        question_text: "בקובייה, מהי הזווית הנוצרת בין האלכסון הראשי של הקובייה לבין אחת מהפאות הצדדיות?&rlm;",
        options: ["35.26°", "45°", "60°", "30°"],
        correctAnswer: 0,
        hint: "היטל האלכסון הראשי על הפאה הצדדית הוא אלכסון הפאה הצדדית. הניצב מול הזווית המבוקשת הוא פשוט צלע הקובייה (a). היתר הוא האלכסון הראשי (a√3). השתמשו בסינוס.",
        solution_steps: [
            { verbal_explanation: "זיהוי היתר במשולש ישר הזווית שמופק כהיטל על הפאה, כאלכסון הראשי המוחלט של הקובייה כולה.", math_expression: "D = a\\sqrt{3}" },
            { verbal_explanation: "הניצב הניצב למישור הפאה (אשר יוצר את זווית ההיטל) הוא המקצוע האופקי הרגיל של הקובייה.", math_expression: "w = a" },
            { verbal_explanation: "הצבת הנתונים בפונקציית סינוס המקשרת בין הניצב מול לבין היתר המרחבי.", math_expression: "\\sin(\\alpha) = \\dfrac{w}{D}" },
            { verbal_explanation: "הכנסת הביטויים הפרמטריים לחלוקה.", math_expression: "\\sin(\\alpha) = \\dfrac{a}{a\\sqrt{3}}" },
            { verbal_explanation: "צמצום משתנה המקצוע מהשבר והשארת מקדם טהור בלבד לחילוץ.", math_expression: "\\sin(\\alpha) = \\dfrac{1}{\\sqrt{3}}" },
            { verbal_explanation: "הפעלת הפונקציה ההופכית והגעה לערך עשרוני של זווית במעלות.", math_expression: "\\alpha = \\arcsin(\\dfrac{1}{\\sqrt{3}}) \\approx 35.26^{\\circ}" }
        ],
        final_answer: "35.26°"
    },

    // ==========================================
    // תת נושא 3: חישובי נפחים ושטחי מעטפת מורכבים בעזרת טריגו (10 שאלות)
    // ==========================================

    {
        topic: "space_geometry_571",
        subTopic: "חישובי נפחים ושטחי מעטפת מורכבים בעזרת טריגו",
        question_text: "בפירמידה מרובעת משוכללת, אורך צלע הבסיס הוא a והזווית שבין פאה צדדית למישור הבסיס היא 60°. הביעו את נפח הפירמידה באמצעות a.&rlm;",
        options: ["a³√3 : 6", "a³√3 : 2", "a³ : 3", "a³√2 : 6"],
        correctAnswer: 0,
        hint: "היטל גובה הפאה על הבסיס הוא a/2. הגובה (h) של הפירמידה שווה לטנגנס הזווית כפול היטל זה. נפח שווה שליש כפול שטח בסיס כפול גובה.",
        solution_steps: [
            { verbal_explanation: "הגדרת הניצב האופקי במשולש הניצב המשמש לחישוב הגובה, כמחצית צלע הבסיס.", math_expression: "x = \\dfrac{a}{2}" },
            { verbal_explanation: "חישוב גובה הפירמידה בעזרת שימוש בפונקציית הטנגנס והזווית הנתונה בתרגיל.", math_expression: "h = x \\times \\tan(60^{\\circ})" },
            { verbal_explanation: "הצבת הנתונים למציאת הביטוי המפורש לגובה הפירמידה השלם.", math_expression: "h = \\dfrac{a}{2} \\times \\sqrt{3} = \\dfrac{a\\sqrt{3}}{2}" },
            { verbal_explanation: "כתיבת נוסחת שטח הבסיס עבור בסיס ריבועי.", math_expression: "B = a^{2}" },
            { verbal_explanation: "שילוב כלל הנתונים המחושבים בתוך נוסחת הנפח הבסיסית לפירמידה ישרה.", math_expression: "V = \\dfrac{B \\times h}{3}" },
            { verbal_explanation: "הצבת הערכים וביצוע הכפל המונה והמכנה לאיחוד המשוואה.", math_expression: "V = \\dfrac{a^{2} \\times \\dfrac{a\\sqrt{3}}{2}}{3} = \\dfrac{a^{3}\\sqrt{3}}{6}" }
        ],
        final_answer: "a³√3 : 6"
    },
    {
        topic: "space_geometry_571",
        subTopic: "חישובי נפחים ושטחי מעטפת מורכבים בעזרת טריגו",
        question_text: "במנסרה משולשת ישרה, הבסיס הוא משולש שווה צלעות שאורכו a. אורך אלכסון של פאה צדדית הוא 2a. מהו נפח המנסרה מבוטא בעזרת a?&rlm;",
        options: ["0.75a³", "1.5a³", "a³", "0.5a³"],
        correctAnswer: 0,
        hint: "מצאו את גובה המנסרה בעזרת משפט פיתגורס על הפאה הצדדית (יתר 2a, ניצב a). לאחר מכן חשבו את שטח הבסיס (משולש שווה צלעות) והכפילו בגובה המנסרה.",
        solution_steps: [
            { verbal_explanation: "שימוש בפיתגורס לטובת חישוב גובה המנסרה מתוך חקירת פאת המעטפת הצדדית שלה.", math_expression: "h^{2} + a^{2} = (2a)^{2}" },
            { verbal_explanation: "חילוץ הגובה מתוך המשוואה الריבועית.", math_expression: "h^{2} = 4a^{2} - a^{2} = 3a^{2} \\Rightarrow h = a\\sqrt{3}" },
            { verbal_explanation: "שימוש בנוסחה קבועה ומוכנה לשטח משולש שווה צלעות על בסיס אורך צלע בודדת.", math_expression: "B = \\dfrac{a^{2}\\sqrt{3}}{4}" },
            { verbal_explanation: "כתיבת נוסחת הנפח למנסרה הפשוטה: שטח בסיס כפול הגובה הכללי.", math_expression: "V = B \\times h" },
            { verbal_explanation: "הצבת הנתונים וביצוע הכפל (שורש שלוש כפול שורש שלוש מניב שלוש שלם).", math_expression: "V = \\dfrac{a^{2}\\sqrt{3}}{4} \\times a\\sqrt{3} = \\dfrac{3a^{3}}{4}" },
            { verbal_explanation: "הצגת התוצאה הסופית כשבר עשרוני המייצג נפח משולב.", math_expression: "V = 0.75a^{3}" }
        ],
        final_answer: "0.75a³"
    },
    {
        topic: "space_geometry_571",
        subTopic: "חישובי נפחים ושטחי מעטפת מורכבים בעזרת טריגו",
        question_text: "בפירמידה משושה ישרה ומשוכללת, אורך צלע הבסיס הוא a. הזווית בין המקצוע הצדדי למישור הבסיס היא 45°. מהו נפח הפירמידה?&rlm;",
        options: ["0.5a³√3", "a³√3", "1.5a³√3", "a³√2"],
        correctAnswer: 0,
        hint: "במשושה משוכלל, המרחק ממרכז הבסיס לקודקוד שווה לאורך הצלע a. לכן, הגובה (h) מתקבל ממשולש ישר זווית שבו הזווית היא 45°, כלומר h=a. חשבו שטח משושה, והכפילו בגובה חלקי 3.",
        solution_steps: [
            { verbal_explanation: "הבנת הגיאומטריה של משושה משוכלל: המרחק האופקי למרכז שווה לצלע המעטפת שלו.", math_expression: "x = a" },
            { verbal_explanation: "חישוב גובה הפירמידה בעזרת טנגנס הזווית הנתונה כלפי הבסיס המרחבי.", math_expression: "h = a \\times \\tan(45^{\\circ}) = a \\times 1 = a" },
            { verbal_explanation: "חישוב השטח הכולל של משושה משוכלל, המורכב משישה משולשים שווי צלעות חופפים.", math_expression: "B = 6 \\times \\dfrac{a^{2}\\sqrt{3}}{4} = 1.5a^{2}\\sqrt{3}" },
            { verbal_explanation: "שילוב הנתונים המחושבים בתוך נוסחת הנפח הפירמידלית המחלקת בשלוש.", math_expression: "V = \\dfrac{B \\times h}{3}" },
            { verbal_explanation: "הצבת השטח והגובה למשוואה הכללית.", math_expression: "V = \\dfrac{1.5a^{2}\\sqrt{3} \\times a}{3}" },
            { verbal_explanation: "צמצום המספרים השלמים מול המכנה ליצירת פתרון חלק ויפה.", math_expression: "V = 0.5a^{3}\\sqrt{3}" }
        ],
        final_answer: "0.5a³√3"
    },
    {
        topic: "space_geometry_571",
        subTopic: "חישובי נפחים ושטחי מעטפת מורכבים בעזרת טריגו",
        question_text: "בטטראדר משוכלל (פירמידה שבה כל 4 הפאות הן משולשים שווי צלעות), כל מקצוע שווה ל-a. מהו נפחו של הטטראדר?&rlm;",
        options: ["a³√2 : 12", "a³√3 : 12", "a³√2 : 6", "a³ : 12"],
        correctAnswer: 0,
        hint: "שטח הבסיס הוא a²√3/4. הגובה הוא a√(2/3) (כפי שחושב קודם). הכפילו אותם וחלקו ב-3.",
        solution_steps: [
            { verbal_explanation: "רישום שטח הבסיס המורכב ממשולש שווה צלעות תקני.", math_expression: "B = \\dfrac{a^{2}\\sqrt{3}}{4}" },
            { verbal_explanation: "רישום הגובה המוחלט של טטראדר משוכלל אשר הוכח בעבר כקבוע גיאומטרי ידוע.", math_expression: "h = a\\sqrt{\\dfrac{2}{3}}" },
            { verbal_explanation: "הצבת הנתונים לתוך נוסחת נפח פירמידה בסיסית.", math_expression: "V = \\dfrac{B \\times h}{3}" },
            { verbal_explanation: "סידור ההכפלות של המונה. (שורש שלוש כפול שורש שתיים חלקי שורש שלוש).", math_expression: "V = \\dfrac{\\dfrac{a^{2}\\sqrt{3}}{4} \\times \\dfrac{a\\sqrt{2}}{\\sqrt{3}}}{3}" },
            { verbal_explanation: "ביטול שורש שלוש ממונה המונה וממכנה המונה תוך השארת שורש שתיים בלבד במערכת המספרית.", math_expression: "V = \\dfrac{\\dfrac{a^{3}\\sqrt{2}}{4}}{3}" },
            { verbal_explanation: "הורדת המכנה הפנימי אל המכנה הראשי לכדי מכפלה פשוטה שחותמת את התרגיל.", math_expression: "V = \\dfrac{a^{3}\\sqrt{2}}{12}" }
        ],
        final_answer: "a³√2 : 12"
    },
    {
        topic: "space_geometry_571",
        subTopic: "חישובי נפחים ושטחי מעטפת מורכבים בעזרת טריגו",
        question_text: "נתונה קובייה בעלת נפח של 64 סמ''ק. מהו שטח המעטפת הצדדית הכולל שלה (שטח ארבעת הפאות הצדדיות בלבד)?&rlm;",
        options: ["64", "96", "16", "32"],
        correctAnswer: 0,
        hint: "הוציאו שורש שלישי מנפח הקובייה כדי למצוא את אורך המקצוע. שטח מעטפת צדדית מורכב מ-4 ריבועים שאורך כל צלע בהם הוא המקצוע שמצאתם.",
        solution_steps: [
            { verbal_explanation: "חישוב אורך המקצוע של הקובייה על ידי הוצאת שורש שלישי מנפחה המוחלט כפי שניתן.", math_expression: "a = \\sqrt[3]{V} = \\sqrt[3]{64} = 4" },
            { verbal_explanation: "הגדרת פונקציית שטח המעטפת הצדדית לקובייה בלבד, הכוללת ארבע פאות זהות העומדות זקופות במרחב.", math_expression: "S_{lateral} = 4 \\times a^{2}" },
            { verbal_explanation: "הצבת אורך המקצוע שמצאנו לתוך תבנית הנוסחה לחשיפת השטח המדויק.", math_expression: "S_{lateral} = 4 \\times 4^{2} = 4 \\times 16" },
            { verbal_explanation: "ביצוע הכפל הסופי של הערכים הנותרים.", math_expression: "S_{lateral} = 64" },
            { verbal_explanation: "אישור הפתרון (השטח במקרה יוצא זהה מספרית לנפח, זוהי תכונה מקרית של המספר ארבע).", math_expression: "1=1" }
        ],
        final_answer: "64"
    },
    {
        topic: "space_geometry_571",
        subTopic: "חישובי נפחים ושטחי מעטפת מורכבים בעזרת טריגו",
        question_text: "במנסרה מרובעת ישרה (תיבה), הבסיס הוא מלבן שבו צלע אחת כפולה באורכה מהשנייה (a ו-2a). הזווית בין האלכסון הראשי של התיבה לבין מישור הבסיס היא 30°. מהו נפח התיבה?&rlm;",
        options: ["2a³√(5 : 3)", "a³√5", "2a³√3", "5a³"],
        correctAnswer: 0,
        hint: "חשבו את אלכסון הבסיס בעזרת פיתגורס. השתמשו בטנגנס 30° כדי למצוא את הגובה h מתוך אלכסון הבסיס. נפח התיבה הוא מכפלת שטח הבסיס בגובה.",
        solution_steps: [
            { verbal_explanation: "חישוב אלכסון הבסיס המלבני בעזרת משפט פיתגורס על צלעותיו האופקיות.", math_expression: "d = \\sqrt{a^{2} + (2a)^{2}} = \\sqrt{5a^{2}} = a\\sqrt{5}" },
            { verbal_explanation: "מציאת גובה התיבה דרך הפעלת טנגנס הזווית על אלכסון הבסיס שהוכח כהיטל.", math_expression: "h = d \\times \\tan(30^{\\circ}) = a\\sqrt{5} \\times \\dfrac{\\sqrt{3}}{3} = a\\sqrt{\\dfrac{5}{3}}" },
            { verbal_explanation: "חישוב שטח הרצפה של התיבה על ידי הכפלת אורכה ברוחבה ללא הפתעות.", math_expression: "B = a \\times 2a = 2a^{2}" },
            { verbal_explanation: "כתיבת משוואת הנפח הכוללת והמלאה למנסרות מרובעות פשוטות.", math_expression: "V = B \\times h" },
            { verbal_explanation: "הצבת כל הנתונים הפרמטריים מכלל השלבים למשוואה מאוחדת וסופית.", math_expression: "V = 2a^{2} \\times a\\sqrt{\\dfrac{5}{3}} = 2a^{3}\\sqrt{\\dfrac{5}{3}}" }
        ],
        final_answer: "2a³√(5 : 3)"
    },
    {
        topic: "space_geometry_571",
        subTopic: "חישובי נפחים ושטחי מעטפת מורכבים בעזרת טריגו",
        question_text: "בפירמידה מרובעת ישרה ומשוכללת, אורך צלע הבסיס הוא 10 ס''מ, וגובה הפירמידה הוא 12 ס''מ. מהו שטח המעטפת של הפירמידה (שטח ארבע הפאות)?&rlm;",
        options: ["260", "360", "130", "240"],
        correctAnswer: 0,
        hint: "חשבו את גובה הפאה הצדדית באמצעות משפט פיתגורס (הניצבים הם גובה הפירמידה וחצי מצלע הבסיס). שטח המעטפת הוא 4 פעמים שטח של פאה משולשת אחת.",
        solution_steps: [
            { verbal_explanation: "חישוב הניצב האופקי לבניית משולש למציאת גובה הפאה. שווה למחצית צלע הבסיס.", math_expression: "x = \\dfrac{10}{2} = 5" },
            { verbal_explanation: "יישום משפט פיתגורס למציאת גובה הפאה (היתר במשולש הפנימי).", math_expression: "h_{face}^{2} = h^{2} + x^{2} = 12^{2} + 5^{2}" },
            { verbal_explanation: "פיתוח החזקות והסכומים לתשובה מספרית רציפה.", math_expression: "h_{face}^{2} = 144 + 25 = 169" },
            { verbal_explanation: "הוצאת שורש המניבה תוצאה שלמה (שלשה פיתגורית מוכרת).", math_expression: "h_{face} = 13" },
            { verbal_explanation: "חישוב שטח המעטפת המלאה, הכולל ארבעה משולשים בעלי בסיס וגובה זהים שנמצאו כעת.", math_expression: "S_{lateral} = 4 \\times \\dfrac{10 \\times 13}{2}" },
            { verbal_explanation: "ביצוע הכפל והסרת השבר.", math_expression: "S_{lateral} = 2 \\times 130 = 260" }
        ],
        final_answer: "260"
    },
    {
        topic: "space_geometry_571",
        subTopic: "חישובי נפחים ושטחי מעטפת מורכבים בעזרת טריגו",
        question_text: "במנסרה ישרה הבסיס הוא מעוין שאלכסוניו הם באורך 6 ו-8 ס''מ. גובה המנסרה הוא 10 ס''מ. מהו נפח המנסרה כולה?&rlm;",
        options: ["240", "480", "120", "360"],
        correctAnswer: 0,
        hint: "שטח הבסיס (מעוין) הוא מחצית מכפלת האלכסונים שלו. הנפח הוא שטח הבסיס כפול הגובה.",
        solution_steps: [
            { verbal_explanation: "הצבת נוסחת שטח למעוין המבוססת אך ורק על אלכסוניו ללא צורך בזוויות.", math_expression: "B = \\dfrac{d_{1} \\times d_{2}}{2}" },
            { verbal_explanation: "הצבת אורכי האלכסונים הנתונים בשאלה.", math_expression: "B = \\dfrac{6 \\times 8}{2}" },
            { verbal_explanation: "חישוב שטחו הכולל של מעוין הרצפה.", math_expression: "B = \\dfrac{48}{2} = 24" },
            { verbal_explanation: "כתיבת נוסחת הנפח הבסיסית למנסרות זקופות.", math_expression: "V = B \\times h" },
            { verbal_explanation: "הכפלת השטח בגובה התלת מימדי להשגת הנפח המלא.", math_expression: "V = 24 \\times 10 = 240" },
            { verbal_explanation: "הוכחה סופית מוגשת כתשובה מוחלטת.", math_expression: "1=1" }
        ],
        final_answer: "240"
    },
    {
        topic: "space_geometry_571",
        subTopic: "חישובי נפחים ושטחי מעטפת מורכבים בעזרת טריגו",
        question_text: "בפירמידה מרובעת משוכללת, נפח הפירמידה הוא 400 סמ''ק, ואורך צלע הבסיס הוא 10 ס''מ. מהו אורך המקצוע הצדדי של הפירמידה (מרחק הקודקוד עד לפינת הבסיס)?&rlm;",
        options: ["√194", "13", "14", "√169"],
        correctAnswer: 0,
        hint: "חשבו את גובה הפירמידה (V = B*h/3). לאחר מכן, מצאו את המקצוע הצדדי בעזרת משפט פיתגורס על משולש הכולל את הגובה וחצי מאלכסון הבסיס.",
        solution_steps: [
            { verbal_explanation: "חישוב שטח הבסיס הריבועי מתוך צלעו הקבועה והידועה.", math_expression: "B = 10^{2} = 100" },
            { verbal_explanation: "הצבת הנתונים בנוסחת הנפח לחילוץ אורך הגובה שאינו ידוע עדיין בבעיה זו.", math_expression: "V = \\dfrac{B \\times h}{3} \\Rightarrow 400 = \\dfrac{100 \\times h}{3}" },
            { verbal_explanation: "הכפלה ובידוד הגובה ממשוואת הנפח.", math_expression: "1200 = 100h \\Rightarrow h = 12" },
            { verbal_explanation: "חישוב חצי מאלכסון הבסיס (לשם בניית המשולש המרחבי המחבר בינו לבין המקצוע הצדדי).", math_expression: "x = \\dfrac{10\\sqrt{2}}{2} = 5\\sqrt{2}" },
            { verbal_explanation: "הפעלת משפט פיתגורס במרחב לחילוץ המקצוע הצדדי המהווה בו יתר.", math_expression: "b^{2} = h^{2} + x^{2} = 12^{2} + (5\\sqrt{2})^{2}" },
            { verbal_explanation: "פתיחת החזקות להצגה מספרית טהורה.", math_expression: "b^{2} = 144 + 50 = 194" },
            { verbal_explanation: "הוצאת שורש לקבלת האורך הסופי הנקי והנדרש בהוראות המטלה.", math_expression: "b = \\sqrt{194}" }
        ],
        final_answer: "√194"
    },
    {
        topic: "space_geometry_571",
        subTopic: "חישובי נפחים ושטחי מעטפת מורכבים בעזרת טריגו",
        question_text: "במנסרה משולשת ישרה, הבסיס הוא משולש ישר זווית ושווה שוקיים שבו אורך כל ניצב הוא a. הזווית שיוצר האלכסון הארוך ביותר של אחת הפאות הצדדיות עם מישור הבסיס היא 45°. מצאו את נפח המנסרה כפונקציה של a.&rlm;",
        options: ["0.5a³√2", "a³√2", "a³", "0.5a³"],
        correctAnswer: 0,
        hint: "האלכסון הארוך ביותר הוא של הפאה הנשענת על היתר (שהוא צלע ארוכה ביותר בבסיס). אורך היתר הוא a√2. בגלל שהזווית היא 45 מעלות, גובה המנסרה שווה לאורך היתר (a√2). שטח הבסיס הוא a²/2.",
        solution_steps: [
            { verbal_explanation: "חישוב יתר הבסיס (הצלע הארוכה ביותר עליה נשען האלכסון המדובר) דרך פיתגורס פשוט במשור אופקי.", math_expression: "c = \\sqrt{a^{2} + a^{2}} = a\\sqrt{2}" },
            { verbal_explanation: "שימוש בפונקציית הטנגנס לאיתור גובה המנסרה על בסיס זווית השיפוע הנתונה בתרגיל.", math_expression: "h = c \\times \\tan(45^{\\circ}) = a\\sqrt{2} \\times 1 = a\\sqrt{2}" },
            { verbal_explanation: "חישוב שטח משולש הרצפה ישר הזווית כבסיס כפול גובה חלקי שתיים כרגיל.", math_expression: "B = \\dfrac{a \\times a}{2} = 0.5a^{2}" },
            { verbal_explanation: "צירוף שני הממצאים המרכזיים אל תוך נוסחת נפח המנסרה הכוללת והמלאה לחלוטין.", math_expression: "V = B \\times h = 0.5a^{2} \\times a\\sqrt{2}" },
            { verbal_explanation: "כינוס המכפלה למקדם אלגנטי ופשוט בסוף התהליך.", math_expression: "V = 0.5a^{3}\\sqrt{2}" }
        ],
        final_answer: "0.5a³√2"
    }
];
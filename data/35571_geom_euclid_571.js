const questionsDB = [
    // ==========================================
    // תת נושא 1: משולשים - משפטים מתקדמים (מפגש תיכונים, גבהים, חוצי זווית) (10 שאלות)
    // ==========================================

    {
        topic: "euclidean_geometry_571",
        subTopic: "משולשים - משפטים מתקדמים (מפגש תיכונים, גבהים, חוצי זווית)",
        question_text: "במשולש ABC מועברים התיכונים AD ו-CE הנפגשים בנקודה M. נתון כי אורך התיכון AD הוא 12 ס''מ, ואורך התיכון CE הוא 9 ס''מ. חשבו את אורך הקטע AM ואת אורך הקטע ME.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='100,20 40,130 160,130' fill='none' stroke='#3b82f6' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='130' stroke='#ef4444' stroke-width='1.5'/><line x1='160' y1='130' x2='70' y2='75' stroke='#ef4444' stroke-width='1.5'/><circle cx='100' cy='93.3' r='4' fill='#1e293b'/><text x='110' y='95' font-size='12' font-family='Arial'>M</text><text x='95' y='15' font-size='12' font-family='Arial'>A</text><text x='25' y='140' font-size='12' font-family='Arial'>B</text><text x='165' y='140' font-size='12' font-family='Arial'>C</text><text x='95' y='145' font-size='12' font-family='Arial'>D</text><text x='55' y='75' font-size='12' font-family='Arial'>E</text></svg></div>",
        options: ["AM = 8, ME = 3", "AM = 6, ME = 4.5", "AM = 4, ME = 6", "AM = 8, ME = 6"],
        correctAnswer: 0,
        hint: "נקודת מפגש התיכונים במשולש (מרכז הכובד) מחלקת כל תיכון ביחס של 2:1, כך שהחלק הקרוב לקודקוד גדול פי 2 מהחלק הקרוב לצלע.",
        solution_steps: [
            { verbal_explanation: "ציון משפט מפגש התיכונים: נקודת המפגש מחלקת את התיכון ביחס של שתיים לאחת החל מהקודקוד.", math_expression: "\\dfrac{AM}{MD} = \\dfrac{2}{1}" },
            { verbal_explanation: "חלוקת התיכון השלם לשלושה חלקים שווים כדי למצוא את אורך החלק הבודד.", math_expression: "AD = 12 \\Rightarrow \\dfrac{12}{3} = 4" },
            { verbal_explanation: "הקטע הקרוב לקודקוד מורכב משני חלקים כאלו.", math_expression: "AM = 2 \\times 4 = 8" },
            { verbal_explanation: "יישום המשפט על התיכון השני במשולש.", math_expression: "\\dfrac{CM}{ME} = \\dfrac{2}{1}" },
            { verbal_explanation: "חלוקת התיכון השני לשלושה חלקים שווים.", math_expression: "CE = 9 \\Rightarrow \\dfrac{9}{3} = 3" },
            { verbal_explanation: "הקטע הקרוב לצלע מורכב מחלק יחסי אחד בלבד.", math_expression: "ME = 1 \\times 3 = 3" }
        ],
        final_answer: "AM = 8, ME = 3"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "משולשים - משפטים מתקדמים (מפגש תיכונים, גבהים, חוצי זווית)",
        question_text: "במשולש ABC מעבירים את חוצה הזווית AD לזווית A. נתון: אורך הצלע AB הוא 10 ס''מ, אורך הצלע AC הוא 15 ס''מ, ואורך הצלע BC כולה הוא 20 ס''מ. חשבו את אורכי הקטעים BD ו-DC.&rlm;",
        options: ["BD = 8, DC = 12", "BD = 10, DC = 10", "BD = 12, DC = 8", "BD = 7.5, DC = 12.5"],
        correctAnswer: 0,
        hint: "לפי משפט חוצה הזווית, יחס הצלעות הכולאות את הזווית שווה ליחס הקטעים שאליהם מחולקת הצלע שממול. כלומר AB : AC = BD : DC.",
        solution_steps: [
            { verbal_explanation: "כתיבת היחס הנובע ממשפט חוצה הזווית הפנימית במשולש.", math_expression: "\\dfrac{AB}{AC} = \\dfrac{BD}{DC}" },
            { verbal_explanation: "הצבת הנתונים המספריים של שוקי המשולש ליצירת היחס.", math_expression: "\\dfrac{10}{15} = \\dfrac{BD}{DC}" },
            { verbal_explanation: "צמצום השבר כדי לקבל את יחס החלוקה המפושט והנקי.", math_expression: "\\dfrac{2}{3} = \\dfrac{BD}{DC}" },
            { verbal_explanation: "הגדרת הקטעים על בסיס משתנה עזר המייצג יחידת יחס אחת.", math_expression: "BD = 2x \\quad , \\quad DC = 3x" },
            { verbal_explanation: "בניית משוואה לסכום הקטעים המרכיבים את הצלע השלמה.", math_expression: "2x + 3x = 20" },
            { verbal_explanation: "פתרון המשוואה לחילוץ המשתנה.", math_expression: "5x = 20 \\Rightarrow x = 4" },
            { verbal_explanation: "הצבת המשתנה בחזרה לכל קטע בנפרד למציאת אורכו הפיזי.", math_expression: "BD = 2 \\times 4 = 8 \\quad , \\quad DC = 3 \\times 4 = 12" }
        ],
        final_answer: "BD = 8, DC = 12"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "משולשים - משפטים מתקדמים (מפגש תיכונים, גבהים, חוצי זווית)",
        question_text: "במשולש ישר זווית (זווית C היא 90°), אורך היתר AB הוא 26 ס''מ. הנקודה O היא מרכז המעגל החוסם את המשולש. מהו המרחק מקודקוד C לנקודה O?&rlm;",
        options: ["13", "26", "6.5", "10"],
        correctAnswer: 0,
        hint: "מרכז המעגל החוסם משולש ישר זווית נמצא בדיוק באמצע היתר. המרחק מכל קודקוד למרכז המעגל החוסם שווה לרדיוס.",
        solution_steps: [
            { verbal_explanation: "ציון משפט גיאומטרי מרכזי: במשולש ישר זווית היתר משמש כקוטר המעגל החוסם.", math_expression: "\\angle C = 90^{\\circ} \\Rightarrow 2R = AB" },
            { verbal_explanation: "חישוב הרדיוס של המעגל החוסם על ידי חלוקת היתר בשתיים.", math_expression: "R = \\dfrac{26}{2} = 13" },
            { verbal_explanation: "מרכז המעגל החוסם ממוקם בדיוק באמצע היתר.", math_expression: "AO = OB = 13" },
            { verbal_explanation: "הקטע המחבר את הקודקוד הישר לאמצע היתר שווה למחצית היתר (או מהווה רדיוס נוסף).", math_expression: "CO = R" },
            { verbal_explanation: "הגעה לתשובה המדויקת.", math_expression: "CO = 13" }
        ],
        final_answer: "13"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "משולשים - משפטים מתקדמים (מפגש תיכונים, גבהים, חוצי זווית)",
        question_text: "במשולש חד-זוויות ABC מעבירים את הגבהים AD ו-BE הנפגשים בנקודה H. נתון: זווית A שווה 50°, זווית B שווה 60°. חשבו את גודל הזווית \\( \\angle AHB \\).&rlm;",
        options: ["110°", "70°", "120°", "140°"],
        correctAnswer: 0,
        hint: "במרובע CDHE יש שתי זוויות ישרות. חשבו תחילה את זווית C, ואז מצאו את הזוויות במרובע. הזווית המבוקשת קודקודית לזווית DHE.",
        solution_steps: [
            { verbal_explanation: "מציאת הזווית השלישית במשולש השלם על פי סכום זוויות.", math_expression: "\\angle C = 180^{\\circ} - 50^{\\circ} - 60^{\\circ} = 70^{\\circ}" },
            { verbal_explanation: "בחינת המרובע שנוצר מנקודת המפגש והגבהים. הגבהים יוצרים זוויות ישרות.", math_expression: "\\angle CDH = 90^{\\circ} \\quad , \\quad \\angle CEH = 90^{\\circ}" },
            { verbal_explanation: "סכום הזוויות במרובע הוא 360 מעלות. נחשב את הזווית הפנימית במפגש הגבהים.", math_expression: "\\angle DHE = 360^{\\circ} - 90^{\\circ} - 90^{\\circ} - 70^{\\circ}" },
            { verbal_explanation: "ביצוע פעולות החיסור.", math_expression: "\\angle DHE = 110^{\\circ}" },
            { verbal_explanation: "הזווית המבוקשת היא זווית קודקודית לזווית זו, ולכן שווה לה בגודלה.", math_expression: "\\angle AHB = \\angle DHE" },
            { verbal_explanation: "השלמת ההוכחה הגיאומטרית.", math_expression: "\\angle AHB = 110^{\\circ}" }
        ],
        final_answer: "110°"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "משולשים - משפטים מתקדמים (מפגש תיכונים, גבהים, חוצי זווית)",
        question_text: "במשולש שווה שוקיים ABC, אורך הבסיס BC הוא 12 ס''מ, ואורך השוק הוא 10 ס''מ. הנקודה I היא מרכז המעגל החסום במשולש. מהו רדיוס המעגל החסום?&rlm;",
        options: ["3", "4", "2.5", "2"],
        correctAnswer: 0,
        hint: "העבירו גובה לבסיס (שהוא גם תיכון). חשבו את הגובה בעזרת פיתגורס. השתמשו בנוסחת השטח: שטח המשולש שווה ל-r כפול חצי היקף המשולש.",
        solution_steps: [
            { verbal_explanation: "הורדת גובה לבסיס, החוצה אותו בשל תכונות משולש שווה שוקיים.", math_expression: "BD = \\dfrac{12}{2} = 6" },
            { verbal_explanation: "שימוש במשפט פיתגורס במשולש הישר זווית שנוצר למציאת הגובה.", math_expression: "AD^{2} + 6^{2} = 10^{2}" },
            { verbal_explanation: "חילוץ ופתרון הגובה.", math_expression: "AD = \\sqrt{100 - 36} = \\sqrt{64} = 8" },
            { verbal_explanation: "חישוב שטח המשולש הכולל (מחצית הבסיס כפול הגובה).", math_expression: "S = \\dfrac{12 \\times 8}{2} = 48" },
            { verbal_explanation: "חישוב מחצית מהיקף המשולש השלם.", math_expression: "p = \\dfrac{10 + 10 + 12}{2} = 16" },
            { verbal_explanation: "שימוש בנוסחה המקשרת בין שטח, מחצית היקף ורדיוס מעגל חסום.", math_expression: "S = p \\times r" },
            { verbal_explanation: "הצבת הנתונים וחילוץ הרדיוס המבוקש אלגברית.", math_expression: "48 = 16 \\times r \\Rightarrow r = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "משולשים - משפטים מתקדמים (מפגש תיכונים, גבהים, חוצי זווית)",
        question_text: "במשולש ABC מפגש התיכונים מסומן ב-M. שטח המשולש BMC הוא 15 סמ''ר. מהו שטחו של המשולש כולו ABC?&rlm;",
        options: ["45", "30", "60", "22.5"],
        correctAnswer: 0,
        hint: "שלושת התיכונים מחלקים את המשולש ל-6 משולשים קטנים שווי שטח. המשולש BMC מורכב מ-2 מתוך 6 המשולשים הללו.",
        solution_steps: [
            { verbal_explanation: "הבנת משפט גיאומטרי הקובע כי ששת המשולשים שנוצרים ממפגש התיכונים שווי שטח זה לזה.", math_expression: "S_{1} = \\dfrac{S_{\\triangle ABC}}{6}" },
            { verbal_explanation: "המשולש התחתון המורכב מצלע הבסיס ונקודת המפגש מכיל בדיוק שני משולשים קטנים כאלו.", math_expression: "S_{\\triangle BMC} = 2 \\times S_{1}" },
            { verbal_explanation: "הצבת השטח הנתון במשוואה למציאת שטח יחידה אחת.", math_expression: "15 = 2 \\times S_{1} \\Rightarrow S_{1} = 7.5" },
            { verbal_explanation: "הכפלת שטח היחידה בשש כדי להגיע לשטחו הכולל של המשולש הגדול.", math_expression: "S_{\\triangle ABC} = 6 \\times 7.5" },
            { verbal_explanation: "חישוב המכפלה לתוצאה סופית.", math_expression: "S_{\\triangle ABC} = 45" }
        ],
        final_answer: "45"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "משולשים - משפטים מתקדמים (מפגש תיכונים, גבהים, חוצי זווית)",
        question_text: "במשולש ישר זווית ABC (זווית C ישרה), הניצב AC באורך 6 ס''מ והניצב BC באורך 8 ס''מ. מעבירים חוצה זווית מ-C ליתר AB וחותכים אותו בנקודה D. מהו היחס בין אורך AD לאורך DB?&rlm;",
        options: ["3 : 4", "1 : 1", "9 : 16", "1 : 2"],
        correctAnswer: 0,
        hint: "משפט חוצה הזווית קובע שהיחס בין חלקי הצלע הנגדית שווה ליחס בין שתי הצלעות הכולאות את הזווית.",
        solution_steps: [
            { verbal_explanation: "כתיבת היחס הנובע ישירות ממשפט חוצה הזווית הפנימית במשולש.", math_expression: "\\dfrac{AD}{DB} = \\dfrac{AC}{BC}" },
            { verbal_explanation: "הצבת אורכי הניצבים הנתונים אל תוך משוואת היחס.", math_expression: "\\dfrac{AD}{DB} = \\dfrac{6}{8}" },
            { verbal_explanation: "צמצום השבר לקבלת היחס הנקי והפשוט ביותר בחלוקה לשתיים.", math_expression: "\\dfrac{AD}{DB} = \\dfrac{3}{4}" },
            { verbal_explanation: "המרה למבנה כתיבה רגיל המייצג יחס מתמטי.", math_expression: "3 : 4" },
            { verbal_explanation: "אישור.", math_expression: "1=1" }
        ],
        final_answer: "3 : 4"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "משולשים - משפטים מתקדמים (מפגש תיכונים, גבהים, חוצי זווית)",
        question_text: "הנקודה O היא מרכז המעגל החוסם משולש שווה צלעות ABC. איזה מבין המשפטים הבאים אינו נכון לגבי הנקודה O במקרה מיוחד זה?&rlm;",
        options: ["הנקודה O נמצאת מחוץ למשולש", "היא גם מפגש התיכונים", "היא גם מפגש חוצי הזוויות", "היא גם מפגש הגבהים"],
        correctAnswer: 0,
        hint: "במשולש שווה צלעות יש סימטריה מוחלטת: גובה, תיכון, חוצה זווית ואנך אמצעי לכל צלע מתלכדים לישר אחד ולנקודה אחת פנימית.",
        solution_steps: [
            { verbal_explanation: "בחינת תכונותיו של משולש שווה צלעות מבחינת סימטריה גיאומטרית.", math_expression: "AB = BC = AC" },
            { verbal_explanation: "במשולש כזה, הקטעים המיוחדים מתלכדים לישרים זהים לחלוטין.", math_expression: "h_{a} \\equiv m_{a} \\equiv l_{a}" },
            { verbal_explanation: "כתוצאה מכך, כל נקודות המפגש המיוחדות של המשולש מתאחדות לנקודה אחת מרכזית.", math_expression: "O \\equiv M \\equiv H" },
            { verbal_explanation: "במשולש חדי-זוויות (60 מעלות בכל קודקוד), המרכז נמצא תמיד בתוך המשולש.", math_expression: "\\alpha < 90^{\\circ}" },
            { verbal_explanation: "לכן הטענה שהנקודה נמצאת מחוץ למשולש היא שקרית ואינה נכונה.", math_expression: "0=0" }
        ],
        final_answer: "הנקודה O נמצאת מחוץ למשולש"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "משולשים - משפטים מתקדמים (מפגש תיכונים, גבהים, חוצי זווית)",
        question_text: "במשולש ABC, AD הוא תיכון ו-CE הוא תיכון נוסף הנחתכים ב-M. נתון כי שטח המשולש AME הוא 4 סמ''ר. מהו שטח המשולש CMD?&rlm;",
        options: ["4", "8", "2", "6"],
        correctAnswer: 0,
        hint: "מפגש התיכונים מחלק את המשולש הגדול ל-6 משולשים קטנים שווי שטח. לכן, שטחי כל המשולשים הקטנים היוצאים מהמרכז שווים.",
        solution_steps: [
            { verbal_explanation: "העלאת המשפט העוסק בחלוקת שטחים על ידי שלושת תיכוני המשולש.", math_expression: "S_{1} = S_{2} = S_{3} = S_{4} = S_{5} = S_{6}" },
            { verbal_explanation: "סימון שטח המשולש הקטן הראשון שניתן בנתונים הגיאומטריים.", math_expression: "S_{\\triangle AME} = 4" },
            { verbal_explanation: "הקשה כי כל משולש פנימי הנוצר מחיתוך התיכונים שווה בגודלו.", math_expression: "S_{i} = 4" },
            { verbal_explanation: "משולש CMD הוא אחד מששת המשולשים הללו, לכן שטחו זהה ומוחלט.", math_expression: "S_{\\triangle CMD} = S_{i}" },
            { verbal_explanation: "הצבת הערך המספרי שנקבע.", math_expression: "S_{\\triangle CMD} = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "משולשים - משפטים מתקדמים (מפגש תיכונים, גבהים, חוצי זווית)",
        question_text: "במשולש שווה שוקיים ABC (כאשר AB=AC), זווית הבסיס היא 75°. M היא נקודת מפגש הגבהים של המשולש. מהו גודל הזווית \\( \\angle BMC \\) הנוצרת בין הגבהים לשוקיים?&rlm;",
        options: ["150°", "105°", "135°", "120°"],
        correctAnswer: 0,
        hint: "חשבו את זווית הראש A. הזווית בין הגבהים קשורה לזווית הראש דרך המרובע שנוצר בעזרת זוויות ישרות בסמוך אליה.",
        solution_steps: [
            { verbal_explanation: "חישוב זווית הראש של המשולש מתוך סכום הזוויות הקלאסי.", math_expression: "\\angle A = 180^{\\circ} - 2 \\times 75^{\\circ} = 30^{\\circ}" },
            { verbal_explanation: "הגבהים לשוקיים יוצרים מרובע עם קודקוד הראש ועם שתי זוויות ישרות על השוקיים.", math_expression: "\\angle E = 90^{\\circ} \\quad , \\quad \\angle D = 90^{\\circ}" },
            { verbal_explanation: "סכום הזוויות במרובע הוא 360 מעלות. לכן סכום שתי הזוויות הנגדיות הנותרות הוא 180.", math_expression: "\\angle EMD = 180^{\\circ} - \\angle A" },
            { verbal_explanation: "הצבת זווית הראש במשוואה.", math_expression: "\\angle EMD = 180^{\\circ} - 30^{\\circ} = 150^{\\circ}" },
            { verbal_explanation: "הזווית המבוקשת קודקודית לזווית זו במפגש הגבהים, ולכן שווה לה.", math_expression: "\\angle BMC = \\angle EMD" },
            { verbal_explanation: "הגעה לתשובה המדויקת.", math_expression: "\\angle BMC = 150^{\\circ}" }
        ],
        final_answer: "150°"
    },

    // ==========================================
    // תת נושא 2: מעגלים - זווית בין שני משיקים, פרופורציה בין משיק לחותך (10 שאלות)
    // ==========================================

    {
        topic: "euclidean_geometry_571",
        subTopic: "מעגלים - זווית בין שני משיקים, פרופורציה בין משיק לחותך",
        question_text: "מנקודה P מחוץ למעגל יוצאים משיק PA (הנוגע ב-A) וחותך החותך את המעגל בנקודות B ו-C (כך ש-B קרובה יותר). אורך המשיק PA הוא 12 ס''מ. הקטע הפנימי BC הוא 10 ס''מ. מהו אורך הקטע PB?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='130' cy='75' r='50' fill='none' stroke='#94a3b8' stroke-width='2'/><line x1='10' y1='10' x2='97' y2='37' stroke='#ef4444' stroke-width='2'/><line x1='10' y1='10' x2='175' y2='96' stroke='#3b82f6' stroke-width='2'/><circle cx='10' cy='10' r='3' fill='#1e293b'/><circle cx='97' cy='37' r='3' fill='#1e293b'/><circle cx='87' cy='50' r='3' fill='#1e293b'/><circle cx='175' cy='96' r='3' fill='#1e293b'/><text x='0' y='25' font-size='12' font-family='Arial'>P</text><text x='100' y='30' font-size='12' font-family='Arial'>A</text><text x='80' y='65' font-size='12' font-family='Arial'>B</text><text x='180' y='105' font-size='12' font-family='Arial'>C</text></svg></div>",
        options: ["8", "6", "4", "9"],
        correctAnswer: 0,
        hint: "השתמשו במשפט: ריבוע המשיק שווה למכפלת החותך כולו בחלקו החיצוני. סמנו את החלק החיצוני ב-x ופתרו משוואה ריבועית.",
        solution_steps: [
            { verbal_explanation: "כתיבת משפט משיק וחותך למעגל בצורתו האלגברית והמוכרת.", math_expression: "PA^{2} = PB \\times PC" },
            { verbal_explanation: "הגדרת החותך המלא כסכום חלקיו הפנימי והחיצוני.", math_expression: "PC = PB + BC" },
            { verbal_explanation: "הצבת משתנה עזר לחלק החיצוני של החותך להקלת הפתרון.", math_expression: "PB = x" },
            { verbal_explanation: "הצבת הנתונים המספריים והמשתנה לתוך נוסחת המשפט.", math_expression: "12^{2} = x \\times (x + 10)" },
            { verbal_explanation: "פתיחת סוגריים וסידור המשוואה לתבנית של משוואה ריבועית מאופסת.", math_expression: "144 = x^{2} + 10x \\Rightarrow x^{2} + 10x - 144 = 0" },
            { verbal_explanation: "פירוק המשוואה לגורמים באמצעות טרינום מורחב.", math_expression: "(x - 8)(x + 18) = 0" },
            { verbal_explanation: "פסילת הפתרון השלילי מכיוון שמדובר באורך צלע מוחלט בגיאומטריה.", math_expression: "x = 8 \\quad , \\quad x \\neq -18" },
            { verbal_explanation: "המסקנה לאורך הקטע החיצוני.", math_expression: "PB = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מעגלים - זווית בין שני משיקים, פרופורציה בין משיק לחותך",
        question_text: "מנקודה חיצונית למעגל מועברים שני משיקים. הזווית הנוצרת בין שני המשיקים היא 50°. מהו גודלה של הזווית המרכזית הנשענת על הקשת הקטנה המחברת את שתי נקודות ההשקה?&rlm;",
        options: ["130°", "100°", "65°", "25°"],
        correctAnswer: 0,
        hint: "במרובע שנוצר על ידי המשיקים והרדיוסים, יש שתי זוויות ישרות (בנקודת ההשקה). סכום הזוויות הוא 360°, ולכן הזווית המרכזית משלימה את זווית המשיקים ל-180°.",
        solution_steps: [
            { verbal_explanation: "זיהוי תכונת ההשקה: הרדיוס מאונך למשיק בנקודת ההשקה. ולכן נוצרות שתי זוויות ישרות.", math_expression: "\\alpha_{1} = 90^{\\circ} \\quad , \\quad \\alpha_{2} = 90^{\\circ}" },
            { verbal_explanation: "בחינת המרובע הנוצר על ידי המשיקים והרדיוסים למוקד.", math_expression: "\\Sigma = 360^{\\circ}" },
            { verbal_explanation: "הפחתת הזוויות הישרות מותירה אותנו עם השלמה לזווית שטוחה עבור הזוויות הנותרות.", math_expression: "\\angle P + \\angle O = 180^{\\circ}" },
            { verbal_explanation: "הצבת הזווית החיצונית (זווית בין המשיקים) במשוואה הישירה.", math_expression: "50^{\\circ} + \\angle O = 180^{\\circ}" },
            { verbal_explanation: "חיסור להשגת הזווית המרכזית המבוקשת בתרגיל.", math_expression: "\\angle O = 180^{\\circ} - 50^{\\circ}" },
            { verbal_explanation: "קבלת התוצאה המושלמת.", math_expression: "\\angle O = 130^{\\circ}" }
        ],
        final_answer: "130°"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מעגלים - זווית בין שני משיקים, פרופורציה בין משיק לחותך",
        question_text: "מנקודה P יוצאים שני חותכים למעגל. החותך הראשון חותך בנקודות A ו-B. החותך השני חותך ב-C ו-D. נתון: PA = 4, AB = 5, PC = 3. חשבו את אורך הקטע CD.&rlm;",
        options: ["9", "12", "15", "8"],
        correctAnswer: 0,
        hint: "השתמשו במשפט החותכים: מכפלת חותך אחד בחלקו החיצוני שווה למכפלת החותך השני בחלקו החיצוני.",
        solution_steps: [
            { verbal_explanation: "ציון משפט שני חותכים היוצאים מאותה נקודה חיצונית למעגל נתון.", math_expression: "PA \\times PB = PC \\times PD" },
            { verbal_explanation: "חישוב אורך החותך הראשון במלואו על ידי חיבור חלקיו הנתונים.", math_expression: "PB = PA + AB = 4 + 5 = 9" },
            { verbal_explanation: "הצבת הנתונים של החותך הראשון למשוואת המשפט.", math_expression: "4 \\times 9 = 3 \\times PD" },
            { verbal_explanation: "ביצוע הכפל באגף שמאל באופן מיידי.", math_expression: "36 = 3 \\times PD" },
            { verbal_explanation: "חלוקה בשלוש לחילוץ אורכו של החותך השני השלם.", math_expression: "PD = 12" },
            { verbal_explanation: "מציאת אורך החלק הפנימי של החותך על ידי חיסור החלק החיצוני מהשלם.", math_expression: "CD = PD - PC = 12 - 3" },
            { verbal_explanation: "תוצאה סופית ומוחלטת לתרגיל.", math_expression: "CD = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מעגלים - זווית בין שני משיקים, פרופורציה בין משיק לחותך",
        question_text: "משיק ומיתר נפגשים בנקודת השקה. הזווית הכלואה ביניהם היא 40°. מהו גודלה של זווית היקפית הנשענת על אותו מיתר מצידו השני של המעגל?&rlm;",
        options: ["40°", "80°", "20°", "140°"],
        correctAnswer: 0,
        hint: "משפט מרכזי במעגל: זווית הכלואה בין משיק למיתר שווה לזווית ההיקפית הנשענת על הקשת של אותו מיתר מצידו הנגדי.",
        solution_steps: [
            { verbal_explanation: "הזכרת המשפט: הזווית בין משיק למיתר שווה לזווית ההיקפית הנשענת על הקשת שלו.", math_expression: "\\angle Tangent = \\angle Inscribed" },
            { verbal_explanation: "זיהוי נתון הזווית בין המשיק למיתר מתוך הטקסט.", math_expression: "\\angle Tangent = 40^{\\circ}" },
            { verbal_explanation: "הסקת מסקנה ישירה מהמשפט התיאורטי.", math_expression: "\\angle Inscribed = 40^{\\circ}" },
            { verbal_explanation: "סגירת הפתרון הגיאומטרי המידי ללא צורך בחישוב נוסף.", math_expression: "1=1" }
        ],
        final_answer: "40°"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מעגלים - זווית בין שני משיקים, פרופורציה בין משיק לחותך",
        question_text: "מנקודה חיצונית M יוצאים שני משיקים למעגל המשיקים לו בנקודות A ו-B. אורך המשיק MA הוא 15 ס''מ. רדיוס המעגל הוא 8 ס''מ. מהו המרחק מנקודה M למרכז המעגל O?&rlm;",
        options: ["17", "23", "161", "120"],
        correctAnswer: 0,
        hint: "המשולש MAO הוא משולש ישר זווית (כי משיק מאונך לרדיוס בנקודת ההשקה). השתמשו במשפט פיתגורס.",
        solution_steps: [
            { verbal_explanation: "קביעת העובדה הגיאומטרית שהרדיוס מאונך למשיק, היוצרת משולש ישר זווית.", math_expression: "OA \\perp MA \\Rightarrow \\angle OAM = 90^{\\circ}" },
            { verbal_explanation: "הפעלת משפט פיתגורס על המשולש שנוצר, כאשר המרחק למרכז מיוצג כיתר.", math_expression: "MO^{2} = OA^{2} + MA^{2}" },
            { verbal_explanation: "הצבת ערכי הרדיוס והמשיק מתוך הנתונים לתוך המשוואה.", math_expression: "MO^{2} = 8^{2} + 15^{2}" },
            { verbal_explanation: "חישוב הריבועים של שתי הצלעות הקצרות.", math_expression: "MO^{2} = 64 + 225" },
            { verbal_explanation: "סכימת הערכים בצד הימני.", math_expression: "MO^{2} = 289" },
            { verbal_explanation: "הוצאת שורש ריבועי לקבלת המרחק המוחלט מן המרכז.", math_expression: "MO = 17" }
        ],
        final_answer: "17"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מעגלים - זווית בין שני משיקים, פרופורציה בין משיק לחותך",
        question_text: "שני חותכים יוצאים מנקודה P מחוץ למעגל. הראשון חותך ב-A ו-B, ועובר דרך מרכז המעגל. השני חותך ב-C ו-D. נתון: PA = 4, רדיוס R = 5, PC = 6. חשבו את אורך המיתר CD.&rlm;",
        options: ["3.33", "8", "6.66", "10"],
        correctAnswer: 0,
        hint: "החותך הראשון עובר במרכז ולכן AB הוא קוטר. חשבו את PB. השתמשו במשפט החותכים למצוא את PD, ואז חסרו את PC.",
        solution_steps: [
            { verbal_explanation: "חישוב אורך המיתר הפנימי של החותך הראשון, המהווה קוטר בשל מעברו במרכז.", math_expression: "AB = 2 \\times R = 2 \\times 5 = 10" },
            { verbal_explanation: "חישוב אורך החותך הראשון בשלמותו.", math_expression: "PB = PA + AB = 4 + 10 = 14" },
            { verbal_explanation: "הצבת הנתונים במשפט החותכים הכללי בגיאומטריה.", math_expression: "PA \\times PB = PC \\times PD" },
            { verbal_explanation: "הצבת המספרים לתוך המשוואה האלגברית.", math_expression: "4 \\times 14 = 6 \\times PD" },
            { verbal_explanation: "ביצוע פעולת הכפל באגף השמאלי להשגת תוצאה מספרית.", math_expression: "56 = 6 \\times PD" },
            { verbal_explanation: "חלוקה לחילוץ החותך השני בשלמותו (השארת השבר עקב תוצאה לא שלמה).", math_expression: "PD = \\dfrac{56}{6} = \\dfrac{28}{3}" },
            { verbal_explanation: "חישוב אורך המיתר הנותר על ידי חיסור החלק החיצוני מהשלם.", math_expression: "CD = PD - PC = \\dfrac{28}{3} - 6 = \\dfrac{28 - 18}{3} = \\dfrac{10}{3}" },
            { verbal_explanation: "הצגת הפתרון כמספר עשרוני בקירוב התואם לחלופות.", math_expression: "CD \\approx 3.33" }
        ],
        final_answer: "3.33"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מעגלים - זווית בין שני משיקים, פרופורציה בין משיק לחותך",
        question_text: "שני מיתרים AB ו-CD נחתכים בנקודה E בתוך מעגל. נתון: AE = 4, EB = 9, CE = x, ED = x. מצאו את אורך המיתר CD כולו.&rlm;",
        options: ["12", "6", "13", "36"],
        correctAnswer: 0,
        hint: "מכפלת חלקי מיתר אחד שווה למכפלת חלקי המיתר השני. מצאו את x, והכפילו פי 2 כי המיתר CD מורכב מפעמיים x.",
        solution_steps: [
            { verbal_explanation: "ציון משפט המיתרים הנחתכים בתוך מעגל הקובע שוויון מכפלות על הצטלבות.", math_expression: "AE \\times EB = CE \\times ED" },
            { verbal_explanation: "הצבת הערכים הנתונים בשאלה אל תוך המשוואה.", math_expression: "4 \\times 9 = x \\times x" },
            { verbal_explanation: "חישוב המכפלה המספרית וכינוס המשתנה הנעלם לריבוע.", math_expression: "36 = x^{2}" },
            { verbal_explanation: "הוצאת שורש ריבועי למציאת אורך חצי המיתר.", math_expression: "x = 6" },
            { verbal_explanation: "חישוב אורך המיתר השלם על ידי חיבור שני חלקיו הפנימיים.", math_expression: "CD = CE + ED = x + x = 2x" },
            { verbal_explanation: "הצבת המשתנה שמצאנו להגעה לתוצאה הסופית והמוחלטת.", math_expression: "CD = 2 \\times 6 = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מעגלים - זווית בין שני משיקים, פרופורציה בין משיק לחותך",
        question_text: "משולש ישר זווית חסום במעגל. משיק למעגל בנקודה השייכת לאחד הניצבים יוצר זווית של 30° עם אותו ניצב. מהי הזווית הקטנה ביותר במשולש זה?&rlm;",
        options: ["30°", "60°", "45°", "15°"],
        correctAnswer: 0,
        hint: "הזווית בין משיק למיתר שווה לזווית ההיקפית הנשענת על אותו מיתר. לכן קיימת זווית של 30° במשולש. מכיוון שהוא ישר זווית, הזווית השלישית היא 60°.",
        solution_steps: [
            { verbal_explanation: "החלת משפט זווית בין משיק למיתר במעגל. הזווית מועתקת לזווית ההיקפית הפנימית.", math_expression: "\\angle Inscribed = \\angle Tangent = 30^{\\circ}" },
            { verbal_explanation: "הבנה מתוך הנתונים כי המשולש מכיל זווית ישרה מובנית בתוכו כנתון התחלתי.", math_expression: "\\angle Right = 90^{\\circ}" },
            { verbal_explanation: "חישוב הזווית השלישית והאחרונה במשולש באמצעות סכום זוויות קלאסי.", math_expression: "\\angle Third = 180^{\\circ} - 90^{\\circ} - 30^{\\circ}" },
            { verbal_explanation: "פתרון החיסור הפשוט.", math_expression: "\\angle Third = 60^{\\circ}" },
            { verbal_explanation: "השוואה בין כלל זוויות המשולש לאיתור הקטנה ביותר כנדרש.", math_expression: "Min(30^{\\circ}, 60^{\\circ}, 90^{\\circ}) = 30^{\\circ}" }
        ],
        final_answer: "30°"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מעגלים - זווית בין שני משיקים, פרופורציה בין משיק לחותך",
        question_text: "מנקודה A יוצאים משיק AB וחותך ACD, כאשר C קרובה יותר ל-A ועובר דרך מרכז המעגל. אם AB = 8 ס''מ, ו-AC = 4 ס''מ, מהו רדיוס המעגל?&rlm;",
        options: ["6", "4", "8", "5"],
        correctAnswer: 0,
        hint: "השתמשו במשפט המשיק והחותך למצוא את אורך AD. חסרו את AC כדי למצוא את המיתר CD (שהוא קוטר). חלקו בשניים לקבלת הרדיוס.",
        solution_steps: [
            { verbal_explanation: "הצבת משפט משיק וחותך למעגל המקשר בין אורכי הקטעים מבחוץ ומבפנים.", math_expression: "AB^{2} = AC \\times AD" },
            { verbal_explanation: "הצבת הנתונים המספריים שבשאלה אל תוך המשוואה שיצרנו.", math_expression: "8^{2} = 4 \\times AD" },
            { verbal_explanation: "העלאה בריבוע באגף שמאל של המשוואה המייצג את המשיק.", math_expression: "64 = 4 \\times AD" },
            { verbal_explanation: "חילוק בארבע לחילוץ אורך החותך המלא והשלם עד לקצה.", math_expression: "AD = 16" },
            { verbal_explanation: "חישוב המיתר הפנימי המהווה קוטר, על ידי חיסור החלק החיצוני מהשלם.", math_expression: "CD = AD - AC = 16 - 4 = 12" },
            { verbal_explanation: "מאחר והמיתר עובר במרכז הוא קוטר. נחלקו בשתיים לקבלת הרדיוס המבוקש.", math_expression: "R = \\dfrac{CD}{2} = \\dfrac{12}{2} = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מעגלים - זווית בין שני משיקים, פרופורציה בין משיק לחותך",
        question_text: "נתון מעגל ושני משיקים היוצאים מנקודה P ונוגעים במעגל בנקודות M ו-N. הזווית בין המשיק PM למיתר MN היא 70°. מהי זווית המפגש בין המשיקים בנקודה P?&rlm;",
        options: ["40°", "70°", "140°", "20°"],
        correctAnswer: 0,
        hint: "המשולש PMN הוא משולש שווה שוקיים. זווית הבסיס היא 70°. השתמשו בסכום זוויות במשולש למצוא את זווית P.",
        solution_steps: [
            { verbal_explanation: "ציון משפט גיאומטרי ידוע: שני משיקים למעגל היוצאים מאותה נקודה שווים תמיד באורכם.", math_expression: "PM = PN" },
            { verbal_explanation: "הסקת מסקנה כי המשולש שנוצר בין המשיקים למיתר המחבר אותם הוא משולש שווה שוקיים.", math_expression: "\\triangle PMN \\ is \\ Isosceles" },
            { verbal_explanation: "במשולש שווה שוקיים זוויות הבסיס שוות אחת לשנייה.", math_expression: "\\angle PNM = \\angle PMN = 70^{\\circ}" },
            { verbal_explanation: "שימוש בסכום זוויות במשולש כדי למצוא את זווית הראש (זווית המפגש של המשיקים).", math_expression: "\\angle P = 180^{\\circ} - (70^{\\circ} + 70^{\\circ})" },
            { verbal_explanation: "ביצוע החיבור והחיסור להשגת התוצאה המיוחלת.", math_expression: "\\angle P = 180^{\\circ} - 140^{\\circ} = 40^{\\circ}" },
            { verbal_explanation: "הצגת הפתרון הנקי.", math_expression: "40^{\\circ}" }
        ],
        final_answer: "40°"
    },

    // ==========================================
    // תת נושא 3: הוכחות מורכבות של משפטי חפיפה ודמיון (10 שאלות)
    // ==========================================

    {
        topic: "euclidean_geometry_571",
        subTopic: "הוכחות מורכבות של משפטי חפיפה ודמיון",
        question_text: "שני משולשים דומים זה לזה. יחס הדמיון ביניהם הוא 3:4. שטח המשולש הקטן הוא 18 סמ''ר. מהו שטח המשולש הגדול?&rlm;",
        options: ["32", "24", "48", "72"],
        correctAnswer: 0,
        hint: "יחס השטחים של משולשים דומים שווה לריבוע יחס הדמיון ביניהם.",
        solution_steps: [
            { verbal_explanation: "הגדרת יחס הדמיון הקווי בין המשולשים כמקדם אלגברי.", math_expression: "k = \\dfrac{3}{4}" },
            { verbal_explanation: "אזכור משפט יחס השטחים הקובע כי הוא שווה לריבוע יחס הדמיון המקורי.", math_expression: "\\dfrac{S_{1}}{S_{2}} = k^{2}" },
            { verbal_explanation: "חישוב ריבועו של יחס הדמיון.", math_expression: "k^{2} = (\\dfrac{3}{4})^{2} = \\dfrac{9}{16}" },
            { verbal_explanation: "הצבת שטח המשולש הקטן ויחס השטחים למשוואה המרכזית שיצרנו.", math_expression: "\\dfrac{18}{S_{2}} = \\dfrac{9}{16}" },
            { verbal_explanation: "כפל בהצלבה לבידוד הנעלם המייצג את השטח הגדול.", math_expression: "9 \\times S_{2} = 18 \\times 16" },
            { verbal_explanation: "חלוקה בתשע לצורך פתרון המשוואה וקבלת המספר השלם.", math_expression: "S_{2} = 2 \\times 16" },
            { verbal_explanation: "קבלת השטח המבוקש.", math_expression: "S_{2} = 32" }
        ],
        final_answer: "32"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "הוכחות מורכבות של משפטי חפיפה ודמיון",
        question_text: "במשולש ישר זווית מעבירים גובה אל היתר. הגובה מחלק את היתר לשני קטעים באורכים 4 ס''מ ו-9 ס''מ. מהו אורך הגובה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='20,100 180,100 70,20' fill='none' stroke='#3b82f6' stroke-width='2'/><line x1='70' y1='20' x2='70' y2='100' stroke='#ef4444' stroke-dasharray='4,4' stroke-width='2'/><polyline points='60,20 60,30 70,30' fill='none' stroke='#1e293b' stroke-width='1.5'/><polyline points='70,90 80,90 80,100' fill='none' stroke='#1e293b' stroke-width='1.5'/><text x='40' y='115' font-size='12' font-family='Arial'>4</text><text x='120' y='115' font-size='12' font-family='Arial'>9</text><text x='75' y='60' font-size='12' font-family='Arial'>h</text></svg></div>",
        options: ["6", "13", "5", "7.5"],
        correctAnswer: 0,
        hint: "הגובה ליתר במשולש ישר זווית יוצר שני משולשים דומים. ממשפט הדמיון נובע כי הגובה בריבוע שווה למכפלת היטלי הניצבים על היתר (הוא ממוצע הנדסי).",
        solution_steps: [
            { verbal_explanation: "ציון משפט גיאומטרי חשוב לחקירה: הגובה ליתר הוא ממוצע גיאומטרי של חלקי היתר אותם הוא מחלק (נובע ישירות מדמיון משולשים פנימיים).", math_expression: "h^{2} = x \\times y" },
            { verbal_explanation: "הצבת אורכי חלקי היתר הנתונים בתוך נוסחת המשפט.", math_expression: "h^{2} = 4 \\times 9" },
            { verbal_explanation: "ביצוע פעולת הכפל.", math_expression: "h^{2} = 36" },
            { verbal_explanation: "הוצאת שורש ריבועי לקבלת אורך הגובה עצמו (המסלול החיובי נבחר כברירת מחדל).", math_expression: "h = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "הוכחות מורכבות של משפטי חפיפה ודמיון",
        question_text: "בטרפז ABCD אלכסוני הטרפז נחתכים בנקודה O. הבסיס AB הוא 5, והבסיס DC הוא 15. אם שטח המשולש AOB הוא 10, מהו שטח המשולש DOC?&rlm;",
        options: ["90", "30", "60", "150"],
        correctAnswer: 0,
        hint: "המשולשים AOB ו-DOC דומים. מצאו את יחס הדמיון, והעלו אותו בריבוע למציאת יחס השטחים.",
        solution_steps: [
            { verbal_explanation: "זיהוי דמיון המשולשים בעזרת זוויות קודקודיות ומתחלפות בין מקבילים.", math_expression: "\\triangle AOB \\sim \\triangle COD" },
            { verbal_explanation: "חישוב יחס הדמיון הקווי מתוך אורכי הבסיסים התואמים.", math_expression: "k = \\dfrac{AB}{DC} = \\dfrac{5}{15} = \\dfrac{1}{3}" },
            { verbal_explanation: "שימוש במשפט יחס השטחים התואם לריבוע יחס הדמיון.", math_expression: "\\dfrac{S_{1}}{S_{2}} = k^{2} = (\\dfrac{1}{3})^{2} = \\dfrac{1}{9}" },
            { verbal_explanation: "הצבת שטח המשולש הקטן במונה הנוסחה של היחס.", math_expression: "\\dfrac{10}{S_{2}} = \\dfrac{1}{9}" },
            { verbal_explanation: "כפל בהצלבה המניב את הפתרון לשטח הגדול המבוקש.", math_expression: "S_{2} = 10 \\times 9 = 90" }
        ],
        final_answer: "90"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "הוכחות מורכבות של משפטי חפיפה ודמיון",
        question_text: "שני משולשים ישרי זווית דומים. אורך היתר בראשון הוא 10, ובשני 15. אם היקף המשולש הראשון הוא 24, מהו היקף השני?&rlm;",
        options: ["36", "30", "40", "32"],
        correctAnswer: 0,
        hint: "יחס ההיקפים של משולשים דומים שווה בדיוק ליחס הדמיון القווי (היחס בין הצלעות המתאימות, שאינו מועלה בריבוע).",
        solution_steps: [
            { verbal_explanation: "חישוב יחס הדמיון הקווי באמצעות צלעות מתאימות (יתרים במקרה זה).", math_expression: "k = \\dfrac{15}{10} = 1.5" },
            { verbal_explanation: "יישום הכלל הגיאומטרי: יחס ההיקפים שומר על יחס הדמיון הקווי ללא העלאה בריבוע.", math_expression: "\\dfrac{P_{2}}{P_{1}} = k" },
            { verbal_explanation: "הצבת היקף המשולש הקטן ויחס הדמיון ליצירת משוואה פשוטה.", math_expression: "\\dfrac{P_{2}}{24} = 1.5" },
            { verbal_explanation: "הכפלת המשוואה בערך המכנה להשגת ההיקף הגדול המבוקש.", math_expression: "P_{2} = 24 \\times 1.5" },
            { verbal_explanation: "חישוב התוצאה המושלמת.", math_expression: "P_{2} = 36" }
        ],
        final_answer: "36"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "הוכחות מורכבות של משפטי חפיפה ודמיון",
        question_text: "במשולש נתון הועבר קטע אמצעים המחבר את אמצעי שתי צלעות. שטח המשולש הקטן שנוצר למעלה הוא 6 סמ''ר. מהו שטח הטרפז שנוצר מתחתיו?&rlm;",
        options: ["18", "12", "24", "6"],
        correctAnswer: 0,
        hint: "קטע אמצעים יוצר משולש קטן הדומה למשולש הגדול ביחס של 1:2. יחס השטחים הוא ריבוע היחס (1:4).",
        solution_steps: [
            { verbal_explanation: "זיהוי יחס הדמיון בין המשולש הקטן המנותק על ידי קטע האמצעים למשולש הכללי.", math_expression: "k = \\dfrac{1}{2}" },
            { verbal_explanation: "חישוב יחס השטחים כריבוע יחס הדמיון הליניארי שלקטע.", math_expression: "\\dfrac{S_{1}}{S_{2}} = (\\dfrac{1}{2})^{2} = \\dfrac{1}{4}" },
            { verbal_explanation: "מציאת שטח המשולש הגדול כולו על סמך השטח הקטן הנתון להכפלה.", math_expression: "S_{2} = 4 \\times S_{1} = 4 \\times 6 = 24" },
            { verbal_explanation: "הבנה ששטח הטרפז התחתון שווה להפרש השטחים בין המשולשים הללו.", math_expression: "S_{trapezoid} = S_{2} - S_{1}" },
            { verbal_explanation: "ביצוע החיסור לסגירת מעגל החישוב הגיאומטרי.", math_expression: "S_{trapezoid} = 24 - 6 = 18" }
        ],
        final_answer: "18"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "הוכחות מורכבות של משפטי חפיפה ודמיון",
        question_text: "במשולש ABC, חוצה הזווית של C חותך את הצלע AB בנקודה D. נתון כי AC=8, BC=12. אם אורך הקטע AD הוא 4, מהו אורך הצלע כולה AB?&rlm;",
        options: ["10", "6", "12", "14"],
        correctAnswer: 0,
        hint: "משפט חוצה זווית: יחס הצלעות (AC:BC) שווה ליחס הקטעים (AD:DB).",
        solution_steps: [
            { verbal_explanation: "כתיבת המשוואה המייצגת את תכונת חוצה הזווית הפנימית בגיאומטריה.", math_expression: "\\dfrac{AC}{BC} = \\dfrac{AD}{DB}" },
            { verbal_explanation: "הצבת הנתונים המספריים מתוך התרגיל אל תוך הפרופורציה.", math_expression: "\\dfrac{8}{12} = \\dfrac{4}{DB}" },
            { verbal_explanation: "צמצום השבר באגף השמאלי ליחס בסיסי ברור.", math_expression: "\\dfrac{2}{3} = \\dfrac{4}{DB}" },
            { verbal_explanation: "כפל בהצלבה לחילוץ אורך הקטע השני על הצלע הנחצית.", math_expression: "2 \\times DB = 12 \\Rightarrow DB = 6" },
            { verbal_explanation: "חישוב אורך הצלע המלאה על ידי חיבור חלקיה השונים לשלם.", math_expression: "AB = AD + DB = 4 + 6" },
            { verbal_explanation: "הגעה לתוצאה המושלמת.", math_expression: "AB = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "הוכחות מורכבות של משפטי חפיפה ודמיון",
        question_text: "במקבילית ABCD הועבר קטע מנקודה B אל אמצע הצלע הנגדית CD, ונסמנה E. הקטע BE חותך את האלכסון AC בנקודה F. מהו יחס הדמיון בין המשולש EFC למשולש BFA?&rlm;",
        options: ["1:2", "1:1", "1:3", "2:3"],
        correctAnswer: 0,
        hint: "המשולשים דומים לפי ז.ז. הצלע EC שווה לחצי מהצלע CD, ששווה לצלע AB. לכן היחס בין הצלעות המתאימות (EC ל-AB) הוא 1:2.",
        solution_steps: [
            { verbal_explanation: "זיהוי משולשים דומים ('שעון חול') הנוצרים מחיתוך ישרים בין מקבילים.", math_expression: "\\triangle EFC \\sim \\triangle BFA" },
            { verbal_explanation: "הגדרת הצלע העליונה במקבילית כשווה באורכה הפיזי לתחתונה.", math_expression: "CD = AB" },
            { verbal_explanation: "שימוש בנתון הגיאומטרי שנקודה E חוצה בדיוק את הצלע העליונה.", math_expression: "EC = \\dfrac{1}{2}CD = \\dfrac{1}{2}AB" },
            { verbal_explanation: "חישוב יחס הדמיון הקווי על ידי חלוקת הצלעות המתאימות במשולשים הדומים.", math_expression: "k = \\dfrac{EC}{AB}" },
            { verbal_explanation: "הצבת הביטוי להשלמת חישוב היחס במדויק וביטול המשתנה המייצג צלע.", math_expression: "k = \\dfrac{0.5AB}{AB} = \\dfrac{1}{2}" },
            { verbal_explanation: "הצגת יחס הדמיון בצורה המקובלת למענה בטקסט חזותי.", math_expression: "1:2" }
        ],
        final_answer: "1:2"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "הוכחות מורכבות של משפטי חפיפה ודמיון",
        question_text: "במשולש ישר זווית, אורך הניצב האחד הוא 6 והניצב השני הוא 8. מורידים גובה ליתר ומחלקים אותו לשני משולשים קטנים. מהו היחס בין שטחי שני המשולשים הקטנים שנוצרו?&rlm;",
        options: ["9:16", "3:4", "9:25", "16:25"],
        correctAnswer: 0,
        hint: "שני המשולשים הקטנים דומים זה לזה (ודומים לגדול). יחס הדמיון ביניהם הוא כיחס הניצבים המקוריים.",
        solution_steps: [
            { verbal_explanation: "ציון המשפט לפיו הגובה ליתר יוצר שני משולשים הדומים זה לזה במבנם.", math_expression: "\\triangle_{1} \\sim \\triangle_{2}" },
            { verbal_explanation: "יחס הדמיון בין המשולשים הקטנים מיוצג על ידי יחס היתרים שלהם (שהם הניצבים במשולש הגדול).", math_expression: "k = \\dfrac{6}{8}" },
            { verbal_explanation: "צמצום השבר הגיאומטרי להקלת החישוב העתידי המורכב.", math_expression: "k = \\dfrac{3}{4}" },
            { verbal_explanation: "הפעלת משפט יחס השטחים במשולשים דומים (מועלה בריבוע כנדרש).", math_expression: "\\dfrac{S_{1}}{S_{2}} = k^{2} = (\\dfrac{3}{4})^{2}" },
            { verbal_explanation: "ביצוע החזקה למציאת הפתרון הסופי של חלוקת השטחים המדויקת.", math_expression: "\\dfrac{S_{1}}{S_{2}} = \\dfrac{9}{16}" }
        ],
        final_answer: "9:16"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "הוכחות מורכבות של משפטי חפיפה ודמיון",
        question_text: "משולש ABC חופף למשולש DEF. נתון כי אורך התיכון לצלע BC במשולש הראשון הוא 5 ס''מ. מהו אורך התיכון לצלע התואמת EF במשולש השני?&rlm;",
        options: ["5", "10", "2.5", "לא ניתן לדעת מנתונים אלו"],
        correctAnswer: 0,
        hint: "משולשים חופפים זהים לחלוטין. כל קטע מתאים שווה באורכו בדיוק לקטע המקביל לו במשולש החופף.",
        solution_steps: [
            { verbal_explanation: "רישום נתון החפיפה המעיד על זהות מוחלטת במידות הגיאומטריות של המצולעים ללא יוצא מן הכלל.", math_expression: "\\triangle ABC \\cong \\triangle DEF" },
            { verbal_explanation: "בחפיפה, כל גודל פנימי מתאים זהה לחלוטין. התיכון באחד שווה לתיכון בשני ללא שינוי.", math_expression: "m_{BC} = m_{EF}" },
            { verbal_explanation: "הצבת האורך הנתון כהסקת מסקנה פשוטה וישירה.", math_expression: "m_{EF} = 5" },
            { verbal_explanation: "וידוא הפתרון אל מול העקרונות התיאורטיים המחמירים של ההנדסה.", math_expression: "1=1" }
        ],
        final_answer: "5"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "הוכחות מורכבות של משפטי חפיפה ודמיון",
        question_text: "במשולש ישר זווית, אורך ניצב אחד הוא 3 והיתר הוא 5. מורידים גובה מן הזווית הישרה אל היתר. מה אורך היטל הניצב הראשון (שאורכו 3) על היתר?&rlm;",
        options: ["1.8", "3.2", "2.4", "1.5"],
        correctAnswer: 0,
        hint: "ממשפט הדמיון (אוקלידס): ניצב בריבוע שווה למכפלת היתר בהיטל הניצב על היתר.",
        solution_steps: [
            { verbal_explanation: "זיהוי המשפט המקשר בין ניצב, יתר וההיטל שלו עליו, הנובע מדמיון משולשים במרחב ישר זווית.", math_expression: "a^{2} = c \\times a_{proj}" },
            { verbal_explanation: "הצבת הנתונים המספריים אל תוך הנוסחה הקומפקטית שהוכחה כנכונה.", math_expression: "3^{2} = 5 \\times x" },
            { verbal_explanation: "חישוב הריבוע ובידוד המשתנה המבוקש במשוואה אלגברית קלה.", math_expression: "9 = 5x" },
            { verbal_explanation: "חלוקה להשגת הערך המדויק של היטל הניצב (תשע חלקי חמש).", math_expression: "x = \\dfrac{9}{5} = 1.8" },
            { verbal_explanation: "הסבר הושלם.", math_expression: "1.8" }
        ],
        final_answer: "1.8"
    },

    // ==========================================
    // תת נושא 4: מרובעים חסומים וחוסמים מעגל - הוכחות גיאומטריות (10 שאלות)
    // ==========================================

    {
        topic: "euclidean_geometry_571",
        subTopic: "מרובעים חסומים וחוסמים מעגל - הוכחות גיאומטריות",
        question_text: "מרובע ABCD חסום במעגל. נתון כי הזווית A שווה 110°. מהו גודל הזווית הנגדית לה, זווית C?&rlm;",
        options: ["70°", "110°", "55°", "140°"],
        correctAnswer: 0,
        hint: "המשפט המרכזי למרובע חסום קובע שסכום כל זוג זוויות נגדיות במרובע כזה הוא 180 מעלות.",
        solution_steps: [
            { verbal_explanation: "כתיבת המשפט הגיאומטרי העוסק במרובע החסום במעגל, על פיו סכום זוויות נגדיות משלים לזווית שטוחה.", math_expression: "\\angle A + \\angle C = 180^{\\circ}" },
            { verbal_explanation: "הצבת נתון הזווית שסופקה בשאלה במשוואה הפשוטה.", math_expression: "110^{\\circ} + \\angle C = 180^{\\circ}" },
            { verbal_explanation: "ביצוע פעולת חיסור לחילוץ הזווית החסרה והמבוקשת.", math_expression: "\\angle C = 180^{\\circ} - 110^{\\circ}" },
            { verbal_explanation: "הגעה לתשובה חלוטה.", math_expression: "\\angle C = 70^{\\circ}" }
        ],
        final_answer: "70°"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מרובעים חסומים וחוסמים מעגל - הוכחות גיאומטריות",
        question_text: "מרובע ABCD חוסם מעגל. נתון כי אורך צלע AB הוא 8 ס''מ, וצלע CD (הנגדית) היא 10 ס''מ. אורך צלע AD הוא 7 ס''מ. מהו אורך הצלע BC?&rlm;",
        options: ["11", "9", "10", "8"],
        correctAnswer: 0,
        hint: "המשפט למרובע חוסם מעגל קובע שסכום כל זוג צלעות נגדיות שווה לסכום זוג הצלעות הנגדיות האחר. AB + CD = AD + BC.",
        solution_steps: [
            { verbal_explanation: "רישום המשפט הייעודי למרובע החוסם מעגל מכל עבריו המציג שוויון בין סכומי צלעות נגדיות.", math_expression: "AB + CD = AD + BC" },
            { verbal_explanation: "הצבת הנתונים המספריים המסופקים בטקסט במקומותיהם המתאימים במשוואה.", math_expression: "8 + 10 = 7 + BC" },
            { verbal_explanation: "חיבור פשוט של צד אחד של המשוואה לשם כינוס איברים וסכימה.", math_expression: "18 = 7 + BC" },
            { verbal_explanation: "חיסור מהצד השני לבידוד הצלע המבוקשת מכל איבר אחר שנמצא איתה.", math_expression: "BC = 18 - 7" },
            { verbal_explanation: "קבלת פתרון אורך הצלע הנגדית.", math_expression: "BC = 11" }
        ],
        final_answer: "11"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מרובעים חסומים וחוסמים מעגל - הוכחות גיאומטריות",
        question_text: "מרובע ABCD חסום במעגל. מאריכים את הצלע AB מעבר לנקודה B לנקודה E, כך שנוצרת זווית חיצונית \\( \\angle CBE = 80^{\\circ} \\). מהו גודל הזווית הפנימית הנגדית \\( \\angle D \\)?&rlm;",
        options: ["80°", "100°", "40°", "160°"],
        correctAnswer: 0,
        hint: "זווית חיצונית למרובע חסום שווה בדיוק לזווית הפנימית הנגדית לה.",
        solution_steps: [
            { verbal_explanation: "מציאת הזווית הפנימית הצמודה לזווית החיצונית על קו ישר המשלים למאה ושמונים.", math_expression: "\\angle ABC = 180^{\\circ} - \\angle CBE = 180^{\\circ} - 80^{\\circ} = 100^{\\circ}" },
            { verbal_explanation: "שימוש במשפט המרובע החסום בו סכום זוויות נגדיות הוא תמיד זווית שטוחה.", math_expression: "\\angle D + \\angle ABC = 180^{\\circ}" },
            { verbal_explanation: "הצבת הזווית שמצאנו בתוך המשוואה להשגת הזווית הנדרשת.", math_expression: "\\angle D + 100^{\\circ} = 180^{\\circ}" },
            { verbal_explanation: "מסקנה מהירה: הזווית הפנימית הנגדית זהה לחלוטין לזווית החיצונית המקורית.", math_expression: "\\angle D = 80^{\\circ}" }
        ],
        final_answer: "80°"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מרובעים חסומים וחוסמים מעגל - הוכחות גיאומטריות",
        question_text: "טרפז שווה שוקיים חוסם מעגל. קטע האמצעים של הטרפז שווה ל-12 ס''מ. מהו אורך השוק של הטרפז?&rlm;",
        options: ["12", "6", "24", "18"],
        correctAnswer: 0,
        hint: "קטע אמצעים שווה למחצית סכום הבסיסים. הטרפז חוסם מעגל ולכן סכום הבסיסים שווה לסכום השוקיים. היות והוא שווה שוקיים, חלקו בשניים.",
        solution_steps: [
            { verbal_explanation: "הגדרת הקשר שבין קטע האמצעים לסכום בסיסי הטרפז במישור הגיאומטרי.", math_expression: "Mid = \\dfrac{a + b}{2} \\Rightarrow a + b = 2 \\times 12 = 24" },
            { verbal_explanation: "הפעלת תכונת המרובע החוסם מעגל שבו סכום צלעות נגדיות שווה תמיד.", math_expression: "c + d = a + b = 24" },
            { verbal_explanation: "היות והטרפז מוגדר כשווה שוקיים, שתי השוקיים זהות באורכן. נציב משתנה מאוחד.", math_expression: "2 \\times c = 24" },
            { verbal_explanation: "חלוקה בשתיים לבידוד השוק ומציאת אורכה המושלם.", math_expression: "c = 12" },
            { verbal_explanation: "המסקנה היא ששוק הטרפז זהה באורכה לקטע האמצעים במקרה הגיאומטרי הפרטי הזה.", math_expression: "12" }
        ],
        final_answer: "12"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מרובעים חסומים וחוסמים מעגל - הוכחות גיאומטריות",
        question_text: "מעוין שצלעו היא 10 ס''מ חוסם מעגל. מה ההיקף של המרובע, ואיזה תנאי מאפשר בכלל את חסימת המעגל בתוכו?&rlm;",
        options: ["היקף 40. כל מעוין יכול לחסום מעגל.", "היקף 40. רק מעוין עם זוויות ישרות חוסם מעגל.", "היקף 20. כל מעוין חוסם מעגל.", "היקף 100. אין תנאי מיוחד."],
        correctAnswer: 0,
        hint: "במעוין כל הצלעות שוות. סכום זוג אחד של צלעות נגדיות שווה תמיד לסכום הזוג השני. תנאי החסימה מתקיים אוטומטית.",
        solution_steps: [
            { verbal_explanation: "חישוב היקפו של מעוין המתבסס על ארבע צלעות שוות בהגדרתן הבסיסית ביותר.", math_expression: "P = 4 \\times 10 = 40" },
            { verbal_explanation: "בדיקת תנאי החסימה הקפדני למרובע המעיד על חסימות מעגל בו.", math_expression: "10 + 10 = 10 + 10" },
            { verbal_explanation: "המשוואה הנה זהותית תמיד עבור כל מעוין באשר הוא, בשל השוויון בצלעות.", math_expression: "20 = 20" },
            { verbal_explanation: "המסקנה המתבקשת: כל מעוין מקיים את התנאי ויכול לחסום מעגל בחובו.", math_expression: "True" }
        ],
        final_answer: "היקף 40. כל מעוין יכול לחסום מעגל."
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מרובעים חסומים וחוסמים מעגל - הוכחות גיאומטריות",
        question_text: "מרובע ABCD חסום במעגל. אלכסון המרובע AC עובר בדיוק דרך מרכז המעגל. מה ניתן להסיק בוודאות על זוויות המרובע?&rlm;",
        options: ["זווית B וזווית D הן ישרות (90°)", "כל זוויות המרובע הן ישרות (מלבן)", "המרובע הוא דלתון", "האלכסון חוצה את הזוויות A ו-C"],
        correctAnswer: 0,
        hint: "אם האלכסון עובר במרכז המעגל, הוא קוטר. זווית היקפית הנשענת על קוטר שווה תמיד ל-90 מעלות.",
        solution_steps: [
            { verbal_explanation: "זיהוי משמעות ההנחה שהאלכסון עובר במרכז הגיאומטרי של המעגל.", math_expression: "AC = Diameter" },
            { verbal_explanation: "העלאת משפט מעגל יסודי העוסק בזווית היקפית.", math_expression: "\\alpha_{inscribed} = 90^{\\circ}" },
            { verbal_explanation: "היות ושני הקודקודים הנותרים נשענים על אלכסון זה, הזוויות שלהם ישרות ומוחלטות.", math_expression: "\\angle B = 90^{\\circ} \\quad , \\quad \\angle D = 90^{\\circ}" },
            { verbal_explanation: "לא ניתן להסיק דבר על שאר הזוויות מבלי נתונים נוספים, לכן זו המסקנה היחידה והוודאית.", math_expression: "1=1" }
        ],
        final_answer: "זווית B וזווית D הן ישרות (90°)"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מרובעים חסומים וחוסמים מעגל - הוכחות גיאומטריות",
        question_text: "האם ייתכן שטרפז ישר זווית (שאינו מלבן) יהיה חסום במעגל?&rlm;",
        options: ["לא, טרפז חסום חייב להיות שווה שוקיים", "כן, כל טרפז יכול להחסם במעגל", "כן, אם הבסיסים שלו שווים", "לא, אין שום טרפז שיכול להחסם במעגל"],
        correctAnswer: 0,
        hint: "בטרפז חסום, סכום זוויות נגדיות הוא 180. בטרפז כלשהו סכום זוויות סמוכות לשוק הוא 180. לכן טרפז חסום חייב להיות שווה שוקיים. טרפז ישר זווית (שאינו מלבן) לא עומד בזה.",
        solution_steps: [
            { verbal_explanation: "הנחת תנאי לחסימת טרפז במעגל: סכום זוויות נגדיות משלים למאה ושמונים.", math_expression: "\\angle A + \\angle C = 180^{\\circ}" },
            { verbal_explanation: "הנחת תנאי של טרפז באשר הוא המציג סכום זוויות סמוכות לאותה שוק.", math_expression: "\\angle A + \\angle D = 180^{\\circ}" },
            { verbal_explanation: "השוואה בין שתי המשוואות מניבה שוויון בין זוויות הבסיס של הטרפז שלנו.", math_expression: "\\angle C = \\angle D" },
            { verbal_explanation: "טרפז שבו זוויות הבסיס שוות חייב להיות בהגדרתו טרפז שווה שוקיים (לא מלבן במקרה זה).", math_expression: "Isosceles \\ Trapezoid" },
            { verbal_explanation: "טרפז ישר זווית אינו שווה שוקיים ולכן חסימה כזו לא תיתכן במציאות הגיאומטרית.", math_expression: "False" }
        ],
        final_answer: "לא, טרפז חסום חייב להיות שווה שוקיים"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מרובעים חסומים וחוסמים מעגל - הוכחות גיאומטריות",
        question_text: "במרובע ABCD החוסם מעגל נתון: AB = 3x, BC = 2x, CD = x+6, AD = 4x-2. מצאו את אורך הצלע BC.&rlm;",
        options: ["8", "12", "10", "6"],
        correctAnswer: 0,
        hint: "במרובע חוסם, סכום הצלעות הנגדיות שווה. הציבו את הביטויים, פתרו ל-x והציבו בביטוי של הצלע המבוקשת.",
        solution_steps: [
            { verbal_explanation: "בניית משוואת חסימת מעגל המשווה את סכום זוגות הצלעות הנגדיות במרובע.", math_expression: "AB + CD = BC + AD" },
            { verbal_explanation: "הצבת כל הביטויים האלגבריים הנתונים במקומותיהם הראויים במשוואה שפתחנו.", math_expression: "3x + (x + 6) = 2x + (4x - 2)" },
            { verbal_explanation: "כינוס איברים המכילים את המשתנה מכל צד כדי לפשט את המשוואה לחלוטין.", math_expression: "4x + 6 = 6x - 2" },
            { verbal_explanation: "העברת איברים לאגף אחד כדי לבודד את המשתנה ואת מספרי הקבוע הרגילים.", math_expression: "6 + 2 = 6x - 4x \\Rightarrow 8 = 2x" },
            { verbal_explanation: "חלוקה בשתיים לפתרון ערך המשתנה הבסיסי והחשוב.", math_expression: "x = 4" },
            { verbal_explanation: "הצבת המשתנה אל תוך הביטוי של הצלע המבוקשת על מנת למצוא את אורך הצלע הפיזי.", math_expression: "BC = 2 \\times 4 = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מרובעים חסומים וחוסמים מעגל - הוכחות גיאומטריות",
        question_text: "מרובע ABCD חסום במעגל. נתון שהאלכסון BD חוצה את הזווית D. מהי המסקנה המתחייבת לגבי המשולש ABC?&rlm;",
        options: ["המשולש ABC שווה שוקיים בסיסיו AC (AB=BC)", "המשולש ABC ישר זווית ב-B", "המשולש ABC שווה צלעות", "המשולש ABC הוא בהכרח כהה זווית"],
        correctAnswer: 0,
        hint: "חוצה הזווית מחלק אותה לשתי זוויות היקפיות שוות. זוויות אלו נשענות על קשתות שוות, שעליהן נשענים מיתרים שווים.",
        solution_steps: [
            { verbal_explanation: "תרגום נתון חוצה הזווית הפנימית לשוויון של שתי זוויות היקפיות במעגל השלם.", math_expression: "\\angle ADB = \\angle CDB" },
            { verbal_explanation: "הבנת המשפט לפיו זוויות היקפיות שוות באותו מעגל נשענות תמיד על קשתות זהות באורכן.", math_expression: "Arc(AB) = Arc(CB)" },
            { verbal_explanation: "קשתות שוות מגדירות וחוסמות בתוכן מיתרים אשר שווים באורכם הפיזי לחלוטין וללא ספק.", math_expression: "AB = CB" },
            { verbal_explanation: "התבוננות במשולש העליון המוגדר על ידי מיתרים אלו מגלה שיש לו שתי צלעות שוות תמיד.", math_expression: "\\triangle ABC \\Rightarrow AB = CB" },
            { verbal_explanation: "מסקנה ברורה וסופית: משולש בעל שתי צלעות שוות הוא משולש שווה שוקיים בהגדרתו הטהורה.", math_expression: "Isosceles \\ \\triangle" }
        ],
        final_answer: "המשולש ABC שווה שוקיים בסיסיו AC (AB=BC)"
    },
    {
        topic: "euclidean_geometry_571",
        subTopic: "מרובעים חסומים וחוסמים מעגל - הוכחות גיאומטריות",
        question_text: "מלבן חסום במעגל. צלעות המלבן הן 6 ס''מ ו-8 ס''מ. מהו אורך רדיוס המעגל החוסם אותו?&rlm;",
        options: ["5", "10", "14", "7"],
        correctAnswer: 0,
        hint: "במלבן חסום במעגל, האלכסון נשען על 90 מעלות ולכן הוא משמש כקוטר המעגל. השתמשו במשפט פיתגורס למציאת האלכסון וחלקו ב-2.",
        solution_steps: [
            { verbal_explanation: "זיהוי העובדה שזווית מלבן ישרה (תשעים מעלות) נשענת תמיד על קוטר המעגל כזווית היקפית.", math_expression: "\\angle 90^{\\circ} \\Rightarrow d = 2R" },
            { verbal_explanation: "יישום משפט פיתגורס על המשולש ישר הזווית שנוצר במלבן לשם חילוץ אורך האלכסון הראשי.", math_expression: "d^{2} = 6^{2} + 8^{2}" },
            { verbal_explanation: "חישוב ריבועי הצלעות הקטנות המהוות ניצבים.", math_expression: "d^{2} = 36 + 64 = 100" },
            { verbal_explanation: "הוצאת שורש ריבועי לקבלת אורך האלכסון הכולל שהוא גם קוטרו של המעגל.", math_expression: "d = 10" },
            { verbal_explanation: "חלוקת הקוטר בשתיים לחשיפת רדיוס המעגל כנדרש בנתוני השאלה הסופיים.", math_expression: "R = \\dfrac{10}{2} = 5" },
            { verbal_explanation: "סיום הוכחת הרדיוס למלבן חסום.", math_expression: "5" }
        ],
        final_answer: "5"
    }
];
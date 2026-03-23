const questionsDB = [
    // ==========================================
    // תת נושא 1: פתרון בעיות משולבות גיאומטריה וטריגונומטריה (10 שאלות)
    // ==========================================

    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון בעיות משולבות גיאומטריה וטריגונומטריה",
        question_text: "במשולש ישר זווית, אורך היתר הוא 10 ס''מ ואחת הזוויות החדות היא 30°. מהו שטח המשולש?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='30,100 170,100 30,20' fill='#3b82f6' fill-opacity='0.1' stroke='#3b82f6' stroke-width='2'/><polyline points='30,90 40,90 40,100' fill='none' stroke='#1e293b' stroke-width='1.5'/><text x='130' y='95' font-size='12' font-family='Arial'>30°</text><text x='95' y='50' font-size='12' font-family='Arial'>10</text></svg></div>",
        options: ["12.5√3", "25", "12.5", "25√3"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית, הניצב שמול זווית 30° שווה למחצית היתר. מצאו את הניצב השני בעזרת פיתגורס או קוסינוס 30°, וחשבו שטח.",
        solution_steps: [
            { verbal_explanation: "שימוש בהגדרת פונקציית הסינוס למציאת הניצב מול הזווית הנתונה.", math_expression: "\\sin(30^{\\circ}) = \\dfrac{a}{10}" },
            { verbal_explanation: "הצבת ערך הסינוס הידוע וחילוץ הניצב הראשון.", math_expression: "0.5 = \\dfrac{a}{10} \\Rightarrow a = 5" },
            { verbal_explanation: "שימוש בהגדרת פונקציית הקוסינוס למציאת הניצב שליד הזווית.", math_expression: "\\cos(30^{\\circ}) = \\dfrac{b}{10}" },
            { verbal_explanation: "הצבת הערך הטריגונומטרי המדויק וחילוץ הניצב השני.", math_expression: "\\dfrac{\\sqrt{3}}{2} = \\dfrac{b}{10} \\Rightarrow b = 5\\sqrt{3}" },
            { verbal_explanation: "הצבת הניצבים בנוסחת שטח משולש ישר זווית.", math_expression: "S = \\dfrac{a \\times b}{2}" },
            { verbal_explanation: "ביצוע פעולת הכפל במונה השבר.", math_expression: "S = \\dfrac{5 \\times 5\\sqrt{3}}{2}" },
            { verbal_explanation: "קבלת התוצאה הסופית והמצומצמת לשטח המשולש.", math_expression: "S = 12.5\\sqrt{3}" }
        ],
        final_answer: "12.5√3"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון בעיות משולבות גיאומטריה וטריגונומטריה",
        question_text: "במשולש שווה שוקיים, זווית הראש היא 120° ואורך השוק הוא 8 ס''מ. מהו אורך בסיס המשולש?&rlm;",
        options: ["8√3", "16", "8√2", "12"],
        correctAnswer: 0,
        hint: "הורידו גובה לבסיס. הגובה חוצה את זווית הראש ואת הבסיס. השתמשו במשולש ישר הזווית שנוצר.",
        solution_steps: [
            { verbal_explanation: "הורדת גובה החוצה את זווית הראש במשולש שווה שוקיים לשתי זוויות שוות.", math_expression: "\\alpha = \\dfrac{120^{\\circ}}{2} = 60^{\\circ}" },
            { verbal_explanation: "השימוש בפונקציית הסינוס במשולש ישר הזווית שנוצר כדי למצוא את מחצית הבסיס.", math_expression: "\\sin(60^{\\circ}) = \\dfrac{x}{8}" },
            { verbal_explanation: "הצבת הערך הטריגונומטרי המוכר לסינוס שישים.", math_expression: "\\dfrac{\\sqrt{3}}{2} = \\dfrac{x}{8}" },
            { verbal_explanation: "הכפלת המשוואה בשמונה לבידוד חצי הבסיס.", math_expression: "x = 4\\sqrt{3}" },
            { verbal_explanation: "הכפלת התוצאה בשתיים כדי לקבל את אורך הבסיס המלא.", math_expression: "c = 2 \\times x" },
            { verbal_explanation: "חישוב סופי ואחרון.", math_expression: "c = 2 \\times 4\\sqrt{3} = 8\\sqrt{3}" }
        ],
        final_answer: "8√3"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון בעיות משולבות גיאומטריה וטריגונומטריה",
        question_text: "שטחו של מעוין הוא 50 סמ''ר וזווית קהה שלו היא 150°. מהו אורך צלע המעוין?&rlm;",
        options: ["10", "5", "10√2", "25"],
        correctAnswer: 0,
        hint: "הזווית החדה במעוין משלימה ל-180°. השתמשו בנוסחת שטח מקבילית (צלע בריבוע כפול סינוס הזווית).",
        solution_steps: [
            { verbal_explanation: "חישוב הזווית החדה במעוין על פי סכום זוויות סמוכות המשלים לזווית שטוחה.", math_expression: "\\alpha = 180^{\\circ} - 150^{\\circ} = 30^{\\circ}" },
            { verbal_explanation: "כתיבת נוסחת שטח מעוין המבוססת על שתי צלעות וזווית.", math_expression: "S = a^{2} \\times \\sin(\\alpha)" },
            { verbal_explanation: "הצבת הנתונים המספריים מתוך השאלה לתוך הנוסחה שיצרנו.", math_expression: "50 = a^{2} \\times \\sin(30^{\\circ})" },
            { verbal_explanation: "הצבת ערך הסינוס הידוע.", math_expression: "50 = a^{2} \\times 0.5" },
            { verbal_explanation: "הכפלת המשוואה בשתיים כדי לבודד את ריבוע הצלע לחלוטין.", math_expression: "a^{2} = 100" },
            { verbal_explanation: "הוצאת שורש ריבועי לקבלת אורך הצלע.", math_expression: "a = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון בעיות משולבות גיאומטריה וטריגונומטריה",
        question_text: "בטרפז ישר זווית, הבסיס הגדול ארוך ב-4 ס''מ מהבסיס הקטן. הזווית החדה בטרפז היא 45°. מהו גובה הטרפז?&rlm;",
        options: ["4", "4√2", "2", "8"],
        correctAnswer: 0,
        hint: "הורידו גובה מהקודקוד הקהה ליצירת משולש ישר זווית. הניצב האופקי הוא ההפרש בין הבסיסים.",
        solution_steps: [
            { verbal_explanation: "הגדרת הניצב האופקי במשולש שנוצר על ידי הורדת הגובה, המהווה את ההפרש בין הבסיסים.", math_expression: "x = a - b = 4" },
            { verbal_explanation: "שימוש בפונקציית הטנגנס במשולש ישר הזווית למציאת הגובה האנכי.", math_expression: "\\tan(45^{\\circ}) = \\dfrac{h}{x}" },
            { verbal_explanation: "הצבת ערך הטנגנס המוכר למשוואה.", math_expression: "1 = \\dfrac{h}{4}" },
            { verbal_explanation: "הכפלה בארבע לחילוץ הגובה.", math_expression: "h = 4" },
            { verbal_explanation: "וידוא הנתון.", math_expression: "1=1" }
        ],
        final_answer: "4"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון בעיות משולבות גיאומטריה וטריגונומטריה",
        question_text: "במשולש שווה צלעות, רדיוס המעגל החסום הוא 2 ס''מ. מהו אורך צלע המשולש?&rlm;",
        options: ["4√3", "6", "2√3", "8"],
        correctAnswer: 0,
        hint: "במשולש שווה צלעות, מרכז המעגל החסום הוא גם מפגש התיכונים. התיכון מחולק ביחס של 1:2. לכן, הגובה כולו הוא 6. השתמשו בסינוס 60° כדי למצוא את הצלע.",
        solution_steps: [
            { verbal_explanation: "קביעת אורך הגובה כולו על בסיס חלוקת התיכונים ביחס של אחד לשתיים.", math_expression: "h = 3 \\times r = 3 \\times 2 = 6" },
            { verbal_explanation: "שימוש בפונקציית הסינוס במשולש ישר הזווית שנוצר על ידי הגובה.", math_expression: "\\sin(60^{\\circ}) = \\dfrac{h}{a}" },
            { verbal_explanation: "הצבת הגובה והערך הטריגונומטרי במשוואה.", math_expression: "\\dfrac{\\sqrt{3}}{2} = \\dfrac{6}{a}" },
            { verbal_explanation: "הכפלה בהצלבה לבידוד הצלע המבוקשת.", math_expression: "a\\sqrt{3} = 12" },
            { verbal_explanation: "חלוקה בשורש שלוש.", math_expression: "a = \\dfrac{12}{\\sqrt{3}}" },
            { verbal_explanation: "הרחבת השבר על ידי הכפלת מונה ומכנה בשורש שלוש לסילוק השורש מהמכנה.", math_expression: "a = \\dfrac{12\\sqrt{3}}{3} = 4\\sqrt{3}" }
        ],
        final_answer: "4√3"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון בעיות משולבות גיאומטריה וטריגונומטריה",
        question_text: "במלבן, הזווית הכלואה בין שני האלכסונים היא 60°. אורך האלכסון הוא 10 ס''מ. מהו שטח המלבן?&rlm;",
        options: ["25√3", "50", "25", "50√3"],
        correctAnswer: 0,
        hint: "שטח של מרובע שווה למחצית מכפלת האלכסונים בסינוס הזווית שביניהם.",
        solution_steps: [
            { verbal_explanation: "ציון הנוסחה הכללית לחישוב שטח מרובע על פי אלכסוניו והזווית הכלואה.", math_expression: "S = \\dfrac{d_{1} \\times d_{2} \\times \\sin(\\alpha)}{2}" },
            { verbal_explanation: "במלבן האלכסונים שווים באורכם. נציב את הנתונים.", math_expression: "S = \\dfrac{10 \\times 10 \\times \\sin(60^{\\circ})}{2}" },
            { verbal_explanation: "חישוב המכפלה במונה והצבת ערך הסינוס.", math_expression: "S = \\dfrac{100 \\times \\dfrac{\\sqrt{3}}{2}}{2}" },
            { verbal_explanation: "פישוט השבר על ידי חלוקת המאה בשתיים.", math_expression: "S = \\dfrac{50\\sqrt{3}}{2}" },
            { verbal_explanation: "צמצום סופי למציאת השטח הגיאומטרי.", math_expression: "S = 25\\sqrt{3}" },
            { verbal_explanation: "וידוא הפתרון.", math_expression: "1=1" }
        ],
        final_answer: "25√3"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון בעיות משולבות גיאומטריה וטריגונומטריה",
        question_text: "במשולש שווה שוקיים, שטח המשולש הוא 100 סמ''ר וזווית הראש היא 30°. חשבו את אורך השוק של המשולש.&rlm;",
        options: ["20", "10", "14.14", "400"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת שטח משולש טריגונומטרית: צלע כפול צלע כפול סינוס הזווית שביניהן, חלקי 2.",
        solution_steps: [
            { verbal_explanation: "הצבת נוסחת שטח משולש המבוססת על שתי צלעות וזווית כלואה.", math_expression: "S = \\dfrac{b \\times c \\times \\sin(\\alpha)}{2}" },
            { verbal_explanation: "במשולש שווה שוקיים הצלעות הכלואות שוות. נציב משתנה יחיד בריבוע.", math_expression: "100 = \\dfrac{x^{2} \\times \\sin(30^{\\circ})}{2}" },
            { verbal_explanation: "הצבת ערך הסינוס הידוע במשוואה.", math_expression: "100 = \\dfrac{x^{2} \\times 0.5}{2}" },
            { verbal_explanation: "הכפלת המשוואה בשתיים כדי להיפטר מהמכנה.", math_expression: "200 = x^{2} \\times 0.5" },
            { verbal_explanation: "חלוקה בחצי לבידוד הריבוע במלואו.", math_expression: "x^{2} = 400" },
            { verbal_explanation: "הוצאת שורש ריבועי למציאת אורך השוק כמרחק חיובי.", math_expression: "x = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון בעיות משולבות גיאומטריה וטריגונומטריה",
        question_text: "במקבילית אורך הצלע הקצרה הוא 6, ואורך הצלע הארוכה הוא 10. הזווית החדה במקבילית היא 45°. חשבו את אורך האלכסון הקצר של המקבילית.&rlm;",
        options: ["√(136 - 60√2)", "√(136 + 60√2)", "10", "√76"],
        correctAnswer: 0,
        hint: "האלכסון הקצר נמצא מול הזווית החדה. השתמשו במשפט הקוסינוסים במשולש שנוצר על ידי שתי הצלעות והאלכסון.",
        solution_steps: [
            { verbal_explanation: "הגדרת משפט הקוסינוסים במטרה למצוא את הצלע השלישית.", math_expression: "d^{2} = a^{2} + b^{2} - 2ab\\cos(\\alpha)" },
            { verbal_explanation: "הצבת אורכי צלעות המקבילית והזווית החדה שביניהן.", math_expression: "d^{2} = 6^{2} + 10^{2} - 2 \\times 6 \\times 10 \\times \\cos(45^{\\circ})" },
            { verbal_explanation: "חישוב הריבועים והמכפלה הפשוטה שבמשוואה.", math_expression: "d^{2} = 36 + 100 - 120 \\times \\cos(45^{\\circ})" },
            { verbal_explanation: "הצבת הערך הטריגונומטרי המדויק.", math_expression: "d^{2} = 136 - 120 \\times \\dfrac{\\sqrt{2}}{2}" },
            { verbal_explanation: "צמצום המקדם העשרוני מול החלוקה בשתיים.", math_expression: "d^{2} = 136 - 60\\sqrt{2}" },
            { verbal_explanation: "הוצאת שורש לביטוי כולו לחילוץ האורך.", math_expression: "d = \\sqrt{136 - 60\\sqrt{2}}" }
        ],
        final_answer: "√(136 - 60√2)"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון בעיות משולבות גיאומטריה וטריגונומטריה",
        question_text: "מעגל שרדיוסו 5 ס''מ חסום במשושה משוכלל. מהו היקף המשושה החוסם?&rlm;",
        options: ["20√3", "60", "30", "10√3"],
        correctAnswer: 0,
        hint: "במשושה משוכלל חוסם, הרדיוס הוא הגובה של משולש שווה שוקיים בסיסי. זווית הראש היא 60°, לכן חצי זווית היא 30°. השתמשו בטנגנס 30°.",
        solution_steps: [
            { verbal_explanation: "חישוב זווית הראש של המשולש הבסיסי המרכיב את המשושה המלא.", math_expression: "\\alpha = \\dfrac{360^{\\circ}}{6} = 60^{\\circ}" },
            { verbal_explanation: "הרדיוס מאונך לצלע וחוצה את המשולש, לכן מפעיל פונקציה על מחצית הזווית.", math_expression: "\\beta = \\dfrac{60^{\\circ}}{2} = 30^{\\circ}" },
            { verbal_explanation: "שימוש בטנגנס כדי למצוא את מחצית צלע המשושה.", math_expression: "\\tan(30^{\\circ}) = \\dfrac{x}{R}" },
            { verbal_explanation: "הצבת הרדיוס והערך הטריגונומטרי במשוואה.", math_expression: "\\dfrac{\\sqrt{3}}{3} = \\dfrac{x}{5}" },
            { verbal_explanation: "חילוץ מחצית הצלע על ידי הכפלה באגף הנגדי.", math_expression: "x = \\dfrac{5\\sqrt{3}}{3}" },
            { verbal_explanation: "הכפלה בשתיים לקבלת אורך צלע שלמה.", math_expression: "a = 2x = \\dfrac{10\\sqrt{3}}{3}" },
            { verbal_explanation: "הכפלת אורך הצלע בשש צלעות לקבלת ההיקף הכולל.", math_expression: "P = 6 \\times \\dfrac{10\\sqrt{3}}{3} = 20\\sqrt{3}" }
        ],
        final_answer: "20√3"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון בעיות משולבות גיאומטריה וטריגונומטריה",
        question_text: "במשולש ישר זווית אורך הניצב שמול הזווית החדה α הוא 3, ואורך הניצב שליד הזווית α הוא 4. חשבו את הערך של הסכום: \\( \\sin(\\alpha) + \\cos(\\alpha) \\).&rlm;",
        options: ["7 : 5", "1", "12 : 5", "1.2"],
        correctAnswer: 0,
        hint: "חשבו את היתר בעזרת משפט פיתגורס. לאחר מכן, מצאו את ערכי הסינוס והקוסינוס על פי ההגדרות הבסיסיות וחברו אותם.",
        solution_steps: [
            { verbal_explanation: "הפעלת משפט פיתגורס למציאת היתר במשולש ישר הזווית.", math_expression: "c = \\sqrt{3^{2} + 4^{2}} = \\sqrt{25} = 5" },
            { verbal_explanation: "חישוב ערך הסינוס של הזווית.", math_expression: "\\sin(\\alpha) = \\dfrac{3}{5}" },
            { verbal_explanation: "חישוב ערך הקוסינוס באותה הדרך.", math_expression: "\\cos(\\alpha) = \\dfrac{4}{5}" },
            { verbal_explanation: "הצבת הערכים בתוך הביטוי המבוקש.", math_expression: "y = \\dfrac{3}{5} + \\dfrac{4}{5}" },
            { verbal_explanation: "ביצוע החיבור באמצעות המכנה המשותף הקיים.", math_expression: "y = \\dfrac{7}{5}" },
            { verbal_explanation: "השלמה.", math_expression: "1=1" }
        ],
        final_answer: "7 : 5"
    },

    // ==========================================
    // תת נושא 2: שימוש במעגל החוסם (2R) ובחוק הסינוסים/קוסינוסים להוכחת יחסים (10 שאלות)
    // ==========================================

    {
        topic: "trigo_geometry_571",
        subTopic: "שימוש במעגל החוסם (2R) ובחוק הסינוסים/קוסינוסים להוכחת יחסים",
        question_text: "במשולש חסום במעגל שרדיוסו 10 ס''מ, מונחת צלע שאורכה 10 ס''מ. מהי הזווית מול צלע זו? (בהנחה שהמשולש חד זוויות).&rlm;",
        options: ["30°", "60°", "45°", "15°"],
        correctAnswer: 0,
        hint: "השתמשו במשפט הסינוסים המורחב: צלע חלקי סינוס הזווית שמולה שווה לפעמיים הרדיוס של המעגל החוסם.",
        solution_steps: [
            { verbal_explanation: "כתיבת משפט הסינוסים הקושר צלע, זווית נגדית ואת קוטר המעגל החוסם.", math_expression: "\\dfrac{a}{\\sin(\\alpha)} = 2R" },
            { verbal_explanation: "הצבת נתוני הצלע והרדיוס אל תוך הנוסחה.", math_expression: "\\dfrac{10}{\\sin(\\alpha)} = 2 \\times 10" },
            { verbal_explanation: "ביצוע פעולת הכפל באגף ימין להשגת הקוטר.", math_expression: "\\dfrac{10}{\\sin(\\alpha)} = 20" },
            { verbal_explanation: "הכפלה בהצלבה לשם בידוד הפונקציה במשוואה.", math_expression: "10 = 20 \\times \\sin(\\alpha)" },
            { verbal_explanation: "חלוקה בעשרים למציאת ערך הסינוס.", math_expression: "\\sin(\\alpha) = \\dfrac{10}{20} = 0.5" },
            { verbal_explanation: "חילוץ הזווית בהתבסס על ההנחה שהיא חדה כפי שצוין.", math_expression: "\\alpha = 30^{\\circ}" }
        ],
        final_answer: "30°"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "שימוש במעגל החוסם (2R) ובחוק הסינוסים/קוסינוסים להוכחת יחסים",
        question_text: "במשולש ABC, זווית A היא 45° וזווית B היא 60°. אורך הצלע BC הוא 8 ס''מ. חשבו את אורך הצלע AC.&rlm;",
        options: ["4√6", "16", "8√1.5", "10"],
        correctAnswer: 0,
        hint: "השתמשו במשפט הסינוסים ליחסים פנימיים: BC חלקי סינוס A שווה ל-AC חלקי סינוס B.",
        solution_steps: [
            { verbal_explanation: "הצבת היחסים של משפט הסינוסים בין שתי צלעות וזוויות נגדיות.", math_expression: "\\dfrac{BC}{\\sin(A)} = \\dfrac{AC}{\\sin(B)}" },
            { verbal_explanation: "הצבת הנתונים המספריים אל תוך משוואת היחס.", math_expression: "\\dfrac{8}{\\sin(45^{\\circ})} = \\dfrac{AC}{\\sin(60^{\\circ})}" },
            { verbal_explanation: "המרת הפונקציות לערכים השורשיים המוכרים.", math_expression: "\\dfrac{8}{\\dfrac{\\sqrt{2}}{2}} = \\dfrac{AC}{\\dfrac{\\sqrt{3}}{2}}" },
            { verbal_explanation: "ביצוע חילוק שברים באגף השמאלי לסידור התבנית.", math_expression: "\\dfrac{16}{\\sqrt{2}} = \\dfrac{AC}{\\dfrac{\\sqrt{3}}{2}}" },
            { verbal_explanation: "הכפלת המשוואה כולה במכנה הימני כדי לבודד את הצלע הנדרשת.", math_expression: "AC = \\dfrac{16}{\\sqrt{2}} \\times \\dfrac{\\sqrt{3}}{2}" },
            { verbal_explanation: "צמצום המספר שש עשרה מול השתיים במכנה.", math_expression: "AC = \\dfrac{8\\sqrt{3}}{\\sqrt{2}}" },
            { verbal_explanation: "הרחבת השבר וסידור מחדש לקבלת שורש נקי במונה.", math_expression: "AC = \\dfrac{8\\sqrt{6}}{2} = 4\\sqrt{6}" }
        ],
        final_answer: "4√6"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "שימוש במעגל החוסם (2R) ובחוק הסינוסים/קוסינוסים להוכחת יחסים",
        question_text: "במשולש בעל צלעות 5, 7 ו-8 ס''מ, מצאו את קוסינוס הזווית הגדולה ביותר במשולש.&rlm;",
        options: ["1 : 7", "-1 : 7", "1 : 14", "1 : 5"],
        correctAnswer: 0,
        hint: "הזווית הגדולה ביותר נמצאת תמיד מול הצלע הארוכה ביותר. השתמשו במשפט הקוסינוסים והציבו את 8 לבדו באגף אחד.",
        solution_steps: [
            { verbal_explanation: "זיהוי העיקרון לפיו הזווית הגדולה במשולש נשענת על הצלע הארוכה ביותר.", math_expression: "a = 8 \\quad , \\quad b = 5 \\quad , \\quad c = 7" },
            { verbal_explanation: "בניית משוואת משפט הקוסינוסים ביחס לצלע הארוכה כאיבר המוביל.", math_expression: "8^{2} = 5^{2} + 7^{2} - 2 \\times 5 \\times 7 \\times \\cos(\\alpha)" },
            { verbal_explanation: "חישוב הערכים הריבועיים והמכפלה הפשוטה במשוואה.", math_expression: "64 = 25 + 49 - 70\\cos(\\alpha)" },
            { verbal_explanation: "חיבור האיברים המספריים באגף הימני.", math_expression: "64 = 74 - 70\\cos(\\alpha)" },
            { verbal_explanation: "העברת איברים לאגפים נגדיים לבידוד הפונקציה הטריגונומטרית.", math_expression: "70\\cos(\\alpha) = 74 - 64 = 10" },
            { verbal_explanation: "חלוקת המשוואה בשבעים לשם קבלת הערך המדויק של קוסינוס הזווית.", math_expression: "\\cos(\\alpha) = \\dfrac{10}{70} = \\dfrac{1}{7}" }
        ],
        final_answer: "1 : 7"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "שימוש במעגל החוסם (2R) ובחוק הסינוסים/קוסינוסים להוכחת יחסים",
        question_text: "משולש ישר זווית (זווית ישרה C) חסום במעגל. נתון כי אורך הניצב a שווה לרדיוס R (כלומר, \\( a = R \\)). מה גודל הזווית מול הניצב a?&rlm;",
        options: ["30°", "45°", "60°", "לא ניתן לקבוע"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית החסום במעגל, היתר הוא קוטר המעגל (2R). במשולש ישר זווית, סינוס הזווית שווה לניצב מול הזווית חלקי היתר.",
        solution_steps: [
            { verbal_explanation: "הסקת מסקנה מיידית מן הנתון: במשולש ישר זווית היתר מתלכד עם קוטר המעגל החוסם.", math_expression: "c = 2R" },
            { verbal_explanation: "כתיבת הגדרת פונקציית הסינוס במשולש ישר הזווית שלנו.", math_expression: "\\sin(\\alpha) = \\dfrac{a}{c}" },
            { verbal_explanation: "הצבת הנתונים המבוססים על גודל הרדיוס לתוך המשוואה.", math_expression: "\\sin(\\alpha) = \\dfrac{R}{2R}" },
            { verbal_explanation: "צמצום הרדיוס מן השבר משום שהוא בהכרח גודל ממשי וחיובי.", math_expression: "\\sin(\\alpha) = 0.5" },
            { verbal_explanation: "קביעת הזווית היחידה בתחום החד-זוויתי המקיימת תוצאה זו.", math_expression: "\\alpha = 30^{\\circ}" },
            { verbal_explanation: "סיום.", math_expression: "1=1" }
        ],
        final_answer: "30°"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "שימוש במעגל החוסם (2R) ובחוק הסינוסים/קוסינוסים להוכחת יחסים",
        question_text: "במשולש נתון כי \\( \\dfrac{a}{b} = \\dfrac{\\sin(\\alpha)}{\\cos(\\beta)} \\). כמו כן, ידוע ש- \\( a \\neq b \\). איזה מהמשפטים הבאים נכון לגבי המשולש?&rlm;",
        options: ["המשולש הוא ישר זווית והזווית β היא 45°", "המשולש שווה שוקיים", "לא ייתכן משולש כזה", "הזווית α שווה 90°"],
        correctAnswer: 0,
        hint: "לפי משפט הסינוסים, יחס הצלעות הוא כיחס הסינוסים. השוו זאת לנתון ותגלו שסינוס וקוסינוס חייבים להיות שווים.",
        solution_steps: [
            { verbal_explanation: "הצבת היחס הכללי הנובע ממשפט הסינוסים המוכר לכל משולש.", math_expression: "\\dfrac{a}{b} = \\dfrac{\\sin(\\alpha)}{\\sin(\\beta)}" },
            { verbal_explanation: "השוואת המשוואה התיאורטית עם הנתון הייחודי שהוצג בבעיה זו.", math_expression: "\\dfrac{\\sin(\\alpha)}{\\sin(\\beta)} = \\dfrac{\\sin(\\alpha)}{\\cos(\\beta)}" },
            { verbal_explanation: "צמצום המונה הזהה משני הצדדים.", math_expression: "\\dfrac{1}{\\sin(\\beta)} = \\dfrac{1}{\\cos(\\beta)}" },
            { verbal_explanation: "מסקנה ישירה כי פונקציות הזווית שוות זו לזו בנקודה זו.", math_expression: "\\sin(\\beta) = \\cos(\\beta)" },
            { verbal_explanation: "חלוקה בקוסינוס ליצירת פונקציה טריגונומטרית יחידה המובילה לפתרון.", math_expression: "\\tan(\\beta) = 1" },
            { verbal_explanation: "חילוץ הזווית. מאחר והצלעות אינן שוות, זוויותיהן שונות ורק תנאי זה מתקיים.", math_expression: "\\beta = 45^{\\circ}" }
        ],
        final_answer: "המשולש הוא ישר זווית והזווית β היא 45°"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "שימוש במעגל החוסם (2R) ובחוק הסינוסים/קוסינוסים להוכחת יחסים",
        question_text: "במרובע ABCD החסום במעגל שרדיוסו R, ידוע כי אורך האלכסון BD שווה ל-R. מצאו את הזווית \\( \\angle C \\). (הניחו שכל הזוויות במרובע חדות או ישרות, או שאין חדות בהכרח - חשבו מהן שתי האפשרויות והסיקו).&rlm;",
        options: ["30° או 150°", "60° או 120°", "45° או 135°", "90°"],
        correctAnswer: 0,
        hint: "במשולש BCD שגם הוא חסום באותו מעגל, הפעילו את משפט הסינוסים עבור הצלע BD. הציבו את BD=R.",
        solution_steps: [
            { verbal_explanation: "הפעלת משפט הסינוסים על המשולש הנוצר מאלכסון המרובע החסום.", math_expression: "\\dfrac{BD}{\\sin(C)} = 2R" },
            { verbal_explanation: "הצבת הנתון הממיר את צלע האלכסון בערך הרדיוס של המעגל.", math_expression: "\\dfrac{R}{\\sin(C)} = 2R" },
            { verbal_explanation: "חלוקת שני אגפי המשוואה ברדיוס המשותף.", math_expression: "\\dfrac{1}{\\sin(C)} = 2" },
            { verbal_explanation: "הפיכת המשוואה לבידוד פונקציית הסינוס הרצויה.", math_expression: "\\sin(C) = 0.5" },
            { verbal_explanation: "חילוץ פתרון ראשון עבור זווית חדה התואמת את הסינוס.", math_expression: "\\angle C_{1} = 30^{\\circ}" },
            { verbal_explanation: "חילוץ פתרון שני אפשרי עבור זווית קהה (משלימה למאה ושמונים).", math_expression: "\\angle C_{2} = 180^{\\circ} - 30^{\\circ} = 150^{\\circ}" }
        ],
        final_answer: "30° או 150°"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "שימוש במעגל החוסם (2R) ובחוק הסינוסים/קוסינוסים להוכחת יחסים",
        question_text: "במשולש ABC נתון: \\( a=4, b=6, c=8 \\). חשבו את אורכו של התיכון לצלע c.&rlm;",
        options: ["√10", "√14", "4", "5"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת אורך התיכון: מחצית השורש של (פעמיים a בריבוע, פלוס פעמיים b בריבוע, מינוס c בריבוע).",
        solution_steps: [
            { verbal_explanation: "ציון נוסחת אורך תיכון קלאסית במשולש.", math_expression: "m_{c} = \\dfrac{1}{2}\\sqrt{2a^{2} + 2b^{2} - c^{2}}" },
            { verbal_explanation: "הצבת מידות הצלעות הנתונות של המשולש אל תוך הנוסחה המורכבת.", math_expression: "m_{c} = \\dfrac{1}{2}\\sqrt{2(4^{2}) + 2(6^{2}) - 8^{2}}" },
            { verbal_explanation: "העלאה בריבוע של הערכים בתוך השורש.", math_expression: "m_{c} = \\dfrac{1}{2}\\sqrt{2(16) + 2(36) - 64}" },
            { verbal_explanation: "הכפלת כל אחד מהערכים בשתיים.", math_expression: "m_{c} = \\dfrac{1}{2}\\sqrt{32 + 72 - 64}" },
            { verbal_explanation: "חישוב הסכום והחיסור תחת מעטפת השורש הריבועי.", math_expression: "m_{c} = \\dfrac{1}{2}\\sqrt{40}" },
            { verbal_explanation: "הכנסת המקדם החיצוני אל תוך השורש על ידי העלאתו בריבוע (חצי הופך לרבע).", math_expression: "m_{c} = \\sqrt{\\dfrac{40}{4}} = \\sqrt{10}" }
        ],
        final_answer: "√10"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "שימוש במעגל החוסם (2R) ובחוק הסינוסים/קוסינוסים להוכחת יחסים",
        question_text: "במשולש ABC הוכח כי היחס \\( \\dfrac{a + b}{c} = \\dfrac{\\sin(\\alpha) + \\sin(\\beta)}{\\sin(\\gamma)} \\) מתקיים תמיד. מאיזה משפט נובע יחס זה באופן ישיר?&rlm;",
        options: ["משפט הסינוסים המורחב", "משפט הקוסינוסים", "משפט פיתגורס", "משפט תאלס"],
        correctAnswer: 0,
        hint: "לפי משפט הסינוסים, כל צלע שווה ל-2R כפול סינוס הזווית שמולה. הציבו זאת במקום הצלעות בפרופורציה הנתונה.",
        solution_steps: [
            { verbal_explanation: "הבעת כל אחת מצלעות המשולש כפונקציה של הזווית ממול והרדיוס החוסם על פי משפט הסינוסים.", math_expression: "a = 2R\\sin(\\alpha) \\quad , \\quad b = 2R\\sin(\\beta) \\quad , \\quad c = 2R\\sin(\\gamma)" },
            { verbal_explanation: "הצבת הביטויים החדשים אל תוך חלקו השמאלי של השוויון הנבדק בהוכחה.", math_expression: "y = \\dfrac{2R\\sin(\\alpha) + 2R\\sin(\\beta)}{2R\\sin(\\gamma)}" },
            { verbal_explanation: "הוצאת המקדם של הקוטר כגורם משותף מתוך המונה של השבר.", math_expression: "y = \\dfrac{2R(\\sin(\\alpha) + \\sin(\\beta))}{2R\\sin(\\gamma)}" },
            { verbal_explanation: "צמצום מלא של גורם הקוטר בין המונה למכנה, מאחר ורדיוס במעגל אינו מאופס.", math_expression: "y = \\dfrac{\\sin(\\alpha) + \\sin(\\beta)}{\\sin(\\gamma)}" },
            { verbal_explanation: "קבלת אגף ימין המקורי והוכחת הקשר הישיר למשפט התיאורטי.", math_expression: "1=1" }
        ],
        final_answer: "משפט הסינוסים המורחב"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "שימוש במעגל החוסם (2R) ובחוק הסינוסים/קוסינוסים להוכחת יחסים",
        question_text: "במשולש נתונות שתי צלעות \\( a = 8 \\) ו- \\( b = 12 \\). שטח המשולש הוא \\( 24 \\). מה יכול להיות הערך של הזווית הכלואה ביניהן \\( \\gamma \\)?&rlm;",
        options: ["30° או 150°", "60° או 120°", "45°", "90°"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת השטח הטריגונומטרית (צלע כפול צלע כפול סינוס הזווית חלקי 2). מצאו את סינוס הזווית, וזכרו שיש שתי זוויות אפשריות לאותו סינוס.",
        solution_steps: [
            { verbal_explanation: "העלאת נוסחת שטח משולש מבוססת שתי צלעות והזווית שביניהן.", math_expression: "S = \\dfrac{a \\times b \\times \\sin(\\gamma)}{2}" },
            { verbal_explanation: "הצבת השטח וגדלי הצלעות הידועים מן הבעיה לתוך המשוואה.", math_expression: "24 = \\dfrac{8 \\times 12 \\times \\sin(\\gamma)}{2}" },
            { verbal_explanation: "ביצוע הכפל במונה השבר ולאחריו חלוקה בשתיים.", math_expression: "24 = \\dfrac{96 \\times \\sin(\\gamma)}{2} = 48\\sin(\\gamma)" },
            { verbal_explanation: "בידוד פונקציית הסינוס על ידי חלוקת המשוואה כולה במקדם שנוצר.", math_expression: "\\sin(\\gamma) = \\dfrac{24}{48} = 0.5" },
            { verbal_explanation: "מציאת הפתרון הראשון במעגל היחידה העונה לערך החצי.", math_expression: "\\gamma_{1} = 30^{\\circ}" },
            { verbal_explanation: "מציאת הפתרון השני והמשלים לזווית שטוחה.", math_expression: "\\gamma_{2} = 180^{\\circ} - 30^{\\circ} = 150^{\\circ}" }
        ],
        final_answer: "30° או 150°"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "שימוש במעגל החוסם (2R) ובחוק הסינוסים/קוסינוסים להוכחת יחסים",
        question_text: "במקבילית נתונים אורכי האלכסונים: 10 ו-24. הזווית הכלואה ביניהם היא 60°. מצאו את אורך אחת מהצלעות החדות במקבילית.&rlm;",
        options: ["√109", "√214", "13", "√89"],
        correctAnswer: 0,
        hint: "אלכסונים במקבילית חוצים זה את זה. השתמשו במשפט הקוסינוסים במשולש הפנימי הכולל חצאי אלכסונים (5 ו-12) ואת הזווית 60°.",
        solution_steps: [
            { verbal_explanation: "יישום תכונת המקבילית הקובעת שאלכסונים חוצים זה את זה בדיוק במרכז.", math_expression: "d_{1} = 5 \\quad , \\quad d_{2} = 12" },
            { verbal_explanation: "הפעלת משפט הקוסינוסים על המשולש שנוצר במרכז המקבילית למציאת הצלע.", math_expression: "a^{2} = 5^{2} + 12^{2} - 2 \\times 5 \\times 12 \\times \\cos(60^{\\circ})" },
            { verbal_explanation: "חישוב הריבועים והמכפלה הפשוטה במשוואה המורחבת.", math_expression: "a^{2} = 25 + 144 - 120 \\times 0.5" },
            { verbal_explanation: "ביצוע הכפל והסכימה של כלל האיברים באגף ימין.", math_expression: "a^{2} = 169 - 60 = 109" },
            { verbal_explanation: "הוצאת שורש למציאת אורך הצלע הסופית.", math_expression: "a = \\sqrt{109}" },
            { verbal_explanation: "סגירת החישוב.", math_expression: "1=1" }
        ],
        final_answer: "√109"
    },

    // ==========================================
    // תת נושא 3: זהויות טריגונומטריות של מחצית זווית וסכום זוויות (10 שאלות)
    // ==========================================

    {
        topic: "trigo_geometry_571",
        subTopic: "זהויות טריגונומטריות של מחצית זווית וסכום זוויות",
        question_text: "חשבו במדויק (ללא מחשבון עשרוני) את הערך של \\( \\sin(75^{\\circ}) \\).&rlm;",
        options: ["(√6 + √2) : 4", "(√6 - √2) : 4", "√3 : 2", "0.5"],
        correctAnswer: 0,
        hint: "השתמשו בזהות של סכום זוויות: \\( \\sin(45° + 30°) = \\sin(45°)\\cos(30°) + \\cos(45°)\\sin(30°) \\).",
        solution_steps: [
            { verbal_explanation: "פירוק הזווית המורכבת לסכום של שתי זוויות מוכרות ממעגל היחידה הבסיסי.", math_expression: "\\sin(75^{\\circ}) = \\sin(45^{\\circ} + 30^{\\circ})" },
            { verbal_explanation: "פריסת הביטוי על פי נוסחת סכום הזוויות של פונקציית הסינוס.", math_expression: "\\sin(45^{\\circ} + 30^{\\circ}) = \\sin(45^{\\circ})\\cos(30^{\\circ}) + \\cos(45^{\\circ})\\sin(30^{\\circ})" },
            { verbal_explanation: "המרת כל איבר לפונקציה בעלת ערך מדויק בשורשים ושברים.", math_expression: "y = \\dfrac{\\sqrt{2}}{2} \\times \\dfrac{\\sqrt{3}}{2} + \\dfrac{\\sqrt{2}}{2} \\times \\dfrac{1}{2}" },
            { verbal_explanation: "ביצוע הכפל בין השברים בנפרד לכל גורם.", math_expression: "y = \\dfrac{\\sqrt{6}}{4} + \\dfrac{\\sqrt{2}}{4}" },
            { verbal_explanation: "כינוס המונים תחת מכנה משותף אחד ויחיד להצגה חלקה של התוצאה.", math_expression: "y = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}" }
        ],
        final_answer: "(√6 + √2) : 4"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "זהויות טריגונומטריות של מחצית זווית וסכום זוויות",
        question_text: "פשטו את הביטוי הטריגונומטרי הבא באמצעות זהויות: \\( \\dfrac{\\sin(2x)}{2\\sin(x)} \\).&rlm;",
        options: ["cos(x)", "sin(x)", "tan(x)", "0.5"],
        correctAnswer: 0,
        hint: "השתמשו בזהות של זווית כפולה עבור המונה: \\( \\sin(2x) = 2\\sin(x)\\cos(x) \\), ואז צמצמו.",
        solution_steps: [
            { verbal_explanation: "הצבת הזהות לזווית כפולה בסינוס המחליפה את המונה בגורמי המכפלה שלו.", math_expression: "Num = 2\\sin(x)\\cos(x)" },
            { verbal_explanation: "כתיבת השבר המלא מחדש בעזרת המונה המפורק שקיבלנו.", math_expression: "y = \\dfrac{2\\sin(x)\\cos(x)}{2\\sin(x)}" },
            { verbal_explanation: "ביטול המקדם השלם שתיים המופיע באופן זהה גם במונה וגם במכנה.", math_expression: "y = \\dfrac{\\sin(x)\\cos(x)}{\\sin(x)}" },
            { verbal_explanation: "צמצום פונקציית הסינוס הזהה המאפשר את השמטת השבר כולו.", math_expression: "y = \\cos(x)" },
            { verbal_explanation: "הסבר הושלם.", math_expression: "1=1" }
        ],
        final_answer: "cos(x)"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "זהויות טריגונומטריות של מחצית זווית וסכום זוויות",
        question_text: "איזה מבין הביטויים הבאים שווה במדויק לביטוי \\( \\cos(2x) \\)?&rlm;",
        options: ["1 - 2sin²(x)", "2sin²(x) - 1", "sin²(x) - cos²(x)", "1 + 2sin²(x)"],
        correctAnswer: 0,
        hint: "הזהות הראשית היא קוסינוס בריבוע פחות סינוס בריבוע. החליפו את הקוסינוס בעזרת זהות פיתגורס.",
        solution_steps: [
            { verbal_explanation: "כתיבת הזהות הבסיסית והראשונית לפונקציית הקוסינוס של זווית כפולה.", math_expression: "\\cos(2x) = \\cos^{2}(x) - \\sin^{2}(x)" },
            { verbal_explanation: "הבאת זהות הפיתגורס הטריגונומטרי המקשרת בין הריבועים.", math_expression: "\\cos^{2}(x) = 1 - \\sin^{2}(x)" },
            { verbal_explanation: "הצבת הביטוי השני במקום הראשון כדי ליצור משוואה המבוססת על פונקציה אחת בלבד.", math_expression: "\\cos(2x) = (1 - \\sin^{2}(x)) - \\sin^{2}(x)" },
            { verbal_explanation: "כינוס איברים דומים (חיסור הריבוע הכפול).", math_expression: "\\cos(2x) = 1 - 2\\sin^{2}(x)" },
            { verbal_explanation: "בדיקת התאמה לחלופות התשובה.", math_expression: "1=1" }
        ],
        final_answer: "1 - 2sin²(x)"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "זהויות טריגונומטריות של מחצית זווית וסכום זוויות",
        question_text: "נתון ש- \\( \\cos(x) = 0.8 \\) ו-x היא זווית חדה ברביע הראשון. חשבו את הערך המדויק של \\( \\cos(2x) \\).&rlm;",
        options: ["0.28", "0.64", "0.36", "0.96"],
        correctAnswer: 0,
        hint: "אין צורך למצוא את הזווית עצמה. פשוט השתמשו בזהות המקשרת בין זווית כפולה לריבוע הקוסינוס והציבו את הערך 0.8.",
        solution_steps: [
            { verbal_explanation: "בחירת הזהות לזווית כפולה אשר מבוססת בלעדית על הקוסינוס היחיד, בהתאם לנתונים.", math_expression: "\\cos(2x) = 2\\cos^{2}(x) - 1" },
            { verbal_explanation: "הצבת הערך העשרוני המסופק בשאלה אל תוך הביטוי הריבועי.", math_expression: "\\cos(2x) = 2(0.8)^{2} - 1" },
            { verbal_explanation: "חישוב ריבועו של המספר העשרוני.", math_expression: "\\cos(2x) = 2(0.64) - 1" },
            { verbal_explanation: "ביצוע הכפל במקדם שתיים.", math_expression: "\\cos(2x) = 1.28 - 1" },
            { verbal_explanation: "פעולת החיסור מניבה את הפתרון ללא צורך במציאת הזווית עצמה.", math_expression: "\\cos(2x) = 0.28" }
        ],
        final_answer: "0.28"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "זהויות טריגונומטריות של מחצית זווית וסכום זוויות",
        question_text: "פשטו את הביטוי הטריגונומטרי הבא: \\( \\sin(x + y) + \\sin(x - y) \\).&rlm;",
        options: ["2sin(x)cos(y)", "2cos(x)sin(y)", "2sin(x)sin(y)", "0"],
        correctAnswer: 0,
        hint: "פתחו כל אחד מהאיברים בעזרת נוסחאות הסכום וההפרש, ואז חברו את התוצאות.",
        solution_steps: [
            { verbal_explanation: "פתיחת הביטוי הראשון על פי נוסחת סכום זוויות של סינוס.", math_expression: "\\sin(x + y) = \\sin(x)\\cos(y) + \\cos(x)\\sin(y)" },
            { verbal_explanation: "פתיחת הביטוי השני על פי נוסחת הפרש זוויות של סינוס השומרת על מינוס פנימי.", math_expression: "\\sin(x - y) = \\sin(x)\\cos(y) - \\cos(x)\\sin(y)" },
            { verbal_explanation: "הצבת הפיתוחים כתרגיל חיבור אחד ארוך ושלם במקום הביטוי המקורי.", math_expression: "y = \\sin(x)\\cos(y) + \\cos(x)\\sin(y) + \\sin(x)\\cos(y) - \\cos(x)\\sin(y)" },
            { verbal_explanation: "ביטול איברים זהים והפוכים בסימנם (קוסינוס כפול סינוס).", math_expression: "y = \\sin(x)\\cos(y) + \\sin(x)\\cos(y)" },
            { verbal_explanation: "חיבור האיברים הזהים שנותרו לביטוי כפלי פשוט.", math_expression: "y = 2\\sin(x)\\cos(y)" }
        ],
        final_answer: "2sin(x)cos(y)"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "זהויות טריגונומטריות של מחצית זווית וסכום זוויות",
        question_text: "נתון כי \\( \\tan(x) = 2 \\). חשבו את הערך של \\( \\tan(2x) \\) ללא מציאת הזווית x עצמה.&rlm;",
        options: ["-4 : 3", "4 : 3", "4", "4 : 5"],
        correctAnswer: 0,
        hint: "השתמשו בזהות לטנגנס של זווית כפולה: שני טנגנס x, חלקי (1 פחות טנגנס בריבוע x).",
        solution_steps: [
            { verbal_explanation: "ציון הזהות הייעודית לפונקציית הטנגנס בזווית כפולה המאפשרת חישוב ללא זווית ישירה.", math_expression: "\\tan(2x) = \\dfrac{2\\tan(x)}{1 - \\tan^{2}(x)}" },
            { verbal_explanation: "הצבת הערך המספרי של הטנגנס שניתן בשאלה לתוך המונה והמכנה גם יחד.", math_expression: "\\tan(2x) = \\dfrac{2(2)}{1 - 2^{2}}" },
            { verbal_explanation: "ביצוע כפל פשוט באגף המונה העליון.", math_expression: "\\tan(2x) = \\dfrac{4}{1 - 4}" },
            { verbal_explanation: "ביצוע החיסור בחלק התחתון של השבר וקבלת מספר שלילי.", math_expression: "\\tan(2x) = \\dfrac{4}{-3}" },
            { verbal_explanation: "העברת סימן המינוס למרכז השבר לשם הצגה תקנית וסופית.", math_expression: "\\tan(2x) = -\\dfrac{4}{3}" }
        ],
        final_answer: "-4 : 3"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "זהויות טריגונומטריות של מחצית זווית וסכום זוויות",
        question_text: "פשטו את הביטוי הבא עד לקבלת פונקציה יחידה: \\( \\dfrac{1 - \\cos(2x)}{2} \\).&rlm;",
        options: ["sin²(x)", "cos²(x)", "tan²(x)", "sin(x)"],
        correctAnswer: 0,
        hint: "השתמשו בזהות לזווית כפולה של קוסינוס (1 פחות 2 סינוס בריבוע). הציבו אותה במונה, פתחו סוגריים וצמצמו.",
        solution_steps: [
            { verbal_explanation: "ציון הזהות הרלוונטית הממירה את הזווית הכפולה לחזקה ריבועית של פונקציה רגילה.", math_expression: "\\cos(2x) = 1 - 2\\sin^{2}(x)" },
            { verbal_explanation: "הצבת הזהות בשלמותה, כולל סוגריים המגינים עליה, במונה של הביטוי הנתון.", math_expression: "y = \\dfrac{1 - (1 - 2\\sin^{2}(x))}{2}" },
            { verbal_explanation: "פתיחת הסוגריים אשר הופכת את סימן המינוס הכפול לפלוס אלגברי פשוט.", math_expression: "y = \\dfrac{1 - 1 + 2\\sin^{2}(x)}{2}" },
            { verbal_explanation: "חיסור המספרים השלמים מותיר מונה נקי מורכב מאיבר אחד.", math_expression: "y = \\dfrac{2\\sin^{2}(x)}{2}" },
            { verbal_explanation: "צמצום המקדם הזהה משני צידי קו השבר חותם את תהליך הפישוט.", math_expression: "y = \\sin^{2}(x)" }
        ],
        final_answer: "sin²(x)"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "זהויות טריגונומטריות של מחצית זווית וסכום זוויות",
        question_text: "חשבו במדויק את הערך של \\( \\cos(105^{\\circ}) \\).&rlm;",
        options: ["(√2 - √6) : 4", "(√6 - √2) : 4", "-(√6 + √2) : 4", "√2 : 4"],
        correctAnswer: 0,
        hint: "פצלו את הזווית לחיבור של שתי זוויות ידועות (60 + 45). השתמשו בנוסחת הסכום: קוסינוס הראשון כפול קוסינוס השני, פחות סינוס הראשון כפול סינוס השני.",
        solution_steps: [
            { verbal_explanation: "פירוק הזווית הרחבה לסכום של זוויות שניתן לחשב בקלות בעזרת ערכי יסוד.", math_expression: "\\cos(105^{\\circ}) = \\cos(60^{\\circ} + 45^{\\circ})" },
            { verbal_explanation: "החלת הנוסחה הייעודית לסכום זוויות תחת פונקציית הקוסינוס (ההופכת פלוס למינוס).", math_expression: "\\cos(60^{\\circ} + 45^{\\circ}) = \\cos(60^{\\circ})\\cos(45^{\\circ}) - \\sin(60^{\\circ})\\sin(45^{\\circ})" },
            { verbal_explanation: "הצבת כלל הערכים השורשיים והשבריים הידועים במקום הפונקציות המפורשות.", math_expression: "= \\dfrac{1}{2} \\times \\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{3}}{2} \\times \\dfrac{\\sqrt{2}}{2}" },
            { verbal_explanation: "הכפלת השברים בנפרד (מונה כפול מונה, מכנה כפול מכנה).", math_expression: "= \\dfrac{\\sqrt{2}}{4} - \\dfrac{\\sqrt{6}}{4}" },
            { verbal_explanation: "חיבור השברים בעלי המכנה המשותף כדי להציג תשובה כביטוי יחידני ומרוכז.", math_expression: "= \\dfrac{\\sqrt{2} - \\sqrt{6}}{4}" }
        ],
        final_answer: "(√2 - √6) : 4"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "זהויות טריגונומטריות של מחצית זווית וסכום זוויות",
        question_text: "פשטו את הביטוי הכופלי הבא והביעו אותו בעזרת זווית אחת בלבד: \\( 4\\sin(x)\\cos(x)\\cos(2x) \\).&rlm;",
        options: ["sin(4x)", "sin(2x)", "2sin(4x)", "cos(4x)"],
        correctAnswer: 0,
        hint: "היעזרו בזהות הכפולה כמה פעמים. קודם, קבצו את שני הסינוס והקוסינוס ליצירת סינוס 2x, והמשיכו משם.",
        solution_steps: [
            { verbal_explanation: "ארגון מחדש של הגורמים כדי לחשוף את התבנית המוכרת לזהות הזווית הכפולה.", math_expression: "y = 2 \\times (2\\sin(x)\\cos(x)) \\times \\cos(2x)" },
            { verbal_explanation: "החלפת הביטוי שבסוגריים בזהות הסינוס לזווית כפולה בהתאמה לחוקים.", math_expression: "y = 2 \\times \\sin(2x) \\times \\cos(2x)" },
            { verbal_explanation: "זיהוי כי הביטוי שנוצר כעת מהווה בעצמו תבנית חוזרת של אותה הזהות, רק על זווית גדולה פי שתיים.", math_expression: "2\\sin(\\alpha)\\cos(\\alpha) = \\sin(2\\alpha)" },
            { verbal_explanation: "הפעלת הזהות שוב, הפעם על הזווית המורכבת (הכפלתה בשתיים).", math_expression: "y = \\sin(2 \\times 2x)" },
            { verbal_explanation: "סיום הפישוט עם ביטוי בודד ונקי.", math_expression: "y = \\sin(4x)" }
        ],
        final_answer: "sin(4x)"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "זהויות טריגונומטריות של מחצית זווית וסכום זוויות",
        question_text: "מצאו איזה מהביטויים הבאים חופף וזהה בערכו לביטוי המורכב \\( \\cos^{4}(x) - \\sin^{4}(x) \\).&rlm;",
        options: ["cos(2x)", "sin(2x)", "1", "cos(4x)"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת הפרש ריבועים כדי לפרק את החזקה הרביעית לשתי מסגרות (האחת חיבור ריבועים והשנייה חיסורם).",
        solution_steps: [
            { verbal_explanation: "הכרה בכך שחזקה רביעית ניתנת לייצוג כריבוע של ריבוע, לצורך הפעלת נוסחאות אלגבריות.", math_expression: "(\\cos^{2}(x))^{2} - (\\sin^{2}(x))^{2}" },
            { verbal_explanation: "הפעלת נוסחת הפרש ריבועים ליצירת מכפלה של שני סוגריים (חיבור וחיסור).", math_expression: "(\\cos^{2}(x) + \\sin^{2}(x)) \\times (\\cos^{2}(x) - \\sin^{2}(x))" },
            { verbal_explanation: "זיהוי הסוגריים הראשונים כזהות הפיתגורס הבסיסית אשר ערכה עומד תמיד על אחת.", math_expression: "(\\cos^{2}(x) + \\sin^{2}(x)) = 1" },
            { verbal_explanation: "הצבת האחת ונטרול חצי מהמשוואה.", math_expression: "1 \\times (\\cos^{2}(x) - \\sin^{2}(x))" },
            { verbal_explanation: "זיהוי הסוגריים הנותרים כזהות טריגונומטרית מוכרת לזווית כפולה.", math_expression: "\\cos^{2}(x) - \\sin^{2}(x) = \\cos(2x)" },
            { verbal_explanation: "הסקת המסקנה הסופית.", math_expression: "y = \\cos(2x)" }
        ],
        final_answer: "cos(2x)"
    },

    // ==========================================
    // תת נושא 4: פתרון משוואות טריגונומטריות כלליות במישור (חקירת פתרונות) (10 שאלות)
    // ==========================================

    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון משוואות טריגונומטריות כלליות במישור (חקירת פתרונות)",
        question_text: "כמה פתרונות (נקודות חיתוך עם הציר) יש למשוואה \\( \\sin(2x) = 1 \\) בתוך התחום הסגור \\( 0 \\leq x \\leq 2\\pi \\)?&rlm;",
        options: ["2", "4", "1", "3"],
        correctAnswer: 0,
        hint: "הפתרון הכללי מתקבל כאשר הזווית שווה לפאי חלקי 2 ועוד מחזורים של שני פאי. מצאו את הביטוי ל-x הכללי, והציבו k-ים שונים לבדיקה בתחום.",
        solution_steps: [
            { verbal_explanation: "הגדרת הפתרון הכללי במעגל היחידה למקרה בו סינוס מקבל את ערך השיא שלו.", math_expression: "2x = 0.5\\pi + 2\\pi k" },
            { verbal_explanation: "חלוקת המשוואה כולה בשתיים לבידוד המשתנה המקורי ולציון המחזוריות המדויקת שלו.", math_expression: "x = 0.25\\pi + \\pi k" },
            { verbal_explanation: "הצבת המספר השלם אפס כדי לבדוק האם הפתרון הראשון נכלל בתחום הנתון.", math_expression: "k = 0 \\Rightarrow x_{1} = 0.25\\pi" },
            { verbal_explanation: "הצבת המספר השלם אחת כדי לאתר את הפתרון השני ולבחון את חוקיותו.", math_expression: "k = 1 \\Rightarrow x_{2} = 0.25\\pi + \\pi = 1.25\\pi" },
            { verbal_explanation: "בדיקת השלם הבא המוכיחה כי אנו חורגים מהתחום המותר.", math_expression: "k = 2 \\Rightarrow x_{3} = 2.25\\pi > 2\\pi" },
            { verbal_explanation: "ספירת הפתרונות החוקיים שנמצאו לאורך ציר הזמן.", math_expression: "n = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון משוואות טריגונומטריות כלליות במישור (חקירת פתרונות)",
        question_text: "פתרו את המשוואה הטריגונומטרית הבאה: \\( 2\\cos^{2}(x) - \\cos(x) - 1 = 0 \\) ומצאו את הפתרונות בתחום \\( 0 \\leq x < 2\\pi \\).&rlm;",
        options: ["0, 2π : 3, 4π : 3", "0.5π, 1.5π", "π : 3, π", "0, π : 2, π"],
        correctAnswer: 0,
        hint: "הציבו t = cos(x) כדי לקבל משוואה ריבועית רגילה ב-t. פתרו אותה, חזרו לקוסינוס ומצאו את כל הזוויות בתחום המוגדר שנותנות ערכים אלו.",
        solution_steps: [
            { verbal_explanation: "הגדרת משתנה עזר להחלפת הפונקציה הטריגונומטרית לשם יצירת פולינום נוח.", math_expression: "t = \\cos(x)" },
            { verbal_explanation: "הצבת משתנה העזר ויצירת משוואה ממעלה שנייה.", math_expression: "2t^{2} - t - 1 = 0" },
            { verbal_explanation: "שימוש בנוסחת השורשים או בפירוק לגורמים לשם פתרון המערכת.", math_expression: "(2t + 1)(t - 1) = 0" },
            { verbal_explanation: "מציאת הפתרונות הממשיים עבור משתנה העזר הזמני.", math_expression: "t_{1} = 1 \\quad , \\quad t_{2} = -0.5" },
            { verbal_explanation: "חזרה למשתנה המקורי ובחינת המסלול הראשון: מתי הקוסינוס שווה לאחת.", math_expression: "\\cos(x) = 1 \\Rightarrow x_{1} = 0" },
            { verbal_explanation: "בחינת המסלול השני: מתי הקוסינוס שווה לחצי שלילי ברביע השני והשלישי.", math_expression: "\\cos(x) = -0.5 \\Rightarrow x_{2} = \\dfrac{2\\pi}{3} \\quad , \\quad x_{3} = \\dfrac{4\\pi}{3}" },
            { verbal_explanation: "איגוד כלל הפתרונות תחת הגדרת גבולות השאלה.", math_expression: "\\{0, \\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}\\}" }
        ],
        final_answer: "0, 2π : 3, 4π : 3"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון משוואות טריגונומטריות כלליות במישור (חקירת פתרונות)",
        question_text: "נתונה המשוואה \\( \\sin(2x) = \\sin(x) \\). מצאו את מספר הפתרונות השונים של המשוואה בתוך התחום הסגור \\( 0 \\leq x \\leq 2\\pi \\).&rlm;",
        options: ["5", "3", "4", "2"],
        correctAnswer: 0,
        hint: "המירו את סינוס זווית כפולה לפי הנוסחה. הוציאו גורם משותף sin(x). השוו לאפס את שני הגורמים ומצאו את כל הפתרונות במעגל המלא.",
        solution_steps: [
            { verbal_explanation: "שימוש בזהות לזווית כפולה כדי לפרק את אגף שמאל ולהביאו לאותו הבסיס כמו הימין.", math_expression: "2\\sin(x)\\cos(x) = \\sin(x)" },
            { verbal_explanation: "העברת איברים לאגף אחד בלבד והשוואה לאפס.", math_expression: "2\\sin(x)\\cos(x) - \\sin(x) = 0" },
            { verbal_explanation: "הוצאת גורם משותף כדי לאפשר פיצול למערכת של שתי משוואות מקבילות.", math_expression: "\\sin(x)(2\\cos(x) - 1) = 0" },
            { verbal_explanation: "פתרון המסלול הראשון בתחום הסגור (מתי הסינוס מתאפס).", math_expression: "\\sin(x) = 0 \\Rightarrow x \\in \\{0, \\pi, 2\\pi\\}" },
            { verbal_explanation: "פתרון המסלול השני: השוואת הגורם הנותר לאפס ובידוד הקוסינוס.", math_expression: "2\\cos(x) - 1 = 0 \\Rightarrow \\cos(x) = 0.5" },
            { verbal_explanation: "מציאת הזוויות בתחום המקיימות את הפתרון השני (ברביע הראשון והרביעי).", math_expression: "x \\in \\{\\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}\\}" },
            { verbal_explanation: "ספירת כלל הפתרונות שנאספו.", math_expression: "n = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון משוואות טריגונומטריות כלליות במישור (חקירת פתרונות)",
        question_text: "פתרו את המשוואה וקבעו מהם שורשיה בתחום המצומצם \\( 0 \\leq x \\leq \\pi \\): \\( \\cos^{2}(x) = 0.75 \\).&rlm;",
        options: ["π : 6 , 5π : 6", "π : 3 , 2π : 3", "π : 6", "0.5π"],
        correctAnswer: 0,
        hint: "הוציאו שורש משני הצדדים. זכרו שיש שני פתרונות (חיובי ושלילי). לקוסינוס חיובי יש פתרון אחד ברביע הראשון, ולקוסינוס שלילי פתרון שני ברביע השני.",
        solution_steps: [
            { verbal_explanation: "הוצאת שורש ריבועי מכל צד של המשוואה כדי לבטל את החזקה, פעולה המייצרת פתרונות בשני סימנים.", math_expression: "\\cos(x) = \\pm\\sqrt{0.75} = \\pm\\dfrac{\\sqrt{3}}{2}" },
            { verbal_explanation: "בחינת האפשרות החיובית במרחב הנתון המוגבל לרביע העליון והשני.", math_expression: "\\cos(x) = \\dfrac{\\sqrt{3}}{2} \\Rightarrow x_{1} = \\dfrac{\\pi}{6}" },
            { verbal_explanation: "הבנה שפתרון חיובי נוסף מצוי ברביע הרביעי אשר נופל מחוץ לגבולות השאלה.", math_expression: "\\dfrac{11\\pi}{6} > \\pi" },
            { verbal_explanation: "בחינת האפשרות השלילית (אזור הרביע השני במעגל היחידה).", math_expression: "\\cos(x) = -\\dfrac{\\sqrt{3}}{2} \\Rightarrow x_{2} = \\pi - \\dfrac{\\pi}{6} = \\dfrac{5\\pi}{6}" },
            { verbal_explanation: "איגוד שני הפתרונות הכשרים לתשובה מוחלטת.", math_expression: "\\{ \\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6} \\}" }
        ],
        final_answer: "π : 6 , 5π : 6"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון משוואות טריגונומטריות כלליות במישור (חקירת פתרונות)",
        question_text: "מצאו פתרון כללי (במעלות) עבור המשוואה: \\( \\sin(x) + \\cos(x) = 0 \\).&rlm;",
        options: ["x = -45° + 180°k", "x = 45° + 360°k", "x = -45° + 360°k", "x = 135° + 360°k"],
        correctAnswer: 0,
        hint: "העבירו אגף כדי לקבל קוסינוס שלילי באגף השני. חלקו את המשוואה כולה בקוסינוס כדי לקבל פונקציית טנגנס. פתרו עבורה.",
        solution_steps: [
            { verbal_explanation: "העברת פונקציית הקוסינוס לאגף ימין המעניקה לה סימן שלילי.", math_expression: "\\sin(x) = -\\cos(x)" },
            { verbal_explanation: "חלוקת שני אגפי המשוואה בקוסינוס.", math_expression: "\\dfrac{\\sin(x)}{\\cos(x)} = -1" },
            { verbal_explanation: "המרת המנה המוכרת לפונקציית טנגנס.", math_expression: "\\tan(x) = -1" },
            { verbal_explanation: "זיהוי הזווית הבסיסית המניבה ערך זה באמצעות פונקציה הופכית.", math_expression: "x = \\arctan(-1) = -45^{\\circ}" },
            { verbal_explanation: "הוספת המחזוריות הייחודית של פונקציית הטנגנס (מאה ושמונים מעלות).", math_expression: "x = -45^{\\circ} + 180^{\\circ}k" },
            { verbal_explanation: "הצגת הפתרון בצורה הסופית.", math_expression: "1=1" }
        ],
        final_answer: "x = -45° + 180°k"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון משוואות טריגונומטריות כלליות במישור (חקירת פתרונות)",
        question_text: "חוקרים את מספר הפתרונות של המשוואה \\( \\tan^{2}(x) = 3 \\) בתחום \\( 0 \\leq x < 2\\pi \\). כמה פתרונות קיימים?&rlm;",
        options: ["4", "2", "1", "0"],
        correctAnswer: 0,
        hint: "הוצאת שורש נותנת שתי משוואות מנוגדות. לטנגנס יש מחזור של פאי (חצי מעגל), ולכן כל משוואה תניב 2 פתרונות במעגל שלם.",
        solution_steps: [
            { verbal_explanation: "ביצוע הוצאת שורש המפצלת את התרגיל לשני אפיקי חקירה שונים.", math_expression: "\\tan(x) = \\pm\\sqrt{3}" },
            { verbal_explanation: "בדיקת המסלול החיובי והזווית הראשונית שלו.", math_expression: "\\tan(x) = \\sqrt{3} \\Rightarrow x_{1} = \\dfrac{\\pi}{3}" },
            { verbal_explanation: "הוספת מחזוריות טנגנס למציאת הפתרון הבא באותו מסלול בתחום המוגדר.", math_expression: "x_{2} = \\dfrac{\\pi}{3} + \\pi = \\dfrac{4\\pi}{3}" },
            { verbal_explanation: "בדיקת המסלול השלילי למציאת הזווית הראשונית הקבילה בתחום החיובי.", math_expression: "\\tan(x) = -\\sqrt{3} \\Rightarrow x_{3} = \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}" },
            { verbal_explanation: "הוספת מחזור נוסף למציאת הפתרון האחרון.", math_expression: "x_{4} = \\dfrac{2\\pi}{3} + \\pi = \\dfrac{5\\pi}{3}" },
            { verbal_explanation: "ספירת כמות הפתרונות הממשיים שנאגרו.", math_expression: "n = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון משוואות טריגונומטריות כלליות במישור (חקירת פתרונות)",
        question_text: "קבעו מהו הפתרון של המשוואה \\( \\sin(3x) = \\cos(3x) \\) ברביע הראשון \\( 0 < x < 0.5\\pi \\).&rlm;",
        options: ["x = π : 12", "x = π : 6", "x = π : 4", "x = π : 3"],
        correctAnswer: 0,
        hint: "חילקו בקוסינוס לקבלת טנגנס (של אותה הזווית הפנימית). טנגנס של זווית כלשהי שווה 1. מצאו את הזווית ולאחר מכן חלקו במקדם.",
        solution_steps: [
            { verbal_explanation: "חלוקת המשוואה בקוסינוס מעבירה אותנו לפונקציית הטנגנס הנוחה יותר לעבודה.", math_expression: "\\dfrac{\\sin(3x)}{\\cos(3x)} = 1" },
            { verbal_explanation: "זהות הטנגנס הופכת את האגף השמאלי לביטוי יחיד.", math_expression: "\\tan(3x) = 1" },
            { verbal_explanation: "מציאת הפתרון הכללי והבסיסי במעלות (או רדיאנים) המניב ערך זה.", math_expression: "3x = \\dfrac{\\pi}{4} + \\pi k" },
            { verbal_explanation: "חלוקת המשוואה בשלוש לשם חילוץ המשתנה הטהור.", math_expression: "x = \\dfrac{\\pi}{12} + \\dfrac{\\pi k}{3}" },
            { verbal_explanation: "הצבת השלם אפס למציאת הפתרון הראשון שנמצא ברביע המבוקש.", math_expression: "k = 0 \\Rightarrow x = \\dfrac{\\pi}{12}" },
            { verbal_explanation: "הסבר הושלם.", math_expression: "1=1" }
        ],
        final_answer: "x = π : 12"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון משוואות טריגונומטריות כלליות במישור (חקירת פתרונות)",
        question_text: "היעזרו בזהויות כדי לפתור את המשוואה \\( \\cos(2x) + \\cos(x) = 0 \\) בתחום \\( 0 \\leq x \\leq \\pi \\). מהו הפתרון?&rlm;",
        options: ["x = π : 3 , x = π", "x = 0.5π", "x = π : 4", "x = 2π : 3"],
        correctAnswer: 0,
        hint: "החליפו את (cos(2x בביטוי לפי קוסינוס: פעמיים קוסינוס בריבוע x, פחות 1. הציבו t=cos(x) ופתרו את המשוואה הריבועית.",
        solution_steps: [
            { verbal_explanation: "העלאת זהות הזווית הכפולה המתאימה ביותר לפונקציה המצויה בשאר המשוואה.", math_expression: "\\cos(2x) = 2\\cos^{2}(x) - 1" },
            { verbal_explanation: "הצבת הזהות לתוך המשוואה במקום המשתנה המורכב ליצירת משוואה עם נעלם יחיד בדרגות שונות.", math_expression: "2\\cos^{2}(x) - 1 + \\cos(x) = 0" },
            { verbal_explanation: "סידור הפולינום לצורתו הקלאסית היורדת.", math_expression: "2\\cos^{2}(x) + \\cos(x) - 1 = 0" },
            { verbal_explanation: "פירוק הטרינום לגורמים פשוטים.", math_expression: "(2\\cos(x) - 1)(\\cos(x) + 1) = 0" },
            { verbal_explanation: "חילוץ פתרון המסלול הראשון, בו קוסינוס שווה לחצי. פתרונו בתחום החיובי.", math_expression: "\\cos(x) = 0.5 \\Rightarrow x_{1} = \\dfrac{\\pi}{3}" },
            { verbal_explanation: "חילוץ פתרון מהמסלול השני בו הקוסינוס שווה למינוס אחת, המתרחש בקצה התחום המותר.", math_expression: "\\cos(x) = -1 \\Rightarrow x_{2} = \\pi" },
            { verbal_explanation: "איחוד שני הפתרונות הממשיים לתשובה.", math_expression: "\\{ \\dfrac{\\pi}{3} , \\pi \\}" }
        ],
        final_answer: "x = π : 3 , x = π"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון משוואות טריגונומטריות כלליות במישור (חקירת פתרונות)",
        question_text: "חקירת נקודות חיתוך: כמה נקודות מפגש יש בין הגרפים של \\( f(x) = \\sin(x) \\) ו- \\( g(x) = \\sin(2x) \\) בתחום הפתוח \\( 0 < x < \\pi \\)?&rlm;",
        options: ["1", "0", "2", "3"],
        correctAnswer: 0,
        hint: "השוו את הפונקציות. פתחו את sin(2x) ל- 2sin(x)cos(x). העבירו אגפים, הוציאו sin(x) כגורם משותף, ופתרו. התחום הפתוח פוסל את הפתרונות 0 ו-π.",
        solution_steps: [
            { verbal_explanation: "בניית משוואת ההשוואה לאיתור נקודות חיתוך גיאומטריות.", math_expression: "\\sin(2x) = \\sin(x)" },
            { verbal_explanation: "הפעלת זהות זווית כפולה על אגף השמאל להשוואת בסיסים.", math_expression: "2\\sin(x)\\cos(x) = \\sin(x)" },
            { verbal_explanation: "העברת האיבר לאגף שמאל והוצאת הפונקציה המשותפת החוצה כמקדם.", math_expression: "\\sin(x)(2\\cos(x) - 1) = 0" },
            { verbal_explanation: "בחינת נתיב האיפוס של הסינוס המניבה שני שורשים אשר נפסלים כי הם גבולות התחום הפתוח.", math_expression: "\\sin(x) = 0 \\Rightarrow x \\in \\{0, \\pi\\} \\notin (0, \\pi)" },
            { verbal_explanation: "בחינת הערוץ הנותר בו הקוסינוס נדרש להתאזן.", math_expression: "2\\cos(x) - 1 = 0 \\Rightarrow \\cos(x) = 0.5" },
            { verbal_explanation: "מציאת הזווית היחידה בתחום המקיימת זאת המהווה את נקודת המפגש היחידה.", math_expression: "x = \\dfrac{\\pi}{3}" },
            { verbal_explanation: "סיכום כמות הפתרונות.", math_expression: "n = 1" }
        ],
        final_answer: "1"
    },
    {
        topic: "trigo_geometry_571",
        subTopic: "פתרון משוואות טריגונומטריות כלליות במישור (חקירת פתרונות)",
        question_text: "קבעו מהו הפתרון היחיד של המשוואה \\( \\tan(x) + \\dfrac{1}{\\tan(x)} = 2 \\) בתחום \\( 0 < x < \\pi \\).&rlm;",
        options: ["x = 0.25π", "x = 0.5π", "x = 0.75π", "x = π : 3"],
        correctAnswer: 0,
        hint: "הציבו t = tan(x) ופתרו את המשוואה. הכפילו את כולה ב-t כדי לקבל משוואה ריבועית פשוטה.",
        solution_steps: [
            { verbal_explanation: "הגדרת משתנה עזר להעלמת הפונקציה המורכבת לטובת חישוב אלגברי נוח.", math_expression: "t = \\tan(x)" },
            { verbal_explanation: "הצבת המשתנה וניסוח משוואה המכילה שבר.", math_expression: "t + \\dfrac{1}{t} = 2" },
            { verbal_explanation: "הכפלת המשוואה כולה במשתנה כדי להעיף את המכנה.", math_expression: "t^{2} + 1 = 2t" },
            { verbal_explanation: "העברת איברים ליצירת פולינום ממעלה שנייה עם תבנית כפל מקוצר ברורה.", math_expression: "t^{2} - 2t + 1 = 0 \\Rightarrow (t - 1)^{2} = 0" },
            { verbal_explanation: "חילוץ הערך היחיד של המשתנה הזמני המאפס את הביטוי.", math_expression: "t = 1" },
            { verbal_explanation: "החזרת הפונקציה המקורית והשוואתה לערך שהושג למציאת הזווית הרצויה בתחום המבוקש.", math_expression: "\\tan(x) = 1 \\Rightarrow x = \\dfrac{\\pi}{4} = 0.25\\pi" }
        ],
        final_answer: "x = 0.25π"
    }
];
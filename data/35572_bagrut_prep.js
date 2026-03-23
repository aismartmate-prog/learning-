const questionsDB = [
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות קיץ 2021, מועד ב']</span><br><br>נתונה המשוואה במישור המרוכב: \\( z^{3} = 8i \\).<br>א. פתרו את המשוואה ומצאו את שלושת שורשיה.<br>ב. הראו שהשורשים מהווים קודקודים של משולש שווה צלעות וחשבו את שטחו.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='100' cy='100' r='80' fill='none' stroke='#94a3b8' stroke-width='2'/><polygon points='100,20 30.7,140 169.3,140' fill='#3b82f6' fill-opacity='0.2' stroke='#3b82f6' stroke-width='2'/><line x1='100' y1='100' x2='100' y2='20' stroke='#1e293b' stroke-dasharray='4,4'/><circle cx='100' cy='100' r='4' fill='#ef4444'/></svg></div>",
        options: ["א: 2i, -√3-i, √3-i | ב: 3√3", "א: -2i, -√3+i, √3+i | ב: 3√3", "א: 2i, -√3-i, √3-i | ב: 4√3", "א: -2i, -√3+i, √3+i | ב: 4√3"],
        correctAnswer: 1,
        hint: "המירו את 8i להצגה פולרית. הפעילו את נוסחת שורשי היחידה. שטח המשולש מחושב לפי רדיוס המעגל וזווית המרכז.",
        solution_steps: [
            { verbal_explanation: "המרת אגף ימין למבנה קוטבי טריגונומטרי טהור.", math_expression: "z^{3} = 8(\\cos(90^{\\circ}) + i\\sin(90^{\\circ}))" },
            { verbal_explanation: "הפעלת נוסחת השורשים המרוכבים הכללית למציאת הפתרונות.", math_expression: "z_{k} = \\sqrt[3]{8}(\\cos(\\dfrac{90^{\\circ} + 360^{\\circ}k}{3}) + i\\sin(\\dfrac{90^{\\circ} + 360^{\\circ}k}{3}))" },
            { verbal_explanation: "פישוט הנוסחה להצבות עוקבות של האינדקס.", math_expression: "z_{k} = 2(\\cos(30^{\\circ} + 120^{\\circ}k) + i\\sin(30^{\\circ} + 120^{\\circ}k))" },
            { verbal_explanation: "הצבת האינדקסים לאיתור שלושת השורשים בייצוג אלגברי.", math_expression: "z_{0} = \\sqrt{3} + i \\quad , \\quad z_{1} = -\\sqrt{3} + i \\quad , \\quad z_{2} = -2i" },
            { verbal_explanation: "זיהוי הרדיוס של המעגל החוסם מתוך שורשי היחידה.", math_expression: "R = 2" },
            { verbal_explanation: "הצבת הרדיוס והזווית המרכזית בנוסחת שטח משולש משוכלל החסום במעגל.", math_expression: "S = 3 \\times \\dfrac{R^{2}\\sin(120^{\\circ})}{2}" },
            { verbal_explanation: "חישוב שטח המשולש במישור גאוס.", math_expression: "S = 3 \\times \\dfrac{4 \\times \\dfrac{\\sqrt{3}}{2}}{2} = 3\\sqrt{3}" }
        ],
        final_answer: "א: -2i, -√3+i, √3+i | ב: 3√3"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות חורף 2022, מועד א']</span><br><br>נתונה הפרבולה \\( y^{2} = 12x \\). הנקודה A נמצאת על הפרבולה ברביע הראשון.<br>א. המרחק של נקודה A ממוקד הפרבולה הוא 12. מצאו את שיעורי הנקודה A.<br>ב. העבירו משיק לפרבולה דרך נקודה A. מצאו את משוואת המשיק.<br>ג. המשיק חותך את ציר ה-x בנקודה B. חשבו את שטח המשולש ABF (כאשר F הוא מוקד הפרבולה).&rlm;",
        options: ["א: (9, 6√3) | ב: y = (√3:3)x + 3√3 | ג: 36√3", "א: (9, 12) | ב: y = 0.5x + 7.5 | ג: 48", "א: (6, 6√2) | ב: y = (√2:2)x + 3√2 | ג: 24√2", "א: (9, 6√3) | ב: y = (√3:2)x + 2√3 | ג: 36√3"],
        correctAnswer: 0,
        hint: "המרחק מהמוקד שווה למרחק מהמדריך. מדריך הפרבולה הוא הישר x = -p/2. שטח משולש במערכת צירים מחושב כבסיס כפול גובה חלקי שתיים.",
        solution_steps: [
            { verbal_explanation: "חילוץ פרמטר הפרבולה ואיתור המוקד על ציר הסימטריה.", math_expression: "2p = 12 \\Rightarrow p = 6 \\Rightarrow F(3, 0)" },
            { verbal_explanation: "שימוש בתכונת הפרבולה המשווה את המרחק מהמוקד למרחק מן המדריך.", math_expression: "d = x_{A} + \\dfrac{p}{2} \\Rightarrow x_{A} + 3 = 12 \\Rightarrow x_{A} = 9" },
            { verbal_explanation: "הצבת הערך במשוואת הפרבולה למציאת הגובה ברביע הראשון.", math_expression: "y_{A}^{2} = 12(9) = 108 \\Rightarrow y_{A} = \\sqrt{108} = 6\\sqrt{3}" },
            { verbal_explanation: "מציאת משוואת המשיק באמצעות הנוסחה הקנונית למשיק בנקודה נתונה.", math_expression: "y \\times 6\\sqrt{3} = 6(x + 9)" },
            { verbal_explanation: "בידוד המשתנה התלוי להצגה מפורשת של משוואת הקו הישר.", math_expression: "y = \\dfrac{x + 9}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}x + 3\\sqrt{3}" },
            { verbal_explanation: "מציאת נקודת החיתוך של המשיק עם הציר האופקי.", math_expression: "y = 0 \\Rightarrow x_{B} = -9 \\Rightarrow B(-9, 0)" },
            { verbal_explanation: "חישוב אורך בסיס המשולש (על הציר) והכפלתו בגובה הנקודה לשם מציאת השטח.", math_expression: "d_{BF} = 3 - (-9) = 12 \\Rightarrow S = \\dfrac{12 \\times 6\\sqrt{3}}{2} = 36\\sqrt{3}" }
        ],
        final_answer: "א: (9, 6√3) | ב: y = (√3:3)x + 3√3 | ג: 36√3"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות חורף 2020, מועד א']</span><br><br>נתונים שני ישרים מצטלבים במרחב הגיאומטרי: \\( l_{1}: (2, -1, 2) + t(1, 0, -1) \\) ו- \\( l_{2}: (1, 1, 0) + s(0, 1, 1) \\).<br>א. מצאו את משוואת המישור המכיל את \\( l_{1} \\) ומקביל ל- \\( l_{2} \\).<br>ב. חשבו את המרחק בין שני הישרים המצטלבים הללו.&rlm;",
        options: ["א: x-y+z-5=0 | ב: 5:√3", "א: x+y+z-4=0 | ב: √3", "א: 2x-y+z-8=0 | ב: 5:√3", "א: x-y+z-5=0 | ב: 2"],
        correctAnswer: 0,
        hint: "בצעו מכפלה וקטורית בין כיווני הישרים למציאת הנורמל למישור. הציבו את נקודת ההתחלה של הישר הראשון למציאת משוואת המישור, ואז את נקודת ההתחלה של השני בנוסחת המרחק.",
        solution_steps: [
            { verbal_explanation: "קביעת וקטורי הכיוון מתוך הישרים לשם יצירת בסיס למישור.", math_expression: "\\vec{v_{1}} = (1, 0, -1) \\quad , \\quad \\vec{v_{2}} = (0, 1, 1)" },
            { verbal_explanation: "ביצוע מכפלה וקטורית לאיתור וקטור נורמל המאונך לשניהם גם יחד.", math_expression: "\\vec{n} = (1, -1, 1)" },
            { verbal_explanation: "הצבת נקודת המוצא של הישר הראשון במשוואת המישור למציאת המקדם החופשי.", math_expression: "1(2) - 1(-1) + 1(2) + d = 0" },
            { verbal_explanation: "חישוב המשוואה להשלמת המקדם.", math_expression: "2 + 1 + 2 + d = 0 \\Rightarrow d = -5" },
            { verbal_explanation: "הרכבת המשוואה המלאה למישור הגיאומטרי.", math_expression: "x - y + z - 5 = 0" },
            { verbal_explanation: "הפעלת נוסחת המרחק מנקודת המוצא של הישר השני אל המישור שנמצא.", math_expression: "d = \\dfrac{|1(1) - 1(1) + 1(0) - 5|}{\\sqrt{1^{2} + (-1)^{2} + 1^{2}}}" },
            { verbal_explanation: "חישוב המונה והמכנה לקבלת המרחק המוחלט.", math_expression: "d = \\dfrac{|-5|}{\\sqrt{3}} = \\dfrac{5}{\\sqrt{3}}" }
        ],
        final_answer: "א: x-y+z-5=0 | ב: 5:√3"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות קיץ 2019, מועד א']</span><br><br>נתונה הפונקציה \\( f(x) = x^{2} - c \\ln(x) \\), כאשר c פרמטר חיובי.<br>א. מצאו את תחום ההגדרה של הפונקציה.<br>ב. לפונקציה יש נקודת קיצון ב- \\( x = 1 \\). מצאו את הערך של c.<br>ג. קבעו את סוג נקודת הקיצון שמצאתם.<br>ד. מצאו את שיעורי נקודות הפיתול של הפונקציה, אם ישנן.&rlm;",
        options: ["א: x>0 | ב: c=2 | ג: מינימום | ד: אין פיתול", "א: x>0 | ב: c=1 | ג: מינימום | ד: x=1", "א: x≠0 | ב: c=2 | ג: מקסימום | ד: אין פיתול", "א: x>0 | ב: c=0.5 | ג: מינימום | ד: x=e"],
        correctAnswer: 0,
        hint: "הלוגריתם מגדיר את התחום. גזרו את הפונקציה (זכרו שהפרמטר נשאר ככופל קבוע) והשוו לאפס בהתאם לנתון. נגזרת שנייה תכריע את סוג הקיצון ואת קיומו של פיתול.",
        solution_steps: [
            { verbal_explanation: "מציאת תחום ההגדרה על ידי דרישת חיוביות על הארגומנט הפנימי של הלוגריתם הטבעי.", math_expression: "x > 0" },
            { verbal_explanation: "גזירת הפונקציה תוך השארת הפרמטר כמקדם שלם.", math_expression: "f'(x) = 2x - \\dfrac{c}{x}" },
            { verbal_explanation: "הצבת שיעור נקודת הקיצון הנתונה בתוך הנגזרת והשוואתה לאפס לשם חילוץ המשתנה.", math_expression: "2(1) - \\dfrac{c}{1} = 0 \\Rightarrow c = 2" },
            { verbal_explanation: "גזירה שנייה של הפונקציה לצורך בחינת הקעירות בסביבת הקיצון.", math_expression: "f''(x) = 2 + \\dfrac{2}{x^{2}}" },
            { verbal_explanation: "בדיקת סימן הנגזרת השנייה בנקודת הקיצון מראה על חיוביות מוחלטת.", math_expression: "f''(1) = 2 + 2 = 4 > 0" },
            { verbal_explanation: "הסקת סוג הקיצון מהנגזרת השנייה.", math_expression: "\\cup \\Rightarrow Min" },
            { verbal_explanation: "השוואת הנגזרת השנייה לאפס לאיתור נקודות פיתול אפשריות.", math_expression: "2 + \\dfrac{2}{x^{2}} = 0 \\Rightarrow \\dfrac{2}{x^{2}} = -2 \\Rightarrow x^{2} = -1" },
            { verbal_explanation: "פסילת המשוואה בשל חוסר היתכנות לקבלת ערך ריבועי שלילי במספרים ממשיים.", math_expression: "\\emptyset" }
        ],
        final_answer: "א: x>0 | ב: c=2 | ג: מינימום | ד: אין פיתול"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות חורף 2021, מועד ב']</span><br><br>נתונה הפונקציה \\( f(x) = \\dfrac{e^{x}}{e^{x} - 2} \\).<br>א. מצאו את תחום ההגדרה ואת האסימפטוטות האנכיות.<br>ב. מצאו את האסימפטוטות האופקיות.<br>ג. מצאו את תחומי העלייה והירידה של הפונקציה.<br>ד. חשבו את השטח הכלוא בין גרף הפונקציה, ציר ה-x והישרים \\( x = \\ln(3) \\) ו- \\( x = \\ln(4) \\).&rlm;",
        options: ["א: x≠ln(2) | ב: y=1, y=0 | ג: יורדת תמיד | ד: ln(2)", "א: x≠ln(2) | ב: y=1 בלבד | ג: עולה תמיד | ד: ln(3)", "א: x>0 | ב: y=1, y=0 | ג: יורדת תמיד | ד: ln(2)", "א: x≠0 | ב: y=2, y=0 | ג: עולה תמיד | ד: 1"],
        correctAnswer: 0,
        hint: "בסעיף השטח, הפונקציה מסודרת כנגזרת המכנה חלקי המכנה עצמו, ולכן הפונקציה הקדומה היא פשוט ln של המכנה.",
        solution_steps: [
            { verbal_explanation: "דרישה לאי-התאפסות המכנה קובעת את תחום ההגדרה והאסימפטוטה האנכית.", math_expression: "e^{x} - 2 \\neq 0 \\Rightarrow e^{x} \\neq 2 \\Rightarrow x \\neq \\ln(2)" },
            { verbal_explanation: "בדיקת האסימפטוטה האופקית בשאיפה לאינסוף חיובי.", math_expression: "\\lim_{x \\to \\infty} \\dfrac{e^{x}}{e^{x}} = 1 \\Rightarrow y = 1" },
            { verbal_explanation: "בדיקת האסימפטוטה האופקית בשאיפה לאינסוף שלילי.", math_expression: "\\lim_{x \\to -\\infty} \\dfrac{0}{0 - 2} = 0 \\Rightarrow y = 0" },
            { verbal_explanation: "גזירת הפונקציה באמצעות כלל המנה המורחב.", math_expression: "f'(x) = \\dfrac{e^{x}(e^{x} - 2) - e^{x} \\times e^{x}}{(e^{x} - 2)^{2}}" },
            { verbal_explanation: "פישוט מונה הנגזרת לבחינת סימנו.", math_expression: "f'(x) = \\dfrac{-2e^{x}}{(e^{x} - 2)^{2}}" },
            { verbal_explanation: "בחינת סימן הנגזרת המעידה על ירידה מתמדת.", math_expression: "f'(x) < 0 \\Rightarrow \\downarrow" },
            { verbal_explanation: "הגדרת האינטגרל לחישוב השטח ושימוש בתכונת הלוגריתם לפונקציה קדומה.", math_expression: "S = \\int_{\\ln(3)}^{\\ln(4)} \\dfrac{e^{x}}{e^{x} - 2} dx = [\\ln(e^{x} - 2)]_{\\ln(3)}^{\\ln(4)}" },
            { verbal_explanation: "הצבת הגבולות באינטגרל וחיסור לוגריתמי.", math_expression: "S = \\ln(4 - 2) - \\ln(3 - 2) = \\ln(2) - \\ln(1) = \\ln(2)" }
        ],
        final_answer: "א: x≠ln(2) | ב: y=1, y=0 | ג: יורדת תמיד | ד: ln(2)"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות קיץ 2019, מועד ב']</span><br><br>נתון המקום הגיאומטרי במישור גאוס המקיים \\( |z - 3i| = |z - 5| \\).<br>א. מצאו את משוואת המקום הגיאומטרי במישור הקרטזי.<br>ב. מצאו את המרחק בין ראשית הצירים לישר שמצאתם בסעיף א'.<br>ג. מצאו את שטח המשולש שנוצר על ידי הישר ושני הצירים הראשיים במערכת.&rlm;",
        options: ["א: 5x-3y-8=0 | ב: 8:√34 | ג: 32:15", "א: 5x+3y-8=0 | ב: 4:√34 | ג: 16:15", "א: 3x-5y-8=0 | ב: 8:√34 | ג: 32:15", "א: 5x-3y+8=0 | ב: 8:√34 | ג: 32:15"],
        correctAnswer: 0,
        hint: "הציבו אלגברה מרוכבת במקום הנעלם, אספו איברים ממשיים ומדומים, והעלו בריבוע. המרחק מראשית הצירים מחושב לפי נוסחת המרחק מנקודה לישר.",
        solution_steps: [
            { verbal_explanation: "פירוק המספר המרוכב לרכיביו האלגבריים והצבתם במשוואת המקום הגיאומטרי.", math_expression: "|x + (y - 3)i| = |(x - 5) + yi|" },
            { verbal_explanation: "העלאת אגפי המשוואה בריבוע כדי לחשוף את האורכים הממשיים.", math_expression: "x^{2} + (y - 3)^{2} = (x - 5)^{2} + y^{2}" },
            { verbal_explanation: "פתיחת סוגריים בשני אגפי המשוואה לפי נוסחאות הכפל המקוצר.", math_expression: "x^{2} + y^{2} - 6y + 9 = x^{2} - 10x + 25 + y^{2}" },
            { verbal_explanation: "צמצום איברים בריבוע וסידור המשוואה לקו ישר.", math_expression: "10x - 6y - 16 = 0 \\Rightarrow 5x - 3y - 8 = 0" },
            { verbal_explanation: "הפעלת נוסחת המרחק הדו-מימדית מראשית הצירים אל קו הישר.", math_expression: "d = \\dfrac{|5(0) - 3(0) - 8|}{\\sqrt{5^{2} + (-3)^{2}}}" },
            { verbal_explanation: "חישוב המרחק האבסולוטי במרחב.", math_expression: "d = \\dfrac{8}{\\sqrt{25 + 9}} = \\dfrac{8}{\\sqrt{34}}" },
            { verbal_explanation: "מציאת נקודות החיתוך של הישר עם הצירים לשם קביעת ניצבי המשולש.", math_expression: "x = 0 \\Rightarrow y = -\\dfrac{8}{3} \\quad , \\quad y = 0 \\Rightarrow x = \\dfrac{8}{5} = 1.6" },
            { verbal_explanation: "חישוב שטח המשולש ישר הזווית דרך הכפלת אורכי הניצבים המוחלטים וחלוקתם בשתיים.", math_expression: "S = \\dfrac{1.6 \\times \\dfrac{8}{3}}{2} = \\dfrac{32}{15}" }
        ],
        final_answer: "א: 5x-3y-8=0 | ב: 8:√34 | ג: 32:15"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות חורף 2019, מועד א']</span><br><br>נתונה הפונקציה \\( f(x) = x\\ln(x) \\).<br>א. מצאו את נקודת המינימום של הפונקציה.<br>ב. חשבו את השטח הכלוא בין גרף הפונקציה, המשיק לפונקציה בנקודת המינימום שלה, והישר \\( x = e \\).&rlm;",
        options: ["א: (1:e, -1:e) | ב: (e²-3):4e", "א: (e, 1) | ב: (e²-1):2", "א: (1:e, -1:e) | ב: (e-2):e", "א: (1, 0) | ב: (e²-3):4e"],
        correctAnswer: 0,
        hint: "המשיק בנקודת המינימום הוא ישר אופקי. השטח מחושב על ידי אינטגרציה של הפונקציה פחות המשיק. השתמשו באינטגרציה בחלקים.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה לשם איתור הקיצון המקומי.", math_expression: "f'(x) = 1 \\times \\ln(x) + x \\times \\dfrac{1}{x} = \\ln(x) + 1" },
            { verbal_explanation: "השוואה לאפס ובידוד המשתנה בעזרת הגדרת הלוגריתם.", math_expression: "\\ln(x) + 1 = 0 \\Rightarrow \\ln(x) = -1 \\Rightarrow x = \\dfrac{1}{e}" },
            { verbal_explanation: "הצבה בפונקציה המקורית למציאת הגובה באנך.", math_expression: "y = \\dfrac{1}{e}\\ln(\\dfrac{1}{e}) = -\\dfrac{1}{e}" },
            { verbal_explanation: "הגדרת המשיק האופקי העובר בנקודת המינימום المוחלט.", math_expression: "y = -\\dfrac{1}{e}" },
            { verbal_explanation: "הרכבת אינטגרל השטח בין הפונקציה העליונה למשיק התחתון בגבולות המבוקשים.", math_expression: "S = \\int_{1/e}^{e} (x\\ln(x) + \\dfrac{1}{e}) dx" },
            { verbal_explanation: "ביצוע אינטגרציה בחלקים לפונקציית המכפלה הלוגריתמית.", math_expression: "\\int x\\ln(x) dx = \\dfrac{x^{2}}{2}\\ln(x) - \\int \\dfrac{x^{2}}{2} \\times \\dfrac{1}{x} dx = \\dfrac{x^{2}}{2}\\ln(x) - \\dfrac{x^{2}}{4}" },
            { verbal_explanation: "הצבת הגבולות בפונקציה הקדומה הכוללת את כלל האיברים.", math_expression: "S = [\\dfrac{x^{2}}{2}\\ln(x) - \\dfrac{x^{2}}{4} + \\dfrac{x}{e}]_{1/e}^{e}" },
            { verbal_explanation: "פיתוח אלגברי המניב את התוצאה הסופית והמצומצמת.", math_expression: "S = \\dfrac{e^{2} - 3}{4e}" }
        ],
        final_answer: "א: (1:e, -1:e) | ב: (e²-3):4e"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות קיץ 2017, מועד ב']</span><br><br>נתונה אליפסה קנונית שמוקדיה הם \\( (4,0) \\) ו- \\( (-4,0) \\), והיא חותכת את ציר ה-y בנקודות \\( (0,3) \\) ו- \\( (0,-3) \\).<br>א. מצאו את משוואת האליפסה.<br>ב. חוסמים באליפסה מלבן כך שצלעותיו מקבילות לצירים. מצאו את השטח המקסימלי האפשרי של המלבן הזה.&rlm;",
        options: ["א: x²:25 + y²:9 = 1 | ב: 30", "א: x²:16 + y²:9 = 1 | ב: 24", "א: x²:25 + y²:16 = 1 | ב: 40", "א: x²:25 + y²:9 = 1 | ב: 15"],
        correctAnswer: 0,
        hint: "בנו את המשוואה בעזרת נתוני המוקדים והציר המשני. קודקוד המלבן ברביע הראשון הוא המשתנה שלכם, ושטח המלבן הוא ארבע פעמים המכפלה של שיעוריו.",
        solution_steps: [
            { verbal_explanation: "זיהוי הפרמטרים מתוך נקודות החיתוך והמוקדים במרחב האנליטי.", math_expression: "c = 4 \\quad , \\quad b = 3" },
            { verbal_explanation: "שימוש במשפט הבסיס של האליפסה לחילוץ הציר הראשי השלם.", math_expression: "a^{2} = b^{2} + c^{2} = 9 + 16 = 25 \\Rightarrow a = 5" },
            { verbal_explanation: "הרכבת משוואת האליפסה הקנונית התקנית והמלאה ממרכיביה.", math_expression: "\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1" },
            { verbal_explanation: "הגדרת שטח המלבן החסום בעל הסימטריה המושלמת ביחס לצירים המרכזיים.", math_expression: "S(x) = 4xy" },
            { verbal_explanation: "בידוד משתנה הגובה מתוך משוואת האליפסה לטובת הצבה בפונקציית המטרה.", math_expression: "y = 3\\sqrt{1 - \\dfrac{x^{2}}{25}}" },
            { verbal_explanation: "בניית פונקציית המטרה הכוללת תחת שורש להקלת תהליך הגזירה העתידי.", math_expression: "S(x) = 12x\\sqrt{1 - \\dfrac{x^{2}}{25}} = \\sqrt{144x^{2} - 5.76x^{4}}" },
            { verbal_explanation: "גזירת הפולינום הפנימי בלבד והשוואתו לאפס לאיתור נקודת הקיצון המוחלטת.", math_expression: "288x - 23.04x^{3} = 0 \\Rightarrow x^{2} = 12.5 \\Rightarrow x = \\sqrt{12.5}" },
            { verbal_explanation: "הצבת הנקודה חזרה בפונקציית השטח לאמידת הגודל המקסימלי הכולל של המלבן.", math_expression: "S = 12\\sqrt{12.5}\\sqrt{1 - 0.5} = 12\\sqrt{6.25} = 12 \\times 2.5 = 30" }
        ],
        final_answer: "א: x²:25 + y²:9 = 1 | ב: 30"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות חורף 2020, מועד א']</span><br><br>כמות חומר רדיואקטיבי א' דועכת בצורה מעריכית, וזמן מחצית החיים שלו הוא 8 שנים. כמות חומר רדיואקטיבי ב' דועכת כך שלאחר 16 שנים נותר רבע מהכמות ההתחלתית.<br>א. מצאו איזה חומר דועך בקצב מהיר יותר.<br>ב. אם התחלנו עם 100 גרם מחומר א' ו-400 גרם מחומר ב', לאחר כמה שנים הכמויות שלהם יהיו שוות?&rlm;",
        options: ["א: קצב זהה לחלוטין | ב: אין זמן כזה", "א: חומר ב' מהיר יותר | ב: 16 שנים", "א: חומר א' מהיר יותר | ב: 8 שנים", "א: קצב זהה לחלוטין | ב: 12 שנים"],
        correctAnswer: 0,
        hint: "חשבו את קבוע הדעיכה של כל חומר בנפרד בעזרת הנתונים. אם הקצבים זהים, בנו משוואה ובדקו אם ייתכן לה פתרון ממשי.",
        solution_steps: [
            { verbal_explanation: "חישוב קבוע הדעיכה של חומר א' על סמך זמן מחצית החיים הנתון.", math_expression: "0.5 = e^{8k_{a}} \\Rightarrow k_{a} = \\dfrac{\\ln(0.5)}{8}" },
            { verbal_explanation: "חישוב קבוע הדעיכה של חומר ב' על סמך הירידה לרבע בפרק הזמן המצוין.", math_expression: "0.25 = e^{16k_{b}} \\Rightarrow k_{b} = \\dfrac{\\ln(0.25)}{16}" },
            { verbal_explanation: "המרת הלוגריתם בחומר ב' להשוואה נוחה וישירה מול חומר א'.", math_expression: "\\ln(0.25) = \\ln(0.5^{2}) = 2\\ln(0.5)" },
            { verbal_explanation: "הצבה וצמצום של קבוע חומר ב' המגלה זהות מוחלטת לקצב של חומר א'.", math_expression: "k_{b} = \\dfrac{2\\ln(0.5)}{16} = \\dfrac{\\ln(0.5)}{8} \\Rightarrow k_{a} = k_{b}" },
            { verbal_explanation: "בניית משוואת ההשוואה בין שתי הפונקציות המעריכיות בעלות הבסיסים והמעריכים הזהים לחלוטין.", math_expression: "100e^{kt} = 400e^{kt}" },
            { verbal_explanation: "חלוקת שני אגפי המשוואה בביטוי המעריכי החיובי תמיד, המותירה פסוק שקר חסר פתרון הגיוני.", math_expression: "100 = 400 \\Rightarrow \\emptyset" },
            { verbal_explanation: "קביעת מסקנה סופית.", math_expression: "t = \\emptyset" }
        ],
        final_answer: "א: קצב זהה לחלוטין | ב: אין זמן כזה"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות קיץ 2016, מועד א']</span><br><br>נתון כי המספרים המרוכבים \\( z_{1}, z_{2}, z_{3} \\) הם פתרונות של המשוואה \\( z^{3} = 1 \\). מוגדר המספר \\( w = \\dfrac{z_{1} + z_{2} + z_{3}}{3} \\).<br>א. מצאו את המקום הגיאומטרי במישור גאוס של כל המספרים \\( z \\) המקיימים \\( |z - w| = 2 \\).<br>ב. מצאו את השטח של המשולש שקודקודיו הם הפתרונות המקוריים.&rlm;",
        options: ["א: x² + y² = 4 | ב: 0.75√3", "א: x² + y² = 2 | ב: 1.5√3", "א: (x-1)² + y² = 4 | ב: 0.75√3", "א: x² + y² = 4 | ב: 3√3"],
        correctAnswer: 0,
        hint: "סכום שורשי היחידה מתאפס תמיד. המקום הגיאומטרי הוא מעגל המבוסס על ערך זה. שטח המשולש מחושב ממשולש שווה צלעות החסום במעגל שרדיוסו ידוע.",
        solution_steps: [
            { verbal_explanation: "הסתמכות על התכונה הגיאומטרית של סכום שורשי היחידה במישור המרוכב, המתאפס באופן סימטרי.", math_expression: "z_{1} + z_{2} + z_{3} = 0" },
            { verbal_explanation: "הצבת הסכום בתוך נוסחת המספר המרוכב הממוצע שסופק לנו בנתונים.", math_expression: "w = \\dfrac{0}{3} = 0" },
            { verbal_explanation: "הצבת המספר שהתגלה במשוואת המקום הגיאומטרי ופיתוחה למשוואת מעגל סטנדרטית.", math_expression: "|z - 0| = 2 \\Rightarrow |z| = 2 \\Rightarrow x^{2} + y^{2} = 4" },
            { verbal_explanation: "זיהוי רדיוס המעגל החוסם את משולש השורשים מתוך משוואת היחידה המקורית.", math_expression: "R = \\sqrt[3]{1} = 1" },
            { verbal_explanation: "חישוב שטח המשולש המשוכלל על ידי סכימת שטחי שלושת המשולשים הפנימיים הזהים.", math_expression: "S = 3 \\times \\dfrac{R^{2}\\sin(120^{\\circ})}{2}" },
            { verbal_explanation: "הצבת הרדיוס והשלמת הפעולות האריתמטיות עד לתוצאה המוגמרת.", math_expression: "S = 3 \\times \\dfrac{1^{2} \\times \\dfrac{\\sqrt{3}}{2}}{2} = \\dfrac{3\\sqrt{3}}{4} = 0.75\\sqrt{3}" }
        ],
        final_answer: "א: x² + y² = 4 | ב: 0.75√3"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות חורף 2021, מועד א']</span><br><br>נתון מישור \\( \\pi_{1}: 2x - y + 2z - 6 = 0 \\) ומישור \\( \\pi_{2}: 2x - y + 2z + 12 = 0 \\). כדור חסום בשלמותו בין שני המישורים הללו כך שהוא משיק לשניהם במקביל.<br>א. מהו רדיוס הכדור הכלוא?<br>ב. מצאו את משוואת המישור המקביל לשני המישורים ועובר בדיוק במרכז הכדור החסום.&rlm;",
        options: ["א: 3 | ב: 2x-y+2z+3=0", "א: 6 | ב: 2x-y+2z+3=0", "א: 3 | ב: 2x-y+2z-3=0", "א: 4.5 | ב: 2x-y+2z+6=0"],
        correctAnswer: 0,
        hint: "רדיוס הכדור הוא בדיוק מחצית המרחק בין שני המישורים המקבילים. המישור המרכזי ממוקם באמצע ולכן האיבר החופשי שלו יהיה הממוצע של שניהם.",
        solution_steps: [
            { verbal_explanation: "וידוא הקבלת המישורים לצורך הפעלת נוסחת המרחק המקוצרת והמדויקת.", math_expression: "\\vec{n_{1}} = \\vec{n_{2}} = (2, -1, 2)" },
            { verbal_explanation: "הפעלת הנוסחה למרחק בין שני מישורים מקבילים למציאת קוטרו השלם של הכדור.", math_expression: "d = \\dfrac{|-6 - 12|}{\\sqrt{2^{2} + (-1)^{2} + 2^{2}}}" },
            { verbal_explanation: "חישוב המונה והמכנה לאיתור המרחק התלת-ממדי הטהור.", math_expression: "d = \\dfrac{|-18|}{\\sqrt{9}} = \\dfrac{18}{3} = 6" },
            { verbal_explanation: "חלוקת הקוטר בשתיים לאיתור הרדיוס כמתבקש בהוראות.", math_expression: "R = \\dfrac{6}{2} = 3" },
            { verbal_explanation: "מציאת מישור האמצע. נורמל המישור נשאר זהה לחלוטין מתוקף ההקבלה, והאיבר החופשי ממוצע.", math_expression: "D = \\dfrac{-6 + 12}{2} = \\dfrac{6}{2} = 3" },
            { verbal_explanation: "הרכבת משוואת המישור התיכונה במלואה להצגה סופית חותכת.", math_expression: "2x - y + 2z + 3 = 0" }
        ],
        final_answer: "א: 3 | ב: 2x-y+2z+3=0"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות קיץ 2021, מועד א']</span><br><br>נתונה הפונקציה \\( f(x) = \\dfrac{2e^{x}}{e^{2x} + 1} \\).<br>א. מצאו את נקודות הקיצון של הפונקציה.<br>ב. מצאו את תחומי העלייה והירידה.<br>ג. חשבו את הערך של \\( \\int_{0}^{\\ln(3)} f(x) dx \\).&rlm;",
        options: ["א: (0, 1) מקס' | ב: עולה x<0, יורדת x>0 | ג: 0.64", "א: (0, 1) מינ' | ב: עולה x>0, יורדת x<0 | ג: 0.5", "א: (1, e) מקס' | ב: עולה x<1, יורדת x>1 | ג: 0.75", "א: (0, 1) מקס' | ב: עולה x<0, יורדת x>0 | ג: 0.8"],
        correctAnswer: 0,
        hint: "הנגזרת עובדת לפי כלל המנה ומניבה נקודת קיצון אחת. האינטגרל דורש זיהוי של נגזרת פנימית באמצעות שיטת ההצבה (החלפת משתנים). פונקציית ארקטנגנס משולבת כאן.",
        solution_steps: [
            { verbal_explanation: "גזירת הפונקציה בעזרת כלל המנה והשוואתה לאפס לאיתור הקיצון.", math_expression: "f'(x) = \\dfrac{2e^{x}(e^{2x} + 1) - 2e^{x}(2e^{2x})}{(e^{2x} + 1)^{2}} = \\dfrac{2e^{x} + 2e^{3x} - 4e^{3x}}{(e^{2x} + 1)^{2}}" },
            { verbal_explanation: "פישוט מונה הנגזרת ובידוד האקספוננט לאיפוס.", math_expression: "2e^{x} - 2e^{3x} = 0 \\Rightarrow 2e^{x}(1 - e^{2x}) = 0" },
            { verbal_explanation: "האקספוננט מחוץ לסוגריים חיובי תמיד, לכן נתמקד בסוגריים בלבד.", math_expression: "1 - e^{2x} = 0 \\Rightarrow e^{2x} = 1 \\Rightarrow 2x = 0 \\Rightarrow x = 0" },
            { verbal_explanation: "הצבת נקודת הקיצון בפונקציה המקורית לאפיון קואורדינטות.", math_expression: "f(0) = \\dfrac{2(1)}{1 + 1} = 1 \\Rightarrow P(0, 1)" },
            { verbal_explanation: "בדיקת סימן הנגזרת משני עברי האפס לקביעת סוג הקיצון ותחומי המגמה.", math_expression: "x < 0 \\Rightarrow \\uparrow \\quad , \\quad x > 0 \\Rightarrow \\downarrow \\Rightarrow Max" },
            { verbal_explanation: "שימוש בשיטת ההצבה לחישוב האינטגרל המסוים.", math_expression: "u = e^{x} \\Rightarrow du = e^{x}dx \\Rightarrow dx = \\dfrac{du}{u}" },
            { verbal_explanation: "שינוי גבולות האינטגרציה בהתאם למשתנה החדש שהוגדר וחישוב השטח הכלוא.", math_expression: "S = \\int_{1}^{3} \\dfrac{2u}{u^{2} + 1} \\times \\dfrac{du}{u} = 2\\int_{1}^{3} \\dfrac{1}{u^{2} + 1} du" },
            { verbal_explanation: "הפעלת הפונקציה הקדומה הידועה והצבת הגבולות המספריים.", math_expression: "S = 2[\\arctan(u)]_{1}^{3} = 2(\\arctan(3) - \\arctan(1)) \\approx 0.64" }
        ],
        final_answer: "א: (0, 1) מקס' | ב: עולה x<0, יורדת x>0 | ג: 0.64"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות חורף 2018, מועד א']</span><br><br>נתון כי למשוואה המרוכבת \\( z^{4} = a + bi \\) יש שורש אחד שהוא \\( 2cis(30^{\\circ}) \\).<br>א. מצאו את a ו-b.<br>ב. מצאו את שלושת השורשים הנוספים של המשוואה.<br>ג. קבעו האם הנקודה \\( -1 + \\sqrt{3}i \\) נמצאת על קודקודי המצולע שנוצר במישור גאוס.&rlm;",
        options: ["א: a=-8, b=8√3 | ב: 2cis(120), 2cis(210), 2cis(300) | ג: כן", "א: a=8, b=-8√3 | ב: 2cis(150), 2cis(270), 2cis(390) | ג: כן", "א: a=-8, b=8√3 | ב: 2cis(120), 2cis(210), 2cis(300) | ג: לא", "א: a=8, b=8√3 | ב: 2cis(120), 2cis(210), 2cis(300) | ג: לא"],
        correctAnswer: 0,
        hint: "העלו את השורש הנתון בחזקת 4 בעזרת משפט דה-מואבר כדי למצוא את המספר המקורי במלואו. השורשים הנוספים קופצים ב-90 מעלות כל אחד בסדר עולה.",
        solution_steps: [
            { verbal_explanation: "העלאת השורש הנתון בחזקת ארבע לפי משפט דה מואבר לשחזור המספר המקורי מהמשוואה.", math_expression: "w = (2cis(30^{\\circ}))^{4} = 16cis(120^{\\circ})" },
            { verbal_explanation: "המרת המספר הפולרי לייצוגו האלגברי להפרדת הממשי והמדומה כנדרש בנתוני השאלה.", math_expression: "w = 16(-0.5 + i\\dfrac{\\sqrt{3}}{2}) = -8 + 8\\sqrt{3}i" },
            { verbal_explanation: "קביעת המקדמים הנעלמים באופן סופי.", math_expression: "a = -8 \\quad , \\quad b = 8\\sqrt{3}" },
            { verbal_explanation: "מציאת השורשים הנוספים על ידי הוספת קפיצות של רבע מעגל לזווית השורש הראשון במרחב המרוכב.", math_expression: "\\Delta = \\dfrac{360^{\\circ}}{4} = 90^{\\circ}" },
            { verbal_explanation: "רישום שלושת השורשים הנותרים בהצגה פולרית ברורה.", math_expression: "z_{1} = 2cis(120^{\\circ}) \\quad , \\quad z_{2} = 2cis(210^{\\circ}) \\quad , \\quad z_{3} = 2cis(300^{\\circ})" },
            { verbal_explanation: "בדיקת הנקודה החשודה דרך המרתה לפולרית לבחינת התאמתה לאחד מקודקודי המצולע.", math_expression: "P(-1, \\sqrt{3}) \\Rightarrow R = \\sqrt{1 + 3} = 2 \\quad , \\quad \\alpha = 120^{\\circ}" },
            { verbal_explanation: "הנקודה היא למעשה אחד מקודקודי המצולע המשוכלל עצמו כפי שנחשף קודם.", math_expression: "P = z_{1} \\Rightarrow Yes" }
        ],
        final_answer: "א: a=-8, b=8√3 | ב: 2cis(120), 2cis(210), 2cis(300) | ג: כן"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות חורף 2023, מועד א']</span><br><br>נתון מישור \\( \\pi \\) העובר דרך שלוש הנקודות: \\( A(2,0,0), B(0,4,0), C(0,0,-2) \\).<br>א. מצאו את משוואת המישור.<br>ב. מצאו את המרחק מראשית הצירים למישור זה.<br>ג. מעבירים ישר l המאונך למישור ועובר בראשית. מצאו את נקודת החיתוך של הישר עם המישור.&rlm;",
        options: ["א: 2x+y-2z-4=0 | ב: 4:3 | ג: (8:9, 4:9, -8:9)", "א: x+2y-2z-4=0 | ב: 4:3 | ג: (4:9, 8:9, -8:9)", "א: 2x+y-2z-4=0 | ב: 4 | ג: (1, 1, -1)", "א: x+2y-2z-4=0 | ב: 1.5 | ג: (0, 0, 0)"],
        correctAnswer: 0,
        hint: "הנקודות הנתונות הן חיתוכים עם הצירים, השתמשו במשוואת מישור קטועים לקבלת פתרון מהיר. הישר המאונך עובר בראשית (0,0,0) וכיוונו הוא וקטור הנורמל של המישור.",
        solution_steps: [
            { verbal_explanation: "בניית משוואת המישור בשיטת המישור הקטוע החוסכת זמן יקר בחישובים וקטוריים.", math_expression: "\\dfrac{x}{2} + \\dfrac{y}{4} + \\dfrac{z}{-2} = 1" },
            { verbal_explanation: "הכפלת המשוואה בארבע למציאת מכנה משותף שלם המנקה את השברים לחלוטין ממשוואת המישור.", math_expression: "2x + y - 2z = 4 \\Rightarrow 2x + y - 2z - 4 = 0" },
            { verbal_explanation: "שימוש בנוסחת המרחק הסטנדרטית מנקודת הראשית המאפסת את מרבית המשוואה במונה.", math_expression: "d = \\dfrac{|-4|}{\\sqrt{2^{2} + 1^{2} + (-2)^{2}}} = \\dfrac{4}{\\sqrt{4 + 1 + 4}}" },
            { verbal_explanation: "השלמת החישוב לכדי מרחק מוחלט ומוגדר.", math_expression: "d = \\dfrac{4}{\\sqrt{9}} = \\dfrac{4}{3}" },
            { verbal_explanation: "הגדרת הישר האנכי העובר בראשית הצירים ומשתמש בנורמל המישור כווקטור כיוון רשמי.", math_expression: "l: (0,0,0) + t(2, 1, -2) = (2t, t, -2t)" },
            { verbal_explanation: "הצבת פרמטרי הישר במשוואת המישור למציאת נקודת החיתוך המדויקת בחלל התלת-ממדי.", math_expression: "2(2t) + (t) - 2(-2t) - 4 = 0" },
            { verbal_explanation: "כינוס פשוט וחילוץ הפרמטר של נקודת המפגש האנליטית.", math_expression: "4t + t + 4t = 4 \\Rightarrow 9t = 4 \\Rightarrow t = \\dfrac{4}{9}" },
            { verbal_explanation: "הצבת הפרמטר בישר להרכבת הקואורדינטה החסרה בשלמותה כפי שנדרש.", math_expression: "P(\\dfrac{8}{9}, \\dfrac{4}{9}, -\\dfrac{8}{9})" }
        ],
        final_answer: "א: 2x+y-2z-4=0 | ב: 4:3 | ג: (8:9, 4:9, -8:9)"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות חורף 2017, מועד א']</span><br><br>נתונה הפונקציה \\( f(x) = \\dfrac{\\ln(x)}{x} \\).<br>א. מצאו את נקודת המקסימום של הפונקציה.<br>ב. קבעו האם לפונקציה יש נקודות פיתול, ואם כן מצאו אותן.<br>ג. חשבו את האינטגרל המסוים \\( \\int_{1}^{e} f(x) dx \\).&rlm;",
        options: ["א: (e, 1:e) | ב: x=e^(1.5) | ג: 0.5", "א: (1, 0) | ב: אין פיתול | ג: 1", "א: (e², 2:e²) | ב: x=e | ג: 0.5", "א: (e, 1:e) | ב: x=e^(1.5) | ג: 1"],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה פעמיים לשם מציאת הקיצון והפיתול. באינטגרל, שימו לב שהפונקציה מורכבת מהכפלה של הלוגריתם בנגזרת הפנימית שלו, כלומר ניתן להשתמש בשיטת ההצבה u=ln(x).",
        solution_steps: [
            { verbal_explanation: "ביצוע גזירת מנה ראשונה למציאת נקודת הקיצון המובילה בפונקציה.", math_expression: "f'(x) = \\dfrac{1 - \\ln(x)}{x^{2}} = 0 \\Rightarrow \\ln(x) = 1 \\Rightarrow x = e" },
            { verbal_explanation: "הצבת נקודת המקסימום המוכחת בפונקציה להשלמת הגובה המדויק באנך.", math_expression: "f(e) = \\dfrac{\\ln(e)}{e} = \\dfrac{1}{e} \\Rightarrow P_{max}(e, \\dfrac{1}{e})" },
            { verbal_explanation: "גזירת מנה שנייה לבחינת קעירות ופיתול המרחב הפונקציונלי הנתון.", math_expression: "f''(x) = \\dfrac{-\\dfrac{1}{x}(x^{2}) - (1 - \\ln(x))(2x)}{x^{4}} = \\dfrac{-x - 2x + 2x\\ln(x)}{x^{4}}" },
            { verbal_explanation: "פישוט המונה והשוואתו לאפס במטרה לחשוף נקודות שבירה אלגבריות בפונקציה.", math_expression: "x(2\\ln(x) - 3) = 0 \\Rightarrow \\ln(x) = 1.5 \\Rightarrow x = e^{1.5}" },
            { verbal_explanation: "העמדת האינטגרל לחישוב השטח ושימוש בשיטת ההצבה המקובלת בחשבון הדיפרנציאלי והאינטגרלי גם יחד.", math_expression: "S = \\int_{1}^{e} \\ln(x) \\times \\dfrac{1}{x} dx" },
            { verbal_explanation: "הגדרת המשתנה הממיר ונגזרתו לשם ביצוע ההחלפה החלקה באינטגרל החשוב הזה.", math_expression: "u = \\ln(x) \\Rightarrow du = \\dfrac{1}{x} dx" },
            { verbal_explanation: "ביצוע האינטגרציה על המשתנה החדש בגבולות המומרים גם הם באופן תואם.", math_expression: "S = \\int_{0}^{1} u du = [\\dfrac{u^{2}}{2}]_{0}^{1}" },
            { verbal_explanation: "הצבת הגבולות לקבלת השטח המספרי המוחלט והסופי לבעיה זו.", math_expression: "S = \\dfrac{1^{2}}{2} - \\dfrac{0^{2}}{2} = 0.5" }
        ],
        final_answer: "א: (e, 1:e) | ב: x=e^(1.5) | ג: 0.5"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות חורף 2024, מועד א']</span><br><br>נתון מעגל שמרכזו בראשית הצירים (0,0) ורדיוסו 5. העבירו ישר \\( l: y = 2x - 5 \\).<br>א. מצאו את נקודות החיתוך של הישר עם המעגל.<br>ב. חשבו את אורך המיתר שנוצר על ידי חיתוך זה במעגל.<br>ג. מעבירים משיק למעגל באחת מנקודות החיתוך (זו שברביע הראשון). מצאו את משוואת המשיק.&rlm;",
        options: ["א: (4, 3), (0, -5) | ב: 4√5 | ג: 4x+3y=25", "א: (3, 4), (0, -5) | ב: 4√5 | ג: 3x+4y=25", "א: (4, 3), (0, -5) | ב: 2√5 | ג: 3x+4y=25", "א: (3, 4), (-3, -4) | ב: 10 | ג: 4x+3y=25"],
        correctAnswer: 0,
        hint: "הציבו את משוואת הישר במשוואת המעגל, פתרו את המשוואה הריבועית. המיתר הוא המרחק בין שתי הנקודות שהתקבלו. המשיק מחושב לפי נוסחת ההשקה הקנונית למעגל.",
        solution_steps: [
            { verbal_explanation: "הגדרת משוואת המעגל הקנונית לפי הרדיוס הנתון להשלמת המערכת הבסיסית.", math_expression: "x^{2} + y^{2} = 25" },
            { verbal_explanation: "הצבת משוואת הישר בתוך משוואת המעגל ליצירת פולינום אלגברי יחיד הניתן לפתרון פשוט.", math_expression: "x^{2} + (2x - 5)^{2} = 25" },
            { verbal_explanation: "פתיחת סוגריים וכינוס לפולינום מאופס.", math_expression: "x^{2} + 4x^{2} - 20x + 25 = 25 \\Rightarrow 5x^{2} - 20x = 0" },
            { verbal_explanation: "מציאת השורשים המייצגים את קואורדינטות החיתוך האופקיות של הישר והמעגל בחלל הקרטזי.", math_expression: "5x(x - 4) = 0 \\Rightarrow x_{1} = 0 \\quad , \\quad x_{2} = 4" },
            { verbal_explanation: "הצבת השורשים בחזרה לישר לקבלת הנקודות המלאות.", math_expression: "P_{1}(0, -5) \\quad , \\quad P_{2}(4, 3)" },
            { verbal_explanation: "חישוב אורך המיתר באמצעות נוסחת המרחק הסטנדרטית בין שתי נקודות הקצה שהתגלו.", math_expression: "d = \\sqrt{(4 - 0)^{2} + (3 - (-5))^{2}} = \\sqrt{16 + 64} = \\sqrt{80} = 4\\sqrt{5}" },
            { verbal_explanation: "שימוש בנוסחת המשיק למעגל קנוני בנקודה המונחת עליו ממש ברביע הראשון כמתחייב מהשאלה.", math_expression: "x_{0}x + y_{0}y = R^{2} \\Rightarrow 4x + 3y = 25" }
        ],
        final_answer: "א: (4, 3), (0, -5) | ב: 4√5 | ג: 4x+3y=25"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות חורף 2019, מועד ב']</span><br><br>אוכלוסיית תאים בתרבית גדלה בצורה מעריכית לפי המודל \\( M(t) = M_{0}e^{kt} \\). ידוע שלאחר 3 שעות היו בתרבית 1600 תאים, ולאחר 6 שעות היו 12800 תאים.<br>א. מצאו את קבוע הגידול k.<br>ב. מצאו את הכמות ההתחלתית \\( M_{0} \\).<br>ג. לאחר כמה שעות (מזמן 0) יהיו בתרבית 102400 תאים?&rlm;",
        options: ["א: ln(2) | ב: 200 | ג: 9", "א: ln(2) | ב: 400 | ג: 8", "א: ln(4) | ב: 200 | ג: 9", "א: ln(2) | ב: 100 | ג: 10"],
        correctAnswer: 0,
        hint: "בנו שתי משוואות מעריכיות מהנתונים וחילקו אותן זו בזו כדי להיפטר מהכמות ההתחלתית ולמצוא את קבוע הגידול בצורה המהירה ביותר.",
        solution_steps: [
            { verbal_explanation: "הקמת מערכת משוואות וחלוקת המשוואה השנייה בראשונה לבידוד מהיר של בסיס הגדילה ללא הכמות ההתחלתית שמפריעה בדרך.", math_expression: "\\dfrac{M_{0}e^{6k}}{M_{0}e^{3k}} = \\dfrac{12800}{1600}" },
            { verbal_explanation: "חיסור המעריכים וצמצום המספרים הגדולים להצגה קומפקטית ונוחה.", math_expression: "e^{3k} = 8" },
            { verbal_explanation: "הפעלת לוגריתם טבעי או הוצאת שורש לחילוץ קבוע הגידול השעתי הנדרש.", math_expression: "e^{k} = 2 \\Rightarrow k = \\ln(2)" },
            { verbal_explanation: "הצבת הביטוי המעריכי שמצאנו לתוך המשוואה הראשונה לשם איתור הכמות ההתחלתית של המושבה בזמן אפס.", math_expression: "M_{0} \\times 8 = 1600 \\Rightarrow M_{0} = 200" },
            { verbal_explanation: "הצבת הכמות המבוקשת בתבנית המודל שנבנה כעת במלואו לשם גילוי הזמן הנדרש להגעה אליה.", math_expression: "200e^{\\ln(2)t} = 102400" },
            { verbal_explanation: "חלוקה במאתיים והמרת האקספוננט לבסיס שתיים פשוט ואלגנטי.", math_expression: "2^{t} = 512" },
            { verbal_explanation: "הסקת הזמן הדרוש, כאשר שתיים בחזקת תשע שווה לחמש מאות ושניים עשר לפי חוקי חזקות בסיסיים.", math_expression: "t = 9" }
        ],
        final_answer: "א: ln(2) | ב: 200 | ג: 9"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות קיץ 2018, מועד ב']</span><br><br>נתון המקום הגיאומטרי המקיים את המשוואה המרוכבת \\( z \\times \\bar{z} + 2z + 2\\bar{z} = 12 \\).<br>א. זהו את המקום הגיאומטרי והביעו אותו בצורה הקרטזית המסורתית.<br>ב. מצאו את שטח הצורה הגיאומטרית שהתקבלה.&rlm;",
        options: ["א: (x+2)²+y²=16 (מעגל) | ב: 16π", "א: x²+(y+2)²=16 (מעגל) | ב: 16π", "א: (x+2)²+y²=4 (מעגל) | ב: 4π", "א: (x-2)²+y²=16 (מעגל) | ב: 16π"],
        correctAnswer: 0,
        hint: "הציבו את הנעלם בצורה האלגברית ואת הצמוד שלו. המכפלה היא סכום הריבועים. החיבור נותן פעמיים את החלק הממשי. השלימו לריבוע כדי לקבל משוואת מעגל סטנדרטית.",
        solution_steps: [
            { verbal_explanation: "הצבת המבנים האלגבריים במשוואה המורכבת לשם ניתוח קרטזי בהיר של הבעיה.", math_expression: "(x^{2} + y^{2}) + 2(x + yi) + 2(x - yi) = 12" },
            { verbal_explanation: "פתיחת סוגריים וצמצום של כלל האיברים המדומים המבטלים זה את זה.", math_expression: "x^{2} + y^{2} + 2x + 2yi + 2x - 2yi = 12" },
            { verbal_explanation: "איסוף האיברים הממשיים שנותרו בחיים לפולינום מסודר ואופקי.", math_expression: "x^{2} + 4x + y^{2} = 12" },
            { verbal_explanation: "ביצוע פעולת השלמה לריבוע על ציר האיקס כדי לאתר את מרכז הצורה הגיאומטרית הניצבת מולנו.", math_expression: "(x + 2)^{2} - 4 + y^{2} = 12" },
            { verbal_explanation: "העברת האיבר החופשי לאגף הנגדי לקבלת משוואת המעגל הקנונית הסופית.", math_expression: "(x + 2)^{2} + y^{2} = 16" },
            { verbal_explanation: "מציאת רדיוס המעגל ממשוואתו המסודרת שהשגנו.", math_expression: "R^{2} = 16 \\Rightarrow R = 4" },
            { verbal_explanation: "חישוב שטח המעגל המוכר לנו באמצעות נוסחת השטח הסטנדרטית.", math_expression: "S = \\pi R^{2} = 16\\pi" }
        ],
        final_answer: "א: (x+2)²+y²=16 (מעגל) | ב: 16π"
    },
    {
        topic: "bagrut_prep",
        subTopic: "הכנה לבחינת בגרות",
        question_text: "<span style='color:#3b82f6; font-weight:bold;'>[בגרות קיץ 2020, מועד א']</span><br><br>נתונה הפונקציה \\( f(x) = \\dfrac{x^{2}}{e^{x}} \\).<br>א. מצאו את נקודות הקיצון של הפונקציה וקבעו את סוגן.<br>ב. מצאו את נקודות הפיתול של הפונקציה אם ישנן כאלו.&rlm;",
        options: ["א: (0,0) מינ', (2, 4:e²) מקס' | ב: x=2-√2, x=2+√2", "א: (0,0) מקס', (2, 4:e²) מינ' | ב: x=0, x=2", "א: (2, 4:e²) מקס' בלבד | ב: אין פיתול", "א: (0,0) מינ' בלבד | ב: x=2"],
        correctAnswer: 0,
        hint: "ניתן לרשום את הפונקציה כמכפלה: איקס בריבוע כפול e בחזקת מינוס איקס. גזרו, הוציאו גורמים משותפים והשוו את הפולינום לאפס. חזרו על הפעולה לנגזרת שנייה.",
        solution_steps: [
            { verbal_explanation: "המרת הפונקציה מצורת מנה לצורת מכפלה עם חזקה שלילית להקלת תהליך הגזירה והחקירה.", math_expression: "f(x) = x^{2} e^{-x}" },
            { verbal_explanation: "גזירה ראשונה לפי כלל המכפלה תוך שמירה על הנגזרת הפנימית השלילית.", math_expression: "f'(x) = 2x e^{-x} + x^{2}(-e^{-x})" },
            { verbal_explanation: "הוצאת גורם משותף מן המשוואה לפולינום מאוגד ויעיל.", math_expression: "f'(x) = e^{-x}(2x - x^{2})" },
            { verbal_explanation: "השוואת הנגזרת לאפס תוך התעלמות מהאקספוננט החיובי תמיד.", math_expression: "2x - x^{2} = 0 \\Rightarrow x(2 - x) = 0" },
            { verbal_explanation: "חילוץ שיעורי האופק של נקודות הקיצון המוצעות והצבתן בפונקציה לשם קבלת הגובה.", math_expression: "x = 0 \\Rightarrow P_{min}(0,0) \\quad , \\quad x = 2 \\Rightarrow P_{max}(2, \\dfrac{4}{e^{2}})" },
            { verbal_explanation: "ביצוע גזירה שנייה על בסיס הנגזרת הראשונה המסודרת.", math_expression: "f''(x) = -e^{-x}(2x - x^{2}) + e^{-x}(2 - 2x) = e^{-x}(x^{2} - 4x + 2)" },
            { verbal_explanation: "השוואת הפולינום הפנימי לאפס למציאת פיתול באמצעות נוסחת שורשים.", math_expression: "x_{1,2} = \\dfrac{4 \\pm \\sqrt{16 - 8}}{2} = 2 \\pm \\sqrt{2}" }
        ],
        final_answer: "א: (0,0) מינ', (2, 4:e²) מקס' | ב: x=2-√2, x=2+√2"
    }
];
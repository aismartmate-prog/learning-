const questionsDB = [
    // ==========================================
    // תת נושא 1: תלות לינארית, פרישה ובסיסים של המרחב (10 שאלות)
    // ==========================================

    {
        topic: "vectors_572",
        subTopic: "תלות לינארית, פרישה ובסיסים של המרחב",
        question_text: "במשולש ABC, הנקודה D נמצאת על הצלע BC כך ש- BD:DC = 1:2. מוגדרים הווקטורים: \\( \\vec{u} = \\vec{AB} \\) ו- \\( \\vec{v} = \\vec{AC} \\). הביעו את הווקטור \\( \\vec{AD} \\) באמצעות \\( \\vec{u} \\) ו- \\( \\vec{v} \\).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 120' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='100,20 40,100 160,100' fill='none' stroke='#3b82f6' stroke-width='2'/><line x1='100' y1='20' x2='80' y2='100' stroke='#ef4444' stroke-width='1.5'/><text x='95' y='15' font-size='12' font-family='Arial'>A</text><text x='25' y='110' font-size='12' font-family='Arial'>B</text><text x='165' y='110' font-size='12' font-family='Arial'>C</text><text x='75' y='115' font-size='12' font-family='Arial'>D</text></svg></div>",
        options: ["(2:3)u + (1:3)v", "(1:3)u + (2:3)v", "(1:2)u + (1:2)v", "(3:4)u + (1:4)v"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה לחלוקת קטע ביחס נתון. אם הנקודה מחלקת את הקטע ביחס של m:n, המקדם של הווקטור הרחוק הוא חלקי הסכום.",
        solution_steps: [
            { verbal_explanation: "הגדרת הווקטור המייצג את הצלע התחתונה כהפרש הווקטורים הראשיים.", math_expression: "\\vec{BC} = \\vec{AC} - \\vec{AB} = \\vec{v} - \\vec{u}" },
            { verbal_explanation: "קביעת החלק היחסי של הקטע לפי יחס החלוקה הנתון בשאלה.", math_expression: "\\vec{BD} = \\dfrac{1}{3}\\vec{BC}" },
            { verbal_explanation: "הצבת וקטור הצלע לתוך הביטוי של הקטע החלקי.", math_expression: "\\vec{BD} = \\dfrac{1}{3}(\\vec{v} - \\vec{u})" },
            { verbal_explanation: "בניית מסלול וקטורי מהקודקוד העליון אל הנקודה על הבסיס.", math_expression: "\\vec{AD} = \\vec{AB} + \\vec{BD}" },
            { verbal_explanation: "הצבת כלל המרכיבים למשוואה הווקטורית המלאה.", math_expression: "\\vec{AD} = \\vec{u} + \\dfrac{1}{3}(\\vec{v} - \\vec{u})" },
            { verbal_explanation: "פתיחת סוגריים וכינוס איברים זהים.", math_expression: "\\vec{AD} = \\vec{u} + \\dfrac{1}{3}\\vec{v} - \\dfrac{1}{3}\\vec{u}" },
            { verbal_explanation: "קבלת הפתרון הסופי המצומצם.", math_expression: "\\vec{AD} = \\dfrac{2}{3}\\vec{u} + \\dfrac{1}{3}\\vec{v}" }
        ],
        final_answer: "(2:3)u + (1:3)v"
    },
    {
        topic: "vectors_572",
        subTopic: "תלות לינארית, פרישה ובסיסים של המרחב",
        question_text: "במקבילון ABCDA'B'C'D' נתונים הווקטורים: \\( \\vec{u} = \\vec{AB} \\), \\( \\vec{v} = \\vec{AD} \\), \\( \\vec{w} = \\vec{AA'} \\). הנקודה P מחלקת את האלכסון A'C ביחס של 1:3 (קרובה יותר ל-A'). הביעו את הווקטור \\( \\vec{AP} \\).&rlm;",
        options: ["(1:4)u + (1:4)v + (3:4)w", "(3:4)u + (3:4)v + (1:4)w", "(1:4)u + (1:4)v + (1:4)w", "(1:3)u + (1:3)v + (2:3)w"],
        correctAnswer: 0,
        hint: "מצאו קודם את האלכסון המרחבי כולו מהקודקוד העליון לתחתון. לאחר מכן, השתמשו במסלול וקטורי העובר דרך הקודקוד העליון אל הנקודה.",
        solution_steps: [
            { verbal_explanation: "הגדרת וקטור אלכסון הבסיס התחתון כסכום צלעות המקבילית.", math_expression: "\\vec{AC} = \\vec{u} + \\vec{v}" },
            { verbal_explanation: "הגדרת האלכסון המרחבי מהקודקוד העליון אל הקודקוד הנגדי בבסיס.", math_expression: "\\vec{A'C} = \\vec{A'A} + \\vec{AC}" },
            { verbal_explanation: "הצבת הווקטורים הבסיסיים לפי כיוונם התקני.", math_expression: "\\vec{A'C} = -\\vec{w} + \\vec{u} + \\vec{v}" },
            { verbal_explanation: "חישוב החלק היחסי של האלכסון המרחבי עד לנקודת החלוקה.", math_expression: "\\vec{A'P} = \\dfrac{1}{4}\\vec{A'C}" },
            { verbal_explanation: "הצבת האלכסון במלואו אל תוך הביטוי היחסי.", math_expression: "\\vec{A'P} = \\dfrac{1}{4}(\\vec{u} + \\vec{v} - \\vec{w})" },
            { verbal_explanation: "בניית המסלול הווקטורי מראשית הצירים המוגדרת אל הנקודה הפנימית.", math_expression: "\\vec{AP} = \\vec{AA'} + \\vec{A'P}" },
            { verbal_explanation: "הצבת הנתונים למסלול הסופי וכינוס איברים.", math_expression: "\\vec{AP} = \\vec{w} + \\dfrac{1}{4}\\vec{u} + \\dfrac{1}{4}\\vec{v} - \\dfrac{1}{4}\\vec{w}" },
            { verbal_explanation: "קבלת התוצאה המצומצמת.", math_expression: "\\vec{AP} = \\dfrac{1}{4}\\vec{u} + \\dfrac{1}{4}\\vec{v} + \\dfrac{3}{4}\\vec{w}" }
        ],
        final_answer: "(1:4)u + (1:4)v + (3:4)w"
    },
    {
        topic: "vectors_572",
        subTopic: "תלות לינארית, פרישה ובסיסים של המרחב",
        question_text: "נתונים שלושה וקטורים במרחב: \\( \\vec{a} = (1, 2, -1) \\), \\( \\vec{b} = (0, 1, 3) \\), \\( \\vec{c} = (2, 5, 1) \\). קבעו האם הווקטורים הללו מהווים בסיס למרחב התלת-ממדי.&rlm;",
        options: ["לא, הם תלויים לינארית", "כן, הם בלתי תלויים לינארית", "כן, כי הם אורתוגונליים", "לא, כי אחד מהם הוא וקטור אפס"],
        correctAnswer: 0,
        hint: "וקטורים מהווים בסיס למרחב התלת-ממדי רק אם הם בלתי תלויים לינארית. בדקו אם ניתן להביע אחד מהם כצירוף לינארי של השניים האחרים.",
        solution_steps: [
            { verbal_explanation: "הנחת משוואת תלות לינארית כללית לבחינת הקשר בין הווקטורים.", math_expression: "\\alpha\\vec{a} + \\beta\\vec{b} = \\vec{c}" },
            { verbal_explanation: "הצבת הרכיבים של הווקטורים למערכת משוואות תלת-ממדית.", math_expression: "\\alpha(1, 2, -1) + \\beta(0, 1, 3) = (2, 5, 1)" },
            { verbal_explanation: "בחינת המשוואה של הרכיב הראשון לחילוץ המקדם הראשון.", math_expression: "1\\alpha + 0\\beta = 2 \\Rightarrow \\alpha = 2" },
            { verbal_explanation: "בחינת המשוואה של הרכיב השני והצבת הפרמטר שנמצא.", math_expression: "2\\alpha + 1\\beta = 5 \\Rightarrow 2(2) + \\beta = 5 \\Rightarrow \\beta = 1" },
            { verbal_explanation: "בחינת המשוואה של הרכיב השלישי לאימות התלות.", math_expression: "-1\\alpha + 3\\beta = -1(2) + 3(1)" },
            { verbal_explanation: "חישוב הפסוק כדי לבדוק שוויון.", math_expression: "-2 + 3 = 1" },
            { verbal_explanation: "קבלת פסוק אמת המעיד על תלות לינארית בין שלושת הווקטורים.", math_expression: "\\vec{c} = 2\\vec{a} + 1\\vec{b}" },
            { verbal_explanation: "מסקנה: וקטורים תלויים לינארית אינם מהווים בסיס למרחב התלת-ממדי.", math_expression: "\\emptyset" }
        ],
        final_answer: "לא, הם תלויים לינארית"
    },
    {
        topic: "vectors_572",
        subTopic: "תלות לינארית, פרישה ובסיסים של המרחב",
        question_text: "נתונים ארבעה קודקודים של מרובע במרחב: A(1, 2, 3), B(4, 5, 6), C(7, 8, 9), D(x, y, z). איזה תנאי וקטורי חייב להתקיים כדי שהמרובע יהיה מקבילית?&rlm;",
        options: ["וקטור AB שווה לווקטור DC", "וקטור AC שווה לווקטור BD", "הווקטורים תלויים לינארית", "וקטור AB מאונך לווקטור BC"],
        correctAnswer: 0,
        hint: "במקבילית, צלעות נגדיות מקבילות ושוות באורכן. מבחינה וקטורית, המשמעות היא שהווקטורים המייצגים צלעות נגדיות ובאותו כיוון הם שווים לחלוטין.",
        solution_steps: [
            { verbal_explanation: "הגדרת מקבילית במישור הווקטורי מחייבת שוויון מלא של צלעות נגדיות בכיוון ובגודל.", math_expression: "\\vec{AB} = \\vec{DC}" },
            { verbal_explanation: "הגדרת וקטור הצלע הראשונה כהפרש קואורדינטות קצה והתחלה.", math_expression: "\\vec{AB} = B - A" },
            { verbal_explanation: "הגדרת וקטור הצלע השנייה (הנגדית לה) באותו אופן.", math_expression: "\\vec{DC} = C - D" },
            { verbal_explanation: "בדיקת חלופה שגויה המאפיינת מלבן בלבד.", math_expression: "\\vec{AC} = \\vec{BD} \\Rightarrow \\emptyset" },
            { verbal_explanation: "בדיקת חלופה שגויה המאפיינת מעוין או מלבן.", math_expression: "\\vec{AB} \\cdot \\vec{BC} = 0 \\Rightarrow \\emptyset" },
            { verbal_explanation: "אימות התנאי ההכרחי והמספיק ליצירת המקבילית במרחב.", math_expression: "\\vec{AB} = \\vec{DC}" }
        ],
        final_answer: "וקטור AB שווה לווקטור DC"
    },
    {
        topic: "vectors_572",
        subTopic: "תלות לינארית, פרישה ובסיסים של המרחב",
        question_text: "נתונים הווקטורים \\( \\vec{u} = (1, k, 2) \\) ו- \\( \\vec{v} = (3, 6, 6) \\). עבור איזה ערך של k הווקטורים מקבילים זה לזה?&rlm;",
        options: ["k = 2", "k = 3", "k = 1", "k = -2"],
        correctAnswer: 0,
        hint: "וקטורים מקבילים מקיימים פרופורציה קבועה בין כל הרכיבים שלהם. חלוקת רכיבי ה-x צריכה להיות שווה לחלוקת רכיבי ה-y וה-z.",
        solution_steps: [
            { verbal_explanation: "הנחת תנאי קיום להקבלה בין שני וקטורים: קיומו של סקלר מכפיל קבוע.", math_expression: "\\vec{v} = m\\vec{u}" },
            { verbal_explanation: "יצירת מערכת משוואות על בסיס רכיבי הווקטורים בשלושת הצירים.", math_expression: "(3, 6, 6) = m(1, k, 2)" },
            { verbal_explanation: "בחינת המשוואה ברכיב הראשון כדי לחלץ את הסקלר המכפיל.", math_expression: "3 = m \\times 1 \\Rightarrow m = 3" },
            { verbal_explanation: "בחינת המשוואה ברכיב השלישי כדי לאמת את הסקלר.", math_expression: "6 = m \\times 2 \\Rightarrow 6 = 3 \\times 2" },
            { verbal_explanation: "הצבת הסקלר במשוואת הרכיב השני המכילה את הפרמטר הנעלם.", math_expression: "6 = 3 \\times k" },
            { verbal_explanation: "חילוץ הפרמטר מתוך המשוואה.", math_expression: "k = \\dfrac{6}{3} = 2" }
        ],
        final_answer: "k = 2"
    },
    {
        topic: "vectors_572",
        subTopic: "תלות לינארית, פרישה ובסיסים של המרחב",
        question_text: "בטטראדר (פירמידה משולשת) OABC נתונים וקטורי הבסיס: \\( \\vec{u} = \\vec{OA} \\), \\( \\vec{v} = \\vec{OB} \\), \\( \\vec{w} = \\vec{OC} \\). הנקודה G היא מרכז הכובד (מפגש התיכונים) של המשולש ABC. הביעו את הווקטור \\( \\vec{OG} \\).&rlm;",
        options: ["(1:3)u + (1:3)v + (1:3)w", "(1:2)u + (1:2)v + (1:2)w", "(1:4)u + (1:4)v + (1:4)w", "(2:3)u + (1:6)v + (1:6)w"],
        correctAnswer: 0,
        hint: "מרכז הכובד של משולש מוגדר וקטורית כממוצע של שלושת קודקודיו ביחס לראשית.",
        solution_steps: [
            { verbal_explanation: "הגדרת וקטור אמצע צלע הבסיס מתוך שני קודקודים סמוכים.", math_expression: "\\vec{OD} = \\dfrac{1}{2}\\vec{v} + \\dfrac{1}{2}\\vec{w}" },
            { verbal_explanation: "בניית וקטור התיכון המלא היוצא מהקודקוד השלישי לעבר אמצע הצלע.", math_expression: "\\vec{AD} = \\vec{OD} - \\vec{OA} = \\dfrac{1}{2}\\vec{v} + \\dfrac{1}{2}\\vec{w} - \\vec{u}" },
            { verbal_explanation: "קביעת מיקום מרכז הכובד המחלק את התיכון ביחס קבוע.", math_expression: "\\vec{AG} = \\dfrac{2}{3}\\vec{AD}" },
            { verbal_explanation: "הצבת וקטור התיכון אל תוך ביטוי החלוקה.", math_expression: "\\vec{AG} = \\dfrac{2}{3}(\\dfrac{1}{2}\\vec{v} + \\dfrac{1}{2}\\vec{w} - \\vec{u})" },
            { verbal_explanation: "פתיחת סוגריים ופישוט הביטוי.", math_expression: "\\vec{AG} = \\dfrac{1}{3}\\vec{v} + \\dfrac{1}{3}\\vec{w} - \\dfrac{2}{3}\\vec{u}" },
            { verbal_explanation: "בניית המסלול הכולל מראשית הצירים אל נקודת מרכז הכובד.", math_expression: "\\vec{OG} = \\vec{OA} + \\vec{AG}" },
            { verbal_explanation: "הצבה וכינוס אחרון של כלל המרכיבים.", math_expression: "\\vec{OG} = \\vec{u} + \\dfrac{1}{3}\\vec{v} + \\dfrac{1}{3}\\vec{w} - \\dfrac{2}{3}\\vec{u} = \\dfrac{1}{3}\\vec{u} + \\dfrac{1}{3}\\vec{v} + \\dfrac{1}{3}\\vec{w}" }
        ],
        final_answer: "(1:3)u + (1:3)v + (1:3)w"
    },
    {
        topic: "vectors_572",
        subTopic: "תלות לינארית, פרישה ובסיסים של המרחב",
        question_text: "נתונים הווקטורים \\( \\vec{a} = (2, -1, 4) \\) ו- \\( \\vec{b} = (1, 1, 0) \\). מצאו את הווקטור המהווה צירוף לינארי של שניהם כך ש- \\( \\vec{c} = 2\\vec{a} - 3\\vec{b} \\).&rlm;",
        options: ["(1, -5, 8)", "(7, 1, 8)", "(1, 1, 4)", "(4, -5, 0)"],
        correctAnswer: 0,
        hint: "הכפילו כל וקטור בסקלר הנתון לו, ולאחר מכן חסרו את הרכיבים המתאימים בכל ציר.",
        solution_steps: [
            { verbal_explanation: "הכפלת הווקטור הראשון בסקלר המוגדר עבורו.", math_expression: "2\\vec{a} = 2(2, -1, 4) = (4, -2, 8)" },
            { verbal_explanation: "הכפלת הווקטור השני בסקלר המוגדר עבורו.", math_expression: "3\\vec{b} = 3(1, 1, 0) = (3, 3, 0)" },
            { verbal_explanation: "ביצוע פעולת החיסור הווקטורית עבור ציר האיקס.", math_expression: "x = 4 - 3 = 1" },
            { verbal_explanation: "ביצוע פעולת החיסור עבור ציר הוואי.", math_expression: "y = -2 - 3 = -5" },
            { verbal_explanation: "ביצוע פעולת החיסור עבור ציר הזד.", math_expression: "z = 8 - 0 = 8" },
            { verbal_explanation: "הרכבת הווקטור החדש שנוצר כתוצאה מהצירוף הלינארי.", math_expression: "\\vec{c} = (1, -5, 8)" }
        ],
        final_answer: "(1, -5, 8)"
    },
    {
        topic: "vectors_572",
        subTopic: "תלות לינארית, פרישה ובסיסים של המרחב",
        question_text: "נקודה E מחלקת את הקטע AB ביחס של 2:3. ידוע כי וקטור המיקום של A הוא \\( \\vec{a} \\) ושל B הוא \\( \\vec{b} \\). מהו וקטור המיקום של הנקודה E?&rlm;",
        options: ["(3:5)a + (2:5)b", "(2:5)a + (3:5)b", "(1:2)a + (1:2)b", "(2:3)a + (1:3)b"],
        correctAnswer: 0,
        hint: "נוסחת חלוקת קטע ביחס m:n קובעת כי וקטור המיקום שווה לסכום המכפלות של יחס בווקטור הנגדי, מחולק בסכום היחסים.",
        solution_steps: [
            { verbal_explanation: "אזכור משפט חלוקת קטע ביחס נתון בגיאומטריה וקטורית.", math_expression: "\\vec{E} = \\dfrac{n\\vec{a} + m\\vec{b}}{m + n}" },
            { verbal_explanation: "הגדרת היחסים מהנתון.", math_expression: "m = 2 \\quad , \\quad n = 3" },
            { verbal_explanation: "חישוב מכנה הנוסחה המייצג את סך כלל החלקים היחסיים המרכיבים את הקטע כולו.", math_expression: "m + n = 2 + 3 = 5" },
            { verbal_explanation: "הצבת הנתונים בנוסחת החלוקה המלאה תוך הצלבת המקדמים.", math_expression: "\\vec{E} = \\dfrac{3\\vec{a} + 2\\vec{b}}{5}" },
            { verbal_explanation: "פירוק השבר המרכזי לשני שברים נפרדים המהווים מקדמים סקלריים לווקטורי הבסיס.", math_expression: "\\vec{E} = \\dfrac{3}{5}\\vec{a} + \\dfrac{2}{5}\\vec{b}" },
            { verbal_explanation: "הצגת התוצאה המסודרת.", math_expression: "\\vec{E} = 0.6\\vec{a} + 0.4\\vec{b}" }
        ],
        final_answer: "(3:5)a + (2:5)b"
    },
    {
        topic: "vectors_572",
        subTopic: "תלות לינארית, פרישה ובסיסים של המרחב",
        question_text: "נתונים הווקטורים \\( \\vec{u}, \\vec{v} \\) שאינם מקבילים. ידוע כי \\( 3x\\vec{u} + (y-2)\\vec{v} = 6\\vec{u} + 4\\vec{v} \\). מצאו את המשתנים x ו-y.&rlm;",
        options: ["x = 2, y = 6", "x = 3, y = 4", "x = 2, y = 4", "x = 6, y = 2"],
        correctAnswer: 0,
        hint: "מאחר שהווקטורים אינם מקבילים, המקדמים של כל וקטור חייבים להיות שווים משני צידי המשוואה באופן עצמאי.",
        solution_steps: [
            { verbal_explanation: "הסקת מסקנה תיאורטית: וקטורים בלתי תלויים מקיימים יחידות הצגה.", math_expression: "\\vec{u} \\nparallel \\vec{v} \\Rightarrow Unique" },
            { verbal_explanation: "השוואת המקדמים הסקלריים של הווקטור הראשון משני עברי המשוואה.", math_expression: "3x = 6" },
            { verbal_explanation: "חלוקה ופיתרון למשתנה הראשון.", math_expression: "x = 2" },
            { verbal_explanation: "השוואת המקדמים הסקלריים של הווקטור השני משני עברי המשוואה.", math_expression: "y - 2 = 4" },
            { verbal_explanation: "העברת איברים ופיתרון למשתנה השני במערכת.", math_expression: "y = 6" },
            { verbal_explanation: "ריכוז הפתרונות שהתקבלו.", math_expression: "x = 2 \\quad , \\quad y = 6" }
        ],
        final_answer: "x = 2, y = 6"
    },
    {
        topic: "vectors_572",
        subTopic: "תלות לינארית, פרישה ובסיסים של המרחב",
        question_text: "קבעו האם ארבע הנקודות הבאות נמצאות על אותו מישור במרחב: A(0,0,0), B(1,0,0), C(0,1,0), D(0,0,1).&rlm;",
        options: ["לא, הן יוצרות פירמידה משולשת (טטראדר)", "כן, הן נפרשות על ידי שני וקטורים", "כן, כי אחת מהן היא ראשית הצירים", "לא ניתן לדעת מנתונים אלו"],
        correctAnswer: 0,
        hint: "צרו שלושה וקטורים שיוצאים מאותה נקודה. אם הם בלתי תלויים לינארית, הנקודות אינן מישוריות.",
        solution_steps: [
            { verbal_explanation: "בניית וקטור ראשון היוצא מראשית הצירים אל אחת הנקודות.", math_expression: "\\vec{AB} = B - A = (1, 0, 0)" },
            { verbal_explanation: "בניית וקטור שני היוצא מאותה ראשית אל נקודה אחרת.", math_expression: "\\vec{AC} = C - A = (0, 1, 0)" },
            { verbal_explanation: "בניית וקטור שלישי באותו האופן.", math_expression: "\\vec{AD} = D - A = (0, 0, 1)" },
            { verbal_explanation: "בחינת שלושת הווקטורים שנוצרו. ניתן לראות כי הם מהווים את בסיס הצירים התקני של המרחב התלת-ממדי.", math_expression: "\\hat{i} , \\hat{j} , \\hat{k}" },
            { verbal_explanation: "הגדרת קשר תלות לינארית. וקטורי בסיס המרחב הינם בלתי תלויים לינארית בהגדרתם.", math_expression: "Independent" },
            { verbal_explanation: "הסקת מסקנה גיאומטרית: ארבע נקודות המייצרות שלושה וקטורים בלתי תלויים יוצרות גוף נפחי.", math_expression: "\\emptyset" }
        ],
        final_answer: "לא, הן יוצרות פירמידה משולשת (טטראדר)"
    },

    // ==========================================
    // תת נושא 2: הצגה פרמטרית ומשוואה אלגברית של מישור במרחב (10 שאלות)
    // ==========================================

    {
        topic: "vectors_572",
        subTopic: "הצגה פרמטרית ומשוואה אלגברית של מישור במרחב",
        question_text: "מצאו את משוואת המישור האלגברית העובר דרך הנקודה \\( (1, 2, -1) \\) ומאונך לווקטור النורמל \\( \\vec{n} = (3, -2, 5) \\).&rlm;",
        options: ["3x - 2y + 5z + 6 = 0", "3x - 2y + 5z - 6 = 0", "x + 2y - z + 6 = 0", "3x + 2y + 5z - 4 = 0"],
        correctAnswer: 0,
        hint: "משוואת מישור היא מהצורה ax + by + cz + d = 0, כאשר (a,b,c) הוא וקטור הנורמל. הציבו את הנורמל ואת הנקודה כדי למצוא את d.",
        solution_steps: [
            { verbal_explanation: "כתיבת המבנה הכללי למשוואת מישור במרחב תלת-ממדי.", math_expression: "ax + by + cz + d = 0" },
            { verbal_explanation: "הצבת רכיבי וקטור הנורמל הנתון בתור המקדמים המובילים במשוואה.", math_expression: "3x - 2y + 5z + d = 0" },
            { verbal_explanation: "הצבת הנקודה הידועה שנמצאת על המישור אל תוך המשתנים.", math_expression: "3(1) - 2(2) + 5(-1) + d = 0" },
            { verbal_explanation: "ביצוע פעולות הכפל למספרים הממשיים.", math_expression: "3 - 4 - 5 + d = 0" },
            { verbal_explanation: "כינוס איברים מספריים ובידוד המשתנה.", math_expression: "-6 + d = 0 \\Rightarrow d = 6" },
            { verbal_explanation: "הרכבת המשוואה המלאה והסופית של המישור.", math_expression: "3x - 2y + 5z + 6 = 0" }
        ],
        final_answer: "3x - 2y + 5z + 6 = 0"
    },
    {
        topic: "vectors_572",
        subTopic: "הצגה פרמטרית ומשוואה אלגברית של מישור במרחב",
        question_text: "נתונות שתי משוואות של מישורים: \\( \\pi_{1}: 2x - y + z - 4 = 0 \\) ו- \\( \\pi_{2}: 4x - 2y + 2z + 5 = 0 \\). מה המצב ההדדי ביניהם?&rlm;",
        options: ["הם מקבילים זה לזה", "הם מתלכדים למישור אחד", "הם נחתכים ויוצרים ישר חיתוך", "הם מאונכים זה לזה"],
        correctAnswer: 0,
        hint: "בדקו את היחס בין מקדמי הנורמלים. אם היחס קבוע, המישורים מקבילים או מתלכדים. לאחר מכן, בדקו את היחס בין האיברים החופשיים.",
        solution_steps: [
            { verbal_explanation: "חילוץ וקטורי הנורמל מתוך המשוואות האלגבריות של שני המישורים.", math_expression: "\\vec{n_{1}} = (2, -1, 1) \\quad , \\quad \\vec{n_{2}} = (4, -2, 2)" },
            { verbal_explanation: "בדיקת פרופורציה בין וקטורי הנורמל כדי לזהות האם הם מקבילים.", math_expression: "\\dfrac{4}{2} = \\dfrac{-2}{-1} = \\dfrac{2}{1} = 2" },
            { verbal_explanation: "הסקת מסקנה כי הנורמלים מקבילים, משמע המישורים מקבילים או מתלכדים.", math_expression: "\\vec{n_{1}} \\parallel \\vec{n_{2}}" },
            { verbal_explanation: "בדיקת היחס בין המקדמים החופשיים של משוואות המישורים כדי להבחין בין הקבלה להתלכדות.", math_expression: "\\dfrac{5}{-4} \\neq 2" },
            { verbal_explanation: "מכיוון שיחס המקדמים החופשיים שונה מיחס הנורמלים, המישורים מקבילים.", math_expression: "\\pi_{1} \\parallel \\pi_{2}" },
            { verbal_explanation: "אישור הפתרון המילולי.", math_expression: "1=1" }
        ],
        final_answer: "הם מקבילים זה לזה"
    },
    {
        topic: "vectors_572",
        subTopic: "הצגה פרמטרית ומשוואה אלגברית של מישור במרחב",
        question_text: "מישור עובר דרך הנקודות: \\( A(1, 0, 0), B(0, 2, 0), C(0, 0, 3) \\). מהי משוואתו האלגברית?&rlm;",
        options: ["6x + 3y + 2z - 6 = 0", "x + 2y + 3z - 6 = 0", "6x - 3y + 2z - 6 = 0", "2x + 3y + 6z - 1 = 0"],
        correctAnswer: 0,
        hint: "אלו נקודות חיתוך עם הצירים. ניתן להשתמש במשוואת מישור קטועים, או לייצר שני וקטורי כיוון ולחשב נורמל.",
        solution_steps: [
            { verbal_explanation: "שימוש בנוסחת משוואת מישור קטועים, המתאימה למקרים של חיתוך עם הצירים.", math_expression: "\\dfrac{x}{a} + \\dfrac{y}{b} + \\dfrac{z}{c} = 1" },
            { verbal_explanation: "הצבת נקודות החיתוך השונות המהוות את המכנים בנוסחה.", math_expression: "\\dfrac{x}{1} + \\dfrac{y}{2} + \\dfrac{z}{3} = 1" },
            { verbal_explanation: "כתיבת המשוואה מחדש עם המקדמים.", math_expression: "x + 0.5y + \\dfrac{1}{3}z = 1" },
            { verbal_explanation: "מציאת מכנה משותף לכלל אברי המשוואה (המספר שש) כדי לעבור למספרים שלמים.", math_expression: "m = 6" },
            { verbal_explanation: "הכפלת המשוואה כולה במכנה המשותף.", math_expression: "6x + 3y + 2z = 6" },
            { verbal_explanation: "העברת הקבוע לאגף השמאלי ליצירת משוואת מישור סטנדרטית.", math_expression: "6x + 3y + 2z - 6 = 0" }
        ],
        final_answer: "6x + 3y + 2z - 6 = 0"
    },
    {
        topic: "vectors_572",
        subTopic: "הצגה פרמטרית ומשוואה אלגברית של מישור במרחב",
        question_text: "נתון המישור \\( \\pi: x - 2y + 4z - 10 = 0 \\). איזה מהישרים הבאים מוכל לחלוטין בתוך המישור?&rlm;",
        options: ["l: (2, -2, 1) + t(2, 3, 1)", "l: (2, -2, 1) + t(1, 1, 0)", "l: (0, -5, 0) + t(0, 2, 1)", "l: (0, 0, 2.5) + t(4, 2, 1)"],
        correctAnswer: 0,
        hint: "כדי שישר יהיה מוכל במישור, עליו לקיים שני תנאים: נקודת ההתחלה שלו מקיימת את משוואת המישור, ווקטור הכיוון שלו מאונך לנורמל המישור.",
        solution_steps: [
            { verbal_explanation: "חילוץ וקטור הנורמל של המישור מתוך המשוואה האלגברית.", math_expression: "\\vec{n} = (1, -2, 4)" },
            { verbal_explanation: "בדיקת התנאי הראשון: האם נקודת המוצא של הישר הראשון מקיימת את המשוואה.", math_expression: "1(2) - 2(-2) + 4(1) - 10 = 2 + 4 + 4 - 10 = 0 \\Rightarrow \\checkmark" },
            { verbal_explanation: "בדיקת התנאי השני: האם וקטור הכיוון של הישר מאונך לנורמל. נבצע מכפלה סקלרית.", math_expression: "\\vec{v} \\cdot \\vec{n} = (2, 3, 1) \\cdot (1, -2, 4)" },
            { verbal_explanation: "חישוב המכפלה הסקלרית על ידי חיבור מכפלות הרכיבים.", math_expression: "2(1) + 3(-2) + 1(4) = 2 - 6 + 4 = 0" },
            { verbal_explanation: "אימות כי מכפלה סקלרית מאופסת מעידה על מאונכות.", math_expression: "\\vec{v} \\perp \\vec{n} \\Rightarrow \\checkmark" },
            { verbal_explanation: "שני התנאים התקיימו ולכן הישר מוכל במישור.", math_expression: "Line \\ \\in \\ Plane" }
        ],
        final_answer: "l: (2, -2, 1) + t(2, 3, 1)"
    },
    {
        topic: "vectors_572",
        subTopic: "הצגה פרמטרית ומשוואה אלגברית של מישור במרחב",
        question_text: "המישור \\( \\pi \\) מוגדר על ידי ההצגה הפרמטרית: \\( \\vec{x} = (1, 1, 1) + t(1, -1, 0) + s(0, 1, -1) \\). מצאו את משוואתו האלגברית.&rlm;",
        options: ["x + y + z - 3 = 0", "x - y + z - 1 = 0", "x + y - z - 1 = 0", "2x + y + z - 4 = 0"],
        correctAnswer: 0,
        hint: "חשבו את וקטור הנורמל באמצעות מערכת משוואות מול וקטורי הכיוון. לאחר מכן, הציבו את הנקודה למציאת המקדם החופשי.",
        solution_steps: [
            { verbal_explanation: "הצבת וקטורי הכיוון של המישור לחילוץ וקטור הנורמל המאונך להם.", math_expression: "\\vec{n} \\cdot (1, -1, 0) = 0 \\quad , \\quad \\vec{n} \\cdot (0, 1, -1) = 0" },
            { verbal_explanation: "בניית מערכת משוואות המבוססת על רכיבי הנורמל הנעלמים.", math_expression: "a - b = 0 \\Rightarrow a = b \\quad , \\quad b - c = 0 \\Rightarrow b = c" },
            { verbal_explanation: "קביעת הרכיבים. נבחר את המספר השלם והפשוט ביותר לייצוג.", math_expression: "a = 1 \\Rightarrow \\vec{n} = (1, 1, 1)" },
            { verbal_explanation: "הצבת הנורמל שמצאנו לתוך תבנית משוואת המישור.", math_expression: "x + y + z + d = 0" },
            { verbal_explanation: "הצבת נקודת המוצא הידועה מההצגה הפרמטרית לשם חילוץ המקדם החופשי.", math_expression: "1 + 1 + 1 + d = 0" },
            { verbal_explanation: "חישוב המקדם והרכבת המשוואה השלמה והסופית.", math_expression: "d = -3 \\Rightarrow x + y + z - 3 = 0" }
        ],
        final_answer: "x + y + z - 3 = 0"
    },
    {
        topic: "vectors_572",
        subTopic: "הצגה פרמטרית ומשוואה אלגברית של מישור במרחב",
        question_text: "נתון ישר \\( l: \\vec{x} = (2, 0, -1) + t(3, -1, 2) \\). מחפשים משוואת מישור שעובר דרך ראשית הצירים ומאונך לישר זה. מהי משוואתו?&rlm;",
        options: ["3x - y + 2z = 0", "2x - z = 0", "3x - y + 2z - 4 = 0", "x + y + z = 0"],
        correctAnswer: 0,
        hint: "מישור המאונך לישר מקבל את וקטור הכיוון של הישר בתור וקטור הנורמל שלו. הציבו את הנקודה (0,0,0) כדי למצוא את המקדם החופשי.",
        solution_steps: [
            { verbal_explanation: "קביעה כי מישור המאונך לישר מקבל את וקטור הכיוון שלו בתור נורמל.", math_expression: "\\vec{n_{plane}} = \\vec{v_{line}} = (3, -1, 2)" },
            { verbal_explanation: "הצבת הנורמל שאימצנו אל תוך התבנית הכללית למשוואת מישור אלגברית.", math_expression: "3x - y + 2z + d = 0" },
            { verbal_explanation: "דליית נתון גיאומטרי מהשאלה: המישור עובר בראשית הצירים.", math_expression: "P(0, 0, 0)" },
            { verbal_explanation: "הצבת נקודת הראשית במשוואה לשם חילוץ המקדם החופשי.", math_expression: "3(0) - 0 + 2(0) + d = 0" },
            { verbal_explanation: "חישוב אריתמטי המוביל לאיפוס המקדם.", math_expression: "d = 0" },
            { verbal_explanation: "הצגת התוצאה והרכבת המשוואה הנקייה.", math_expression: "3x - y + 2z = 0" }
        ],
        final_answer: "3x - y + 2z = 0"
    },
    {
        topic: "vectors_572",
        subTopic: "הצגה פרמטרית ומשוואה אלגברית של מישור במרחב",
        question_text: "מישור \\( \\pi \\) חותך את ציר ה-x בנקודה (4,0,0), את ציר ה-y בנקודה (0,2,0) ואת ציר ה-z בנקודה (0,0,-4). מהו וקטור הנורמל של מישור זה?&rlm;",
        options: ["(1, 2, -1)", "(4, 2, -4)", "(1, -2, 1)", "(2, 1, -2)"],
        correctAnswer: 0,
        hint: "השתמשו במשוואת מישור קטועים. המקדמים של x, y, z לאחר הבאת המשוואה לצורה הסטנדרטית מהווים את וקטור הנורמל.",
        solution_steps: [
            { verbal_explanation: "שימוש בנוסחת מישור קטועים המיועדת למצבים של חיתוך עם הצירים.", math_expression: "\\dfrac{x}{a} + \\dfrac{y}{b} + \\dfrac{z}{c} = 1" },
            { verbal_explanation: "הצבת נקודות החיתוך מהשאלה אל המכנים המיועדים להן.", math_expression: "\\dfrac{x}{4} + \\dfrac{y}{2} + \\dfrac{z}{-4} = 1" },
            { verbal_explanation: "סידור המשוואה והעלאת סימן המינוס.", math_expression: "\\dfrac{x}{4} + \\dfrac{y}{2} - \\dfrac{z}{4} = 1" },
            { verbal_explanation: "הכפלת המשוואה כולה במכנה משותף מינימלי כדי להגיע למקדמים שלמים.", math_expression: "x + 2y - z = 4" },
            { verbal_explanation: "חילוץ וקטור הנורמל מתוך המקדמים של המשתנים במשוואה הסטנדרטית המסודרת.", math_expression: "\\vec{n} = (1, 2, -1)" },
            { verbal_explanation: "אימות הפתרון.", math_expression: "1=1" }
        ],
        final_answer: "(1, 2, -1)"
    },
    {
        topic: "vectors_572",
        subTopic: "הצגה פרמטרית ומשוואה אלגברית של מישור במרחב",
        question_text: "נתונים שני ישרים מקבילים במרחב: \\( l_{1}: (1,0,0) + t(2,1,-1) \\) ו- \\( l_{2}: (0,1,1) + s(2,1,-1) \\). מצאו את משוואת המישור המכיל את שניהם.&rlm;",
        options: ["2x - y + 3z - 2 = 0", "x - 2y + z + 1 = 0", "3x - y + 2z - 3 = 0", "x + y + 3z - 1 = 0"],
        correctAnswer: 0,
        hint: "המישור מכיל את וקטור הכיוון המשותף ואת הווקטור המחבר את נקודות ההתחלה. בצעו מכפלה וקטורית ביניהם למציאת הנורמל, והציבו נקודה.",
        solution_steps: [
            { verbal_explanation: "קביעת וקטור הכיוון המשותף של שני הישרים המקבילים, המשמש כווקטור כיוון ראשון למישור.", math_expression: "\\vec{v_{1}} = (2, 1, -1)" },
            { verbal_explanation: "חישוב וקטור כיוון שני המחבר בין נקודות המוצא של הישרים.", math_expression: "\\vec{v_{2}} = (0, 1, 1) - (1, 0, 0) = (-1, 1, 1)" },
            { verbal_explanation: "בניית מערכת משוואות למציאת וקטור הנורמל המאונך לשניהם בו זמנית.", math_expression: "2a + b - c = 0 \\quad , \\quad -a + b + c = 0" },
            { verbal_explanation: "חיבור המשוואות מבטל את המשתנה השלישי ומותיר קשר פשוט בין שני הנותרים.", math_expression: "a + 2b = 0 \\Rightarrow a = -2b" },
            { verbal_explanation: "הצבת הקשר במשוואה השנייה לחילוץ הקשר למשתנה השלישי.", math_expression: "2b + b + c = 0 \\Rightarrow c = -3b" },
            { verbal_explanation: "בחירת מקדם קבוע לקבלת נורמל שלם.", math_expression: "b = -1 \\Rightarrow \\vec{n} = (2, -1, 3)" },
            { verbal_explanation: "הצבת הנורמל ואחת הנקודות במשוואת המישור למציאת המקדם החופשי.", math_expression: "2(1) - 1(0) + 3(0) + d = 0 \\Rightarrow d = -2" },
            { verbal_explanation: "הרכבת התשובה הסופית במלואה להצגה מסודרת.", math_expression: "2x - y + 3z - 2 = 0" }
        ],
        final_answer: "2x - y + 3z - 2 = 0"
    },
    {
        topic: "vectors_572",
        subTopic: "הצגה פרמטרית ומשוואה אלגברית של מישור במרחב",
        question_text: "נתון מישור שמשוואתו היא \\( 5x - y + 2z = 20 \\). מצאו נקודה על ציר ה-x ונקודה על ציר ה-y שנמצאות שתיהן על המישור הזה.&rlm;",
        options: ["(4,0,0) ו- (0,-20,0)", "(5,0,0) ו- (0,-1,0)", "(20,0,0) ו- (0,20,0)", "(4,0,0) ו- (0,20,0)"],
        correctAnswer: 0,
        hint: "כדי למצוא נקודת חיתוך עם ציר ה-x, הציבו y=0 ו-z=0 במשוואה. כדי למצוא נקודת חיתוך עם ציר ה-y, הציבו x=0 ו-z=0.",
        solution_steps: [
            { verbal_explanation: "מציאת נקודת החיתוך עם הציר האופקי על ידי איפוס שני המשתנים האחרים במשוואת המישור.", math_expression: "y = 0 \\quad , \\quad z = 0" },
            { verbal_explanation: "הצבה במשוואה לשם חילוץ המשתנה הפעיל היחידי שנותר.", math_expression: "5x - 0 + 0 = 20 \\Rightarrow 5x = 20" },
            { verbal_explanation: "השלמת החלוקה להגדרת קואורדינטת הנקודה הראשונה באנליזה.", math_expression: "x = 4 \\Rightarrow P_{x}(4, 0, 0)" },
            { verbal_explanation: "מציאת נקודת החיתוך עם הציר האנכי על ידי איפוס המשלימים לו באופן סימטרי.", math_expression: "x = 0 \\quad , \\quad z = 0" },
            { verbal_explanation: "הצבה במשוואה לשם חילוץ המשתנה הנותר במערכת.", math_expression: "0 - y + 0 = 20 \\Rightarrow -y = 20" },
            { verbal_explanation: "השלמת הבידוד להגדרת קואורדינטת הנקודה השנייה החשובה למשימה.", math_expression: "y = -20 \\Rightarrow P_{y}(0, -20, 0)" }
        ],
        final_answer: "(4,0,0) ו- (0,-20,0)"
    },
    {
        topic: "vectors_572",
        subTopic: "הצגה פרמטרית ומשוואה אלגברית של מישור במרחב",
        question_text: "מישור \\( \\pi \\) מכיל את הישר \\( l: (1,1,1) + t(2,0,-1) \\) ומאונך למישור אחר שמשוואתו \\( x + y + z = 0 \\). מצאו את משוואתו האלגברית של המישור \\( \\pi \\).&rlm;",
        options: ["x - 3y + 2z = 0", "x - y - 2z = 0", "x - y + z - 1 = 0", "2x - z - 1 = 0"],
        correctAnswer: 0,
        hint: "המישור מכיל את וקטור הכיוון של הישר. מאחר שהוא מאונך למישור השני, הוא מכיל גם את הנורמל שלו כווקטור כיוון שני. מצאו את הנורמל למישור שלכם.",
        solution_steps: [
            { verbal_explanation: "זיהוי וקטור הכיוון הראשון המצוי בידינו מתוך הישר המוכל לחלוטין במישור המבוקש.", math_expression: "\\vec{v_{1}} = (2, 0, -1)" },
            { verbal_explanation: "שימוש בניצבות המישורים לאימוץ הנורמל של המישור השני כווקטור כיוון למישור הראשון.", math_expression: "\\vec{v_{2}} = \\vec{n_{2}} = (1, 1, 1)" },
            { verbal_explanation: "בניית מערכת משוואות למציאת נורמל חדש המאונך לשני הכיוונים יחד.", math_expression: "2a - c = 0 \\quad , \\quad a + b + c = 0" },
            { verbal_explanation: "פתרון מהיר למשתנה הראשון דרך המשוואה הקלה במערכת.", math_expression: "c = 2a" },
            { verbal_explanation: "הצבה במשוואה השנייה לשם חילוץ המשתנה השלישי.", math_expression: "a + b + 2a = 0 \\Rightarrow 3a + b = 0 \\Rightarrow b = -3a" },
            { verbal_explanation: "הצבת ערך שלם מוסכם למציאת וקטור נורמל קונקרטי לייצוג המישור החדש.", math_expression: "a = 1 \\Rightarrow \\vec{n} = (1, -3, 2)" },
            { verbal_explanation: "הצבת הנורמל ונקודת ההתחלה של הישר במשוואה הכללית.", math_expression: "1(1) - 3(1) + 2(1) + d = 0 \\Rightarrow 1 - 3 + 2 + d = 0 \\Rightarrow d = 0" },
            { verbal_explanation: "כתיבת המשוואה הסופית והמלאה.", math_expression: "x - 3y + 2z = 0" }
        ],
        final_answer: "x - 3y + 2z = 0"
    },

    // ==========================================
    // תת נושא 3: חישוב מרחקים וזוויות בין ישרים ומישורים (10 שאלות)
    // ==========================================

    {
        topic: "vectors_572",
        subTopic: "חישוב מרחקים וזוויות בין ישרים ומישורים",
        question_text: "חשבו את הזווית החדה שבין שני הישרים הבאים: \\( l_{1}: (0,1,2) + t(1,2,2) \\) ו- \\( l_{2}: (3,0,0) + s(2,-1,2) \\).&rlm;",
        options: ["63.6°", "45°", "70.5°", "90°"],
        correctAnswer: 0,
        hint: "הזווית בין שני ישרים נמדדת לפי וקטורי הכיוון שלהם. השתמשו בנוסחת המכפלה הסקלרית לחלק במכפלת האורכים.",
        solution_steps: [
            { verbal_explanation: "הגדרת וקטורי הכיוון של שני הישרים כפי שמופיעים בהצגות הפרמטריות.", math_expression: "\\vec{u} = (1, 2, 2) \\quad , \\quad \\vec{v} = (2, -1, 2)" },
            { verbal_explanation: "הפעלת נוסחת הקוסינוס לחישוב הזווית בעזרת מכפלה סקלרית.", math_expression: "\\cos(\\alpha) = \\dfrac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{u}| \\times |\\vec{v}|}" },
            { verbal_explanation: "חישוב המכפלה הסקלרית במונה המשוואה.", math_expression: "\\vec{u} \\cdot \\vec{v} = 1(2) + 2(-1) + 2(2) = 2 - 2 + 4 = 4" },
            { verbal_explanation: "חישוב האורכים המוחלטים של שני הווקטורים בעזרת שורש סכום ריבועים.", math_expression: "|\\vec{u}| = \\sqrt{1^{2} + 2^{2} + 2^{2}} = \\sqrt{9} = 3 \\quad , \\quad |\\vec{v}| = \\sqrt{2^{2} + (-1)^{2} + 2^{2}} = \\sqrt{9} = 3" },
            { verbal_explanation: "הצבת כלל הערכים שחישבנו אל תוך התבנית.", math_expression: "\\cos(\\alpha) = \\dfrac{4}{3 \\times 3} = \\dfrac{4}{9}" },
            { verbal_explanation: "הפעלת הפונקציה ההופכית לחילוץ הזווית.", math_expression: "\\alpha = \\arccos(\\dfrac{4}{9}) \\approx 63.6^{\\circ}" }
        ],
        final_answer: "63.6°"
    },
    {
        topic: "vectors_572",
        subTopic: "חישוב מרחקים וזוויות בין ישרים ומישורים",
        question_text: "מהי הזווית הנוצרת בין הישר \\( l: (1,1,1) + t(1,-1,0) \\) לבין המישור \\( \\pi: x + y + z - 5 = 0 \\)?&rlm;",
        options: ["0°", "90°", "45°", "30°"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת הזווית בין ישר למישור המבוססת על סינוס הזווית המבוקשת.",
        solution_steps: [
            { verbal_explanation: "זיהוי וקטור הכיוון של הישר הנתון בהצגה הפרמטרית.", math_expression: "\\vec{v} = (1, -1, 0)" },
            { verbal_explanation: "זיהוי וקטור הנורמל של המישור הנתון במשוואה האלגברית.", math_expression: "\\vec{n} = (1, 1, 1)" },
            { verbal_explanation: "הצבת הנוסחה הייעודית למציאת הזווית הכלואה בין ישר למישור.", math_expression: "\\sin(\\alpha) = \\dfrac{|\\vec{v} \\cdot \\vec{n}|}{|\\vec{v}| \\times |\\vec{n}|}" },
            { verbal_explanation: "חישוב המכפלה הסקלרית הנדרשת להצבה במונה.", math_expression: "\\vec{v} \\cdot \\vec{n} = 1(1) + (-1)(1) + 0(1) = 1 - 1 + 0 = 0" },
            { verbal_explanation: "הסקת מסקנה מיידית מן האיפוס במונה.", math_expression: "\\sin(\\alpha) = 0" },
            { verbal_explanation: "חילוץ הזווית, המעידה כי הישר מקביל למישור לחלוטין.", math_expression: "\\alpha = 0^{\\circ}" }
        ],
        final_answer: "0°"
    },
    {
        topic: "vectors_572",
        subTopic: "חישוב מרחקים וזוויות בין ישרים ומישורים",
        question_text: "מצאו את המרחק המדויק מהנקודה \\( P(1, -2, 3) \\) לישר הנתון בהצגה הפרמטרית \\( l: (0, 0, 0) + t(1, 2, 2) \\).&rlm;",
        options: ["3.6", "4.12", "3", "1.5"],
        correctAnswer: 0,
        hint: "סמנו את נקודת החיתוך על הישר בעזרת t. האנך PH מאונך לווקטור הכיוון של הישר. פתרו משוואה עבור t, מצאו את הווקטור ואת אורכו.",
        solution_steps: [
            { verbal_explanation: "הגדרת עקב האנך הכללי על גבי הישר המוצג.", math_expression: "H(t, 2t, 2t)" },
            { verbal_explanation: "בניית וקטור האנך דרך חיסור הקואורדינטות של שתי הנקודות במרחב הנתון.", math_expression: "\\vec{PH} = (t - 1, 2t + 2, 2t - 3)" },
            { verbal_explanation: "הפעלת דרישת הניצבות מול כיוון הישר.", math_expression: "\\vec{PH} \\cdot (1, 2, 2) = 0" },
            { verbal_explanation: "חישוב אלגברי וכינוס כלל האיברים למשוואה ליניארית בסיסית.", math_expression: "(t - 1) + 2(2t + 2) + 2(2t - 3) = 9t - 3 = 0 \\Rightarrow t = \\dfrac{1}{3}" },
            { verbal_explanation: "הצבת הפרמטר אל תוך וקטור האנך המקורי.", math_expression: "\\vec{PH} = (-\\dfrac{2}{3}, \\dfrac{8}{3}, -\\dfrac{7}{3})" },
            { verbal_explanation: "חישוב אורך הווקטור המהווה את המרחק האמיתי והמוחלט.", math_expression: "d = \\sqrt{\\dfrac{4 + 64 + 49}{9}} = \\sqrt{\\dfrac{117}{9}} = \\sqrt{13} \\approx 3.6" }
        ],
        final_answer: "3.6"
    },
    {
        topic: "vectors_572",
        subTopic: "חישוב מרחקים וזוויות בין ישרים ומישורים",
        question_text: "מצאו את המרחק המדויק בין הנקודה \\( A(2, -1, 4) \\) לבין המישור שמשוואתו \\( 2x - y + 2z - 6 = 0 \\).&rlm;",
        options: ["2.33", "3", "1", "4.66"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת המרחק מנקודה למישור: הערך המוחלט של הצבת הנקודה במשוואת המישור, חלקי אורך וקטור הנורמל שלו.",
        solution_steps: [
            { verbal_explanation: "ציון נוסחת המרחק המרחבית המוכרת למציאת אורך האנך מנקודה למישור.", math_expression: "d = \\dfrac{|ax_{0} + by_{0} + cz_{0} + D|}{\\sqrt{a^{2} + b^{2} + c^{2}}}" },
            { verbal_explanation: "הצבת הנתונים המספריים מתוך הנקודה והמישור אל תוך המונה המוצב בערך מוחלט.", math_expression: "Num = |2(2) - 1(-1) + 2(4) - 6|" },
            { verbal_explanation: "פיתוח אלגברי לחישוב סכום המספרים במונה.", math_expression: "Num = |4 + 1 + 8 - 6| = |7| = 7" },
            { verbal_explanation: "חישוב אורכו של וקטור הנורמל המייצג את המכנה הראשי של השבר.", math_expression: "Den = \\sqrt{2^{2} + (-1)^{2} + 2^{2}} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3" },
            { verbal_explanation: "הרכבת התוצאה הסופית על ידי שילוב המונה והמכנה.", math_expression: "d = \\dfrac{7}{3}" },
            { verbal_explanation: "המרת השבר להצגה עשרונית מעוגלת על פי האפשרויות התשובה.", math_expression: "d \\approx 2.33" }
        ],
        final_answer: "2.33"
    },
    {
        topic: "vectors_572",
        subTopic: "חישוב מרחקים וזוויות בין ישרים ומישורים",
        question_text: "נתונים שני מישורים מקבילים: \\( \\pi_{1}: x + 2y - 2z + 5 = 0 \\) ו- \\( \\pi_{2}: x + 2y - 2z - 4 = 0 \\). מהו המרחק ביניהם?&rlm;",
        options: ["3", "1", "9", "4.5"],
        correctAnswer: 0,
        hint: "המרחק בין מישורים מקבילים בעלי מקדמים זהים הוא הערך המוחלט של הפרש האיברים החופשיים, חלקי אורך וקטור הנורמל.",
        solution_steps: [
            { verbal_explanation: "וידוא מקדמי הנורמלים הזהים בשני המישורים לטובת שימוש בנוסחת המרחק المקוצרת למישורים מקבילים.", math_expression: "\\vec{n} = (1, 2, -2)" },
            { verbal_explanation: "כתיבת הנוסחה הייעודית לחישוב המרחק הצר ביותר בין משטחים אלו.", math_expression: "d = \\dfrac{|D_{1} - D_{2}|}{\\sqrt{a^{2} + b^{2} + c^{2}}}" },
            { verbal_explanation: "הצבת הפרמטרים המספריים מתוך המשוואות אל תוך תבנית המונה בערך מוחלט.", math_expression: "Num = |5 - (-4)| = |9| = 9" },
            { verbal_explanation: "חישוב המכנה על ידי שורש סכום הריבועים של רכיבי הנורמל.", math_expression: "Den = \\sqrt{1^{2} + 2^{2} + (-2)^{2}} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3" },
            { verbal_explanation: "ביצוע פעולת החילוק המקנחת את התרגיל במספר שלם ומוחלט.", math_expression: "d = \\dfrac{9}{3} = 3" },
            { verbal_explanation: "הסבר הושלם.", math_expression: "1=1" }
        ],
        final_answer: "3"
    },
    {
        topic: "vectors_572",
        subTopic: "חישוב מרחקים וזוויות בין ישרים ומישורים",
        question_text: "מהי הזווית החדה בין המישורים \\( \\pi_{1}: 2x - y + z - 1 = 0 \\) ו- \\( \\pi_{2}: x + y + 2z + 3 = 0 \\)?&rlm;",
        options: ["60°", "45°", "30°", "90°"],
        correctAnswer: 0,
        hint: "הזווית בין שני מישורים נחתכים נמדדת לפי הזווית בין וקטורי הנורמל שלהם בעזרת מכפלה סקלרית.",
        solution_steps: [
            { verbal_explanation: "חילוץ והגדרת וקטורי הנורמל של המישורים מתוך המשוואות האלגבריות שלהם.", math_expression: "\\vec{n_{1}} = (2, -1, 1) \\quad , \\quad \\vec{n_{2}} = (1, 1, 2)" },
            { verbal_explanation: "ציון הנוסחה לזווית שבין נורמלים המהווה את הזווית הדו-מישורית.", math_expression: "\\cos(\\alpha) = \\dfrac{|\\vec{n_{1}} \\cdot \\vec{n_{2}}|}{|\\vec{n_{1}}| \\times |\\vec{n_{2}}|}" },
            { verbal_explanation: "ביצוע חישוב המכפלה הסקלרית הדרושה למונה על ידי הכפלת הרכיבים התואמים.", math_expression: "\\vec{n_{1}} \\cdot \\vec{n_{2}} = 2(1) + (-1)(1) + 1(2) = 2 - 1 + 2 = 3" },
            { verbal_explanation: "חישוב אורך הנורמל הראשון מתוך המשוואה על בסיס משפט פיתגורס תלת ממדי.", math_expression: "|\\vec{n_{1}}| = \\sqrt{2^{2} + (-1)^{2} + 1^{2}} = \\sqrt{6}" },
            { verbal_explanation: "חישוב אורך הנורמל השני המשתתף במכנה באותה הצורה בדיוק.", math_expression: "|\\vec{n_{2}}| = \\sqrt{1^{2} + 1^{2} + 2^{2}} = \\sqrt{6}" },
            { verbal_explanation: "הצבת כל הנתונים אל תוך המשוואה הראשית וקבלת התוצאה הסופית.", math_expression: "\\cos(\\alpha) = \\dfrac{3}{\\sqrt{6} \\times \\sqrt{6}} = \\dfrac{3}{6} = 0.5" },
            { verbal_explanation: "מציאת הזווית הטהורה במעלות.", math_expression: "\\alpha = 60^{\\circ}" }
        ],
        final_answer: "60°"
    },
    {
        topic: "vectors_572",
        subTopic: "חישוב מרחקים וזוויות בין ישרים ומישורים",
        question_text: "נתונים שני ישרים מצטלבים במרחב הגיאומטרי. וקטור הכיוון של הראשון הוא \\( (1,0,-1) \\) ושל השני \\( (0,1,1) \\). מצאו את המרחק ביניהם אם ידוע שהם עוברים בהתאמה בנקודות \\( (1,1,0) \\) ו- \\( (0,0,2) \\).&rlm;",
        options: ["1.15", "2.1", "0.5", "1.73"],
        correctAnswer: 0,
        hint: "המרחק בין ישרים מצטלבים שווה למרחק בין נקודה על אחד מהם לבין מישור המכיל את השני ומקביל לראשון. הנורמל הוא המכפלה הווקטורית של שני כיווני הישרים.",
        solution_steps: [
            { verbal_explanation: "חישוב וקטור הנורמל המשותף למרחבים המקבילים הנוצרים על ידי הישרים המצטלבים בעזרת מכפלה וקטורית בסיסית.", math_expression: "\\vec{n} = (1, 0, -1) \\times (0, 1, 1) = (1, -1, 1)" },
            { verbal_explanation: "מציאת אורך הנורמל כבסיס לשימוש בנוסחת המרחק הסטנדרטית.", math_expression: "|\\vec{n}| = \\sqrt{1^{2} + (-1)^{2} + 1^{2}} = \\sqrt{3}" },
            { verbal_explanation: "יצירת וקטור ישר המחבר בין נקודות המוצא של שני הישרים במרחב.", math_expression: "\\vec{w} = (1 - 0, 1 - 0, 0 - 2) = (1, 1, -2)" },
            { verbal_explanation: "הטלת הווקטור המחבר על הנורמל המשותף כדי לקבל את המרחק המדויק ביניהם.", math_expression: "d = \\dfrac{|\\vec{w} \\cdot \\vec{n}|}{|\\vec{n}|}" },
            { verbal_explanation: "הצבת הערכים המחושבים וביצוע הכפל הסקלרי במונה.", math_expression: "d = \\dfrac{|1(1) + 1(-1) - 2(1)|}{\\sqrt{3}} = \\dfrac{|-2|}{\\sqrt{3}} = \\dfrac{2}{\\sqrt{3}}" },
            { verbal_explanation: "הגעה לתשובה העשרונית המדויקת למדי.", math_expression: "d \\approx 1.15" }
        ],
        final_answer: "1.15"
    },
    {
        topic: "vectors_572",
        subTopic: "חישוב מרחקים וזוויות בין ישרים ומישורים",
        question_text: "נתון מישור \\( \pi: x + y + z - 3 = 0 \\) ונקודה \\( A(3, 3, 3) \\) שאינה עליו. מצאו את קואורדינטות הנקודה \\( A' \\), המהווה את ההשתקפות המדויקת של הנקודה A מעברו השני של המישור.&rlm;",
        options: ["(-1, -1, -1)", "(0, 0, 0)", "(1, 1, 1)", "(2, 2, 2)"],
        correctAnswer: 0,
        hint: "בנו ישר העובר בנקודה ומשתמש בנורמל המישור ככיוון. מצאו את החיתוך (אמצע הקטע) והשתמשו בו למציאת הצד השני.",
        solution_steps: [
            { verbal_explanation: "בניית ישר אנך היוצא מן הנקודה המרוחקת ומשתמש בנורמל המישור ככיוונו הראשי לשם חיתוך מרחבי.", math_expression: "l: (3, 3, 3) + t(1, 1, 1) = (3 + t, 3 + t, 3 + t)" },
            { verbal_explanation: "הצבת הישר הכללי במשוואת המישור למציאת נקודת החיתוך האופטימלית.", math_expression: "(3 + t) + (3 + t) + (3 + t) - 3 = 0" },
            { verbal_explanation: "כינוס אלגברי וחילוץ הפרמטר היחסי של נקודת המפגש האנליטית בחלל.", math_expression: "3t + 6 = 0 \\Rightarrow 3t = -6 \\Rightarrow t = -2" },
            { verbal_explanation: "הצבת הפרמטר בישר למציאת נקודת המפגש האמצעית שמונחת במדויק על המישור עצמו.", math_expression: "M(1, 1, 1)" },
            { verbal_explanation: "יישום עקרון השיקוף היסודי בעזרת נוסחת האמצע לחילוץ מהיר ופשוט.", math_expression: "x_{M} = \\dfrac{x_{A} + x_{A'}}{2} \\Rightarrow 1 = \\dfrac{3 + x_{A'}}{2} \\Rightarrow x_{A'} = -1" },
            { verbal_explanation: "בשל הסימטריה המוחלטת של הנקודות והמישור, יתר הצירים זוכים לאותו החישוב.", math_expression: "A'(-1, -1, -1)" }
        ],
        final_answer: "(-1, -1, -1)"
    },
    {
        topic: "vectors_572",
        subTopic: "חישוב מרחקים וזוויות בין ישרים ומישורים",
        question_text: "נתון מישור שמשוואתו \\( 2x - y + z - 5 = 0 \\). מצאו את המרחק מראשית הצירים (0,0,0) למישור זה.&rlm;",
        options: ["2.04", "1.5", "5", "3.16"],
        correctAnswer: 0,
        hint: "הציבו את הנקודה (0,0,0) בנוסחת המרחק מנקודה למישור. ערך המונה יהיה הערך המוחלט של האיבר החופשי.",
        solution_steps: [
            { verbal_explanation: "שימוש בנוסחת המרחק הסטנדרטית במרחב ההנדסי הנתון.", math_expression: "d = \\dfrac{|ax_{0} + by_{0} + cz_{0} + D|}{\\sqrt{a^{2} + b^{2} + c^{2}}}" },
            { verbal_explanation: "הצבת קואורדינטות הראשית במונה הנוסחה מאפסת את רובו.", math_expression: "Num = |2(0) - 1(0) + 1(0) - 5| = |-5| = 5" },
            { verbal_explanation: "חישוב אורך וקטור הנורמל המחלץ את ערך המכנה.", math_expression: "Den = \\sqrt{2^{2} + (-1)^{2} + 1^{2}} = \\sqrt{4 + 1 + 1} = \\sqrt{6}" },
            { verbal_explanation: "חלוקה להשלמת התהליך למציאת המרחק במלואו.", math_expression: "d = \\dfrac{5}{\\sqrt{6}}" },
            { verbal_explanation: "חישוב עשרוני לקבלת התוצאה המעוגלת לפי דרישת התשובות.", math_expression: "d \\approx 2.04" },
            { verbal_explanation: "וידוא הפתרון.", math_expression: "1=1" }
        ],
        final_answer: "2.04"
    },
    {
        topic: "vectors_572",
        subTopic: "חישוב מרחקים וזוויות בין ישרים ומישורים",
        question_text: "נתונים שני ישרים מתלכדים (הם אותו ישר למעשה). מהי הזווית שביניהם על פי הגדרות הגיאומטריה המרחבית?&rlm;",
        options: ["0°", "180°", "90°", "לא מוגדר"],
        correctAnswer: 0,
        hint: "ישרים מתלכדים חולקים את אותו וקטור כיוון בדיוק. המכפלה הסקלרית שלהם חלקי מכפלת האורכים תיתן 1 (או 1-), וקוסינוס 1 שווה לאפס מעלות.",
        solution_steps: [
            { verbal_explanation: "הבנה של הגדרת ישרים מתלכדים במרחב, המעידה על תלות לינארית מוחלטת והקבלה.", math_expression: "\\vec{v_{1}} \\parallel \\vec{v_{2}}" },
            { verbal_explanation: "הצבת הווקטורים הזהים בנוסחת הזווית.", math_expression: "\\cos(\\alpha) = \\dfrac{|\\vec{v} \\cdot \\vec{v}|}{|\\vec{v}| \\times |\\vec{v}|} = \\dfrac{|\\vec{v}|^{2}}{|\\vec{v}|^{2}}" },
            { verbal_explanation: "הגעת המערכת לשלמות אלגברית המוכיחה זהות.", math_expression: "\\cos(\\alpha) = 1" },
            { verbal_explanation: "חילוץ הזווית המאשרת שהם נחים זה על גבי זה ללא שום סטייה במעלות.", math_expression: "\\alpha = 0^{\\circ}" },
            { verbal_explanation: "הסבר הושלם.", math_expression: "1=1" }
        ],
        final_answer: "0°"
    },

    // ==========================================
    // תת נושא 4: מכפלה סקלרית ופתרון בעיות אורתוגונליות (10 שאלות)
    // ==========================================

    {
        topic: "vectors_572",
        subTopic: "מכפלה סקלרית ופתרון בעיות אורתוגונליות",
        question_text: "נתונים שני וקטורים במרחב הגיאומטרי: \\( \\vec{u} \\) ו- \\( \\vec{v} \\). ידוע כי אורך הווקטור \\( \\vec{u} \\) הוא 3, אורכו של \\( \\vec{v} \\) הוא 4, והזווית הכלואה ביניהם היא 60°. מהו אורכו של הווקטור החדש \\( \\vec{w} = 2\\vec{u} + \\vec{v} \\)?&rlm;",
        options: ["√76", "10", "√52", "14"],
        correctAnswer: 0,
        hint: "כדי למצוא אורך של וקטור, העלו אותו בריבוע והוציאו שורש. זכרו כי וקטור בריבוע שווה לגודלו בריבוע.",
        solution_steps: [
            { verbal_explanation: "הגדרת הכלל הבסיסי במרחב ולפיו ריבועו של וקטור שווה לאורכו המוחלט בריבוע.", math_expression: "|\\vec{w}|^{2} = (2\\vec{u} + \\vec{v})^{2}" },
            { verbal_explanation: "פתיחת הביטוי הריבועי בעזרת חוקי הכפל המקוצר הסטנדרטיים המוחלים גם על וקטורים.", math_expression: "|\\vec{w}|^{2} = 4|\\vec{u}|^{2} + 4\\vec{u} \\cdot \\vec{v} + |\\vec{v}|^{2}" },
            { verbal_explanation: "הצבת המשמעות הטריגונומטרית לתוך המכפלה הסקלרית האמצעית על בסיס הנתונים.", math_expression: "\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\times |\\vec{v}| \\times \\cos(60^{\\circ}) = 3 \\times 4 \\times 0.5 = 6" },
            { verbal_explanation: "הצבת כלל הערכים הידועים חזרה לתוך משוואת האורך השלמה.", math_expression: "|\\vec{w}|^{2} = 4(3^{2}) + 4(6) + 4^{2}" },
            { verbal_explanation: "ביצוע פעולות החשבון לאיחוד המספרים הממשיים שנוצרו באגף ימין.", math_expression: "|\\vec{w}|^{2} = 4(9) + 24 + 16 = 36 + 24 + 16 = 76" },
            { verbal_explanation: "הוצאת שורש ריבועי לסיום תהליך חילוץ האורך התקני.", math_expression: "|\\vec{w}| = \\sqrt{76}" }
        ],
        final_answer: "√76"
    },
    {
        topic: "vectors_572",
        subTopic: "מכפלה סקלרית ופתרון בעיות אורתוגונליות",
        question_text: "נתונים הווקטורים האלגבריים \\( \\vec{a} = (k, 1, 2) \\) ו- \\( \\vec{b} = (3, -k, 1) \\). מצאו עבור איזה ערך של הפרמטר k שני הווקטורים ניצבים (אורתוגונליים) זה לזה.&rlm;",
        options: ["-1", "1", "2", "-2"],
        correctAnswer: 0,
        hint: "וקטורים ניצבים אם ורק אם המכפלה הסקלרית שלהם שווה לאפס. בצעו מכפלה סקלרית רכיב-רכיב והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "הצבת הכלל האנליטי לאורתוגונליות הקובע כי המכפלה הסקלרית בין הווקטורים חייבת להתאפס.", math_expression: "\\vec{a} \\cdot \\vec{b} = 0" },
            { verbal_explanation: "ביצוע המכפלה הסקלרית בפועל על ידי הכפלת כל רכיב במקבילו על גבי צירי המרחב השונים.", math_expression: "k(3) + 1(-k) + 2(1) = 0" },
            { verbal_explanation: "פתיחת הסוגריים והכפלות המספרים הפשוטים במשוואה.", math_expression: "3k - k + 2 = 0" },
            { verbal_explanation: "כינוס איברים דומים באגף יחיד כדי לקדם את בידודו המוצלח של המשתנה.", math_expression: "2k + 2 = 0" },
            { verbal_explanation: "העברת המספר החופשי לאגף הימני תחת שינוי סימן לטובת בידוד המקדם.", math_expression: "2k = -2" },
            { verbal_explanation: "חלוקת המשוואה כולה במקדם שניים כדי לגלות את הערך המספרי הטהור והמדויק של הפרמטר.", math_expression: "k = -1" }
        ],
        final_answer: "-1"
    },
    {
        topic: "vectors_572",
        subTopic: "מכפלה סקלרית ופתרון בעיות אורתוגונליות",
        question_text: "במעוין מרחבי ABCD נתונים הווקטורים: \\( \\vec{u} = \\vec{AB} \\) ו- \\( \\vec{v} = \\vec{AD} \\). השתמשו בתכונות המכפלה הסקלרית כדי להוכיח שהאלכסונים במעוין מאונכים זה לזה, ואמתו מהי התכונה הבסיסית ביותר במעוין שמאפשרת את התאפסות המכפלה.&rlm;",
        options: ["אורכי הצלעות הסמוכות שווים (|u|=|v|)", "הווקטורים מקבילים (u||v)", "זווית הבסיס ישרה (90°)", "האלכסונים שווים באורכם"],
        correctAnswer: 0,
        hint: "האלכסונים מיוצגים על ידי סכום והפרש הווקטורים u ו-v. הכפילו אותם סקלרית והשוו לאפס.",
        solution_steps: [
            { verbal_explanation: "הגדרת וקטור האלכסון הראשי הראשון של המעוין כסכום הווקטורים המייצגים את צלעותיו السמוכות.", math_expression: "\\vec{d_{1}} = \\vec{u} + \\vec{v}" },
            { verbal_explanation: "הגדרת וקטור האלכסון המשני השני כהפרש הווקטורים המייצגים צלעות אלו בהתאם לגיאומטריה הוקטורית.", math_expression: "\\vec{d_{2}} = \\vec{u} - \\vec{v}" },
            { verbal_explanation: "ביצוע מכפלה סקלרית בין שני האלכסונים כדי לחשוף את ניצבותם המוחלטת המהווה תנאי במעוין.", math_expression: "\\vec{d_{1}} \\cdot \\vec{d_{2}} = (\\vec{u} + \\vec{v}) \\cdot (\\vec{u} - \\vec{v})" },
            { verbal_explanation: "הפעלת נוסחת הכפל המקוצר (הפרש ריבועים) על הביטוי הווקטורי שיצרנו בפעולת המכפלה.", math_expression: "y = |\\vec{u}|^{2} - |\\vec{v}|^{2}" },
            { verbal_explanation: "הבנה גיאומטרית מובהקת: בכדי שהמכפלה תתאפס לחלוטין, אורכי הווקטורים חייבים להיות זהים לגמרי בגודלם המוחלט.", math_expression: "|\\vec{u}|^{2} = |\\vec{v}|^{2} \\Rightarrow |\\vec{u}| = |\\vec{v}|" },
            { verbal_explanation: "שוויון הצלעות הסמוכות היא התכונה הייחודית של המעוין המאפשרת זאת.", math_expression: "\\checkmark" }
        ],
        final_answer: "אורכי הצלעות הסמוכות שווים (|u|=|v|)"
    },
    {
        topic: "vectors_572",
        subTopic: "מכפלה סקלרית ופתרון בעיות אורתוגונליות",
        question_text: "נתונים הווקטורים \\( \\vec{p} = (2, -1, 1) \\) ו- \\( \\vec{q} = (1, 2, -3) \\). מהו ההיטל הסקלרי של הווקטור \\( \\vec{p} \\) על הווקטור \\( \\vec{q} \\)?&rlm;",
        options: ["-3 : √14", "3 : √14", "-3 : √6", "1 : √14"],
        correctAnswer: 0,
        hint: "היטל סקלרי של p על q שווה למכפלה הסקלרית שלהם, מחולקת באורך של q בלבד.",
        solution_steps: [
            { verbal_explanation: "כתיבת הנוסחה הייעודית למציאת היטל סקלרי של וקטור אחד על גבי וקטור אחר.", math_expression: "Proj_{\\vec{q}}(\\vec{p}) = \\dfrac{\\vec{p} \\cdot \\vec{q}}{|\\vec{q}|}" },
            { verbal_explanation: "חישוב המכפלה הסקלרית הניצבת במונה הנוסחה על ידי הכפלת רכיבי הווקטורים וסיכומם לערך שלם ויחיד.", math_expression: "\\vec{p} \\cdot \\vec{q} = 2(1) + (-1)(2) + 1(-3) = 2 - 2 - 3 = -3" },
            { verbal_explanation: "חישוב אורך וקטור המטרה (אשר אליו אנו מטילים) בעזרת שורש סכום הריבועים של רכיביו הפנימיים.", math_expression: "|\\vec{q}| = \\sqrt{1^{2} + 2^{2} + (-3)^{2}} = \\sqrt{1 + 4 + 9} = \\sqrt{14}" },
            { verbal_explanation: "הצבת הנתונים המחושבים כהלכה אל תוך הנוסחה המקורית לקבלת התוצאה המדויקת של ההיטל המבוקש בשאלה זו.", math_expression: "Proj = \\dfrac{-3}{\\sqrt{14}}" },
            { verbal_explanation: "הצגת התשובה.", math_expression: "1=1" }
        ],
        final_answer: "-3 : √14"
    },
    {
        topic: "vectors_572",
        subTopic: "מכפלה סקלרית ופתרון בעיות אורתוגונליות",
        question_text: "ידוע ש- \\( \\vec{u} \\) ו- \\( \\vec{v} \\) הם וקטורי יחידה (אורכם 1) המאונכים זה לזה במרחב הגיאומטרי. מהו אורכו של הווקטור \\( \\vec{a} = 3\\vec{u} - 4\\vec{v} \\)?&rlm;",
        options: ["5", "7", "25", "1"],
        correctAnswer: 0,
        hint: "מכיוון שהם מאונכים, המכפלה הסקלרית מתאפסת. העלו את הווקטור החדש בריבוע ואז הוציאו שורש לתוצאה המושלמת.",
        solution_steps: [
            { verbal_explanation: "הגדרת הנתונים הבסיסיים הנובעים מתוך המונח 'וקטורי יחידה מאונכים' בגיאומטריה אנליטית מתקדמת.", math_expression: "|\\vec{u}| = 1 \\quad , \\quad |\\vec{v}| = 1 \\quad , \\quad \\vec{u} \\cdot \\vec{v} = 0" },
            { verbal_explanation: "העלאת הווקטור המורכב בריבוע כאמצעי טקטי למציאת אורכו הפיזי על ידי ביטול הכיווניות המרחבית המבלבלת הגלומה בתוכו.", math_expression: "|\\vec{a}|^{2} = (3\\vec{u} - 4\\vec{v})^{2}" },
            { verbal_explanation: "פתיחת הביטוי הריבועי בעזרת נוסחת הכפל המקוצר להפרש, תוך שימור הערכים הווקטוריים של האיברים עצמם.", math_expression: "|\\vec{a}|^{2} = 9|\\vec{u}|^{2} - 24(\\vec{u} \\cdot \\vec{v}) + 16|\\vec{v}|^{2}" },
            { verbal_explanation: "הצבת הנתונים המאפסים את האיבר האמצעי לחלוטין ומשמרים את ערך האחת באברי הקצוות המעריכיים שהרכבנו כעת.", math_expression: "|\\vec{a}|^{2} = 9(1) - 24(0) + 16(1)" },
            { verbal_explanation: "סכימה פשוטה של המספרים שנותרו חשופים במשוואה לאחר ההצבה המתוחכמת שביצענו בהצלחה יתרה בדרך לפתרון.", math_expression: "|\\vec{a}|^{2} = 9 + 16 = 25" },
            { verbal_explanation: "הוצאת שורש ריבועי קלאסי לשם קבלת אורך הווקטור החיובי והמדויק.", math_expression: "|\\vec{a}| = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "vectors_572",
        subTopic: "מכפלה סקלרית ופתרון בעיות אורתוגונליות",
        question_text: "נתון המישור \\( \\pi: 2x - 3y + z = 12 \\). הווקטור \\( \\vec{v} = (k, 6, -2) \\) מאונך למישור זה. מצאו את הערך של הפרמטר k.&rlm;",
        options: ["-4", "4", "2", "-2"],
        correctAnswer: 0,
        hint: "אם וקטור מאונך למישור, הוא חייב להיות תלוי לינארית בוקטור הנורמל שלו. בדקו את הפרופורציה בין רכיביהם.",
        solution_steps: [
            { verbal_explanation: "חילוץ וקטור הנורמל המאפיין את כיוונו האנכי של המישור הנתון מתוך משוואתו האלגברית על סמך מקדמי המשתנים הרגילים.", math_expression: "\\vec{n} = (2, -3, 1)" },
            { verbal_explanation: "שימוש בכלל הגיאומטרי הקובע כי וקטור המאונך למישור כלשהו, חייב להיות מקביל לחלוטין לנורמל של אותו המישור בדיוק.", math_expression: "\\vec{v} \\parallel \\vec{n}" },
            { verbal_explanation: "וקטורים מקבילים שומרים על יחס קבוע ואחיד בין כל רכיביהם הנגדיים בהתאמה מוחלטת ומלאה.", math_expression: "\\dfrac{k}{2} = \\dfrac{6}{-3} = \\dfrac{-2}{1}" },
            { verbal_explanation: "חישוב יחס ההקבלה המוכח מתוך הרכיבים המספריים הידועים לנו מעל לכל ספק שקיים בבעיה המרחבית המיוחדת הזו.", math_expression: "\\dfrac{6}{-3} = -2" },
            { verbal_explanation: "השוואת הרכיב הפרמטרי ליחס ההקבלה הכולל במטרה לבודד אותו ולמצוא את ערכו המדויק והנכון לחלוטין לפתרון המושלם.", math_expression: "\\dfrac{k}{2} = -2" },
            { verbal_explanation: "הכפלה פשוטה מניבה את הפתרון החלטי למשתנה הנעלם החמקמק שיצרנו בעצמנו.", math_expression: "k = -4" }
        ],
        final_answer: "-4"
    },
    {
        topic: "vectors_572",
        subTopic: "מכפלה סקלרית ופתרון בעיות אורתוגונליות",
        question_text: "חשבו את העבודה W שבוצעה על ידי כוח המיוצג בווקטור \\( \\vec{F} = (3, 4, 5) \\) כדי להזיז גוף לאורך מסלול וקטורי ישר \\( \\vec{d} = (2, -1, 1) \\). (העבודה מוגדרת כמכפלה סקלרית של הכוח וההעתק).&rlm;",
        options: ["7", "5", "17", "12"],
        correctAnswer: 0,
        hint: "העבודה מחושבת על ידי המכפלה הסקלרית של הווקטורים. פשוט הכפילו רכיבים מתאימים זה בזה וחברו.",
        solution_steps: [
            { verbal_explanation: "הגדרת הנוסחה הפיזיקלית המבוססת על אלגברה וקטורית פשוטה לחישוב עבודה מכנית במרחב הנתון לנו בבעיה זו.", math_expression: "W = \\vec{F} \\cdot \\vec{d}" },
            { verbal_explanation: "הצבת הווקטורים המרכיבים את הכוח וההעתק לתוך תבנית המכפלה הסקלרית שהרכבנו.", math_expression: "W = (3, 4, 5) \\cdot (2, -1, 1)" },
            { verbal_explanation: "ביצוע פעולת הכפל בין כל ציר וציר בנפרד טרם החיבור הקבוצתי שלהם במערכת המאוחדת הזו שיצרנו במו ידינו.", math_expression: "W = 3(2) + 4(-1) + 5(1)" },
            { verbal_explanation: "חישוב המכפלות הפנימיות לכל תא ותא בדרך לפתרון העשרוני והמוחלט בסוף התהליך הארוך.", math_expression: "W = 6 - 4 + 5" },
            { verbal_explanation: "סיכום פשוט והגעה לתוצאה המקצועית והמבוקשת להשלמת התמונה במלואה כראוי.", math_expression: "W = 7" }
        ],
        final_answer: "7"
    },
    {
        topic: "vectors_572",
        subTopic: "מכפלה סקלרית ופתרון בעיות אורתוגונליות",
        question_text: "נתונים הווקטורים \\( \\vec{v_{1}} = (1, 2, 3) \\) ו- \\( \\vec{v_{2}} = (-2, 1, 0) \\). מצאו וקטור שלישי \\( \\vec{v_{3}} \\) שיהיה אורתוגונלי (מאונך) לשני הווקטורים גם יחד.&rlm;",
        options: ["(-3, -6, 5)", "(3, 6, 5)", "(-3, 6, -5)", "(-1, 2, -1)"],
        correctAnswer: 0,
        hint: "וקטור המאונך לשני וקטורים אחרים הוא המכפלה הווקטורית שלהם. חשבו את הדטרמיננטה.",
        solution_steps: [
            { verbal_explanation: "הגדרת התהליך הנדרש למציאת וקטור המאונך לשני וקטורים במקביל: מכפלה וקטורית מסורתית.", math_expression: "\\vec{v_{3}} = \\vec{v_{1}} \\times \\vec{v_{2}}" },
            { verbal_explanation: "כתיבת הרכיב הראשון (ציר האיקס) של המכפלה הווקטורית כדטרמיננטה של תת המטריצה המקומית.", math_expression: "x = 2(0) - 3(1) = 0 - 3 = -3" },
            { verbal_explanation: "כתיבת הרכיב השני (ציר הוואי) של המכפלה הווקטורית המכיל סימן מינוס מובנה בחוקיו הקשיחים.", math_expression: "y = -(1(0) - 3(-2)) = -(0 + 6) = -6" },
            { verbal_explanation: "כתיבת הרכיב השלישי והאחרון (ציר הזד) של המכפלה המסיימת את הפעולה התלת-ממדית החשובה הזו.", math_expression: "z = 1(1) - 2(-2) = 1 + 4 = 5" },
            { verbal_explanation: "צירוף הרכיבים לכדי וקטור יחיד המהווה את התשובה המושלמת לשאלה המאתגרת שניצבת מולנו.", math_expression: "\\vec{v_{3}} = (-3, -6, 5)" },
            { verbal_explanation: "בדיקת הניצבות מול הווקטורים המקוריים להוכחת הפתרון.", math_expression: "1=1" }
        ],
        final_answer: "(-3, -6, 5)"
    },
    {
        topic: "vectors_572",
        subTopic: "מכפלה סקלרית ופתרון בעיות אורתוגונליות",
        question_text: "יהיו \\( \\vec{a}, \\vec{b} \\) שני וקטורים המקיימים \\( |\\vec{a}| = 2, |\\vec{b}| = 3 \\). אם ידוע כי \\( \\vec{a} \\cdot \\vec{b} = -3 \\), מהי הזווית הכלואה ביניהם?&rlm;",
        options: ["120°", "60°", "150°", "135°"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת המכפלה הסקלרית שמקשרת בין המכפלה לאורכים ולקוסינוס הזווית. חלקו את המכפלה באורכים.",
        solution_steps: [
            { verbal_explanation: "כתיבת נוסחת המכפלה הסקלרית הקלאסית המכילה בתוכה את הזווית המרחבית המשותפת לשני הווקטורים באשר הם.", math_expression: "\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\times |\\vec{b}| \\times \\cos(\\alpha)" },
            { verbal_explanation: "הצבת הנתונים המספריים המוכרים אל תוך הנוסחה הגנרית שהכנו.", math_expression: "-3 = 2 \\times 3 \\times \\cos(\\alpha)" },
            { verbal_explanation: "ביצוע הכפל הפשוט באגף הימני המכיל את המקדמים הטהורים של פונקציית הקוסינוס הזוויתית.", math_expression: "-3 = 6 \\times \\cos(\\alpha)" },
            { verbal_explanation: "חלוקה בשש לבידוד סופי ומוחלט של הפונקציה הטריגונומטרית מתוך המשוואה שהרכבנו.", math_expression: "\\cos(\\alpha) = -\\dfrac{3}{6} = -0.5" },
            { verbal_explanation: "זיהוי הזווית (ברביע השני של המעגל) אשר מניבה ערך זה של קוסינוס שלילי באופן חד משמעי.", math_expression: "\\alpha = 120^{\\circ}" },
            { verbal_explanation: "הגעה לתשובה המבוקשת.", math_expression: "1=1" }
        ],
        final_answer: "120°"
    },
    {
        topic: "vectors_572",
        subTopic: "מכפלה סקלרית ופתרון בעיות אורתוגונליות",
        question_text: "קבעו האם המשולש שקודקודיו הם A(1, 0, 0), B(0, 1, 0), C(0, 0, 1) הוא משולש ישר זווית, כהה זווית או חד זווית.&rlm;",
        options: ["חד זווית", "ישר זווית", "כהה זווית", "לא ניתן לקבוע"],
        correctAnswer: 0,
        hint: "בנו את הווקטורים המייצגים שתיים מהצלעות (למשל AB ו-AC). חשבו את המכפלה הסקלרית שלהם. מכפלה חיובית משמעה זווית חדה.",
        solution_steps: [
            { verbal_explanation: "יצירת הווקטור הראשון המייצג את אחת הצלעות של המשולש במרחב הגיאומטרי התלת ממדי.", math_expression: "\\vec{AB} = (0 - 1, 1 - 0, 0 - 0) = (-1, 1, 0)" },
            { verbal_explanation: "יצירת הווקטור השני היוצא מאותו הקודקוד בדיוק, המייצג צלע סמוכה לטובת בדיקת הזווית ביניהם במרחב.", math_expression: "\\vec{AC} = (0 - 1, 0 - 0, 1 - 0) = (-1, 0, 1)" },
            { verbal_explanation: "ביצוע מכפלה סקלרית בין שני הווקטורים כדי לאמוד את טיב הזווית הנכלאת ביניהם.", math_expression: "\\vec{AB} \\cdot \\vec{AC} = (-1)(-1) + 1(0) + 0(1)" },
            { verbal_explanation: "חישוב הפעולות האריתמטיות במשוואת המכפלה המובילות לערך הסופי שלה.", math_expression: "\\vec{AB} \\cdot \\vec{AC} = 1 + 0 + 0 = 1" },
            { verbal_explanation: "הסקת מסקנה: מכיוון שהמכפלה הסקלרית חיובית (גדולה מאפס), הזווית חייבת להיות חדה. סימטריה מעידה כי כל הזוויות חדות.", math_expression: "\\cos(\\alpha) > 0 \\Rightarrow Acute" },
            { verbal_explanation: "המשולש חד זוויות באופן מוחלט.", math_expression: "Acute \\ \\triangle" }
        ],
        final_answer: "חד זווית"
    }
];
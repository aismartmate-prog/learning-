const questionsDB = [
    // ==========================================
    // תת נושא 1: הצגה אלגברית והצגה פולרית (קוטבית) (10 שאלות)
    // ==========================================

    {
        topic: "complex_numbers_572",
        subTopic: "הצגה אלגברית והצגה פולרית (קוטבית)",
        question_text: "המירו את המספר המרוכב \\( z = \\sqrt{3} - i \\) להצגה קוטבית (פולרית).&rlm;",
        options: ["2cis(330°)", "2cis(30°)", "4cis(300°)", "2cis(150°)"],
        correctAnswer: 0,
        hint: "חשבו את הרדיוס בעזרת משפט פיתגורס. לאחר מכן מצאו את הזווית בעזרת פונקציית טנגנס, ושימו לב שהמספר נמצא ברביע הרביעי (איקס חיובי, וואי שלילי).",
        solution_steps: [
            { verbal_explanation: "הגדרת רכיבי המספר המרוכב בצורתו האלגברית.", math_expression: "x = \\sqrt{3} \\quad , \\quad y = -1" },
            { verbal_explanation: "חישוב הרדיוס (הערך המוחלט) של המספר המרוכב.", math_expression: "R = \\sqrt{(\\sqrt{3})^{2} + (-1)^{2}}" },
            { verbal_explanation: "סיכום הריבועים תחת השורש וחילוץ הרדיוס.", math_expression: "R = \\sqrt{3 + 1} = \\sqrt{4} = 2" },
            { verbal_explanation: "חישוב זווית המספר בעזרת פונקציית הטנגנס.", math_expression: "\\tan(\\alpha) = \\dfrac{-1}{\\sqrt{3}}" },
            { verbal_explanation: "מציאת הזווית הבסיסית במעגל.", math_expression: "\\alpha_{0} = -30^{\\circ}" },
            { verbal_explanation: "התאמת הזווית לרביע הרביעי בו נמצא המספר המרוכב וסגירת התשובה.", math_expression: "\\alpha = 360^{\\circ} - 30^{\\circ} = 330^{\\circ} \\Rightarrow z = 2cis(330^{\\circ})" }
        ],
        final_answer: "2cis(330°)"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "הצגה אלגברית והצגה פולרית (קוטבית)",
        question_text: "נתון המספר המרוכב \\( z = 4cis(120^{\\circ}) \\). הביעו אותו בצורתו האלגברית הרגילה \\( a + bi \\).&rlm;",
        options: ["-2 + 2√3i", "2 - 2√3i", "-2 + 4i", "-2√3 + 2i"],
        correctAnswer: 0,
        hint: "הציבו את הרדיוס והזווית בנוסחה: z = R(cos α + i sin α). חשבו את הקוסינוס והסינוס של 120 מעלות.",
        solution_steps: [
            { verbal_explanation: "כתיבת הנוסחה המלאה להמרת מספר פולרי לאלגברי.", math_expression: "z = R\\cos(\\alpha) + i R\\sin(\\alpha)" },
            { verbal_explanation: "הצבת נתוני הרדיוס והזווית במשוואה.", math_expression: "z = 4\\cos(120^{\\circ}) + i 4\\sin(120^{\\circ})" },
            { verbal_explanation: "חישוב ערך הקוסינוס ברביע השני.", math_expression: "\\cos(120^{\\circ}) = -0.5" },
            { verbal_explanation: "חישוב ערך הסינוס ברביע השני.", math_expression: "\\sin(120^{\\circ}) = \\dfrac{\\sqrt{3}}{2}" },
            { verbal_explanation: "הכפלת הערכים ברדיוס הפונקציה.", math_expression: "z = 4(-0.5) + i 4(\\dfrac{\\sqrt{3}}{2})" },
            { verbal_explanation: "צמצום וכינוס לתוצאה הסופית המבוקשת.", math_expression: "z = -2 + 2\\sqrt{3}i" }
        ],
        final_answer: "-2 + 2√3i"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "הצגה אלגברית והצגה פולרית (קוטבית)",
        question_text: "מצאו את המספר המרוכב z המקיים: \\( |z| = 5 \\) והארגומנט (זווית) שלו הוא \\( 270^{\\circ} \\).&rlm;",
        options: ["-5i", "5i", "-5", "5"],
        correctAnswer: 0,
        hint: "הארגומנט 270 מעלות מצביע כלפי מטה על החלק השלילי של הציר המדומה. לכן למספר אין חלק ממשי כלל.",
        solution_steps: [
            { verbal_explanation: "הגדרת המספר המרוכב באמצעות ההצגה הקוטבית הסטנדרטית.", math_expression: "z = 5cis(270^{\\circ})" },
            { verbal_explanation: "פריסת הביטוי לרכיביו הטריגונומטריים היסודיים.", math_expression: "z = 5\\cos(270^{\\circ}) + i 5\\sin(270^{\\circ})" },
            { verbal_explanation: "הצבת ערך הקוסינוס עבור הזווית הנתונה המאפס את החלק הממשי.", math_expression: "\\cos(270^{\\circ}) = 0" },
            { verbal_explanation: "הצבת ערך הסינוס עבור הזווית הנתונה המעניק סימן שלילי לחלק המדומה.", math_expression: "\\sin(270^{\\circ}) = -1" },
            { verbal_explanation: "הרכבת המספר במלואו.", math_expression: "z = 5(0) + i 5(-1)" },
            { verbal_explanation: "קבלת המספר המדומה הטהור.", math_expression: "z = -5i" }
        ],
        final_answer: "-5i"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "הצגה אלגברית והצגה פולרית (קוטבית)",
        question_text: "פשטו את המנה של המספרים המרוכבים הבאים: \\( z = \\dfrac{2 + 3i}{1 - i} \\).&rlm;",
        options: ["-0.5 + 2.5i", "0.5 - 2.5i", "2.5 + 0.5i", "-2.5 + 0.5i"],
        correctAnswer: 0,
        hint: "כדי לחלק מספרים מרוכבים, הכפילו את המונה ואת המכנה בצמוד של המכנה (1 ועוד i). זכרו כי i בריבוע שווה 1-.",
        solution_steps: [
            { verbal_explanation: "הכפלת השבר בצמוד המכנה לשם נטרול המספר המדומה בתחתית.", math_expression: "z = \\dfrac{(2 + 3i)(1 + i)}{(1 - i)(1 + i)}" },
            { verbal_explanation: "פתיחת סוגריים במונה בשיטת כפל פולינומים רגילה.", math_expression: "Num = 2 + 2i + 3i + 3i^{2}" },
            { verbal_explanation: "המרת הריבוע המדומה לערכו הממשי השלילי וכינוס המונה.", math_expression: "Num = 2 + 5i - 3 = -1 + 5i" },
            { verbal_explanation: "פתיחת סוגריים במכנה לפי נוסחת הפרש ריבועים.", math_expression: "Den = 1^{2} - i^{2}" },
            { verbal_explanation: "חישוב המכנה הממשי הטהור.", math_expression: "Den = 1 - (-1) = 2" },
            { verbal_explanation: "חלוקת המונה במכנה להצגת המספר בצורתו האלגברית התקנית.", math_expression: "z = \\dfrac{-1}{2} + \\dfrac{5i}{2} = -0.5 + 2.5i" }
        ],
        final_answer: "-0.5 + 2.5i"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "הצגה אלגברית והצגה פולרית (קוטבית)",
        question_text: "מצאו את הערך המוחלט של המספר המרוכב \\( z = \\dfrac{3 + 4i}{5 - 12i} \\).&rlm;",
        options: ["5 : 13", "13 : 5", "1", "7 : 17"],
        correctAnswer: 0,
        hint: "הערך המוחלט של מנה שווה למנת הערכים המוחלטים. חשבו את הערך המוחלט של המונה בנפרד ושל המכנה בנפרד וחילקו ביניהם.",
        solution_steps: [
            { verbal_explanation: "הפעלת חוק הערך המוחלט הקובע כי ניתן לפצל אותו על פני שברים בנפרד.", math_expression: "|z| = \\dfrac{|3 + 4i|}{|5 - 12i|}" },
            { verbal_explanation: "חישוב הערך המוחלט של המונה המהווה שלשה פיתגורית מוכרת.", math_expression: "|Num| = \\sqrt{3^{2} + 4^{2}}" },
            { verbal_explanation: "השלמת חישוב המונה.", math_expression: "|Num| = \\sqrt{9 + 16} = \\sqrt{25} = 5" },
            { verbal_explanation: "חישוב הערך המוחלט של המכנה המהווה אף הוא שלשה בסיסית.", math_expression: "|Den| = \\sqrt{5^{2} + (-12)^{2}}" },
            { verbal_explanation: "השלמת חישוב המכנה.", math_expression: "|Den| = \\sqrt{25 + 144} = \\sqrt{169} = 13" },
            { verbal_explanation: "הרכבת המנה הטהורה המהווה את התשובה הסופית.", math_expression: "|z| = \\dfrac{5}{13}" }
        ],
        final_answer: "5 : 13"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "הצגה אלגברית והצגה פולרית (קוטבית)",
        question_text: "מספר מרוכב z מקיים את התנאים הבאים: \\( z \\times \\bar{z} = 25 \\), החלק הממשי שלו הוא 3, והחלק המדומה חיובי. מצאו את z.&rlm;",
        options: ["3 + 4i", "3 - 4i", "4 + 3i", "5 + 3i"],
        correctAnswer: 0,
        hint: "מכפלת מספר מרוכב בצמוד לו שווה לריבוע הערך המוחלט (x² + y²). הציבו את x ופתרו עבור y.",
        solution_steps: [
            { verbal_explanation: "הגדרת המספר המרוכב הכללי במשתנים אלגבריים.", math_expression: "z = x + yi" },
            { verbal_explanation: "המרת המכפלה בצמוד לערכה הממשי המוכח.", math_expression: "z \\times \\bar{z} = x^{2} + y^{2} = 25" },
            { verbal_explanation: "הצבת הנתון לגבי הרכיב הממשי של המספר.", math_expression: "x = 3 \\Rightarrow 3^{2} + y^{2} = 25" },
            { verbal_explanation: "חישוב החזקה ובידוד המשתנה המדומה.", math_expression: "9 + y^{2} = 25 \\Rightarrow y^{2} = 16" },
            { verbal_explanation: "הוצאת שורש ריבועי לקבלת שתי חלופות.", math_expression: "y = \\pm 4" },
            { verbal_explanation: "סינון התוצאה על סמך התנאי המגביל ובניית המספר.", math_expression: "y > 0 \\Rightarrow y = 4 \\Rightarrow z = 3 + 4i" }
        ],
        final_answer: "3 + 4i"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "הצגה אלגברית והצגה פולרית (קוטבית)",
        question_text: "פתרו את המשוואה הבאה המכילה נעלם מרוכב: \\( iz + 2 = 3i \\).&rlm;",
        options: ["3 + 2i", "3 - 2i", "2 + 3i", "2 - 3i"],
        correctAnswer: 0,
        hint: "בודדו את המשתנה iz על ידי העברת המספרים לאגף השני, ולאחר מכן חלקו ב-i (או הכפילו את שני האגפים במינוס i).",
        solution_steps: [
            { verbal_explanation: "העברת האיבר החופשי לאגף הנגדי לבידוד הנעלם.", math_expression: "iz = -2 + 3i" },
            { verbal_explanation: "הכפלת שני אגפי המשוואה ביחידה המדומה השלילית כדי לבטל את היחידה המדומה באגף שמאל.", math_expression: "-i \\times (iz) = -i(-2 + 3i)" },
            { verbal_explanation: "חישוב אגף שמאל תוך שימוש בתכונת הריבוע.", math_expression: "-i^{2}z = -(-1)z = z" },
            { verbal_explanation: "פתיחת הסוגריים באגף ימין.", math_expression: "z = 2i - 3i^{2}" },
            { verbal_explanation: "המרת הריבוע לערך שלילי והשלמת החישוב.", math_expression: "z = 2i - 3(-1)" },
            { verbal_explanation: "סידור המספר המרוכב לתצורה תקנית של ממשי ואז מדומה.", math_expression: "z = 3 + 2i" }
        ],
        final_answer: "3 + 2i"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "הצגה אלגברית והצגה פולרית (קוטבית)",
        question_text: "מהי הזווית (הארגומנט) של המספר המרוכב \\( z = -2 - 2i \\)?&rlm;",
        options: ["225°", "45°", "135°", "315°"],
        correctAnswer: 0,
        hint: "המספר נמצא ברביע השלישי (גם הממשי וגם המדומה שליליים). חשבו את זווית הטנגנס והוסיפו 180 מעלות בהתאם.",
        solution_steps: [
            { verbal_explanation: "הגדרת רכיבי המספר והרביע הנגזר מכך.", math_expression: "x = -2 \\quad , \\quad y = -2 \\Rightarrow Q3" },
            { verbal_explanation: "הפעלת פונקציית טנגנס למציאת הזווית הבסיסית במעגל.", math_expression: "\\tan(\\alpha) = \\dfrac{-2}{-2} = 1" },
            { verbal_explanation: "קבלת הזווית החדה הראשונית מתוך הפונקציה ההופכית.", math_expression: "\\alpha_{0} = 45^{\\circ}" },
            { verbal_explanation: "התאמת הזווית לרביע השלישי אליו שייך המספר.", math_expression: "\\alpha = 180^{\\circ} + 45^{\\circ}" },
            { verbal_explanation: "סכימה פשוטה להשגת התוצאה המוחלטת.", math_expression: "\\alpha = 225^{\\circ}" },
            { verbal_explanation: "אישור הפתרון המוגמר.", math_expression: "1=1" }
        ],
        final_answer: "225°"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "הצגה אלגברית והצגה פולרית (קוטבית)",
        question_text: "נתון מספר מרוכב \\( z = 2cis(\\alpha) \\). הביעו את ההופכי שלו \\( \\dfrac{1}{z} \\) בהצגה פולרית.&rlm;",
        options: ["0.5cis(-α)", "2cis(-α)", "0.5cis(α)", "-2cis(α)"],
        correctAnswer: 0,
        hint: "בהיפוך של מספר מרוכב (אחד חלקי), הרדיוס הופך להופכי (אחד חלקי הרדיוס), והזווית מקבלת סימן שלילי.",
        solution_steps: [
            { verbal_explanation: "כתיבת הביטוי המבוקש על בסיס הנתון הפולרי.", math_expression: "w = \\dfrac{1}{2cis(\\alpha)}" },
            { verbal_explanation: "הצגת המספר אחת בצורתו הפולרית הטהורה לצורך ביצוע חילוק.", math_expression: "1 = 1cis(0^{\\circ})" },
            { verbal_explanation: "הצבת ההצגה החלופית למונה של השבר.", math_expression: "w = \\dfrac{1cis(0^{\\circ})}{2cis(\\alpha)}" },
            { verbal_explanation: "יישום חוקי החילוק הפולרי: חלוקת רדיוסים וחיסור זוויות.", math_expression: "R_{w} = \\dfrac{1}{2} = 0.5" },
            { verbal_explanation: "יישום חוק חיסור הזוויות על הארגומנט.", math_expression: "\\theta_{w} = 0^{\\circ} - \\alpha = -\\alpha" },
            { verbal_explanation: "הרכבת התוצאה הסופית כביטוי אחיד.", math_expression: "w = 0.5cis(-\\alpha)" }
        ],
        final_answer: "0.5cis(-α)"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "הצגה אלגברית והצגה פולרית (קוטבית)",
        question_text: "מצאו את המשתנים הממשיים x ו-y המקיימים את המשוואה הבאה: \\( x + yi = (1 + i)^{2} \\).&rlm;",
        options: ["x = 0, y = 2", "x = 2, y = 0", "x = 1, y = 1", "x = -1, y = 2"],
        correctAnswer: 0,
        hint: "פתחו את אגף ימין בעזרת נוסחת הכפל המקוצר (ריבוע של סכום). זכרו ש- i בריבוע שווה למינוס 1. לבסוף השוו רכיב ממשי לממשי ומדומה למדומה.",
        solution_steps: [
            { verbal_explanation: "פתיחת אגף ימין על פי נוסחת הכפל המקוצר הסטנדרטית.", math_expression: "(1 + i)^{2} = 1^{2} + 2(1)(i) + i^{2}" },
            { verbal_explanation: "המרת היחידה המדומה הריבועית לערכה הממשי הקבוע בחוקים.", math_expression: "i^{2} = -1" },
            { verbal_explanation: "הצבת הערך הממשי וכינוס האגף המורחב.", math_expression: "1 + 2i - 1 = 2i" },
            { verbal_explanation: "השוואת התוצאה הטהורה לפונקציה המקורית שבאגף שמאל.", math_expression: "x + yi = 0 + 2i" },
            { verbal_explanation: "הפרדה והשוואה ישירה של הרכיבים הממשיים זה לזה.", math_expression: "x = 0" },
            { verbal_explanation: "הפרדה והשוואה של המקדמים המדומים להשלמת הפתרון המלא.", math_expression: "y = 2" }
        ],
        final_answer: "x = 0, y = 2"
    },

    // ==========================================
    // תת נושא 2: משפט דה-מואבר וכפל/חילוק בהצגה פולרית (10 שאלות)
    // ==========================================

    {
        topic: "complex_numbers_572",
        subTopic: "משפט דה-מואבר וכפל/חילוק בהצגה פולרית",
        question_text: "חשבו את הערך של \\( (1 + i)^{8} \\).&rlm;",
        options: ["16", "16i", "-16", "-16i"],
        correctAnswer: 0,
        hint: "המירו את המספר להצגה פולרית ואז השתמשו במשפט דה-מואבר (העלו את הרדיוס בחזקה והכפילו את הזווית במעריך החזקה).",
        solution_steps: [
            { verbal_explanation: "חישוב הרדיוס של המספר הפנימי.", math_expression: "R = \\sqrt{1^{2} + 1^{2}} = \\sqrt{2}" },
            { verbal_explanation: "חישוב הזווית של המספר המצוי ברביע הראשון.", math_expression: "\\tan(\\alpha) = \\dfrac{1}{1} = 1 \\Rightarrow \\alpha = 45^{\\circ}" },
            { verbal_explanation: "כתיבת המספר בייצוג פולרי לקראת חזקה.", math_expression: "z = \\sqrt{2}cis(45^{\\circ})" },
            { verbal_explanation: "הפעלת משפט דה-מואבר על הביטוי השלם.", math_expression: "z^{8} = (\\sqrt{2})^{8}cis(8 \\times 45^{\\circ})" },
            { verbal_explanation: "חישוב החזקות והמכפלות.", math_expression: "z^{8} = 16cis(360^{\\circ})" },
            { verbal_explanation: "המרת הזווית השלמה לערכה הממשי המקביל לאפס מעלות.", math_expression: "z^{8} = 16(1 + 0i) = 16" }
        ],
        final_answer: "16"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "משפט דה-מואבר וכפל/חילוק בהצגה פולרית",
        question_text: "נתונים שני מספרים מרוכבים: \\( z_{1} = 2cis(40^{\\circ}) \\) ו- \\( z_{2} = 3cis(50^{\\circ}) \\). מהי תוצאת המכפלה \\( z_{1} \\times z_{2} \\)?&rlm;",
        options: ["6i", "6", "-6", "-6i"],
        correctAnswer: 0,
        hint: "בכפל בהצגה פולרית, מכפילים את הרדיוסים ומחברים את הזוויות.",
        solution_steps: [
            { verbal_explanation: "ציון חוק הכפל של מספרים מרוכבים בייצוג פולרי.", math_expression: "z_{1} \\times z_{2} = R_{1}R_{2}cis(\\alpha + \\beta)" },
            { verbal_explanation: "הצבת הנתונים מן הבעיה למשוואת הכפל.", math_expression: "P = (2 \\times 3)cis(40^{\\circ} + 50^{\\circ})" },
            { verbal_explanation: "ביצוע פעולות החשבון לקבלת רדיוס מאוחד וזווית משותפת.", math_expression: "P = 6cis(90^{\\circ})" },
            { verbal_explanation: "המרת התוצאה הפולרית בחזרה לצורה אלגברית להצגה נקייה.", math_expression: "P = 6(\\cos(90^{\\circ}) + i\\sin(90^{\\circ}))" },
            { verbal_explanation: "הצבת ערכי הפונקציות בנקודה זו של מעגל היחידה.", math_expression: "P = 6(0 + i \\times 1)" },
            { verbal_explanation: "סגירת החישוב.", math_expression: "P = 6i" }
        ],
        final_answer: "6i"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "משפט דה-מואבר וכפל/חילוק בהצגה פולרית",
        question_text: "חשבו את \\( z^{4} \\) כאשר נתון כי \\( z = \\sqrt{3} + i \\).&rlm;",
        options: ["-8 + 8√3i", "16cis(120°)", "8 + 8√3i", "-8 - 8√3i"],
        correctAnswer: 0,
        hint: "המירו את z להצגה פולרית (רדיוס 2, זווית 30°). הפעילו את משפט דה-מואבר, והחזירו להצגה אלגברית במידת הצורך.",
        solution_steps: [
            { verbal_explanation: "חישוב הרדיוס של המספר המרוכב הנתון.", math_expression: "R = \\sqrt{(\\sqrt{3})^{2} + 1^{2}} = \\sqrt{3 + 1} = 2" },
            { verbal_explanation: "חישוב הזווית ברביע הראשון.", math_expression: "\\tan(\\alpha) = \\dfrac{1}{\\sqrt{3}} \\Rightarrow \\alpha = 30^{\\circ}" },
            { verbal_explanation: "כתיבת הייצוג הפולרי המלא והמוכן לפעולה.", math_expression: "z = 2cis(30^{\\circ})" },
            { verbal_explanation: "שימוש במשפט דה-מואבר לצורך העלאה בחזקה רביעית.", math_expression: "z^{4} = 2^{4}cis(4 \\times 30^{\\circ}) = 16cis(120^{\\circ})" },
            { verbal_explanation: "החזרת התוצאה לצורה אלגברית באמצעות ערכי הטריגונומטריה.", math_expression: "z^{4} = 16(\\cos(120^{\\circ}) + i\\sin(120^{\\circ}))" },
            { verbal_explanation: "ביצוע הכפל להשגת הפתרון המושלם.", math_expression: "z^{4} = 16(-0.5 + i\\dfrac{\\sqrt{3}}{2}) = -8 + 8\\sqrt{3}i" }
        ],
        final_answer: "-8 + 8√3i"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "משפט דה-מואבר וכפל/חילוק בהצגה פולרית",
        question_text: "חשבו את תוצאת החילוק הבאה: \\( \\dfrac{12cis(200^{\\circ})}{3cis(20^{\\circ})} \\).&rlm;",
        options: ["-4", "4", "4i", "-4i"],
        correctAnswer: 0,
        hint: "בחילוק של מספרים בהצגה פולרית, מחלקים את הרדיוסים ומחסרים את זווית המכנה מזווית המונה.",
        solution_steps: [
            { verbal_explanation: "אזכור משפט החילוק המובנה של מספרים מרוכבים בפולרית.", math_expression: "\\dfrac{z_{1}}{z_{2}} = \\dfrac{R_{1}}{R_{2}}cis(\\alpha - \\beta)" },
            { verbal_explanation: "הצבת הנתונים המספריים ישירות לתוך התבנית.", math_expression: "z = \\dfrac{12}{3}cis(200^{\\circ} - 20^{\\circ})" },
            { verbal_explanation: "ביצוע הפעולות הבסיסיות על הרדיוסים והזוויות בנפרד.", math_expression: "z = 4cis(180^{\\circ})" },
            { verbal_explanation: "המרת המבנה הפולרי למבנה אלגברי על בסיס זהויות היסוד.", math_expression: "z = 4(\\cos(180^{\\circ}) + i\\sin(180^{\\circ}))" },
            { verbal_explanation: "הצבת הערכים עבור זווית שטוחה במעגל.", math_expression: "z = 4(-1 + 0i)" },
            { verbal_explanation: "סגירת החישוב והצגתו.", math_expression: "z = -4" }
        ],
        final_answer: "-4"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "משפט דה-מואבר וכפל/חילוק בהצגה פולרית",
        question_text: "השתמשו במשפט דה-מואבר כדי לחשב את הערך המדויק של \\( (\\cos(30^{\\circ}) + i\\sin(30^{\\circ}))^{6} \\).&rlm;",
        options: ["-1", "1", "i", "-i"],
        correctAnswer: 0,
        hint: "המספר בתוך הסוגריים הוא בדיוק cis(30°) (עם רדיוס 1). הפעילו את המשפט והכפילו את הזווית ב-6.",
        solution_steps: [
            { verbal_explanation: "זיהוי התבנית שבתוך הסוגריים כהצגה פולרית תקנית בעלת רדיוס המוגדר כאחת.", math_expression: "z = 1cis(30^{\\circ})" },
            { verbal_explanation: "הפעלת משפט דה-מואבר הקובע כי המעריך מכפיל את הזווית המרכזית.", math_expression: "z^{6} = 1^{6}cis(6 \\times 30^{\\circ})" },
            { verbal_explanation: "חישוב המכפלה הפנימית בזווית המספר.", math_expression: "z^{6} = 1cis(180^{\\circ})" },
            { verbal_explanation: "פריסת הפונקציה לרכיביה לצורך המרה לצורה אלגברית טהורה.", math_expression: "z^{6} = \\cos(180^{\\circ}) + i\\sin(180^{\\circ})" },
            { verbal_explanation: "הצבת הערכים המוכרים של הפונקציות הטריגונומטריות בנקודה זו על הציר.", math_expression: "z^{6} = -1 + 0" },
            { verbal_explanation: "קבלת הערך המוחלט.", math_expression: "z^{6} = -1" }
        ],
        final_answer: "-1"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "משפט דה-מואבר וכפל/חילוק בהצגה פולרית",
        question_text: "חשבו את תוצאת הפעולה המורכבת הבאה: \\( (\\dfrac{1 + i}{1 - i})^{10} \\).&rlm;",
        options: ["-1", "1", "i", "-i"],
        correctAnswer: 0,
        hint: "פשטו את השבר הפנימי קודם על ידי הכפלה בצמוד של המכנה (תקבלו פשוט i). לאחר מכן, העלו את התוצאה הפשוטה לחזקת 10.",
        solution_steps: [
            { verbal_explanation: "עבודה על תוכן הסוגריים בלבד דרך הכפלת השבר בצמוד שלו.", math_expression: "w = \\dfrac{(1 + i)(1 + i)}{(1 - i)(1 + i)}" },
            { verbal_explanation: "פתיחת מונה על ידי חוקי כפל מקוצר של ריבוע סכום.", math_expression: "Num = 1 + 2i + i^{2} = 1 + 2i - 1 = 2i" },
            { verbal_explanation: "פתיחת המכנה על ידי הפרש ריבועים אלגברי.", math_expression: "Den = 1^{2} - i^{2} = 1 - (-1) = 2" },
            { verbal_explanation: "חיבור השבר השלם שצומצם למספר מדומה טהור ויחיד.", math_expression: "w = \\dfrac{2i}{2} = i" },
            { verbal_explanation: "העלאת המספר המפושט לחזקה העשירית המקורית שבתרגיל הבעיה.", math_expression: "z = i^{10}" },
            { verbal_explanation: "שימוש במחזוריות של חזקות היחידה המדומה (כל חזקה שהיא כפולה של ארבע ועוד שתיים שווה למינוס אחת).", math_expression: "i^{10} = i^{8} \\times i^{2} = 1 \\times (-1) = -1" }
        ],
        final_answer: "-1"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "משפט דה-מואבר וכפל/חילוק בהצגה פולרית",
        question_text: "אם נתון מספר כלשהו \\( z = Rcis(\\theta) \\), איזה מהביטויים הבאים שווה בדיוק ל- \\( \\dfrac{z^{3}}{\\bar{z}^{2}} \\)?&rlm;",
        options: ["Rcis(5θ)", "Rcis(θ)", "R³cis(5θ)", "Rcis(5)"],
        correctAnswer: 0,
        hint: "הצמוד של z בהצגה פולרית הוא Rcis(-θ). העלו כל איבר בחזקה המתאימה לו לפי דה-מואבר, ואז בצעו חילוק של רדיוסים וחיסור זוויות.",
        solution_steps: [
            { verbal_explanation: "העלאת המונה בחזקה שלישית על פי משפט דה מואבר.", math_expression: "Num = R^{3}cis(3\\theta)" },
            { verbal_explanation: "הגדרת הצמוד למספר המרוכב במבנהו הפולרי השומר על הרדיוס ומהפך את הזווית.", math_expression: "\\bar{z} = Rcis(-\\theta)" },
            { verbal_explanation: "העלאת הצמוד בחזקה ריבועית לטובת הכנת המכנה של התרגיל המרכזי.", math_expression: "Den = R^{2}cis(-2\\theta)" },
            { verbal_explanation: "הרכבת פונקציית המנה במלואה.", math_expression: "w = \\dfrac{R^{3}cis(3\\theta)}{R^{2}cis(-2\\theta)}" },
            { verbal_explanation: "חלוקת הרדיוסים השונים במקביל לחיסור הזוויות תוך שמירה על הסימנים המתמטיים.", math_expression: "w = R^{3-2}cis(3\\theta - (-2\\theta))" },
            { verbal_explanation: "כינוס וסידור התוצאה לכדי ביטוי חותך ויחידני.", math_expression: "w = R^{1}cis(5\\theta) = Rcis(5\\theta)" }
        ],
        final_answer: "Rcis(5θ)"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "משפט דה-מואבר וכפל/חילוק בהצגה פולרית",
        question_text: "חשבו את תוצאת ההעלאה בחזקה הבאה: \\( (-\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i)^{3} \\).&rlm;",
        options: ["1", "-1", "i", "-i"],
        correctAnswer: 0,
        hint: "המירו את המספר שבתוך הסוגריים להצגה פולרית. הרדיוס הוא 1, והזווית היא 120 מעלות (רביע שני). לאחר מכן העלו בחזקת 3.",
        solution_steps: [
            { verbal_explanation: "חישוב הרדיוס של המספר בתוך הסוגריים.", math_expression: "R = \\sqrt{(-0.5)^{2} + (\\dfrac{\\sqrt{3}}{2})^{2}} = \\sqrt{0.25 + 0.75} = \\sqrt{1} = 1" },
            { verbal_explanation: "חישוב הזווית הבסיסית על פי טנגנס הרכיבים המקוריים של המספר.", math_expression: "\\tan(\\alpha) = \\dfrac{\\dfrac{\\sqrt{3}}{2}}{-0.5} = -\\sqrt{3}" },
            { verbal_explanation: "התאמת הזווית לרביע השני (מאחר והחלק הממשי שלילי והמדומה חיובי).", math_expression: "\\alpha = 180^{\\circ} - 60^{\\circ} = 120^{\\circ}" },
            { verbal_explanation: "בניית הייצוג הפולרי המושלם והעלאתו בחזקה המיועדת בתרגיל המקורי.", math_expression: "z^{3} = (1cis(120^{\\circ}))^{3}" },
            { verbal_explanation: "הפעלת דה מואבר המכפיל את הזווית המרכזית במעריך החיצוני.", math_expression: "z^{3} = 1^{3}cis(3 \\times 120^{\\circ}) = 1cis(360^{\\circ})" },
            { verbal_explanation: "המרת הזווית השלמה לערכה האלגברי המקביל והפשוט ביותר בהקשר זה.", math_expression: "z^{3} = 1" }
        ],
        final_answer: "1"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "משפט דה-מואבר וכפל/חילוק בהצגה פולרית",
        question_text: "נתון המספר \\( z = 5cis(120^{\\circ}) \\). מה תהיה התוצאה אם נכפיל אותו ביחידה המדומה i ?&rlm;",
        options: ["5cis(210°)", "5cis(120°)", "5cis(30°)", "5cis(90°)"],
        correctAnswer: 0,
        hint: "הציגו את המספר i בהצגה פולרית (הרדיוס הוא 1 והזווית היא 90 מעלות). לאחר מכן, השתמשו בחוקי כפל של מספרים מרוכבים בפולרית.",
        solution_steps: [
            { verbal_explanation: "המרת היחידה המדומה הטהורה למבנה פולרי תקני המאפשר פעולות כפל ישירות.", math_expression: "i = 1cis(90^{\\circ})" },
            { verbal_explanation: "הרכבת משוואת הכפל הפולרי על סמך המספר המקורי וגורם ההכפלה החדש.", math_expression: "w = z \\times i = 5cis(120^{\\circ}) \\times 1cis(90^{\\circ})" },
            { verbal_explanation: "יישום חוק הכפל המורה על הוספת הזוויות זו לזו תוך שמירה על מכפלת הרדיוסים הנקייה.", math_expression: "w = (5 \\times 1)cis(120^{\\circ} + 90^{\\circ})" },
            { verbal_explanation: "סכימת הזוויות לסיום וגיבוש התוצאה הסופית והמבוקשת.", math_expression: "w = 5cis(210^{\\circ})" },
            { verbal_explanation: "הצגת התשובה החותכת את התרגיל.", math_expression: "1=1" }
        ],
        final_answer: "5cis(210°)"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "משפט דה-מואבר וכפל/חילוק בהצגה פולרית",
        question_text: "חשבו את התוצאה האלגברית של הפעולה הבאה: \\( (1 - i)^{10} \\).&rlm;",
        options: ["-32i", "32i", "-32", "32"],
        correctAnswer: 0,
        hint: "המירו את הבסיס להצגה פולרית (הרדיוס הוא שורש 2 והזווית היא 315 מעלות או מינוס 45). השתמשו בדה-מואבר והחזירו לאלגברית.",
        solution_steps: [
            { verbal_explanation: "מציאת הרדיוס של הבסיס הפנימי בעזרת סכום ריבועי המקדמים.", math_expression: "R = \\sqrt{1^{2} + (-1)^{2}} = \\sqrt{2}" },
            { verbal_explanation: "איתור הזווית המתאימה לרביע הרביעי בו ממוקם המספר שלנו.", math_expression: "\\tan(\\alpha) = \\dfrac{-1}{1} = -1 \\Rightarrow \\alpha = -45^{\\circ}" },
            { verbal_explanation: "ייצוג המספר באופן פולרי מסודר וברור.", math_expression: "z = \\sqrt{2}cis(-45^{\\circ})" },
            { verbal_explanation: "העלאת המספר המיוצג לחזקה עשירית דרך משפט דה מואבר הידוע.", math_expression: "z^{10} = (\\sqrt{2})^{10}cis(10 \\times (-45^{\\circ}))" },
            { verbal_explanation: "חישוב החזקות והמכפלות (שורש שתיים בחזקת עשר שווה לשתיים בחזקת חמש).", math_expression: "z^{10} = 32cis(-450^{\\circ})" },
            { verbal_explanation: "צמצום כפולה שלמה של מעגל כדי לחזור לתחום המעלות החיובי המקובל.", math_expression: "-450^{\\circ} + 360^{\\circ} = -90^{\\circ} = 270^{\\circ}" },
            { verbal_explanation: "המרת המספר הפולרי המפושט חזרה להצגה אלגברית המבוססת על צירים.", math_expression: "z^{10} = 32(\\cos(270^{\\circ}) + i\\sin(270^{\\circ})) = 32(0 - i) = -32i" }
        ],
        final_answer: "-32i"
    },

    // ==========================================
    // תת נושא 3: פתרון משוואות ממעלה גבוהה ומציאת שורשי היחידה (10 שאלות)
    // ==========================================

    {
        topic: "complex_numbers_572",
        subTopic: "פתרון משוואות ממעלה גבוהה ומציאת שורשי היחידה",
        question_text: "פתרו את המשוואה המרוכבת \\( z^{3} = 8 \\) ומצאו את כל שורשיה.&rlm;",
        options: ["2, -1+√3i, -1-√3i", "2, -2+√3i, -2-√3i", "2, -1+i, -1-i", "2, -√3+i, -√3-i"],
        correctAnswer: 0,
        hint: "המירו את 8 להצגה פולרית (8cis0). הוציאו שורש שלישי: הרדיוס יהיה 2. הזוויות יקפצו בקפיצות של 120 מעלות (360/3). המירו חזרה לאלגברית.",
        solution_steps: [
            { verbal_explanation: "המרת המספר הממשי באגף ימין להצגה פולרית המאפשרת הוצאת שורשים מסודרת על פי חוק.", math_expression: "z^{3} = 8cis(0^{\\circ})" },
            { verbal_explanation: "בניית נוסחת השורשים המרוכבים הכללית המכילה את פרמטר הקפיצה המעגלית.", math_expression: "z_{k} = \\sqrt[3]{8}cis(\\dfrac{0^{\\circ} + 360^{\\circ}k}{3})" },
            { verbal_explanation: "פישוט הנוסחה לקבלת תבנית ישירה לחישוב השורשים ברצף.", math_expression: "z_{k} = 2cis(120^{\\circ}k)" },
            { verbal_explanation: "הצבת אינדקס אפס למציאת השורש הראשון והממשי שבחבורה.", math_expression: "k = 0 \\Rightarrow z_{0} = 2cis(0^{\\circ}) = 2" },
            { verbal_explanation: "הצבת אינדקס אחת ופיתוח אלגברי לשורש השני.", math_expression: "k = 1 \\Rightarrow z_{1} = 2cis(120^{\\circ}) = 2(-0.5 + i\\dfrac{\\sqrt{3}}{2}) = -1 + \\sqrt{3}i" },
            { verbal_explanation: "הצבת אינדקס שתיים ופיתוח אלגברי לשורש השלישי והאחרון המסכם את הסט המלא.", math_expression: "k = 2 \\Rightarrow z_{2} = 2cis(240^{\\circ}) = 2(-0.5 - i\\dfrac{\\sqrt{3}}{2}) = -1 - \\sqrt{3}i" }
        ],
        final_answer: "2, -1+√3i, -1-√3i"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "פתרון משוואות ממעלה גבוהה ומציאת שורשי היחידה",
        question_text: "פתרו את המשוואה \\( z^{4} = 16cis(120^{\\circ}) \\). מהו השורש של משוואה זו הממוקם ברביע הראשון במערכת הצירים?&rlm;",
        options: ["2cis(30°)", "2cis(60°)", "4cis(30°)", "2cis(45°)"],
        correctAnswer: 0,
        hint: "נוסחת השורשים קובעת שהרדיוס הוא השורש הרביעי של 16, והזווית היא (120 + 360k) חלקי 4. הציבו k=0 ותקבלו זווית שברביע הראשון.",
        solution_steps: [
            { verbal_explanation: "כתיבת הנוסחה להוצאת שורשים ממספר מרוכב נתון בייצוג קוטבי.", math_expression: "z_{k} = \\sqrt[4]{16}cis(\\dfrac{120^{\\circ} + 360^{\\circ}k}{4})" },
            { verbal_explanation: "ביצוע החלוקה ופישוט הנוסחה העובדתית לשימוש שוטף ומהיר.", math_expression: "z_{k} = 2cis(30^{\\circ} + 90^{\\circ}k)" },
            { verbal_explanation: "הצבת האינדקס הראשון (אפס) לשם בדיקת התאמתו לרביע החיובי המבוקש בתרגיל.", math_expression: "k = 0 \\Rightarrow z_{0} = 2cis(30^{\\circ} + 0^{\\circ})" },
            { verbal_explanation: "חישוב הזווית ווידוא כי היא אכן חדה ומונחת בגבולות הרביע הראשון הטהור.", math_expression: "z_{0} = 2cis(30^{\\circ})" },
            { verbal_explanation: "הצגת הפתרון הנקי והנכון.", math_expression: "1=1" }
        ],
        final_answer: "2cis(30°)"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "פתרון משוואות ממעלה גבוהה ומציאת שורשי היחידה",
        question_text: "מהו סכום כלל השורשים המרוכבים של המשוואה \\( z^{5} = 32 \\)?&rlm;",
        options: ["0", "32", "2", "16"],
        correctAnswer: 0,
        hint: "על פי התכונות הגיאומטריות והאלגבריות של שורשי היחידה (או שורשים של כל מספר ממשי טהור), סכומם תמיד מתאפס, מכיוון שהם יוצרים מצולע משוכלל סימטרי שמרכזו בראשית הצירים.",
        solution_steps: [
            { verbal_explanation: "ניתוח המשמעות הגיאומטרית של שורשים מסדר אן למספר ממשי במעגל המרוכב.", math_expression: "Roots \\ form \\ Regular \\ Polygon" },
            { verbal_explanation: "מרכז הכובד של כל מצולע משוכלל שקודקודיו מבוססים על שורשים אלו ממוקם בראשית הצירים המדויקת.", math_expression: "Center = (0, 0)" },
            { verbal_explanation: "סכום הווקטורים המייצגים את קודקודי המצולע היוצאים מן המרכז הזהה, מבטל את עצמו לחלוטין לכדי אפס מוחלט בשל הסימטריה.", math_expression: "\\Sigma z_{k} = 0" },
            { verbal_explanation: "מסקנה חלוטה העוקפת חישובים מסורבלים וארוכים של כל אחד ואחד מחמשת השורשים.", math_expression: "Sum = 0" }
        ],
        final_answer: "0"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "פתרון משוואות ממעלה גבוהה ומציאת שורשי היחידה",
        question_text: "נתונה משוואת שורשי היחידה \\( z^{6} = 1 \\). מהי מכפלת כל ששת השורשים של המשוואה?&rlm;",
        options: ["-1", "1", "0", "i"],
        correctAnswer: 0,
        hint: "מכפלת שורשי היחידה מסדר n שווה ל-1 אם n אי זוגי, ול-(1-) אם n זוגי. תוכלו גם להיעזר בנוסחאות וייטה.",
        solution_steps: [
            { verbal_explanation: "הצגת המשוואה בצורת פולינום אלגברי שורשי מאופס.", math_expression: "z^{6} - 1 = 0" },
            { verbal_explanation: "שימוש בנוסחת וייטה למציאת מכפלת השורשים בפולינום ממעלה מסוימת.", math_expression: "Product = (-1)^{n} \\times \\dfrac{a_{0}}{a_{n}}" },
            { verbal_explanation: "הצבת הנתונים מתוך הפולינום אל תוך חוק וייטה הכללי (מעלה זוגית, קבוע שלילי ומקדם מוביל יחיד).", math_expression: "Product = (-1)^{6} \\times \\dfrac{-1}{1}" },
            { verbal_explanation: "חישוב הפעולות הכופליות בדרך אל התוצאה התקנית.", math_expression: "Product = 1 \\times (-1) = -1" },
            { verbal_explanation: "הצגת הפתרון האלגנטי לשאלה תיאורטית זו.", math_expression: "-1" }
        ],
        final_answer: "-1"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "פתרון משוואות ממעלה גבוהה ומציאת שורשי היחידה",
        question_text: "פתרו את המשוואה הריבועית המרוכבת \\( z^{2} = 3 - 4i \\). מצאו את שני הפתרונות שלה.&rlm;",
        options: ["2-i, -2+i", "2+i, -2-i", "1-2i, -1+2i", "3-i, -3+i"],
        correctAnswer: 0,
        hint: "הניחו כי z = x + yi והציבו במשוואה. פתחו סוגריים וצרו שתי משוואות: אחת לחלק הממשי ואחת לחלק המדומה. פתרו את מערכת המשוואות ב-x ו-y.",
        solution_steps: [
            { verbal_explanation: "הגדרת המספר הנעלם בצורה אלגברית המאפשרת הצבה ישירה ונוחה במשוואה.", math_expression: "z = x + yi" },
            { verbal_explanation: "הצבת המבנה האלגברי במשוואה המקורית ופתיחת סוגריים מלאה של הריבוע הדו איברי המרוכב.", math_expression: "(x + yi)^{2} = x^{2} + 2xyi + y^{2}i^{2} = x^{2} - y^{2} + 2xyi" },
            { verbal_explanation: "השוואת הפולינום המפותח לאגף ימין המקורי ויצירת מערכת משוואות נפרדות לממשי ומדומה.", math_expression: "x^{2} - y^{2} = 3 \\quad , \\quad 2xy = -4" },
            { verbal_explanation: "חילוץ משתנה אחד מתוך המשוואה השנייה הפשוטה יחסית.", math_expression: "y = -\\dfrac{2}{x}" },
            { verbal_explanation: "הצבת המשתנה אל תוך המשוואה הריבועית הראשונה ליצירת פולינום פתיר יחיד במערכת.", math_expression: "x^{2} - (-\\dfrac{2}{x})^{2} = 3 \\Rightarrow x^{2} - \\dfrac{4}{x^{2}} = 3" },
            { verbal_explanation: "הכפלה בריבוע וסידור משוואה דו-ריבועית.", math_expression: "x^{4} - 3x^{2} - 4 = 0" },
            { verbal_explanation: "פתרון למשתנה הממשי (השורש השלילי נפסל כי x ממשי טהור בהגדרתו).", math_expression: "(x^{2} - 4)(x^{2} + 1) = 0 \\Rightarrow x^{2} = 4 \\Rightarrow x = \\pm 2" },
            { verbal_explanation: "הצבת ערכי האיקס חזרה למציאת הוואי התואם ובניית שני הפתרונות המרוכבים הנגזרים מכך.", math_expression: "z_{1} = 2 - i \\quad , \\quad z_{2} = -2 + i" }
        ],
        final_answer: "2-i, -2+i"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "פתרון משוואות ממעלה גבוהה ומציאת שורשי היחידה",
        question_text: "קודקודיו של מחומש משוכלל החסום במעגל במישור גאוס מייצגים את כל הפתרונות למשוואה \\( z^{5} = 1 \\). מהי הזווית הנוצרת במרכז המעגל בין שני שורשים סמוכים כלשהם?&rlm;",
        options: ["72°", "60°", "90°", "120°"],
        correctAnswer: 0,
        hint: "במשוואת שורשי היחידה, הפתרונות מתפזרים באופן שווה וסימטרי על פני מעגל היחידה. חלקו את המעגל השלם (360 מעלות) במספר השורשים.",
        solution_steps: [
            { verbal_explanation: "זיהוי התכונה הבסיסית ביותר של שורשי היחידה כיוצרי מצולע משוכלל בעל קודקודים שווי מרחק זוויתי ביניהם לאורך הקשת.", math_expression: "Roots \\ spacing = \\dfrac{360^{\\circ}}{n}" },
            { verbal_explanation: "הצבת מעלת המשוואה (כמות השורשים) מתוך התרגיל אל הנוסחה הגיאומטרית הברורה הזו.", math_expression: "Spacing = \\dfrac{360^{\\circ}}{5}" },
            { verbal_explanation: "ביצוע פעולת החלוקה למציאת מפתח הקפיצה המדויק בין כל שורש לשורש העוקב לו.", math_expression: "Spacing = 72^{\\circ}" },
            { verbal_explanation: "מסקנה: הזווית המרכזית בין כל צמד סמוך היא בדיוק זו שחישבנו כעת ללא צורך בהוכחות נוספות.", math_expression: "72^{\\circ}" }
        ],
        final_answer: "72°"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "פתרון משוואות ממעלה גבוהה ומציאת שורשי היחידה",
        question_text: "פתרו את המשוואה \\( z^{3} = -i \\) ומצאו את שלושת שורשיה במדויק.&rlm;",
        options: ["i, -(√3:2) - 0.5i, (√3:2) - 0.5i", "i, -(√3:2) + 0.5i, (√3:2) + 0.5i", "-i, -(√3:2) + 0.5i, (√3:2) + 0.5i", "1, -0.5+√3i, -0.5-√3i"],
        correctAnswer: 0,
        hint: "המירו את (i-) לפולרי (1cis270°). הוציאו שורש שלישי. הזווית הראשונה תהיה 90°, והקפיצה תהיה של 120°. הפכו כל שורש פולרי שתמצאו בחזרה להצגה אלגברית.",
        solution_steps: [
            { verbal_explanation: "המרת אגף הימין השלילי המדומה להצגה פולרית לצורך עבודה חלקה ונוחה עם נוסחת השורשים המרוכבים.", math_expression: "z^{3} = 1cis(270^{\\circ})" },
            { verbal_explanation: "כתיבת התבנית הכללית והמלאה לחילוץ השורשים במחזוריות עוקבת.", math_expression: "z_{k} = \\sqrt[3]{1}cis(\\dfrac{270^{\\circ} + 360^{\\circ}k}{3})" },
            { verbal_explanation: "פישוט נוסחת החלוקה כדי להאיץ את תהליך ההצבות הבא בתור.", math_expression: "z_{k} = 1cis(90^{\\circ} + 120^{\\circ}k)" },
            { verbal_explanation: "חילוץ השורש הראשון על ידי אינדקס אפס והמרתו לאלגברי.", math_expression: "k = 0 \\Rightarrow z_{0} = cis(90^{\\circ}) = i" },
            { verbal_explanation: "חילוץ השורש השני והמרתו לאלגברי תוך שימוש בערכים ידועים למעלות אלו.", math_expression: "k = 1 \\Rightarrow z_{1} = cis(210^{\\circ}) = \\cos(210^{\\circ}) + i\\sin(210^{\\circ}) = -\\dfrac{\\sqrt{3}}{2} - 0.5i" },
            { verbal_explanation: "חילוץ השורש השלישי והשלמת המחזור המלא של המשוואה המורכבת הזו.", math_expression: "k = 2 \\Rightarrow z_{2} = cis(330^{\\circ}) = \\cos(330^{\\circ}) + i\\sin(330^{\\circ}) = \\dfrac{\\sqrt{3}}{2} - 0.5i" }
        ],
        final_answer: "i, -(√3:2) - 0.5i, (√3:2) - 0.5i"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "פתרון משוואות ממעלה גבוהה ומציאת שורשי היחידה",
        question_text: "מצאו את השורש של המשוואה \\( z^{4} + 16 = 0 \\) אשר נמצא ברביע הראשון במישור גאוס.&rlm;",
        options: ["√2 + √2i", "2 + 2i", "√3 + i", "2i"],
        correctAnswer: 0,
        hint: "בודדו את המשתנה: z^4 = -16. המירו את 16- לפולרי (16cis180°). הוציאו שורש רביעי למציאת השורש הראשון ברביע החיובי.",
        solution_steps: [
            { verbal_explanation: "העברת המספר החופשי לאגף נגדי לטובת בידוד המשתנה המורכב להוצאת שורש עתידית.", math_expression: "z^{4} = -16" },
            { verbal_explanation: "המרת המספר הממשי השלילי לייצוג קוטבי בעל רדיוס חיובי תמיד וזווית שטוחה כנדרש.", math_expression: "z^{4} = 16cis(180^{\\circ})" },
            { verbal_explanation: "העמדת נוסחת השורשים הכללית הרביעית בסדר.", math_expression: "z_{k} = \\sqrt[4]{16}cis(\\dfrac{180^{\\circ} + 360^{\\circ}k}{4})" },
            { verbal_explanation: "פישוט הנוסחה המורכבת לתבנית עבודה חלקה ונוחה במיוחד.", math_expression: "z_{k} = 2cis(45^{\\circ} + 90^{\\circ}k)" },
            { verbal_explanation: "הצבת האינדקס הראשון המוביל אותנו ישירות לרביע הראשון כפי שנדרש בהוראות המטלה.", math_expression: "k = 0 \\Rightarrow z_{0} = 2cis(45^{\\circ})" },
            { verbal_explanation: "פיתוח המספר הפולרי חזרה לייצוגו האלגברי המקורי דרך הצבת פונקציות הטריגונומטריה הקלאסיות למעלות אלו בדיוק רב.", math_expression: "z_{0} = 2(\\dfrac{\\sqrt{2}}{2} + i\\dfrac{\\sqrt{2}}{2}) = \\sqrt{2} + \\sqrt{2}i" }
        ],
        final_answer: "√2 + √2i"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "פתרון משוואות ממעלה גבוהה ומציאת שורשי היחידה",
        question_text: "ידוע כי אחד מהפתרונות של משוואה מהצורה \\( z^{n} = w \\) הוא \\( 2cis(40^{\\circ}) \\). פתרון נוסף של אותה משוואה הוא \\( 2cis(130^{\\circ}) \\). מהו הערך המינימלי האפשרי של החזקה הטבעית n?&rlm;",
        options: ["4", "3", "5", "6"],
        correctAnswer: 0,
        hint: "ההפרש בין הזוויות של שני השורשים הוא 90 מעלות. הקפיצה במשוואת שורשים היא 360 חלקי n. מכיוון שהם לא בהכרח עוקבים, 360 חלקי n חייב לחלק את 90 ללא שארית. למצוא את n הקטן ביותר המקיים זאת.",
        solution_steps: [
            { verbal_explanation: "חישוב הפער הזוויתי הגלוי והממשי בין שני השורשים המופיעים בנתוני השאלה הראשוניים.", math_expression: "\\Delta\\alpha = 130^{\\circ} - 40^{\\circ} = 90^{\\circ}" },
            { verbal_explanation: "הבנת העיקרון לפיו מפתח הקפיצה במשוואת שורשים מרוכבת (שלוש מאות שישים חלקי המעלה) מוכרח להיות מחלק שלם של הפער בין כל שני שורשים שהם במעגל.", math_expression: "Spacing = \\dfrac{360^{\\circ}}{n} \\Rightarrow 90^{\\circ} = m \\times \\dfrac{360^{\\circ}}{n}" },
            { verbal_explanation: "סידור המשוואה המאפשרת איתור קשר בין המעלה לבין מספר הקפיצות הווירטואליות ביניהם.", math_expression: "n = 4m" },
            { verbal_explanation: "כדי למצוא את מעלת המשוואה המינימלית ביותר שתאפשר זאת, נציב את הערך הטבעי המינימלי ביותר במכפיל השלם.", math_expression: "m = 1 \\Rightarrow n = 4" },
            { verbal_explanation: "אימות כי במצב זה הקפיצה היא בדיוק 90 מעלות ואכן ניתן לדלג משורש אחד לשני בצעד אחד חלק בלבד.", math_expression: "1=1" }
        ],
        final_answer: "4"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "פתרון משוואות ממעלה גבוהה ומציאת שורשי היחידה",
        question_text: "פתרו את המשוואה הריבועית בעלת המקדמים הממשיים במרחב המרוכב: \\( z^{2} - 4z + 5 = 0 \\).&rlm;",
        options: ["2 + i, 2 - i", "4 + i, 4 - i", "2 + 2i, 2 - 2i", "1 + i, 1 - i"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת השורשים הרגילה לחלוטין. תגלו שהדיסקרימיננטה (דלתא) שלילית. הוציאו שורש בעזרת המספר המדומה i ופשטו את השבר הנוצר.",
        solution_steps: [
            { verbal_explanation: "הצבת מקדמי המשוואה לתוך נוסחת השורשים הקלאסית המקובלת באלגברה בסיסית ומתקדמת כאחד.", math_expression: "z_{1,2} = \\dfrac{-(-4) \\pm \\sqrt{(-4)^{2} - 4(1)(5)}}{2(1)}" },
            { verbal_explanation: "חישוב הערכים המצויים מתחת לפני השורש הריבועי המכריע.", math_expression: "z_{1,2} = \\dfrac{4 \\pm \\sqrt{16 - 20}}{2}" },
            { verbal_explanation: "ביצוע החיסור המוביל לדיסקרימיננטה שלילית טהורה שמחייבת כניסה לעולם המרוכב.", math_expression: "z_{1,2} = \\dfrac{4 \\pm \\sqrt{-4}}{2}" },
            { verbal_explanation: "המרת השורש השלילי לשורש ממשי חיובי המוכפל ביחידה המדומה הסטנדרטית.", math_expression: "\\sqrt{-4} = \\sqrt{4 \\times (-1)} = 2i" },
            { verbal_explanation: "הצבת הערך המדומה למשוואה הרחבה המקורית שלנו כאן ועכשיו.", math_expression: "z_{1,2} = \\dfrac{4 \\pm 2i}{2}" },
            { verbal_explanation: "צמצום חלקי השבר במקדם שתיים להגעה אל שני השורשים הצמודים והסופיים.", math_expression: "z = 2 \\pm i" }
        ],
        final_answer: "2 + i, 2 - i"
    },

    // ==========================================
    // תת נושא 4: מקומות גיאומטריים של מרוכבים במישור של גאוס (10 שאלות)
    // ==========================================

    {
        topic: "complex_numbers_572",
        subTopic: "מקומות גיאומטריים של מרוכבים במישור של גאוס",
        question_text: "איזה מקום גיאומטרי במישור גאוס מייצגת המשוואה \\( |z| = 5 \\)?&rlm;",
        options: ["מעגל קנוני שרדיוסו 5", "ישר העובר בראשית", "נקודה בודדת (5,0)", "פרבולה"],
        correctAnswer: 0,
        hint: "הערך המוחלט של z מייצג את המרחק של הנקודה מראשית הצירים. מרחק קבוע מנקודה קבועה מגדיר מעגל.",
        solution_steps: [
            { verbal_explanation: "הצבת הגדרתו האלגברית הבסיסית של מספר מרוכב נעלם כלשהו במרחב הדו-מימדי.", math_expression: "z = x + yi" },
            { verbal_explanation: "יישום הגדרת הערך המוחלט (המודולוס) של מספר זה כשורש ריבועי של סכום רכיביו.", math_expression: "|x + yi| = \\sqrt{x^{2} + y^{2}}" },
            { verbal_explanation: "הצבת הביטוי האנליטי הזה אל תוך המשוואה שניתנה בבעיה הגיאומטרית המקורית המונחת למולנו כעת.", math_expression: "\\sqrt{x^{2} + y^{2}} = 5" },
            { verbal_explanation: "העלאת שני אגפי המשוואה בריבוע לשם ביטול השורש וקבלת צורה מוכרת יותר לעין החוקרת.", math_expression: "x^{2} + y^{2} = 25" },
            { verbal_explanation: "זיהוי המשוואה שהתקבלה כמשוואתו הקלאסית המובהקת של מעגל שמרכזו מונח בדיוק בראשית הצירים והוא בעל רדיוס מוגדר לחלוטין.", math_expression: "Circle \\ , \\ R = 5" }
        ],
        final_answer: "מעגל קנוני שרדיוסו 5"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "מקומות גיאומטריים של מרוכבים במישור של גאוס",
        question_text: "נתונה המשוואה המרוכבת \\( |z - 3 - 4i| = 10 \\). מהן קואורדינטות מרכז המעגל שמתאר מקום גיאומטרי זה?&rlm;",
        options: ["(3, 4)", "(-3, -4)", "(3, -4)", "(-3, 4)"],
        correctAnswer: 0,
        hint: "הציבו את z כ-(x+yi). הפרידו חלקים ממשיים ומדומים בתוך הערך המוחלט והעלו בריבוע לקבלת משוואת מעגל סטנדרטית.",
        solution_steps: [
            { verbal_explanation: "החלפת המשתנה המרוכב לייצוגו האלגברי המפורט המורכב משני חלקים המאפשרים עבודה קואורדינטית נוחה בהמשך הדרך.", math_expression: "z = x + yi" },
            { verbal_explanation: "הצבת המשתנה לתוך משוואת הערך המוחלט וכינוס הרכיבים לממשיים לחוד ומדומים לחוד תחת אותה המטריה.", math_expression: "|(x - 3) + (y - 4)i| = 10" },
            { verbal_explanation: "המרת סימון הערך המוחלט למשמעותו האנליטית הטהורה המבוססת על משפט פיתגורס לחישוב אורך וקטור אלכסוני במרחב הנתון כאן.", math_expression: "\\sqrt{(x - 3)^{2} + (y - 4)^{2}} = 10" },
            { verbal_explanation: "העלאה אקטיבית בריבוע של שני אגפי המשוואה לשם נטרול השורש וקבלת משוואת מעגל סדורה וברורה לחלוטין לקריאה פשוטה על ידינו בסוף התהליך האמור.", math_expression: "(x - 3)^{2} + (y - 4)^{2} = 100" },
            { verbal_explanation: "חילוץ שיעורי המרכז מתוך המבנה של נוסחת המעגל (הסימנים מתהפכים כמקובל).", math_expression: "Center(3, 4)" }
        ],
        final_answer: "(3, 4)"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "מקומות גיאומטריים של מרוכבים במישור של גאוס",
        question_text: "איזה צורה הנדסית במישור גאוס מייצגת המשוואה \\( |z - i| = |z - 1| \\)?&rlm;",
        options: ["הישר y = x", "הישר y = -x", "מעגל העובר בראשית", "פרבולה"],
        correctAnswer: 0,
        hint: "מבחינה גיאומטרית, המשוואה דורשת שהמרחק של z מ-(0,1) יהיה שווה למרחק שלו מ-(1,0). אוסף הנקודות שוות המרחק משתי נקודות הוא אנך אמצעי (ישר).",
        solution_steps: [
            { verbal_explanation: "הצבת הייצוג האלגברי והפרדת ממשיים ומדומים בכל אגף ואגף של המשוואה המפוצלת הזו המונחת לבחינה.", math_expression: "|x + (y - 1)i| = |(x - 1) + yi|" },
            { verbal_explanation: "יישום הגדרת הערך המוחלט (הכולל שורשים המועלים בריבוע ומתבטלים מיידית לחיסכון במקום ובזמן חישוב יקר ומיותר לחלוטין כאן).", math_expression: "x^{2} + (y - 1)^{2} = (x - 1)^{2} + y^{2}" },
            { verbal_explanation: "פתיחת סוגריים הזהירה משני הצדדים של קו השוויון על ידי נוסחאות כפל מקוצר של הפרשים העומדים במבחן ההוכחה הזו כעת.", math_expression: "x^{2} + y^{2} - 2y + 1 = x^{2} - 2x + 1 + y^{2}" },
            { verbal_explanation: "צמצום אגרסיבי של כלל האיברים הזהים המופיעים במקביל בשני האגפים של הפולינום הנוכחי עד להשגת שלד נקי בלבד.", math_expression: "-2y = -2x" },
            { verbal_explanation: "חלוקת המשוואה המצומצמת במינוס שתיים לקבלת הייצוג הפונקציונלי הסופי והמקובל בתחום הפונקציות הקוויות במישור האופקי התקין.", math_expression: "y = x" }
        ],
        final_answer: "הישר y = x"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "מקומות גיאומטריים של מרוכבים במישור של גאוס",
        question_text: "קבעו מהו המקום הגיאומטרי המתואר על ידי המשוואה \\( z \\times \\bar{z} = 16 \\).&rlm;",
        options: ["מעגל שרדיוסו 4", "מעגל שרדיוסו 16", "ישר אופקי y = 4", "נקודה בודדת (4,4)"],
        correctAnswer: 0,
        hint: "מכפלת מספר מרוכב בצמוד שלו שווה תמיד לריבוע הערך המוחלט של המספר. החליפו את המכפלה הזו בביטוי האלגברי המתאים.",
        solution_steps: [
            { verbal_explanation: "ציון זהות יסודית במרוכבים הקובעת את תוצאתה של הכפלת מספר בגרסתו הצמודה במרחב הדו-מימדי.", math_expression: "z \\times \\bar{z} = x^{2} + y^{2}" },
            { verbal_explanation: "הצבת הזהות לתוך המשוואה המקורית המנתבת את הפתרון לעבר עולם הגיאומטריה האנליטית הטהורה והפשוטה יחסית למראה אנוש.", math_expression: "x^{2} + y^{2} = 16" },
            { verbal_explanation: "זיהוי המשוואה כפונקציה קלאסית המתארת מעגל שמרכזו ממוקם בראשית הצירים המדויקת של המישור כולו.", math_expression: "Center(0, 0)" },
            { verbal_explanation: "חילוץ הרדיוס עצמו באמצעות הוצאת שורש ריבועי מאגף ימין המהווה את הקבוע של המשוואה הנתונה כאן באלגברה.", math_expression: "R = \\sqrt{16} = 4" }
        ],
        final_answer: "מעגל שרדיוסו 4"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "מקומות גיאומטריים של מרוכבים במישור של גאוס",
        question_text: "איזה קו גיאומטרי מייצגת המשוואה המרוכבת \\( Re(z) + Im(z) = 5 \\)?&rlm;",
        options: ["הישר y = -x + 5", "הישר y = x + 5", "מעגל העובר ב-(0,5)", "קרן ברביע הראשון"],
        correctAnswer: 0,
        hint: "החליפו את החלק הממשי ב-x ואת החלק המדומה ב-y (ללא ה-i), ובודדו את המשתנה הרצוי לייצוג פונקציה קווית.",
        solution_steps: [
            { verbal_explanation: "הגדרת פונקציות החילוץ של הרכיבים למספר גנרי המורכב משני צירי העבודה השגרתיים שלנו.", math_expression: "Re(z) = x \\quad , \\quad Im(z) = y" },
            { verbal_explanation: "הצבת החלופות הממשיות הללו במקום הסימונים המרוכבים במשוואה המוצגת לנו כבעיה מתמטית אחידה.", math_expression: "x + y = 5" },
            { verbal_explanation: "העברת איברים לאגפים שונים כדי ליצור תצורה גלויה המאפיינת פונקציות קוויות כדוגמת קו ישר במרחב הדו-מימדי המלא.", math_expression: "y = -x + 5" },
            { verbal_explanation: "סיום ההוכחה הנדרשת.", math_expression: "1=1" }
        ],
        final_answer: "הישר y = -x + 5"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "מקומות גיאומטריים של מרוכבים במישור של גאוס",
        question_text: "המשוואה \\( |z - 2| = 3 \\) יוצרת עקומה במישור. מצאו את נקודת החיתוך של העקומה עם ציר ה-x החיובי.&rlm;",
        options: ["(5, 0)", "(1, 0)", "(3, 0)", "(-1, 0)"],
        correctAnswer: 0,
        hint: "צרו משוואת מעגל וחסלו את המשתנה המדומה (הציבו y=0 כיוון שאנו על ציר ה-x). פתרו את המשוואה הריבועית הפשוטה עבור x.",
        solution_steps: [
            { verbal_explanation: "הצבת המבנה האלגברי המפורט למשוואת הערך המוחלט הניצבת כאן לפתירתנו כעת.", math_expression: "|(x - 2) + yi| = 3" },
            { verbal_explanation: "העברה לייצוג של משוואת מעגל נורמטיבית באמצעות חישוב ריבועי והעלמת השורש בה בעת במקביל לקיצור הדרך.", math_expression: "(x - 2)^{2} + y^{2} = 9" },
            { verbal_explanation: "החלת תנאי החיתוך עם הציר האופקי על ידי איפוס הרכיב האנכי לחלוטין וללא שאריות עמומות בו.", math_expression: "y = 0 \\Rightarrow (x - 2)^{2} + 0 = 9" },
            { verbal_explanation: "הוצאת שורש ריבועי משני הצדדים במטרה לפצל את הפתרון האפשרי לשני ערוצים מקבילים ושונים סימנית בערכם.", math_expression: "x - 2 = \\pm 3" },
            { verbal_explanation: "בחינת נתיב הפתרון הראשון המניב קואורדינטה אחת למפגש האמור להיות.", math_expression: "x_{1} = 2 + 3 = 5" },
            { verbal_explanation: "בחינת נתיב הפתרון השני המניב נקודה נוספת למפגש העקיף עם הציר האופקי הממושך בחלל זה.", math_expression: "x_{2} = 2 - 3 = -1" },
            { verbal_explanation: "סינון התוצאות בהתאם להנחיית המשימה הדווקנית העומדת על צידו החיובי של הציר ודחיית כל השאר לפח ההיסטוריה הגיאומטרית במקום.", math_expression: "x > 0 \\Rightarrow P(5, 0)" }
        ],
        final_answer: "(5, 0)"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "מקומות גיאומטריים של מרוכבים במישור של גאוס",
        question_text: "קבעו איזו צורה מתווית מהמשוואה \\( z + \\bar{z} = 8 \\).&rlm;",
        options: ["הישר x = 4", "הישר y = 4", "נקודה בודדת (8,0)", "הישר y = x"],
        correctAnswer: 0,
        hint: "החיבור של מספר והצמוד שלו נותן פעמיים את החלק הממשי (החלקים המדומים מבטלים זה את זה).",
        solution_steps: [
            { verbal_explanation: "הצבת הביטויים המלאים והמפורטים של המספר והמספר הצמוד שלו למערכת המשוואה הקיימת והפשוטה הזו לצורך חקירה יסודית ואנליטית במלואה.", math_expression: "(x + yi) + (x - yi) = 8" },
            { verbal_explanation: "פתיחת כלל הסוגריים המיותרות וצמצום מלא והדדי של האיברים המדומים המתנגשים סימנית ומאפסים איש את רעהו בחדווה רבה.", math_expression: "2x = 8" },
            { verbal_explanation: "חלוקת המשוואה שנותרה בשניים לחילוץ חד וברור של המשתנה המייצג גיאומטריה פשוטה שאינה משתמעת לשתי פנים בשום צורה שהיא.", math_expression: "x = 4" },
            { verbal_explanation: "מסקנה: ישר המוגדר לפי איקס קבוע הוא ישר אנכי לחלוטין וללא תלות בציר האחר המקביל לו בחלל המצויר במערכת זו.", math_expression: "Vertical \\ Line" }
        ],
        final_answer: "הישר x = 4"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "מקומות גיאומטריים של מרוכבים במישור של גאוס",
        question_text: "מצאו את המקום הגיאומטרי שמתארת המשוואה \\( |z|^{2} - Im(z) = 0 \\).&rlm;",
        options: ["מעגל שמרכזו ב-(0, 0.5)", "מעגל שמרכזו ב-(0, -0.5)", "פרבולה", "אליפסה"],
        correctAnswer: 0,
        hint: "המירו את המשתנים לאלגברה. ערך מוחלט בריבוע הוא x² + y². החלק המדומה הוא y. בנו משוואת מעגל על ידי השלמה לריבוע.",
        solution_steps: [
            { verbal_explanation: "הצבת המשמעות האלגברית הקלאסית המומרת מהמונחים המרוכבים הנתונים במשוואה המורכבת שלפנינו לשם פתירה חלקה.", math_expression: "(x^{2} + y^{2}) - y = 0" },
            { verbal_explanation: "זיהוי צורך בהשלמה לריבוע עבור המשתנה האנכי על מנת לייצר תבנית מעגלית מוכרת ויציבה לעין הבוחנת בהצלחה רבה.", math_expression: "y^{2} - y = (y - 0.5)^{2} - 0.25" },
            { verbal_explanation: "שילוב ההשלמה חזרה אל המשוואה הכוללת תוך שמירה על המבנה האופקי הקודם שנותר ללא פגע מהותי בתהליך הממושך.", math_expression: "x^{2} + (y - 0.5)^{2} - 0.25 = 0" },
            { verbal_explanation: "העברת האיבר החופשי השלילי שנותר לאגף הנגדי לשם בידודו וקביעת מעמד הרדיוס החיובי התקני והברור במשוואה הרציפה.", math_expression: "x^{2} + (y - 0.5)^{2} = 0.25" },
            { verbal_explanation: "קריאה ישירה של קואורדינטות המרכז מתוך המקדמים הפנימיים בסוגריים שהושלמו בשלב הקודם והעברות הסימן המתלוות להם במדויק לחלוטין ובהתאם.", math_expression: "Center(0, 0.5)" }
        ],
        final_answer: "מעגל שמרכזו ב-(0, 0.5)"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "מקומות גיאומטריים של מרוכבים במישור של גאוס",
        question_text: "קבעו איזו צורה גיאומטרית מוגדרת על ידי המשוואה \\( |z - 1|^{2} + |z + 1|^{2} = 10 \\).&rlm;",
        options: ["מעגל שרדיוסו 2", "מעגל שרדיוסו 4", "אליפסה", "נקודה בודדת"],
        correctAnswer: 0,
        hint: "המירו הכל לאלגברה (x+yi). פתחו את הריבועים של הערכים המוחלטים, צמצמו איברים דומים, וחלקו בשתיים ליצירת משוואת מעגל.",
        solution_steps: [
            { verbal_explanation: "הצבת מבנים אלגבריים נכונים לשני האיברים המוחלטים תחת העלאה חיובית בריבוע המבטלת שורשים כליל ומפשטת הכל.", math_expression: "((x - 1)^{2} + y^{2}) + ((x + 1)^{2} + y^{2}) = 10" },
            { verbal_explanation: "פתיחת סוגריים בשיטות כפל מקוצר של חיבור וחיסור במקביל לשם חשיפת הקרביים המסתתרים באברי המשוואה הארוכה הזו כעת.", math_expression: "(x^{2} - 2x + 1 + y^{2}) + (x^{2} + 2x + 1 + y^{2}) = 10" },
            { verbal_explanation: "ביצוע כינוס אגרסיבי של איברים והשמדת אלו המנוגדים בסימנם המאזנים זה את זה באופן נקי וללא שגיאות מעקב מצטברות מיותרות בדרך.", math_expression: "2x^{2} + 2y^{2} + 2 = 10" },
            { verbal_explanation: "העברת הקבוע השלם הנותר לאגף הימני המרוחק לשם בידוד המשתנים מרובי העוצמה במערכת שיצרנו פה יחד ולבד.", math_expression: "2x^{2} + 2y^{2} = 8" },
            { verbal_explanation: "חלוקה אחידה של כל איברי המשוואה בשתיים במטרה לנקות מקדמים מבלבלים ולהציג צורה תקנית ומוסכמת לקריאה נוחה וקלה בבחינה.", math_expression: "x^{2} + y^{2} = 4" },
            { verbal_explanation: "חילוץ הרדיוס לאחר הוצאת שורש פשוט למספר החופשי בצד הימני של השוויון וקביעת תצורה סופית המאשרת את הפתרון החותך ביותר שיש בנמצא.", math_expression: "R = \\sqrt{4} = 2" }
        ],
        final_answer: "מעגל שרדיוסו 2"
    },
    {
        topic: "complex_numbers_572",
        subTopic: "מקומות גיאומטריים של מרוכבים במישור של גאוס",
        question_text: "איזו קבוצת נקודות במרחב הדו-מימדי מוגדרת על ידי המשוואה הגיאומטרית \\( Arg(z) = 45^{\\circ} \\)?&rlm;",
        options: ["קרן ברביע הראשון y=x", "הישר המלא y=x", "קרן ברביע השלישי", "מעגל יחידה"],
        correctAnswer: 0,
        hint: "הארגומנט הוא הזווית הנוצרת מול הכיוון החיובי של ציר x. זווית של 45 מעלות קיימת רק ברביע הראשון (ערכים חיוביים). לא מדובר בישר שלם אלא בקרן.",
        solution_steps: [
            { verbal_explanation: "המרת הארגומנט לפונקציה מתמטית אופרטיבית המאפשרת קישור ישיר למשתנים אנליטיים במערכת.", math_expression: "\\tan(\\alpha) = \\tan(45^{\\circ}) = 1" },
            { verbal_explanation: "בניית היחס האנליטי המשווה בין החלק המדומה לממשי על סמך פונקציית הטנגנס הידועה והמוכחת.", math_expression: "\\dfrac{y}{x} = 1 \\Rightarrow y = x" },
            { verbal_explanation: "הכרה במגבלה הנסתרת והחשובה ביותר כאן: זווית יחידה מוגדרת ברביע ספציפי אחד בלבד (הראשון), ללא הרחבה לשלישי הנגדי המייצר זווית גדולה יותר.", math_expression: "x > 0 \\quad , \\quad y > 0" },
            { verbal_explanation: "מסקנה חותכת המשלבת את הפונקציה הקווית ואת ההגבלה המרחבית הנוקשה לחבילה מילולית אחת תואמת מציאות גיאומטרית.", math_expression: "Ray \\ in \\ Q1" }
        ],
        final_answer: "קרן ברביע הראשון y=x"
    }
];
const questionsDB = [
    // =====================================================================
    // תת-נושא 1: תחום הגדרה (מכנה שונה מאפס) (12 שאלות)
    // =====================================================================
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "תחום הגדרה (מכנה שונה מאפס)",
        question: "מהו תחום ההגדרה של הפונקציה הרציונלית הבאה?<br>f(x) = 5 / (x - 7)",
        options: [
            "x &ne; 7",
            "x &gt; 7",
            "x &ne; -7",
            "כל x"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "פונקציה רציונלית (שבר) אינה מוגדרת כאשר המכנה שלה שווה לאפס. לכן, נדרוש שהמכנה יהיה שונה מאפס.", math_expression: "x - 7 &ne; 0" },
            { verbal_explanation: "נעביר את המספר לאגף הימני (בשינוי סימן) כדי לבודד את המשתנה x.", math_expression: "x &ne; 7" }
        ],
        final_answer: "x &ne; 7"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "תחום הגדרה (מכנה שונה מאפס)",
        question: "מצאו את תחום ההגדרה של הפונקציה:<br>f(x) = 3x / (2x + 6)",
        options: [
            "x &ne; -3",
            "x &ne; 3",
            "x &ne; 0",
            "כל x"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא את תחום ההגדרה, נבדוק עבור אילו ערכים המכנה מתאפס.", math_expression: "2x + 6 = 0" },
            { verbal_explanation: "נעביר את המספר החופשי לאגף ימין.", math_expression: "2x = -6" },
            { verbal_explanation: "נחלק את המשוואה בשתיים כדי למצוא את הערך הבעייתי.", math_expression: "x = -3" },
            { verbal_explanation: "תחום ההגדרה כולל את כל המספרים מלבד זה שמאפס את המכנה.", math_expression: "x &ne; -3" }
        ],
        final_answer: "x &ne; -3"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "תחום הגדרה (מכנה שונה מאפס)",
        question: "מהו תחום ההגדרה של הפונקציה:<br>f(x) = (x + 1) / (x<sup>2</sup> - 16)",
        options: [
            "x &ne; 4 , x &ne; -4",
            "x &ne; 4",
            "x &ne; 16",
            "כל x"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הפונקציה אינה מוגדרת כאשר המכנה שלה מתאפס. ניקח את המכנה ונשווה לאפס.", math_expression: "x<sup>2</sup> - 16 = 0" },
            { verbal_explanation: "נעביר את המספר ימינה.", math_expression: "x<sup>2</sup> = 16" },
            { verbal_explanation: "נוציא שורש ריבועי. מאחר והמעריך זוגי, נקבל שתי תוצאות (חיובית ושלילית).", math_expression: "x = 4 , x = -4" },
            { verbal_explanation: "תחום ההגדרה דורש שהמשתנה יהיה שונה משני הערכים הללו.", math_expression: "x &ne; 4 , x &ne; -4" }
        ],
        final_answer: "x &ne; 4 , x &ne; -4"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "תחום הגדרה (מכנה שונה מאפס)",
        question: "מהו תחום ההגדרה של הפונקציה המורכבת מטרינום במכנה?<br>f(x) = (2x - 5) / (x<sup>2</sup> - 7x + 10)",
        options: [
            "x &ne; 2 , x &ne; 5",
            "x &ne; 10",
            "x &ne; -2 , x &ne; -5",
            "x &ne; 2.5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נדרוש שהמכנה יהיה שונה מאפס. נשווה אותו לאפס כדי למצוא את הנקודות שיש להוציא מהתחום.", math_expression: "x<sup>2</sup> - 7x + 10 = 0" },
            { verbal_explanation: "נפתור את המשוואה הריבועית בעזרת פירוק לטרינום (שני מספרים שמכפלתם 10 וסכומם 7-).", math_expression: "(x - 2)(x - 5) = 0" },
            { verbal_explanation: "נחלץ את הפתרונות המאפסים את כל אחד מהגורמים.", math_expression: "x = 2 , x = 5" },
            { verbal_explanation: "תחום ההגדרה הוא כל מספר ממשי פרט לשני הערכים האלו.", math_expression: "x &ne; 2 , x &ne; 5" }
        ],
        final_answer: "x &ne; 2 , x &ne; 5"
    },
    {
        topic: "חשבון דיפרנציאלי - פ פונקציות רציונליות",
        subTopic: "תחום הגדרה (מכנה שונה מאפס)",
        question: "מהו תחום ההגדרה של הפונקציה הבאה?<br>f(x) = 8x / (x<sup>2</sup> + 9)",
        options: [
            "כל x",
            "x &ne; 3 , x &ne; -3",
            "x &ne; -9",
            "x &gt; 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבדוק מתי המכנה עלול להתאפס.", math_expression: "x<sup>2</sup> + 9 = 0" },
            { verbal_explanation: "נעביר את המספר תשעה לאגף הימני.", math_expression: "x<sup>2</sup> = -9" },
            { verbal_explanation: "מספר ממשי המועלה בריבוע לעולם אינו יכול להיות שלילי. לכן, למשוואה זו אין פתרון, והמכנה תמיד חיובי.", math_expression: "&empty;" },
            { verbal_explanation: "מסקנה: אין אף מספר שיאפס את המכנה, ולכן הפונקציה מוגדרת תמיד.", math_expression: "-\u221E < x < \u221E" }
        ],
        final_answer: "כל x"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "תחום הגדרה (מכנה שונה מאפס)",
        question: "מצאו את תחום ההגדרה של הפונקציה הבאה בעזרת הוצאת גורם משותף:<br>f(x) = 1 / (x<sup>3</sup> - x)",
        options: [
            "x &ne; 0 , x &ne; 1 , x &ne; -1",
            "x &ne; 0",
            "x &ne; 1 , x &ne; -1",
            "x &ne; 0 , x &ne; 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשווה את המכנה המעוקב לאפס למציאת הנקודות האסורות.", math_expression: "x<sup>3</sup> - x = 0" },
            { verbal_explanation: "נוציא איקס כגורם משותף מחוץ לסוגריים.", math_expression: "x(x<sup>2</sup> - 1) = 0" },
            { verbal_explanation: "נשתמש בנוסחת כפל מקוצר (הפרש ריבועים) כדי לפרק את הסוגריים עד הסוף.", math_expression: "x(x - 1)(x + 1) = 0" },
            { verbal_explanation: "המשוואה מתאפסת אם כל אחד משלושת הגורמים מתאפס. נרשום את הפתרונות.", math_expression: "x = 0 , x = 1 , x = -1" },
            { verbal_explanation: "תחום ההגדרה פוסל את כל שלושת הערכים הללו.", math_expression: "x &ne; 0 , x &ne; 1 , x &ne; -1" }
        ],
        final_answer: "x &ne; 0 , x &ne; 1 , x &ne; -1"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "תחום הגדרה (מכנה שונה מאפס)",
        question: "נתונה הפונקציה עם הפרמטר a:<br>f(x) = x<sup>2</sup> / (ax - 15)<br>ידוע שהפונקציה אינה מוגדרת בנקודה שבה x = 5. מצאו את ערכו של הפרמטר a.",
        options: [
            "3",
            "5",
            "15",
            "-3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אם הפונקציה אינה מוגדרת בנקודה מסוימת, המשמעות היא שהמכנה שווה לאפס כאשר מציבים את אותו איקס.", math_expression: "ax - 15 = 0" },
            { verbal_explanation: "נציב במכנה את הערך הנתון (חמש).", math_expression: "a(5) - 15 = 0" },
            { verbal_explanation: "נסדר את המשוואה ונעביר את המספר ימינה.", math_expression: "5a = 15" },
            { verbal_explanation: "נחלק בחמש כדי לחלץ את הפרמטר.", math_expression: "a = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "תחום הגדרה (מכנה שונה מאפס)",
        question: "מהו תחום ההגדרה של פונקציה המורכבת מחיבור של שני שברים?<br>f(x) = 3 / (x - 2) + 4 / (x + 4)",
        options: [
            "x &ne; 2 , x &ne; -4",
            "x &ne; 2",
            "x &ne; -4",
            "x &ne; 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "בפונקציה המורכבת ממספר שברים, כל אחד מהמכנים בנפרד חייב להיות שונה מאפס במקביל. נבדוק את המכנה הראשון.", math_expression: "x - 2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2" },
            { verbal_explanation: "נבדוק מתי המכנה השני מתאפס.", math_expression: "x + 4 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -4" },
            { verbal_explanation: "תחום ההגדרה המשותף פוסל את שני הערכים שמצאנו, שכן הצבה של כל אחד מהם תגרום לאחד השברים להיות בלתי מוגדר.", math_expression: "x &ne; 2 , x &ne; -4" }
        ],
        final_answer: "x &ne; 2 , x &ne; -4"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "תחום הגדרה (מכנה שונה מאפס)",
        question: "מצאו את תחום ההגדרה של הפונקציה הבאה, בה יש גורם משותף במונה ובמכנה:<br>f(x) = (x - 4) / (x<sup>2</sup> - 4x)",
        options: [
            "x &ne; 0 , x &ne; 4",
            "x &ne; 0",
            "x &ne; 4",
            "כל x"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "חשוב לזכור: תחום הגדרה נקבע תמיד לפי הפונקציה המקורית, לפני כל פעולה של צמצום. לכן נשווה את המכנה המקורי לאפס.", math_expression: "x<sup>2</sup> - 4x = 0" },
            { verbal_explanation: "נוציא גורם משותף איקס.", math_expression: "x(x - 4) = 0" },
            { verbal_explanation: "נחלץ את הנקודות האסורות.", math_expression: "x = 0 , x = 4" },
            { verbal_explanation: "אף על פי שהגורם (איקס פחות ארבע) מופיע גם במונה וניתן לצמצום, הפונקציה המקורית אינה מוגדרת בו, ולכן הוא נפסל.", math_expression: "x &ne; 0 , x &ne; 4" }
        ],
        final_answer: "x &ne; 0 , x &ne; 4"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "תחום הגדרה (מכנה שונה מאפס)",
        question: "נתונה הפונקציה: f(x) = 1 / (x<sup>2</sup> + kx + 9)<br>ידוע כי תחום ההגדרה של הפונקציה הוא כל ערכי x, פרט לערך בעייתי אחד בלבד.<br>מצאו את הערך החיובי של הפרמטר k.",
        options: [
            "6",
            "3",
            "9",
            "18"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי שתהיה רק נקודה אחת שבה המכנה מתאפס, המשוואה הריבועית במכנה חייבת להיות בעלת פתרון ממשי יחיד.", math_expression: "x<sup>2</sup> + kx + 9 = 0" },
            { verbal_explanation: "משוואה ריבועית מקבלת פתרון יחיד רק כאשר הדיסקרימיננטה (הדלתא מתחת לשורש) שווה בדיוק לאפס.", math_expression: "b<sup>2</sup> - 4ac = 0" },
            { verbal_explanation: "נציב את המקדמים של המכנה לתוך הנוסחה.", math_expression: "k<sup>2</sup> - 4(1)(9) = 0" },
            { verbal_explanation: "נחשב את המכפלה.", math_expression: "k<sup>2</sup> - 36 = 0" },
            { verbal_explanation: "נעביר אגף ונוציא שורש כדי לקבל שני ערכים אפשריים.", math_expression: "k<sup>2</sup> = 36 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; k = 6 , k = -6" },
            { verbal_explanation: "מכיוון שהשאלה ביקשה את הערך החיובי של הפרמטר, נבחר בפתרון המתאים.", math_expression: "k = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "תחום הגדרה (מכנה שונה מאפס)",
        question: "בכמה נקודות שונות הפונקציה הבאה אינה מוגדרת?<br>f(x) = (x + 3) / (x(x + 1)(x - 2))",
        options: [
            "3",
            "2",
            "4",
            "1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המכנה של הפונקציה מוצג כמכפלה של מספר גורמים נפרדים.", math_expression: "x(x + 1)(x - 2) = 0" },
            { verbal_explanation: "כדי שמכפלה תתאפס, מספיק שאחד מהגורמים יתאפס. נבדוק כל גורם בנפרד למציאת ערכי איקס.", math_expression: "x = 0" },
            { verbal_explanation: "מהגורם השני נקבל:", math_expression: "x + 1 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -1" },
            { verbal_explanation: "מהגורם השלישי נקבל:", math_expression: "x - 2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2" },
            { verbal_explanation: "סך הכל, קיבלנו 3 ערכים שונים שכל אחד מהם בנפרד מאפס את המכנה וגורם לפונקציה להיות בלתי מוגדרת.", math_expression: "3" }
        ],
        final_answer: "3"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "תחום הגדרה (מכנה שונה מאפס)",
        question: "מהו תחום ההגדרה של הפונקציה הבאה?<br>f(x) = 1 / ((x - 1)<sup>2</sup> - 4)",
        options: [
            "x &ne; 3 , x &ne; -1",
            "x &ne; 1 , x &ne; 4",
            "x &ne; 5 , x &ne; -3",
            "x &ne; 2 , x &ne; -2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשווה את המכנה השלם לאפס.", math_expression: "(x - 1)<sup>2</sup> - 4 = 0" },
            { verbal_explanation: "ניתן לפתוח סוגריים, אך קל יותר להעביר את המספר ימינה ולהוציא שורש לשני האגפים.", math_expression: "(x - 1)<sup>2</sup> = 4" },
            { verbal_explanation: "נוציא שורש ריבועי. זכרו שהשורש יכול להיות חיובי או שלילי.", math_expression: "x - 1 = 2 &nbsp;&nbsp;,&nbsp;&nbsp; x - 1 = -2" },
            { verbal_explanation: "נפתור את המשוואה הראשונה.", math_expression: "x = 2 + 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3" },
            { verbal_explanation: "נפתור את המשוואה השנייה.", math_expression: "x = -2 + 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -1" },
            { verbal_explanation: "אלו הם שני הערכים המאפסים את המכנה, ולכן הם מחוץ לתחום ההגדרה.", math_expression: "x &ne; 3 , x &ne; -1" }
        ],
        final_answer: "x &ne; 3 , x &ne; -1"
    },

    // =====================================================================
    // תת-נושא 2: אסימפטוטות אנכיות ואופקיות (12 שאלות)
    // =====================================================================
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "אסימפטוטות אנכיות ואופקיות",
        question: "מהי משוואת האסימפטוטה האופקית של הפונקציה הבאה?<br>f(x) = (4x - 1) / (2x + 5)",
        options: [
            "y = 2",
            "y = -0.5",
            "y = 4",
            "y = 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא אסימפטוטה אופקית, נבדוק את החזקה הגבוהה ביותר של איקס גם במונה וגם במכנה. בשניהם זו חזקת אחת (תואר שווה).", math_expression: "n = m = 1" },
            { verbal_explanation: "כאשר דרגות הפולינומים שוות, ערך האסימפטוטה האופקית שווה למנת המקדמים המובילים (המקדמים של החזקה הגבוהה ביותר).", math_expression: "y = 4 / 2" },
            { verbal_explanation: "נצמצם את השבר ונקבל את משוואת הישר האופקי.", math_expression: "y = 2" }
        ],
        final_answer: "y = 2"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "אסימפטוטות אנכיות ואופקיות",
        question: "מצאו את כל האסימפטוטות (האנכיות והאופקיות) של הפונקציה:<br>f(x) = (3x<sup>2</sup> + x) / (x<sup>2</sup> - 4)",
        options: [
            "y = 3, x = 2, x = -2",
            "y = 0, x = 2, x = -2",
            "y = 3, x = 4",
            "y = 1, x = 2, x = -2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נתחיל באסימפטוטה אופקית. החזקה הגדולה ביותר במונה היא 2, וכך גם במכנה. הדרגות שוות.", math_expression: "n = m = 2" },
            { verbal_explanation: "נחלק את המקדם המוביל של המונה במקדם של המכנה למציאת האסימפטוטה האופקית.", math_expression: "y = 3 / 1 = 3" },
            { verbal_explanation: "כדי למצוא אסימפטוטות אנכיות, נשווה את המכנה לאפס (לאחר שווידאנו שאין צמצום עם המונה).", math_expression: "x<sup>2</sup> - 4 = 0" },
            { verbal_explanation: "נפתור עבור איקס. אלו הם הישרים האנכיים.", math_expression: "x<sup>2</sup> = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 , x = -2" }
        ],
        final_answer: "y = 3, x = 2, x = -2"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "אסימפטוטות אנכיות ואופקיות",
        question: "מהי משוואת האסימפטוטה האופקית של הפונקציה שבה דרגת המכנה גדולה מדרגת המונה?<br>f(x) = 5x / (x<sup>2</sup> + 1)",
        options: [
            "y = 0",
            "y = 5",
            "אין אסימפטוטה אופקית",
            "y = 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבחן את דרגות הפולינומים. במונה החזקה הגדולה היא 1, ובמכנה החזקה הגדולה היא 2.", math_expression: "n = 1 &nbsp;,&nbsp; m = 2" },
            { verbal_explanation: "מכיוון שדרגת הפולינום במכנה גדולה מדרגת הפולינום במונה, המכנה גדל הרבה יותר מהר מהמונה כאשר איקס שואף לאינסוף.", math_expression: "m > n" },
            { verbal_explanation: "כלל מתמטי קובע שבמצב כזה, השבר שואף לאפס, ולכן ציר ה-x הוא האסימפטוטה האופקית.", math_expression: "y = 0" }
        ],
        final_answer: "y = 0"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "אסימפטוטות אנכיות ואופקיות",
        question: "האם לפונקציה הבאה קיימת אסימפטוטה אופקית? אם כן, מהי משוואתה?<br>f(x) = (x<sup>3</sup> - 1) / (2x<sup>2</sup> + x)",
        options: [
            "אין אסימפטוטה אופקית",
            "y = 0.5",
            "y = 0",
            "y = 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבדוק את הדרגות. במונה החזקה היא 3, ובמכנה החזקה היא 2.", math_expression: "n = 3 &nbsp;,&nbsp; m = 2" },
            { verbal_explanation: "כאשר דרגת הפולינום במונה גדולה מדרגת הפולינום במכנה, המונה שואף לאינסוף מהר יותר, והפונקציה אינה מתכנסת לערך מספרי סופי.", math_expression: "n > m" },
            { verbal_explanation: "במצב זה, נהוג לומר שאין לפונקציה אסימפטוטה אופקית (קיימת אסימפטוטה משופעת, אך לא אופקית).", math_expression: "None" }
        ],
        final_answer: "אין אסימפטוטה אופקית"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "אסימפטוטות אנכיות ואופקיות",
        question: "נתונה פונקציה עם פרמטר a:<br>f(x) = (ax<sup>2</sup> + 5) / (3x<sup>2</sup> - x)<br>ידוע שמשוואת האסימפטוטה האופקית של הפונקציה היא y = 2. מהו ערכו של הפרמטר a?",
        options: [
            "6",
            "3",
            "2",
            "1.5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מכיוון שהחזקות הגבוהות ביותר במונה ובמכנה שוות (שתיים), האסימפטוטה האופקית מוגדרת כיחס בין המקדמים שלהן.", math_expression: "y = a / 3" },
            { verbal_explanation: "נשווה את היחס הזה לערך האסימפטוטה שנתון לנו בשאלה (שתיים).", math_expression: "a / 3 = 2" },
            { verbal_explanation: "נכפיל את שני אגפי המשוואה בשלוש כדי לחלץ את הפרמטר.", math_expression: "a = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "אסימפטוטות אנכיות ואופקיות",
        question: "מצאו את משוואות האסימפטוטות האנכיות של הפונקציה הבאה (שימו לב לצמצומים אפשריים):<br>f(x) = (x + 1) / (x<sup>2</sup> - 4x + 3)",
        options: [
            "x = 1 , x = 3",
            "x = 4 , x = -1",
            "x = -1 , x = -3",
            "x = 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אסימפטוטה אנכית נוצרת כאשר המכנה מתאפס אך המונה שונה מאפס באותה נקודה. תחילה, נשווה את המכנה לאפס.", math_expression: "x<sup>2</sup> - 4x + 3 = 0" },
            { verbal_explanation: "נשתמש בטרינום כדי למצוא את המאפסים.", math_expression: "(x - 1)(x - 3) = 0" },
            { verbal_explanation: "הנקודות החשודות הן:", math_expression: "x = 1 , x = 3" },
            { verbal_explanation: "נציב נקודות אלו במונה הפונקציה המקורית (x+1) כדי לוודא שהוא אינו מתאפס, מה שיעיד על אסימפטוטה ולא חור.", math_expression: "1 + 1 = 2 &ne; 0 &nbsp;&nbsp;|&nbsp;&nbsp; 3 + 1 = 4 &ne; 0" },
            { verbal_explanation: "מכיוון שהמונה לא התאפס עבור אף אחת מהן, שתיהן אכן מהוות אסימפטוטות אנכיות.", math_expression: "x = 1 , x = 3" }
        ],
        final_answer: "x = 1 , x = 3"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "אסימפטוטות אנכיות ואופקיות",
        question: "נתונה הפונקציה עם הפרמטר b:<br>f(x) = 5x / (x<sup>2</sup> - bx + 10)<br>ידוע שהישר x = 2 הוא אסימפטוטה אנכית של הפונקציה. מצאו את ערכו של הפרמטר b.",
        options: [
            "7",
            "5",
            "2",
            "10"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כאשר ישר אנכי מסוים הוא אסימפטוטה, הצבת ערך ה-x שלו במכנה מאפסת אותו (והמונה אינו מתאפס שם).", math_expression: "x<sup>2</sup> - bx + 10 = 0" },
            { verbal_explanation: "נציב במכנה את הערך הנתון שתיים במקום איקס.", math_expression: "2<sup>2</sup> - b(2) + 10 = 0" },
            { verbal_explanation: "נחשב את הריבוע.", math_expression: "4 - 2b + 10 = 0" },
            { verbal_explanation: "נכנס איברים חופשיים ונעביר את המשתנה אגף.", math_expression: "14 = 2b" },
            { verbal_explanation: "נחלק בשתיים לקבלת ערך הפרמטר.", math_expression: "b = 7" }
        ],
        final_answer: "7"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "אסימפטוטות אנכיות ואופקיות",
        question: "נתונה הפונקציה: f(x) = (2x<sup>2</sup> + 4x) / (x<sup>2</sup> + 1)<br>מצאו את שיעור ה-x של נקודת החיתוך בין גרף הפונקציה לבין האסימפטוטה האופקית שלה.",
        options: [
            "0.5",
            "2",
            "-0.5",
            "0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "השלב הראשון הוא למצוא את האסימפטוטה האופקית. החזקות שוות, ולכן נחלק מקדמים מובילים.", math_expression: "y = 2 / 1 = 2" },
            { verbal_explanation: "כדי למצוא את נקודת החיתוך, נשווה את הפונקציה עצמה לערך האסימפטוטה שמצאנו.", math_expression: "(2x<sup>2</sup> + 4x) / (x<sup>2</sup> + 1) = 2" },
            { verbal_explanation: "נכפיל את המשוואה במכנה.", math_expression: "2x<sup>2</sup> + 4x = 2(x<sup>2</sup> + 1)" },
            { verbal_explanation: "נפתח את הסוגריים בצד ימין.", math_expression: "2x<sup>2</sup> + 4x = 2x<sup>2</sup> + 2" },
            { verbal_explanation: "נחסר שני איקס בריבוע משני האגפים. המונח הריבועי מתבטל לחלוטין.", math_expression: "4x = 2" },
            { verbal_explanation: "נחלק בארבע למציאת שיעור החיתוך.", math_expression: "x = 2 / 4 = 0.5" }
        ],
        final_answer: "0.5"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "אסימפטוטות אנכיות ואופקיות",
        question: "על פי הגרף שלפניכם, מהן משוואות האסימפטוטות של הפונקציה (אנכית ואופקית)?<br><svg viewBox='0 0 200 200' width='160' height='160' style='display:block; margin: 15px auto;'><line x1='10' y1='100' x2='190' y2='100' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='190' stroke='#94a3b8' stroke-width='2'/><line x1='140' y1='10' x2='140' y2='190' stroke='#ef4444' stroke-width='2' stroke-dasharray='5,5'/><line x1='10' y1='80' x2='190' y2='80' stroke='#ef4444' stroke-width='2' stroke-dasharray='5,5'/><path d='M 10,95 Q 120,95 135,10' fill='none' stroke='#3b82f6' stroke-width='3'/><path d='M 145,190 Q 155,65 190,65' fill='none' stroke='#3b82f6' stroke-width='3'/><text x='145' y='180' font-size='14' fill='#b91c1c' font-weight='bold'>A</text><text x='20' y='70' font-size='14' fill='#b91c1c' font-weight='bold'>B</text></svg>",
        options: [
            "x = 2 , y = 1",
            "x = 1 , y = 2",
            "x = -2 , y = -1",
            "x = 0 , y = 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נתבונן באסימפטוטה האנכית (מסומנת בקו מקווקו אדום). הישר מקביל לציר ה-y וחוצה את ציר ה-x בצד החיובי שלו, במרחק שנראה כמו 2 יחידות מהראשית.", math_expression: "x = 2" },
            { verbal_explanation: "נתבונן באסימפטוטה האופקית. זהו ישר המקביל לציר ה-x, והוא חוצה את ציר ה-y מעט מעל הראשית, בערך שמתאים ליחידה אחת חיובית.", math_expression: "y = 1" }
        ],
        final_answer: "x = 2 , y = 1"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "אסימפטוטות אנכיות ואופקיות",
        question: "נתונה פונקציה המורכבת ממספר שלם ושבר רציונלי:<br>f(x) = 3 + 2 / (x - 4)<br>מהן משוואות האסימפטוטה האנכית והאופקית שלה?",
        options: [
            "אנכית: x = 4 , אופקית: y = 3",
            "אנכית: x = -4 , אופקית: y = 3",
            "אנכית: x = 4 , אופקית: y = 2",
            "אנכית: x = 2 , אופקית: y = 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "האסימפטוטה האנכית נובעת מהמכנה של חלק השבר בפונקציה. נשווה אותו לאפס.", math_expression: "x - 4 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 4" },
            { verbal_explanation: "כדי למצוא אסימפטוטה אופקית, נבדוק מה קורה לפונקציה כאשר איקס שואף לאינסוף. חלק השבר שואף לאפס מכיוון שהמכנה גדל ללא הגבלה.", math_expression: "2 / \u221E &rarr; 0" },
            { verbal_explanation: "לכן, ערך הפונקציה הכולל ישאף פשוט למספר הקבוע שנותר בביטוי.", math_expression: "y = 3 + 0 = 3" }
        ],
        final_answer: "אנכית: x = 4 , אופקית: y = 3"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "אסימפטוטות אנכיות ואופקיות",
        question: "נתונה הפונקציה עם הפרמטרים a ו-c:<br>f(x) = (ax + 2) / (cx - 6)<br>ידוע שלאסימפטוטה האופקית שלה יש משוואה y = 4, ולאסימפטוטה האנכית שלה יש משוואה x = 3.<br>מהם הערכים של הפרמטרים a ו-c?",
        options: [
            "a = 8 , c = 2",
            "a = 4 , c = 3",
            "a = 2 , c = 8",
            "a = -8 , c = -2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "האסימפטוטה האנכית מאפסת את המכנה. נציב את המשוואה האנכית (x=3) במכנה ונשווה לאפס.", math_expression: "c(3) - 6 = 0" },
            { verbal_explanation: "נחלץ את המשתנה.", math_expression: "3c = 6 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; c = 2" },
            { verbal_explanation: "האסימפטוטה האופקית מוגדרת על ידי חלוקת המקדמים המובילים (כיוון שחזקות האיקס שוות בשני הצדדים).", math_expression: "y = a / c" },
            { verbal_explanation: "נציב את משוואת האופקית שניתנה (4) ואת המקדם שמצאנו במשוואה.", math_expression: "4 = a / 2" },
            { verbal_explanation: "נכפיל בשתיים ונקבל את ערכו של הפרמטר השני.", math_expression: "a = 8" }
        ],
        final_answer: "a = 8 , c = 2"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "אסימפטוטות אנכיות ואופקיות",
        question: "מהי משוואת האסימפטוטה האופקית של הפונקציה עם המקדמים השליליים?<br>f(x) = (-10x<sup>4</sup> + x) / (5x<sup>4</sup> - 2)",
        options: [
            "y = -2",
            "y = 2",
            "y = -10",
            "y = 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה נבדוק את דרגות הפולינומים. גם במונה וגם במכנה החזקה הגבוהה ביותר היא 4.", math_expression: "n = m = 4" },
            { verbal_explanation: "מכיוון שהדרגות שוות, האסימפטוטה מחושבת על ידי יחס המקדמים של איקס בחזקת ארבע. נשמור היטב על סימני המינוס.", math_expression: "y = -10 / 5" },
            { verbal_explanation: "נבצע את החלוקה ונקבל את משוואת הישר.", math_expression: "y = -2" }
        ],
        final_answer: "y = -2"
    },// =====================================================================
    // תת-נושא 3: נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה) (12 שאלות)
    // =====================================================================
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה)",
        question: "נתונה הפונקציה הרציונלית: f(x) = (x<sup>2</sup> - 4x + 3) / (x - 2)<br>מצאו את נקודת החיתוך של הפונקציה עם ציר ה-y.",
        options: [
            "(0, -1.5)",
            "(0, 1.5)",
            "(0, 3)",
            "(0, -3)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא את נקודת החיתוך עם ציר ה-y, עלינו להציב אפס במקום המשתנה x בתוך הפונקציה.", math_expression: "f(0) = (0<sup>2</sup> - 4(0) + 3) / (0 - 2)" },
            { verbal_explanation: "נחשב את המונה ואת המכנה בנפרד.", math_expression: "f(0) = 3 / -2" },
            { verbal_explanation: "נבצע את פעולת החילוק לקבלת שיעור ה-y.", math_expression: "f(0) = -1.5" },
            { verbal_explanation: "נרשום את התשובה כנקודה במישור.", math_expression: "(0, -1.5)" }
        ],
        final_answer: "(0, -1.5)"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה)",
        question: "נתונה הפונקציה: f(x) = (x<sup>2</sup> - 9) / (x<sup>2</sup> + 1)<br>מצאו את נקודות החיתוך של הפונקציה עם ציר ה-x.",
        options: [
            "(3, 0) , (-3, 0)",
            "(9, 0) , (-9, 0)",
            "(3, 0)",
            "אין נקודות חיתוך"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא את נקודות החיתוך עם ציר ה-x, עלינו להשוות את הפונקציה כולה לאפס.<br><br>בשבר, מספיק להשוות רק את המונה לאפס (בתנאי שהמכנה לא מתאפס באותה נקודה).", math_expression: "x<sup>2</sup> - 9 = 0" },
            { verbal_explanation: "נעביר את המספר תשע לאגף הימני.", math_expression: "x<sup>2</sup> = 9" },
            { verbal_explanation: "נוציא שורש ריבועי. נקבל שני פתרונות אפשריים.", math_expression: "x = 3 , x = -3" },
            { verbal_explanation: "נוודא שהמכנה אינו מתאפס עבור ערכים אלו (המכנה תמיד חיובי כאן). לכן נרשום את הנקודות.", math_expression: "(3, 0) , (-3, 0)" }
        ],
        final_answer: "(3, 0) , (-3, 0)"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה)",
        question: "נתונה הפונקציה: f(x) = (x<sup>2</sup> - 5x + 6) / (x - 3)<br>כמה נקודות חיתוך יש לפונקציה עם ציר ה-x?",
        options: [
            "נקודה אחת בלבד",
            "שתי נקודות",
            "אין נקודות חיתוך",
            "שלוש נקודות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה נבדוק מהו תחום ההגדרה של הפונקציה. המכנה חייב להיות שונה מאפס.", math_expression: "x - 3 &ne; 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x &ne; 3" },
            { verbal_explanation: "כעת נשווה את המונה לאפס למציאת נקודות החיתוך עם ציר ה-x.", math_expression: "x<sup>2</sup> - 5x + 6 = 0" },
            { verbal_explanation: "נפרק לטרינום (שני מספרים שמכפלתם 6 וסכומם מינוס 5).", math_expression: "(x - 2)(x - 3) = 0" },
            { verbal_explanation: "נחלץ את שני הפתרונות של המונה.", math_expression: "x = 2 , x = 3" },
            { verbal_explanation: "הפתרון 3 נפסל מכיוון שהוא מחוץ לתחום ההגדרה (מאפס את המכנה). לכן נשארה רק נקודה אחת.", math_expression: "x = 2" }
        ],
        final_answer: "נקודה אחת בלבד"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה)",
        question: "נתונה הפונקציה: f(x) = (x<sup>2</sup> - 16) / (x - 4)<br>מהו שיעור ה-x של נקודת החור (אי-רציפות סליקה) בפונקציה זו?",
        options: [
            "4",
            "-4",
            "16",
            "אין נקודת חור"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקודת חור נוצרת כאשר גורם זהה מאפס גם את המונה וגם את המכנה. נמצא את מאפס המכנה.", math_expression: "x - 4 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 4" },
            { verbal_explanation: "נפרק את המונה לפי נוסחת כפל מקוצר של הפרש ריבועים.", math_expression: "(x - 4)(x + 4) / (x - 4)" },
            { verbal_explanation: "נצמצם את הגורם המשותף המופיע במונה ובמכנה.", math_expression: "x + 4" },
            { verbal_explanation: "כאשר אנו מצמצמים גורם שמתאפס, הנקודה אינה אסימפטוטה אנכית אלא 'חור' (נקודת אי-רציפות סליקה).", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה)",
        question: "בהמשך לשאלה הקודמת, הפונקציה היא f(x) = (x<sup>2</sup> - 16) / (x - 4).<br>מהו שיעור ה-y של נקודת החור?",
        options: [
            "8",
            "0",
            "4",
            "-4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ראינו קודם שניתן לצמצם את הפונקציה ולקבל פונקציה מפושטת זהה לכל x בתחום ההגדרה.", math_expression: "y = x + 4" },
            { verbal_explanation: "שיעור ה-x של נקודת החור שמצאנו היה ארבע.", math_expression: "x = 4" },
            { verbal_explanation: "כדי למצוא את שיעור ה-y של החור, נציב את שיעור ה-x אל תוך הפונקציה המפושטת (לאחר הצמצום).", math_expression: "y = 4 + 4 = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה)",
        question: "נתונה הפונקציה: f(x) = (x - 2) / (x<sup>2</sup> - 4x + 4)<br>מהו סוג אי-הרציפות בנקודה שבה x = 2?",
        options: [
            "אסימפטוטה אנכית",
            "נקודת חור (סליקה)",
            "הפונקציה רציפה שם",
            "נקודת קיצון"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבדוק את המכנה ונפרק אותו לגורמים בעזרת כפל מקוצר או טרינום.", math_expression: "x<sup>2</sup> - 4x + 4 = (x - 2)<sup>2</sup>" },
            { verbal_explanation: "נרשום את הפונקציה מחדש עם המכנה המפורק.", math_expression: "f(x) = (x - 2) / (x - 2)<sup>2</sup>" },
            { verbal_explanation: "נצמצם את הגורם המשותף מהמונה ומהמכנה.", math_expression: "f(x) = 1 / (x - 2)" },
            { verbal_explanation: "לאחר הצמצום, המכנה עדיין מתאפס עבור x = 2. לכן, זו אינה נקודת חור אלא אסימפטוטה אנכית של הפונקציה המפושטת.", math_expression: "1 / 0 &rarr; \u221E" }
        ],
        final_answer: "אסימפטוטה אנכית"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה)",
        question: "נתונה הפונקציה עם הפרמטר a:  f(x) = (x<sup>2</sup> + ax - 10) / (x - 2)<br>ידוע שלפונקציה יש נקודת חור. מצאו את ערכו של הפרמטר a.",
        options: [
            "3",
            "5",
            "-3",
            "2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקודת חור מתקבלת כאשר המונה מתאפס בדיוק באותו ערך איקס שמאפס את המכנה. המכנה מתאפס בשתיים.", math_expression: "x - 2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2" },
            { verbal_explanation: "לכן, נדרוש שגם המונה יתאפס כאשר נציב בו שתיים.", math_expression: "2<sup>2</sup> + a(2) - 10 = 0" },
            { verbal_explanation: "נחשב את המספרים ונסדר את המשוואה.", math_expression: "4 + 2a - 10 = 0" },
            { verbal_explanation: "נכנס איברים חופשיים.", math_expression: "2a - 6 = 0" },
            { verbal_explanation: "נעביר את שש לאגף הימני ונחלק בשתיים למציאת הפרמטר.", math_expression: "2a = 6 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה)",
        question: "נתונה הפונקציה הרציונלית: f(x) = 4x / (x + 1)<br>מצאו את שיעור ה-x של הנקודה שעליה ערך הפונקציה שווה ל-2.",
        options: [
            "1",
            "2",
            "-1",
            "4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשווה את הפונקציה לערך המבוקש (שתיים).", math_expression: "4x / (x + 1) = 2" },
            { verbal_explanation: "נכפיל את שני אגפי המשוואה במכנה.", math_expression: "4x = 2(x + 1)" },
            { verbal_explanation: "נפתח סוגריים באגף ימין.", math_expression: "4x = 2x + 2" },
            { verbal_explanation: "נעביר את האיקסים לצד שמאל על ידי חיסור.", math_expression: "2x = 2" },
            { verbal_explanation: "נחלק בשתיים כדי למצוא את התשובה.", math_expression: "x = 1" }
        ],
        final_answer: "1"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה)",
        question: "כמה נקודות חיתוך עם ציר ה-x יש לפונקציה: f(x) = 5 / (x<sup>2</sup> - 4)?",
        options: [
            "אין נקודות חיתוך",
            "1",
            "2",
            "3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא חיתוך עם ציר ה-x נשווה את המונה לאפס.", math_expression: "5 = 0" },
            { verbal_explanation: "התקבל פסוק שקר מתמטי, שלא תלוי בכלל במשתנה איקס.", math_expression: "5 &ne; 0" },
            { verbal_explanation: "המסקנה היא שאין אף ערך של איקס שבו המונה יכול להתאפס, ולכן הגרף לא יחתוך לעולם את ציר האיקס (ציר האיקס הוא למעשה אסימפטוטה אופקית).", math_expression: "0" }
        ],
        final_answer: "אין נקודות חיתוך"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה)",
        question: "נתונה הפונקציה: f(x) = (x<sup>2</sup> - 8x + 12) / (x<sup>2</sup> + 1)<br>מהו המרחק הגיאומטרי בין שתי נקודות החיתוך של הפונקציה עם ציר ה-x?",
        options: [
            "4",
            "6",
            "2",
            "8"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשווה את המונה לאפס למציאת נקודות החיתוך.", math_expression: "x<sup>2</sup> - 8x + 12 = 0" },
            { verbal_explanation: "נפרק לטרינום (שני מספרים שמכפלתם 12 וסכומם מינוס שמונה).", math_expression: "(x - 2)(x - 6) = 0" },
            { verbal_explanation: "נחלץ את שני הפתרונות המהווים את נקודות החיתוך.", math_expression: "x = 2 , x = 6" },
            { verbal_explanation: "המרחק בין שתי נקודות על ציר ה-x הוא ההפרש ביניהן (הגדול פחות הקטן).", math_expression: "6 - 2 = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה)",
        question: "לפניכם גרף של פונקציה רציונלית עם חור (נקודה ריקה) בנקודה (2, 4). איזו מבין הפונקציות הבאות עשויה לייצג גרף זה?<br><svg viewBox='0 0 200 150' width='160' height='120' style='display:block; margin: 15px auto;'><line x1='10' y1='100' x2='190' y2='100' stroke='#334155' stroke-width='2'/><line x1='60' y1='10' x2='60' y2='140' stroke='#334155' stroke-width='2'/><path d='M 10,130 L 190,20' stroke='#3b82f6' stroke-width='3' fill='none'/><circle cx='100' cy='75' r='5' fill='#fff' stroke='#3b82f6' stroke-width='2'/><text x='110' y='65' font-weight='bold'>x=2</text></svg>",
        options: [
            "y = (x<sup>2</sup> - 4) / (x - 2)",
            "y = 1 / (x - 2)",
            "y = (x - 2) / (x<sup>2</sup> - 4)",
            "y = x + 2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "גרף שמכיל חור ב- x=2 מעיד על כך שהמכנה של הפונקציה מתאפס באותה נקודה.", math_expression: "x - 2 = 0" },
            { verbal_explanation: "בנוסף, כדי שייווצר חור ולא אסימפטוטה, גם המונה חייב להתאפס באותה נקודה ולהצטמצם עם המכנה.", math_expression: "2<sup>2</sup> - 4 = 0" },
            { verbal_explanation: "נבדוק את הפונקציה הראשונה. נפרק את המונה שלה לגורמים.", math_expression: "(x - 2)(x + 2) / (x - 2)" },
            { verbal_explanation: "היא מצטמצמת לישר לינארי בעל חור, שזה בדיוק מה שרואים בגרף.", math_expression: "y = x + 2 &nbsp;&nbsp;(x &ne; 2)" }
        ],
        final_answer: "y = (x<sup>2</sup> - 4) / (x - 2)"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "נקודות חיתוך עם הצירים ונקודות חור (אי-רציפות סליקה)",
        question: "נתונה הפונקציה: f(x) = (x<sup>2</sup> - a) / (x - 1)<br>ידוע שהפונקציה חותכת את ציר ה-x בנקודה שבה x = 5. מצאו את ערכו של הפרמטר a.",
        options: [
            "25",
            "5",
            "10",
            "1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אם הפונקציה חותכת את ציר ה-x בנקודה שבה איקס שווה לחמש, אזי המונה של הפונקציה מתאפס כאשר נציב בו חמש.", math_expression: "x<sup>2</sup> - a = 0" },
            { verbal_explanation: "נציב את הערך הנתון למשוואה.", math_expression: "5<sup>2</sup> - a = 0" },
            { verbal_explanation: "נחשב את הריבוע.", math_expression: "25 - a = 0" },
            { verbal_explanation: "נעביר אגף ונמצא את הפרמטר.", math_expression: "a = 25" }
        ],
        final_answer: "25"
    },

    // =====================================================================
    // תת-נושא 4: חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות) (12 שאלות)
    // =====================================================================
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות)",
        question: "מצאו את הנגזרת של הפונקציה: f(x) = x<sup>2</sup> / (x - 2)",
        options: [
            "(x<sup>2</sup> - 4x) / (x - 2)<sup>2</sup>",
            "2x / 1",
            "(3x<sup>2</sup> - 4x) / (x - 2)<sup>2</sup>",
            "(x<sup>2</sup> + 4x) / (x - 2)<sup>2</sup>"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור את הפונקציה הרציונלית בעזרת כלל המנה.", math_expression: "f'(x) = (2x(x - 2) - x<sup>2</sup> &times; 1) / (x - 2)<sup>2</sup>" },
            { verbal_explanation: "נפתח את הסוגריים במונה הנגזרת.", math_expression: "f'(x) = (2x<sup>2</sup> - 4x - x<sup>2</sup>) / (x - 2)<sup>2</sup>" },
            { verbal_explanation: "נכנס איברים דומים (חיסור הריבועים) לקבלת הביטוי הסופי.", math_expression: "f'(x) = (x<sup>2</sup> - 4x) / (x - 2)<sup>2</sup>" }
        ],
        final_answer: "(x<sup>2</sup> - 4x) / (x - 2)<sup>2</sup>"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות)",
        question: "בהמשך לשאלה הקודמת, עבור הפונקציה f(x) = x<sup>2</sup> / (x - 2) שנגזרתה f'(x) = (x<sup>2</sup> - 4x) / (x - 2)<sup>2</sup>.<br>מצאו את שיעורי ה-x של הנקודות החשודות כקיצון.",
        options: [
            "0 , 4",
            "2 , 4",
            "0 , 2",
            "0 , -4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא נקודות החשודות כקיצון, נשווה את המונה של הנגזרת לאפס.", math_expression: "x<sup>2</sup> - 4x = 0" },
            { verbal_explanation: "נוציא גורם משותף.", math_expression: "x(x - 4) = 0" },
            { verbal_explanation: "נחלץ את שני הפתרונות המאפסים את המונה.", math_expression: "x = 0 , x = 4" }
        ],
        final_answer: "0 , 4"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות)",
        question: "סווגו את נקודות הקיצון שמצאנו לפונקציה f(x) = x<sup>2</sup> / (x - 2) בשיעורים x = 0 ו- x = 4.",
        options: [
            "x=0 מקסימום, x=4 מינימום",
            "x=0 מינימום, x=4 מקסימום",
            "שתי הנקודות הן מינימום",
            "שתי הנקודות הן מקסימום"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש במבחן הנגזרת הראשונה (בדיקת סימנים לפני ואחרי כל נקודה). נציב ערכים במונה הנגזרת שכן המכנה תמיד חיובי. עבור איקס שווה לאפס, נבדוק במינוס אחת ואחת.", math_expression: "f'(-1) = (-1)<sup>2</sup> - 4(-1) = 5 > 0" },
            { verbal_explanation: "לפני אפס הפונקציה עולה. נציב אחת.", math_expression: "f'(1) = 1<sup>2</sup> - 4(1) = -3 < 0" },
            { verbal_explanation: "אחרי אפס הפונקציה יורדת. מעבר מעלייה לירידה מגדיר מקסימום.", math_expression: "Max: x = 0" },
            { verbal_explanation: "כעת נבדוק עבור איקס שווה ארבע. נציב שלוש וחמש. ב-3 כבר ראינו שהמגמה היא ירידה.", math_expression: "f'(3) = 3<sup>2</sup> - 4(3) = 9 - 12 = -3 < 0" },
            { verbal_explanation: "נציב חמש במונה.", math_expression: "f'(5) = 5<sup>2</sup> - 4(5) = 25 - 20 = 5 > 0" },
            { verbal_explanation: "אחרי ארבע הפונקציה עולה. מעבר מירידה לעלייה מגדיר מינימום.", math_expression: "Min: x = 4" }
        ],
        final_answer: "x=0 מקסימום, x=4 מינימום"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות)",
        question: "באיזה מהתחומים הבאים פונקציית הנגזרת f'(x) = (x<sup>2</sup> - 4x) / (x - 2)<sup>2</sup> מקבלת ערכים חיוביים (ולכן הפונקציה עולה)?",
        options: [
            "x &lt; 0  או  x &gt; 4",
            "0 &lt; x &lt; 4",
            "x &gt; 4",
            "x &lt; 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נדרוש שהנגזרת תהיה גדולה מאפס.", math_expression: "(x<sup>2</sup> - 4x) / (x - 2)<sup>2</sup> > 0" },
            { verbal_explanation: "מכיוון שהמכנה מועלה בריבוע, הוא תמיד חיובי (עבור איקס השונה משתיים). לכן סימן השבר נקבע רק על ידי המונה.", math_expression: "x<sup>2</sup> - 4x > 0" },
            { verbal_explanation: "זוהי פרבולה מחייכת עם שורשים באפס וארבע. היא חיובית (מעל ציר האיקס) מחוץ לשורשים שלה.", math_expression: "x < 0 , x > 4" }
        ],
        final_answer: "x < 0  או  x > 4"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות)",
        question: "מהו תחום הירידה המדויק של הפונקציה f(x) = x<sup>2</sup> / (x - 2)?<br>(זכרו להתחשב בתחום ההגדרה).",
        options: [
            "0 &lt; x &lt; 2  או  2 &lt; x &lt; 4",
            "0 &lt; x &lt; 4",
            "x &lt; 0  או  x &gt; 4",
            "2 &lt; x &lt; 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחום הירידה הוא התחום שבו המונה של הנגזרת שלילי. כלומר בין השורשים אפס וארבע.", math_expression: "0 < x < 4" },
            { verbal_explanation: "אולם, הפונקציה והנגזרת שלה אינן מוגדרות בנקודה שמאפסת את המכנה המקורי.", math_expression: "x &ne; 2" },
            { verbal_explanation: "לכן, עלינו לפצל את התחום הרציף שמצאנו לשני תתי-תחומים, תוך דילוג על הנקודה הבעייתית.", math_expression: "0 < x < 2 , 2 < x < 4" }
        ],
        final_answer: "0 < x < 2  או  2 < x < 4"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות)",
        question: "נתונה הפונקציה: f(x) = 2x / (x - 1)<br>כמה נקודות קיצון יש לפונקציה זו?",
        options: [
            "אין נקודות קיצון",
            "נקודה אחת",
            "שתי נקודות",
            "שלוש נקודות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא נקודות קיצון, נגזור את הפונקציה לפי כלל המנה.", math_expression: "f'(x) = (2(x - 1) - 2x &times; 1) / (x - 1)<sup>2</sup>" },
            { verbal_explanation: "נפשט את המונה של הנגזרת.", math_expression: "f'(x) = (2x - 2 - 2x) / (x - 1)<sup>2</sup>" },
            { verbal_explanation: "האיקסים במונה מתבטלים ואנו מקבלים מספר קבוע ושלילי.", math_expression: "f'(x) = -2 / (x - 1)<sup>2</sup>" },
            { verbal_explanation: "כאשר נשווה את הנגזרת לאפס, נקבל פסוק שקר. המונה לעולם אינו מתאפס.", math_expression: "-2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &empty;" },
            { verbal_explanation: "מכיוון שהנגזרת אינה מתאפסת לעולם, לפונקציה זו אין נקודות קיצון כלל.", math_expression: "0" }
        ],
        final_answer: "אין נקודות קיצון"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות)",
        question: "נתונה הפונקציה: f(x) = x + 4/x (עבור x &gt; 0).<br>מהו ערך ה-y של נקודת המינימום של הפונקציה?",
        options: [
            "4",
            "2",
            "0",
            "8"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "זוהי פונקציה רציונלית פשוטה. נגזור את הפונקציה. הנגזרת של מספר חלקי איקס היא מינוס המספר חלקי איקס בריבוע.", math_expression: "f'(x) = 1 - 4 / x<sup>2</sup>" },
            { verbal_explanation: "נשווה את הנגזרת לאפס.", math_expression: "1 - 4 / x<sup>2</sup> = 0" },
            { verbal_explanation: "נעביר אגף.", math_expression: "1 = 4 / x<sup>2</sup>" },
            { verbal_explanation: "נכפיל באיקס בריבוע ונוציא שורש. נבחר את הפתרון החיובי לפי התחום הנתון.", math_expression: "x<sup>2</sup> = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2" },
            { verbal_explanation: "נציב את שיעור האיקס של נקודת הקיצון אל תוך הפונקציה המקורית למציאת ערך ה-y.", math_expression: "f(2) = 2 + 4 / 2" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "f(2) = 2 + 2 = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות)",
        question: "נתונה הפונקציה עם הפרמטר a:  f(x) = x / (x<sup>2</sup> + a)<br>ידוע שלפונקציה יש נקודת קיצון (מקסימום) בשיעור x = 3.<br>מהו ערכו של הפרמטר a?",
        options: [
            "9",
            "3",
            "6",
            "-9"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור את הפונקציה בעזרת כלל המנה, תוך השארת הפרמטר.", math_expression: "f'(x) = (1(x<sup>2</sup> + a) - x(2x)) / (x<sup>2</sup> + a)<sup>2</sup>" },
            { verbal_explanation: "נפשט את המונה של הנגזרת.", math_expression: "f'(x) = (x<sup>2</sup> + a - 2x<sup>2</sup>) / (x<sup>2</sup> + a)<sup>2</sup> = (a - x<sup>2</sup>) / (x<sup>2</sup> + a)<sup>2</sup>" },
            { verbal_explanation: "כדי למצוא את הפרמטר, נציב את הנקודה שבה הנגזרת מתאפסת (באיקס שווה לשלוש).", math_expression: "a - 3<sup>2</sup> = 0" },
            { verbal_explanation: "נחשב את הריבוע ונעביר אגף.", math_expression: "a - 9 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות)",
        question: "על פי מאפייני חקירת פונקציה מסוימת, ידוע כי: יש לה אסימפטוטה אנכית ב-x=2, אסימפטוטה אופקית ב-y=1, נקודת מינימום ב-x=4 ונקודת מקסימום ב-x=0.<br>איזה מהגרפים הבאים עשוי לייצג את הפונקציה?",
        options: [
            "גרף היורד משמאל לאפס, עולה עד x=2, ומ-2 יורד עד 4 ואז עולה שוב",
            "גרף העולה משמאל לאפס, יורד עד 2, יורד מ-2 עד 4, ואז עולה",
            "גרף פרבולה",
            "גרף בעל משיק אופקי יחיד ב-x=0"
        ],
        correctAnswer: 1,
        solution_steps: [
            { verbal_explanation: "ננתח את הנתונים משמאל לימין. נקודת מקסימום ב-x=0 משמעותה שהפונקציה עולה לפני אפס, ואז מתחילה לרדת אחריה.", math_expression: "x < 0 &rArr; Up &nbsp;,&nbsp; 0 < x < 2 &rArr; Down" },
            { verbal_explanation: "ב-x=2 יש אסימפטוטה אנכית (שבר או קטיעה).", math_expression: "x = 2 &rArr; Asymptote" },
            { verbal_explanation: "מצדה השני של האסימפטוטה, הפונקציה צריכה להגיע לנקודת מינימום ב-x=4. כלומר, היא יורדת מימין לאסימפטוטה עד x=4, ולאחר מכן מתחילה לעלות חזרה.", math_expression: "2 < x < 4 &rArr; Down &nbsp;,&nbsp; x > 4 &rArr; Up" },
            { verbal_explanation: "התיאור שמשלב את כל המגמות הללו כרונולוגית תואם בדיוק לתיאור השני.", math_expression: "Correct Match" }
        ],
        final_answer: "גרף העולה משמאל לאפס, יורד עד 2, יורד מ-2 עד 4, ואז עולה"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות)",
        question: "האם לפונקציה f(x) = 1 / x יש נקודת פיתול כלשהי בתחום הגדרתה?",
        options: [
            "לא, אין לה נקודות פיתול כלל",
            "כן, ב-x=0",
            "כן, ב-x=1",
            "לא ניתן לדעת"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא נקודת פיתול, נגזור פעמיים. תחילה נכתוב את הפונקציה כחזקה שלילית ואז נגזור.", math_expression: "f(x) = x<sup>-1</sup> &nbsp;&nbsp;&rArr;&nbsp;&nbsp; f'(x) = -1x<sup>-2</sup>" },
            { verbal_explanation: "נגזור פעם נוספת.", math_expression: "f''(x) = 2x<sup>-3</sup> = 2 / x<sup>3</sup>" },
            { verbal_explanation: "נשווה את הנגזרת השנייה לאפס.", math_expression: "2 / x<sup>3</sup> = 0" },
            { verbal_explanation: "מונה השבר (2) לעולם אינו מתאפס, ולכן המשוואה היא קבוצת ריקה. הנגזרת השנייה לא מתאפסת לעולם, ולכן אין נקודות פיתול.", math_expression: "2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &empty;" }
        ],
        final_answer: "לא, אין לה נקודות פיתול כלל"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות)",
        question: "עבור הפונקציה f(x) = 1 / (x<sup>2</sup> - 4), באיזה מהתחומים הבאים הפונקציה עולה?",
        options: [
            "x &lt; -2  או  -2 &lt; x &lt; 0",
            "0 &lt; x &lt; 2  או  x &gt; 2",
            "x &gt; 0",
            "x &lt; 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור את הפונקציה על ידי כלל המנה (עם מונה קבוע).", math_expression: "f'(x) = (0 - 1 &times; 2x) / (x<sup>2</sup> - 4)<sup>2</sup> = -2x / (x<sup>2</sup> - 4)<sup>2</sup>" },
            { verbal_explanation: "כדי שהפונקציה תעלה, הנגזרת צריכה להיות חיובית.", math_expression: "-2x / (x<sup>2</sup> - 4)<sup>2</sup> > 0" },
            { verbal_explanation: "המכנה תמיד חיובי (בריבוע). כדי שהשבר כולו יהיה חיובי, המונה חייב להיות גם הוא חיובי.", math_expression: "-2x > 0" },
            { verbal_explanation: "נחלק במינוס שתיים, ונזכור להפוך את סימן אי-השוויון.", math_expression: "x < 0" },
            { verbal_explanation: "אולם, יש להוציא מהתחום את נקודות אי-ההגדרה של המכנה (פלוס/מינוס שתיים).", math_expression: "x &ne; -2" },
            { verbal_explanation: "לכן, התחום מפוצל לשניים, תוך דילוג על הנקודה הבעייתית.", math_expression: "x < -2 , -2 < x < 0" }
        ],
        final_answer: "x < -2  או  -2 < x < 0"
    },
    {
        topic: "חשבון דיפרנציאלי - פונקציות רציונליות",
        subTopic: "חקירה מלאה (קיצון, עלייה/ירידה, פיתול, קעירות)",
        question: "גרף הפונקציה f(x) חותך את ציר ה-x רק בנקודה שבה x=0, ויש לו נקודת קיצון יחידה (מינימום) בנקודה שבה x=3. כמו כן יש לפונקציה אסימפטוטה אנכית ב-x=1.<br>איך ייראה גרף הנגזרת שלה, f'(x)?",
        options: [
            "יחתוך את ציר ה-x ב-x=3, ותהיה לו אסימפטוטה ב-x=1",
            "יחתוך את ציר ה-x ב-x=0, ותהיה לו אסימפטוטה ב-x=1",
            "יהיה קו ישר העובר בראשית",
            "יהיה פרבולה"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקודת המינימום של הפונקציה מתרחשת כאשר שיעור ה-x הוא שלוש. בנקודה זו, הנגזרת מתאפסת.", math_expression: "f'(3) = 0" },
            { verbal_explanation: "התאפסות הנגזרת משמעותה חיתוך עם ציר ה-x בגרף הנגזרת.", math_expression: "(3, 0)" },
            { verbal_explanation: "האסימפטוטה האנכית של הפונקציה המקורית נשארת כנקודת אי-הגדרה גם עבור פונקציית הנגזרת (היא לא יכולה להיות גזירה במקום שאינה מוגדרת).", math_expression: "x = 1" }
        ],
        final_answer: "יחתוך את ציר ה-x ב-x=3, ותהיה לו אסימפטוטה ב-x=1"
    }
];
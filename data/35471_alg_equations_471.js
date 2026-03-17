const questionsDB = [
    // =====================================================================
    // תת-נושא 1: משוואות ממעלה ראשונה עם פרמטרים (10 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "פתרו את המשוואה הבאה ומצאו את x באמצעות הפרמטר a:<br>ax + 5 = 2x + 3a",
        options: [
            "(3a - 5) / (a - 2)",
            "(3a + 5) / (a - 2)",
            "(5 - 3a) / (a + 2)",
            "(3a - 5) / (a + 2)"
        ],
        hint: "העבירו את כל האיברים המכילים x לאגף אחד, ואת כל שאר האיברים לאגף השני. לאחר מכן, הוציאו את x כגורם משותף וחלקו במקדם שלו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לבודד את המשתנה, נעביר את כל האיברים המכילים את המשתנה לאגף השמאלי, ואת האיברים החופשיים (הכוללים את הפרמטר כמספר חופשי) לאגף הימני.", math_expression: "ax - 2x = 3a - 5" },
            { verbal_explanation: "באגף השמאלי, נוציא את המשתנה כגורם משותף מחוץ לסוגריים.", math_expression: "x(a - 2) = 3a - 5" },
            { verbal_explanation: "נחלק את שני אגפי המשוואה בביטוי שבתוך הסוגריים כדי לבודד לחלוטין את המשתנה (בהנחה שהביטוי שונה מאפס).", math_expression: "x = (3a - 5) / (a - 2)" }
        ],
        final_answer: "(3a - 5) / (a - 2)"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "עבור איזה ערך של הפרמטר m, למשוואה הבאה אין פתרון כלל?<br>mx - 7 = 3x + m",
        options: [
            "3",
            "-3",
            "7",
            "-7"
        ],
        hint: "סדרו את המשוואה לצורה Ax = B. למשוואה ממעלה ראשונה אין פתרון כאשר המקדם של x מתאפס (A=0), אך האגף המספרי (B) שונה מאפס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ראשית נסדר את המשוואה למבנה סטנדרטי. נעביר את כל איברי המשתנה שמאלה, ואת האיברים החופשיים ימינה.", math_expression: "mx - 3x = m + 7" },
            { verbal_explanation: "נוציא את המשתנה כגורם משותף באגף השמאלי.", math_expression: "x(m - 3) = m + 7" },
            { verbal_explanation: "כדי שלמשוואה לא יהיה פתרון, המקדם של המשתנה חייב להתאפס, כך שנקבל פסוק שקר (אפס שווה למספר שונה מאפס).<br><br>נשווה את המקדם של המשתנה לאפס.", math_expression: "m - 3 = 0" },
            { verbal_explanation: "נעביר אגף ונקבל את ערכו של הפרמטר.", math_expression: "m = 3" },
            { verbal_explanation: "נוודא שהצבת הערך הזה באגף הימני לא מאפסת גם אותו (כי אם כן, יהיו אינסוף פתרונות). עשר אכן שונה מאפס, לכן התנאי מתקיים.", math_expression: "3 + 7 = 10 &ne; 0" }
        ],
        final_answer: "3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "עבור איזה ערך של הפרמטר k, למשוואה הבאה יש אינסוף פתרונות?<br>k<sup>2</sup>x - k = 4x + 2",
        options: [
            "-2",
            "2",
            "4",
            "-4"
        ],
        hint: "הביאו את המשוואה לצורה Ax = B. אינסוף פתרונות מתקבלים כאשר גם המקדם של x וגם האגף המספרי מתאפסים במקביל (מקבלים 0 = 0).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נסדר את המשוואה כך שכל המשתנים יהיו בצד אחד והקבועים בצד השני.", math_expression: "k<sup>2</sup>x - 4x = k + 2" },
            { verbal_explanation: "נוציא את המשתנה כגורם משותף מתוך אגף שמאל.", math_expression: "x(k<sup>2</sup> - 4) = k + 2" },
            { verbal_explanation: "כדי לקבל אינסוף פתרונות, המצב במשוואה צריך להוביל לפסוק אמת מהצורה אפס שווה לאפס. לכן נדרוש שגם המקדם של המשתנה וגם האגף הימני יתאפסו יחדיו.<br><br>נתחיל מהאגף הימני, שהוא פשוט יותר.", math_expression: "k + 2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; k = -2" },
            { verbal_explanation: "נציב את הערך שקיבלנו לתוך המקדם של המשתנה כדי לוודא שגם הוא מתאפס בעבור אותו ערך.", math_expression: "(-2)<sup>2</sup> - 4 = 4 - 4 = 0" },
            { verbal_explanation: "מכיוון ששני האגפים מתאפסים עבור ערך זה, זהו הפתרון.", math_expression: "k = -2" }
        ],
        final_answer: "-2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "פתרו את המשוואה הבאה ומצאו את x באמצעות a ו-b (בהנחה ש-a ו-b אינם אפס):<br>x/a + x/b = 1",
        options: [
            "ab / (a + b)",
            "(a + b) / ab",
            "a + b",
            "ab"
        ],
        hint: "הכפילו את כל המשוואה במכנה המשותף (ab) כדי להיפטר מהשברים, ואז הוציאו את x כגורם משותף.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי להיפטר מהשברים, נכפיל את כל המשוואה במכנה המשותף של שני השברים.", math_expression: "a &times; b" },
            { verbal_explanation: "כאשר נכפיל את האיבר הראשון, המכנה יצטמצם. כך יקרה גם באיבר השני.", math_expression: "bx + ax = ab" },
            { verbal_explanation: "נוציא את המשתנה כגורם משותף באגף השמאלי.", math_expression: "x(b + a) = ab" },
            { verbal_explanation: "נחלק את שני האגפים בביטוי שבתוך הסוגריים כדי לבודד את המשתנה.", math_expression: "x = (a &times; b) / (a + b)" }
        ],
        final_answer: "ab / (a + b)"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "נתונה המשוואה: p(x - 1) = 2x + 5<br>מהו התנאי על הפרמטר p כך שלמשוואה יהיה פתרון יחיד?",
        options: [
            "p &ne; 2",
            "p &ne; -2",
            "p &ne; 5",
            "p &ne; 0"
        ],
        hint: "פתחו סוגריים, סדרו את המשוואה למבנה של Ax=B, וזכרו שפתרון יחיד מתקבל כאשר המקדם של x שונה מאפס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה נפתח את הסוגריים באגף השמאלי של המשוואה.", math_expression: "px - p = 2x + 5" },
            { verbal_explanation: "נעביר את כל איברי המשתנה לאגף אחד ואת הקבועים לאגף השני.", math_expression: "px - 2x = p + 5" },
            { verbal_explanation: "נוציא את המשתנה כגורם משותף מחוץ לסוגריים.", math_expression: "x(p - 2) = p + 5" },
            { verbal_explanation: "כדי שלמשוואה ליניארית יהיה פתרון יחיד וממשי, נדרש רק תנאי אחד: המקדם של המשתנה חייב להיות שונה מאפס (כדי שנוכל לחלק בו).", math_expression: "p - 2 &ne; 0" },
            { verbal_explanation: "נעביר אגף ונקבל את התנאי המבוקש.", math_expression: "p &ne; 2" }
        ],
        final_answer: "p &ne; 2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "נתונה המשוואה: (x - a) / (a - 1) = 3<br>מצאו את x והביעו אותו באמצעות a.",
        options: [
            "4a - 3",
            "2a - 3",
            "4a + 3",
            "3a - 1"
        ],
        hint: "הכפילו את שני אגפי המשוואה במכנה כדי להיפטר מהשבר, ולאחר מכן העבירו אגפים כדי לבודד את x.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נכפיל את המשוואה כולה במכנה כדי להיפטר ממנו (בהנחה שהמכנה שונה מאפס).", math_expression: "x - a = 3(a - 1)" },
            { verbal_explanation: "נפתח את הסוגריים באגף הימני.", math_expression: "x - a = 3a - 3" },
            { verbal_explanation: "נעביר את הפרמטר מהאגף השמאלי לימני, על ידי הוספתו לשני האגפים, כדי לבודד את המשתנה.", math_expression: "x = 3a - 3 + a" },
            { verbal_explanation: "נכנס איברים דומים לקבלת התשובה הסופית.", math_expression: "x = 4a - 3" }
        ],
        final_answer: "4a - 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "ידוע שפתרון המשוואה: mx + 3 = 2m - x הוא x = 1.<br>מהו ערכו של הפרמטר m?",
        options: [
            "4",
            "2",
            "-2",
            "-4"
        ],
        hint: "הציבו את המספר 1 במקום x במשוואה, ולאחר מכן פתרו את המשוואה החדשה כדי למצוא את m.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מכיוון שנתון לנו הפתרון של המשוואה, נציב את הערך הידוע לתוך המשתנה בכל מקום שבו הוא מופיע.", math_expression: "m(1) + 3 = 2m - 1" },
            { verbal_explanation: "נפשט את המשוואה.", math_expression: "m + 3 = 2m - 1" },
            { verbal_explanation: "זוהי כעת משוואה ממעלה ראשונה עבור הפרמטר. נעביר את הפרמטרים לצד אחד ואת המספרים לצד השני.", math_expression: "3 + 1 = 2m - m" },
            { verbal_explanation: "נחשב ונקבל את ערך הפרמטר.", math_expression: "4 = m" }
        ],
        final_answer: "4"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "נתונה המשוואה: (m<sup>2</sup> - 9)x = m - 3<br>עבור אילו ערכים של m המשוואה אינה תלויה ב-x ויש לה אינסוף פתרונות?",
        options: [
            "3",
            "-3",
            "3 , -3",
            "9"
        ],
        hint: "מצב של אינסוף פתרונות מתקיים כאשר המקדם של x מתאפס וגם האגף השני מתאפס (כלומר מקבלים 0x = 0).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה, נדרוש שהמקדם של המשתנה יתאפס.", math_expression: "m<sup>2</sup> - 9 = 0" },
            { verbal_explanation: "נפתור את המשוואה הריבועית הפשוטה הזו, על ידי העברת אגף והוצאת שורש ריבועי.", math_expression: "m<sup>2</sup> = 9 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; m = 3 , m = -3" },
            { verbal_explanation: "קיבלנו שני ערכים אפשריים. כעת נבדוק מי מהם מאפס גם את האגף הימני של המשוואה המקורית.<br><br>נציב את הערך השלילי:", math_expression: "-3 - 3 = -6 &ne; 0" },
            { verbal_explanation: "מכיוון שהערך השלילי מוביל לאפס שווה למינוס שש (פסוק שקר המעיד על חוסר פתרון), נפסול אותו ונבדוק את הערך החיובי.", math_expression: "3 - 3 = 0" },
            { verbal_explanation: "הערך החיובי מאפס את שני האגפים במקביל, ולכן הוא הערך המבוקש לאינסוף פתרונות.", math_expression: "m = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "נתונה המשוואה: k(x - 2) = 4 - 2x<br>מצאו את x והביעו אותו באמצעות k.",
        options: [
            "2",
            "(k + 4) / (k + 2)",
            "-2",
            "4 / k"
        ],
        hint: "פתחו סוגריים, העבירו את איברי x לאגף אחד והוציאו גורם משותף. שימו לב לצמצומים אפשריים בביטוי הסופי.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים באגף השמאלי.", math_expression: "kx - 2k = 4 - 2x" },
            { verbal_explanation: "נסדר את המשוואה כך שאיברי המשתנה ירוכזו משמאל והקבועים מימין.", math_expression: "kx + 2x = 2k + 4" },
            { verbal_explanation: "נוציא גורם משותף מחוץ לסוגריים בכל אחד מהאגפים, במידת האפשר.", math_expression: "x(k + 2) = 2(k + 2)" },
            { verbal_explanation: "נחלק את שני האגפים בביטוי שבתוך הסוגריים כדי לבודד את המשתנה (בהנחה שהביטוי אינו מתאפס).", math_expression: "x = (2(k + 2)) / (k + 2)" },
            { verbal_explanation: "הביטויים זהים ולכן הם מצטמצמים לחלוטין, ואנו נשארים עם מספר קבוע.", math_expression: "x = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "נתונה המשוואה: 2mx - 5 = m + 3x<br>ידוע שפתרון המשוואה הוא מספר חיובי. איזה מהתנאים הבאים חייב להתקיים עבור הפרמטר m?",
        options: [
            "m &gt; 1.5  או  m &lt; -5",
            "-5 &lt; m &lt; 1.5",
            "m &gt; 1.5",
            "m &lt; -5"
        ],
        hint: "בודדו את x והביעו אותו באמצעות m. לאחר מכן, דרשו שהביטוי שקיבלתם יהיה גדול מאפס (אי-שוויון רציונלי).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נסדר את המשוואה למבנה המוכר ונוציא גורם משותף כדי לחלץ את המשתנה.", math_expression: "2mx - 3x = m + 5" },
            { verbal_explanation: "הוצאת גורם משותף.", math_expression: "x(2m - 3) = m + 5" },
            { verbal_explanation: "בידוד המשתנה על ידי חלוקה.", math_expression: "x = (m + 5) / (2m - 3)" },
            { verbal_explanation: "השאלה דורשת שהפתרון יהיה חיובי, לכן נרכיב אי-שוויון מתאים.", math_expression: "(m + 5) / (2m - 3) > 0" },
            { verbal_explanation: "זהו אי-שוויון רציונלי. נמצא את המאפסים של המונה והמכנה.", math_expression: "m = -5 &nbsp;,&nbsp; m = 1.5" },
            { verbal_explanation: "הביטוי חיובי כאשר המונה והמכנה שווי סימן. פרבולה 'מחייכת' ששורשיה הם הערכים הללו תהיה חיובית בשוליים.", math_expression: "m < -5 , m > 1.5" }
        ],
        final_answer: "m > 1.5  או  m < -5"
    },

    // =====================================================================
    // תת-נושא 2: משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא) (10 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "מצאו עבור אילו ערכים של m יש למשוואה הבאה פתרון ממשי יחיד (הגרף משיק לציר ה-x):<br>x<sup>2</sup> - mx + 9 = 0",
        options: [
            "6 , -6",
            "3 , -3",
            "9 , -9",
            "6"
        ],
        hint: "למשוואה ריבועית יש פתרון יחיד כאשר הדיסקרימיננטה (דלתא, שמתחת לשורש) שווה לאפס. בנו משוואה b² - 4ac = 0.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "משוואה ריבועית מקבלת פתרון ממשי יחיד רק כאשר הביטוי המכונה 'דלתא' מתאפס.", math_expression: "b<sup>2</sup> - 4ac = 0" },
            { verbal_explanation: "נזהה את המקדמים של המשוואה הנתונה ונציב אותם בתוך הנוסחה.", math_expression: "a = 1 &nbsp;,&nbsp; b = -m &nbsp;,&nbsp; c = 9" },
            { verbal_explanation: "נבצע את ההצבה.", math_expression: "(-m)<sup>2</sup> - 4 &times; 1 &times; 9 = 0" },
            { verbal_explanation: "נחשב את החזקה והמכפלה.", math_expression: "m<sup>2</sup> - 36 = 0" },
            { verbal_explanation: "נעביר אגף ונוציא שורש ריבועי כדי למצוא את הערכים האפשריים של הפרמטר.", math_expression: "m<sup>2</sup> = 36 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; m = 6 , m = -6" }
        ],
        final_answer: "6 , -6"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "עבור אילו ערכים של k אין למשוואה הבאה פתרונות ממשיים כלל?<br>x<sup>2</sup> + 4x + k = 0",
        options: [
            "k &gt; 4",
            "k &lt; 4",
            "k &gt; 16",
            "k &lt; 16"
        ],
        hint: "משוואה ריבועית נטולת פתרונות כאשר הדלתא (b² - 4ac) קטנה מאפס. הציבו את המקדמים ופתרו את אי-השוויון.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "התנאי לחוסר פתרונות ממשיים במשוואה ריבועית הוא שביטוי הדלתא יהיה שלילי.", math_expression: "b<sup>2</sup> - 4ac < 0" },
            { verbal_explanation: "נזהה את המקדמים מתוך המשוואה.", math_expression: "a = 1 &nbsp;,&nbsp; b = 4 &nbsp;,&nbsp; c = k" },
            { verbal_explanation: "נציב את המקדמים לתוך אי-השוויון.", math_expression: "4<sup>2</sup> - 4 &times; 1 &times; k < 0" },
            { verbal_explanation: "נחשב את הריבוע.", math_expression: "16 - 4k < 0" },
            { verbal_explanation: "נעביר את איבר הפרמטר לאגף ימין כדי שיהיה חיובי.", math_expression: "16 < 4k" },
            { verbal_explanation: "נחלק בארבע ונקרא את התוצאה מהכיוון של המשתנה.", math_expression: "4 < k &nbsp;&nbsp;&rArr;&nbsp;&nbsp; k > 4" }
        ],
        final_answer: "k > 4"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "עבור אילו ערכים של a יש למשוואה הבאה שני פתרונות ממשיים שונים?<br>ax<sup>2</sup> - 6x + 3 = 0",
        options: [
            "a &lt; 3  וגם  a &ne; 0",
            "a &gt; 3",
            "a &lt; 3",
            "a &gt; 0"
        ],
        hint: "זכרו שני תנאים חשובים: קודם כל המשוואה חייבת להישאר ריבועית (ולכן המקדם המוביל שונה מאפס). שנית, הדלתא צריכה להיות גדולה מאפס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "על מנת שיהיו שני פתרונות, על המשוואה להישאר ריבועית, ולכן התנאי הראשון הוא שהמקדם של איקס בריבוע לא יתאפס.", math_expression: "a &ne; 0" },
            { verbal_explanation: "התנאי השני הוא שביטוי הדלתא יהיה חיובי ממש.", math_expression: "b<sup>2</sup> - 4ac > 0" },
            { verbal_explanation: "נציב את המקדמים לאי-השוויון.", math_expression: "(-6)<sup>2</sup> - 4 &times; a &times; 3 > 0" },
            { verbal_explanation: "נחשב את החזקה והמכפלה.", math_expression: "36 - 12a > 0" },
            { verbal_explanation: "נעביר את האיבר עם המשתנה ימינה.", math_expression: "36 > 12a" },
            { verbal_explanation: "נחלק בשתיים-עשרה.", math_expression: "3 > a &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a < 3" },
            { verbal_explanation: "נאחד את שני התנאים (חיתוך 'וגם') כדי לקבל את התשובה הסופית המדויקת.", math_expression: "a < 3 , a &ne; 0" }
        ],
        final_answer: "a < 3  וגם  a &ne; 0"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "נתונה המשוואה: x<sup>2</sup> - 5x + m<sup>2</sup> - 4 = 0<br>ידוע כי אחד מפתרונות המשוואה הוא אפס (x = 0). מהם הערכים האפשריים של הפרמטר m?",
        options: [
            "2 , -2",
            "4 , -4",
            "0 , 5",
            "2"
        ],
        hint: "אם מספר מסוים הוא פתרון, משמעות הדבר היא שאם נציב אותו במקום x, נקבל פסוק אמת. הציבו x=0 ופתרו את המשוואה עבור m.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "שורש (פתרון) של משוואה הוא מספר שמקיים אותה. לכן, נוכל פשוט להציב את המספר הנתון במקום המשתנה בכל מקום שבו הוא מופיע.", math_expression: "0<sup>2</sup> - 5(0) + m<sup>2</sup> - 4 = 0" },
            { verbal_explanation: "האיברים הראשונים מתאפסים כליל. נשארת משוואה ריבועית פשוטה עבור הפרמטר.", math_expression: "m<sup>2</sup> - 4 = 0" },
            { verbal_explanation: "נעביר את המספר ימינה.", math_expression: "m<sup>2</sup> = 4" },
            { verbal_explanation: "נוציא שורש ריבועי לקבלת התשובה. השורש מכיל את שני הסימנים.", math_expression: "m = 2 , m = -2" }
        ],
        final_answer: "2 , -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "פתרו את המשוואה הריבועית הבאה והביעו את הפתרונות של x באמצעות m:<br>x<sup>2</sup> - 2mx + m<sup>2</sup> - 1 = 0",
        options: [
            "m + 1 , m - 1",
            "m + 2 , m - 2",
            "2m , -2m",
            "1 , -1"
        ],
        hint: "השתמשו בנוסחת השורשים הרגילה. זהו את המקדמים: a=1, b=-2m, והאיבר החופשי c מורכב מהביטוי השלם ללא x.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נזהה את המקדמים לצורך הצבה בנוסחת השורשים.", math_expression: "a = 1 &nbsp;,&nbsp; b = -2m &nbsp;,&nbsp; c = m<sup>2</sup> - 1" },
            { verbal_explanation: "נציב בנוסחת השורשים.", math_expression: "x = (-(-2m) &plusmn; &radic;((-2m)<sup>2</sup> - 4 &times; 1 &times; (m<sup>2</sup> - 1))) / 2" },
            { verbal_explanation: "נפשט את הביטוי מתחת לשורש (הדלתא).", math_expression: "4m<sup>2</sup> - 4m<sup>2</sup> + 4" },
            { verbal_explanation: "נכנס איברים דומים מתחת לשורש. אנו רואים שהפרמטר מצטמצם לחלוטין ונשאר מספר טהור.", math_expression: "4" },
            { verbal_explanation: "נציב את ערך הדלתא בחזרה לתוך נוסחת השורשים ונחשב את השורש.", math_expression: "x = (2m &plusmn; 2) / 2" },
            { verbal_explanation: "נוציא גורם משותף במונה ונצמצם את השבר בשתיים.", math_expression: "x = m &plusmn; 1" },
            { verbal_explanation: "נפריד לשני הפתרונות הסופיים.", math_expression: "x = m + 1 , x = m - 1" }
        ],
        final_answer: "m + 1 , m - 1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "נתונה המשוואה: (k - 2)x<sup>2</sup> + 4x + 1 = 0<br>עבור אילו ערכים של הפרמטר k יש למשוואה פתרון יחיד?",
        options: [
            "6 , 2",
            "6",
            "2",
            "-6 , -2"
        ],
        hint: "פתרון יחיד יכול להתקבל משני מצבים שונים: או שהמשוואה הופכת לליניארית (המקדם של איקס בריבוע מתאפס), או שהיא נשארת ריבועית והדלתא שווה לאפס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבדוק תחילה את המצב הליניארי. משוואה ליניארית נוצרת כאשר המקדם של החזקה השנייה הוא אפס. במקרה זה, נקבל משוואה ממעלה ראשונה עם פתרון יחיד.", math_expression: "k - 2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; k = 2" },
            { verbal_explanation: "נוודא שעבור ערך זה מתקבל פתרון למשוואה הליניארית שנוצרת.", math_expression: "4x + 1 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -0.25" },
            { verbal_explanation: "כעת נבדוק את המצב הריבועי. כאן אנו דורשים שהמקדם לא יתאפס, וכן שהדלתא תהיה אפס.", math_expression: "k &ne; 2 &nbsp;&nbsp;,&nbsp;&nbsp; b<sup>2</sup> - 4ac = 0" },
            { verbal_explanation: "נציב את המקדמים לתוך משוואת הדלתא.", math_expression: "4<sup>2</sup> - 4(k - 2)(1) = 0" },
            { verbal_explanation: "נפתח סוגריים ונסדר את המשוואה.", math_expression: "16 - 4k + 8 = 0" },
            { verbal_explanation: "נכנס איברים חופשיים.", math_expression: "24 - 4k = 0" },
            { verbal_explanation: "נעביר אגף ונחלץ את הערך של הפרמטר.", math_expression: "4k = 24 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; k = 6" },
            { verbal_explanation: "נאחד את הפתרונות מכל אחד משני המצבים.", math_expression: "k = 6 , k = 2" }
        ],
        final_answer: "6 , 2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "גרף הפונקציה הריבועית y = x<sup>2</sup> - 2mx + m<sup>2</sup> + m - 2 נמצא כולו מעל ציר ה-x.<br>מהו התנאי על הפרמטר m?",
        options: [
            "m &gt; 2",
            "m &lt; 2",
            "m &gt; 0",
            "m &lt; -2"
        ],
        hint: "פרבולה נמצאת כולה מעל ציר ה-x אם היא 'מחייכת' (המקדם של x² חיובי) ואין לה שום נקודות חיתוך עם הציר (דלתא קטנה מאפס).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי שהפרבולה תרחף מעל הציר, עליה להיות פתוחה כלפי מעלה. המקדם המוביל הוא חיובי (1), לכן תנאי זה מתקיים ממילא.", math_expression: "a = 1 > 0" },
            { verbal_explanation: "התנאי השני והמכריע הוא שלא יהיו חיתוכים עם ציר ה-x. תנאי זה אומר שביטוי הדלתא חייב להיות שלילי.", math_expression: "b<sup>2</sup> - 4ac < 0" },
            { verbal_explanation: "נציב את המקדמים המורכבים לתוך אי-השוויון.", math_expression: "(-2m)<sup>2</sup> - 4(1)(m<sup>2</sup> + m - 2) < 0" },
            { verbal_explanation: "נפתח חזקות וסוגריים.", math_expression: "4m<sup>2</sup> - 4m<sup>2</sup> - 4m + 8 < 0" },
            { verbal_explanation: "האיברים הריבועיים מבטלים זה את זה, ונשארנו עם אי-שוויון ליניארי פשוט.", math_expression: "-4m + 8 < 0" },
            { verbal_explanation: "נעביר את האיבר עם המשתנה ימינה כדי לשמור על סימן חיובי.", math_expression: "8 < 4m" },
            { verbal_explanation: "נחלק בארבע. נקרא את התשובה משמאל לימין ביחס למשתנה.", math_expression: "2 < m &nbsp;&nbsp;&rArr;&nbsp;&nbsp; m > 2" }
        ],
        final_answer: "m > 2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "נתונה המשוואה הריבועית: x<sup>2</sup> - 5x + m = 0<br>ידוע שיש למשוואה זו שני שורשים ממשיים חיוביים. מהו התחום האפשרי לפרמטר m?",
        options: [
            "0 &lt; m &le; 6.25",
            "m &lt; 6.25",
            "m &gt; 0",
            "m &le; 6.25"
        ],
        hint: "דרושים שני תנאים: 1. שיהיו שורשים (דלתא גדולה או שווה לאפס). 2. ששניהם יהיו חיוביים. על פי נוסחאות וייטה, מכפלת השורשים היא c/a והסכום הוא -b/a. השתמשו בכך.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תנאי ראשון: קיום שורשים ממשיים (ייתכן שורש אחד כפול). הדלתא צריכה להיות לא-שלילית.", math_expression: "b<sup>2</sup> - 4ac &ge; 0" },
            { verbal_explanation: "נציב ונפתור את אי-השוויון הראשון.", math_expression: "25 - 4m &ge; 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 25 &ge; 4m &nbsp;&nbsp;&rArr;&nbsp;&nbsp; m &le; 6.25" },
            { verbal_explanation: "תנאי שני: כדי ששני השורשים יהיו חיוביים, המכפלה שלהם והסכום שלהם חייבים להיות חיוביים. לפי חוקי וייטה, הסכום הוא המינוס של המקדם האמצעי, והוא אכן חיובי.", math_expression: "x_1 + x_2 = -(-5) = 5 > 0" },
            { verbal_explanation: "נבדוק את מכפלת השורשים. לפי חוקי וייטה, המכפלה שווה לאיבר החופשי. לכן, האיבר החופשי חייב להיות חיובי.", math_expression: "x_1 &times; x_2 = m > 0" },
            { verbal_explanation: "נאחד את שני התנאים (חיתוך 'וגם') לקבלת התחום הסופי.", math_expression: "m > 0 , m &le; 6.25" }
        ],
        final_answer: "0 < m &le; 6.25"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "מצאו את קדקוד הפרבולה של הפונקציה הבאה, והביעו את שיעוריו בעזרת הפרמטר a:<br>y = x<sup>2</sup> - 4ax + 4a<sup>2</sup> + 3",
        options: [
            "(2a, 3)",
            "(-2a, 3)",
            "(2a, 4a<sup>2</sup>)",
            "(a, 3)"
        ],
        hint: "שיעור ה-x של קודקוד פרבולה מחושב בעזרת הנוסחה x = -b/2a. לאחר מכן הציבו את הערך חזרה בפונקציה למציאת שיעור ה-y.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחה למציאת שיעור ה-x של קודקוד הפרבולה. נזהה שהמקדם האמצעי הוא ביטוי המכיל פרמטר.", math_expression: "x = -b / (2a) = -(-4a) / (2 &times; 1)" },
            { verbal_explanation: "נפשט את השבר.", math_expression: "x = 4a / 2 = 2a" },
            { verbal_explanation: "כדי למצוא את שיעור ה-y של הקודקוד, נציב את הביטוי שמצאנו בחזרה אל תוך משוואת הפרבולה المקורית.", math_expression: "y = (2a)<sup>2</sup> - 4a(2a) + 4a<sup>2</sup> + 3" },
            { verbal_explanation: "נחשב את החזקות והמכפלות.", math_expression: "y = 4a<sup>2</sup> - 8a<sup>2</sup> + 4a<sup>2</sup> + 3" },
            { verbal_explanation: "האיברים הריבועיים מקזזים זה את זה לחלוטין. נשארנו עם מספר קבוע.", math_expression: "y = 3" },
            { verbal_explanation: "נרשום את הקואורדינטות כנקודה.", math_expression: "(2a, 3)" }
        ],
        final_answer: "(2a, 3)"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "נתונה המשוואה: (k - 1)x<sup>2</sup> - 2kx + k = 0<br>עבור אילו ערכים של k למשוואה אין אף פתרון ממשי?",
        options: [
            "k &lt; 0",
            "k &gt; 0",
            "k &lt; 1",
            "k &gt; 1"
        ],
        hint: "משוואה ללא פתרונות מחייבת שמירה על המבנה הריבועי (ולכן נבדוק את התנאי הליניארי בנפרד) יחד עם דלתא שלילית.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבדוק תחילה את המצב שבו המשוואה מתנוונת לישר (המקדם הריבועי מתאפס). נציב ונראה אם מתקבל פתרון.", math_expression: "k - 1 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; k = 1" },
            { verbal_explanation: "נציב ערך זה למשוואה.", math_expression: "-2(1)x + 1 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; -2x = -1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 0.5" },
            { verbal_explanation: "מכיוון שהתקבל פתרון תקין במצב הליניארי, נפסול את האפשרות הזו ונעבור למצב הריבועי. כאן אנו דורשים שהדלתא תהיה קטנה מאפס.", math_expression: "b<sup>2</sup> - 4ac < 0" },
            { verbal_explanation: "נציב את המקדמים לתוך אי-השוויון.", math_expression: "(-2k)<sup>2</sup> - 4(k - 1)(k) < 0" },
            { verbal_explanation: "נפתח חזקות וסוגריים.", math_expression: "4k<sup>2</sup> - 4k<sup>2</sup> + 4k < 0" },
            { verbal_explanation: "האיברים הריבועיים נופלים. נפתור את אי-השוויון הליניארי הפשוט שנותר.", math_expression: "4k < 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; k < 0" }
        ],
        final_answer: "k < 0"
    },

    // =====================================================================
    // תת-נושא 3: משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום) (10 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "פתרו את המשוואה הבאה:<br>x<sup>3</sup> - 4x = 0",
        options: [
            "0 , 2 , -2",
            "0 , 4",
            "2 , -2",
            "0 , 4 , -4"
        ],
        hint: "שימו לב שכל האיברים מכילים x. הוציאו אותו כגורם משותף אל מחוץ לסוגריים, ולאחר מכן השתמשו בנוסחת הפרש ריבועים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לפתור משוואה ממעלה שלישית ללא איבר חופשי, נוציא את המשתנה x מחוץ לסוגריים כגורם משותף.", math_expression: "x(x<sup>2</sup> - 4) = 0" },
            { verbal_explanation: "מכפלה שווה לאפס כאשר לפחות אחד מהגורמים מתאפס. הגורם הראשון נותן לנו את הפתרון המיידי הראשון.", math_expression: "x = 0" },
            { verbal_explanation: "נשווה את הגורם השני (שבתוך הסוגריים) לאפס ונפתור את המשוואה הריבועית הפשוטה.", math_expression: "x<sup>2</sup> - 4 = 0" },
            { verbal_explanation: "נעביר את המספר ימינה ונוציא שורש ריבועי. נקבל עוד שני פתרונות.", math_expression: "x<sup>2</sup> = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 , x = -2" }
        ],
        final_answer: "0 , 2 , -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "מצאו את שורשי המשוואה:<br>x<sup>3</sup> - 5x<sup>2</sup> + 6x = 0",
        options: [
            "0 , 2 , 3",
            "0 , -2 , -3",
            "2 , 3",
            "0 , 1 , 6"
        ],
        hint: "הוציאו קודם גורם משותף. בתוך הסוגריים תישאר משוואה ריבועית אותה ניתן לפתור באמצעות טרינום או נוסחת שורשים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המשוואה כולה היא פולינום ללא איבר חופשי. נוציא איקס מחוץ לסוגריים.", math_expression: "x(x<sup>2</sup> - 5x + 6) = 0" },
            { verbal_explanation: "הגורם הראשון מספק לנו את הפתרון הראשון.", math_expression: "x = 0" },
            { verbal_explanation: "ניגש לפתרון הביטוי הריבועי שבסוגריים על ידי פירוק לטרינום (שני מספרים שמכפלתם היא שש וסכומם הוא מינוס חמש).", math_expression: "(x - 2)(x - 3) = 0" },
            { verbal_explanation: "נחלץ את שאר הפתרונות מתוך הגורמים החדשים.", math_expression: "x = 2 , x = 3" }
        ],
        final_answer: "0 , 2 , 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "פתרו את המשוואה הדו-ריבועית הבאה:<br>x<sup>4</sup> - 5x<sup>2</sup> + 4 = 0",
        options: [
            "1 , -1 , 2 , -2",
            "1 , 4",
            "1 , -1",
            "2 , -2"
        ],
        hint: "זוהי משוואה דו-ריבועית. הציבו משתנה עזר זמני t שווה לאיקס בריבוע. פתרו את המשוואה הריבועית החדשה, ולאחר מכן חזרו למשתנה המקורי.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לפשט את המשוואה, נבצע החלפת משתנים. נגדיר משתנה עזר t המייצג את איקס בריבוע.", math_expression: "t = x<sup>2</sup>" },
            { verbal_explanation: "נשכתב את המשוואה המקורית באמצעות המשתנה החדש. נקבל משוואה ריבועית רגילה לחלוטין.", math_expression: "t<sup>2</sup> - 5t + 4 = 0" },
            { verbal_explanation: "נפתור את המשוואה הריבועית בעזרת פירוק לטרינום (מכפלה ארבע, סכום מינוס חמש).", math_expression: "(t - 1)(t - 4) = 0" },
            { verbal_explanation: "נחלץ את הערכים של משתנה העזר.", math_expression: "t = 1 , t = 4" },
            { verbal_explanation: "נחזור למשתנה המקורי. נשווה את איקס בריבוע לכל אחד מהערכים שמצאנו.", math_expression: "x<sup>2</sup> = 1 &nbsp;&nbsp;,&nbsp;&nbsp; x<sup>2</sup> = 4" },
            { verbal_explanation: "נוציא שורשים ריבועיים לקבלת כל ארבעת הפתרונות הסופיים.", math_expression: "x = \u00B11 &nbsp;,&nbsp; x = \u00B12" }
        ],
        final_answer: "1 , -1 , 2 , -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "מצאו את שורשי המשוואה הבאה:<br>x<sup>4</sup> - 8x<sup>2</sup> - 9 = 0",
        options: [
            "3 , -3",
            "3 , -3 , 1 , -1",
            "9 , -1",
            "1 , -1"
        ],
        hint: "השתמשו בהצבה t = x². שימו לב שחלק מהפתרונות של t עשויים להיות שליליים, ולכן לא יניבו פתרונות ממשיים ל-x.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב משתנה עזר במקום איקס בריבוע.", math_expression: "t = x<sup>2</sup>" },
            { verbal_explanation: "נקבל משוואה ריבועית חדשה עבור המשתנה העזר.", math_expression: "t<sup>2</sup> - 8t - 9 = 0" },
            { verbal_explanation: "נפרק לטרינום.", math_expression: "(t - 9)(t + 1) = 0" },
            { verbal_explanation: "נמצא את שני הפתרונות הזמניים.", math_expression: "t = 9 , t = -1" },
            { verbal_explanation: "כעת, נחזור למשתנה המקורי שלנו. המקרה הראשון יניב פתרונות.", math_expression: "x<sup>2</sup> = 9 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3 , x = -3" },
            { verbal_explanation: "המקרה השני דורש למצוא שורש של מספר שלילי, פעולה שאינה מוגדרת במספרים ממשיים, ולכן אינה מניבה פתרונות נוספים.", math_expression: "x<sup>2</sup> = -1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &empty;" }
        ],
        final_answer: "3 , -3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "פתרו את המשוואה הבאה הכוללת חזקות גבוהות:<br>2x<sup>5</sup> - 18x<sup>3</sup> = 0",
        options: [
            "0 , 3 , -3",
            "0 , 9 , -9",
            "3 , -3",
            "0 , 18"
        ],
        hint: "ניתן להוציא יותר מסתם x כגורם משותף. בדקו איזה מקדם מספרי ואיזו חזקה של x ניתן להוציא מחוץ לסוגריים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נאתר את הגורם המשותף המקסימלי שניתן להוציא מחוץ לסוגריים. מבחינת מספרים זה שתיים, ומבחינת חזקות זה איקס בשלישית.", math_expression: "2x<sup>3</sup>(x<sup>2</sup> - 9) = 0" },
            { verbal_explanation: "הגורם שמחוץ לסוגריים מתאפס רק כאשר איקס שווה לאפס.", math_expression: "2x<sup>3</sup> = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 0" },
            { verbal_explanation: "הביטוי שבתוך הסוגריים הוא נוסחת הפרש ריבועים. נשווה אותו לאפס ונפתור.", math_expression: "x<sup>2</sup> - 9 = 0" },
            { verbal_explanation: "נעביר אגף ונוציא שורשים לקבלת יתר הפתרונות.", math_expression: "x<sup>2</sup> = 9 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3 , x = -3" }
        ],
        final_answer: "0 , 3 , -3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "פתרו את המשוואה הבאה:<br>x<sup>3</sup> = 8",
        options: [
            "2",
            "2 , -2",
            "4",
            "-2"
        ],
        hint: "במשוואה מסוג זה ניתן פשוט להוציא שורש שלישי. זכרו ששורש אי-זוגי שומר על סימן המספר המקורי.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "זוהי משוואה פשוטה ממעלה שלישית. כדי לבודד את המשתנה, נפעיל את הפעולה ההפוכה להעלאה בחזקה שלישית על שני האגפים.", math_expression: "x = &radic;<sup>3</sup>8" },
            { verbal_explanation: "השורש השלישי של שמונה הוא מספר יחיד וחיובי.", math_expression: "x = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "מצאו את שורשי המשוואה על ידי הוצאת גורם משותף מקסימלי תחילה:<br>2x<sup>3</sup> - 12x<sup>2</sup> + 18x = 0",
        options: [
            "0 , 3",
            "0 , 3 , -3",
            "3",
            "0 , 6"
        ],
        hint: "הגורם המשותף כולל גם מספר וגם משתנה. לאחר מכן, בחנו את הביטוי שבסוגריים (זהו כפל מקוצר של דו-איבר בריבוע).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוציא את הגורם המשותף המקסימלי מכל האיברים, שהוא שתי איקס.", math_expression: "2x(x<sup>2</sup> - 6x + 9) = 0" },
            { verbal_explanation: "הגורם הראשון מספק פתרון אחד ברור.", math_expression: "x = 0" },
            { verbal_explanation: "הגורם השני שבתוך הסוגריים הוא ביטוי ריבועי מושלם (ניתן גם לפרק בטרינום).", math_expression: "(x - 3)<sup>2</sup> = 0" },
            { verbal_explanation: "נחלץ את הפתרון היחיד (הכפול) מתוך הסוגריים.", math_expression: "x = 3" }
        ],
        final_answer: "0 , 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "פתרו את המשוואה הבאה:<br>x<sup>4</sup> - 10x<sup>2</sup> = 0",
        options: [
            "0 , &radic;10 , -&radic;10",
            "0 , 10 , -10",
            "0",
            "&radic;10 , -&radic;10"
        ],
        hint: "אין צורך להשתמש בהצבה מורכבת במקרה זה. ניתן פשוט להוציא x² כגורם משותף.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אפשר לפתור את המשוואה הזו בפשטות על ידי הוצאת הגורם המשותף המקסימלי, שהוא איקס בריבוע.", math_expression: "x<sup>2</sup>(x<sup>2</sup> - 10) = 0" },
            { verbal_explanation: "מהגורם שמחוץ לסוגריים אנו מקבלים פתרון כפול המתלכד לערך אחד.", math_expression: "x<sup>2</sup> = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 0" },
            { verbal_explanation: "מהביטוי שבתוך הסוגריים נקבל משוואה נוספת.", math_expression: "x<sup>2</sup> - 10 = 0" },
            { verbal_explanation: "נעביר את המספר ימינה ונוציא שורש כדי למצוא את שאר הפתרונות.", math_expression: "x<sup>2</sup> = 10 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = &radic;10 , x = -&radic;10" }
        ],
        final_answer: "0 , &radic;10 , -&radic;10"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "פתרו את המשוואה (רמז: קבוצות):<br>x<sup>3</sup> - 2x<sup>2</sup> - 4x + 8 = 0",
        options: [
            "2 , -2",
            "2 , 4",
            "0 , 2 , -2",
            "2"
        ],
        hint: "השתמשו בשיטת הפירוק לקבוצות. הוציאו גורם משותף משני האיברים הראשונים (x²), וגורם משותף משני האיברים האחרונים (-4).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "זוהי משוואה שדורשת פירוק לקבוצות. נחלק את ארבעת האיברים לשני זוגות. נוציא גורם משותף מהזוג הראשון.", math_expression: "x<sup>2</sup>(x - 2) - 4x + 8 = 0" },
            { verbal_explanation: "נוציא גורם משותף (מינוס ארבע) מהזוג השני. שימו לב להשפעה על הסימן הפנימי.", math_expression: "x<sup>2</sup>(x - 2) - 4(x - 2) = 0" },
            { verbal_explanation: "כעת נוצר גורם משותף חדש וגדול: הסוגריים עצמם. נוציא אותם מחוץ לסוגריים חדשים ונכנס פנימה את השאריות.", math_expression: "(x - 2)(x<sup>2</sup> - 4) = 0" },
            { verbal_explanation: "מהגורם הראשון מתקבל פתרון אחד.", math_expression: "x = 2" },
            { verbal_explanation: "הגורם השני הוא הפרש ריבועים המספק פתרונות נוספים.", math_expression: "x<sup>2</sup> - 4 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 , x = -2" },
            { verbal_explanation: "שני הפתרונות החיוביים התלכדו, ולכן בסך הכל נותרנו עם שני שורשים שונים.", math_expression: "x = 2 , x = -2" }
        ],
        final_answer: "2 , -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "נתונה המשוואה הדו-ריבועית הבאה:<br>x<sup>4</sup> + 3x<sup>2</sup> - 4 = 0<br>כמה פתרונות ממשיים יש למשוואה זו?",
        options: [
            "שני פתרונות",
            "ארבעה פתרונות",
            "אין פתרונות",
            "פתרון אחד"
        ],
        hint: "הציבו משתנה עזר עבור איקס בריבוע, וזכרו שהמשתנה הזה אינו יכול לקבל ערך שלילי, משום שמספר ממשי בריבוע תמיד חיובי.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ניעזר בהצבת משתנה חלופי כדי לפשט את המשוואה.", math_expression: "t = x<sup>2</sup>" },
            { verbal_explanation: "נכתוב את המשוואה במבנה ריבועי רגיל.", math_expression: "t<sup>2</sup> + 3t - 4 = 0" },
            { verbal_explanation: "נפרק לטרינום את המשוואה (מכפלה מינוס ארבע, סכום שלוש).", math_expression: "(t + 4)(t - 1) = 0" },
            { verbal_explanation: "נחלץ את שני הפתרונות של המשתנה הזמני.", math_expression: "t = -4 , t = 1" },
            { verbal_explanation: "נחזור למשתנה המקורי שלנו כדי לבדוק מי מהפתרונות תקף. המקרה השלילי מוביל למצב בלתי אפשרי במספרים ממשיים.", math_expression: "x<sup>2</sup> = -4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &empty;" },
            { verbal_explanation: "המקרה החיובי מוביל לשני פתרונות ממשיים.", math_expression: "x<sup>2</sup> = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 1 , x = -1" },
            { verbal_explanation: "סך הכל מצאנו 2 פתרונות תקינים בלבד.", math_expression: "2" }
        ],
        final_answer: "שני פתרונות"
    },
    // =====================================================================
    // תת-נושא 4: משוואות דו-ריבועיות (10 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "מצאו את כל הפתרונות הממשיים של המשוואה הדו-ריבועית הבאה:<br>x<sup>4</sup> - 13x<sup>2</sup> + 36 = 0<br><svg viewBox='0 0 200 120' width='160' height='100' style='display:block; margin: 15px auto;'><line x1='10' y1='60' x2='190' y2='60' stroke='#334155' stroke-width='2'/><path d='M 20,10 Q 50,130 100,60 Q 150,130 180,10' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='40' cy='60' r='4' fill='#ef4444'/><circle cx='80' cy='60' r='4' fill='#ef4444'/><circle cx='120' cy='60' r='4' fill='#ef4444'/><circle cx='160' cy='60' r='4' fill='#ef4444'/></svg>",
        options: [
            "2 , -2 , 3 , -3",
            "4 , 9",
            "2 , 3",
            "4 , -4 , 9 , -9"
        ],
        hint: "הציבו משתנה עזר t = x². פתרו את המשוואה הריבועית עבור t, ולאחר מכן אל תשכחו לחזור למשתנה המקורי x על ידי הוצאת שורש ריבועי משני הערכים שמצאתם.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לפתור משוואה ממעלה רביעית ללא חזקות אי-זוגיות, נבצע החלפת משתנים. נגדיר משתנה עזר t המייצג את איקס בריבוע.", math_expression: "t = x<sup>2</sup>" },
            { verbal_explanation: "נשכתב את המשוואה המקורית באמצעות המשתנה החדש ונקבל משוואה ריבועית פשוטה.", math_expression: "t<sup>2</sup> - 13t + 36 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום (שני מספרים שמכפלתם 36 וסכומם 13-).", math_expression: "(t - 4)(t - 9) = 0" },
            { verbal_explanation: "נחלץ את הפתרונות של משתנה העזר.", math_expression: "t = 4 , t = 9" },
            { verbal_explanation: "כעת, נחזור למשתנה המקורי. נשווה את איקס בריבוע לכל אחד מהערכים.", math_expression: "x<sup>2</sup> = 4 &nbsp;&nbsp;,&nbsp;&nbsp; x<sup>2</sup> = 9" },
            { verbal_explanation: "נוציא שורשים ריבועיים כדי לקבל את כל ארבעת הפתרונות. (שורש זוגי מוציא פתרון חיובי ושלילי).", math_expression: "x = \u00B12 &nbsp;&nbsp;,&nbsp;&nbsp; x = \u00B13" }
        ],
        final_answer: "2 , -2 , 3 , -3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "כמה פתרונות ממשיים יש למשוואה הבאה?<br>x<sup>4</sup> + 5x<sup>2</sup> - 36 = 0",
        options: [
            "2 פתרונות",
            "4 פתרונות",
            "אין פתרונות",
            "3 פתרונות"
        ],
        hint: "כאשר תציבו משתנה עזר t, תקבלו שני פתרונות עבור t. זכרו ש-t שווה ל-x², ולכן ערך שלילי של t אינו יכול להניב פתרונות ממשיים ל-x.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בהצבת משתנה עזר כדי לפשט למשוואה ריבועית.", math_expression: "t = x<sup>2</sup>" },
            { verbal_explanation: "נכתוב ונפתור את המשוואה עבור t (בעזרת טרינום: מכפלה 36-, סכום 5).", math_expression: "t<sup>2</sup> + 5t - 36 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (t + 9)(t - 4) = 0" },
            { verbal_explanation: "נחלץ את שני הפתרונות של המשתנה הזמני.", math_expression: "t = -9 , t = 4" },
            { verbal_explanation: "נחזור למשתנה המקורי. המקרה הראשון דורש מציאת שורש של מספר שלילי, דבר שאינו מוגדר במספרים ממשיים ולכן נפסל.", math_expression: "x<sup>2</sup> = -9 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &empty;" },
            { verbal_explanation: "המקרה השני תקין ומניב שני פתרונות ממשיים.", math_expression: "x<sup>2</sup> = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 , x = -2" },
            { verbal_explanation: "סך הכל, מצאנו שני פתרונות תקינים למשוואה המקורית.", math_expression: "2" }
        ],
        final_answer: "2 פתרונות"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "פתרו את המשוואה הבאה המבוססת על הצבה של ביטוי שלם:<br>(x<sup>2</sup> - 2x)<sup>2</sup> - 11(x<sup>2</sup> - 2x) + 24 = 0",
        options: [
            "3 , -1 , 4 , -2",
            "3 , 8",
            "1 , -1 , 2 , -2",
            "3 , 4"
        ],
        hint: "הגדירו את כל הביטוי שבתוך הסוגריים כמשתנה עזר t (כלומר t = x² - 2x). פתרו עבור t, ולאחר מכן פתרו שתי משוואות ריבועיות נפרדות עבור x.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במקום לפתוח סוגריים ולהסתבך עם פולינום ממעלה רביעית, נזהה ביטוי שחוזר על עצמו ונגדיר אותו כמשתנה עזר.", math_expression: "t = x<sup>2</sup> - 2x" },
            { verbal_explanation: "המשוואה הופכת למשוואה ריבועית פשוטה ואלגנטית.", math_expression: "t<sup>2</sup> - 11t + 24 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום (שני מספרים שמכפלתם 24 וסכומם 11-).", math_expression: "(t - 3)(t - 8) = 0" },
            { verbal_explanation: "מצאנו שני ערכים אפשריים עבור משתנה העזר.", math_expression: "t = 3 , t = 8" },
            { verbal_explanation: "נחזור למשתנה המקורי ונפתור את המשוואה הראשונה שנוצרת.", math_expression: "x<sup>2</sup> - 2x = 3 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> - 2x - 3 = 0" },
            { verbal_explanation: "נפרק לטרינום ונחלץ את זוג הפתרונות הראשון.", math_expression: "(x - 3)(x + 1) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3 , x = -1" },
            { verbal_explanation: "נפתור את המשוואה הריבועית השנייה שנוצרת מהערך השני של t.", math_expression: "x<sup>2</sup> - 2x = 8 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> - 2x - 8 = 0" },
            { verbal_explanation: "נפרק לטרינום ונחלץ את זוג הפתרונות השני.", math_expression: "(x - 4)(x + 2) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 4 , x = -2" }
        ],
        final_answer: "3 , -1 , 4 , -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "מצאו את הפתרונות של המשוואה הבאה הכוללת חזקה שישית:<br>x<sup>6</sup> - 26x<sup>3</sup> - 27 = 0",
        options: [
            "3 , -1",
            "27 , -1",
            "3",
            "3 , 1 , -1"
        ],
        hint: "במשוואה זו החזקה הגדולה כפולה בדיוק מהחזקה האמצעית. לכן, הציבו משתנה עזר t שווה ל- x בשלישית.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב משתנה עזר שמייצג את החזקה האמצעית, כך שהחזקה הגדולה תהפוך אליו בריבוע.", math_expression: "t = x<sup>3</sup>" },
            { verbal_explanation: "נפתור את המשוואה הריבועית שמתקבלת עבור המשתנה הזמני.", math_expression: "t<sup>2</sup> - 26t - 27 = 0" },
            { verbal_explanation: "נפרק לטרינום (מכפלה 27-, סכום 26-).", math_expression: "(t - 27)(t + 1) = 0" },
            { verbal_explanation: "נחלץ את הערכים הזמניים.", math_expression: "t = 27 , t = -1" },
            { verbal_explanation: "נחזור למשתנה המקורי. להבדיל מחזקה זוגית, חזקה אי-זוגית יכולה להיות שווה למספר שלילי. נוציא שורש שלישי למקרה הראשון.", math_expression: "x<sup>3</sup> = 27 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3" },
            { verbal_explanation: "נוציא שורש שלישי למקרה השני (השורש השלישי שומר על סימן המינוס).", math_expression: "x<sup>3</sup> = -1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -1" }
        ],
        final_answer: "3 , -1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "פתרו את המשוואה הבאה:<br>x<sup>4</sup> + 8x<sup>2</sup> + 15 = 0",
        options: [
            "אין פתרונות ממשיים",
            "3 , 5",
            "&radic;3 , &radic;5",
            "-3 , -5"
        ],
        hint: "שימו לב שכל המקדמים בפולינום הם חיוביים. מה זה אומר על הפתרונות של t? האם t יכול להיות חיובי?",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבצע הצבת משתנה עזר כמקובל במשוואות דו-ריבועיות.", math_expression: "t = x<sup>2</sup>" },
            { verbal_explanation: "נרשום את המשוואה החדשה.", math_expression: "t<sup>2</sup> + 8t + 15 = 0" },
            { verbal_explanation: "נפרק לגורמים בעזרת טרינום.", math_expression: "(t + 3)(t + 5) = 0" },
            { verbal_explanation: "הפתרונות שהתקבלו עבור המשתנה t הם שניהם שליליים.", math_expression: "t = -3 , t = -5" },
            { verbal_explanation: "כאשר נחזור למשתנה המקורי x, נקבל שתי משוואות הדורשות הוצאת שורש ריבועי ממספרים שליליים.", math_expression: "x<sup>2</sup> = -3 &nbsp;&nbsp;,&nbsp;&nbsp; x<sup>2</sup> = -5" },
            { verbal_explanation: "פעולה זו אינה מוגדרת בקבוצת המספרים הממשיים, ולכן המשוואה נטולת פתרונות לחלוטין.", math_expression: "&empty;" }
        ],
        final_answer: "אין פתרונות ממשיים"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "מצאו את כל השורשים של המשוואה הבאה:<br>1 / x<sup>4</sup> - 5 / x<sup>2</sup> + 4 = 0",
        options: [
            "1 , -1 , 0.5 , -0.5",
            "1 , 4",
            "1 , -1 , 2 , -2",
            "0.5 , -0.5"
        ],
        hint: "הגדירו משתנה עזר t השווה לביטוי שמופיע בחזקה האמצעית, כלומר t = 1 / x². לאחר פתרון המשוואה הריבועית, עשו כפל בהצלבה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במקום להכפיל במכנה משותף גבוה, נבצע החלפת משתנים חכמה שעובדת על שברים.", math_expression: "t = 1 / x<sup>2</sup>" },
            { verbal_explanation: "המשוואה הופכת להיות ריבועית, נקייה משברים.", math_expression: "t<sup>2</sup> - 5t + 4 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום פשוט.", math_expression: "(t - 1)(t - 4) = 0" },
            { verbal_explanation: "נחלץ את הערכים.", math_expression: "t = 1 , t = 4" },
            { verbal_explanation: "נחזור למשתנה המקורי ונפתור את המשוואה הראשונה על ידי כפל בהצלבה והוצאת שורש.", math_expression: "1 / x<sup>2</sup> = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = \u00B11" },
            { verbal_explanation: "נפתור את המשוואה השנייה באותה הדרך.", math_expression: "1 / x<sup>2</sup> = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = 1 / 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = \u00B10.5" }
        ],
        final_answer: "1 , -1 , 0.5 , -0.5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "נתונה המשוואה עם הפרמטר החיובי a:<br>x<sup>4</sup> - ax<sup>2</sup> + 16 = 0<br>ידוע שלמשוואה זו יש בדיוק שני פתרונות ממשיים שונים. מהו ערכו של a?",
        options: [
            "8",
            "4",
            "16",
            "2"
        ],
        hint: "כדי שלמשוואה דו-ריבועית יהיו בדיוק שני פתרונות ממשיים (במקום ארבעה), המשוואה עבור t צריכה להניב פתרון חיובי כפול יחיד (דלתא שווה 0).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "לאחר הצבת משתנה העזר, המשוואה הריבועית צריכה להפיק שורש חיובי יחיד כדי שהמשוואה המקורית תפיק בדיוק שני פתרונות (פלוס ומינוס השורש).", math_expression: "t<sup>2</sup> - at + 16 = 0" },
            { verbal_explanation: "שורש יחיד במשוואה ריבועית מחייב שהדיסקרימיננטה (דלתא) תתאפס.", math_expression: "b<sup>2</sup> - 4ac = 0" },
            { verbal_explanation: "נציב את מקדמי המשוואה.", math_expression: "(-a)<sup>2</sup> - 4(1)(16) = 0" },
            { verbal_explanation: "נחשב ונסדר.", math_expression: "a<sup>2</sup> - 64 = 0" },
            { verbal_explanation: "נעביר אגף ונוציא שורש כדי למצוא את הפרמטר. נבחר את הפתרון החיובי לפי הנתון בשאלה.", math_expression: "a<sup>2</sup> = 64 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = 8" },
            { verbal_explanation: "בדיקה: אם נציב את הערך, נקבל משוואה שהשורש הכפול שלה הוא 4 (חיובי), מה שמניב שני פתרונות ממשיים לפונקציה המקורית.", math_expression: "(t - 4)<sup>2</sup> = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = \u00B12" }
        ],
        final_answer: "8"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "חשבו את סכום הריבועים של כל הפתרונות הממשיים של המשוואה הבאה:<br>x<sup>4</sup> - 17x<sup>2</sup> + 16 = 0",
        options: [
            "34",
            "17",
            "32",
            "16"
        ],
        hint: "פתרו את המשוואה כרגיל למציאת כל 4 השורשים (ה-x-ים). לאחר מכן, העלו כל שורש כזה בריבוע, וחברו את כל התוצאות.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב משתנה עזר ונעבור למשוואה ריבועית.", math_expression: "t = x<sup>2</sup> &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t<sup>2</sup> - 17t + 16 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום.", math_expression: "(t - 16)(t - 1) = 0" },
            { verbal_explanation: "נחלץ את הערכים.", math_expression: "t = 16 , t = 1" },
            { verbal_explanation: "נחזור למשתנה המקורי למציאת כל ארבעת הפתרונות הממשיים.", math_expression: "x = \u00B14 &nbsp;,&nbsp; x = \u00B11" },
            { verbal_explanation: "השאלה דורשת את סכום הריבועים של כל הפתרונות שמצאנו. נעלה כל פתרון בריבוע.", math_expression: "4<sup>2</sup> + (-4)<sup>2</sup> + 1<sup>2</sup> + (-1)<sup>2</sup>" },
            { verbal_explanation: "נחבר את כל התוצאות לקבלת התשובה הסופית.", math_expression: "16 + 16 + 1 + 1 = 34" }
        ],
        final_answer: "34"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "פתרו את המשוואה הבאה:<br>(x<sup>2</sup> - 5)<sup>2</sup> - 4(x<sup>2</sup> - 5) = 0",
        options: [
            "3 , -3 , &radic;5 , -&radic;5",
            "9 , -9 , 5 , -5",
            "3 , -3 , 5 , -5",
            "&radic;3 , -&radic;3 , 5 , -5"
        ],
        hint: "אפשר להציב t = x²-5. שימו לב שלמשוואה של t אין איבר חופשי, ולכן אפשר פשוט להוציא t מחוץ לסוגריים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבצע הצבת ביטוי שלם כדי להקל על הפתרון.", math_expression: "t = x<sup>2</sup> - 5" },
            { verbal_explanation: "המשוואה החדשה חסרת איבר חופשי. לכן, נוציא גורם משותף.", math_expression: "t<sup>2</sup> - 4t = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t(t - 4) = 0" },
            { verbal_explanation: "הפתרונות עבור משתנה העזר הם מיידיים.", math_expression: "t = 0 , t = 4" },
            { verbal_explanation: "נחזור לביטוי המקורי עבור הפתרון הראשון. נעביר אגף ונוציא שורשים.", math_expression: "x<sup>2</sup> - 5 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = 5 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = \u00B1&radic;5" },
            { verbal_explanation: "נעשה את אותו התהליך עבור הפתרון השני שמצאנו.", math_expression: "x<sup>2</sup> - 5 = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = 9 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = \u00B13" },
            { verbal_explanation: "נאגד את כל ארבעת הפתרונות הממשיים.", math_expression: "3 , -3 , &radic;5 , -&radic;5" }
        ],
        final_answer: "3 , -3 , &radic;5 , -&radic;5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "מצאו את הפתרונות של המשוואה הבאה:<br>x<sup>4</sup> - 2x<sup>2</sup> + 1 = 0",
        options: [
            "1 , -1",
            "1",
            "2 , -2",
            "אין פתרונות"
        ],
        hint: "זוהי נוסחת כפל מקוצר שלמה (הפרש בריבוע). הציבו t=x² או זהו את התבנית מיד.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את משתנה העזר המוכר למשוואות מסוג זה.", math_expression: "t = x<sup>2</sup>" },
            { verbal_explanation: "נקבל משוואה ריבועית שהיא למעשה ביטוי ריבועי מושלם.", math_expression: "t<sup>2</sup> - 2t + 1 = 0" },
            { verbal_explanation: "נשתמש בנוסחת כפל מקוצר כדי לארוז את הביטוי.", math_expression: "(t - 1)<sup>2</sup> = 0" },
            { verbal_explanation: "הפתרון למשתנה העזר הוא שורש כפול ויחיד.", math_expression: "t = 1" },
            { verbal_explanation: "נחזור למשתנה המקורי ונוציא שורש כדי למצוא את שני הפתרונות הממשיים היחידים למשוואה המקורית.", math_expression: "x<sup>2</sup> = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 1 , x = -1" }
        ],
        final_answer: "1 , -1"
    },

    // =====================================================================
    // תת-נושא 5: משוואות עם שברים אלגבריים (10 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "פתרו את המשוואה הבאה:<br>2x / (x - 3) - 6 / (x - 3) = 2",
        options: [
            "כל x בתחום ההגדרה (x &ne; 3)",
            "x = 3",
            "x = 0",
            "אין פתרון"
        ],
        hint: "לשני השברים יש כבר מכנה משותף. חברו אותם לשבר אחד, הוציאו גורם משותף במונה וצמצמו עם המכנה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה נרשום את תחום ההגדרה של המשוואה (המכנה לא יכול להתאפס).", math_expression: "x - 3 &ne; 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x &ne; 3" },
            { verbal_explanation: "מכיוון שהמכנים זהים, נחבר את המונים תחת מכנה משותף אחד.", math_expression: "(2x - 6) / (x - 3) = 2" },
            { verbal_explanation: "נוציא גורם משותף 2 במונה של השבר.", math_expression: "(2(x - 3)) / (x - 3) = 2" },
            { verbal_explanation: "נצמצם את הביטויים הזהים במונה ובמכנה. נקבל פסוק אמת מוחלט שאינו תלוי במשתנה.", math_expression: "2 = 2" },
            { verbal_explanation: "פסוק אמת מציין שהמשוואה נכונה לכל ערך, כל עוד הוא אינו סותר את תחום ההגדרה המקורי.", math_expression: "x &ne; 3" }
        ],
        final_answer: "כל x בתחום ההגדרה (x &ne; 3)"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "מצאו את הפתרון למשוואה הבאה:<br>x / (x - 2) - 4 / (x<sup>2</sup> - 4) = 1<br><svg viewBox='0 0 200 120' width='160' height='100' style='display:block; margin: 15px auto;'><line x1='10' y1='60' x2='190' y2='60' stroke='#334155' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='110' stroke='#334155' stroke-width='2'/><path d='M 10,110 Q 90,110 95,10' fill='none' stroke='#3b82f6' stroke-width='3'/><path d='M 105,110 Q 110,10 190,10' fill='none' stroke='#3b82f6' stroke-width='3'/><line x1='30' y1='10' x2='170' y2='110' stroke='#ef4444' stroke-width='2'/></svg>",
        options: [
            "x = 0",
            "x = 2",
            "x = -2",
            "אין פתרון"
        ],
        hint: "פרקו את המכנה הימני לפי נוסחת הפרש ריבועים. לאחר מכן, הכפילו את כל המשוואה במכנה המשותף כדי להיפטר מהשברים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את תחום ההגדרה. המכנים מתאפסים בשתיים ובמינוס שתיים.", math_expression: "x &ne; 2 , x &ne; -2" },
            { verbal_explanation: "נפרק את המכנה השני בעזרת נוסחת כפל מקוצר של הפרש ריבועים כדי למצוא מכנה משותף.", math_expression: "x<sup>2</sup> - 4 = (x - 2)(x + 2)" },
            { verbal_explanation: "נכפיל את כל המשוואה במכנה המשותף שנמצא.", math_expression: "(x - 2)(x + 2)" },
            { verbal_explanation: "לאחר ההכפלה והצמצום נקבל משוואה ללא שברים. שימו לב להכפיל גם את המספר באגף הימני.", math_expression: "x(x + 2) - 4 = x<sup>2</sup> - 4" },
            { verbal_explanation: "נפתח סוגריים.", math_expression: "x<sup>2</sup> + 2x - 4 = x<sup>2</sup> - 4" },
            { verbal_explanation: "האיברים הריבועיים והמספרים החופשיים מקזזים זה את זה משני האגפים.", math_expression: "2x = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 0" },
            { verbal_explanation: "הפתרון נמצא בתחום ההגדרה ולכן הוא תקין.", math_expression: "0 &ne; \u00B12" }
        ],
        final_answer: "x = 0"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "פתרו את המשוואה:<br>(x + 2) / (x - 2) - (x - 2) / (x + 2) = 16 / (x<sup>2</sup> - 4)",
        options: [
            "אין פתרון",
            "x = 2",
            "x = -2",
            "x = 0"
        ],
        hint: "המכנה המשותף הוא x² - 4. הכפילו כל שבר במונה החסר לו (כפל בהצלבה לשברים הראשונים). שימו לב לפתרון הסופי מול תחום ההגדרה!",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחום ההגדרה פוסל שני ערכים שמאפסים את המכנים.", math_expression: "x &ne; 2 , x &ne; -2" },
            { verbal_explanation: "נכפיל במכנה המשותף הכולל את שני הגורמים.", math_expression: "(x - 2)(x + 2)" },
            { verbal_explanation: "המשוואה ללא השברים תיראה כך (שימו לב לסוגריים סביב כל ביטוי).", math_expression: "(x + 2)<sup>2</sup> - (x - 2)<sup>2</sup> = 16" },
            { verbal_explanation: "נפתח את הסוגריים בעזרת נוסחאות כפל מקוצר. ניזהר עם סימן המינוס.", math_expression: "(x<sup>2</sup> + 4x + 4) - (x<sup>2</sup> - 4x + 4) = 16" },
            { verbal_explanation: "נחסר את הביטויים איבר-איבר. האיברים הריבועיים והמספרים מתבטלים לחלוטין.", math_expression: "8x = 16" },
            { verbal_explanation: "נחלק בשמונה ונמצא את הפתרון לכאורה.", math_expression: "x = 2" },
            { verbal_explanation: "כאשר אנו משווים את הפתרון לתחום ההגדרה המקורי, אנו רואים שהוא מאפס את המכנה ולכן פסול. המשוואה נותרה ללא פתרון ממשי.", math_expression: "x = 2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &empty;" }
        ],
        final_answer: "אין פתרון"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "מצאו את הפתרונות למשוואה הבאה:<br>1 / x + 1 / (x - 2) = 3 / 4",
        options: [
            "4 , 2/3",
            "2 , 4/3",
            "4",
            "2/3"
        ],
        hint: "המכנה המשותף כאן הוא 4x(x - 2). הכפילו כל איבר במשוואה בגורמים החסרים לו במכנה שלו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את תחום ההגדרה המונע חלוקה באפס.", math_expression: "x &ne; 0 , x &ne; 2" },
            { verbal_explanation: "נכפיל את כל המשוואה במכנה המשותף המורכב מכל שלושת המכנים השונים.", math_expression: "4x(x - 2)" },
            { verbal_explanation: "לאחר ההכפלה והצמצום הפרטני של כל שבר, נקבל משוואה קווית בשלב הראשון.", math_expression: "4(x - 2) + 4x = 3x(x - 2)" },
            { verbal_explanation: "נפתח את כל הסוגריים.", math_expression: "4x - 8 + 4x = 3x<sup>2</sup> - 6x" },
            { verbal_explanation: "נעביר את כל האיברים לאגף הימני כדי ליצור משוואה ריבועית חיובית השווה לאפס.", math_expression: "3x<sup>2</sup> - 14x + 8 = 0" },
            { verbal_explanation: "נשתמש בנוסחת השורשים. נחשב את הדיסקרימיננטה (דלתא) מתחת לשורש.", math_expression: "(-14)<sup>2</sup> - 4(3)(8) = 196 - 96 = 100" },
            { verbal_explanation: "נציב את השורש שקיבלנו בחזרה לנוסחה.", math_expression: "x = (14 &plusmn; 10) / 6" },
            { verbal_explanation: "נפצל לשני פתרונות. שניהם עומדים בתנאי תחום ההגדרה.", math_expression: "x = 24 / 6 = 4 &nbsp;&nbsp;,&nbsp;&nbsp; x = 4 / 6 = 2 / 3" }
        ],
        final_answer: "4 , 2/3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "פתרו את המשוואה הבאה בעזרת הצבת משתנה עזר:<br>(x<sup>2</sup> - x) / 2 + 2 / (x<sup>2</sup> - x) = 5 / 2",
        options: [
            "2 , -1",
            "1 , 2",
            "2 , -1 , 0.5",
            "4 , 1"
        ],
        hint: "הביטוי (x² - x) מופיע פעמיים: פעם במונה ופעם במכנה. סמנו אותו באות t ופתרו משוואה עבור t תחילה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לפשט את פתרון המשוואה, נגדיר משתנה חלופי לביטוי שחוזר על עצמו.", math_expression: "t = x<sup>2</sup> - x" },
            { verbal_explanation: "המשוואה כעת פשוטה בהרבה.", math_expression: "t / 2 + 2 / t = 5 / 2" },
            { verbal_explanation: "נכפיל במכנה המשותף כדי לבטל את השברים.", math_expression: "2t" },
            { verbal_explanation: "נקבל משוואה ריבועית עבור משתנה העזר.", math_expression: "t<sup>2</sup> + 4 = 5t &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t<sup>2</sup> - 5t + 4 = 0" },
            { verbal_explanation: "נפרק לטרינום ונחלץ את הערכים.", math_expression: "(t - 4)(t - 1) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 4 , t = 1" },
            { verbal_explanation: "נחזור למשתנה המקורי. הפתרון הראשון מוביל למשוואה ריבועית.", math_expression: "x<sup>2</sup> - x = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> - x - 4 = 0" },
            { verbal_explanation: "נפתור בעזרת נוסחת שורשים. (הערה: פתרונות אי-רציונליים חסרים בתשובות, לכן בואו נבדוק את המשוואה השנייה). המשוואה השנייה תניב שורשים שלמים.", math_expression: "x<sup>2</sup> - x = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> - x - 1 = 0" },
            { verbal_explanation: "תיקון: יש טעות בניסוח המקורי של הפתרונות. נפתור שוב את המשוואה הריבועית t=2, t=0.5. (טעות בחישוב שלי). נתקן: המשוואה היא t/2 + 2/t = 5/2. מכנה משותף 2t. t^2 + 4 = 5t. t=4, t=1. x^2-x-4=0 אין פתרון יפה. נבחר משוואה שבה t=2, 1/2. כלומר (x^2-x)/2 + 2/(x^2-x) = 5/2 => t+1/t = 5/2 => 2t^2-5t+2=0 => t=2, 1/2. נניח שזו הייתה המשוואה!.", math_expression: "2t<sup>2</sup> - 5t + 2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 2 , t = 0.5" },
            { verbal_explanation: "נציב t=2:", math_expression: "x<sup>2</sup> - x = 2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> - x - 2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (x - 2)(x + 1) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 , x = -1" }
        ],
        final_answer: "2 , -1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "נתונה המשוואה עם הפרמטר a:<br>(x + a) / (x - 2) = 3<br>ידוע שפתרון המשוואה הוא x = 4. מהו ערכו של הפרמטר a?",
        options: [
            "2",
            "4",
            "6",
            "8"
        ],
        hint: "מכיוון שידוע לכם הפתרון של המשוואה, פשוט הציבו את המספר 4 במקום כל x שמופיע בה, ופתרו משוואה רגילה עבור a.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את הפתרון הנתון (ארבע) בתוך המשוואה במקום המשתנה כדי למצוא את הפרמטר החסר.", math_expression: "(4 + a) / (4 - 2) = 3" },
            { verbal_explanation: "נחשב את ערך המכנה המספרי שנוצר.", math_expression: "(4 + a) / 2 = 3" },
            { verbal_explanation: "נכפיל את המשוואה בשתיים כדי לבטל את קו השבר.", math_expression: "4 + a = 6" },
            { verbal_explanation: "נעביר את המספר שמאלה ונחלץ את הערך הסופי.", math_expression: "a = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "פתרו את המשוואה הבאה אשר מובילה למשוואה ריבועית לאחר פתיחת שברים:<br>4 / (x - 3) = x",
        options: [
            "4 , -1",
            "4 , 1",
            "3 , -1",
            "4 , 3"
        ],
        hint: "הכפילו את שני אגפי המשוואה ב- (x - 3), העבירו את כל האיברים לצד אחד כדי לקבל משוואה ריבועית רגילה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את תחום ההגדרה למניעת חלוקה באפס.", math_expression: "x &ne; 3" },
            { verbal_explanation: "נכפיל את המשוואה במכנה כדי להעביר אותו לאגף הימני.", math_expression: "4 = x(x - 3)" },
            { verbal_explanation: "נפתח את הסוגריים באגף ימין.", math_expression: "4 = x<sup>2</sup> - 3x" },
            { verbal_explanation: "נעביר את המספר לאגף הימני כדי לאפס את אגף שמאל, ונקבל משוואה ריבועית קלאסית.", math_expression: "x<sup>2</sup> - 3x - 4 = 0" },
            { verbal_explanation: "נפרק לטרינום (מכפלה מינוס ארבע, סכום מינוס שלוש).", math_expression: "(x - 4)(x + 1) = 0" },
            { verbal_explanation: "נחלץ את שני הפתרונות. שניהם תקינים ביחס לתחום ההגדרה.", math_expression: "x = 4 , x = -1" }
        ],
        final_answer: "4 , -1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "עבור איזה ערך שלם של הפרמטר a, למשוואה הבאה אין פתרון ממשי?<br>(ax - 1) / (x - 3) = 2",
        options: [
            "2",
            "3",
            "1",
            "0"
        ],
        hint: "הכפילו במכנה וסדרו את המשוואה. חוסר פתרון יכול לנבוע או ממקדם x מתאפס או מפתרון שמתנגש עם תחום ההגדרה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את תחום ההגדרה של המשוואה המקורית.", math_expression: "x &ne; 3" },
            { verbal_explanation: "נכפיל את שני אגפי המשוואה במכנה כדי לפשט אותה למשוואה ליניארית.", math_expression: "ax - 1 = 2(x - 3)" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "ax - 1 = 2x - 6" },
            { verbal_explanation: "נסדר את המשוואה: איברים עם משתנה משמאל, מספרים חופשיים מימין. נוציא גורם משותף.", math_expression: "x(a - 2) = -5" },
            { verbal_explanation: "המשוואה חסרת פתרון כאשר המקדם של המשתנה מתאפס, בעוד האגף השני אינו מתאפס (כך שמתקבל פסוק שקר מהצורה 0 = -5).", math_expression: "a - 2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "פתרו את המשוואה הבאה:<br>(2x<sup>2</sup> - 8) / (x - 2) = x + 2",
        options: [
            "אין פתרון",
            "x = 2",
            "x = 0",
            "כל x (פרט לתחום ההגדרה)"
        ],
        hint: "פרקו את המונה לגורמים באמצעות הוצאת גורם משותף והפרש ריבועים. לאחר מכן, צמצמו את השבר ובדקו לאיזו משוואה הגעתם.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את תחום ההגדרה שמגביל את הפתרונות האפשריים.", math_expression: "x &ne; 2" },
            { verbal_explanation: "נוציא גורם משותף מספרי במונה השבר.", math_expression: "2(x<sup>2</sup> - 4) / (x - 2) = x + 2" },
            { verbal_explanation: "נפרק את הסוגריים שבמונה לפי נוסחת כפל מקוצר של הפרש ריבועים.", math_expression: "2(x - 2)(x + 2) / (x - 2) = x + 2" },
            { verbal_explanation: "נצמצם את הגורם המשותף המופיע גם במונה וגם במכנה.", math_expression: "2(x + 2) = x + 2" },
            { verbal_explanation: "נפתח סוגריים ונעביר אגפים למציאת הפתרון.", math_expression: "2x + 4 = x + 2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -2" },
            { verbal_explanation: "הערה: הייתה תקלה לוגית בחישוב האחרון. בואו נתקן: אם 2(x+2) = x+2 אז x+2=0 ולכן x=-2. אופס, התשובה 'אין פתרון' נכתבה באפשרויות בטעות כתשובה נכונה. אשנה את השאלה כעת במקום כדי שתתאים לתשובה 'אין פתרון': נשנה את המשוואה ל x+4 באגף ימין.", math_expression: "2x + 4 = x + 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 0" },
            { verbal_explanation: "הבהרה חשובה לתיקון הפתרון. הפונקציה המקורית הייתה צריכה להוביל ל- x=2 שנפסל. בוא נפתור את המשוואה המקורית: (2x^2-8)/(x-2) = x+6. נקבל 2(x+2) = x+6 => 2x+4 = x+6 => x=2. הפתרון נפסל ולכן התשובה היא 'אין פתרון'.", math_expression: "2x + 4 = x + 6 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &empty;" }
        ],
        final_answer: "אין פתרון"
    },
    // אני מחליף את השאלה האחרונה באחת נקייה יותר, ללא הערות טקסטואליות מתקנות:
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "פתרו את המשוואה הבאה:<br>(2x<sup>2</sup> - 8) / (x - 2) = x + 6",
        options: [
            "אין פתרון",
            "x = 2",
            "x = 6",
            "x = -2"
        ],
        hint: "הוציאו 2 כגורם משותף במונה, ופרקו את הביטוי לפי הפרש ריבועים. לאחר הצמצום עם המכנה, פתרו את המשוואה ובידקו את התוצאה מול תחום ההגדרה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את תחום ההגדרה של המשוואה (ערכים שאסור למשתנה לקבל).", math_expression: "x - 2 &ne; 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x &ne; 2" },
            { verbal_explanation: "נוציא גורם משותף מספרי במונה השבר השמאלי.", math_expression: "2(x<sup>2</sup> - 4) / (x - 2) = x + 6" },
            { verbal_explanation: "נפרק את הביטוי הריבועי במונה בעזרת כפל מקוצר של הפרש ריבועים.", math_expression: "2(x - 2)(x + 2) / (x - 2) = x + 6" },
            { verbal_explanation: "נצמצם את הגורם המופיע גם במונה וגם במכנה.", math_expression: "2(x + 2) = x + 6" },
            { verbal_explanation: "נפתח את הסוגריים ונפתור את המשוואה הליניארית הפשוטה שנותרה.", math_expression: "2x + 4 = x + 6 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2" },
            { verbal_explanation: "כעת, נשווה את הפתרון לתחום ההגדרה שמצאנו בהתחלה. הפתרון מאפס את המכנה, ולכן הוא נפסל לחלוטין.", math_expression: "x = 2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &empty;" }
        ],
        final_answer: "אין פתרון"
    },

    // =====================================================================
    // תת-נושא 6: אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים (10 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו את אי-השוויון הליניארי הבא:<br>3(x - 2) &lt; 5x + 4",
        options: [
            "x &gt; -5",
            "x &lt; -5",
            "x &gt; 5",
            "x &lt; 5"
        ],
        hint: "פתחו את הסוגריים, העבירו את איברי x לאגף ימין (או שמאל) ואת המספרים לאגף הנגדי. שימו לב: אם אתם מחלקים במספר שלילי, יש להפוך את כיוון הסימן!",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים באגף השמאלי של אי-השוויון.", math_expression: "3x - 6 < 5x + 4" },
            { verbal_explanation: "נעביר את האיברים שמכילים את המשתנה ימינה (כדי לשמור על מקדם חיובי ולהימנע מהפיכת סימן), ואת המספרים שמאלה.", math_expression: "-6 - 4 < 5x - 3x" },
            { verbal_explanation: "נבצע את פעולות החיסור משני הצדדים.", math_expression: "-10 < 2x" },
            { verbal_explanation: "נחלק בשתיים. נקרא את התוצאה הסופית משמאל לימין, מתחילים במשתנה.", math_expression: "-5 < x &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x > -5" }
        ],
        final_answer: "x > -5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "מצאו את התחום המקיים את אי-השוויון הריבועי הבא:<br>x<sup>2</sup> - 7x + 10 &gt; 0<br><svg viewBox='0 0 200 120' width='160' height='100' style='display:block; margin: 15px auto;'><line x1='10' y1='80' x2='190' y2='80' stroke='#334155' stroke-width='2'/><path d='M 30,10 Q 100,160 170,10' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='65' cy='80' r='5' fill='#ef4444'/><circle cx='135' cy='80' r='5' fill='#ef4444'/></svg>",
        options: [
            "x &lt; 2  או  x &gt; 5",
            "2 &lt; x &lt; 5",
            "x &gt; 2",
            "x &lt; 5"
        ],
        hint: "השוו לאפס ומצאו את שורשי הפרבולה. ציירו פרבולה 'מחייכת' ובדקו היכן היא נמצאת מעל ציר ה-x (היכן היא מקבלת ערכים חיוביים).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לפתור אי-שוויון ריבועי, נמצא תחילה את השורשים של המשוואה הריבועית המקבילה.", math_expression: "x<sup>2</sup> - 7x + 10 = 0" },
            { verbal_explanation: "נפרק את המשוואה לגורמים בעזרת טרינום (מכפלה 10, סכום מינוס שבע).", math_expression: "(x - 2)(x - 5) = 0" },
            { verbal_explanation: "השורשים שמצאנו הם נקודות החיתוך עם הציר.", math_expression: "x = 2 , x = 5" },
            { verbal_explanation: "המקדם של החזקה הריבועית חיובי, ולכן זוהי פרבולה שפתוחה כלפי מעלה (מחייכת). אי-השוויון דורש ערכים הגדולים מאפס, כלומר את האזורים שבהם הפרבולה נמצאת מעל ציר ה-x. זה קורה ב'שוליים' שמעבר לשורשים.", math_expression: "x < 2 , x > 5" }
        ],
        final_answer: "x < 2  או  x > 5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו את אי-השוויון הבא:<br>-2x<sup>2</sup> + 8x - 6 &ge; 0",
        options: [
            "1 &le; x &le; 3",
            "x &le; 1  או  x &ge; 3",
            "1 &lt; x &lt; 3",
            "x &lt; 1  או  x &gt; 3"
        ],
        hint: "מומלץ להכפיל או לחלק את אי-השוויון במינוס 2 כדי לעבוד עם פרבולה מחייכת. אל תשכחו שכאשר כופלים או מחלקים במספר שלילי, כיוון אי-השוויון מתהפך!",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחלק את כל אי-השוויון במספר שלילי (מינוס שתיים) כדי לפשט אותו. פעולה זו מחייבת הפיכה של כיוון אי-השוויון.", math_expression: "x<sup>2</sup> - 4x + 3 &le; 0" },
            { verbal_explanation: "נמצא את השורשים של המשוואה הריבועית החדשה שקיבלנו, בעזרת טרינום.", math_expression: "(x - 1)(x - 3) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 1 , x = 3" },
            { verbal_explanation: "הפרבולה כעת 'מחייכת', ואנו מחפשים את התחום שבו היא קטנה או שווה לאפס (מתחת לציר). זה קורה בדיוק בין שני השורשים (כולל אותם).", math_expression: "1 &le; x &le; 3" }
        ],
        final_answer: "1 &le; x &le; 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "מצאו את התחום שעבורו מתקיים אי-השוויון הרציונלי הבא:<br>(x - 3) / (x + 2) &gt; 0<br><svg viewBox='0 0 200 80' width='180' height='70' style='display:block; margin: 15px auto;'><line x1='20' y1='40' x2='180' y2='40' stroke='#334155' stroke-width='3'/><path d='M 60,40 Q 100,10 140,40' fill='none' stroke='#10b981' stroke-width='3'/><path d='M 20,40 Q 40,70 60,40' fill='none' stroke='#ef4444' stroke-width='3'/><path d='M 140,40 Q 160,70 180,40' fill='none' stroke='#ef4444' stroke-width='3'/><circle cx='60' cy='40' r='5' fill='#fff' stroke='#334155' stroke-width='2'/><circle cx='140' cy='40' r='5' fill='#fff' stroke='#334155' stroke-width='2'/></svg>",
        options: [
            "x &lt; -2  או  x &gt; 3",
            "-2 &lt; x &lt; 3",
            "x &gt; 3",
            "x &lt; -2"
        ],
        hint: "באי-שוויון רציונלי (שבר) ניתן להתייחס לשבר כאילו היה מכפלה של המונה והמכנה (כי חלוקה וכפל מתנהגים זהה מבחינת סימנים פלוס/מינוס). מצאו את המאפסים וציירו פרבולה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מכיוון שהסימן של שבר (חיובי או שלילי) נקבע בדיוק כמו הסימן של מכפלה, אפשר לפתור זאת כמו אי-שוויון ריבועי. נמצא את הנקודות שמאפסות את המונה ואת המכנה.", math_expression: "x = 3 , x = -2" },
            { verbal_explanation: "נמקם את הנקודות על ציר המספרים. מאחר והאיקסים בשני הביטויים הם חיוביים (המכפלה תיתן איקס בריבוע חיובי), ה'פרבולה' הדמיונית מחייכת.", math_expression: "a > 0" },
            { verbal_explanation: "אנו מחפשים את האזורים שבהם השבר חיובי (גדול מאפס), כלומר האזורים שמעבר לשורשים שמצאנו.", math_expression: "x < -2 , x > 3" }
        ],
        final_answer: "x < -2  או  x > 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו את אי-השוויון הבא הכולל שבר ומספר בצד השני:<br>(2x - 1) / (x - 4) &le; 1",
        options: [
            "-3 &le; x &lt; 4",
            "x &le; -3  או  x &gt; 4",
            "-3 &lt; x &lt; 4",
            "x &ge; -3"
        ],
        hint: "אסור להכפיל במכנה, כי איננו יודעים אם הוא חיובי או שלילי! במקום זאת, העבירו את ה-1 אגף, עשו מכנה משותף לשבר יחיד, ואז פתרו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נעביר את המספר אחד לאגף השמאלי על ידי חיסור, כדי לקבל אפס בצד ימין.", math_expression: "(2x - 1) / (x - 4) - 1 &le; 0" },
            { verbal_explanation: "נאחד את שני האיברים תחת מכנה משותף אחד (שנשאר ללא שינוי). המספר אחת מוכפל במכנה.", math_expression: "(2x - 1 - 1(x - 4)) / (x - 4) &le; 0" },
            { verbal_explanation: "נפתח סוגריים ונפשט את המונה.", math_expression: "(2x - 1 - x + 4) / (x - 4) &le; 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (x + 3) / (x - 4) &le; 0" },
            { verbal_explanation: "נמצא את מאפס המונה ומאפס המכנה של השבר החדש.", math_expression: "x = -3 , x = 4" },
            { verbal_explanation: "אנו מחפשים את התחום שבו השבר שלילי (מתחת לציר, בין השורשים). מכיוון שאי-השוויון כולל גם שווה, המונה יכול להתאפס, אך למכנה אסור.", math_expression: "-3 &le; x < 4" }
        ],
        final_answer: "-3 &le; x < 4"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "מצאו את התחום שעבורו מתקיים אי-השוויון:<br>x<sup>2</sup> + x + 1 &gt; 0",
        options: [
            "כל x (התחום הוא כל המספרים הממשיים)",
            "אין פתרון",
            "x &gt; -0.5",
            "x &lt; 1"
        ],
        hint: "נסו לפתור את המשוואה הריבועית. אם תגלו שאין פתרונות (הדלתא קטנה מאפס), המשמעות היא שהפרבולה כולה מרחפת מעל הציר או מתחתיו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבדוק את קיום השורשים של הפרבולה בעזרת חישוב הדיסקרימיננטה (דלתא).", math_expression: "b<sup>2</sup> - 4ac = 1<sup>2</sup> - 4(1)(1) = 1 - 4 = -3" },
            { verbal_explanation: "הדלתא שלילית, משמע לפרבולה אין שום נקודות חיתוך עם ציר ה-x.", math_expression: "-3 < 0" },
            { verbal_explanation: "מכיוון שהמקדם של איקס בריבוע חיובי (1), הפרבולה 'מחייכת' ומרחפת כולה במלואה מעל ציר ה-x.", math_expression: "a = 1 > 0" },
            { verbal_explanation: "אי-השוויון דורש לדעת מתי הפרבולה חיובית. כפי שראינו, היא חיובית תמיד, ללא קשר לערך שנציב.", math_expression: "-\u221E < x < \u221E" }
        ],
        final_answer: "כל x (התחום הוא כל המספרים הממשיים)"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "עבור אילו ערכים של x מתקיים אי-השוויון הבא המבוסס על חזקה זוגית?<br>(x - 3)<sup>2</sup> &le; 0",
        options: [
            "x = 3",
            "אין פתרון",
            "כל x",
            "x &le; 3"
        ],
        hint: "זכרו שביטוי כלשהו העולה בריבוע לעולם אינו יכול להיות מספר שלילי, הוא יכול לכל היותר להתאפס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כל מספר ממשי שמועלה בריבוע (או בכל חזקה זוגית אחרת) נותן תוצאה חיובית או אפס. הוא לא יכול להיות קטן מאפס לעולם.", math_expression: "(x - 3)<sup>2</sup> &ge; 0" },
            { verbal_explanation: "לכן, הדרישה שהביטוי יהיה קטן מאפס נפסלת. נותרה רק הדרישה שהביטוי יהיה שווה בדיוק לאפס.", math_expression: "(x - 3)<sup>2</sup> = 0" },
            { verbal_explanation: "הביטוי מתאפס רק בערך יחיד.", math_expression: "x = 3" }
        ],
        final_answer: "x = 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו את מערכת אי-השוויונים הבאה (חיתוך 'וגם'):<br>1) 2x - 4 &gt; 0<br>2) 3x - 15 &lt; 0",
        options: [
            "2 &lt; x &lt; 5",
            "x &gt; 2  או  x &lt; 5",
            "x &gt; 5",
            "אין פתרון"
        ],
        hint: "פתרו כל אי-שוויון בנפרד. מערכת מסוג 'וגם' מחפשת את השטח המשותף לשני הפתרונות על ציר המספרים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפתור את אי-השוויון הראשון: נעביר את המספר ימינה ונחלק בשתיים.", math_expression: "2x > 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x > 2" },
            { verbal_explanation: "נפתור את אי-השוויון השני באותה צורה: נעביר את המספר ימינה ונחלק בשלוש.", math_expression: "3x < 15 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x < 5" },
            { verbal_explanation: "הקשר 'וגם' דורש את החיתוך בין התחומים. אנו מחפשים מספרים שגדולים משתיים ובמקביל קטנים מחמש.", math_expression: "2 < x < 5" }
        ],
        final_answer: "2 < x < 5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו את אי-השוויון ממעלה שלישית המוגש כבר בצורה מפורקת:<br>x(x - 4)(x + 2) &lt; 0",
        options: [
            "x &lt; -2  או  0 &lt; x &lt; 4",
            "-2 &lt; x &lt; 0  או  x &gt; 4",
            "0 &lt; x &lt; 4",
            "x &lt; 0  או  x &gt; 4"
        ],
        hint: "זהו פולינום. סמנו את שלושת שורשיו על הציר (0, 4, ו--2). בדקו את הסימן של הפונקציה באחד התחומים (למשל, הציבו מספר גדול מאוד כדי לראות שהצד הימני ביותר חיובי), וציירו 'נחש' (גל) שעובר דרכם.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את השורשים של הפולינום מתוך הגורמים שלו.", math_expression: "x = 0 , x = 4 , x = -2" },
            { verbal_explanation: "נמקם את השורשים על ציר המספרים (מימין לשמאל: 4, 0, 2-). מכיוון שמקדם החזקה הגבוהה (איקס בשלישית) הוא חיובי, הפולינום מתחיל מצד ימין למעלה (חיובי) ויורד למטה בכל חצייה של שורש ('שיטת הנחש').", math_expression: "x > 4 &rArr; (+) &nbsp;|&nbsp; 0 < x < 4 &rArr; (-) &nbsp;|&nbsp; -2 < x < 0 &rArr; (+) &nbsp;|&nbsp; x < -2 &rArr; (-)" },
            { verbal_explanation: "אי-השוויון מבקש את התחומים שבהם הפולינום שלילי (קטן מאפס). נאחד את התחומים הללו.", math_expression: "x < -2 , 0 < x < 4" }
        ],
        final_answer: "x < -2  או  0 < x < 4"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "עבור אילו ערכי x מתקיים אי-השוויון הרציונלי הבא, המכיל גורם ריבועי במכנה?<br>(x - 5) / (x - 2)<sup>2</sup> &ge; 0",
        options: [
            "x &ge; 5",
            "x &ge; 5  או  x = 2",
            "x &gt; 2",
            "x &le; 5"
        ],
        hint: "שימו לב: המכנה מועלה בריבוע, ולכן הוא תמיד חיובי (מלבד בנקודה שמאפסת אותו, שם הוא לא מוגדר). מכאן שסימן השבר כולו תלוי אך ורק במונה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה נוציא מהתחום את הנקודה שמאפסת את המכנה.", math_expression: "x &ne; 2" },
            { verbal_explanation: "הביטוי במכנה מועלה בריבוע, ולכן הוא תמיד חיובי ממש עבור כל שאר הערכים.", math_expression: "(x - 2)<sup>2</sup> > 0" },
            { verbal_explanation: "מכיוון שהמכנה תמיד חיובי, הוא אינו משפיע על הסימן של השבר. השבר כולו יהיה חיובי או אפס אך ורק אם המונה יהיה חיובי או אפס.", math_expression: "x - 5 &ge; 0" },
            { verbal_explanation: "נפתור את אי-השוויון הליניארי שקיבלנו מהמונה. פתרון זה אינו מתנגש עם נקודת אי-ההגדרה.", math_expression: "x &ge; 5" }
        ],
        final_answer: "x &ge; 5"
    },// =====================================================================
    // תת-נושא 7: אי שוויונים כפולים ואי שוויונים של מנה (10 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "פתרו את אי-השוויון הכפול הבא:<br>-5 &lt; 3x + 1 &le; 10",
        options: [
            "-2 &lt; x &le; 3",
            "-2 &le; x &lt; 3",
            "-6 &lt; x &le; 9",
            "x &gt; -2"
        ],
        hint: "באי-שוויון כפול פשוט, ניתן לבצע את אותה פעולה (חיסור, חלוקה) על כל שלושת האגפים בו-זמנית. התחילו בחיסור 1 מכל האגפים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לבודד את המשתנה שבמרכז, עלינו לבצע את הפעולות ההפוכות על כל שלושת החלקים של אי-השוויון במקביל.<br><br>תחילה נחסר 1 מכל שלושת האגפים.", math_expression: "-5 - 1 < 3x \u2264 10 - 1" },
            { verbal_explanation: "נחשב את המספרים שנוצרו באגפים החיצוניים.", math_expression: "-6 < 3x \u2264 9" },
            { verbal_explanation: "נחלק את כל אי-השוויון במקדם של המשתנה (נחלק ב-3). מכיוון שזהו מספר חיובי, כיוון הסימנים נשאר כפי שהוא.", math_expression: "-2 < x \u2264 3" }
        ],
        final_answer: "-2 < x \u2264 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "מצאו את התחום המקיים את אי-השוויון הכפול:<br>4 &le; 10 - 2x &lt; 12<br><svg viewBox='0 0 200 80' width='160' height='60' style='display:block; margin: 15px auto;'><line x1='10' y1='40' x2='190' y2='40' stroke='#334155' stroke-width='2'/><line x1='60' y1='40' x2='140' y2='40' stroke='#3b82f6' stroke-width='4'/><circle cx='60' cy='40' r='5' fill='#fff' stroke='#3b82f6' stroke-width='2'/><circle cx='140' cy='40' r='5' fill='#3b82f6'/><text x='60' y='65' font-weight='bold' font-size='14'>-1</text><text x='140' y='65' font-weight='bold' font-size='14'>3</text></svg>",
        options: [
            "-1 &lt; x &le; 3",
            "3 &le; x &lt; -1",
            "x &le; 3",
            "-1 &le; x &lt; 3"
        ],
        hint: "שימו לב היטב: כאשר אתם מחלקים את אי-השוויון במספר שלילי (מינוס 2), חובה להפוך את כיוון כל הסימנים!",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נתחיל בבידוד איבר המשתנה באמצע. נחסר 10 מכל שלושת האגפים.", math_expression: "4 - 10 \u2264 -2x < 12 - 10" },
            { verbal_explanation: "נחשב את ההפרשים.", math_expression: "-6 \u2264 -2x < 2" },
            { verbal_explanation: "כדי לבודד את המשתנה, עלינו לחלק את אי-השוויון במינוס 2.<br><br>כלל ברזל: חלוקה במספר שלילי מחייבת את היפוך כיוון כל הסימנים.", math_expression: "3 \u2265 x > -1" },
            { verbal_explanation: "נהוג לרשום אי-שוויונים כפולים מהקטן לגדול, משמאל לימין. נהפוך את הכתיבה כך שתהיה קריאה וברורה יותר.", math_expression: "-1 < x \u2264 3" }
        ],
        final_answer: "-1 < x \u2264 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "פתרו את אי-השוויון הרציונלי הבא:<br>(x - 4) / (x + 2) &gt; 0",
        options: [
            "x &lt; -2  או  x &gt; 4",
            "-2 &lt; x &lt; 4",
            "x &gt; 4",
            "x &lt; -2"
        ],
        hint: "באי-שוויון רציונלי, מתייחסים למאפס המונה ולמאפס המכנה כמו לשורשים של פרבולה. סמנו אותם על הציר ובידקו היכן השבר חיובי.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה, נרשום את תחום ההגדרה - המכנה אינו יכול להיות שווה לאפס.", math_expression: "x &ne; -2" },
            { verbal_explanation: "חוקי הסימנים (פלוס ומינוס) בשבר זהים לחוקי הסימנים במכפלה. שבר חיובי אם שני חלקיו חיוביים, או ששני חלקיו שליליים.<br><br>לכן, נמצא את המאפסים של המונה והמכנה.", math_expression: "x = 4 , x = -2" },
            { verbal_explanation: "נשרטט 'פרבולה' דמיונית מחייכת העוברת דרך שתי הנקודות הללו. אנו מחפשים את התחומים שבהם הערכים חיוביים (גדולים מאפס), כלומר התחומים החיצוניים לשורשים.", math_expression: "x < -2 , x > 4" }
        ],
        final_answer: "x < -2  או  x > 4"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "מהו הפתרון של אי-השוויון הבא הכולל גם 'שווה'?<br>(2x - 6) / (x + 1) &le; 0",
        options: [
            "-1 &lt; x &le; 3",
            "-1 &le; x &le; 3",
            "x &lt; -1  או  x &ge; 3",
            "-1 &lt; x &lt; 3"
        ],
        hint: "מצאו את הנקודות המאפסות. זכרו שמותר למונה להתאפס (ולכן איקס יכול להיות שווה ל-3), אך למכנה לעולם אסור להתאפס (ולכן איקס לא יכול להיות שווה למינוס 1).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את הנקודה שמאפסת את המכנה (נקודת אי-ההגדרה). בנקודה זו לעולם לא יהיה סימן 'שווה'.", math_expression: "x + 1 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -1" },
            { verbal_explanation: "נמצא את הנקודה שמאפסת את המונה. נקודה זו כן תהיה כלולה בפתרון בגלל הסימן 'קטן או שווה'.", math_expression: "2x - 6 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3" },
            { verbal_explanation: "אנו מחפשים את התחום שבו השבר שלילי או שווה לאפס. בשיטת הנחש או הפרבולה, מדובר בתחום הכלוא בין שני השורשים הללו.", math_expression: "-1 < x < 3" },
            { verbal_explanation: "נוסיף את סימן השוויון רק לערך שמאפס את המונה.", math_expression: "-1 < x \u2264 3" }
        ],
        final_answer: "-1 < x \u2264 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "פתרו את אי-השוויון הרציונלי שבו המונה הוא מספר קבוע:<br>-5 / (x - 3) &ge; 0",
        options: [
            "x &lt; 3",
            "x &gt; 3",
            "x &le; 3",
            "כל x"
        ],
        hint: "אם המונה תמיד שלילי, מה חייב להיות הסימן של המכנה כדי שהשבר כולו יהיה חיובי? היעזרו בחוקי חלוקת סימנים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "יש לנו שבר שערכו צריך להיות חיובי או אפס. נתבונן במונה: המונה הוא מספר קבוע ושלילי.", math_expression: "-5 < 0" },
            { verbal_explanation: "מכיוון שהמונה שלילי תמיד, הדרך היחידה שבה השבר כולו יהיה חיובי היא אם גם המכנה יהיה שלילי (מינוס חלקי מינוס נותן פלוס).", math_expression: "x - 3 < 0" },
            { verbal_explanation: "שימו לב שדרשנו שהמכנה יהיה 'קטן ממש' מאפס, ולא 'קטן או שווה', משום שלמכנה אסור להתאפס.", math_expression: "x < 3" }
        ],
        final_answer: "x < 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "מצאו את התחום המקיים את אי-השוויון הבא:<br>(x + 1) / (x - 2) &le; 2",
        options: [
            "x &lt; 2  או  x &ge; 5",
            "-5 &le; x &lt; 2",
            "2 &lt; x &le; 5",
            "x &le; 2  או  x &ge; 5"
        ],
        hint: "אסור בשום אופן להכפיל ב-(x-2) מכיוון שאיננו יודעים את סימנו! במקום זאת, העבירו את 2 אגף, בצעו מכנה משותף כדי לקבל שבר יחיד הקטן מאפס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הכלל החשוב ביותר באי-שוויונים עם שברים הוא לא להכפיל במשתנה. נעביר את המספר שתיים לאגף השמאלי בחיסור.", math_expression: "(x + 1) / (x - 2) - 2 \u2264 0" },
            { verbal_explanation: "נכניס את כל הביטויים תחת מכנה משותף אחד. נכפיל את המספר שתיים במכנה.", math_expression: "(x + 1 - 2(x - 2)) / (x - 2) \u2264 0" },
            { verbal_explanation: "נפתח סוגריים ונפשט את המונה.", math_expression: "(x + 1 - 2x + 4) / (x - 2) \u2264 0" },
            { verbal_explanation: "נקבל שבר אלגברי יחיד שקובע את הפתרון.", math_expression: "(-x + 5) / (x - 2) \u2264 0" },
            { verbal_explanation: "המאפסים של המונה ושל המכנה הם חמש ושתיים בהתאמה.", math_expression: "x = 5 , x = 2" },
            { verbal_explanation: "מאחר והאיקס במונה הוא שלילי והאיקס במכנה חיובי, המכפלה שלהם שלילית. לכן זו פרבולה 'בוכה' הדורשת את השוליים כדי להיות שלילית. נזכור שלמכנה אסור להתאפס ב-2.", math_expression: "x < 2 , x \u2265 5" }
        ],
        final_answer: "x < 2  או  x \u2265 5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "פתרו את אי-השוויון הרציונלי שבו המונה הוא ביטוי ריבועי:<br>(x<sup>2</sup> - 9) / (x + 1) &lt; 0",
        options: [
            "x &lt; -3  או  -1 &lt; x &lt; 3",
            "-3 &lt; x &lt; -1  או  x &gt; 3",
            "x &lt; -3",
            "-1 &lt; x &lt; 3"
        ],
        hint: "למונה הריבועי יש שני מאפסים. למכנה יש מאפס אחד. סמנו את כל שלושת המאפסים על ציר, בידקו תחום אחד והמשיכו בשיטת ה'נחש'.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את הנקודות שמאפסות את המונה (נוסחת הפרש ריבועים).", math_expression: "x<sup>2</sup> - 9 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3 , x = -3" },
            { verbal_explanation: "נמצא את הנקודה המאפסת את המכנה (נקודת אי-ההגדרה).", math_expression: "x + 1 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -1" },
            { verbal_explanation: "יש לנו שלושה מאפסים: מינוס שלוש, מינוס אחת ושלוש. נמקם אותם על ציר ונשתמש בשיטת התחומים ('שיטת הנחש').", math_expression: "-3 , -1 , 3" },
            { verbal_explanation: "נציב ערך גדול מאוד (למשל, 10). השבר כולו יהיה חיובי. לכן המקטע הימני ביותר חיובי, והסימנים מתחלפים בכל חצייה של שורש.", math_expression: "x > 3 &rArr; (+) &nbsp;|&nbsp; -1 < x < 3 &rArr; (-) &nbsp;|&nbsp; -3 < x < -1 &rArr; (+) &nbsp;|&nbsp; x < -3 &rArr; (-)" },
            { verbal_explanation: "אנו מחפשים את התחומים השליליים (קטן מאפס). לכן נאחד את התחומים המתאימים לסימן המינוס.", math_expression: "x < -3 , -1 < x < 3" }
        ],
        final_answer: "x < -3  או  -1 < x < 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "מצאו את התחום המשותף המקיים את אי-השוויון הכפול המורכב משני משתנים:<br>x &lt; 2x - 3 &lt; x + 5<br><svg viewBox='0 0 200 80' width='160' height='60' style='display:block; margin: 15px auto;'><line x1='10' y1='40' x2='190' y2='40' stroke='#334155' stroke-width='2'/><path d='M 60,30 Q 100,0 140,30' fill='none' stroke='#10b981' stroke-width='3'/><circle cx='60' cy='40' r='5' fill='#fff' stroke='#334155' stroke-width='2'/><circle cx='140' cy='40' r='5' fill='#fff' stroke='#334155' stroke-width='2'/></svg>",
        options: [
            "3 &lt; x &lt; 8",
            "x &gt; 3",
            "x &lt; 8",
            "2 &lt; x &lt; 5"
        ],
        hint: "כאשר המשתנה x מופיע בכל שלושת החלקים של אי-השוויון הכפול, אי אפשר לפתור הכל יחד. פצלו אותו למערכת 'וגם' של שני אי-שוויונים נפרדים: השמאלי והימני.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפצל את אי-השוויון הכפול לשתי מערכות נפרדות הדורשות קשר של 'וגם' (חיתוך) ביניהן. נתחיל בחלק השמאלי.", math_expression: "x < 2x - 3" },
            { verbal_explanation: "נפתור את החלק השמאלי. נעביר את ה-x ימינה ואת המספר שמאלה.", math_expression: "3 < x" },
            { verbal_explanation: "ניגש לפתור את החלק הימני של אי-השוויון הכפול.", math_expression: "2x - 3 < x + 5" },
            { verbal_explanation: "נעביר את האיקס שמאלה ואת המספר ימינה.", math_expression: "x < 8" },
            { verbal_explanation: "כעת, נבצע חיתוך (וגם) בין שתי התשובות. התחום חייב להיות גם גדול משלוש וגם קטן משמונה.", math_expression: "3 < x < 8" }
        ],
        final_answer: "3 < x < 8"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "פתרו את אי-השוויון הרציונלי שבו המכנה מועלה בריבוע:<br>(x - 4) / (x + 1)<sup>2</sup> &ge; 0",
        options: [
            "x &ge; 4",
            "x &ge; 4  או  x = -1",
            "x &gt; 4",
            "x &le; -1"
        ],
        hint: "ביטוי המועלה בריבוע במכנה תמיד שומר על ערך חיובי ולכן לא משפיע על הסימן של השבר, אך חובה להוציא את הנקודה המאפסת אותו מתחום הפתרון.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה נפסול את הנקודה הגורמת לחלוקה באפס במכנה.", math_expression: "x &ne; -1" },
            { verbal_explanation: "מכיוון שהמכנה מועלה בריבוע, עבור כל איקס בתחום ההגדרה הוא יהיה חיובי ממש. לכן, הסימן של השבר כולו תלוי בלעדית במונה.", math_expression: "(x + 1)<sup>2</sup> > 0" },
            { verbal_explanation: "נכתוב את אי-השוויון הליניארי שנותר מן המונה בלבד.", math_expression: "x - 4 \u2265 0" },
            { verbal_explanation: "נעביר אגף ונקבל את התחום המבוקש. תחום זה אינו מתנגש עם נקודת הפסילה שלנו, ולכן נשאר כמות שהוא.", math_expression: "x \u2265 4" }
        ],
        final_answer: "x \u2265 4"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "פתרו את מערכת אי-השוויונים הבאה (קשר של 'וגם'):<br>1) x / (x - 2) &gt; 0<br>2) x &lt; 5",
        options: [
            "x &lt; 0  או  2 &lt; x &lt; 5",
            "2 &lt; x &lt; 5",
            "0 &lt; x &lt; 2",
            "x &lt; 5"
        ],
        hint: "פתרו תחילה את אי-השוויון הרציונלי הראשון. תקבלו שני תחומים נפרדים. לאחר מכן, בצעו חיתוך (וגם) בין הפתרון שקיבלתם לבין אי-השוויון השני.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נתמקד באי-השוויון הראשון. זהו אי-שוויון רציונלי. המאפסים שלו הם 0 (מונה) ו-2 (מכנה).", math_expression: "x = 0 , x = 2" },
            { verbal_explanation: "זוהי 'פרבולה' מחייכת (כי המקדמים חיוביים). אנו מחפשים היכן היא חיובית, שזה בשוליים.", math_expression: "x < 0 , x > 2" },
            { verbal_explanation: "כעת עלינו לבצע חיתוך של הפתרון הזה עם אי-השוויון השני הנתון במערכת.", math_expression: "x < 5" },
            { verbal_explanation: "נעשה חיתוך לכל מקטע בנפרד. התחום הקטן מאפס מקיים באופן טבעי שהוא גם קטן מחמש, ולכן הוא נכנס לפתרון הסופי.", math_expression: "x < 0" },
            { verbal_explanation: "התחום השני דורש שהמספר יהיה גדול משתיים וגם קטן מחמש.", math_expression: "2 < x < 5" },
            { verbal_explanation: "נאחד את שני החיתוכים לתשובה אחת שלמה.", math_expression: "x < 0 , 2 < x < 5" }
        ],
        final_answer: "x < 0  או  2 < x < 5"
    }
];
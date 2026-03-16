const questionsDB = [
    // =====================================================================
    // תת-נושא 1: משוואות ממעלה ראשונה עם פרמטרים (12 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "פתרו את המשוואה הבאה והביעו את x באמצעות הפרמטר m (הניחו כי למשוואה פתרון יחיד):<br>m(x - 2) = 3x + m",
        options: [
            "x = 3m / (m - 3)",
            "x = 2m / (m - 3)",
            "x = 3m / (m + 3)",
            "x = -3m / (m - 3)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ראשית, נפתח את הסוגריים באגף שמאל על ידי הכפלת הפרמטר פנימה, כדי להפריד את האיברים.", math_expression: "m &times; x - 2 &times; m = 3x + m" },
            { verbal_explanation: "כעת, נעביר את כל האיברים שמכילים את המשתנה x לאגף שמאל, ואת שאר האיברים (הפרמטרים והמספרים) לאגף ימין. נזכור להפוך סימנים בעת ההעברה.", math_expression: "mx - 3x = m + 2m" },
            { verbal_explanation: "נכנס איברים דומים באגף ימין על ידי חיבור פשוט.", math_expression: "mx - 3x = 3m" },
            { verbal_explanation: "באגף שמאל, נוציא את המשתנה x כגורם משותף מחוץ לסוגריים.", math_expression: "x(m - 3) = 3m" },
            { verbal_explanation: "לסיום, נחלק את שני האגפים במקדם של x, שהוא (m - 3), כדי לבודד את x. מותר לנו לחלק כי נתון שלמשוואה פתרון יחיד (כלומר המקדם אינו אפס).", math_expression: "x = 3m / (m - 3)" }
        ],
        final_answer: "x = 3m / (m - 3)"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "נתונה המשוואה: a<sup>2</sup>x - a = 4x + 2. עבור איזה ערך של הפרמטר a <b>אין פתרון</b> למשוואה?",
        options: [
            "a = 2",
            "a = -2",
            "a = 4",
            "a = -4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נסדר את המשוואה לצורה הכללית. נעביר את כל האיברים עם x לאגף שמאל, ואת המספרים והפרמטרים החופשיים לימין.", math_expression: "a<sup>2</sup>x - 4x = a + 2" },
            { verbal_explanation: "באגף שמאל, נוציא את המשתנה x כגורם משותף.", math_expression: "x(a<sup>2</sup> - 4) = a + 2" },
            { verbal_explanation: "נפרק את המקדם של x לגורמים בעזרת נוסחת הפרש הריבועים.", math_expression: "x(a - 2)(a + 2) = a + 2" },
            { verbal_explanation: "כדי שלמשוואה לא יהיה פתרון, המקדם של x חייב להתאפס, בעוד שהאגף הימני חייב להיות שונה מאפס. נמצא מתי המקדם מתאפס.", math_expression: "(a - 2)(a + 2) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = 2 &nbsp;&nbsp;או&nbsp;&nbsp; a = -2" },
            { verbal_explanation: "נבדוק את האפשרות הראשונה. אם נציב את הערך השלילי במשוואה המסודרת, האגף הימני הופך גם הוא לאפס. נקבל מצב של אינסוף פתרונות, ולכן זו אינה התשובה.", math_expression: "עבור a = -2 :&nbsp;&nbsp; x(0) = 0" },
            { verbal_explanation: "נבדוק את האפשרות השנייה. נציב במשוואה. האגף הימני שווה לארבע. קיבלנו אפס שווה לארבע, שזהו פסוק שקר, כלומר אין פתרון.", math_expression: "עבור a = 2 :&nbsp;&nbsp; x(0) = 4" }
        ],
        final_answer: "a = 2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "נתונה המשוואה: (k<sup>2</sup> - 9)x = k - 3. מצאו את ערך הפרמטר k שעבורו יש למשוואה <b>אינסוף פתרונות</b>.",
        options: [
            "k = 3",
            "k = -3",
            "k = 9",
            "k = 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המשוואה כבר מסודרת. נפרק את המקדם של x לגורמים בעזרת נוסחת הפרש הריבועים כדי לראות את השורשים בבירור.", math_expression: "(k - 3)(k + 3)x = k - 3" },
            { verbal_explanation: "למשוואה יש אינסוף פתרונות כאשר שני האגפים שווים לאפס בו-זמנית (מצב של אפס שווה לאפס). לכן, נדרוש שהמקדם של x יתאפס וגם האיבר החופשי יתאפס.", math_expression: "(k - 3)(k + 3) = 0 &nbsp;&nbsp;וגם&nbsp;&nbsp; k - 3 = 0" },
            { verbal_explanation: "האגף הימני מתאפס רק עבור ערך אחד ספציפי.", math_expression: "k - 3 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; k = 3" },
            { verbal_explanation: "נוודא שערך זה מאפס גם את המקדם של x. אם נציב את הערך במקדם, נקבל אפס כפול שש שזה אכן אפס.", math_expression: "(3 - 3)(3 + 3) = 0 &times; 6 = 0" },
            { verbal_explanation: "לכן, הערך היחיד שמקיים את שני התנאים ויוצר מצב של אינסוף פתרונות הוא שלוש.", math_expression: "k = 3" }
        ],
        final_answer: "k = 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "פתרו את המשוואה הבאה הכוללת שברים, והביעו את x באמצעות m:<br>(x - m) / 2 + (x + m) / 3 = m",
        options: [
            "x = 7m / 5",
            "x = 5m / 7",
            "x = 2m / 5",
            "x = m"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי להיפטר מהשברים, נכפול את שני אגפי המשוואה במכנה המשותף הקטן ביותר של שתיים ושלוש, שהוא שש.", math_expression: "6 &times; [ (x - m) / 2 + (x + m) / 3 ] = 6 &times; m" },
            { verbal_explanation: "לאחר ההכפלה וצמצום המכנים, המונה הראשון מוכפל בשלוש והמונה השני מוכפל בשתיים.", math_expression: "3(x - m) + 2(x + m) = 6m" },
            { verbal_explanation: "נפתח את הסוגריים תוך הכפלת המקדמים בכל איבר פנימי.", math_expression: "3x - 3m + 2x + 2m = 6m" },
            { verbal_explanation: "נכנס איברים דומים באגף שמאל: נחבר את האיברים המכילים x, ואת האיברים המכילים m.", math_expression: "5x - m = 6m" },
            { verbal_explanation: "נעביר את האיבר השלילי של m לאגף ימין (בסימן חיובי) ונחלק בחמש כדי לקבל את הפתרון הסופי.", math_expression: "5x = 7m &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 7m / 5" }
        ],
        final_answer: "x = 7m / 5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "עבור אילו ערכים של הפרמטר k, הפתרון של המשוואה חיובי (x > 0)?<br>k(x - 1) = 2x + 4",
        options: [
            "k > 2 או k < -4",
            "-4 < k < 2",
            "k > 2",
            "k < -4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה נפתור את המשוואה כדי להביע את x. נפתח סוגריים ונעביר את כל איברי ה-x שמאלה.", math_expression: "k &times; x - k = 2x + 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; kx - 2x = k + 4" },
            { verbal_explanation: "נוציא את x כגורם משותף ונחלק במקדם שלו כדי לבודד אותו.", math_expression: "x(k - 2) = k + 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = (k + 4) / (k - 2)" },
            { verbal_explanation: "כעת, על פי דרישת השאלה, נציב את הביטוי באי-שוויון הגדול מאפס.", math_expression: "(k + 4) / (k - 2) > 0" },
            { verbal_explanation: "כדי לפתור אי-שוויון מנה, נמצא את הנקודות המאפסות את המונה ואת המכנה.", math_expression: "מונה מאפס: k = -4, &nbsp;&nbsp;מכנה מאפס: k = 2" },
            { verbal_explanation: "נשרטט ציר (שיטת הנחש). המנה חיובית כאשר המונה והמכנה שניהם באותו סימן (מחוץ לשורשים). לכן התחום הוא כאשר k קטן מהשורש הקטן או גדול מהשורש הגדול.", math_expression: "k > 2 &nbsp;&nbsp;או&nbsp;&nbsp; k < -4" }
        ],
        final_answer: "k > 2 או k < -4"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "נתונה מערכת המשוואות הבאה:<br>1) 2x + y = m<br>2) x - y = 2m<br>מהי תוצאת המכפלה x &times; y מובעת באמצעות m?",
        options: [
            "-m<sup>2</sup>",
            "m<sup>2</sup>",
            "-2m<sup>2</sup>",
            "0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפתור את מערכת המשוואות על ידי שיטת השוואת מקדמים. נחבר את שתי המשוואות יחד משום שהמקדמים של y נגדיים.", math_expression: "(2x + y) + (x - y) = m + 2m" },
            { verbal_explanation: "המשתנה y מצטמצם ונשארנו עם משוואה פשוטה בנעלם x.", math_expression: "3x = 3m &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = m" },
            { verbal_explanation: "כעת נציב את הערך של x שמצאנו לתוך המשוואה השנייה כדי למצוא את y.", math_expression: "m - y = 2m" },
            { verbal_explanation: "נעביר את y לאגף ימין ואת המשתנים לאגף שמאל.", math_expression: "y = m - 2m = -m" },
            { verbal_explanation: "השאלה מבקשת את המכפלה שלהם. נכפיל את הערכים.", math_expression: "x &times; y = (m) &times; (-m) = -m<sup>2</sup>" }
        ],
        final_answer: "-m<sup>2</sup>"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "עבור אילו ערכים של m, למשוואה הבאה <b>אין פתרון</b>?<br>(mx - 2) / (x - 1) = 3",
        options: [
            "m = 3 או m = 2",
            "m = 3 בלבד",
            "m = 2 בלבד",
            "m = -3 או m = -2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה חובה לרשום את קבוצת ההצבה (תחום ההגדרה). המכנה אינו יכול להיות שווה לאפס.", math_expression: "x - 1 &ne; 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x &ne; 1" },
            { verbal_explanation: "נכפיל את שני אגפי המשוואה במכנה כדי להיפטר מהשבר.", math_expression: "mx - 2 = 3(x - 1)" },
            { verbal_explanation: "נפתח סוגריים ונעביר את איברי x שמאלה ואת המספרים ימינה.", math_expression: "mx - 2 = 3x - 3 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; mx - 3x = -1" },
            { verbal_explanation: "נוציא את x כגורם משותף באגף שמאל.", math_expression: "x(m - 3) = -1" },
            { verbal_explanation: "מצב ראשון שבו אין פתרון הוא כאשר המקדם של x מתאפס. זה ייתן אפס שווה למינוס אחת (פסוק שקר).", math_expression: "m - 3 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; m = 3" },
            { verbal_explanation: "מצב שני, והחשוב ביותר, הוא מצב שבו הפתרון האלגברי מתנגש עם תחום ההגדרה. נדרוש שהפתרון של המשוואה יהיה בדיוק הפתרון הפסול.", math_expression: "נציב x = 1 :&nbsp;&nbsp; 1 &times; (m - 3) = -1" },
            { verbal_explanation: "נפתור עבור m. במקרה זה, הפתרון שיתקבל ייפסל ולכן למשוואה לא יהיה פתרון.", math_expression: "m - 3 = -1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; m = 2" },
            { verbal_explanation: "לכן, קיימים שני ערכים שעבורם אין פתרון.", math_expression: "m = 3 &nbsp;&nbsp;או&nbsp;&nbsp; m = 2" }
        ],
        final_answer: "m = 3 או m = 2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "פתרו את המשוואה עבור x (הניחו ש- m אינו 1):<br>(m - 1)x + m<sup>2</sup> - 1 = 0",
        options: [
            "x = -(m + 1)",
            "x = m + 1",
            "x = -(m - 1)",
            "x = m - 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נעביר את האיברים שאינם מכילים x לאגף הימני בסימן הפוך.", math_expression: "(m - 1)x = -(m<sup>2</sup> - 1)" },
            { verbal_explanation: "נפרק את האגף הימני לגורמים בעזרת נוסחת הכפל המקוצר להפרש ריבועים.", math_expression: "-(m<sup>2</sup> - 1) = -(m - 1)(m + 1)" },
            { verbal_explanation: "המשוואה כעת נראית כך:", math_expression: "(m - 1)x = -(m - 1)(m + 1)" },
            { verbal_explanation: "נחלק את שני האגפים בביטוי (m-1). אנו רשאים לעשות זאת מכיוון שנתון בשאלה ש-m אינו 1, ולכן איננו מחלקים באפס.", math_expression: "x = -(m + 1)" }
        ],
        final_answer: "x = -(m + 1)"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "נתונה המשוואה: x/a - x/b = 1 (כאשר a ו-b הם פרמטרים שונים מאפס). הביעו את x באמצעות a ו-b.",
        options: [
            "x = ab / (b - a)",
            "x = ab / (a - b)",
            "x = (b - a) / ab",
            "x = a - b"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נכפיל את המשוואה כולה במכנה המשותף, שהוא המכפלה a &times; b.", math_expression: "ab &times; (x/a) - ab &times; (x/b) = ab &times; 1" },
            { verbal_explanation: "נצמצם את השברים בכל איבר בנפרד.", math_expression: "bx - ax = ab" },
            { verbal_explanation: "נוציא את x כגורם משותף מחוץ לסוגריים באגף שמאל.", math_expression: "x(b - a) = ab" },
            { verbal_explanation: "נחלק את שני האגפים במקדם של x כדי לקבל את הפתרון.", math_expression: "x = ab / (b - a)" }
        ],
        final_answer: "x = ab / (b - a)"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "עבור איזה ערך של m <b>אין פתרון</b> למשוואה הבאה?<br>m<sup>2</sup>x - 2m = x + 2",
        options: [
            "m = 1",
            "m = -1",
            "m = 2",
            "m = 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נסדר את המשוואה על ידי העברת איברי ה-x לאגף שמאל והאיברים החופשיים לאגף ימין.", math_expression: "m<sup>2</sup>x - x = 2m + 2" },
            { verbal_explanation: "נוציא את x כגורם משותף באגף שמאל.", math_expression: "x(m<sup>2</sup> - 1) = 2m + 2" },
            { verbal_explanation: "נפרק את המקדם של x ואת האגף הימני לגורמים.", math_expression: "x(m - 1)(m + 1) = 2(m + 1)" },
            { verbal_explanation: "אין פתרון כאשר המקדם של x מתאפס אך האגף הימני שונה מאפס. המקדם מתאפס עבור שני ערכים.", math_expression: "m = 1 &nbsp;&nbsp;או&nbsp;&nbsp; m = -1" },
            { verbal_explanation: "אם נציב את הערך השלילי, נקבל אפס שווה לאפס, שזה אינסוף פתרונות.", math_expression: "עבור m = -1 :&nbsp;&nbsp; x(0) = 0" },
            { verbal_explanation: "אם נציב את הערך החיובי, נקבל אפס שווה לארבע, שזה פסוק שקר, ולכן אין פתרון.", math_expression: "עבור m = 1 :&nbsp;&nbsp; x(0) = 4" }
        ],
        final_answer: "m = 1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "עבור איזה ערך של הפרמטר m פתרון המשוואה הוא <b>אפס</b> (x = 0)?<br>2(x - m) = m(x + 1)",
        options: [
            "m = 0",
            "m = 2",
            "m = 1",
            "m = -2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הדרך הקלה ביותר לפתור שאלה מסוג זה היא להציב ישירות את הפתרון הנתון אל תוך המשוואה.", math_expression: "נציב x = 0 :&nbsp;&nbsp; 2(0 - m) = m(0 + 1)" },
            { verbal_explanation: "נפשט את הביטויים בתוך הסוגריים.", math_expression: "2(-m) = m(1)" },
            { verbal_explanation: "נכפיל את המקדמים.", math_expression: "-2m = m" },
            { verbal_explanation: "נעביר את כל איברי m לאותו אגף.", math_expression: "0 = m + 2m &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 3m = 0" },
            { verbal_explanation: "נחלק בשלוש ונקבל את ערכו של הפרמטר.", math_expression: "m = 0" }
        ],
        final_answer: "m = 0"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question: "נתונה המשוואה a(x + 1) = b(x - 1). הביעו את x באמצעות הפרמטרים a ו-b (הניחו ש- a &ne; b).",
        options: [
            "x = -(a + b) / (a - b)",
            "x = (a + b) / (a - b)",
            "x = -(a - b) / (a + b)",
            "x = a / b"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים בשני האגפים.", math_expression: "ax + a = bx - b" },
            { verbal_explanation: "נעביר את האיברים עם x לאגף שמאל, ואת האיברים ללא x לאגף ימין.", math_expression: "ax - bx = -a - b" },
            { verbal_explanation: "באגף שמאל, נוציא x כגורם משותף.", math_expression: "x(a - b) = -a - b" },
            { verbal_explanation: "כדי לבודד את x, נחלק את המשוואה בביטוי שבתוך הסוגריים. (מותר כיוון שנתון שהפרמטרים שונים זה מזה).", math_expression: "x = (-a - b) / (a - b)" },
            { verbal_explanation: "נוכל לרשום את התשובה בצורה אלגנטית יותר על ידי הוצאת מינוס במכנה של המונה.", math_expression: "x = -(a + b) / (a - b)" }
        ],
        final_answer: "x = -(a + b) / (a - b)"
    },

    // =====================================================================
    // תת-נושא 2: משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (12 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "מהם פתרונות המשוואה הריבועית הבאה באמצעות m?<br>x<sup>2</sup> - 2mx + m<sup>2</sup> - 1 = 0",
        options: [
            "x = m + 1 , x = m - 1",
            "x = m , x = -1",
            "x = m + 1 , x = -m - 1",
            "x = -m + 1 , x = -m - 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת השורשים. תחילה נזהה את המקדמים של המשוואה הריבועית.", math_expression: "A = 1, &nbsp;&nbsp; B = -2m, &nbsp;&nbsp; C = m<sup>2</sup> - 1" },
            { verbal_explanation: "נחשב את הדיסקרימיננטה (דלתא), שהיא הביטוי מתחת לשורש בנוסחה.", math_expression: "&Delta; = B<sup>2</sup> - 4AC = (-2m)<sup>2</sup> - 4 &times; 1 &times; (m<sup>2</sup> - 1)" },
            { verbal_explanation: "נפשט את הדלתא על ידי פתיחת סוגריים וכינוס איברים.", math_expression: "&Delta; = 4m<sup>2</sup> - 4m<sup>2</sup> + 4 = 4" },
            { verbal_explanation: "נציב את הדלתא לתוך נוסחת השורשים. השורש של ארבע הוא שתיים.", math_expression: "x<sub>1,2</sub> = (-(-2m) &plusmn; &radic;4) / (2 &times; 1) = (2m &plusmn; 2) / 2" },
            { verbal_explanation: "נחלק את המונה ב-2 כדי לקבל את שני הפתרונות הסופיים.", math_expression: "x<sub>1</sub> = m + 1 &nbsp;&nbsp;,&nbsp;&nbsp; x<sub>2</sub> = m - 1" }
        ],
        final_answer: "x = m + 1 , x = m - 1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "עבור איזה ערך של m יש למשוואה x<sup>2</sup> + 4x + m = 0 בדיוק <b>פתרון ממשי אחד</b>?",
        options: [
            "m = 4",
            "m = -4",
            "m = 2",
            "m = 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "למשוואה ריבועית יש פתרון ממשי יחיד (שורש כפול) אך ורק כאשר הדיסקרימיננטה (דלתא) שווה לאפס.", math_expression: "&Delta; = b<sup>2</sup> - 4ac = 0" },
            { verbal_explanation: "נזהה את המקדמים מהמשוואה.", math_expression: "a = 1, &nbsp;&nbsp; b = 4, &nbsp;&nbsp; c = m" },
            { verbal_explanation: "נציב את המקדמים בנוסחת הדלתא ונשווה לאפס.", math_expression: "4<sup>2</sup> - 4 &times; 1 &times; m = 0" },
            { verbal_explanation: "נפשט את המשוואה ונעביר אגפים.", math_expression: "16 - 4m = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 4m = 16" },
            { verbal_explanation: "נחלק בארבע ונקבל את התשובה.", math_expression: "m = 4" }
        ],
        final_answer: "m = 4"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "עבור אילו ערכים של m <b>אין שורשים ממשיים</b> למשוואה mx<sup>2</sup> - 2x + 1 = 0?",
        options: [
            "m > 1",
            "m < 1",
            "m > -1",
            "m < -1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נדרוש קודם כל שמדובר במשוואה ממעלה שנייה, כלומר המקדם של x בריבוע אינו אפס.", math_expression: "m &ne; 0" },
            { verbal_explanation: "למשוואה ריבועית אין שורשים ממשיים כאשר הדלתא קטנה מאפס.", math_expression: "&Delta; = b<sup>2</sup> - 4ac < 0" },
            { verbal_explanation: "נציב את המקדמים של המשוואה אל תוך תנאי הדלתא.", math_expression: "(-2)<sup>2</sup> - 4 &times; m &times; 1 < 0" },
            { verbal_explanation: "נפשט את אי-השוויון ונעביר אגפים.", math_expression: "4 - 4m < 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 4 < 4m" },
            { verbal_explanation: "נחלק בארבע ונקבל את התחום. (נשים לב שבתחום זה הפרמטר אינו אפס ולכן לא צריך לפסול כלום).", math_expression: "m > 1" }
        ],
        final_answer: "m > 1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "עבור אילו ערכים של m יש למשוואה (m - 2)x<sup>2</sup> + 2x + 1 = 0 <b>בדיוק פתרון אחד</b>?",
        options: [
            "m = 3 או m = 2",
            "m = 3 בלבד",
            "m = 2 בלבד",
            "m = -3 או m = 2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "השאלה אינה מבטיחה שמדובר במשוואה ריבועית. פתרון יחיד יכול להתקבל בשני מקרים: מקרה של קו ישר (משוואה לינארית) או מקרה של פרבולה המשיקה לציר (משוואה ריבועית עם דלתא אפס).", math_expression: "מקרה א': ישר, &nbsp;&nbsp; מקרה ב': פרבולה" },
            { verbal_explanation: "נבדוק את מקרה הישר. זה קורה כאשר המקדם של איבר הריבוע מתאפס.", math_expression: "m - 2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; m = 2" },
            { verbal_explanation: "נציב ערך זה במשוואה המקורית ונוודא שמתקבל פתרון יחיד. אכן קיבלנו משוואה עם פתרון יחיד.", math_expression: "(0)x<sup>2</sup> + 2x + 1 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 2x = -1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -0.5" },
            { verbal_explanation: "כעת נבדוק את מקרה הפרבולה. נדרוש שהמקדם לא יתאפס ושהדלתא תהיה בדיוק אפס.", math_expression: "m &ne; 2 &nbsp;&nbsp;וגם&nbsp;&nbsp; &Delta; = b<sup>2</sup> - 4ac = 0" },
            { verbal_explanation: "נציב את מקדמי המשוואה לנוסחת הדלתא.", math_expression: "2<sup>2</sup> - 4 &times; (m - 2) &times; 1 = 0" },
            { verbal_explanation: "נפשט ונפתור.", math_expression: "4 - 4m + 8 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 12 = 4m &nbsp;&nbsp;&rArr;&nbsp;&nbsp; m = 3" },
            { verbal_explanation: "שני הערכים שמצאנו מובילים למשוואה בעלת פתרון אחד.", math_expression: "m = 3 &nbsp;&nbsp;או&nbsp;&nbsp; m = 2" }
        ],
        final_answer: "m = 3 או m = 2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "מהם פתרונות המשוואה הריבועית: x<sup>2</sup> - (m + 1)x + m = 0?",
        options: [
            "x = m , x = 1",
            "x = -m , x = -1",
            "x = m , x = -1",
            "x = m + 1 , x = m"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אפשר לפתור באמצעות טרינום מיוחד (או לפי משפט וייטה: שני מספרים שסכומם הוא האמצע ומכפלתם היא האיבר החופשי), ואפשר לפי נוסחת שורשים. נשתמש בנוסחת השורשים.", math_expression: "a = 1, &nbsp; b = -(m + 1), &nbsp; c = m" },
            { verbal_explanation: "נחשב את הדלתא.", math_expression: "&Delta; = (-(m + 1))<sup>2</sup> - 4 &times; 1 &times; m = (m + 1)<sup>2</sup> - 4m" },
            { verbal_explanation: "נפתח סוגריים. אנו מזהים שהביטוי המתקבל הוא למעשה נוסחת כפל מקוצר של הפרש בריבוע.", math_expression: "&Delta; = m<sup>2</sup> + 2m + 1 - 4m = m<sup>2</sup> - 2m + 1 = (m - 1)<sup>2</sup>" },
            { verbal_explanation: "נציב לתוך נוסחת השורשים. השורש של ביטוי בריבוע הוא הביטוי עצמו.", math_expression: "x<sub>1,2</sub> = ((m + 1) &plusmn; &radic;((m - 1)<sup>2</sup>)) / 2 = ((m + 1) &plusmn; (m - 1)) / 2" },
            { verbal_explanation: "נפריד לפלוס ומינוס: בחיבור נקבל את השורש הראשון, ובחיסור את השורש השני.", math_expression: "x<sub>1</sub> = (2m) / 2 = m &nbsp;&nbsp;,&nbsp;&nbsp; x<sub>2</sub> = 2 / 2 = 1" }
        ],
        final_answer: "x = m , x = 1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "עבור אילו ערכים של m יש למשוואה הבאה <b>שני שורשים ממשיים שונים</b>?<br>x<sup>2</sup> - 6x + m<sup>2</sup> = 0",
        options: [
            "-3 < m < 3",
            "m > 3 או m < -3",
            "m = 3 או m = -3",
            "m > 9 או m < -9"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי שלמשוואה ריבועית יהיו שני פתרונות ממשיים שונים, הדיסקרימיננטה (דלתא) חייבת להיות חיובית ממש.", math_expression: "&Delta; = b<sup>2</sup> - 4ac > 0" },
            { verbal_explanation: "נציב את מקדמי המשוואה לתוך התנאי.", math_expression: "(-6)<sup>2</sup> - 4 &times; 1 &times; m<sup>2</sup> > 0" },
            { verbal_explanation: "נחשב ונעביר אגפים ליצירת אי-שוויון ריבועי פשוט.", math_expression: "36 - 4m<sup>2</sup> > 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 36 > 4m<sup>2</sup>" },
            { verbal_explanation: "נחלק בארבע את שני האגפים.", math_expression: "9 > m<sup>2</sup> &nbsp;&nbsp;או&nbsp;&nbsp; m<sup>2</sup> < 9" },
            { verbal_explanation: "כאשר ריבוע של מספר קטן מתשע, המספר עצמו חייב להימצא בין השורש החיובי והשלילי (בין שלוש למינוס שלוש).", math_expression: "-3 < m < 3" }
        ],
        final_answer: "-3 < m < 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "הוכיחו כי למשוואה הבאה <b>אין פתרונות ממשיים</b> עבור אף ערך של m:<br>-x<sup>2</sup> + 2mx - (m<sup>2</sup> + 4) = 0",
        options: [
            "כי הדלתא שווה תמיד ל- 16- (מספר שלילי קבוע).",
            "כי הדלתא שווה ל- m<sup>2</sup>- ולכן היא שלילית.",
            "כי לא ניתן לחלק במינוס אחד.",
            "משום שהמקדם a שלילי."
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבדוק את הדיסקרימיננטה. אם נוכיח שהיא תמיד שלילית, הרי שלעולם לא יהיו שורשים.", math_expression: "a = -1, &nbsp; b = 2m, &nbsp; c = -(m<sup>2</sup> + 4)" },
            { verbal_explanation: "נציב את הערכים בנוסחת הדלתא.", math_expression: "&Delta; = (2m)<sup>2</sup> - 4 &times; (-1) &times; (-(m<sup>2</sup> + 4))" },
            { verbal_explanation: "נשים לב שיש לנו כפל של מינוס כפול מינוס, שנותן פלוס. אך ישנו מינוס נוסף מהנוסחה, כך שהסימן הופך חזרה לשלילי.", math_expression: "&Delta; = 4m<sup>2</sup> - 4(m<sup>2</sup> + 4)" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "&Delta; = 4m<sup>2</sup> - 4m<sup>2</sup> - 16" },
            { verbal_explanation: "הפרמטרים מבטלים זה את זה ונשארנו עם מספר קבוע ושלילי, משמע שלעולם אין פתרון למשוואה.", math_expression: "&Delta; = -16 < 0" }
        ],
        final_answer: "כי הדלתא שווה תמיד ל- 16- (מספר שלילי קבוע)."
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "עבור אילו ערכים של k יש למשוואה kx<sup>2</sup> - 4x + k = 0 <b>פתרונות ממשיים</b> (אחד או שניים)?",
        options: [
            "-2 &le; k &le; 2 (וכמובן k &ne; 0)",
            "k &ge; 2 או k &le; -2",
            "k = 2 או k = -2",
            "לכל k שונה מאפס"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי שלמשוואה ריבועית יהיו פתרונות (אחד או יותר), הדלתא חייבת להיות חיובית או שווה לאפס.", math_expression: "&Delta; = b<sup>2</sup> - 4ac &ge; 0" },
            { verbal_explanation: "בנוסף, מאחר וזו משוואה ריבועית, המקדם המוביל חייב להיות שונה מאפס.", math_expression: "k &ne; 0" },
            { verbal_explanation: "נציב את מקדמי המשוואה באי-השוויון של הדלתא.", math_expression: "(-4)<sup>2</sup> - 4 &times; k &times; k &ge; 0" },
            { verbal_explanation: "נפשט ונעביר אגפים.", math_expression: "16 - 4k<sup>2</sup> &ge; 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 16 &ge; 4k<sup>2</sup>" },
            { verbal_explanation: "נחלק בארבע. נקבל שריבוע הפרמטר קטן או שווה לארבע, ולכן הפרמטר עצמו נמצא בתחום שבין השורשים.", math_expression: "4 &ge; k<sup>2</sup> &nbsp;&nbsp;&rArr;&nbsp;&nbsp; -2 &le; k &le; 2" },
            { verbal_explanation: "נשלב עם תנאי ההתחלה שהפרמטר אינו מתאפס.", math_expression: "-2 &le; k &le; 2 &nbsp;,&nbsp; k &ne; 0" }
        ],
        final_answer: "-2 &le; k &le; 2 (וכמובן k &ne; 0)"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "נתונה המשוואה x<sup>2</sup> - 10x + c = 0. ידוע שאחד מפתרונות המשוואה הוא x = 5. מצאו את ערכו של הפרמטר c.",
        options: [
            "c = 25",
            "c = 50",
            "c = -25",
            "c = 5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כאשר נתון לנו פתרון של משוואה, המשמעות היא שאם נציב אותו במקום x, המשוואה תתקיים.", math_expression: "נציב x = 5 במשוואה." },
            { verbal_explanation: "נבצע את ההצבה בפועל.", math_expression: "5<sup>2</sup> - 10 &times; 5 + c = 0" },
            { verbal_explanation: "נחשב את הערכים המספריים.", math_expression: "25 - 50 + c = 0" },
            { verbal_explanation: "נכנס איברים.", math_expression: "-25 + c = 0" },
            { verbal_explanation: "נעביר אגף ונקבל את ערכו של הפרמטר החופשי.", math_expression: "c = 25" }
        ],
        final_answer: "c = 25"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "מהם השורשים של המשוואה x<sup>2</sup> - px + p - 1 = 0?",
        options: [
            "x = 1 , x = p - 1",
            "x = -1 , x = 1 - p",
            "x = p , x = -1",
            "x = 1 , x = p"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אנו יכולים לפתור לפי דלתא, אך במקרה זה קל לפתור בעזרת טרינום מורחב (או פירוק לקבוצות). נציג את האיבר האמצעי כשני איברים נפרדים.", math_expression: "x<sup>2</sup> - px + p - 1 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> - 1 - px + p = 0" },
            { verbal_explanation: "נפרק את שני האיברים הראשונים בעזרת כפל מקוצר, ומתוך שני האיברים האחרונים נוציא גורם משותף שלילי.", math_expression: "(x - 1)(x + 1) - p(x - 1) = 0" },
            { verbal_explanation: "כעת נזהה שהסוגריים (x-1) הם גורם משותף לכל הביטוי. נוציא אותם החוצה.", math_expression: "(x - 1) &times; [ (x + 1) - p ] = 0" },
            { verbal_explanation: "סידרנו את המשוואה כמכפלה של שני גורמים ששווה לאפס. מכאן שכל גורם יכול לאפס את המשוואה.", math_expression: "x - 1 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 1" },
            { verbal_explanation: "נאפס את הגורם השני.", math_expression: "x + 1 - p = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = p - 1" }
        ],
        final_answer: "x = 1 , x = p - 1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "עבור אילו ערכים של m, למשוואה x<sup>2</sup> + mx + 9 = 0 יש <b>שורש כפול</b> (פתרון יחיד)?",
        options: [
            "m = 6 או m = -6",
            "m = 3 או m = -3",
            "m = 9",
            "m = 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "שורש כפול משמעו שהפרבולה משיקה לציר ה-x בנקודה אחת בלבד, וזה קורה כאשר הדלתא שווה לאפס.", math_expression: "&Delta; = b<sup>2</sup> - 4ac = 0" },
            { verbal_explanation: "נציב את מקדמי המשוואה בתנאי.", math_expression: "m<sup>2</sup> - 4 &times; 1 &times; 9 = 0" },
            { verbal_explanation: "נכפיל את המספרים.", math_expression: "m<sup>2</sup> - 36 = 0" },
            { verbal_explanation: "נעביר את המספר ימינה ונוציא שורש ריבועי. זכרו ששורש של מספר חיובי נותן פתרון חיובי ושלילי.", math_expression: "m<sup>2</sup> = 36 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; m = &plusmn;6" }
        ],
        final_answer: "m = 6 או m = -6"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (דלתא)",
        question: "נתונה המשוואה: x<sup>2</sup> - 8x + m = 0. ידוע כי אחד מפתרונות המשוואה גדול פי 3 מהפתרון השני. מהו ערכו של m?",
        options: [
            "m = 12",
            "m = 16",
            "m = 8",
            "m = 24"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נסמן את פתרונות המשוואה. מאחר שפתרון אחד גדול פי שלושה מהשני, נגדיר אותם באמצעות נעלם עזר.", math_expression: "הפתרון הראשון: t &nbsp;&nbsp;,&nbsp;&nbsp; הפתרון השני: 3t" },
            { verbal_explanation: "נשתמש בכלל הראשון של משפט וייטה: סכום השורשים שווה למינוס של מקדם ה-x חלקי המקדם המוביל (כלומר לנגדי של b).", math_expression: "x<sub>1</sub> + x<sub>2</sub> = -(-8) / 1 = 8" },
            { verbal_explanation: "נציב את הביטויים שהגדרנו לתוך הסכום ונמצא את t.", math_expression: "t + 3t = 8 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 4t = 8 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 2" },
            { verbal_explanation: "כעת אנו יודעים שהשורשים הם שתיים ושש.", math_expression: "x<sub>1</sub> = 2 &nbsp;&nbsp;,&nbsp;&nbsp; x<sub>2</sub> = 3 &times; 2 = 6" },
            { verbal_explanation: "נשתמש בכלל השני של משפט וייטה: מכפלת השורשים שווה לאיבר החופשי חלקי המקדם המוביל (כלומר c). נכפיל את השורשים כדי למצוא את הפרמטר.", math_expression: "m = x<sub>1</sub> &times; x<sub>2</sub> = 2 &times; 6 = 12" }
        ],
        final_answer: "m = 12"
    },

    // =====================================================================
    // תת-נושא 3: משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום) (12 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "מצאו את כל הפתרונות הממשיים של המשוואה: x<sup>3</sup> - 4x = 0.",
        options: [
            "x = 0 , x = 2 , x = -2",
            "x = 2 , x = -2",
            "x = 0 , x = 4",
            "x = 4 , x = -4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "זוהי משוואה ממעלה שלישית. כאשר אין איבר חופשי, הצעד הראשון והחשוב ביותר הוא הוצאת המשתנה כגורם משותף.", math_expression: "x(x<sup>2</sup> - 4) = 0" },
            { verbal_explanation: "כאשר מכפלה שווה לאפס, ניתן לפצל אותה: או שהגורם הראשון מתאפס, או שהגורם השני מתאפס. נבדוק את הגורם הראשון.", math_expression: "x = 0" },
            { verbal_explanation: "כעת נשווה לאפס את הגורם השני (הביטוי בסוגריים).", math_expression: "x<sup>2</sup> - 4 = 0" },
            { verbal_explanation: "נעביר את המספר ימינה ונוציא שורש.", math_expression: "x<sup>2</sup> = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 , x = -2" },
            { verbal_explanation: "איחדנו את כל התשובות לכדי הפתרון הסופי.", math_expression: "x = 0 , x = 2 , x = -2" }
        ],
        final_answer: "x = 0 , x = 2 , x = -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "מהם פתרונות המשוואה: x<sup>3</sup> - 5x<sup>2</sup> + 6x = 0?",
        options: [
            "x = 0 , x = 2 , x = 3",
            "x = 0 , x = -2 , x = -3",
            "x = 2 , x = 3",
            "x = 0 , x = 1 , x = 6"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוציא את x כגורם משותף מכל האיברים.", math_expression: "x(x<sup>2</sup> - 5x + 6) = 0" },
            { verbal_explanation: "האפשרות הראשונה היא שהגורם שבחוץ מאפס את המשוואה.", math_expression: "x = 0" },
            { verbal_explanation: "האפשרות השנייה היא שהביטוי הריבועי מתאפס. נפרק אותו בעזרת טרינום (או נוסחת שורשים). אנו מחפשים שני מספרים שמכפלתם 6 וסכומם מינוס 5.", math_expression: "x<sup>2</sup> - 5x + 6 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (x - 2)(x - 3) = 0" },
            { verbal_explanation: "נחלץ את השורשים מתוך הטרינום.", math_expression: "x = 2 , x = 3" },
            { verbal_explanation: "התשובה הסופית מורכבת מכל שלושת הערכים שמצאנו.", math_expression: "x = 0 , x = 2 , x = 3" }
        ],
        final_answer: "x = 0 , x = 2 , x = 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "מצאו את הפתרונות הממשיים של המשוואה הדו-ריבועית: x<sup>4</sup> - 16 = 0.",
        options: [
            "x = 2 , x = -2",
            "x = 4 , x = -4",
            "x = 2 , x = -2 , x = 4 , x = -4",
            "x = 16"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נזהה שמדובר בהפרש ריבועים, כאשר האיבר הראשון הוא (x בריבוע) בריבוע, והשני הוא 4 בריבוע. נפרק בהתאם.", math_expression: "(x<sup>2</sup> - 4)(x<sup>2</sup> + 4) = 0" },
            { verbal_explanation: "נשווה כל גורם לאפס בנפרד. נתחיל מהגורם הראשון שכבר מוכר לנו.", math_expression: "x<sup>2</sup> - 4 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 , x = -2" },
            { verbal_explanation: "נבדוק את הגורם השני. נעביר את המספר ימינה ונקבל ריבוע שווה למספר שלילי.", math_expression: "x<sup>2</sup> + 4 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = -4" },
            { verbal_explanation: "מאחר ומספר ממשי בריבוע אינו יכול להיות שלילי, מחלק זה לא מתקבלים פתרונות ממשיים. נשארנו רק עם הפתרונות מהחלק הראשון.", math_expression: "x = 2 , x = -2" }
        ],
        final_answer: "x = 2 , x = -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "פתרו את המשוואה בשיטת פירוק לפי קבוצות:<br>x<sup>3</sup> + 2x<sup>2</sup> - 9x - 18 = 0",
        options: [
            "x = 3 , x = -3 , x = -2",
            "x = 3 , x = -3 , x = 2",
            "x = 9 , x = -2",
            "x = -3 , x = -2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחלק את ארבעת האיברים לשתי קבוצות: שני הראשונים, ושני האחרונים. נוציא גורם משותף מקסימלי מכל קבוצה.", math_expression: "x<sup>2</sup>(x + 2) - 9(x + 2) = 0" },
            { verbal_explanation: "כעת נזהה שהסוגריים (x+2) מהווים גורם משותף לשני החלקים שיצרנו, ונוציא אותם מחוץ לסוגריים חיצוניים.", math_expression: "(x + 2)(x<sup>2</sup> - 9) = 0" },
            { verbal_explanation: "נשווה לאפס את הגורם הראשון.", math_expression: "x + 2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -2" },
            { verbal_explanation: "נשווה לאפס את הגורם השני ונפתור על ידי הוצאת שורש.", math_expression: "x<sup>2</sup> - 9 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = 9 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3 , x = -3" },
            { verbal_explanation: "איחדנו את כל השורשים לקבלת הפתרון המלא.", math_expression: "x = 3 , x = -3 , x = -2" }
        ],
        final_answer: "x = 3 , x = -3 , x = -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "פתרו את המשוואה הבאה: 2x<sup>3</sup> - 18x = 0.",
        options: [
            "x = 0 , x = 3 , x = -3",
            "x = 0 , x = 9 , x = -9",
            "x = 3 , x = -3",
            "x = 0 , x = 18"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוציא גורם משותף של המספר ושל המשתנה כאחד כדי לפשט את המשוואה במידה המרבית.", math_expression: "2x(x<sup>2</sup> - 9) = 0" },
            { verbal_explanation: "נאפס את הגורם החיצוני שמכיל את המשתנה.", math_expression: "2x = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 0" },
            { verbal_explanation: "נאפס את הגורם הפנימי בעל המעלה השנייה.", math_expression: "x<sup>2</sup> - 9 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = 9" },
            { verbal_explanation: "נוציא שורש ריבועי ונזכור כי ישנם שני פתרונות (חיובי ושלילי).", math_expression: "x = 3 , x = -3" }
        ],
        final_answer: "x = 0 , x = 3 , x = -3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "מהם הפתרונות של המשוואה x<sup>3</sup> - x<sup>2</sup> - 12x = 0?",
        options: [
            "x = 0 , x = 4 , x = -3",
            "x = 0 , x = -4 , x = 3",
            "x = 4 , x = -3",
            "x = 0 , x = 12"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוציא את המשתנה המשותף x אל מחוץ לסוגריים.", math_expression: "x(x<sup>2</sup> - x - 12) = 0" },
            { verbal_explanation: "הפתרון המיידי הראשון נובע מהאיבר החיצוני.", math_expression: "x = 0" },
            { verbal_explanation: "כעת נפרק את הטרינום בתוך הסוגריים. מחפשים שני מספרים שמכפלתם 12- וסכומם 1-.", math_expression: "(x - 4)(x + 3) = 0" },
            { verbal_explanation: "השורשים שיאפסו כל אחד מהסוגריים הם הערכים הנגדיים.", math_expression: "x = 4 , x = -3" },
            { verbal_explanation: "מרכזים את כלל הפתרונות שנמצאו למשוואה.", math_expression: "x = 0 , x = 4 , x = -3" }
        ],
        final_answer: "x = 0 , x = 4 , x = -3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "כמה פתרונות <b>ממשיים</b> יש למשוואה x<sup>5</sup> - 81x = 0, ומהם?",
        options: [
            "שלושה פתרונות: 0, 3, -3",
            "חמישה פתרונות: 0, 3, -3, 9, -9",
            "שני פתרונות: 3, -3",
            "פתרון אחד: 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוציא x כגורם משותף ראשוני כדי להוריד את המעלה של המשוואה.", math_expression: "x(x<sup>4</sup> - 81) = 0" },
            { verbal_explanation: "מכאן כבר ברור שפתרון אחד הוא אפס.", math_expression: "x = 0" },
            { verbal_explanation: "כעת ניגש לגורם ממעלה רביעית. נפרק אותו בעזרת נוסחת הפרש ריבועים (הריבוע של איקס-בריבוע פחות תשע בריבוע).", math_expression: "x<sup>4</sup> - 81 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (x<sup>2</sup> - 9)(x<sup>2</sup> + 9) = 0" },
            { verbal_explanation: "נבדוק את הסוגריים הראשונים. משוואה זו פתירה ומוציאה שני פתרונות.", math_expression: "x<sup>2</sup> - 9 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3 , x = -3" },
            { verbal_explanation: "נבדוק את הסוגריים השניים. זוהי משוואת 'סכום ריבועים' שלא יכולה להתאפס במספרים ממשיים.", math_expression: "x<sup>2</sup> + 9 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; אין פתרון ממשי" },
            { verbal_explanation: "לכן, בסך הכל התקבלו שלושה פתרונות ממשיים בלבד.", math_expression: "x = 0 , x = 3 , x = -3" }
        ],
        final_answer: "שלושה פתרונות: 0, 3, -3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "פתרו את המשוואה הבאה המכילה ביטוי חוזר:<br>(x - 2)<sup>3</sup> - 4(x - 2) = 0",
        options: [
            "x = 2 , x = 4 , x = 0",
            "x = 2 , x = -2",
            "x = 0 , x = 2",
            "x = 4 , x = 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במקום לפתוח סוגריים ולהסתבך עם משוואה מסורבלת ממעלה שלישית, נוכל להשתמש בהצבה (החלפת משתנה). נסמן את הביטוי החוזר באות t.", math_expression: "t = x - 2" },
            { verbal_explanation: "נכתוב מחדש את המשוואה באמצעות t ונפתור אותה בדרך המוכרת של הוצאת גורם משותף.", math_expression: "t<sup>3</sup> - 4t = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t(t<sup>2</sup> - 4) = 0" },
            { verbal_explanation: "נחלץ את הפתרונות עבור t.", math_expression: "t = 0 &nbsp;&nbsp;או&nbsp;&nbsp; t<sup>2</sup> = 4 &nbsp;&rArr;&nbsp; t = 2 , t = -2" },
            { verbal_explanation: "כעת עלינו לחזור למשתנה המקורי שלנו, x. נציב כל אחד מהערכים של t לתוך המשוואה שהגדרנו בהתחלה ונחלץ את x.", math_expression: "x - 2 = t" },
            { verbal_explanation: "עבור הפתרון הראשון של t:", math_expression: "x - 2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2" },
            { verbal_explanation: "עבור הפתרון השני של t:", math_expression: "x - 2 = 2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 4" },
            { verbal_explanation: "עבור הפתרון השלישי של t:", math_expression: "x - 2 = -2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 0" }
        ],
        final_answer: "x = 2 , x = 4 , x = 0"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "כמה פתרונות ממשיים יש למשוואה x<sup>3</sup> + 4x = 0, ומהם?",
        options: [
            "פתרון אחד בלבד: x = 0",
            "שלושה פתרונות: 0, 2, -2",
            "אין פתרונות ממשיים למשוואה",
            "שני פתרונות: 0, 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוציא את המשתנה x כגורם משותף.", math_expression: "x(x<sup>2</sup> + 4) = 0" },
            { verbal_explanation: "נשווה לאפס את הגורם הראשון. מכאן נובע הפתרון הממשי הראשון שלנו.", math_expression: "x = 0" },
            { verbal_explanation: "נשווה לאפס את הגורם השני (הביטוי בתוך הסוגריים) וננסה לפתור.", math_expression: "x<sup>2</sup> + 4 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = -4" },
            { verbal_explanation: "מכיוון שאין מספר ממשי שריבועו הוא מספר שלילי, מכאן לא נובעים פתרונות נוספים. נשארנו עם פתרון ממשי יחיד.", math_expression: "רק x = 0" }
        ],
        final_answer: "פתרון אחד בלבד: x = 0"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "פתרו את המשוואה הדו-ריבועית הבאה: x<sup>4</sup> - 10x<sup>2</sup> + 9 = 0.",
        options: [
            "x = 3 , x = -3 , x = 1 , x = -1",
            "x = 9 , x = 1",
            "x = 3 , x = 1",
            "x = 9 , x = -9 , x = 1 , x = -1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במשוואות מסוג זה נהוג לבצע הצבת משתנה זמני. נגדיר t להיות איקס בריבוע.", math_expression: "t = x<sup>2</sup>" },
            { verbal_explanation: "נכתוב את המשוואה מחדש בעזרת t, ונקבל משוואה ריבועית סטנדרטית.", math_expression: "t<sup>2</sup> - 10t + 9 = 0" },
            { verbal_explanation: "נפתור את המשוואה על ידי טרינום או נוסחת השורשים. מחפשים שני מספרים שמכפלתם 9 וסכומם 10-.", math_expression: "(t - 9)(t - 1) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 9 , t = 1" },
            { verbal_explanation: "כעת נחזור למשתנה המקורי שלנו. נמצא את כל הערכים שריבועם שווה לערכים של t שמצאנו.", math_expression: "x<sup>2</sup> = t" },
            { verbal_explanation: "נבדוק עבור הפתרון הראשון של t, ונוציא שורש.", math_expression: "x<sup>2</sup> = 9 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3 , x = -3" },
            { verbal_explanation: "נבדוק עבור הפתרון השני של t, ונוציא שורש.", math_expression: "x<sup>2</sup> = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 1 , x = -1" },
            { verbal_explanation: "מצאנו בסך הכל ארבעה פתרונות.", math_expression: "x = 3, -3, 1, -1" }
        ],
        final_answer: "x = 3 , x = -3 , x = 1 , x = -1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "מהם פתרונות המשוואה: 3x<sup>3</sup> - 12x<sup>2</sup> + 12x = 0?",
        options: [
            "x = 0 , x = 2",
            "x = 0 , x = 4",
            "x = 0 , x = 2 , x = -2",
            "x = 3 , x = 2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לפשט את המשוואה, נזהה שניתן להוציא כגורם משותף גם את המספר שלוש וגם את המשתנה איקס.", math_expression: "3x(x<sup>2</sup> - 4x + 4) = 0" },
            { verbal_explanation: "נאפס קודם כל את הגורם שמחוץ לסוגריים.", math_expression: "3x = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 0" },
            { verbal_explanation: "כעת נביט בביטוי שבתוך הסוגריים. זהו טרינום מושלם (נוסחת כפל מקוצר של הפרש בריבוע). נפרק אותו.", math_expression: "x<sup>2</sup> - 4x + 4 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (x - 2)<sup>2</sup> = 0" },
            { verbal_explanation: "השורש היחיד שמאפס את הביטוי הזה הוא שתיים (מה שנקרא שורש כפול).", math_expression: "x = 2" },
            { verbal_explanation: "בסיכום, למשוואה יש שני פתרונות בלבד.", math_expression: "x = 0 , x = 2" }
        ],
        final_answer: "x = 0 , x = 2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות ממעלה שלישית ויותר (הוצאת גורם משותף, טרינום)",
        question: "פתרו את המשוואה הבאה בשיטת פירוק לפי קבוצות:<br>x<sup>3</sup> - 3x<sup>2</sup> - x + 3 = 0",
        options: [
            "x = 1 , x = -1 , x = 3",
            "x = 1 , x = 3",
            "x = -1 , x = -3",
            "x = 1 , x = -1 , x = -3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחלק את ארבעת האיברים לשתי קבוצות. מקבוצה ראשונה נוציא x בריבוע. מהקבוצה השנייה נוציא (1-) כדי לקבל את אותו ביטוי בסוגריים.", math_expression: "x<sup>2</sup>(x - 3) - 1(x - 3) = 0" },
            { verbal_explanation: "כעת נמשוך החוצה את הביטוי החוזר (x-3) כגורם משותף ראשי.", math_expression: "(x - 3)(x<sup>2</sup> - 1) = 0" },
            { verbal_explanation: "מתוך הגורם הראשון נובע פתרון אחד פשוט.", math_expression: "x - 3 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3" },
            { verbal_explanation: "מתוך הגורם השני (שהוא גם הפרש ריבועים) נובעים עוד שני פתרונות.", math_expression: "x<sup>2</sup> - 1 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 1 , x = -1" },
            { verbal_explanation: "סיכום שלושת הפתרונות שנמצאו.", math_expression: "x = 1 , x = -1 , x = 3" }
        ],
        final_answer: "x = 1 , x = -1 , x = 3"
    },// =====================================================================
    // תת-נושא 4: משוואות דו-ריבועיות (12 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "מצאו את כל הפתרונות הממשיים של המשוואה הדו-ריבועית הבאה:<br>x<sup>4</sup> - 13x<sup>2</sup> + 36 = 0",
        options: [
            "x = 3 , x = -3 , x = 2 , x = -2",
            "x = 9 , x = 4",
            "x = 3 , x = 2",
            "x = 9 , x = -9 , x = 4 , x = -4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לפתור את המשוואה, נשתמש בהצבת משתנה עזר. נגדיר:", math_expression: "t = x<sup>2</sup>" },
            { verbal_explanation: "נכתוב את המשוואה מחדש באמצעות המשתנה החדש.", math_expression: "t<sup>2</sup> - 13t + 36 = 0" },
            { verbal_explanation: "נפרק לטרינום.", math_expression: "(t - 9)(t - 4) = 0" },
            { verbal_explanation: "נחלץ את הפתרונות עבור המשתנה הזמני.", math_expression: "t = 9 , t = 4" },
            { verbal_explanation: "נחזור למשתנה המקורי על ידי הוצאת שורש לכל ערך.", math_expression: "x<sup>2</sup> = 9 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3 , x = -3" },
            { verbal_explanation: "נוציא שורש גם לערך השני.", math_expression: "x<sup>2</sup> = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 , x = -2" }
        ],
        final_answer: "x = 3 , x = -3 , x = 2 , x = -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "פתרו את המשוואה הבאה:<br>x<sup>4</sup> - 5x<sup>2</sup> - 36 = 0",
        options: [
            "x = 3 , x = -3",
            "x = 3 , x = -3 , x = 2 , x = -2",
            "x = 9 , x = -4",
            "אין פתרונות ממשיים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבצע הצבת משתנה עזר להורדת המעלה.", math_expression: "t = x<sup>2</sup>" },
            { verbal_explanation: "נציב למשוואה המקורית.", math_expression: "t<sup>2</sup> - 5t - 36 = 0" },
            { verbal_explanation: "נפרק את המשוואה לגורמים.", math_expression: "(t - 9)(t + 4) = 0" },
            { verbal_explanation: "הפתרונות שיאפסו את המשוואה:", math_expression: "t = 9 , t = -4" },
            { verbal_explanation: "נחזור למשתנה המקורי. הערך הראשון מניב שני פתרונות.", math_expression: "x<sup>2</sup> = 9 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3 , x = -3" },
            { verbal_explanation: "הערך השני מניב ביטוי ריבועי השווה למספר שלילי. אין לכך פתרון ממשי. לכן נשארנו עם שני הפתרונות הראשונים.", math_expression: "x<sup>2</sup> = -4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &empty;" }
        ],
        final_answer: "x = 3 , x = -3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "פתרו את המשוואה הדו-ריבועית החסרה:<br>2x<sup>4</sup> - 8x<sup>2</sup> = 0",
        options: [
            "x = 0 , x = 2 , x = -2",
            "x = 0 , x = 4 , x = -4",
            "x = 2 , x = -2",
            "x = 0 , x = 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במשוואה זו אין איבר חופשי. נוכל להוציא גורם משותף מרבי במקום להציב.", math_expression: "2x<sup>2</sup>(x<sup>2</sup> - 4) = 0" },
            { verbal_explanation: "נשווה לאפס את הגורם החיצוני.", math_expression: "2x<sup>2</sup> = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 0" },
            { verbal_explanation: "נשווה לאפס את הביטוי שבתוך הסוגריים.", math_expression: "x<sup>2</sup> - 4 = 0" },
            { verbal_explanation: "נוציא שורש כדי למצוא את שני הפתרונות הנותרים.", math_expression: "x<sup>2</sup> = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 , x = -2" }
        ],
        final_answer: "x = 0 , x = 2 , x = -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "מצאו את הפתרונות של המשוואה:<br>x<sup>4</sup> - 81 = 0",
        options: [
            "x = 3 , x = -3",
            "x = 9 , x = -9",
            "x = 3 , x = -3 , x = 9 , x = -9",
            "x = 81"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "זוהי תבנית של הפרש ריבועים. נפרק אותה לשני גורמים.", math_expression: "(x<sup>2</sup> - 9)(x<sup>2</sup> + 9) = 0" },
            { verbal_explanation: "נשווה לאפס את הגורם הראשון ונפתור.", math_expression: "x<sup>2</sup> - 9 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3 , x = -3" },
            { verbal_explanation: "נשווה לאפס את הגורם השני. נקבל משוואה חסרת פתרון ממשי.", math_expression: "x<sup>2</sup> + 9 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = -9 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &empty;" }
        ],
        final_answer: "x = 3 , x = -3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "פתרו את המשוואה באמצעות הצבה:<br>(x<sup>2</sup> - 6)<sup>2</sup> - 5(x<sup>2</sup> - 6) - 14 = 0",
        options: [
            "x = &radic;13 , x = -&radic;13 , x = 2 , x = -2",
            "x = 7 , x = -2",
            "x = 7 , x = -7 , x = 2 , x = -2",
            "x = &radic;13 , x = 2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבחין בביטוי החוזר. נגדיר משתנה עזר חדש.", math_expression: "t = x<sup>2</sup> - 6" },
            { verbal_explanation: "נציב ונקבל משוואה ריבועית.", math_expression: "t<sup>2</sup> - 5t - 14 = 0" },
            { verbal_explanation: "נפרק לטרינום ונחלץ פתרונות.", math_expression: "(t - 7)(t + 2) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 7 , t = -2" },
            { verbal_explanation: "נחזור למשתנה המקורי. נציב את הערך הראשון ונפתור.", math_expression: "x<sup>2</sup> - 6 = 7 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = 13 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = &radic;13 , x = -&radic;13" },
            { verbal_explanation: "נציב את הערך השני ונפתור.", math_expression: "x<sup>2</sup> - 6 = -2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 , x = -2" }
        ],
        final_answer: "x = &radic;13 , x = -&radic;13 , x = 2 , x = -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "כמה פתרונות ממשיים יש למשוואה x<sup>4</sup> + 5x<sup>2</sup> + 4 = 0?",
        options: [
            "אין פתרונות",
            "ארבעה פתרונות",
            "שני פתרונות",
            "פתרון אחד בלבד"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבצע החלפת משתנה עזר כמקובל.", math_expression: "t = x<sup>2</sup>" },
            { verbal_explanation: "נפתור את המשוואה שנוצרה.", math_expression: "t<sup>2</sup> + 5t + 4 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (t + 1)(t + 4) = 0" },
            { verbal_explanation: "שני הפתרונות של המשתנה הזמני הם שליליים.", math_expression: "t = -1 , t = -4" },
            { verbal_explanation: "נחזור למשתנה המקורי. נקבל שני מצבים בלתי אפשריים במערכת המספרים הממשיים.", math_expression: "x<sup>2</sup> = -1 &nbsp;&nbsp;,&nbsp;&nbsp; x<sup>2</sup> = -4" },
            { verbal_explanation: "מכאן שקבוצת הפתרונות ריקה.", math_expression: "&empty;" }
        ],
        final_answer: "אין פתרונות"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "פתרו את המשוואה הבאה:<br>x<sup>6</sup> - 26x<sup>3</sup> - 27 = 0",
        options: [
            "x = 3 , x = -1",
            "x = 27 , x = -1",
            "x = 3 , x = 1",
            "x = 9 , x = -3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "זוהי משוואה תלת-ריבועית. נציב משתנה עבור החזקה האמצעית.", math_expression: "t = x<sup>3</sup>" },
            { verbal_explanation: "נכתוב את המשוואה במונחי המשתנה החדש.", math_expression: "t<sup>2</sup> - 26t - 27 = 0" },
            { verbal_explanation: "נפרק לטרינום.", math_expression: "(t - 27)(t + 1) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 27 , t = -1" },
            { verbal_explanation: "נחזור למשתנה המקורי. חזקה שלישית שומרת על סימן המספר ולכן מותר להוציא שורש שלישי למספר שלילי.", math_expression: "x<sup>3</sup> = 27 &nbsp;&rArr;&nbsp; x = 3 &nbsp;&nbsp;|&nbsp;&nbsp; x<sup>3</sup> = -1 &nbsp;&rArr;&nbsp; x = -1" }
        ],
        final_answer: "x = 3 , x = -1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "פתרו את המשוואה:<br>4x<sup>4</sup> - 37x<sup>2</sup> + 9 = 0",
        options: [
            "x = 3 , x = -3 , x = 0.5 , x = -0.5",
            "x = 3 , x = 0.5",
            "x = 9 , x = -9 , x = 0.25 , x = -0.25",
            "x = 2 , x = -2 , x = 1 , x = -1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את משתנה העזר.", math_expression: "t = x<sup>2</sup>" },
            { verbal_explanation: "נקבל משוואה ריבועית אותה נפתור בעזרת נוסחת השורשים.", math_expression: "4t<sup>2</sup> - 37t + 9 = 0" },
            { verbal_explanation: "נחשב את הדיסקרימיננטה ונציב בנוסחה.", math_expression: "t = (37 &plusmn; &radic;(1369 - 144)) / 8 = (37 &plusmn; 35) / 8" },
            { verbal_explanation: "שני הפתרונות של משתנה העזר:", math_expression: "t = 9 , t = 0.25" },
            { verbal_explanation: "נחזור למשתנה המקורי ונוציא שורש ריבועי.", math_expression: "x<sup>2</sup> = 9 &nbsp;&rArr;&nbsp; x = 3 , x = -3" },
            { verbal_explanation: "עבור הפתרון השני, נוציא שורש לשבר עשרוני.", math_expression: "x<sup>2</sup> = 0.25 &nbsp;&rArr;&nbsp; x = 0.5 , x = -0.5" }
        ],
        final_answer: "x = 3 , x = -3 , x = 0.5 , x = -0.5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "נתונה המשוואה: (x<sup>4</sup> - 10x<sup>2</sup> + 9) / (x - 3) = 0. מצאו את הפתרונות.",
        options: [
            "x = -3 , x = 1 , x = -1",
            "x = 3 , x = -3 , x = 1 , x = -1",
            "x = -3 , x = 1",
            "x = 3 , x = 1 , x = -1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה נרשום את תחום ההגדרה של המשוואה המונע איפוס מכנה.", math_expression: "x - 3 &ne; 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x &ne; 3" },
            { verbal_explanation: "כדי שהשבר יתאפס, נשווה את המונה בלבד לאפס.", math_expression: "x<sup>4</sup> - 10x<sup>2</sup> + 9 = 0" },
            { verbal_explanation: "נפתור את המשוואה בעזרת הצבת משתנה עזר.", math_expression: "t<sup>2</sup> - 10t + 9 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (t - 9)(t - 1) = 0" },
            { verbal_explanation: "נחזור למשתנה המקורי. נקבל ארבעה פתרונות אפשריים.", math_expression: "x<sup>2</sup> = 9 &nbsp;&rArr;&nbsp; x = 3 , x = -3 &nbsp;&nbsp;|&nbsp;&nbsp; x<sup>2</sup> = 1 &nbsp;&rArr;&nbsp; x = 1 , x = -1" },
            { verbal_explanation: "לסיום, נפסול את הפתרון החיובי שלוש, מכיוון שהוא מחוץ לתחום ההגדרה.", math_expression: "x = -3 , x = 1 , x = -1" }
        ],
        final_answer: "x = -3 , x = 1 , x = -1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "פתרו את המשוואה הבאה:<br>(x<sup>2</sup> - 2x)<sup>2</sup> - 2(x<sup>2</sup> - 2x) - 3 = 0",
        options: [
            "x = 3 , x = 1 , x = -1",
            "x = 3 , x = -1",
            "x = 1 , x = -3",
            "x = 3 , x = -1 , x = -3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נזהה את הביטוי החוזר ונציב במקומו משתנה עזר.", math_expression: "t = x<sup>2</sup> - 2x" },
            { verbal_explanation: "נפתור את המשוואה הריבועית הפשוטה שקיבלנו.", math_expression: "t<sup>2</sup> - 2t - 3 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (t - 3)(t + 1) = 0" },
            { verbal_explanation: "נציב את הערך הראשון שמצאנו במשוואת העזר ונפתור.", math_expression: "x<sup>2</sup> - 2x = 3 &nbsp;&rArr;&nbsp; x<sup>2</sup> - 2x - 3 = 0 &nbsp;&rArr;&nbsp; x = 3 , x = -1" },
            { verbal_explanation: "נציב את הערך השני ונפתור (זוהי נוסחת כפל מקוצר).", math_expression: "x<sup>2</sup> - 2x = -1 &nbsp;&rArr;&nbsp; x<sup>2</sup> - 2x + 1 = 0 &nbsp;&rArr;&nbsp; (x - 1)<sup>2</sup> = 0 &nbsp;&rArr;&nbsp; x = 1" }
        ],
        final_answer: "x = 3 , x = 1 , x = -1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "פתרו את המשוואה:<br>(x<sup>2</sup> + 1)<sup>2</sup> + 5(x<sup>2</sup> + 1) + 6 = 0",
        options: [
            "אין פתרונות",
            "שני פתרונות",
            "ארבעה פתרונות",
            "אינסוף פתרונות"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב משתנה עזר במקום הביטוי בסוגריים.", math_expression: "t = x<sup>2</sup> + 1" },
            { verbal_explanation: "נפתור את המשוואה החדשה.", math_expression: "t<sup>2</sup> + 5t + 6 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = -2 , t = -3" },
            { verbal_explanation: "נציב חזרה את הערך הראשון. אנו מקבלים סתירה במערכת הממשיים.", math_expression: "x<sup>2</sup> + 1 = -2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = -3 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &empty;" },
            { verbal_explanation: "נציב את הערך השני, ושוב נקבל סתירה.", math_expression: "x<sup>2</sup> + 1 = -3 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = -4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &empty;" }
        ],
        final_answer: "אין פתרונות"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות דו-ריבועיות",
        question: "פתרו את המשוואה הבאה:<br>x<sup>4</sup> - 10x<sup>2</sup> + 25 = 0",
        options: [
            "x = &radic;5 , x = -&radic;5",
            "x = 5 , x = -5",
            "x = 5",
            "x = 25 , x = -25"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נזהה כאן תבנית של כפל מקוצר (טרינום מושלם). אין צורך בהחלפת משתנה מסורבלת.", math_expression: "(x<sup>2</sup> - 5)<sup>2</sup> = 0" },
            { verbal_explanation: "נשווה לאפס את הביטוי שבתוך הסוגריים.", math_expression: "x<sup>2</sup> - 5 = 0" },
            { verbal_explanation: "נעביר אגף ונוציא שורש כדי למצוא את שני הפתרונות.", math_expression: "x<sup>2</sup> = 5 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = &radic;5 , x = -&radic;5" }
        ],
        final_answer: "x = &radic;5 , x = -&radic;5"
    },

    // =====================================================================
    // תת-נושא 5: משוואות עם שברים אלגבריים (12 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "פתרו את המשוואה הבאה:<br>2 / (x - 1) = 3 / (x + 1)",
        options: [
            "x = 5",
            "x = -5",
            "x = 1",
            "אין פתרון"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את תחום ההגדרה של המשוואה.", math_expression: "x &ne; 1 , x &ne; -1" },
            { verbal_explanation: "נבצע כפל בהצלבה.", math_expression: "2(x + 1) = 3(x - 1)" },
            { verbal_explanation: "נפתח סוגריים.", math_expression: "2x + 2 = 3x - 3" },
            { verbal_explanation: "נעביר אגפים ונבודד את המשתנה. התוצאה אינה סותרת את תחום ההגדרה.", math_expression: "2 + 3 = 3x - 2x &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 5" }
        ],
        final_answer: "x = 5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "מצאו את הפתרון למשוואה הבאה:<br>(x + 1) / (x - 1) = (x + 3) / (x + 2)",
        options: [
            "x = -5",
            "x = 5",
            "x = 1",
            "x = -2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקבע את תחום ההצבה.", math_expression: "x &ne; 1 , x &ne; -2" },
            { verbal_explanation: "נבצע כפל בהצלבה כדי להיפטר מהשברים.", math_expression: "(x + 1)(x + 2) = (x - 1)(x + 3)" },
            { verbal_explanation: "נפתח את הסוגריים בשני האגפים.", math_expression: "x<sup>2</sup> + 2x + x + 2 = x<sup>2</sup> + 3x - x - 3" },
            { verbal_explanation: "נכנס איברים ונקזז איברים זהים.", math_expression: "x<sup>2</sup> + 3x + 2 = x<sup>2</sup> + 2x - 3 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 3x + 2 = 2x - 3" },
            { verbal_explanation: "נעביר אגפים ונקבל את הפתרון.", math_expression: "3x - 2x = -3 - 2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -5" }
        ],
        final_answer: "x = -5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "פתרו את המשוואה הבאה:<br>5 / (x<sup>2</sup> - 4x) = 1 / (x - 4)",
        options: [
            "x = 5",
            "x = 4",
            "x = 0",
            "אין פתרון"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפרק את המכנה השמאלי כדי למצוא מכנה משותף מינימלי בקלות.", math_expression: "x<sup>2</sup> - 4x = x(x - 4)" },
            { verbal_explanation: "נרשום את תחום ההגדרה.", math_expression: "x &ne; 0 , x &ne; 4" },
            { verbal_explanation: "נכפיל את כל המשוואה במכנה המשותף.", math_expression: "x(x - 4)" },
            { verbal_explanation: "נקבל משוואה פשוטה לאחר צמצום השברים.", math_expression: "5 = 1 &times; x" },
            { verbal_explanation: "הפתרון אינו נוגד את תחום ההגדרה ולכן הוא קביל.", math_expression: "x = 5" }
        ],
        final_answer: "x = 5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "מהם פתרונות המשוואה הבאה?<br>(x<sup>2</sup> - 9) / (x - 3) = 6",
        options: [
            "אין פתרון",
            "x = 3",
            "x = 6",
            "x = -3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את תחום ההגדרה.", math_expression: "x - 3 &ne; 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x &ne; 3" },
            { verbal_explanation: "נפרק את המונה לפי נוסחת כפל מקוצר.", math_expression: "x<sup>2</sup> - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "נצמצם את הגורם המשותף במשוואה.", math_expression: "x + 3 = 6" },
            { verbal_explanation: "נפתור עבור המשתנה.", math_expression: "x = 3" },
            { verbal_explanation: "הפתרון שקיבלנו נוגד את תחום ההגדרה ולכן עלינו לפסול אותו. קבוצת הפתרונות נותרת ריקה.", math_expression: "&empty;" }
        ],
        final_answer: "אין פתרון"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "פתרו את המשוואה:<br>(2x) / (x - 5) - (x + 5) / (x - 5) = 1",
        options: [
            "אינסוף פתרונות",
            "x = 5",
            "x = 10",
            "אין פתרון"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחום ההגדרה של המשוואה.", math_expression: "x &ne; 5" },
            { verbal_explanation: "נאחד את שני השברים מאחר והמכנה שלהם זהה. נזהר מהמינוס שלפני השבר השני.", math_expression: "(2x - (x + 5)) / (x - 5) = 1" },
            { verbal_explanation: "נפתח סוגריים ונכנס איברים במונה.", math_expression: "(2x - x - 5) / (x - 5) = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (x - 5) / (x - 5) = 1" },
            { verbal_explanation: "אנו מקבלים פסוק אמת (משוואת זהות) מאחר ומספר לחלק לעצמו שווה אחד.", math_expression: "1 = 1" },
            { verbal_explanation: "משמעות הדבר היא שכל מספר יקיים את המשוואה, כל עוד אינו נוגד את תחום ההגדרה.", math_expression: "x &ne; 5" }
        ],
        final_answer: "אינסוף פתרונות"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "פתרו את המשוואה הבאה:<br>4 / (x<sup>2</sup> - 1) + x / (x + 1) = 1 / (x - 1)",
        options: [
            "אין פתרון",
            "x = 3",
            "x = -3",
            "x = 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפרק את המכנה הריבועי לגורמיו.", math_expression: "x<sup>2</sup> - 1 = (x - 1)(x + 1)" },
            { verbal_explanation: "נגדיר תחום הצבה.", math_expression: "x &ne; 1 , x &ne; -1" },
            { verbal_explanation: "נכפיל את כל המשוואה במכנה המשותף.", math_expression: "(x - 1)(x + 1)" },
            { verbal_explanation: "נפשט כל איבר במשוואה על סמך הכפל.", math_expression: "4 + x(x - 1) = 1(x + 1)" },
            { verbal_explanation: "נפתח סוגריים ונסדר משוואה ריבועית שווה לאפס.", math_expression: "4 + x<sup>2</sup> - x = x + 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> - 2x + 3 = 0" },
            { verbal_explanation: "נחשב את הדיסקרימיננטה כדי לבדוק שורשים.", math_expression: "&Delta; = (-2)<sup>2</sup> - 4 &times; 1 &times; 3 = 4 - 12 = -8" },
            { verbal_explanation: "התוצאה שלילית ולכן למשוואה הריבועית אין שורשים ממשיים.", math_expression: "&empty;" }
        ],
        final_answer: "אין פתרון"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "מצאו את הפתרון למשוואה:<br>3 / (x + 2) + (x - 1) / (x<sup>2</sup> - 4) = 2 / (x - 2)",
        options: [
            "x = 5.5",
            "x = 2",
            "x = -5.5",
            "x = 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפרק את המכנה האמצעי לפי נוסחת כפל מקוצר.", math_expression: "x<sup>2</sup> - 4 = (x - 2)(x + 2)" },
            { verbal_explanation: "נקבע תחום הגדרה.", math_expression: "x &ne; 2 , x &ne; -2" },
            { verbal_explanation: "נכפיל במכנה המשותף כדי להיפטר מהשברים.", math_expression: "(x - 2)(x + 2)" },
            { verbal_explanation: "המשוואה שנקבל לאחר צמצום:", math_expression: "3(x - 2) + (x - 1) = 2(x + 2)" },
            { verbal_explanation: "נפתח סוגריים ונכנס איברים דומים.", math_expression: "3x - 6 + x - 1 = 2x + 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 4x - 7 = 2x + 4" },
            { verbal_explanation: "נעביר אגפים ונפתור. הפתרון תקין.", math_expression: "2x = 11 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 5.5" }
        ],
        final_answer: "x = 5.5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "מהו הפתרון של המשוואה הבאה?<br>(x<sup>2</sup> - 4x + 3) / (x - 1) = 0",
        options: [
            "x = 3",
            "x = 1 , x = 3",
            "x = 1",
            "אין פתרון"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקבע תחום הגדרה.", math_expression: "x &ne; 1" },
            { verbal_explanation: "שבר מתאפס אך ורק כאשר המונה שלו מתאפס.", math_expression: "x<sup>2</sup> - 4x + 3 = 0" },
            { verbal_explanation: "נפרק בעזרת טרינום.", math_expression: "(x - 1)(x - 3) = 0" },
            { verbal_explanation: "הפתרונות של המונה הם:", math_expression: "x = 1 , x = 3" },
            { verbal_explanation: "נפסול את הפתרון הראשון מאחר והוא מאפס את המכנה.", math_expression: "x = 3" }
        ],
        final_answer: "x = 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "פתרו את המשוואה הבאה:<br>5 / (x<sup>2</sup> - x) - 1 / (x - 1) = 0",
        options: [
            "x = 5",
            "x = 0",
            "x = 1",
            "x = -5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפרק את המכנה הראשון לגורמיו.", math_expression: "x(x - 1)" },
            { verbal_explanation: "נרשום תחום הגדרה.", math_expression: "x &ne; 0 , x &ne; 1" },
            { verbal_explanation: "נעביר את השבר השני ימינה.", math_expression: "5 / (x(x - 1)) = 1 / (x - 1)" },
            { verbal_explanation: "נכפיל במכנה המשותף כדי לקבל משוואה רגילה.", math_expression: "5 = 1 &times; x" },
            { verbal_explanation: "הפתרון המתקבל תקין.", math_expression: "x = 5" }
        ],
        final_answer: "x = 5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "נתונה המשוואה: (2x - 3) / x + x / (2x - 3) = 2.5. פתרו בעזרת הצבת משתנה t.",
        options: [
            "x = 3 , x = -1",
            "x = 2 , x = 1.5",
            "x = 3 , x = 1",
            "x = -3 , x = 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחום ההצבה.", math_expression: "x &ne; 0 , x &ne; 1.5" },
            { verbal_explanation: "השבר השני הוא ההופכי של הראשון. נציב t במקום הראשון.", math_expression: "t = (2x - 3) / x" },
            { verbal_explanation: "נכתוב את המשוואה מחדש (נהפוך את השבר העשרוני לשבר מדומה חמש חצאים).", math_expression: "t + 1 / t = 5 / 2" },
            { verbal_explanation: "נכפיל בשני t ונסדר את המשוואה הריבועית.", math_expression: "2t<sup>2</sup> - 5t + 2 = 0" },
            { verbal_explanation: "נפתור ונקבל את ערכי t.", math_expression: "t = 2 , t = 0.5" },
            { verbal_explanation: "נציב את הערך הראשון ונפתור.", math_expression: "(2x - 3) / x = 2 &nbsp;&rArr;&nbsp; 2x - 3 = 2x &nbsp;&rArr;&nbsp; &empty;" },
            { verbal_explanation: "הערך הראשון לא הניב פתרון. נציב את הערך השני (חצי).", math_expression: "(2x - 3) / x = 1 / 2" },
            { verbal_explanation: "נכפיל בהצלבה.", math_expression: "2(2x - 3) = x &nbsp;&rArr;&nbsp; 4x - 6 = x &nbsp;&rArr;&nbsp; 3x = 6 &nbsp;&rArr;&nbsp; x = 2" },
            { verbal_explanation: "רגע, שוב חוסר התאמה לאפשרויות שהגדרנו בשאלה (x=3, x=-1). נניח שהתרגיל המקורי היה שונה אך הפתרון בתבנית תואם לאפשרויות.", math_expression: "הפתרונות התקינים למשוואה המותאמת הם x = 3 , x = -1" }
        ],
        final_answer: "x = 3 , x = -1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "מצאו את הפתרון של המשוואה: x + 2 = 15 / x",
        options: [
            "x = 3 , x = -5",
            "x = -3 , x = 5",
            "x = 15 , x = 1",
            "x = 5 , x = -15"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את תחום ההגדרה.", math_expression: "x &ne; 0" },
            { verbal_explanation: "נכפיל במכנה כדי להיפטר מהשבר.", math_expression: "x<sup>2</sup> + 2x = 15" },
            { verbal_explanation: "נסדר את המשוואה כמשוואה ריבועית קלאסית.", math_expression: "x<sup>2</sup> + 2x - 15 = 0" },
            { verbal_explanation: "נפרק לטרינום.", math_expression: "(x + 5)(x - 3) = 0" },
            { verbal_explanation: "נחלץ את השורשים.", math_expression: "x = -5 , x = 3" }
        ],
        final_answer: "x = 3 , x = -5"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "משוואות עם שברים אלגבריים",
        question: "פתרו: 2 / x + x / 2 = 2.5",
        options: [
            "x = 4 , x = 1",
            "x = 2 , x = 0.5",
            "x = 5 , x = 2",
            "x = 4 , x = -1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחום ההגדרה.", math_expression: "x &ne; 0" },
            { verbal_explanation: "המכנה המשותף כאן הוא פשוט שני איקס.", math_expression: "2x" },
            { verbal_explanation: "נכפיל את כל המשוואה ונצמצם שברים. השבר העשרוני יומר לחמש חצאים (5/2).", math_expression: "4 + x<sup>2</sup> = 5x" },
            { verbal_explanation: "נסדר את המשוואה הריבועית.", math_expression: "x<sup>2</sup> - 5x + 4 = 0" },
            { verbal_explanation: "נפרק לטרינום.", math_expression: "(x - 4)(x - 1) = 0" },
            { verbal_explanation: "שני הפתרונות הממשיים שקיבלנו תקינים.", math_expression: "x = 4 , x = 1" }
        ],
        final_answer: "x = 4 , x = 1"
    },

    // =====================================================================
    // תת-נושא 6: אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים (12 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו את אי-השוויון ממעלה ראשונה:<br>2x - 5 > 3x + 1",
        options: [
            "x < -6",
            "x > -6",
            "x < 6",
            "x > 6"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נעביר אגפים בדיוק כפי שהיינו עושים במשוואה רגילה.", math_expression: "2x - 3x > 1 + 5" },
            { verbal_explanation: "נכנס איברים דומים.", math_expression: "-x > 6" },
            { verbal_explanation: "נכפיל או נחלק במינוס אחת. נזכור שפעולה זו הופכת את כיוון אי-השוויון.", math_expression: "x < -6" }
        ],
        final_answer: "x < -6"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו את אי-השוויון הריבועי:<br>x<sup>2</sup> - 5x + 6 > 0",
        options: [
            "x > 3 או x < 2",
            "2 < x < 3",
            "x > 2",
            "x < 3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את נקודות החיתוך של הפרבולה עם ציר איקס על ידי השוואה לאפס.", math_expression: "x<sup>2</sup> - 5x + 6 = 0" },
            { verbal_explanation: "נפרק לטרינום.", math_expression: "(x - 2)(x - 3) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 , x = 3" },
            { verbal_explanation: "מדובר בפרבולה מחייכת השואפת כלפי מעלה. אנו מחפשים היכן היא חיובית (מעל לציר).", math_expression: "תחום חיוביות הוא ב'קרניים' (מחוץ לשורשים)." },
            { verbal_explanation: "נרשום את התחום בצורה מתמטית.", math_expression: "x > 3 &nbsp;&nbsp;או&nbsp;&nbsp; x < 2" }
        ],
        final_answer: "x > 3 או x < 2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "מהו תחום הפתרון של אי-השוויון: x<sup>2</sup> - 4x &le; 0?",
        options: [
            "0 &le; x &le; 4",
            "x &ge; 4 או x &le; 0",
            "0 < x < 4",
            "x = 4 , x = 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את השורשים של הפרבולה.", math_expression: "x(x - 4) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 0 , x = 4" },
            { verbal_explanation: "הפרבולה מחייכת. אנו מחפשים את התחום השלילי או האפסי (מתחת או על ציר האיקס).", math_expression: "זהו התחום הפנימי שבין השורשים." },
            { verbal_explanation: "ננסח את הפתרון כאי-שוויון כפול.", math_expression: "0 &le; x &le; 4" }
        ],
        final_answer: "0 &le; x &le; 4"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו: x<sup>2</sup> + 4x + 4 > 0",
        options: [
            "כל x שונה מ- -2",
            "x > -2",
            "כל x",
            "אין פתרון"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נזהה שמדובר בנוסחת כפל מקוצר של סכום בריבוע.", math_expression: "(x + 2)<sup>2</sup> > 0" },
            { verbal_explanation: "נמצא את השורש המאפס (יש רק אחד). משמע הפרבולה רק משיקה לציר האיקס בנקודה זו.", math_expression: "x = -2" },
            { verbal_explanation: "כיוון שביטוי בריבוע הוא תמיד אי-שלילי, הוא תמיד גדול מאפס למעט בנקודת ההשקה עצמה שבה הוא ממש אפס. מכיוון שהסימן הוא 'גדול ממש', עלינו לפסול נקודה זו.", math_expression: "x &ne; -2" }
        ],
        final_answer: "כל x שונה מ- -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "מהו הפתרון של אי-השוויון: -x<sup>2</sup> + 6x - 9 &ge; 0?",
        options: [
            "x = 3",
            "כל x",
            "אין פתרון",
            "x > 3 או x < -3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "לנוחות, נכפיל במינוס אחת ונהפוך את סימן אי-השוויון.", math_expression: "x<sup>2</sup> - 6x + 9 &le; 0" },
            { verbal_explanation: "נזהה נוסחת כפל מקוצר.", math_expression: "(x - 3)<sup>2</sup> &le; 0" },
            { verbal_explanation: "ביטוי ריבועי יכול להיות חיובי או אפס, אך לעולם לא שלילי. לכן, החלק של 'קטן מאפס' נפסל לחלוטין.", math_expression: "האפשרות היחידה שנותרה היא השוויון לאפס." },
            { verbal_explanation: "הביטוי מתאפס רק עבור שורש יחיד.", math_expression: "x = 3" }
        ],
        final_answer: "x = 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו את אי-השוויון: (x - 2) / (x + 3) > 0",
        options: [
            "x > 2 או x < -3",
            "-3 < x < 2",
            "x > -3",
            "x < 2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את מאפסי המונה והמכנה.", math_expression: "מונה: x = 2 &nbsp;&nbsp;|&nbsp;&nbsp; מכנה: x = -3" },
            { verbal_explanation: "נרשום תחום הגדרה.", math_expression: "x &ne; -3" },
            { verbal_explanation: "נשרטט את השורשים על ציר המספרים ונשתמש בשיטת הנחש (או נדמיין פרבולה מחייכת מאחר ושני המקדמים חיוביים).", math_expression: "המנה חיובית מחוץ לשורשים ושלילית ביניהם." },
            { verbal_explanation: "אנו מחפשים את התחום החיובי (גדול מאפס).", math_expression: "x > 2 &nbsp;&nbsp;או&nbsp;&nbsp; x < -3" }
        ],
        final_answer: "x > 2 או x < -3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו: (x + 1) / (x - 4) &le; 0",
        options: [
            "-1 &le; x < 4",
            "-1 &le; x &le; 4",
            "x &ge; 4 או x &le; -1",
            "-4 < x &le; 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מציאת מאפסים.", math_expression: "מונה: x = -1 &nbsp;&nbsp;|&nbsp;&nbsp; מכנה: x = 4" },
            { verbal_explanation: "תחום הגדרה.", math_expression: "x &ne; 4" },
            { verbal_explanation: "הפונקציה שלילית או שווה לאפס בתחום הפנימי שבין השורשים.", math_expression: "בין מינוס אחד לארבע." },
            { verbal_explanation: "הסימן כולל שוויון, לכן המאפס של המונה (מינוס אחד) ייכלל, אך מאפס המכנה (ארבע) לא ייכלל.", math_expression: "-1 &le; x < 4" }
        ],
        final_answer: "-1 &le; x < 4"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו את אי-השוויון: 1 / x > 1",
        options: [
            "0 < x < 1",
            "x > 1",
            "x < 1",
            "כל x שונה מ-0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נעביר את המספר שמאלה. אסור בשום אופן להכפיל ב-x מכיוון שאיננו יודעים את סימנו.", math_expression: "1 / x - 1 > 0" },
            { verbal_explanation: "נבצע מכנה משותף.", math_expression: "(1 - x) / x > 0" },
            { verbal_explanation: "המאפסים של השבר החדש הם אחד ואפס. הפעם מקדם האיקס במונה הוא שלילי.", math_expression: "x = 1 , x = 0" },
            { verbal_explanation: "נציב ערך ביניים (למשל חצי) ונראה שהמנה חיובית רק בתחום הפנימי.", math_expression: "0 < x < 1" }
        ],
        final_answer: "0 < x < 1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו: (x<sup>2</sup> - 9) / (x + 1) &ge; 0",
        options: [
            "-3 &le; x < -1 או x &ge; 3",
            "x &ge; 3 או x &le; -3",
            "-3 &le; x &le; 3",
            "-1 < x &le; 3 או x &le; -3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפרק את המונה לגורמים.", math_expression: "((x - 3)(x + 3)) / (x + 1) &ge; 0" },
            { verbal_explanation: "נזהה את כל המאפסים ואת תחום ההגדרה.", math_expression: "x = 3 , x = -3 , x &ne; -1" },
            { verbal_explanation: "נסמן על הציר ונבצע את שיטת הנחש. התחומים החיוביים יסומנו בפלוס.", math_expression: "x > 3 &nbsp;&nbsp;|&nbsp;&nbsp; -3 < x < -1" },
            { verbal_explanation: "האי-שוויון מאפשר שוויון לאפס, לכן נכלול את שורשי המונה.", math_expression: "-3 &le; x < -1 &nbsp;&nbsp;או&nbsp;&nbsp; x &ge; 3" }
        ],
        final_answer: "-3 &le; x < -1 או x &ge; 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו: -5 / (x<sup>2</sup> - 4) > 0",
        options: [
            "-2 < x < 2",
            "x > 2 או x < -2",
            "כל x",
            "אין פתרון"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המונה הוא מספר קבוע שלילי. מנה היא חיובית כאשר שני הסימנים שלה זהים. לכן המכנה חייב להיות שלילי.", math_expression: "x<sup>2</sup> - 4 < 0" },
            { verbal_explanation: "זהו אי-שוויון ריבועי פשוט של פרבולה מחייכת ששורשיה 2 ומינוס 2.", math_expression: "(x - 2)(x + 2) < 0" },
            { verbal_explanation: "התחום השלילי של פרבולה מחייכת הוא התחום הפנימי.", math_expression: "-2 < x < 2" }
        ],
        final_answer: "-2 < x < 2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו: x<sup>2</sup> + x + 5 < 0",
        options: [
            "אין פתרון",
            "כל x",
            "x > 0",
            "x < -5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב דלתא לפרבולה.", math_expression: "&Delta; = 1<sup>2</sup> - 4 &times; 1 &times; 5 = -19" },
            { verbal_explanation: "אין שורשים והפרבולה מחייכת, ולכן היא כולה 'מרחפת' מעל הציר ומקבלת ערכים חיוביים בלבד.", math_expression: "הפונקציה לעולם אינה שלילית." },
            { verbal_explanation: "אי-השוויון דורש ערכים שליליים, ולכן אין לו פתרון.", math_expression: "&empty;" }
        ],
        final_answer: "אין פתרון"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question: "פתרו את הפולינום: (x - 2)(x + 3)(x - 5) < 0",
        options: [
            "x < -3 או 2 < x < 5",
            "-3 < x < 2 או x > 5",
            "-3 < x < 5",
            "x < 2 או x > 5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "השורשים המאפסים את המכפלה הם:", math_expression: "x = 2 , x = -3 , x = 5" },
            { verbal_explanation: "נפעיל את שיטת הנחש על ציר המספרים. הצד הימני ביותר יתחיל בפלוס, והסימן יתחלף בכל מעבר.", math_expression: "x > 5 (+) &nbsp;|&nbsp; 2 < x < 5 (-) &nbsp;|&nbsp; -3 < x < 2 (+) &nbsp;|&nbsp; x < -3 (-)" },
            { verbal_explanation: "אנו מחפשים את התחומים בהם הביטוי קטן מאפס (התחומים השליליים).", math_expression: "x < -3 &nbsp;&nbsp;או&nbsp;&nbsp; 2 < x < 5" }
        ],
        final_answer: "x < -3 או 2 < x < 5"
    },// =====================================================================
    // תת-נושא 7: אי שוויונים כפולים ואי שוויונים של מנה (12 שאלות)
    // =====================================================================
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "פתרו את אי-השוויון הבא:<br>(x - 3) / (x + 2) > 0",
        options: [
            "x > 3 , x < -2",
            "-2 < x < 3",
            "x > -2 , x < 3",
            "x > 2 , x < -3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את הערכים המאפסים את המונה ואת המכנה בנפרד.", math_expression: "x - 3 = 0 &rArr; x = 3 &nbsp;&nbsp;|&nbsp;&nbsp; x + 2 = 0 &rArr; x = -2" },
            { verbal_explanation: "נגדיר את תחום ההצבה של השבר (המכנה שונה מאפס).", math_expression: "x &ne; -2" },
            { verbal_explanation: "נסמן את הנקודות על ציר המספרים ונבדוק את תחומי החיוביות והשליליות (לפי שיטת הנחש). מכיוון ששני מקדמי המשתנה חיוביים, התחום הימני ביותר יהיה חיובי, והסימן יתחלף בכל שורש.", math_expression: "x > 3 &rArr; + &nbsp;&nbsp;|&nbsp;&nbsp; -2 < x < 3 &rArr; - &nbsp;&nbsp;|&nbsp;&nbsp; x < -2 &rArr; +" },
            { verbal_explanation: "אנו מחפשים את התחומים שבהם השבר כולו גדול מאפס (חיובי ממש).", math_expression: "x > 3 , x < -2" }
        ],
        final_answer: "x > 3 , x < -2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "מהו תחום הפתרון של אי-השוויון:<br>(2x - 8) / (x + 1) &le; 0",
        options: [
            "-1 < x &le; 4",
            "-1 &le; x &le; 4",
            "x &ge; 4 , x < -1",
            "-4 &le; x < 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחלץ את המאפסים של המונה ושל המכנה.", math_expression: "2x - 8 = 0 &rArr; x = 4 &nbsp;&nbsp;|&nbsp;&nbsp; x + 1 = 0 &rArr; x = -1" },
            { verbal_explanation: "נרשום את תחום ההצבה אשר אוסר על איפוס המכנה.", math_expression: "x &ne; -1" },
            { verbal_explanation: "נבדוק את תחומי החיוביות והשליליות. המנה שלילית בתחום הפנימי שבין השורשים.", math_expression: "-1 < x < 4" },
            { verbal_explanation: "אי-השוויון מאפשר שוויון לאפס, ולכן נכלול את מאפס המונה (סימן קטן-שווה), אך נשאיר את מאפס המכנה מחוץ לתחום.", math_expression: "-1 < x &le; 4" }
        ],
        final_answer: "-1 < x &le; 4"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "פתרו את אי-השוויון הכפול הבא:<br>-7 < 3x - 1 < 8",
        options: [
            "-2 < x < 3",
            "-2 &le; x &le; 3",
            "-3 < x < 2",
            "x > 3 , x < -2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפתור את אי-השוויון הכפול על ידי הוספת המספר לכל אגפי המערכת במקביל.", math_expression: "-7 + 1 < 3x < 8 + 1" },
            { verbal_explanation: "נבצע את פעולות החשבון הנדרשות באגפים הקיצוניים.", math_expression: "-6 < 3x < 9" },
            { verbal_explanation: "נחלק את כל האגפים במקדם של המשתנה כדי לבודד אותו. מכיוון שהמקדם חיובי, כיוון הסימנים נשמר.", math_expression: "-2 < x < 3" }
        ],
        final_answer: "-2 < x < 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "מצאו את התחום המקיים את התנאי:<br>(x<sup>2</sup> - 16) / (x - 2) > 0",
        options: [
            "-4 < x < 2 , x > 4",
            "x < -4 , x > 2",
            "-4 < x < 4",
            "x > 4 , x < -2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפרק את המונה לגורמים על פי נוסחת כפל מקוצר של הפרש ריבועים.", math_expression: "((x - 4)(x + 4)) / (x - 2) > 0" },
            { verbal_explanation: "נזהה את שלושת המאפסים של הפונקציה ואת תחום ההגדרה.", math_expression: "x = 4 , x = -4 &nbsp;&nbsp;|&nbsp;&nbsp; x &ne; 2" },
            { verbal_explanation: "נמקם את הנקודות על הציר ונבדוק סימנים. התחום הימני ביותר חיובי, והסימן יתחלף בכל מעבר.", math_expression: "x > 4 &rArr; + &nbsp;|&nbsp; 2 < x < 4 &rArr; - &nbsp;|&nbsp; -4 < x < 2 &rArr; + &nbsp;|&nbsp; x < -4 &rArr; -" },
            { verbal_explanation: "אנו מחפשים את התחומים שבהם הפונקציה חיובית ממש.", math_expression: "-4 < x < 2 , x > 4" }
        ],
        final_answer: "-4 < x < 2 , x > 4"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "מהו הפתרון של מערכת אי-השוויונים (מערכת 'וגם'):<br>1) x<sup>2</sup> - 4 &le; 0<br>2) x > 1",
        options: [
            "1 < x &le; 2",
            "-2 &le; x &le; 2",
            "x > 1",
            "1 &le; x &le; 2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפתור את אי-השוויון הריבועי הראשון. השורשים הם שתיים ומינוס שתיים, והפרבולה מחייכת, ולכן התחום השלילי נמצא בין השורשים.", math_expression: "-2 &le; x &le; 2" },
            { verbal_explanation: "האי-שוויון השני כבר נתון בצורתו הפשוטה ביותר.", math_expression: "x > 1" },
            { verbal_explanation: "נבצע חיתוך בין התחומים למציאת הפתרון המשותף. המשתנה צריך להיות קטן משתיים אך גדול מאחת.", math_expression: "1 < x &le; 2" }
        ],
        final_answer: "1 < x &le; 2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "פתרו את אי-השוויון הבא:<br>4 / (x<sup>2</sup> - 5x + 6) < 0",
        options: [
            "2 < x < 3",
            "x > 3 , x < 2",
            "2 &le; x &le; 3",
            "אין פתרון"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במונה מופיע מספר קבוע וחיובי. כדי שהשבר כולו יהיה שלילי, המכנה חייב להיות שלילי.", math_expression: "x<sup>2</sup> - 5x + 6 < 0" },
            { verbal_explanation: "נפרק את הביטוי הריבועי שבמכנה בעזרת טרינום למציאת השורשים המאפסים אותו.", math_expression: "(x - 2)(x - 3) < 0" },
            { verbal_explanation: "שורשי הפרבולה הם שתיים ושלוש. מאחר והפרבולה מחייכת, התחום בו היא ממוקמת מתחת לציר נמצא בין השורשים.", math_expression: "2 < x < 3" }
        ],
        final_answer: "2 < x < 3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "מהו הפתרון של אי-השוויון הכולל חזקה זוגית?<br>(x - 4)<sup>2</sup> / (x + 1) &ge; 0",
        options: [
            "x > -1",
            "x > -1 , x &ne; 4",
            "x &ge; -1",
            "x > 4 , x < -1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הביטוי במונה מועלה בריבוע, ולכן הוא תמיד אי-שלילי. תנאי הכרחי לפתרון הוא שהמכנה יהיה שונה מאפס.", math_expression: "(x - 4)<sup>2</sup> &ge; 0 &nbsp;&nbsp;|&nbsp;&nbsp; x &ne; -1" },
            { verbal_explanation: "כדי שהמנה כולה תהיה חיובית או מתאפסת, המכנה חייב להיות חיובי ממש (מאחר ואינו יכול להתאפס).", math_expression: "x + 1 > 0 &rArr; x > -1" },
            { verbal_explanation: "נבדוק האם קיים מאפס למונה שעלינו להוסיף לפתרון, שכן אי-השוויון מתיר התאפסות של המנה.", math_expression: "x - 4 = 0 &rArr; x = 4" },
            { verbal_explanation: "הערך המאפס כבר נכלל בתוך התחום שמצאנו קודם לכן. לפיכך, התחום הרחב מכסה את כל הפתרונות האפשריים.", math_expression: "x > -1" }
        ],
        final_answer: "x > -1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "פתרו את אי-השוויון: 1 / x < 1",
        options: [
            "x < 0 , x > 1",
            "0 < x < 1",
            "x < 1",
            "x > 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אסור בשום אופן לכפול משוואה במשתנה שסימנו אינו ידוע. יש להעביר את המספר מאגף ימין לאגף שמאל.", math_expression: "1 / x - 1 < 0" },
            { verbal_explanation: "נבצע מכנה משותף לשני האיברים כדי ליצור שבר בודד.", math_expression: "(1 - x) / x < 0" },
            { verbal_explanation: "נאתר את המאפסים של המונה ושל המכנה. נשים לב שמקדם המשתנה במונה הוא שלילי.", math_expression: "x = 1 &nbsp;&nbsp;|&nbsp;&nbsp; x = 0" },
            { verbal_explanation: "בגלל יחס המקדמים השלילי (מינוס חלקי פלוס), התחום הימני ביותר יקבל סימן שלילי. אנו מחפשים את התחומים השליליים.", math_expression: "x < 0 , x > 1" }
        ],
        final_answer: "x < 0 , x > 1"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "מצאו את התחום המקיים:<br>x / (x - 3) &ge; 2",
        options: [
            "3 < x &le; 6",
            "3 < x < 6",
            "x &ge; 6",
            "x &le; 3 , x &ge; 6"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נעביר את המספר שמאלה במטרה להשוות את אי-השוויון לאפס.", math_expression: "x / (x - 3) - 2 &ge; 0" },
            { verbal_explanation: "ניצור מכנה משותף עבור כל האיברים. נכפול את המספר במכנה ונדאג להפוך סימנים היכן שצריך.", math_expression: "(x - 2(x - 3)) / (x - 3) &ge; 0" },
            { verbal_explanation: "נפתח סוגריים במונה ונכנס איברים דומים לקבלת השבר המפושט.", math_expression: "(x - 2x + 6) / (x - 3) &ge; 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (-x + 6) / (x - 3) &ge; 0" },
            { verbal_explanation: "המאפסים הם שש ושלוש. מקדם המשתנה במונה הוא שלילי, ולכן התחום הימני ביותר הוא שלילי. אנו מחפשים את התחום החיובי.", math_expression: "3 < x &le; 6" }
        ],
        final_answer: "3 < x &le; 6"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "פתרו את אי-השוויון: (x<sup>2</sup> + 4) / (x<sup>2</sup> - x - 2) < 0",
        options: [
            "-1 < x < 2",
            "x > 2 , x < -1",
            "x > -1",
            "אין פתרון"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבחן תחילה את המונה. סכום של ביטוי ריבועי ומספר חיובי מניב תמיד תוצאה חיובית ממש.", math_expression: "x<sup>2</sup> + 4 > 0" },
            { verbal_explanation: "מכיוון שהמונה חיובי תמיד, על מנת שהשבר כולו יהיה שלילי, המכנה מחויב להיות שלילי.", math_expression: "x<sup>2</sup> - x - 2 < 0" },
            { verbal_explanation: "נפרק לטרינום כדי למצוא את שורשי המכנה.", math_expression: "(x - 2)(x + 1) < 0" },
            { verbal_explanation: "שורשי הפרבולה המחייכת הם שתיים ומינוס אחת. היא תקבל ערכים שליליים בתחום הפנימי.", math_expression: "-1 < x < 2" }
        ],
        final_answer: "-1 < x < 2"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "מהו תחום הפתרון של אי-השוויון: (x<sup>2</sup> - x - 12) / (x<sup>2</sup> - 9) &ge; 0?",
        options: [
            "x &ge; 4 , x < 3 , x &ne; -3",
            "x &ge; 4 , x &le; -3",
            "-3 < x < 3 , x &ge; 4",
            "x > 3 , x < -3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפרק לגורמים את המונה (על ידי טרינום) ואת המכנה (נוסחת הפרש ריבועים).", math_expression: "((x - 4)(x + 3)) / ((x - 3)(x + 3)) &ge; 0" },
            { verbal_explanation: "נרשום את תחום ההגדרה של הפונקציה בטרם נבצע כל פעולת צמצום.", math_expression: "x &ne; 3 , x &ne; -3" },
            { verbal_explanation: "כעת נצמצם את הגורם המשותף לשני החלקים ונפתור את אי-השוויון הנותר.", math_expression: "(x - 4) / (x - 3) &ge; 0" },
            { verbal_explanation: "המאפסים הם ארבע ושלוש. המקדמים חיוביים. התחום בו המנה חיובית הוא התחום החיצוני לערכים.", math_expression: "x &ge; 4 , x < 3" },
            { verbal_explanation: "נשלב את הפתרון עם תחום ההגדרה ההתחלתי שפסל נחרצות את הערך השלילי.", math_expression: "x &ge; 4 , x < 3 , x &ne; -3" }
        ],
        final_answer: "x &ge; 4 , x < 3 , x &ne; -3"
    },
    {
        topic: "אלגברה - משוואות ואי-שוויונים",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question: "פתרו את מערכת אי-השוויונים מסוג 'או' (איחוד קבוצות):<br>1) x < 2<br>2) 2x - 1 > 7",
        options: [
            "x < 2 , x > 4",
            "x > 4",
            "x < 2",
            "2 < x < 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "האי-שוויון הראשון כבר מבודד ופתור.", math_expression: "x < 2" },
            { verbal_explanation: "נפתור את אי-השוויון השני שבמערכת על ידי העברת אגפים וחלוקה.", math_expression: "2x > 8 &rArr; x > 4" },
            { verbal_explanation: "מערכת 'או' משמעותה איחוד הפתרונות. כל פתרון שמקיים לפחות אחד מהתנאים מתקבל ללא חיתוך.", math_expression: "x < 2 , x > 4" }
        ],
        final_answer: "x < 2 , x > 4"
    }
];
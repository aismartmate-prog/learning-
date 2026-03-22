const questionsDB = [
    // ==========================================
    // תת נושא 1: משוואות ממעלה ראשונה עם פרמטרים (10 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question_text: "נתונה המשוואה \\( ax - 3 = 2x + a \\). בטאו את x באמצעות הפרמטר a (הניחו כי \\( a \\neq 2 \\)).&rlm;",
        options: ["x = (a+3)/(a-2)", "x = (a-3)/(a+2)", "x = (a+2)/(a-3)", "x = (a-2)/(a+3)"],
        correctAnswer: 0,
        hint: "העבירו את כל האיברים הכוללים את x לאגף אחד, ואת כל השאר לאגף השני. לאחר מכן, הוציאו את x כגורם משותף וחלקו במקדם שלו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת האיברים עם איקס לאגף השמאלי והמספרים החופשיים והפרמטרים לאגף הימני.", math_expression: "ax - 2x = a + 3" },
            { verbal_explanation: "שלב 2: הוצאת המשתנה איקס כגורם משותף באגף שמאל.", math_expression: "x(a - 2) = a + 3" },
            { verbal_explanation: "שלב 3: חלוקת שני האגפים בביטוי שבסוגריים כדי לבודד את איקס.", math_expression: "x = \\dfrac{a + 3}{a - 2}" },
            { verbal_explanation: "שלב 4: בחירת התשובה המתאימה מהרשימה.", math_expression: "x = (a+3)/(a-2)" }
        ],
        final_answer: "x = (a+3)/(a-2)"
    },

    // שאלה מספר 2 (רב שלבית)
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question_text: "נתונה המשוואה \\( m(x-2) = 3x - 6 \\).&rlm;<br>א. בטאו את x באמצעות m (עבור פתרון יחיד).&rlm;<br>ב. עבור איזה ערך של m יש למשוואה אינסוף פתרונות?&rlm;",
        options: ["א. x = 2 | ב. m = 3", "א. x = 3 | ב. m = 2", "א. x = 2 | ב. m = -3", "א. x = -2 | ב. m = 3"],
        correctAnswer: 0,
        hint: "פתחו סוגריים, בודדו את x. למשוואה יש אינסוף פתרונות כאשר לאחר סידור המשוואה, גם המקדם של x וגם האגף השני מתאפסים (0=0).",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתיחת הסוגריים באגף השמאלי על ידי הכפלת הפרמטר.", math_expression: "mx - 2m = 3x - 6" },
            { verbal_explanation: "שלב 2: העברת איברים כדי לרכז את המשתנה איקס באגף אחד.", math_expression: "mx - 3x = 2m - 6" },
            { verbal_explanation: "שלב 3: הוצאת גורמים משותפים משני האגפים במקביל.", math_expression: "x(m - 3) = 2(m - 3)" },
            { verbal_explanation: "שלב 4: למציאת פתרון יחיד, מחלקים במקדם של איקס (בהנחה שאינו אפס). הביטויים מצטמצמים (תשובה לא').", math_expression: "x = \\dfrac{2(m - 3)}{m - 3} = 2" },
            { verbal_explanation: "שלב 5: אינסוף פתרונות מתקבלים כששני צידי המשוואה מתאפסים (מצב של אפס שווה אפס). זה קורה כאשר הביטוי שבסוגריים מתאפס (תשובה לב').", math_expression: "m - 3 = 0 \\Rightarrow m = 3" }
        ],
        final_answer: "א. x = 2 | ב. m = 3"
    },

    // שאלה מספר 3
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question_text: "פתרו את המשוואה הבאה: \\( \\dfrac{x}{a} + \\dfrac{x}{b} = 1 \\) (הניחו כי הפרמטרים שונים מאפס וסכומם אינו אפס).&rlm;",
        options: ["x = (ab)/(a+b)", "x = (a+b)/(ab)", "x = a+b", "x = ab"],
        correctAnswer: 0,
        hint: "הכפילו את כל המשוואה במכנה המשותף (ab) כדי להיפטר מהשברים, ואז בודדו את x.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הכפלת כל המשוואה במכנה המשותף כדי לבטל את השברים.", math_expression: "\\dfrac{x}{a} \\times (ab) + \\dfrac{x}{b} \\times (ab) = 1 \\times (ab)" },
            { verbal_explanation: "שלב 2: צמצום המכנים נותן משוואה ללא שברים.", math_expression: "bx + ax = ab" },
            { verbal_explanation: "שלב 3: הוצאת איקס כגורם משותף באגף השמאלי.", math_expression: "x(b + a) = ab" },
            { verbal_explanation: "שלב 4: חלוקת המשוואה בביטוי שבסוגריים לבידוד סופי של איקס.", math_expression: "x = \\dfrac{ab}{a + b}" },
            { verbal_explanation: "שלב 5: התאמת התוצאה לחלופות הנתונות.", math_expression: "x = (ab)/(a+b)" }
        ],
        final_answer: "x = (ab)/(a+b)"
    },

    // שאלה מספר 4
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question_text: "נתונה המשוואה \\( ax + b = cx + d \\). בטאו את x באמצעות הפרמטרים (הניחו כי \\( a \\neq c \\)).&rlm;",
        options: ["x = (d-b)/(a-c)", "x = (b-d)/(a-c)", "x = (d-b)/(c-a)", "x = (a-c)/(d-b)"],
        correctAnswer: 0,
        hint: "רכזו את האיברים עם x בצד אחד ואת שאר האיברים בצד השני.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת האיברים הכוללים את המשתנה איקס שמאלה, והאיברים החופשיים ימינה.", math_expression: "ax - cx = d - b" },
            { verbal_explanation: "שלב 2: שימוש בחוק הפילוג להוצאת איקס כגורם משותף.", math_expression: "x(a - c) = d - b" },
            { verbal_explanation: "שלב 3: חלוקה במקדם של איקס לקבלת הפתרון.", math_expression: "x = \\dfrac{d - b}{a - c}" },
            { verbal_explanation: "שלב 4: אישור התשובה במערכת.", math_expression: "x = (d-b)/(a-c)" }
        ],
        final_answer: "x = (d-b)/(a-c)"
    },

    // שאלה מספר 5 (רב שלבית)
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question_text: "נתונה המשוואה \\( kx - 4 = 2x - k \\).&rlm;<br>א. בטאו את x באמצעות k (בהנחה ש- \\( k \\neq 2 \\)).&rlm;<br>ב. לאיזה ערך של k מתקיים \\( x = 3 \\)?&rlm;",
        options: ["א. x = (4-k)/(k-2) | ב. k = 2.5", "א. x = (k-4)/(k-2) | ב. k = 3", "א. x = (4-k)/(k-2) | ב. k = 1.5", "א. x = (4-k)/(2-k) | ב. k = 2.5"],
        correctAnswer: 0,
        hint: "בסעיף ב', הציבו את הערך של x שמצאתם כ-3 ופתרו את המשוואה החדשה שמתקבלת עבור הנעלם k.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סידור המשוואה על ידי ריכוז המשתנה באגף השמאלי.", math_expression: "kx - 2x = 4 - k" },
            { verbal_explanation: "שלב 2: הוצאת גורם משותף ובידוד (תשובה לא').", math_expression: "x(k - 2) = 4 - k \\Rightarrow x = \\dfrac{4 - k}{k - 2}" },
            { verbal_explanation: "שלב 3: התחלת סעיף ב' על ידי הצבת הערך המספרי של איקס.", math_expression: "3 = \\dfrac{4 - k}{k - 2}" },
            { verbal_explanation: "שלב 4: הכפלת המשוואה במכנה לשם ביטולו.", math_expression: "3(k - 2) = 4 - k" },
            { verbal_explanation: "שלב 5: פתיחת סוגריים והעברת איברים.", math_expression: "3k - 6 = 4 - k \\Rightarrow 4k = 10" },
            { verbal_explanation: "שלב 6: חלוקה בארבע למציאת הפרמטר (תשובה לב').", math_expression: "k = 2.5" }
        ],
        final_answer: "א. x = (4-k)/(k-2) | ב. k = 2.5"
    },

    // שאלה מספר 6 (רב שלבית)
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question_text: "נתונה המשוואה \\( 2mx - m^{2} = 8x - 16 \\).&rlm;<br>א. בטאו את x באמצעות m (למצב של פתרון יחיד).&rlm;<br>ב. עבור איזה ערך של m יש למשוואה אינסוף פתרונות?&rlm;",
        options: ["א. x = (m+4)/2 | ב. m = 4", "א. x = (m-4)/2 | ב. m = -4", "א. x = (m+4)/2 | ב. m = -4", "א. x = (m-4)/2 | ב. m = 4"],
        correctAnswer: 0,
        hint: "העבירו אגפים, הוציאו גורם משותף, והשתמשו בנוסחת הכפל המקוצר להפרש ריבועים כדי לפשט את השבר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סידור המשוואה לאגף איקס ואגף חופשי.", math_expression: "2mx - 8x = m^{2} - 16" },
            { verbal_explanation: "שלב 2: הוצאת גורמים משותפים משני האגפים. באגף ימין שימוש בכפל מקוצר.", math_expression: "2x(m - 4) = (m - 4)(m + 4)" },
            { verbal_explanation: "שלב 3: למציאת פתרון יחיד נחלק במקדם של איקס, תוך צמצום הגורם המשותף.", math_expression: "2x = m + 4 \\Rightarrow x = \\dfrac{m + 4}{2}" },
            { verbal_explanation: "שלב 4: אינסוף פתרונות נוצרים כששני צידי המשוואה מהשלב השני מתאפסים במקביל.", math_expression: "m - 4 = 0 \\Rightarrow m = 4" },
            { verbal_explanation: "שלב 5: התשובה המלאה.", math_expression: "1" }
        ],
        final_answer: "א. x = (m+4)/2 | ב. m = 4"
    },

    // שאלה מספר 7
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question_text: "פתרו את המשוואה הבאה ומצאו את x: \\( \\dfrac{2x-a}{3} = \\dfrac{x+a}{2} \\).&rlm;",
        options: ["x = 5a", "x = 4a", "x = 3a", "x = a"],
        correctAnswer: 0,
        hint: "כפל בהצלבה יעלים את השברים. פתחו סוגריים ורכזו את הנעלמים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ביצוע כפל בהצלבה של שני אגפי המשוואה לשם ביטול השברים.", math_expression: "2 \\times (2x - a) = 3 \\times (x + a)" },
            { verbal_explanation: "שלב 2: פתיחת סוגריים על ידי חלוקת המקדמים.", math_expression: "4x - 2a = 3x + 3a" },
            { verbal_explanation: "שלב 3: העברת המשתנה איקס שמאלה והפרמטר איי ימינה.", math_expression: "4x - 3x = 3a + 2a" },
            { verbal_explanation: "שלב 4: כינוס איברים לקבלת התוצאה הסופית.", math_expression: "x = 5a" },
            { verbal_explanation: "שלב 5: אישור החלופה.", math_expression: "x = 5a" }
        ],
        final_answer: "x = 5a"
    },

    // שאלה מספר 8 (רב שלבית)
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question_text: "נתונה המשוואה \\( (m-1)x = m^{2}-1 \\).&rlm;<br>א. בטאו את x באמצעות m (הניחו \\( m \\neq 1 \\)).&rlm;<br>ב. עבור איזה ערך של m מתקיים \\( x = 5 \\)?&rlm;",
        options: ["א. x = m+1 | ב. m = 4", "א. x = m-1 | ב. m = 6", "א. x = m+1 | ב. m = 5", "א. x = m | ב. m = 5"],
        correctAnswer: 0,
        hint: "זכרו ש- \\( m^{2}-1 \\) מתפרק ל- \\( (m-1)(m+1) \\) על פי נוסחאות הכפל המקוצר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פירוק האגף הימני לפי נוסחת הפרש ריבועים.", math_expression: "(m - 1)x = (m - 1)(m + 1)" },
            { verbal_explanation: "שלב 2: חלוקת המשוואה בביטוי שבסוגריים לקבלת הפתרון (תשובה לא').", math_expression: "x = m + 1" },
            { verbal_explanation: "שלב 3: הצבת הערך המספרי שניתן בסעיף ב' במקום המשתנה איקס.", math_expression: "5 = m + 1" },
            { verbal_explanation: "שלב 4: העברת אגף לבידוד הפרמטר (תשובה לב').", math_expression: "m = 5 - 1 = 4" },
            { verbal_explanation: "שלב 5: התאמה מושלמת לחלופות.", math_expression: "1" }
        ],
        final_answer: "א. x = m+1 | ב. m = 4"
    },

    // שאלה מספר 9
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question_text: "פתרו את המשוואה הבאה עבור x: \\( a(x-a) = b(x-b) \\) (הניחו כי \\( a \\neq b \\)).&rlm;",
        options: ["x = a+b", "x = a-b", "x = a^{2}-b^{2}", "x = (a+b)/2"],
        correctAnswer: 0,
        hint: "פתחו סוגריים. העבירו את איברי ה-x שמאלה, והאיברים החופשיים ימינה. השתמשו בכפל מקוצר באגף ימין, וצמצמו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתיחת סוגריים בשני אגפי המשוואה.", math_expression: "ax - a^{2} = bx - b^{2}" },
            { verbal_explanation: "שלב 2: העברת איברים לריכוז המשתנה והפרמטרים.", math_expression: "ax - bx = a^{2} - b^{2}" },
            { verbal_explanation: "שלב 3: הוצאת גורם משותף משמאל ופירוק להפרש ריבועים מימין.", math_expression: "x(a - b) = (a - b)(a + b)" },
            { verbal_explanation: "שלב 4: צמצום הביטוי המשותף משני האגפים בחלוקה.", math_expression: "x = a + b" },
            { verbal_explanation: "שלב 5: התשובה המבוקשת.", math_expression: "x = a+b" }
        ],
        final_answer: "x = a+b"
    },

    // שאלה מספר 10
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה ראשונה עם פרמטרים",
        question_text: "נתונה המשוואה \\( 3x - m = 5x + 3m \\). מצאו את הערך של x במונחי m.&rlm;",
        options: ["x = -2m", "x = 2m", "x = -m", "x = 4m"],
        correctAnswer: 0,
        hint: "העבירו את כל איברי ה-x לאגף ימין, ואת איברי ה-m לאגף שמאל כדי לשמור על מקדם חיובי ל-x.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת איברי האיקס ימינה ואיברי הפרמטר שמאלה.", math_expression: "-m - 3m = 5x - 3x" },
            { verbal_explanation: "שלב 2: כינוס איברים פשוט בשני האגפים.", math_expression: "-4m = 2x" },
            { verbal_explanation: "שלב 3: חלוקת המשוואה בשתיים כדי לבודד את המשתנה.", math_expression: "x = \\dfrac{-4m}{2}" },
            { verbal_explanation: "שלב 4: צמצום השבר לתוצאה הסופית.", math_expression: "x = -2m" },
            { verbal_explanation: "שלב 5: התשובה הדרושה.", math_expression: "x = -2m" }
        ],
        final_answer: "x = -2m"
    },

    // ==========================================
    // תת נושא 2: משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים (10 שאלות)
    // ==========================================

    // שאלה מספר 11
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים",
        question_text: "עבור איזה ערך של הפרמטר m יש למשוואה הריבועית \\( x^{2} - 4x + m = 0 \\) פתרון ממשי יחיד (שורש כפול)?&rlm;",
        options: ["m = 4", "m = 16", "m = -4", "m = 0"],
        correctAnswer: 0,
        hint: "למשוואה ריבועית יש פתרון יחיד כאשר הדיסקרימיננטה (דלתא, הביטוי שמתחת לשורש בנוסחת השורשים) שווה לאפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המקדמים של המשוואה הריבועית.", math_expression: "a = 1 \\quad , \\quad b = -4 \\quad , \\quad c = m" },
            { verbal_explanation: "שלב 2: הגדרת התנאי לפתרון יחיד (דלתא מתאפסת).", math_expression: "\\Delta = b^{2} - 4ac = 0" },
            { verbal_explanation: "שלב 3: הצבת המקדמים בתוך נוסחת הדלתא.", math_expression: "(-4)^{2} - 4 \\times 1 \\times m = 0" },
            { verbal_explanation: "שלב 4: ביצוע החזקה והכפל.", math_expression: "16 - 4m = 0" },
            { verbal_explanation: "שלב 5: פתרון המשוואה הליניארית הפשוטה למציאת הפרמטר.", math_expression: "16 = 4m \\Rightarrow m = 4" }
        ],
        final_answer: "m = 4"
    },

    // שאלה מספר 12 (רב שלבית)
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים",
        question_text: "נתונה המשוואה הריבועית \\( x^{2} - (m+2)x + 2m = 0 \\).&rlm;<br>א. הביעו את שורשי המשוואה באמצעות m.&rlm;<br>ב. ידוע שאחד השורשים שווה ל-5. מהם הערכים האפשריים ל-m?&rlm;",
        options: ["א. m, 2 | ב. m = 5", "א. m, -2 | ב. m = -5", "א. 2m, 1 | ב. m = 2.5", "א. m, 2 | ב. m = 2"],
        correctAnswer: 0,
        hint: "ניתן לפתור באמצעות נוסחת השורשים (הדלתא תצא ריבוע של דו-איבר), או להבחין שהמשוואה מבוססת על פירוק לטרינום כאשר הסכום הוא m+2 והמכפלה 2m.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המקדמים. ניתן להשתמש בטרינום בו מחפשים מספרים שמכפלתם שני אמ וסכומם אמ פלוס שתיים.", math_expression: "(x - m)(x - 2) = 0" },
            { verbal_explanation: "שלב 2: שורשי המשוואה מתוך איפוס כל סוגר (תשובה לא').", math_expression: "x_{1} = m \\quad , \\quad x_{2} = 2" },
            { verbal_explanation: "שלב 3: בסעיף ב', נתון כי אחד השורשים הוא חמש. השורש השני הוא מספר קבוע (שתיים) ולכן אינו יכול להיות חמש.", math_expression: "2 \\neq 5" },
            { verbal_explanation: "שלב 4: המסקנה ההכרחית היא שהשורש המשתנה הוא זה ששווה לחמש (תשובה לב').", math_expression: "m = 5" },
            { verbal_explanation: "שלב 5: התאמה לאפשרות המתאימה.", math_expression: "1" }
        ],
        final_answer: "א. m, 2 | ב. m = 5"
    },

    // שאלה מספר 13
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים",
        question_text: "עבור אילו ערכים של m יש למשוואה הריבועית \\( mx^{2} - 6x + 1 = 0 \\) שני פתרונות ממשיים שונים?&rlm;",
        options: ["m < 9 וגם m \\neq 0", "m > 9", "m < 9", "m > 0"],
        correctAnswer: 0,
        hint: "ישנם שני תנאים: הראשון, המקדם הריבועי (m) לא שווה לאפס. השני, הדלתא חיובית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: דרישה בסיסית ממשוואה ממעלה שנייה - המקדם המוביל אינו אפס.", math_expression: "m \\neq 0" },
            { verbal_explanation: "שלב 2: תנאי לקיום שני שורשים ממשיים שונים (דלתא חיובית).", math_expression: "\\Delta > 0" },
            { verbal_explanation: "שלב 3: הצבת המקדמים לתוך תנאי הדלתא.", math_expression: "(-6)^{2} - 4 \\times m \\times 1 > 0" },
            { verbal_explanation: "שלב 4: ביצוע החזקה וסידור אי-השוויון.", math_expression: "36 - 4m > 0 \\Rightarrow 36 > 4m" },
            { verbal_explanation: "שלב 5: חלוקת אי-השוויון בארבע.", math_expression: "m < 9" },
            { verbal_explanation: "שלב 6: שילוב התנאים לתשובה הסופית.", math_expression: "m < 9 \\quad , \\quad m \\neq 0" }
        ],
        final_answer: "m < 9 וגם m \\neq 0"
    },

    // שאלה מספר 14
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים",
        question_text: "נתונה המשוואה \\( x^{2} + 2mx + m^{2} - 4 = 0 \\). מצאו את שורשי המשוואה באמצעות m.&rlm;",
        options: ["-m + 2 , -m - 2", "m + 2 , m - 2", "-m + 4 , -m - 4", "2m + 2 , 2m - 2"],
        correctAnswer: 0,
        hint: "הציבו את המקדמים בנוסחת השורשים. שימו לב שהדלתא תצטמצם למספר קבוע (16) שכן איברי ה-m יתבטלו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת מקדמי המשוואה.", math_expression: "a = 1 \\quad , \\quad b = 2m \\quad , \\quad c = m^{2} - 4" },
            { verbal_explanation: "שלב 2: חישוב הדיסקרימיננטה (דלתא).", math_expression: "\\Delta = (2m)^{2} - 4 \\times 1 \\times (m^{2} - 4)" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים וכינוס.", math_expression: "\\Delta = 4m^{2} - 4m^{2} + 16 = 16" },
            { verbal_explanation: "שלב 4: הצבה בנוסחת השורשים.", math_expression: "x_{1,2} = \\dfrac{-2m \\pm \\sqrt{16}}{2}" },
            { verbal_explanation: "שלב 5: הוצאת שורש ופיצול לשני פתרונות.", math_expression: "x_{1,2} = \\dfrac{-2m \\pm 4}{2}" },
            { verbal_explanation: "שלב 6: חלוקת המונה בשתיים לקבלת הפתרונות המפושטים.", math_expression: "x_{1} = -m + 2 \\quad , \\quad x_{2} = -m - 2" }
        ],
        final_answer: "-m + 2 , -m - 2"
    },

    // שאלה מספר 15
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים",
        question_text: "נתונה המשוואה \\( (m-2)x^{2} - 2mx + m + 3 = 0 \\). עבור אילו ערכים של m אין למשוואה אף פתרון ממשי?&rlm;",
        options: ["m > 6", "m < 6", "m > 2", "m < -3"],
        correctAnswer: 0,
        hint: "דרשו שהדלתא תהיה קטנה מאפס. (הערה: בדקו גם את המקרה הליניארי בו m=2, ותראו ששם יש פתרון, לכן התנאי הוא רק על הדלתא).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת מקדמים באי-שוויון של העדר פתרונות ממשיים (דלתא שלילית).", math_expression: "(-2m)^{2} - 4 \\times (m - 2)(m + 3) < 0" },
            { verbal_explanation: "שלב 2: פתיחת הסוגריים הכפולים (מכפלת דו-איברים).", math_expression: "4m^{2} - 4(m^{2} + 3m - 2m - 6) < 0" },
            { verbal_explanation: "שלב 3: כינוס איברים בתוך הסוגריים והכפלה במקדם החיצוני.", math_expression: "4m^{2} - 4m^{2} - 4m + 24 < 0" },
            { verbal_explanation: "שלב 4: ביטול איברי הריבוע לקבלת אי-שוויון ליניארי פשוט.", math_expression: "-4m + 24 < 0 \\Rightarrow 24 < 4m" },
            { verbal_explanation: "שלב 5: חלוקה בארבע מספקת את התחום עבורו אין פתרון.", math_expression: "m > 6" },
            { verbal_explanation: "שלב 6: בחירת התשובה במערכת.", math_expression: "m > 6" }
        ],
        final_answer: "m > 6"
    },

    // שאלה מספר 16
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים",
        question_text: "פתרו את המשוואה \\( ax^{2} - 5ax + 6a = 0 \\) בהנחה ש- \\( a \\neq 0 \\).&rlm;",
        options: ["x = 2 , x = 3", "x = -2 , x = -3", "x = 2a , x = 3a", "x = 6 , x = 1"],
        correctAnswer: 0,
        hint: "מכיוון שנתון שהפרמטר a שונה מאפס, מותר לחלק את כל המשוואה בו, מה שיהפוך אותה למשוואה ריבועית פשוטה ורגילה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת שני אגפי המשוואה בפרמטר הנתון (חוקי לחלוטין עקב האילוץ).", math_expression: "x^{2} - 5x + 6 = 0" },
            { verbal_explanation: "שלב 2: פירוק המשוואה לגורמים באמצעות טרינום (מספרים שסכומם מינוס חמש ומכפלתם שש).", math_expression: "(x - 2)(x - 3) = 0" },
            { verbal_explanation: "שלב 3: חילוץ השורש הראשון.", math_expression: "x - 2 = 0 \\Rightarrow x = 2" },
            { verbal_explanation: "שלב 4: חילוץ השורש השני.", math_expression: "x - 3 = 0 \\Rightarrow x = 3" },
            { verbal_explanation: "שלב 5: קבלת סט הפתרונות המלא.", math_expression: "x = 2 \\quad , \\quad x = 3" }
        ],
        final_answer: "x = 2 , x = 3"
    },

    // שאלה מספר 17 (רב שלבית)
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים",
        question_text: "נתונה המשוואה \\( x^{2} - mx - 2m^{2} = 0 \\).&rlm;<br>א. בטאו את פתרונות המשוואה באמצעות m.&rlm;<br>ב. נתון שההפרש החיובי בין הפתרונות הוא 12 (כאשר נתון בנוסף ש- m > 0). מצאו את m.&rlm;",
        options: ["א. 2m, -m | ב. m = 4", "א. 2m, m | ב. m = 12", "א. -2m, m | ב. m = 4", "א. 2m, -m | ב. m = 3"],
        correctAnswer: 0,
        hint: "היעזרו בנוסחת השורשים. הדלתא תהיה שווה ל- \\( m^{2} + 8m^{2} = 9m^{2} \\). ההפרש בין השורשים הוא הגדול פחות הקטן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הדיסקרימיננטה.", math_expression: "\\Delta = (-m)^{2} - 4 \\times 1 \\times (-2m^{2}) = m^{2} + 8m^{2} = 9m^{2}" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת השורשים.", math_expression: "x_{1,2} = \\dfrac{m \\pm \\sqrt{9m^{2}}}{2} = \\dfrac{m \\pm 3m}{2}" },
            { verbal_explanation: "שלב 3: מציאת שני השורשים (תשובה לא').", math_expression: "x_{1} = \\dfrac{4m}{2} = 2m \\quad , \\quad x_{2} = \\dfrac{-2m}{2} = -m" },
            { verbal_explanation: "שלב 4: מאחר ונתון כי המשתנה חיובי, השורש הראשון הוא הגדול יותר. בניית משוואת ההפרש.", math_expression: "2m - (-m) = 12" },
            { verbal_explanation: "שלב 5: כינוס איברים ופתרון המשוואה לחילוץ הערך (תשובה לב').", math_expression: "3m = 12 \\Rightarrow m = 4" }
        ],
        final_answer: "א. 2m, -m | ב. m = 4"
    },

    // שאלה מספר 18
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים",
        question_text: "עבור אילו ערכים של k המשוואה \\( x^{2} - kx + k = 0 \\) בעלת פתרון כפול (דלתא שווה לאפס)?&rlm;",
        options: ["k = 0 , k = 4", "k = 2 , k = -2", "k = 0 , k = -4", "k = 1 , k = 4"],
        correctAnswer: 0,
        hint: "הציבו את המקדמים בנוסחת הדלתא, השוו לאפס ופתרו את המשוואה הריבועית החדשה שנוצרה עבור המשתנה k.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת המקדמים במשוואת דלתא מאופסת המייצגת פתרון יחיד (כפול).", math_expression: "(-k)^{2} - 4 \\times 1 \\times k = 0" },
            { verbal_explanation: "שלב 2: סידור המשוואה החדשה שהתקבלה.", math_expression: "k^{2} - 4k = 0" },
            { verbal_explanation: "שלב 3: הוצאת גורם משותף מחוץ לסוגריים לשם פירוק.", math_expression: "k(k - 4) = 0" },
            { verbal_explanation: "שלב 4: השוואת הגורם הראשון לאפס.", math_expression: "k = 0" },
            { verbal_explanation: "שלב 5: השוואת הביטוי שבסוגריים לאפס.", math_expression: "k - 4 = 0 \\Rightarrow k = 4" },
            { verbal_explanation: "שלב 6: צירוף שני הפתרונות למענה השלם.", math_expression: "k = 0 \\quad , \\quad k = 4" }
        ],
        final_answer: "k = 0 , k = 4"
    },

    // שאלה מספר 19
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים",
        question_text: "עבור איזה ערך של m המשוואה \\( 2x^{2} - 4x + m - 1 = 0 \\) היא חסרת פתרון ממשי?&rlm;",
        options: ["m > 3", "m < 3", "m > 1", "m < -1"],
        correctAnswer: 0,
        hint: "כדי שלמשוואה ריבועית לא יהיו פתרונות ממשיים, הדיסקרימיננטה שלה צריכה להיות שלילית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: דרישת התנאי לאי-קיום פתרון.", math_expression: "\\Delta < 0" },
            { verbal_explanation: "שלב 2: כתיבת אי-השוויון על בסיס המקדמים הנתונים.", math_expression: "(-4)^{2} - 4 \\times 2 \\times (m - 1) < 0" },
            { verbal_explanation: "שלב 3: ביצוע החזקה ופתיחת הסוגריים.", math_expression: "16 - 8(m - 1) < 0 \\Rightarrow 16 - 8m + 8 < 0" },
            { verbal_explanation: "שלב 4: כינוס איברים והעברת משתנה כדי להפוך אותו לחיובי.", math_expression: "24 - 8m < 0 \\Rightarrow 24 < 8m" },
            { verbal_explanation: "שלב 5: חלוקת המשוואה בשמונה לחשיפת התחום המבוקש.", math_expression: "3 < m \\Rightarrow m > 3" },
            { verbal_explanation: "שלב 6: בחירת התשובה הנכונה.", math_expression: "m > 3" }
        ],
        final_answer: "m > 3"
    },

    // שאלה מספר 20 (רב שלבית)
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שנייה עם פרמטרים וחקירת שורשים",
        question_text: "נתונה המשוואה \\( x^{2} - (2a+1)x + a^{2}+a = 0 \\).&rlm;<br>א. מצאו את שורשי המשוואה באמצעות a.&rlm;<br>ב. אם נתון שסכום שני השורשים הוא 5, מצאו את הערך של a.&rlm;",
        options: ["א. a+1, a | ב. a = 2", "א. -a-1, -a | ב. a = -3", "א. a-1, a | ב. a = 3", "א. 2a+1, a | ב. a = 1.33"],
        correctAnswer: 0,
        hint: "הדלתא מסתדרת יפה ל-1. בסעיף ב', חברו את שני הביטויים שקיבלתם לשורשים והשוו ל-5.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הדיסקרימיננטה תוך שימוש בכפל מקוצר.", math_expression: "\\Delta = (-(2a + 1))^{2} - 4 \\times 1 \\times (a^{2} + a) = 4a^{2} + 4a + 1 - 4a^{2} - 4a = 1" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת השורשים.", math_expression: "x_{1,2} = \\dfrac{2a + 1 \\pm \\sqrt{1}}{2} = \\dfrac{2a + 1 \\pm 1}{2}" },
            { verbal_explanation: "שלב 3: מסלול חיבור למציאת השורש הראשון.", math_expression: "x_{1} = \\dfrac{2a + 2}{2} = a + 1" },
            { verbal_explanation: "שלב 4: מסלול חיסור למציאת השורש השני (סיום תשובה לא').", math_expression: "x_{2} = \\dfrac{2a}{2} = a" },
            { verbal_explanation: "שלב 5: בניית משוואת סכום השורשים והשוואתה לנתון סעיף ב'.", math_expression: "(a + 1) + a = 5" },
            { verbal_explanation: "שלב 6: בידוד המשתנה לפתרון (תשובה לב').", math_expression: "2a + 1 = 5 \\Rightarrow 2a = 4 \\Rightarrow a = 2" }
        ],
        final_answer: "א. a+1, a | ב. a = 2"
    },

    // ==========================================
    // תת נושא 3: משוואות ממעלה שלישית ויותר (10 שאלות)
    // ==========================================

    // שאלה מספר 21
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שלישית ויותר",
        question_text: "פתרו את המשוואה ממעלה שלישית הבאה: \\( x^{3} - 4x = 0 \\).&rlm;",
        options: ["0, 2, -2", "0, 4", "2, -2", "0, 4, -4"],
        correctAnswer: 0,
        hint: "הוציאו x כגורם משותף מחוץ לסוגריים, ואז יישארו בסוגריים ביטוי שניתן לפרק באמצעות נוסחת הפרש ריבועים או לפתור כמשוואה ריבועית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הוצאת איקס מחוץ לסוגריים כגורם משותף.", math_expression: "x(x^{2} - 4) = 0" },
            { verbal_explanation: "שלב 2: השוואת הגורם החיצוני לאפס לקבלת פתרון ראשון.", math_expression: "x_{1} = 0" },
            { verbal_explanation: "שלב 3: השוואת הביטוי בסוגריים לאפס.", math_expression: "x^{2} - 4 = 0 \\Rightarrow x^{2} = 4" },
            { verbal_explanation: "שלב 4: הוצאת שורש מספקת את שני הפתרונות הנותרים.", math_expression: "x_{2} = 2 \\quad , \\quad x_{3} = -2" },
            { verbal_explanation: "שלב 5: התשובה הישירה במערכת.", math_expression: "0 \\quad , \\quad 2 \\quad , \\quad -2" }
        ],
        final_answer: "0, 2, -2"
    },

    // שאלה מספר 22
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שלישית ויותר",
        question_text: "מצאו את שורשי המשוואה: \\( x^{3} - 5x^{2} + 6x = 0 \\).&rlm;",
        options: ["0, 2, 3", "0, -2, -3", "2, 3", "0, 1, 6"],
        correctAnswer: 0,
        hint: "הוציאו x מחוץ לסוגריים. התבנית שנשארת בפנים היא טרינום ממעלה שנייה שאפשר לפרק.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הוצאת משתנה משותף בעל החזקה הנמוכה ביותר.", math_expression: "x(x^{2} - 5x + 6) = 0" },
            { verbal_explanation: "שלב 2: שורש ראשון נובע מהאיבר החיצוני.", math_expression: "x_{1} = 0" },
            { verbal_explanation: "שלב 3: פירוק המשוואה הריבועית הפנימית לגורמים.", math_expression: "(x - 2)(x - 3) = 0" },
            { verbal_explanation: "שלב 4: חילוץ השורש מהגורם האמצעי.", math_expression: "x - 2 = 0 \\Rightarrow x_{2} = 2" },
            { verbal_explanation: "שלב 5: חילוץ השורש מהגורם השמאלי ביותר.", math_expression: "x - 3 = 0 \\Rightarrow x_{3} = 3" },
            { verbal_explanation: "שלב 6: הרכבת התשובה השלמה.", math_expression: "0 \\quad , \\quad 2 \\quad , \\quad 3" }
        ],
        final_answer: "0, 2, 3"
    },

    // שאלה מספר 23
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שלישית ויותר",
        question_text: "פתרו את המשוואה: \\( 2x^{3} - 18x = 0 \\).&rlm;",
        options: ["0, 3, -3", "0, 9, -9", "3, -3", "0, 18"],
        correctAnswer: 0,
        hint: "אפשר להוציא גם מספר וגם משתנה כגורם משותף (2x).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הוצאת המקדם המשותף יחד עם המשתנה מחוץ לסוגריים.", math_expression: "2x(x^{2} - 9) = 0" },
            { verbal_explanation: "שלב 2: השוואת הגורם הכפלי החיצוני לאפס למציאת הפתרון הראשון.", math_expression: "2x = 0 \\Rightarrow x_{1} = 0" },
            { verbal_explanation: "שלב 3: השוואת הגורם הפנימי לאפס (ניתן גם לפרק בנוסחת הכפל המקוצר).", math_expression: "x^{2} - 9 = 0 \\Rightarrow x^{2} = 9" },
            { verbal_explanation: "שלב 4: הוצאת שורש נותנת שני פתרונות הופכיים.", math_expression: "x_{2} = 3 \\quad , \\quad x_{3} = -3" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "0 \\quad , \\quad 3 \\quad , \\quad -3" }
        ],
        final_answer: "0, 3, -3"
    },

    // שאלה מספר 24
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שלישית ויותר",
        question_text: "מצאו את הפתרונות של המשוואה ממעלה רביעית: \\( x^{4} - 5x^{3} + 4x^{2} = 0 \\).&rlm;",
        options: ["0, 1, 4", "0, -1, -4", "1, 4", "0, 2, 2"],
        correctAnswer: 0,
        hint: "הוציאו את החזקה הנמוכה ביותר (x בריבוע) כגורם משותף.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת החזקה הנמוכה ביותר בביטוי והוצאתה החוצה.", math_expression: "x^{2}(x^{2} - 5x + 4) = 0" },
            { verbal_explanation: "שלב 2: איפוס הגורם החיצוני מניב פתרון אחד (שהוא שורש כפול מבחינה אלגברית).", math_expression: "x^{2} = 0 \\Rightarrow x_{1} = 0" },
            { verbal_explanation: "שלב 3: פתרון המשוואה הריבועית הפנימית בשיטת טרינום.", math_expression: "(x - 1)(x - 4) = 0" },
            { verbal_explanation: "שלב 4: מציאת הפתרונות של הסוגריים.", math_expression: "x_{2} = 1 \\quad , \\quad x_{3} = 4" },
            { verbal_explanation: "שלב 5: הצגת התשובה במערכת.", math_expression: "0 \\quad , \\quad 1 \\quad , \\quad 4" }
        ],
        final_answer: "0, 1, 4"
    },

    // שאלה מספר 25
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שלישית ויותר",
        question_text: "פתרו את המשוואה: \\( x^{3} + 2x^{2} - 15x = 0 \\).&rlm;",
        options: ["0, 3, -5", "0, -3, 5", "3, -5", "0, 5, -5"],
        correctAnswer: 0,
        hint: "הוציאו x כגורם משותף, ופתרו את הטרינום שנותר (חפשו שני מספרים שמכפלתם 15- וסכומם 2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הוצאת משתנה משותף.", math_expression: "x(x^{2} + 2x - 15) = 0" },
            { verbal_explanation: "שלב 2: שורש ראשון ומידי.", math_expression: "x_{1} = 0" },
            { verbal_explanation: "שלב 3: פירוק הביטוי הריבועי לשני גורמים.", math_expression: "(x - 3)(x + 5) = 0" },
            { verbal_explanation: "שלב 4: איפוס הגורם הראשון נותן פתרון חיובי.", math_expression: "x - 3 = 0 \\Rightarrow x_{2} = 3" },
            { verbal_explanation: "שלב 5: איפוס הגורם השני נותן פתרון שלילי.", math_expression: "x + 5 = 0 \\Rightarrow x_{3} = -5" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "0 \\quad , \\quad 3 \\quad , \\quad -5" }
        ],
        final_answer: "0, 3, -5"
    },

    // שאלה מספר 26
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שלישית ויותר",
        question_text: "מצאו את שורשי המשוואה: \\( x^{3} - x^{2} - 12x = 0 \\).&rlm;",
        options: ["0, 4, -3", "0, -4, 3", "4, -3", "0, 6, -2"],
        correctAnswer: 0,
        hint: "הוציאו x החוצה כגורם משותף ופתרו את מה שנשאר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת המשוואה בצורת מכפלה המכילה גורם משותף.", math_expression: "x(x^{2} - x - 12) = 0" },
            { verbal_explanation: "שלב 2: הפתרון הברור והראשון.", math_expression: "x_{1} = 0" },
            { verbal_explanation: "שלב 3: שימוש בטרינום לפירוק המשוואה הנותרת.", math_expression: "(x - 4)(x + 3) = 0" },
            { verbal_explanation: "שלב 4: חילוץ השורש מתוך הסוגריים בעלי סימן החיסור.", math_expression: "x_{2} = 4" },
            { verbal_explanation: "שלב 5: חילוץ השורש מתוך הסוגריים בעלי סימן החיבור.", math_expression: "x_{3} = -3" },
            { verbal_explanation: "שלב 6: התאמה לאופציות הקיימות.", math_expression: "0 \\quad , \\quad 4 \\quad , \\quad -3" }
        ],
        final_answer: "0, 4, -3"
    },

    // שאלה מספר 27 (רב שלבית)
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שלישית ויותר",
        question_text: "נתונה המשוואה עם הפרמטר a: \\( x^{3} - ax^{2} = 0 \\).&rlm;<br>א. בטאו את הפתרונות באמצעות a.&rlm;<br>ב. אם נתון ש- a=5, מהם פתרונות המשוואה המספריים?&rlm;",
        options: ["א. 0, a | ב. 0, 5", "א. a, -a | ב. 5, -5", "א. 0, -a | ב. 0, -5", "א. a | ב. 5"],
        correctAnswer: 0,
        hint: "הוציאו x בריבוע מחוץ לסוגריים. אלו שני איברים המוכפלים זה בזה ששווים לאפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי והוצאת החזקה המקסימלית המשותפת באגף שמאל.", math_expression: "x^{2}(x - a) = 0" },
            { verbal_explanation: "שלב 2: איפוס החלק הראשון מעניק פתרון אחד קבוע (שהוא שורש כפול).", math_expression: "x^{2} = 0 \\Rightarrow x_{1} = 0" },
            { verbal_explanation: "שלב 3: איפוס החלק השני מעניק פתרון תלוי פרמטר (תשובה לא').", math_expression: "x - a = 0 \\Rightarrow x_{2} = a" },
            { verbal_explanation: "שלב 4: הצבת הנתון מהסעיף השני במקום הפרמטר הכללי שקיבלנו (תשובה לב').", math_expression: "x_{2} = 5" },
            { verbal_explanation: "שלב 5: אישור בחירת האופציה הנכונה.", math_expression: "1" }
        ],
        final_answer: "א. 0, a | ב. 0, 5"
    },

    // שאלה מספר 28
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שלישית ויותר",
        question_text: "פתרו את המשוואה: \\( 3x^{3} - 12x^{2} + 12x = 0 \\).&rlm;",
        options: ["0, 2 (פתרון כפול)", "0, 4", "0, -2", "2, -2"],
        correctAnswer: 0,
        hint: "אפשר ומומלץ להוציא 3x כגורם משותף. מה שנשאר בתוך הסוגריים הוא נוסחת כפל מקוצר מושלמת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ הגורם המשותף המרבי הכולל מקדם מספרי ומשתנה.", math_expression: "3x(x^{2} - 4x + 4) = 0" },
            { verbal_explanation: "שלב 2: השוואת הגורם החיצוני לאפס מעניקה את השורש הפשוט.", math_expression: "3x = 0 \\Rightarrow x_{1} = 0" },
            { verbal_explanation: "שלב 3: הפיכת הביטוי הפנימי לצורה מקוצרת באמצעות נוסחת דו-איבר בריבוע.", math_expression: "(x - 2)^{2} = 0" },
            { verbal_explanation: "שלב 4: חילוץ הפתרון מתוך הסוגריים המאופסים.", math_expression: "x - 2 = 0 \\Rightarrow x_{2} = 2" },
            { verbal_explanation: "שלב 5: השורש השני מופיע כפתרון כפול, לכן ישנם רק שני שורשים ייחודיים.", math_expression: "0 \\quad , \\quad 2" }
        ],
        final_answer: "0, 2 (פתרון כפול)"
    },

    // שאלה מספר 29
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שלישית ויותר",
        question_text: "מצאו את שורשי המשוואה ממעלה חמישית הבאה: \\( x^{5} - 16x^{3} = 0 \\).&rlm;",
        options: ["0, 4, -4", "0, 16", "0, 2, -2", "4, -4"],
        correctAnswer: 0,
        hint: "אל תיבהלו מהמעלה. הוציאו איקס בשלישית כגורם משותף, ואז פתרו משוואה ריבועית פשוטה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בידוד החזקה הקטנה ביותר המשותפת לשני האיברים.", math_expression: "x^{3}(x^{2} - 16) = 0" },
            { verbal_explanation: "שלב 2: איפוס הגורם המעריכי החיצוני.", math_expression: "x^{3} = 0 \\Rightarrow x_{1} = 0" },
            { verbal_explanation: "שלב 3: איפוס הסוגריים והעברת המספר לאגף השני.", math_expression: "x^{2} - 16 = 0 \\Rightarrow x^{2} = 16" },
            { verbal_explanation: "שלב 4: הוצאת שורש המספקת שני שורשים מנוגדים בסימנם.", math_expression: "x_{2} = 4 \\quad , \\quad x_{3} = -4" },
            { verbal_explanation: "שלב 5: התשובה הישירה להזנה.", math_expression: "0 \\quad , \\quad 4 \\quad , \\quad -4" }
        ],
        final_answer: "0, 4, -4"
    },

    // שאלה מספר 30 (רב שלבית)
    {
        topic: "algebra_471",
        subTopic: "משוואות ממעלה שלישית ויותר",
        question_text: "נתונה המשוואה: \\( x^{3} - 7x^{2} + 10x = 0 \\).&rlm;<br>א. פרקו את המשוואה לגורמים במלואה (כפל של 3 איברים).&rlm;<br>ב. הציגו את פתרונות המשוואה.&rlm;",
        options: ["א. x(x-2)(x-5)=0 | ב. 0, 2, 5", "א. x(x+2)(x+5)=0 | ב. 0, -2, -5", "א. x(x-2)(x-5)=0 | ב. 2, 5", "א. x(x-1)(x-10)=0 | ב. 0, 1, 10"],
        correctAnswer: 0,
        hint: "התחילו בהוצאת x. לאחר מכן, מצאו שני מספרים שמכפלתם 10 וסכומם מינוס 7 לשם פירוק הטרינום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ הגורם המשותף הבסיסי.", math_expression: "x(x^{2} - 7x + 10) = 0" },
            { verbal_explanation: "שלב 2: שימוש בטכניקת טרינום לפירוק הפולינום שבסוגריים.", math_expression: "x(x - 2)(x - 5) = 0" },
            { verbal_explanation: "שלב 3: התקבלה הצורה המפורקת במלואה (תשובה לא').", math_expression: "x(x - 2)(x - 5) = 0" },
            { verbal_explanation: "שלב 4: חילוץ השורש מכל איבר במכפלה. הגורם הראשון.", math_expression: "x_{1} = 0" },
            { verbal_explanation: "שלב 5: חילוץ שאר השורשים מן הסוגריים.", math_expression: "x_{2} = 2 \\quad , \\quad x_{3} = 5" },
            { verbal_explanation: "שלב 6: סט הפתרונות המלא (תשובה לב').", math_expression: "0 \\quad , \\quad 2 \\quad , \\quad 5" }
        ],
        final_answer: "א. x(x-2)(x-5)=0 | ב. 0, 2, 5"
    },
    // ==========================================
    // תת נושא 4: משוואות דו-ריבועיות (10 שאלות)
    // ==========================================

    // שאלה מספר 31
    {
        topic: "alg_equations_471",
        subTopic: "משוואות דו-ריבועיות",
        question_text: "פתרו את המשוואה הדו-ריבועית הבאה: \\( x^{4} - 5x^{2} + 4 = 0 \\).&rlm;",
        options: ["1, -1, 2, -2", "1, 4", "1, 2", "-1, -4"],
        correctAnswer: 0,
        hint: "הציבו משתנה עזר t במקום איקס בריבוע. פתרו את המשוואה הריבועית עבור t, ולאחר מכן הוציאו שורש לכל אחד מהערכים שמצאתם כדי לחזור ל-x.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת משתנה עזר להורדת מעלת המשוואה.", math_expression: "t = x^{2}" },
            { verbal_explanation: "שלב 2: הצבה במשוואה ויצירת משוואה ריבועית רגילה.", math_expression: "t^{2} - 5t + 4 = 0" },
            { verbal_explanation: "שלב 3: פירוק לטרינום או שימוש בנוסחת שורשים למציאת הערכים של המשתנה הזמני.", math_expression: "(t - 1)(t - 4) = 0" },
            { verbal_explanation: "שלב 4: פתרונות משוואת העזר.", math_expression: "t_{1} = 1 \\quad , \\quad t_{2} = 4" },
            { verbal_explanation: "שלב 5: חזרה למשתנה המקורי על ידי הוצאת שורש מכל פתרון. שורש מאחד נותן פלוס ומינוס אחת.", math_expression: "x^{2} = 1 \\Rightarrow x = \\pm 1" },
            { verbal_explanation: "שלב 6: שורש מארבע נותן פלוס ומינוס שתיים. אלו ארבעת פתרונות המשוואה.", math_expression: "x^{2} = 4 \\Rightarrow x = \\pm 2" }
        ],
        final_answer: "1, -1, 2, -2"
    },

    // שאלה מספר 32
    {
        topic: "alg_equations_471",
        subTopic: "משוואות דו-ריבועיות",
        question_text: "מצאו את שורשי המשוואה: \\( x^{4} - 8x^{2} - 9 = 0 \\).&rlm;",
        options: ["3, -3", "3, -3, 1, -1", "9, -1", "אין פתרון"],
        correctAnswer: 0,
        hint: "כאשר אתם מציבים t, תקבלו פתרון אחד שלילי עבור t. זכרו ש-x בריבוע לא יכול להיות שווה למספר שלילי בממשיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת משתנה העזר.", math_expression: "t = x^{2}" },
            { verbal_explanation: "שלב 2: כתיבת המשוואה הריבועית החדשה ופירוקה.", math_expression: "t^{2} - 8t - 9 = 0 \\Rightarrow (t - 9)(t + 1) = 0" },
            { verbal_explanation: "שלב 3: הפתרונות הזמניים.", math_expression: "t_{1} = 9 \\quad , \\quad t_{2} = -1" },
            { verbal_explanation: "שלב 4: חזרה למשתנה המקורי. הפתרון השלילי נפסל מיד כי ריבוע אינו יכול להיות שלילי.", math_expression: "x^{2} = -1 \\Rightarrow \\emptyset" },
            { verbal_explanation: "שלב 5: הוצאת שורש מהפתרון החיובי מניבה שני פתרונות בלבד למשוואה הדו-ריבועית.", math_expression: "x^{2} = 9 \\Rightarrow x = \\pm 3" }
        ],
        final_answer: "3, -3"
    },

    // שאלה מספר 33 (רב שלבית)
    {
        topic: "alg_equations_471",
        subTopic: "משוואות דו-ריבועיות",
        question_text: "נתונה המשוואה \\( x^{4} - 13x^{2} + 36 = 0 \\).&rlm;<br>א. לאחר הצבת משתנה עזר \\( t = x^{2} \\), מהם הפתרונות עבור t?&rlm;<br>ב. מהם הפתרונות הסופיים עבור x?&rlm;",
        options: ["א. t=4, 9 | ב. x=2, -2, 3, -3", "א. t=4, 9 | ב. x=16, 81", "א. t=-4, -9 | ב. אין פתרון", "א. t=2, 3 | ב. x=4, 9"],
        correctAnswer: 0,
        hint: "פתרו את הטרינום (סכום 13-, מכפלה 36). לאחר מכן הוציאו שורש משני הערכים החיוביים שהתקבלו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה הזמנית דרך ההצבה הקבועה.", math_expression: "t^{2} - 13t + 36 = 0" },
            { verbal_explanation: "שלב 2: מציאת שורשי משוואת העזר (תשובה לא').", math_expression: "(t - 4)(t - 9) = 0 \\Rightarrow t_{1} = 4 \\quad , \\quad t_{2} = 9" },
            { verbal_explanation: "שלב 3: חזרה למשתנה המקורי על ידי חילוץ שורש ריבועי מכל אחד מהערכים.", math_expression: "x^{2} = 4 \\Rightarrow x = \\pm 2" },
            { verbal_explanation: "שלב 4: חילוץ השורשים מהערך השני לקבלת ארבעה פתרונות מלאים (תשובה לב').", math_expression: "x^{2} = 9 \\Rightarrow x = \\pm 3" }
        ],
        final_answer: "א. t=4, 9 | ב. x=2, -2, 3, -3"
    },

    // שאלה מספר 34
    {
        topic: "alg_equations_471",
        subTopic: "משוואות דו-ריבועיות",
        question_text: "כמה פתרונות ממשיים יש למשוואה הדו-ריבועית הבאה: \\( x^{4} + 5x^{2} + 6 = 0 \\)?&rlm;",
        options: ["אפס פתרונות", "שני פתרונות", "ארבעה פתרונות", "פתרון אחד"],
        correctAnswer: 0,
        hint: "בדקו אילו ערכים מתקבלים עבור משתנה העזר t. האם אפשר להוציא מהם שורש ממשי?",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת משתנה העזר להמרת הפולינום.", math_expression: "t = x^{2} \\Rightarrow t^{2} + 5t + 6 = 0" },
            { verbal_explanation: "שלב 2: פתרון המשוואה הריבועית הפשוטה.", math_expression: "(t + 2)(t + 3) = 0" },
            { verbal_explanation: "שלב 3: התקבלו שני ערכים שליליים עבור המשתנה הזמני.", math_expression: "t_{1} = -2 \\quad , \\quad t_{2} = -3" },
            { verbal_explanation: "שלב 4: מכיוון שאיקס בריבוע אינו יכול להפיק תוצאה שלילית במספרים ממשיים, הקבוצה ריקה.", math_expression: "x^{2} = -2 \\Rightarrow \\emptyset \\quad , \\quad x^{2} = -3 \\Rightarrow \\emptyset" },
            { verbal_explanation: "שלב 5: המסקנה היא שאין למשוואה פתרונות ממשיים כלל.", math_expression: "\\emptyset" }
        ],
        final_answer: "אפס פתרונות"
    },

    // שאלה מספר 35
    {
        topic: "alg_equations_471",
        subTopic: "משוואות דו-ריבועיות",
        question_text: "פתרו את המשוואה הבאה: \\( 2x^{4} - 18x^{2} = 0 \\).&rlm;",
        options: ["0, 3, -3", "0, 9, -9", "3, -3", "0, 81"],
        correctAnswer: 0,
        hint: "במשוואה כזו אין איבר חופשי. מומלץ פשוט להוציא גורם משותף מחוץ לסוגריים במקום להשתמש במשתנה עזר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הוצאת החזקה הנמוכה והמקדם מחוץ לסוגריים.", math_expression: "2x^{2}(x^{2} - 9) = 0" },
            { verbal_explanation: "שלב 2: איפוס הגורם החיצוני מניב פתרון אחד שהוא אפס (שורש כפול באופיו).", math_expression: "2x^{2} = 0 \\Rightarrow x_{1} = 0" },
            { verbal_explanation: "שלב 3: איפוס הביטוי שבתוך הסוגריים.", math_expression: "x^{2} - 9 = 0 \\Rightarrow x^{2} = 9" },
            { verbal_explanation: "שלב 4: הוצאת שורש נותנת את שני הפתרונות הנוספים.", math_expression: "x_{2} = 3 \\quad , \\quad x_{3} = -3" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "0 \\quad , \\quad 3 \\quad , \\quad -3" }
        ],
        final_answer: "0, 3, -3"
    },

    // שאלה מספר 36 (רב שלבית)
    {
        topic: "alg_equations_471",
        subTopic: "משוואות דו-ריבועיות",
        question_text: "נתונה המשוואה: \\( (x^{2} - 2)^{2} - 7(x^{2} - 2) - 8 = 0 \\).&rlm;<br>א. לאחר הצבת המשתנה \\( t = x^{2} - 2 \\), מהם הערכים של t?&rlm;<br>ב. מהם הפתרונות הסופיים של המשוואה עבור x? (דייקו 2 ספרות אחרי הנקודה).&rlm;",
        options: ["א. 8, -1 | ב. 3.16, -3.16, 1, -1", "א. 8, -1 | ב. 10, 1", "א. 4, 2 | ב. 2, -2", "א. 8, 1 | ב. 3.16, 1"],
        correctAnswer: 0,
        hint: "המשוואה כתובה בתבנית ריבועית, אבל הביטוי החוזר הוא (איקס בריבוע פחות שתיים). הציבו לו t. בסוף, השוו כל פתרון לביטוי זה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת משתנה על הביטוי החוזר.", math_expression: "t = x^{2} - 2" },
            { verbal_explanation: "שלב 2: פתרון המשוואה הריבועית הפשוטה (תשובה לא').", math_expression: "t^{2} - 7t - 8 = 0 \\Rightarrow (t - 8)(t + 1) = 0 \\Rightarrow t_{1} = 8 \\quad , \\quad t_{2} = -1" },
            { verbal_explanation: "שלב 3: חזרה לביטוי המקורי עם הפתרון הראשון.", math_expression: "x^{2} - 2 = 8 \\Rightarrow x^{2} = 10" },
            { verbal_explanation: "שלב 4: הוצאת שורש לעשר נותנת שני פתרונות מקורבים.", math_expression: "x = \\pm \\sqrt{10} \\approx \\pm 3.16" },
            { verbal_explanation: "שלב 5: חזרה לביטוי המקורי עם הפתרון השני.", math_expression: "x^{2} - 2 = -1 \\Rightarrow x^{2} = 1" },
            { verbal_explanation: "שלב 6: הוצאת שורש לאחת משלימה את הפתרונות (תשובה לב').", math_expression: "x = \\pm 1" }
        ],
        final_answer: "א. 8, -1 | ב. 3.16, -3.16, 1, -1"
    },

    // שאלה מספר 37
    {
        topic: "alg_equations_471",
        subTopic: "משוואות דו-ריבועיות",
        question_text: "עבור אילו ערכים של x מתקיים השוויון: \\( 3x^{4} - 15x^{2} + 12 = 0 \\)?&rlm;",
        options: ["1, -1, 2, -2", "1, 4", "1, 2", "0, 1, 2"],
        correctAnswer: 0,
        hint: "חלקו תחילה את כל המשוואה ב-3 כדי לפשט אותה. לאחר מכן הציבו t במקום x².",
        solution_steps: [
            { verbal_explanation: "שלב 1: צמצום המשוואה על ידי חלוקת המקדמים בשלוש.", math_expression: "x^{4} - 5x^{2} + 4 = 0" },
            { verbal_explanation: "שלב 2: הצבת משתנה עזר טבעי ופתרון.", math_expression: "t^{2} - 5t + 4 = 0 \\Rightarrow (t - 4)(t - 1) = 0" },
            { verbal_explanation: "שלב 3: מציאת ערכי הטי.", math_expression: "t_{1} = 4 \\quad , \\quad t_{2} = 1" },
            { verbal_explanation: "שלב 4: השוואת איקס בריבוע לארבע לשם מציאת שורשים.", math_expression: "x^{2} = 4 \\Rightarrow x = \\pm 2" },
            { verbal_explanation: "שלב 5: השוואת איקס בריבוע לאחת.", math_expression: "x^{2} = 1 \\Rightarrow x = \\pm 1" },
            { verbal_explanation: "שלב 6: סט הפתרונות השלם המופיע בחלופות.", math_expression: "\\pm 1 \\quad , \\quad \\pm 2" }
        ],
        final_answer: "1, -1, 2, -2"
    },

    // שאלה מספר 38
    {
        topic: "alg_equations_471",
        subTopic: "משוואות דו-ריבועיות",
        question_text: "נתונה המשוואה \\( x^{4} - mx^{2} + 9 = 0 \\). עבור איזה ערך חיובי של הפרמטר m יש למשוואה זו בדיוק שני פתרונות ממשיים (במקום ארבעה או אפס)?&rlm;",
        options: ["m = 6", "m = 10", "m = 0", "m = -6"],
        correctAnswer: 0,
        hint: "למשוואה הדו-ריבועית יהיו בדיוק שני פתרונות ממשיים אם למשוואת העזר הריבועית עבור t יש פתרון חיובי יחיד. זה קורה כשהדלתא של t היא אפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת משתנה עזר למשוואת פרמטרים.", math_expression: "t^{2} - mt + 9 = 0" },
            { verbal_explanation: "שלב 2: קביעת תנאי לפתרון יחיד עבור המשתנה הזמני.", math_expression: "\\Delta = 0" },
            { verbal_explanation: "שלב 3: הצבת מקדמי משוואת העזר בביטוי של הדלתא.", math_expression: "(-m)^{2} - 4 \\times 1 \\times 9 = 0" },
            { verbal_explanation: "שלב 4: בידוד המשתנה.", math_expression: "m^{2} - 36 = 0 \\Rightarrow m^{2} = 36" },
            { verbal_explanation: "שלב 5: דרישת השאלה לערך החיובי של הפרמטר.", math_expression: "m = 6" }
        ],
        final_answer: "m = 6"
    },

    // שאלה מספר 39
    {
        topic: "alg_equations_471",
        subTopic: "משוואות דו-ריבועיות",
        question_text: "מהו סכום כל השורשים (הפתרונות) הממשיים של המשוואה \\( x^{4} - 10x^{2} + 9 = 0 \\)?&rlm;",
        options: ["0", "10", "4", "-4"],
        correctAnswer: 0,
        hint: "משוואה דו-ריבועית (שאין בה חזקות אי-זוגיות) היא תמיד פונקציה זוגית. על כל פתרון חיובי קיים פתרון שלילי נגדי לו, ולכן סכומם הכולל תמיד אפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתרון משוואת העזר למציאת ערכי המשתנה הזמני.", math_expression: "t^{2} - 10t + 9 = 0 \\Rightarrow t_{1} = 9 \\quad , \\quad t_{2} = 1" },
            { verbal_explanation: "שלב 2: שורשי המשוואה המלאה הם זוגות נגדיים של מספרים.", math_expression: "x = \\pm 3 \\quad , \\quad x = \\pm 1" },
            { verbal_explanation: "שלב 3: סידור פעולת החיבור לכלל השורשים יחד.", math_expression: "S = 3 + (-3) + 1 + (-1)" },
            { verbal_explanation: "שלב 4: כל מספר מבטל את הנגדי שלו והסכום מתאפס באופן טבעי.", math_expression: "S = 0" },
            { verbal_explanation: "שלב 5: בחירת התשובה במערכת.", math_expression: "0" }
        ],
        final_answer: "0"
    },

    // שאלה מספר 40 (רב שלבית)
    {
        topic: "alg_equations_471",
        subTopic: "משוואות דו-ריבועיות",
        question_text: "נתונה המשוואה \\( 4x^{4} - 17x^{2} + 4 = 0 \\).&rlm;<br>א. מצאו את הערכים של המשתנה העזר \\( t = x^{2} \\).&rlm;<br>ב. מצאו את הפתרונות הממשיים עבור x.&rlm;",
        options: ["א. t=4, 0.25 | ב. x=2, -2, 0.5, -0.5", "א. t=4, 1 | ב. x=2, -2, 1, -1", "א. t=-4, -0.25 | ב. אין פתרון", "א. t=16, 1 | ב. x=4, -4, 1, -1"],
        correctAnswer: 0,
        hint: "היעזרו בנוסחת השורשים למציאת ערכי t (או בטרינום מורחב). שורש של שבר (רבע) הוא גם שבר (חצי).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת משתנה במשוואה בעלת מקדם מוביל.", math_expression: "4t^{2} - 17t + 4 = 0" },
            { verbal_explanation: "שלב 2: חישוב דלתא למשוואה.", math_expression: "\\Delta = (-17)^{2} - 4 \\times 4 \\times 4 = 289 - 64 = 225" },
            { verbal_explanation: "שלב 3: הצבה בנוסחת השורשים והוצאת שורש.", math_expression: "t_{1,2} = \\dfrac{17 \\pm 15}{8}" },
            { verbal_explanation: "שלב 4: הפתרון הראשון של העזר (תחילת תשובה לא').", math_expression: "t_{1} = \\dfrac{32}{8} = 4" },
            { verbal_explanation: "שלב 5: הפתרון השני הוא שבר (סיום תשובה לא').", math_expression: "t_{2} = \\dfrac{2}{8} = 0.25" },
            { verbal_explanation: "שלב 6: חזרה למשתנה המקורי והוצאת שורשים גם לשלם וגם לשבר (תשובה לב').", math_expression: "x = \\pm 2 \\quad , \\quad x = \\pm 0.5" }
        ],
        final_answer: "א. t=4, 0.25 | ב. x=2, -2, 0.5, -0.5"
    },

    // ==========================================
    // תת נושא 5: משוואות עם שברים אלגבריים (10 שאלות)
    // ==========================================

    // שאלה מספר 41 (רב שלבית)
    {
        topic: "alg_equations_471",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "נתונה המשוואה: \\( \\dfrac{2}{x-1} + \\dfrac{1}{x+1} = \\dfrac{4}{x^{2}-1} \\).&rlm;<br>א. מהו תחום ההצבה של המשוואה?&rlm;<br>ב. מהו פתרון המשוואה?&rlm;",
        options: ["א. x ≠ 1, x ≠ -1 | ב. אין פתרון", "א. x ≠ 1, x ≠ -1 | ב. x = 1", "א. x ≠ 1 | ב. x = -1", "א. כל x | ב. x = 0"],
        correctAnswer: 0,
        hint: "תחום ההצבה דורש שהמכנים לא יתאפסו. המכנה הימני מתפרק למכפלת שני המכנים השמאליים. לאחר הכפלה במכנה המשותף תגיעו לפתרון, אך חובה לבדוק אם הוא נפסל בתחום ההצבה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: דרישת תחום הצבה האוסרת על איפוס המכנים (תשובה לא').", math_expression: "x - 1 \\neq 0 \\Rightarrow x \\neq 1 \\quad , \\quad x + 1 \\neq 0 \\Rightarrow x \\neq -1" },
            { verbal_explanation: "שלב 2: פירוק המכנה הגדול להפרש ריבועים לצורך איתור המכנה המשותף.", math_expression: "x^{2} - 1 = (x - 1)(x + 1)" },
            { verbal_explanation: "שלב 3: הכפלת כל המשוואה במכנה המשותף (צמצום שברים מקיף).", math_expression: "2(x + 1) + 1(x - 1) = 4" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים וכינוס איברים למציאת האיקס.", math_expression: "2x + 2 + x - 1 = 4 \\Rightarrow 3x + 1 = 4 \\Rightarrow 3x = 3" },
            { verbal_explanation: "שלב 5: התקבל פתרון מתמטי.", math_expression: "x = 1" },
            { verbal_explanation: "שלב 6: הפתרון מתנגש חזיתית עם תחום ההצבה ולכן נפסל. המסקנה היא קבוצה ריקה (תשובה לב').", math_expression: "\\emptyset" }
        ],
        final_answer: "א. x ≠ 1, x ≠ -1 | ב. אין פתרון"
    },

    // שאלה מספר 42
    {
        topic: "alg_equations_471",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "פתרו את המשוואה: \\( \\dfrac{x}{x-2} = \\dfrac{x+4}{x+1} \\). (תחום הצבה: \\( x \\neq 2, -1 \\)).&rlm;",
        options: ["x = 8", "x = -8", "x = -4", "x = 2"],
        correctAnswer: 0,
        hint: "מכיוון שיש כאן שבר שווה לשבר, בצעו כפל בהצלבה, פתחו סוגריים וצמצמו איברים דומים משני האגפים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פעולת כפל בהצלבה לחיסול השברים.", math_expression: "x(x + 1) = (x - 2)(x + 4)" },
            { verbal_explanation: "שלב 2: פתיחת הסוגריים בכל אגף בנפרד.", math_expression: "x^{2} + x = x^{2} + 4x - 2x - 8" },
            { verbal_explanation: "שלב 3: צמצום החזקה הריבועית משני האגפים וכינוס איברים.", math_expression: "x = 2x - 8" },
            { verbal_explanation: "שלב 4: העברת הנעלם ימינה והמספר שמאלה לבידוד.", math_expression: "8 = 2x - x" },
            { verbal_explanation: "שלב 5: התקבל הפתרון למשוואה (אינו פוסל את התחום).", math_expression: "x = 8" }
        ],
        final_answer: "x = 8"
    },

    // שאלה מספר 43
    {
        topic: "alg_equations_471",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "מצאו את שורשי המשוואה: \\( \\dfrac{1}{x} + \\dfrac{1}{x-2} = \\dfrac{3}{4} \\).&rlm;",
        options: ["4, 2/3", "4, -2/3", "2, -4", "-4, 2/3"],
        correctAnswer: 0,
        hint: "המכנה המשותף הוא המכפלה של כל המכנים. הכפילו כל איבר בגורמים החסרים לו במכנה, סדרו למשוואה ריבועית ופתרו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת המכנה המשותף והכפלת המשוואה בו.", math_expression: "4x(x - 2)" },
            { verbal_explanation: "שלב 2: השלמת הגורמים המוכפלים בכל מונה.", math_expression: "4(x - 2) + 4x = 3x(x - 2)" },
            { verbal_explanation: "שלב 3: פתיחת הסוגריים.", math_expression: "4x - 8 + 4x = 3x^{2} - 6x" },
            { verbal_explanation: "שלב 4: ריכוז כל האיברים לאגף אחד ליצירת פולינום ריבועי.", math_expression: "3x^{2} - 14x + 8 = 0" },
            { verbal_explanation: "שלב 5: שימוש בנוסחת השורשים.", math_expression: "x_{1,2} = \\dfrac{14 \\pm \\sqrt{196 - 96}}{6} = \\dfrac{14 \\pm 10}{6}" },
            { verbal_explanation: "שלב 6: חילוץ התשובות מהפלוס ומהמינוס.", math_expression: "x_{1} = \\dfrac{24}{6} = 4 \\quad , \\quad x_{2} = \\dfrac{4}{6} = \\dfrac{2}{3}" }
        ],
        final_answer: "4, 2/3"
    },

    // שאלה מספר 44 (רב שלבית)
    {
        topic: "alg_equations_471",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "נתונה המשוואה: \\( \\dfrac{x^{2}-9}{x-3} = 5 \\).&rlm;<br>א. מהו תחום ההצבה (התנאי)?&rlm;<br>ב. מהו פתרון המשוואה?&rlm;",
        options: ["א. x ≠ 3 | ב. x = 2", "א. כל x | ב. x = 2", "א. x ≠ 3 | ב. x = 8", "א. x ≠ -3 | ב. x = 2"],
        correctAnswer: 0,
        hint: "תחום ההצבה מחייב מכנה שונה מאפס. ניתן לפרק את המונה לפי כפל מקוצר, לצמצם עם המכנה, ואז לפתור בקלילות את המשוואה שנותרה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת תחום הצבה האוסר חלוקה באפס (תשובה לא').", math_expression: "x - 3 \\neq 0 \\Rightarrow x \\neq 3" },
            { verbal_explanation: "שלב 2: פתיחת המונה בעזרת נוסחת הפרש ריבועים להקלה על הדרך.", math_expression: "\\dfrac{(x - 3)(x + 3)}{x - 3} = 5" },
            { verbal_explanation: "שלב 3: צמצום הגורם המשותף מהמונה והמכנה (מותר כי על פי התחום הוא שונה מאפס).", math_expression: "x + 3 = 5" },
            { verbal_explanation: "שלב 4: חילוץ הנעלם (תשובה לב').", math_expression: "x = 2" },
            { verbal_explanation: "שלב 5: התשובה תקפה כיוון שהיא אינה מתנגשת עם תחום ההצבה.", math_expression: "2 \\neq 3" }
        ],
        final_answer: "א. x ≠ 3 | ב. x = 2"
    },

    // שאלה מספר 45
    {
        topic: "alg_equations_471",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "מצאו את x: \\( \\dfrac{5}{x^{2}-4x+3} - \\dfrac{2}{x-3} = 0 \\).&rlm;",
        options: ["x = 3.5", "x = 3", "x = 2.5", "x = 1.5"],
        correctAnswer: 0,
        hint: "המכנה הגדול מתפרק לפי טרינום לאותם גורמים כמו המכנה הקטן. מצאו את המכנה המשותף ותכפילו בו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פירוק המכנה המורכב לטרינום (סכום מינוס ארבע, מכפלה שלוש).", math_expression: "x^{2} - 4x + 3 = (x - 3)(x - 1)" },
            { verbal_explanation: "שלב 2: כתיבת המשוואה עם המכנה המפורק כדי למצוא מכנה משותף.", math_expression: "\\dfrac{5}{(x - 3)(x - 1)} = \\dfrac{2}{x - 3}" },
            { verbal_explanation: "שלב 3: הכפלת האגף הימני בגורם החסר לו ליצירת מכנים זהים (ואז השמטתם).", math_expression: "5 = 2(x - 1)" },
            { verbal_explanation: "שלב 4: פתיחת הסוגריים.", math_expression: "5 = 2x - 2" },
            { verbal_explanation: "שלב 5: העברת מספר לבידוד ופיתרון סופי.", math_expression: "7 = 2x \\Rightarrow x = 3.5" },
            { verbal_explanation: "שלב 6: הרישום במערכת.", math_expression: "x = 3.5" }
        ],
        final_answer: "x = 3.5"
    },

    // שאלה מספר 46
    {
        topic: "alg_equations_471",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "פתרו את המשוואה הבאה: \\( \\dfrac{2x}{x+3} - \\dfrac{x-1}{x-3} = 1 \\).&rlm;",
        options: ["x = 1.5", "x = -1.5", "x = 3", "אין פתרון"],
        correctAnswer: 0,
        hint: "המכנה המשותף הוא מכפלת המכנים. הכפילו כל שבר במכנה החסר לו, ואת ה-1 שבצד ימין הכפילו בשני המכנים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הכפלת כל המשוואה במכנה המשותף שמורכב משני המכנים השונים.", math_expression: "2x(x - 3) - (x - 1)(x + 3) = 1 \\times (x + 3)(x - 3)" },
            { verbal_explanation: "שלב 2: פתיחת סוגריים מסודרת משמאל לימין. בצד ימין מיושמת נוסחת הפרש ריבועים.", math_expression: "2x^{2} - 6x - (x^{2} + 2x - 3) = x^{2} - 9" },
            { verbal_explanation: "שלב 3: הפעלת המינוס על פנים הסוגריים.", math_expression: "2x^{2} - 6x - x^{2} - 2x + 3 = x^{2} - 9" },
            { verbal_explanation: "שלב 4: צמצום איברי האיקס בריבוע משני הצדדים.", math_expression: "-8x + 3 = -9" },
            { verbal_explanation: "שלב 5: חיסור שלוש מאגף ימין.", math_expression: "-8x = -12" },
            { verbal_explanation: "שלב 6: חלוקה לקבלת הערך המדויק.", math_expression: "x = 1.5" }
        ],
        final_answer: "x = 1.5"
    },

    // שאלה מספר 47
    {
        topic: "alg_equations_471",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "נתונה המשוואה: \\( \\dfrac{3}{x^{2}+2x} + \\dfrac{4}{x^{2}-2x} = \\dfrac{5}{x^{2}-4} \\). מהו הפתרון?&rlm;",
        options: ["x = -1", "x = 1", "x = 2", "אין פתרון"],
        correctAnswer: 0,
        hint: "הוציאו גורם משותף במכנים, והשתמשו בהפרש ריבועים למכנה השלישי, כדי למצוא את המכנה המשותף של כל המשוואה: x כפול (x-2) כפול (x+2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: פירוק כל המכנים לגורמים על מנת לראות את המכנה המשותף הקטן ביותר.", math_expression: "\\dfrac{3}{x(x + 2)} + \\dfrac{4}{x(x - 2)} = \\dfrac{5}{(x - 2)(x + 2)}" },
            { verbal_explanation: "שלב 2: הגדרת המכנה המשותף האוניברסלי למשוואה.", math_expression: "x(x + 2)(x - 2)" },
            { verbal_explanation: "שלב 3: הכפלת כל שבר בגורם שחסר לו במכנה הפרטי שלו.", math_expression: "3(x - 2) + 4(x + 2) = 5x" },
            { verbal_explanation: "שלב 4: פתיחת הסוגריים.", math_expression: "3x - 6 + 4x + 8 = 5x" },
            { verbal_explanation: "שלב 5: כינוס איברים והעברת אגפים לריכוז המשתנה איקס.", math_expression: "7x + 2 = 5x \\Rightarrow 2x = -2" },
            { verbal_explanation: "שלב 6: חלוקה נותנת פתרון, ובדיקה מעלה שהוא אינו מאפס אף מכנה ולכן הוא תקין.", math_expression: "x = -1" }
        ],
        final_answer: "x = -1"
    },

    // שאלה מספר 48
    {
        topic: "alg_equations_471",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "בטאו את הפתרון x באמצעות הפרמטר m במשוואה: \\( \\dfrac{x}{x-m} = 2 \\) (בהנחה ש- \\( x \\neq m \\)).&rlm;",
        options: ["x = 2m", "x = m", "x = -2m", "x = 0.5m"],
        correctAnswer: 0,
        hint: "הכפילו את שני האגפים במכנה, ואז רכזו את האיברים עם x לאגף אחד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ביטול המכנה על ידי כפל אלכסוני.", math_expression: "x = 2(x - m)" },
            { verbal_explanation: "שלב 2: פתיחת הסוגריים באגף ימין.", math_expression: "x = 2x - 2m" },
            { verbal_explanation: "שלב 3: העברת איברי איקס לצד אחד ופרמטר לצד הנגדי.", math_expression: "2m = 2x - x" },
            { verbal_explanation: "שלב 4: כינוס מניב את הביטוי התלוי המבוקש.", math_expression: "x = 2m" },
            { verbal_explanation: "שלב 5: אישור התשובה במערכת.", math_expression: "x = 2m" }
        ],
        final_answer: "x = 2m"
    },

    // שאלה מספר 49
    {
        topic: "alg_equations_471",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "פתרו את המשוואה: \\( \\dfrac{x^{2}-x-2}{x+1} = 0 \\).&rlm;",
        options: ["x = 2", "x = -1 , x = 2", "x = -1", "אין פתרון"],
        correctAnswer: 0,
        hint: "שבר שווה לאפס רק כאשר המונה שלו שווה לאפס. עם זאת, חובה תמיד לבדוק שהפתרון אינו מאפס גם את המכנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת תחום ההצבה הדורש מכנה שונה מאפס.", math_expression: "x + 1 \\neq 0 \\Rightarrow x \\neq -1" },
            { verbal_explanation: "שלב 2: איפוס המונה כדי לאפס את השבר כולו.", math_expression: "x^{2} - x - 2 = 0" },
            { verbal_explanation: "שלב 3: פירוק לטרינום או פתרון דרך משוואה ריבועית קלאסית.", math_expression: "(x - 2)(x + 1) = 0" },
            { verbal_explanation: "שלב 4: זיהוי שני הפתרונות האלגבריים האפשריים.", math_expression: "x_{1} = 2 \\quad , \\quad x_{2} = -1" },
            { verbal_explanation: "שלב 5: השוואה לתחום ההצבה פוסלת את אחד הפתרונות. נותר פתרון בודד.", math_expression: "x = 2" }
        ],
        final_answer: "x = 2"
    },

    // שאלה מספר 50 (רב שלבית)
    {
        topic: "alg_equations_471",
        subTopic: "משוואות עם שברים אלגבריים",
        question_text: "נתונה המשוואה: \\( \\dfrac{2}{x-a} - \\dfrac{1}{x+a} = \\dfrac{3a}{x^{2}-a^{2}} \\).&rlm;<br>א. מהו המכנה המשותף?&rlm;<br>ב. בטאו את הפתרון x באמצעות a.&rlm;",
        options: ["א. x²-a² | ב. x = 0", "א. x²-a² | ב. x = a", "א. x-a | ב. x = 2a", "א. x+a | ב. אין פתרון"],
        correctAnswer: 0,
        hint: "המכנה הימני הוא בדיוק מכפלת שני המכנים השמאליים לפי נוסחת כפל מקוצר. בודדו את x ותראו מה קורה לפרמטרים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי של המכנה המשותף כהפרש ריבועים (תשובה לא').", math_expression: "(x - a)(x + a) = x^{2} - a^{2}" },
            { verbal_explanation: "שלב 2: הכפלת איברי המשוואה בהתאמה למכנים המקוריים.", math_expression: "2(x + a) - 1(x - a) = 3a" },
            { verbal_explanation: "שלב 3: פתיחת הסוגריים באגף שמאל תוך שימת לב לכפל סימנים כפולים במינוס.", math_expression: "2x + 2a - x + a = 3a" },
            { verbal_explanation: "שלב 4: כינוס איברים להפרדת המשתנה איקס.", math_expression: "x + 3a = 3a" },
            { verbal_explanation: "שלב 5: חיסור מוביל לאיפוס ערכו של הנעלם (תשובה לב').", math_expression: "x = 0" }
        ],
        final_answer: "א. x²-a² | ב. x = 0"
    },

    // ==========================================
    // תת נושא 6: אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים (10 שאלות)
    // ==========================================

    // שאלה מספר 51
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question_text: "פתרו את אי-השוויון הליניארי הבא: \\( 2x - 5 < 4x + 1 \\).&rlm;",
        options: ["x > -3", "x < -3", "x > 3", "x < 3"],
        correctAnswer: 0,
        hint: "העבירו את כל איברי ה-x לאגף אחד והמספרים לאגף השני. זכרו: כאשר מחלקים או מכפילים במספר שלילי, כיוון אי-השוויון מתהפך.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת איברים כדי לרכז את המשתנה.", math_expression: "-5 - 1 < 4x - 2x" },
            { verbal_explanation: "שלב 2: כינוס איברים.", math_expression: "-6 < 2x" },
            { verbal_explanation: "שלב 3: חלוקת המשוואה בשתיים למציאת טווח האיקס.", math_expression: "-3 < x" },
            { verbal_explanation: "שלב 4: הפיכת צדדי המשוואה כדי שהנעלם יופיע ראשון (הסימן מתהפך בהתאמה).", math_expression: "x > -3" },
            { verbal_explanation: "שלב 5: בחירת החלופה התואמת.", math_expression: "x > -3" }
        ],
        final_answer: "x > -3"
    },

    // שאלה מספר 52
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question_text: "מצאו את התחום המקיים את אי-השוויון הריבועי: \\( x^{2} - 5x + 6 > 0 \\).&rlm;",
        options: ["x < 2 או x > 3", "2 < x < 3", "x > 2", "x < 3"],
        correctAnswer: 0,
        hint: "זוהי פרבולה ה'מחייכת' כלפי מעלה. מצאו את נקודות החיתוך (שורשים), והתחום המבוקש הוא ה'קרניים' שנמצאות מעל ציר ה-x.",
        solution_steps: [
            { verbal_explanation: "שלב 1: איפוס המשוואה למציאת שורשי הפרבולה המגדירים את גבולות התחום.", math_expression: "x^{2} - 5x + 6 = 0 \\Rightarrow (x - 2)(x - 3) = 0" },
            { verbal_explanation: "שלב 2: חילוץ השורשים של המשוואה.", math_expression: "x_{1} = 2 \\quad , \\quad x_{2} = 3" },
            { verbal_explanation: "שלב 3: הפונקציה מוגדרת כפרבולה מחייכת, ולכן היא חיובית בקצותיה החיצוניים לשורשים.", math_expression: "a = 1 > 0" },
            { verbal_explanation: "שלב 4: כתיבת תחומי החיוביות כאיחוד של שני קטעים נפרדים.", math_expression: "x < 2 \\quad \\cup \\quad x > 3" },
            { verbal_explanation: "שלב 5: קבלת התשובה למערכת.", math_expression: "x < 2 \\cup x > 3" }
        ],
        final_answer: "x < 2 או x > 3"
    },

    // שאלה מספר 53
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question_text: "עבור אילו ערכי x מתקיים אי-השוויון: \\( -x^{2} + 4x - 4 < 0 \\)?&rlm;",
        options: ["כל x ממשי פרט ל-2", "רק x = 2", "x > 2", "אין פתרון"],
        correctAnswer: 0,
        hint: "הוציאו מינוס כגורם משותף ותזהו נוסחת כפל מקוצר. זוהי פרבולה 'בוכה' שמשיקה לציר ה-x בנקודה אחת. מתי היא מתחת לאפס?",
        solution_steps: [
            { verbal_explanation: "שלב 1: הכפלת אי השוויון במינוס אחת (הופך את סימן אי השוויון).", math_expression: "x^{2} - 4x + 4 > 0" },
            { verbal_explanation: "שלב 2: פירוק בעזרת נוסחת כפל מקוצר.", math_expression: "(x - 2)^{2} > 0" },
            { verbal_explanation: "שלב 3: ביטוי בריבוע תמיד גדול או שווה לאפס. כדי שיהיה ממש גדול מאפס, עליו פשוט לא להיות אפס.", math_expression: "(x - 2)^{2} \\neq 0" },
            { verbal_explanation: "שלב 4: מציאת הערך המאפס ומניעתו.", math_expression: "x \\neq 2" },
            { verbal_explanation: "שלב 5: בחירת התשובה שמגדירה את הפתרון ככל מספר פרט לאחד הבעייתי.", math_expression: "x \\neq 2" }
        ],
        final_answer: "כל x ממשי פרט ל-2"
    },

    // שאלה מספר 54 (רב שלבית)
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question_text: "נתון אי-השוויון: \\( x^{2} - 9 \\leq 0 \\).&rlm;<br>א. מהם שורשי המשוואה המאפסים את הביטוי?&rlm;<br>ב. מהו התחום המקיים את אי-השוויון?&rlm;",
        options: ["א. 3, -3 | ב. -3 ≤ x ≤ 3", "א. 3, -3 | ב. x < -3 או x > 3", "א. 9, -9 | ב. -9 ≤ x ≤ 9", "א. 3 | ב. x ≤ 3"],
        correctAnswer: 0,
        hint: "השורשים הם הנקודות שבהן הפרבולה חותכת את הציר. מאחר שהיא מחייכת, האזור שבו היא קטנה או שווה לאפס נמצא בין שני השורשים (כולל).",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת השורשים על ידי איפוס והוצאת שורש ריבועי (תשובה לא').", math_expression: "x^{2} - 9 = 0 \\Rightarrow x^{2} = 9 \\Rightarrow x = \\pm 3" },
            { verbal_explanation: "שלב 2: ניתוח מצב הפרבולה והשטח המבוקש. זו פרבולה חיובית (מחייכת) ומחפשים את התחום השלילי שלה.", math_expression: "a = 1 > 0" },
            { verbal_explanation: "שלב 3: התחום הנדרש הוא הקטע הכלוא בין נקודות החיתוך. סימן השוויון נשמר.", math_expression: "-3 \\leq x \\leq 3" },
            { verbal_explanation: "שלב 4: התאמת צמד התשובות לחלופה מתאימה.", math_expression: "1" }
        ],
        final_answer: "א. 3, -3 | ב. -3 ≤ x ≤ 3"
    },

    // שאלה מספר 55
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question_text: "פתרו את אי-שוויון השברים הבא: \\( \\dfrac{x-2}{x+3} > 0 \\).&rlm;",
        options: ["x < -3 או x > 2", "-3 < x < 2", "x > 2", "x < -3"],
        correctAnswer: 0,
        hint: "הסימן חיובי כאשר גם המונה וגם המכנה באותו סימן (או שניהם חיוביים או שניהם שליליים). ניתן למצוא את המאפסים ולערוך טבלת סימנים (נחש).",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת מאפסי המונה והמכנה כדי לקבוע נקודות קריטיות בציר.", math_expression: "x_{1} = 2 \\quad , \\quad x_{2} = -3" },
            { verbal_explanation: "שלב 2: כתיבת ביטוי ריבועי שקול המבוסס על המאפסים כדי לחקור תחומי חיוביות.", math_expression: "(x - 2)(x + 3) > 0" },
            { verbal_explanation: "שלב 3: פתרון אי השוויון הריבועי השקול מציג פרבולה מחייכת המבקשת תחום חיובי.", math_expression: "x < -3 \\quad \\cup \\quad x > 2" },
            { verbal_explanation: "שלב 4: בחירת התשובה הנכונה מבין החלופות.", math_expression: "x < -3 \\cup x > 2" }
        ],
        final_answer: "x < -3 או x > 2"
    },

    // שאלה מספר 56
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question_text: "מהו התחום המקיים את אי-השוויון: \\( \\dfrac{2x-4}{x-1} \\leq 0 \\)? (שימו לב לתחום ההצבה)&rlm;",
        options: ["1 < x ≤ 2", "1 ≤ x ≤ 2", "x < 1 או x ≥ 2", "-2 ≤ x < 1"],
        correctAnswer: 0,
        hint: "המאפס של המונה (2) כלול בתחום, אך המאפס של המכנה (1) אינו יכול להיות כלול בגלל חלוקה באפס. פתרו על ידי מציאת המאפסים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: איתור מאפס המונה אשר יכול להיכלל בתשובה בגלל סימן אי השוויון הרחב.", math_expression: "2x - 4 = 0 \\Rightarrow x = 2" },
            { verbal_explanation: "שלב 2: איתור מאפס המכנה, אשר מהווה גבול שאסור לכלול בפתרון (תחום הצבה).", math_expression: "x - 1 = 0 \\Rightarrow x = 1" },
            { verbal_explanation: "שלב 3: יצירת פרבולה שקולה (מחייכת) ובדיקת תחומי השליליות (בין השורשים).", math_expression: "(2x - 4)(x - 1) \\leq 0" },
            { verbal_explanation: "שלב 4: הרכבת התחום הכלוא תוך הקפדה על אי-הכללת המכנה והכללת המונה.", math_expression: "1 < x \\leq 2" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "1 < x \\leq 2" }
        ],
        final_answer: "1 < x ≤ 2"
    },

    // שאלה מספר 57
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question_text: "עבור אילו ערכי x מתקיים \\( x^{2} + 2x + 5 > 0 \\)?&rlm;",
        options: ["כל x ממשי", "אין פתרון", "x > -1", "x > 5"],
        correctAnswer: 0,
        hint: "בדקו את הדלתא של המשוואה הריבועית. אם היא קטנה מאפס והפרבולה 'מחייכת', המשמעות היא שהיא 'מרחפת' מעל ציר ה-x ולעולם אינה שלילית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הדיסקרימיננטה (דלתא) לבדיקת חיתוכים אפשריים עם הציר האופקי.", math_expression: "\\Delta = 2^{2} - 4 \\times 1 \\times 5 = 4 - 20 = -16" },
            { verbal_explanation: "שלב 2: הדלתא שלילית ולכן אין שורשים, משמע הגרף לא נוגע בציר לעולם.", math_expression: "\\Delta < 0" },
            { verbal_explanation: "שלב 3: בחינת המקדם המוביל מעידה על פרבולה מחייכת.", math_expression: "a = 1 > 0" },
            { verbal_explanation: "שלב 4: פרבולה כזו תמיד נמצאת מעל ציר איקס, כלומר תמיד חיובית.", math_expression: "x \\in \\mathbb{R}" },
            { verbal_explanation: "שלב 5: המסקנה היא שכל מספר חוקי כפתרון.", math_expression: "All" }
        ],
        final_answer: "כל x ממשי"
    },

    // שאלה מספר 58
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question_text: "פתרו את אי-השוויון: \\( x(x-4) \\geq 5 \\).&rlm;",
        options: ["x ≥ 5 או x ≤ -1", "-1 ≤ x ≤ 5", "x ≥ 5", "x ≥ 4"],
        correctAnswer: 0,
        hint: "פתחו סוגריים, העבירו את ה-5 לאגף השמאלי כך שייווצר אי-שוויון ריבועי הגדול או שווה לאפס, ופתרו אותו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתיחת סוגריים והעברת איברים ליצירת פולינום סטנדרטי למול האפס.", math_expression: "x^{2} - 4x - 5 \\geq 0" },
            { verbal_explanation: "שלב 2: פירוק הפולינום בטרינום או נוסחה למציאת מאפסים.", math_expression: "(x - 5)(x + 1) \\geq 0" },
            { verbal_explanation: "שלב 3: חילוץ שורשי המשוואה השקולה.", math_expression: "x_{1} = 5 \\quad , \\quad x_{2} = -1" },
            { verbal_explanation: "שלב 4: מדובר בפרבולה מחייכת המחפשת שטחים חיובים (כולל אפס). שטחים אלו נמצאים מעבר לשורשים.", math_expression: "x \\geq 5 \\quad \\cup \\quad x \\leq -1" },
            { verbal_explanation: "שלב 5: התאמה לאופציות הקיימות.", math_expression: "x \\geq 5 \\cup x \\leq -1" }
        ],
        final_answer: "x ≥ 5 או x ≤ -1"
    },

    // שאלה מספר 59
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question_text: "מצאו את התחום המקיים את אי-השוויון: \\( \\dfrac{1}{x} < 1 \\).&rlm;",
        options: ["x < 0 או x > 1", "0 < x < 1", "x < 1", "x > 1"],
        correctAnswer: 0,
        hint: "אסור להכפיל סתם ב-x כי איננו יודעים את סימנו. העבירו את ה-1 שמאלה, עשו מכנה משותף, ופתרו כאי-שוויון שברים רגיל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת האחת לאגף שמאל כדי לאפס את אגף ימין כנדרש בפתרון אי שוויונים.", math_expression: "\\dfrac{1}{x} - 1 < 0" },
            { verbal_explanation: "שלב 2: ביצוע מכנה משותף.", math_expression: "\\dfrac{1 - x}{x} < 0" },
            { verbal_explanation: "שלב 3: מציאת המאפסים למונה ולמכנה.", math_expression: "x_{1} = 1 \\quad , \\quad x_{2} = 0" },
            { verbal_explanation: "שלב 4: יצירת פרבולה שקולה הפוכה, או שימוש בטבלת אזורים. מכיוון שיש מינוס במונה, זו פרבולה בוכה. מחפשים תחום שלילי, לכן מחוץ לשורשים.", math_expression: "(1 - x)x < 0 \\Rightarrow -x^{2} + x < 0" },
            { verbal_explanation: "שלב 5: התחומים הדרושים הם בקצוות הגרף.", math_expression: "x < 0 \\quad \\cup \\quad x > 1" }
        ],
        final_answer: "x < 0 או x > 1"
    },

    // שאלה מספר 60
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים ממעלה ראשונה, שנייה ושברים אלגבריים",
        question_text: "פתרו את אי-השוויון השברי: \\( \\dfrac{x^{2}-4}{x} > 0 \\).&rlm;",
        options: ["-2 < x < 0 או x > 2", "x > 2", "x < -2 או x > 2", "x > 0"],
        correctAnswer: 0,
        hint: "המונה מתאפס ב-2 ומינוס 2. המכנה מתאפס ב-0. סמנו את שלושת הנקודות על ציר, ובדקו כל אזור (שיטת 'נחש').",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת מאפסי המונה (הפרש ריבועים).", math_expression: "x^{2} - 4 = 0 \\Rightarrow x = \\pm 2" },
            { verbal_explanation: "שלב 2: מציאת מאפס המכנה.", math_expression: "x = 0" },
            { verbal_explanation: "שלב 3: כתיבת אי שוויון פולינומי שקול לשם בדיקת תחומי חיוביות בשיטת נחש (פולינום ממעלה שלישית חיובי).", math_expression: "x(x - 2)(x + 2) > 0" },
            { verbal_explanation: "שלב 4: בדיקת אזור בין מינוס שתיים לאפס (למשל מינוס אחת נותן חיובי).", math_expression: "(-1)(-3)(1) = 3 > 0" },
            { verbal_explanation: "שלב 5: בדיקת אזור מעל שתיים (למשל שלוש נותן חיובי).", math_expression: "(3)(1)(5) = 15 > 0" },
            { verbal_explanation: "שלב 6: הרכבת התחומים שנמצאו כחיוביים.", math_expression: "-2 < x < 0 \\quad \\cup \\quad x > 2" }
        ],
        final_answer: "-2 < x < 0 או x > 2"
    },

    // ==========================================
    // תת נושא 7: אי שוויונים כפולים ואי שוויונים של מנה (10 שאלות)
    // ==========================================

    // שאלה מספר 61
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question_text: "פתרו את אי-השוויון הכפול הבא (מערכת 'וגם'): \\( 2 < 3x - 1 < 11 \\).&rlm;",
        options: ["1 < x < 4", "1 < x < 3", "x > 1", "3 < x < 12"],
        correctAnswer: 0,
        hint: "ניתן לבצע את אותה פעולה (כמו להוסיף 1 ולחלק ב-3) על כל שלושת החלקים בו-זמנית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הוספת אחת לכל אגפי אי השוויון במקביל כדי לבטל את המספר במרכז.", math_expression: "2 + 1 < 3x < 11 + 1" },
            { verbal_explanation: "שלב 2: ביצוע החיבור.", math_expression: "3 < 3x < 12" },
            { verbal_explanation: "שלב 3: חלוקת כל האגפים בשלוש כדי לבודד את המשתנה איקס לחלוטין.", math_expression: "1 < x < 4" },
            { verbal_explanation: "שלב 4: בחירת התשובה במערכת.", math_expression: "1 < x < 4" }
        ],
        final_answer: "1 < x < 4"
    },

    // שאלה מספר 62
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question_text: "מצאו את התחום המקיים את: \\( -5 \\leq 2x + 3 < 7 \\).&rlm;",
        options: ["-4 ≤ x < 2", "-4 < x < 2", "-1 ≤ x < 5", "x ≥ -4"],
        correctAnswer: 0,
        hint: "חסרו 3 מכל האגפים, ואז חלקו את כולם ב-2. שימו לב להקפיד על סוג אי-השוויון (גדול-שווה מול רק גדול).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הפחתת שלוש מכל חלקי המשוואה הכפולה.", math_expression: "-5 - 3 \\leq 2x < 7 - 3" },
            { verbal_explanation: "שלב 2: סידור הפעולה וכינוס מספרי.", math_expression: "-8 \\leq 2x < 4" },
            { verbal_explanation: "שלב 3: חלוקה בשתיים לכל רוחב הביטוי כדי לגלות את טווח האיקס.", math_expression: "-4 \\leq x < 2" },
            { verbal_explanation: "שלב 4: אישור הפתרון המדויק הכולל את הסימנים המתאימים.", math_expression: "-4 \\leq x < 2" }
        ],
        final_answer: "-4 ≤ x < 2"
    },

    // שאלה מספר 63 (רב שלבית)
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question_text: "נתונה מערכת אי-שוויונים (קשר 'וגם'): \\( x^{2} - 4 < 5 \\) וגם \\( x > 0 \\).&rlm;<br>א. פתרו את אי-השוויון הראשון בנפרד.&rlm;<br>ב. מצאו את החיתוך המשותף המהווה את הפתרון הכללי למערכת.&rlm;",
        options: ["א. -3 < x < 3 | ב. 0 < x < 3", "א. x < 3 | ב. 0 < x < 3", "א. -3 < x < 3 | ב. x > 0", "א. x < 9 | ב. 0 < x < 9"],
        correctAnswer: 0,
        hint: "פתרו את האי-שוויון הריבועי (תקבלו תחום). ציירו ציר מספרים וחפשו את האזור בו גם התחום הראשון וגם הדרישה של x>0 מתקיימים יחד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת מספר אגף באי השוויון הריבועי.", math_expression: "x^{2} < 9" },
            { verbal_explanation: "שלב 2: פתרון של אי שוויון ריבועי כזה דורש תחום כלוא בין השורשים (תשובה לא').", math_expression: "-3 < x < 3" },
            { verbal_explanation: "שלב 3: כתיבת תנאי המערכת הנוסף.", math_expression: "x > 0" },
            { verbal_explanation: "שלב 4: ביצוע חיתוך וגם בין שני התחומים. המספר אפס צר יותר ולכן חותך את הגבול התחתון (תשובה לב').", math_expression: "0 < x < 3" },
            { verbal_explanation: "שלב 5: התאמה לאופציה המסכמת.", math_expression: "1" }
        ],
        final_answer: "א. -3 < x < 3 | ב. 0 < x < 3"
    },

    // שאלה מספר 64 (רב שלבית)
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question_text: "פתרו את אי-השוויון הריבועי הכפול: \\( 0 \\leq x^{2} - 5x + 6 \\leq 2 \\).&rlm;<br>א. פתרו את החלק הימני: \\( x^{2} - 5x + 6 \\leq 2 \\).&rlm;<br>ב. שקללו את שני החלקים (הימני והשמאלי) לתשובה סופית.&rlm;",
        options: ["א. 1 ≤ x ≤ 4 | ב. 1 ≤ x ≤ 2 או 3 ≤ x ≤ 4", "א. 1 ≤ x ≤ 4 | ב. 2 ≤ x ≤ 3", "א. x ≤ 4 | ב. 1 ≤ x ≤ 3", "א. 1 < x < 4 | ב. 2 < x < 3"],
        correctAnswer: 0,
        hint: "פצלו לשתי בעיות נפרדות: (1) הפרבולה קטנה-שווה ל-2. (2) הפרבולה גדולה-שווה ל-0. פתרו כל אחת ומצאו את החיתוך המשותף (וגם).",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת שתיים באגף ימין ויצירת משוואה מאופסת.", math_expression: "x^{2} - 5x + 4 \\leq 0" },
            { verbal_explanation: "שלב 2: פירוק הטרינום מציג אזור כלוא בין השורשים (תשובה לא').", math_expression: "(x - 1)(x - 4) \\leq 0 \\Rightarrow 1 \\leq x \\leq 4" },
            { verbal_explanation: "שלב 3: פתרון האגף השמאלי (פרבולה גדולה או שווה אפס).", math_expression: "x^{2} - 5x + 6 \\geq 0 \\Rightarrow x \\leq 2 \\quad \\cup \\quad x \\geq 3" },
            { verbal_explanation: "שלב 4: חיתוך התחומים (וגם) בין החלק הימני לשמאלי. התחום הכלוא מחולק לשניים על ידי הדרישה החיצונית (תשובה לב').", math_expression: "1 \\leq x \\leq 2 \\quad \\cup \\quad 3 \\leq x \\leq 4" }
        ],
        final_answer: "א. 1 ≤ x ≤ 4 | ב. 1 ≤ x ≤ 2 או 3 ≤ x ≤ 4"
    },

    // שאלה מספר 65
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question_text: "פתרו את אי-שוויון המנה: \\( \\dfrac{2x+1}{x-3} \\leq 1 \\).&rlm;",
        options: ["-4 ≤ x < 3", "x ≤ -4", "x < 3", "-4 < x < 3"],
        correctAnswer: 0,
        hint: "העבירו את ה-1 שמאלה במינוס, עשו מכנה משותף עם (x-3). תתקבל מנה חדשה שאפשר לפתור בשיטת ה'נחש' או הכפלה בריבוע המכנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת הספרה אחת לאגף משמאל וביצוע מכנה משותף.", math_expression: "\\dfrac{2x + 1 - (x - 3)}{x - 3} \\leq 0" },
            { verbal_explanation: "שלב 2: פתיחת סוגריים תוך הקפדה על מינוס כפול מינוס שהופך לפלוס.", math_expression: "\\dfrac{2x + 1 - x + 3}{x - 3} \\leq 0" },
            { verbal_explanation: "שלב 3: כינוס איברים במונה לקבלת השבר המפושט.", math_expression: "\\dfrac{x + 4}{x - 3} \\leq 0" },
            { verbal_explanation: "שלב 4: איתור מאפס מונה (מינוס ארבע) ומאפס מכנה שאסור להכללה (שלוש).", math_expression: "x_{1} = -4 \\quad , \\quad x_{2} = 3" },
            { verbal_explanation: "שלב 5: השבר שלילי כאשר איבריו בעלי סימן שונה, כלומר האזור הכלוא ביניהם.", math_expression: "-4 \\leq x < 3" },
            { verbal_explanation: "שלב 6: בחירת האופציה השלמה.", math_expression: "-4 \\leq x < 3" }
        ],
        final_answer: "-4 ≤ x < 3"
    },

    // שאלה מספר 66
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question_text: "מהו התחום המקיים את: \\( \\dfrac{x}{x+2} \\geq 2 \\)?&rlm;",
        options: ["-4 ≤ x < -2", "x ≥ -4", "x < -2", "-4 < x ≤ -2"],
        correctAnswer: 0,
        hint: "העבירו את 2 אגף, בצעו מכנה משותף, כנסו איברים, וחקרו את הפונקציה המתקבלת. אל תשכחו את תחום ההצבה למכנה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת המספר וביצוע מכנה משותף מאחד.", math_expression: "\\dfrac{x - 2(x + 2)}{x + 2} \\geq 0" },
            { verbal_explanation: "שלב 2: פתיחת הסוגריים במונה.", math_expression: "\\dfrac{x - 2x - 4}{x + 2} \\geq 0" },
            { verbal_explanation: "שלב 3: כינוס המונה.", math_expression: "\\dfrac{-x - 4}{x + 2} \\geq 0" },
            { verbal_explanation: "שלב 4: על מנת להיפטר מהמינוס המפריע במונה, נכפול במינוס אחת (והסימן הכללי יתהפך).", math_expression: "\\dfrac{x + 4}{x + 2} \\leq 0" },
            { verbal_explanation: "שלב 5: התחום השלילי של ביטוי זה הוא הטווח הכלוא בין המאפסים.", math_expression: "-4 \\leq x < -2" },
            { verbal_explanation: "שלב 6: אישור התשובה.", math_expression: "-4 \\leq x < -2" }
        ],
        final_answer: "-4 ≤ x < -2"
    },

    // שאלה מספר 67
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question_text: "פתרו את מערכת אי-השוויונים הכפולה של המנה: \\( 1 < \\dfrac{x+1}{x-1} < 3 \\). (יש לפתור כשתי מערכות 'וגם').&rlm;",
        options: ["x > 2", "1 < x < 2", "x > 1", "x < 1 או x > 2"],
        correctAnswer: 0,
        hint: "פצלו את הבעיה. חצי ראשון: מנה גדולה מ-1 (יוצא x>1). חצי שני: מנה קטנה מ-3 (יוצא x<1 או x>2). עשו חיתוך לשני התחומים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פיצול והכנת התנאי הראשון והעברת האחת באגפים.", math_expression: "\\dfrac{x + 1}{x - 1} - 1 > 0" },
            { verbal_explanation: "שלב 2: מכנה משותף לחלק הראשון מגלה שהמונה הוא תמיד שתיים חיובי, ולכן על המכנה להיות חיובי.", math_expression: "\\dfrac{2}{x - 1} > 0 \\Rightarrow x > 1" },
            { verbal_explanation: "שלב 3: הכנת התנאי השני במערכת הוגם.", math_expression: "\\dfrac{x + 1}{x - 1} - 3 < 0" },
            { verbal_explanation: "שלב 4: ביצוע מכנה משותף לחלק השני.", math_expression: "\\dfrac{x + 1 - 3x + 3}{x - 1} < 0 \\Rightarrow \\dfrac{-2x + 4}{x - 1} < 0" },
            { verbal_explanation: "שלב 5: הכפלה במינוס (היפוך סימן) מעניקה מנה שהשורשים שלה הם שתיים ואחת. דורש אזור חיובי.", math_expression: "\\dfrac{2x - 4}{x - 1} > 0 \\Rightarrow x > 2 \\quad \\cup \\quad x < 1" },
            { verbal_explanation: "שלב 6: חיתוך הפתרון מהשלב השני והשלב החמישי יחד במערכת וגם מותיר רק חלק אחד.", math_expression: "x > 2" }
        ],
        final_answer: "x > 2"
    },

    // שאלה מספר 68
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question_text: "עבור אילו ערכי x מתקיים: \\( -1 \\leq \\dfrac{2}{x} \\leq 1 \\)?&rlm;",
        options: ["x ≥ 2 או x ≤ -2", "-2 ≤ x ≤ 2 וגם x ≠ 0", "x ≥ 2", "x ≤ -2"],
        correctAnswer: 0,
        hint: "הדרך הקלה ביותר לחשוב על זה: הערך המוחלט של המנה צריך להיות קטן שווה ל-1, מה שאומר שהמכנה חייב להיות בערכו המוחלט גדול שווה למונה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: תרגום המשוואה הכפולה למערכת של ערך מוחלט.", math_expression: "|\\dfrac{2}{x}| \\leq 1" },
            { verbal_explanation: "שלב 2: חלוקת שתיים בערך כלשהו תניב מספר הקטן מאחת, רק אם המחלק גדול יותר מהשתיים המקורי.", math_expression: "|x| \\geq 2" },
            { verbal_explanation: "שלב 3: פיצול מערכת הערך המוחלט לשני מסלולים נפרדים המשקפים את האופציה החיובית והשלילית.", math_expression: "x \\geq 2 \\quad , \\quad x \\leq -2" },
            { verbal_explanation: "שלב 4: המסקנה היא טווח הקצוות המרוחקים.", math_expression: "x \\geq 2 \\quad \\cup \\quad x \\leq -2" },
            { verbal_explanation: "שלב 5: בחירת התשובה במערכת המייצגת איחוד זה.", math_expression: "x \\geq 2 \\cup x \\leq -2" }
        ],
        final_answer: "x ≥ 2 או x ≤ -2"
    },

    // שאלה מספר 69
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question_text: "פתרו את אי-השוויון: \\( \\dfrac{x^{2}-3x}{x+1} < 0 \\).&rlm;",
        options: ["x < -1 או 0 < x < 3", "-1 < x < 0 או x > 3", "0 < x < 3", "x < -1"],
        correctAnswer: 0,
        hint: "המאפסים של המונה הם 0 ו-3. המאפס של המכנה הוא 1-. סמנו את שלושת הנקודות על ציר המספרים ובדקו סימנים בכל אחד מארבעת התחומים שנוצרו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הוצאת גורם משותף במונה כדי למצוא את מאפסיו המיידיים.", math_expression: "x(x - 3) = 0 \\Rightarrow x_{1} = 0 \\quad , \\quad x_{2} = 3" },
            { verbal_explanation: "שלב 2: מציאת הגבול המאפס את המכנה (תחום הצבה).", math_expression: "x + 1 = 0 \\Rightarrow x_{3} = -1" },
            { verbal_explanation: "שלב 3: יצירת משוואת פולינום שקולה בעלת אותם הסימנים על מנת לחקור בשיטת נחש.", math_expression: "x(x - 3)(x + 1) < 0" },
            { verbal_explanation: "שלב 4: נחש של פולינום ממעלה שלישית עם מקדם חיובי מתחיל מימין למעלה ומזגזג. השטח השלילי הוא הקצה השמאלי, והאזור המרכזי שבין השורש הראשון לשני.", math_expression: "x < -1 \\quad \\cup \\quad 0 < x < 3" },
            { verbal_explanation: "שלב 5: התאמה לאופציות הקיימות.", math_expression: "x < -1 \\cup 0 < x < 3" }
        ],
        final_answer: "x < -1 או 0 < x < 3"
    },

    // שאלה מספר 70
    {
        topic: "alg_equations_471",
        subTopic: "אי שוויונים כפולים ואי שוויונים של מנה",
        question_text: "מצאו את התחום עבורו: \\( \\dfrac{x}{x-5} > \\dfrac{x+1}{x-1} \\).&rlm;",
        options: ["-5/3 < x < 1 או x > 5", "1 < x < 5", "x < 1 או x > 5", "1 < x < 2.5"],
        correctAnswer: 0,
        hint: "העבירו את השבר הימני שמאלה, בצעו מכנה משותף של (x-5)(x-1), כנסו איברים במונה ופתרו בשיטת הנחש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת אגף לשם איפוס וביצוע מכנה משותף.", math_expression: "\\dfrac{x(x - 1) - (x + 1)(x - 5)}{(x - 5)(x - 1)} > 0" },
            { verbal_explanation: "שלב 2: פתיחת סוגריים במונה.", math_expression: "x^{2} - x - (x^{2} - 4x - 5)" },
            { verbal_explanation: "שלב 3: כינוס המונה (איברי הריבוע נופלים).", math_expression: "3x + 5" },
            { verbal_explanation: "שלב 4: המאפסים הם אחת, חמש, ומינוס חמש חלקי שלוש. בניית פולינום שקול.", math_expression: "(3x + 5)(x - 1)(x - 5) > 0" },
            { verbal_explanation: "שלב 5: התחומים החיוביים של הפולינום.", math_expression: "-1.66 < x < 1 \\quad \\cup \\quad x > 5" }
        ],
        final_answer: "-5/3 < x < 1 או x > 5"
    }
];
// ========================================================================
// שכבת גיל: כיתה ח' | נושא: חוק הפילוג ופירוק לגורמים
// 4 תתי נושאים | 48 שאלות סה"כ
// פתרונות מפורטים צעד אחר צעד (להאכיל בכפית).
// כתיבה נקייה ובטוחה: × לכפל, : לחילוק, ² לחזקה. ללא LaTeX!
// כולל איורי SVG גיאומטריים להמחשת כפל דו-איברים.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: חוק הפילוג המורחב (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "distribution_factoring",
        subTopic: "חוק הפילוג המורחב",
        question_text: "פתחו את הסוגריים וכנסו איברים דומים בביטוי הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 2)(x + 3) = ?</div>",
        options: ["x² + 5x + 6", "x² + 6", "2x + 5", "x² + 6x + 5"],
        correctAnswer: 0,
        hint: "הכפילו כל איבר בסוגריים הראשונים בכל איבר בסוגריים השניים (שיטת 'ירח' או 4 חיצים).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את x מהסוגריים הראשונים בשני האיברים שבסוגריים השניים.&rlm;", math_expression: "x × x = x²  ,  x × 3 = 3x" },
            { verbal_explanation: "שלב ב': נכפול את 2 מהסוגריים הראשונים בשני האיברים שבסוגריים השניים.&rlm;", math_expression: "2 × x = 2x  ,  2 × 3 = 6" },
            { verbal_explanation: "שלב ג': נרשום את כל התוצאות יחד כסכום.&rlm;", math_expression: "x² + 3x + 2x + 6" },
            { verbal_explanation: "שלב ד': נכנס איברים דומים (3x ועוד 2x).&rlm;", math_expression: "x² + 5x + 6" }
        ],
        final_answer: "x² + 5x + 6"
    },
    // שאלה 2
    {
        topic: "distribution_factoring",
        subTopic: "חוק הפילוג המורחב",
        question_text: "שימו לב לסימנים! פתחו את הסוגריים הבאים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x - 4)(x + 5) = ?</div>",
        options: ["x² + x - 20", "x² - 9x - 20", "x² - x + 20", "x² + 9x - 20"],
        correctAnswer: 0,
        hint: "זכרו שמינוס 4 מוכפל ב-x (נותן 4x-) ומוכפל ב-5 (נותן 20-).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הכפלת האיבר x.&rlm;", math_expression: "x × x = x²  ,  x × 5 = 5x" },
            { verbal_explanation: "שלב ב': הכפלת האיבר 4- (מינוס ארבע).&rlm;", math_expression: "-4 × x = -4x  ,  -4 × 5 = -20" },
            { verbal_explanation: "שלב ג': חיבור כל החלקים יחד.&rlm;", math_expression: "x² + 5x - 4x - 20" },
            { verbal_explanation: "שלב ד': כינוס איברים (5x פחות 4x).&rlm;", math_expression: "x² + x - 20" }
        ],
        final_answer: "x² + x - 20"
    },
    // שאלה 3
    {
        topic: "distribution_factoring",
        subTopic: "חוק הפילוג המורחב",
        question_text: "פתיחת סוגריים עם מקדמים גדולים מ-1. חשבו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(2x + 1)(x - 3) = ?</div>",
        options: ["2x² - 5x - 3", "2x² - 6x - 3", "2x² + x - 3", "3x - 2"],
        correctAnswer: 0,
        hint: "2x כפול x נותן 2x². 2x כפול 3- נותן 6x-. המשיכו כך.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול 2x בסוגריים השניים.&rlm;", math_expression: "2x × x = 2x²  ,  2x × (-3) = -6x" },
            { verbal_explanation: "נכפול 1 בסוגריים השניים.&rlm;", math_expression: "1 × x = x  ,  1 × (-3) = -3" },
            { verbal_explanation: "נרשום יחד.&rlm;", math_expression: "2x² - 6x + x - 3" },
            { verbal_explanation: "נכנס איברים (מינוס שש x ועוד x שווה מינוס חמש x).&rlm;", math_expression: "2x² - 5x - 3" }
        ],
        final_answer: "2x² - 5x - 3"
    },
    // שאלה 4
    {
        topic: "distribution_factoring",
        subTopic: "חוק הפילוג המורחב",
        question_text: "גיאומטריה ואלגברה: לפניכם מלבן שמידותיו הן (x + 4) ו- (x + 2). המלבן מחולק ל-4 שטחים קטנים הממחישים את חוק הפילוג המורחב. מהו השטח הכולל של המלבן?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 150' width='100%' height='150' style='max-width:200px;'><rect x='40' y='20' width='100' height='80' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><rect x='140' y='20' width='40' height='80' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><rect x='40' y='100' width='100' height='30' fill='#bbf7d0' stroke='#16a34a' stroke-width='2'/><rect x='140' y='100' width='40' height='30' fill='#fbcfe8' stroke='#d946ef' stroke-width='2'/><text x='90' y='15' font-family='Arial' font-size='12' fill='#0f172a'>x</text><text x='160' y='15' font-family='Arial' font-size='12' fill='#0f172a'>4</text><text x='25' y='65' font-family='Arial' font-size='12' fill='#0f172a'>x</text><text x='25' y='120' font-family='Arial' font-size='12' fill='#0f172a'>2</text><text x='90' y='65' font-family='Arial' font-size='14' font-weight='bold' fill='#0284c7'>x²</text><text x='160' y='65' font-family='Arial' font-size='14' font-weight='bold' fill='#ca8a04'>4x</text><text x='90' y='120' font-family='Arial' font-size='14' font-weight='bold' fill='#16a34a'>2x</text><text x='160' y='120' font-family='Arial' font-size='14' font-weight='bold' fill='#d946ef'>8</text></svg></div>",
        options: ["x² + 6x + 8", "x² + 8x + 6", "2x + 6", "x² + 8"],
        correctAnswer: 0,
        hint: "חברו את כל 4 השטחים הקטנים שמופיעים בתוך הציור (x², 4x, 2x, 8) וכנסו איברים.&rlm;",
        solution_steps: [
            { verbal_explanation: "התרגיל הוא בעצם הכפלת האורך ברוחב: (x+4) כפול (x+2). בשרטוט כבר ביצעו לנו את הכפל!&rlm;", math_expression: "" },
            { verbal_explanation: "נרשום את סכום ארבעת השטחים המופיעים במלבנים.&rlm;", math_expression: "x² + 4x + 2x + 8" },
            { verbal_explanation: "נכנס את האיברים הדומים (4x ועוד 2x).&rlm;", math_expression: "x² + 6x + 8" }
        ],
        final_answer: "x² + 6x + 8"
    },
    // שאלה 5
    {
        topic: "distribution_factoring",
        subTopic: "חוק הפילוג המורחב",
        question_text: "מה תהיה התוצאה של הכפלת שני ביטויים עם מינוסים?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(a - 5)(a - 2) = ?</div>",
        options: ["a² - 7a + 10", "a² - 3a - 10", "a² + 7a + 10", "a² - 10"],
        correctAnswer: 0,
        hint: "מינוס 5 כפול מינוס 2 נותן פלוס 10! שימו לב לכינוס האיברים האמצעיים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול a בסוגריים השניים.&rlm;", math_expression: "a × a = a²  ,  a × (-2) = -2a" },
            { verbal_explanation: "נכפול 5- בסוגריים השניים.&rlm;", math_expression: "-5 × a = -5a  ,  -5 × (-2) = +10" },
            { verbal_explanation: "נרשום יחד.&rlm;", math_expression: "a² - 2a - 5a + 10" },
            { verbal_explanation: "נכנס איברים: חוב של 2a ועוד חוב של 5a נותן חוב של 7a.&rlm;", math_expression: "a² - 7a + 10" }
        ],
        final_answer: "a² - 7a + 10"
    },
    // שאלה 6
    {
        topic: "distribution_factoring",
        subTopic: "חוק הפילוג המורחב",
        question_text: "קצת אתגר עם מספרים ואותיות: פתחו את הסוגריים.&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(3y - 2)(4y + 1) = ?</div>",
        options: ["12y² - 5y - 2", "12y² + 5y - 2", "12y² - 2", "7y - 1"],
        correctAnswer: 0,
        hint: "3y כפול 4y שווה 12y². המשיכו לאט עם שאר 3 ההכפלות.&rlm;",
        solution_steps: [
            { verbal_explanation: "הכפלת 3y.&rlm;", math_expression: "3y × 4y = 12y²  ,  3y × 1 = 3y" },
            { verbal_explanation: "הכפלת 2-.&rlm;", math_expression: "-2 × 4y = -8y  ,  -2 × 1 = -2" },
            { verbal_explanation: "כתיבה כסכום.&rlm;", math_expression: "12y² + 3y - 8y - 2" },
            { verbal_explanation: "כינוס (3y פחות 8y שווה 5y-).&rlm;", math_expression: "12y² - 5y - 2" }
        ],
        final_answer: "12y² - 5y - 2"
    },
    // שאלה 7
    {
        topic: "distribution_factoring",
        subTopic: "חוק הפילוג המורחב",
        question_text: "תלמיד ניסה לפתור את התרגיל (x+3)(x-3) וקיבל x² - 9. האם הוא צדק? לאן נעלם האיבר האמצעי של ה-x?&rlm;",
        options: ["הוא צדק. האיברים האמצעיים מתבטלים זה עם זה (3x- ו- 3x+).", "הוא טעה, התשובה צריכה להיות x² - 6x - 9.", "הוא טעה, זה צריך להיות x² + 9.", "הוא צדק, אבל זה מקרי."],
        correctAnswer: 0,
        hint: "פתחו בעצמכם: x² -3x +3x -9. מה קורה ל- (-3x + 3x)?&rlm;",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים לפי חוק הפילוג המורחב.&rlm;", math_expression: "x × x = x²  ,  x × (-3) = -3x" },
            { verbal_explanation: "נמשיך עם האיבר השני.&rlm;", math_expression: "3 × x = 3x  ,  3 × (-3) = -9" },
            { verbal_explanation: "נרשום יחד.&rlm;", math_expression: "x² - 3x + 3x - 9" },
            { verbal_explanation: "האיברים 3x- ו- 3x מתבטלים לאפס. לכן התשובה אכן נכונה (וזוהי גם נוסחת כפל מקוצר שנלמד בהמשך).&rlm;", math_expression: "x² - 9" }
        ],
        final_answer: "הוא צדק. האיברים האמצעיים מתבטלים זה עם זה (3x- ו- 3x+)."
    },
    // שאלה 8
    {
        topic: "distribution_factoring",
        subTopic: "חוק הפילוג המורחב",
        question_text: "פשטו את הביטוי הבא (שימו לב שיש קודם כפל סוגריים, ואז חיסור!):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 2)(x + 4) - x² = ?</div>",
        options: ["6x + 8", "6x", "8x + 6", "x² + 6x + 8"],
        correctAnswer: 0,
        hint: "פתחו את הסוגריים קודם. ה-x² יקזז את ה-x² שיווצר מהכפל.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח את הסוגריים לפי הפילוג המורחב.&rlm;", math_expression: "x² + 4x + 2x + 8" },
            { verbal_explanation: "שלב ב': נכנס איברים בסוגריים.&rlm;", math_expression: "x² + 6x + 8" },
            { verbal_explanation: "שלב ג': נחסר את ה-x² שמופיע בסוף התרגיל המקורי.&rlm;", math_expression: "x² + 6x + 8 - x²" },
            { verbal_explanation: "שלב ד': ה-x² מבטלים זה את זה.&rlm;", math_expression: "6x + 8" }
        ],
        final_answer: "6x + 8"
    },
    // שאלה 9
    {
        topic: "distribution_factoring",
        subTopic: "חוק הפילוג המורחב",
        question_text: "מה יקרה אם נכפיל שני ביטויים בעלי משתנים שונים?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 1)(y + 2) = ?</div>",
        options: ["xy + 2x + y + 2", "x² + y² + 2", "xy + 3", "2xy + 2"],
        correctAnswer: 0,
        hint: "חוק הפילוג המורחב עובד בדיוק אותו דבר! x כפול y זה פשוט xy. אי אפשר לכנס איברים בסוף.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול x באיברי הסוגריים השניים.&rlm;", math_expression: "x × y = xy  ,  x × 2 = 2x" },
            { verbal_explanation: "נכפול 1 באיברי הסוגריים השניים.&rlm;", math_expression: "1 × y = y  ,  1 × 2 = 2" },
            { verbal_explanation: "נרשום את הכל יחד כסכום. מכיוון שאין אף איבר מאותה 'משפחה', אי אפשר לכנס.&rlm;", math_expression: "xy + 2x + y + 2" }
        ],
        final_answer: "xy + 2x + y + 2"
    },
    // שאלה 10
    {
        topic: "distribution_factoring",
        subTopic: "חוק הפילוג המורחב",
        question_text: "שימו לב! מה קורה כשיש סימן מינוס *לפני* כפל של שני סוגריים?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>- (x + 2)(x + 1) = ?</div>",
        options: ["-x² - 3x - 2", "-x² + 3x + 2", "-x² - 2x + 1", "x² + 3x + 2"],
        correctAnswer: 0,
        hint: "המינוס ממתין בחוץ. פתחו קודם את הסוגריים (בתוך סוגריים מרובעים גדולים), וכנסו איברים. רק בסוף הפעילו את המינוס על כל התוצאה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נשאיר את המינוס בחוץ ונפתח את הסוגריים.&rlm;", math_expression: "- [ x² + 1x + 2x + 2 ]" },
            { verbal_explanation: "שלב ב': נכנס איברים בתוך הסוגריים המרובעים.&rlm;", math_expression: "- [ x² + 3x + 2 ]" },
            { verbal_explanation: "שלב ג': נפעיל את המינוס (ששקול להכפלה ב-1-) על כל איבר בסוגריים, מה שיהפוך את כל הסימנים.&rlm;", math_expression: "-x² - 3x - 2" }
        ],
        final_answer: "-x² - 3x - 2"
    },
    // שאלה 11
    {
        topic: "distribution_factoring",
        subTopic: "חוק הפילוג המורחב",
        question_text: "הפעלת חוק הפילוג על ביטוי מרובע (שכפול בעצמו):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(a + 3)² = ?</div>",
        options: ["a² + 6a + 9", "a² + 9", "a² + 3a + 9", "2a + 6"],
        correctAnswer: 0,
        hint: "חזקת 2 אומרת להכפיל את הביטוי בעצמו: (a+3)(a+3). עכשיו פתחו רגיל!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכתוב את החזקה כמכפלה של שני סוגריים זהים.&rlm;", math_expression: "(a + 3)(a + 3)" },
            { verbal_explanation: "שלב ב': נפעיל את חוק הפילוג المורחב.&rlm;", math_expression: "a² + 3a + 3a + 9" },
            { verbal_explanation: "שלב ג': נכנס את האיברים האמצעיים (3a + 3a).&rlm;", math_expression: "a² + 6a + 9" }
        ],
        final_answer: "a² + 6a + 9"
    },
    // שאלה 12
    {
        topic: "distribution_factoring",
        subTopic: "חוק הפילוג המורחב",
        question_text: "השלימו את האיבר החסר במשוואה כך שהשוויון יתקיים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 5)(x + ?) = x² + 9x + 20</div>",
        options: ["4", "5", "9", "20"],
        correctAnswer: 0,
        hint: "המספר החסר צריך לעמוד בשני תנאים: כשכופלים אותו ב-5 הוא נותן 20, וכשמחברים אותו ל-5 הוא נותן את המקדם האמצעי 9.&rlm;",
        solution_steps: [
            { verbal_explanation: "נסתכל על האיבר החופשי בתוצאה (20). הוא מתקבל מכפל של 5 במספר החסר.&rlm;", math_expression: "5 × ? = 20" },
            { verbal_explanation: "המספר שמשלים זאת הוא 4.&rlm;", math_expression: "20 : 5 = 4" },
            { verbal_explanation: "נוודא עם האיבר האמצעי (9x): 5x ועוד 4x אכן שווה 9x. התשובה נכונה.&rlm;", math_expression: "5x + 4x = 9x" }
        ],
        final_answer: "4"
    },

    // ==========================================================
    // תת נושא 2: הוצאת גורם משותף (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "distribution_factoring",
        subTopic: "הוצאת גורם משותף",
        question_text: "פירוק לגורמים הוא הפעולה ההפוכה לפתיחת סוגריים. הוציאו את הגורם המשותף הגדול ביותר מהביטוי הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4x + 12 = ?</div>",
        options: ["4(x + 3)", "2(2x + 6)", "4(x + 12)", "x(4 + 12)"],
        correctAnswer: 0,
        hint: "חפשו את המספר הגדול ביותר שמחלק גם את 4 וגם את 12 ללא שארית.&rlm;",
        solution_steps: [
            { verbal_explanation: "המספר הגדול ביותר שמחלק את 4 ו-12 הוא 4.&rlm;", math_expression: "" },
            { verbal_explanation: "נרשום 4 מחוץ לסוגריים. כעת נחלק כל איבר ב-4 כדי לדעת מה נשאר בפנים.&rlm;", math_expression: "4x : 4 = x" },
            { verbal_explanation: "12 חלקי 4 הם 3.&rlm;", math_expression: "12 : 4 = 3" },
            { verbal_explanation: "הביטוי הסופי הוא 4 כפול הסוגריים.&rlm;", math_expression: "4(x + 3)" }
        ],
        final_answer: "4(x + 3)"
    },
    // שאלה 14
    {
        topic: "distribution_factoring",
        subTopic: "הוצאת גורם משותף",
        question_text: "מהו הגורם המשותף שאפשר להוציא מהביטוי בו יש נעלמים בשני האיברים?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x² + 5x = ?</div>",
        options: ["x(x + 5)", "5(x² + x)", "x(x² + 5)", "x²(1 + 5x)"],
        correctAnswer: 0,
        hint: "x² זה בעצם x כפול x. גם באיבר הראשון וגם בשני יש לפחות x אחד. הוציאו אותו החוצה.&rlm;",
        solution_steps: [
            { verbal_explanation: "המשתנה x מופיע בשני האיברים, לכן הוא גורם משותף.&rlm;", math_expression: "" },
            { verbal_explanation: "נוציא x אחד החוצה. נחלק את x² ב-x ונקבל x.&rlm;", math_expression: "x² : x = x" },
            { verbal_explanation: "נחלק את 5x ב-x ונקבל 5.&rlm;", math_expression: "5x : x = 5" },
            { verbal_explanation: "נרשום את התוצאה.&rlm;", math_expression: "x(x + 5)" }
        ],
        final_answer: "x(x + 5)"
    },
    // שאלה 15
    {
        topic: "distribution_factoring",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוציאו גורם משותף שהוא גם מספר וגם אות:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>8x² - 12x = ?</div>",
        options: ["4x(2x - 3)", "2x(4x - 6)", "4(2x² - 3x)", "x(8x - 12)"],
        correctAnswer: 0,
        hint: "המספר הגדול שמחלק את 8 ו-12 הוא 4. האות המשותפת היא x. לכן הגורם הוא 4x.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא גורם משותף למספרים 8 ו-12 (התשובה היא 4).&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נמצא גורם משותף לאותיות x² ו-x (התשובה היא x). לכן הגורם המשותף המלא הוא 4x.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': נחלק כל איבר ב-4x כדי למצוא את פנים הסוגריים.&rlm;", math_expression: "8x² : 4x = 2x  ,  -12x : 4x = -3" },
            { verbal_explanation: "שלב ד': נרכיב את הביטוי.&rlm;", math_expression: "4x(2x - 3)" }
        ],
        final_answer: "4x(2x - 3)"
    },
    // שאלה 16
    {
        topic: "distribution_factoring",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוציאו גורם משותף שלילי. פשטו את הביטוי:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-3x - 9 = ?</div>",
        options: ["-3(x + 3)", "-3(x - 3)", "3(-x - 3)", "-3(x + 9)"],
        correctAnswer: 0,
        hint: "כשמוציאים מינוס החוצה, כל הסימנים בתוך הסוגריים מתהפכים. מינוס 9 לחלק למינוס 3 שווה לפלוס 3.&rlm;",
        solution_steps: [
            { verbal_explanation: "נוציא את 3- כגורם משותף.&rlm;", math_expression: "" },
            { verbal_explanation: "נחלק את האיבר הראשון: 3x- לחלק ל-3- נותן x.&rlm;", math_expression: "-3x : (-3) = x" },
            { verbal_explanation: "נחלק את האיבר השני: 9- לחלק ל-3- נותן פלוס 3.&rlm;", math_expression: "-9 : (-3) = +3" },
            { verbal_explanation: "נרשום הכל יחד.&rlm;", math_expression: "-3(x + 3)" }
        ],
        final_answer: "-3(x + 3)"
    },
    // שאלה 17
    {
        topic: "distribution_factoring",
        subTopic: "הוצאת גורם משותף",
        question_text: "גורם משותף עם מספר משתנים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5xy + 15x = ?</div>",
        options: ["5x(y + 3)", "5(xy + 3x)", "x(5y + 15)", "5xy(1 + 3)"],
        correctAnswer: 0,
        hint: "גם 5 וגם x מופיעים בשני האיברים (ב-15x מסתתר ה-5 כי 15=5*3).&rlm;",
        solution_steps: [
            { verbal_explanation: "הגורם המשותף במספרים הוא 5. באותיות הוא x. יחד: 5x.&rlm;", math_expression: "" },
            { verbal_explanation: "חילוק האיבר הראשון ב-5x משאיר אותנו רק עם y.&rlm;", math_expression: "5xy : 5x = y" },
            { verbal_explanation: "חילוק האיבר השני ב-5x משאיר אותנו עם 3.&rlm;", math_expression: "15x : 5x = 3" },
            { verbal_explanation: "התוצאה:&rlm;", math_expression: "5x(y + 3)" }
        ],
        final_answer: "5x(y + 3)"
    },
    // שאלה 18
    {
        topic: "distribution_factoring",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוצאת גורם משותף משלושה איברים! פשטו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2x³ + 4x² + 6x = ?</div>",
        options: ["2x(x² + 2x + 3)", "2(x³ + 2x² + 3x)", "2x²(x + 2 + 3)", "x(2x² + 4x + 6)"],
        correctAnswer: 0,
        hint: "מה המספר הכי גדול שמחלק את 2, 4 ו-6? (2). מה החזקה הנמוכה ביותר של x שמופיעה בכולם? (x). הגורם הוא 2x.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחפש גורם משותף. במספרים זה 2. בחזקות זה x (כי x הוא x¹, החזקה הקטנה ביותר).&rlm;", math_expression: "2x" },
            { verbal_explanation: "שלב ב': נחלק כל איבר ב-2x.&rlm;", math_expression: "" },
            { verbal_explanation: "2x³ חלקי 2x שווה x².&rlm;", math_expression: "2x³ : 2x = x²" },
            { verbal_explanation: "4x² חלקי 2x שווה 2x.&rlm;", math_expression: "4x² : 2x = 2x" },
            { verbal_explanation: "6x חלקי 2x שווה 3.&rlm;", math_expression: "6x : 2x = 3" },
            { verbal_explanation: "שלב ג': נרשום בסוגריים.&rlm;", math_expression: "2x(x² + 2x + 3)" }
        ],
        final_answer: "2x(x² + 2x + 3)"
    },
    // שאלה 19
    {
        topic: "distribution_factoring",
        subTopic: "הוצאת גורם משותף",
        question_text: "מכשול נפוץ: מה קורה כשאיבר שלם יוצא כגורם משותף?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>7x² - 7x = ?</div>",
        options: ["7x(x - 1)", "7x(x)", "7x(x - 0)", "7(x² - x)"],
        correctAnswer: 0,
        hint: "כשמחלקים דבר בעצמו, התוצאה היא 1, לא 0! 7x חלקי 7x שווה 1.&rlm;",
        solution_steps: [
            { verbal_explanation: "הגורם המשותף המקסימלי הוא 7x.&rlm;", math_expression: "" },
            { verbal_explanation: "נחלק את האיבר הראשון: 7x² לחלק ל-7x שווה x.&rlm;", math_expression: "7x² : 7x = x" },
            { verbal_explanation: "נחלק את האיבר השני: 7x- לחלק ל-7x שווה למינוס 1 (חשוב מאוד לא לרשום אפס!).&rlm;", math_expression: "-7x : 7x = -1" },
            { verbal_explanation: "התוצאה:&rlm;", math_expression: "7x(x - 1)" }
        ],
        final_answer: "7x(x - 1)"
    },
    // שאלה 20
    {
        topic: "distribution_factoring",
        subTopic: "הוצאת גורם משותף",
        question_text: "כיצד הוצאת גורם משותף יכולה לעזור לחשב את התרגיל 99² + 99 בראש ללא מחשבון?&rlm;",
        options: ["99(99 + 1) = 99 × 100 = 9900", "99² + 99 = 9801 + 99 = 9900", "99(1 + 1) = 99 × 2 = 198", "אי אפשר לחשב בראש"],
        correctAnswer: 0,
        hint: "התייחסו ל-99 כמו אל x. התרגיל הוא x² + x. הוציאו x מחוץ לסוגריים: x(x+1).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה את 99 כגורם משותף לשני האיברים (99² זה 99 כפול 99).&rlm;", math_expression: "99 × 99 + 99 × 1" },
            { verbal_explanation: "שלב ב': נוציא את 99 אל מחוץ לסוגריים.&rlm;", math_expression: "99(99 + 1)" },
            { verbal_explanation: "שלב ג': נפתור בסוגריים: 99+1 שווה 100.&rlm;", math_expression: "99 × 100" },
            { verbal_explanation: "שלב ד': 99 כפול 100 נותן 9900 בקלות.&rlm;", math_expression: "9900" }
        ],
        final_answer: "99(99 + 1) = 99 × 100 = 9900"
    },
    // שאלה 21
    {
        topic: "distribution_factoring",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוציאו את הגורם המשותף המקסימלי:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>18a²b - 12ab² = ?</div>",
        options: ["6ab(3a - 2b)", "2ab(9a - 6b)", "6a(3ab - 2b²)", "12ab(1.5a - b)"],
        correctAnswer: 0,
        hint: "במספרים, הגורם הוא 6. באות a הגורם הוא a. באות b הגורם הוא b. יחד: 6ab.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המחלק הגדול ביותר של 18 ו-12 הוא 6.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': האות a מופיעה כ-a² וכ-a. ניקח את החזקה הנמוכה (a). כנ\"ל לגבי b.&rlm;", math_expression: "6ab" },
            { verbal_explanation: "שלב ג': חילוק האיבר הראשון ב-6ab משאיר 3a.&rlm;", math_expression: "18a²b : 6ab = 3a" },
            { verbal_explanation: "שלב ד': חילוק האיבר השני משאיר 2b-.&rlm;", math_expression: "-12ab² : 6ab = -2b" },
            { verbal_explanation: "שלב ה': התשובה הסופית.&rlm;", math_expression: "6ab(3a - 2b)" }
        ],
        final_answer: "6ab(3a - 2b)"
    },
    // שאלה 22
    {
        topic: "distribution_factoring",
        subTopic: "הוצאת גורם משותף",
        question_text: "תלמיד הוציא גורם משותף וקיבל: 2x(4x + 6). האם הוא סיים את העבודה? (הביטוי המקורי היה 8x² + 12x).&rlm;",
        options: ["לא, כי בתוך הסוגריים נשאר גורם משותף נוסף (2) שניתן להוציא.", "כן, הוא הוציא גורם משותף כנדרש.", "לא, הוא טעה בכפל.", "כן, זו התשובה הסופית."],
        correctAnswer: 0,
        hint: "הציצו בתוך הסוגריים (4x + 6). גם 4 וגם 6 מתחלקים ב-2. המשמעות היא שהתלמיד לא הוציא את הגורם המשותף ה*גדול ביותר* בהתחלה.&rlm;",
        solution_steps: [
            { verbal_explanation: "מטרת הפירוק לגורמים היא להוציא את הגורם המשותף המקסימלי האפשרי.&rlm;", math_expression: "" },
            { verbal_explanation: "בתוך הסוגריים 4x+6, המספרים עדיין מתחלקים ב-2. זה אומר שיכולנו להוציא עוד 2 החוצה.&rlm;", math_expression: "4x + 6 = 2(2x + 3)" },
            { verbal_explanation: "התשובה המלאה והנכונה הייתה צריכה להיות 4x(2x + 3). לכן עבודתו חלקית.&rlm;", math_expression: "" }
        ],
        final_answer: "לא, כי בתוך הסוגריים נשאר גורם משותף נוסף (2) שניתן להוציא."
    },
    // שאלה 23
    {
        topic: "distribution_factoring",
        subTopic: "הוצאת גורם משותף",
        question_text: "שטחו של מלבן מיוצג על ידי הביטוי 15x² + 5x. אם ידוע שאורך אחת מצלעותיו הוא 5x, מהו אורך הצלע השנייה?&rlm;",
        options: ["3x + 1", "3x", "x + 1", "3x + 5"],
        correctAnswer: 0,
        hint: "שטח מלבן הוא צלע כפול צלע. אם השטח הוא המכפלה, והצלע הראשונה היא גורם אחד, צלע 2 היא 'מה שנשאר בתוך הסוגריים' כשמוציאים את 5x.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': שטח המלבן שווה למכפלת הצלעות. אם נוציא את 5x (אחת הצלעות) כגורם משותף, הביטוי שיישאר בסוגריים יהיה הצלע השנייה.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחלק 15x² ב-5x ונקבל 3x.&rlm;", math_expression: "15x² : 5x = 3x" },
            { verbal_explanation: "שלב ג': נחלק 5x ב-5x ונקבל 1.&rlm;", math_expression: "5x : 5x = 1" },
            { verbal_explanation: "שלב ד': הצלע השנייה היא 3x + 1.&rlm;", math_expression: "5x(3x + 1)" }
        ],
        final_answer: "3x + 1"
    },
    // שאלה 24
    {
        topic: "distribution_factoring",
        subTopic: "הוצאת גורם משותף",
        question_text: "פשטו את השבר האלגברי הבא בעזרת הוצאת גורם משותף במונה (וצמצומו עם המכנה):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(4x + 8) / 4 = ?</div>",
        options: ["x + 2", "x + 8", "4x + 2", "x"],
        correctAnswer: 0,
        hint: "הוציאו 4 מחוץ לסוגריים במונה, ואז צמצמו את ה-4 שלמעלה עם ה-4 שלמטה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': במונה, ניתן להוציא 4 כגורם משותף.&rlm;", math_expression: "4x + 8 = 4(x + 2)" },
            { verbal_explanation: "שלב ב': נכתוב את השבר מחדש.&rlm;", math_expression: "4(x + 2) / 4" },
            { verbal_explanation: "שלב ג': כעת שיש לנו פעולת כפל במונה, מותר לצמצם את ה-4 שבמונה עם ה-4 שבמכנה.&rlm;", math_expression: "x + 2" }
        ],
        final_answer: "x + 2"
    },

    // ==========================================================
    // תת נושא 3: נוסחאות הכפל המקוצר (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "distribution_factoring",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "איזה מן הביטויים הבאים הוא הפיתוח הנכון של נוסחת הכפל המקוצר לדו-איבר בריבוע: (a + b)² ?&rlm;",
        options: ["a² + 2ab + b²", "a² + b²", "a² + ab + b²", "a² - 2ab + b²"],
        correctAnswer: 0,
        hint: "זה לא רק להעלות כל אחד בריבוע! זכרו את ה'פנים המחיכות' (2 כפול הראשון כפול השני).&rlm;",
        solution_steps: [
            { verbal_explanation: "אם נפתח את הסוגריים (a+b)(a+b) נקבל a² + ab + ba + b².&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון ש-ab שווה ל-ba (חוק החילוף), הם מתחברים ל-2ab.&rlm;", math_expression: "" },
            { verbal_explanation: "הנוסחה הסופית והמקוצרת שחובה לזכור היא a² + 2ab + b².&rlm;", math_expression: "" }
        ],
        final_answer: "a² + 2ab + b²"
    },
    // שאלה 26
    {
        topic: "distribution_factoring",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "פתחו את הסוגריים בעזרת נוסחת הכפל המקוצר:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 5)² = ?</div>",
        options: ["x² + 10x + 25", "x² + 25", "x² + 5x + 25", "x² + 10x + 10"],
        correctAnswer: 0,
        hint: "הראשון בריבוע (x²), פעמיים הראשון כפול השני (2 כפול x כפול 5), והשני בריבוע (5²).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': האיבר הראשון בריבוע.&rlm;", math_expression: "x²" },
            { verbal_explanation: "שלב ב': פעמיים מכפלת האיברים (2 כפול x כפול 5).&rlm;", math_expression: "2 × x × 5 = 10x" },
            { verbal_explanation: "שלב ג': האיבר השני בריבוע.&rlm;", math_expression: "5² = 25" },
            { verbal_explanation: "שלב ד': נחבר הכל.&rlm;", math_expression: "x² + 10x + 25" }
        ],
        final_answer: "x² + 10x + 25"
    },
    // שאלה 27
    {
        topic: "distribution_factoring",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "נוסחת ההפרש בריבוע: פתחו את הביטוי:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(y - 3)² = ?</div>",
        options: ["y² - 6y + 9", "y² - 9", "y² - 3y + 9", "y² + 6y - 9"],
        correctAnswer: 0,
        hint: "הנוסחה זהה, אבל האיבר האמצעי מקבל סימן מינוס. שימו לב שהאיבר האחרון נשאר בפלוס (כי מינוס בריבוע נותן פלוס).&rlm;",
        solution_steps: [
            { verbal_explanation: "נוסחת הכפל המקוצר להפרש היא: (a-b)² = a² - 2ab + b².&rlm;", math_expression: "" },
            { verbal_explanation: "הראשון בריבוע: y².&rlm;", math_expression: "y²" },
            { verbal_explanation: "מינוס פעמיים המכפלה: 2- כפול y כפול 3.&rlm;", math_expression: "-6y" },
            { verbal_explanation: "השני בריבוע: 3 בריבוע (שתמיד יהיה חיובי בסוף).&rlm;", math_expression: "+9" },
            { verbal_explanation: "נרכיב.&rlm;", math_expression: "y² - 6y + 9" }
        ],
        final_answer: "y² - 6y + 9"
    },
    // שאלה 28
    {
        topic: "distribution_factoring",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "הנוסחה השלישית (הפרש ריבועים). מה התוצאה של מכפלת סכום והפרש?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x - 4)(x + 4) = ?</div>",
        options: ["x² - 16", "x² - 8x - 16", "x² + 16", "x² - 8"],
        correctAnswer: 0,
        hint: "במצב הזה האיברים האמצעיים מתבטלים זה עם זה. נשאר רק הראשון בריבוע פחות השני בריבוע.&rlm;",
        solution_steps: [
            { verbal_explanation: "הנוסחה השלישית היא היפה מכולן: (a-b)(a+b) = a² - b².&rlm;", math_expression: "" },
            { verbal_explanation: "כיוון שהאיברים זהים ורק הסימן שונה, אין איבר אמצעי (הוא מתאפס).&rlm;", math_expression: "" },
            { verbal_explanation: "נעלה את הראשון בריבוע (x²), ונחסר את השני בריבוע (4²).&rlm;", math_expression: "x² - 16" }
        ],
        final_answer: "x² - 16"
    },
    // שאלה 29
    {
        topic: "distribution_factoring",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "אתגר עם מקדם! פתחו את הביטוי הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(2x + 1)² = ?</div>",
        options: ["4x² + 4x + 1", "2x² + 4x + 1", "4x² + 2x + 1", "4x² + 1"],
        correctAnswer: 0,
        hint: "כשמעלים את 2x בריבוע, גם ה-2 וגם ה-x עולים בריבוע (נותן 4x²). האיבר האמצעי הוא 2 * 2x * 1.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': (2x) בריבוע שווה ל-4x² (אסור לשכוח להעלות את ה-2 בריבוע!).&rlm;", math_expression: "(2x)² = 4x²" },
            { verbal_explanation: "שלב ב': פעמיים 2x כפול 1 נותן 4x.&rlm;", math_expression: "2 × 2x × 1 = 4x" },
            { verbal_explanation: "שלב ג': 1 בריבוע הוא 1.&rlm;", math_expression: "1² = 1" },
            { verbal_explanation: "שלב ד': נחבר.&rlm;", math_expression: "4x² + 4x + 1" }
        ],
        final_answer: "4x² + 4x + 1"
    },
    // שאלה 30
    {
        topic: "distribution_factoring",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "שוב מקדם, הפעם עם הפרש ריבועים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(5x - 2)(5x + 2) = ?</div>",
        options: ["25x² - 4", "5x² - 4", "25x² - 20x - 4", "25x² + 4"],
        correctAnswer: 0,
        hint: "הראשון בריבוע (כולל המקדם) פחות השני בריבוע.&rlm;",
        solution_steps: [
            { verbal_explanation: "לפי הנוסחה a² - b², נעלה את האיבר הראשון (5x) בריבוע כולו.&rlm;", math_expression: "(5x)² = 25x²" },
            { verbal_explanation: "נעלה את האיבר השני (2) בריבוע.&rlm;", math_expression: "2² = 4" },
            { verbal_explanation: "נחסר את השני מהראשון.&rlm;", math_expression: "25x² - 4" }
        ],
        final_answer: "25x² - 4"
    },
    // שאלה 31
    {
        topic: "distribution_factoring",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "פעולה הפוכה (פירוק לגורמים). איזה ביטוי מתקבל אם נפרק את x² - 25 בחזרה לסוגריים?&rlm;",
        options: ["(x - 5)(x + 5)", "(x - 5)²", "(x - 25)(x + 1)", "(x + 5)²"],
        correctAnswer: 0,
        hint: "זהו הפרש ריבועים. מהו השורש של x²? (x). מהו השורש של 25? (5). הציבו בסוגריים פלוס ומינוס.&rlm;",
        solution_steps: [
            { verbal_explanation: "אנו מזהים כאן תבנית של הפרש בין שני ריבועים (a² - b²).&rlm;", math_expression: "" },
            { verbal_explanation: "השורש של האיבר הראשון הוא x. השורש של האיבר השני (25) הוא 5.&rlm;", math_expression: "" },
            { verbal_explanation: "הפירוק מורכב מסוגריים של סכום כפול סוגריים של הפרש.&rlm;", math_expression: "(x - 5)(x + 5)" }
        ],
        final_answer: "(x - 5)(x + 5)"
    },
    // שאלה 32
    {
        topic: "distribution_factoring",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "פירוק לגורמים של 'טרינום' מושלם: ארזו חזרה לסוגריים את הביטוי x² + 10x + 25.&rlm;",
        options: ["(x + 5)²", "(x + 10)²", "(x + 5)(x - 5)", "(x + 2.5)²"],
        correctAnswer: 0,
        hint: "האם זה נראה כמו הפיתוח של משהו בריבוע? שורש של 25 הוא 5. האם האיבר האמצעי הוא פעמיים 5 כפול x? (כן, 10x!).&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק האם זהו ריבוע של דו-איבר. האיבר הראשון הוא משהו בריבוע (x).&rlm;", math_expression: "" },
            { verbal_explanation: "האיבר האחרון הוא גם משהו בריבוע (5).&rlm;", math_expression: "25 = 5²" },
            { verbal_explanation: "נבדוק את האיבר האמצעי: האם הוא 2 כפול x כפול 5? כן, 10x.&rlm;", math_expression: "2 × x × 5 = 10x" },
            { verbal_explanation: "לכן ניתן לארוז זאת כ- (x+5) בריבוע.&rlm;", math_expression: "(x + 5)²" }
        ],
        final_answer: "(x + 5)²"
    },
    // שאלה 33
    {
        topic: "distribution_factoring",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "כיצד נוסחאות הכפל המקוצר עוזרות לחשב את 21² בראש בקלות?&rlm;",
        options: ["21² = (20 + 1)² = 400 + 40 + 1 = 441", "21² = 20² + 1² = 400 + 1 = 401", "21² = (21 + 0)² = 421", "אי אפשר לעזור בזה"],
        correctAnswer: 0,
        hint: "פצלו את 21 ל- 20+1. הפעילו את הנוסחה (a+b)²: הראשון בריבוע (400), פעמיים המכפלה (40), השני בריבוע (1).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכתוב את 21 כ- (20 + 1).&rlm;", math_expression: "(20 + 1)²" },
            { verbal_explanation: "שלב ב': נשתמש בנוסחה. 20 בריבוע זה 400.&rlm;", math_expression: "a² = 400" },
            { verbal_explanation: "שלב ג': פעמיים 20 כפול 1 זה 40.&rlm;", math_expression: "2ab = 40" },
            { verbal_explanation: "שלב ד': 1 בריבוע זה 1. נחבר הכל: 400+40+1 = 441.&rlm;", math_expression: "441" }
        ],
        final_answer: "21² = (20 + 1)² = 400 + 40 + 1 = 441"
    },
    // שאלה 34
    {
        topic: "distribution_factoring",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "טריק חישוב נוסף: מהי התוצאה של 19 × 21 ?&rlm;",
        options: ["(20 - 1)(20 + 1) = 400 - 1 = 399", "400", "390", "410"],
        correctAnswer: 0,
        hint: "19 הוא 20 פחות 1. 21 הוא 20 פלוס 1. זיהיתם את נוסחת הפרש הריבועים?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את המספרים כהפרש וסכום סביב המספר העגול 20.&rlm;", math_expression: "(20 - 1)(20 + 1)" },
            { verbal_explanation: "שלב ב': לפי נוסחת (a-b)(a+b), התוצאה היא a² - b².&rlm;", math_expression: "20² - 1²" },
            { verbal_explanation: "שלב ג': 20 בריבוע זה 400. 1 בריבוע זה 1. 400 פחות 1 שווה 399.&rlm;", math_expression: "399" }
        ],
        final_answer: "(20 - 1)(20 + 1) = 400 - 1 = 399"
    },
    // שאלה 35
    {
        topic: "distribution_factoring",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "מה תהיה התוצאה אם נחסר בין שתי נוסחאות?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 3)² - (x - 3)² = ?</div>",
        options: ["12x", "2x² + 18", "0", "18"],
        correctAnswer: 0,
        hint: "פתחו כל סוגריים בנפרד (שמרו את השני בתוך סוגריים עם מינוס לפני). ה-x² וה-9 מתבטלים! מה נשאר מה-6x?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח את הסוגריים הראשונים.&rlm;", math_expression: "x² + 6x + 9" },
            { verbal_explanation: "שלב ב': נפתח את הסוגריים השניים (נשמור מינוס בחוץ).&rlm;", math_expression: "- (x² - 6x + 9)" },
            { verbal_explanation: "שלב ג': נפעיל את המינוס, מה שהופך את הסימנים.&rlm;", math_expression: "-x² + 6x - 9" },
            { verbal_explanation: "שלב ד': נחבר הכל: x² פחות x² זה 0. 9 פחות 9 זה 0. נשארנו עם 6x ועוד 6x.&rlm;", math_expression: "12x" }
        ],
        final_answer: "12x"
    },
    // שאלה 36
    {
        topic: "distribution_factoring",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "שטח של ריבוע מיוצג על ידי הביטוי x² - 12x + 36. מהו אורך צלע הריבוע?&rlm;",
        options: ["x - 6", "x + 6", "x - 36", "x - 12"],
        correctAnswer: 0,
        hint: "ארזו את הטרינום חזרה לסוגריים לפי נוסחת הכפל המקוצר (עם מינוס). השורש של 36 הוא 6.&rlm;",
        solution_steps: [
            { verbal_explanation: "שטח ריבוע הוא 'צלע בריבוע' (צלע כפול עצמה).&rlm;", math_expression: "" },
            { verbal_explanation: "נזהה תבנית של כפל מקוצר בביטוי. הקצוות הם x² ו- 6².&rlm;", math_expression: "x²  ,  6²" },
            { verbal_explanation: "הסימן האמצעי הוא מינוס, והאיבר האמצעי הוא אכן 2*x*6 (כלומר 12x).&rlm;", math_expression: "" },
            { verbal_explanation: "לכן הביטוי נארז ל- (x-6) בריבוע. מכאן שצלע הריבוע היא x-6.&rlm;", math_expression: "(x - 6)²" }
        ],
        final_answer: "x - 6"
    },

    // ==========================================================
    // תת נושא 4: פירוק לפי קבוצות (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "distribution_factoring",
        subTopic: "פירוק לפי קבוצות",
        question_text: "לפעמים הגורם המשותף שאנו מוציאים החוצה הוא לא סתם אות או מספר, אלא ביטוי שלם בתוך סוגריים. פשטו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>a(x + 2) + b(x + 2) = ?</div>",
        options: ["(a + b)(x + 2)", "ab(x + 2)", "(x + 2)²", "ax + bx + 4"],
        correctAnswer: 0,
        hint: "תתייחסו לסוגריים (x+2) כאל 'תפוח'. יש לנו a תפוחים ועוד b תפוחים. הוציאו את ה'תפוח' החוצה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה שהביטוי (x+2) מופיע גם באיבר הראשון וגם בשני.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נוציא את הסוגריים (x+2) במלואם אל מחוץ לסוגריים חדשים כ'גורם משותף'.&rlm;", math_expression: "(x + 2) × [ ... ]" },
            { verbal_explanation: "שלב ג': בתוך הסוגריים החדשים נרשום את 'מה שנשאר' (a ו-b).&rlm;", math_expression: "(x + 2)(a + b)" }
        ],
        final_answer: "(a + b)(x + 2)"
    },
    // שאלה 38
    {
        topic: "distribution_factoring",
        subTopic: "פירוק לפי קבוצות",
        question_text: "שיטת 'פירוק לפי קבוצות' מתאימה לביטויים עם 4 איברים. חלקו לזוגות (השניים הראשונים והשניים האחרונים) ופרקו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>ax + ay + bx + by = ?</div>",
        options: ["(a + b)(x + y)", "(ax)(by)", "ab(x + y)", "a(x + y) + bx"],
        correctAnswer: 0,
        hint: "מהשניים הראשונים הוציאו a. מהשניים האחרונים הוציאו b. לאחר מכן הוציאו את (x+y) שיצא לכם.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא גורם משותף מתוך שני האיברים הראשונים (a).&rlm;", math_expression: "a(x + y) + bx + by" },
            { verbal_explanation: "שלב ב': נוציא גורם משותף משני האיברים האחרונים (b).&rlm;", math_expression: "a(x + y) + b(x + y)" },
            { verbal_explanation: "שלב ג': עכשיו נפעיל שוב הוצאת גורם משותף, הפעם על הסוגריים (x+y).&rlm;", math_expression: "(a + b)(x + y)" }
        ],
        final_answer: "(a + b)(x + y)"
    },
    // שאלה 39
    {
        topic: "distribution_factoring",
        subTopic: "פירוק לפי קבוצות",
        question_text: "פרקו לפי קבוצות את הביטוי הבא הכולל מספרים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x² + 4x + 5x + 20 = ?</div>",
        options: ["(x + 5)(x + 4)", "(x + 9)x + 20", "(x² + 20)(4x + 5x)", "x(x + 9) + 20"],
        correctAnswer: 0,
        hint: "מהשניים הראשונים הוציאו x. מהשניים האחרונים הוציאו 5. תקבלו את הסוגריים המשותפים (x+4).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פירוק הקבוצה הראשונה (x² + 4x). הגורם המשותף הוא x.&rlm;", math_expression: "x(x + 4)" },
            { verbal_explanation: "שלב ב': פירוק הקבוצה השנייה (5x + 20). הגורם המשותף הוא 5.&rlm;", math_expression: "5(x + 4)" },
            { verbal_explanation: "שלב ג': כעת הביטוי הוא x(x+4) + 5(x+4). נוציא את (x+4) החוצה.&rlm;", math_expression: "(x + 5)(x + 4)" }
        ],
        final_answer: "(x + 5)(x + 4)"
    },
    // שאלה 40
    {
        topic: "distribution_factoring",
        subTopic: "פירוק לפי קבוצות",
        question_text: "שימו לב למינוסים! פרקו לפי קבוצות:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x² - 3x + 2x - 6 = ?</div>",
        options: ["(x + 2)(x - 3)", "(x - 2)(x + 3)", "(x - 3)(x - 2)", "(x² + 2x)(3x - 6)"],
        correctAnswer: 0,
        hint: "מהשניים הראשונים הוציאו x. מהשניים האחרונים הוציאו 2 חיובי. האם תקבלו (x-3) פעמיים?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': מהזוג הראשון נוציא x כגורם משותף.&rlm;", math_expression: "x(x - 3)" },
            { verbal_explanation: "שלב ב': מהזוג השני נוציא 2 כגורם משותף.&rlm;", math_expression: "2(x - 3)" },
            { verbal_explanation: "שלב ג': נרשום את הביטוי החדש (שבו הסוגריים זהים).&rlm;", math_expression: "x(x - 3) + 2(x - 3)" },
            { verbal_explanation: "שלב ד': נוציא את הסוגריים המשותפים כגורם יחיד.&rlm;", math_expression: "(x + 2)(x - 3)" }
        ],
        final_answer: "(x + 2)(x - 3)"
    },
    // שאלה 41
    {
        topic: "distribution_factoring",
        subTopic: "פירוק לפי קבוצות",
        question_text: "לפעמים צריך להוציא 'מינוס' כגורם משותף מהקבוצה השנייה כדי שהסוגריים יהיו זהים לקבוצה הראשונה. פרקו את:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>ax + 3a - bx - 3b = ?</div>",
        options: ["(a - b)(x + 3)", "(a + b)(x - 3)", "(a - b)(x - 3)", "(x + 3)(a + b)"],
        correctAnswer: 0,
        hint: "מהזוג הראשון הוציאו a. מהזוג השני הוציאו -b (מינוס b).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הקבוצה הראשונה מתפרקת ל- a(x + 3).&rlm;", math_expression: "a(x + 3)" },
            { verbal_explanation: "שלב ב': הקבוצה השנייה היא -bx - 3b. אם נוציא -b (מינוס b) החוצה, הסימנים בפנים יתהפכו לפלוס.&rlm;", math_expression: "-b(x + 3)" },
            { verbal_explanation: "שלב ג': כעת בשני הצדדים יש (x+3). נוציא אותו החוצה.&rlm;", math_expression: "(a - b)(x + 3)" }
        ],
        final_answer: "(a - b)(x + 3)"
    },
    // שאלה 42
    {
        topic: "distribution_factoring",
        subTopic: "פירוק לפי קבוצות",
        question_text: "קורה שצריך קודם 'לסדר' (להחליף מקומות) את האיברים כדי שהפירוק יעבוד. נסו לפרק את:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>xy + 4 + 4x + y = ?</div>",
        options: ["(x + 1)(y + 4)", "(x + 4)(y + 1)", "(xy + 4)(4x + y)", "אי אפשר לפרק"],
        correctAnswer: 0,
        hint: "הזיזו את האיברים כך שיהיה היגיון. למשל: xy + 4x + y + 4. עכשיו פרקו!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': במצב הנוכחי לזוג הראשון (xy+4) אין גורם משותף. נסדר מחדש לפי חוק החילוף בחיבור.&rlm;", math_expression: "xy + 4x + y + 4" },
            { verbal_explanation: "שלב ב': עכשיו מהזוג הראשון אפשר להוציא x.&rlm;", math_expression: "x(y + 4)" },
            { verbal_explanation: "שלב ג': בזוג השני כבר יש לנו (y+4). זה כמו להגיד שנוציא '1' כגורם משותף.&rlm;", math_expression: "1(y + 4)" },
            { verbal_explanation: "שלב ד': נוציא את (y+4) החוצה.&rlm;", math_expression: "(x + 1)(y + 4)" }
        ],
        final_answer: "(x + 1)(y + 4)"
    },
    // שאלה 43
    {
        topic: "distribution_factoring",
        subTopic: "פירוק לפי קבוצות",
        question_text: "פרקו לגורמים את הביטוי (רמז: יש כאן 1 נסתר!):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x³ + x² + x + 1 = ?</div>",
        options: ["(x² + 1)(x + 1)", "(x² + x)(x + 1)", "x²(x + 1)", "(x³ + 1)(x + 1)"],
        correctAnswer: 0,
        hint: "מהשניים הראשונים הוציאו x². מהשניים האחרונים הוציאו 1.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': קבוצה ראשונה היא x³ + x². נוציא את החזקה הנמוכה, x².&rlm;", math_expression: "x²(x + 1)" },
            { verbal_explanation: "שלב ב': הקבוצה השנייה היא x + 1. נוציא 1 כגורם משותף.&rlm;", math_expression: "1(x + 1)" },
            { verbal_explanation: "שלב ג': נרשום יחד. הביטוי המשותף הוא (x+1).&rlm;", math_expression: "x²(x + 1) + 1(x + 1)" },
            { verbal_explanation: "שלב ד': הפירוק הסופי.&rlm;", math_expression: "(x² + 1)(x + 1)" }
        ],
        final_answer: "(x² + 1)(x + 1)"
    },
    // שאלה 44
    {
        topic: "distribution_factoring",
        subTopic: "פירוק לפי קבוצות",
        question_text: "פרקו את הביטוי הבא לפי קבוצות:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2x² + 6x + xy + 3y = ?</div>",
        options: ["(2x + y)(x + 3)", "(2x + 3)(x + y)", "2x(x + 3y)", "(x + 2y)(2x + 3)"],
        correctAnswer: 0,
        hint: "קבוצה 1: הוציאו 2x. קבוצה 2: הוציאו y. בדקו מה נשאר בסוגריים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': מהקבוצה הראשונה (2x² + 6x) אפשר להוציא 2x.&rlm;", math_expression: "2x(x + 3)" },
            { verbal_explanation: "שלב ב': מהקבוצה השנייה (xy + 3y) אפשר להוציא y.&rlm;", math_expression: "y(x + 3)" },
            { verbal_explanation: "שלב ג': יש לנו גורם משותף זהה בשני הצדדים (x+3). נוציא אותו.&rlm;", math_expression: "(2x + y)(x + 3)" }
        ],
        final_answer: "(2x + y)(x + 3)"
    },
    // שאלה 45
    {
        topic: "distribution_factoring",
        subTopic: "פירוק לפי קבוצות",
        question_text: "איזה טריק מחשבתי (הצבה) יכול לעזור לכם לחשב את הערך של: ab + ac + db + dc, כאשר נתון ש- a+d=10 ו- b+c=5?&rlm;",
        options: ["נפרק את הביטוי לקבוצות ונקבל (a+d)(b+c) ולכן התשובה היא 50.", "התשובה היא 15, לפי חיבור הנתונים.", "אי אפשר לחשב בלי לדעת כל משתנה בנפרד.", "התשובה היא 500."],
        correctAnswer: 0,
        hint: "נסו לפרק את הביטוי הארוך הזה לקבוצות (בדיוק כמו שלמדנו).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את הביטוי לקבוצות. מהזוג הראשון נוציא a, מהשני d.&rlm;", math_expression: "a(b + c) + d(b + c)" },
            { verbal_explanation: "שלב ב': עכשיו (b+c) הוא הגורם המשותף.&rlm;", math_expression: "(a + d)(b + c)" },
            { verbal_explanation: "שלב ג': נציב את הנתונים במקום הסוגריים (10 במקום סוגריים ראשונים, 5 בשניים).&rlm;", math_expression: "10 × 5 = 50" }
        ],
        final_answer: "נפרק את הביטוי לקבוצות ונקבל (a+d)(b+c) ולכן התשובה היא 50."
    },
    // שאלה 46
    {
        topic: "distribution_factoring",
        subTopic: "פירוק לפי קבוצות",
        question_text: "קבוצות עם מינוס (שוב אזהרה!): פרקו את הביטוי:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x² - 5x - 4x + 20 = ?</div>",
        options: ["(x - 4)(x - 5)", "(x + 4)(x - 5)", "(x - 4)(x + 5)", "x(x - 5) - 4(x + 5)"],
        correctAnswer: 0,
        hint: "כשאתם מוציאים 4- (מינוס 4) כגורם מהשניים האחרונים, הפלוס של ה-20 מתהפך למינוס (20 לחלק למינוס 4 שווה מינוס 5).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': בקבוצה הראשונה נוציא x.&rlm;", math_expression: "x(x - 5)" },
            { verbal_explanation: "שלב ב': בקבוצה השנייה נוציא 4-. (מינוס 4x חלקי מינוס 4 זה x. ופלוס 20 חלקי מינוס 4 זה מינוס 5).&rlm;", math_expression: "-4(x - 5)" },
            { verbal_explanation: "שלב ג': כעת (x-5) משותף וניתן להוציא אותו.&rlm;", math_expression: "(x - 4)(x - 5)" }
        ],
        final_answer: "(x - 4)(x - 5)"
    },
    // שאלה 47
    {
        topic: "distribution_factoring",
        subTopic: "פירוק לפי קבוצות",
        question_text: "האם הפירוק הבא לפי קבוצות הוא נכון וחוקי מתמטית? (ax + bx) + (ay - by) => x(a+b) + y(a-b). האם ניתן להמשיך מכאן?&rlm;",
        options: ["הפירוק של הזוגות חוקי, אבל אי אפשר להמשיך לפירוק סופי כי הסוגריים לא זהים (a+b לעומת a-b).", "אפשר להמשיך להוציא את (a+b) ולהתעלם מהמינוס.", "הפירוק הראשוני שגוי לחלוטין.", "אפשר להמשיך ל- (x+y)(a)"],
        correctAnswer: 0,
        hint: "כדי לסיים פירוק לפי קבוצות ולהפוך אותו למכפלה אחת גדולה של סוגריים, חובה שהסוגריים שנוצרו בשלב הביניים יהיו 'תאומים זהים'.&rlm;",
        solution_steps: [
            { verbal_explanation: "הוצאת הגורם המשותף הזמני בכל קבוצה בוצעה כהלכה.&rlm;", math_expression: "" },
            { verbal_explanation: "עם זאת, התוצאות (a+b) ו- (a-b) הן ביטויים שונים.&rlm;", math_expression: "" },
            { verbal_explanation: "ללא גורם משותף זהה בשני צידי ה'פלוס', לא ניתן לאסוף אותם לפירוק סופי של מכפלה.&rlm;", math_expression: "" }
        ],
        final_answer: "הפירוק של הזוגות חוקי, אבל אי אפשר להמשיך לפירוק סופי כי הסוגריים לא זהים (a+b לעומת a-b)."
    },
    // שאלה 48
    {
        topic: "distribution_factoring",
        subTopic: "פירוק לפי קבוצות",
        question_text: "שאלת אתגר - פירוק כפול! פרקו את הביטוי לחלוטין:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x³ - x² - 9x + 9 = ?</div>",
        options: ["(x - 1)(x - 3)(x + 3)", "(x² - 9)(x - 1)", "(x - 1)(x - 9)", "(x + 1)(x - 3)²"],
        correctAnswer: 0,
        hint: "עשו קודם פירוק לפי קבוצות (תקבלו שני סוגריים). אחד מהסוגריים שיתקבלו הוא הפרש ריבועים (x²-9)! פרקו גם אותו לפי נוסחת הכפל המקוצר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פירוק לקבוצות. נוציא x² מהראשונים, ומינוס 9 מהאחרונים.&rlm;", math_expression: "x²(x - 1) - 9(x - 1)" },
            { verbal_explanation: "שלב ב': הוצאת הגורם המשותף (x-1).&rlm;", math_expression: "(x² - 9)(x - 1)" },
            { verbal_explanation: "שלב ג': נזהה ש- x² - 9 הוא הפרש ריבועים הניתן לפירוק נוסף.&rlm;", math_expression: "x² - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "שלב ד': נחליף את הביטוי ונקבל פירוק מושלם ל-3 גורמים.&rlm;", math_expression: "(x - 1)(x - 3)(x + 3)" }
        ],
        final_answer: "(x - 1)(x - 3)(x + 3)"
    }

];
// ========================================================================
// שכבת גיל: ה'-ו' | נושא: יחס
// תתי נושאים: הגדרה ותכונות, חלוקה לפי יחס, קנה מידה (36 שאלות)
// ========================================================================

const questionsDB = [

    // ==========================================
    // תת נושא 1: הגדרה ותכונות (12 שאלות)
    // ==========================================
    {
        topic: "ratio",
        subTopic: "הגדרה ותכונות",
        question_text: "במבחן היו 25 שאלות. דן פתר נכון 15 שאלות וטעה ב-10 שאלות. מהו היחס המצומצם בין מספר התשובות הנכונות למספר התשובות השגויות?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 200 60\" width=\"100%\" height=\"60\" style=\"max-width:200px;\"><rect x=\"10\" y=\"10\" width=\"180\" height=\"40\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2\" rx=\"4\"/><line x1=\"80\" y1=\"10\" x2=\"80\" y2=\"50\" stroke=\"#cbd5e1\"/><text x=\"45\" y=\"35\" font-family=\"Arial\" font-size=\"12\" fill=\"#16a34a\" text-anchor=\"middle\">15 V</text><text x=\"135\" y=\"35\" font-family=\"Arial\" font-size=\"12\" fill=\"#dc2626\" text-anchor=\"middle\">10 X</text></svg></div>",
        options: ["3:2", "2:3", "5:2", "3:5"],
        correctAnswer: 0,
        hint: "רשמו את המספרים בסדר המבוקש (נכון משמאל, שגוי מימין) וחלקו את שניהם במספר הגדול ביותר ששניהם מתחלקים בו.&rlm;",
        solution_steps: [
            { verbal_explanation: "היחס הראשוני הוא 15 ל-10.&rlm;", math_expression: "15 : 10" },
            { verbal_explanation: "שני המספרים מתחלקים ב-5 ללא שארית. נצמצם את היחס.&rlm;", math_expression: "15/5 : 10/5 = 3 : 2" }
        ],
        final_answer: "3:2"
    },
    {
        topic: "ratio",
        subTopic: "הגדרה ותכונות",
        question_text: "היחס בין מספר הבנים למספר הבנות בכיתה הוא 4:5. אם בכיתה יש 16 בנים, כמה בנות יש בכיתה?&rlm;",
        options: ["20 בנות", "15 בנות", "25 בנות", "18 בנות"],
        correctAnswer: 0,
        hint: "בדקו פי כמה גדל מספר הבנים מ-4 ל-16 (מקדם ההרחבה). הכפילו את מספר הבנות באותו המקדם.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את מקדם ההרחבה: חלקו את מספר הבנים הנוכחי בחלק היחסי שלהם.&rlm;", math_expression: "16 / 4 = 4" },
            { verbal_explanation: "המספרים גדלו פי 4. נכפיל את החלק של הבנות (5) ב-4.&rlm;", math_expression: "5 * 4 = 20" }
        ],
        final_answer: "20 בנות"
    },
    {
        topic: "ratio",
        subTopic: "הגדרה ותכונות",
        question_text: "האם היחסים 2:7 ו-6:21 הם יחסים שווי ערך?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 200 60\" width=\"100%\" height=\"60\" style=\"max-width:200px;\"><rect x=\"20\" y=\"15\" width=\"160\" height=\"30\" fill=\"#f8fafc\" stroke=\"#3b82f6\" rx=\"5\"/><text x=\"100\" y=\"35\" font-family=\"Arial\" font-size=\"14\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">2:7 = 6:21 ?</text></svg></div>",
        options: ["כן", "לא", "רק אם נחבר 4", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "בדקו האם ניתן להגיע מהיחס הראשון לשני על ידי מכפלה של שני האגפים באותו מספר בדיוק.&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את האגף הראשון: 6 הוא פי 3 מ-2.&rlm;", math_expression: "2 * 3 = 6" },
            { verbal_explanation: "נבדוק את האגף השני: 21 הוא פי 3 מ-7.&rlm;", math_expression: "7 * 3 = 21" },
            { verbal_explanation: "מכיוון ששני הצדדים הוכפלו ב-3, היחסים שווים.&rlm;", math_expression: "" }
        ],
        final_answer: "כן"
    },
    {
        topic: "ratio",
        subTopic: "הגדרה ותכונות",
        question_text: "במרשם להכנת צבע כתום, מערבבים 3 ליטרים של צבע צהוב עם 2 ליטרים של צבע אדום. מהו היחס בין כמות הצבע הצהוב לכמות הצבע *הכוללת* של התערובת?&rlm;",
        options: ["3:5", "3:2", "2:3", "2:5"],
        correctAnswer: 0,
        hint: "שימו לב: השאלה שואלת על היחס בין הצהוב לסך הכל (צהוב + אדום).&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את הכמות הכוללת של התערובת.&rlm;", math_expression: "3 + 2 = 5" },
            { verbal_explanation: "היחס המבוקש הוא בין הצהוב (3) לסה\"כ (5).&rlm;", math_expression: "3 : 5" }
        ],
        final_answer: "3:5"
    },
    {
        topic: "ratio",
        subTopic: "הגדרה ותכונות",
        question_text: "צמצמו את היחס 24:36 לצורה הפשוטה ביותר.&rlm;",
        options: ["2:3", "3:4", "4:6", "12:18"],
        correctAnswer: 0,
        hint: "חפשו את המספר הגדול ביותר שמחלק גם את 24 וגם את 36 (המחלק המשותף המקסימלי הוא 12).&rlm;",
        solution_steps: [
            { verbal_explanation: "נחלק את שני אגפי היחס ב-12.&rlm;", math_expression: "24 / 12 = 2" },
            { verbal_explanation: "36 לחלק ל-12 הם 3. היחס המצומצם הוא 2 ל-3.&rlm;", math_expression: "2 : 3" }
        ],
        final_answer: "2:3"
    },
    {
        topic: "ratio",
        subTopic: "הגדרה ותכונות",
        question_text: "היחס בין אורכי שתי צלעות סמוכות במלבן הוא 3:5. אם הצלע הקצרה היא באורך 9 ס\"מ, מהו אורך הצלע הארוכה?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 200 120\" width=\"100%\" height=\"120\" style=\"max-width:200px;\"><rect x=\"40\" y=\"30\" width=\"120\" height=\"72\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/><text x=\"100\" y=\"20\" font-family=\"Arial\" font-size=\"12\" fill=\"#0369a1\" text-anchor=\"middle\">יחס 5</text><text x=\"20\" y=\"70\" font-family=\"Arial\" font-size=\"12\" fill=\"#0369a1\" text-anchor=\"middle\">3</text></svg></div>",
        options: ["15 ס\"מ", "12 ס\"מ", "18 ס\"מ", "25 ס\"מ"],
        correctAnswer: 0,
        hint: "הצלע הקצרה מיוצגת על ידי '3' ביחס. בדקו פי כמה גדול 9 מ-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את מקדם ההרחבה: הצלע הקצרה גדלה מ-3 ל-9, כלומר פי 3.&rlm;", math_expression: "9 / 3 = 3" },
            { verbal_explanation: "נכפיל את חלק הצלע הארוכה (5) באותו מקדם.&rlm;", math_expression: "5 * 3 = 15" }
        ],
        final_answer: "15 ס\"מ"
    },
    {
        topic: "ratio",
        subTopic: "הגדרה ותכונות",
        question_text: "נתון היחס x:10 = 4:5. מהו ערכו של x?&rlm;",
        options: ["8", "4", "5", "10"],
        correctAnswer: 0,
        hint: "הסתכלו על האגף הימני של היחסים: איך מגיעים מ-5 ל-10? בצעו את אותה פעולה על ה-4.&rlm;",
        solution_steps: [
            { verbal_explanation: "ניתן לראות ש-10 הוא כפול מ-5 (פי 2).&rlm;", math_expression: "10 / 5 = 2" },
            { verbal_explanation: "כדי לשמור על שוויון, נכפיל גם את 4 ב-2.&rlm;", math_expression: "4 * 2 = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "ratio",
        subTopic: "הגדרה ותכונות",
        question_text: "בשקית יש 4 סוכריות לימון ו-12 סוכריות תות. מהו החלק (בשבר) של סוכריות הלימון מכלל הסוכריות בשקית?&rlm;",
        options: ["1/4", "1/3", "4/12", "1/2"],
        correctAnswer: 0,
        hint: "מצאו קודם כמה סוכריות יש בסך הכל בשקית. לאחר מכן כתבו שבר: לימון חלקי סך הכל, וצמצמו אותו.&rlm;",
        solution_steps: [
            { verbal_explanation: "סך כל הסוכריות בשקית הוא 16.&rlm;", math_expression: "4 + 12 = 16" },
            { verbal_explanation: "סוכריות הלימון הן 4 מתוך 16. נרשום כשבר ונצמצם ב-4.&rlm;", math_expression: "4/16 = 1/4" }
        ],
        final_answer: "1/4"
    },
    {
        topic: "ratio",
        subTopic: "הגדרה ותכונות",
        question_text: "היחס בין מספר העפרונות למספר העטים בקלמר הוא 2:1. אם לאורי יש 6 עטים, כמה עפרונות יש לו?&rlm;",
        options: ["12", "3", "8", "6"],
        correctAnswer: 0,
        hint: "היחס אומר שיש פי 2 עפרונות מאשר עטים. אם יש 6 עטים, הכפילו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "היחס הוא 2 עפרונות על כל עט 1. העטים גדלו מ-1 ל-6 (פי 6).&rlm;", math_expression: "1 * 6 = 6" },
            { verbal_explanation: "נכפיל את חלק העפרונות (2) ב-6.&rlm;", math_expression: "2 * 6 = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "ratio",
        subTopic: "הגדרה ותכונות",
        question_text: "איזה מהיחסים הבאים אינו שווה ליחס 1:3?&rlm;",
        options: ["2:5", "3:9", "10:30", "5:15"],
        correctAnswer: 0,
        hint: "בדקו כל אפשרות: האם המספר הימני הוא בדיוק פי 3 מהמספר השמאלי?&rlm;",
        solution_steps: [
            { verbal_explanation: "ביחס 1:3, האגף השני גדול פי 3 מהראשון. ב-3:9 זה מתקיים (3*3=9), ב-10:30 זה מתקיים, ב-5:15 זה מתקיים.&rlm;", math_expression: "" },
            { verbal_explanation: "ביחס 2:5, אם נכפיל 2 פי 3 נקבל 6 ולא 5. לכן יחס זה שונה.&rlm;", math_expression: "2 * 3 = 6 != 5" }
        ],
        final_answer: "2:5"
    },
    {
        topic: "ratio",
        subTopic: "הגדרה ותכונות",
        question_text: "היחס בין כמות המים לכמות התרכיז במיץ הוא 8:2. מהו היחס המצומצם?&rlm;",
        options: ["4:1", "1:4", "2:8", "5:1"],
        correctAnswer: 0,
        hint: "חלקו את שני המספרים ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחלק את 8 ב-2 ונקבל 4. נחלק את 2 ב-2 ונקבל 1.&rlm;", math_expression: "8/2 : 2/2 = 4 : 1" }
        ],
        final_answer: "4:1"
    },
    {
        topic: "ratio",
        subTopic: "הגדרה ותכונות",
        question_text: "בחווה יש 20 כבשים ו-30 עיזים. מהו היחס בין מספר העיזים למספר הכבשים?&rlm;",
        options: ["3:2", "2:3", "20:30", "5:3"],
        correctAnswer: 0,
        hint: "שימו לב לסדר: ביקשו עיזים (30) קודם, ואז כבשים (20).&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום את היחס לפי הסדר המבוקש: 30 ל-20.&rlm;", math_expression: "30 : 20" },
            { verbal_explanation: "נצמצם את שני המספרים ב-10.&rlm;", math_expression: "30/10 : 20/10 = 3 : 2" }
        ],
        final_answer: "3:2"
    },

    // ==========================================
    // תת נושא 2: חלוקה לפי יחס (12 שאלות)
    // ==========================================
    {
        topic: "ratio",
        subTopic: "חלוקה לפי יחס",
        question_text: "שני אחים, אייל ונועם, חילקו ביניהם 150 שקלים לפי היחס 3:2 (אייל קיבל את החלק הגדול). כמה שקלים קיבל אייל?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 250 60\" width=\"100%\" height=\"60\" style=\"max-width:250px;\"><rect x=\"10\" y=\"20\" width=\"90\" height=\"25\" fill=\"#3b82f6\" rx=\"2\"/><rect x=\"105\" y=\"20\" width=\"60\" height=\"25\" fill=\"#94a3b8\" rx=\"2\"/><text x=\"55\" y=\"15\" font-family=\"Arial\" font-size=\"10\" fill=\"#1e293b\" text-anchor=\"middle\">אייל (3)</text><text x=\"135\" y=\"15\" font-family=\"Arial\" font-size=\"10\" fill=\"#1e293b\" text-anchor=\"middle\">נועם (2)</text></svg></div>",
        options: ["90 שקלים", "60 שקלים", "75 שקלים", "100 שקלים"],
        correctAnswer: 0,
        hint: "שלב א': מצאו את סך כל החלקים (3+2). שלב ב': חלקו את הסכום הכולל במספר החלקים כדי למצוא שווי של חלק אחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחבר את חלקי היחס כדי לדעת לכמה יחידות שוות חילקו את הכסף.&rlm;", math_expression: "3 + 2 = 5" },
            { verbal_explanation: "נמצא את הערך של חלק אחד: 150 לחלק ל-5.&rlm;", math_expression: "150 / 5 = 30" },
            { verbal_explanation: "אייל קיבל 3 חלקים, לכן נכפיל 3 ב-30 שקלים.&rlm;", math_expression: "3 * 30 = 90" }
        ],
        final_answer: "90 שקלים"
    },
    {
        topic: "ratio",
        subTopic: "חלוקה לפי יחס",
        question_text: "ערבבו צבע כחול וצבע לבן ביחס של 1:4 (ליטר אחד כחול על כל 4 ליטרים לבן). אם התקבלה תערובת של 20 ליטרים, כמה ליטר צבע כחול יש בה?&rlm;",
        options: ["4 ליטרים", "5 ליטרים", "16 ליטרים", "10 ליטרים"],
        correctAnswer: 0,
        hint: "חברו את חלקי היחס (1+4) וחלקו את הכמות הכוללת (20) במספר שקיבלתם.&rlm;",
        solution_steps: [
            { verbal_explanation: "סך כל החלקים בתערובת הוא 5.&rlm;", math_expression: "1 + 4 = 5" },
            { verbal_explanation: "נחשב כמה ליטרים יש בכל חלק אחד: 20 לחלק ל-5.&rlm;", math_expression: "20 / 5 = 4" },
            { verbal_explanation: "הצבע הכחול הוא בדיוק חלק אחד, לכן יש 4 ליטרים ממנו.&rlm;", math_expression: "" }
        ],
        final_answer: "4 ליטרים"
    },
    {
        topic: "ratio",
        subTopic: "חלוקה לפי יחס",
        question_text: "חלקו חבל באורך 80 ס\"מ לשני קטעים ביחס של 3:7. מהו אורך הקטע הקצר?&rlm;",
        options: ["24 ס\"מ", "56 ס\"מ", "30 ס\"מ", "20 ס\"מ"],
        correctAnswer: 0,
        hint: "חברו את חלקי היחס ומצאו את הערך של יחידה אחת. הקטע הקצר הוא זה שיש לו פחות חלקים (3).&rlm;",
        solution_steps: [
            { verbal_explanation: "סך החלקים הוא 10.&rlm;", math_expression: "3 + 7 = 10" },
            { verbal_explanation: "נמצא אורך של חלק אחד: 80 לחלק ל-10.&rlm;", math_expression: "80 / 10 = 8" },
            { verbal_explanation: "הקטע הקצר הוא בעל 3 חלקים. נכפיל 3 ב-8.&rlm;", math_expression: "3 * 8 = 24" }
        ],
        final_answer: "24 ס\"מ"
    },
    {
        topic: "ratio",
        subTopic: "חלוקה לפי יחס",
        question_text: "במסיבה היו 48 ילדים. היחס בין מספר הבנים למספר הבנות היה 1:1. כמה בנים היו במסיבה?&rlm;",
        options: ["24", "48", "12", "20"],
        correctAnswer: 0,
        hint: "יחס 1:1 אומר שהכמות מחולקת בדיוק לשני חצאים שווים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחבר את חלקי היחס: 1+1=2 חלקים שווים.&rlm;", math_expression: "1 + 1 = 2" },
            { verbal_explanation: "נחלק את סך הילדים ב-2.&rlm;", math_expression: "48 / 2 = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "ratio",
        subTopic: "חלוקה לפי יחס",
        question_text: "סכום של 200 שקלים חולק בין שלוש חברות ביחס של 2:3:5. כמה שקלים קיבלה החברה שקיבלה את הסכום הגבוה ביותר?&rlm;",
        options: ["100 שקלים", "60 שקלים", "40 שקלים", "80 שקלים"],
        correctAnswer: 0,
        hint: "חברו את כל שלושת חלקי היחס (2+3+5) ומצאו את הערך של חלק אחד. לאחר מכן הכפילו ב-5.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את סך החלקים: 2 + 3 + 5.&rlm;", math_expression: "2 + 3 + 5 = 10" },
            { verbal_explanation: "ערך חלק אחד הוא: 200 לחלק ל-10.&rlm;", math_expression: "200 / 10 = 20" },
            { verbal_explanation: "החלק הגדול ביותר הוא 5 חלקים. נכפיל 5 ב-20.&rlm;", math_expression: "5 * 20 = 100" }
        ],
        final_answer: "100 שקלים"
    },
    {
        topic: "ratio",
        subTopic: "חלוקה לפי יחס",
        question_text: "היחס בין הגיל של אבא לגיל של בן הוא 7:2. סכום הגילים שלהם הוא 45. בן כמה האבא?&rlm;",
        options: ["35", "40", "28", "42"],
        correctAnswer: 0,
        hint: "חברו את חלקי היחס (7+2) וחלקו את סכום הגילים (45) במספר שקיבלתם. לאחר מכן הכפילו בחלק של האבא (7).&rlm;",
        solution_steps: [
            { verbal_explanation: "סך החלקים ביחס הוא 9.&rlm;", math_expression: "7 + 2 = 9" },
            { verbal_explanation: "ערך כל חלק בשנים הוא: 45 לחלק ל-9.&rlm;", math_expression: "45 / 9 = 5" },
            { verbal_explanation: "גיל האבא הוא 7 חלקים: 7 כפול 5.&rlm;", math_expression: "7 * 5 = 35" }
        ],
        final_answer: "35"
    },
    {
        topic: "ratio",
        subTopic: "חלוקה לפי יחס",
        question_text: "בסלסילה יש תפוחים ואגסים ביחס של 3:4. ידוע שיש בסלסילה 8 אגסים. כמה פירות יש בסלסילה בסך הכל?&rlm;",
        options: ["14", "12", "16", "7"],
        correctAnswer: 0,
        hint: "הפעם נתון לכם חלק אחד (האגסים שערכם 4 ביחס). בדקו פי כמה גדול 8 מ-4, והשתמשו בזה כדי למצוא את התפוחים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את מקדם ההרחבה: 8 אגסים חלקי 4 חלקים ביחס.&rlm;", math_expression: "8 / 4 = 2" },
            { verbal_explanation: "נמצא את מספר התפוחים: 3 חלקים כפול 2.&rlm;", math_expression: "3 * 2 = 6" },
            { verbal_explanation: "נחבר את התפוחים והאגסים יחד.&rlm;", math_expression: "6 + 8 = 14" }
        ],
        final_answer: "14"
    },
    {
        topic: "ratio",
        subTopic: "חלוקה לפי יחס",
        question_text: "היחס בין מספר הנעליים השחורות למספר הנעליים החומות בחנות הוא 5:3. אם יש 40 זוגות נעליים יותר מהסוג השחור לעומת החום, כמה זוגות נעליים יש בסך הכל בחנות?&rlm;",
        options: ["160", "80", "100", "120"],
        correctAnswer: 0,
        hint: "הפרש החלקים ביחס הוא 2 (5 פחות 3). 2 החלקים האלו שווים ל-40 זוגות. מצאו כמה שווה חלק אחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את הפרש החלקים: 5 - 3 = 2 חלקים.&rlm;", math_expression: "5 - 3 = 2" },
            { verbal_explanation: "נתון שההפרש בכמות הוא 40. לכן 2 חלקים שווים ל-40. חלק אחד שווה ל-20.&rlm;", math_expression: "40 / 2 = 20" },
            { verbal_explanation: "סך כל החלקים הוא 8 (5+3). נכפיל 8 ב-20.&rlm;", math_expression: "8 * 20 = 160" }
        ],
        final_answer: "160"
    },
    {
        topic: "ratio",
        subTopic: "חלוקה לפי יחס",
        question_text: "במנה של דגנים וחלב, היחס בין משקל הדגנים למשקל החלב הוא 1:5. אם משקל המנה כולה הוא 300 גרם, מהו משקל החלב?&rlm;",
        options: ["250 גרם", "50 גרם", "200 גרם", "150 גרם"],
        correctAnswer: 0,
        hint: "חברו את חלקי היחס (1+5=6). חלקו את 300 ב-6 כדי למצוא ערך של חלק אחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "סך החלקים במנה הוא 6.&rlm;", math_expression: "1 + 5 = 6" },
            { verbal_explanation: "נמצא משקל של חלק אחד: 300 לחלק ל-6.&rlm;", math_expression: "300 / 6 = 50" },
            { verbal_explanation: "משקל החלב הוא 5 חלקים. נכפיל 5 ב-50 גרם.&rlm;", math_expression: "5 * 50 = 250" }
        ],
        final_answer: "250 גרם"
    },
    {
        topic: "ratio",
        subTopic: "חלוקה לפי יחס",
        question_text: "היחס בין אורכי הצלעות של משולש הוא 3:4:5. היקף המשולש הוא 60 ס\"מ. מהו אורך הצלע הארוכה ביותר?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 150 100\" width=\"100%\" height=\"100\" style=\"max-width:150px;\"><polygon points=\"20,80 120,80 20,20\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"70\" y=\"95\" font-family=\"Arial\" font-size=\"10\" fill=\"#d97706\" text-anchor=\"middle\">יחס 4</text><text x=\"10\" y=\"50\" font-family=\"Arial\" font-size=\"10\" fill=\"#d97706\" text-anchor=\"middle\">3</text><text x=\"80\" y=\"45\" font-family=\"Arial\" font-size=\"10\" fill=\"#d97706\" text-anchor=\"middle\">5</text></svg></div>",
        options: ["25 ס\"מ", "20 ס\"מ", "15 ס\"מ", "30 ס\"מ"],
        correctAnswer: 0,
        hint: "חברו את כל חלקי היחס (3+4+5). חלקו את ההיקף בסכום שקיבלתם. הצלע הארוכה ביותר היא בעלת 5 חלקים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחבר את חלקי היחס: 3 + 4 + 5 = 12.&rlm;", math_expression: "3 + 4 + 5 = 12" },
            { verbal_explanation: "נמצא את הערך של יחידת יחס אחת: 60 לחלק ל-12.&rlm;", math_expression: "60 / 12 = 5" },
            { verbal_explanation: "הצלע הארוכה היא 5 יחידות: 5 כפול 5.&rlm;", math_expression: "5 * 5 = 25" }
        ],
        final_answer: "25 ס\"מ"
    },
    {
        topic: "ratio",
        subTopic: "חלוקה לפי יחס",
        question_text: "חילקו חבילת דפים בין שני מדפסות ביחס של 1:9. אם המדפסת השנייה קיבלה 450 דפים, כמה דפים היו בחבילה המקורית?&rlm;",
        options: ["500 דפים", "450 דפים", "50 דפים", "100 דפים"],
        correctAnswer: 0,
        hint: "המדפסת השנייה (9 חלקים) קיבלה 450 דפים. מצאו כמה דפים יש בחלק אחד (450 לחלק ל-9) ואז חשבו את הסך הכל (10 חלקים).&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא כמה דפים יש בכל חלק: 450 לחלק ל-9.&rlm;", math_expression: "450 / 9 = 50" },
            { verbal_explanation: "סך כל החלקים הוא 10 (1+9).&rlm;", math_expression: "1 + 9 = 10" },
            { verbal_explanation: "נכפיל 10 חלקים ב-50 דפים לכל חלק.&rlm;", math_expression: "10 * 50 = 500" }
        ],
        final_answer: "500 דפים"
    },
    {
        topic: "ratio",
        subTopic: "חלוקה לפי יחס",
        question_text: "בגן חיות, היחס בין מספר הקופים למספר הפילים הוא 10:2. אם יש 24 חיות כאלו בסך הכל (קופים ופילים), כמה קופים יש בגן?&rlm;",
        options: ["20", "4", "10", "12"],
        correctAnswer: 0,
        hint: "חברו את חלקי היחס (10+2=12). חלקו את 24 ב-12.&rlm;",
        solution_steps: [
            { verbal_explanation: "סך החלקים הוא 12.&rlm;", math_expression: "10 + 2 = 12" },
            { verbal_explanation: "נמצא ערך של חלק אחד: 24 לחלק ל-12.&rlm;", math_expression: "24 / 12 = 2" },
            { verbal_explanation: "מספר הקופים הוא 10 חלקים: 10 כפול 2.&rlm;", math_expression: "10 * 2 = 20" }
        ],
        final_answer: "20"
    },

    // ==========================================
    // תת נושא 3: קנה מידה (12 שאלות)
    // ==========================================
    {
        topic: "ratio",
        subTopic: "קנה מידה",
        question_text: "קנה המידה במפה הוא 1:200,000. מהו המרחק במציאות (בקילומטרים) המיוצג על ידי 5 ס\"מ במפה?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 200 60\" width=\"100%\" height=\"60\" style=\"max-width:200px;\"><rect x=\"10\" y=\"10\" width=\"180\" height=\"40\" fill=\"#fff\" stroke=\"#0f172a\" stroke-width=\"1\"/><path d=\"M 30,30 L 170,30\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4,2\"/><circle cx=\"30\" cy=\"30\" r=\"3\" fill=\"#ef4444\"/><circle cx=\"170\" cy=\"30\" r=\"3\" fill=\"#ef4444\"/><text x=\"100\" y=\"25\" font-family=\"Arial\" font-size=\"10\" fill=\"#0f172a\" text-anchor=\"middle\">5 ס\"מ במפה</text></svg></div>",
        options: ["10 ק\"מ", "1 ק\"מ", "20 ק\"מ", "100 ק\"מ"],
        correctAnswer: 0,
        hint: "הכפילו את המרחק במפה ב-200,000 כדי לקבל סנטימטרים במציאות. לאחר מכן, זכרו ש-100,000 ס\"מ הם בדיוק 1 קילומטר.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפיל את המרחק במפה ביחס המציאות.&rlm;", math_expression: "5 * 200,000 = 1,000,000" },
            { verbal_explanation: "התוצאה היא 1,000,000 ס\"מ. נמיר לקילומטרים על ידי חלוקה ב-100,000.&rlm;", math_expression: "1,000,000 / 100,000 = 10" }
        ],
        final_answer: "10 ק\"מ"
    },
    {
        topic: "ratio",
        subTopic: "קנה מידה",
        question_text: "אורך של חדר במציאות הוא 6 מטרים (600 ס\"מ). בשרטוט בקנה מידה של 1:50, מה יהיה אורך החדר בסנטימטרים?&rlm;",
        options: ["12 ס\"מ", "6 ס\"מ", "10 ס\"מ", "15 ס\"מ"],
        correctAnswer: 0,
        hint: "כדי לעבור ממציאות לשרטוט (הקטנה), עלינו לחלק את המידה האמיתית בסנטימטרים ביחס של קנה המידה.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמיר את המטרים לסנטימטרים: 6 מטרים הם 600 ס\"מ.&rlm;", math_expression: "6 * 100 = 600" },
            { verbal_explanation: "נחלק את המידה האמיתית ב-50.&rlm;", math_expression: "600 / 50 = 12" }
        ],
        final_answer: "12 ס\"מ"
    },
    {
        topic: "ratio",
        subTopic: "קנה מידה",
        question_text: "קנה המידה של דגם מטוס הוא 1:72. אם אורך כנף המטוס בדגם הוא 10 ס\"מ, מהו אורך הכנף האמיתי בסנטימטרים?&rlm;",
        options: ["720 ס\"מ", "7.2 ס\"מ", "72 ס\"מ", "172 ס\"מ"],
        correctAnswer: 0,
        hint: "קנה המידה אומר שכל סנטימטר בדגם שווה ל-72 סנטימטרים במציאות.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפיל את אורך הדגם ביחס המציאות.&rlm;", math_expression: "10 * 72 = 720" }
        ],
        final_answer: "720 ס\"מ"
    },
    {
        topic: "ratio",
        subTopic: "קנה מידה",
        question_text: "מרחק בין שתי ערים הוא 150 ק\"מ. במפה המרחק ביניהן הוא 3 ס\"מ. מהו קנה המידה של המפה?&rlm;",
        options: ["1:5,000,000", "1:50,000", "1:150,000", "1:500,000"],
        correctAnswer: 0,
        hint: "המירו קודם את הקילומטרים לסנטימטרים (הוסיפו 5 אפסים). לאחר מכן רשמו את היחס: 3 מול המרחק בס\"מ, וצמצמו ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמיר 150 ק\"מ לס\"מ: 15,000,000 ס\"מ.&rlm;", math_expression: "150 * 100,000 = 15,000,000" },
            { verbal_explanation: "נרשום את היחס: 3 ל-15,000,000. נצמצם את שני הצדדים ב-3.&rlm;", math_expression: "3/3 : 15,000,000/3 = 1 : 5,000,000" }
        ],
        final_answer: "1:5,000,000"
    },
    {
        topic: "ratio",
        subTopic: "קנה מידה",
        question_text: "אורך של נמלה בשרטוט הוא 4 ס\"מ. קנה המידה של השרטוט הוא 2:1 (הגדלה). מהו אורכה האמיתי של הנמלה?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 100 60\" width=\"100%\" height=\"60\" style=\"max-width:100px;\"><circle cx=\"30\" cy=\"30\" r=\"10\" fill=\"#1e293b\"/><circle cx=\"50\" cy=\"30\" r=\"10\" fill=\"#1e293b\"/><circle cx=\"70\" cy=\"30\" r=\"10\" fill=\"#1e293b\"/><line x1=\"75\" y1=\"25\" x2=\"85\" y2=\"15\" stroke=\"#1e293b\"/><line x1=\"75\" y1=\"35\" x2=\"85\" y2=\"45\" stroke=\"#1e293b\"/></svg></div>",
        options: ["2 ס\"מ", "8 ס\"מ", "4 ס\"מ", "1 ס\"מ"],
        correctAnswer: 0,
        hint: "שימו לב: הפעם זה קנה מידה של הגדלה. השרטוט גדול פי 2 מהמציאות. לכן עליכם לחלק את מידת השרטוט ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "בקנה מידה של הגדלה (כמו 2:1), המספר השמאלי מייצג את השרטוט. השרטוט גדול פי 2 מהמציאות.&rlm;", math_expression: "" },
            { verbal_explanation: "נחלק את אורך השרטוט (4) ב-2 כדי למצוא את האורך האמיתי.&rlm;", math_expression: "4 / 2 = 2" }
        ],
        final_answer: "2 ס\"מ"
    },
    {
        topic: "ratio",
        subTopic: "קנה מידה",
        question_text: "במפה שקנה המידה שלה הוא 1:10,000, אורך של פארק הוא 8 ס\"מ. מהו אורך הפארק במציאות במטרים?&rlm;",
        options: ["800 מטרים", "8,000 מטרים", "80 מטרים", "80,000 מטרים"],
        correctAnswer: 0,
        hint: "הכפילו את המרחק במפה ביחס (10,000) כדי לקבל סנטימטרים. לאחר מכן חלקו ב-100 כדי לעבור למטרים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את המרחק בסנטימטרים במציאות.&rlm;", math_expression: "8 * 10,000 = 80,000" },
            { verbal_explanation: "נמיר סנטימטרים למטרים (100 ס\"מ = 1 מטר). נחלק ב-100.&rlm;", math_expression: "80,000 / 100 = 800" }
        ],
        final_answer: "800 מטרים"
    },
    {
        topic: "ratio",
        subTopic: "קנה מידה",
        question_text: "גובה של אדם הוא 180 ס\"מ. באיזה אורך הוא יופיע בתמונה שצולמה בקנה מידה של 1:20?&rlm;",
        options: ["9 ס\"מ", "18 ס\"מ", "20 ס\"מ", "6 ס\"מ"],
        correctAnswer: 0,
        hint: "חלקו את הגובה האמיתי ביחס של קנה המידה.&rlm;",
        solution_steps: [
            { verbal_explanation: "התמונה היא הקטנה של המציאות פי 20. לכן נחלק את ה-180 ב-20.&rlm;", math_expression: "180 / 20 = 9" }
        ],
        final_answer: "9 ס\"מ"
    },
    {
        topic: "ratio",
        subTopic: "קנה מידה",
        question_text: "מה המשמעות של קנה מידה 1:1?&rlm;",
        options: ["השרטוט והמציאות שווים בגודלם", "השרטוט גדול פי 100 מהמציאות", "השרטוט קטן פי 100 מהמציאות", "אין אפשרות כזו"],
        correctAnswer: 0,
        hint: "יחס של 1 ל-1 אומר שעל כל יחידה אחת בשרטוט, יש בדיוק יחידה אחת זהה במציאות.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר היחס הוא 1:1, מדובר בהעתק מדויק בגודל המקורי.&rlm;", math_expression: "" }
        ],
        final_answer: "השרטוט והמציאות שווים בגודלם"
    },
    {
        topic: "ratio",
        subTopic: "קנה מידה",
        question_text: "במפה בקנה מידה של 1:500,000, המרחק בין שתי ערים הוא 6 ס\"מ. מהו המרחק האמיתי ביניהן בקילומטרים?&rlm;",
        options: ["30 ק\"מ", "300 ק\"מ", "5 ק\"מ", "60 ק\"מ"],
        correctAnswer: 0,
        hint: "הכפילו 6 ב-500,000 וחלקו ב-100,000 כדי להפוך לקילומטרים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את המרחק בס\"מ: 6 כפול 500,000.&rlm;", math_expression: "6 * 500,000 = 3,000,000" },
            { verbal_explanation: "נמיר לקילומטרים על ידי הורדת 5 אפסים.&rlm;", math_expression: "3,000,000 / 100,000 = 30" }
        ],
        final_answer: "30 ק\"מ"
    },
    {
        topic: "ratio",
        subTopic: "קנה מידה",
        question_text: "מרחק של 10 מטרים (1000 ס\"מ) במציאות מיוצג על ידי 10 ס\"מ בשרטוט. מהו קנה המידה?&rlm;",
        options: ["1:100", "1:10", "1:1000", "1:50"],
        correctAnswer: 0,
        hint: "רשמו את היחס 10 ל-1000 וצמצמו אותו כך שבאגף השמאלי יהיה 1.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום את היחס: 10 ס\"מ בשרטוט מול 1000 ס\"מ במציאות.&rlm;", math_expression: "10 : 1000" },
            { verbal_explanation: "נצמצם את שני הצדדים ב-10.&rlm;", math_expression: "1 : 100" }
        ],
        final_answer: "1:100"
    },
    {
        topic: "ratio",
        subTopic: "קנה מידה",
        question_text: "בשרטוט של בניין בקנה מידה 1:100, גובה הדלת הוא 2 ס\"מ. מהו גובה הדלת האמיתי במטרים?&rlm;",
        options: ["2 מטרים", "20 מטרים", "0.2 מטרים", "1 מטר"],
        correctAnswer: 0,
        hint: "הכפילו את גובה הדגם (2) ביחס (100) ואז הפכו למטרים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את הגובה בס\"מ: 2 כפול 100.&rlm;", math_expression: "2 * 100 = 200" },
            { verbal_explanation: "נמיר למטרים: 200 ס\"מ הם בדיוק 2 מטרים.&rlm;", math_expression: "200 / 100 = 2" }
        ],
        final_answer: "2 מטרים"
    },
    {
        topic: "ratio",
        subTopic: "קנה מידה",
        question_text: "אורך של מגרש כדורגל הוא 100 מטרים. באיזה אורך הוא יופיע במפה שקנה המידה שלה הוא 1:2,500?&rlm;",
        options: ["4 ס\"מ", "2.5 ס\"מ", "40 ס\"מ", "10 ס\"מ"],
        correctAnswer: 0,
        hint: "המירו 100 מטרים לסנטימטרים (10,000 ס\"מ) ואז חלקו ביחס של 2,500.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמיר מטרים לסנטימטרים: 100 מטרים הם 10,000 ס\"מ.&rlm;", math_expression: "100 * 100 = 10,000" },
            { verbal_explanation: "נחלק את המידה האמיתית ביחס המפה.&rlm;", math_expression: "10,000 / 2,500 = 4" }
        ],
        final_answer: "4 ס\"מ"
    }
];
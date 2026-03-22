// ========================================================================
// שכבת גיל: כיתה ז' | נושא: חוקי פעולות החשבון
// 3 תתי נושאים | 36 שאלות סה"כ
// פתרונות מפורטים בשלבים. 
// כתיבה בטוחה: חילוק מוצג כ- (:) בלבד! כפל כ- (×), שברים כ- (1/2), חזקות כ- (²).
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: חוק החילוף והקיבוץ (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "arithmetic_laws",
        subTopic: "חוק החילוף והקיבוץ",
        question_text: "איזה חוק מתמטי בא לידי ביטוי בשוויון הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>17 + 45 = 45 + 17</div>",
        options: ["חוק החילוף בחיבור", "חוק הקיבוץ בחיבור", "חוק הפילוג", "חוק החילוף בכפל"],
        correctAnswer: 0,
        hint: "שימו לב שהמספרים רק החליפו מקומות (הראשון הפך לשני והשני לראשון), ופעולת החשבון היא חיבור.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר אנו משנים את סדר המספרים בתרגיל חיבור והתוצאה נשארת זהה, אנו משתמשים בחוק החילוף.&rlm;", math_expression: "a + b = b + a" }
        ],
        final_answer: "חוק החילוף בחיבור"
    },
    // שאלה 2
    {
        topic: "arithmetic_laws",
        subTopic: "חוק החילוף והקיבוץ",
        question_text: "כיצד חוק הקיבוץ יכול לעזור לנו לפתור את התרגיל הבא בעל פה ובקלות?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>23 + (77 + 45) = ?</div>",
        options: ["נחבר קודם את 23 ו-77, שנותנים 100, ונוסיף 45", "נחבר קודם את 77 ו-45", "נכפול 23 ב-77", "נחסר 23 מ-77"],
        correctAnswer: 0,
        hint: "חוק הקיבוץ מאפשר לנו להזיז את הסוגריים ולחבר קודם מספרים שמשלימים לעשרות או מאות שלמות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': לפי חוק הקיבוץ, מותר לשנות את מיקום הסוגריים בתרגיל שכולו חיבור.&rlm;", math_expression: "23 + (77 + 45) = (23 + 77) + 45" },
            { verbal_explanation: "שלב ב': נחבר את 23 ו-77, כי הם משלימים למאה עגולה בקלות.&rlm;", math_expression: "23 + 77 = 100" },
            { verbal_explanation: "שלב ג': כעת נוסיף את ה-45.&rlm;", math_expression: "100 + 45 = 145" }
        ],
        final_answer: "נחבר קודם את 23 ו-77, שנותנים 100, ונוסיף 45"
    },
    // שאלה 3
    {
        topic: "arithmetic_laws",
        subTopic: "חוק החילוף והקיבוץ",
        question_text: "באילו מפעולות החשבון הבאות מתקיים חוק החילוף תמיד?&rlm;",
        options: ["חיבור וכפל", "חיסור וחילוק", "כפל וחילוק", "חיבור וחיסור"],
        correctAnswer: 0,
        hint: "נסו להציב מספרים. האם 5 פחות 2 שווה ל-2 פחות 5? לא. האם 5 ועוד 2 שווה ל-2 ועוד 5? כן.&rlm;",
        solution_steps: [
            { verbal_explanation: "בחיבור: סדר המספרים אינו משנה את התוצאה.&rlm;", math_expression: "3 + 4 = 4 + 3 = 7" },
            { verbal_explanation: "בכפל: סדר המספרים אינו משנה את התוצאה.&rlm;", math_expression: "3 × 4 = 4 × 3 = 12" },
            { verbal_explanation: "בחיסור וחילוק חוק החילוף אינו מתקיים (למשל, 10 : 2 אינו שווה ל- 2 : 10).&rlm;", math_expression: "10 : 2 = 5 , 2 : 10 = 0.2" }
        ],
        final_answer: "חיבור וכפל"
    },
    // שאלה 4
    {
        topic: "arithmetic_laws",
        subTopic: "חוק החילוף והקיבוץ",
        question_text: "איזה תרגיל שקול לתרגיל הבא, לפי חוק הקיבוץ בכפל?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4 × (25 × 13)</div>",
        options: ["(4 × 25) × 13", "(4 × 13) + 25", "4 + 25 + 13", "4 × 25 + 4 × 13"],
        correctAnswer: 0,
        hint: "חוק הקיבוץ מאפשר לנו 'לקבץ' (לשנות את מיקום הסוגריים) סביב גורמים שונים בכפל כדי להקל על החישוב.&rlm;",
        solution_steps: [
            { verbal_explanation: "חוק הקיבוץ בכפל אומר שמותר להזיז סוגריים בתרגיל שכולו כפל.&rlm;", math_expression: "a × (b × c) = (a × b) × c" },
            { verbal_explanation: "כאן, עדיף להכפיל קודם 4 ב-25 (ששווה 100), ואז להכפיל ב-13. התוצאה תהיה 1300.&rlm;", math_expression: "(4 × 25) × 13" }
        ],
        final_answer: "(4 × 25) × 13"
    },
    // שאלה 5
    {
        topic: "arithmetic_laws",
        subTopic: "חוק החילוף והקיבוץ",
        question_text: "חשבו את התרגיל הבא בעל פה בעזרת חוקי החילוף והקיבוץ:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2 × 17 × 50 = ?</div>",
        options: ["1700", "1750", "850", "100"],
        correctAnswer: 0,
        hint: "החליפו מקומות (חוק החילוף) בין 17 ל-50, ואז קבצו את 2 ו-50 יחד. כמה זה 2 כפול 50?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נשנה את סדר הגורמים בעזרת חוק החילוף כדי לקרב את המספרים שנוח לכפול.&rlm;", math_expression: "17 × 2 × 50" },
            { verbal_explanation: "שלב ב': נקבץ את 2 ו-50 ונכפול אותם קודם.&rlm;", math_expression: "17 × (2 × 50)" },
            { verbal_explanation: "שלב ג': נפתור בתוך הסוגריים (100) ונכפול ב-17.&rlm;", math_expression: "17 × 100 = 1700" }
        ],
        final_answer: "1700"
    },
    // שאלה 6
    {
        topic: "arithmetic_laws",
        subTopic: "חוק החילוף והקיבוץ",
        question_text: "איזה מהשוויונות הבאים הוא **שגוי** (אינו נכון)?&rlm;",
        options: ["10 : 2 = 2 : 10", "5 × 8 = 8 × 5", "10 + 2 = 2 + 10", "(3 × 4) × 2 = 3 × (4 × 2)"],
        correctAnswer: 0,
        hint: "זכרו: חוק החילוף עובד בחיבור ובכפל, אבל אינו עובד בחילוק ובחיסור!&rlm;",
        solution_steps: [
            { verbal_explanation: "חוק החילוף פועל בחיבור ובכפל.&rlm;", math_expression: "" },
            { verbal_explanation: "נבדוק את החילוק: 10 לחלק ל-2 שווה 5.&rlm;", math_expression: "10 : 2 = 5" },
            { verbal_explanation: "לעומת זאת, 2 לחלק ל-10 שווה 0.2 (חמישית).&rlm;", math_expression: "2 : 10 = 0.2" },
            { verbal_explanation: "מכאן שהמשוואה של החילוק שגויה.&rlm;", math_expression: "5 ≠ 0.2" }
        ],
        final_answer: "10 : 2 = 2 : 10"
    },
    // שאלה 7
    {
        topic: "arithmetic_laws",
        subTopic: "חוק החילוף והקיבוץ",
        question_text: "השתמשו בחוקי החשבון כדי לפתור את התרגיל בקלות:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>14 + 38 + 86 = ?</div>",
        options: ["138", "128", "148", "114"],
        correctAnswer: 0,
        hint: "חפשו שני מספרים שספרת האחדות שלהם משלימה ל-10 (המספרים 4 ו-6). חברו אותם קודם!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נשנה סדר ונקבץ את 14 ו-86 יחד.&rlm;", math_expression: "(14 + 86) + 38" },
            { verbal_explanation: "שלב ב': 14 ועוד 86 הם בדיוק 100.&rlm;", math_expression: "100 + 38" },
            { verbal_explanation: "שלב ג': נחבר 100 ו-38 ונקבל 138.&rlm;", math_expression: "138" }
        ],
        final_answer: "138"
    },
    // שאלה 8
    {
        topic: "arithmetic_laws",
        subTopic: "חוק החילוף והקיבוץ",
        question_text: "השלימו את המספר החסר בעזרת חוק הקיבוץ:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(12 × 5) × ? = 12 × (5 × 7)</div>",
        options: ["7", "12", "5", "60"],
        correctAnswer: 0,
        hint: "בשני האגפים צריכים להיות בדיוק אותם גורמים בכפל, רק שהסוגריים מוקמו אחרת.&rlm;",
        solution_steps: [
            { verbal_explanation: "באגף ימין הגורמים הם 12, 5 ו-7.&rlm;", math_expression: "" },
            { verbal_explanation: "באגף שמאל הגורמים הם 12, 5 ומספר חסר.&rlm;", math_expression: "" },
            { verbal_explanation: "על מנת שיתקיים חוק הקיבוץ (הזזת סוגריים בלבד), המספר החסר חייב להיות 7.&rlm;", math_expression: "" }
        ],
        final_answer: "7"
    },
    // שאלה 9
    {
        topic: "arithmetic_laws",
        subTopic: "חוק החילוף והקיבוץ",
        question_text: "חשבו את המכפלה בעזרת חוק החילוף (כדי להקל על החישוב):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.5 × 13 × 2 = ?</div>",
        options: ["13", "26", "6.5", "13.5"],
        correctAnswer: 0,
        hint: "החליפו מקומות והכפילו קודם את 0.5 (חצי) ב-2. כמה זה חצי כפול 2?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נשנה סדר ונקבץ: חצי כפול 2 קודם.&rlm;", math_expression: "(0.5 × 2) × 13" },
            { verbal_explanation: "שלב ב': 0.5 כפול 2 נותן שלם אחד (1).&rlm;", math_expression: "1 × 13" },
            { verbal_explanation: "שלב ג': 1 כפול 13 שווה ל-13.&rlm;", math_expression: "13" }
        ],
        final_answer: "13"
    },
    // שאלה 10
    {
        topic: "arithmetic_laws",
        subTopic: "חוק החילוף והקיבוץ",
        question_text: "האם המשוואה הבאה נכונה? מדוע?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(a + b) + c = a + (c + b)</div>",
        options: ["נכונה, שילוב של חוק החילוף וחוק הקיבוץ", "לא נכונה, כי האותיות שונות", "נכונה רק אם כל האותיות שוות ל-0", "לא נכונה, אי אפשר להזיז את b"],
        correctAnswer: 0,
        hint: "שימו לב: גם הסוגריים זזו (קיבוץ) וגם האותיות b ו-c החליפו מקומות (חילוף).&rlm;",
        solution_steps: [
            { verbal_explanation: "באגף שמאל, קובצו תחילה a ו-b.&rlm;", math_expression: "" },
            { verbal_explanation: "באגף ימין, הופעלו שתי פעולות: קובצו a עם הסוגריים החדשים, ובנוסף c ו-b החליפו מקום בתוך הסוגריים.&rlm;", math_expression: "" },
            { verbal_explanation: "בחיבור הכל מותר וזה תמיד שומר על השוויון.&rlm;", math_expression: "" }
        ],
        final_answer: "נכונה, שילוב של חוק החילוף וחוק הקיבוץ"
    },
    // שאלה 11
    {
        topic: "arithmetic_laws",
        subTopic: "חוק החילוף והקיבוץ",
        question_text: "במוכר הירקות סידר ארגזים: 4 שורות, בכל שורה 5 ארגזים, ובכל ארגז 10 תפוחים. איזה תרגיל משקף את הדרך המהירה ביותר לחשב את סך התפוחים בעזרת חוק הקיבוץ?&rlm;",
        options: ["(4 × 5) × 10", "(4 × 10) × 5", "4 + 5 + 10", "(5 × 10) + 4"],
        correctAnswer: 0,
        hint: "4 כפול 5 זה 20. 20 כפול 10 זה מאוד קל לחישוב בראש (מוסיפים אפס)!&rlm;",
        solution_steps: [
            { verbal_explanation: "התרגיל הכללי הוא מכפלת השורות, הארגזים והתפוחים.&rlm;", math_expression: "4 × 5 × 10" },
            { verbal_explanation: "לפי חוק הקיבוץ, קל יותר לכפול קודם 4 ב-5 לקבלת 20 עגול.&rlm;", math_expression: "(4 × 5) × 10 = 20 × 10" },
            { verbal_explanation: "20 כפול 10 שווה 200 תפוחים.&rlm;", math_expression: "200" }
        ],
        final_answer: "(4 × 5) × 10"
    },
    // שאלה 12
    {
        topic: "arithmetic_laws",
        subTopic: "חוק החילוף והקיבוץ",
        question_text: "חשבו במדויק וביעילות (שימוש בשברים עשרוניים במקום שברים פשוטים כדי להקל):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2.25 + 5.5 + 0.75 = ?</div>",
        options: ["8.5", "8.75", "9", "7.5"],
        correctAnswer: 0,
        hint: "חברו קודם את המספרים שמשלימים לשלם: 2.25 (שניים ורבע) יחד עם 0.75 (שלושה רבעים).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נשנה סדר ונקבץ את השברים שמשלימים לשלם נוח.&rlm;", math_expression: "(2.25 + 0.75) + 5.5" },
            { verbal_explanation: "שלב ב': 2.25 ועוד 0.75 הם בדיוק 3 שלמים.&rlm;", math_expression: "3 + 5.5" },
            { verbal_explanation: "שלב ג': נחבר 3 ל-5.5 ונקבל 8 וחצי.&rlm;", math_expression: "8.5" }
        ],
        final_answer: "8.5"
    },

    // ==========================================================
    // תת נושא 2: חוק הפילוג (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "arithmetic_laws",
        subTopic: "חוק הפילוג",
        question_text: "פתחו את הסוגריים בעזרת חוק הפילוג:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3 × (x + 5) = ?</div>",
        options: ["3x + 15", "3x + 5", "x + 15", "8x"],
        correctAnswer: 0,
        hint: "יש לכפול את ה-3 הנמצא מחוץ לסוגריים בכל אחד מהאיברים שבתוך הסוגריים (גם ב-x וגם ב-5).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את 3 ב-x.&rlm;", math_expression: "3 × x = 3x" },
            { verbal_explanation: "שלב ב': נכפול את 3 ב-5.&rlm;", math_expression: "3 × 5 = 15" },
            { verbal_explanation: "שלב ג': נרשום את התוצאה כמחרוזת של איברים מחוברים.&rlm;", math_expression: "3x + 15" }
        ],
        final_answer: "3x + 15"
    },
    // שאלה 14
    {
        topic: "arithmetic_laws",
        subTopic: "חוק הפילוג",
        question_text: "חשבו את התרגיל הבא בדרך הקלה ביותר בעזרת חוק הפילוג:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>7 × 102 = ?</div>",
        options: ["714", "702", "712", "804"],
        correctAnswer: 0,
        hint: "פרקו את 102 ל- (100 + 2) וכפלו את 7 בכל חלק בנפרד.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכתוב את 102 כסכום נוח לחישוב בתוך סוגריים.&rlm;", math_expression: "7 × (100 + 2)" },
            { verbal_explanation: "שלב ב': נכפול 7 ב-100 וגם 7 ב-2.&rlm;", math_expression: "700 + 14" },
            { verbal_explanation: "שלב ג': נחבר ונקבל 714.&rlm;", math_expression: "714" }
        ],
        final_answer: "714"
    },
    // שאלה 15
    {
        topic: "arithmetic_laws",
        subTopic: "חוק הפילוג",
        question_text: "חוק הפילוג ה'הפוך' (הוצאת גורם משותף). כנסו איברים בביטוי:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5x + 15 = ?</div>",
        options: ["5(x + 3)", "5(x + 15)", "15x", "x(5 + 15)"],
        correctAnswer: 0,
        hint: "מהו המספר הגדול ביותר שמחלק גם את 5 וגם את 15? זהו המספר שייצא מחוץ לסוגריים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה את הגורם המשותף המקסימלי ל-5 ול-15, שהוא 5.&rlm;", math_expression: "5 × x + 5 × 3" },
            { verbal_explanation: "שלב ב': נרשום את ה-5 מחוץ לסוגריים, ונכניס את 'מה שנשאר' לתוך הסוגריים.&rlm;", math_expression: "5(x + 3)" }
        ],
        final_answer: "5(x + 3)"
    },
    // שאלה 16
    {
        topic: "arithmetic_laws",
        subTopic: "חוק הפילוג",
        question_text: "פשטו את הביטוי על ידי כינוס איברים דומים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4a + 7 + 2a - 3 = ?</div>",
        options: ["6a + 4", "11a - 3", "6a - 4", "10a"],
        correctAnswer: 0,
        hint: "חברו את כל האיברים עם האות a בנפרד, ואת המספרים החופשיים בנפרד.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחבר את איברי ה-a: 4 פעמים a ועוד 2 פעמים a.&rlm;", math_expression: "4a + 2a = 6a" },
            { verbal_explanation: "שלב ב': נחשב את המספרים החופשיים: 7 פחות 3.&rlm;", math_expression: "7 - 3 = 4" },
            { verbal_explanation: "שלב ג': נחבר את התוצאות לביטוי אחד פשוט.&rlm;", math_expression: "6a + 4" }
        ],
        final_answer: "6a + 4"
    },
    // שאלה 17
    {
        topic: "arithmetic_laws",
        subTopic: "חוק הפילוג",
        question_text: "איך נחשב 8 × 99 בעזרת חוק הפילוג (עם חיסור)?&rlm;",
        options: ["8 × (100 - 1) = 800 - 8 = 792", "8 × 90 + 9 = 729", "8 × 100 - 1 = 799", "800 - 99 = 701"],
        correctAnswer: 0,
        hint: "99 קרוב מאוד ל-100. נוכל לכתוב אותו בתוך סוגריים כ- (100 פחות 1).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציג את 99 כהפרש מ-100 בסוגריים.&rlm;", math_expression: "8 × (100 - 1)" },
            { verbal_explanation: "שלב ב': נכפול 8 ב-100, ונחסר 8 כפול 1.&rlm;", math_expression: "800 - 8" },
            { verbal_explanation: "שלב ג': התוצאה היא 792.&rlm;", math_expression: "792" }
        ],
        final_answer: "8 × (100 - 1) = 800 - 8 = 792"
    },
    // שאלה 18
    {
        topic: "arithmetic_laws",
        subTopic: "חוק הפילוג",
        question_text: "שימו לב לסימנים השליליים! פתחו את הסוגריים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-2 × (x + 4) = ?</div>",
        options: ["-2x - 8", "-2x + 8", "2x - 8", "-2x + 4"],
        correctAnswer: 0,
        hint: "מינוס כפול פלוס שווה למינוס. לכן, מינוס 2 כפול פלוס 4 שווה למינוס 8.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול 2- באיבר הראשון (x).&rlm;", math_expression: "-2 × x = -2x" },
            { verbal_explanation: "שלב ב': נכפול 2- באיבר השני (+4).&rlm;", math_expression: "-2 × 4 = -8" },
            { verbal_explanation: "שלב ג': נרשום את התוצאה הסופית.&rlm;", math_expression: "-2x - 8" }
        ],
        final_answer: "-2x - 8"
    },
    // שאלה 19
    {
        topic: "arithmetic_laws",
        subTopic: "חוק הפילוג",
        question_text: "מהו הגורם המשותף הגדול ביותר שניתן להוציא מהביטוי 12x + 18y ?&rlm;",
        options: ["6", "2", "3", "12"],
        correctAnswer: 0,
        hint: "חפשו את המספר הגדול ביותר שמחלק ללא שארית גם את 12 וגם את 18.&rlm;",
        solution_steps: [
            { verbal_explanation: "המחלקים של 12 הם 1, 2, 3, 4, 6, 12.&rlm;", math_expression: "" },
            { verbal_explanation: "המחלקים של 18 הם 1, 2, 3, 6, 9, 18.&rlm;", math_expression: "" },
            { verbal_explanation: "המחלק המשותף הגדול ביותר של שניהם הוא 6.&rlm;", math_expression: "6 × (2x + 3y)" }
        ],
        final_answer: "6"
    },
    // שאלה 20
    {
        topic: "arithmetic_laws",
        subTopic: "חוק הפילוג",
        question_text: "פשטו את הביטוי הבא (פתיחת סוגריים וכינוס):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5(x + 2) + 3(x - 1) = ?</div>",
        options: ["8x + 7", "8x + 1", "8x + 9", "15x"],
        correctAnswer: 0,
        hint: "פתחו קודם את שני זוגות הסוגריים בנפרד לפי חוק הפילוג, ואז כנסו איברים דומים (x עם x, מספרים עם מספרים).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח את הסוגריים הראשונים.&rlm;", math_expression: "5x + 10" },
            { verbal_explanation: "שלב ב': נפתח את הסוגריים השניים.&rlm;", math_expression: "3x - 3" },
            { verbal_explanation: "שלב ג': נחבר איברי x בנפרד ומספרים בנפרד: (5x+3x) וגם (10-3).&rlm;", math_expression: "8x + 7" }
        ],
        final_answer: "8x + 7"
    },
    // שאלה 21
    {
        topic: "arithmetic_laws",
        subTopic: "חוק הפילוג",
        question_text: "חשבו בדרך חכמה (חוק הפילוג הפוך / הוצאת גורם משותף):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>13 × 17 + 13 × 3 = ?</div>",
        options: ["260", "130", "200", "221"],
        correctAnswer: 0,
        hint: "הוציאו את 13 כגורם משותף מחוץ לסוגריים (17 + 3).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה ש-13 מוכפל בשני האיברים. נוציא אותו כגורם משותף.&rlm;", math_expression: "13 × (17 + 3)" },
            { verbal_explanation: "שלב ב': נחשב את הסוגריים: 17 ועוד 3 שווה 20.&rlm;", math_expression: "13 × 20" },
            { verbal_explanation: "שלב ג': מכפלה פשוטה: 13 כפול 2 זה 26, בתוספת אפס זה 260.&rlm;", math_expression: "260" }
        ],
        final_answer: "260"
    },
    // שאלה 22
    {
        topic: "arithmetic_laws",
        subTopic: "חוק הפילוג",
        question_text: "פשטו את הביטוי: 10x - 2(3x + 1) = ?&rlm;",
        options: ["4x - 2", "4x + 2", "7x - 2", "10x - 6x + 1"],
        correctAnswer: 0,
        hint: "שימו לב: אתם מכפילים ב- (2-). המינוס משפיע על כל מה שבתוך הסוגריים!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח סוגריים. מינוס 2 כפול 3x הם מינוס 6x. ומינוס 2 כפול פלוס 1 הם מינוס 2.&rlm;", math_expression: "10x - 6x - 2" },
            { verbal_explanation: "שלב ב': נחסר איברי x: עשר פחות שש הם 4.&rlm;", math_expression: "4x - 2" }
        ],
        final_answer: "4x - 2"
    },
    // שאלה 23
    {
        topic: "arithmetic_laws",
        subTopic: "חוק הפילוג",
        question_text: "איזה ביטוי שווה ל- 6x + 9?&rlm;",
        options: ["3(2x + 3)", "6(x + 9)", "3(2x + 9)", "15x"],
        correctAnswer: 0,
        hint: "נסו להוציא את הגורם המשותף 3 מחוץ לסוגריים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המחלק המשותף הגדול של 6 ו-9 הוא 3.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחלק את שני האיברים ב-3.&rlm;", math_expression: "6x : 3 = 2x , 9 : 3 = 3" },
            { verbal_explanation: "שלב ג': נרשום את ה-3 בחוץ ואת התוצאות בפנים.&rlm;", math_expression: "3(2x + 3)" }
        ],
        final_answer: "3(2x + 3)"
    },
    // שאלה 24
    {
        topic: "arithmetic_laws",
        subTopic: "חוק הפילוג",
        question_text: "תלמיד ניסה לפשט את הביטוי 5(x + 2) ורשם כתשובה 5x + 2. מה הייתה הטעות שלו?&rlm;",
        options: ["הוא שכח להכפיל את המספר 5 גם באיבר השני (ה-2).", "הוא שכח להוסיף את סימן הכפל.", "לא הייתה טעות, הוא צדק.", "הוא היה צריך לחבר את 5 ל-x."],
        correctAnswer: 0,
        hint: "חוק הפילוג אומר שחייבים לפלג (לכפול) את הגורם החיצוני ל*כל* האיברים שבתוך הסוגריים.&rlm;",
        solution_steps: [
            { verbal_explanation: "לפי חוק הפילוג, יש לכפול את 5 גם ב-x וגם ב-2.&rlm;", math_expression: "5 × x + 5 × 2" },
            { verbal_explanation: "התלמיד כפל נכון את 5 ב-x, אך התעלם מהכפלת ה-5 ב-2.&rlm;", math_expression: "5 × 2 = 10" },
            { verbal_explanation: "התשובה הנכונה הייתה צריכה להיות 5x + 10.&rlm;", math_expression: "" }
        ],
        final_answer: "הוא שכח להכפיל את המספר 5 גם באיבר השני (ה-2)."
    },

    // ==========================================================
    // תת נושא 3: סדר פעולות מורחב (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "arithmetic_laws",
        subTopic: "סדר פעולות מורחב",
        question_text: "חשבו את תוצאת התרגיל הבא (זכרו כפל קודם לחיבור/חיסור):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>20 - 4 × 3 + 2 = ?</div>",
        options: ["10", "50", "12", "6"],
        correctAnswer: 0,
        hint: "פתרו קודם את 4 × 3.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבצע תחילה את פעולת הכפל.&rlm;", math_expression: "4 × 3 = 12" },
            { verbal_explanation: "שלב ב': נעדכן את התרגיל ונפתור לפי הסדר משמאל לימין (חיסור לפני חיבור כאן).&rlm;", math_expression: "20 - 12 = 8" },
            { verbal_explanation: "שלב ג': נוסיף את ה-2 שנותר.&rlm;", math_expression: "8 + 2 = 10" }
        ],
        final_answer: "10"
    },
    // שאלה 26
    {
        topic: "arithmetic_laws",
        subTopic: "סדר פעולות מורחב",
        question_text: "חשבו את הערך של הביטוי הבא הכולל סוגריים וחזקה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(10 - 2²) × 5 = ?</div>",
        options: ["30", "40", "20", "25"],
        correctAnswer: 0,
        hint: "בתוך הסוגריים, פעולת החזקה קודמת לחיסור. חשבו קודם 2² (שזה 2 כפול 2).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתור את החזקה בתוך הסוגריים.&rlm;", math_expression: "2² = 4" },
            { verbal_explanation: "שלב ב': נשלים את הפעולה בתוך הסוגריים (חיסור).&rlm;", math_expression: "10 - 4 = 6" },
            { verbal_explanation: "שלב ג': נכפול את התוצאה ב-5.&rlm;", math_expression: "6 × 5 = 30" }
        ],
        final_answer: "30"
    },
    // שאלה 27
    {
        topic: "arithmetic_laws",
        subTopic: "סדר פעולות מורחב",
        question_text: "מהי התוצאה של התרגיל הבא? (שימו לב לסדר הפעולות מימין לשמאל או משמאל לימין):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>36 : 6 : 2 = ?</div>",
        options: ["3", "12", "18", "6"],
        correctAnswer: 0,
        hint: "כאשר ישנן רק פעולות של חילוק (באותה דרגת קדימות), חובה לפתור לפי הסדר משמאל לימין.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבצע את החילוק הראשון משמאל.&rlm;", math_expression: "36 : 6 = 6" },
            { verbal_explanation: "שלב ב': נחלק את התוצאה ב-2.&rlm;", math_expression: "6 : 2 = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 28
    {
        topic: "arithmetic_laws",
        subTopic: "סדר פעולות מורחב",
        question_text: "השלימו את הסוגריים במקום הנכון כדי שהשוויון יהיה נכון:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5 + 3 × 4 - 2 = 30</div>",
        options: ["(5 + 3) × 4 - 2", "5 + (3 × 4) - 2", "5 + 3 × (4 - 2)", "(5 + 3 × 4) - 2"],
        correctAnswer: 0,
        hint: "נסו להציב את הסוגריים סביב פעולת החיבור. כמה זה 8 כפול 4? פחות 2?&rlm;",
        solution_steps: [
            { verbal_explanation: "ללא סוגריים, התוצאה היא 15 (כי 3x4=12).&rlm;", math_expression: "" },
            { verbal_explanation: "נבדוק את האפשרות הראשונה: נשים סוגריים סביב ה- 5+3.&rlm;", math_expression: "(5 + 3) × 4 - 2" },
            { verbal_explanation: "נחשב: 8 כפול 4 שווה 32. 32 פחות 2 שווה 30. השוויון מתקיים.&rlm;", math_expression: "8 × 4 - 2 = 30" }
        ],
        final_answer: "(5 + 3) × 4 - 2"
    },
    // שאלה 29
    {
        topic: "arithmetic_laws",
        subTopic: "סדר פעולות מורחב",
        question_text: "חשבו את תוצאת התרגיל (חיבור של שתי חזקות):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2³ + 3² = ?</div>",
        options: ["17", "12", "25", "13"],
        correctAnswer: 0,
        hint: "2³ פירושו 2 כפול 2 כפול 2. 3² פירושו 3 כפול 3.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את החזקה הראשונה: 2 בשלישית.&rlm;", math_expression: "2 × 2 × 2 = 8" },
            { verbal_explanation: "שלב ב': נחשב את החזקה השנייה: 3 בריבוע.&rlm;", math_expression: "3 × 3 = 9" },
            { verbal_explanation: "שלב ג': נחבר את התוצאות.&rlm;", math_expression: "8 + 9 = 17" }
        ],
        final_answer: "17"
    },
    // שאלה 30
    {
        topic: "arithmetic_laws",
        subTopic: "סדר פעולות מורחב",
        question_text: "פתרו את התרגיל המורכב הבא (זכרו: סוגריים פנימיים קודמים לחיצוניים):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>100 - [ 20 + (5 + 3) × 2 ] = ?</div>",
        options: ["64", "36", "72", "40"],
        correctAnswer: 0,
        hint: "התחילו בתוך הסוגריים העגולים, אחר כך פתרו את כל מה שבתוך הסוגריים המרובעים (כפל קודם לחיבור!), ולבסוף חסרו מ-100.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתור את הסוגריים הפנימיים.&rlm;", math_expression: "5 + 3 = 8" },
            { verbal_explanation: "שלב ב': נפתור בתוך הסוגריים המרובעים (כפל קודם לחיבור).&rlm;", math_expression: "20 + 8 × 2 = 20 + 16 = 36" },
            { verbal_explanation: "שלב ג': נבצע את הפעולה האחרונה: חיסור מ-100.&rlm;", math_expression: "100 - 36 = 64" }
        ],
        final_answer: "64"
    },
    // שאלה 31
    {
        topic: "arithmetic_laws",
        subTopic: "סדר פעולות מורחב",
        question_text: "מהו הערך של x במשוואה הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x : 4 + 5 = 8</div>",
        options: ["12", "7", "3", "32"],
        correctAnswer: 0,
        hint: "עבדו בשיטת הפעולות ההפוכות (מהסוף להתחלה). חסרו 5 מה-8, ואז כפלו ב-4.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבודד את הביטוי עם ה-x. נעביר את ה-5 אגף במינוס.&rlm;", math_expression: "x : 4 = 8 - 5 = 3" },
            { verbal_explanation: "שלב ב': נפעיל פעולה הפוכה לחילוק - נכפול את שני האגפים ב-4.&rlm;", math_expression: "x = 3 × 4 = 12" }
        ],
        final_answer: "12"
    },
    // שאלה 32
    {
        topic: "arithmetic_laws",
        subTopic: "סדר פעולות מורחב",
        question_text: "חשבו את תוצאת התרגיל הבא, שימו לב לחילוק בסוגריים כפולים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'> (12 + 8) : (2 × 5) = ?</div>",
        options: ["2", "4", "10", "20"],
        correctAnswer: 0,
        hint: "חשבו קודם את הסוגריים השמאליים, ואז את הסוגריים הימניים, ובסוף בצעו את חילוק התוצאות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את הסוגריים השמאליים.&rlm;", math_expression: "12 + 8 = 20" },
            { verbal_explanation: "שלב ב': נחשב את הסוגריים הימניים.&rlm;", math_expression: "2 × 5 = 10" },
            { verbal_explanation: "שלב ג': נחלק את התוצאות.&rlm;", math_expression: "20 : 10 = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 33
    {
        topic: "arithmetic_laws",
        subTopic: "סדר פעולות מורחב",
        question_text: "חשבו את ערך הביטוי (מלכודת הכפל באפס):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4 + 0 × (15 - 3) + 12 : 3 = ?</div>",
        options: ["8", "16", "20", "4"],
        correctAnswer: 0,
        hint: "שימו לב שהכפלה באפס מבטלת את כל מה שצמוד אליו (את כל הסוגריים).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הביטוי האמצעי מוכפל ב-0, לכן ערכו כולו הוא 0.&rlm;", math_expression: "0 × 12 = 0" },
            { verbal_explanation: "שלב ב': נחשב את פעולת החילוק בסוף (קודמת לחיבור).&rlm;", math_expression: "12 : 3 = 4" },
            { verbal_explanation: "שלב ג': נחבר את הכל: ה-4 מההתחלה, ה-0 מהאמצע וה-4 מהסוף.&rlm;", math_expression: "4 + 0 + 4 = 8" }
        ],
        final_answer: "8"
    },
    // שאלה 34
    {
        topic: "arithmetic_laws",
        subTopic: "סדר פעולות מורחב",
        question_text: "תרגיל רב-שלבי עם חזקות:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3 × 2³ = ?</div>",
        options: ["24", "18", "216", "12"],
        correctAnswer: 0,
        hint: "פעולת החזקה קודמת לפעולת הכפל. חשבו קודם כמה זה 2³ (2 כפול 2 כפול 2).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את החזקה תחילה (2 בשלישית).&rlm;", math_expression: "2 × 2 × 2 = 8" },
            { verbal_explanation: "שלב ב': נכפול את התוצאה ב-3.&rlm;", math_expression: "3 × 8 = 24" }
        ],
        final_answer: "24"
    },
    // שאלה 35
    {
        topic: "arithmetic_laws",
        subTopic: "סדר פעולות מורחב",
        question_text: "חיסור של שתי חזקות:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>10² - 4² = ?</div>",
        options: ["84", "36", "6", "116"],
        correctAnswer: 0,
        hint: "חשבו כל חזקה בנפרד (100 ו-16), ואז בצעו את החיסור.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את ערך החזקה הראשונה (עשר בריבוע).&rlm;", math_expression: "10² = 100" },
            { verbal_explanation: "שלב ב': נחשב את ערך החזקה השנייה (ארבע בריבוע).&rlm;", math_expression: "4² = 16" },
            { verbal_explanation: "שלב ג': נחסר את התוצאות.&rlm;", math_expression: "100 - 16 = 84" }
        ],
        final_answer: "84"
    },
    // שאלה 36
    {
        topic: "arithmetic_laws",
        subTopic: "סדר פעולות מורחב",
        question_text: "מלכודת קלאסית! חשבו את התרגיל הבא לפי הסדר הנכון (משמאל לימין בכפל וחילוק):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>24 : 6 × 2 = ?</div>",
        options: ["8", "2", "12", "4"],
        correctAnswer: 0,
        hint: "כפל וחילוק הם באותה דרגת חשיבות (אין קדימות לכפל). לכן, פותרים תמיד לפי הסדר, משמאל לימין.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר ישנן רק פעולות כפל וחילוק, חובה לפתור לפי סדר הופעתן, משמאל לימין.&rlm;", math_expression: "" },
            { verbal_explanation: "נבצע קודם את החילוק השמאלי.&rlm;", math_expression: "24 : 6 = 4" },
            { verbal_explanation: "כעת נכפול את התוצאה ב-2.&rlm;", math_expression: "4 × 2 = 8" }
        ],
        final_answer: "8"
    }

];
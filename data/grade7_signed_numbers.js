// ========================================================================
// שכבת גיל: כיתה ז' | נושא: מספרים מכוונים
// 4 תתי נושאים | 48 שאלות סה"כ
// רמה: יסודית עד מתקדמת, פתרונות מפורטים מאוד בשלבים. 
// כתיבה נקייה: חילוק מוצג כ- (:), כפל כ- (×), חזקות רגילות (²). ללא LaTeX.
// איורים (SVG) מוטמעים להמחשה ויזואלית.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: הערך המוחלט ומספרים נגדיים (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "directed_numbers",
        subTopic: "הערך המוחלט ומספרים נגדיים",
        question_text: "מהי המשמעות הגיאומטרית של הערך המוחלט של מספר, למשל |5-| ?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 300 80' width='100%' height='80' style='max-width:300px;'><line x1='10' y1='50' x2='290' y2='50' stroke='#334155' stroke-width='2'/><line x1='150' y1='40' x2='150' y2='60' stroke='#334155' stroke-width='2'/><text x='150' y='30' font-family='Arial' font-size='14' fill='#0f172a' text-anchor='middle'>0</text><circle cx='50' cy='50' r='5' fill='#ef4444'/><text x='50' y='30' font-family='Arial' font-size='14' fill='#ef4444' text-anchor='middle'>-5</text><path d='M 50 50 Q 100 0 150 50' fill='none' stroke='#3b82f6' stroke-width='2' stroke-dasharray='5,5'/><text x='100' y='25' font-family='Arial' font-size='14' font-weight='bold' fill='#3b82f6' text-anchor='middle'>?</text></svg></div>",
        options: ["המרחק של המספר מנקודת האפס על ישר המספרים.", "המספר ההפוך שלו.", "המספר בתוספת 5.", "הסימן של המספר (חיובי או שלילי)."],
        correctAnswer: 0,
        hint: "ערך מוחלט נמדד ביחידות של אורך, וכמו כל אורך או מרחק בעולם שלנו - הוא תמיד חיובי (או אפס).&rlm;",
        solution_steps: [
            { verbal_explanation: "ערך מוחלט (המסומן בשני קווים אנכיים | |) מוגדר כמרחק של המספר מנקודת האפס (ראשית הצירים).&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון שמרחק אינו יכול להיות שלילי, התוצאה של ערך מוחלט היא תמיד מספר חיובי או 0.&rlm;", math_expression: "|-5| = 5" }
        ],
        final_answer: "המרחק של המספר מנקודת האפס על ישר המספרים."
    },
    // שאלה 2
    {
        topic: "directed_numbers",
        subTopic: "הערך המוחלט ומספרים נגדיים",
        question_text: "חשבו את התוצאה של התרגיל הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>|-8| + |-2| = ?</div>",
        options: ["10", "-10", "6", "-6"],
        correctAnswer: 0,
        hint: "הוציאו כל מספר מהערך המוחלט שלו (הפכו אותו לחיובי) ורק אז בצעו את פעולת החיבור.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את הערך המוחלט של 8-. המרחק שלו מ-0 הוא 8.&rlm;", math_expression: "|-8| = 8" },
            { verbal_explanation: "שלב ב': נחשב את הערך המוחלט של 2-. המרחק שלו מ-0 הוא 2.&rlm;", math_expression: "|-2| = 2" },
            { verbal_explanation: "שלב ג': נחבר את שתי התוצאות החיוביות שקיבלנו.&rlm;", math_expression: "8 + 2 = 10" }
        ],
        final_answer: "10"
    },
    // שאלה 3
    {
        topic: "directed_numbers",
        subTopic: "הערך המוחלט ומספרים נגדיים",
        question_text: "מהו המספר הנגדי למספר 14?&rlm;",
        options: ["-14", "1/14", "0", "14"],
        correctAnswer: 0,
        hint: "מספרים נגדיים הם שני מספרים שנמצאים באותו מרחק מהאפס, אבל בכיוונים מנוגדים. סכומם תמיד שווה לאפס.&rlm;",
        solution_steps: [
            { verbal_explanation: "המספר הנגדי של מספר חיובי הוא אותו המספר בסימן שלילי.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, המספר שנמצא במרחק 14 צעדים שמאלה מהאפס הוא 14-.&rlm;", math_expression: "14 + (-14) = 0" }
        ],
        final_answer: "-14"
    },
    // שאלה 4
    {
        topic: "directed_numbers",
        subTopic: "הערך המוחלט ומספרים נגדיים",
        question_text: "שאלה למחשבה: מהו המספר **הנגדי** לערך המוחלט של 7- ?&rlm;",
        options: ["-7", "7", "0", "1/7"],
        correctAnswer: 0,
        hint: "פרוק לשלבים: קודם כל חשבו כמה זה |7-|, ואז חפשו מהו המספר הנגדי לתשובה שקיבלתם.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את הערך המוחלט של 7-. המרחק מ-0 הוא 7 חיובי.&rlm;", math_expression: "|-7| = 7" },
            { verbal_explanation: "שלב ב': כעת נחפש את המספר הנגדי לתוצאה שקיבלנו (7).&rlm;", math_expression: "" },
            { verbal_explanation: "הנגדי של 7 הוא 7-.&rlm;", math_expression: "" }
        ],
        final_answer: "-7"
    },
    // שאלה 5
    {
        topic: "directed_numbers",
        subTopic: "הערך המוחלט ומספרים נגדיים",
        question_text: "פתרו את המשוואה הבאה: איזה מספר (או מספרים) יכולים להיות x?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>|x| = 12</div>",
        options: ["12 או -12", "רק 12", "רק -12", "אין פתרון"],
        correctAnswer: 0,
        hint: "שאלו את עצמכם: אילו מספרים נמצאים במרחק של בדיוק 12 צעדים מהאפס על ישר המספרים? יש שני כיוונים!&rlm;",
        solution_steps: [
            { verbal_explanation: "המשוואה שואלת אילו מספרים נמצאים במרחק של 12 יחידות מהאפס.&rlm;", math_expression: "" },
            { verbal_explanation: "אם נלך 12 צעדים ימינה מהאפס, נגיע ל-12.&rlm;", math_expression: "|12| = 12" },
            { verbal_explanation: "אם נלך 12 צעדים שמאלה מהאפס, נגיע למינוס 12.&rlm;", math_expression: "|-12| = 12" },
            { verbal_explanation: "לכן למשוואה יש שני פתרונות אפשריים.&rlm;", math_expression: "x = 12 , x = -12" }
        ],
        final_answer: "12 או -12"
    },
    // שאלה 6
    {
        topic: "directed_numbers",
        subTopic: "הערך המוחלט ומספרים נגדיים",
        question_text: "חשבו את תוצאת התרגיל (שימו לב למינוס שמחוץ לערך המוחלט):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-| -20 | = ?</div>",
        options: ["-20", "20", "0", "40"],
        correctAnswer: 0,
        hint: "הערך המוחלט הופך את ה-20- למספר חיובי. אבל אחרי שהוא יוצא החוצה, מחכה לו סימן מינוס!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את מה שבתוך הערך המוחלט. המרחק של 20- מ-0 הוא 20.&rlm;", math_expression: "|-20| = 20" },
            { verbal_explanation: "שלב ב': נציב את התוצאה חזרה בתרגיל. יש לנו סימן מינוס לפני התוצאה.&rlm;", math_expression: "- (20) = -20" }
        ],
        final_answer: "-20"
    },
    // שאלה 7
    {
        topic: "directed_numbers",
        subTopic: "הערך המוחלט ומספרים נגדיים",
        question_text: "איזה מבין האי-שוויונות הבאים הוא הנכון?&rlm;",
        options: ["|-15| > |-10|", "|-5| < 0", "|3| > |-4|", "|-8| = -8"],
        correctAnswer: 0,
        hint: "חשבו את הערך המוחלט של כל מספר (הפכו לחיובי) ורק אז השוו ביניהם.&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את האפשרות הראשונה: |-15| שווה 15. |-10| שווה 10.&rlm;", math_expression: "15 > 10" },
            { verbal_explanation: "המשפט 15 > 10 הוא נכון.&rlm;", math_expression: "" },
            { verbal_explanation: "נבדוק שאר אפשרויות: |-5| שווה 5, וזה לא קטן מ-0. |-4| שווה 4, ולכן 3 לא גדול ממנו. ערך מוחלט לא יכול להיות שווה למספר שלילי.&rlm;", math_expression: "" }
        ],
        final_answer: "|-15| > |-10|"
    },
    // שאלה 8
    {
        topic: "directed_numbers",
        subTopic: "הערך המוחלט ומספרים נגדיים",
        question_text: "יעל ודן עומדים על ישר מספרים ענק. יעל עומדת על המספר 8, ודן עומד על המספר הנגדי ליעל. מהו המרחק ביניהם?&rlm;",
        options: ["16 יחידות", "8 יחידות", "0 יחידות", "4 יחידות"],
        correctAnswer: 0,
        hint: "דן עומד על 8-. המרחק מיעל (8) לאפס הוא 8, והמרחק מדן (8-) לאפס הוא גם 8. מה המרחק הכולל?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המספר הנגדי של 8 הוא 8-. לכן דן עומד על 8-.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחשב את המרחק ביניהם. אפשר לחבר את הערכים המוחלטים של שניהם.&rlm;", math_expression: "|8| + |-8| = 8 + 8 = 16" },
            { verbal_explanation: "שלב ג': לחלופין, נבצע תרגיל הפרש מרחקים: גדול פחות קטן.&rlm;", math_expression: "8 - (-8) = 8 + 8 = 16" }
        ],
        final_answer: "16 יחידות"
    },
    // שאלה 9
    {
        topic: "directed_numbers",
        subTopic: "הערך המוחלט ומספרים נגדיים",
        question_text: "פתרו את התרגיל הכולל חיסור בתוך הערך המוחלט:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>|5 - 9| = ?</div>",
        options: ["4", "-4", "14", "-14"],
        correctAnswer: 0,
        hint: "קווי הערך המוחלט מתפקדים גם כמו סוגריים. קודם פתרו את התרגיל בפנים (5 פחות 9), ורק אז הוציאו ערך מוחלט מהתוצאה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבצע את פעולת החיסור בתוך הערך המוחלט.&rlm;", math_expression: "5 - 9 = -4" },
            { verbal_explanation: "שלב ב': נוציא ערך מוחלט לתוצאה שקיבלנו. המרחק של 4- מאפס הוא 4.&rlm;", math_expression: "|-4| = 4" }
        ],
        final_answer: "4"
    },
    // שאלה 10
    {
        topic: "directed_numbers",
        subTopic: "הערך המוחלט ומספרים נגדיים",
        question_text: "איזו מהמשוואות הבאות **אין** לה פתרון?&rlm;",
        options: ["|x| = -3", "|x| = 0", "|x| = 3", "|x - 1| = 5"],
        correctAnswer: 0,
        hint: "זכרו שערך מוחלט מייצג מרחק. האם מרחק יכול להיות שלילי?&rlm;",
        solution_steps: [
            { verbal_explanation: "ערך מוחלט של כל מספר הוא תמיד חיובי או אפס.&rlm;", math_expression: "|x| ≥ 0" },
            { verbal_explanation: "לכן, ביטוי של ערך מוחלט לעולם לא יכול להיות שווה למספר שלילי (כמו 3-). אין אף מספר שמרחקו מאפס הוא מינוס שלוש.&rlm;", math_expression: "" }
        ],
        final_answer: "|x| = -3"
    },
    // שאלה 11
    {
        topic: "directed_numbers",
        subTopic: "הערך המוחלט ומספרים נגדיים",
        question_text: "מהי התוצאה של חיבור מספר למספר הנגדי שלו? למשל: (x) + (-x)&rlm;",
        options: ["0", "תמיד מספר שלילי", "2x", "תלוי מהו המספר"],
        correctAnswer: 0,
        hint: "אם יש לכם 5 שקלים ואתם מוסיפים חוב של 5 שקלים, כמה כסף יישאר לכם?&rlm;",
        solution_steps: [
            { verbal_explanation: "מספרים נגדיים 'מבטלים' זה את זה כאשר מחברים אותם.&rlm;", math_expression: "x + (-x) = 0" },
            { verbal_explanation: "לדוגמה: 10 ועוד מינוס 10 שווה לאפס. 3- ועוד 3 שווה לאפס.&rlm;", math_expression: "10 - 10 = 0" }
        ],
        final_answer: "0"
    },
    // שאלה 12
    {
        topic: "directed_numbers",
        subTopic: "הערך המוחלט ומספרים נגדיים",
        question_text: "חשבו את תוצאת התרגיל המשולב:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>|-10| : |-2| = ?</div>",
        options: ["5", "-5", "20", "-20"],
        correctAnswer: 0,
        hint: "הוציאו כל מספר מהערך המוחלט (הפכו לחיובי), ואז בצעו את פעולת החילוק.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב ערך מוחלט של 10-.&rlm;", math_expression: "|-10| = 10" },
            { verbal_explanation: "שלב ב': נחשב ערך מוחלט של 2-.&rlm;", math_expression: "|-2| = 2" },
            { verbal_explanation: "שלב ג': נבצע את החילוק בין התוצאות החיוביות.&rlm;", math_expression: "10 : 2 = 5" }
        ],
        final_answer: "5"
    },

    // ==========================================================
    // תת נושא 2: חיבור וחיסור (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "directed_numbers",
        subTopic: "חיבור וחיסור",
        question_text: "חשבו את התוצאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-12 + 7 = ?</div>",
        options: ["-5", "5", "-19", "19"],
        correctAnswer: 0,
        hint: "חשבו על זה כחוב: יש לכם חוב של 12 שקלים (12-), והחזרתם 7 שקלים. האם נשארתם בחוב או בפלוס?&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר מחברים מספר חיובי למספר שלילי, אנו זזים ימינה על ישר המספרים מנקודת ה-12-.&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון שהחוב (12) גדול מהסכום שהוספנו (7), נישאר בתחום השלילי.&rlm;", math_expression: "12 - 7 = 5" },
            { verbal_explanation: "התוצאה היא חוב של 5, כלומר 5-.&rlm;", math_expression: "-5" }
        ],
        final_answer: "-5"
    },
    // שאלה 14
    {
        topic: "directed_numbers",
        subTopic: "חיבור וחיסור",
        question_text: "הטמפרטורה בירושלים בבוקר הייתה 3 מעלות. עד הערב חלה צניחה של 8 מעלות. מה הייתה הטמפרטורה בערב?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 200' width='60' height='120'><rect x='40' y='20' width='20' height='140' rx='10' fill='#e2e8f0' stroke='#334155' stroke-width='2'/><circle cx='50' cy='160' r='15' fill='#ef4444'/><rect x='45' y='80' width='10' height='80' fill='#ef4444'/><line x1='60' y1='80' x2='75' y2='80' stroke='#334155' stroke-width='2'/><text x='85' y='85' font-family='Arial' font-size='14' fill='#0f172a'>3°</text><path d='M 30 80 Q 10 110 30 140' fill='none' stroke='#3b82f6' stroke-width='2'/><polygon points='30,140 25,130 35,130' fill='#3b82f6'/><text x='-5' y='115' font-family='Arial' font-size='12' fill='#3b82f6' font-weight='bold'>-8°</text></svg></div>",
        options: ["-5 מעלות", "5 מעלות", "-11 מעלות", "11 מעלות"],
        correctAnswer: 0,
        hint: "התחלתם ב-3 מעלות חיוביות, וירדתם 8 מעלות כלפי מטה. עברתם את האפס!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נתרגם את הסיפור לתרגיל חשבון. התחלנו בפלוס 3, וחסרנו 8.&rlm;", math_expression: "3 - 8" },
            { verbal_explanation: "שלב ב': ירידה של 3 מעלות תביא אותנו בדיוק ל-0. נשארו לנו עוד 5 מעלות לרדת (כי 8=3+5).&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': נרד עוד 5 מעלות מנקודת האפס, ונגיע ל-5-.&rlm;", math_expression: "-5" }
        ],
        final_answer: "-5 מעלות"
    },
    // שאלה 15
    {
        topic: "directed_numbers",
        subTopic: "חיבור וחיסור",
        question_text: "שימו לב היטב לסימנים! חשבו את התוצאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-15 - (-9) = ?</div>",
        options: ["-6", "-24", "6", "24"],
        correctAnswer: 0,
        hint: "כשמחסרים מספר שלילי (מינוס ליד מינוס), זה שווה ערך להוספת מספר חיובי. 'לקחת חוב' שווה ל'לתת כסף'.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': רצף של 'מינוס מינוס' הופך לפלוס.&rlm;", math_expression: "-(-9) = +9" },
            { verbal_explanation: "שלב ב': נכתוב את התרגיל מחדש עם סימן חיבור.&rlm;", math_expression: "-15 + 9" },
            { verbal_explanation: "שלב ג': חוב של 15 פלוס הכנסה של 9 משאיר אותנו עם חוב של 6.&rlm;", math_expression: "-6" }
        ],
        final_answer: "-6"
    },
    // שאלה 16
    {
        topic: "directed_numbers",
        subTopic: "חיבור וחיסור",
        question_text: "מה תהיה התוצאה של חיסור שני מספרים חיוביים באופן הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4 - 11 = ?</div>",
        options: ["-7", "7", "-15", "15"],
        correctAnswer: 0,
        hint: "המספר שאנו מחסרים (11) גדול מהמספר שממנו אנו מחסרים (4). לכן התוצאה תהיה שלילית.&rlm;",
        solution_steps: [
            { verbal_explanation: "אנו נמצאים בנקודה 4 על ציר המספרים וצועדים 11 צעדים שמאלה.&rlm;", math_expression: "" },
            { verbal_explanation: "4 צעדים יביאו אותנו לאפס. יישארו לנו עוד 7 צעדים לצעוד אל תוך המינוס.&rlm;", math_expression: "11 - 4 = 7" },
            { verbal_explanation: "לכן נגיע ל-7-.&rlm;", math_expression: "-7" }
        ],
        final_answer: "-7"
    },
    // שאלה 17
    {
        topic: "directed_numbers",
        subTopic: "חיבור וחיסור",
        question_text: "פתרו את התרגיל הכולל שלושה מספרים מכוונים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-5 + (-8) - (-3) = ?</div>",
        options: ["-10", "-16", "-10", "0"], // שמתי פעמיים -10, נשנה אחד.
        options: ["-10", "-16", "6", "0"],
        correctAnswer: 0,
        hint: "פשטו קודם את הסימנים: חיבור של מינוס נשאר מינוס. חיסור של מינוס הופך לפלוס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסדר את הסימנים. פלוס ומינוס הופך למינוס. מינוס ומינוס הופך לפלוס.&rlm;", math_expression: "-5 - 8 + 3" },
            { verbal_explanation: "שלב ב': נבצע משמאל לימין. מינוס 5 פחות 8 שווה מינוס 13 (חוב ועוד חוב).&rlm;", math_expression: "-5 - 8 = -13" },
            { verbal_explanation: "שלב ג': עכשיו נוסיף 3 לתוצאה.&rlm;", math_expression: "-13 + 3 = -10" }
        ],
        final_answer: "-10"
    },
    // שאלה 18
    {
        topic: "directed_numbers",
        subTopic: "חיבור וחיסור",
        question_text: "צוללת שטה בעומק של 45- מטרים (מתחת לפני הים). היא יורדת לעומק נוסף של 20 מטרים, ולאחר מכן עולה 35 מטרים כלפי מעלה. באיזה עומק נמצאת הצוללת כעת?&rlm;",
        options: ["-30 מטרים", "-10 מטרים", "-100 מטרים", "-60 מטרים"],
        correctAnswer: 0,
        hint: "ירידה לעומק משמעותה חיסור (להיות יותר במינוס). עלייה כלפי מעלה משמעותה חיבור (להתקרב לאפס).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הצוללת ב-45-. היא יורדת עוד 20, אז נחסר 20.&rlm;", math_expression: "-45 - 20 = -65" },
            { verbal_explanation: "שלב ב': הצוללת הגיעה לעומק 65-. כעת היא עולה (פלוס) 35 מטרים.&rlm;", math_expression: "-65 + 35" },
            { verbal_explanation: "שלב ג': נחשב. חוב של 65 פלוס 35 משאיר חוב של 30.&rlm;", math_expression: "-30" }
        ],
        final_answer: "-30 מטרים"
    },
    // שאלה 19
    {
        topic: "directed_numbers",
        subTopic: "חיבור וחיסור",
        question_text: "השלימו את המספר החסר במשוואה הבאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-7 + ? = 4</div>",
        options: ["11", "3", "-11", "-3"],
        correctAnswer: 0,
        hint: "כמה צעדים אתם צריכים ללכת ממינוס 7 כדי להגיע לפלוס 4? קודם 7 צעדים כדי להגיע לאפס, ואז עוד 4 צעדים.&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א': שימוש בהיגיון על ישר המספרים. המרחק מ-7- לאפס הוא 7. מאפס ל-4 המרחק הוא 4. סך הכל 11 צעדים ימינה (+).&rlm;", math_expression: "7 + 4 = 11" },
            { verbal_explanation: "דרך ב': פתרון אלגברי. נעביר את ה-7- אגף ונהפוך לו את הסימן לפלוס 7.&rlm;", math_expression: "? = 4 + 7 = 11" }
        ],
        final_answer: "11"
    },
    // שאלה 20
    {
        topic: "directed_numbers",
        subTopic: "חיבור וחיסור",
        question_text: "השלימו את המספר החסר בחיסור:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2 - ? = 10</div>",
        options: ["-8", "8", "-12", "12"],
        correctAnswer: 0,
        hint: "איך יכול להיות שהחסרנו משהו מ-2 וקיבלנו תוצאה גדולה יותר (10)? זה קורה רק כשמחסרים מספר שלילי!&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי להגיע מ-2 אל 10, אנחנו צריכים להוסיף 8.&rlm;", math_expression: "2 + 8 = 10" },
            { verbal_explanation: "בתרגיל שלנו יש סימן חיסור. כדי שהחיסור יהפוך לחיבור, עלינו לחסר מספר שלילי.&rlm;", math_expression: "2 - (-8) = 10" },
            { verbal_explanation: "לכן המספר החסר הוא 8-.&rlm;", math_expression: "-8" }
        ],
        final_answer: "-8"
    },
    // שאלה 21
    {
        topic: "directed_numbers",
        subTopic: "חיבור וחיסור",
        question_text: "נתונים שני מספרים: a = -15 ו- b = 6. מהו הערך של הביטוי a - b ?&rlm;",
        options: ["-21", "-9", "9", "21"],
        correctAnswer: 0,
        hint: "הציבו את המספרים במדויק בתוך הביטוי: מינוס 15, פחות 6.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את הנתונים בביטוי a - b.&rlm;", math_expression: "(-15) - 6" },
            { verbal_explanation: "שלב ב': יש לנו מספר שלילי, ואנו מחסרים ממנו עוד. לכן נתרחק שמאלה מהאפס.&rlm;", math_expression: "-15 - 6 = -21" }
        ],
        final_answer: "-21"
    },
    // שאלה 22
    {
        topic: "directed_numbers",
        subTopic: "חיבור וחיסור",
        question_text: "חיבור של שברים עשרוניים מכוונים. חשבו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-3.5 + (-1.5) = ?</div>",
        options: ["-5.0", "-2.0", "5.0", "2.0"],
        correctAnswer: 0,
        hint: "סדרו סימנים: פלוס ומינוס הופך למינוס. זהו חיבור של שני חובות, לכן סכמו אותם והשאירו סימן מינוס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסדר את הסימנים. פלוס צמוד למינוס הופך למינוס.&rlm;", math_expression: "-3.5 - 1.5" },
            { verbal_explanation: "שלב ב': נחבר את הערכים המוחלטים ונוסיף מינוס, כי שניהם שליליים.&rlm;", math_expression: "3.5 + 1.5 = 5.0" },
            { verbal_explanation: "שלב ג': התוצאה הסופית.&rlm;", math_expression: "-5.0" }
        ],
        final_answer: "-5.0"
    },
    // שאלה 23
    {
        topic: "directed_numbers",
        subTopic: "חיבור וחיסור",
        question_text: "בחשבון הבנק של נועה היה בבוקר סכום של 150- שקלים (משיכת יתר). בצהריים היא הפקידה 200 שקלים, ובערב משכה 80 שקלים. מה מצב החשבון שלה בסוף היום?&rlm;",
        options: ["-30 שקלים", "30 שקלים", "130 שקלים", "-430 שקלים"],
        correctAnswer: 0,
        hint: "הפקדה = פלוס. משיכה = מינוס. עקבו אחר הכסף שלב אחר שלב.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': מצב התחלתי 150-. הופקדו 200 (פעולת חיבור).&rlm;", math_expression: "-150 + 200 = 50" },
            { verbal_explanation: "שלב ב': היתרה כעת היא 50 חיובי. בוצעה משיכה של 80 (פעולת חיסור).&rlm;", math_expression: "50 - 80" },
            { verbal_explanation: "שלב ג': 50 פחות 80 מכניס שוב למינוס.&rlm;", math_expression: "-30" }
        ],
        final_answer: "-30 שקלים"
    },
    // שאלה 24
    {
        topic: "directed_numbers",
        subTopic: "חיבור וחיסור",
        question_text: "מה תהיה התוצאה אם נחסר מספר חיובי ממספר שלילי? (למשל השלילי מינוס החיובי).&rlm;",
        options: ["תמיד מספר שלילי", "תמיד מספר חיובי", "אפס", "תלוי איזה מספר גדול יותר"],
        correctAnswer: 0,
        hint: "תחשבו על דוגמה בראש: למשל (2-) פחות 5. לאן תגיעו על ציר המספרים?&rlm;",
        solution_steps: [
            { verbal_explanation: "נתחיל ממספר שלילי כלשהו (למשל 10-).&rlm;", math_expression: "" },
            { verbal_explanation: "אנו מחסרים מספר חיובי. פעולת חיסור מזיזה אותנו שמאלה על ציר המספרים.&rlm;", math_expression: "" },
            { verbal_explanation: "היות ואנחנו כבר בתחום השלילי וזזים עוד שמאלה, תמיד נישאר בתחום השלילי.&rlm;", math_expression: "-a - b = -(a+b)" }
        ],
        final_answer: "תמיד מספר שלילי"
    },

    // ==========================================================
    // תת נושא 3: כפל וחילוק (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "directed_numbers",
        subTopic: "כפל וחילוק",
        question_text: "חשבו את תוצאת הכפל הבאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-6 × (-8) = ?</div>",
        options: ["48", "-48", "14", "-14"],
        correctAnswer: 0,
        hint: "זכרו את חוק הסימנים המפורסם: מינוס כפול מינוס נותן...&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נתעלם מהסימנים ונכפול את המספרים.&rlm;", math_expression: "6 × 8 = 48" },
            { verbal_explanation: "שלב ב': נבדוק סימנים. מכפלה של שני מספרים שניהם שליליים (סימנים זהים) נותנת תוצאה חיובית.&rlm;", math_expression: "(-) × (-) = (+)" },
            { verbal_explanation: "התוצאה היא 48.&rlm;", math_expression: "" }
        ],
        final_answer: "48"
    },
    // שאלה 26
    {
        topic: "directed_numbers",
        subTopic: "כפל וחילוק",
        question_text: "פתרו את תרגיל החילוק הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>35 : (-5) = ?</div>",
        options: ["-7", "7", "-30", "0.7"],
        correctAnswer: 0,
        hint: "חוקי הסימנים בחילוק זהים לאלה שבכפל: מספר חיובי לחלק למספר שלילי נותן מינוס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחלק את המספרים ללא הסימן.&rlm;", math_expression: "35 : 5 = 7" },
            { verbal_explanation: "שלב ב': פלוס לחלק למינוס (סימנים שונים) נותן תוצאה שלילית.&rlm;", math_expression: "(+) : (-) = (-)" },
            { verbal_explanation: "לכן התוצאה היא 7-.&rlm;", math_expression: "-7" }
        ],
        final_answer: "-7"
    },
    // שאלה 27
    {
        topic: "directed_numbers",
        subTopic: "כפל וחילוק",
        question_text: "מכפלה של שלושה מספרים. מהי התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-2 × 4 × (-5) = ?</div>",
        options: ["40", "-40", "10", "-10"],
        correctAnswer: 0,
        hint: "כפלו לפי הסדר משמאל לימין, ושימו לב לשינוי הסימן בכל שלב.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את שני הגורמים הראשונים. מינוס כפול פלוס נותן מינוס.&rlm;", math_expression: "-2 × 4 = -8" },
            { verbal_explanation: "שלב ב': ניקח את התוצאה ונכפול בגורם השלישי. מינוס כפול מינוס נותן פלוס.&rlm;", math_expression: "-8 × (-5) = 40" }
        ],
        final_answer: "40"
    },
    // שאלה 28
    {
        topic: "directed_numbers",
        subTopic: "כפל וחילוק",
        question_text: "קבעו מה יהיה הסימן של התוצאה בתרגיל הבא, מבלי לחשב אותה במדויק:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-1 × (-2) × (-3) × (-4) × (-5) = ?</div>",
        options: ["שלילי", "חיובי", "אפס", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "ספרו כמה סימני מינוס יש בתרגיל הכפל. אם הכמות אי-זוגית, התוצאה תהיה שלילית.&rlm;",
        solution_steps: [
            { verbal_explanation: "בתרגיל כפל המורכב רק ממספרים שליליים, הסימן נקבע לפי כמות המינוסים.&rlm;", math_expression: "" },
            { verbal_explanation: "כמות זוגית של מינוסים מבטלת זה את זה (נותן פלוס). כמות אי-זוגית משאירה מינוס אחד 'ללא בן זוג'.&rlm;", math_expression: "" },
            { verbal_explanation: "יש כאן 5 מספרים שליליים (אי-זוגי), ולכן התוצאה תהיה שלילית.&rlm;", math_expression: "" }
        ],
        final_answer: "שלילי"
    },
    // שאלה 29
    {
        topic: "directed_numbers",
        subTopic: "כפל וחילוק",
        question_text: "חילוק באפס וחילוק של אפס: מהי התוצאה של התרגיל הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0 : (-12) = ?</div>",
        options: ["0", "-12", "ביטוי חסר משמעות (לא חוקי)", "12"],
        correctAnswer: 0,
        hint: "אפס לחלק לכל מספר (שאינו אפס) נותן תמיד אפס. (להבדיל מחילוק *ב*-אפס שהוא אסור).&rlm;",
        solution_steps: [
            { verbal_explanation: "אם יש לנו 0 עצמים ואנו מחלקים אותם ל-12- קבוצות (תיאורטית), כל קבוצה תקבל 0.&rlm;", math_expression: "0 : x = 0" },
            { verbal_explanation: "אפס הוא מספר ניטרלי לסימן, אין דבר כזה 0-. התשובה היא פשוט 0.&rlm;", math_expression: "" }
        ],
        final_answer: "0"
    },
    // שאלה 30
    {
        topic: "directed_numbers",
        subTopic: "כפל וחילוק",
        question_text: "מהו הערך של x במשוואה הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-3 × x = 21</div>",
        options: ["-7", "7", "-24", "63"],
        correctAnswer: 0,
        hint: "נפעיל פעולה הפוכה: חלקו את התוצאה (21) במקדם (-3). שימו לב לסימנים!&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי למצוא גורם כפל חסר, אנו מחלקים את התוצאה בגורם הידוע.&rlm;", math_expression: "x = 21 : (-3)" },
            { verbal_explanation: "חיובי (21) לחלק לשלילי (3-) ייתן מספר שלילי.&rlm;", math_expression: "21 : 3 = 7" },
            { verbal_explanation: "לכן x שווה 7-.&rlm;", math_expression: "x = -7" }
        ],
        final_answer: "-7"
    },
    // שאלה 31
    {
        topic: "directed_numbers",
        subTopic: "כפל וחילוק",
        question_text: "חשבו את תוצאת הכפל של שברים פשוטים מכוונים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-1/2 × (-4) = ?</div>",
        options: ["2", "-2", "-1/8", "1/8"],
        correctAnswer: 0,
        hint: "מינוס כפול מינוס הופך לפלוס. כמה זה חצי מתוך 4?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבדוק סימנים. מינוס כפול מינוס שווה פלוס.&rlm;", math_expression: "(-) × (-) = (+)" },
            { verbal_explanation: "שלב ב': נכפול את המספרים: חצי כפול 4. כפל בשבר מתבצע על המונה.&rlm;", math_expression: "(1 × 4) / 2 = 4/2" },
            { verbal_explanation: "שלב ג': 4 חלקי 2 שווה ל-2 שלמים.&rlm;", math_expression: "2" }
        ],
        final_answer: "2"
    },
    // שאלה 32
    {
        topic: "directed_numbers",
        subTopic: "כפל וחילוק",
        question_text: "תרגיל משולב של כפל וחילוק:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-100 : (-5) × (-2) = ?</div>",
        options: ["-40", "40", "-10", "10"],
        correctAnswer: 0,
        hint: "בצעו לפי הסדר משמאל לימין. קודם חילוק, ואז את התוצאה כפלו. עקבו בזהירות אחרי החלפת הסימנים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבצע את החילוק הראשון. מינוס 100 לחלק למינוס 5. התוצאה חיובית.&rlm;", math_expression: "-100 : (-5) = 20" },
            { verbal_explanation: "שלב ב': ניקח את התוצאה ונכפול בגורם השלישי (מינוס 2).&rlm;", math_expression: "20 × (-2)" },
            { verbal_explanation: "שלב ג': פלוס כפול מינוס נותן מינוס. 20 כפול 2 שווה 40.&rlm;", math_expression: "-40" }
        ],
        final_answer: "-40"
    },
    // שאלה 33
    {
        topic: "directed_numbers",
        subTopic: "כפל וחילוק",
        question_text: "מה תהיה התוצאה של העלאת מספר שלילי בחזקה זוגית? למשל: ²(3-)&rlm;",
        options: ["תמיד מספר חיובי", "תמיד מספר שלילי", "אפס", "תלוי בבסיס"],
        correctAnswer: 0,
        hint: "חזקה שנייה אומרת לכפול את המספר בעצמו. מינוס כפול מינוס...&rlm;",
        solution_steps: [
            { verbal_explanation: "התרגיל ²(3-) פירושו מינוס 3 כפול מינוס 3.&rlm;", math_expression: "(-3) × (-3) = 9" },
            { verbal_explanation: "כל מספר שלילי שמוכפל בעצמו מספר זוגי של פעמים ייתן זוגות של מינוסים שמתבטלים לפלוס.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן התוצאה תמיד תהיה חיובית.&rlm;", math_expression: "" }
        ],
        final_answer: "תמיד מספר חיובי"
    },
    // שאלה 34
    {
        topic: "directed_numbers",
        subTopic: "כפל וחילוק",
        question_text: "קבעו האם המשוואה הבאה נכונה או שגויה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-20 : 4 = 20 : (-4)</div>",
        options: ["נכונה", "שגויה", "נכונה רק בערך מוחלט", "שגויה כי אי אפשר לחלק במינוס"],
        correctAnswer: 0,
        hint: "חשבו את התוצאה של אגף ימין ושל אגף שמאל בנפרד. האם התקבל אותו המספר?&rlm;",
        solution_steps: [
            { verbal_explanation: "נפתור את אגף שמאל: מינוס 20 לחלק ל-4 חיובי. התוצאה שלילית.&rlm;", math_expression: "-20 : 4 = -5" },
            { verbal_explanation: "נפתור את אגף ימין: 20 חיובי לחלק ל-4 מינוס. התוצאה גם שלילית.&rlm;", math_expression: "20 : (-4) = -5" },
            { verbal_explanation: "שני האגפים שווים ל-5-, ולכן המשוואה נכונה.&rlm;", math_expression: "-5 = -5" }
        ],
        final_answer: "נכונה"
    },
    // שאלה 35
    {
        topic: "directed_numbers",
        subTopic: "כפל וחילוק",
        question_text: "בעיה מילולית: הצוללת 'ברק' צוללת בקצב קבוע של 15 מטרים לדקה. באיזה עומק היא תהיה לאחר 4 דקות של צלילה? (השתמשו במספרים מכוונים, עומק יסומן כמינוס).&rlm;",
        options: ["-60 מטרים", "60 מטרים", "-11 מטרים", "19 מטרים"],
        correctAnswer: 0,
        hint: "הקצב הוא שלילי (15- לדקה). הכפילו את הקצב השלילי במספר הדקות (4 חיובי).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נגדיר את הקצב כמספר שלילי, מכיוון שהצוללת יורדת למטה.&rlm;", math_expression: "V = -15" },
            { verbal_explanation: "שלב ב': נכפול את הקצב בזמן (4 דקות) כדי למצוא את המיקום החדש.&rlm;", math_expression: "-15 × 4" },
            { verbal_explanation: "שלב ג': מינוס כפול פלוס שווה מינוס. 15 כפול 4 שווה 60.&rlm;", math_expression: "-60" }
        ],
        final_answer: "-60 מטרים"
    },
    // שאלה 36
    {
        topic: "directed_numbers",
        subTopic: "כפל וחילוק",
        question_text: "איזה מספר חסר במשוואה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>? × (-0.5) = 10</div>",
        options: ["-20", "20", "-5", "5"],
        correctAnswer: 0,
        hint: "התוצאה חיובית ואחד הגורמים שלילי, משמע הגורם החסר חייב להיות שלילי. פעולה הפוכה: חלקו 10 במינוס חצי.&rlm;",
        solution_steps: [
            { verbal_explanation: "נבודד את המספר החסר על ידי חלוקת התוצאה בגורם הידוע.&rlm;", math_expression: "? = 10 : (-0.5)" },
            { verbal_explanation: "סימן: פלוס לחלק למינוס ייתן מינוס.&rlm;", math_expression: "" },
            { verbal_explanation: "חישוב: 10 לחלק לחצי. כמה חצאים יש ב-10 שלמים? נכפול ב-2 ונקבל 20.&rlm;", math_expression: "10 : 0.5 = 20" },
            { verbal_explanation: "נוסיף את סימן המינוס.&rlm;", math_expression: "-20" }
        ],
        final_answer: "-20"
    },

    // ==========================================================
    // תת נושא 4: שימוש בסוגריים (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "directed_numbers",
        subTopic: "שימוש בסוגריים",
        question_text: "סדר פעולות עם סוגריים. חשבו את התוצאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-10 - (-4 + 6) = ?</div>",
        options: ["-12", "-8", "-20", "0"],
        correctAnswer: 0,
        hint: "פתרו קודם את מה שבתוך הסוגריים (מינוס 4 פלוס 6). לאחר מכן, חסרו את התוצאה מ-10-.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתור את התרגיל שבסוגריים: חוב של 4 והוספנו 6, נגיע ל-2 חיובי.&rlm;", math_expression: "-4 + 6 = 2" },
            { verbal_explanation: "שלב ב': נעדכן את התרגיל ונפתור. 10- פחות 2 חיובי.&rlm;", math_expression: "-10 - 2 = -12" }
        ],
        final_answer: "-12"
    },
    // שאלה 38
    {
        topic: "directed_numbers",
        subTopic: "שימוש בסוגריים",
        question_text: "שימו לב לכפל ולסוגריים. מהי התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-3 × (5 - 8) = ?</div>",
        options: ["9", "-9", "-39", "1"],
        correctAnswer: 0,
        hint: "פתרו את הסוגריים (5 פחות 8 ייתן מספר שלילי). אז כפלו מינוס במינוס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתור את החיסור בסוגריים. 5 פחות 8 נותן מספר שלילי.&rlm;", math_expression: "5 - 8 = -3" },
            { verbal_explanation: "שלב ב': נבצע את פעולת הכפל מחוץ לסוגריים. מינוס 3 כפול מינוס 3.&rlm;", math_expression: "-3 × (-3)" },
            { verbal_explanation: "שלב ג': מינוס כפול מינוס הופך לפלוס. 3 כפול 3 שווה 9.&rlm;", math_expression: "9" }
        ],
        final_answer: "9"
    },
    // שאלה 39
    {
        topic: "directed_numbers",
        subTopic: "שימוש בסוגריים",
        question_text: "מה ההבדל בין הביטויים הבאים? מה תוצאתם?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(-4)²   לעומת   -4²</div>",
        options: ["שניהם שווים 16", "שניהם שווים -16", "הראשון שווה 16 והשני שווה -16", "הראשון שווה -16 והשני שווה 16"],
        correctAnswer: 2,
        hint: "בביטוי הראשון הסוגריים מורים לנו להכפיל את המינוס 4 בעצמו. בביטוי השני, החזקה פועלת רק על ה-4, והמינוס נשאר בחוץ!&rlm;",
        solution_steps: [
            { verbal_explanation: "נפתור את הביטוי הראשון: מינוס 4 נמצא כולו בסוגריים ועולה בריבוע. מינוס כפול מינוס נותן פלוס.&rlm;", math_expression: "(-4)² = (-4) × (-4) = 16" },
            { verbal_explanation: "נפתור את הביטוי השני: לחזקה יש קדימות לפני סימן המינוס. נעלה רק את 4 בריבוע (16) ונוסיף את המינוס בסוף.&rlm;", math_expression: "-4² = -(4 × 4) = -16" }
        ],
        final_answer: "הראשון שווה 16 והשני שווה -16"
    },
    // שאלה 40
    {
        topic: "directed_numbers",
        subTopic: "שימוש בסוגריים",
        question_text: "חשבו את תוצאת התרגיל המורכב הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>20 - [ -5 + (-3 × 2) ] = ?</div>",
        options: ["31", "9", "25", "11"],
        correctAnswer: 0,
        hint: "התחילו מהסוגריים הפנימיים ביותר (הכפל). אח\"כ פתרו את מה שבסוגריים המרובעים. בסוף חסרו מ-20.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתור את הכפל בתוך הסוגריים הפנימיים.&rlm;", math_expression: "-3 × 2 = -6" },
            { verbal_explanation: "שלב ב': נעדכן את מה שבתוך הסוגריים המרובעים. 5- ועוד 6- הם חובות שמצטברים.&rlm;", math_expression: "-5 + (-6) = -11" },
            { verbal_explanation: "שלב ג': כעת התרגיל הוא 20 פחות (11-). מינוס מינוס הופך לפלוס.&rlm;", math_expression: "20 - (-11) = 20 + 11 = 31" }
        ],
        final_answer: "31"
    },
    // שאלה 41
    {
        topic: "directed_numbers",
        subTopic: "שימוש בסוגריים",
        question_text: "פתיחת סוגריים עם חוק הפילוג. פשטו את הביטוי:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-2(3x - 4) = ?</div>",
        options: ["-6x + 8", "-6x - 8", "6x - 8", "-6x - 4"],
        correctAnswer: 0,
        hint: "הכפילו את 2- ב-3x. לאחר מכן, הכפילו את 2- ב-4-. מינוס כפול מינוס הוא פלוס!&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול 2- ב-3x ונקבל 6x-.&rlm;", math_expression: "-2 × 3x = -6x" },
            { verbal_explanation: "נכפול 2- ב-4- (כולל המינוס שלפני הארבע). מינוס כפול מינוס הוא פלוס.&rlm;", math_expression: "-2 × (-4) = +8" },
            { verbal_explanation: "נרשום את הביטוי הסופי.&rlm;", math_expression: "-6x + 8" }
        ],
        final_answer: "-6x + 8"
    },
    // שאלה 42
    {
        topic: "directed_numbers",
        subTopic: "שימוש בסוגריים",
        question_text: "הצבת מספר שלילי. נתון הביטוי האלגברי: a² - 3a. מה תהיה התוצאה אם נציב a = -2 ?&rlm;",
        options: ["10", "-2", "-10", "2"],
        correctAnswer: 0,
        hint: "כאשר מציבים מספר שלילי בביטוי, חובה להקיף אותו בסוגריים! הציבו כך: (-2)² - 3 × (-2).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב 2- במקום האות a, תוך שימוש בסוגריים.&rlm;", math_expression: "(-2)² - 3 × (-2)" },
            { verbal_explanation: "שלב ב': נחשב את החזקה. מינוס 2 כפול מינוס 2 זה 4 חיובי.&rlm;", math_expression: "4 - 3 × (-2)" },
            { verbal_explanation: "שלב ג': נחשב את הכפל. מינוס 3 כפול מינוס 2 זה פלוס 6.&rlm;", math_expression: "4 + 6 = 10" }
        ],
        final_answer: "10"
    },
    // שאלה 43
    {
        topic: "directed_numbers",
        subTopic: "שימוש בסוגריים",
        question_text: "פתרו את תרגיל השבר הבא (זכרו, קו שבר מתפקד כמו סוגריים למונה ולמכנה):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(-15 + 3) / (-3 - 1) = ?</div>",
        options: ["3", "-3", "4.5", "-4.5"],
        correctAnswer: 0,
        hint: "חשבו את המונה בנפרד (15- פלוס 3), חשבו את המכנה בנפרד (3- פחות 1), ורק אז חלקו את התוצאות זו בזו.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב המונה. מינוס 15 ועוד 3 נותן מינוס 12.&rlm;", math_expression: "-15 + 3 = -12" },
            { verbal_explanation: "שלב ב': חישוב המכנה. מינוס 3 פחות 1 נותן מינוס 4.&rlm;", math_expression: "-3 - 1 = -4" },
            { verbal_explanation: "שלב ג': נחלק מונה במכנה. מינוס 12 לחלק למינוס 4. מינוס ומינוס מבטלים זה את זה.&rlm;", math_expression: "-12 : (-4) = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 44
    {
        topic: "directed_numbers",
        subTopic: "שימוש בסוגריים",
        question_text: "מהו הערך של x במשוואה הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2(x - 5) = -14</div>",
        options: ["-2", "2", "-12", "12"],
        correctAnswer: 0,
        hint: "פתחו את הסוגריים לפי חוק הפילוג (2x - 10), ואז העבירו את ה-10 אגף בפלוס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פתיחת סוגריים באגף שמאל.&rlm;", math_expression: "2x - 10 = -14" },
            { verbal_explanation: "שלב ב': נוסיף 10 לשני האגפים כדי לבודד את x.&rlm;", math_expression: "2x = -14 + 10 = -4" },
            { verbal_explanation: "שלב ג': נחלק ב-2.&rlm;", math_expression: "x = -4 : 2 = -2" }
        ],
        final_answer: "-2"
    },
    // שאלה 45
    {
        topic: "directed_numbers",
        subTopic: "שימוש בסוגריים",
        question_text: "חשבו את תוצאת התרגיל (שימו לב לכמות המינוסים):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>- ( - ( -5 ) ) = ?</div>",
        options: ["-5", "5", "0", "15"],
        correctAnswer: 0,
        hint: "כל זוג של 'מינוס מינוס' הופך לפלוס. התחילו מבפנים החוצה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסתכל על הסוגריים הפנימיים: מינוס של (5-). זה הופך לפלוס 5.&rlm;", math_expression: "-(-5) = 5" },
            { verbal_explanation: "שלב ב': עכשיו נשאר לנו המינוס הכי שמאלי שעומד מחוץ לסוגריים מול התוצאה החיובית 5.&rlm;", math_expression: "-(5) = -5" }
        ],
        final_answer: "-5"
    },
    // שאלה 46
    {
        topic: "directed_numbers",
        subTopic: "שימוש בסוגריים",
        question_text: "תרגיל מסכם. פתרו לאט ובזהירות לפי סדר פעולות חשבון:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-20 : 4 - (-3)² = ?</div>",
        options: ["-14", "14", "-4", "4"],
        correctAnswer: 0,
        hint: "חזקה קודמת לכל! חשבו קודם כמה זה ²(3-). לאחר מכן בצעו את חילוק, ולבסוף את החיסור שבאמצע.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב החזקה. מינוס 3 בריבוע הוא פלוס 9 (כי מינוס כפול מינוס).&rlm;", math_expression: "(-3)² = 9" },
            { verbal_explanation: "שלב ב': נעדכן את התרגיל ונבצע חילוק.&rlm;", math_expression: "-20 : 4 - 9" },
            { verbal_explanation: "שלב ג': מינוס 20 לחלק ל-4 זה מינוס 5.&rlm;", math_expression: "-5 - 9" },
            { verbal_explanation: "שלב ד': מינוס 5 פחות 9 מעמיק את החוב למינוס 14.&rlm;", math_expression: "-14" }
        ],
        final_answer: "-14"
    },
    // שאלה 47
    {
        topic: "directed_numbers",
        subTopic: "שימוש בסוגריים",
        question_text: "קבעו האם המשוואה הבאה נכונה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-(a + b) = -a - b</div>",
        options: ["נכונה, זהו חוק הפילוג של מינוס", "שגויה, המינוס שייך רק ל-a", "נכונה רק אם a ו-b חיוביים", "שגויה, זה צריך להיות פלוס b"],
        correctAnswer: 0,
        hint: "מינוס מחוץ לסוגריים הוא כמו כפל ב- 1-. כשכופלים מינוס אחד בסכום, הוא הופך את הסימן של כל אחד מהאיברים בפנים.&rlm;",
        solution_steps: [
            { verbal_explanation: "סימן מינוס לפני סוגריים שקול להכפלה ב- (1-).&rlm;", math_expression: "-1 × (a + b)" },
            { verbal_explanation: "לפי חוק הפילוג, יש להכפיל כל איבר בפנים במינוס 1.&rlm;", math_expression: "-1 × a + -1 × b = -a - b" },
            { verbal_explanation: "לכן, פתיחת סוגריים עם מינוס לפני הופכת את הסימן של כל האיברים בפנים. המשוואה נכונה תמיד.&rlm;", math_expression: "" }
        ],
        final_answer: "נכונה, זהו חוק הפילוג של מינוס"
    },
    // שאלה 48
    {
        topic: "directed_numbers",
        subTopic: "שימוש בסוגריים",
        question_text: "הוצאת גורם משותף שלילי. כנסו את האיברים בביטוי הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-3x - 12 = ?</div>",
        options: ["-3(x + 4)", "-3(x - 4)", "3(x - 4)", "-3(x + 12)"],
        correctAnswer: 0,
        hint: "אם מוציאים מינוס 3 מחוץ לסוגריים, חייבים לחלק את מינוס 12 במינוס 3. מינוס לחלק למינוס זה פלוס!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': אנו רוצים להוציא את הגורם המשותף המקסימלי, שהוא 3-.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחלק את האיבר הראשון: 3x- לחלק ל-3- ייתן x.&rlm;", math_expression: "-3x : (-3) = x" },
            { verbal_explanation: "שלב ג': נחלק את האיבר השני: 12- לחלק ל-3- ייתן פלוס 4.&rlm;", math_expression: "-12 : (-3) = +4" },
            { verbal_explanation: "שלב ד': נרכיב את התוצאה בתוך הסוגריים.&rlm;", math_expression: "-3(x + 4)" }
        ],
        final_answer: "-3(x + 4)"
    }

];
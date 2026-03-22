// ========================================================================
// שכבת גיל: כיתה ח'-ט' | נושא: משוואות ואי שוויונות
// 4 תתי נושאים | 48 שאלות סה"כ
// פתרונות מפורטים צעד אחר צעד (האכלה בכפית), איורי SVG לייצוג אי שוויונות.
// כתיבה נקייה: חילוק מיוצג כ- (:), כפל כ- (×), שברים כ- (1/2). ללא LaTeX.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: משוואות עם מכנה מספרי (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם מכנה מספרי",
        question_text: "פתרו את המשוואה הבאה ומצאו את x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x : 3 = 5</div>",
        options: ["15", "8", "2", "1.66"],
        correctAnswer: 0,
        hint: "המכנה הוא 3 (כמו שבר x/3). כדי לבטל את החילוק ב-3, כפלו את שני אגפי המשוואה ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': מטרתנו לבודד את ה-x. הנעלם מחולק ב-3.", math_expression: "x : 3 = 5" },
            { verbal_explanation: "שלב ב': נבצע את הפעולה ההפוכה לחילוק - נכפול את שני אגפי המשוואה ב-3.", math_expression: "(x : 3) × 3 = 5 × 3" },
            { verbal_explanation: "שלב ג': נחשב את התוצאה באגף ימין.", math_expression: "x = 15" }
        ],
        final_answer: "15"
    },
    // שאלה 2
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם מכנה מספרי",
        question_text: "מצאו את x במשוואה הכוללת שבר:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(2x) : 5 = 4</div>",
        options: ["10", "20", "2.5", "15"],
        correctAnswer: 0,
        hint: "הכפילו תחילה את כל המשוואה ב-5 כדי להיפטר מהמכנה. לאחר מכן חלקו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את שני האגפים ב-5 כדי 'לחלץ' את המונה.", math_expression: "2x = 4 × 5" },
            { verbal_explanation: "שלב ב': נחשב את הכפל באגף ימין.", math_expression: "2x = 20" },
            { verbal_explanation: "שלב ג': כעת נחלק את המשוואה ב-2 כדי לבודד את x.", math_expression: "x = 20 : 2 = 10" }
        ],
        final_answer: "10"
    },
    // שאלה 3
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם מכנה מספרי",
        question_text: "משוואה עם ביטוי במונה. מצאו את הערך של x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 4) : 2 = 7</div>",
        options: ["10", "14", "18", "3"],
        correctAnswer: 0,
        hint: "התייחסו למונה (x+4) כאל גוש אחד. כפלו את המשוואה ב-2, ואז חסרו 4.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את שני האגפים במכנה (2).", math_expression: "x + 4 = 7 × 2" },
            { verbal_explanation: "שלב ב': נחשב את הכפל בימין.", math_expression: "x + 4 = 14" },
            { verbal_explanation: "שלב ג': נעביר את 4 לאגף ימין בחיסור (או נחסר 4 משני האגפים).", math_expression: "x = 14 - 4" },
            { verbal_explanation: "נקבל את התשובה הסופית.", math_expression: "x = 10" }
        ],
        final_answer: "10"
    },
    // שאלה 4
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם מכנה מספרי",
        question_text: "פתרו משוואה שבה הנעלם נמצא משני צידי קו השבר בנפרד (שני מכנים זהים):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(3x) : 4 - (x) : 4 = 5</div>",
        options: ["10", "20", "2", "5"],
        correctAnswer: 0,
        hint: "המכנים זהים. אפשר פשוט לחסר את המונים: 3x פחות x. או להכפיל את כל המשוואה ב-4 מההתחלה.&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א': מכיוון שהמכנה שווה (4), נחסר את המונים ישירות.", math_expression: "(3x - x) : 4 = 5" },
            { verbal_explanation: "נכנס איברים במונה.", math_expression: "(2x) : 4 = 5" },
            { verbal_explanation: "נכפול ב-4.", math_expression: "2x = 20" },
            { verbal_explanation: "נחלק ב-2 למציאת x.", math_expression: "x = 10" }
        ],
        final_answer: "10"
    },
    // שאלה 5
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם מכנה מספרי",
        question_text: "מה עושים כשיש שני מכנים מספריים שונים? פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x : 2 = (x + 3) : 5</div>",
        options: ["2", "1", "3", "5"],
        correctAnswer: 0,
        hint: "מכנה משותף מינימלי הוא 10. אפשר פשוט לעשות 'כפל בהצלבה': 5 כפול x, ו-2 כפול (x+3).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול כל צד במכנה של הצד השני (כפל בהצלבה).", math_expression: "5 × x = 2 × (x + 3)" },
            { verbal_explanation: "שלב ב': נפתח סוגריים באגף ימין.", math_expression: "5x = 2x + 6" },
            { verbal_explanation: "שלב ג': נעביר את 2x שמאלה במינוס.", math_expression: "5x - 2x = 6" },
            { verbal_explanation: "שלב ד': נכנס איברים (3x) ונחלק ב-3.", math_expression: "3x = 6  =>  x = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 6
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם מכנה מספרי",
        question_text: "משוואה עם שבר ומספר שלם. מצאו את x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x : 4 + 2 = 7</div>",
        options: ["20", "5", "36", "18"],
        correctAnswer: 0,
        hint: "העבירו את ה-2 אגף קודם (לפני הכפל ב-4). זה יקל על החישוב.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': מומלץ לבודד קודם כל את השבר. נחסר 2 משני האגפים.", math_expression: "x : 4 = 7 - 2" },
            { verbal_explanation: "שלב ב': נחשב את אגף ימין.", math_expression: "x : 4 = 5" },
            { verbal_explanation: "שלב ג': נכפול את שני האגפים במכנה 4.", math_expression: "x = 5 × 4 = 20" }
        ],
        final_answer: "20"
    },
    // שאלה 7
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם מכנה מספרי",
        question_text: "כאן צריך מכנה משותף לכל המשוואה. פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x : 3 - x : 4 = 2</div>",
        options: ["24", "12", "6", "2"],
        correctAnswer: 0,
        hint: "המכנה המשותף של 3 ו-4 הוא 12. כפלו כל אחד מהאיברים במשוואה ב-12.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את כל איברי המשוואה במכנה המשותף 12 כדי לבטל את השברים.", math_expression: "" },
            { verbal_explanation: "שלב ב': האיבר הראשון: (x:3) כפול 12 שווה 4x.", math_expression: "4x" },
            { verbal_explanation: "שלב ג': האיבר השני: (x:4) כפול 12 שווה 3x.", math_expression: "- 3x" },
            { verbal_explanation: "שלב ד': לא נשכח לכפול גם את ה-2 שבאגף הימני ב-12.", math_expression: "4x - 3x = 2 × 12" },
            { verbal_explanation: "שלב ה': נחשב ונקבל את x.", math_expression: "x = 24" }
        ],
        final_answer: "24"
    },
    // שאלה 8
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם מכנה מספרי",
        question_text: "שימו לב למינוס שלפני קו השבר! פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x - (x - 2) : 2 = 4</div>",
        options: ["6", "10", "2", "8"],
        correctAnswer: 0,
        hint: "כפלו את כל המשוואה ב-2. המינוס שמול השבר יהפוך את הסימנים שבתוך המונה: 2x - (x - 2) = 8.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את כל המשוואה ב-2 כדי להיפטר מהמכנה.", math_expression: "2 × x - (x - 2) = 4 × 2" },
            { verbal_explanation: "שלב ב': נפתח את הסוגריים. המינוס משנה את הסימנים בפנים.", math_expression: "2x - x + 2 = 8" },
            { verbal_explanation: "שלב ג': נכנס איברים (2x פחות x זה x). ונעביר את ה-2 ימינה בחיסור.", math_expression: "x = 8 - 2 = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 9
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם מכנה מספרי",
        question_text: "אתגר מכנה משותף עם ביטויים ארוכים. מצאו את x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(2x - 1) : 3 = (x + 5) : 2</div>",
        options: ["17", "11", "5", "7"],
        correctAnswer: 0,
        hint: "כפל בהצלבה! 2 יוכפל במונה השמאלי, ו-3 יוכפל במונה הימני. 2(2x-1) = 3(x+5).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבצע כפל באלכסון (הצלבה).", math_expression: "2 × (2x - 1) = 3 × (x + 5)" },
            { verbal_explanation: "שלב ב': נפתח סוגריים לפי חוק הפילוג בשני האגפים.", math_expression: "4x - 2 = 3x + 15" },
            { verbal_explanation: "שלב ג': נעביר איקסים שמאלה ומספרים ימינה.", math_expression: "4x - 3x = 15 + 2" },
            { verbal_explanation: "שלב ד': נחשב ונקבל את התוצאה.", math_expression: "x = 17" }
        ],
        final_answer: "17"
    },
    // שאלה 10
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם מכנה מספרי",
        question_text: "קבעו מהי טעות נפוצה בפתרון המשוואה x/5 = x/10 + 2 ?&rlm;",
        options: ["לכפול את השברים במכנה, אבל לשכוח לכפול גם את המספר 2 ב-10.", "להחסיר 2 משני האגפים.", "להכפיל את המכנים זה בזה.", "לחלק את x ב-5."],
        correctAnswer: 0,
        hint: "כשמכפילים משוואה במכנה משותף (למשל 10), הכלל הוא ש*כל* האיברים צריכים להיות מוכפלים, כולל המספרים השלמים!&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי לפתור את המשוואה, המכנה המשותף הוא 10.", math_expression: "" },
            { verbal_explanation: "יש להכפיל כל איבר. השבר הראשון יוכפל ב-2, השבר השני ב-1.", math_expression: "2x = x + 20" },
            { verbal_explanation: "טעות קריטית תהיה לשכוח להכפיל את המספר השלם (2) במכנה المשותף.", math_expression: "" }
        ],
        final_answer: "לכפול את השברים במכנה, אבל לשכוח לכפול גם את המספר 2 ב-10."
    },
    // שאלה 11
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם מכנה מספרי",
        question_text: "פתרו משוואה פשוטה למראית עין:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-x : 4 = 3</div>",
        options: ["-12", "12", "-0.75", "1"],
        correctAnswer: 0,
        hint: "כפלו ב-4. תקבלו 12 = x-. איך הופכים את ה-x לחיובי? כופלים במינוס 1.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את המשוואה ב-4 כדי להעלים את המכנה.", math_expression: "-x = 3 × 4 = 12" },
            { verbal_explanation: "שלב ב': נחלק (או נכפול) ב- (1-) כדי למצוא את ערכו של x החיובי.", math_expression: "x = -12" }
        ],
        final_answer: "-12"
    },
    // שאלה 12
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם מכנה מספרי",
        question_text: "משוואה עם שברים המבטלים זה את זה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 3) : 2 - (x + 3) : 2 = 0</div>",
        options: ["כל מספר מותר (אינסוף פתרונות)", "אין פתרון", "x = 3", "x = -3"],
        correctAnswer: 0,
        hint: "אנחנו מחסרים ביטוי מעצמו. התוצאה היא תמיד אפס, לא משנה איזה מספר תציבו במקום x!&rlm;",
        solution_steps: [
            { verbal_explanation: "שני השברים באגף שמאל זהים לחלוטין.", math_expression: "" },
            { verbal_explanation: "חיסור של ביטוי מעצמו נותן תמיד 0. לכן משוואה זו מתפשטת ל- 0 = 0.", math_expression: "0 = 0" },
            { verbal_explanation: "זהו פסוק אמת שתמיד נכון. ולכן כל מספר חוקי שיוצב ב-x ייתן פתרון נכון.", math_expression: "" }
        ],
        final_answer: "כל מספר מותר (אינסוף פתרונות)"
    },

    // ==========================================================
    // תת נושא 2: משוואות עם נעלם במכנה (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם נעלם במכנה",
        question_text: "לפני שמתחילים לפתור משוואה שבה ה-x נמצא במכנה, מה חובה לרשום (לבדוק)?&rlm;",
        options: ["תחום הצבה (קבוצת ההצבה)", "את ציר ה-y", "נוסחת כפל מקוצר", "להעלות בריבוע את המשוואה"],
        correctAnswer: 0,
        hint: "במתמטיקה אסור לחלק באפס! חייבים לוודא אילו מספרים יגרמו למכנה להתאפס ולפסול אותם מראש.&rlm;",
        solution_steps: [
            { verbal_explanation: "מכיוון שהנעלם (x) מופיע במכנה, קיימת סכנה שנציב מספר שיאפס את המכנה.", math_expression: "" },
            { verbal_explanation: "חלוקה באפס אינה חוקית. לכן, שלב החובה הראשון הוא מציאת התחום שבו מותר להציב מספרים (תחום ההצבה).", math_expression: "x ≠ 0" }
        ],
        final_answer: "תחום הצבה (קבוצת ההצבה)"
    },
    // שאלה 14
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם נעלם במכנה",
        question_text: "פתרו את המשוואה הבאה ומצאו את x (הניחו ש- x ≠ 0):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>10 : x = 2</div>",
        options: ["5", "20", "0.2", "8"],
        correctAnswer: 0,
        hint: "כפלו את שני האגפים ב-x. תקבלו 10 = 2x. עכשיו חלקו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את שני האגפים במכנה (x) כדי 'להעלות' אותו למונה.", math_expression: "10 = 2 × x" },
            { verbal_explanation: "שלב ב': נחלק את המשוואה ב-2 כדי לבודד את x.", math_expression: "x = 10 : 2" },
            { verbal_explanation: "שלב ג': נחשב ונוודא שהפתרון אינו מתנגש עם תחום ההצבה.", math_expression: "x = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 15
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם נעלם במכנה",
        question_text: "פתרון עם כפל בהצלבה. מצאו את x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>6 : x = 9 : 3</div>",
        options: ["2", "18", "1.5", "4"],
        correctAnswer: 0,
        hint: "השבר מימין הוא פשוט 3 (כי 9 חלקי 3 זה 3). המשוואה היא 6 : x = 3.&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א': נחשב קודם את האגף הימני (9 לחלק ל-3).", math_expression: "9 : 3 = 3" },
            { verbal_explanation: "כעת המשוואה היא: 6 לחלק ל-x שווה 3. כלומר 6 = 3x.", math_expression: "6 = 3x" },
            { verbal_explanation: "נחלק ב-3 ונקבל x=2.", math_expression: "x = 2" },
            { verbal_explanation: "דרך ב': כפל בהצלבה. 6 כפול 3 שווה 9 כפול x. 18 = 9x. התשובה היא 2.", math_expression: "" }
        ],
        final_answer: "2"
    },
    // שאלה 16
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם נעלם במכנה",
        question_text: "מהו תחום ההצבה (התנאי) עבור המשוואה הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>12 : (x - 4) = 3</div>",
        options: ["x ≠ 4", "x ≠ 0", "x ≠ -4", "x ≠ 3"],
        correctAnswer: 0,
        hint: "קחו את המכנה (x - 4) וקבעו שהוא חייב להיות שונה מ-0.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נדרוש שהמכנה של השבר לא יתאפס.", math_expression: "x - 4 ≠ 0" },
            { verbal_explanation: "שלב ב': נעביר את 4 ימינה (הופך חיובי).", math_expression: "x ≠ 4" }
        ],
        final_answer: "x ≠ 4"
    },
    // שאלה 17
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם נעלם במכנה",
        question_text: "בהמשך לשאלה הקודמת, פתרו את המשוואה:<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>12 : (x - 4) = 3</div>",
        options: ["8", "16", "6", "0"],
        correctAnswer: 0,
        hint: "כפלו את שני האגפים ב- (x - 4). תקבלו: 12 = 3*(x-4). פתחו סוגריים ופתרו.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול במכנה את שני האגפים.", math_expression: "12 = 3 × (x - 4)" },
            { verbal_explanation: "שלב ב': נפתח סוגריים.", math_expression: "12 = 3x - 12" },
            { verbal_explanation: "שלב ג': נעביר את 12- שמאלה (יהפוך לפלוס 12).", math_expression: "12 + 12 = 3x  =>  24 = 3x" },
            { verbal_explanation: "שלב ד': נחלק ב-3.", math_expression: "x = 8" }
        ],
        final_answer: "8"
    },
    // שאלה 18
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם נעלם במכנה",
        question_text: "משוואה עם נעלמים בשני המכנים. מצאו את x (הניחו x ≠ 0 ו- x ≠ -1):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5 : x = 10 : (x + 1)</div>",
        options: ["1", "2", "-1", "5"],
        correctAnswer: 0,
        hint: "עשו כפל בהצלבה: 5 כפול (x+1) שווה ל-10 כפול x.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': כפל בהצלבה של המונים והמכנים הנגדיים.", math_expression: "5 × (x + 1) = 10 × x" },
            { verbal_explanation: "שלב ב': נפתח סוגריים בשמאל.", math_expression: "5x + 5 = 10x" },
            { verbal_explanation: "שלב ג': נעביר 5x לאגף ימין בחיסור.", math_expression: "5 = 10x - 5x  =>  5 = 5x" },
            { verbal_explanation: "שלב ד': נחלק ב-5.", math_expression: "x = 1" }
        ],
        final_answer: "1"
    },
    // שאלה 19
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם נעלם במכנה",
        question_text: "מה עושים כשהנעלם במכנה מופיע עם סימן מינוס? פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>8 : (-2x) = -2</div>",
        options: ["2", "-2", "4", "-4"],
        correctAnswer: 0,
        hint: "כפלו ב-2x-. מינוס 2 כפול מינוס 2x שווה ל-4x חיובי. 8 = 4x.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את המשוואה כולה במכנה (2x-).", math_expression: "8 = (-2) × (-2x)" },
            { verbal_explanation: "שלב ב': נבצע את הכפל. מינוס כפול מינוס נותן פלוס 4x.", math_expression: "8 = 4x" },
            { verbal_explanation: "שלב ג': נחלק ב-4.", math_expression: "x = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 20
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם נעלם במכנה",
        question_text: "מלכודת 'פתרון נפסל'! פתרו את המשוואה ובדקו אם הפתרון חוקי:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x² - 4) : (x - 2) = 4</div>",
        options: ["אין פתרון (הפתרון x=2 נפסל בגלל תחום הצבה)", "x = 2", "x = -2", "x = 4"],
        correctAnswer: 0,
        hint: "פרקו את המונה ל- (x-2)(x+2) וצמצמו. תקבלו x+2 = 4, כלומר x=2. אבל רגע! האם מותר להציב 2 במכנה המקורי (x-2)?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את תחום ההצבה תחילה! המכנה (x-2) שונה מאפס. כלומר x שונה מ-2.", math_expression: "x ≠ 2" },
            { verbal_explanation: "שלב ב': נפרק ונצמצם את השבר (בעזרת הפרש ריבועים).", math_expression: "[(x-2)(x+2)] : (x-2) = x + 2" },
            { verbal_explanation: "שלב ג': נפתור את המשוואה המפושטת.", math_expression: "x + 2 = 4  =>  x = 2" },
            { verbal_explanation: "שלב ד': נשווה את הפתרון (x=2) לתחום ההצבה. מכיוון ש-2 אסור להצבה, אנו פוסלים את הפתרון.", math_expression: "הפתרון נפסל." }
        ],
        final_answer: "אין פתרון (הפתרון x=2 נפסל בגלל תחום הצבה)"
    },
    // שאלה 21
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם נעלם במכנה",
        question_text: "משוואה עם שני שברים זהים. פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3 : x + 2 : x = 10</div>",
        options: ["0.5 (חצי)", "2", "5", "0.2 (חמישית)"],
        correctAnswer: 0,
        hint: "חברו את המונים מכיוון שהמכנה זהה (5 חלקי x שווה 10). ואז כפלו ב-x וחילקו ב-10.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חיבור השברים על ידי חיבור המונים.", math_expression: "(3 + 2) : x = 10" },
            { verbal_explanation: "שלב ב': פישוט השבר.", math_expression: "5 : x = 10" },
            { verbal_explanation: "שלב ג': כפל ב-x להעלאתו מהמכנה.", math_expression: "5 = 10 × x" },
            { verbal_explanation: "שלב ד': חילוק ב-10. 5 חלקי 10 הם חצי.", math_expression: "x = 5 : 10 = 0.5" }
        ],
        final_answer: "0.5 (חצי)"
    },
    // שאלה 22
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם נעלם במכנה",
        question_text: "קצת אתגר (הוצאת גורם משותף בפתרון):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(4x - 6) : (2x) = 1</div>",
        options: ["3", "1.5", "2", "6"],
        correctAnswer: 0,
        hint: "כפלו ב-2x. המשוואה תהיה 4x - 6 = 2x. העבירו 2x שמאלה ואת 6 ימינה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפול את המשוואה במכנה (2x) (בהנחה ש-x שונה מ-0).", math_expression: "4x - 6 = 1 × 2x" },
            { verbal_explanation: "שלב ב': נסדר איברים. נעביר 2x שמאלה בחיסור, ו-6 ימינה בחיבור.", math_expression: "4x - 2x = 6" },
            { verbal_explanation: "שלב ג': כינוס (2x) וחלוקה ב-2.", math_expression: "2x = 6  =>  x = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 23
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם נעלם במכנה",
        question_text: "מה עושים כששני שברים מחוסרים זה מזה ויוצרים אפס? מצאו את x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>7 : (x + 1) - 7 : (2x - 3) = 0</div>",
        options: ["4", "1", "3", "0"],
        correctAnswer: 0,
        hint: "העבירו את השבר השני (עם המינוס) לאגף ימין, כך שתקבלו שבר = שבר. מכיוון שהמונים שווים (7), גם המכנים חייבים להיות שווים! x+1 = 2x-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נעביר את השבר השלילי לאגף ימין.", math_expression: "7 : (x + 1) = 7 : (2x - 3)" },
            { verbal_explanation: "שלב ב': אם שני שברים שווים זה לזה והמונים שלהם שווים, גם המכנים שלהם חייבים להיות שווים.", math_expression: "x + 1 = 2x - 3" },
            { verbal_explanation: "שלב ג': נפתור. נעביר x ימינה (יישארו 1x) ו-3 שמאלה בחיבור (יהפוך ל-4).", math_expression: "1 + 3 = 2x - x" },
            { verbal_explanation: "התוצאה.", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },
    // שאלה 24
    {
        topic: "equations_inequalities",
        subTopic: "משוואות עם נעלם במכנה",
        question_text: "שאלה אחרונה בנושא: מה הפתרון של המשוואה הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2 : x + 3 = 3 + 2 : x</div>",
        options: ["כל x (למעט 0)", "אין פתרון", "x = 2", "x = 3"],
        correctAnswer: 0,
        hint: "זהו שוויון מושלם (זהות). כל מספר שונה מאפס יקיים אותו.&rlm;",
        solution_steps: [
            { verbal_explanation: "האגפים זהים לחלוטין. אם נעביר את 3 ימינה בחיסור ואת (2:x) שמאלה בחיסור, הכל יתאפס ונקבל 0=0.", math_expression: "0 = 0" },
            { verbal_explanation: "במשוואת זהות, כל הצבה אפשרית היא פתרון.", math_expression: "" },
            { verbal_explanation: "אולם, יש להתחשב בתחום ההצבה: חלוקה ב-x אוסרת על x להיות 0. לכן כל מספר מלבד 0 מתאים.", math_expression: "x ≠ 0" }
        ],
        final_answer: "כל x (למעט 0)"
    },

    // ==========================================================
    // תת נושא 3: פתרון אי שוויונות (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "equations_inequalities",
        subTopic: "פתרון אי שוויונות",
        question_text: "כיצד פותרים אי שוויון רגיל? פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x + 4 > 10</div>",
        options: ["x > 6", "x < 6", "x = 6", "x > 14"],
        correctAnswer: 0,
        hint: "העבירו את ה-4 לאגף ימין, בדיוק כמו במשוואה רגילה, ושמרו על כיוון הסימן '&gt;'.&rlm;",
        solution_steps: [
            { verbal_explanation: "פתרון אי שוויון מתבצע (ברובו) בדיוק כמו משוואה רגילה.&rlm;", math_expression: "" },
            { verbal_explanation: "נעביר את המספר 4 לצד ימין בסימן חיסור.&rlm;", math_expression: "x > 10 - 4" },
            { verbal_explanation: "התוצאה:&rlm;", math_expression: "x > 6" }
        ],
        final_answer: "x > 6"
    },
    // שאלה 26
    {
        topic: "equations_inequalities",
        subTopic: "פתרון אי שוויונות",
        question_text: "פתרו את אי השוויון הכולל כפל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3x ≤ 15</div>",
        options: ["x ≤ 5", "x ≥ 5", "x = 5", "x ≤ 12"],
        correctAnswer: 0,
        hint: "חלקו את שני האגפים ב-3 החיובי. כיוון הסימן אינו משתנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי לבודד את x, נחלק את שני צידי אי השוויון ב-3.&rlm;", math_expression: "x ≤ 15 : 3" },
            { verbal_explanation: "מכיוון שחילקנו במספר חיובי (3), כיוון אי השוויון נשאר כפי שהיה.&rlm;", math_expression: "x ≤ 5" }
        ],
        final_answer: "x ≤ 5"
    },
    // שאלה 27
    {
        topic: "equations_inequalities",
        subTopic: "פתרון אי שוויונות",
        question_text: "חוק חשוב מאוד! פתרו את אי השוויון הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-2x > 8</div>",
        options: ["x < -4", "x > -4", "x > 4", "x < 4"],
        correctAnswer: 0,
        hint: "כאשר כופלים או מחלקים אי שוויון במספר **שלילי** (כמו 2- במקרה שלנו), חובה להפוך את כיוון אי השוויון! (מ-> ל-<).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחלק את שני האגפים במקדם של x, שהוא מינוס 2.&rlm;", math_expression: "x ... 8 : (-2)" },
            { verbal_explanation: "שלב ב': מכיוון שחילקנו במספר שלילי, חוקי האי שוויון מחייבים אותנו 'להפוך' את הסימן (מ-'גדול מ-' ל-'קטן מ-').&rlm;", math_expression: "x < -4" }
        ],
        final_answer: "x < -4"
    },
    // שאלה 28
    {
        topic: "equations_inequalities",
        subTopic: "פתרון אי שוויונות",
        question_text: "פתרו את אי השוויון, וזכרו את חוק היפוך הסימן אם תצטרכו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>10 - 5x ≥ 25</div>",
        options: ["x ≤ -3", "x ≥ -3", "x ≤ 3", "x ≥ 3"],
        correctAnswer: 0,
        hint: "העבירו את ה-10 ימינה (תקבלו 15). לאחר מכן חלקו במינוס 5, והפכו את הסימן מ-≥ ל-≤.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחסר 10 משני האגפים.&rlm;", math_expression: "-5x ≥ 25 - 10" },
            { verbal_explanation: "שלב ב': נחשב.&rlm;", math_expression: "-5x ≥ 15" },
            { verbal_explanation: "שלב ג': נחלק במינוס 5. כיוון שחילקנו במספר שלילי, הסימן מתהפך.&rlm;", math_expression: "x ≤ 15 : (-5)  =>  x ≤ -3" }
        ],
        final_answer: "x ≤ -3"
    },
    // שאלה 29
    {
        topic: "equations_inequalities",
        subTopic: "פתרון אי שוויונות",
        question_text: "פתרו אי שוויון עם נעלמים בשני האגפים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4x - 2 < 2x + 8</div>",
        options: ["x < 5", "x > 5", "x < 3", "x < -5"],
        correctAnswer: 0,
        hint: "העבירו 2x שמאלה (4x-2x) ואת מינוס 2 ימינה (8+2). המקדם של x יהיה חיובי, אז אין צורך להפוך סימן.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסדר אגפים. 2x עובר שמאלה במינוס, ו-2 ימינה בפלוס.&rlm;", math_expression: "4x - 2x < 8 + 2" },
            { verbal_explanation: "שלב ב': נכנס איברים.&rlm;", math_expression: "2x < 10" },
            { verbal_explanation: "שלב ג': נחלק ב-2 الحיובי. הסימן נשאר כפי שהוא.&rlm;", math_expression: "x < 5" }
        ],
        final_answer: "x < 5"
    },
    // שאלה 30
    {
        topic: "equations_inequalities",
        subTopic: "פתרון אי שוויונות",
        question_text: "איזה מהמספרים הבאים **אינו** מהווה פתרון לאי השוויון: x ≥ 7 ?&rlm;",
        options: ["6", "7", "8", "100"],
        correctAnswer: 0,
        hint: "הסימן ≥ אומר 'גדול או שווה ל-7'. 7 הוא פתרון. 8 גם. מי לא מתאים?&rlm;",
        solution_steps: [
            { verbal_explanation: "אי השוויון x ≥ 7 דורש ש-x יהיה 7 או כל מספר שגדול ממנו.&rlm;", math_expression: "" },
            { verbal_explanation: "המספר 6 קטן מ-7, ולכן אינו מקיים את אי השוויון (פסוק שקר: 6 אינו גדול או שווה ל-7).&rlm;", math_expression: "" }
        ],
        final_answer: "6"
    },
    // שאלה 31
    {
        topic: "equations_inequalities",
        subTopic: "פתרון אי שוויונות",
        question_text: "פתרון של אי שוויון שיכול לקרות רק עם סוגריים. פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>- (x - 4) < 6</div>",
        options: ["x > -2", "x < -2", "x > 10", "x < 10"],
        correctAnswer: 0,
        hint: "פתחו סוגריים עם המינוס (-x + 4 < 6). העבירו את ה-4, ואז חלקו במינוס 1 (והפכו סימן).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פתיחת סוגריים.&rlm;", math_expression: "-x + 4 < 6" },
            { verbal_explanation: "שלב ב': נחסר 4 משני האגפים.&rlm;", math_expression: "-x < 6 - 4  =>  -x < 2" },
            { verbal_explanation: "שלב ג': נכפול (או נחלק) את שני האגפים במינוס 1. פעולה זו מחייבת הפיכת כיוון אי השוויון.&rlm;", math_expression: "x > -2" }
        ],
        final_answer: "x > -2"
    },
    // שאלה 32
    {
        topic: "equations_inequalities",
        subTopic: "פתרון אי שוויונות",
        question_text: "האם קבוצת הפתרונות של x > 5 שווה לקבוצת הפתרונות של 5 < x ?&rlm;",
        options: ["כן, זה בדיוק אותו אי שוויון הכתוב בצורה הפוכה.", "לא, הם הפוכים לחלוטין.", "כן, אבל רק למספרים חיוביים.", "לא, כי הסימן השתנה."],
        correctAnswer: 0,
        hint: "קראו את המשפטים בעברית: 'איקס גדול מחמש', לעומת 'חמש קטן מאיקס'. האם המשמעות זהה? בהחלט.&rlm;",
        solution_steps: [
            { verbal_explanation: "הצד ה'פתוח' (הגדול) של הסימן > מופנה תמיד כלפי ה-x בשני הביטויים.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, קריאה משמאל לימין או מימין לשמאל לא משנה את העובדה ש-x חייב להיות גדול מ-5.&rlm;", math_expression: "" }
        ],
        final_answer: "כן, זה בדיוק אותו אי שוויון הכתוב בצורה הפוכה."
    },
    // שאלה 33
    {
        topic: "equations_inequalities",
        subTopic: "פתרון אי שוויונות",
        question_text: "אי שוויון מורכב: פתרו.&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x : 2 + 5 ≤ 7</div>",
        options: ["x ≤ 4", "x ≥ 4", "x ≤ 6", "x ≥ 6"],
        correctAnswer: 0,
        hint: "חסרו 5 מה-7 (תקבלו 2). עכשיו כפלו ב-2. האם הופכים סימן כשכופלים ב-2? לא (כי 2 הוא חיובי).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחסר 5 משני האגפים.&rlm;", math_expression: "x : 2 ≤ 7 - 5  =>  x : 2 ≤ 2" },
            { verbal_explanation: "שלב ב': נכפול את המשוואה ב-2 חיובי (לכן לא הופכים סימן).&rlm;", math_expression: "x ≤ 2 × 2" },
            { verbal_explanation: "התוצאה:&rlm;", math_expression: "x ≤ 4" }
        ],
        final_answer: "x ≤ 4"
    },
    // שאלה 34
    {
        topic: "equations_inequalities",
        subTopic: "פתרון אי שוויונות",
        question_text: "מצב של 'פסוק אמת' באי שוויון. פתרו את:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2x + 5 > 2x + 1</div>",
        options: ["כל x (אינסוף פתרונות)", "אין פתרון", "x > 4", "x = 0"],
        correctAnswer: 0,
        hint: "חסרו 2x משני האגפים. תקבלו 5 > 1. האם 5 אכן גדול מ-1? כן, תמיד.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': ננסה לרכז את ה-x באגף אחד.&rlm;", math_expression: "2x - 2x > 1 - 5" },
            { verbal_explanation: "שלב ב': נקבל אפס שגדול ממינוס ארבע, או לחלופין 5 > 1 לפני העברת המספרים.&rlm;", math_expression: "0 > -4" },
            { verbal_explanation: "זהו פסוק אמת מוחלט. לכן, לא משנה מה נציב במקום x, אי השוויון תמיד יתקיים.&rlm;", math_expression: "" }
        ],
        final_answer: "כל x (אינסוף פתרונות)"
    },
    // שאלה 35
    {
        topic: "equations_inequalities",
        subTopic: "פתרון אי שוויונות",
        question_text: "מצב של 'פסוק שקר' באי שוויון. מה יקרה בתרגיל הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x < x - 2</div>",
        options: ["אין פתרון", "כל x פותר את זה", "x < -2", "x = 0"],
        correctAnswer: 0,
        hint: "האם מספר יכול להיות קטן יותר מעצמו פחות שתיים?&rlm;",
        solution_steps: [
            { verbal_explanation: "נחסר x משני האגפים.&rlm;", math_expression: "x - x < -2" },
            { verbal_explanation: "נקבל את האי שוויון אפס קטן ממינוס שתיים.&rlm;", math_expression: "0 < -2" },
            { verbal_explanation: "זהו פסוק שקר, לכן אין אף x שיקיים את התנאי הזה.&rlm;", math_expression: "" }
        ],
        final_answer: "אין פתרון"
    },
    // שאלה 36
    {
        topic: "equations_inequalities",
        subTopic: "פתרון אי שוויונות",
        question_text: "מה ההבדל במשמעות בין הסימן < לבין הסימן ≤ ?&rlm;",
        options: ["≤ כולל גם את השוויון (המספר עצמו מהווה פתרון), בעוד < מתייחס רק למספרים הקטנים ממנו ממש.", "≤ מיועד למספרים שליליים.", "< כולל את השוויון.", "אין הבדל."],
        correctAnswer: 0,
        hint: "הקו התחתון בסימן ≤ מתפקד כמו חצי מסימן ה- =. הוא אומר 'קטן מ... או שווה ל...'.&rlm;",
        solution_steps: [
            { verbal_explanation: "הסימן < קורא למספרים שהם אך ורק קטנים מהערך, ולא שווים לו. למשל 4 < 5 זה אמת, 5 < 5 זה שקר.&rlm;", math_expression: "" },
            { verbal_explanation: "הסימן ≤ (קטן-שווה) מתיר גם את השוויון, כך ש- 5 ≤ 5 זה פסוק אמת.&rlm;", math_expression: "" }
        ],
        final_answer: "≤ כולל גם את השוויון (המספר עצמו מהווה פתרון), בעוד < מתייחס רק למספרים הקטנים ממנו ממש."
    },

    // ==========================================================
    // תת נושא 4: ייצוג על ציר המספרים (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "equations_inequalities",
        subTopic: "ייצוג על ציר המספרים",
        question_text: "איזה אי שוויון מיוצג על ידי השרטוט הבא (עיגול ריק, וחץ הפונה ימינה)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 300 80' width='100%' height='80' style='max-width:300px;'><line x1='10' y1='50' x2='290' y2='50' stroke='#334155' stroke-width='2'/><circle cx='100' cy='50' r='5' fill='#ffffff' stroke='#3b82f6' stroke-width='2'/><text x='100' y='75' font-family='Arial' font-size='14' fill='#0f172a' text-anchor='middle'>3</text><line x1='105' y1='50' x2='280' y2='50' stroke='#3b82f6' stroke-width='4'/><polygon points='280,45 290,50 280,55' fill='#3b82f6'/></svg></div>",
        options: ["x > 3", "x ≥ 3", "x < 3", "x ≤ 3"],
        correctAnswer: 0,
        hint: "החץ מצביע על המספרים הגדולים מ-3 (ימינה). העיגול הריק מסמל שה-3 עצמו אינו נכלל בפתרון.&rlm;",
        solution_steps: [
            { verbal_explanation: "חץ הפונה ימינה מייצג את כל המספרים הגדולים מהנקודה המודגשת (x >).&rlm;", math_expression: "" },
            { verbal_explanation: "עיגול ריק (לא מלא) מציין שהנקודה עצמה (3) אינה חלק מהפתרון, ולכן אין סימן 'שווה' באי-השוויון.&rlm;", math_expression: "x > 3" }
        ],
        final_answer: "x > 3"
    },
    // שאלה 38
    {
        topic: "equations_inequalities",
        subTopic: "ייצוג על ציר המספרים",
        question_text: "מה אומר 'עיגול מלא' (צבוע מבפנים) על ציר המספרים בייצוג של אי-שוויון?&rlm;",
        options: ["שהמספר עליו מונח העיגול הוא חלק מקבוצת הפתרונות (מציינים זאת ב- ≤ או ≥).", "שהוא אינו חלק מהפתרון.", "שהפתרון מיועד למספרים שלמים בלבד.", "שהחץ חייב לפנות שמאלה."],
        correctAnswer: 0,
        hint: "עיגול 'מלא' משמעותו 'כולל'. עיגול 'ריק' משמעותו 'לא כולל'.&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי להבדיל בין > (גדול מ) לבין ≥ (גדול או שווה), משתמשים בצביעת העיגול שעל הציר.&rlm;", math_expression: "" },
            { verbal_explanation: "צביעה מלאה מסמלת שהמספר עצמו מקיים את התנאי והוא נכלל בפתרון הסופי.&rlm;", math_expression: "" }
        ],
        final_answer: "שהמספר עליו מונח העיגול הוא חלק מקבוצת הפתרונות (מציינים זאת ב- ≤ או ≥)."
    },
    // שאלה 39
    {
        topic: "equations_inequalities",
        subTopic: "ייצוג על ציר המספרים",
        question_text: "איזה שרטוט מתאר נכון את התחום x ≤ -2 ?&rlm;",
        options: ["עיגול מלא על מינוס 2, וחץ פונה שמאלה.", "עיגול ריק על מינוס 2, וחץ פונה שמאלה.", "עיגול מלא על מינוס 2, וחץ פונה ימינה.", "עיגול ריק על מינוס 2, וחץ פונה ימינה."],
        correctAnswer: 0,
        hint: "הסימן ≤ אומר 'קטן או שווה'. 'שווה' דורש עיגול מלא. 'קטן מ-' דורש תנועה למספרים קטנים יותר, כלומר שמאלה.&rlm;",
        solution_steps: [
            { verbal_explanation: "המילה 'שווה ל' מחייבת שימוש בעיגול מלא (צבוע).&rlm;", math_expression: "" },
            { verbal_explanation: "הכיוון 'קטן מ-' מכוון למספרים השליליים יותר, הנמצאים בצד השמאלי של ציר המספרים.&rlm;", math_expression: "" }
        ],
        final_answer: "עיגול מלא על מינוס 2, וחץ פונה שמאלה."
    },
    // שאלה 40
    {
        topic: "equations_inequalities",
        subTopic: "ייצוג על ציר המספרים",
        question_text: "פתרו את התרגיל ובחרו את הייצוג המתאים: -3x < 12&rlm;",
        options: ["עיגול ריק על מינוס 4, וחץ פונה ימינה.", "עיגול מלא על מינוס 4, וחץ פונה שמאלה.", "עיגול ריק על 4, וחץ פונה ימינה.", "עיגול ריק על מינוס 4, וחץ פונה שמאלה."],
        correctAnswer: 0,
        hint: "חלקו ב-3-. אל תשכחו שהסימן מתהפך (מ-< ל->). התוצאה היא x > -4.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחלק במינוס 3 את שני האגפים ונהפוך את סימן האי-שוויון.&rlm;", math_expression: "x > 12 : (-3)  =>  x > -4" },
            { verbal_explanation: "שלב ב': נתרגם את x > -4 לשרטוט. אין סימן שווה, לכן העיגול ריק. הכיוון 'גדול מ' מורה ימינה.&rlm;", math_expression: "" }
        ],
        final_answer: "עיגול ריק על מינוס 4, וחץ פונה ימינה."
    },
    // שאלה 41
    {
        topic: "equations_inequalities",
        subTopic: "ייצוג על ציר המספרים",
        question_text: "קבוצת פתרון בין שני מספרים ('וגם'). כיצד ייראה השרטוט של התחום שבו x גדול מ-2 אך קטן מ-7 (נכתב כ: 2 < x < 7)?&rlm;",
        options: ["קטע סגור (ללא חיצים) המחבר בין עיגול ריק על 2 לבין עיגול ריק על 7.", "שני חיצים פונים ימינה.", "חץ הפונה ימינה מ-2, וחץ פונה שמאלה מ-7.", "קטע המחבר בין שני עיגולים מלאים על 2 ו-7."],
        correctAnswer: 0,
        hint: "זהו 'כלוב'. ה-x חסום בין 2 ל-7 ולא יכול לברוח. מכיוון שאין סימני 'שווה', העיגולים בשני הקצוות ריקים.&rlm;",
        solution_steps: [
            { verbal_explanation: "ביטוי של x הנמצא בין שני מספרים מגדיר קטע מוגבל על הישר, ולא קרן נמשכת.&rlm;", math_expression: "" },
            { verbal_explanation: "היות והאי שוויונות הם < ולא ≤, קצות הקטע (2 ו-7) מסומנים בעיגולים ריקים.&rlm;", math_expression: "" }
        ],
        final_answer: "קטע סגור (ללא חיצים) המחבר בין עיגול ריק על 2 לבין עיגול ריק על 7."
    },
    // שאלה 42
    {
        topic: "equations_inequalities",
        subTopic: "ייצוג על ציר המספרים",
        question_text: "איזה מבין השרטוטים ייצג את הפתרון של המשוואה הרגילה x = 5 על ציר המספרים?&rlm;",
        options: ["נקודה אחת בודדת וצבועה (עיגול מלא) על המספר 5, ללא שום חץ.", "עיגול מלא על 5 עם חיצים לשני הכיוונים.", "עיגול ריק על 5.", "לא ניתן לייצג משוואה רגילה על ישר מספרים."],
        correctAnswer: 0,
        hint: "משוואה מציינת פתרון יחיד ומוחלט. אין כיוונים, רק מיקום מדוייק אחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "משוואה כמו x=5 דורשת ערך אחד ויחיד להצבה.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן לא יהיה שום כיוון המשכיות (ללא חיצים). נסמן את הפתרון כנקודה מלאה במיקום 5.&rlm;", math_expression: "" }
        ],
        final_answer: "נקודה אחת בודדת וצבועה (עיגול מלא) על המספר 5, ללא שום חץ."
    },
    // שאלה 43
    {
        topic: "equations_inequalities",
        subTopic: "ייצוג על ציר המספרים",
        question_text: "קבוצת פתרון מתפצלת (או/או). כיצד ייראה השרטוט עבור x < 0 או x ≥ 4 ?&rlm;",
        options: ["קרן הפונה שמאלה מ-0 (עיגול ריק), וקרן הפונה ימינה מ-4 (עיגול מלא).", "קטע המחבר בין 0 ל-4.", "קרן הפונה ימינה מ-0.", "עיגול מלא על 0 ועל 4."],
        correctAnswer: 0,
        hint: "אלו שני אזורים שלא נפגשים (או זה, או זה). התחום של ה-0 דורש פניה שמאלה (עיגול ריק). התחום של ה-4 דורש פניה ימינה עם עיגול מלא.&rlm;",
        solution_steps: [
            { verbal_explanation: "תנאי ראשון: x < 0. מיוצג על ידי עיגול ריק ב-0 וחץ המופנה שמאלה אל המספרים השליליים.&rlm;", math_expression: "" },
            { verbal_explanation: "תנאי שני: x ≥ 4. מיוצג על ידי עיגול מלא ב-4 וחץ המופנה ימינה אל המספרים הגדולים.&rlm;", math_expression: "" },
            { verbal_explanation: "המילה 'או' מאפשרת לשני הפתרונות להתקיים במקביל כקרניים נפרדות.&rlm;", math_expression: "" }
        ],
        final_answer: "קרן הפונה שמאלה מ-0 (עיגול ריק), וקרן הפונה ימינה מ-4 (עיגול מלא)."
    },
    // שאלה 44
    {
        topic: "equations_inequalities",
        subTopic: "ייצוג על ציר המספרים",
        question_text: "אם השרטוט מראה חץ עבה לאורך *כל* ציר המספרים, ללא כל עיגולים או הפסקות, מה משמעותו?&rlm;",
        options: ["'כל x הוא פתרון' (אינסוף פתרונות או פסוק אמת מוחלט).", "אין פתרון.", "x = 0", "רק מספרים חיוביים פותרים."],
        correctAnswer: 0,
        hint: "כשכל הישר צבוע, זה אומר שכל מספר בעולם יכול להתקבל כתשובה חוקית (כמו שקרה לנו ב- 0 < 5).&rlm;",
        solution_steps: [
            { verbal_explanation: "הצללה של כל ישר המספרים מהווה ייצוג חזותי למצב של 'כל מספר הוא פתרון'.&rlm;", math_expression: "" },
            { verbal_explanation: "מצב כזה קורה כאשר אנו פותרים אי שוויון ומגיעים לפסוק שתמיד נכון (למשל 4 > 2).&rlm;", math_expression: "" }
        ],
        final_answer: "'כל x הוא פתרון' (אינסוף פתרונות או פסוק אמת מוחלט)."
    },
    // שאלה 45
    {
        topic: "equations_inequalities",
        subTopic: "ייצוג על ציר המספרים",
        question_text: "מה המשמעות של ציר מספרים שנשאר ריק לחלוטין (ללא כל סימון, עיגול או חץ)?&rlm;",
        options: ["'אין פתרון' (פסוק שקר).", "כל מספר הוא פתרון.", "x = 0", "השרטוט פשוט חסר."],
        correctAnswer: 0,
        hint: "אם אין אף מספר שמקיים את התנאי, אין לנו שום דבר לצייר על הישר.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר לא קיים פתרון למערכת או לאי-שוויון (למשל כאשר מקבלים סתירה כמו 5 < 2).&rlm;", math_expression: "" },
            { verbal_explanation: "אין אף מספר שמקיים את הדרישה, ולכן ישר המספרים נשאר נקי וללא סימונים.&rlm;", math_expression: "" }
        ],
        final_answer: "'אין פתרון' (פסוק שקר)."
    },
    // שאלה 46
    {
        topic: "equations_inequalities",
        subTopic: "ייצוג על ציר המספרים",
        question_text: "איזה מהמספרים הבאים נכלל בתחום הפתרון של השרטוט הבא: עיגול ריק על המספר 2, וחץ פונה ימינה.&rlm;",
        options: ["2.1", "2", "1", "0"],
        correctAnswer: 0,
        hint: "חץ ימינה מעיד על מספרים גדולים מ-2. עיגול ריק מעיד ש-2 אינו נכלל! אבל 2.1 (גדול מ-2) כן נכלל.&rlm;",
        solution_steps: [
            { verbal_explanation: "השרטוט מתאר את אי השוויון x > 2.&rlm;", math_expression: "" },
            { verbal_explanation: "המספר 2 עצמו נפסל בגלל העיגול הריק. המספרים 1 ו-0 קטנים מ-2 ונמצאים מחוץ לתחום הצבוע.&rlm;", math_expression: "" },
            { verbal_explanation: "המספר 2.1 (גדול ולו במעט מ-2) נמצא על הקרן הצבועה ולכן הוא פתרון תקין.&rlm;", math_expression: "2.1 > 2" }
        ],
        final_answer: "2.1"
    },
    // שאלה 47
    {
        topic: "equations_inequalities",
        subTopic: "ייצוג על ציר המספרים",
        question_text: "פתרו את המערכת מסוג 'וגם': נדרש גם ש- x > 1, וגם ש- x < 5. איך נראית התוצאה הסופית המשותפת על הציר?&rlm;",
        options: ["קטע סגור המחבר בין העיגול הריק שב-1 לעיגול הריק שב-5.", "קרן מ-1 ימינה, וקרן נפרדת מ-5 שמאלה.", "כל ישר המספרים.", "אין פתרון משותף."],
        correctAnswer: 0,
        hint: "מערכת 'וגם' דורשת את האזור המשותף (החיתוך) של שני החיצים. החץ מ-1 הולך ימינה, החץ מ-5 הולך שמאלה. הם חופפים בדיוק בקטע שבין 1 ל-5.&rlm;",
        solution_steps: [
            { verbal_explanation: "מערכת 'וגם' מחפשת את נקודות המפגש של שני התנאים (חיתוך הקבוצות).&rlm;", math_expression: "" },
            { verbal_explanation: "קרן אחת יוצאת מ-1 ימינה, הקרן השנייה יוצאת מ-5 שמאלה.&rlm;", math_expression: "" },
            { verbal_explanation: "האזור שבו שתי הקרניים 'נשכבות' אחת על השנייה הוא הקטע שבין 1 ל-5.&rlm;", math_expression: "1 < x < 5" }
        ],
        final_answer: "קטע סגור המחבר בין העיגול הריק שב-1 לעיגול הריק שב-5."
    },
    // שאלה 48
    {
        topic: "equations_inequalities",
        subTopic: "ייצוג על ציר המספרים",
        question_text: "מערכת 'וגם' מכשילה: נדרש גם ש- x > 6, וגם ש- x < 2. מהי התשובה?&rlm;",
        options: ["אין פתרון (הציר יישאר ריק).", "כל הציר.", "קטע בין 2 ל-6.", "או x>6 או x<2."],
        correctAnswer: 0,
        hint: "האם קיים מספר שגם גדול מ-6 וגם קטן מ-2 בו זמנית?&rlm;",
        solution_steps: [
            { verbal_explanation: "המילה 'וגם' דורשת מספר שיענה על שני התנאים במקביל.&rlm;", math_expression: "" },
            { verbal_explanation: "קרן אחת פונה ימינה מ-6, השנייה פונה שמאלה מ-2. אין ביניהן שום אזור חפיפה על הציר.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן קבוצת הפתרון היא קבוצה ריקה, ואין לצייר כלום על הציר.", math_expression: "" }
        ],
        final_answer: "אין פתרון (הציר יישאר ריק)."
    }

];
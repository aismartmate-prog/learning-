// ========================================================================
// שכבת גיל: כיתה ז' | נושא: משוואות ובעיות מילוליות
// 3 תתי נושאים | 36 שאלות סה"כ
// פתרונות מפורטים שלב אחר שלב (העברת אגפים, כינוס, בידוד נעלם).
// כולל איורים (מאזניים, צורות). כתיבה נקייה: × לכפל, : לחילוק. ללא LaTeX!
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: פתרון משוואות בנעלם אחד (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "equations",
        subTopic: "פתרון משוואות בנעלם אחד",
        question_text: "פתרו את המשוואה הבאה ומצאו את ערכו של x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2x + 5 = 15</div><div style='text-align:center;'><svg viewBox='0 0 200 80' width='100%' height='80' style='max-width:200px;'><line x1='10' y1='60' x2='190' y2='60' stroke='#94a3b8' stroke-width='4'/><polygon points='100,60 90,80 110,80' fill='#475569'/><rect x='30' y='30' width='30' height='30' fill='#fca5a5' rx='5'/><text x='45' y='50' font-family='Arial' font-size='14' fill='#7f1d1d'>2x+5</text><rect x='140' y='30' width='30' height='30' fill='#86efac' rx='5'/><text x='155' y='50' font-family='Arial' font-size='14' fill='#14532d'>15</text></svg></div>",
        options: ["5", "10", "4", "20"],
        correctAnswer: 0,
        hint: "מטרתנו היא לבודד את ה-x. תחילה נעביר את המספר 5 לאגף ימין (ונשנה את סימנו למינוס).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחסר 5 משני אגפי המשוואה (או נעביר את ה-5 ימינה בסימן הפוך).&rlm;", math_expression: "2x = 15 - 5" },
            { verbal_explanation: "שלב ב': נחשב את אגף ימין.&rlm;", math_expression: "2x = 10" },
            { verbal_explanation: "שלב ג': נחלק את שני האגפים במקדם של x (ב-2).&rlm;", math_expression: "x = 10 : 2" },
            { verbal_explanation: "נקבל את התוצאה הסופית.&rlm;", math_expression: "x = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 2
    {
        topic: "equations",
        subTopic: "פתרון משוואות בנעלם אחד",
        question_text: "מהו הפתרון של המשוואה הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3x - 7 = 14</div>",
        options: ["7", "21", "6", "4"],
        correctAnswer: 0,
        hint: "העבירו את ה- 7- לצד ימין (הוא יהפוך ל- 7+). לאחר מכן חלקו ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוסיף 7 לשני האגפים כדי לבודד את האיבר עם ה-x.&rlm;", math_expression: "3x = 14 + 7" },
            { verbal_explanation: "שלב ב': נחשב את הסכום.&rlm;", math_expression: "3x = 21" },
            { verbal_explanation: "שלב ג': נחלק את התוצאה ב-3.&rlm;", math_expression: "x = 21 : 3" },
            { verbal_explanation: "נקבל את הערך של x.&rlm;", math_expression: "x = 7" }
        ],
        final_answer: "7"
    },
    // שאלה 3
    {
        topic: "equations",
        subTopic: "פתרון משוואות בנעלם אחד",
        question_text: "משוואה עם נעלמים בשני האגפים. מצאו את x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5x = 2x + 12</div>",
        options: ["4", "12", "6", "3"],
        correctAnswer: 0,
        hint: "עלינו לרכז את כל האיברים עם x באגף אחד (שמאל) ואת המספרים באגף השני. העבירו את 2x שמאלה במינוס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחסר 2x משני האגפים (נעביר את 2x שמאלה בסימן הפוך).&rlm;", math_expression: "5x - 2x = 12" },
            { verbal_explanation: "שלב ב': נכנס איברים דומים באגף שמאל.&rlm;", math_expression: "3x = 12" },
            { verbal_explanation: "שלב ג': נחלק את שני האגפים ב-3.&rlm;", math_expression: "x = 12 : 3" },
            { verbal_explanation: "קיבלנו את התשובה.&rlm;", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },
    // שאלה 4
    {
        topic: "equations",
        subTopic: "פתרון משוואות בנעלם אחד",
        question_text: "פתרו את המשוואה הבאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>7x - 4 = 3x + 16</div>",
        options: ["5", "10", "4", "3"],
        correctAnswer: 0,
        hint: "העבירו את ה- 3x לאגף שמאל (במינוס) ואת ה- 4- לאגף ימין (בפלוס).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נעביר איברים. איברים עם x שמאלה, מספרים ימינה.&rlm;", math_expression: "7x - 3x = 16 + 4" },
            { verbal_explanation: "שלב ב': נכנס איברים דומים בכל אחד מהאגפים.&rlm;", math_expression: "4x = 20" },
            { verbal_explanation: "שלב ג': נחלק את שני האגפים במקדם של x (שהוא 4).&rlm;", math_expression: "x = 20 : 4 = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 5
    {
        topic: "equations",
        subTopic: "פתרון משוואות בנעלם אחד",
        question_text: "שימו לב לסימן המינוס! פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>10 - 2x = 4</div>",
        options: ["3", "-3", "7", "-7"],
        correctAnswer: 0,
        hint: "העבירו את המספר 10 לאגף ימין (הוא יהפוך למינוס 10). זכרו שהמקדם של x הוא 2-.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נעביר את 10 לאגף ימין. נשארנו עם 2x-.&rlm;", math_expression: "-2x = 4 - 10" },
            { verbal_explanation: "שלב ב': נחשב את אגף ימין (4 פחות 10).&rlm;", math_expression: "-2x = -6" },
            { verbal_explanation: "שלב ג': נחלק את שני האגפים ב- 2-. מינוס לחלק למינוס נותן פלוס.&rlm;", math_expression: "x = -6 : (-2)" },
            { verbal_explanation: "נקבל את הערך החיובי 3.&rlm;", math_expression: "x = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 6
    {
        topic: "equations",
        subTopic: "פתרון משוואות בנעלם אחד",
        question_text: "פתרו את המשוואה הבאה. מה קורה כאן?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4x + 8 = 4x + 8</div>",
        options: ["אינסוף פתרונות (כל מספר יתאים)", "אין אף פתרון", "x = 0", "x = 8"],
        correctAnswer: 0,
        hint: "נסו להעביר את ה-4x שמאלה. מה תקבלו? פסוק אמת או פסוק שקר?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נעביר את 4x שמאלה ואת 8 ימינה.&rlm;", math_expression: "4x - 4x = 8 - 8" },
            { verbal_explanation: "שלב ב': נכנס איברים. קיבלנו אפס שווה לאפס.&rlm;", math_expression: "0 = 0" },
            { verbal_explanation: "זהו 'פסוק אמת' שתמיד נכון, ללא קשר לערכו של x. לכן לכל מספר יש פתרון.&rlm;", math_expression: "אינסוף פתרונות" }
        ],
        final_answer: "אינסוף פתרונות (כל מספר יתאים)"
    },
    // שאלה 7
    {
        topic: "equations",
        subTopic: "פתרון משוואות בנעלם אחד",
        question_text: "בחנו את המשוואה הבאה וקבעו מה הפתרון שלה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5x + 3 = 5x + 7</div>",
        options: ["אין פתרון", "אינסוף פתרונות", "x = 4", "x = 0"],
        correctAnswer: 0,
        hint: "האם יכול להיות ש- 5x פלוס 3 יהיה שווה ל- 5x פלוס 7? מה קורה כשמעבירים אגפים?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נעביר את ה-5x שמאלה ואת ה-3 ימינה.&rlm;", math_expression: "5x - 5x = 7 - 3" },
            { verbal_explanation: "שלב ב': נכנס איברים. קיבלנו אפס שווה 4.&rlm;", math_expression: "0 = 4" },
            { verbal_explanation: "0 אינו שווה ל-4. זהו 'פסוק שקר'. לכן לא קיים אף x שיקיים את המשוואה.&rlm;", math_expression: "אין פתרון" }
        ],
        final_answer: "אין פתרון"
    },
    // שאלה 8
    {
        topic: "equations",
        subTopic: "פתרון משוואות בנעלם אחד",
        question_text: "משוואה עם חילוק. מצאו את x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x : 2 + 4 = 10</div>",
        options: ["12", "3", "28", "8"],
        correctAnswer: 0,
        hint: "תחילה העבירו את ה-4 ימינה (10 פחות 4). לאחר מכן, איך 'מבטלים' חילוק ב-2? על ידי כפל ב-2!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבודד את האיבר עם ה-x. נעביר את ה-4 ימינה בחיסור.&rlm;", math_expression: "x : 2 = 10 - 4" },
            { verbal_explanation: "שלב ב': נחשב.&rlm;", math_expression: "x : 2 = 6" },
            { verbal_explanation: "שלב ג': כדי לבודד את x, נכפול את שני האגפים ב-2 (פעולה הפוכה לחילוק).&rlm;", math_expression: "x = 6 × 2 = 12" }
        ],
        final_answer: "12"
    },
    // שאלה 9
    {
        topic: "equations",
        subTopic: "פתרון משוואות בנעלם אחד",
        question_text: "פתרו את המשוואה הבאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-3x = 15</div>",
        options: ["-5", "5", "-45", "45"],
        correctAnswer: 0,
        hint: "חלקו את התוצאה (15) במקדם של x, שהוא 3-. זכרו את חוקי הסימנים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחלק את שני אגפי המשוואה במקדם 3-.&rlm;", math_expression: "x = 15 : (-3)" },
            { verbal_explanation: "שלב ב': פלוס לחלק למינוס נותן מינוס.&rlm;", math_expression: "x = -5" }
        ],
        final_answer: "-5"
    },
    // שאלה 10
    {
        topic: "equations",
        subTopic: "פתרון משוואות בנעלם אחד",
        question_text: "כנסו איברים באותו אגף ופתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2x + 3x - 5x = 10</div>",
        options: ["אין פתרון", "x = 0", "אינסוף פתרונות", "x = 2"],
        correctAnswer: 0,
        hint: "חברו קודם את כל ה-x-ים בצד שמאל: 2 פלוס 3 פחות 5. מה קיבלתם?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכנס את כל האיברים עם x באגף שמאל.&rlm;", math_expression: "(2 + 3 - 5)x = 10" },
            { verbal_explanation: "שלב ב': 5x פחות 5x שווה ל-0.&rlm;", math_expression: "0 = 10" },
            { verbal_explanation: "פסוק שקר. אפס אינו שווה ל-10. למשוואה אין פתרון.&rlm;", math_expression: "" }
        ],
        final_answer: "אין פתרון"
    },
    // שאלה 11
    {
        topic: "equations",
        subTopic: "פתרון משוואות בנעלם אחד",
        question_text: "מצאו את x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>8x - 3 = 5x + 6</div>",
        options: ["3", "1", "9", "0.3"],
        correctAnswer: 0,
        hint: "העבירו את ה-5x שמאלה ואת ה-3 ימינה. תקבלו 3x באגף אחד ו-9 באגף שני.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נעביר איברים. 5x עובר שמאלה (במינוס), ו-3 עובר ימינה (בפלוס).&rlm;", math_expression: "8x - 5x = 6 + 3" },
            { verbal_explanation: "שלב ב': נכנס איברים דומים.&rlm;", math_expression: "3x = 9" },
            { verbal_explanation: "שלב ג': נחלק ב-3.&rlm;", math_expression: "x = 9 : 3 = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 12
    {
        topic: "equations",
        subTopic: "פתרון משוואות בנעלם אחד",
        question_text: "קלאסיקה! פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x + x + x = 27</div>",
        options: ["9", "3", "27", "81"],
        correctAnswer: 0,
        hint: "כמה פעמים x מופיע בסך הכל? רשמו זאת ככפל.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכנס איברים דומים באגף שמאל. יש לנו שלושה איברי x.&rlm;", math_expression: "3x = 27" },
            { verbal_explanation: "שלב ב': נחלק את המשוואה במקדם 3.&rlm;", math_expression: "x = 27 : 3" },
            { verbal_explanation: "התוצאה:&rlm;", math_expression: "x = 9" }
        ],
        final_answer: "9"
    },

    // ==========================================================
    // תת נושא 2: משוואות עם סוגריים (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "equations",
        subTopic: "משוואות עם סוגריים",
        question_text: "פתרו את המשוואה הבאה בעזרת פתיחת סוגריים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2(x + 3) = 14</div>",
        options: ["4", "5", "8", "1"],
        correctAnswer: 0,
        hint: "הכפילו את 2 בכל מה שבתוך הסוגריים: 2x ועוד 6. לאחר מכן פתרו רגיל.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח סוגריים לפי חוק הפילוג (2 כפול x, ו-2 כפול 3).&rlm;", math_expression: "2x + 6 = 14" },
            { verbal_explanation: "שלב ב': נעביר את 6 לאגף ימין בחיסור.&rlm;", math_expression: "2x = 14 - 6 = 8" },
            { verbal_explanation: "שלב ג': נחלק ב-2.&rlm;", math_expression: "x = 8 : 2 = 4" }
        ],
        final_answer: "4"
    },
    // שאלה 14
    {
        topic: "equations",
        subTopic: "משוואות עם סוגריים",
        question_text: "מהו הערך של x?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3(x - 4) = 15</div>",
        options: ["9", "1", "19", "5"],
        correctAnswer: 0,
        hint: "פתחו סוגריים (3x - 12). לחלופין, אפשר לחלק את כל המשוואה ב-3 מיד בהתחלה!&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א': פתיחת סוגריים. נכפול ב-3.&rlm;", math_expression: "3x - 12 = 15" },
            { verbal_explanation: "נעביר את 12 ימינה בפלוס.&rlm;", math_expression: "3x = 15 + 12 = 27" },
            { verbal_explanation: "נחלק ב-3.&rlm;", math_expression: "x = 9" },
            { verbal_explanation: "דרך ב' (מהירה): נחלק הכל ב-3.&rlm;", math_expression: "x - 4 = 5  =>  x = 9" }
        ],
        final_answer: "9"
    },
    // שאלה 15
    {
        topic: "equations",
        subTopic: "משוואות עם סוגריים",
        question_text: "שימו לב למינוס שלפני הסוגריים! פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-(x + 5) = -8</div>",
        options: ["3", "-13", "13", "-3"],
        correctAnswer: 0,
        hint: "המינוס לפני הסוגריים הופך את הסימן של כל איבר בפנים. -x - 5. לחלופין, בטלו את המינוסים משני האגפים.&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך פשוטה: נכפול את שני האגפים במינוס 1 כדי להעלים את המינוסים.&rlm;", math_expression: "x + 5 = 8" },
            { verbal_explanation: "כעת פשוט נעביר את 5 לאגף ימין בחיסור.&rlm;", math_expression: "x = 8 - 5" },
            { verbal_explanation: "התוצאה:&rlm;", math_expression: "x = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 16
    {
        topic: "equations",
        subTopic: "משוואות עם סוגריים",
        question_text: "פתרו את המשוואה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4(2x - 1) = 20</div>",
        options: ["3", "2.5", "1.5", "4"],
        correctAnswer: 0,
        hint: "פתחו סוגריים: 8x פחות 4 שווה 20.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פתיחת סוגריים. 4 כפול 2x שווה 8x, ו-4 כפול 1- שווה 4-.&rlm;", math_expression: "8x - 4 = 20" },
            { verbal_explanation: "שלב ב': נעביר את 4 ימינה בחיבור.&rlm;", math_expression: "8x = 20 + 4 = 24" },
            { verbal_explanation: "שלב ג': נחלק במקדם 8.&rlm;", math_expression: "x = 24 : 8 = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 17
    {
        topic: "equations",
        subTopic: "משוואות עם סוגריים",
        question_text: "סוגריים בשני האגפים! מצאו את x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5(x + 2) = 3(x + 6)</div>",
        options: ["4", "2", "8", "6"],
        correctAnswer: 0,
        hint: "פתחו סוגריים בכל אגף בנפרד, ואז העבירו את ה-x-ים שמאלה ואת המספרים ימינה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח סוגריים בשני האגפים.&rlm;", math_expression: "5x + 10 = 3x + 18" },
            { verbal_explanation: "שלב ב': נעביר את 3x שמאלה (במינוס) ואת 10 ימינה (במינוס).&rlm;", math_expression: "5x - 3x = 18 - 10" },
            { verbal_explanation: "שלב ג': נכנס איברים.&rlm;", math_expression: "2x = 8" },
            { verbal_explanation: "שלב ד': נחלק ב-2.&rlm;", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },
    // שאלה 18
    {
        topic: "equations",
        subTopic: "משוואות עם סוגריים",
        question_text: "משוואה עם חיסור וסוגריים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>10 - 2(x - 3) = 4</div>",
        options: ["6", "3", "0", "-1"],
        correctAnswer: 0,
        hint: "שימו לב למינוס שלפני ה-2. הוא כופל את ה-x למינוס 2x, ואת ה-3- לפלוס 6.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח סוגריים בזהירות עם ה- 2-.&rlm;", math_expression: "10 - 2x + 6 = 4" },
            { verbal_explanation: "שלב ב': נכנס מספרים באגף שמאל (10 ועוד 6).&rlm;", math_expression: "16 - 2x = 4" },
            { verbal_explanation: "שלב ג': נעביר את 16 ימינה.&rlm;", math_expression: "-2x = 4 - 16 = -12" },
            { verbal_explanation: "שלב ד': נחלק ב- 2-. (מינוס ומינוס זה פלוס).&rlm;", math_expression: "x = -12 : (-2) = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 19
    {
        topic: "equations",
        subTopic: "משוואות עם סוגריים",
        question_text: "פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3(x + 1) + 2(x - 1) = 11</div>",
        options: ["2", "1", "3", "10"],
        correctAnswer: 0,
        hint: "פתחו את שני זוגות הסוגריים, כנסו את איברי ה-x יחד ואת המספרים יחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פתיחת סוגריים.&rlm;", math_expression: "3x + 3 + 2x - 2 = 11" },
            { verbal_explanation: "שלב ב': כינוס איברים דומים (3x+2x=5x, ו- 3-2=1).&rlm;", math_expression: "5x + 1 = 11" },
            { verbal_explanation: "שלב ג': העברת ה-1 ימינה בחסור.&rlm;", math_expression: "5x = 10" },
            { verbal_explanation: "שלב ד': חילוק ב-5.&rlm;", math_expression: "x = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 20
    {
        topic: "equations",
        subTopic: "משוואות עם סוגריים",
        question_text: "שימו לב למינוס! פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4x - (x + 7) = 8</div>",
        options: ["5", "-5", "15", "1"],
        correctAnswer: 0,
        hint: "המינוס לפני הסוגריים מתייחס גם ל-x וגם ל-7. פתחו כך: 4x - x - 7.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פתיחת הסוגריים הופכת את הסימנים בפנים.&rlm;", math_expression: "4x - x - 7 = 8" },
            { verbal_explanation: "שלב ב': נכנס את ה-xים.&rlm;", math_expression: "3x - 7 = 8" },
            { verbal_explanation: "שלב ג': נעביר 7 ימינה בחיבור.&rlm;", math_expression: "3x = 8 + 7 = 15" },
            { verbal_explanation: "שלב ד': נחלק ב-3.&rlm;", math_expression: "x = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 21
    {
        topic: "equations",
        subTopic: "משוואות עם סוגריים",
        question_text: "מה קורה במשוואה הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2(3x + 4) = 6x + 8</div>",
        options: ["אינסוף פתרונות", "אין פתרון", "x = 0", "x = 8"],
        correctAnswer: 0,
        hint: "פתחו את הסוגריים. האם שני האגפים זהים לחלוטין?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח סוגריים באגף שמאל.&rlm;", math_expression: "6x + 8 = 6x + 8" },
            { verbal_explanation: "שלב ב': קיבלנו שוויון זהה לחלוטין (זהות). אם נעביר אגפים נקבל 0 = 0.&rlm;", math_expression: "0 = 0" },
            { verbal_explanation: "שלב ג': זהו פסוק אמת תמיד, לכן כל מספר יכול להיות x.&rlm;", math_expression: "אינסוף פתרונות" }
        ],
        final_answer: "אינסוף פתרונות"
    },
    // שאלה 22
    {
        topic: "equations",
        subTopic: "משוואות עם סוגריים",
        question_text: "משוואה עם תוצאה שלילית:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>-3(x - 2) = 9</div>",
        options: ["-1", "1", "5", "-5"],
        correctAnswer: 0,
        hint: "פתיחת סוגריים: 3x- ועוד 6. לאחר מכן העבירו את ה-6.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פתיחת סוגריים עם גורם שלילי. מינוס כפול מינוס זה פלוס.&rlm;", math_expression: "-3x + 6 = 9" },
            { verbal_explanation: "שלב ב': נעביר את 6 ימינה בחיסור.&rlm;", math_expression: "-3x = 9 - 6 = 3" },
            { verbal_explanation: "שלב ג': נחלק ב- 3-.&rlm;", math_expression: "x = 3 : (-3) = -1" }
        ],
        final_answer: "-1"
    },
    // שאלה 23
    {
        topic: "equations",
        subTopic: "משוואות עם סוגריים",
        question_text: "קצת יותר ארוך. פתרו לאט ובזהירות:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5x - 2(x - 4) = x + 10</div>",
        options: ["1", "2", "-1", "4"],
        correctAnswer: 0,
        hint: "פתחו סוגריים: 5x - 2x + 8. כנסו את אגף שמאל, ואז העבירו את ה-x מאגף ימין לשמאל.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פתיחת סוגריים (מינוס כפול מינוס).&rlm;", math_expression: "5x - 2x + 8 = x + 10" },
            { verbal_explanation: "שלב ב': כינוס באגף שמאל.&rlm;", math_expression: "3x + 8 = x + 10" },
            { verbal_explanation: "שלב ג': העברת x שמאלה במינוס, ו-8 ימינה במינוס.&rlm;", math_expression: "3x - x = 10 - 8" },
            { verbal_explanation: "שלב ד': פתרון סופי.&rlm;", math_expression: "2x = 2  =>  x = 1" }
        ],
        final_answer: "1"
    },
    // שאלה 24
    {
        topic: "equations",
        subTopic: "משוואות עם סוגריים",
        question_text: "מצאו את x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x + 4(x - 1) = 16</div>",
        options: ["4", "3", "5", "2"],
        correctAnswer: 0,
        hint: "ה-x הראשון נשאר כמו שהוא. פתחו את הסוגריים רק עם ה-4.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': פתיחת הסוגריים.&rlm;", math_expression: "x + 4x - 4 = 16" },
            { verbal_explanation: "שלב ב': כינוס ה-x-ים והעברת 4 ימינה בחיבור.&rlm;", math_expression: "5x = 16 + 4" },
            { verbal_explanation: "שלב ג': חילוק.&rlm;", math_expression: "5x = 20  =>  x = 4" }
        ],
        final_answer: "4"
    },

    // ==========================================================
    // תת נושא 3: בניית משוואה לבעיה (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "equations",
        subTopic: "בניית משוואה לבעיה",
        question_text: "דן חשב על מספר. הוא כפל אותו ב-3, הוסיף לתוצאה 4 וקיבל 19. איזו משוואה מתארת את הבעיה, ומהו המספר?&rlm;",
        options: ["3x + 4 = 19 (המספר הוא 5)", "3(x + 4) = 19 (המספר הוא 3)", "x + 12 = 19 (המספר הוא 7)", "4x + 3 = 19 (המספר הוא 4)"],
        correctAnswer: 0,
        hint: "תירגמו צעד אחר צעד: מספר (x), כפל ב-3 (3x), הוסף 4 (+4). שווה 19.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את המספר הסודי ב-x.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': בניית המשוואה. כפל ב-3 נותן 3x. נוסיף 4 ונשווה ל-19.&rlm;", math_expression: "3x + 4 = 19" },
            { verbal_explanation: "שלב ג': נפתור את המשוואה. נחסר 4.&rlm;", math_expression: "3x = 15" },
            { verbal_explanation: "שלב ד': נחלק ב-3.&rlm;", math_expression: "x = 5" }
        ],
        final_answer: "3x + 4 = 19 (המספר הוא 5)"
    },
    // שאלה 26
    {
        topic: "equations",
        subTopic: "בניית משוואה לבעיה",
        question_text: "סכומם של שני מספרים עוקבים (הבאים אחד אחרי השני) הוא 25. כיצד נבנה משוואה כדי למצוא אותם? (נסמן את הקטן ב-x).&rlm;",
        options: ["x + (x + 1) = 25", "x + 2x = 25", "x + x = 25", "x + y = 25"],
        correctAnswer: 0,
        hint: "אם המספר הראשון הוא x, המספר שבא אחריו בסדרה הוא x+1.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את המספר הראשון ב-x.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': מספר עוקב גדול מהקודם ב-1, לכן נסמן אותו ב- (x+1).&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': נחבר אותם ונשווה ל-25.&rlm;", math_expression: "x + (x + 1) = 25" },
            { verbal_explanation: "פתרון המשוואה הוא 2x = 24 לכן x=12. המספרים הם 12 ו-13.&rlm;", math_expression: "" }
        ],
        final_answer: "x + (x + 1) = 25"
    },
    // שאלה 27
    {
        topic: "equations",
        subTopic: "בניית משוואה לבעיה",
        question_text: "היקף של מלבן הוא 30 ס\"מ. אורך המלבן גדול ב-3 ס\"מ מרוחבו. איזו משוואה תעזור לנו למצוא את הרוחב (x)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 150 80' width='100%' height='80' style='max-width:150px;'><rect x='10' y='10' width='130' height='60' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='75' y='45' font-family='Arial' font-size='12' fill='#0f172a'>x + 3</text><text x='125' y='70' font-family='Arial' font-size='12' fill='#0f172a'>x</text></svg></div>",
        options: ["2x + 2(x + 3) = 30", "x + (x + 3) = 30", "x × (x + 3) = 30", "4x + 3 = 30"],
        correctAnswer: 0,
        hint: "למלבן יש 4 צלעות: שתיים באורך x ושתיים באורך x+3. סכום כולן הוא ההיקף.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הרוחב הוא x, האורך הוא x+3.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': ההיקף הוא פעמיים הרוחב ועוד פעמיים האורך.&rlm;", math_expression: "2 × x + 2 × (x + 3) = 30" }
        ],
        final_answer: "2x + 2(x + 3) = 30"
    },
    // שאלה 28
    {
        topic: "equations",
        subTopic: "בניית משוואה לבעיה",
        question_text: "אבא גדול מבנו ב-30 שנים. סכום הגילאים שלהם יחד הוא 50. בת כמה הבן? (סמנו את גיל הבן ב-x).&rlm;",
        options: ["10", "20", "15", "5"],
        correctAnswer: 0,
        hint: "גיל הבן הוא x. גיל האב הוא x+30. סכומם יחד שווה ל-50.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה את המשוואה. (גיל הבן) + (גיל האב) = 50.&rlm;", math_expression: "x + (x + 30) = 50" },
            { verbal_explanation: "שלב ב': נכנס איברים.&rlm;", math_expression: "2x + 30 = 50" },
            { verbal_explanation: "שלב ג': נחסר 30 ונחלק ב-2.&rlm;", math_expression: "2x = 20  =>  x = 10" }
        ],
        final_answer: "10"
    },
    // שאלה 29
    {
        topic: "equations",
        subTopic: "בניית משוואה לבעיה",
        question_text: "מחירו של ספר כפול ממחירה של מחברת. תלמיד קנה 3 ספרים ו-2 מחברות ושילם 40 שקלים. איזו משוואה מתארת את הבעיה אם מחיר המחברת הוא x?&rlm;",
        options: ["3(2x) + 2x = 40", "3x + 2x = 40", "3(x) + 2(2x) = 40", "6x = 40"],
        correctAnswer: 0,
        hint: "מחברת עולה x. לכן ספר עולה 2x. הוא קנה 3 ספרים (3 פעמים 2x) ו-2 מחברות (2 פעמים x).&rlm;",
        solution_steps: [
            { verbal_explanation: "מחיר מחברת = x. מחיר ספר = 2x.&rlm;", math_expression: "" },
            { verbal_explanation: "עלות 3 ספרים היא 3 כפול מחיר הספר.&rlm;", math_expression: "3 × (2x)" },
            { verbal_explanation: "עלות 2 מחברות היא 2 כפול מחיר המחברת.&rlm;", math_expression: "2 × x" },
            { verbal_explanation: "נחבר את ההוצאות ונשווה ל-40.&rlm;", math_expression: "3(2x) + 2x = 40" }
        ],
        final_answer: "3(2x) + 2x = 40"
    },
    // שאלה 30
    {
        topic: "equations",
        subTopic: "בניית משוואה לבעיה",
        question_text: "סכומם של שלושה מספרים זוגיים עוקבים הוא 60. איזו משוואה מאפשרת למצוא את המספר הקטן מביניהם (x)?&rlm;",
        options: ["x + (x + 2) + (x + 4) = 60", "x + (x + 1) + (x + 2) = 60", "3x = 60", "x + 2x + 3x = 60"],
        correctAnswer: 0,
        hint: "מספרים זוגיים קופצים ב-2. אם הראשון x, השני x+2, השלישי x+4.&rlm;",
        solution_steps: [
            { verbal_explanation: "מספר זוגי ראשון: x.&rlm;", math_expression: "" },
            { verbal_explanation: "המספר הזוגי הבא גדול ממנו ב-2.&rlm;", math_expression: "x + 2" },
            { verbal_explanation: "המספר הזוגי השלישי גדול בעוד 2.&rlm;", math_expression: "x + 4" },
            { verbal_explanation: "סכומם שווה ל-60.&rlm;", math_expression: "x + (x + 2) + (x + 4) = 60" }
        ],
        final_answer: "x + (x + 2) + (x + 4) = 60"
    },
    // שאלה 31
    {
        topic: "equations",
        subTopic: "בניית משוואה לבעיה",
        question_text: "במשולש, זווית ב' גדולה פי 2 מזווית א', וזווית ג' גדולה ב-20 מעלות מזווית א'. איזו משוואה נבנה כדי למצוא את גודל זווית א' (x)?&rlm;",
        options: ["x + 2x + (x + 20) = 180", "x + 2x + 20x = 180", "x + x/2 + (x - 20) = 180", "4x = 180"],
        correctAnswer: 0,
        hint: "סכום זוויות במשולש הוא תמיד 180 מעלות. א'=x, ב'=2x, ג'=x+20.&rlm;",
        solution_steps: [
            { verbal_explanation: "זווית א' = x.&rlm;", math_expression: "" },
            { verbal_explanation: "זווית ב' כפולה מזווית א', לכן 2x.&rlm;", math_expression: "" },
            { verbal_explanation: "זווית ג' גדולה ב-20, לכן x+20.&rlm;", math_expression: "" },
            { verbal_explanation: "סכום כל הזוויות הוא 180.&rlm;", math_expression: "x + 2x + (x + 20) = 180" }
        ],
        final_answer: "x + 2x + (x + 20) = 180"
    },
    // שאלה 32
    {
        topic: "equations",
        subTopic: "בניית משוואה לבעיה",
        question_text: "50 סוכריות חולקו בין דן וטל. דן קיבל 10 סוכריות יותר מטל. אם טל קיבל x סוכריות, איזו משוואה מתאימה לבעיה?&rlm;",
        options: ["x + (x + 10) = 50", "x + 10 = 50", "2x = 50 - 10", "10x = 50"],
        correctAnswer: 0,
        hint: "החלק של טל (x) ועוד החלק של דן (x+10) משלימים יחד ל-50.&rlm;",
        solution_steps: [
            { verbal_explanation: "סוכריות של טל: x.&rlm;", math_expression: "" },
            { verbal_explanation: "סוכריות של דן: x + 10.&rlm;", math_expression: "" },
            { verbal_explanation: "סך כל הסוכריות יחד הוא 50.&rlm;", math_expression: "x + (x + 10) = 50" }
        ],
        final_answer: "x + (x + 10) = 50"
    },
    // שאלה 33
    {
        topic: "equations",
        subTopic: "בניית משוואה לבעיה",
        question_text: "רונית קנתה 5 עטים זהים. היא שילמה בשטר של 50 שקלים וקיבלה עודף של 15 שקלים. מהי המשוואה שתעזור למצוא את מחיר העט (x)?&rlm;",
        options: ["5x + 15 = 50", "5x - 15 = 50", "50x = 15", "x + 15 = 50"],
        correctAnswer: 0,
        hint: "הסכום ששילמה (העטים) פלוס העודף שקיבלה מרכיבים חזרה את כל השטר שנתנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "עלות 5 עטים היא 5 כפול מחיר עט אחד (5x).&rlm;", math_expression: "" },
            { verbal_explanation: "עלות העטים ועוד העודף (15) שווים לערך השטר (50).&rlm;", math_expression: "5x + 15 = 50" },
            { verbal_explanation: "אפשר גם לרשום זאת כ: 50 פחות 5x שווה ל-15.&rlm;", math_expression: "" }
        ],
        final_answer: "5x + 15 = 50"
    },
    // שאלה 34
    {
        topic: "equations",
        subTopic: "בניית משוואה לבעיה",
        question_text: "בכיתה יש 32 תלמידים. מספר הבנים קטן ב-4 ממספר הבנות. אם מספר הבנות הוא x, איזו משוואה נכונה?&rlm;",
        options: ["x + (x - 4) = 32", "x - 4 = 32", "2x + 4 = 32", "x + 4 = 32"],
        correctAnswer: 0,
        hint: "הבנות הן x. הבנים הם x פחות 4. הסכום של שניהם יחד הוא כל הכיתה.&rlm;",
        solution_steps: [
            { verbal_explanation: "מספר הבנות: x.&rlm;", math_expression: "" },
            { verbal_explanation: "מספר הבנים קטן ב-4, כלומר: x - 4.&rlm;", math_expression: "" },
            { verbal_explanation: "הסכום של כולם יחד הוא 32.&rlm;", math_expression: "x + (x - 4) = 32" }
        ],
        final_answer: "x + (x - 4) = 32"
    },
    // שאלה 35
    {
        topic: "equations",
        subTopic: "בניית משוואה לבעיה",
        question_text: "שתי מכוניות יצאו מאותה נקודה ונסעו בכיוונים מנוגדים. אחת במהירות 80 קמ\"ש והשנייה במהירות 90 קמ\"ש. לאחר זמן מסוים (x), המרחק ביניהן היה 340 ק\"מ. איזו משוואה תמצא את הזמן?&rlm;",
        options: ["80x + 90x = 340", "90x - 80x = 340", "80 + 90 = 340x", "170 = 340x"],
        correctAnswer: 0,
        hint: "המרחק שעברה כל מכונית הוא המהירות שלה כפול הזמן (x). מכיוון שנסעו לכיוונים מנוגדים, המרחק הכולל הוא החיבור של שניהם.&rlm;",
        solution_steps: [
            { verbal_explanation: "המרחק שעברה מכונית א' הוא מהירותה כפול הזמן.&rlm;", math_expression: "80x" },
            { verbal_explanation: "המרחק שעברה מכונית ב' הוא מהירותה כפול הזמן.&rlm;", math_expression: "90x" },
            { verbal_explanation: "סכום המרחקים של שתיהן יחד הוא המרחק ביניהן.&rlm;", math_expression: "80x + 90x = 340" }
        ],
        final_answer: "80x + 90x = 340"
    },
    // שאלה 36
    {
        topic: "equations",
        subTopic: "בניית משוואה לבעיה",
        question_text: "קניתי x מחקים ב-5 שקלים למחק, ועוד מחברות שמספרן גדול ב-2 ממספר המחקים. כל מחברת עלתה 3 שקלים. שילמתי 38 שקלים. איזו משוואה נכונה?&rlm;",
        options: ["5x + 3(x + 2) = 38", "5x + 3x + 2 = 38", "8(x + 2) = 38", "5x + 3(x - 2) = 38"],
        correctAnswer: 0,
        hint: "מחיר המחקים הכולל הוא 5x. מספר המחברות הוא (x+2), ולכן מחירן הכולל הוא 3 פעמים (x+2).&rlm;",
        solution_steps: [
            { verbal_explanation: "עלות המחקים: כמות (x) כפול מחיר יחיד (5).&rlm;", math_expression: "5x" },
            { verbal_explanation: "עלות המחברות: הכמות היא (x+2) והמחיר הוא 3 ליחידה.&rlm;", math_expression: "3(x + 2)" },
            { verbal_explanation: "הסכום של שניהם שווה לתשלום הכולל.&rlm;", math_expression: "5x + 3(x + 2) = 38" }
        ],
        final_answer: "5x + 3(x + 2) = 38"
    }

];
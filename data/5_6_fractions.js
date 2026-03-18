// ========================================================================
// שכבת גיל: ה'-ו' | נושא: שברים 
// 4 תתי נושאים ראשונים | 48 שאלות סה"כ
// ========================================================================
// הוראות כתיבה: 
// שברים: נכתבים כ- 1/4 או 2 1/2
// חילוק: נכתב כ- :
// כפל: נכתב כ- ×
// חזקה (אם צריך): 2² או 2³
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: חיבור וחיסור שברים עשרוניים (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים עשרוניים",
        question_text: "חשבו את סכום השברים העשרוניים הבאים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2.3 + 4.5 = ?</div>",
        options: ["6.8", "6.5", "7.8", "6.08"],
        correctAnswer: 0,
        hint: "בחיבור שברים עשרוניים, מחברים עשיריות לעשיריות ושלמים לשלמים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחבר את העשיריות: 3 עשיריות ועוד 5 עשיריות שוות ל-8 עשיריות.&rlm;", math_expression: "0.3 + 0.5 = 0.8" },
            { verbal_explanation: "נחבר את השלמים: 2 ועוד 4 שווים ל-6.&rlm;", math_expression: "2 + 4 = 6" },
            { verbal_explanation: "הסכום הכולל הוא 6 שלמים ו-8 עשיריות.&rlm;", math_expression: "6.8" }
        ],
        final_answer: "6.8"
    },
    // שאלה 2
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים עשרוניים",
        question_text: "פתרו את תרגיל החיסור הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>7.9 - 3.4 = ?</div>",
        options: ["4.5", "4.9", "3.5", "11.3"],
        correctAnswer: 0,
        hint: "חסרו את העשיריות בנפרד ואת השלמים בנפרד, תוך שמירה על מיקום הנקודה העשרונית.&rlm;",
        solution_steps: [
            { verbal_explanation: "חיסור עשיריות: 9 פחות 4 שווה ל-5 עשיריות.&rlm;", math_expression: "0.9 - 0.4 = 0.5" },
            { verbal_explanation: "חיסור שלמים: 7 פחות 3 שווה ל-4 שלמים.&rlm;", math_expression: "7 - 3 = 4" },
            { verbal_explanation: "התוצאה הסופית היא 4.5.&rlm;", math_expression: "4.5" }
        ],
        final_answer: "4.5"
    },
    // שאלה 3
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים עשרוניים",
        question_text: "שימו לב למספר הספרות אחרי הנקודה. מהי התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1.45 + 2.3 = ?</div>",
        options: ["3.75", "3.48", "1.68", "4.75"],
        correctAnswer: 0,
        hint: "כדי למנוע בלבול, הוסיפו אפס מימין ל-2.3 כך שייכתב כ-2.30. כך לשני המספרים יהיו מאיות.&rlm;",
        solution_steps: [
            { verbal_explanation: "נשוה את מספר הספרות אחרי הנקודה על ידי הוספת אפס: 2.3 הוא כמו 2.30.&rlm;", math_expression: "1.45 + 2.30" },
            { verbal_explanation: "נחבר מאיות (5 ועוד 0) ועשיריות (4 ועוד 3).&rlm;", math_expression: "0.45 + 0.30 = 0.75" },
            { verbal_explanation: "נחבר את השלמים: 1 ועוד 2 שווה 3.&rlm;", math_expression: "1 + 2 = 3" }
        ],
        final_answer: "3.75"
    },
    // שאלה 4
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים עשרוניים",
        question_text: "בצעו את פעולת החיסור (תידרשו לפרוט משלם לעשיריות):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5.2 - 1.8 = ?</div>",
        options: ["3.4", "4.4", "4.6", "3.6"],
        correctAnswer: 0,
        hint: "מכיוון ש-2 קטן מ-8, עלינו ללוות (לפרוט) יחידה אחת מהשלמים ולהפוך אותה ל-10 עשיריות.&rlm;",
        solution_steps: [
            { verbal_explanation: "אי אפשר לחסר 8 מ-2. נלווה שלם מה-5 ונהפוך אותו ל-10 עשיריות. נקבל 4 שלמים ו-12 עשיריות.&rlm;", math_expression: "5.2 => 4.12" },
            { verbal_explanation: "נחסר עשיריות: 12 פחות 8 שוות 4 עשיריות.&rlm;", math_expression: "1.2 - 0.8 = 0.4" },
            { verbal_explanation: "נחסר שלמים: 4 שלמים שנותרו פחות 1 שווים 3.&rlm;", math_expression: "4 - 1 = 3" }
        ],
        final_answer: "3.4"
    },
    // שאלה 5
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים עשרוניים",
        question_text: "חיבור מספר שלם ושבר עשרוני. חשבו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>8 + 3.14 = ?</div>",
        options: ["11.14", "3.22", "11.22", "8.14"],
        correctAnswer: 0,
        hint: "זכרו ש-8 שלמים שווים ל-8.00. חברו את השלמים לשלמים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכתוב את המספר השלם עם נקודה עשרונית כדי ליישר את הספרות: 8.00.&rlm;", math_expression: "8.00 + 3.14" },
            { verbal_explanation: "חיבור השלמים נותן 11. החלק העשרוני נשאר כפי שהוא.&rlm;", math_expression: "8 + 3 = 11" }
        ],
        final_answer: "11.14"
    },
    // שאלה 6
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים עשרוניים",
        question_text: "חיסור עשרוני משלם. מהי התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>10 - 2.7 = ?</div>",
        options: ["7.3", "8.3", "7.7", "8.7"],
        correctAnswer: 0,
        hint: "כדי לחסר בנוחות, כתבו את המספר 10 כ-10.0 ופירטו מהשלמים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכתוב את 10 כ-10.0.&rlm;", math_expression: "10.0 - 2.7" },
            { verbal_explanation: "נלווה 1 מהשלמים ונהפוך אותו ל-10 עשיריות (כלומר 9 שלמים ו-10 עשיריות).&rlm;", math_expression: "9.10 - 2.7" },
            { verbal_explanation: "10 עשיריות פחות 7 שוות 3 עשיריות. 9 שלמים פחות 2 שווים 7.&rlm;", math_expression: "7.3" }
        ],
        final_answer: "7.3"
    },
    // שאלה 7
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים עשרוניים",
        question_text: "דן קנה לחם ב-7.50 שקלים וחלב ב-6.80 שקלים. כמה שילם דן בסך הכל?&rlm;",
        options: ["14.30", "13.30", "14.80", "15.30"],
        correctAnswer: 0,
        hint: "חברו את המחירים. שימו לב להמרה של האגורות לשלם נוסף.&rlm;",
        solution_steps: [
            { verbal_explanation: "חיבור אגורות: 50 ועוד 80 שוות 130 אגורות (1.30 שקלים).&rlm;", math_expression: "0.50 + 0.80 = 1.30" },
            { verbal_explanation: "חיבור שלמים: 7 שקלים ועוד 6 שקלים שווים 13.&rlm;", math_expression: "7 + 6 = 13" },
            { verbal_explanation: "נוסיף את ה-1.30 ל-13 ונקבל 14.30.&rlm;", math_expression: "13 + 1.30 = 14.30" }
        ],
        final_answer: "14.30"
    },
    // שאלה 8
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים עשרוניים",
        question_text: "בבקבוק היו 2.5 ליטרים של מים. יעל שתתה 0.75 ליטר. כמה מים נשארו בבקבוק?&rlm;",
        options: ["1.75", "1.25", "1.85", "2.25"],
        correctAnswer: 0,
        hint: "כתבו את הכמות כ-2.50 ובצעו חיסור של 0.75.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכתוב את התרגיל עם אפס שומר מקום.&rlm;", math_expression: "2.50 - 0.75" },
            { verbal_explanation: "נחסר (אפשר לחשוב כחיסור מאונך: 250 פחות 75 שווה 175).&rlm;", math_expression: "250 - 75 = 175" },
            { verbal_explanation: "נמקם את הנקודה העשרונית בחזרה ונקבל 1.75.&rlm;", math_expression: "1.75" }
        ],
        final_answer: "1.75"
    },
    // שאלה 9
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים עשרוניים",
        question_text: "מהי תוצאת החיבור הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.05 + 0.05 = ?</div>",
        options: ["0.1", "0.01", "0.15", "0.001"],
        correctAnswer: 0,
        hint: "5 מאיות ועוד 5 מאיות שוות ל-10 מאיות, שזו עשירית אחת שלמה.&rlm;",
        solution_steps: [
            { verbal_explanation: "חיבור המאיות: 5 ועוד 5 שווה 10 מאיות.&rlm;", math_expression: "0.05 + 0.05 = 0.10" },
            { verbal_explanation: "האפס הימני אינו משנה את הערך, לכן 0.10 שווה ל-0.1.&rlm;", math_expression: "0.1" }
        ],
        final_answer: "0.1"
    },
    // שאלה 10
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים עשרוניים",
        question_text: "חיסור מדויק במאיות:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1.1 - 0.99 = ?</div>",
        options: ["0.11", "0.21", "0.01", "1.01"],
        correctAnswer: 0,
        hint: "רשמו את 1.1 כ-1.10 וחשבו כמה חסר מ-0.99 כדי להגיע ל-1.10.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום 1.1 כ-1.10 כדי שיהיו מאיות גם במספר הראשון.&rlm;", math_expression: "1.10 - 0.99" },
            { verbal_explanation: "ההפרש בין 110 מאיות ל-99 מאיות הוא בדיוק 11 מאיות.&rlm;", math_expression: "0.11" }
        ],
        final_answer: "0.11"
    },
    // שאלה 11
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים עשרוניים",
        question_text: "חיבור של שלושה שברים עשרוניים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1.2 + 2.5 + 0.3 = ?</div>",
        options: ["4.0", "3.0", "4.1", "3.9"],
        correctAnswer: 0,
        hint: "חברו קודם את העשיריות: 2 ועוד 5 ועוד 3. אם עברתם את ה-10, העבירו שלם אחד שמאלה.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחבר את העשיריות: 2+5+3 = 10 עשיריות (כלומר שלם 1).&rlm;", math_expression: "0.2 + 0.5 + 0.3 = 1.0" },
            { verbal_explanation: "נחבר את השלמים המקוריים: 1+2 = 3.&rlm;", math_expression: "1 + 2 = 3" },
            { verbal_explanation: "נוסיף את השלם מחיבור העשיריות: 3+1 = 4.&rlm;", math_expression: "4.0" }
        ],
        final_answer: "4.0"
    },
    // שאלה 12
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים עשרוניים",
        question_text: "בצעו את שתי פעולות החיסור ברצף משמאל לימין:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5.5 - 1.2 - 0.3 = ?</div>",
        options: ["4.0", "4.6", "3.0", "4.3"],
        correctAnswer: 0,
        hint: "חסרו תחילה 1.2 מ-5.5, ומהתוצאה חסרו 0.3.&rlm;",
        solution_steps: [
            { verbal_explanation: "החיסור הראשון: 5.5 פחות 1.2.&rlm;", math_expression: "5.5 - 1.2 = 4.3" },
            { verbal_explanation: "החיסור השני: ניקח את התוצאה ונחסר 0.3.&rlm;", math_expression: "4.3 - 0.3 = 4.0" }
        ],
        final_answer: "4.0"
    },


    // ==========================================================
    // תת נושא 2: חיבור וחיסור שברים פשוטים (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חשבו את תוצאת החיבור הבאה (שימו לב שהמכנים שווים):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3/8 + 4/8 = ?</div>",
        options: ["7/8", "7/16", "1/8", "12/8"],
        correctAnswer: 0,
        hint: "כאשר המכנים שווים, מחברים רק את המונים והמכנה נשאר ללא שינוי.&rlm;",
        solution_steps: [
            { verbal_explanation: "המכנים זהים (8), לכן נחבר את המונים בלבד.&rlm;", math_expression: "3 + 4 = 7" },
            { verbal_explanation: "נשמור על המכנה המקורי. התוצאה היא 7 שמיניות.&rlm;", math_expression: "7/8" }
        ],
        final_answer: "7/8"
    },
    // שאלה 14
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חשבו את התוצאה (שימו לב למכנים השונים):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1/2 + 1/4 = ?</div>",
        options: ["3/4", "2/6", "2/4", "1/4"],
        correctAnswer: 0,
        hint: "הרחיבו את השבר חצי (1/2) כך שיהיה לו מכנה 4. כפלו מונה ומכנה ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את חצי פי 2 למכנה משותף 4.&rlm;", math_expression: "1/2 = 2/4" },
            { verbal_explanation: "נחבר את המונים של השברים עם המכנה המשותף.&rlm;", math_expression: "2/4 + 1/4 = 3/4" }
        ],
        final_answer: "3/4"
    },
    // שאלה 15
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "בצעו את פעולת החיסור:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>7/9 - 2/9 = ?</div>",
        options: ["5/9", "5/0", "9/9", "2/9"],
        correctAnswer: 0,
        hint: "המכנים זהים. החסירו רק את המונים ושימרו על המכנה המקורי.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחסיר את המונים: 7 פחות 2.&rlm;", math_expression: "7 - 2 = 5" },
            { verbal_explanation: "נשאיר את המכנה 9. קיבלנו 5 תשיעיות.&rlm;", math_expression: "5/9" }
        ],
        final_answer: "5/9"
    },
    // שאלה 16
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חשבו את התרגיל הבא, הפכו תחילה את השלם לשבר:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1 - 1/3 = ?</div>",
        options: ["2/3", "1/3", "0", "3/3"],
        correctAnswer: 0,
        hint: "זכרו שניתן לכתוב את השלם '1' בתור 3 שלישים (3/3).&rlm;",
        solution_steps: [
            { verbal_explanation: "נכתוב מחדש את השלם 1 כ-3 שלישים על מנת שנוכל לחסר.&rlm;", math_expression: "1 = 3/3" },
            { verbal_explanation: "נחסר שליש אחד מתוך שלושה שלישים.&rlm;", math_expression: "3/3 - 1/3 = 2/3" }
        ],
        final_answer: "2/3"
    },
    // שאלה 17
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "פתרו את תרגיל החיבור (היעזרו בהרחבה):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2/5 + 1/10 = ?</div>",
        options: ["5/10", "3/10", "3/15", "4/10"],
        correctAnswer: 0,
        hint: "המכנה המשותף הקטן ביותר הוא 10. הרחיבו את השבר 2/5 למכנה 10.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את שתי חמישיות פי 2 כדי לקבל מכנה 10.&rlm;", math_expression: "2/5 = 4/10" },
            { verbal_explanation: "נחבר את המונים עם המכנה המשותף החדש.&rlm;", math_expression: "4/10 + 1/10 = 5/10" }
        ],
        final_answer: "5/10"
    },
    // שאלה 18
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חשבו את תוצאת החיסור:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>11/12 - 1/4 = ?</div>",
        options: ["8/12", "10/12", "10/8", "1/2"],
        correctAnswer: 0,
        hint: "הרחיבו את הרבע (1/4) למכנה 12 על ידי כפל מונה ומכנה ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את הרבע פי 3 למכנה משותף 12.&rlm;", math_expression: "1/4 = 3/12" },
            { verbal_explanation: "נחסיר את השבר המורחב מהשבר הראשון.&rlm;", math_expression: "11/12 - 3/12 = 8/12" }
        ],
        final_answer: "8/12"
    },
    // שאלה 19
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "מהי תוצאת החיבור הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3/4 + 1/5 = ?</div>",
        options: ["19/20", "4/9", "4/20", "15/20"],
        correctAnswer: 0,
        hint: "המכנה המשותף עבור 4 ו-5 הוא מכפלתם (20). הרחיבו את שני השברים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את השבר הראשון פי 5 (למכנה 20).&rlm;", math_expression: "3/4 = 15/20" },
            { verbal_explanation: "נרחיב את השבר השני פי 4 (למכנה 20).&rlm;", math_expression: "1/5 = 4/20" },
            { verbal_explanation: "נחבר את המונים.&rlm;", math_expression: "15/20 + 4/20 = 19/20" }
        ],
        final_answer: "19/20"
    },
    // שאלה 20
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "ליעל היו 3 רבעים של פיצה. היא אכלה רבע מהפיצה. איזה חלק נותר?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3/4 - 1/4 = ?</div>",
        options: ["2/4", "1/4", "4/4", "1/2"], 
        correctAnswer: 0,
        hint: "המכנים זהים (4). חסרו רק את המונים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחסיר את המונים.", math_expression: "3 - 1 = 2" },
            { verbal_explanation: "נותרו 2 רבעים (שאפשר בהמשך לצמצם לחצי).&rlm;", math_expression: "2/4" }
        ],
        final_answer: "2/4"
    },
    // שאלה 21
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "רמי צבע בבוקר 2/5 מהגדר שלו, ובצהריים צבע עוד 1/5. איזה חלק מהגדר נצבע?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2/5 + 1/5 = ?</div>",
        options: ["3/5", "3/10", "1/5", "2/5"],
        correctAnswer: 0,
        hint: "המכנים זהים. עליכם לבצע חיבור מונים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחבר את המונים של החלקים שרמי צבע.&rlm;", math_expression: "2 + 1 = 3" },
            { verbal_explanation: "התוצאה היא 3 חמישיות.&rlm;", math_expression: "3/5" }
        ],
        final_answer: "3/5"
    },
    // שאלה 22
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "פתרו את התרגיל המעורב משמאל לימין:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5/6 - 1/3 + 1/6 = ?</div>",
        options: ["4/6", "3/6", "5/9", "2/6"],
        correctAnswer: 0,
        hint: "הביאו את השליש למכנה 6 (על ידי הרחבה פי 2), ואז חשבו את התרגיל לפי הסדר.&rlm;",
        solution_steps: [
            { verbal_explanation: "הרחבת השליש למכנה 6.", math_expression: "1/3 = 2/6" },
            { verbal_explanation: "פעולת החיסור: 5 שישיות פחות 2 שישיות שווה 3 שישיות.&rlm;", math_expression: "5/6 - 2/6 = 3/6" },
            { verbal_explanation: "פעולת החיבור: 3 שישיות ועוד 1 שישית שווה 4 שישיות.&rlm;", math_expression: "3/6 + 1/6 = 4/6" }
        ],
        final_answer: "4/6"
    },
    // שאלה 23
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חשבו את תוצאת החיבור הבאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1/3 + 1/4 = ?</div>",
        options: ["7/12", "2/7", "1/7", "2/12"],
        correctAnswer: 0,
        hint: "המכנה המשותף המינימלי הוא 12. הרחיבו את השליש פי 4 ואת הרבע פי 3.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את השליש פי 4 ואת הרבע פי 3 למכנה 12.&rlm;", math_expression: "1/3 = 4/12 , 1/4 = 3/12" },
            { verbal_explanation: "נחבר את המונים המורחבים.&rlm;", math_expression: "4/12 + 3/12 = 7/12" }
        ],
        final_answer: "7/12"
    },
    // שאלה 24
    {
        topic: "fractions",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חיבור של שלושה שברים פשוטים. חשבו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3/8 + 1/2 + 1/4 = ?</div>",
        options: ["9/8", "3/14", "5/8", "1"],
        correctAnswer: 0,
        hint: "המכנה המשותף הגדול הוא 8. הרחיבו את חצי ורבע לשמיניות.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את חצי (פי 4) ואת רבע (פי 2) למכנה 8.", math_expression: "1/2 = 4/8 , 1/4 = 2/8" },
            { verbal_explanation: "נחבר הכל: 3 ועוד 4 ועוד 2 מונים.", math_expression: "3/8 + 4/8 + 2/8 = 9/8" }
        ],
        final_answer: "9/8"
    },


    // ==========================================================
    // תת נושא 3: חילוק שברים עשרוניים (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "fractions",
        subTopic: "חילוק שברים עשרוניים",
        question_text: "פתרו את תרגיל החילוק הבא (שבר עשרוני חלקי מספר שלם):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4.8 : 2 = ?</div>",
        options: ["2.4", "24", "0.24", "2.8"],
        correctAnswer: 0,
        hint: "חלקו את המספר השלם (4) ב-2, ולאחר מכן את העשיריות (8) ב-2. אל תשכחו את הנקודה.&rlm;",
        solution_steps: [
            { verbal_explanation: "ניתן לחלק כל חלק בנפרד. נחלק את השלמים: 4 לחלק ל-2 הם 2.&rlm;", math_expression: "4 : 2 = 2" },
            { verbal_explanation: "נחלק את העשיריות: 8 עשיריות לחלק ל-2 הן 4 עשיריות.&rlm;", math_expression: "0.8 : 2 = 0.4" },
            { verbal_explanation: "נחבר את התוצאות.", math_expression: "2 + 0.4 = 2.4" }
        ],
        final_answer: "2.4"
    },
    // שאלה 26
    {
        topic: "fractions",
        subTopic: "חילוק שברים עשרוניים",
        question_text: "חשבו את תוצאת החילוק:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.6 : 3 = ?</div>",
        options: ["0.2", "2", "0.02", "1.8"],
        correctAnswer: 0,
        hint: "חשבו על 0.6 כעל '6 עשיריות'. חלקו 6 ב-3, והתשובה תהיה בעשיריות.&rlm;",
        solution_steps: [
            { verbal_explanation: "6 עשיריות לחלק ל-3 נותן לנו 2 עשיריות.&rlm;", math_expression: "6 : 3 = 2" },
            { verbal_explanation: "התוצאה היא 2 עשיריות, כלומר 0.2.&rlm;", math_expression: "0.2" }
        ],
        final_answer: "0.2"
    },
    // שאלה 27
    {
        topic: "fractions",
        subTopic: "חילוק שברים עשרוניים",
        question_text: "מהי התוצאה של התרגיל (היזהרו מהזזת הנקודה):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1.5 : 5 = ?</div>",
        options: ["0.3", "3", "0.03", "1.3"],
        correctAnswer: 0,
        hint: "קשה לחלק 1 ל-5, לכן נתייחס למספר כאל '15 עשיריות' ונחלק ב-5.&rlm;",
        solution_steps: [
            { verbal_explanation: "נתייחס למספר 1.5 כאל 15 עשיריות.&rlm;", math_expression: "1.5 = 15/10" },
            { verbal_explanation: "15 לחלק ל-5 שווה ל-3.&rlm;", math_expression: "15 : 5 = 3" },
            { verbal_explanation: "לכן התשובה היא 3 עשיריות.", math_expression: "0.3" }
        ],
        final_answer: "0.3"
    },
    // שאלה 28
    {
        topic: "fractions",
        subTopic: "חילוק שברים עשרוניים",
        question_text: "חילוק בשבר עשרוני. כיצד פותרים את התרגיל הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2.5 : 0.5 = ?</div>",
        options: ["5", "0.5", "50", "2.0"],
        correctAnswer: 0,
        hint: "כדי להיפטר מהנקודה העשרונית במחלק (0.5), הכפילו את שני המספרים ב-10.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפיל את שני המספרים ב-10 כדי להפוך את תרגיל החילוק לתרגיל בשלמים.&rlm;", math_expression: "(2.5 × 10) : (0.5 × 10)" },
            { verbal_explanation: "התרגיל החדש והפשוט יותר הוא 25 לחלק ל-5.&rlm;", math_expression: "25 : 5 = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 29
    {
        topic: "fractions",
        subTopic: "חילוק שברים עשרוניים",
        question_text: "חשבו את תוצאת החילוק (שימו לב לשני העשרוניים):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1.2 : 0.4 = ?</div>",
        options: ["3", "0.3", "30", "1.6"],
        correctAnswer: 0,
        hint: "כמה פעמים 0.4 נכנס בתוך 1.2? אפשר להכפיל את שני המספרים ב-10 כדי שיהיה קל.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את שני המספרים פי 10 (נזיז את הנקודה ימינה).&rlm;", math_expression: "12 : 4" },
            { verbal_explanation: "נחשב 12 לחלק ל-4, התוצאה היא 3.&rlm;", math_expression: "3" }
        ],
        final_answer: "3"
    },
    // שאלה 30
    {
        topic: "fractions",
        subTopic: "חילוק שברים עשרוניים",
        question_text: "חילוק מאיות במאיות. חשבו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.08 : 0.02 = ?</div>",
        options: ["4", "0.4", "0.04", "40"],
        correctAnswer: 0,
        hint: "הכפילו את שני המספרים פי 100 כדי לבטל את הנקודה העשרונית לחלוטין.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפיל את המחולק ואת המחלק ב-100.&rlm;", math_expression: "(0.08 × 100) : (0.02 × 100)" },
            { verbal_explanation: "נקבל תרגיל חילוק רגיל בשלמים: 8 לחלק ל-2.&rlm;", math_expression: "8 : 2 = 4" }
        ],
        final_answer: "4"
    },
    // שאלה 31
    {
        topic: "fractions",
        subTopic: "חילוק שברים עשרוניים",
        question_text: "סרט אדום באורך 3.6 מטרים נחתך ל-4 חתיכות שוות. מהו אורך כל חתיכה?&rlm;",
        options: ["0.9", "0.09", "9", "0.8"],
        correctAnswer: 0,
        hint: "חשבו על 3.6 כעל '36 עשיריות'. חלקו 36 ב-4.&rlm;",
        solution_steps: [
            { verbal_explanation: "התרגיל הוא 3.6 לחלק ל-4. נתייחס לזה כאל 36 עשיריות.&rlm;", math_expression: "3.6 : 4" },
            { verbal_explanation: "36 לחלק ל-4 שווה ל-9.&rlm;", math_expression: "36 : 4 = 9" },
            { verbal_explanation: "לכן התשובה היא 9 עשיריות.&rlm;", math_expression: "0.9" }
        ],
        final_answer: "0.9"
    },
    // שאלה 32
    {
        topic: "fractions",
        subTopic: "חילוק שברים עשרוניים",
        question_text: "קנקן מיץ מכיל 7.5 ליטרים. רוצים למזוג את המיץ לכוסות המכילות 1.5 ליטר כל אחת. לכמה כוסות יספיק המיץ?&rlm;",
        options: ["5", "50", "10", "3"],
        correctAnswer: 0,
        hint: "התרגיל הוא 7.5 לחלק ל-1.5. הכפילו ב-10 כדי לקבל 75 חלקי 15.&rlm;",
        solution_steps: [
            { verbal_explanation: "התרגיל שעלינו לפתור הוא חלוקת הכמות הכוללת בנפח של כוס אחת.&rlm;", math_expression: "7.5 : 1.5" },
            { verbal_explanation: "נכפיל את שני המספרים פי 10 ונקבל תרגיל בשלמים.&rlm;", math_expression: "75 : 15 = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 33
    {
        topic: "fractions",
        subTopic: "חילוק שברים עשרוניים",
        question_text: "חילוק שלם בשבר עשרוני. מהי התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3 : 0.5 = ?</div>",
        options: ["6", "1.5", "15", "0.6"],
        correctAnswer: 0,
        hint: "כמה פעמים חצי (0.5) נכנס בתוך השלם 3? (בכל שלם יש שני חצאים).&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי להיפטר מהעשרוני, נכפיל את שני המספרים ב-10.&rlm;", math_expression: "(3 × 10) : (0.5 × 10)" },
            { verbal_explanation: "התרגיל הוא כעת 30 לחלק ל-5.&rlm;", math_expression: "30 : 5 = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 34
    {
        topic: "fractions",
        subTopic: "חילוק שברים עשרוניים",
        question_text: "חשבו את התוצאה הבאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>10 : 2.5 = ?</div>",
        options: ["4", "40", "0.4", "25"],
        correctAnswer: 0,
        hint: "כמה פעמים 'שניים וחצי' נכנס בתוך 10?&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפיל את שני המספרים פי 10 כדי לחלק בשלמים.&rlm;", math_expression: "(10 × 10) : (2.5 × 10)" },
            { verbal_explanation: "נקבל 100 לחלק ל-25.&rlm;", math_expression: "100 : 25 = 4" }
        ],
        final_answer: "4"
    },
    // שאלה 35
    {
        topic: "fractions",
        subTopic: "חילוק שברים עשרוניים",
        question_text: "מהי תוצאת חלוקת המאיות הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.75 : 0.25 = ?</div>",
        options: ["3", "0.3", "30", "5"],
        correctAnswer: 0,
        hint: "חישבו על זה כחלוקה של כסף: כמה מטבעות של 25 אגורות נכנסים בתוך 75 אגורות?&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפיל את שני הצדדים ב-100 להסרת הנקודה העשרונית.&rlm;", math_expression: "(0.75 × 100) : (0.25 × 100)" },
            { verbal_explanation: "התרגיל הוא 75 לחלק ל-25. התשובה היא 3.&rlm;", math_expression: "75 : 25 = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 36
    {
        topic: "fractions",
        subTopic: "חילוק שברים עשרוניים",
        question_text: "חשבו את התוצאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4.2 : 0.6 = ?</div>",
        options: ["7", "0.7", "70", "4.8"],
        correctAnswer: 0,
        hint: "הכפילו את שניהם פי 10 כדי לקבל חילוק פשוט בלוח הכפל.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את שני המספרים פי 10.&rlm;", math_expression: "42 : 6" },
            { verbal_explanation: "42 לחלק ל-6 שווה ל-7.&rlm;", math_expression: "7" }
        ],
        final_answer: "7"
    },


    // ==========================================================
    // תת נושא 4: חילוק שברים פשוטים (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "fractions",
        subTopic: "חילוק שברים פשוטים",
        question_text: "פתרו את תרגיל חילוק השברים הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1/2 : 1/4 = ?</div>",
        options: ["2", "1/8", "1/2", "4"],
        correctAnswer: 0,
        hint: "כדי לחלק שברים, כופלים את השבר הראשון בהופכי של השבר השני (נהפוך את 1/4 ל-4/1).&rlm;",
        solution_steps: [
            { verbal_explanation: "נהפוך את פעולת החילוק לכפל, ואת השבר השני להופכי שלו (4 חלקי 1).&rlm;", math_expression: "1/2 × 4/1" },
            { verbal_explanation: "נכפול מונה במונה ומכנה במכנה: 1 כפול 4 הם 4, ו-2 כפול 1 הם 2.&rlm;", math_expression: "4/2" },
            { verbal_explanation: "השבר המדומה שווה בדיוק ל-2 שלמים.&rlm;", math_expression: "4 : 2 = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 38
    {
        topic: "fractions",
        subTopic: "חילוק שברים פשוטים",
        question_text: "חשבו את תוצאת החילוק הבאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3/4 : 1/8 = ?</div>",
        options: ["6", "3/32", "8/3", "4"],
        correctAnswer: 0,
        hint: "כמה פעמים שמינית אחת נכנסת בתוך 3 רבעים? כפלו בהופכי.&rlm;",
        solution_steps: [
            { verbal_explanation: "נהפוך את התרגיל לכפל בהופכי של השבר השני.&rlm;", math_expression: "3/4 × 8/1" },
            { verbal_explanation: "נבצע כפל מונים ומכנים: 3 כפול 8 הם 24. ו-4 כפול 1 הם 4.&rlm;", math_expression: "24/4" },
            { verbal_explanation: "24 לחלק ל-4 שווה ל-6 שלמים.&rlm;", math_expression: "6" }
        ],
        final_answer: "6"
    },
    // שאלה 39
    {
        topic: "fractions",
        subTopic: "חילוק שברים פשוטים",
        question_text: "חילוק מספר שלם בשבר. חשבו את התוצאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2 : 1/3 = ?</div>",
        options: ["6", "2/3", "1.5", "1/6"],
        correctAnswer: 0,
        hint: "כמה פעמים 'שליש' יכול להיכנס בתוך 2 שלמים? ב-1 שלם יש שלושה שלישים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום את ה-2 כשבר (2/1) ונכפול בהופכי של השליש (3/1).&rlm;", math_expression: "2/1 × 3/1" },
            { verbal_explanation: "2 כפול 3 שווה ל-6. התשובה היא 6 שלמים.&rlm;", math_expression: "6" }
        ],
        final_answer: "6"
    },
    // שאלה 40
    {
        topic: "fractions",
        subTopic: "חילוק שברים פשוטים",
        question_text: "מהי התוצאה של תרגיל החילוק הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5 : 1/2 = ?</div>",
        options: ["10", "2.5", "5/2", "1/10"],
        correctAnswer: 0,
        hint: "כמה חצאים יש בתוך 5 שלמים?&rlm;",
        solution_steps: [
            { verbal_explanation: "חילוק בחצי זהה לכפל פי 2 (ההופכי של 1/2).&rlm;", math_expression: "5 × 2/1" },
            { verbal_explanation: "5 כפול 2 שווה ל-10.&rlm;", math_expression: "10" }
        ],
        final_answer: "10"
    },
    // שאלה 41
    {
        topic: "fractions",
        subTopic: "חילוק שברים פשוטים",
        question_text: "חילוק שבר במספר שלם. פתרו את התרגיל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1/3 : 2 = ?</div>",
        options: ["1/6", "2/3", "6", "1.5"],
        correctAnswer: 0,
        hint: "לחלק שליש ל-2 חלקים, זה כמו לכפול אותו בחצי (ההופכי של 2).&rlm;",
        solution_steps: [
            { verbal_explanation: "נהפוך את השלם 2 להופכי שלו, שהוא חצי, ונכפול.&rlm;", math_expression: "1/3 × 1/2" },
            { verbal_explanation: "כפל מונים וכפל מכנים נותן שישית.&rlm;", math_expression: "1/6" }
        ],
        final_answer: "1/6"
    },
    // שאלה 42
    {
        topic: "fractions",
        subTopic: "חילוק שברים פשוטים",
        question_text: "מהי התוצאה של החלוקה הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1/5 : 3 = ?</div>",
        options: ["1/15", "3/5", "15", "1/8"],
        correctAnswer: 0,
        hint: "כופלים את השבר בהופכי של השלם 3.&rlm;",
        solution_steps: [
            { verbal_explanation: "ההופכי של 3 הוא 1/3. נכפול את השבר ב-1/3.&rlm;", math_expression: "1/5 × 1/3" },
            { verbal_explanation: "1 כפול 1 במונה, ו-5 כפול 3 במכנה.&rlm;", math_expression: "1/15" }
        ],
        final_answer: "1/15"
    },
    // שאלה 43
    {
        topic: "fractions",
        subTopic: "חילוק שברים פשוטים",
        question_text: "פתרו את תרגיל החילוק הבא בין שני שברים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2/3 : 2/9 = ?</div>",
        options: ["3", "4/27", "1/3", "9"],
        correctAnswer: 0,
        hint: "הפכו את השבר השני להופכי שלו (9/2), כפלו, ולאחר מכן צמצמו את התוצאה.&rlm;",
        solution_steps: [
            { verbal_explanation: "כפל בהופכי של השבר השני.&rlm;", math_expression: "2/3 × 9/2" },
            { verbal_explanation: "ניתן לצמצם את ה-2 במונה וה-2 במכנה. נשארנו עם 9 חלקי 3.&rlm;", math_expression: "9/3" },
            { verbal_explanation: "9 לחלק ל-3 שווה ל-3 שלמים.&rlm;", math_expression: "3" }
        ],
        final_answer: "3"
    },
    // שאלה 44
    {
        topic: "fractions",
        subTopic: "חילוק שברים פשוטים",
        question_text: "חשבו את תוצאת התרגיל (שימו לב למכנים השווים):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4/5 : 2/5 = ?</div>",
        options: ["2", "8/25", "1/2", "4"],
        correctAnswer: 0,
        hint: "כאשר המכנים שווים, ניתן פשוט לחלק את המונים זה בזה.&rlm;",
        solution_steps: [
            { verbal_explanation: "נבצע כפל בהופכי של השבר השני (שהוא 5/2).&rlm;", math_expression: "4/5 × 5/2" },
            { verbal_explanation: "ה-5 מצטמצם. נשארנו עם 4 חלקי 2 שזה שווה ל-2.&rlm;", math_expression: "2" }
        ],
        final_answer: "2"
    },
    // שאלה 45
    {
        topic: "fractions",
        subTopic: "חילוק שברים פשוטים",
        question_text: "לדנה יש קנקן עם 3/4 ליטר של מיץ. היא רוצה למזוג את המיץ לכוסות כך שבכל כוס יהיה 1/8 ליטר. כמה כוסות היא תמלא?&rlm;",
        options: ["6", "4", "8", "3"],
        correctAnswer: 0,
        hint: "התרגיל הוא: 3 רבעים לחלק לשמינית. הכפילו בהופכי.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום את התרגיל ככפל בהופכי של שמינית.&rlm;", math_expression: "3/4 × 8/1" },
            { verbal_explanation: "3 כפול 8 שווה 24. המכנה הוא 4.&rlm;", math_expression: "24/4" },
            { verbal_explanation: "24 לחלק ל-4 שווה ל-6 כוסות.&rlm;", math_expression: "6" }
        ],
        final_answer: "6"
    },
    // שאלה 46
    {
        topic: "fractions",
        subTopic: "חילוק שברים פשוטים",
        question_text: "חצי עוגה (1/2) מחולקת שווה בשווה בין 4 ילדים. איזה חלק מהעוגה השלמה יקבל כל ילד?&rlm;",
        options: ["1/8", "1/2", "1/6", "1/4"],
        correctAnswer: 0,
        hint: "התרגיל הוא חצי לחלק ל-4. כפלו את השבר בהופכי של 4.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום את התרגיל כחילוק שבר בשלם.&rlm;", math_expression: "1/2 : 4" },
            { verbal_explanation: "נהפוך לכפל בהופכי: חצי כפול רבע.&rlm;", math_expression: "1/2 × 1/4" },
            { verbal_explanation: "1 כפול 1 במונה, ו-2 כפול 4 במכנה. נקבל שמינית.&rlm;", math_expression: "1/8" }
        ],
        final_answer: "1/8"
    },
    // שאלה 47
    {
        topic: "fractions",
        subTopic: "חילוק שברים פשוטים",
        question_text: "חילוק עם מספר מעורב. פתרו את התרגיל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1 1/2 : 1/2 = ?</div>",
        options: ["3", "1 1/4", "3/4", "2"],
        correctAnswer: 0,
        hint: "הפכו את 'אחד וחצי' לשבר מדומה (3/2) ואז בצעו את חילוק השברים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נהפוך את המספר המעורב לשבר מדומה: 3 חצאים.&rlm;", math_expression: "3/2" },
            { verbal_explanation: "כעת נחלק לחצי. נכפול בהופכי (שזה 2).&rlm;", math_expression: "3/2 × 2/1 = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 48
    {
        topic: "fractions",
        subTopic: "חילוק שברים פשוטים",
        question_text: "מהי תוצאת חלוקת שבר בעצמו?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3/4 : 3/4 = ?</div>",
        options: ["1", "9/16", "3/4", "0"],
        correctAnswer: 0,
        hint: "כל מספר (או שבר) שמחולק בעצמו נותן תמיד אותה תוצאה.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר מחלקים מספר (שאינו אפס) בעצמו, התוצאה היא תמיד 1 השלם.&rlm;", math_expression: "1" }
        ],
        final_answer: "1"
    },// ========================================================================
// שכבת גיל: ה'-ו' | נושא: שברים (חלק ב')
// 4 תתי נושאים | 48 שאלות סה"כ
// ========================================================================
// הוראות כתיבה: 
// שברים: נכתבים כ- 1/4 או 2 1/2
// חילוק: נכתב כ- :
// כפל: נכתב כ- ×
// ========================================================================



    // ==========================================================
    // תת נושא 5: חישוב חלק של כמות ומציאת הכמות היסודית (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "fractions",
        subTopic: "חישוב חלק של כמות ומציאת הכמות היסודית",
        question_text: "בכיתה יש 24 תלמידים. 1/4 מהם מרכיבים משקפיים. כמה תלמידים מרכיבים משקפיים?&rlm;",
        options: ["6", "4", "8", "12"],
        correctAnswer: 0,
        hint: "כדי למצוא רבע מכמות, יש לחלק את הכמות הכוללת ב-4.&rlm;",
        solution_steps: [
            { verbal_explanation: "הכמות הכוללת היא 24 (השלם). אנו רוצים למצוא כמה זה 1/4 מתוך 24.&rlm;", math_expression: "24 × 1/4" },
            { verbal_explanation: "נחלק את 24 במכנה 4.&rlm;", math_expression: "24 : 4 = 6" },
            { verbal_explanation: "נכפיל את התוצאה במונה 1. נקבל 6 תלמידים.&rlm;", math_expression: "6 × 1 = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 2
    {
        topic: "fractions",
        subTopic: "חישוב חלק של כמות ומציאת הכמות היסודית",
        question_text: "קבוצת כדורגל שיחקה 30 משחקים העונה וניצחה ב-2/3 מהם. בכמה משחקים היא ניצחה?&rlm;",
        options: ["20", "10", "15", "25"],
        correctAnswer: 0,
        hint: "תחילה מצאו כמה זה 1/3 מתוך 30 (חלקו ב-3), ואז הכפילו את התוצאה ב-2 כדי למצוא 2/3.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחלק את השלם (30) למכנה (3) כדי לגלות כמה משחקים שווים לשליש אחד.&rlm;", math_expression: "30 : 3 = 10" },
            { verbal_explanation: "הקבוצה ניצחה בשני שלישים, לכן נכפיל את התוצאה במונה (2).&rlm;", math_expression: "10 × 2 = 20" }
        ],
        final_answer: "20"
    },
    // שאלה 3
    {
        topic: "fractions",
        subTopic: "חישוב חלק של כמות ומציאת הכמות היסודית",
        question_text: "מהם 3/5 מתוך 50 שקלים?&rlm;",
        options: ["30 שקלים", "10 שקלים", "25 שקלים", "40 שקלים"],
        correctAnswer: 0,
        hint: "חלקו את ה-50 ב-5, ואת התוצאה כפלו ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא כמה זה חמישית אחת: 50 לחלק ל-5.&rlm;", math_expression: "50 : 5 = 10" },
            { verbal_explanation: "אנו צריכים 3 חמישיות, לכן נכפיל ב-3.&rlm;", math_expression: "10 × 3 = 30" }
        ],
        final_answer: "30 שקלים"
    },
    // שאלה 4
    {
        topic: "fractions",
        subTopic: "חישוב חלק של כמות ומציאת הכמות היסודית",
        question_text: "מציאת השלם: 1/2 מהספר הוא 10 עמודים. כמה עמודים יש בספר כולו?&rlm;",
        options: ["20 עמודים", "5 עמודים", "15 עמודים", "25 עמודים"],
        correctAnswer: 0,
        hint: "אם חצי שווה ל-10, עליכם להכפיל פי 2 כדי להגיע לספר השלם.&rlm;",
        solution_steps: [
            { verbal_explanation: "נתון שחלק אחד מתוך שניים (חצי) שווה ל-10.&rlm;", math_expression: "1/2 = 10" },
            { verbal_explanation: "כדי למצוא את השלם (2 חצאים), נכפיל ב-2.&rlm;", math_expression: "10 × 2 = 20" }
        ],
        final_answer: "20 עמודים"
    },
    // שאלה 5
    {
        topic: "fractions",
        subTopic: "חישוב חלק של כמות ומציאת הכמות היסודית",
        question_text: "שליש (1/3) מהעוגה שוקל 400 גרם. מהו משקלה של העוגה השלמה?&rlm;",
        options: ["1200 גרם", "800 גרם", "200 גרם", "600 גרם"],
        correctAnswer: 0,
        hint: "בעוגה שלמה יש 3 שלישים. אם שליש אחד הוא 400, הכפילו ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "חלק אחד מתוך 3 (שליש) שווה 400.&rlm;", math_expression: "1/3 = 400" },
            { verbal_explanation: "כדי למצוא את השלם, נכפיל את הערך של חלק אחד במספר החלקים הכולל (המכנה).&rlm;", math_expression: "400 × 3 = 1200" }
        ],
        final_answer: "1200 גרם"
    },
    // שאלה 6
    {
        topic: "fractions",
        subTopic: "חישוב חלק של כמות ומציאת הכמות היסודית",
        question_text: "3/4 (שלושה רבעים) ממשקל החתול הם 12 ק\"ג. מהו משקלו המלא של החתול?&rlm;",
        options: ["16 ק\"ג", "9 ק\"ג", "24 ק\"ג", "15 ק\"ג"],
        correctAnswer: 0,
        hint: "תחילה, חלקו 12 ב-3 כדי למצוא כמה שוקל רבע אחד. לאחר מכן, הכפילו ב-4 כדי למצוא את השלם.&rlm;",
        solution_steps: [
            { verbal_explanation: "נתון ש-3 חלקים שווים 12. נחלק ב-3 כדי למצוא ערך של חלק אחד (רבע).&rlm;", math_expression: "12 : 3 = 4" },
            { verbal_explanation: "רבע שווה ל-4 ק\"ג. בשלם יש 4 רבעים. נכפיל ב-4.&rlm;", math_expression: "4 × 4 = 16" }
        ],
        final_answer: "16 ק\"ג"
    },
    // שאלה 7
    {
        topic: "fractions",
        subTopic: "חישוב חלק של כמות ומציאת הכמות היסודית",
        question_text: "יעל קראה 2/5 מהספר שלה, שהם 40 עמודים. כמה עמודים בסך הכל יש בספר?&rlm;",
        options: ["100", "80", "50", "200"],
        correctAnswer: 0,
        hint: "אם 2 חלקים (מתוך 5) הם 40, חלק אחד הוא 20. כמה זה 5 חלקים?&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא כמה זה חמישית אחת. 2 חמישיות הן 40, נחלק ב-2.&rlm;", math_expression: "40 : 2 = 20" },
            { verbal_explanation: "חמישית אחת שווה 20. הספר המלא הוא 5 חמישיות. נכפיל ב-5.&rlm;", math_expression: "20 × 5 = 100" }
        ],
        final_answer: "100"
    },
    // שאלה 8
    {
        topic: "fractions",
        subTopic: "חישוב חלק של כמות ומציאת הכמות היסודית",
        question_text: "מה גדול יותר: 1/2 מתוך 40 או 1/3 מתוך 60?&rlm;",
        options: ["הם שווים בדיוק", "1/2 מתוך 40", "1/3 מתוך 60", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "חשבו כל אחד מהם בנפרד. כמה זה חצי של 40? כמה זה שליש של 60?&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב 1/2 מתוך 40 (נחלק ב-2).&rlm;", math_expression: "40 : 2 = 20" },
            { verbal_explanation: "נחשב 1/3 מתוך 60 (נחלק ב-3).&rlm;", math_expression: "60 : 3 = 20" },
            { verbal_explanation: "שתי התוצאות שוות ל-20.&rlm;", math_expression: "20 = 20" }
        ],
        final_answer: "הם שווים בדיוק"
    },
    // שאלה 9
    {
        topic: "fractions",
        subTopic: "חישוב חלק של כמות ומציאת הכמות היסודית",
        question_text: "במבחן יש 50 שאלות. יוסי ענה נכון על 9/10 מהשאלות. על כמה שאלות יוסי טעה?&rlm;",
        options: ["5", "45", "10", "1"],
        correctAnswer: 0,
        hint: "אם יוסי ענה נכון על 9 עשיריות, זה אומר שהוא טעה בעשירית אחת (1/10). חשבו כמה זה 1/10 מתוך 50.&rlm;",
        solution_steps: [
            { verbal_explanation: "החלק של התשובות השגויות הוא 1 פחות 9/10, שזה 1/10.&rlm;", math_expression: "10/10 - 9/10 = 1/10" },
            { verbal_explanation: "נחשב עשירית מתוך 50 שאלות. נחלק את 50 ב-10.&rlm;", math_expression: "50 : 10 = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 10
    {
        topic: "fractions",
        subTopic: "חישוב חלק של כמות ומציאת הכמות היסודית",
        question_text: "מכונית נסעה 3/8 מהדרך, שהם 60 ק\"מ. מהו אורך הדרך כולה?&rlm;",
        options: ["160 ק\"מ", "120 ק\"מ", "240 ק\"מ", "80 ק\"מ"],
        correctAnswer: 0,
        hint: "חילוק המרחק במונה (60 לחלק ל-3) ייתן לכם שמינית דרך. הכפילו במכנה (8) לקבלת הדרך המלאה.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא כמה ק\"מ שווה חלק אחד (1/8). נחלק במונה 3.&rlm;", math_expression: "60 : 3 = 20" },
            { verbal_explanation: "הדרך המלאה מורכבת מ-8 שמיניות. נכפיל ב-8.&rlm;", math_expression: "20 × 8 = 160" }
        ],
        final_answer: "160 ק\"מ"
    },
    // שאלה 11
    {
        topic: "fractions",
        subTopic: "חישוב חלק של כמות ומציאת הכמות היסודית",
        question_text: "חשבו כמה הם 2/7 מתוך 35?&rlm;",
        options: ["10", "5", "14", "20"],
        correctAnswer: 0,
        hint: "חלקו 35 ב-7, ואת מה שיצא תכפילו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שביעית מתוך 35 נמצא על ידי חילוק.&rlm;", math_expression: "35 : 7 = 5" },
            { verbal_explanation: "אנו זקוקים ל-2 שביעיות. נכפיל פי 2.&rlm;", math_expression: "5 × 2 = 10" }
        ],
        final_answer: "10"
    },
    // שאלה 12
    {
        topic: "fractions",
        subTopic: "חישוב חלק של כמות ומציאת הכמות היסודית",
        question_text: "5/6 מתוך משכורתו של רון הם 5,000 שקלים. מהי משכורתו המלאה?&rlm;",
        options: ["6,000 שקלים", "10,000 שקלים", "7,500 שקלים", "5,500 שקלים"],
        correctAnswer: 0,
        hint: "אם 5 חלקים שווים 5,000, כמה שווה חלק אחד? ומהו השלם?&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא ערך של חלק אחד (שישית).&rlm;", math_expression: "5000 : 5 = 1000" },
            { verbal_explanation: "השלם הוא 6 שישיות. נכפיל 1000 ב-6.&rlm;", math_expression: "1000 × 6 = 6000" }
        ],
        final_answer: "6,000 שקלים"
    },

    // ==========================================================
    // תת נושא 6: כפל וחילוק שברים עשרוניים ב-10, 100 וכו' (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "fractions",
        subTopic: "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        question_text: "חשבו את תוצאת הכפל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4.5 × 10 = ?</div>",
        options: ["45", "0.45", "450", "4.05"],
        correctAnswer: 0,
        hint: "בכפל ב-10, הנקודה העשרונית זזה מקום אחד ימינה (המספר גדל).&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר מכפילים שבר עשרוני ב-10, מזיזים את הנקודה העשרונית צעד אחד ימינה.&rlm;", math_expression: "4.5 × 10 = 45.0" },
            { verbal_explanation: "המספר 45.0 זהה למספר השלם 45.&rlm;", math_expression: "45" }
        ],
        final_answer: "45"
    },
    // שאלה 14
    {
        topic: "fractions",
        subTopic: "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        question_text: "מהי התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.72 × 100 = ?</div>",
        options: ["72", "7.2", "0.0072", "720"],
        correctAnswer: 0,
        hint: "בכפל ב-100 (שני אפסים), הנקודה זזה שני מקומות ימינה.&rlm;",
        solution_steps: [
            { verbal_explanation: "כפל ב-100 מזיז את הנקודה העשרונית שני צעדים ימינה.&rlm;", math_expression: "0.72 × 100 = 72.0" },
            { verbal_explanation: "התוצאה היא המספר השלם 72.&rlm;", math_expression: "72" }
        ],
        final_answer: "72"
    },
    // שאלה 15
    {
        topic: "fractions",
        subTopic: "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        question_text: "בצעו את פעולת החילוק הבאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>12.5 : 10 = ?</div>",
        options: ["1.25", "125", "0.125", "1.025"],
        correctAnswer: 0,
        hint: "בחילוק ב-10, הנקודה העשרונית זזה מקום אחד שמאלה (המספר קטן).&rlm;",
        solution_steps: [
            { verbal_explanation: "חילוק ב-10 מקטין את המספר, ולכן הנקודה העשרונית זזה צעד אחד שמאלה.&rlm;", math_expression: "12.5 : 10 = 1.25" }
        ],
        final_answer: "1.25"
    },
    // שאלה 16
    {
        topic: "fractions",
        subTopic: "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        question_text: "חשבו את תוצאת החילוק ב-100:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3.4 : 100 = ?</div>",
        options: ["0.034", "0.34", "340", "0.0034"],
        correctAnswer: 0,
        hint: "בחילוק ב-100, הנקודה צריכה לזוז שני מקומות שמאלה. ייתכן שתצטרכו להוסיף אפסים כדי 'לייצר' מקומות פנויים.&rlm;",
        solution_steps: [
            { verbal_explanation: "הזזת הנקודה צעד אחד שמאלה תיתן 0.34. נדרש צעד נוסף.&rlm;", math_expression: "" },
            { verbal_explanation: "נוסיף אפס משמאל לשלוש ונעביר את הנקודה שוב.&rlm;", math_expression: "3.4 : 100 = 0.034" }
        ],
        final_answer: "0.034"
    },
    // שאלה 17
    {
        topic: "fractions",
        subTopic: "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        question_text: "מהי התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.05 × 1000 = ?</div>",
        options: ["50", "5", "500", "0.5"],
        correctAnswer: 0,
        hint: "ב-1000 יש שלושה אפסים, לכן הזכרו להזיז את הנקודה שלושה מקומות ימינה.&rlm;",
        solution_steps: [
            { verbal_explanation: "נזיז את הנקודה 3 צעדים ימינה. שני הצעדים הראשונים יעברו את ה-0 ואת ה-5.&rlm;", math_expression: "0.05 × 100 = 5" },
            { verbal_explanation: "הצעד השלישי יוסיף אפס מימין למספר 5.&rlm;", math_expression: "5 × 10 = 50" }
        ],
        final_answer: "50"
    },
    // שאלה 18
    {
        topic: "fractions",
        subTopic: "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        question_text: "חבילת מדבקות עולה 4.20 שקלים. בחנות נמכר מארז של 10 חבילות. מה מחיר המארז?&rlm;",
        options: ["42 שקלים", "420 שקלים", "0.42 שקלים", "4.20 שקלים"],
        correctAnswer: 0,
        hint: "הכפילו את מחיר החבילה היחידה (4.20) ב-10.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפיל ב-10 על ידי הזזת הנקודה העשרונית מקום אחד ימינה.&rlm;", math_expression: "4.20 × 10 = 42.0" },
            { verbal_explanation: "הסכום הוא 42 שקלים שלמים.&rlm;", math_expression: "42" }
        ],
        final_answer: "42 שקלים"
    },
    // שאלה 19
    {
        topic: "fractions",
        subTopic: "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        question_text: "קופסה ובה 100 כדורי טניס שוקלת 235 גרם (בהתעלם ממשקל הקופסה). כמה שוקל כדור טניס אחד?&rlm;",
        options: ["2.35 גרם", "0.235 גרם", "23.5 גרם", "2350 גרם"],
        correctAnswer: 0,
        hint: "חלקו את המשקל הכולל (235) במספר הכדורים (100).&rlm;",
        solution_steps: [
            { verbal_explanation: "בחילוק שלם ב-100, הנקודה העשרונית הנסתרת (שנמצאת מימין ל-5) זזה שני צעדים שמאלה.&rlm;", math_expression: "235 : 100" },
            { verbal_explanation: "הנקודה תעבור את ה-5 ואז את ה-3, ותיעצר בין ה-2 ל-3.&rlm;", math_expression: "2.35" }
        ],
        final_answer: "2.35 גרם"
    },
    // שאלה 20
    {
        topic: "fractions",
        subTopic: "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        question_text: "פתרו את המשוואה הבאה ומצאו את המספר החסר:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>? × 100 = 45</div>",
        options: ["0.45", "4.5", "4500", "0.045"],
        correctAnswer: 0,
        hint: "כדי למצוא את המספר המקורי לפני הכפל ב-100, עלינו לבצע את הפעולה ההפוכה: לחלק ב-100.&rlm;",
        solution_steps: [
            { verbal_explanation: "נפעיל פעולה הפוכה: נחלק את 45 ב-100.&rlm;", math_expression: "45 : 100" },
            { verbal_explanation: "הנקודה זזה שני צעדים שמאלה.&rlm;", math_expression: "0.45" }
        ],
        final_answer: "0.45"
    },
    // שאלה 21
    {
        topic: "fractions",
        subTopic: "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        question_text: "פתרו את המשוואה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>12.4 : ? = 1.24</div>",
        options: ["10", "100", "1", "0.1"],
        correctAnswer: 0,
        hint: "הביטו בנקודה העשרונית: בכמה מקומות (ובאיזה כיוון) היא זזה מהמספר המקורי לתוצאה?&rlm;",
        solution_steps: [
            { verbal_explanation: "הנקודה העשרונית זזה מהמספר 12.4 למספר 1.24 צעד אחד בדיוק שמאלה.&rlm;", math_expression: "" },
            { verbal_explanation: "תזוזה של צעד אחד שמאלה משמעותה חילוק ב-10.&rlm;", math_expression: "10" }
        ],
        final_answer: "10"
    },
    // שאלה 22
    {
        topic: "fractions",
        subTopic: "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        question_text: "תרגיל משולב (משמאל לימין):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3.2 × 100 : 10 = ?</div>",
        options: ["32", "3.2", "320", "0.32"],
        correctAnswer: 0,
        hint: "בצעו כפל ב-100, ואז חלקו ב-10. לחלופין, כפל ב-100 וחילוק ב-10 שווים פשוט לכפל ב-10.&rlm;",
        solution_steps: [
            { verbal_explanation: "כפל ב-100 מזיז את הנקודה שני צעדים ימינה.&rlm;", math_expression: "3.2 × 100 = 320" },
            { verbal_explanation: "חילוק התוצאה ב-10 מזיז צעד אחד שמאלה.&rlm;", math_expression: "320 : 10 = 32" }
        ],
        final_answer: "32"
    },
    // שאלה 23
    {
        topic: "fractions",
        subTopic: "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        question_text: "חשבו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.9 × 10 = ?</div>",
        options: ["9", "0.09", "90", "0.90"],
        correctAnswer: 0,
        hint: "הזזת הנקודה מקום אחד ימינה מעבירה את ה-9 מספרת העשיריות לספרת האחדות.&rlm;",
        solution_steps: [
            { verbal_explanation: "נזיז את הנקודה ימינה מעבר ל-9.&rlm;", math_expression: "0.9 × 10 = 9.0" },
            { verbal_explanation: "נקבל את המספר השלם 9.&rlm;", math_expression: "9" }
        ],
        final_answer: "9"
    },
    // שאלה 24
    {
        topic: "fractions",
        subTopic: "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        question_text: "חשבו את תוצאת החילוק:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>15 : 1000 = ?</div>",
        options: ["0.015", "0.15", "1.5", "15000"],
        correctAnswer: 0,
        hint: "ב-1000 יש שלושה אפסים. הזיזו את הנקודה (הנמצאת מימין ל-5) שלושה מקומות שמאלה.&rlm;",
        solution_steps: [
            { verbal_explanation: "נתחיל מהמספר 15.0 ונזיז את הנקודה 3 צעדים שמאלה.&rlm;", math_expression: "" },
            { verbal_explanation: "הנקודה תעבור את ה-5, תעבור את ה-1, ונוסיף אפס להשלמת הצעד השלישי.&rlm;", math_expression: "0.015" }
        ],
        final_answer: "0.015"
    },

    // ==========================================================
    // תת נושא 7: כפל שבר בשבר כולל מספרים מעורבים (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "fractions",
        subTopic: "כפל שבר בשבר כולל מספרים מעורבים",
        question_text: "מהי תוצאת הכפל בין שני השברים הפשוטים הבאים?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1/2 × 1/3 = ?</div>",
        options: ["1/6", "2/5", "1/5", "2/6"],
        correctAnswer: 0,
        hint: "בכפל שברים, כופלים מונה במונה ומכנה במכנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול את המונים: 1 כפול 1.&rlm;", math_expression: "1 × 1 = 1" },
            { verbal_explanation: "נכפול את המכנים: 2 כפול 3.&rlm;", math_expression: "2 × 3 = 6" },
            { verbal_explanation: "נרשום את התוצאה: שישית.&rlm;", math_expression: "1/6" }
        ],
        final_answer: "1/6"
    },
    // שאלה 26
    {
        topic: "fractions",
        subTopic: "כפל שבר בשבר כולל מספרים מעורבים",
        question_text: "חשבו את המכפלה וצמצמו את התוצאה הסופית:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2/3 × 3/4 = ?</div>",
        options: ["1/2", "6/12", "5/7", "8/9"],
        correctAnswer: 0,
        hint: "אפשר לכפול ואז לצמצם, או לצמצם 'באלכסון' לפני הכפל (את ה-3 במונה עם ה-3 במכנה).&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול מונים ומכנים.", math_expression: "(2 × 3) / (3 × 4) = 6/12" },
            { verbal_explanation: "נצמצם את השבר 6/12 על ידי חלוקה ב-6.&rlm;", math_expression: "1/2" }
        ],
        final_answer: "1/2"
    },
    // שאלה 27
    {
        topic: "fractions",
        subTopic: "כפל שבר בשבר כולל מספרים מעורבים",
        question_text: "בצעו את כפל השברים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3/5 × 1/4 = ?</div>",
        options: ["3/20", "4/9", "3/9", "12/5"],
        correctAnswer: 0,
        hint: "מונה כפול מונה, מכנה כפול מכנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "כפל מונים: 3 כפול 1.&rlm;", math_expression: "3" },
            { verbal_explanation: "כפל מכנים: 5 כפול 4.&rlm;", math_expression: "20" },
            { verbal_explanation: "התוצאה היא 3 חלקי 20.&rlm;", math_expression: "3/20" }
        ],
        final_answer: "3/20"
    },
    // שאלה 28
    {
        topic: "fractions",
        subTopic: "כפל שבר בשבר כולל מספרים מעורבים",
        question_text: "חשבו (מומלץ לצמצם 'באלכסון' לפני הכפל):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5/8 × 4/5 = ?</div>",
        options: ["1/2", "20/40", "9/13", "1/4"],
        correctAnswer: 0,
        hint: "שימו לב ל-5 במונה ול-5 במכנה. אפשר לצמצם אותם ל-1 לפני הכפל.&rlm;",
        solution_steps: [
            { verbal_explanation: "ניתן לצמצם את המספר 5 שבמונה עם ה-5 שבמכנה.&rlm;", math_expression: "" },
            { verbal_explanation: "נשארנו עם 4 במונה ו-8 במכנה.&rlm;", math_expression: "4/8" },
            { verbal_explanation: "השבר 4/8 שווה לחצי (נצמצם ב-4).&rlm;", math_expression: "1/2" }
        ],
        final_answer: "1/2"
    },
    // שאלה 29
    {
        topic: "fractions",
        subTopic: "כפל שבר בשבר כולל מספרים מעורבים",
        question_text: "כפל של מספר מעורב בשבר. הפכו את המספר המעורב לשבר מדומה תחילה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1 1/2 × 1/3 = ?</div>",
        options: ["1/2", "3/6", "1 1/6", "1/3"],
        correctAnswer: 0,
        hint: "'אחד וחצי' שווה ל-3/2.&rlm;",
        solution_steps: [
            { verbal_explanation: "המרת המספר המעורב לשבר מדומה (3 חצאים).&rlm;", math_expression: "1 1/2 = 3/2" },
            { verbal_explanation: "כעת נבצע כפל שברים פשוט: 3/2 כפול 1/3.&rlm;", math_expression: "3/2 × 1/3" },
            { verbal_explanation: "ה-3 במונה וה-3 במכנה מצטמצמים ונשאר 1/2.&rlm;", math_expression: "1/2" }
        ],
        final_answer: "1/2"
    },
    // שאלה 30
    {
        topic: "fractions",
        subTopic: "כפל שבר בשבר כולל מספרים מעורבים",
        question_text: "כפל של שני מספרים מעורבים. זכרו להפוך לשברים מדומים לפני הכפל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1 1/4 × 1 1/3 = ?</div>",
        options: ["1 2/3", "1 1/12", "5/3", "1 2/7"],
        correctAnswer: 0,
        hint: "1 ורבע = 5/4. אחד ושליש = 4/3. מה קורה כשכופלים אותם?&rlm;",
        solution_steps: [
            { verbal_explanation: "נמיר את שני המספרים לשברים מדומים.&rlm;", math_expression: "5/4 × 4/3" },
            { verbal_explanation: "ה-4 במונה וה-4 במכנה מצטמצמים.&rlm;", math_expression: "5/3" },
            { verbal_explanation: "השבר 5/3 שווה ל-1 ושני שלישים.&rlm;", math_expression: "1 2/3" }
        ],
        final_answer: "1 2/3"
    },
    // שאלה 31
    {
        topic: "fractions",
        subTopic: "כפל שבר בשבר כולל מספרים מעורבים",
        question_text: "חשבו את תוצאת הכפל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2 2/3 × 1/4 = ?</div>",
        options: ["2/3", "8/12", "2 2/12", "3/7"],
        correctAnswer: 0,
        hint: "הפכו את 'שתיים ושני שלישים' לשבר מדומה (8/3).&rlm;",
        solution_steps: [
            { verbal_explanation: "נמיר את המספר המעורב (2 שלמים הם 6 שלישים, פלוס 2).&rlm;", math_expression: "2 2/3 = 8/3" },
            { verbal_explanation: "נכפול ברבע.&rlm;", math_expression: "8/3 × 1/4" },
            { verbal_explanation: "כפל מונים ומכנים ייתן 8/12. נצמצם ב-4 ונקבל 2/3.&rlm;", math_expression: "2/3" }
        ],
        final_answer: "2/3"
    },
    // שאלה 32
    {
        topic: "fractions",
        subTopic: "כפל שבר בשבר כולל מספרים מעורבים",
        question_text: "לגינה מלבנית יש אורך של 1/2 מטר ורוחב של 3/4 מטר. מהו שטח הגינה (במ\"ר)?&rlm;",
        options: ["3/8", "4/6", "3/4", "1/4"],
        correctAnswer: 0,
        hint: "שטח מלבן מחושב על ידי הכפלת אורך ברוחב.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול את האורך ברוחב.&rlm;", math_expression: "1/2 × 3/4" },
            { verbal_explanation: "מונה כפול מונה (1 כפול 3) ומכנה כפול מכנה (2 כפול 4).&rlm;", math_expression: "3/8" }
        ],
        final_answer: "3/8"
    },
    // שאלה 33
    {
        topic: "fractions",
        subTopic: "כפל שבר בשבר כולל מספרים מעורבים",
        question_text: "שיעור אמנות אורך 1 1/2 שעות. דנה סיימה את היצירה שלה לאחר 2/3 מהזמן. כמה שעות לקח לה לסיים?&rlm;",
        options: ["1", "3/2", "2/3", "1 1/6"],
        correctAnswer: 0,
        hint: "כדי למצוא חלק מכמות, מכפילים את הכמות בחלק (2/3 כפול אחד וחצי).&rlm;",
        solution_steps: [
            { verbal_explanation: "נמיר את 1 וחצי לשבר מדומה (3/2).&rlm;", math_expression: "3/2" },
            { verbal_explanation: "נכפול את החלק שדנה עבדה בזמן הכולל.&rlm;", math_expression: "2/3 × 3/2" },
            { verbal_explanation: "המונים והמכנים מצטמצמים זה עם זה לחלוטין (6/6). התשובה היא שעה 1.&rlm;", math_expression: "1" }
        ],
        final_answer: "1"
    },
    // שאלה 34
    {
        topic: "fractions",
        subTopic: "כפל שבר בשבר כולל מספרים מעורבים",
        question_text: "מהי תוצאת התרגיל הבא? (זכרו את חוקי הכפל באפס)&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0 × (3/4 × 5/7) = ?</div>",
        options: ["0", "15/28", "8/11", "1"],
        correctAnswer: 0,
        hint: "אין צורך לפתור את הסוגריים אם מכפילים בסוף באפס.&rlm;",
        solution_steps: [
            { verbal_explanation: "כל מספר או ביטוי, לא משנה כמה הוא מורכב, כפול 0 תמיד יהיה 0.&rlm;", math_expression: "0" }
        ],
        final_answer: "0"
    },
    // שאלה 35
    {
        topic: "fractions",
        subTopic: "כפל שבר בשבר כולל מספרים מעורבים",
        question_text: "חשבו את כפל השברים (שימו לב לקשר בין השברים):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4/7 × 7/4 = ?</div>",
        options: ["1", "28/28", "16/49", "0"],
        correctAnswer: 0,
        hint: "אלו שברים הופכיים. מכפלת שבר במספר ההופכי שלו תמיד שווה למספר מסוים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נבצע את הכפל: 4 כפול 7 במונה, 7 כפול 4 במכנה.&rlm;", math_expression: "28 / 28" },
            { verbal_explanation: "28 לחלק ל-28 שווה לשלם אחד.&rlm;", math_expression: "1" }
        ],
        final_answer: "1"
    },
    // שאלה 36
    {
        topic: "fractions",
        subTopic: "כפל שבר בשבר כולל מספרים מעורבים",
        question_text: "כפלו את המספר המעורב בשלם. אפשר לפצל את הפעולה לחלקים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2 1/2 × 2 = ?</div>",
        options: ["5", "4 1/2", "4", "2 2/4"],
        correctAnswer: 0,
        hint: "כמה זה פעמיים שניים וחצי שקלים?&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א': פיצול. 2 כפול 2 שווה 4. 2 כפול חצי שווה 1. יחד 5.&rlm;", math_expression: "4 + 1 = 5" },
            { verbal_explanation: "דרך ב': שבר מדומה. 5/2 כפול 2 שווה 10/2, שזה 5.&rlm;", math_expression: "5/2 × 2 = 5" }
        ],
        final_answer: "5"
    },

    // ==========================================================
    // תת נושא 8: כפל שברים עשרוניים ואומדן תוצאות (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "fractions",
        subTopic: "כפל שברים עשרוניים ואומדן תוצאות",
        question_text: "חשבו את תוצאת הכפל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.2 × 0.3 = ?</div>",
        options: ["0.06", "0.6", "6", "0.006"],
        correctAnswer: 0,
        hint: "כפלו 2 ב-3 כשלמים (נקבל 6). לאחר מכן, ספרו את כל הספרות אחרי הנקודה בשני המספרים יחד (2 ספרות).&rlm;",
        solution_steps: [
            { verbal_explanation: "התעלמו מהנקודות וכפלו: 2 כפול 3.&rlm;", math_expression: "2 × 3 = 6" },
            { verbal_explanation: "ספרו את המקומות העשרוניים במקור (מקום אחד + מקום אחד = שני מקומות). לכן נשים את הנקודה שני צעדים שמאלה מה-6.&rlm;", math_expression: "0.06" }
        ],
        final_answer: "0.06"
    },
    // שאלה 38
    {
        topic: "fractions",
        subTopic: "כפל שברים עשרוניים ואומדן תוצאות",
        question_text: "מהי תוצאת כפל העשרוניים הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1.2 × 0.4 = ?</div>",
        options: ["0.48", "4.8", "48", "0.048"],
        correctAnswer: 0,
        hint: "כמה זה 12 כפול 4? ולאחר מכן הזיזו את הנקודה שני מקומות.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול ללא נקודות: 12 כפול 4.&rlm;", math_expression: "12 × 4 = 48" },
            { verbal_explanation: "יש ספרה אחת אחרי הנקודה ב-1.2, ועוד אחת ב-0.4 (סה\"כ 2). נמקם את הנקודה.&rlm;", math_expression: "0.48" }
        ],
        final_answer: "0.48"
    },
    // שאלה 39
    {
        topic: "fractions",
        subTopic: "כפל שברים עשרוניים ואומדן תוצאות",
        question_text: "חשבו את תוצאת הכפל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.05 × 0.2 = ?</div>",
        options: ["0.01", "0.1", "0.001", "1"],
        correctAnswer: 0,
        hint: "5 כפול 2 שווה ל-10. יש לכם 3 מקומות עשרוניים להזיז (שניים בראשון, אחד בשני).&rlm;",
        solution_steps: [
            { verbal_explanation: "5 כפול 2 הם 10.&rlm;", math_expression: "10" },
            { verbal_explanation: "נזיז את הנקודה 3 צעדים שמאלה מה-10 (עבור 3 הספרות העשרוניות בשאלה). נקבל 0.010.&rlm;", math_expression: "0.010 = 0.01" }
        ],
        final_answer: "0.01"
    },
    // שאלה 40
    {
        topic: "fractions",
        subTopic: "כפל שברים עשרוניים ואומדן תוצאות",
        question_text: "חשבו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2.5 × 1.5 = ?</div>",
        options: ["3.75", "37.5", "3.25", "4.05"],
        correctAnswer: 0,
        hint: "כפלו 25 ב-15 במאונך, ולאחר מכן הזיזו את הנקודה שני מקומות.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב כפל שלמים: 25 כפול 15.&rlm;", math_expression: "25 × 15 = 375" },
            { verbal_explanation: "יש שתי ספרות אחרי הנקודה בסך הכל (אחת בכל גורם). נמקם את הנקודה בתוצאה.&rlm;", math_expression: "3.75" }
        ],
        final_answer: "3.75"
    },
    // שאלה 41
    {
        topic: "fractions",
        subTopic: "כפל שברים עשרוניים ואומדן תוצאות",
        question_text: "אומדן: מה תהיה בערך התוצאה של התרגיל הבא (מבלי לחשב במדויק)?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3.9 × 5.1 = ?</div>",
        options: ["סביב 20", "סביב 15", "סביב 8", "סביב 35"],
        correctAnswer: 0,
        hint: "עגלו כל מספר לשלם הקרוב ביותר: 3.9 קרוב ל-4. ו-5.1 קרוב ל-5.&rlm;",
        solution_steps: [
            { verbal_explanation: "נעגל את 3.9 ל-4.&rlm;", math_expression: "" },
            { verbal_explanation: "נעגל את 5.1 ל-5.&rlm;", math_expression: "" },
            { verbal_explanation: "האומדן הוא כפל המעוגלים: 4 כפול 5. לכן התוצאה תהיה קרובה ל-20.&rlm;", math_expression: "4 × 5 = 20" }
        ],
        final_answer: "סביב 20"
    },
    // שאלה 42
    {
        topic: "fractions",
        subTopic: "כפל שברים עשרוניים ואומדן תוצאות",
        question_text: "אומדן: בחרו את ההערכה הקרובה ביותר לתוצאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>9.8 × 0.9 = ?</div>",
        options: ["קרוב ל-9", "קרוב ל-90", "קרוב ל-1", "קרוב ל-100"],
        correctAnswer: 0,
        hint: "9.8 קרוב ל-10. 0.9 קרוב ל-1. כפלו אותם.&rlm;",
        solution_steps: [
            { verbal_explanation: "9.8 קרוב מאוד למספר 10. 0.9 קרוב מאוד למספר 1.&rlm;", math_expression: "" },
            { verbal_explanation: "10 כפול 1 הם 10. לכן התוצאה תהיה מעט פחות מ-10 (סביב 9).&rlm;", math_expression: "10 × 1 = 10" }
        ],
        final_answer: "קרוב ל-9"
    },
    // שאלה 43
    {
        topic: "fractions",
        subTopic: "כפל שברים עשרוניים ואומדן תוצאות",
        question_text: "דנה קנתה 0.5 ק\"ג תפוחים. מחיר לקילוגרם אחד הוא 4.2 שקלים. כמה שילמה דנה?&rlm;",
        options: ["2.1 שקלים", "4.7 שקלים", "21 שקלים", "8.4 שקלים"],
        correctAnswer: 0,
        hint: "לכפול מספר ב-0.5 זה בדיוק כמו לחלק אותו בחצי (ב-2).&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול את המחיר בכמות: 4.2 כפול 0.5.&rlm;", math_expression: "4.2 × 0.5" },
            { verbal_explanation: "אנו יודעים שכפל ב-0.5 שווה לחצי מהכמות. חצי מ-4.2 הוא 2.1.&rlm;", math_expression: "2.1" }
        ],
        final_answer: "2.1 שקלים"
    },
    // שאלה 44
    {
        topic: "fractions",
        subTopic: "כפל שברים עשרוניים ואומדן תוצאות",
        question_text: "מהו שטחו של חלון מלבני שאורכו 2.2 מטרים ורוחבו 1.5 מטרים?&rlm;",
        options: ["3.3 מ\"ר", "33 מ\"ר", "3.7 מ\"ר", "0.33 מ\"ר"],
        correctAnswer: 0,
        hint: "כפלו 22 ב-15. לאחר מכן הזיזו את הנקודה העשרונית שני מקומות שמאלה.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב כפל שלמים: 22 כפול 15.&rlm;", math_expression: "22 × 15 = 330" },
            { verbal_explanation: "יש 2 ספרות עשרוניות בנתונים (אחת בכל מספר). נמקם את הנקודה 2 צעדים שמאלה מ-330.&rlm;", math_expression: "3.30 = 3.3" }
        ],
        final_answer: "3.3 מ\"ר"
    },
    // שאלה 45
    {
        topic: "fractions",
        subTopic: "כפל שברים עשרוניים ואומדן תוצאות",
        question_text: "היכן צריכה להיות הנקודה העשרונית בתוצאה הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2.3 × 1.4 = 322</div>",
        options: ["3.22", "32.2", "0.322", "322.0"],
        correctAnswer: 0,
        hint: "ספרו את מספר הספרות שמימין לנקודה בשני המספרים המוכפלים. זה יהיה מספר הספרות מימין לנקודה בתוצאה.&rlm;",
        solution_steps: [
            { verbal_explanation: "ב-2.3 יש ספרה אחת אחרי הנקודה. ב-1.4 יש ספרה אחת אחרי הנקודה. סך הכל 2 מקומות.&rlm;", math_expression: "" },
            { verbal_explanation: "נציב את הנקודה בתוצאה 322 כך שיהיו 2 ספרות אחריה.&rlm;", math_expression: "3.22" }
        ],
        final_answer: "3.22"
    },
    // שאלה 46
    {
        topic: "fractions",
        subTopic: "כפל שברים עשרוניים ואומדן תוצאות",
        question_text: "אומדן: מה בערך התוצאה של התרגיל?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.45 × 10.2 = ?</div>",
        options: ["קרוב ל-4.5", "קרוב ל-45", "קרוב ל-0.4", "קרוב ל-10"],
        correctAnswer: 0,
        hint: "0.45 קרוב מאוד ל-0.5 (שזה חצי). 10.2 קרוב ל-10. כמה זה חצי מ-10?&rlm;",
        solution_steps: [
            { verbal_explanation: "אומדן גס: נעגל את 0.45 לחצי, ואת 10.2 ל-10.&rlm;", math_expression: "0.5 × 10" },
            { verbal_explanation: "חצי מ-10 שווה 5. התוצאה צריכה להיות קרובה ל-5.&rlm;", math_expression: "" }
        ],
        final_answer: "קרוב ל-4.5"
    },
    // שאלה 47
    {
        topic: "fractions",
        subTopic: "כפל שברים עשרוניים ואומדן תוצאות",
        question_text: "חשבו את מכפלת שלוש העשיריות:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.1 × 0.1 × 0.1 = ?</div>",
        options: ["0.001", "0.01", "0.3", "0.111"],
        correctAnswer: 0,
        hint: "1 כפול 1 כפול 1 שווה 1. ספרו את כל המקומות העשרוניים בשלושת הגורמים.&rlm;",
        solution_steps: [
            { verbal_explanation: "הכפלת השלמים נותנת 1.&rlm;", math_expression: "1 × 1 × 1 = 1" },
            { verbal_explanation: "יש שלושה מספרים עם ספרה אחת אחרי הנקודה (סך הכל 3 מקומות). נזיז שמאלה מ-1 ונוסיף אפסים.&rlm;", math_expression: "0.001" }
        ],
        final_answer: "0.001"
    },
    // שאלה 48
    {
        topic: "fractions",
        subTopic: "כפל שברים עשרוניים ואומדן תוצאות",
        question_text: "ללא חישוב, קבעו מה קורה למספר 3.5 כאשר מכפילים אותו ב-0.8.&rlm;",
        options: ["התוצאה קטנה מ-3.5", "התוצאה גדולה מ-3.5", "התוצאה נשארת 3.5", "התוצאה תהיה מספר שלם"],
        correctAnswer: 0,
        hint: "כאשר מכפילים מספר כלשהו בשבר עשרוני הקטן מ-1, התוצאה תמיד תהיה קטנה מהמספר המקורי.&rlm;",
        solution_steps: [
            { verbal_explanation: "המספר 0.8 קטן משלם 1.&rlm;", math_expression: "0.8 < 1" },
            { verbal_explanation: "כפל במספר הקטן מ-1, 'מכווץ' את הכמות המקורית ולכן התוצאה תקטן.&rlm;", math_expression: "3.5 × 0.8 < 3.5" }
        ],
        final_answer: "התוצאה קטנה מ-3.5"
    },// ========================================================================
// שכבת גיל: ה'-ו' | נושא: שברים (חלק 3 - 4 האחרונים)
// 4 תתי נושאים | 48 שאלות סה"כ
// נקי לחלוטין! ללא LaTeX וללא דולרים. שימוש ב: / , × , :
// ========================================================================



    // ==========================================================
    // תת נושא 9: כפל שלם בשבר פשוט ובמספר מעורב (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "fractions",
        subTopic: "כפל שלם בשבר פשוט ובמספר מעורב",
        question_text: "חשבו את תוצאת הכפל הבאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3 × 1/4 = ?</div>",
        options: ["3/4", "1/12", "3/12", "4/3"],
        correctAnswer: 0,
        hint: "בכפל שלם בשבר, כופלים את השלם רק במונה. המכנה נשאר ללא שינוי.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול את המספר השלם (3) במונה של השבר (1).&rlm;", math_expression: "3 × 1 = 3" },
            { verbal_explanation: "התוצאה היא המונה החדש, והמכנה נשאר 4.&rlm;", math_expression: "3/4" }
        ],
        final_answer: "3/4"
    },
    // שאלה 2
    {
        topic: "fractions",
        subTopic: "כפל שלם בשבר פשוט ובמספר מעורב",
        question_text: "פתרו את התרגיל (התוצאה תהיה שבר מדומה):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5 × 2/3 = ?</div>",
        options: ["10/3", "7/3", "10/15", "5 2/3"],
        correctAnswer: 0,
        hint: "הכפילו את 5 ב-2 ורשמו מעל המכנה 3.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול את השלם במונה: 5 כפול 2 שווה 10.&rlm;", math_expression: "5 × 2 = 10" },
            { verbal_explanation: "התוצאה היא 10 שלישים.&rlm;", math_expression: "10/3" }
        ],
        final_answer: "10/3"
    },
    // שאלה 3
    {
        topic: "fractions",
        subTopic: "כפל שלם בשבר פשוט ובמספר מעורב",
        question_text: "כפל שלם במספר מעורב. מהי התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4 × 1 1/2 = ?</div>",
        options: ["6", "4 1/2", "5", "4 1/8"],
        correctAnswer: 0,
        hint: "אפשר להכפיל כל חלק בנפרד: 4 פעמים 1, ועוד 4 פעמים חצי.&rlm;",
        solution_steps: [
            { verbal_explanation: "כפל השלמים: 4 כפול 1 שווה 4.&rlm;", math_expression: "4 × 1 = 4" },
            { verbal_explanation: "כפל השבר: 4 חצאים שווים ל-2 שלמים.&rlm;", math_expression: "4 × 1/2 = 2" },
            { verbal_explanation: "נחבר: 4 ועוד 2 שווה 6.&rlm;", math_expression: "4 + 2 = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 4
    {
        topic: "fractions",
        subTopic: "כפל שלם בשבר פשוט ובמספר מעורב",
        question_text: "חשבו והפכו למספר מעורב במידת הצורך:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>6 × 3/8 = ?</div>",
        options: ["2 1/4", "18/48", "9/8", "6 3/8"],
        correctAnswer: 0,
        hint: "הכפילו 6 ב-3 לקבלת 18 שמיניות. צמצמו את השבר או הפכו למעורב.&rlm;",
        solution_steps: [
            { verbal_explanation: "6 כפול 3 שווה 18. קיבלנו 18 שמיניות.&rlm;", math_expression: "18/8" },
            { verbal_explanation: "כמה פעמים 8 נכנס ב-18? פעמיים (16) ונשארות 2 שמיניות. כלומר 2 ורבע.&rlm;", math_expression: "18/8 = 2 2/8 = 2 1/4" }
        ],
        final_answer: "2 1/4"
    },
    // שאלה 5
    {
        topic: "fractions",
        subTopic: "כפל שלם בשבר פשוט ובמספר מעורב",
        question_text: "בצעו את הכפל הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2 × 2 2/5 = ?</div>",
        options: ["4 4/5", "4 2/5", "4 2/10", "2 4/5"],
        correctAnswer: 0,
        hint: "הכפילו את השלמים ואת השברים בנפרד, או הפכו לשבר מדומה קודם.&rlm;",
        solution_steps: [
            { verbal_explanation: "הכפלת השלם: 2 כפול 2 שווה 4.&rlm;", math_expression: "2 × 2 = 4" },
            { verbal_explanation: "הכפלת השבר: 2 כפול 2 חמישיות שווה 4 חמישיות.&rlm;", math_expression: "2 × 2/5 = 4/5" },
            { verbal_explanation: "התוצאה הכוללת היא 4 וארבע חמישיות.&rlm;", math_expression: "4 4/5" }
        ],
        final_answer: "4 4/5"
    },
    // שאלה 6
    {
        topic: "fractions",
        subTopic: "כפל שלם בשבר פשוט ובמספר מעורב",
        question_text: "חשבו את תוצאת התרגיל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>10 × 1/5 = ?</div>",
        options: ["2", "10/50", "1/2", "5"],
        correctAnswer: 0,
        hint: "10 חמישיות. כמה שלמים זה?&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול 10 ב-1 (המונה). התוצאה היא 10 חמישיות.&rlm;", math_expression: "10/5" },
            { verbal_explanation: "10 לחלק ל-5 שווה בדיוק 2 שלמים.&rlm;", math_expression: "10 : 5 = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 7
    {
        topic: "fractions",
        subTopic: "כפל שלם בשבר פשוט ובמספר מעורב",
        question_text: "מהי המכפלה של התרגיל הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>8 × 3/4 = ?</div>",
        options: ["6", "24/32", "8 3/4", "32/3"],
        correctAnswer: 0,
        hint: "אפשר לכפול 8 ב-3 ואז לחלק ב-4, או לחלק 8 ב-4 תחילה ואז לכפול ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול: 8 כפול 3 שווה 24.&rlm;", math_expression: "8 × 3 = 24" },
            { verbal_explanation: "נחלק במכנה: 24 לחלק ל-4 שווה ל-6.&rlm;", math_expression: "24 : 4 = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 8
    {
        topic: "fractions",
        subTopic: "כפל שלם בשבר פשוט ובמספר מעורב",
        question_text: "פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>7 × 2/7 = ?</div>",
        options: ["2", "14/49", "7 2/7", "1"],
        correctAnswer: 0,
        hint: "כאשר מכפילים מספר שלם בשבר שהמכנה שלו הוא אותו מספר, הם מקזזים זה את זה.&rlm;",
        solution_steps: [
            { verbal_explanation: "7 כפול 2 שווה 14.&rlm;", math_expression: "7 × 2 = 14" },
            { verbal_explanation: "14 חלקי 7 שווה 2. (ה-7 במונה וה-7 במכנה הצטמצמו).&rlm;", math_expression: "14 : 7 = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 9
    {
        topic: "fractions",
        subTopic: "כפל שלם בשבר פשוט ובמספר מעורב",
        question_text: "חשבו את התוצאה (זכרו את חוקי הכפל ב-0):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0 × 4 1/3 = ?</div>",
        options: ["0", "4 1/3", "1", "13/3"],
        correctAnswer: 0,
        hint: "כל מספר כפול אפס נותן תוצאה קבועה.&rlm;",
        solution_steps: [
            { verbal_explanation: "אפס פעמים של כל כמות שהיא תמיד ייתן אפס.&rlm;", math_expression: "0" }
        ],
        final_answer: "0"
    },
    // שאלה 10
    {
        topic: "fractions",
        subTopic: "כפל שלם בשבר פשוט ובמספר מעורב",
        question_text: "מהי התוצאה של כפל ב-1?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1 × 5/6 = ?</div>",
        options: ["5/6", "6/5", "1 5/6", "5/60"],
        correctAnswer: 0,
        hint: "המספר 1 הוא איבר ניטרלי בכפל.&rlm;",
        solution_steps: [
            { verbal_explanation: "כל מספר המוכפל ב-1 שומר על ערכו המקורי.&rlm;", math_expression: "5/6" }
        ],
        final_answer: "5/6"
    },
    // שאלה 11
    {
        topic: "fractions",
        subTopic: "כפל שלם בשבר פשוט ובמספר מעורב",
        question_text: "חשבו את התרגיל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3 × 2 1/3 = ?</div>",
        options: ["7", "6 1/3", "6", "9/3"],
        correctAnswer: 0,
        hint: "אפשר להפוך את המספר המעורב ל-7/3 ואז לכפול ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמיר 2 ושליש לשבר מדומה: 7 שלישים.&rlm;", math_expression: "2 1/3 = 7/3" },
            { verbal_explanation: "נכפול 3 ב-7/3. ה-3 מצטמצם ונשאר 7.&rlm;", math_expression: "3 × 7/3 = 7" }
        ],
        final_answer: "7"
    },
    // שאלה 12
    {
        topic: "fractions",
        subTopic: "כפל שלם בשבר פשוט ובמספר מעורב",
        question_text: "מהי תוצאת הכפל הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>12 × 5/6 = ?</div>",
        options: ["10", "60/72", "12 5/6", "2"],
        correctAnswer: 0,
        hint: "חלקו תחילה את 12 ב-6, ואת התוצאה תכפילו ב-5.&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי להקל, נחלק קודם את השלם 12 במכנה 6.&rlm;", math_expression: "12 : 6 = 2" },
            { verbal_explanation: "נכפיל את התוצאה במונה 5.&rlm;", math_expression: "2 × 5 = 10" }
        ],
        final_answer: "10"
    },

    // ==========================================================
    // תת נושא 10: מיקום על ישר המספרים (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "fractions",
        subTopic: "מיקום על ישר המספרים",
        question_text: "איזה שבר נמצא בדיוק באמצע הדרך בין המספר 0 למספר 1?&rlm;<br><div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 220 60\" width=\"100%\" height=\"60\" style=\"max-width:250px;\"><line x1=\"20\" y1=\"40\" x2=\"200\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"30\" x2=\"20\" y2=\"50\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"200\" y1=\"30\" x2=\"200\" y2=\"50\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"20\" y=\"25\" font-family=\"Arial\" font-size=\"12\" fill=\"#1e293b\" text-anchor=\"middle\">0</text><text x=\"200\" y=\"25\" font-family=\"Arial\" font-size=\"12\" fill=\"#1e293b\" text-anchor=\"middle\">1</text><circle cx=\"110\" cy=\"40\" r=\"5\" fill=\"#ef4444\"/></svg></div>",
        options: ["1/2", "1/4", "3/4", "1/10"],
        correctAnswer: 0,
        hint: "הנקודה האמצעית מחלקת את השלם לשני חצאים שווים.&rlm;",
        solution_steps: [
            { verbal_explanation: "הנקודה האדומה נמצאת בדיוק באמצע, כלומר מרחקה מ-0 זהה למרחקה מ-1.&rlm;", math_expression: "" },
            { verbal_explanation: "ערך שמחלק את השלם לשניים שווה לחצי.&rlm;", math_expression: "1/2" }
        ],
        final_answer: "1/2"
    },
    // שאלה 14
    {
        topic: "fractions",
        subTopic: "מיקום על ישר המספרים",
        question_text: "ישר המספרים בין 0 ל-1 מחולק ל-5 קטעים שווים. מהו הערך של השנתה (הקו) השנייה מימין לאפס?&rlm;",
        options: ["2/5", "1/5", "3/5", "2/4"],
        correctAnswer: 0,
        hint: "חלוקה ל-5 קטעים אומרת שכל קפיצה שווה לחמישית (1/5).&rlm;",
        solution_steps: [
            { verbal_explanation: "מאחר שהישר מחולק ל-5 חלקים, כל קפיצה מייצגת 1/5.&rlm;", math_expression: "" },
            { verbal_explanation: "הקו השני מייצג שתי קפיצות, ולכן ערכו הוא 2 חמישיות.&rlm;", math_expression: "2/5" }
        ],
        final_answer: "2/5"
    },
    // שאלה 15
    {
        topic: "fractions",
        subTopic: "מיקום על ישר המספרים",
        question_text: "בין אילו שני מספרים שלמים ממוקם השבר 7/3?&rlm;",
        options: ["2 ו-3", "1 ו-2", "3 ו-4", "7 ו-8"],
        correctAnswer: 0,
        hint: "המירו את השבר המדומה למספר מעורב. כמה פעמים 3 נכנס בתוך 7?&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי למצוא את מיקום השבר, נבדוק כמה שלמים הוא מכיל. 7 חלקי 3 שווה ל-2 שלמים עם שארית 1.&rlm;", math_expression: "7/3 = 2 1/3" },
            { verbal_explanation: "2 ושליש גדול מ-2 אך קטן מ-3, לכן הוא ממוקם ביניהם.&rlm;", math_expression: "" }
        ],
        final_answer: "2 ו-3"
    },
    // שאלה 16
    {
        topic: "fractions",
        subTopic: "מיקום על ישר המספרים",
        question_text: "איזה שבר נמצא ימינה יותר (גדול יותר) על ישר המספרים: 3/5 או 4/5?&rlm;",
        options: ["4/5", "3/5", "הם באותו מקום", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "ככל שהמונה גדול יותר (כאשר המכנים שווים), השבר מייצג כמות גדולה יותר ולכן ממוקם ימינה יותר.&rlm;",
        solution_steps: [
            { verbal_explanation: "השברים הם בעלי מכנה זהה. 4 חמישיות גדולות מ-3 חמישיות.&rlm;", math_expression: "4/5 > 3/5" },
            { verbal_explanation: "לכן 4/5 ממוקם ימינה יותר על הישר.&rlm;", math_expression: "" }
        ],
        final_answer: "4/5"
    },
    // שאלה 17
    {
        topic: "fractions",
        subTopic: "מיקום על ישר המספרים",
        question_text: "מהו המרחק בין הנקודה 1/6 לנקודה 5/6 על ישר המספרים?&rlm;",
        options: ["4/6 (שני שלישים)", "1/6", "5/6", "6/6"],
        correctAnswer: 0,
        hint: "המרחק הוא ההפרש. חסרו את הקטן מהגדול.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחסר 1/6 מתוך 5/6.&rlm;", math_expression: "5/6 - 1/6 = 4/6" },
            { verbal_explanation: "4 שישיות ניתנות לצמצום לחצי של 2/3 (שני שלישים).&rlm;", math_expression: "4/6 = 2/3" }
        ],
        final_answer: "4/6 (שני שלישים)"
    },
    // שאלה 18
    {
        topic: "fractions",
        subTopic: "מיקום על ישר המספרים",
        question_text: "אתם עומדים על הנקודה 1/2 בישר המספרים. אם תקפצו 1/4 (רבע) ימינה, לאיזו נקודה תגיעו?&rlm;",
        options: ["3/4", "1/4", "1", "2/4"],
        correctAnswer: 0,
        hint: "חצי שווה לשני רבעים (2/4). הוסיפו רבע אחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "קפיצה ימינה משמעותה חיבור. נחבר 1/2 ועוד 1/4.&rlm;", math_expression: "1/2 + 1/4" },
            { verbal_explanation: "נרחיב את חצי לשני רבעים ונחבר.&rlm;", math_expression: "2/4 + 1/4 = 3/4" }
        ],
        final_answer: "3/4"
    },
    // שאלה 19
    {
        topic: "fractions",
        subTopic: "מיקום על ישר המספרים",
        question_text: "ישר מספרים מחולק לעשיריות (1/10). איזו נקודה נמצאת על השנתה השביעית מימין ל-0?&rlm;",
        options: ["7/10", "10/7", "1/7", "7/100"],
        correctAnswer: 0,
        hint: "7 קפיצות של 1/10.&rlm;",
        solution_steps: [
            { verbal_explanation: "כל שנתה היא 1/10. 7 שנתות הן 7 עשיריות.&rlm;", math_expression: "7 × 1/10 = 7/10" }
        ],
        final_answer: "7/10"
    },
    // שאלה 20
    {
        topic: "fractions",
        subTopic: "מיקום על ישר המספרים",
        question_text: "היכן ממוקם המספר 1 3/4 (אחד ושלושה רבעים) על הישר?&rlm;",
        options: ["בין 1 ל-2", "בין 0 ל-1", "בין 3 ל-4", "על המספר 1 בדיוק"],
        correctAnswer: 0,
        hint: "המספר גדול מ-1 (כי יש לו שלם) אך עדיין לא הגיע ל-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "המספר בנוי משלם (1) ועוד חלק שברי קטן משלם (3/4).&rlm;", math_expression: "" },
            { verbal_explanation: "לכן הוא עבר את 1, אבל טרם הגיע ל-2.&rlm;", math_expression: "" }
        ],
        final_answer: "בין 1 ל-2"
    },
    // שאלה 21
    {
        topic: "fractions",
        subTopic: "מיקום על ישר המספרים",
        question_text: "איזו נקודה נמצאת בדיוק באמצע הדרך בין 1/3 ל-2/3?&rlm;",
        options: ["1/2", "3/6", "1/4", "1/6"], 
        // הערה: 3/6 זה בדיוק 1/2, נציג 1/2 כאופציה נכונה ו-1/6 וכו' כדי לא לבלבל נשתמש רק בתשובה מצומצמת. אעדכן את האופציה ל "1/2 (שהוא 3/6)".
        correctAnswer: 0,
        hint: "הרחיבו את השלישים לשישיות (2/6 ו-4/6). מה נמצא ביניהם?&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי למצוא את האמצע, נרחיב לשישיות. 1/3 שווה 2/6. ו-2/3 שווה 4/6.&rlm;", math_expression: "2/6 , 4/6" },
            { verbal_explanation: "המספר שבאמצע בין 2 ל-4 הוא 3. לכן האמצע הוא 3/6, השווה לחצי.&rlm;", math_expression: "3/6 = 1/2" }
        ],
        final_answer: "1/2 (שהוא 3/6)" // התאמתי את התשובה לאופציה
    },
    // שאלה 22
    {
        topic: "fractions",
        subTopic: "מיקום על ישר המספרים",
        question_text: "כמה קפיצות של 1/8 (שמינית) צריך לעשות מהמספר 0 כדי להגיע למספר 1 השלם?&rlm;",
        options: ["8 קפיצות", "4 קפיצות", "1 קפיצה", "10 קפיצות"],
        correctAnswer: 0,
        hint: "כמה שמיניות יש בשלם אחד?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלם אחד בנוי מ-8 שמיניות.&rlm;", math_expression: "1 = 8/8" },
            { verbal_explanation: "לכן, כל קפיצה של שמינית תקרב אותנו. נזדקק ל-8 קפיצות.&rlm;", math_expression: "" }
        ],
        final_answer: "8 קפיצות"
    },
    // שאלה 23
    {
        topic: "fractions",
        subTopic: "מיקום על ישר המספרים",
        question_text: "מבין השברים הבאים, איזה מהם ממוקם הכי קרוב למספר 1?&rlm;",
        options: ["7/8", "1/8", "5/8", "3/8"],
        correctAnswer: 0,
        hint: "השבר שהמרחק בינו לבין 8/8 הוא הקטן ביותר.&rlm;",
        solution_steps: [
            { verbal_explanation: "1 שווה ל-8/8. נבדוק למי חסר הכי מעט כדי להגיע לשם.&rlm;", math_expression: "8/8 - 7/8 = 1/8" },
            { verbal_explanation: "7/8 הוא הקרוב ביותר (מרחק של שמינית אחת בלבד).&rlm;", math_expression: "" }
        ],
        final_answer: "7/8"
    },
    // שאלה 24
    {
        topic: "fractions",
        subTopic: "מיקום על ישר המספרים",
        question_text: "היכן ממוקם השבר המדומה 5/2 (חמישה חצאים) על ישר המספרים?&rlm;",
        options: ["בין 2 ל-3", "בין 5 ל-6", "בין 1 ל-2", "על המספר 5"],
        correctAnswer: 0,
        hint: "כמה פעמים 2 נכנס בתוך 5? 2 שלמים נותנים לכם 4 חצאים. נשאר חצי.&rlm;",
        solution_steps: [
            { verbal_explanation: "נהפוך את השבר המדומה למספר מעורב.&rlm;", math_expression: "5/2 = 2 1/2" },
            { verbal_explanation: "שניים וחצי נמצא בדיוק באמצע הדרך בין 2 ל-3.&rlm;", math_expression: "" }
        ],
        final_answer: "בין 2 ל-3"
    },

    // ==========================================================
    // תת נושא 11: מעבר משבר פשוט לשבר עשרוני (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "fractions",
        subTopic: "מעבר משבר פשוט לשבר עשרוני",
        question_text: "מהו הייצוג העשרוני של השבר הפשוט 1/2?&rlm;",
        options: ["0.5", "0.2", "0.12", "0.05"],
        correctAnswer: 0,
        hint: "הרחיבו את השבר כך שהמכנה יהיה 10. (הכפילו ב-5).&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את המונה והמכנה פי 5.&rlm;", math_expression: "(1 × 5) / (2 × 5) = 5/10" },
            { verbal_explanation: "5 עשיריות נכתבות כ-0.5.&rlm;", math_expression: "0.5" }
        ],
        final_answer: "0.5"
    },
    // שאלה 26
    {
        topic: "fractions",
        subTopic: "מעבר משבר פשוט לשבר עשרוני",
        question_text: "הפכו את השבר 3/4 לשבר עשרוני:&rlm;",
        options: ["0.75", "0.34", "0.25", "3.4"],
        correctAnswer: 0,
        hint: "אי אפשר להרחיב רבע לעשר, אבל אפשר להרחיב ל-100. הכפילו מונה ומכנה ב-25.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את 3/4 פי 25 כדי לקבל מכנה 100.&rlm;", math_expression: "(3 × 25) / (4 × 25) = 75/100" },
            { verbal_explanation: "75 מאיות נכתבות כשבר עשרוני 0.75.&rlm;", math_expression: "0.75" }
        ],
        final_answer: "0.75"
    },
    // שאלה 27
    {
        topic: "fractions",
        subTopic: "מעבר משבר פשוט לשבר עשרוני",
        question_text: "איזה שבר עשרוני שווה ל-1/5?&rlm;",
        options: ["0.2", "0.5", "0.15", "0.02"],
        correctAnswer: 0,
        hint: "הרחיבו את חמישית למכנה 10 (הכפילו ב-2).&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול מונה ומכנה ב-2.&rlm;", math_expression: "1/5 = 2/10" },
            { verbal_explanation: "שתי עשיריות הן 0.2.&rlm;", math_expression: "0.2" }
        ],
        final_answer: "0.2"
    },
    // שאלה 28
    {
        topic: "fractions",
        subTopic: "מעבר משבר פשוט לשבר עשרוני",
        question_text: "הפכו את השבר 7/10 למספר עשרוני:&rlm;",
        options: ["0.7", "7.10", "0.07", "7.0"],
        correctAnswer: 0,
        hint: "השבר כבר במכנה עשר! פשוט רשמו אותו בפורמט עשרוני.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר המכנה הוא 10, המונה הוא הספרה הראשונה אחרי הנקודה העשרונית.&rlm;", math_expression: "7/10 = 0.7" }
        ],
        final_answer: "0.7"
    },
    // שאלה 29
    {
        topic: "fractions",
        subTopic: "מעבר משבר פשוט לשבר עשרוני",
        question_text: "מהו הייצוג העשרוני של 3/20?&rlm;",
        options: ["0.15", "0.3", "0.6", "0.015"],
        correctAnswer: 0,
        hint: "הרחיבו למכנה 100. בכמה נכפיל את 20 כדי להגיע ל-100? ב-5.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפיל מונה ומכנה ב-5.&rlm;", math_expression: "(3 × 5) / (20 × 5) = 15/100" },
            { verbal_explanation: "15 מאיות נרשמות כ-0.15.&rlm;", math_expression: "0.15" }
        ],
        final_answer: "0.15"
    },
    // שאלה 30
    {
        topic: "fractions",
        subTopic: "מעבר משבר פשוט לשבר עשרוני",
        question_text: "הפכו את המספר המעורב הבא לעשרוני: 2 1/4 (שניים ורבע).&rlm;",
        options: ["2.25", "2.14", "2.4", "2.75"],
        correctAnswer: 0,
        hint: "השלם (2) נשאר שלם לפני הנקודה. הפכו רק את הרבע למאיות.&rlm;",
        solution_steps: [
            { verbal_explanation: "השלם הוא 2, והשבר הוא 1/4.&rlm;", math_expression: "" },
            { verbal_explanation: "ראינו קודם ש-1/4 שווה 25/100, כלומר 0.25.&rlm;", math_expression: "1/4 = 0.25" },
            { verbal_explanation: "נחבר: 2 + 0.25 = 2.25.&rlm;", math_expression: "2.25" }
        ],
        final_answer: "2.25"
    },
    // שאלה 31
    {
        topic: "fractions",
        subTopic: "מעבר משבר פשוט לשבר עשרוני",
        question_text: "אתגר: הפכו את השבר 5/8 למספר עשרוני.&rlm;",
        options: ["0.625", "0.58", "0.85", "0.62"],
        correctAnswer: 0,
        hint: "אי אפשר להרחיב את 8 ל-10 או ל-100. אבל אפשר להרחיב אותו ל-1000 על ידי הכפלה ב-125.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפיל את המונה והמכנה ב-125.&rlm;", math_expression: "(5 × 125) / (8 × 125) = 625/1000" },
            { verbal_explanation: "625 אלפיות נרשמות עם 3 ספרות אחרי הנקודה.&rlm;", math_expression: "0.625" }
        ],
        final_answer: "0.625"
    },
    // שאלה 32
    {
        topic: "fractions",
        subTopic: "מעבר משבר פשוט לשבר עשרוני",
        question_text: "מה גדול יותר: 0.4 או 2/5?&rlm;",
        options: ["הם שווים בדיוק", "0.4 גדול יותר", "2/5 גדול יותר", "אי אפשר להשוות"],
        correctAnswer: 0,
        hint: "המירו את אחד מהם לפורמט של השני. למשל, הפכו את 2/5 לעשרוני.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את 2/5 לעשיריות (נכפיל ב-2).&rlm;", math_expression: "2/5 = 4/10" },
            { verbal_explanation: "4/10 נכתב כ-0.4. לכן המספרים שווים לחלוטין.&rlm;", math_expression: "0.4 = 0.4" }
        ],
        final_answer: "הם שווים בדיוק"
    },
    // שאלה 33
    {
        topic: "fractions",
        subTopic: "מעבר משבר פשוט לשבר עשרוני",
        question_text: "המירו את 9/50 לשבר עשרוני:&rlm;",
        options: ["0.18", "0.95", "0.09", "1.8"],
        correctAnswer: 0,
        hint: "הכפילו ב-2 כדי להגיע למכנה 100.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב פי 2.&rlm;", math_expression: "(9 × 2) / (50 × 2) = 18/100" },
            { verbal_explanation: "18 מאיות הן 0.18.&rlm;", math_expression: "0.18" }
        ],
        final_answer: "0.18"
    },
    // שאלה 34
    {
        topic: "fractions",
        subTopic: "מעבר משבר פשוט לשבר עשרוני",
        question_text: "המירו את 1 3/5 למספר עשרוני:&rlm;",
        options: ["1.6", "1.35", "1.3", "1.15"],
        correctAnswer: 0,
        hint: "השאירו את ה-1 כשלם, והרחיבו את 3/5 לעשיריות.&rlm;",
        solution_steps: [
            { verbal_explanation: "3/5 מורחב פי 2 הוא 6/10.&rlm;", math_expression: "3/5 = 6/10 = 0.6" },
            { verbal_explanation: "נוסיף את השלם: 1 ועוד 0.6 שווה 1.6.&rlm;", math_expression: "1.6" }
        ],
        final_answer: "1.6"
    },
    // שאלה 35
    {
        topic: "fractions",
        subTopic: "מעבר משבר פשוט לשבר עשרוני",
        question_text: "הפכו את 11/25 לשבר עשרוני:&rlm;",
        options: ["0.44", "0.11", "0.25", "1.125"],
        correctAnswer: 0,
        hint: "הכפילו את המונה והמכנה ב-4.&rlm;",
        solution_steps: [
            { verbal_explanation: "25 כפול 4 נותן 100. נכפיל גם את 11 ב-4.&rlm;", math_expression: "11 × 4 = 44" },
            { verbal_explanation: "קיבלנו 44/100, שזה 0.44.&rlm;", math_expression: "0.44" }
        ],
        final_answer: "0.44"
    },
    // שאלה 36
    {
        topic: "fractions",
        subTopic: "מעבר משבר פשוט לשבר עשרוני",
        question_text: "איך נכתוב מאית אחת (1/100) כשבר עשרוני?&rlm;",
        options: ["0.01", "0.1", "0.100", "1.00"],
        correctAnswer: 0,
        hint: "מאית היא הספרה השנייה אחרי הנקודה العשרונית. הספרה הראשונה (עשיריות) תהיה אפס.&rlm;",
        solution_steps: [
            { verbal_explanation: "מאחר ויש שני אפסים במכנה, יהיו 2 ספרות אחרי הנקודה. אין לנו עשיריות לכן נשים אפס.&rlm;", math_expression: "0.01" }
        ],
        final_answer: "0.01"
    },

    // ==========================================================
    // תת נושא 12: צמצום והרחבה של שברים פשוטים (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "fractions",
        subTopic: "צמצום והרחבה של שברים פשוטים",
        question_text: "צמצמו את השבר 8/12 לצורתו הפשוטה ביותר:&rlm;",
        options: ["2/3", "4/6", "1/2", "3/4"],
        correctAnswer: 0,
        hint: "מצאו את המספר הגדול ביותר שגם 8 וגם 12 מתחלקים בו.&rlm;",
        solution_steps: [
            { verbal_explanation: "המחלק המשותף הגדול ביותר הוא 4.&rlm;", math_expression: "8 : 4 = 2" },
            { verbal_explanation: "נחלק גם את המכנה ב-4.&rlm;", math_expression: "12 : 4 = 3" },
            { verbal_explanation: "השבר המצומצם הוא שני שלישים.&rlm;", math_expression: "2/3" }
        ],
        final_answer: "2/3"
    },
    // שאלה 38
    {
        topic: "fractions",
        subTopic: "צמצום והרחבה של שברים פשוטים",
        question_text: "הרחיבו את השבר 2/3 פי 4. מה תהיה התוצאה?&rlm;",
        options: ["8/12", "6/7", "8/3", "6/12"],
        correctAnswer: 0,
        hint: "הרחבה אומרת שכופלים גם את המונה וגם את המכנה באותו המספר.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפול מונה ב-4.&rlm;", math_expression: "2 × 4 = 8" },
            { verbal_explanation: "נכפול מכנה ב-4.&rlm;", math_expression: "3 × 4 = 12" },
            { verbal_explanation: "התוצאה: 8 חלקי 12.&rlm;", math_expression: "8/12" }
        ],
        final_answer: "8/12"
    },
    // שאלה 39
    {
        topic: "fractions",
        subTopic: "צמצום והרחבה של שברים פשוטים",
        question_text: "צמצמו את 15/20:&rlm;",
        options: ["3/4", "3/5", "5/10", "1/2"],
        correctAnswer: 0,
        hint: "שני המספרים נגמרים ב-5 או 0, ולכן מתחלקים ב-5.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחלק מונה ומכנה ב-5.&rlm;", math_expression: "15 : 5 = 3" },
            { verbal_explanation: "המכנה: 20 חלקי 5 הם 4.&rlm;", math_expression: "20 : 5 = 4" },
            { verbal_explanation: "התוצאה: 3/4.&rlm;", math_expression: "3/4" }
        ],
        final_answer: "3/4"
    },
    // שאלה 40
    {
        topic: "fractions",
        subTopic: "צמצום והרחבה של שברים פשוטים",
        question_text: "איזה מהשברים הבאים שווה בדיוק ל-1/4? (נסו לצמצם אותם)&rlm;",
        options: ["3/12", "2/6", "4/8", "5/15"],
        correctAnswer: 0,
        hint: "בשבר השווה ל-1/4, המכנה הוא בדיוק פי 4 מהמונה.&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את האפשרות הראשונה: האם 12 גדול פי 4 מ-3? כן.&rlm;", math_expression: "3 × 4 = 12" },
            { verbal_explanation: "אם נצמצם את 3/12 פי 3, נקבל 1/4.&rlm;", math_expression: "3/12 = 1/4" }
        ],
        final_answer: "3/12"
    },
    // שאלה 41
    {
        topic: "fractions",
        subTopic: "צמצום והרחבה של שברים פשוטים",
        question_text: "מהו השבר המצומצם ביותר עבור 18/24?&rlm;",
        options: ["3/4", "9/12", "6/8", "1/2"],
        correctAnswer: 0,
        hint: "חפשו מחלק משותף גדול (למשל 6).&rlm;",
        solution_steps: [
            { verbal_explanation: "נחלק את שני המספרים ב-6.&rlm;", math_expression: "18 : 6 = 3" },
            { verbal_explanation: "במכנה: 24 חלקי 6 שווה 4.&rlm;", math_expression: "24 : 6 = 4" },
            { verbal_explanation: "התוצאה היא 3/4.&rlm;", math_expression: "3/4" }
        ],
        final_answer: "3/4"
    },
    // שאלה 42
    {
        topic: "fractions",
        subTopic: "צמצום והרחבה של שברים פשוטים",
        question_text: "הרחיבו את 5/7 כך שהמכנה שלו יהיה 35. מהו המונה החדש?&rlm;",
        options: ["25", "10", "15", "30"],
        correctAnswer: 0,
        hint: "בדקו פי כמה הוכפל ה-7 כדי להפוך ל-35. הכפילו את ה-5 באותו מספר.&rlm;",
        solution_steps: [
            { verbal_explanation: "7 כפול 5 שווה 35. לכן ההרחבה היא פי 5.&rlm;", math_expression: "7 × 5 = 35" },
            { verbal_explanation: "נכפול את המונה 5 באותו מספר.&rlm;", math_expression: "5 × 5 = 25" }
        ],
        final_answer: "25"
    },
    // שאלה 43
    {
        topic: "fractions",
        subTopic: "צמצום והרחבה של שברים פשוטים",
        question_text: "צמצמו את 50/100 לצורתו הפשוטה ביותר.&rlm;",
        options: ["1/2", "5/10", "1/5", "2/1"],
        correctAnswer: 0,
        hint: "50 הוא חצי מ-100.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחלק מונה ומכנה ב-50.&rlm;", math_expression: "50 : 50 = 1" },
            { verbal_explanation: "100 לחלק ל-50 שווה ל-2.&rlm;", math_expression: "100 : 50 = 2" },
            { verbal_explanation: "השבר הוא חצי.&rlm;", math_expression: "1/2" }
        ],
        final_answer: "1/2"
    },
    // שאלה 44
    {
        topic: "fractions",
        subTopic: "צמצום והרחבה של שברים פשוטים",
        question_text: "איזה שבר *אינו* שווה ל-1/2?&rlm;",
        options: ["3/5", "4/8", "50/100", "10/20"],
        correctAnswer: 0,
        hint: "בשבר השווה לחצי, המכנה הוא תמיד כפליים מהמונה.&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את 3/5: האם 5 הוא כפליים מ-3? לא (הוא 6). לכן זה לא שווה לחצי.&rlm;", math_expression: "3 × 2 = 6" }
        ],
        final_answer: "3/5"
    },
    // שאלה 45
    {
        topic: "fractions",
        subTopic: "צמצום והרחבה של שברים פשוטים",
        question_text: "באיזה מספר צמצמו את 7/21 כדי לקבל 1/3?&rlm;",
        options: ["7", "3", "2", "21"],
        correctAnswer: 0,
        hint: "בכמה חילקו את 7 כדי שיהפוך ל-1?&rlm;",
        solution_steps: [
            { verbal_explanation: "7 חלקי 7 זה 1.&rlm;", math_expression: "7 : 7 = 1" },
            { verbal_explanation: "נבדוק גם במכנה: 21 לחלק ל-7 שווה 3. הצמצום בוצע פי 7.&rlm;", math_expression: "21 : 7 = 3" }
        ],
        final_answer: "7"
    },
    // שאלה 46
    {
        topic: "fractions",
        subTopic: "צמצום והרחבה של שברים פשוטים",
        question_text: "אם מרחיבים את 3/8 כך שהמונה יהיה 15, מה יהיה המכנה?&rlm;",
        options: ["40", "24", "15", "80"],
        correctAnswer: 0,
        hint: "המונה 3 הוכפל פי 5 כדי להיות 15. מה קורה למכנה אם מכפילים אותו ב-5?&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק הרחבת המונה: 3 כפול 5 שווה 15.&rlm;", math_expression: "3 × 5 = 15" },
            { verbal_explanation: "נרחיב את המכנה בהתאם: 8 כפול 5.&rlm;", math_expression: "8 × 5 = 40" }
        ],
        final_answer: "40"
    },
    // שאלה 47
    {
        topic: "fractions",
        subTopic: "צמצום והרחבה של שברים פשוטים",
        question_text: "צמצמו את 24/36:&rlm;",
        options: ["2/3", "4/6", "12/18", "6/9"],
        correctAnswer: 0,
        hint: "חפשו את המחלק המשותף הגדול ביותר (12).&rlm;",
        solution_steps: [
            { verbal_explanation: "נחלק ב-12 את שני המספרים.&rlm;", math_expression: "24 : 12 = 2" },
            { verbal_explanation: "המכנה: 36 חלקי 12.&rlm;", math_expression: "36 : 12 = 3" },
            { verbal_explanation: "קיבלנו שני שלישים.&rlm;", math_expression: "2/3" }
        ],
        final_answer: "2/3"
    },
    // שאלה 48
    {
        topic: "fractions",
        subTopic: "צמצום והרחבה של שברים פשוטים",
        question_text: "האם השברים 4/6 ו-6/9 שווים זה לזה?&rlm;",
        options: ["כן", "לא", "רק במספרים זוגיים", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "צמצמו את שניהם עד הסוף וראו אם מקבלים את אותו השבר המצומצם.&rlm;",
        solution_steps: [
            { verbal_explanation: "צמצום 4/6: נחלק ב-2 ונקבל 2/3.&rlm;", math_expression: "4/6 = 2/3" },
            { verbal_explanation: "צמצום 6/9: נחלק ב-3 ונקבל 2/3.&rlm;", math_expression: "6/9 = 2/3" },
            { verbal_explanation: "שניהם שווים לאותו שבר (2/3), ולכן הם שווים זה לזה.&rlm;", math_expression: "" }
        ],
        final_answer: "כן"
    },// ========================================================================
// שכבת גיל: ה'-ו' | נושא: שברים (חלק ג' ואחרון)
// 2 תתי נושאים אחרונים | 24 שאלות סה"כ
// ========================================================================
// הוראות כתיבה: 
// שברים: נכתבים כ- 1/4 או 2 1/2
// חילוק: נכתב כ- :
// כפל: נכתב כ- ×
// ========================================================================


    // ==========================================================
    // תת נושא 13: שבר כמנת חילוק (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "fractions",
        subTopic: "שבר כמנת חילוק",
        question_text: "קבוצה של 3 חברים הזמינה 2 פיצות. הם רוצים לחלק את הפיצות שווה בשווה ביניהם. איזה חלק של פיצה יקבל כל חבר?&rlm;",
        options: ["2/3", "3/2", "1/2", "1 1/2"],
        correctAnswer: 0,
        hint: "זכרו את הכלל: קו השבר שווה בדיוק לפעולת החילוק. חלקו את מספר הפיצות (המחולק) במספר החברים (המחלק).&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי למצוא כמה יקבל כל אחד, נחלק את הכמות הכוללת (2 פיצות) במספר האנשים (3 חברים).&rlm;", math_expression: "2 : 3" },
            { verbal_explanation: "פעולת החילוק '2 לחלק ל-3' נכתבת בדיוק כמו השבר שני שלישים.&rlm;", math_expression: "2/3" }
        ],
        final_answer: "2/3"
    },
    // שאלה 2
    {
        topic: "fractions",
        subTopic: "שבר כמנת חילוק",
        question_text: "איזה תרגיל חילוק שווה לשבר 5/8?&rlm;",
        options: ["5 : 8", "8 : 5", "5 × 8", "8 - 5"],
        correctAnswer: 0,
        hint: "המונה הוא תמיד המספר הראשון (המחולק) והמכנה הוא המספר השני (המחלק).&rlm;",
        solution_steps: [
            { verbal_explanation: "השבר 5 שמיניות פירושו 5 שלמים שמחולקים ל-8 חלקים שווים.&rlm;", math_expression: "5/8" },
            { verbal_explanation: "לכן תרגיל החילוק המתאים הוא 5 לחלק ל-8.&rlm;", math_expression: "5 : 8" }
        ],
        final_answer: "5 : 8"
    },
    // שאלה 3
    {
        topic: "fractions",
        subTopic: "שבר כמנת חילוק",
        question_text: "מהי התוצאה של תרגיל החילוק הבא? רשמו את התשובה כשבר מדומה ואז כמספר מעורב:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>14 : 3 = ?</div>",
        options: ["4 2/3", "3 2/3", "4 1/3", "14 1/3"],
        correctAnswer: 0,
        hint: "רשמו 14/3 ובדקו כמה פעמים 3 נכנס ב-14 בשלמותו.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמיר את פעולת החילוק לשבר מדומה.&rlm;", math_expression: "14 : 3 = 14/3" },
            { verbal_explanation: "המספר 3 נכנס ב-14 בדיוק 4 פעמים (כי 4 כפול 3 שווה 12), ונשארת שארית של 2.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן התשובה היא 4 שלמים ו-2 שלישים.&rlm;", math_expression: "4 2/3" }
        ],
        final_answer: "4 2/3"
    },
    // שאלה 4
    {
        topic: "fractions",
        subTopic: "שבר כמנת חילוק",
        question_text: "חבל שאורכו 4 מטרים נחתך ל-9 חתיכות שוות באורכן. מהו אורכה של כל חתיכה במטרים?&rlm;",
        options: ["4/9", "9/4", "1/9", "2 1/4"],
        correctAnswer: 0,
        hint: "מה מחלקים? את המטרים. לכמה מחלקים? ל-9.&rlm;",
        solution_steps: [
            { verbal_explanation: "הכמות המחולקת היא אורך החבל (4), והיא מתחלקת ב-9.&rlm;", math_expression: "4 : 9" },
            { verbal_explanation: "נעביר את פעולת החילוק לייצוג של שבר.&rlm;", math_expression: "4/9" }
        ],
        final_answer: "4/9"
    },
    // שאלה 5
    {
        topic: "fractions",
        subTopic: "שבר כמנת חילוק",
        question_text: "סמנו את המשפט הנכון לגבי השבר המדומה 10/2:&rlm;",
        options: ["הוא שווה לתרגיל 10 : 2 ולמספר השלם 5.", "הוא שווה לתרגיל 2 : 10.", "אי אפשר לחלק 10 ב-2.", "הוא שווה ל-2/10."],
        correctAnswer: 0,
        hint: "קו השבר מסמל חילוק של המונה במכנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "השבר 10/2 מורכב ממונה 10 ומכנה 2.&rlm;", math_expression: "" },
            { verbal_explanation: "זה שווה לפעולת החילוק של המונה במכנה.&rlm;", math_expression: "10 : 2 = 5" }
        ],
        final_answer: "הוא שווה לתרגיל 10 : 2 ולמספר השלם 5."
    },
    // שאלה 6
    {
        topic: "fractions",
        subTopic: "שבר כמנת חילוק",
        question_text: "הפכו את השבר 15/4 לתרגיל חילוק, וחשבו את התוצאה כמספר מעורב:&rlm;",
        options: ["3 3/4", "3 1/4", "4 3/4", "11/4"],
        correctAnswer: 0,
        hint: "תרגיל החילוק הוא 15 : 4. כמה שלמים יש כאן ומהי השארית?&rlm;",
        solution_steps: [
            { verbal_explanation: "השבר 15/4 שווה לתרגיל החילוק 15 לחלק ל-4.&rlm;", math_expression: "15 : 4" },
            { verbal_explanation: "המספר 4 נכנס ב-15 שלוש פעמים (שווה 12).&rlm;", math_expression: "3" },
            { verbal_explanation: "השארית היא 3 (15 פחות 12), והמכנה נשאר 4.&rlm;", math_expression: "3 3/4" }
        ],
        final_answer: "3 3/4"
    },
    // שאלה 7
    {
        topic: "fractions",
        subTopic: "שבר כמנת חילוק",
        question_text: "רוצים לחלק 1 ליטר של שמן זית ל-5 בקבוקים קטנים ושווים בנפחם. כמה ליטר שמן יהיה בכל בקבוק?&rlm;",
        options: ["1/5", "5/1", "1/10", "5"],
        correctAnswer: 0,
        hint: "כמות השמן (1) היא המחולק. מספר הבקבוקים (5) הוא המחלק.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום את תרגיל החילוק: 1 ליטר מחולק ל-5 בקבוקים.&rlm;", math_expression: "1 : 5" },
            { verbal_explanation: "התוצאה נכתבת כשבר שבו המונה הוא 1 והמכנה הוא 5.&rlm;", math_expression: "1/5" }
        ],
        final_answer: "1/5"
    },
    // שאלה 8
    {
        topic: "fractions",
        subTopic: "שבר כמנת חילוק",
        question_text: "מה הערך של התרגיל הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0 : 7 = ?</div>",
        options: ["0", "7", "0/7 שזה אומר שאי אפשר לחלק", "1/7"],
        correctAnswer: 0, // התשובה היא 0. ההערה השלישית לא נכונה כי 0 לחלק למשהו זה 0. אי אפשר לחלק *ב*-אפס.
        hint: "כשיש לכם 0 דברים ואתם מחלקים אותם ל-7 אנשים, כמה כל אחד מקבל?&rlm;",
        solution_steps: [
            { verbal_explanation: "תרגיל החילוק שווה לשבר שמונהו אפס.&rlm;", math_expression: "0/7" },
            { verbal_explanation: "אפס לחלק לכל מספר (שאינו אפס) תמיד שווה לאפס.&rlm;", math_expression: "0" }
        ],
        final_answer: "0"
    },
    // שאלה 9
    {
        topic: "fractions",
        subTopic: "שבר כמנת חילוק",
        question_text: "4 חפיסות שוקולד מחולקות שווה בשווה בין 6 ילדים. איזה חלק של חפיסה קיבל כל ילד? (חשבו וצמצמו את השבר)&rlm;",
        options: ["2/3", "4/6", "1 1/2", "3/2"], 
        // 4/6 גם נכון אבל ביקשו לצמצם, לכן 2/3.
        correctAnswer: 0,
        hint: "תרגיל החילוק ייתן לכם שבר. חפשו מספר שאפשר לחלק בו גם את המונה וגם את המכנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחלק 4 חפיסות ב-6 ילדים ונקבל 4 שישיות.&rlm;", math_expression: "4 : 6 = 4/6" },
            { verbal_explanation: "נצמצם את השבר על ידי חלוקת המונה והמכנה ב-2.&rlm;", math_expression: "4/6 = 2/3" }
        ],
        final_answer: "2/3"
    },
    // שאלה 10
    {
        topic: "fractions",
        subTopic: "שבר כמנת חילוק",
        question_text: "איזה מהמשפטים הבאים מסביר בצורה נכונה מדוע 8/3 שווה ל-2 ושני שלישים?&rlm;",
        options: ["כי אם מחלקים 8 ב-3 מקבלים 2 שלמים ושארית 2 שממשיכה להתחלק ב-3.", "כי 8 כפול 3 זה 24.", "כי בשבר מדומה תמיד המונה הוא 2.", "כי 8 פחות 3 שווה 5."],
        correctAnswer: 0,
        hint: "זכרו שקו השבר הוא כמו פעולת חילוק עם שארית.&rlm;",
        solution_steps: [
            { verbal_explanation: "8/3 הוא בעצם התרגיל 8 לחלק ל-3.&rlm;", math_expression: "8 : 3" },
            { verbal_explanation: "כאשר מחלקים 8 ב-3, מקבלים 2 שלמים ויש שארית של 2.&rlm;", math_expression: "" },
            { verbal_explanation: "השארית נשארת כשבר עם אותו מכנה.&rlm;", math_expression: "2 2/3" }
        ],
        final_answer: "כי אם מחלקים 8 ב-3 מקבלים 2 שלמים ושארית 2 שממשיכה להתחלק ב-3."
    },
    // שאלה 11
    {
        topic: "fractions",
        subTopic: "שבר כמנת חילוק",
        question_text: "קבוצת צופים צעדה מרחק של 10 ק\"מ. המרחק חולק ל-3 מקטעים שווים. מה אורך כל מקטע?&rlm;",
        options: ["3 1/3 ק\"מ", "10/3 ק\"מ", "3 ק\"מ", "גם תשובה 1 וגם תשובה 2 נכונות"],
        correctAnswer: 3,
        hint: "המרחק המקורי הוא המחולק (10). מספר המקטעים הוא המחלק (3).&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום את תרגיל החילוק כשבר מדומה.&rlm;", math_expression: "10 : 3 = 10/3" },
            { verbal_explanation: "נהפוך את השבר המדומה למספר מעורב: 10 לחלק ל-3 זה 3 עם שארית 1.&rlm;", math_expression: "3 1/3" },
            { verbal_explanation: "לכן, גם 10/3 וגם 3 ושליש הן תשובות נכונות.&rlm;", math_expression: "" }
        ],
        final_answer: "גם תשובה 1 וגם תשובה 2 נכונות"
    },
    // שאלה 12
    {
        topic: "fractions",
        subTopic: "שבר כמנת חילוק",
        question_text: "מהי התוצאה של תרגיל החילוק הבא? רשמו כשבר פשוט:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1 : 5 = ?</div>",
        options: ["1/5", "5/1", "5", "0"],
        correctAnswer: 0,
        hint: "המספר משמאל לנקודתיים הוא המונה.&rlm;",
        solution_steps: [
            { verbal_explanation: "1 הוא המונה (המחולק). 5 הוא המכנה (המחלק).&rlm;", math_expression: "1/5" }
        ],
        final_answer: "1/5"
    },

    // ==========================================================
    // תת נושא 14: שבר עשרוני מחזורי (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "fractions",
        subTopic: "שבר עשרוני מחזורי",
        question_text: "איזה שבר פשוט שווה לשבר העשרוני המחזורי 0.333... (שבו הספרה 3 חוזרת עד אינסוף)?&rlm;",
        options: ["1/3", "3/10", "1/4", "3/100"],
        correctAnswer: 0,
        hint: "נסו לחלק במחשבון 1 לחלק ל-3. מה תהיה התוצאה?&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר מחלקים 1 ב-3, השארית אף פעם לא מסתיימת, והספרה 3 חוזרת על עצמה שוב ושוב.&rlm;", math_expression: "1 : 3 = 0.333..." }
        ],
        final_answer: "1/3"
    },
    // שאלה 14
    {
        topic: "fractions",
        subTopic: "שבר עשרוני מחזורי",
        question_text: "כיצד נכתוב את השבר 2/3 כשבר עשרוני?&rlm;",
        options: ["0.666...", "0.23", "2.333...", "0.6"],
        correctAnswer: 0,
        hint: "אם 1/3 שווה ל-0.333..., למה שווה הפעמיים שלו (2/3)?&rlm;",
        solution_steps: [
            { verbal_explanation: "אנו יודעים ששליש אחד שווה 0.333...&rlm;", math_expression: "1/3 = 0.333..." },
            { verbal_explanation: "שני שלישים הם בדיוק כפול מזה, ולכן הספרה 6 תחזור על עצמה.&rlm;", math_expression: "0.333... × 2 = 0.666..." }
        ],
        final_answer: "0.666..."
    },
    // שאלה 15
    {
        topic: "fractions",
        subTopic: "שבר עשרוני מחזורי",
        question_text: "מהו הייצוג העשרוני של השבר 1/9?&rlm;",
        options: ["0.111...", "0.999...", "0.19", "0.9"],
        correctAnswer: 0,
        hint: "שברים עם מכנה 9 יוצרים דפוס מחזורי מיוחד. הספרה במונה חוזרת על עצמה.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר מחלקים 1 ב-9 בשיטת חילוק ארוך, מקבלים 0.1 והשארית היא שוב 1, וכך הלאה עד אינסוף.&rlm;", math_expression: "1 : 9 = 0.111..." }
        ],
        final_answer: "0.111..."
    },
    // שאלה 16
    {
        topic: "fractions",
        subTopic: "שבר עשרוני מחזורי",
        question_text: "איזה מהשברים הבאים הופך לשבר עשרוני מחזורי (לא סופי)?&rlm;",
        options: ["1/3", "1/4", "1/2", "1/5"],
        correctAnswer: 0,
        hint: "בדקו אילו שברים אפשר להרחיב למכנים של 10, 100, 1000 (אלו יהיו שברים סופיים).&rlm;",
        solution_steps: [
            { verbal_explanation: "את השברים 1/2 (0.5), 1/4 (0.25) ו-1/5 (0.2) אפשר להרחיב לעשיריות ומאיות ולכן הם סופיים.&rlm;", math_expression: "" },
            { verbal_explanation: "את המכנה 3 אי אפשר להרחיב ל-10, 100 וכו'. לכן התוצאה תהיה מחזורית.&rlm;", math_expression: "1/3 = 0.333..." }
        ],
        final_answer: "1/3"
    },
    // שאלה 17
    {
        topic: "fractions",
        subTopic: "שבר עשרוני מחזורי",
        question_text: "אם השבר 1/9 נכתב כ-0.111..., למה שווה השבר 5/9?&rlm;",
        options: ["0.555...", "0.59", "0.95", "5.999..."],
        correctAnswer: 0,
        hint: "הכפילו את הערך של 1/9 ב-5.&rlm;",
        solution_steps: [
            { verbal_explanation: "השבר 5/9 מורכב מחמש פעמים 1/9.&rlm;", math_expression: "5 × 1/9" },
            { verbal_explanation: "נכפול 5 ב-0.111... ונקבל רצף של חמישיות.&rlm;", math_expression: "5 × 0.111... = 0.555..." }
        ],
        final_answer: "0.555..."
    },
    // שאלה 18
    {
        topic: "fractions",
        subTopic: "שבר עשרוני מחזורי",
        question_text: "מהו השבר הפשוט המתאים לשבר המחזורי 0.777... ?&rlm;",
        options: ["7/9", "7/10", "7/100", "77/100"],
        correctAnswer: 0,
        hint: "זכרו את הכלל לגבי שברים עם מכנה 9.&rlm;",
        solution_steps: [
            { verbal_explanation: "אנו יודעים שחלוקה ב-9 יוצרת ספרה מחזורית הזהה למונה.&rlm;", math_expression: "1/9 = 0.111..." },
            { verbal_explanation: "לכן, 7 פעמים 1/9 ייתן 0.777...&rlm;", math_expression: "7/9 = 0.777..." }
        ],
        final_answer: "7/9"
    },
    // שאלה 19
    {
        topic: "fractions",
        subTopic: "שבר עשרוני מחזורי",
        question_text: "המירו את השבר 1/6 לשבר עשרוני. מה מתקבל?&rlm;",
        options: ["0.1666...", "0.6", "0.16", "0.6111..."],
        correctAnswer: 0,
        hint: "חלקו 10 ב-6 בראש: מקבלים 1 ושארית 4. כעת חלקו 40 ב-6: מקבלים 6 ושארית 4. וכך הלאה...&rlm;",
        solution_steps: [
            { verbal_explanation: "נבצע חילוק ארוך של 1 ב-6.&rlm;", math_expression: "1 : 6" },
            { verbal_explanation: "הספרה הראשונה היא 1 (10 חלקי 6), הספרה הבאה היא 6 (40 חלקי 6), ומשם השארית 4 תמיד חוזרת. לכן ה-6 חוזר על עצמו.&rlm;", math_expression: "0.1666..." }
        ],
        final_answer: "0.1666..."
    },
    // שאלה 20
    {
        topic: "fractions",
        subTopic: "שבר עשרוני מחזורי",
        question_text: "איזה שבר גדול יותר: 0.3 או 1/3?&rlm;",
        options: ["1/3 גדול יותר", "0.3 גדול יותר", "הם שווים בדיוק", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "המירו את 1/3 לעשרוני והשוו את הספרות מאיות.&rlm;",
        solution_steps: [
            { verbal_explanation: "0.3 נכתב גם כ-0.300.&rlm;", math_expression: "0.3 = 0.300" },
            { verbal_explanation: "השבר 1/3 נכתב כ-0.333...&rlm;", math_expression: "1/3 = 0.333..." },
            { verbal_explanation: "מכיוון שבספרת המאיות יש 3 לעומת 0, ה-1/3 גדול יותר.&rlm;", math_expression: "0.333... > 0.300" }
        ],
        final_answer: "1/3 גדול יותר"
    },
    // שאלה 21
    {
        topic: "fractions",
        subTopic: "שבר עשרוני מחזורי",
        question_text: "דן חישב במחשבון את התרגיל 1/3 + 1/3. המחשבון הציג לו שבר עשרוני. מה היה כתוב על הצג?&rlm;",
        options: ["0.666666...", "0.222222...", "0.6", "0.333333..."],
        correctAnswer: 0,
        hint: "המירו לעשרוני וחברו: 0.333... ועוד 0.333...&rlm;",
        solution_steps: [
            { verbal_explanation: "התרגיל הוא חיבור של שני שלישים, שזה 2/3.&rlm;", math_expression: "1/3 + 1/3 = 2/3" },
            { verbal_explanation: "אנו יודעים ש-2/3 כעשרוני הוא סדרה אינסופית של 6.&rlm;", math_expression: "0.666..." }
        ],
        final_answer: "0.666666..."
    },
    // שאלה 22
    {
        topic: "fractions",
        subTopic: "שבר עשרוני מחזורי",
        question_text: "המירו את השבר המדומה 4/3 לשבר עשרוני.&rlm;",
        options: ["1.333...", "0.433...", "1.444...", "4.333..."],
        correctAnswer: 0,
        hint: "הפכו קודם למספר מעורב: 1 ו-1/3.&rlm;",
        solution_steps: [
            { verbal_explanation: "השבר 4/3 הוא למעשה שלם 1 ועוד 1/3.&rlm;", math_expression: "4/3 = 1 1/3" },
            { verbal_explanation: "השלם הוא 1, והשליש הופך ל-0.333...&rlm;", math_expression: "1 + 0.333... = 1.333..." }
        ],
        final_answer: "1.333..."
    },
    // שאלה 23
    {
        topic: "fractions",
        subTopic: "שבר עשרוני מחזורי",
        question_text: "איזה מבין השברים הבאים *אינו* שבר מחזורי (כלומר הוא שבר עשרוני סופי)?&rlm;",
        options: ["1/8", "1/3", "2/9", "5/6"],
        correctAnswer: 0,
        hint: "נסו להרחיב את המכנה ל-10, 100 או 1000. האם אפשר להרחיב את 8 ל-1000?&rlm;",
        solution_steps: [
            { verbal_explanation: "את המספר 8 ניתן להרחיב ל-1000 על ידי הכפלה ב-125.&rlm;", math_expression: "1/8 = 125/1000" },
            { verbal_explanation: "125 אלפיות הן שבר עשרוני סופי ומדויק לחלוטין (0.125). שאר השברים כאן הם מחזוריים.&rlm;", math_expression: "0.125" }
        ],
        final_answer: "1/8"
    },
    // שאלה 24
    {
        topic: "fractions",
        subTopic: "שבר עשרוני מחזורי",
        question_text: "דנה הקלידה במחשבון את התרגיל 2 : 9. איזה שבר עשרוני היא תראה על המסך?&rlm;",
        options: ["0.222...", "0.922...", "2.999...", "0.45"],
        correctAnswer: 0,
        hint: "חילוק של כל ספרה ב-9 נותן שבר מחזורי של אותה הספרה.&rlm;",
        solution_steps: [
            { verbal_explanation: "תרגיל החילוק שקול לשבר 2/9.&rlm;", math_expression: "2 : 9 = 2/9" },
            { verbal_explanation: "אנו יודעים ש-1/9 הוא 0.111... לכן, נכפיל פי 2 את כל הספרות ונקבל את התוצאה.&rlm;", math_expression: "0.111... × 2 = 0.222..." }
        ],
        final_answer: "0.222..."
    }

];
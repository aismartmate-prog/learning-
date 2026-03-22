// ========================================================================
// שכבת גיל: כיתה ח' | נושא: אחוזים
// 5 תתי נושאים | 60 שאלות סה"כ
// פתרונות מפורטים צעד אחר צעד (להאכיל בכפית).
// כתיבה נקייה ובטוחה: × לכפל, : לחילוק. ללא LaTeX!
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: חישוב ערך האחוז (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז",
        question_text: "כמה הם 20% מתוך 80?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 100' width='80' height='80'><circle cx='50' cy='50' r='40' fill='#f1f5f9' stroke='#3b82f6' stroke-width='2'/><path d='M 50 50 L 50 10 A 40 40 0 0 1 88 37 Z' fill='#3b82f6'/><text x='70' y='35' font-family='Arial' font-size='12' fill='#fff'>20%</text></svg></div>",
        options: ["16", "20", "8", "12"],
        correctAnswer: 0,
        hint: "אחוז משמעותו 'מתוך מאה'. 20% הם 20/100 או 0.2. הכפילו זאת ב-80.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נתרגם את האחוז לשבר פשוט או עשרוני. 20% שווים ל- 20/100, שאפשר לצמצם ל- 1/5 או לכתוב כ-0.2.&rlm;", math_expression: "20% = 0.2" },
            { verbal_explanation: "שלב ב': נכפול את השבר העשרוני בשלם (80).&rlm;", math_expression: "0.2 × 80" },
            { verbal_explanation: "שלב ג': 2 כפול 8 שווה 16.&rlm;", math_expression: "16" }
        ],
        final_answer: "16"
    },
    // שאלה 2
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז",
        question_text: "בכיתה יש 30 תלמידים. 50% מהם יצאו לטיול השנתי. כמה תלמידים יצאו לטיול?&rlm;",
        options: ["15", "20", "10", "25"],
        correctAnswer: 0,
        hint: "50% הם בדיוק חצי. מהו החצי של 30?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נזכור ש-50% הם בדיוק 50/100, שזה שווה לחצי (1/2).&rlm;", math_expression: "50% = 1/2" },
            { verbal_explanation: "שלב ב': נחשב חצי מתוך 30.&rlm;", math_expression: "30 : 2 = 15" }
        ],
        final_answer: "15"
    },
    // שאלה 3
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז",
        question_text: "חשבו כמה הם 5% מתוך 60 שקלים.&rlm;",
        options: ["3 שקלים", "5 שקלים", "6 שקלים", "12 שקלים"],
        correctAnswer: 0,
        hint: "אפשר לחשב קודם 10% (לחלק ב-10) ואז לקחת חצי מזה.&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך קלה לחישוב בראש: נמצא קודם 10% מתוך 60. 10% פירושו לחלק ב-10.&rlm;", math_expression: "60 : 10 = 6" },
            { verbal_explanation: "5% הם בדיוק חצי מ-10%. לכן ניקח את התוצאה שקיבלנו (6) ונחלק ב-2.&rlm;", math_expression: "6 : 2 = 3" }
        ],
        final_answer: "3 שקלים"
    },
    // שאלה 4
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז",
        question_text: "קבוצת כדורסל זרקה 200 זריקות לעונשין במהלך העונה, וקלעה ב-75% מהן. כמה זריקות נכנסו לסל?&rlm;",
        options: ["150", "75", "100", "125"],
        correctAnswer: 0,
        hint: "75% שווים לשלושה רבעים (3/4). חלקו את 200 ב-4 והכפילו ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': 75% ניתן לכתיבה כשבר הפשוט 3/4.&rlm;", math_expression: "75% = 3/4" },
            { verbal_explanation: "שלב ב': נחשב רבע מתוך 200.&rlm;", math_expression: "200 : 4 = 50" },
            { verbal_explanation: "שלב ג': נכפול את הרבע ב-3 כדי לקבל שלושה רבעים.&rlm;", math_expression: "50 × 3 = 150" }
        ],
        final_answer: "150"
    },
    // שאלה 5
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז",
        question_text: "מהו ערכם של 120% מתוך 50?&rlm;",
        options: ["60", "120", "50", "70"],
        correctAnswer: 0,
        hint: "120% הם השלם (100%) ועוד 20%. השלם הוא 50. כמה זה עוד 20% מ-50?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את האחוז ל-100% ועוד 20%.&rlm;", math_expression: "120% = 100% + 20%" },
            { verbal_explanation: "שלב ב': 100% מתוך 50 הם 50 עצמו.&rlm;", math_expression: "100% = 50" },
            { verbal_explanation: "שלב ג': 20% מתוך 50 הם חמישית מ-50, שזה 10.&rlm;", math_expression: "50 : 5 = 10" },
            { verbal_explanation: "שלב ד': נחבר הכל יחד.&rlm;", math_expression: "50 + 10 = 60" }
        ],
        final_answer: "60"
    },
    // שאלה 6
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז",
        question_text: "חשבו במדויק: כמה הם 1% מתוך 400?&rlm;",
        options: ["4", "40", "0.4", "100"],
        correctAnswer: 0,
        hint: "אחוז אחד הוא מאית. כלומר, יש לחלק את המספר ב-100.&rlm;",
        solution_steps: [
            { verbal_explanation: "אחוז אחד (1%) משמעותו לקחת את השלם ולחלק אותו ל-100 חלקים שווים.&rlm;", math_expression: "1% = 1/100" },
            { verbal_explanation: "נחלק את 400 ב-100.&rlm;", math_expression: "400 : 100 = 4" }
        ],
        final_answer: "4"
    },
    // שאלה 7
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז",
        question_text: "קופסת עוגיות מכילה 40 עוגיות. 30% מהן בטעם שוקולד. כמה עוגיות שוקולד יש בקופסה?&rlm;",
        options: ["12", "15", "30", "10"],
        correctAnswer: 0,
        hint: "המירו את 30% לעשרוני (0.3) וכפלו ב-40. לחלופין, 10% זה 4 עוגיות. 30% זה פי 3.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב קודם 10% מתוך 40 על ידי חלוקה ב-10.&rlm;", math_expression: "40 : 10 = 4" },
            { verbal_explanation: "30% הם פי 3 מאשר 10%. לכן נכפיל את התוצאה ב-3.&rlm;", math_expression: "4 × 3 = 12" }
        ],
        final_answer: "12"
    },
    // שאלה 8
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז",
        question_text: "מהם 12.5% מתוך 80?&rlm;",
        options: ["10", "12.5", "8", "20"],
        correctAnswer: 0,
        hint: "זכרו ש- 12.5% הם בדיוק 1/8 (שמינית) מהשלם (כי 100 חלקי 8 שווה 12.5).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמיר את האחוז לשבר מדוייק ונוח. 12.5% הם 12.5/100, שזה שווה לשמינית (1/8).&rlm;", math_expression: "12.5% = 1/8" },
            { verbal_explanation: "שלב ב': נחשב שמינית מתוך 80 על ידי חלוקה ב-8.&rlm;", math_expression: "80 : 8 = 10" }
        ],
        final_answer: "10"
    },
    // שאלה 9
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז",
        question_text: "מיכל מים מכיל 600 ליטרים. השקו את הגינה ב-15% מכמות המים. כמה ליטרים יצאו מהמיכל?&rlm;",
        options: ["90 ליטרים", "150 ליטרים", "60 ליטרים", "100 ליטרים"],
        correctAnswer: 0,
        hint: "15% מורכבים מ-10% ועוד 5%. חשבו כמה הם 10% מ-600, אח\"כ חשבו כמה הם 5%, וחברו.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא 10% מ-600 (נחלק ב-10).&rlm;", math_expression: "600 : 10 = 60" },
            { verbal_explanation: "נמצא 5% מ-600 (שזה חצי ממה שמצאנו קודם).&rlm;", math_expression: "60 : 2 = 30" },
            { verbal_explanation: "נחבר את ה-10% וה-5% לקבלת 15% השלמים.&rlm;", math_expression: "60 + 30 = 90" }
        ],
        final_answer: "90 ליטרים"
    },
    // שאלה 10
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז",
        question_text: "חשבו במדויק: 2.5% מתוך 4000 שקלים.&rlm;",
        options: ["100 שקלים", "10 שקלים", "40 שקלים", "25 שקלים"],
        correctAnswer: 0,
        hint: "כפלו בעשרוני: 2.5% הם 0.025. או שתמצאו קודם 1% (40) ותכפילו ב-2.5.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא כמה שווה אחוז אחד (1%) מתוך 4000. נחלק ב-100.&rlm;", math_expression: "4000 : 100 = 40" },
            { verbal_explanation: "שלב ב': אנחנו צריכים 2.5 פעמים את האחוז האחד. נכפיל 40 ב-2.5.&rlm;", math_expression: "40 × 2.5" },
            { verbal_explanation: "40 כפול 2 זה 80. ו-40 כפול חצי זה 20. יחד נקבל 100.&rlm;", math_expression: "80 + 20 = 100" }
        ],
        final_answer: "100 שקלים"
    },
    // שאלה 11
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז",
        question_text: "מהם 33.33% (שליש) מתוך 90?&rlm;",
        options: ["30", "33", "27", "9"],
        correctAnswer: 0,
        hint: "33 ושליש אחוזים הם בדיוק השבר שליש (1/3).&rlm;",
        solution_steps: [
            { verbal_explanation: "האחוז 33.33...% הוא הדרך העשרונית לכתוב את השבר 1/3 (שליש).&rlm;", math_expression: "33.33% = 1/3" },
            { verbal_explanation: "נחשב שליש מתוך 90 על ידי חלוקה ב-3.&rlm;", math_expression: "90 : 3 = 30" }
        ],
        final_answer: "30"
    },
    // שאלה 12
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז",
        question_text: "אחוז קטן: חשבו כמה הם 0.5% (חצי אחוז) מתוך 200.&rlm;",
        options: ["1", "10", "0.5", "5"],
        correctAnswer: 0,
        hint: "מצאו קודם כמה זה 1% שלם מתוך 200. לאחר מכן קחו חצי מהתוצאה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא כמה הוא 1% מתוך 200. נחלק ב-100.&rlm;", math_expression: "200 : 100 = 2" },
            { verbal_explanation: "שלב ב': 0.5% הוא חצי מאחוז אחד. לכן ניקח את התוצאה (2) ונחלק לחצי.&rlm;", math_expression: "2 : 2 = 1" }
        ],
        final_answer: "1"
    },

    // ==========================================================
    // תת נושא 2: מציאת השלם (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "percents",
        subTopic: "מציאת השלם",
        question_text: "ידוע ש- 20% ממספר מסוים הם 10. מהו המספר השלם (100%)?&rlm;",
        options: ["50", "200", "5", "100"],
        correctAnswer: 0,
        hint: "20% הם חמישית מהשלם. אם חמישית שווה ל-10, הכפילו ב-5 כדי למצוא את השלם.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': 20% הם 1/5 (חמישית). נתון שהחמישית שווה ל-10.&rlm;", math_expression: "20% = 10" },
            { verbal_explanation: "שלב ב': כדי להגיע מ-20% ל-100% (השלם), עלינו לכפול ב-5.&rlm;", math_expression: "20% × 5 = 100%" },
            { verbal_explanation: "שלב ג': נכפול גם את הערך (10) ב-5.&rlm;", math_expression: "10 × 5 = 50" }
        ],
        final_answer: "50"
    },
    // שאלה 14
    {
        topic: "percents",
        subTopic: "מציאת השלם",
        question_text: "5% מהכסף שיש לדנה בארנק הם 3 שקלים. כמה כסף יש לדנה בסך הכל?&rlm;",
        options: ["60 שקלים", "15 שקלים", "30 שקלים", "100 שקלים"],
        correctAnswer: 0,
        hint: "כמה פעמים 5% נכנסים ב-100%? (20 פעמים). הכפילו את 3 ב-20.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבדוק פי כמה צריך להגדיל את האחוז (5%) כדי להגיע ל-100%.&rlm;", math_expression: "100 : 5 = 20" },
            { verbal_explanation: "שלב ב': הגורם הוא 20. נכפול את הכמות הנתונה (3) באותו גורם.&rlm;", math_expression: "3 × 20 = 60" }
        ],
        final_answer: "60 שקלים"
    },
    // שאלה 15
    {
        topic: "percents",
        subTopic: "מציאת השלם",
        question_text: "במבחן היו שאלות, ודן פתר 75% מהן, שהן 60 שאלות. כמה שאלות היו במבחן כולו?&rlm;",
        options: ["80", "100", "75", "120"],
        correctAnswer: 0,
        hint: "75% הם 3/4. אם 3 רבעים שווים ל-60, חלקו ב-3 למצוא רבע אחד, ואז כפלו ב-4 למצוא את השלם.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': ידוע ששלושה רבעים (75%) הם 60. נחלק ב-3 כדי למצוא כמה זה רבע אחד (25%).&rlm;", math_expression: "60 : 3 = 20" },
            { verbal_explanation: "שלב ב': 25% שווים ל-20. כדי להגיע ל-100% נכפול ב-4.&rlm;", math_expression: "20 × 4 = 80" }
        ],
        final_answer: "80"
    },
    // שאלה 16
    {
        topic: "percents",
        subTopic: "מציאת השלם",
        question_text: "קבוצת רצים עברה 150% מהמסלול שתכננה (כלומר הם עשו אקסטרה). הם רצו 45 ק\"מ. מה היה אורך המסלול המקורי שתוכנן (ה-100%)?&rlm;",
        options: ["30 ק\"מ", "60 ק\"מ", "45 ק\"מ", "20 ק\"מ"],
        correctAnswer: 0,
        hint: "150% הם 1.5 (אחד וחצי). משוואה: 1.5 × x = 45. חלקו 45 ב-1.5.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נגדיר משוואה שבה x הוא השלם המקורי. 1.5 פעמים x שווים ל-45.&rlm;", math_expression: "1.5 × x = 45" },
            { verbal_explanation: "שלב ב': נבודד את x על ידי חלוקה.&rlm;", math_expression: "x = 45 : 1.5" },
            { verbal_explanation: "כדי להקל, נכפיל את שניהם פי 10 ונקבל 450 חלקי 15.&rlm;", math_expression: "450 : 15 = 30" }
        ],
        final_answer: "30 ק\"מ"
    },
    // שאלה 17
    {
        topic: "percents",
        subTopic: "מציאת השלם",
        question_text: "12% ממשקלו של חפץ מסוים הם 24 ק\"ג. מהו משקלו הכולל של החפץ?&rlm;",
        options: ["200 ק\"ג", "100 ק\"ג", "240 ק\"ג", "48 ק\"ג"],
        correctAnswer: 0,
        hint: "אם 12% הם 24, אז כל 1% שווה ל-2 ק\"ג (24 חלקי 12). הכפילו ב-100.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא כמה שווה 1% מהמשקל. נעשה זאת על ידי חלוקת הכמות באחוז.&rlm;", math_expression: "24 : 12 = 2" },
            { verbal_explanation: "שלב ב': אחוז אחד (1%) שווה ל-2 ק\"ג. כדי למצוא את השלם (100%), נכפיל ב-100.&rlm;", math_expression: "2 × 100 = 200" }
        ],
        final_answer: "200 ק\"ג"
    },
    // שאלה 18
    {
        topic: "percents",
        subTopic: "מציאת השלם",
        question_text: "רונית חסכה כסף וקנתה מתנה לאמה. המתנה עלתה 30 שקלים, וסכום זה היווה 15% מכל חסכונותיה. כמה כסף חסכה רונית בסך הכל?&rlm;",
        options: ["200 שקלים", "300 שקלים", "150 שקלים", "450 שקלים"],
        correctAnswer: 0,
        hint: "חילוק שלם לאחוז. משוואה: 0.15 * x = 30. חלקו 30 ב-0.15.&rlm;",
        solution_steps: [
            { verbal_explanation: "נסמן את סך כל החסכונות ב-x. ידוע ש-15% ממנו הם 30.&rlm;", math_expression: "0.15 × x = 30" },
            { verbal_explanation: "נמצא את x על ידי חלוקה.&rlm;", math_expression: "x = 30 : 0.15" },
            { verbal_explanation: "נרחיב פי 100 כדי לחלק בשלמים: 3000 חלקי 15.&rlm;", math_expression: "3000 : 15 = 200" }
        ],
        final_answer: "200 שקלים"
    },
    // שאלה 19
    {
        topic: "percents",
        subTopic: "מציאת השלם",
        question_text: "8% מחלקה חקלאית נמכרו לבנייה תמורת סכום מסוים. החלק שנמכר היה בשטח של 32 דונם. מהו גודלה של החלקה החקלאית כולה?&rlm;",
        options: ["400 דונם", "320 דונם", "800 דונם", "256 דונם"],
        correctAnswer: 0,
        hint: "אם 8% הם 32, כמה שווה 1%? (חלקו ב-8). ואז כפלו ב-100.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא שטח של אחוז אחד מהחלקה.&rlm;", math_expression: "32 : 8 = 4" },
            { verbal_explanation: "אחוז אחד שווה ל-4 דונמים. נכפול ב-100 כדי למצוא את החלקה כולה.&rlm;", math_expression: "4 × 100 = 400" }
        ],
        final_answer: "400 דונם"
    },
    // שאלה 20
    {
        topic: "percents",
        subTopic: "מציאת השלם",
        question_text: "בעקבות תקלה, נמחקו 20% מקבצי המחשב של גיא. ידוע שמספר הקבצים שנמחקו הוא 50. כמה קבצים היו לגיא לפני התקלה?&rlm;",
        options: ["250", "200", "500", "100"],
        correctAnswer: 0,
        hint: "20% (חמישית) מהקבצים הם 50. הכפילו ב-5 כדי למצוא את כל הקבצים.&rlm;",
        solution_steps: [
            { verbal_explanation: "20% מהווים חמישית (1/5) מהשלם.&rlm;", math_expression: "20% = 1/5" },
            { verbal_explanation: "נתון שחמישית שווה ל-50 קבצים. כדי למצוא את השלם נכפול ב-5.&rlm;", math_expression: "50 × 5 = 250" }
        ],
        final_answer: "250"
    },
    // שאלה 21
    {
        topic: "percents",
        subTopic: "מציאת השלם",
        question_text: "במועדון ספורט יש בנים ובנות. 30% מחברי המועדון הן בנות. אם ידוע שיש במועדון 15 בנות, כמה חברים בסך הכל יש במועדון (בנים ובנות יחד)?&rlm;",
        options: ["50", "45", "100", "30"],
        correctAnswer: 0,
        hint: "אם 30% שווים ל-15, חלקו ב-3 למצוא 10% (שזה 5). הכפילו ב-10 למצוא 100%.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחלק ב-3 כדי למצוא כמה הם 10% מכלל החברים.&rlm;", math_expression: "15 : 3 = 5" },
            { verbal_explanation: "שלב ב': 10% שווים ל-5 אנשים. כדי להגיע ל-100% נכפיל פי 10.&rlm;", math_expression: "5 × 10 = 50" }
        ],
        final_answer: "50"
    },
    // שאלה 22
    {
        topic: "percents",
        subTopic: "מציאת השלם",
        question_text: "2.5% מהכסף שבקופה הם 5 שקלים. כמה כסף יש בקופה כולה?&rlm;",
        options: ["200 שקלים", "100 שקלים", "250 שקלים", "50 שקלים"],
        correctAnswer: 0,
        hint: "כמה פעמים 2.5 נכנס ב-100? התשובה היא 40. הכפילו את 5 ב-40.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את הגורם שיביא אותנו מ-2.5% ל-100%. נכפיל קודם ב-4 כדי להגיע ל-10%.&rlm;", math_expression: "2.5% × 4 = 10%" },
            { verbal_explanation: "שלב ב': נכפיל את הערך הנתון באותו גורם.&rlm;", math_expression: "5 × 4 = 20" },
            { verbal_explanation: "שלב ג': עכשיו אנו יודעים ש-10% הם 20. נכפיל ב-10 למציאת השלם.&rlm;", math_expression: "20 × 10 = 200" }
        ],
        final_answer: "200 שקלים"
    },
    // שאלה 23
    {
        topic: "percents",
        subTopic: "מציאת השלם",
        question_text: "מחיר של מוצר עלה ב-10%, והמחיר לאחר ההתייקרות (110%) הוא 220 שקלים. מה היה מחירו המקורי של המוצר (ה-100%)?&rlm;",
        options: ["200 שקלים", "242 שקלים", "198 שקלים", "210 שקלים"],
        correctAnswer: 0,
        hint: "110% שווים 1.10. משוואה: 1.1 × x = 220. חלקו את 220 ב-1.1.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המחיר החדש מהווה 110% מהמחיר המקורי.&rlm;", math_expression: "110% × x = 220" },
            { verbal_explanation: "שלב ב': נמיר 110% לעשרוני (1.1).&rlm;", math_expression: "1.1 × x = 220" },
            { verbal_explanation: "שלב ג': נחלק כדי למצוא את המקור.&rlm;", math_expression: "x = 220 : 1.1 = 2200 : 11 = 200" }
        ],
        final_answer: "200 שקלים"
    },
    // שאלה 24
    {
        topic: "percents",
        subTopic: "מציאת השלם",
        question_text: "0.75% (שלושת רבעי האחוז) מתוך מספר הם 3. מהו המספר?&rlm;",
        options: ["400", "40", "300", "750"],
        correctAnswer: 0,
        hint: "אם 0.75% (שזה 3 רבעים של אחוז) שווים ל-3, אז רבע אחוז (0.25%) שווה ל-1, ואחוז שלם אחד (1%) שווה ל-4.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נתון ש- 0.75% מהווים 3.&rlm;", math_expression: "0.75% = 3" },
            { verbal_explanation: "שלב ב': נחלק ב-3 כדי למצוא כמה שווה רבע אחוז (0.25%).&rlm;", math_expression: "0.25% = 1" },
            { verbal_explanation: "שלב ג': נכפיל ב-4 כדי למצוא אחוז שלם אחד.&rlm;", math_expression: "1% = 4" },
            { verbal_explanation: "שלב ד': נכפיל ב-100 כדי למצוא את השלם כולו (100%).&rlm;", math_expression: "4 × 100 = 400" }
        ],
        final_answer: "400"
    },

    // ==========================================================
    // תת נושא 3: מציאת אחוז (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "percents",
        subTopic: "מציאת אחוז",
        question_text: "במבחן היו 40 שאלות. יעל פתרה נכון 10 שאלות. איזה אחוז מהמבחן היא פתרה נכון?&rlm;",
        options: ["25%", "10%", "40%", "20%"],
        correctAnswer: 0,
        hint: "צרו שבר שבו הכמות (10) היא במונה והשלם (40) הוא במכנה. צמצמו את השבר והפכו לאחוזים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את היחס בין התשובות הנכונות לסך כל השאלות כשבר.&rlm;", math_expression: "10/40" },
            { verbal_explanation: "שלב ב': נצמצם את השבר על ידי חלוקת המונה והמכנה ב-10.&rlm;", math_expression: "1/4" },
            { verbal_explanation: "שלב ג': אנו יודעים שהשבר 1/4 (רבע) שווה ל-25%.&rlm;", math_expression: "25%" }
        ],
        final_answer: "25%"
    },
    // שאלה 26
    {
        topic: "percents",
        subTopic: "מציאת אחוז",
        question_text: "קופסה מכילה 150 כדורים, מתוכם 30 כדורים אדומים. מהו אחוז הכדורים האדומים בקופסה?&rlm;",
        options: ["20%", "30%", "15%", "25%"],
        correctAnswer: 0,
        hint: "כתבו שבר: 30 מתוך 150. צמצמו ב-30 וקבלו חמישית (1/5).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את הכדורים האדומים מתוך השלם כשבר.&rlm;", math_expression: "30 / 150" },
            { verbal_explanation: "שלב ב': נצמצם את השבר המקסימלי האפשרי. נחלק גם את המונה וגם את המכנה ב-30.&rlm;", math_expression: "(30:30) / (150:30) = 1/5" },
            { verbal_explanation: "שלב ג': חמישית היא שוות ערך ל-20 עשיריות, או 20/100, שזה 20%.&rlm;", math_expression: "20%" }
        ],
        final_answer: "20%"
    },
    // שאלה 27
    {
        topic: "percents",
        subTopic: "מציאת אחוז",
        question_text: "איזה אחוז מייצג השבר 3/4?&rlm;",
        options: ["75%", "34%", "60%", "80%"],
        correctAnswer: 0,
        hint: "כדי להפוך שבר לאחוז, הרחיבו את המכנה שלו ל-100. הכפילו את 4 ב-25.&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי למצוא את האחוז, נרחיב את השבר כך שהמכנה יהיה 100.&rlm;", math_expression: "" },
            { verbal_explanation: "נכפול את המונה (3) והמכנה (4) פי 25.&rlm;", math_expression: "(3 × 25) / (4 × 25) = 75/100" },
            { verbal_explanation: "75 חלקי מאה הם 75 אחוזים.&rlm;", math_expression: "75%" }
        ],
        final_answer: "75%"
    },
    // שאלה 28
    {
        topic: "percents",
        subTopic: "מציאת אחוז",
        question_text: "45 מתוך 50 זה כמה באחוזים?&rlm;",
        options: ["90%", "45%", "80%", "95%"],
        correctAnswer: 0,
        hint: "כתבו 45/50. הרחיבו את המכנה ל-100 על ידי כפל ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכתוב את היחס כשבר.&rlm;", math_expression: "45 / 50" },
            { verbal_explanation: "שלב ב': נרחיב את המכנה ל-100. כיוון ש-50 כפול 2 הם 100, נכפול גם את המונה ב-2.&rlm;", math_expression: "(45 × 2) / (50 × 2) = 90 / 100" },
            { verbal_explanation: "שלב ג': התוצאה היא 90 מאיות, כלומר 90%.&rlm;", math_expression: "90%" }
        ],
        final_answer: "90%"
    },
    // שאלה 29
    {
        topic: "percents",
        subTopic: "מציאת אחוז",
        question_text: "היו 60 תלמידים בשכבה. 12 מתוכם מנגנים בפסנתר. איזה אחוז מהשכבה מנגן בפסנתר?&rlm;",
        options: ["20%", "12%", "25%", "15%"],
        correctAnswer: 0,
        hint: "צמצמו את השבר 12/60. נסו לחלק את שני המספרים ב-12.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום כשבר: 12 חלקי 60.&rlm;", math_expression: "12 / 60" },
            { verbal_explanation: "נצמצם את השבר על ידי חלוקה ב-12.&rlm;", math_expression: "1 / 5" },
            { verbal_explanation: "השבר 1/5 (חמישית) שווה ל-20/100, שהם 20 אחוז.&rlm;", math_expression: "20%" }
        ],
        final_answer: "20%"
    },
    // שאלה 30
    {
        topic: "percents",
        subTopic: "מציאת אחוז",
        question_text: "בכיתה יש 32 תלמידים. ביום גשום אחד, 8 תלמידים נעדרו. איזה אחוז מהתלמידים נעדר באותו יום?&rlm;",
        options: ["25%", "8%", "32%", "20%"],
        correctAnswer: 0,
        hint: "כתבו 8 חלקי 32. צמצמו את השבר ב-8.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את היחס בין הנעדרים לסך הכל הכיתה.&rlm;", math_expression: "8 / 32" },
            { verbal_explanation: "שלב ב': נצמצם את השבר (8 נכנס ב-32 בדיוק 4 פעמים).&rlm;", math_expression: "1 / 4" },
            { verbal_explanation: "שלב ג': השבר רבע שווה ל-25%.&rlm;", math_expression: "25%" }
        ],
        final_answer: "25%"
    },
    // שאלה 31
    {
        topic: "percents",
        subTopic: "מציאת אחוז",
        question_text: "שחקן קלע 24 סלים מתוך 30 נסיונות. מהו אחוז הקליעה שלו?&rlm;",
        options: ["80%", "75%", "24%", "90%"],
        correctAnswer: 0,
        hint: "כתבו 24/30. אפשר לצמצם ב-3 כדי לקבל מכנה 10, ולאחר מכן להכפיל ב-10.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': היחס הוא 24 מתוך 30.&rlm;", math_expression: "24 / 30" },
            { verbal_explanation: "שלב ב': נצמצם ב-3 כדי להגיע למכנה 10 שיהיה קל יותר.&rlm;", math_expression: "8 / 10" },
            { verbal_explanation: "שלב ג': שמונה עשיריות הן 80 מאיות, כלומר 80%.&rlm;", math_expression: "80%" }
        ],
        final_answer: "80%"
    },
    // שאלה 32
    {
        topic: "percents",
        subTopic: "מציאת אחוז",
        question_text: "קבוצת תיירים תכננה ללכת מסלול של 10 ק\"מ, אך הם התלהבו והלכו 15 ק\"מ. איזה אחוז מהמסלול המקורי הם הלכו?&rlm;",
        options: ["150%", "50%", "15%", "120%"],
        correctAnswer: 0,
        hint: "השלם המקורי (הבסיס לחישוב) הוא 10. הכמות בפועל היא 15. חלקו 15 ב-10.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את היחס כאשר המסלול המתוכנן (10) הוא במכנה.&rlm;", math_expression: "15 / 10" },
            { verbal_explanation: "שלב ב': נמיר את השבר המדומה לאחוזים. כדי שהמכנה יהיה 100, נכפיל את המונה והמכנה ב-10.&rlm;", math_expression: "(15 × 10) / (10 × 10) = 150 / 100" },
            { verbal_explanation: "שלב ג': השבר 150/100 הוא בדיוק 150%.&rlm;", math_expression: "150%" }
        ],
        final_answer: "150%"
    },
    // שאלה 33
    {
        topic: "percents",
        subTopic: "מציאת אחוז",
        question_text: "מהו האחוז השווה לשבר 1/8?&rlm;",
        options: ["12.5%", "18%", "8%", "1.8%"],
        correctAnswer: 0,
        hint: "זכרו שרבע (1/4) הוא 25%. שמינית היא חצי מרבע.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נזכור שהשבר 1/4 שווה ל-25%.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': השבר 1/8 הוא בדיוק חצי מהשבר 1/4.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': חצי מ-25% הוא 12.5%.&rlm;", math_expression: "25 : 2 = 12.5" }
        ],
        final_answer: "12.5%"
    },
    // שאלה 34
    {
        topic: "percents",
        subTopic: "מציאת אחוז",
        question_text: "במתכון לעוגה כתוב שיש לשים חצי כוס סוכר (0.5 כוסות) על כל 2 כוסות קמח. איזה אחוז מהווה כמות הסוכר מתוך כמות הקמח?&rlm;",
        options: ["25%", "50%", "5%", "20%"],
        correctAnswer: 0,
        hint: "כתבו שבר: 0.5 (מונה) חלקי 2 (מכנה). הכפילו את המונה והמכנה ב-50 כדי לקבל מכנה 100.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכתוב את היחס בין הסוכר לקמח.&rlm;", math_expression: "0.5 / 2" },
            { verbal_explanation: "נרחיב את השבר פי 50 כדי להגיע למכנה של 100.&rlm;", math_expression: "(0.5 × 50) / (2 × 50)" },
            { verbal_explanation: "חצי מ-50 הוא 25. קיבלנו 25 מאיות.&rlm;", math_expression: "25 / 100 = 25%" }
        ],
        final_answer: "25%"
    },
    // שאלה 35
    {
        topic: "percents",
        subTopic: "מציאת אחוז",
        question_text: "מתוך 700 תלמידים בבית הספר, 35 הגיעו לבית הספר רכובים על אופניים. איזה אחוז מהתלמידים הם אלו?&rlm;",
        options: ["5%", "35%", "20%", "0.5%"],
        correctAnswer: 0,
        hint: "היחס הוא 35/700. חלקו את המונה והמכנה ב-7 כדי לקבל מכנה של 100.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום את הנתונים בשבר: החלק חלקי השלם.&rlm;", math_expression: "35 / 700" },
            { verbal_explanation: "כדי להגיע לאחוז, נרצה מכנה של 100. נצמצם את השבר על ידי חלוקה ב-7.&rlm;", math_expression: "(35 : 7) / (700 : 7) = 5 / 100" },
            { verbal_explanation: "התוצאה היא 5 מאיות.&rlm;", math_expression: "5%" }
        ],
        final_answer: "5%"
    },
    // שאלה 36
    {
        topic: "percents",
        subTopic: "מציאת אחוז",
        question_text: "איזה אחוז מייצג השבר 9/12?&rlm;",
        options: ["75%", "90%", "60%", "12%"],
        correctAnswer: 0,
        hint: "לפני שאתם מנסים להרחיב למאה, נסו לצמצם את השבר! חלקו ב-3 גם במונה וגם במכנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נצמצם את השבר 9/12 על ידי חלוקה של המונה והמכנה ב-3.&rlm;", math_expression: "(9 : 3) / (12 : 3) = 3/4" },
            { verbal_explanation: "שלב ב': השבר המצומצם הוא שלושה רבעים.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': אנו זוכרים ששלושה רבעים שווים ל-75%.&rlm;", math_expression: "75%" }
        ],
        final_answer: "75%"
    },

    // ==========================================================
    // תת נושא 4: בעיות התייקרות והוזלה (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "percents",
        subTopic: "בעיות התייקרות והוזלה",
        question_text: "חולצה עולה 120 שקלים. בסוף העונה ניתנת עליה הנחה של 25%. מה מחיר החולצה לאחר ההנחה?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 80' width='80' height='80'><path d='M 20,20 L 40,10 L 60,10 L 80,20 L 70,80 L 30,80 Z' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='50' y='50' font-family='Arial' font-size='16' font-weight='bold' fill='#fff' text-anchor='middle'>-25%</text></svg></div>",
        options: ["90 שקלים", "30 שקלים", "100 שקלים", "85 שקלים"],
        correctAnswer: 0,
        hint: "חשבו את גובה ההנחה (רבע מתוך 120), וחסרו אותו מהמחיר המקורי.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': ההנחה היא של 25%, שזה בדיוק רבע (1/4). נחשב רבע מ-120 כדי לגלות כמה כסף נחסוך.&rlm;", math_expression: "120 : 4 = 30" },
            { verbal_explanation: "שלב ב': ההנחה היא של 30 שקלים. נחסר סכום זה מהמחיר ההתחלתי.&rlm;", math_expression: "120 - 30 = 90" }
        ],
        final_answer: "90 שקלים"
    },
    // שאלה 38
    {
        topic: "percents",
        subTopic: "בעיות התייקרות והוזלה",
        question_text: "מחירו של שולחן היה 80 שקלים. עקב עלייה בעלות העץ, המחיר התייקר ב-15%. מהו מחירו החדש של השולחן?&rlm;",
        options: ["92 שקלים", "12 שקלים", "95 שקלים", "88 שקלים"],
        correctAnswer: 0,
        hint: "חשבו קודם 10% (8 שקלים) ואז 5% (חצי מזה, 4 שקלים). חברו הכל יחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סכום ההתייקרות. נמצא 10% מ-80 על ידי חלוקה ב-10.&rlm;", math_expression: "80 : 10 = 8" },
            { verbal_explanation: "שלב ב': 5% הם חצי מ-10%. לכן 5% הם 4 שקלים. יחד, 15% התייקרות שווים ל-12 שקלים.&rlm;", math_expression: "8 + 4 = 12" },
            { verbal_explanation: "שלב ג': נוסיף את ההתייקרות למחיר המקורי.&rlm;", math_expression: "80 + 12 = 92" }
        ],
        final_answer: "92 שקלים"
    },
    // שאלה 39
    {
        topic: "percents",
        subTopic: "בעיות התייקרות והוזלה",
        question_text: "חנות אלקטרוניקה הכריזה על הוזלה של 30% על כל האוזניות. אלעד קנה אוזניות לאחר ההנחה, ושילם עליהן 70 שקלים. מה היה המחיר המקורי לפני ההנחה?&rlm;",
        options: ["100 שקלים", "130 שקלים", "91 שקלים", "200 שקלים"],
        correctAnswer: 0,
        hint: "אם ניתנה הנחה של 30%, אלעד שילם 70% מהמחיר המקורי. משוואה: 0.70x = 70.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המחיר המקורי הוא 100%. ההנחה היא 30%. לכן המחיר ששולם מהווה 70% מהמחיר המקורי.&rlm;", math_expression: "100% - 30% = 70%" },
            { verbal_explanation: "שלב ב': ה-70% האלו שווים ל-70 שקלים בפועל. נבנה משוואה.&rlm;", math_expression: "0.7 × x = 70" },
            { verbal_explanation: "שלב ג': נחלק 70 ב-0.7.&rlm;", math_expression: "x = 70 : 0.7 = 100" }
        ],
        final_answer: "100 שקלים"
    },
    // שאלה 40
    {
        topic: "percents",
        subTopic: "בעיות התייקרות והוזלה",
        question_text: "בעקבות חג, העלו את מחירו של מוצר ב-20%, ומחירו החדש עמד על 600 שקלים. מה היה מחירו המקורי?&rlm;",
        options: ["500 שקלים", "480 שקלים", "580 שקלים", "720 שקלים"],
        correctAnswer: 0,
        hint: "המחיר החדש (600) מהווה 120% מהמחיר המקורי. חלקו 600 ב-1.2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המחיר לאחר ההתייקרות מהווה 120% (100% + 20%) מהמקור.&rlm;", math_expression: "120% × x = 600" },
            { verbal_explanation: "שלב ב': נחלק את המחיר החדש (600) ב-120 כדי למצוא כמה שווה אחוז אחד (1%).&rlm;", math_expression: "600 : 120 = 5" },
            { verbal_explanation: "שלב ג': אחוז אחד הוא 5. נכפיל ב-100 כדי למצוא את המחיר המקורי.&rlm;", math_expression: "5 × 100 = 500" }
        ],
        final_answer: "500 שקלים"
    },
    // שאלה 41
    {
        topic: "percents",
        subTopic: "בעיות התייקרות והוזלה",
        question_text: "מחירו המקורי של ספר היה 50 שקלים. כעת הוא נמכר במבצע ב-40 שקלים. מהו אחוז ההנחה שניתן על הספר?&rlm;",
        options: ["20%", "10%", "25%", "80%"],
        correctAnswer: 0,
        hint: "קודם כל חשבו בכמה שקלים ירד המחיר (10 שקלים). לאחר מכן, בידקו איזה חלק מהווה הירידה (10) מתוך המחיר *המקורי* (50).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סכום ההנחה בשקלים.&rlm;", math_expression: "50 - 40 = 10" },
            { verbal_explanation: "שלב ב': נחשב את אחוז ההנחה על ידי בניית השבר: סכום ההנחה חלקי המחיר המקורי.&rlm;", math_expression: "10 / 50" },
            { verbal_explanation: "שלב ג': נרחיב את השבר למאה (נכפיל פי 2). 20 חלקי 100 שווים ל-20%.&rlm;", math_expression: "(10 × 2) / (50 × 2) = 20 / 100 = 20%" }
        ],
        final_answer: "20%"
    },
    // שאלה 42
    {
        topic: "percents",
        subTopic: "בעיות התייקרות והוזלה",
        question_text: "מחיר של זוג אופניים היה 200 שקלים והתייקר ל-250 שקלים. מהו אחוז ההתייקרות?&rlm;",
        options: ["25%", "50%", "20%", "125%"],
        correctAnswer: 0,
        hint: "חשבו את ההפרש במחיר (50). איזה אחוז זה מתוך מחיר הבסיס (200)?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את ההתייקרות בשקלים.&rlm;", math_expression: "250 - 200 = 50" },
            { verbal_explanation: "שלב ב': נבנה שבר שמייצג את היחס בין ההתייקרות למחיר ההתחלתי.&rlm;", math_expression: "50 / 200" },
            { verbal_explanation: "שלב ג': נצמצם את השבר על ידי חלוקה ב-2 (כדי להגיע למכנה 100).&rlm;", math_expression: "25 / 100 = 25%" }
        ],
        final_answer: "25%"
    },
    // שאלה 43
    {
        topic: "percents",
        subTopic: "בעיות התייקרות והוזלה",
        question_text: "מחירו המקורי של מוצר הוא x. אם ניתנה עליו הנחה של 10%, איזה ביטוי אלגברי יתאר את מחירו החדש?&rlm;",
        options: ["0.9x", "0.1x", "x - 10", "1.1x"],
        correctAnswer: 0,
        hint: "המחיר המקורי הוא השלם (1x או 100%). אם הורדנו 10%, נשארו 90% מהמחיר המקורי.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המחיר המקורי שווה ל-100% של x.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': הורדנו ממנו 10%, ולכן נשארנו עם 90% מ-x.&rlm;", math_expression: "100% - 10% = 90%" },
            { verbal_explanation: "שלב ג': 90% כשבר עשרוני נכתבים כ-0.90 (או פשוט 0.9). נכפול את זה ב-x.&rlm;", math_expression: "0.9x" }
        ],
        final_answer: "0.9x"
    },
    // שאלה 44
    {
        topic: "percents",
        subTopic: "בעיות התייקרות והוזלה",
        question_text: "מכונת כביסה עולה 400 שקלים. כעת יש עליה מבצע של 20% הנחה. כמה שקלים *תחסכו* אם תקנו את המכונה במבצע? (מהו סכום ההנחה עצמה?)&rlm;",
        options: ["80 שקלים", "320 שקלים", "20 שקלים", "100 שקלים"],
        correctAnswer: 0,
        hint: "השאלה מבקשת לדעת רק כמה כסף נחסך, כלומר לחשב את סכום ההנחה (20% מ-400), ולא את המחיר הסופי.&rlm;",
        solution_steps: [
            { verbal_explanation: "אנו נדרשים לחשב רק את סכום ההנחה. 20% הם 20/100 שזה שווה לחמישית (1/5).&rlm;", math_expression: "20% = 1/5" },
            { verbal_explanation: "נחשב חמישית מתוך 400.&rlm;", math_expression: "400 : 5 = 80" }
        ],
        final_answer: "80 שקלים"
    },
    // שאלה 45
    {
        topic: "percents",
        subTopic: "בעיות התייקרות והוזלה",
        question_text: "בעקבות חג, מחירו של מוצר מסוים עלה ב-5%. סכום ההתייקרות (בכמה שקלים עלה המחיר) היה בדיוק 10 שקלים. מה היה מחירו ההתחלתי של המוצר?&rlm;",
        options: ["200 שקלים", "150 שקלים", "105 שקלים", "50 שקלים"],
        correctAnswer: 0,
        hint: "אם 5% שווים ל-10 שקלים, כמה שווים 100%? הכפילו ב-20.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נתון ש-5% מתוך המחיר הם 10 שקלים.&rlm;", math_expression: "5% = 10" },
            { verbal_explanation: "שלב ב': נכפיל את המשוואה ב-2 כדי להגיע ל-10%. 10% שווים 20.&rlm;", math_expression: "10% = 20" },
            { verbal_explanation: "שלב ג': נכפיל ב-10 כדי להגיע ל-100% (המחיר המלא).&rlm;", math_expression: "20 × 10 = 200" }
        ],
        final_answer: "200 שקלים"
    },
    // שאלה 46
    {
        topic: "percents",
        subTopic: "בעיות התייקרות והוזלה",
        question_text: "מחיר המחירון של סמארטפון הוא 350 שקלים. לכבוד שבוע הקניות הוא נמכר בהנחה ענקית של 40%. כמה יעלה הסמארטפון?&rlm;",
        options: ["210 שקלים", "140 שקלים", "310 שקלים", "250 שקלים"],
        correctAnswer: 0,
        hint: "אם ההנחה היא 40%, נשאר לשלם 60%. חשבו כמה זה 60% מתוך 350.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב איזה אחוז נשאר לשלם. 100% פחות 40% שווה ל-60%.&rlm;", math_expression: "100% - 40% = 60%" },
            { verbal_explanation: "שלב ב': נמצא 10% מ-350 על ידי חלוקה ב-10.&rlm;", math_expression: "350 : 10 = 35" },
            { verbal_explanation: "שלב ג': נכפול את ה-10% (35) פי 6 כדי לקבל את 60%.&rlm;", math_expression: "35 × 6 = 210" }
        ],
        final_answer: "210 שקלים"
    },
    // שאלה 47
    {
        topic: "percents",
        subTopic: "בעיות התייקרות והוזלה",
        question_text: "דן שילם 150 שקלים על משחק מחשב, לאחר שקיבל עליו הנחה של 25%. מה היה המחיר לפני ההנחה?&rlm;",
        options: ["200 שקלים", "187.5 שקלים", "225 שקלים", "175 שקלים"],
        correctAnswer: 0,
        hint: "דן שילם 75% מהמחיר המקורי (שזה 3 רבעים). אם 3 רבעים הם 150, כמה זה רבע אחד? וכמה זה השלם?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': לאחר הנחה של 25% (רבע), המחיר ששולם מהווה 75% (שלושה רבעים).&rlm;", math_expression: "75% = 3/4" },
            { verbal_explanation: "שלב ב': נתון ששלושה רבעים שווים 150. נחלק ב-3 למציאת רבע אחד.&rlm;", math_expression: "150 : 3 = 50" },
            { verbal_explanation: "שלב ג': רבע מהמחיר הוא 50. המחיר השלם (4 רבעים) יחושב על ידי הכפלה ב-4.&rlm;", math_expression: "50 × 4 = 200" }
        ],
        final_answer: "200 שקלים"
    },
    // שאלה 48
    {
        topic: "percents",
        subTopic: "בעיות התייקרות והוזלה",
        question_text: "מחירו של פריט עלה מ-120 שקלים ל-150 שקלים. באיזה אחוז התייקר הפריט?&rlm;",
        options: ["25%", "30%", "20%", "15%"],
        correctAnswer: 0,
        hint: "חישבו את ההפרש בכסף (30 שקלים). איזה חלק ה-30 מהווים מתוך המחיר המקורי (120)?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סכום ההתייקרות בכסף.&rlm;", math_expression: "150 - 120 = 30" },
            { verbal_explanation: "שלב ב': נבנה שבר: ההתייקרות (30) חלקי המחיר המקורי (120).&rlm;", math_expression: "30 / 120" },
            { verbal_explanation: "שלב ג': נצמצם את השבר. 30 נכנס ב-120 בדיוק 4 פעמים. קיבלנו רבע.&rlm;", math_expression: "1 / 4" },
            { verbal_explanation: "שלב ד': השבר רבע שווה ל-25%.&rlm;", math_expression: "25%" }
        ],
        final_answer: "25%"
    },

    // ==========================================================
    // תת נושא 5: בעיות אחוזים מורכבות (12 שאלות)
    // ==========================================================
    
    // שאלה 49
    {
        topic: "percents",
        subTopic: "בעיות אחוזים מורכבות",
        question_text: "מחירו של מוצר עלה ב-10%. לאחר מכן (על המחיר החדש), מחירו ירד ב-10%. מה ניתן לומר על מחירו הסופי של המוצר בהשוואה למחירו המקורי?&rlm;",
        options: ["מחירו הסופי נמוך ממחירו המקורי (ב-1%)", "מחירו הסופי חזר להיות בדיוק מחירו המקורי", "מחירו הסופי גבוה ממחירו המקורי", "אי אפשר לדעת ללא המחיר"],
        correctAnswer: 0,
        hint: "נסו להציב מספר! נניח שהמוצר עלה 100 שקלים. עלה ב-10% (הפך ל-110). עכשיו הורידו ממנו 10% (שהם 11 שקלים). כמה נשאר?&rlm;",
        solution_steps: [
            { verbal_explanation: "נניח שמחיר המוצר ההתחלתי הוא 100 שקלים.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב א': עלייה של 10%. 10% מ-100 זה 10. המחיר החדש הוא 110.&rlm;", math_expression: "100 + 10 = 110" },
            { verbal_explanation: "שלב ב': ירידה של 10% מהמחיר *החדש*. 10% מ-110 זה 11 שקלים.&rlm;", math_expression: "110 : 10 = 11" },
            { verbal_explanation: "שלב ג': נחסר את ה-11 מה-110. המחיר הסופי הוא 99, שהוא נמוך מה-100 המקורי.&rlm;", math_expression: "110 - 11 = 99" }
        ],
        final_answer: "מחירו הסופי נמוך ממחירו המקורי (ב-1%)"
    },
    // שאלה 50
    {
        topic: "percents",
        subTopic: "בעיות אחוזים מורכבות",
        question_text: "מחיר זוג נעליים עבר שתי הוזלות רצופות: תחילה הוזל ב-20%, ולאחר מכן במבצע סוף עונה הוזל בעוד 20% מהמחיר החדש. האם שתי ההוזלות יחד שקולות להנחה אחת של 40%?&rlm;",
        options: ["לא, ההנחה הכוללת קטנה מ-40% (היא 36%)", "כן, זה בדיוק 40%", "לא, ההנחה הכוללת גדולה מ-40%", "תלוי במחיר המקורי"],
        correctAnswer: 0,
        hint: "הציבו מחיר דמיוני של 100. אחרי 20% הנחה המחיר 80. ההנחה השנייה מחושבת מתוך 80 ולא מתוך 100!&rlm;",
        solution_steps: [
            { verbal_explanation: "נניח מחיר מקורי של 100 שקלים.&rlm;", math_expression: "" },
            { verbal_explanation: "הנחה ראשונה של 20% חוסכת 20 שקלים, המחיר יורד ל-80.&rlm;", math_expression: "100 - 20 = 80" },
            { verbal_explanation: "הנחה שנייה של 20% מחושבת מתוך 80. 10% זה 8, לכן 20% הם 16. נחסר.&rlm;", math_expression: "80 - 16 = 64" },
            { verbal_explanation: "המחיר הסופי הוא 64. כלומר חסכנו 36 שקלים, שהם 36% הנחה ולא 40%.&rlm;", math_expression: "" }
        ],
        final_answer: "לא, ההנחה הכוללת קטנה מ-40% (היא 36%)"
    },
    // שאלה 51
    {
        topic: "percents",
        subTopic: "בעיות אחוזים מורכבות",
        question_text: "משכורתה של אביב גבוהה ב-20% ממשכורתה של מיכל. משכורתה של מיכל נמוכה ב-20% ממשכורתו של גיא. גיא מרוויח 10,000 שקלים. כמה מרוויחה אביב?&rlm;",
        options: ["9,600 שקלים", "10,000 שקלים", "10,400 שקלים", "8,000 שקלים"],
        correctAnswer: 0,
        hint: "לכו אחורה: חשבו קודם את המשכורת של מיכל (20% פחות מגיא). רק לאחר מכן חשבו את של אביב (20% יותר ממיכל).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב משכורת מיכל. פחות 20% מ-10,000. 10% זה 1,000, 20% זה 2,000.&rlm;", math_expression: "10000 - 2000 = 8000" },
            { verbal_explanation: "שלב ב': נחשב משכורת אביב. גדולה ב-20% ממיכל. נחשב 20% מ-8,000.&rlm;", math_expression: "8000 : 10 = 800  =>  800 × 2 = 1600" },
            { verbal_explanation: "שלב ג': נוסיף לאביב את ההפרש הזה.&rlm;", math_expression: "8000 + 1600 = 9600" }
        ],
        final_answer: "9,600 שקלים"
    },
    // שאלה 52
    {
        topic: "percents",
        subTopic: "בעיות אחוזים מורכבות",
        question_text: "חנות מציעה 30% הנחה על מחשב. על המחיר המופחת יש להוסיף מע\"מ בשיעור של 17%. אם מחירו ההתחלתי של המחשב (ללא הנחה וללא מע\"מ) היה x, איזה ביטוי מתאר את המחיר הסופי בקופה?&rlm;",
        options: ["0.70x × 1.17", "x - 0.30x + 0.17x", "x × 0.87", "1.17x - 0.30x"],
        correctAnswer: 0,
        hint: "ההנחה משאירה אותנו עם 70% מהמחיר המקורי (0.7x). את המחיר *הזה* כופלים ב-1.17 (תוספת 17%).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': אחרי הנחה של 30%, המחיר הוא 70% מ-x, כלומר 0.7x.&rlm;", math_expression: "0.7x" },
            { verbal_explanation: "שלב ב': הוספת 17% מע\"מ שקולה לכפל המחיר *הנוכחי* ב-1.17 (117%).&rlm;", math_expression: "" },
            { verbal_explanation: "לכן הביטוי הוא כפל של המקדמים ב-x.&rlm;", math_expression: "0.7x × 1.17" }
        ],
        final_answer: "0.70x × 1.17"
    },
    // שאלה 53
    {
        topic: "percents",
        subTopic: "בעיות אחוזים מורכבות",
        question_text: "להגדיל מספר ב-25% זה בדיוק כמו להכפיל אותו ב...&rlm;",
        options: ["1.25", "1/4", "0.25", "1.75"],
        correctAnswer: 0,
        hint: "100% זה השלם. הוספת 25% מעלה אותנו ל-125% מהמקור.&rlm;",
        solution_steps: [
            { verbal_explanation: "המספר המקורי מהווה 100%.&rlm;", math_expression: "" },
            { verbal_explanation: "אחרי הגדלה של 25%, הגענו ל-125% מהמספר המקורי.&rlm;", math_expression: "100% + 25% = 125%" },
            { verbal_explanation: "המרת אחוז (125) לשבר עשרוני נעשית על ידי חלוקה ב-100, כלומר 1.25.&rlm;", math_expression: "125 / 100 = 1.25" }
        ],
        final_answer: "1.25"
    },
    // שאלה 54
    {
        topic: "percents",
        subTopic: "בעיות אחוזים מורכבות",
        question_text: "אורכו של מלבן הוגדל ב-10%, ורוחבו הוקטן ב-10%. מה קרה לשטח המלבן בהשוואה לשטח המקורי?&rlm;",
        options: ["קטן ב-1%", "נשאר זהה", "גדל ב-1%", "אי אפשר לדעת בלי נתונים"],
        correctAnswer: 0,
        hint: "זהו 'כלל ה-10 ו-10'. הציבו מלבן שמידותיו 10x10 (שטח 100). אורך הוגדל ל-11, רוחב הוקטן ל-9. מה השטח כעת?&rlm;",
        solution_steps: [
            { verbal_explanation: "נניח מלבן שמידותיו 10 ו-10. שטחו המקורי הוא 100.&rlm;", math_expression: "10 × 10 = 100" },
            { verbal_explanation: "האורך הוגדל ב-10% מ-10, כלומר גדל ב-1 והפך ל-11.&rlm;", math_expression: "10 + 1 = 11" },
            { verbal_explanation: "הרוחב הוקטן ב-10%, הפך ל-9.&rlm;", math_expression: "10 - 1 = 9" },
            { verbal_explanation: "השטח החדש הוא 99, שהוא קטן באחוז 1 בדיוק מ-100.&rlm;", math_expression: "11 × 9 = 99" }
        ],
        final_answer: "קטן ב-1%"
    },
    // שאלה 55
    {
        topic: "percents",
        subTopic: "בעיות אחוזים מורכבות",
        question_text: "בעיית תערובת: ערבבו 200 מ\"ל חלב שיש בו 5% שומן, יחד עם 300 מ\"ל חלב שיש בו 10% שומן. מהי כמות השומן (במ\"ל) בתערובת הכוללת?&rlm;",
        options: ["40 מ\"ל", "30 מ\"ל", "50 מ\"ל", "20 מ\"ל"],
        correctAnswer: 0,
        hint: "חשבו במדויק כמה מ\"ל שומן יש בנוזל הראשון, כמה יש בשני, ופשוט חברו אותם.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב שומן בחלב הראשון (5% מ-200).&rlm;", math_expression: "200 : 100 × 5 = 10" },
            { verbal_explanation: "שלב ב': חישוב שומן בחלב השני (10% מ-300).&rlm;", math_expression: "300 : 10 = 30" },
            { verbal_explanation: "שלב ג': חיבור כמויות השומן יחד.&rlm;", math_expression: "10 + 30 = 40" }
        ],
        final_answer: "40 מ\"ל"
    },
    // שאלה 56
    {
        topic: "percents",
        subTopic: "בעיות אחוזים מורכבות",
        question_text: "ריבית: דני הפקיד 1,000 שקלים בתכנית חיסכון הנושאת ריבית קבועה של 5% בכל שנה. כמה כסף (קרן + ריבית) יהיה לו לאחר שנתיים? (הריבית בכל שנה מחושבת על הסכום ההתחלתי בלבד - ריבית פשוטה).&rlm;",
        options: ["1,100 שקלים", "1,050 שקלים", "1,150 שקלים", "1,000 שקלים"],
        correctAnswer: 0,
        hint: "מכיוון שזו ריבית פשוטה, הוא מקבל 5% מה-1,000 שקלים כל שנה מחדש.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את הריבית השנתית. 5% מ-1000 שקלים.&rlm;", math_expression: "1000 : 100 × 5 = 50" },
            { verbal_explanation: "שלב ב': בגלל שזו ריבית פשוטה, הוא מקבל 50 שקלים על השנה הראשונה ועוד 50 שקלים על השנה השנייה.&rlm;", math_expression: "50 × 2 = 100" },
            { verbal_explanation: "שלב ג': נחבר את הריבית לקרן ההתחלתית.&rlm;", math_expression: "1000 + 100 = 1100" }
        ],
        final_answer: "1,100 שקלים"
    },
    // שאלה 57
    {
        topic: "percents",
        subTopic: "בעיות אחוזים מורכבות",
        question_text: "מחיר של אוזניות התייקר ב-25%. כעת החנות רוצה להחזיר את המחיר בדיוק למחירו המקורי. באיזה אחוז עליה להוריד את המחיר החדש?&rlm;",
        options: ["20%", "25%", "15%", "30%"],
        correctAnswer: 0,
        hint: "שימו לב: להוריד משהו חזרה זה לא באותו אחוז! נסו עם מחיר 100. התייקר ל-125. עכשיו צריך להוריד 25 מתוך 125.&rlm;",
        solution_steps: [
            { verbal_explanation: "נניח שהמחיר היה 100 שקלים. התייקר ב-25% והפך ל-125 שקלים.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי לחזור ל-100, עלינו להוריד 25 שקלים. אבל מתוך איזה שלם? מתוך השלם החדש שהוא 125.&rlm;", math_expression: "25 / 125" },
            { verbal_explanation: "השבר 25/125 מצטמצם ל-1/5 (חמישית). וחמישית שווה ל-20%.&rlm;", math_expression: "1/5 = 20%" }
        ],
        final_answer: "20%"
    },
    // שאלה 58
    {
        topic: "percents",
        subTopic: "בעיות אחוזים מורכבות",
        question_text: "15% ממספר A שווים בדיוק ל-20% ממספר B. מה ניתן לומר על היחס שבין המספרים?&rlm;",
        options: ["מספר A גדול ממספר B", "מספר B גדול ממספר A", "המספרים שווים", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "אם חלק קטן יותר (15%) ממספר אחד שווה לחלק גדול יותר (20%) ממספר שני, סימן שהמספר הראשון חייב להיות גדול יותר כדי לפצות על כך.&rlm;",
        solution_steps: [
            { verbal_explanation: "המשוואה הנתונה היא: 0.15 × A = 0.20 × B.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי שהשוויון יתקיים, מאחר שהמקדם של A קטן מהמקדם של B (0.15 לעומת 0.20), הרי ש-A עצמו חייב להיות גדול מ-B.&rlm;", math_expression: "A > B" },
            { verbal_explanation: "לדוגמה, אם B=75, אז 20% ממנו זה 15. כדי ש-15 יהיו 15% מ-A, הרי ש-A שווה 100.&rlm;", math_expression: "" }
        ],
        final_answer: "מספר A גדול ממספר B"
    },
    // שאלה 59
    {
        topic: "percents",
        subTopic: "בעיות אחוזים מורכבות",
        question_text: "מחירו של מחשב ירד ב-20%. כדי שהמחיר יחזור למחירו המקורי, בכמה אחוזים יש להעלות את המחיר החדש?&rlm;",
        options: ["25%", "20%", "40%", "15%"],
        correctAnswer: 0,
        hint: "הציבו מחיר 100. אחרי ההורדה המחיר הוא 80. צריך להוסיף 20. איזה אחוז הם 20 מתוך 80?&rlm;",
        solution_steps: [
            { verbal_explanation: "נניח מחיר 100. ירידה של 20% מביאה אותנו ל-80 שקלים.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי לחזור ל-100, עלינו להוסיף 20 שקלים.&rlm;", math_expression: "100 - 80 = 20" },
            { verbal_explanation: "התוספת של ה-20 שקלים מחושבת מהמחיר הנוכחי (השלם החדש שהוא 80). נרכיב שבר.&rlm;", math_expression: "20 / 80 = 1 / 4" },
            { verbal_explanation: "השבר רבע שווה ל-25%.&rlm;", math_expression: "25%" }
        ],
        final_answer: "25%"
    },
    // שאלה 60
    {
        topic: "percents",
        subTopic: "בעיות אחוזים מורכבות",
        question_text: "שיר מקבלת משכורת של 8,000 שקלים. היא מקדישה 10% משכרה לחיסכון. לאחר מכן, היא מקדישה 20% **ממה שנותר** להוצאות דלק ורכב. כמה כסף נשאר לה אחרי שתי ההפרשות הללו?&rlm;",
        options: ["5,760 שקלים", "5,600 שקלים", "6,000 שקלים", "6,400 שקלים"],
        correctAnswer: 0,
        hint: "קודם הורידו 10% מ-8000. מצאו את הסכום הנותר (7200). כעת הורידו 20% מתוך ה-7200.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב החיסכון. 10% מ-8000 הם 800 שקלים. לכן נותרו לה 7200.&rlm;", math_expression: "8000 - 800 = 7200" },
            { verbal_explanation: "שלב ב': חישוב הוצאות דלק. 20% *מתוך היתרה* (7200). 10% זה 720, אז 20% זה 1440.&rlm;", math_expression: "7200 : 10 × 2 = 1440" },
            { verbal_explanation: "שלב ג': נחסר את ההוצאה מהיתרה כדי למצוא כמה נשאר בסוף.&rlm;", math_expression: "7200 - 1440 = 5760" }
        ],
        final_answer: "5,760 שקלים"
    }

];
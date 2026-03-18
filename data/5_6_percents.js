// ========================================================================
// שכבת גיל: ה'-ו' | נושא: אחוזים
// תתי נושאים: מבוא, חישוב ערך האחוז וחישוב האחוז (24 שאלות סה"כ)
// ========================================================================

const questionsDB = [

    // ==========================================
    // תת נושא 1: מבוא (12 שאלות)
    // ==========================================

    {
        topic: "percents",
        subTopic: "מבוא",
        question_text: "מהי המשמעות של המילה 'אחוז'?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 100 100\" width=\"80\" height=\"80\"><defs><linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#3b82f6\" /><stop offset=\"100%\" stop-color=\"#2563eb\" /></linearGradient></defs><circle cx=\"50\" cy=\"50\" r=\"45\" fill=\"none\" stroke=\"url(#grad1)\" stroke-width=\"10\"/><text x=\"50\" y=\"58\" font-family=\"Arial\" font-size=\"24\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">%</text></svg></div>",
        options: [
            "חלק אחד מתוך מאה",
            "חלק אחד מתוך עשר",
            "מספר השלמים",
            "חצי מהכמות"
        ],
        correctAnswer: 0,
        hint: "הסימן % מייצג 'חלקי 100'. לדוגמה, 1% הוא בעצם 1 מתוך 100.&rlm;",
        solution_steps: [
            { verbal_explanation: "המילה 'אחוז' באה מהמילה 'מאה'. משמעותה היא חלוקה של השלם ל-100 חלקים שווים.&rlm;", math_expression: "1% = 1 / 100" },
            { verbal_explanation: "לכן, כל אחוז מייצג בדיוק חלק אחד מתוך מאה חלקים.&rlm;", math_expression: "" }
        ],
        final_answer: "חלק אחד מתוך מאה"
    },
    {
        topic: "percents",
        subTopic: "מבוא",
        question_text: "איזה אחוז מייצג השבר חצי (1/2)?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 120 120\" width=\"100\" height=\"100\"><circle cx=\"60\" cy=\"60\" r=\"50\" fill=\"#e2e8f0\"/><path d=\"M 60,10 A 50,50 0 0,1 60,110 Z\" fill=\"#10b981\"/><line x1=\"60\" y1=\"10\" x2=\"60\" y2=\"110\" stroke=\"#ffffff\" stroke-width=\"3\"/></svg></div>",
        options: [
            "50%",
            "25%",
            "12%",
            "100%"
        ],
        correctAnswer: 0,
        hint: "כדי להפוך שבר לאחוזים, עלינו להרחיב אותו כך שהמכנה יהיה 100. בכמה נכפול את 2 כדי להגיע ל-100?&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי להמיר את השבר 1/2 לאחוזים, נרחיב את המכנה ל-100. נכפול את המונה והמכנה ב-50.&rlm;", math_expression: "1 / 2 = 50 / 100" },
            { verbal_explanation: "שבר שהמכנה שלו הוא 100 שווה בדיוק למונה שלו באחוזים.&rlm;", math_expression: "50 / 100 = 50%" }
        ],
        final_answer: "50%"
    },
    {
        topic: "percents",
        subTopic: "מבוא",
        question_text: "איזה אחוז מייצג השבר רבע (1/4)?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 120 120\" width=\"100\" height=\"100\"><circle cx=\"60\" cy=\"60\" r=\"50\" fill=\"#e2e8f0\"/><path d=\"M 60,60 L 60,10 A 50,50 0 0,1 110,60 Z\" fill=\"#f59e0b\"/><line x1=\"60\" y1=\"10\" x2=\"60\" y2=\"110\" stroke=\"#ffffff\" stroke-width=\"2\"/><line x1=\"10\" y1=\"60\" x2=\"110\" y2=\"60\" stroke=\"#ffffff\" stroke-width=\"2\"/></svg></div>",
        options: [
            "25%",
            "20%",
            "40%",
            "15%"
        ],
        correctAnswer: 0,
        hint: "הרחיבו את השבר 1/4 כך שהמכנה יהיה 100. נכפול את 4 ב-25.&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי להפוך רבע לאחוזים, נרחיב את השבר כך שהמכנה יהיה שווה ל-100. נכפיל את המונה והמכנה ב-25.&rlm;", math_expression: "1 / 4 = 25 / 100" },
            { verbal_explanation: "25 מתוך 100 הם בדיוק 25 אחוזים.&rlm;", math_expression: "25 / 100 = 25%" }
        ],
        final_answer: "25%"
    },
    {
        topic: "percents",
        subTopic: "מבוא",
        question_text: "איזה שבר עשרוני שווה ל-75%?&rlm;",
        options: [
            "0.75",
            "7.5",
            "0.075",
            "75.0"
        ],
        correctAnswer: 0,
        hint: "אחוז הוא שבר שמכנהו 100. חלקו את 75 ב-100 כדי לקבל את השבר העשרוני.&rlm;",
        solution_steps: [
            { verbal_explanation: "75 אחוזים משמעותם 75 חלקים מתוך 100.&rlm;", math_expression: "75% = 75 / 100" },
            { verbal_explanation: "כאשר מחלקים מספר ב-100, הנקודה העשרונית זזה שני צעדים שמאלה.&rlm;", math_expression: "75 / 100 = 0.75" }
        ],
        final_answer: "0.75"
    },
    {
        topic: "percents",
        subTopic: "מבוא",
        question_text: "מה מייצג 100%?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 200 40\" width=\"100%\" height=\"40\" style=\"max-width:200px;\"><rect x=\"0\" y=\"10\" width=\"200\" height=\"20\" fill=\"#10b981\" rx=\"10\"/><text x=\"100\" y=\"24\" font-family=\"Arial\" font-size=\"12\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">100% (הושלם)</text></svg></div>",
        options: [
            "את השלם כולו",
            "חצי מהכמות",
            "כמות גדולה פי 100",
            "שום דבר (אפס)"
        ],
        correctAnswer: 0,
        hint: "100 מתוך 100 זה בדיוק 1. כלומר, הכל!&rlm;",
        solution_steps: [
            { verbal_explanation: "האחוז מייצג חלק מתוך מאה. כאשר אנו מדברים על 100%, אנו מדברים על 100 חלקים מתוך 100.&rlm;", math_expression: "100% = 100 / 100" },
            { verbal_explanation: "100 לחלק ל-100 שווה ל-1, ו-1 מתמטית מייצג את השלם במלואו.&rlm;", math_expression: "100 / 100 = 1" }
        ],
        final_answer: "את השלם כולו"
    },
    {
        topic: "percents",
        subTopic: "מבוא",
        question_text: "בכיתה יש 100 תלמידים. 30 מהם מרכיבים משקפיים.<br>איזה אחוז מהתלמידים מרכיבים משקפיים?&rlm;",
        options: [
            "30%",
            "3%",
            "70%",
            "0.3%"
        ],
        correctAnswer: 0,
        hint: "הכמות הכוללת היא כבר 100. לכן, המספר שנתון לכם הוא בדיוק האחוז.&rlm;",
        solution_steps: [
            { verbal_explanation: "כיוון שהכמות הכוללת של התלמידים היא בדיוק 100, החלק היחסי הוא פשוט המונה של שבר שמכנהו 100.&rlm;", math_expression: "30 / 100" },
            { verbal_explanation: "30 מתוך 100 הם בדיוק 30 אחוזים.&rlm;", math_expression: "30 / 100 = 30%" }
        ],
        final_answer: "30%"
    },
    {
        topic: "percents",
        subTopic: "מבוא",
        question_text: "איזה אחוז מייצג השבר 1/5 (חמישית)?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 250 40\" width=\"100%\" height=\"40\" style=\"max-width:250px;\"><rect x=\"0\" y=\"10\" width=\"50\" height=\"20\" fill=\"#8b5cf6\" stroke=\"#ffffff\" stroke-width=\"2\"/><rect x=\"50\" y=\"10\" width=\"50\" height=\"20\" fill=\"#e2e8f0\" stroke=\"#ffffff\" stroke-width=\"2\"/><rect x=\"100\" y=\"10\" width=\"50\" height=\"20\" fill=\"#e2e8f0\" stroke=\"#ffffff\" stroke-width=\"2\"/><rect x=\"150\" y=\"10\" width=\"50\" height=\"20\" fill=\"#e2e8f0\" stroke=\"#ffffff\" stroke-width=\"2\"/><rect x=\"200\" y=\"10\" width=\"50\" height=\"20\" fill=\"#e2e8f0\" stroke=\"#ffffff\" stroke-width=\"2\"/></svg></div>",
        options: [
            "20%",
            "15%",
            "50%",
            "5%"
        ],
        correctAnswer: 0,
        hint: "הרחיבו את השבר 1/5 כך שהמכנה שלו יהיה 100. הכפילו את המונה והמכנה ב-20.&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי לדעת כמה זה חמישית באחוזים, נרחיב את השבר למכנה 100. נכפול ב-20.&rlm;", math_expression: "1 / 5 = 20 / 100" },
            { verbal_explanation: "20 חלקי 100 שווים ל-20 אחוזים.&rlm;", math_expression: "20 / 100 = 20%" }
        ],
        final_answer: "20%"
    },
    {
        topic: "percents",
        subTopic: "מבוא",
        question_text: "הפכו את השבר העשרוני 0.4 לאחוזים.&rlm;",
        options: [
            "40%",
            "4%",
            "0.4%",
            "400%"
        ],
        correctAnswer: 0,
        hint: "0.4 שווה לשבר 4/10. הרחיבו אותו למכנה 100.&rlm;",
        solution_steps: [
            { verbal_explanation: "השבר העשרוני 0.4 מייצג 4 עשיריות.&rlm;", math_expression: "0.4 = 4 / 10" },
            { verbal_explanation: "נרחיב את השבר כך שהמכנה יהיה 100 (נכפיל מונה ומכנה ב-10).&rlm;", math_expression: "4 / 10 = 40 / 100" },
            { verbal_explanation: "40 מתוך 100 הם 40%.&rlm;", math_expression: "40 / 100 = 40%" }
        ],
        final_answer: "40%"
    },
    {
        topic: "percents",
        subTopic: "מבוא",
        question_text: "הסוללה בטלפון של עמית מראה שנותרו לה 80%.<br>איזה שבר עשרוני מייצג את כמות הסוללה שנותרה?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 100 50\" width=\"100\" height=\"50\"><rect x=\"10\" y=\"15\" width=\"75\" height=\"30\" rx=\"4\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"3\"/><rect x=\"85\" y=\"25\" width=\"5\" height=\"10\" fill=\"#64748b\"/><rect x=\"14\" y=\"19\" width=\"60\" height=\"22\" rx=\"2\" fill=\"#22c55e\"/></svg></div>",
        options: [
            "0.80",
            "8.0",
            "0.08",
            "0.20"
        ],
        correctAnswer: 0,
        hint: "חלקו את האחוז (80) ב-100 כדי להמיר אותו בחזרה לשבר עשרוני.&rlm;",
        solution_steps: [
            { verbal_explanation: "אחוז מייצג חלק מתוך 100. לכן 80 אחוזים הם השבר 80/100.&rlm;", math_expression: "80% = 80 / 100" },
            { verbal_explanation: "כדי להפוך שבר פשוט שבו המכנה הוא 100 לשבר עשרוני, מזיזים את הנקודה העשרונית שמאלה שני מקומות.&rlm;", math_expression: "80 / 100 = 0.80" }
        ],
        final_answer: "0.80"
    },
    {
        topic: "percents",
        subTopic: "מבוא",
        question_text: "מה גדול יותר: 1/4 (רבע) או 30%?&rlm;",
        options: [
            "30% גדול יותר",
            "1/4 גדול יותר",
            "הם שווים בדיוק",
            "אי אפשר לדעת"
        ],
        correctAnswer: 0,
        hint: "כדי להשוות, המירו את הרבע לאחוזים (הרחיבו למכנה 100). ואז בדקו איזה אחוז גדול יותר.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמיר את השבר רבע לאחוזים. נכפיל את המונה והמכנה ב-25.&rlm;", math_expression: "1 / 4 = 25 / 100" },
            { verbal_explanation: "25 חלקי 100 הם 25%.&rlm;", math_expression: "25 / 100 = 25%" },
            { verbal_explanation: "כעת נשווה: ברור ש-30% גדול יותר מ-25%.&rlm;", math_expression: "30% > 25%" }
        ],
        final_answer: "30% גדול יותר"
    },
    {
        topic: "percents",
        subTopic: "מבוא",
        question_text: "אפליקציה ירדה ב-60% למכשיר. כמה אחוזים נותרו עד לסיום ההורדה?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 200 40\" width=\"100%\" height=\"40\" style=\"max-width:200px;\"><rect x=\"0\" y=\"10\" width=\"200\" height=\"15\" fill=\"#e2e8f0\" rx=\"7\"/><rect x=\"0\" y=\"10\" width=\"120\" height=\"15\" fill=\"#3b82f6\" rx=\"7\"/></svg></div>",
        options: [
            "40%",
            "50%",
            "60%",
            "100%"
        ],
        correctAnswer: 0,
        hint: "השלם תמיד שווה ל-100%. החסירו מהשלם את האחוז שכבר ירד.&rlm;",
        solution_steps: [
            { verbal_explanation: "סיום ההורדה (השלם) מייצג 100%.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי למצוא כמה נותר, נחסר מ-100% את החלק שכבר ירד (60%).&rlm;", math_expression: "100% - 60% = 40%" }
        ],
        final_answer: "40%"
    },
    {
        topic: "percents",
        subTopic: "מבוא",
        question_text: "איזה שבר עשרוני מייצג 100%?&rlm;",
        options: [
            "1.0",
            "10.0",
            "0.1",
            "100.0"
        ],
        correctAnswer: 0,
        hint: "100% הם 100 מתוך 100. כמה זה 100 לחלק ל-100?&rlm;",
        solution_steps: [
            { verbal_explanation: "100 אחוזים שווים לשבר של 100 חלקי 100.&rlm;", math_expression: "100% = 100 / 100" },
            { verbal_explanation: "כל מספר שמחולק בעצמו שווה ל-1 השלם.&rlm;", math_expression: "100 / 100 = 1" }
        ],
        final_answer: "1.0"
    },

    // ==========================================
    // תת נושא 2: חישוב ערך האחוז וחישוב האחוז (12 שאלות)
    // ==========================================

    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "בכיתה יש 40 תלמידים. 50% מהם יצאו לטיול השנתי.<br>כמה תלמידים יצאו לטיול?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 100 100\" width=\"80\" height=\"80\"><circle cx=\"50\" cy=\"50\" r=\"45\" fill=\"#e2e8f0\"/><path d=\"M 50,5 A 45,45 0 0,1 50,95 Z\" fill=\"#8b5cf6\"/><line x1=\"50\" y1=\"5\" x2=\"50\" y2=\"95\" stroke=\"#ffffff\" stroke-width=\"2\"/></svg></div>",
        options: [
            "20",
            "25",
            "15",
            "30"
        ],
        correctAnswer: 0,
        hint: "50% שווים בדיוק לחצי (1/2). מהו החצי של 40?&rlm;",
        solution_steps: [
            { verbal_explanation: "אנו יודעים ש-50% מייצגים בדיוק חצי (1/2) מהכמות הכוללת.&rlm;", math_expression: "50% = 1 / 2" },
            { verbal_explanation: "כדי למצוא את מספר התלמידים שיצאו, נחשב חצי מתוך 40 (נחלק ב-2).&rlm;", math_expression: "40 / 2 = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "מחיר חולצה הוא 200 שקלים. כעת יש עליה הנחה של 25%.<br>מהו סכום ההנחה בשקלים?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 200 80\" width=\"100%\" height=\"80\" style=\"max-width:200px;\"><path d=\"M 20,40 L 40,10 L 180,10 L 180,70 L 40,70 Z\" fill=\"#ef4444\"/><circle cx=\"45\" cy=\"40\" r=\"5\" fill=\"#ffffff\"/><text x=\"110\" y=\"48\" font-family=\"Arial\" font-size=\"24\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">-25%</text></svg></div>",
        options: [
            "50 שקלים",
            "25 שקלים",
            "150 שקלים",
            "75 שקלים"
        ],
        correctAnswer: 0,
        hint: "25% שווים לשבר רבע (1/4). חשבו מהו הרבע של 200.&rlm;",
        solution_steps: [
            { verbal_explanation: "האחוז 25% שווה לשבר פשוט של רבע.&rlm;", math_expression: "25% = 25 / 100 = 1 / 4" },
            { verbal_explanation: "כדי למצוא כמה הם רבע מתוך 200, נחלק את הסכום הכולל ב-4.&rlm;", math_expression: "200 / 4 = 50" }
        ],
        final_answer: "50 שקלים"
    },
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "מהם 10% מתוך 350?&rlm;",
        options: [
            "35",
            "3.5",
            "350",
            "70"
        ],
        correctAnswer: 0,
        hint: "10% הם עשירית (1/10). כדי למצוא עשירית ממספר שמסתיים באפס, פשוט מורידים לו את האפס האחרון (מחלקים ב-10).&rlm;",
        solution_steps: [
            { verbal_explanation: "10 אחוזים שווים לשבר עשירית.&rlm;", math_expression: "10% = 10 / 100 = 1 / 10" },
            { verbal_explanation: "נחשב עשירית מתוך 350 על ידי חלוקת המספר ב-10.&rlm;", math_expression: "350 / 10 = 35" }
        ],
        final_answer: "35"
    },
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "דן פתר נכון 8 תרגילים מתוך 10 תרגילים במבחן.<br>איזה אחוז מהתרגילים דן פתר נכון?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 100 100\" width=\"80\" height=\"80\"><circle cx=\"50\" cy=\"50\" r=\"45\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"6\"/><path d=\"M 30,50 L 45,65 L 75,30\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></div>",
        options: [
            "80%",
            "8%",
            "20%",
            "40%"
        ],
        correctAnswer: 0,
        hint: "כתבו את הכמות כַּשבר (8 חלקי 10) והרחיבו למכנה 100 כדי למצוא את האחוז.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכתוב את החלק היחסי שדן פתר כשבר פשוט: 8 מתוך 10.&rlm;", math_expression: "8 / 10" },
            { verbal_explanation: "כדי להפוך לאחוזים, נרחיב את המכנה ל-100. נכפיל את המונה ואת המכנה ב-10.&rlm;", math_expression: "(8 * 10) / (10 * 10) = 80 / 100" },
            { verbal_explanation: "80 חלקי 100 הם 80%.&rlm;", math_expression: "80 / 100 = 80%" }
        ],
        final_answer: "80%"
    },
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "בגינה יש 50 פרחים, מתוכם 10 פרחים הם אדומים.<br>איזה אחוז מכלל הפרחים הם אדומים?&rlm;",
        options: [
            "20%",
            "10%",
            "25%",
            "50%"
        ],
        correctAnswer: 0,
        hint: "רשמו את השבר 10 חלקי 50. בכמה יש לכפול את 50 כדי להגיע למכנה 100?&rlm;",
        solution_steps: [
            { verbal_explanation: "השבר המייצג את הפרחים האדומים הוא 10 מתוך 50.&rlm;", math_expression: "10 / 50" },
            { verbal_explanation: "נרחיב את השבר כך שהמכנה יהיה 100. נכפיל מונה ומכנה ב-2.&rlm;", math_expression: "(10 * 2) / (50 * 2) = 20 / 100" },
            { verbal_explanation: "20 מתוך 100 פירושם 20%.&rlm;", math_expression: "20 / 100 = 20%" }
        ],
        final_answer: "20%"
    },
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "קבוצת כדורסל ניצחה ב-75% מהמשחקים ששיחקה העונה.<br>אם היא שיחקה 40 משחקים בסך הכל, בכמה משחקים היא ניצחה?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 100 100\" width=\"80\" height=\"80\"><circle cx=\"50\" cy=\"50\" r=\"45\" fill=\"#f97316\"/><line x1=\"50\" y1=\"5\" x2=\"50\" y2=\"95\" stroke=\"#ffffff\" stroke-width=\"2\"/><line x1=\"5\" y1=\"50\" x2=\"95\" y2=\"50\" stroke=\"#ffffff\" stroke-width=\"2\"/><path d=\"M 50,50 A 45,45 0 0,0 50,5 Z\" fill=\"#fbbf24\" opacity=\"0.5\"/></svg></div>",
        options: [
            "30",
            "25",
            "35",
            "20"
        ],
        correctAnswer: 0,
        hint: "75% שווים ל-3/4 (שלושה רבעים). כדי למצוא כמה זה 3/4 מתוך 40: חלקו תחילה ב-4, ואת התוצאה הכפילו ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "האחוז 75% שווה לשבר שלושה רבעים.&rlm;", math_expression: "75% = 75 / 100 = 3 / 4" },
            { verbal_explanation: "כדי למצוא כמה זה שלושה רבעים מ-40, נמצא קודם כמה זה רבע אחד (נחלק ב-4).&rlm;", math_expression: "40 / 4 = 10" },
            { verbal_explanation: "רבע אחד הוא 10 משחקים. מכיוון שאנו צריכים 3 רבעים, נכפיל ב-3.&rlm;", math_expression: "10 * 3 = 30" }
        ],
        final_answer: "30"
    },
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "מהם 20% מתוך 600 שקלים?&rlm;",
        options: [
            "120 שקלים",
            "100 שקלים",
            "60 שקלים",
            "150 שקלים"
        ],
        correctAnswer: 0,
        hint: "20% הם בדיוק חמישית (1/5). חלקו את 600 ב-5.&rlm; (לחלופין, מצאו 10% והכפילו פי 2).",
        solution_steps: [
            { verbal_explanation: "דרך אחת: 20% הם השבר חמישית (20/100). נחלק 600 ב-5.&rlm;", math_expression: "600 / 5 = 120" },
            { verbal_explanation: "דרך שנייה: נמצא קודם 10% על ידי חלוקה ב-10.&rlm;", math_expression: "600 / 10 = 60" },
            { verbal_explanation: "20% הם כפול מ-10%, לכן נכפיל את התוצאה ב-2.&rlm;", math_expression: "60 * 2 = 120" }
        ],
        final_answer: "120 שקלים"
    },
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "משחק מחשב עולה 150 שקלים. המחיר שלו עלה ב-10%.<br>מהו מחירו החדש של המשחק (אחרי ההתייקרות)?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 100 100\" width=\"80\" height=\"80\"><polygon points=\"50,10 90,50 70,50 70,90 30,90 30,50 10,50\" fill=\"#10b981\"/><text x=\"50\" y=\"80\" font-family=\"Arial\" font-size=\"24\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">+</text></svg></div>",
        options: [
            "165 שקלים",
            "160 שקלים",
            "135 שקלים",
            "15 שקלים"
        ],
        correctAnswer: 0,
        hint: "חשבו קודם כמה שקלים הם 10% מתוך ה-150 (זוהי התוספת למחיר). לאחר מכן, הוסיפו את התוספת למחיר המקורי.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא כמה זה 10% (עשירית) מתוך 150 על ידי חלוקה ב-10.&rlm;", math_expression: "150 / 10 = 15" },
            { verbal_explanation: "סכום ההתייקרות הוא 15 שקלים. כדי למצוא את המחיר החדש, נוסיף זאת למחיר המקורי.&rlm;", math_expression: "150 + 15 = 165" }
        ],
        final_answer: "165 שקלים"
    },
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "בחניון יש 200 רכבים בסך הכל. 40 מתוכם הם רכבים חשמליים.<br>איזה אחוז מהרכבים בחניון הם רכבים חשמליים?&rlm;",
        options: [
            "20%",
            "40%",
            "15%",
            "25%"
        ],
        correctAnswer: 0,
        hint: "כתבו את השבר 40 חלקי 200. כדי להגיע למכנה 100 (אחוזים), צמצמו את השבר: חלקו את המונה והמכנה ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "נכתוב את הכמות היחסית כשבר: 40 מתוך 200.&rlm;", math_expression: "40 / 200" },
            { verbal_explanation: "כדי להפוך לאחוז, אנו זקוקים למכנה 100. נצמצם את השבר על ידי חלוקת המונה והמכנה ב-2.&rlm;", math_expression: "(40 / 2) / (200 / 2) = 20 / 100" },
            { verbal_explanation: "התוצאה היא 20 מתוך 100, כלומר 20%.&rlm;", math_expression: "20 / 100 = 20%" }
        ],
        final_answer: "20%"
    },
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "מהם 5% מתוך 400?&rlm;",
        options: [
            "20",
            "40",
            "5",
            "25"
        ],
        correctAnswer: 0,
        hint: "אפשר למצוא קודם את ה-10% (עשירית) של 400, ולאחר מכן לחלק ב-2 כדי להגיע ל-5%.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא קודם כל 10% מתוך 400 על ידי חלוקה ב-10.&rlm;", math_expression: "400 / 10 = 40" },
            { verbal_explanation: "האחוז 5% הוא בדיוק חצי מ-10%. לכן, נחלק את התוצאה ב-2.&rlm;", math_expression: "40 / 2 = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "קבוצה של 6 תלמידים מתוך כיתה של 24 תלמידים משתתפת בחוג שחמט.<br>איזה אחוז מהתלמידים משתתף בחוג השחמט?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 100 100\" width=\"80\" height=\"80\"><rect x=\"10\" y=\"10\" width=\"35\" height=\"35\" fill=\"#1e293b\"/><rect x=\"55\" y=\"10\" width=\"35\" height=\"35\" fill=\"#e2e8f0\"/><rect x=\"10\" y=\"55\" width=\"35\" height=\"35\" fill=\"#e2e8f0\"/><rect x=\"55\" y=\"55\" width=\"35\" height=\"35\" fill=\"#1e293b\"/></svg></div>",
        options: [
            "25%",
            "20%",
            "30%",
            "15%"
        ],
        correctAnswer: 0,
        hint: "כתבו את השבר 6/24 וצמצמו אותו לשבר פשוט יותר. לאחר מכן המירו את השבר שקיבלתם לאחוזים.&rlm;",
        solution_steps: [
            { verbal_explanation: "השבר שמייצג את התלמידים הוא 6 מתוך 24.&rlm;", math_expression: "6 / 24" },
            { verbal_explanation: "נצמצם את השבר: 6 נכנס ב-24 בדיוק 4 פעמים. כלומר, זהו השבר רבע.&rlm;", math_expression: "6 / 24 = 1 / 4" },
            { verbal_explanation: "השבר רבע (1/4) שווה ל-25 מתוך 100, כלומר 25%.&rlm;", math_expression: "1 / 4 = 25 / 100 = 25%" }
        ],
        final_answer: "25%"
    },
    {
        topic: "percents",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "במבחן היו 50 שאלות. שירה פתרה נכון 90% מהשאלות.<br>בכמה שאלות שירה טעתה?&rlm;",
        options: [
            "5",
            "10",
            "45",
            "2"
        ],
        correctAnswer: 0,
        hint: "אם שירה צדקה ב-90%, באחוזים, כמה נשאר עד ל-100% השלם? זה יהיה אחוז הטעויות שלה. חשבו את האחוז הזה מתוך 50 השאלות.&rlm;",
        solution_steps: [
            { verbal_explanation: "המבחן כולו הוא 100%. אם שירה צדקה ב-90%, משמע שהיא טעתה ב-10%.&rlm;", math_expression: "100% - 90% = 10%" },
            { verbal_explanation: "עלינו למצוא כמה שאלות הם 10% מתוך 50 השאלות.&rlm;", math_expression: "10% = 1 / 10" },
            { verbal_explanation: "נחלק את סך כל השאלות (50) ב-10.&rlm;", math_expression: "50 / 10 = 5" }
        ],
        final_answer: "5"
    }
];
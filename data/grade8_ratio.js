// ========================================================================
// שכבת גיל: כיתה ח' | נושא: יחס ופרופורציה
// 4 תתי נושאים | 48 שאלות סה"כ
// פתרונות מפורטים מאוד בשלבים (האכלה בכפית), כולל המרות יחידות ומשוואות.
// כתיבה נקייה ובטוחה: × לכפל, : לחילוק, 1/2 לשברים. ללא LaTeX.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: מושג היחס (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "ratios",
        subTopic: "מושג היחס",
        question_text: "בכיתה יש 15 בנים ו-10 בנות. מהו היחס בין מספר הבנים למספר הבנות בכיתה (בצמצום המקסימלי)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 150 50' width='100%' height='50' style='max-width:150px;'><circle cx='30' cy='25' r='10' fill='#3b82f6'/><circle cx='60' cy='25' r='10' fill='#3b82f6'/><circle cx='90' cy='25' r='10' fill='#ef4444'/><circle cx='120' cy='25' r='10' fill='#ef4444'/></svg></div>",
        options: ["3:2", "2:3", "15:10", "1:2"],
        correctAnswer: 0,
        hint: "יחס כותבים לפי הסדר שביקשו בשאלה (קודם בנים, אחר כך בנות). מצאו מספר שאפשר לחלק בו גם את 15 וגם את 10 כדי לצמצם.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את היחס ההתחלתי לפי הסדר המבוקש. בנים משמאל לנקודתיים, בנות מימין.&rlm;", math_expression: "15 : 10" },
            { verbal_explanation: "שלב ב': יחס מתנהג כמו שבר ואפשר לצמצם אותו. נחפש את המחלק המשותף הגדול ביותר של 15 ו-10, שהוא המספר 5.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': נחלק את שני המספרים ב-5. 15 לחלק ל-5 זה 3, ו-10 לחלק ל-5 זה 2.&rlm;", math_expression: "3 : 2" }
        ],
        final_answer: "3:2"
    },
    // שאלה 2
    {
        topic: "ratios",
        subTopic: "מושג היחס",
        question_text: "בהמשך לשאלה הקודמת (15 בנים ו-10 בנות), מהו היחס בין מספר הבנות לבין **סך כל התלמידים** בכיתה?&rlm;",
        options: ["2:5", "10:15", "5:2", "2:3"],
        correctAnswer: 0,
        hint: "קודם כל חשבו כמה תלמידים יש בכיתה בסך הכל. לאחר מכן רשמו את היחס: בנות משמאל, סך הכל מימין, וצמצמו.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את המספר הכולל של התלמידים בכיתה.&rlm;", math_expression: "15 + 10 = 25" },
            { verbal_explanation: "שלב ב': נרשום את היחס המבוקש: בנות (10) לסך הכל (25).&rlm;", math_expression: "10 : 25" },
            { verbal_explanation: "שלב ג': נצמצם את היחס על ידי חלוקה של שני המספרים ב-5.&rlm;", math_expression: "(10 : 5) : (25 : 5) = 2 : 5" }
        ],
        final_answer: "2:5"
    },
    // שאלה 3
    {
        topic: "ratios",
        subTopic: "מושג היחס",
        question_text: "מהו היחס בין צלעותיו של מלבן שאורכו 12 ס\"מ ורוחבו 8 ס\"מ? (היחס בין הרוחב לאורך)&rlm;",
        options: ["2:3", "3:2", "8:12", "4:6"],
        correctAnswer: 0,
        hint: "שימו לב לסדר שביקשו: קודם הרוחב (8) ואז האורך (12). חלקו את שני המספרים ב-4.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את היחס: רוחב אל אורך.&rlm;", math_expression: "8 : 12" },
            { verbal_explanation: "שלב ב': נצמצם את היחס. המספר הגדול ביותר שמחלק גם את 8 וגם את 12 הוא 4.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': 8 לחלק ל-4 זה 2. 12 לחלק ל-4 זה 3.&rlm;", math_expression: "2 : 3" }
        ],
        final_answer: "2:3"
    },
    // שאלה 4
    {
        topic: "ratios",
        subTopic: "מושג היחס",
        question_text: "מלכודת יחידות מידה! מהו היחס בין 30 דקות לבין 2 שעות?&rlm;",
        options: ["1:4", "15:1", "30:2", "1:2"],
        correctAnswer: 0,
        hint: "אי אפשר לחשב יחס בין יחידות שונות! קודם כל, הפכו את השעתיים לדקות (כמה דקות יש בשעתיים?), ורק אז רשמו וצמצמו את היחס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': כדי לחשב יחס, שני הגדלים חייבים להיות באותן יחידות מידה. נמיר את השעות לדקות.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': בשעה יש 60 דקות, ולכן ב-2 שעות יש 120 דקות.&rlm;", math_expression: "2 × 60 = 120" },
            { verbal_explanation: "שלב ג': נרשום את היחס: 30 דקות אל 120 דקות.&rlm;", math_expression: "30 : 120" },
            { verbal_explanation: "שלב ד': נצמצם ב-30.&rlm;", math_expression: "1 : 4" }
        ],
        final_answer: "1:4"
    },
    // שאלה 5
    {
        topic: "ratios",
        subTopic: "מושג היחס",
        question_text: "מהו היחס בין 500 גרם לבין 2 קילוגרם?&rlm;",
        options: ["1:4", "250:1", "500:2", "1:2"],
        correctAnswer: 0,
        hint: "זכרו שבקילוגרם אחד יש 1,000 גרם. כמה גרם יש ב-2 ק\"ג?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמיר קילוגרמים לגרמים כדי שהיחידות יהיו זהות.&rlm;", math_expression: "2 kg = 2000 g" },
            { verbal_explanation: "שלב ב': נרשום את היחס בין הגרמים.&rlm;", math_expression: "500 : 2000" },
            { verbal_explanation: "שלב ג': נצמצם את היחס. אפשר קודם לחלק ב-100 (להוריד שני אפסים) ונקבל 5:20.&rlm;", math_expression: "5 : 20" },
            { verbal_explanation: "שלב ד': נחלק ב-5 את שני הצדדים.&rlm;", math_expression: "1 : 4" }
        ],
        final_answer: "1:4"
    },
    // שאלה 6
    {
        topic: "ratios",
        subTopic: "מושג היחס",
        question_text: "מהו היחס בין 40 סנטימטרים לבין 2 מטרים?&rlm;",
        options: ["1:5", "20:1", "40:2", "1:2"],
        correctAnswer: 0,
        hint: "במטר אחד יש 100 סנטימטרים. הפכו את 2 המטרים לסנטימטרים ואז צמצמו.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמיר את המטרים לסנטימטרים.&rlm;", math_expression: "2 m = 200 cm" },
            { verbal_explanation: "שלב ב': נרשום את היחס המלא.&rlm;", math_expression: "40 : 200" },
            { verbal_explanation: "שלב ג': נצמצם תחילה ב-10 (נוריד אפס).&rlm;", math_expression: "4 : 20" },
            { verbal_explanation: "שלב ד': נחלק ב-4 את שני הצדדים.&rlm;", math_expression: "1 : 5" }
        ],
        final_answer: "1:5"
    },
    // שאלה 7
    {
        topic: "ratios",
        subTopic: "מושג היחס",
        question_text: "היחס בין מספר התפוחים למספר התפוזים בסלסלה הוא 3:5. אם יש בסלסלה 12 תפוחים, כמה תפוזים יש בה?&rlm;",
        options: ["20 תפוזים", "15 תפוזים", "12 תפוזים", "8 תפוזים"],
        correctAnswer: 0,
        hint: "היחס המקורי הוא 3 לתפוחים. במציאות יש 12 תפוחים. פי כמה הוגדלה הכמות? (12 לחלק ל-3). הכפילו את יחס התפוזים (5) באותו המספר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבדוק פי כמה הורחב היחס של התפוחים. החלק של התפוחים הוא 3, והכמות בפועל היא 12.&rlm;", math_expression: "12 : 3 = 4" },
            { verbal_explanation: "שלב ב': גורם ההרחבה הוא 4. לכן, עלינו להכפיל גם את החלק של התפוזים (5) ב-4.&rlm;", math_expression: "5 × 4 = 20" }
        ],
        final_answer: "20 תפוזים"
    },
    // שאלה 8
    {
        topic: "ratios",
        subTopic: "מושג היחס",
        question_text: "מה משמעות היחס 1:1 בין שתי כמויות?&rlm;",
        options: ["ששתי הכמויות שוות בדיוק זו לזו.", "שהכמות הראשונה גדולה מהשנייה.", "שיש פריט אחד מכל סוג בלבד.", "שהכמות השנייה גדולה מהראשונה."],
        correctAnswer: 0,
        hint: "יחס מציין את הקשר (הפרופורציה) בין הכמויות, לא את הכמות המדויקת. על כל 1 מהסוג הראשון יש 1 מהסוג השני.&rlm;",
        solution_steps: [
            { verbal_explanation: "יחס של 1:1 אומר שעל כל פריט מסוג א', יש פריט אחד מסוג ב'.&rlm;", math_expression: "" },
            { verbal_explanation: "זה אומר שיש להם את אותה הכמות בדיוק (למשל 10 בנים ו-10 בנות, שזה 10:10, המצטמצם ל-1:1).&rlm;", math_expression: "" }
        ],
        final_answer: "ששתי הכמויות שוות בדיוק זו לזו."
    },
    // שאלה 9
    {
        topic: "ratios",
        subTopic: "מושג היחס",
        question_text: "היחס בין כמות הקמח לכמות המים במתכון הוא 5:2. מה יהיה היחס אם נרשום קודם את המים ואז את הקמח?&rlm;",
        options: ["2:5", "5:2", "1:2.5", "10:4"],
        correctAnswer: 0,
        hint: "סדר הרישום של המילים חייב להיות תואם לסדר המספרים. אם הופכים את המילים, הופכים גם את המספרים.&rlm;",
        solution_steps: [
            { verbal_explanation: "נתון שיחס קמח למים הוא 5:2. כלומר 5 שייך לקמח ו-2 שייך למים.&rlm;", math_expression: "" },
            { verbal_explanation: "אם נבקש את היחס 'מים אל קמח', נרשום קודם את המספר של המים (2) ואז של הקמח (5).&rlm;", math_expression: "2 : 5" }
        ],
        final_answer: "2:5"
    },
    // שאלה 10
    {
        topic: "ratios",
        subTopic: "מושג היחס",
        question_text: "איזה יחס מתאר את התמונה שלפניכם? (מספר העיגולים הירוקים למספר העיגולים האפורים)&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 50' width='100%' height='50' style='max-width:200px;'><circle cx='25' cy='25' r='10' fill='#22c55e'/><circle cx='55' cy='25' r='10' fill='#22c55e'/><circle cx='85' cy='25' r='10' fill='#22c55e'/><circle cx='115' cy='25' r='10' fill='#64748b'/><circle cx='145' cy='25' r='10' fill='#64748b'/><circle cx='175' cy='25' r='10' fill='#64748b'/></svg></div>",
        options: ["1:1", "3:6", "1:2", "6:3"],
        correctAnswer: 0,
        hint: "ספרו כמה עיגולים מכל צבע יש, רשמו את היחס וצמצמו אותו.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נספור. יש 3 עיגולים ירוקים ו-3 עיגולים אפורים.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נרשום את היחס.&rlm;", math_expression: "3 : 3" },
            { verbal_explanation: "שלב ג': נצמצם את היחס על ידי חלוקה ב-3 ונקבל כמויות שוות.&rlm;", math_expression: "1 : 1" }
        ],
        final_answer: "1:1"
    },
    // שאלה 11
    {
        topic: "ratios",
        subTopic: "מושג היחס",
        question_text: "נתונה המשוואה 3x = 4y. מהו היחס בין x ל-y (כלומר מהו x:y)?&rlm;",
        options: ["4:3", "3:4", "1:1", "12:1"],
        correctAnswer: 0,
        hint: "חישבו בהצלבה: כדי שהשוויון יתקיים, ה-x צריך 'לקבל' את ה-4, וה-y צריך 'לקבל' את ה-3 (כך ש- 3*4 = 4*3).&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי למצוא את היחס x:y, עלינו לבודד את השבר x/y במשוואה.&rlm;", math_expression: "3x = 4y" },
            { verbal_explanation: "נחלק את שני האגפים ב-y.&rlm;", math_expression: "(3x) / y = 4" },
            { verbal_explanation: "נחלק את שני האגפים ב-3.&rlm;", math_expression: "x / y = 4 / 3" },
            { verbal_explanation: "השבר 4/3 נכתב כיחס 4:3.&rlm;", math_expression: "4 : 3" }
        ],
        final_answer: "4:3"
    },
    // שאלה 12
    {
        topic: "ratios",
        subTopic: "מושג היחס",
        question_text: "איזה יחס מייצג כמות גדולה יותר (החלק היחסי גדול יותר)? 2:3 או 3:4?&rlm;",
        options: ["3:4", "2:3", "הם שווים", "אי אפשר להשוות"],
        correctAnswer: 0,
        hint: "הפכו את היחסים לשברים רגילים (2/3 לעומת 3/4) והשוו ביניהם בעזרת מכנה משותף (12).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': יחס ניתן לכתוב כשבר. נשווה בין שני שלישים (2/3) לשלושה רבעים (3/4).&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נמצא מכנה משותף שהוא 12.&rlm;", math_expression: "2/3 = 8/12" },
            { verbal_explanation: "שלב ג': נרחיב את השבר השני.&rlm;", math_expression: "3/4 = 9/12" },
            { verbal_explanation: "שלב ד': 9 חלקי 12 גדול יותר מ-8 חלקי 12. לכן 3:4 הוא יחס גדול יותר.&rlm;", math_expression: "" }
        ],
        final_answer: "3:4"
    },

    // ==========================================================
    // תת נושא 2: חלוקה לפי יחס (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "ratios",
        subTopic: "חלוקה לפי יחס",
        question_text: "חילקו 40 סוכריות בין דנה לרועי ביחס של 3:5 (דנה קיבלה 3, רועי 5). כמה סוכריות קיבלה דנה?&rlm;",
        options: ["15", "25", "3", "5"],
        correctAnswer: 0,
        hint: "חברו את כל ה'חלקים' של היחס יחד (3+5=8). חלקו את סך כל הסוכריות ב-8 כדי לגלות כמה שווה 'חלק' אחד. לאחר מכן הכפילו בחלק של דנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את מספר החלקים הכולל ביחס.&rlm;", math_expression: "3 + 5 = 8" },
            { verbal_explanation: "שלב ב': נחלק את הכמות הכוללת של הסוכריות במספר החלקים, כדי למצוא את ערכו של חלק אחד.&rlm;", math_expression: "40 : 8 = 5" },
            { verbal_explanation: "שלב ג': לדנה יש 3 חלקים. נכפול 3 בערך של חלק אחד (5).&rlm;", math_expression: "3 × 5 = 15" }
        ],
        final_answer: "15"
    },
    // שאלה 14
    {
        topic: "ratios",
        subTopic: "חלוקה לפי יחס",
        question_text: "שני אחים קיבלו דמי כיס בסך 120 שקלים וחילקו אותם ביחס של 1:3. מהו הסכום הקטן יותר שחולק מתוך ה-120?&rlm;",
        options: ["30 שקלים", "40 שקלים", "90 שקלים", "10 שקלים"],
        correctAnswer: 0,
        hint: "סך החלקים הוא 4 (1+3). חלקו 120 ב-4.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סך כל החלקים ביחס הוא 4.&rlm;", math_expression: "1 + 3 = 4" },
            { verbal_explanation: "שלב ב': נחלק את הסכום הכולל ב-4 למציאת השווי של יחידת יחס אחת.&rlm;", math_expression: "120 : 4 = 30" },
            { verbal_explanation: "שלב ג': האח שקיבל פחות קיבל חלק 1 בלבד, כלומר 30 שקלים.&rlm;", math_expression: "1 × 30 = 30" }
        ],
        final_answer: "30 שקלים"
    },
    // שאלה 15
    {
        topic: "ratios",
        subTopic: "חלוקה לפי יחס",
        question_text: "סכום הזוויות במשולש הוא 180 מעלות. הזוויות במשולש מתייחסות זו לזו ביחס של 1:2:3. מהי הזווית הגדולה ביותר במשולש זה?&rlm;",
        options: ["90 מעלות", "60 מעלות", "100 מעלות", "120 מעלות"],
        correctAnswer: 0,
        hint: "חברו את כל חלקי היחס (1+2+3). חלקו את 180 בסכום, ואז הכפילו בחלק הגדול ביותר (3).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סך החלקים הכולל.&rlm;", math_expression: "1 + 2 + 3 = 6" },
            { verbal_explanation: "שלב ב': נחלק את סכום הזוויות הכולל במספר החלקים.&rlm;", math_expression: "180 : 6 = 30" },
            { verbal_explanation: "שלב ג': הזווית הגדולה ביותר היא בת 3 חלקים. נכפיל ב-30.&rlm;", math_expression: "3 × 30 = 90" }
        ],
        final_answer: "90 מעלות"
    },
    // שאלה 16
    {
        topic: "ratios",
        subTopic: "חלוקה לפי יחס",
        question_text: "נגר חתך קרש עץ שאורכו 100 ס\"מ לשני חלקים שהיחס ביניהם הוא 2:3. מהו אורכו של החלק הארוך יותר?&rlm;",
        options: ["60 ס\"מ", "40 ס\"מ", "50 ס\"מ", "70 ס\"מ"],
        correctAnswer: 0,
        hint: "סך החלקים 5. 100 חלקי 5 שווה 20. החלק הארוך מקבל 3 חלקים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סך כל החלקים ביחס.&rlm;", math_expression: "2 + 3 = 5" },
            { verbal_explanation: "שלב ב': גודל של חלק אחד.&rlm;", math_expression: "100 : 5 = 20" },
            { verbal_explanation: "שלב ג': החלק הארוך מיוצג על ידי המספר 3. נכפיל 3 ב-20.&rlm;", math_expression: "3 × 20 = 60" }
        ],
        final_answer: "60 ס\"מ"
    },
    // שאלה 17
    {
        topic: "ratios",
        subTopic: "חלוקה לפי יחס",
        question_text: "בחוג מסוים היחס בין מספר הבנים למספר הבנות הוא 4:5. ידוע שיש 16 בנים בחוג. כמה חניכים (בנים ובנות יחד) יש בסך הכל בחוג?&rlm;",
        options: ["36", "20", "45", "16"],
        correctAnswer: 0,
        hint: "אם 4 חלקים שווים ל-16, כמה שווה חלק אחד? (16 חלקי 4). מצאו את סך כל החלקים יחד (4+5) והכפילו בתוצאה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הבנים הם 4 חלקים מתוך היחס. נחשב כמה חניכים יש בחלק אחד.&rlm;", math_expression: "16 : 4 = 4" },
            { verbal_explanation: "שלב ב': נחשב כמה חלקים יש בסך הכל בקבוצה (בנים + בנות).&rlm;", math_expression: "4 + 5 = 9" },
            { verbal_explanation: "שלב ג': נכפיל את סך החלקים בגודל של חלק אחד.&rlm;", math_expression: "9 × 4 = 36" }
        ],
        final_answer: "36"
    },
    // שאלה 18
    {
        topic: "ratios",
        subTopic: "חלוקה לפי יחס",
        question_text: "היקף של מלבן הוא 40 ס\"מ. היחס בין רוחב המלבן לאורכו הוא 2:3. מהו שטח המלבן?&rlm;",
        options: ["96 סמ\"ר", "192 סמ\"ר", "24 סמ\"ר", "48 סמ\"ר"],
        correctAnswer: 0,
        hint: "היקף מורכב מפעמיים אורך ופעמיים רוחב. חצי היקף (אורך אחד ורוחב אחד) הוא 20. חלקו את ה-20 לפי היחס 2:3 כדי למצוא את הצלעות. לבסוף, כפלו את הצלעות לשטח.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חצי היקף (אורך + רוחב) שווה ל-20.&rlm;", math_expression: "40 : 2 = 20" },
            { verbal_explanation: "שלב ב': נחלק את ה-20 לפי היחס 2:3. סך החלקים הוא 5. גודל של חלק הוא 4.&rlm;", math_expression: "20 : 5 = 4" },
            { verbal_explanation: "שלב ג': נמצא את הצלעות. רוחב (2 חלקים): 2 כפול 4 = 8. אורך (3 חלקים): 3 כפול 4 = 12.&rlm;", math_expression: "W = 8 , L = 12" },
            { verbal_explanation: "שלב ד': שטח מלבן הוא אורך כפול רוחב.&rlm;", math_expression: "12 × 8 = 96" }
        ],
        final_answer: "96 סמ\"ר"
    },
    // שאלה 19
    {
        topic: "ratios",
        subTopic: "חלוקה לפי יחס",
        question_text: "שלושה שותפים הקימו עסק והשקיעו בו כספים ביחס של 2:3:5. בסוף השנה העסק הרוויח 10,000 שקלים שיש לחלק ביניהם. כמה שקלים יקבל השותף שהשקיע הכי הרבה?&rlm;",
        options: ["5,000", "2,000", "3,000", "10,000"],
        correctAnswer: 0,
        hint: "סך החלקים הוא 10. חלקו את הרווח הכולל ל-10 חלקים. השותף הגדול מקבל 5 חלקים (שזה בעצם חצי!).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סך חלקי ההשקעה.&rlm;", math_expression: "2 + 3 + 5 = 10" },
            { verbal_explanation: "שלב ב': נחלק את הרווח ב-10 כדי לדעת כמה שווה חלק אחד.&rlm;", math_expression: "10000 : 10 = 1000" },
            { verbal_explanation: "שלב ג': השותף שהשקיע הכי הרבה זכאי ל-5 חלקים. נכפול 5 ב-1000.&rlm;", math_expression: "5 × 1000 = 5000" }
        ],
        final_answer: "5,000"
    },
    // שאלה 20
    {
        topic: "ratios",
        subTopic: "חלוקה לפי יחס",
        question_text: "בשקית יש כדורים בצבעים אדום, כחול וירוק ביחס של 2:5:1 (אדום 2, כחול 5, ירוק 1). אם ידוע שיש 15 כדורים כחולים, כמה כדורים ירוקים יש בשקית?&rlm;",
        options: ["3", "5", "6", "15"],
        correctAnswer: 0,
        hint: "הכחולים הם 5 חלקים והם שווים 15 כדורים. חלקו 15 ב-5 כדי למצוא את הערך של חלק אחד. הירוקים הם חלק אחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הצבע הכחול מיוצג על ידי המספר 5 ביחס. הכמות בפועל היא 15. נמצא גודל חלק יחיד.&rlm;", math_expression: "15 : 5 = 3" },
            { verbal_explanation: "שלב ב': כעת אנו יודעים שיחידת יחס אחת שווה ל-3 כדורים.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': הצבע הירוק מיוצג על ידי המספר 1 ביחס. לכן יש בדיוק 3 כדורים ירוקים.&rlm;", math_expression: "1 × 3 = 3" }
        ],
        final_answer: "3"
    },
    // שאלה 21
    {
        topic: "ratios",
        subTopic: "חלוקה לפי יחס",
        question_text: "צבעי מערבב צבע לבן וצבע אדום ביחס של 2:3 ליצירת צבע ורוד מיוחד (2 כוסות לבן לכל 3 כוסות אדום). הוא רוצה להכין 30 כוסות של צבע ורוד. בכמה כוסות של צבע אדום עליו להשתמש?&rlm;",
        options: ["18", "12", "20", "15"],
        correctAnswer: 0,
        hint: "סך החלקים בכל 'מנת עבודה' הוא 5. חלקו 30 ב-5, והכפילו בחלק של האדום (3).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': מנה אחת של התערובת מורכבת מ-5 כוסות יחד (2 לבן + 3 אדום).&rlm;", math_expression: "2 + 3 = 5" },
            { verbal_explanation: "שלב ב': נבדוק כמה 'מנות' כאלו נכנסות ב-30 כוסות.&rlm;", math_expression: "30 : 5 = 6" },
            { verbal_explanation: "שלב ג': עלינו להשתמש ב-6 מנות. בכל מנה יש 3 כוסות צבע אדום. נכפיל.&rlm;", math_expression: "6 × 3 = 18" }
        ],
        final_answer: "18"
    },
    // שאלה 22
    {
        topic: "ratios",
        subTopic: "חלוקה לפי יחס",
        question_text: "חלוקה עם נעלמים: חילקו כסף בין אורן לרועי ביחס של 3:7. ידוע שרועי קיבל 20 שקלים *יותר* מאורן. כמה כסף חולק בסך הכל בין שניהם?&rlm;",
        options: ["50 שקלים", "100 שקלים", "20 שקלים", "70 שקלים"],
        correctAnswer: 0,
        hint: "רועי קיבל 7x ואורן קיבל 3x. ההפרש ביניהם הוא 4x. ההפרש הזה שווה ל-20! מצאו את x.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הסכומים ב-x. אורן קיבל 3x, רועי קיבל 7x.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחשב את ההפרש בחלקים ביניהם. הוא קיבל 4 חלקים יותר.&rlm;", math_expression: "7x - 3x = 4x" },
            { verbal_explanation: "שלב ג': נתון שההפרש הוא 20 שקלים.&rlm;", math_expression: "4x = 20  =>  x = 5" },
            { verbal_explanation: "שלב ד': הסכום הכולל הוא 10 חלקים (3+7).&rlm;", math_expression: "10 × 5 = 50" }
        ],
        final_answer: "50 שקלים"
    },
    // שאלה 23
    {
        topic: "ratios",
        subTopic: "חלוקה לפי יחס",
        question_text: "סכום הזוויות במרובע הוא 360 מעלות. הזוויות במרובע מסוים מתייחסות זו לזו ביחס של 1:1:2:2. מה גודלה של הזווית הגדולה ביותר במרובע?&rlm;",
        options: ["120 מעלות", "60 מעלות", "180 מעלות", "90 מעלות"],
        correctAnswer: 0,
        hint: "ישנם 6 חלקים בסך הכל (1+1+2+2). חלקו 360 ב-6 והכפילו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סך כל החלקים.&rlm;", math_expression: "1 + 1 + 2 + 2 = 6" },
            { verbal_explanation: "שלב ב': נחלק 360 מעלות ב-6.&rlm;", math_expression: "360 : 6 = 60" },
            { verbal_explanation: "שלב ג': הזווית הגדולה מיוצגת על ידי הספרה 2. נכפיל את ה-60 ב-2.&rlm;", math_expression: "60 × 2 = 120" }
        ],
        final_answer: "120 מעלות"
    },
    // שאלה 24
    {
        topic: "ratios",
        subTopic: "חלוקה לפי יחס",
        question_text: "היחס בין הגיל של יעל לגיל של אחיה הגדול הוא 3:4. ידוע שהאח הוא בן 16. בת כמה יעל?&rlm;",
        options: ["12", "15", "8", "16"],
        correctAnswer: 0,
        hint: "גיל האח (4 חלקים) הוא 16. מצאו את הערך של חלק אחד, והכפילו בחלקים של יעל.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': האח מיוצג ביחס על ידי הספרה 4. גילו הוא 16. נמצא חלק אחד.&rlm;", math_expression: "16 : 4 = 4" },
            { verbal_explanation: "שלב ב': יעל מיוצגת על ידי הספרה 3. נכפיל את ה-3 בחלק אחד (שמצאנו שהוא 4).&rlm;", math_expression: "3 × 4 = 12" }
        ],
        final_answer: "12"
    },

    // ==========================================================
    // תת נושא 3: קנה מידה (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "ratios",
        subTopic: "קנה מידה",
        question_text: "קנה המידה של מפה הוא 1:100,000 (כל ס\"מ במפה שווה ל-100,000 ס\"מ במציאות). המרחק במפה בין שתי ערים הוא 5 ס\"מ. מהו המרחק במציאות בקילומטרים?&rlm;",
        options: ["5 ק\"מ", "50 ק\"מ", "500 ק\"מ", "0.5 ק\"מ"],
        correctAnswer: 0,
        hint: "הכפילו את 5 ב-100,000 כדי למצוא את המרחק בסנטימטרים. כדי להמיר מקילומטר לסנטימטר יש להוריד 5 אפסים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את המרחק האמיתי בסנטימטרים.&rlm;", math_expression: "5 × 100000 = 500000" },
            { verbal_explanation: "שלב ב': נמיר מקילומטרים למטרים (חלוקה ב-100).&rlm;", math_expression: "500000 : 100 = 5000 m" },
            { verbal_explanation: "שלב ג': נמיר ממטרים לקילומטרים (חלוקה ב-1000).&rlm;", math_expression: "5000 : 1000 = 5 km" }
        ],
        final_answer: "5 ק\"מ"
    },
    // שאלה 26
    {
        topic: "ratios",
        subTopic: "קנה מידה",
        question_text: "המרחק האמיתי בין שתי שכונות הוא 10 ק\"מ. במפה מסוימת, המרחק נמדד כ-20 ס\"מ. מהו קנה המידה של המפה?&rlm;",
        options: ["1:50,000", "1:5,000", "1:200,000", "1:10,000"],
        correctAnswer: 0,
        hint: "המירו את ה-10 ק\"מ לסנטימטרים (הוסיפו 5 אפסים). לאחר מכן רשמו את היחס: 20 ס\"מ למול המרחק הגדול, וצמצמו את 20 ל-1.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמיר 10 ק\"מ לסנטימטרים. 1 ק\"מ = 100,000 ס\"מ.&rlm;", math_expression: "10 × 100000 = 1000000" },
            { verbal_explanation: "שלב ב': נרשום את היחס בין המפה (20) למציאות (1,000,000).&rlm;", math_expression: "20 : 1000000" },
            { verbal_explanation: "שלב ג': נחלק את שני המספרים ב-20.&rlm;", math_expression: "1 : 50000" }
        ],
        final_answer: "1:50,000"
    },
    // שאלה 27
    {
        topic: "ratios",
        subTopic: "קנה מידה",
        question_text: "קנה המידה של תרשים בית הוא 1:50. האורך האמיתי של הסלון הוא 4 מטרים. מה יהיה אורך הסלון בתרשים (בסנטימטרים)?&rlm;",
        options: ["8 ס\"מ", "2 ס\"מ", "4 ס\"מ", "80 ס\"מ"],
        correctAnswer: 0,
        hint: "הפכו את המטרים לסנטימטרים (400 ס\"מ). קנה מידה של 1:50 אומר שהמציאות גדולה פי 50. לכן, חלקו את המציאות ב-50.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמיר את המטרים לסנטימטרים כדי לעבוד עם יחידות נוחות למפה.&rlm;", math_expression: "4 m = 400 cm" },
            { verbal_explanation: "שלב ב': התרשים קטן פי 50 מהמציאות. נחלק את האורך האמיתי ב-50.&rlm;", math_expression: "400 : 50 = 8" }
        ],
        final_answer: "8 ס\"מ"
    },
    // שאלה 28
    {
        topic: "ratios",
        subTopic: "קנה מידה",
        question_text: "קנה מידה מגדיל: בספר מדע צויר חרק קטנטן בקנה מידה של 10:1 (כל 10 ס\"מ בציור שווים ל-1 ס\"מ במציאות). אורך החרק בציור הוא 15 ס\"מ. מה אורכו האמיתי של החרק?&rlm;",
        options: ["1.5 ס\"מ", "150 ס\"מ", "15 ס\"מ", "0.15 ס\"מ"],
        correctAnswer: 0,
        hint: "קנה מידה 10:1 אומר שהציור *גדול* פי 10 מהמציאות. חלקו את הציור ב-10.&rlm;",
        solution_steps: [
            { verbal_explanation: "היחס הוא ציור אל מציאות: 10 אל 1. כלומר, הציור גדול פי 10.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי למצוא את הגודל האמיתי, נחלק את גודל הציור ב-10.&rlm;", math_expression: "15 : 10 = 1.5" }
        ],
        final_answer: "1.5 ס\"מ"
    },
    // שאלה 29
    {
        topic: "ratios",
        subTopic: "קנה מידה",
        question_text: "קנה מידה של שרטוט דירה הוא 1:100. שרטטו בו חדר שצורתו מלבן במידות 4 ס\"מ על 5 ס\"מ. מהו השטח **האמיתי** של החדר במ\"ר?&rlm;",
        options: ["20 מ\"ר", "2,000 מ\"ר", "200,000 מ\"ר", "40 מ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את המידות האמיתיות *לפני* שאתם מחשבים שטח! 4 ס\"מ במפה הם 4 מטר במציאות (פי 100). 5 ס\"מ הם 5 מטר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את האורך האמיתי. 4 ס\"מ במפה כפול 100 שווים 400 ס\"מ (4 מטר).&rlm;", math_expression: "4 × 100 = 400 cm = 4 m" },
            { verbal_explanation: "שלב ב': נחשב את הרוחב האמיתי. 5 ס\"מ במפה כפול 100 שווים 500 ס\"מ (5 מטר).&rlm;", math_expression: "5 × 100 = 500 cm = 5 m" },
            { verbal_explanation: "שלב ג': נחשב את השטח במטרים מרובעים.&rlm;", math_expression: "4 × 5 = 20" }
        ],
        final_answer: "20 מ\"ר"
    },
    // שאלה 30
    {
        topic: "ratios",
        subTopic: "קנה מידה",
        question_text: "המרחק האמיתי בין אילת למטולה הוא בערך 400 ק\"מ. במפה קטנה, המרחק הזה מצויר כאורך של 10 ס\"מ. איזה תרגיל מראה את החישוב למציאת קנה המידה של המפה?&rlm;",
        options: ["10 : (400 × 100,000)", "10 : 400", "400 : 10", "100,000 : 10"],
        correctAnswer: 0,
        hint: "היחס הוא 'מפה חלקי מציאות'. المפה היא 10 ס\"מ. المציאות היא 400 ק\"מ, שצריך להפוך לסנטימטרים על ידי כפל ב-100,000.&rlm;",
        solution_steps: [
            { verbal_explanation: "קנה מידה מוגדר כיחס שבין המרחק במפה (10) למרחק במציאות (באותן יחידות).&rlm;", math_expression: "" },
            { verbal_explanation: "נמיר 400 ק\"מ לסנטימטרים: 400 כפול 100,000.&rlm;", math_expression: "400 × 100000 = 40,000,000" },
            { verbal_explanation: "היחס הוא 10 ל- 40,000,000.&rlm;", math_expression: "10 : (400 × 100000)" }
        ],
        final_answer: "10 : (400 × 100,000)"
    },
    // שאלה 31
    {
        topic: "ratios",
        subTopic: "קנה מידה",
        question_text: "דגם מוקטן של מכונית נבנה בקנה מידה של 1:24. אורך הדגם הוא 20 ס\"מ. מהו אורך המכונית האמיתית (במטרים)?&rlm;",
        options: ["4.8 מטרים", "480 מטרים", "2.4 מטרים", "0.48 מטרים"],
        correctAnswer: 0,
        hint: "הכפילו את אורך הדגם ב-24 כדי למצוא את האורך האמיתי בסנטימטרים. אל תשכחו להמיר למטרים בסוף (חלוקה ב-100).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המכונית האמיתית גדולה פי 24 מהדגם. נכפול את אורך הדגם ב-24.&rlm;", math_expression: "20 × 24 = 480 cm" },
            { verbal_explanation: "שלב ב': האורך שהתקבל הוא בסנטימטרים. המרה למטרים נעשית על ידי חלוקה ב-100.&rlm;", math_expression: "480 : 100 = 4.8 m" }
        ],
        final_answer: "4.8 מטרים"
    },
    // שאלה 32
    {
        topic: "ratios",
        subTopic: "קנה מידה",
        question_text: "אם 2 ס\"מ במפה מייצגים 8 ק\"מ במציאות, מהו קנה המידה של המפה?&rlm;",
        options: ["1:400,000", "1:4,000", "1:40,000", "1:800,000"],
        correctAnswer: 0,
        hint: "הפכו 8 ק\"מ לסנטימטרים (800,000). היחס הוא 2 ל-800,000. חלקו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמיר את הקילומטרים לסנטימטרים.&rlm;", math_expression: "8 km = 800,000 cm" },
            { verbal_explanation: "שלב ב': נרשום את היחס.&rlm;", math_expression: "2 : 800000" },
            { verbal_explanation: "שלב ג': נצמצם את שני המספרים על ידי חלוקה ב-2.&rlm;", math_expression: "1 : 400000" }
        ],
        final_answer: "1:400,000"
    },
    // שאלה 33
    {
        topic: "ratios",
        subTopic: "קנה מידה",
        question_text: "תא חידק שאורכו האמיתי הוא 0.2 מ\"מ משורטט בספר. בשרטוט, אורך התא הוא 8 ס\"מ (שהם 80 מ\"מ). איזה קנה מידה (ציור:מציאות) מציג השרטוט?&rlm;",
        options: ["400:1", "1:400", "40:1", "80:2"],
        correctAnswer: 0,
        hint: "השרטוט (80 מ\"מ) מול המציאות (0.2 מ\"מ). היחס הוא 80 ל-0.2. הכפילו ב-10 כדי להיפטר מהנקודה (800 ל-2) וחלקו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את היחס באותן יחידות (מ\"מ). ציור (80) אל מול מציאות (0.2).&rlm;", math_expression: "80 : 0.2" },
            { verbal_explanation: "שלב ב': נכפיל את שני הצדדים ב-10 כדי להיפטר מהשבר העשרוני.&rlm;", math_expression: "800 : 2" },
            { verbal_explanation: "שלב ג': נחלק ב-2.&rlm;", math_expression: "400 : 1" }
        ],
        final_answer: "400:1"
    },
    // שאלה 34
    {
        topic: "ratios",
        subTopic: "קנה מידה",
        question_text: "יש לכם שתי מפות של אותה ארץ. מפה א' בקנה מידה 1:100,000. מפה ב' בקנה מידה 1:50,000. המרחק בין שתי ערים במפה א' הוא 4 ס\"מ. מה יהיה המרחק בין אותן ערים במפה ב'?&rlm;",
        options: ["8 ס\"מ", "2 ס\"מ", "4 ס\"מ", "10 ס\"מ"],
        correctAnswer: 0,
        hint: "מפה ב' 'קרובה' פי 2 ממפה א' (היא מכווצת את המציאות רק פי 50 אלף במקום מאה אלף). לכן הכל ייראה בה כפול בגודל.&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א': נמצא את המרחק האמיתי ממפה א' (4 כפול 100,000).&rlm;", math_expression: "400,000 cm" },
            { verbal_explanation: "כעת נבדוק כמה זה במפה ב' על ידי חלוקה בקנה המידה שלה.&rlm;", math_expression: "400000 : 50000 = 8" },
            { verbal_explanation: "דרך ב': מפה ב' (1:50,000) מוגדלת פי 2 ממפה א' (1:100,000). לכן נכפיל את המרחק ב-2.&rlm;", math_expression: "4 × 2 = 8" }
        ],
        final_answer: "8 ס\"מ"
    },
    // שאלה 35
    {
        topic: "ratios",
        subTopic: "קנה מידה",
        question_text: "קנה מידה של מפה הוא 1:20,000. פארק מיוצג במפה כמלבן באורך 3 ס\"מ ורוחב 2 ס\"מ. מהו ההיקף **האמיתי** של הפארק במטרים?&rlm;",
        options: ["2,000 מטרים", "1,000 מטרים", "400 מטרים", "200 מטרים"],
        correctAnswer: 0,
        hint: "חשבו קודם את ההיקף על המפה (3+2+3+2 = 10 ס\"מ). הכפילו אותו בקנה המידה, והמירו למטרים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את היקף המלבן במפה.&rlm;", math_expression: "3 + 2 + 3 + 2 = 10 cm" },
            { verbal_explanation: "שלב ב': נכפיל בקנה המידה כדי למצוא את ההיקף האמיתי בסנטימטרים.&rlm;", math_expression: "10 × 20000 = 200000 cm" },
            { verbal_explanation: "שלב ג': נמיר למטרים (100 ס\"מ = 1 מטר, לכן נחלק ב-100).&rlm;", math_expression: "200000 : 100 = 2000 m" }
        ],
        final_answer: "2,000 מטרים"
    },
    // שאלה 36
    {
        topic: "ratios",
        subTopic: "קנה מידה",
        question_text: "איזה מבין קני המידה הבאים מתאר את המפה ה'מפורטת' ביותר (זום גדול יותר, מראה אזור קטן יותר בפירוט רב יותר)?&rlm;",
        options: ["1:10,000", "1:100,000", "1:1,000,000", "1:500,000"],
        correctAnswer: 0,
        hint: "מפה מפורטת מקטינה פחות את המציאות. מספר קטן יותר בצד ימין (המספר של המציאות) אומר שההקטנה פחות חזקה.&rlm;",
        solution_steps: [
            { verbal_explanation: "קנה מידה הוא שבר (למשל 1 חלקי 10,000).&rlm;", math_expression: "" },
            { verbal_explanation: "ככל שהמחלק (המכנה) קטן יותר, כך השבר גדול יותר, כלומר אנו רואים את המציאות גדולה ומפורטת יותר.&rlm;", math_expression: "1/10000 > 1/1000000" }
        ],
        final_answer: "1:10,000"
    },

    // ==========================================================
    // תת נושא 4: פרופורציה (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "ratios",
        subTopic: "פרופורציה",
        question_text: "פתרו את הפרופורציה הבאה (מצאו את x):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x / 6 = 10 / 15</div>",
        options: ["4", "5", "6", "3"],
        correctAnswer: 0,
        hint: "כפל בהצלבה: הכפילו באלכסונים. x כפול 15 שווה ל-6 כפול 10. לחלופין, צמצמו את 10/15 לשני שלישים, ושאלו מה חלקי 6 נותן שני שלישים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבצע כפל בהצלבה.&rlm;", math_expression: "15 × x = 6 × 10" },
            { verbal_explanation: "שלב ב': נחשב את המכפלה.&rlm;", math_expression: "15x = 60" },
            { verbal_explanation: "שלב ג': נחלק ב-15.&rlm;", math_expression: "x = 60 : 15 = 4" }
        ],
        final_answer: "4"
    },
    // שאלה 38
    {
        topic: "ratios",
        subTopic: "פרופורציה",
        question_text: "השלימו את ה-x החסר בפרופורציה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4 / x = 12 / 21</div>",
        options: ["7", "14", "9", "6"],
        correctAnswer: 0,
        hint: "תראו מה קרה למונה: הוא גדל פי 3 (מ-4 ל-12). לכן, גם המכנה צריך לגדול פי 3 כדי להגיע ל-21.&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א': נסתכל על הקשר האופקי. המונה 4 הוכפל פי 3 כדי להפוך ל-12.&rlm;", math_expression: "4 × 3 = 12" },
            { verbal_explanation: "לכן, המכנה x גם הוא הוכפל פי 3 כדי להפוך ל-21.&rlm;", math_expression: "x × 3 = 21  =>  x = 7" },
            { verbal_explanation: "דרך ב' (כפל בהצלבה): 12x = 4 * 21 = 84. נחלק 84 ב-12 ונקבל 7.&rlm;", math_expression: "" }
        ],
        final_answer: "7"
    },
    // שאלה 39
    {
        topic: "ratios",
        subTopic: "פרופורציה",
        question_text: "פרופורציה עם ביטוי אלגברי. מצאו את x:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 2) / 5 = 12 / 10</div>",
        options: ["4", "6", "8", "2"],
        correctAnswer: 0,
        hint: "השבר 12/10 ניתן לצמצום. אפשר גם לראות שהמכנה (5) הוכפל פי 2 כדי להגיע ל-10. לכן, הביטוי במונה (x+2) צריך להיות מוכפל פי 2 כדי לתת 12.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבצע כפל בהצלבה.&rlm;", math_expression: "10 × (x + 2) = 5 × 12" },
            { verbal_explanation: "שלב ב': נפתח סוגריים ונחשב.&rlm;", math_expression: "10x + 20 = 60" },
            { verbal_explanation: "שלב ג': נחסר 20.&rlm;", math_expression: "10x = 40" },
            { verbal_explanation: "שלב ד': נחלק ב-10.&rlm;", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },
    // שאלה 40
    {
        topic: "ratios",
        subTopic: "פרופורציה",
        question_text: "מחירם של 3 ק\"ג תפוחים הוא 18 שקלים. כמה יעלו 8 ק\"ג תפוחים מאותו הסוג?&rlm;",
        options: ["48 שקלים", "54 שקלים", "40 שקלים", "64 שקלים"],
        correctAnswer: 0,
        hint: "בנו פרופורציה: 3 ק\"ג חלקי 18 שקלים שווה ל-8 ק\"ג חלקי x שקלים. או פשוט מצאו מחיר לקילו אחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א': נמצא את המחיר לקילו אחד. 18 שקלים ל-3 קילו.&rlm;", math_expression: "18 : 3 = 6" },
            { verbal_explanation: "עכשיו נכפול במחיר החדש (8 קילו).&rlm;", math_expression: "8 × 6 = 48" },
            { verbal_explanation: "דרך ב' (פרופורציה): 3/18 = 8/x. כפל בהצלבה נותן 3x = 144. נחלק ב-3 ונקבל 48.&rlm;", math_expression: "" }
        ],
        final_answer: "48 שקלים"
    },
    // שאלה 41
    {
        topic: "ratios",
        subTopic: "פרופורציה",
        question_text: "מכונית עוברת מרחק של 150 ק\"מ ב-2 שעות. מה המרחק שתעבור ב-5 שעות (בהנחה שמהירותה נשארת קבועה)?&rlm;",
        options: ["375 ק\"מ", "300 ק\"מ", "400 ק\"מ", "250 ק\"מ"],
        correctAnswer: 0,
        hint: "זהו יחס ישר. אפשר למצוא את המהירות לשעה אחת, ולהכפיל ב-5.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את המהירות (מרחק לשעה אחת).&rlm;", math_expression: "150 : 2 = 75" },
            { verbal_explanation: "שלב ב': נכפול את המהירות (75) בזמן המבוקש (5 שעות).&rlm;", math_expression: "75 × 5 = 375" }
        ],
        final_answer: "375 ק\"מ"
    },
    // שאלה 42
    {
        topic: "ratios",
        subTopic: "פרופורציה",
        question_text: "מתכון לעוגה דורש 2 כוסות סוכר לכל 5 כוסות קמח. אופה רוצה להכין עוגת ענק ויש לו 15 כוסות קמח. כמה כוסות סוכר הוא יצטרך?&rlm;",
        options: ["6", "10", "8", "4"],
        correctAnswer: 0,
        hint: "היחס הוא סוכר/קמח = 2/5. אנו מחפשים כמה סוכר יש אם הקמח הוא 15. המכנה גדל פי 3 (מ-5 ל-15).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב משוואת פרופורציה (סוכר חלקי קמח).&rlm;", math_expression: "2 / 5 = x / 15" },
            { verbal_explanation: "שלב ב': נראה ש-5 הוכפל פי 3 כדי להגיע ל-15.&rlm;", math_expression: "5 × 3 = 15" },
            { verbal_explanation: "שלב ג': נכפיל גם את המונה (2) פי 3.&rlm;", math_expression: "2 × 3 = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 43
    {
        topic: "ratios",
        subTopic: "פרופורציה",
        question_text: "בשער חליפין מסוים, 5 דולרים שווים 18 שקלים. כמה שקלים נקבל עבור 20 דולרים?&rlm;",
        options: ["72 שקלים", "90 שקלים", "60 שקלים", "70 שקלים"],
        correctAnswer: 0,
        hint: "20 דולרים הם בדיוק פי 4 מאשר 5 דולרים. לכן גם השקלים יוכפלו פי 4.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה שכמות הדולרים גדלה פי 4 (מ-5 ל-20).&rlm;", math_expression: "20 : 5 = 4" },
            { verbal_explanation: "שלב ב': נכפול את סכום השקלים המקביל (18) גם כן פי 4.&rlm;", math_expression: "18 × 4 = 72" }
        ],
        final_answer: "72 שקלים"
    },
    // שאלה 44
    {
        topic: "ratios",
        subTopic: "פרופורציה",
        question_text: "פרופורציה בין משולשים דומים: משולש א' דומה למשולש ב'. צלע בבסיס משולש א' אורכה 4 ס\"מ וצלע שמאלית אורכה 6 ס\"מ. במשולש ב', צלע הבסיס המתאימה היא 10 ס\"מ. מהו אורך הצלע השמאלית במשולש ב'?&rlm;",
        options: ["15 ס\"מ", "12 ס\"מ", "20 ס\"מ", "8 ס\"מ"],
        correctAnswer: 0,
        hint: "היחס בין הצלעות נשמר: בסיס חלקי בסיס שווה שמאלית חלקי שמאלית (4/10 = 6/x).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה פרופורציה. צלע קצרה למשולש א' / צלע קצרה למשולש ב' = צלע ארוכה א' / צלע ארוכה ב'.&rlm;", math_expression: "4 / 10 = 6 / x" },
            { verbal_explanation: "שלב ב': נבצע כפל בהצלבה.&rlm;", math_expression: "4 × x = 10 × 6" },
            { verbal_explanation: "שלב ג': נפתור את המשוואה.&rlm;", math_expression: "4x = 60  =>  x = 15" }
        ],
        final_answer: "15 ס\"מ"
    },
    // שאלה 45
    {
        topic: "ratios",
        subTopic: "פרופורציה",
        question_text: "פתרו את משוואת הפרופורציה המורכבת:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>7 / 3 = 35 / (2x - 1)</div>",
        options: ["8", "16", "7", "10"],
        correctAnswer: 0,
        hint: "המונה 7 הוכפל פי 5 כדי להגיע ל-35. לכן גם המכנה 3 חייב להיות מוכפל ב-5 כדי להגיע לערך שווה ל- (2x-1).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נשים לב שהמונה הוכפל פי 5 (מ-7 ל-35). לכן גם המכנה צריך לגדול פי 5.&rlm;", math_expression: "3 × 5 = 15" },
            { verbal_explanation: "שלב ב': המכנה השני כולו (2x-1) חייב להיות שווה ל-15.&rlm;", math_expression: "2x - 1 = 15" },
            { verbal_explanation: "שלב ג': נפתור את המשוואה. נעביר 1 ימינה בחיבור.&rlm;", math_expression: "2x = 16" },
            { verbal_explanation: "שלב ד': נחלק ב-2.&rlm;", math_expression: "x = 8" }
        ],
        final_answer: "8"
    },
    // שאלה 46
    {
        topic: "ratios",
        subTopic: "פרופורציה",
        question_text: "איך נוכל לבדוק בקלות האם השוויון 4/10 = 6/15 הוא פרופורציה נכונה ואמיתית?&rlm;",
        options: ["נבדוק 'כפל בהצלבה': האם 4 כפול 15 שווה ל-10 כפול 6.", "נחבר את המונים ואת המכנים ונראה אם יוצא אותו מספר.", "זה לא נכון כי 4 לא שווה ל-6.", "נחסר 4 מ-10 ו-6 מ-15."],
        correctAnswer: 0,
        hint: "שתי דרכים לבדוק פרופורציה: כפל באלכסון (צריך לצאת שווה), או צמצום שני השברים (שניהם מצטמצמים ל-2/5).&rlm;",
        solution_steps: [
            { verbal_explanation: "תכונת הפרופורציה קובעת ששני שברים שווים זה לזה אם מכפלת האלכסונים שלהם שווה.&rlm;", math_expression: "" },
            { verbal_explanation: "אלכסון ראשון: 4 כפול 15 שווה 60.&rlm;", math_expression: "4 × 15 = 60" },
            { verbal_explanation: "אלכסון שני: 10 כפול 6 שווה 60.&rlm;", math_expression: "10 × 6 = 60" },
            { verbal_explanation: "מכיוון שהתוצאות שוות, הפרופורציה נכונה.&rlm;", math_expression: "" }
        ],
        final_answer: "נבדוק 'כפל בהצלבה': האם 4 כפול 15 שווה ל-10 כפול 6."
    },
    // שאלה 47
    {
        topic: "ratios",
        subTopic: "פרופורציה",
        question_text: "מכונת דפוס מדפיסה 400 עמודים ב-3 דקות. כמה עמודים היא תדפיס ב-12 דקות (בהנחה שקצב העבודה נשאר קבוע)?&rlm;",
        options: ["1,600", "1,200", "800", "4,800"],
        correctAnswer: 0,
        hint: "הזמן גדל מ-3 דקות ל-12 דקות (פי 4). לכן גם כמות ההדפסה תגדל פי 4.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את יחס ההגדלה של הזמן.&rlm;", math_expression: "12 : 3 = 4" },
            { verbal_explanation: "שלב ב': נכפיל את כמות ההדפסה המקורית (400) ביחס ההגדלה (4).&rlm;", math_expression: "400 × 4 = 1600" }
        ],
        final_answer: "1,600"
    },
    // שאלה 48
    {
        topic: "ratios",
        subTopic: "פרופורציה",
        question_text: "ילד שגובהו 2 מטרים מטיל צל באורך 3 מטרים. באותה שעה, עץ הנמצא לידו מטיל צל באורך 15 מטרים. מהו גובהו של העץ? (שימוש בפרופורציה של צל וגובה)&rlm;",
        options: ["10 מטרים", "12 מטרים", "8 מטרים", "30 מטרים"],
        correctAnswer: 0,
        hint: "היחס בין הגובה לצל נשמר. גובה (2) / צל (3) = עץ (x) / צל עץ (15). הצל של העץ גדול פי 5 מהצל של הילד.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה פרופורציה (גובה לחלק לצל).&rlm;", math_expression: "2 / 3 = x / 15" },
            { verbal_explanation: "שלב ב': נזהה ש-3 הוכפל ב-5 כדי להגיע ל-15.&rlm;", math_expression: "3 × 5 = 15" },
            { verbal_explanation: "שלב ג': נכפיל את גובה הילד (2) ב-5 כדי למצוא את גובה העץ.&rlm;", math_expression: "2 × 5 = 10" }
        ],
        final_answer: "10 מטרים"
    }

];
const questionsDB = [
    // ==========================================
    // תת נושא 1: הגדרה ותכונות (10 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "הגדרה ותכונות",
        question_text: "בכיתה יש 10 בנים ו-15 בנות. מהו היחס בין מספר הבנים למספר הבנות? (הקפידו לצמצם את היחס).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='60' cy='50' r='20' fill='#3b82f6'/><circle cx='140' cy='50' r='20' fill='#ef4444'/><text x='53' y='55' font-size='16' fill='white' font-family='Arial'>10</text><text x='133' y='55' font-size='16' fill='white' font-family='Arial'>15</text></svg></div>",
        options: ["2 : 3", "3 : 2", "10 : 25", "2 : 5"],
        correctAnswer: 0,
        hint: "רשמו את המספרים לפי הסדר שביקשו בשאלה (קודם בנים, אחר כך בנות). כדי לצמצם, חפשו מספר שאפשר לחלק בו גם את 10 וגם את 15 ללא שארית.",
        solution_steps: [
            { verbal_explanation: "נרשום את מספר הבנים ואת מספר הבנות לפי הסדר שביקשו מאיתנו.", math_expression: "10 \\quad , \\quad 15" },
            { verbal_explanation: "נרשום את המספרים כיחס עם נקודתיים באמצע.", math_expression: "10 : 15" },
            { verbal_explanation: "כדי לצמצם את היחס, נחפש מספר שאפשר לחלק בו גם את עשר וגם את חמש עשרה. המספר הוא חמש.", math_expression: "5" },
            { verbal_explanation: "נחלק את מספר הבנים בחמש.", math_expression: "10 : 5 = 2" },
            { verbal_explanation: "נחלק את מספר הבנות בחמש.", math_expression: "15 : 5 = 3" },
            { verbal_explanation: "נרשום את היחס החדש והמצומצם שקיבלנו.", math_expression: "2 : 3" }
        ],
        final_answer: "2 : 3"
    },
    {
        topic: "math_5_6",
        subTopic: "הגדרה ותכונות",
        question_text: "בקערת פירות יש 8 תפוחים ו-12 תפוזים. מהו היחס בין מספר התפוחים למספר התפוזים (לאחר צמצום)?&rlm;",
        options: ["2 : 3", "3 : 2", "4 : 6", "1 : 2"],
        correctAnswer: 0,
        hint: "כתבו 8 בצד ימין ו-12 בצד שמאל. איזה מספר הכי גדול מחלק את שניהם?",
        solution_steps: [
            { verbal_explanation: "נתחיל מלרשום את היחס בין התפוחים לתפוזים בדיוק כמו המספרים שבשאלה.", math_expression: "8 : 12" },
            { verbal_explanation: "נחפש מספר שבעזרתו אפשר לחלק גם את שמונה וגם את שתים עשרה ללא שארית. נבחר במספר ארבע.", math_expression: "4" },
            { verbal_explanation: "נחלק את הצד של התפוחים (שמונה) בארבע.", math_expression: "8 : 4 = 2" },
            { verbal_explanation: "נחלק את הצד של התפוזים (שתים עשרה) בארבע.", math_expression: "12 : 4 = 3" },
            { verbal_explanation: "נקבל את היחס המצומצם והסופי.", math_expression: "2 : 3" }
        ],
        final_answer: "2 : 3"
    },
    {
        topic: "math_5_6",
        subTopic: "הגדרה ותכונות",
        question_text: "היחס בין עפרונות כחולים לאדומים בקלמר הוא 1 : 4 (על כל עיפרון כחול יש ארבעה אדומים). אם יש בקלמר 3 עפרונות כחולים, כמה עפרונות אדומים יש בו?&rlm;",
        options: ["12", "10", "15", "7"],
        correctAnswer: 0,
        hint: "אם מספר העפרונות הכחולים גדל מ-1 ל-3 (הוכפל פי 3), עלינו להכפיל גם את מספר העפרונות האדומים פי 3 כדי לשמור על אותו היחס.",
        solution_steps: [
            { verbal_explanation: "היחס ההתחלתי אומר שעל כל עיפרון כחול אחד, יש ארבעה עפרונות אדומים.", math_expression: "1 : 4" },
            { verbal_explanation: "אנחנו יודעים שבמציאות יש לנו שלושה עפרונות כחולים. נבדוק פי כמה גדל הצד של הכחולים.", math_expression: "3 : 1 = 3" },
            { verbal_explanation: "כדי לשמור על יחס תקין ושווה, אנחנו חייבים להכפיל גם את הצד השני (האדומים) בדיוק באותו מספר.", math_expression: "4 \\times 3" },
            { verbal_explanation: "נפתור את תרגיל הכפל כדי לגלות כמה עפרונות אדומים יש בסך הכל.", math_expression: "12" }
        ],
        final_answer: "12"
    },
    {
        topic: "math_5_6",
        subTopic: "הגדרה ותכונות",
        question_text: "בפיצרייה, על כל 2 פיצות עם פטריות מוכרים 5 פיצות עם זיתים. היחס הוא 2 : 5. אם נמכרו 10 פיצות עם פטריות, כמה פיצות עם זיתים נמכרו?&rlm;",
        options: ["25", "20", "15", "10"],
        correctAnswer: 0,
        hint: "בדקו פי כמה גדל המספר של פיצות הפטריות (מ-2 ל-10). הכפילו גם את המספר השני באותו הכופל.",
        solution_steps: [
            { verbal_explanation: "היחס בין פיצה פטריות לפיצה זיתים הוא שתיים לחמש.", math_expression: "2 : 5" },
            { verbal_explanation: "מספר הפיצות עם הפטריות במציאות הוא עשר. נבדוק פי כמה זה גדול יותר מהמספר שתיים.", math_expression: "10 : 2 = 5" },
            { verbal_explanation: "הכפלנו את הצד הראשון פי חמישה. לכן, חובה עלינו להכפיל גם את הצד השני (פיצות הזיתים) פי חמישה.", math_expression: "5 \\times 5" },
            { verbal_explanation: "נפתור ונגלה את התשובה הסופית.", math_expression: "25" }
        ],
        final_answer: "25"
    },
    {
        topic: "math_5_6",
        subTopic: "הגדרה ותכונות",
        question_text: "בחניון יש 12 מכוניות לבנות ו-18 מכוניות שחורות. מהו היחס בין המכוניות הלבנות לבין כלל המכוניות בחניון? (הקפידו לצמצם).&rlm;",
        options: ["2 : 5", "2 : 3", "12 : 18", "1 : 3"],
        correctAnswer: 0,
        hint: "שימו לב: השאלה מבקשת את היחס בין המכוניות הלבנות לבין סך הכל המכוניות. קודם חברו את הלבנות והשחורות כדי למצוא את הסך הכל.",
        solution_steps: [
            { verbal_explanation: "קודם נחשב כמה מכוניות יש בסך הכל בחניון. נחבר את הלבנות והשחורות.", math_expression: "12 + 18 = 30" },
            { verbal_explanation: "השאלה מבקשת את היחס בין המכוניות הלבנות (שתים עשרה) לבין כלל המכוניות בחניון (שלושים). נרשום את זה כיחס.", math_expression: "12 : 30" },
            { verbal_explanation: "כדי לצמצם את היחס, נחלק את שני המספרים במספר שש.", math_expression: "6" },
            { verbal_explanation: "נחלק את שתים עשרה בשש.", math_expression: "12 : 6 = 2" },
            { verbal_explanation: "נחלק את שלושים בשש.", math_expression: "30 : 6 = 5" },
            { verbal_explanation: "היחס המצומצם והסופי הוא שתיים לחמש.", math_expression: "2 : 5" }
        ],
        final_answer: "2 : 5"
    },
    {
        topic: "math_5_6",
        subTopic: "הגדרה ותכונות",
        question_text: "איזה מהיחסים הבאים אינו שווה (אינו שקול) ליחס 3 : 4?&rlm;",
        options: ["8 : 12", "6 : 8", "15 : 20", "30 : 40"],
        correctAnswer: 0,
        hint: "כדי לבדוק אם יחס שווה ליחס אחר, נסו לחלק או להכפיל את שני הצדדים שלו באותו מספר. מצאו איזו תשובה אי אפשר לסדר ככה.",
        solution_steps: [
            { verbal_explanation: "היחס הבסיסי שלנו הוא שלוש לארבע.", math_expression: "3 : 4" },
            { verbal_explanation: "אם נכפיל את שני הצדדים בשתיים, נקבל שש לשמונה (לכן זה יחס שווה).", math_expression: "(3 \\times 2) : (4 \\times 2) = 6 : 8" },
            { verbal_explanation: "אם נכפיל את שני הצדדים בחמש, נקבל חמש עשרה לעשרים (זה יחס שווה).", math_expression: "(3 \\times 5) : (4 \\times 5) = 15 : 20" },
            { verbal_explanation: "אם נכפיל בעשר, נקבל שלושים לארבעים (גם זה שווה).", math_expression: "(3 \\times 10) : (4 \\times 10) = 30 : 40" },
            { verbal_explanation: "אבל התשובה שמונה לשתים עשרה לא מתאימה, כי אי אפשר להכפיל את שלוש במספר שלם ולקבל שמונה. לכן זהו היחס השונה.", math_expression: "8 : 12" }
        ],
        final_answer: "8 : 12"
    },
    {
        topic: "math_5_6",
        subTopic: "הגדרה ותכונות",
        question_text: "לאופה יש מתכון לעוגיות. על כל 2 כוסות קמח הוא שם 3 כפות סוכר. היחס הוא 2 : 3. היום הוא החליט להכין כמות גדולה ושם 15 כפות סוכר. כמה כוסות קמח הוא צריך לשים?&rlm;",
        options: ["10", "12", "8", "20"],
        correctAnswer: 0,
        hint: "היחס בין קמח לסוכר הוא 2 : 3. כמות הסוכר גדלה מ-3 ל-15. פי כמה היא גדלה? הכפילו את כמות הקמח באותו המספר.",
        solution_steps: [
            { verbal_explanation: "נרשום את היחס הבסיסי מהמתכון (קמח ואז סוכר).", math_expression: "2 : 3" },
            { verbal_explanation: "האופה השתמש בחמש עשרה כפות סוכר. נבדוק פי כמה זה גדול מהכמות הרגילה של הסוכר במתכון.", math_expression: "15 : 3 = 5" },
            { verbal_explanation: "מכיוון שהכפלנו את צד הסוכר בחמש, אנחנו חייבים להכפיל גם את צד הקמח בחמש כדי שהעוגיות יצאו טעימות.", math_expression: "2 \\times 5" },
            { verbal_explanation: "נפתור ונקבל את כמות כוסות הקמח הנדרשת.", math_expression: "10" }
        ],
        final_answer: "10"
    },
    {
        topic: "math_5_6",
        subTopic: "הגדרה ותכונות",
        question_text: "מהו היחס המצומצם ביותר בין המספרים 24 ו-36?&rlm;",
        options: ["2 : 3", "12 : 18", "4 : 6", "6 : 9"],
        correctAnswer: 0,
        hint: "חפשו את המספר הכי גדול שמחלק גם את 24 וגם את 36 ללא שארית, וחלקו בו.",
        solution_steps: [
            { verbal_explanation: "נרשום את היחס עם המספרים שקיבלנו.", math_expression: "24 : 36" },
            { verbal_explanation: "אפשר להתחיל לחלק בהדרגה. למשל, נחלק את שני המספרים בשש.", math_expression: "24 : 6 = 4 \\quad , \\quad 36 : 6 = 6" },
            { verbal_explanation: "היחס שקיבלנו עכשיו הוא ארבע לשש. אבל אפשר לצמצם אותו אפילו יותר. נחלק את שני הצדדים בשתיים.", math_expression: "4 : 6" },
            { verbal_explanation: "ארבע חלקי שתיים זה שתיים. שש חלקי שתיים זה שלוש.", math_expression: "4 : 2 = 2 \\quad , \\quad 6 : 2 = 3" },
            { verbal_explanation: "הגענו ליחס הכי קטן ופשוט שאפשר.", math_expression: "2 : 3" }
        ],
        final_answer: "2 : 3"
    },
    {
        topic: "math_5_6",
        subTopic: "הגדרה ותכונות",
        question_text: "בשבוע אחד יש 5 ימי חול (ימי לימודים ועבודה) ו-2 ימי סוף שבוע (שישי ושבת). מהו היחס בין ימי סוף השבוע לבין כלל ימי השבוע?&rlm;",
        options: ["2 : 7", "5 : 7", "2 : 5", "5 : 2"],
        correctAnswer: 0,
        hint: "קראו היטב: ביקשו את היחס בין ימי סוף השבוע (שישי ושבת) לבין סך כל הימים שיש בשבוע שלם (7).",
        solution_steps: [
            { verbal_explanation: "נרשום לעצמנו כמה ימי סוף שבוע יש. יש שישי ושבת, שזה יחד יומיים.", math_expression: "2" },
            { verbal_explanation: "נזכור כמה ימים יש בסך הכל בשבוע שלם (מתחילת ראשון עד סוף שבת).", math_expression: "7" },
            { verbal_explanation: "נרשום את היחס בדיוק לפי הסדר שביקשו מאיתנו: קודם סוף השבוע, ואז כל השבוע.", math_expression: "2 : 7" }
        ],
        final_answer: "2 : 7"
    },
    {
        topic: "math_5_6",
        subTopic: "הגדרה ותכונות",
        question_text: "רחלי מכינה שרשרת חרוזים. על כל 3 חרוזים צהובים היא משחילה חרוז אחד ירוק. היחס הוא 3 : 1. באיזה מהשרשראות הבאות יש בדיוק את אותו היחס?&rlm;",
        options: ["15 צהובים ו-5 ירוקים", "10 צהובים ו-5 ירוקים", "6 צהובים ו-3 ירוקים", "9 צהובים ו-2 ירוקים"],
        correctAnswer: 0,
        hint: "בדקו איזו מהתשובות מציגה מספרים שאם נצמצם אותם נגיע ליחס הבסיסי של 3 : 1.",
        solution_steps: [
            { verbal_explanation: "היחס המקורי שלנו הוא שלושה צהובים על כל אחד ירוק.", math_expression: "3 : 1" },
            { verbal_explanation: "נבדוק את התשובה הראשונה (חמש עשרה לחמש) ונצמצם אותה. נחלק את שני המספרים בחמש.", math_expression: "15 : 5 = 3 \\quad , \\quad 5 : 5 = 1" },
            { verbal_explanation: "ראינו שאחרי החלוקה קיבלנו בדיוק את היחס המקורי.", math_expression: "3 : 1" },
            { verbal_explanation: "לכן זו השרשרת ששומרת על החוקיות הנכונה של יחס הצבעים.", math_expression: "15 : 5" }
        ],
        final_answer: "15 צהובים ו-5 ירוקים"
    },

    // ==========================================
    // תת נושא 2: חלוקה לפי יחס (10 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "חלוקה לפי יחס",
        question_text: "סבא נתן לנכדיו, יובל ועדי, 20 סוכריות. הוא אמר להם לחלק את הסוכריות ביניהם ביחס של 2 : 3 (יובל יקבל 2 חלקים ועדי תקבל 3 חלקים). כמה סוכריות תקבל עדי?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='30' y='30' width='40' height='40' fill='#ef4444' rx='8'/><rect x='130' y='30' width='40' height='40' fill='#3b82f6' rx='8'/><text x='45' y='55' font-size='16' fill='white' font-family='Arial'>2</text><text x='145' y='55' font-size='16' fill='white' font-family='Arial'>3</text><text x='95' y='55' font-size='16' font-family='Arial'>:</text></svg></div>",
        options: ["12", "8", "10", "15"],
        correctAnswer: 0,
        hint: "חברו את כל חלקי היחס יחד (2+3) כדי לגלות לכמה חלקים שווים מחלקים את כל הסוכריות. אחר כך מצאו כמה סוכריות יש בחלק אחד.",
        solution_steps: [
            { verbal_explanation: "קודם כל, נחבר את חלקי היחס יחד כדי לדעת לכמה קבוצות שוות אנחנו הולכים לחלק את כל הסוכריות.", math_expression: "2 + 3 = 5" },
            { verbal_explanation: "עכשיו נחלק את כל העשרים סוכריות לחמש קבוצות שוות, כדי לגלות כמה סוכריות יש בכל קבוצה (כל חלק).", math_expression: "20 : 5 = 4" },
            { verbal_explanation: "גילינו שבכל חלק יש ארבע סוכריות. עדי אמורה לקבל שלושה חלקים כאלה.", math_expression: "3" },
            { verbal_explanation: "נכפיל את כמות הסוכריות שבחלק אחד במספר החלקים שעדי מקבלת.", math_expression: "4 \\times 3" },
            { verbal_explanation: "נפתור ונגלה את כמות הסוכריות שעדי לקחה לעצמה.", math_expression: "12" }
        ],
        final_answer: "12"
    },
    {
        topic: "math_5_6",
        subTopic: "חלוקה לפי יחס",
        question_text: "אמא חילקה 500 שקלים בין דן לשירה ביחס של 1 : 4. דן קיבל את החלק הקטן יותר. כמה שקלים קיבל דן?&rlm;",
        options: ["100", "400", "50", "125"],
        correctAnswer: 0,
        hint: "סכמו את חלקי היחס (1+4) כדי למצוא את מספר החלקים הכולל. חלקו את 500 למספר זה.",
        solution_steps: [
            { verbal_explanation: "נחבר את המספרים שביחס כדי לדעת לכמה חלקים שווים נחלק את כל הכסף.", math_expression: "1 + 4 = 5" },
            { verbal_explanation: "ניקח את כל חמש מאות השקלים ונחלק אותם לחמישה חלקים שווים.", math_expression: "500 : 5" },
            { verbal_explanation: "התוצאה מראה לנו שכל חלק שווה למאה שקלים.", math_expression: "100" },
            { verbal_explanation: "דן מקבל רק חלק אחד מהיחס הזה, ולכן הוא מקבל מאה שקלים.", math_expression: "1 \\times 100 = 100" }
        ],
        final_answer: "100"
    },
    {
        topic: "math_5_6",
        subTopic: "חלוקה לפי יחס",
        question_text: "חותכים חוט שאורכו 60 סנטימטרים לשני חלקים, כך שהיחס בין החלקים הוא 5 : 7. מה אורכו של החלק הארוך יותר?&rlm;",
        options: ["35", "25", "30", "40"],
        correctAnswer: 0,
        hint: "חלוקה לפי יחס דורשת חיבור החלקים (5+7=12). חלקו את 60 ב-12 למציאת גודל של חלק אחד. הכפילו בחלק הגדול (7).",
        solution_steps: [
            { verbal_explanation: "נחבר את חלקי היחס יחד כדי לדעת לכמה יחידות קטנות אנו גוזרים את החוט בסך הכל.", math_expression: "5 + 7 = 12" },
            { verbal_explanation: "נחלק את האורך הכולל של החוט (שישים) בשתים עשרה היחידות הללו.", math_expression: "60 : 12 = 5" },
            { verbal_explanation: "כל יחידת יחס קטנה שווה לחמישה סנטימטרים. החלק הארוך יותר של החוט מורכב משבע יחידות כאלו.", math_expression: "7" },
            { verbal_explanation: "נכפיל שבע בחמש כדי לקבל את אורך החלק הגדול.", math_expression: "7 \\times 5" },
            { verbal_explanation: "התשובה מוכנה.", math_expression: "35" }
        ],
        final_answer: "35"
    },
    {
        topic: "math_5_6",
        subTopic: "חלוקה לפי יחס",
        question_text: "בכיתה יש 30 תלמידים. היחס בין מספר הבנים למספר הבנות הוא 1 : 2. כמה בנות יש בכיתה?&rlm;",
        options: ["20", "10", "15", "25"],
        correctAnswer: 0,
        hint: "סכום חלקי היחס הוא 3. משמע שהבנות הן 2 מתוך 3 מהכיתה. מצאו כמה תלמידים יש בחלק אחד והכפילו ב-2.",
        solution_steps: [
            { verbal_explanation: "נחבר את החלק של הבנים עם החלק של הבנות מהיחס כדי למצוא את המספר הכולל של חלקי הכיתה.", math_expression: "1 + 2 = 3" },
            { verbal_explanation: "נחלק את שלושים תלמידי הכיתה לשלושה חלקים שווים.", math_expression: "30 : 3 = 10" },
            { verbal_explanation: "גילינו שכל חלק שווה לעשרה תלמידים. הבנות מהוות שני חלקים מהכיתה.", math_expression: "2" },
            { verbal_explanation: "נכפיל את עשר בשתיים כדי לגלות את מספר הבנות.", math_expression: "10 \\times 2" },
            { verbal_explanation: "קיבלנו עשרים בנות.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "math_5_6",
        subTopic: "חלוקה לפי יחס",
        question_text: "דנה קוראת ספר שיש בו 120 עמודים בסך הכל. היחס בין העמודים שכבר קראה לעמודים שטרם קראה הוא 3 : 5. כמה עמודים היא כבר קראה?&rlm;",
        options: ["45", "75", "40", "60"],
        correctAnswer: 0,
        hint: "היחס של העמודים שקראה הוא 3 מתוך סך כל החלקים (שזה 3+5=8).",
        solution_steps: [
            { verbal_explanation: "נחבר את מספרי היחס כדי למצוא את סך כל חלקי הספר.", math_expression: "3 + 5 = 8" },
            { verbal_explanation: "נחלק את סך כל העמודים בספר (מאה ועשרים) בשמונה כדי לדעת כמה עמודים יש בכל חלק.", math_expression: "120 : 8 = 15" },
            { verbal_explanation: "כל חלק שווה לחמש עשרה עמודים. אנו יודעים שדנה קראה שלושה חלקים כאלה.", math_expression: "3" },
            { verbal_explanation: "נכפיל שלוש בחמש עשרה.", math_expression: "3 \\times 15" },
            { verbal_explanation: "ונגלה שדנה קראה ארבעים וחמישה עמודים עד עכשיו.", math_expression: "45" }
        ],
        final_answer: "45"
    },
    {
        topic: "math_5_6",
        subTopic: "חלוקה לפי יחס",
        question_text: "סכומם של שני מספרים הוא 35. היחס ביניהם הוא 3 : 4. מהו המספר הגדול יותר מבין השניים?&rlm;",
        options: ["20", "15", "25", "10"],
        correctAnswer: 0,
        hint: "חלקו את הסכום הכולל (35) בסכום חלקי היחס. לאחר מכן, הכפילו את התוצאה בחלק הגדול מהיחס.",
        solution_steps: [
            { verbal_explanation: "נמצא את סכום חלקי היחס על ידי חיבור המספרים שבו.", math_expression: "3 + 4 = 7" },
            { verbal_explanation: "נחלק את סכום המספרים (שלושים וחמש) בשבעה חלקים כדי למצוא את הערך של כל חלק בסיסי.", math_expression: "35 : 7 = 5" },
            { verbal_explanation: "המספר הגדול יותר שייך לחלק של הארבע ביחס.", math_expression: "4" },
            { verbal_explanation: "נכפיל את הערך של חלק בסיסי (חמש) בארבע.", math_expression: "5 \\times 4" },
            { verbal_explanation: "הגענו למספר המבוקש.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "math_5_6",
        subTopic: "חלוקה לפי יחס",
        question_text: "פרס כספי של 1000 שקלים מחולק בין שלושה זוכים ביחס של 2 : 3 : 5. כמה שקלים יקבל הזוכה במקום הראשון (זה שקיבל את החלק הגדול ביותר)?&rlm;",
        options: ["500", "200", "300", "600"],
        correctAnswer: 0,
        hint: "חלוקה לשלושה חלקים עובדת בדיוק אותו הדבר. חברו את 2, 3, ו-5 כדי למצוא את סך החלקים.",
        solution_steps: [
            { verbal_explanation: "נחבר את כל חלקי היחס יחד כדי לדעת לכמה חתיכות שוות נחתך הפרס הגדול.", math_expression: "2 + 3 + 5 = 10" },
            { verbal_explanation: "נחלק את אלף השקלים בעשר חתיכות.", math_expression: "1000 : 10 = 100" },
            { verbal_explanation: "כל חתיכה שווה למאה שקלים. הזוכה הראשון קיבל חמש חתיכות כאלה.", math_expression: "5" },
            { verbal_explanation: "נכפיל מאה בחמש.", math_expression: "100 \\times 5" },
            { verbal_explanation: "הוא לקח הביתה חמש מאות שקלים.", math_expression: "500" }
        ],
        final_answer: "500"
    },
    {
        topic: "math_5_6",
        subTopic: "חלוקה לפי יחס",
        question_text: "בגינה צומחים 45 פרחים. היחס בין הפרחים האדומים לפרחים הלבנים הוא 4 : 5. כמה פרחים אדומים יש בגינה?&rlm;",
        options: ["20", "25", "15", "30"],
        correctAnswer: 0,
        hint: "הפרחים האדומים הם החלק ה-'4' ביחס. סכום החלקים הוא 9.",
        solution_steps: [
            { verbal_explanation: "נחבר את חלקי היחס כדי לדעת את סך כל הקבוצות של הפרחים.", math_expression: "4 + 5 = 9" },
            { verbal_explanation: "נחלק ארבעים וחמש פרחים לתשע קבוצות שוות.", math_expression: "45 : 9 = 5" },
            { verbal_explanation: "גילינו שבכל קבוצה יש חמישה פרחים. הפרחים האדומים מהווים ארבע קבוצות כאלה.", math_expression: "4" },
            { verbal_explanation: "נכפיל ארבע קבוצות בחמישה פרחים לקבוצה.", math_expression: "4 \\times 5" },
            { verbal_explanation: "יש עשרים פרחים אדומים בגינה.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "math_5_6",
        subTopic: "חלוקה לפי יחס",
        question_text: "בחנות חיות יש חתולים וכלבים בלבד. היחס בין מספר החתולים למספר הכלבים הוא 2 : 5. אם יש בסך הכל 28 חיות בחנות, כמה מהן חתולים?&rlm;",
        options: ["8", "20", "10", "14"],
        correctAnswer: 0,
        hint: "החתולים הם החלק ה-'2' ביחס. סך החלקים הוא 2 ועוד 5.",
        solution_steps: [
            { verbal_explanation: "נחבר את החלק של החתולים עם החלק של הכלבים ביחס.", math_expression: "2 + 5 = 7" },
            { verbal_explanation: "נחלק את עשרים ושמונה החיות בחנות לשבע קבוצות שוות.", math_expression: "28 : 7 = 4" },
            { verbal_explanation: "בכל קבוצה יש ארבע חיות. החתולים תופסים בדיוק שתי קבוצות כאלה.", math_expression: "2" },
            { verbal_explanation: "נכפיל את שתיים בארבע.", math_expression: "2 \\times 4" },
            { verbal_explanation: "ישנם שמונה חתולים חמודים בחנות.", math_expression: "8" }
        ],
        final_answer: "8"
    },
    {
        topic: "math_5_6",
        subTopic: "חלוקה לפי יחס",
        question_text: "מכינים קנקן מיץ פטל ביחס של 1 : 4 (כוס אחת של סירופ על כל 4 כוסות של מים קרים). אם מכינים בסך הכל 20 כוסות מיץ, בכמה כוסות סירופ השתמשו?&rlm;",
        options: ["4", "5", "16", "10"],
        correctAnswer: 0,
        hint: "סך החלקים של כוס המיץ הוא 5 (1 של סירופ ועוד 4 של מים). חלקו את 20 ב-5.",
        solution_steps: [
            { verbal_explanation: "כדי לדעת ממה מורכב כל המיץ, נחבר את כוסות הסירופ וכוסות המים שביחס הבסיסי.", math_expression: "1 + 4 = 5" },
            { verbal_explanation: "כעת נחלק את עשרים הכוסות שאנחנו רוצים להכין בחמשת חלקי היחס.", math_expression: "20 : 5 = 4" },
            { verbal_explanation: "כל חלק מהיחס שווה לארבע כוסות במציאות. כמות הסירופ ביחס המקורי היא בדיוק חלק אחד.", math_expression: "1" },
            { verbal_explanation: "לכן, מכפילים אחד בארבע.", math_expression: "1 \\times 4 = 4" },
            { verbal_explanation: "השתמשו בארבע כוסות של סירופ מתוק.", math_expression: "4" }
        ],
        final_answer: "4"
    },

    // ==========================================
    // תת נושא 3: קנה מידה (10 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "קנה מידה",
        question_text: "במפה עירונית, קנה המידה הוא 1 : 100. אם המרחק בין שני בתים במפה הוא 5 סנטימטרים, מהו המרחק האמיתי ביניהם (בסנטימטרים)?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='20' y='40' width='40' height='40' fill='#ef4444'/><polygon points='40,20 20,40 60,40' fill='#b91c1c'/><rect x='140' y='40' width='40' height='40' fill='#3b82f6'/><polygon points='160,20 140,40 180,40' fill='#1d4ed8'/><line x1='65' y1='60' x2='135' y2='60' stroke='#1e293b' stroke-dasharray='4,4' stroke-width='2'/><text x='95' y='55' font-size='14' font-family='Arial'>5</text></svg></div>",
        options: ["500", "50", "105", "5000"],
        correctAnswer: 0,
        hint: "קנה מידה של 1:100 אומר שכל 1 סנטימטר במפה שווה ל-100 סנטימטרים במציאות. הכפילו את המרחק שבמפה ב-100.",
        solution_steps: [
            { verbal_explanation: "אנו יודעים שכל סנטימטר אחד במפה הוקטן בדיוק פי מאה מהגודל האמיתי שלו.", math_expression: "100" },
            { verbal_explanation: "במפה שלנו נמדד מרחק של חמישה סנטימטרים.", math_expression: "5" },
            { verbal_explanation: "כדי לגלות את המרחק האמיתי הגדול, נכפיל את חמש במאה.", math_expression: "5 \\times 100" },
            { verbal_explanation: "נפתור את התרגיל על ידי הוספת שני אפסים למספר חמש.", math_expression: "500" }
        ],
        final_answer: "500"
    },
    {
        topic: "math_5_6",
        subTopic: "קנה מידה",
        question_text: "ארון בגדים אמיתי הוא בגובה 200 סנטימטרים. בנו לארון דגם מוקטן בקנה מידה של 1 : 10. מה גובהו של הדגם המוקטן (בסנטימטרים)?&rlm;",
        options: ["20", "2000", "10", "2"],
        correctAnswer: 0,
        hint: "קנה מידה של 1:10 אומר שהדגם קטן פי 10 מהמציאות. לכן, צריך לחלק את הגובה האמיתי ב-10.",
        solution_steps: [
            { verbal_explanation: "הגובה האמיתי והשלם של הארון הוא מאתיים סנטימטרים.", math_expression: "200" },
            { verbal_explanation: "קנה המידה מראה לנו שהדגם הקטן התכווץ בדיוק פי עשר מהמציאות.", math_expression: "10" },
            { verbal_explanation: "כדי למצוא את הגודל של הדגם, ניקח את הגובה האמיתי ונחלק אותו בעשר.", math_expression: "200 : 10" },
            { verbal_explanation: "בחילוק בעשר, פשוט מורידים אפס אחד מהמספר. נקבל עשרים.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "math_5_6",
        subTopic: "קנה מידה",
        question_text: "במפת ארץ ישראל, קנה המידה הוא 1 : 100,000. המרחק בין שתי ערים במפה הוא סנטימטר אחד. מהו המרחק במציאות בקילומטרים? (זכרו: בקילומטר אחד יש 100,000 סנטימטרים).&rlm;",
        options: ["1", "10", "100", "1000"],
        correctAnswer: 0,
        hint: "אם 1 סנטימטר במפה שווה ל-100,000 סנטימטרים במציאות, ונתון שבקילומטר אחד יש 100,000 סנטימטרים, אז...",
        solution_steps: [
            { verbal_explanation: "לפי קנה המידה, סנטימטר אחד במפה שווה למאה אלף סנטימטרים אמיתיים על הכביש.", math_expression: "100,000" },
            { verbal_explanation: "השאלה מזכירה לנו שבקילומטר אמיתי אחד יש בדיוק מאה אלף סנטימטרים.", math_expression: "100,000" },
            { verbal_explanation: "לכן, אם נחלק את המרחק במציאות במספר הסנטימטרים שבקילומטר, נדע כמה קילומטרים זה יוצא.", math_expression: "100,000 : 100,000" },
            { verbal_explanation: "כל מספר שמחולק בעצמו שווה תמיד לאחת. אז המרחק הוא קילומטר אחד.", math_expression: "1" }
        ],
        final_answer: "1"
    },
    {
        topic: "math_5_6",
        subTopic: "קנה מידה",
        question_text: "מרחק הליכה במסלול אמיתי הוא 5 קילומטרים (שהם 500,000 סנטימטרים). במפה שמראה את המסלול, קנה המידה הוא 1 : 50,000. כמה סנטימטרים יהיה אורך המסלול בתוך המפה?&rlm;",
        options: ["10", "5", "50", "100"],
        correctAnswer: 0,
        hint: "קחו את המרחק האמיתי בסנטימטרים (500,000) וחלקו אותו במספר המייצג את ההקטנה של המפה (50,000).",
        solution_steps: [
            { verbal_explanation: "המרחק האמיתי והענק של הטיול שלנו הוא חמש מאות אלף סנטימטרים.", math_expression: "500,000" },
            { verbal_explanation: "קנה המידה אומר לנו שהמפה הקטינה את המציאות פי חמישים אלף פעמים.", math_expression: "50,000" },
            { verbal_explanation: "נחלק את המרחק האמיתי במספר של קנה המידה כדי לראות כמה מקום זה יתפוס על הנייר.", math_expression: "500,000 : 50,000" },
            { verbal_explanation: "נוכל למחוק ארבעה אפסים משני הצדדים כדי להקל על הפתרון. זה יוצא חמישים לחלק לחמש.", math_expression: "50 : 5 = 10" },
            { verbal_explanation: "המרחק על הנייר יהיה עשרה סנטימטרים.", math_expression: "10" }
        ],
        final_answer: "10"
    },
    {
        topic: "math_5_6",
        subTopic: "קנה מידה",
        question_text: "אדריכל צייר תוכנית של בית בקנה מידה של 1 : 50. בתוכנית שלו, האורך של החדר הוא 4 סנטימטרים. מה האורך של החדר במציאות (בסנטימטרים)?&rlm;",
        options: ["200", "250", "20", "150"],
        correctAnswer: 0,
        hint: "כל סנטימטר אחד שהאדריכל צייר שווה ל-50 סנטימטרים של קיר אמיתי. הכפילו את האורך המצויר פי 50.",
        solution_steps: [
            { verbal_explanation: "האורך שהאדריכל שרטט על הדף הוא ארבעה סנטימטרים.", math_expression: "4" },
            { verbal_explanation: "קנה המידה מראה לנו שהמציאות גדולה פי חמישים מהציור.", math_expression: "50" },
            { verbal_explanation: "נכפיל את המידה בציור פי חמישים כדי לנפח אותה לגודל אמיתי.", math_expression: "4 \\times 50" },
            { verbal_explanation: "נחשב: ארבע כפול חמש זה עשרים. נוסיף אפס ונקבל מאתיים.", math_expression: "200" }
        ],
        final_answer: "200"
    },
    {
        topic: "math_5_6",
        subTopic: "קנה מידה",
        question_text: "קנה המידה של פסל צעצוע של ג'ירפה הוא 1 : 20. אם הגובה האמיתי של הג'ירפה הוא 400 סנטימטרים, מה הגובה של הפסל הצעצוע שלה?&rlm;",
        options: ["20", "40", "80", "2"],
        correctAnswer: 0,
        hint: "גובה הצעצוע קטן פי 20 מגובהה של ג'ירפה אמיתית. חלקו 400 ב-20.",
        solution_steps: [
            { verbal_explanation: "הגובה האמיתי והגבוה של הג'ירפה בספארי הוא ארבע מאות סנטימטרים.", math_expression: "400" },
            { verbal_explanation: "הפסל הוא גרסה מוקטנת של הג'ירפה, שהוקטנה בדיוק פי עשרים.", math_expression: "20" },
            { verbal_explanation: "נחלק את הגובה האמיתי בעשרים כדי למצוא כמה קטן הפסל.", math_expression: "400 : 20" },
            { verbal_explanation: "נוריד אפס אחד משני הצדדים, וזה הופך לתרגיל פשוט של ארבעים לחלק לשתיים.", math_expression: "40 : 2 = 20" },
            { verbal_explanation: "גובה הפסל הוא עשרים סנטימטרים.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "math_5_6",
        subTopic: "קנה מידה",
        question_text: "במפה מסוימת, מרחק של 3 סנטימטרים שווה למרחק של 30 קילומטרים במציאות. מה המרחק במציאות אם על המפה נמדדו 6 סנטימטרים?&rlm;",
        options: ["60", "30", "90", "15"],
        correctAnswer: 0,
        hint: "ראו ש-6 סנטימטרים הם בדיוק פי 2 מ-3 סנטימטרים. לכן המרחק האמיתי יהיה גם כן גדול פי 2.",
        solution_steps: [
            { verbal_explanation: "אנחנו יודעים ששלושה סנטימטרים שווים לשלושים קילומטרים בחוץ.", math_expression: "3 = 30" },
            { verbal_explanation: "אפשר להבין בקלות שכל סנטימטר אחד קטן שווה לעשרה קילומטרים.", math_expression: "30 : 3 = 10" },
            { verbal_explanation: "במפה שלנו מדדנו עכשיו שישה סנטימטרים חדשים.", math_expression: "6" },
            { verbal_explanation: "נכפיל את שש בעשרה קילומטרים לסנטימטר.", math_expression: "6 \\times 10" },
            { verbal_explanation: "ונגלה שהמרחק האמיתי יהיה שישים קילומטרים.", math_expression: "60" }
        ],
        final_answer: "60"
    },
    {
        topic: "math_5_6",
        subTopic: "קנה מידה",
        question_text: "מיקרוסקופ מגדיל חרקים בקנה מידה של 100 : 1 (כלומר, פי 100 יותר גדול מהמציאות). אם גודל החרק במציאות הוא 2 מילימטרים, מה יהיה הגודל שלו בתמונה מבעד למיקרוסקופ?&rlm;",
        options: ["200", "50", "20", "2000"],
        correctAnswer: 0,
        hint: "זהו קנה מידה שמגדיל ולא מקטין. הכפילו את הגודל המקורי של החרק פי 100.",
        solution_steps: [
            { verbal_explanation: "הפעם קנה המידה לא מקטין אלא מגדיל את הדברים פי מאה פעמים יותר מהרגיל.", math_expression: "100" },
            { verbal_explanation: "החרק הקטן שאנחנו רואים במציאות הוא באורך של שתיים.", math_expression: "2" },
            { verbal_explanation: "כדי לדעת כמה ענק הוא ייראה בעדשה, נכפיל את שתיים במאה.", math_expression: "2 \\times 100" },
            { verbal_explanation: "ונקבל את הגודל המוגדל.", math_expression: "200" }
        ],
        final_answer: "200"
    },
    {
        topic: "math_5_6",
        subTopic: "קנה מידה",
        question_text: "מודל צעצוע של מכונית מרוץ נבנה בקנה מידה של 1 : 24. האורך של מכונית המרוץ האמיתית הוא 480 סנטימטרים. מה האורך של מכונית הצעצוע?&rlm;",
        options: ["20", "24", "48", "10"],
        correctAnswer: 0,
        hint: "המכונית האמיתית קטנה פי 24 במודל הצעצוע. חלקו את 480 ב-24.",
        solution_steps: [
            { verbal_explanation: "האורך של המכונית הגדולה והאמיתית הוא ארבע מאות ושמונים.", math_expression: "480" },
            { verbal_explanation: "הצעצוע קטן פי עשרים וארבע פעמים מהמכונית האמיתית.", math_expression: "24" },
            { verbal_explanation: "נחלק את הגודל האמיתי במספר של קנה המידה כדי למצוא את גודל הצעצוע.", math_expression: "480 : 24" },
            { verbal_explanation: "נחשב: ארבעים ושמונה לחלק לעשרים וארבע זה שתיים. נוסיף את האפס חזרה ונקבל עשרים.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "math_5_6",
        subTopic: "קנה מידה",
        question_text: "במפה שקנה המידה שלה הוא 1 : 10,000, נמדד אורך של רחוב והוא 8 סנטימטרים. מה האורך של הרחוב במציאות בסנטימטרים?&rlm;",
        options: ["80,000", "8,000", "800,000", "800"],
        correctAnswer: 0,
        hint: "הכפילו את האורך שמדדתם במפה (8) במספר שמראה פי כמה המפה הקטינה את המציאות (10,000).",
        solution_steps: [
            { verbal_explanation: "האורך של הרחוב כפי שציירו אותו על דף המפה הוא שמונה סנטימטרים.", math_expression: "8" },
            { verbal_explanation: "קנה המידה אומר לנו שכל סנטימטר כזה במפה שווה לעשרת אלפים סנטימטרים אמיתיים בחוץ.", math_expression: "10,000" },
            { verbal_explanation: "נכפיל את שמונה בעשרת אלפים כדי להגדיל חזרה למציאות.", math_expression: "8 \\times 10,000" },
            { verbal_explanation: "נוסיף ארבעה אפסים למספר שמונה ונקבל את התשובה.", math_expression: "80,000" }
        ],
        final_answer: "80,000"
    }
];
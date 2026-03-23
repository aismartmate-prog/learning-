const questionsDB = [
    // ==========================================
    // תת נושא 1: יחידות אורך (10 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "יחידות אורך",
        question_text: "כמה סנטימטרים יש ב-5 מטרים?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 60' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='20' y='25' width='160' height='10' fill='#fde047' stroke='#eab308' stroke-width='2'/><line x1='20' y1='25' x2='20' y2='35' stroke='#1e293b' stroke-width='2'/><line x1='52' y1='25' x2='52' y2='30' stroke='#1e293b' stroke-width='1'/><line x1='84' y1='25' x2='84' y2='35' stroke='#1e293b' stroke-width='2'/><line x1='116' y1='25' x2='116' y2='30' stroke='#1e293b' stroke-width='1'/><line x1='148' y1='25' x2='148' y2='35' stroke='#1e293b' stroke-width='2'/><line x1='180' y1='25' x2='180' y2='35' stroke='#1e293b' stroke-width='2'/></svg></div>",
        options: ["50", "500", "5000", "5"],
        correctAnswer: 1,
        hint: "זכרו את הכלל: בכל מטר אחד יש בדיוק 100 סנטימטרים. כדי להפוך מטרים לסנטימטרים, מכפילים ב-100.",
        solution_steps: [
            { verbal_explanation: "נזכור את חוק ההמרה הבסיסי: מטר אחד שווה למאה סנטימטרים.", math_expression: "100" },
            { verbal_explanation: "בשאלתנו יש חמישה מטרים שלמים.", math_expression: "5" },
            { verbal_explanation: "כדי לגלות כמה סנטימטרים יש בהם, נכפיל את המספר חמש במאה.", math_expression: "5 \\times 100" },
            { verbal_explanation: "נפתור את תרגיל הכפל הפשוט על ידי הוספת שני אפסים למספר חמש.", math_expression: "500" },
            { verbal_explanation: "הגענו לתשובה: בחמישה מטרים יש חמש מאות סנטימטרים.", math_expression: "500" }
        ],
        final_answer: "500"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות אורך",
        question_text: "רועי קפץ למרחק של 250 סנטימטרים בשיעור ספורט. כמה מטרים קפץ רועי?&rlm;",
        options: ["25", "2.5", "0.25", "2500"],
        correctAnswer: 1,
        hint: "כדי להפוך סנטימטרים למטרים, אנחנו צריכים לחלק ב-100. זכרו שכל 100 סנטימטרים הם מטר אחד שלם.",
        solution_steps: [
            { verbal_explanation: "המרחק שרועי קפץ נתון בסנטימטרים.", math_expression: "250" },
            { verbal_explanation: "כדי להפוך יחידה קטנה (סנטימטר) ליחידה גדולה (מטר), מחלקים במאה.", math_expression: "250 : 100" },
            { verbal_explanation: "בחלוקה במאה, הנקודה העשרונית זזה שני צעדים שמאלה.", math_expression: "2.5" },
            { verbal_explanation: "התשובה היא שניים וחצי מטרים.", math_expression: "2.5" }
        ],
        final_answer: "2.5"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות אורך",
        question_text: "אורך השולחן בכיתה הוא מטר אחד ו-40 סנטימטרים. מהו אורך השולחן בסנטימטרים בלבד?&rlm;",
        options: ["104", "140", "41", "1400"],
        correctAnswer: 1,
        hint: "הפכו את המטר השלם לסנטימטרים (100), ואז חברו אליו את ה-40 סנטימטרים הנוספים.",
        solution_steps: [
            { verbal_explanation: "קודם נטפל בחלק של המטר השלם. נמיר אותו לסנטימטרים.", math_expression: "1 \\times 100 = 100" },
            { verbal_explanation: "עכשיו ניקח את המאה שקיבלנו ונוסיף להם את הארבעים סנטימטרים הנוספים מהשאלה.", math_expression: "100 + 40" },
            { verbal_explanation: "נפתור את תרגיל החיבור הפשוט.", math_expression: "140" },
            { verbal_explanation: "אורך השולחן הוא מאה וארבעים סנטימטרים.", math_expression: "140" }
        ],
        final_answer: "140"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות אורך",
        question_text: "המרחק מהבית של יעל לבית הספר הוא 3.5 קילומטרים. כמה מטרים יעל הולכת?&rlm;",
        options: ["350", "35", "3500", "35000"],
        correctAnswer: 2,
        hint: "בקילומטר אחד יש 1000 מטרים. כדי להפוך קילומטרים למטרים, הכפילו ב-1000.",
        solution_steps: [
            { verbal_explanation: "נרשום את כלל ההמרה: קילומטר אחד שווה לאלף מטרים.", math_expression: "1000" },
            { verbal_explanation: "המרחק שיעל הולכת הוא שלושה וחצי קילומטרים.", math_expression: "3.5" },
            { verbal_explanation: "נכפיל את המרחק הזה באלף.", math_expression: "3.5 \\times 1000" },
            { verbal_explanation: "הכפלה באלף מזיזה את הנקודה העשרונית שלושה צעדים ימינה.", math_expression: "3500" },
            { verbal_explanation: "יעל הולכת שלושת אלפים וחמש מאות מטרים.", math_expression: "3500" }
        ],
        final_answer: "3500"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות אורך",
        question_text: "מסלול הריצה בפארק הוא באורך של 2 קילומטרים. דן רץ 500 מטרים ועצר לנוח. כמה מטרים נשארו לו לרוץ עד סוף המסלול?&rlm;",
        options: ["150", "1500", "2500", "500"],
        correctAnswer: 1,
        hint: "קודם כל, הפכו את אורך המסלול מקילומטרים למטרים. אחר כך חסרו את המרחק שדן כבר עבר.",
        solution_steps: [
            { verbal_explanation: "נהפוך את אורך המסלול כולו מקילומטרים למטרים. נכפיל באלף.", math_expression: "2 \\times 1000 = 2000" },
            { verbal_explanation: "אורך המסלול הוא אלפיים מטרים. דן כבר עבר חמש מאות מטרים. נחסר.", math_expression: "2000 - 500" },
            { verbal_explanation: "נפתור את תרגיל החיסור.", math_expression: "1500" },
            { verbal_explanation: "נשארו לו אלף וחמש מאות מטרים לרוץ.", math_expression: "1500" }
        ],
        final_answer: "1500"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות אורך",
        question_text: "בסרגל קטן נמדדו 80 מילימטרים. כמה סנטימטרים זה?&rlm;",
        options: ["800", "0.8", "8", "8000"],
        correctAnswer: 2,
        hint: "בכל סנטימטר יש 10 מילימטרים. כדי להפוך יחידה קטנה לגדולה, חלקו ב-10.",
        solution_steps: [
            { verbal_explanation: "המידה שלנו נתונה במילימטרים שהם קווים קטנים מאוד בסרגל.", math_expression: "80" },
            { verbal_explanation: "נזכור שכל עשרה מילימטרים שווים לסנטימטר אחד. לכן נחלק בעשר.", math_expression: "80 : 10" },
            { verbal_explanation: "בחלוקה בעשר, פשוט מורידים אפס אחד.", math_expression: "8" },
            { verbal_explanation: "התשובה היא שמונה סנטימטרים.", math_expression: "8" }
        ],
        final_answer: "8"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות אורך",
        question_text: "לנועה יש סרט מתנה שאורכו 2 מטרים. היא גזרה ממנו חתיכה באורך 30 סנטימטרים. מהו אורך הסרט שנשאר לה בסנטימטרים?&rlm;",
        options: ["170", "230", "17", "200"],
        correctAnswer: 0,
        hint: "אי אפשר לחסר סנטימטרים ממטרים ישירות. קודם הפכו את המטרים לסנטימטרים (על ידי הכפלה ב-100) ואז תחסרו.",
        solution_steps: [
            { verbal_explanation: "הסרט השלם הוא באורך שני מטרים. נהפוך את זה לסנטימטרים על ידי הכפלה במאה.", math_expression: "2 \\times 100 = 200" },
            { verbal_explanation: "עכשיו יש לנו מאתיים סנטימטרים של סרט. נועה גזרה שלושים. נעשה תרגיל חיסור.", math_expression: "200 - 30" },
            { verbal_explanation: "נפתור את התרגיל. מאתיים פחות שלושים נותן מאה ושבעים.", math_expression: "170" },
            { verbal_explanation: "זהו אורך הסרט שנשאר לה.", math_expression: "170" }
        ],
        final_answer: "170"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות אורך",
        question_text: "חברו את האורכים הבאים: 1.2 מטרים ועוד 80 סנטימטרים. מהי התוצאה במטרים?&rlm;",
        options: ["9.2", "20", "2", "1.28"],
        correctAnswer: 2,
        hint: "קודם הפכו את הסנטימטרים למטרים (חילוק ב-100), ואז חברו את שני המספרים העשרוניים יחד.",
        solution_steps: [
            { verbal_explanation: "נתחיל מהחלק השני: שמונים סנטימטרים. נהפוך אותם למטרים על ידי חלוקה במאה.", math_expression: "80 : 100 = 0.8" },
            { verbal_explanation: "עכשיו נחבר את המטרים שיש לנו מראש עם המטרים החדשים שחישבנו.", math_expression: "1.2 + 0.8" },
            { verbal_explanation: "עשיריות מתחברות לעשיריות: שתיים ועוד שמונה זה עשר (שזה שלם אחד). אחד ועוד אחד שווה שתיים.", math_expression: "2" },
            { verbal_explanation: "התוצאה היא בדיוק שני מטרים שלמים.", math_expression: "2" }
        ],
        final_answer: "2"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות אורך",
        question_text: "איזה אורך גדול יותר: 4,000 מטרים או 4 קילומטרים?&rlm;",
        options: ["4,000 מטרים", "4 קילומטרים", "הם שווים בדיוק", "אי אפשר לדעת"],
        correctAnswer: 2,
        hint: "כדי להשוות, הפכו את הקילומטרים למטרים. זכרו שבקילומטר אחד יש 1000 מטרים.",
        solution_steps: [
            { verbal_explanation: "נבדוק את הקילומטרים. אנחנו יודעים שכל קילומטר שווה לאלף מטרים.", math_expression: "1000" },
            { verbal_explanation: "נכפיל את ארבעת הקילומטרים שלנו באלף כדי לראות כמה מטרים זה יוצא.", math_expression: "4 \\times 1000 = 4000" },
            { verbal_explanation: "נשווה את התוצאה לאורך הראשון שקיבלנו בשאלה.", math_expression: "4000 = 4000" },
            { verbal_explanation: "מסקנה: שני האורכים שווים לחלוטין, הם פשוט כתובים בשמות שונים.", math_expression: "שווים" }
        ],
        final_answer: "הם שווים בדיוק"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות אורך",
        question_text: "מהו ההיקף בסנטימטרים של מלבן שאורכו 1 מטר ורוחבו 50 סנטימטרים?&rlm;",
        options: ["300", "150", "100", "30"],
        correctAnswer: 0,
        hint: "קודם כל הפכו את כל המידות לאותה יחידה (סנטימטרים). מטר אחד הוא 100 סנטימטרים. היקף מלבן הוא חיבור כל 4 הצלעות.",
        solution_steps: [
            { verbal_explanation: "נהפוך את האורך למטרים כדי שיהיה נוח. מטר אחד שווה מאה סנטימטרים.", math_expression: "1 \\times 100 = 100" },
            { verbal_explanation: "עכשיו יש לנו מלבן שהאורך שלו הוא מאה, והרוחב שלו הוא חמישים.", math_expression: "100 \\quad , \\quad 50" },
            { verbal_explanation: "היקף הוא חיבור כל ארבעת הצדדים של המלבן.", math_expression: "100 + 100 + 50 + 50" },
            { verbal_explanation: "נחבר: מאתיים מהצלעות הארוכות, ועוד מאה מהקצרות.", math_expression: "200 + 100 = 300" },
            { verbal_explanation: "ההיקף הכולל הוא שלוש מאות סנטימטרים.", math_expression: "300" }
        ],
        final_answer: "300"
    },

    // ==========================================
    // תת נושא 2: יחידות משקל (10 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "יחידות משקל",
        question_text: "כמה גרמים יש ב-4 קילוגרמים של קמח?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 100 100' style='max-width:150px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 30 80 Q 50 90 70 80 L 80 30 Q 50 10 20 30 Z' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><path d='M 20 30 Q 50 50 80 30' fill='none' stroke='#64748b' stroke-width='2'/><text x='42' y='60' font-size='12' font-family='Arial' font-weight='bold'>4 kg</text></svg></div>",
        options: ["40", "400", "4000", "40000"],
        correctAnswer: 2,
        hint: "זכרו תמיד: בכל קילוגרם אחד יש בדיוק 1000 גרמים. הכפילו את המספר ב-1000.",
        solution_steps: [
            { verbal_explanation: "החוק הבסיסי במידות משקל הוא שקילוגרם אחד שווה לאלף גרמים קטנים.", math_expression: "1000" },
            { verbal_explanation: "יש לנו שקית קמח במשקל של ארבעה קילוגרמים.", math_expression: "4" },
            { verbal_explanation: "נכפיל את ארבע באלף כדי לדעת כמה גרמים יש בפנים.", math_expression: "4 \\times 1000" },
            { verbal_explanation: "נוסיף שלושה אפסים למספר ארבע ונקבל את התשובה.", math_expression: "4000" }
        ],
        final_answer: "4000"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות משקל",
        question_text: "חבילת סוכר שוקלת 3500 גרם. מהו המשקל של החבילה בקילוגרמים?&rlm;",
        options: ["3.5", "35", "0.35", "350"],
        correctAnswer: 0,
        hint: "כדי להפוך יחידה קטנה (גרם) ליחידה גדולה (קילוגרם), מחלקים ב-1000.",
        solution_steps: [
            { verbal_explanation: "המשקל שלנו נתון בגרמים.", math_expression: "3500" },
            { verbal_explanation: "כדי להפוך לקילוגרמים, נחלק את המספר באלף.", math_expression: "3500 : 1000" },
            { verbal_explanation: "בחלוקה באלף, הנקודה העשרונית זזה שלושה צעדים שמאלה.", math_expression: "3.5" },
            { verbal_explanation: "המשקל הוא שלושה וחצי קילוגרמים.", math_expression: "3.5" }
        ],
        final_answer: "3.5"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות משקל",
        question_text: "קניתם 2 קילוגרמים של תפוחים ועוד שקית ענבים ששוקלת 300 גרם. מהו המשקל הכולל בגרמים של כל הפירות יחד?&rlm;",
        options: ["2003", "2300", "500", "230"],
        correctAnswer: 1,
        hint: "הפכו את הקילוגרמים של התפוחים לגרמים (על ידי הכפלה ב-1000), ואז חברו את התוצאה למשקל הענבים.",
        solution_steps: [
            { verbal_explanation: "נתחיל מלהפוך את משקל התפוחים לגרמים, כדי שהכל יהיה באותה שפה.", math_expression: "2 \\times 1000 = 2000" },
            { verbal_explanation: "עכשיו יש לנו אלפיים גרמים של תפוחים.", math_expression: "2000" },
            { verbal_explanation: "נוסיף לזה את שקית הענבים ששוקלת שלוש מאות גרם.", math_expression: "2000 + 300" },
            { verbal_explanation: "נחבר הכל יחד ונקבל אלפיים ושלוש מאות גרמים.", math_expression: "2300" }
        ],
        final_answer: "2300"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות משקל",
        question_text: "פיל בספארי שוקל 1.5 טון. כמה קילוגרמים שוקל הפיל?&rlm;",
        options: ["150", "1500", "15", "15000"],
        correctAnswer: 1,
        hint: "בכל טון אחד יש בדיוק 1000 קילוגרמים. הכפילו את המספר ב-1000.",
        solution_steps: [
            { verbal_explanation: "נזכור שמידת המשקל 'טון' היא גדולה מאוד ושווה לאלף קילוגרמים.", math_expression: "1000" },
            { verbal_explanation: "המשקל של הפיל הוא אחד וחצי טון.", math_expression: "1.5" },
            { verbal_explanation: "נכפיל אחד וחצי באלף.", math_expression: "1.5 \\times 1000" },
            { verbal_explanation: "הנקודה העשרונית זזה ימינה, ונוספים אפסים.", math_expression: "1500" },
            { verbal_explanation: "הפיל שוקל אלף וחמש מאות קילוגרמים.", math_expression: "1500" }
        ],
        final_answer: "1500"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות משקל",
        question_text: "לדני יש חבילת בצק שוקלת 1 קילוגרם. הוא לקח ממנה 250 גרם כדי לאפות עוגיות. כמה גרמים של בצק נשארו בחבילה?&rlm;",
        options: ["750", "1250", "850", "75"],
        correctAnswer: 0,
        hint: "כדי לעשות תרגיל חיסור נכון, הפכו קודם את הקילוגרם השלם לגרמים (1000 גרם) ואז חסרו 250.",
        solution_steps: [
            { verbal_explanation: "קודם נהפוך את החבילה השלמה לגרמים. קילוגרם אחד שווה לאלף גרם.", math_expression: "1 \\times 1000 = 1000" },
            { verbal_explanation: "עכשיו אפשר להוריד את הבצק שדני לקח. נעשה תרגיל חיסור.", math_expression: "1000 - 250" },
            { verbal_explanation: "אלף פחות מאתיים חמישים נותן שבע מאות חמישים.", math_expression: "750" },
            { verbal_explanation: "זה מה שנשאר בחבילה.", math_expression: "750" }
        ],
        final_answer: "750"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות משקל",
        question_text: "בשקית יש 5 תפוזים גדולים. כל תפוז שוקל בדיוק 200 גרם. מה המשקל של כל השקית בקילוגרמים?&rlm;",
        options: ["10", "1", "100", "0.1"],
        correctAnswer: 1,
        hint: "קודם כל, חשבו את המשקל הכולל של השקית בגרמים (על ידי כפל). אחר כך, הפכו את הגרמים שקיבלתם לקילוגרמים על ידי חילוק ב-1000.",
        solution_steps: [
            { verbal_explanation: "נחשב כמה שוקלים כל התפוזים ביחד. יש חמישה תפוזים וכל אחד שוקל מאתיים גרם.", math_expression: "5 \\times 200" },
            { verbal_explanation: "נפתור: חמש כפול שתיים זה עשר, ונוסיף את שני האפסים.", math_expression: "1000" },
            { verbal_explanation: "קיבלנו שמשקל השקית הוא אלף גרמים.", math_expression: "1000" },
            { verbal_explanation: "השאלה מבקשת את המשקל בקילוגרמים. נחלק באלף.", math_expression: "1000 : 1000 = 1" },
            { verbal_explanation: "המשקל הוא בדיוק קילוגרם אחד.", math_expression: "1" }
        ],
        final_answer: "1"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות משקל",
        question_text: "איזה משקל כבד יותר: 1500 גרם של קמח או 1.5 קילוגרם של ברזל?&rlm;",
        options: ["1500 גרם של קמח", "1.5 קילוגרם של ברזל", "שניהם שוקלים בדיוק אותו הדבר", "אי אפשר לדעת"],
        correctAnswer: 2,
        hint: "אל תתנו לסוג החומר לבלבל אתכם! חצי קילו נוצות שוקל בדיוק כמו חצי קילו אבנים. כדי להשוות את המספרים, הפכו את הקילוגרמים לגרמים.",
        solution_steps: [
            { verbal_explanation: "לא משנה איזה חומר זה, אנחנו בודקים רק את המספר של המשקל.", math_expression: "קמח מול ברזל" },
            { verbal_explanation: "נהפוך את משקל הברזל מקילוגרמים לגרמים. נכפיל באלף.", math_expression: "1.5 \\times 1000 = 1500" },
            { verbal_explanation: "משקל הברזל הוא אלף וחמש מאות גרמים.", math_expression: "1500" },
            { verbal_explanation: "נשווה למשקל הקמח שהוא גם אלף וחמש מאות.", math_expression: "1500 = 1500" },
            { verbal_explanation: "המשקלים שווים לגמרי.", math_expression: "שווים" }
        ],
        final_answer: "שניהם שוקלים בדיוק אותו הדבר"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות משקל",
        question_text: "כמה גרמים יש ב-0.5 קילוגרם (חצי קילו)?&rlm;",
        options: ["50", "5", "500", "5000"],
        correctAnswer: 2,
        hint: "בקילוגרם אחד יש 1000 גרמים. כדי למצוא כמה יש בחצי קילו, הכפילו חצי ב-1000, או פשוט חשבו מהו החצי של 1000.",
        solution_steps: [
            { verbal_explanation: "אנו זוכרים שקילוגרם אחד שלם שווה לאלף גרמים.", math_expression: "1000" },
            { verbal_explanation: "השאלה מבקשת שנדע כמה זה חצי קילוגרם.", math_expression: "0.5" },
            { verbal_explanation: "נחלק את האלף בשתיים כדי למצוא את החצי.", math_expression: "1000 : 2" },
            { verbal_explanation: "התשובה היא חמש מאות גרם.", math_expression: "500" }
        ],
        final_answer: "500"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות משקל",
        question_text: "קונדיטור הכין 3 קילוגרמים של בצק לפיצה, וחילק אותו שווה בשווה ל-6 שקיות קטנות. כמה גרמים של בצק יש בכל שקית?&rlm;",
        options: ["50", "500", "200", "300"],
        correctAnswer: 1,
        hint: "הפכו את כל הבצק מקילוגרמים לגרמים. ואז, חלקו את המספר הגדול שקיבלתם למספר השקיות.",
        solution_steps: [
            { verbal_explanation: "קודם כל, נהפוך את הקילוגרמים לגרמים כדי שיהיה נוח לחלק. נכפיל באלף.", math_expression: "3 \\times 1000 = 3000" },
            { verbal_explanation: "עכשיו יש לנו שלושת אלפים גרם של בצק. הקונדיטור מחלק אותם לשש שקיות.", math_expression: "3000 : 6" },
            { verbal_explanation: "נפתור בקלות: שלושים לחלק לשש שווה חמש. נוסיף את שני האפסים.", math_expression: "500" },
            { verbal_explanation: "בכל שקית יש חמש מאות גרם של בצק.", math_expression: "500" }
        ],
        final_answer: "500"
    },
    {
        topic: "math_5_6",
        subTopic: "יחידות משקל",
        question_text: "מה תהיה התוצאה של החיבור הבא: 1.2 קילוגרם ועוד 800 גרם? (תנו את התשובה בקילוגרמים).&rlm;",
        options: ["2", "9.2", "1.28", "20"],
        correctAnswer: 0,
        hint: "הפכו את הגרמים לקילוגרמים על ידי חלוקה ב-1000. לאחר מכן, חברו את שני המספרים העשרוניים.",
        solution_steps: [
            { verbal_explanation: "נהפוך את החלק השני של המשקל לקילוגרמים. נחלק את הגרמים באלף.", math_expression: "800 : 1000 = 0.8" },
            { verbal_explanation: "עכשיו יש לנו שמונה עשיריות של קילוגרם. נחבר את זה למשקל הראשון.", math_expression: "1.2 + 0.8" },
            { verbal_explanation: "שתי עשיריות ועוד שמונה עשיריות משלימות לשלם אחד. נוסיף את השלם שכבר היה לנו.", math_expression: "1 + 1 = 2" },
            { verbal_explanation: "המשקל הכולל הוא שני קילוגרמים שלמים.", math_expression: "2" }
        ],
        final_answer: "2"
    },

    // ==========================================
    // תת נושא 3: שטח ונפח (10 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "שטח ונפח",
        question_text: "ציירנו מלבן שאורכו 5 סנטימטרים ורוחבו 4 סנטימטרים. מהו שטח המלבן בסנטימטרים רבועים (סמ''ר)?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:200px; width:100%; border-radius:8px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='50' y='20' width='100' height='60' fill='#10b981' fill-opacity='0.2' stroke='#10b981' stroke-width='2'/><text x='95' y='15' font-size='14' font-family='Arial'>5</text><text x='35' y='55' font-size='14' font-family='Arial'>4</text></svg></div>",
        options: ["20", "9", "18", "40"],
        correctAnswer: 0,
        hint: "שטח של מלבן מחושב על ידי הכפלת האורך ברוחב.",
        solution_steps: [
            { verbal_explanation: "נסתכל על המידות של המלבן.", math_expression: "אורך = 5 \\quad , \\quad רוחב = 4" },
            { verbal_explanation: "ניזכר ששטח מחשבים על ידי כפל של האורך ברוחב.", math_expression: "שטח = 5 \\times 4" },
            { verbal_explanation: "נפתור את תרגיל הכפל הפשוט.", math_expression: "20" },
            { verbal_explanation: "השטח הוא עשרים סנטימטרים רבועים.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "math_5_6",
        subTopic: "שטח ונפח",
        question_text: "קניתם בקבוק מיץ גדול המכיל 3 ליטרים. כמה מיליליטרים (מ''ל) של מיץ יש בבקבוק?&rlm;",
        options: ["300", "3000", "30", "30000"],
        correctAnswer: 1,
        hint: "זכרו את הכלל הבסיסי במידות נפח נוזלים: בכל ליטר אחד יש בדיוק 1000 מיליליטרים. הכפילו ב-1000.",
        solution_steps: [
            { verbal_explanation: "החוק החשוב הוא שליטר אחד שווה תמיד לאלף מיליליטרים.", math_expression: "1000" },
            { verbal_explanation: "בבקבוק שלנו יש שלושה ליטרים שלמים.", math_expression: "3" },
            { verbal_explanation: "כדי למצוא את המיליליטרים נכפיל את המספר באלף.", math_expression: "3 \\times 1000" },
            { verbal_explanation: "התשובה היא שלושת אלפים.", math_expression: "3000" }
        ],
        final_answer: "3000"
    },
    {
        topic: "math_5_6",
        subTopic: "שטח ונפח",
        question_text: "מזגנו לקנקן 1 ליטר של מים ועוד 500 מיליליטרים של תרכיז. כמה מיליליטרים של מיץ יש עכשיו בקנקן בסך הכל?&rlm;",
        options: ["1500", "501", "600", "150"],
        correctAnswer: 0,
        hint: "הפכו את הליטר למיליליטרים (על ידי הכפלה ב-1000) ואז חברו אל הכמות השנייה.",
        solution_steps: [
            { verbal_explanation: "קודם נטפל בליטר המים ונהפוך אותו למיליליטרים.", math_expression: "1 \\times 1000 = 1000" },
            { verbal_explanation: "עכשיו נוסיף לאלף מיליליטרים האלה את החמש מאות מיליליטרים של התרכיז.", math_expression: "1000 + 500" },
            { verbal_explanation: "נחבר את המספרים ונקבל את התוצאה הכוללת בקנקן.", math_expression: "1500" }
        ],
        final_answer: "1500"
    },
    {
        topic: "math_5_6",
        subTopic: "שטח ונפח",
        question_text: "קופסת משחקים בנויה כתיבה שאורכה 10 סנטימטרים, רוחבה 5 סנטימטרים וגובהה 2 סנטימטרים. מהו הנפח של הקופסה בסנטימטרים מעוקבים (סמ''ק)?&rlm;",
        options: ["100", "50", "20", "17"],
        correctAnswer: 0,
        hint: "נפח של תיבה שווה להכפלה של שלוש המידות שלה: אורך כפול רוחב כפול גובה.",
        solution_steps: [
            { verbal_explanation: "נאסוף את כל המידות של קופסת המשחקים.", math_expression: "10 \\quad , \\quad 5 \\quad , \\quad 2" },
            { verbal_explanation: "הכלל אומר שעלינו להכפיל את כל המספרים יחד.", math_expression: "נפח = 10 \\times 5 \\times 2" },
            { verbal_explanation: "נכפיל קודם חמש בשתיים, שזה נותן עשר.", math_expression: "5 \\times 2 = 10" },
            { verbal_explanation: "נכפיל את העשר שיצא לנו באורך של התיבה שזה גם עשר.", math_expression: "10 \\times 10 = 100" },
            { verbal_explanation: "הנפח הוא מאה סנטימטרים מעוקבים.", math_expression: "100" }
        ],
        final_answer: "100"
    },
    {
        topic: "math_5_6",
        subTopic: "שטח ונפח",
        question_text: "קיר בחדר צבוע בצבע אדום, ושטחו הוא 2 מטרים רבועים (מ''ר). כמה זה שווה בסנטימטרים רבועים (סמ''ר)? (זכרו שבכל מטר רבוע יש 10,000 סמ''ר).&rlm;",
        options: ["20000", "200", "2000", "200000"],
        correctAnswer: 0,
        hint: "פשוט מאוד: הכפילו את השטח במטרים רבועים במספר 10,000 כדי לעבור לסנטימטרים רבועים.",
        solution_steps: [
            { verbal_explanation: "למדנו עכשיו חוק חדש וחשוב: מטר רבוע אחד שווה לעשרת אלפים סנטימטרים רבועים.", math_expression: "10000" },
            { verbal_explanation: "הקיר שלנו הוא בשטח של שני מטרים רבועים.", math_expression: "2" },
            { verbal_explanation: "כדי להפוך את זה לסנטימטרים רבועים נכפיל בעשרת אלפים.", math_expression: "2 \\times 10000" },
            { verbal_explanation: "נוסיף את האפסים למספר שתיים ונקבל עשרים אלף.", math_expression: "20000" }
        ],
        final_answer: "20000"
    },
    {
        topic: "math_5_6",
        subTopic: "שטח ונפח",
        question_text: "במסיבה יש בקבוק שתייה גדול של 2 ליטרים. רוצים למזוג ממנו לכוסות שכל אחת מכילה בדיוק 200 מיליליטר. לכמה כוסות נוכל למזוג את כל השתייה שבבקבוק?&rlm;",
        options: ["10", "5", "20", "15"],
        correctAnswer: 0,
        hint: "תחילה, הפכו את הליטרים בבקבוק למיליליטרים (הכפילו ב-1000). אחר כך, חלקו את התוצאה בגודל של כוס אחת.",
        solution_steps: [
            { verbal_explanation: "נהפוך את הליטרים שבבקבוק למיליליטרים כדי לדבר באותה שפה של הכוסות. נכפיל באלף.", math_expression: "2 \\times 1000 = 2000" },
            { verbal_explanation: "יש לנו אלפיים מיליליטרים של שתייה. בכל כוס נכנסים מאתיים.", math_expression: "2000 : 200" },
            { verbal_explanation: "נוריד שני אפסים מכל מספר כדי שיהיה קל לחלק. זה הופך להיות עשרים לחלק לשתיים.", math_expression: "20 : 2 = 10" },
            { verbal_explanation: "גילינו שנוכל למלא בדיוק עשר כוסות.", math_expression: "10" }
        ],
        final_answer: "10"
    },
    {
        topic: "math_5_6",
        subTopic: "שטח ונפח",
        question_text: "לחקלאי יש חלקה גדולה בגודל של 3 דונם. הוא רוצה לדעת כמה שווה החלקה במטרים רבועים (מ''ר). מה התשובה? (זכרו שבכל דונם יש 1000 מטרים רבועים).&rlm;",
        options: ["3000", "300", "30000", "30"],
        correctAnswer: 0,
        hint: "הכפילו את מספר הדונמים במספר המטרים הרבועים שיש בדונם אחד (1000).",
        solution_steps: [
            { verbal_explanation: "דונם היא מילה שמתארת שטח גדול של אדמה. חוק ברזל אומר שדונם אחד הוא אלף מטרים רבועים.", math_expression: "1000" },
            { verbal_explanation: "לחקלאי יש שלושה דונמים כאלה.", math_expression: "3" },
            { verbal_explanation: "נכפיל את שלוש באלף כדי לדעת כמה מטרים יש בחלקה כולה.", math_expression: "3 \\times 1000" },
            { verbal_explanation: "התוצאה היא שלושת אלפים מטרים רבועים.", math_expression: "3000" }
        ],
        final_answer: "3000"
    },
    {
        topic: "math_5_6",
        subTopic: "שטח ונפח",
        question_text: "גינת משחקים נבנתה בצורת ריבוע גדול שאורך הצלע שלו הוא 10 מטרים. מהו שטח הגינה במטרים רבועים (מ''ר)?&rlm;",
        options: ["100", "40", "20", "1000"],
        correctAnswer: 0,
        hint: "בריבוע, כל הצלעות שוות. כדי למצוא את השטח, הכפילו את הצלע בעצמה.",
        solution_steps: [
            { verbal_explanation: "אנו יודעים שהגינה היא ריבוע שהצלע שלו היא עשר.", math_expression: "צלע = 10" },
            { verbal_explanation: "כדי למצוא שטח של ריבוע, מכפילים צלע בצלע.", math_expression: "שטח = 10 \\times 10" },
            { verbal_explanation: "נחשב עשר כפול עשר ונקבל את התשובה.", math_expression: "100" }
        ],
        final_answer: "100"
    },
    {
        topic: "math_5_6",
        subTopic: "שטח ונפח",
        question_text: "בקבוק חלב מכיל 1.5 ליטרים. שתו ממנו 300 מיליליטר. כמה מיליליטרים של חלב נשארו בבקבוק?&rlm;",
        options: ["1200", "120", "850", "1500"],
        correctAnswer: 0,
        hint: "הפכו את הליטרים שבהתחלה למיליליטרים (על ידי הכפלה ב-1000). אחר כך עשו תרגיל חיסור רגיל.",
        solution_steps: [
            { verbal_explanation: "קודם נהפוך את כמות החלב המקורית למיליליטרים. נכפיל באלף.", math_expression: "1.5 \\times 1000" },
            { verbal_explanation: "זה יוצא אלף וחמש מאות מיליליטרים.", math_expression: "1500" },
            { verbal_explanation: "מישהו בא ושתה שלוש מאות מיליליטרים. לכן נחסר את זה מהכמות שיש לנו.", math_expression: "1500 - 300" },
            { verbal_explanation: "נפתור את תרגיל החיסור: אלף וחמש מאות פחות שלוש מאות זה אלף ומאתיים.", math_expression: "1200" },
            { verbal_explanation: "זו כמות החלב שנשארה.", math_expression: "1200" }
        ],
        final_answer: "1200"
    },
    {
        topic: "math_5_6",
        subTopic: "שטח ונפח",
        question_text: "קופסת אחסון יכולה להכיל בדיוק 1 ליטר של נוזל. כמה סנטימטרים מעוקבים (סמ''ק) יש בקופסה הזו?&rlm;",
        options: ["1000", "100", "10", "10000"],
        correctAnswer: 0,
        hint: "זכרו את הכלל החשוב: 1 מיליליטר שווה תמיד ל-1 סנטימטר מעוקב (סמ''ק). אז שאלו את עצמכם כמה מיליליטרים יש בליטר אחד.",
        solution_steps: [
            { verbal_explanation: "קודם ניזכר בליטר. ליטר אחד שווה לאלף מיליליטרים.", math_expression: "1 \\times 1000 = 1000" },
            { verbal_explanation: "עכשיו ניזכר בחוק נוסף: כל מיליליטר אחד הוא בדיוק כמו סנטימטר מעוקב אחד במרחב.", math_expression: "מיליליטר = סמ''ק" },
            { verbal_explanation: "לכן, אם יש לנו אלף מיליליטרים, יש לנו גם אלף סנטימטרים מעוקבים.", math_expression: "1000" },
            { verbal_explanation: "זוהי קיבולת הקופסה.", math_expression: "1000" }
        ],
        final_answer: "1000"
    }
];
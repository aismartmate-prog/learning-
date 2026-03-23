const questionsDB = [
    // ==========================================
    // תת נושא 1: חיבור וחיסור שברים עשרוניים (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 2.4 + 3.5 \\)&rlm;",
        "options": ["5.9", "6.1", "5.8", "6.9"],
        "correctAnswer": 0,
        "hint": "חברו את העשיריות לחוד ואת השלמים לחוד. קל יותר לפתור במאונך כאשר הנקודה העשרונית נמצאת בדיוק אחת מתחת לשנייה.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את המספרים זה מתחת לזה כך שהנקודות העשרוניות יהיו מיושרות בדיוק באותו הקו.", "math_expression": "2.4 + 3.5" },
            { "verbal_explanation": "נחבר תחילה את הספרות שמימין לנקודה (העשיריות): ארבע ועוד חמש שווה תשע.", "math_expression": "4 + 5 = 9" },
            { "verbal_explanation": "נחבר כעת את הספרות שמשמאל לנקודה (השלמים): שתיים ועוד שלוש שווה חמש.", "math_expression": "2 + 3 = 5" },
            { "verbal_explanation": "נחבר את השלמים והעשיריות יחד לקבלת התשובה הסופית, עם הנקודה במקומה.", "math_expression": "5.9" }
        ],
        "final_answer": "5.9"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 5.8 - 2.3 \\)&rlm;",
        "options": ["3.5", "3.3", "4.5", "2.5"],
        "correctAnswer": 0,
        "hint": "חסרו את העשיריות בנפרד ואת השלמים בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את התרגיל בצורה מאונכת כך שהנקודה של המספר הראשון תהיה מעל הנקודה של המספר השני.", "math_expression": "5.8 - 2.3" },
            { "verbal_explanation": "נחסר את העשיריות: שמונה פחות שלוש שווה חמש.", "math_expression": "8 - 3 = 5" },
            { "verbal_explanation": "נחסר את השלמים: חמש פחות שתיים שווה שלוש.", "math_expression": "5 - 2 = 3" },
            { "verbal_explanation": "נרשום את המספר השלם והעשיריות שקיבלנו לתשובה אחת מלאה.", "math_expression": "3.5" }
        ],
        "final_answer": "3.5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 1.25 + 0.4 \\)&rlm;",
        "options": ["1.65", "1.29", "5.25", "1.69"],
        "correctAnswer": 0,
        "hint": "הוסיפו אפס מימין למספר שיש לו פחות ספרות עשרוניות, כדי שיהיה קל לחבר את המאיות והעשיריות.",
        "solution_steps": [
            { "verbal_explanation": "למספר אחד יש שתי ספרות אחרי הנקודה ולשני יש רק אחת. נוסיף אפס שומר מקום בסוף המספר הקצר.", "math_expression": "1.25 + 0.40" },
            { "verbal_explanation": "נחבר את המאיות: חמש ועוד אפס שווה חמש.", "math_expression": "5 + 0 = 5" },
            { "verbal_explanation": "נחבר את העשיריות ואת השלמים.", "math_expression": "2 + 4 = 6 \\quad , \\quad 1 + 0 = 1" },
            { "verbal_explanation": "נרשום את התשובה הסופית כשהספרות במקומן הנכון.", "math_expression": "1.65" }
        ],
        "final_answer": "1.65"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 3 - 1.2 \\)&rlm;",
        "options": ["1.8", "2.2", "2.8", "1.2"],
        "correctAnswer": 0,
        "hint": "הפכו את המספר השלם למספר עשרוני על ידי הוספת נקודה עשרונית ואפס (כמו שלוש נקודה אפס).",
        "solution_steps": [
            { "verbal_explanation": "נרשום את המספר השלם עם נקודה עשרונית ואפס, כדי שנוכל לחסר ממנו עשיריות.", "math_expression": "3.0 - 1.2" },
            { "verbal_explanation": "אי אפשר לחסר שתיים מאפס, לכן 'נפרוט' שלם אחד לעשר עשיריות, ונחסר ממנו שתיים.", "math_expression": "10 - 2 = 8" },
            { "verbal_explanation": "כעת נחסר את השלמים. נשארו לנו רק שני שלמים, ומהם נחסר שלם אחד.", "math_expression": "2 - 1 = 1" },
            { "verbal_explanation": "נרכיב את התשובה הסופית יחד עם הנקודה העשרונית.", "math_expression": "1.8" }
        ],
        "final_answer": "1.8"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 0.07 + 0.9 \\)&rlm;",
        "options": ["0.97", "0.16", "0.016", "0.79"],
        "correctAnswer": 0,
        "hint": "סדרו את המספרים במאונך, הוסיפו אפס לעשיריות החסרות וחברו.",
        "solution_steps": [
            { "verbal_explanation": "ניישר את הנקודות העשרוניות ונוסיף אפס במקום החסר של המאיות במספר השני.", "math_expression": "0.07 + 0.90" },
            { "verbal_explanation": "נחבר את המאיות (הספרה השנייה אחרי הנקודה): שבע ועוד אפס.", "math_expression": "7 + 0 = 7" },
            { "verbal_explanation": "נחבר את העשיריות (הספרה הראשונה אחרי הנקודה): אפס ועוד תשע.", "math_expression": "0 + 9 = 9" },
            { "verbal_explanation": "נרשום את התוצאה עם אפס בשלמים מכיוון שאין לנו מספרים שלמים לחבר.", "math_expression": "0.97" }
        ],
        "final_answer": "0.97"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 12.5 - 3.75 \\)&rlm;",
        "options": ["8.75", "9.25", "8.25", "9.75"],
        "correctAnswer": 0,
        "hint": "הוסיפו אפס למספר הראשון כך שיהיו בו שתי ספרות עשרוניות, ולאחר מכן חסרו תוך כדי פריטה (הלוואה) היכן שצריך.",
        "solution_steps": [
            { "verbal_explanation": "נוסיף אפס למספר הראשון כדי שנוכל לחסר מאיות ממאיות בטור.", "math_expression": "12.50 - 3.75" },
            { "verbal_explanation": "נפרוט עשירית אחת למאיות ונחסר חמש מתוך עשר. נשארנו עם חמש מאיות.", "math_expression": "10 - 5 = 5" },
            { "verbal_explanation": "נפרוט שלם אחד לעשיריות, יחד עם ארבע העשיריות שנשארו יש לנו ארבע עשרה. נחסר שבע.", "math_expression": "14 - 7 = 7" },
            { "verbal_explanation": "מתוך אחד עשר השלמים שנותרו נחסר שלושה שלמים. נרכיב את התשובה המלאה.", "math_expression": "11 - 3 = 8 \\Rightarrow 8.75" }
        ],
        "final_answer": "8.75"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 4.8 + 5.32 \\)&rlm;",
        "options": ["10.12", "10.1", "9.12", "10.4"],
        "correctAnswer": 0,
        "hint": "ייישרו את הנקודות העשרוניות אחת תחת השנייה לפני החיבור.",
        "solution_steps": [
            { "verbal_explanation": "נוסיף אפס מימין למספר הראשון כדי שיהיו לו שתי ספרות עשרוניות.", "math_expression": "4.80 + 5.32" },
            { "verbal_explanation": "נחבר את המאיות והעשיריות. שמונה ועוד שלוש שווה אחת עשרה, לכן נעביר שלם אחד הלאה.", "math_expression": "0 + 2 = 2 \\quad , \\quad 8 + 3 = 11" },
            { "verbal_explanation": "נחבר את השלמים יחד עם השלם הנוסף שהעברנו מהעשיריות.", "math_expression": "1 + 4 + 5 = 10" },
            { "verbal_explanation": "נחבר את הכל לתוצאה אחת.", "math_expression": "10.12" }
        ],
        "final_answer": "10.12"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 10.1 - 0.99 \\)&rlm;",
        "options": ["9.11", "9.21", "9.01", "10.11"],
        "correctAnswer": 0,
        "hint": "הוסיפו אפס למספר הראשון, וזכרו לפרוט (להלוות) מהשלמים כדי שתוכלו לחסר כראוי.",
        "solution_steps": [
            { "verbal_explanation": "נוסיף אפס למספר הראשון כדי ליישר את המקומות העשרוניים למאיות.", "math_expression": "10.10 - 0.99" },
            { "verbal_explanation": "נפרוט עשירית אחת כדי שנוכל לחסר תשע מאיות מאפס. נשארנו עם מאית אחת.", "math_expression": "10 - 9 = 1" },
            { "verbal_explanation": "כעת אין לנו עשיריות, לכן נפרוט שלם מעשרת השלמים, ומהעשר עשיריות נחסר תשע.", "math_expression": "10 - 9 = 1" },
            { "verbal_explanation": "נשארו לנו תשעה שלמים. נרכיב את התשובה הסופית יחד.", "math_expression": "9.11" }
        ],
        "final_answer": "9.11"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 0.55 + 0.45 \\)&rlm;",
        "options": ["1", "0.9", "1.1", "0.100"],
        "correctAnswer": 0,
        "hint": "חברו את המספרים בזהירות. מה קורה כשסכום המאיות והעשיריות מגיע למאה מאיות?",
        "solution_steps": [
            { "verbal_explanation": "נחבר תחילה את ספרת המאיות משני המספרים.", "math_expression": "5 + 5 = 10" },
            { "verbal_explanation": "נרשום אפס במאיות ונעביר עשירית אחת לחיבור העשיריות. כעת נחבר את העשיריות יחד עם זו שעברה.", "math_expression": "1 + 5 + 4 = 10" },
            { "verbal_explanation": "קיבלנו עשר עשיריות, שהן שוות בדיוק לשלם אחד. נעביר אחד למקום השלמים.", "math_expression": "1.00" },
            { "verbal_explanation": "מספר עשרוני עם אפסים בסופו שווה למספר השלם בלבד.", "math_expression": "1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 7.2 - 3.15 \\)&rlm;",
        "options": ["4.05", "4.15", "4.1", "3.05"],
        "correctAnswer": 0,
        "hint": "הוסיפו אפס למספר הראשון, ופרטו מהעשיריות כדי שיהיה אפשר לחסר מהמאיות.",
        "solution_steps": [
            { "verbal_explanation": "נוסיף אפס כדי שיהיו שתי ספרות אחרי הנקודה בשני המספרים.", "math_expression": "7.20 - 3.15" },
            { "verbal_explanation": "נפרוט עשירית אחת למאיות, ונחסר חמש מעשר.", "math_expression": "10 - 5 = 5" },
            { "verbal_explanation": "נחסר את העשירית שנותרה מזו של המספר השני.", "math_expression": "1 - 1 = 0" },
            { "verbal_explanation": "נחסר את השלמים ונרשום את התוצאה המלאה.", "math_expression": "7 - 3 = 4 \\Rightarrow 4.05" }
        ],
        "final_answer": "4.05"
    },

    // ==========================================
    // תת נושא 2: חיבור וחיסור שברים פשוטים (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{1}{4} + \\dfrac{2}{4} \\)&rlm;",
        "options": ["3/4", "3/8", "2/4", "1/2"],
        "correctAnswer": 0,
        "hint": "כאשר המכנה זהה (המספר למטה), מחברים רק את המונים (המספרים למעלה).",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שהמכנה בשני השברים זהה, הוא נשאר אותו דבר בתשובה.", "math_expression": "4" },
            { "verbal_explanation": "נחבר רק את המספרים העליונים (המונים).", "math_expression": "1 + 2 = 3" },
            { "verbal_explanation": "נרשום את התשובה הסופית כשבר עם המונה החדש והמכנה המקורי.", "math_expression": "\\dfrac{3}{4}" }
        ],
        "final_answer": "3/4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{1}{2} + \\dfrac{1}{3} \\)&rlm;",
        "options": ["5/6", "2/5", "3/5", "1/6"],
        "correctAnswer": 0,
        "hint": "אי אפשר לחבר שברים עם מכנים שונים. מצאו מכנה משותף שהוא כפולה של שני המכנים (למשל, הכפילו אותם זה בזה).",
        "solution_steps": [
            { "verbal_explanation": "נמצא מכנה משותף לשניים ושלוש. המספר הקטן ביותר שמתחלק בשניהם הוא שש.", "math_expression": "2 \\times 3 = 6" },
            { "verbal_explanation": "נרחיב כל שבר כך שהמכנה שלו יהיה שש. את השבר הראשון נכפול בשלוש, ואת השני בשתיים.", "math_expression": "\\dfrac{1 \\times 3}{2 \\times 3} = \\dfrac{3}{6} \\quad , \\quad \\dfrac{1 \\times 2}{3 \\times 2} = \\dfrac{2}{6}" },
            { "verbal_explanation": "כעת נחבר את המונים של השברים המורחבים.", "math_expression": "\\dfrac{3}{6} + \\dfrac{2}{6}" },
            { "verbal_explanation": "נחבר את המונים שלוש ושתיים ונשמור על המכנה.", "math_expression": "\\dfrac{5}{6}" }
        ],
        "final_answer": "5/6"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{3}{4} - \\dfrac{1}{2} \\)&rlm;",
        "options": ["1/4", "2/2", "1/2", "2/4"],
        "correctAnswer": 0,
        "hint": "לפני שמחסרים, הרחיבו את השבר עם המכנה הקטן כדי שיהיה שווה למכנה הגדול.",
        "solution_steps": [
            { "verbal_explanation": "המכנה המשותף יהיה ארבע, כי ארבע מתחלק בשתיים. לכן נרחיב רק את השבר השני פי שתיים.", "math_expression": "\\dfrac{1 \\times 2}{2 \\times 2} = \\dfrac{2}{4}" },
            { "verbal_explanation": "נכתוב את תרגיל החיסור מחדש עם המכנים המשותפים.", "math_expression": "\\dfrac{3}{4} - \\dfrac{2}{4}" },
            { "verbal_explanation": "נחסר את המונים בלבד ונשאיר את המכנה.", "math_expression": "3 - 2 = 1" },
            { "verbal_explanation": "נרשום את התשובה הסופית.", "math_expression": "\\dfrac{1}{4}" }
        ],
        "final_answer": "1/4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( 1\\dfrac{1}{5} + 2\\dfrac{3}{5} \\)&rlm;",
        "options": ["3 4/5", "3 2/5", "4 4/5", "2 4/5"],
        "correctAnswer": 0,
        "hint": "חברו קודם את השלמים בנפרד, ואז חברו את השברים בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את המספרים השלמים מכל אחד מהמספרים המעורבים.", "math_expression": "1 + 2 = 3" },
            { "verbal_explanation": "המכנה של השברים זהה, אז נחבר את המונים שלהם.", "math_expression": "\\dfrac{1}{5} + \\dfrac{3}{5} = \\dfrac{4}{5}" },
            { "verbal_explanation": "נחבר את השלמים שקיבלנו עם השבר שקיבלנו לתשובה אחת שלמה.", "math_expression": "3\\dfrac{4}{5}" }
        ],
        "final_answer": "3 4/5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( 2 - \\dfrac{1}{3} \\)&rlm;",
        "options": ["1 2/3", "1 1/3", "2 1/3", "1"],
        "correctAnswer": 0,
        "hint": "אי אפשר לחסר שבר ממספר שלם ישירות. הפכו אחד מהשלמים לשבר שמורכב משלישים (שלוש חלקי שלוש).",
        "solution_steps": [
            { "verbal_explanation": "נפרוט שלם אחד מתוך השניים למספר מעורב עם שבר שהמכנה שלו הוא שלוש.", "math_expression": "2 = 1\\dfrac{3}{3}" },
            { "verbal_explanation": "נכתוב את התרגיל מחדש עם המספר המעורב.", "math_expression": "1\\dfrac{3}{3} - \\dfrac{1}{3}" },
            { "verbal_explanation": "נחסר את השברים (שלוש פחות אחד במונה). השלם נשאר ללא שינוי.", "math_expression": "\\dfrac{3}{3} - \\dfrac{1}{3} = \\dfrac{2}{3}" },
            { "verbal_explanation": "נחבר את השלם שנותר עם התוצאה של חיסור השברים.", "math_expression": "1\\dfrac{2}{3}" }
        ],
        "final_answer": "1 2/3"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( 3\\dfrac{1}{2} - 1\\dfrac{1}{4} \\)&rlm;",
        "options": ["2 1/4", "2 1/2", "1 3/4", "2 3/4"],
        "correctAnswer": 0,
        "hint": "מצאו מכנה משותף לשברים לפני החיסור, ולאחר מכן חסרו שלמים משלמים ושברים משברים.",
        "solution_steps": [
            { "verbal_explanation": "נרחיב את השבר שהמכנה שלו הוא שתיים כדי שהמכנה המשותף יהיה ארבע.", "math_expression": "\\dfrac{1 \\times 2}{2 \\times 2} = \\dfrac{2}{4}" },
            { "verbal_explanation": "נכתוב את התרגיל מחדש עם המספרים המעורבים המעודכנים.", "math_expression": "3\\dfrac{2}{4} - 1\\dfrac{1}{4}" },
            { "verbal_explanation": "נחסר את השלמים: שלוש פחות אחד.", "math_expression": "3 - 1 = 2" },
            { "verbal_explanation": "נחסר את השברים (שתיים פחות אחד במונה), ונחבר לשלמים.", "math_expression": "\\dfrac{2}{4} - \\dfrac{1}{4} = \\dfrac{1}{4} \\Rightarrow 2\\dfrac{1}{4}" }
        ],
        "final_answer": "2 1/4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{5}{6} + \\dfrac{1}{3} \\)&rlm;",
        "options": ["1 1/6", "6/9", "7/6", "1 1/3"],
        "correctAnswer": 0,
        "hint": "מצאו מכנה משותף (שש), חברו את השברים, ואם המונה גדול מהמכנה - הוציאו שלם.",
        "solution_steps": [
            { "verbal_explanation": "נרחיב את השבר השני כדי שהמכנה שלו יהיה שש.", "math_expression": "\\dfrac{1 \\times 2}{3 \\times 2} = \\dfrac{2}{6}" },
            { "verbal_explanation": "נחבר את המונים של שני השברים עם המכנה המשותף.", "math_expression": "\\dfrac{5}{6} + \\dfrac{2}{6} = \\dfrac{7}{6}" },
            { "verbal_explanation": "קיבלנו שבר שהמונה שלו גדול מהמכנה. נהפוך אותו למספר מעורב על ידי חלוקת שבע בשש.", "math_expression": "7 \\div 6 = 1" },
            { "verbal_explanation": "השארית היא אחת, לכן התשובה היא שלם אחד ושישית אחת.", "math_expression": "1\\dfrac{1}{6}" }
        ],
        "final_answer": "1 1/6"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( 4\\dfrac{1}{3} - 2\\dfrac{2}{3} \\)&rlm;",
        "options": ["1 2/3", "2 1/3", "1 1/3", "2"],
        "correctAnswer": 0,
        "hint": "אי אפשר לחסר שתי שלישים משליש אחד. הלוו (פרטו) שלם אחד מתוך הארבעה, והפכו אותו לשלוש שלישים.",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שהשבר הראשון קטן מהשני, 'נפרט' שלם אחד מהמספר ארבע למספר המורכב משלישים.", "math_expression": "4\\dfrac{1}{3} = 3 + \\dfrac{3}{3} + \\dfrac{1}{3} = 3\\dfrac{4}{3}" },
            { "verbal_explanation": "נכתוב את התרגיל מחדש בעזרת המספר המפורט.", "math_expression": "3\\dfrac{4}{3} - 2\\dfrac{2}{3}" },
            { "verbal_explanation": "נחסר את השלמים: שלוש פחות שתיים.", "math_expression": "3 - 2 = 1" },
            { "verbal_explanation": "נחסר את השברים: ארבע פחות שתיים במונה. נצרף יחד את השלם והשבר.", "math_expression": "\\dfrac{4}{3} - \\dfrac{2}{3} = \\dfrac{2}{3} \\Rightarrow 1\\dfrac{2}{3}" }
        ],
        "final_answer": "1 2/3"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{7}{8} - \\dfrac{1}{4} \\)&rlm;",
        "options": ["5/8", "6/4", "3/4", "5/4"],
        "correctAnswer": 0,
        "hint": "מצאו מכנה משותף שהוא שמונה.",
        "solution_steps": [
            { "verbal_explanation": "נרחיב את השבר השני פי שתיים כדי להגיע למכנה משותף של שמונה.", "math_expression": "\\dfrac{1 \\times 2}{4 \\times 2} = \\dfrac{2}{8}" },
            { "verbal_explanation": "נכתוב את תרגיל החיסור עם המכנים הזהים.", "math_expression": "\\dfrac{7}{8} - \\dfrac{2}{8}" },
            { "verbal_explanation": "נחסר את המונים ונשאיר את המכנה כפי שהוא.", "math_expression": "7 - 2 = 5" },
            { "verbal_explanation": "נרשום את התשובה הסופית.", "math_expression": "\\dfrac{5}{8}" }
        ],
        "final_answer": "5/8"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( 1\\dfrac{1}{2} + 1\\dfrac{2}{3} \\)&rlm;",
        "options": ["3 1/6", "2 3/5", "2 5/6", "3"],
        "correctAnswer": 0,
        "hint": "חברו את השלמים, מצאו מכנה משותף (שש) לשברים וחברו אותם. אל תשכחו להוציא שלמים אם קיבלתם שבר גדול מאחד.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את המספרים השלמים בשלב הראשון.", "math_expression": "1 + 1 = 2" },
            { "verbal_explanation": "נמצא מכנה משותף לשברים שהוא שש. נרחיב את השבר הראשון פי שלוש ואת השני פי שתיים.", "math_expression": "\\dfrac{1 \\times 3}{2 \\times 3} = \\dfrac{3}{6} \\quad , \\quad \\dfrac{2 \\times 2}{3 \\times 2} = \\dfrac{4}{6}" },
            { "verbal_explanation": "נחבר את המונים של השברים המורחבים.", "math_expression": "\\dfrac{3}{6} + \\dfrac{4}{6} = \\dfrac{7}{6}" },
            { "verbal_explanation": "השבר גדול משלם, לכן נהפוך אותו למספר מעורב ונחבר לשלמים מהשלב הראשון.", "math_expression": "\\dfrac{7}{6} = 1\\dfrac{1}{6} \\Rightarrow 2 + 1\\dfrac{1}{6} = 3\\dfrac{1}{6}" }
        ],
        "final_answer": "3 1/6"
    },

    // ==========================================
    // תת נושא 3: חילוק שברים עשרוניים (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 4.8 \\div 2 \\)&rlm;",
        "options": ["2.4", "24", "0.24", "2.8"],
        "correctAnswer": 0,
        "hint": "חלקו את השלמים ואחר כך את העשיריות. אפשר להתייחס לזה כמו ארבעים ושמונה חלקי שתיים, ואז להחזיר את הנקודה העשרונית למקום.",
        "solution_steps": [
            { "verbal_explanation": "נתעלם לרגע מהנקודה העשרונית ונחלק את המספר השלם שנוצר בשתיים.", "math_expression": "48 \\div 2 = 24" },
            { "verbal_explanation": "כיוון שבמספר המקורי הייתה ספרה אחת אחרי הנקודה, נחזיר את הנקודה העשרונית ספרה אחת שמאלה בתשובה שקיבלנו.", "math_expression": "2.4" },
            { "verbal_explanation": "אפשר גם לחלק כל ספרה בנפרד: ארבע לחלק לשתיים, ואחר כך שמונה לחלק לשתיים.", "math_expression": "4 \\div 2 = 2 \\quad , \\quad 8 \\div 2 = 4" },
            { "verbal_explanation": "נרכיב את התשובה הסופית כשהנקודה ביניהם.", "math_expression": "2.4" }
        ],
        "final_answer": "2.4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 1.5 \\div 0.5 \\)&rlm;",
        "options": ["3", "0.3", "30", "1.5"],
        "correctAnswer": 0,
        "hint": "כשמחלקים במספר עשרוני, כדאי להכפיל את שני המספרים בעשר כדי להפוך אותם למספרים שלמים.",
        "solution_steps": [
            { "verbal_explanation": "כדי להיפטר מהנקודה העשרונית במספר המחלק, נכפיל את שני המספרים פי עשר.", "math_expression": "1.5 \\times 10 = 15 \\quad , \\quad 0.5 \\times 10 = 5" },
            { "verbal_explanation": "נכתוב את תרגיל החילוק החדש והפשוט יותר.", "math_expression": "15 \\div 5" },
            { "verbal_explanation": "נחשב את התוצאה של חלוקת המספרים השלמים.", "math_expression": "3" },
            { "verbal_explanation": "התשובה לתרגיל המקורי זהה בדיוק לתרגיל המורחב.", "math_expression": "3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 0.24 \\div 4 \\)&rlm;",
        "options": ["0.06", "0.6", "6", "0.12"],
        "correctAnswer": 0,
        "hint": "חשבו כמה זה עשרים וארבע חלקי ארבע, ושימו לב כמה ספרות צריכות להיות אחרי הנקודה.",
        "solution_steps": [
            { "verbal_explanation": "נתייחס למספר כאילו היה שלם ונחלק אותו בארבע.", "math_expression": "24 \\div 4 = 6" },
            { "verbal_explanation": "במספר המקורי היו שתי ספרות אחרי הנקודה (מאיות).", "math_expression": "0.24" },
            { "verbal_explanation": "לכן, גם בתשובה צריכות להיות שתי ספרות אחרי הנקודה.", "math_expression": "0.06" }
        ],
        "final_answer": "0.06"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 3 \\div 0.2 \\)&rlm;",
        "options": ["15", "1.5", "6", "0.15"],
        "correctAnswer": 0,
        "hint": "הכפילו את שני המספרים בעשר כדי להפוך את המחלק למספר שלם.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את שני המספרים בעשר כדי שהמספר השני יהפוך לשלם.", "math_expression": "3 \\times 10 = 30 \\quad , \\quad 0.2 \\times 10 = 2" },
            { "verbal_explanation": "נכתוב את תרגיל החילוק החדש שקיבלנו.", "math_expression": "30 \\div 2" },
            { "verbal_explanation": "נבצע את פעולת החילוק הרגילה.", "math_expression": "15" },
            { "verbal_explanation": "התשובה לתרגיל החילוק החדש זהה לתרגיל המקורי.", "math_expression": "15" }
        ],
        "final_answer": "15"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 1.2 \\div 0.3 \\)&rlm;",
        "options": ["4", "0.4", "40", "3.6"],
        "correctAnswer": 0,
        "hint": "שאלו את עצמכם כמה פעמים אפשר להכניס שלוש עשיריות לתוך שנים עשר עשיריות. אפשר גם לכפול את שני המספרים בעשר.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את שני המספרים בעשר כדי לעבוד עם מספרים שלמים בלבד.", "math_expression": "1.2 \\times 10 = 12 \\quad , \\quad 0.3 \\times 10 = 3" },
            { "verbal_explanation": "כעת התרגיל הוא שנים עשר לחלק לשלוש.", "math_expression": "12 \\div 3" },
            { "verbal_explanation": "נפתור את התרגיל המוכר מלוח הכפל.", "math_expression": "4" },
            { "verbal_explanation": "מכיוון שהכפלנו את שני הצדדים, אין צורך להזיז נקודות בסוף.", "math_expression": "4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 0.08 \\div 0.2 \\)&rlm;",
        "options": ["0.4", "0.04", "4", "40"],
        "correctAnswer": 0,
        "hint": "הכפילו את שני המספרים בעשר כדי שהמחלק יהפוך למספר שלם.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את שני המספרים בעשר. הנקודה זזה מקום אחד ימינה בשניהם.", "math_expression": "0.08 \\times 10 = 0.8 \\quad , \\quad 0.2 \\times 10 = 2" },
            { "verbal_explanation": "התרגיל החדש הוא שמונה עשיריות לחלק לשתיים.", "math_expression": "0.8 \\div 2" },
            { "verbal_explanation": "נחלק שמונה בשתיים כדי לדעת כמה עשיריות נקבל.", "math_expression": "8 \\div 2 = 4" },
            { "verbal_explanation": "נרשום את התשובה כארבע עשיריות.", "math_expression": "0.4" }
        ],
        "final_answer": "0.4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 5.5 \\div 5 \\)&rlm;",
        "options": ["1.1", "11", "0.11", "1.01"],
        "correctAnswer": 0,
        "hint": "חלקו את השלמים ולאחר מכן את העשיריות.",
        "solution_steps": [
            { "verbal_explanation": "נחלק תחילה את החלק השלם של המספר במחלק.", "math_expression": "5 \\div 5 = 1" },
            { "verbal_explanation": "נרשום את הנקודה העשרונית בתשובה, ונעבור לחלק את העשיריות.", "math_expression": "5 \\div 5 = 1" },
            { "verbal_explanation": "נחבר את הפתרונות של שני השלבים לתוצאה אחת.", "math_expression": "1.1" }
        ],
        "final_answer": "1.1"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 2.5 \\div 0.05 \\)&rlm;",
        "options": ["50", "5", "500", "0.5"],
        "correctAnswer": 0,
        "hint": "המחלק הוא עם מאיות (שתי ספרות אחרי הנקודה), אז כדאי להכפיל את שני המספרים במאה.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל במאה כדי שהמספר השני יהפוך לשלם. הזזת נקודה פעמיים ימינה מוסיפה אפס למספר הראשון.", "math_expression": "2.5 \\times 100 = 250 \\quad , \\quad 0.05 \\times 100 = 5" },
            { "verbal_explanation": "נרשום את התרגיל החדש עם המספרים השלמים שקיבלנו.", "math_expression": "250 \\div 5" },
            { "verbal_explanation": "נחשב את החילוק. אפשר לחשוב על זה כמו עשרים וחמש חלקי חמש, ולהוסיף אפס.", "math_expression": "25 \\div 5 = 5" },
            { "verbal_explanation": "נוסיף את האפס חזרה ונקבל את התוצאה.", "math_expression": "50" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 0.36 \\div 0.6 \\)&rlm;",
        "options": ["0.6", "6", "0.06", "60"],
        "correctAnswer": 0,
        "hint": "הכפילו בעשר כדי להפוך את המחלק למספר שלם.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את שני צידי התרגיל בעשר. הנקודה העשרונית תזוז צעד אחד ימינה.", "math_expression": "0.36 \\times 10 = 3.6 \\quad , \\quad 0.6 \\times 10 = 6" },
            { "verbal_explanation": "נרשום את התרגיל החדש שקיבלנו.", "math_expression": "3.6 \\div 6" },
            { "verbal_explanation": "נחלק כאילו לא הייתה נקודה עשרונית.", "math_expression": "36 \\div 6 = 6" },
            { "verbal_explanation": "מכיוון שבמספר שחילקנו הייתה ספרה אחת אחרי הנקודה, נוסיף אותה גם לתשובה.", "math_expression": "0.6" }
        ],
        "final_answer": "0.6"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים עשרוניים",
        "question_text": "חשבו את התרגיל הבא: \\( 10 \\div 0.1 \\)&rlm;",
        "options": ["100", "1", "1000", "0.01"],
        "correctAnswer": 0,
        "hint": "לחלק בעשירית זה בדיוק כמו לשאול: 'כמה עשיריות נכנסות בתוך עשר?'. הכפילו בעשר כדי להקל על החישוב.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את שני המספרים פי עשר כדי להעלים את הנקודה העשרונית מהמחלק.", "math_expression": "10 \\times 10 = 100 \\quad , \\quad 0.1 \\times 10 = 1" },
            { "verbal_explanation": "נרשום את תרגיל החילוק החדש.", "math_expression": "100 \\div 1" },
            { "verbal_explanation": "כל מספר שמחולק באחד שווה לעצמו.", "math_expression": "100" }
        ],
        "final_answer": "100"
    },

    // ==========================================
    // תת נושא 4: חילוק שברים פשוטים (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{1}{2} \\div \\dfrac{1}{4} \\)&rlm;",
        "options": ["2", "1/8", "1/2", "4"],
        "correctAnswer": 0,
        "hint": "חילוק של שבר אחד בשבר אחר הופך לכפל בשבר ההפוך של המחלק.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את חילוק השברים לתרגיל כפל על ידי הפיכת השבר השני.", "math_expression": "\\dfrac{1}{2} \\times \\dfrac{4}{1}" },
            { "verbal_explanation": "נכפול מונה במונה ומכנה במכנה.", "math_expression": "\\dfrac{1 \\times 4}{2 \\times 1} = \\dfrac{4}{2}" },
            { "verbal_explanation": "נצמצם ונחשב את התוצאה הסופית כאותה פעולת חילוק רגילה בין מספרים שלמים.", "math_expression": "4 \\div 2 = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( 2 \\div \\dfrac{1}{3} \\)&rlm;",
        "options": ["6", "2/3", "1 1/2", "3/2"],
        "correctAnswer": 0,
        "hint": "כדי לחלק מספר שלם בשבר, הפכו תחילה את השלם לשבר עם מכנה אחד, ואז כפלו בשבר ההפוך.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את המספר השלם כשבר על ידי הוספת קו שבר וספרה אחת מתחתיו.", "math_expression": "\\dfrac{2}{1} \\div \\dfrac{1}{3}" },
            { "verbal_explanation": "נהפוך את סימן החילוק לכפל, ואת השבר השני נהפוך (המונה למטה והמכנה למעלה).", "math_expression": "\\dfrac{2}{1} \\times \\dfrac{3}{1}" },
            { "verbal_explanation": "נכפול בקו ישר (מונים יחד ומכנים יחד).", "math_expression": "\\dfrac{2 \\times 3}{1 \\times 1} = \\dfrac{6}{1}" },
            { "verbal_explanation": "שבר שהמכנה שלו הוא אחד שווה למונה עצמו כמספר שלם.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{3}{4} \\div 2 \\)&rlm;",
        "options": ["3/8", "1 1/2", "3/2", "6/4"],
        "correctAnswer": 0,
        "hint": "לחלק בשתיים זה כמו לכפול בחצי. הפכו את השלם לשבר והמשיכו רגיל.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את המספר השלם לשבר על ידי כך שנשים אותו מעל הספרה אחת.", "math_expression": "\\dfrac{3}{4} \\div \\dfrac{2}{1}" },
            { "verbal_explanation": "נהפוך את התרגיל לתרגיל כפל ונשנה את השבר השני (המספר השלם מתהפך והופך לשבר).", "math_expression": "\\dfrac{3}{4} \\times \\dfrac{1}{2}" },
            { "verbal_explanation": "נכפול מונה במונה ומכנה במכנה לקבלת התשובה.", "math_expression": "\\dfrac{3 \\times 1}{4 \\times 2} = \\dfrac{3}{8}" }
        ],
        "final_answer": "3/8"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{2}{5} \\div \\dfrac{1}{5} \\)&rlm;",
        "options": ["2", "1/2", "2/25", "1"],
        "correctAnswer": 0,
        "hint": "השאלה היא בעצם 'כמה פעמים חמישית אחת נכנסת בתוך שתי חמישיות?'",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את תרגיל החילוק לתרגיל כפל על ידי הפיכת השבר השני.", "math_expression": "\\dfrac{2}{5} \\times \\dfrac{5}{1}" },
            { "verbal_explanation": "ניתן לצמצם את המספר חמש שנמצא גם במונה של השבר השני וגם במכנה של השבר הראשון.", "math_expression": "\\dfrac{2 \\times 5}{5 \\times 1} = \\dfrac{10}{5}" },
            { "verbal_explanation": "נחלק את המונה במכנה כדי לקבל מספר שלם.", "math_expression": "10 \\div 5 = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{2}{3} \\div \\dfrac{4}{9} \\)&rlm;",
        "options": ["1 1/2", "8/27", "2/3", "1 1/3"],
        "correctAnswer": 0,
        "hint": "הפכו לכפל ונסו לצמצם באלכסון לפני שאתם כופלים כדי לעבוד עם מספרים קטנים יותר.",
        "solution_steps": [
            { "verbal_explanation": "נשנה את הפעולה לכפל ונכתוב את השבר השני במהופך.", "math_expression": "\\dfrac{2}{3} \\times \\dfrac{9}{4}" },
            { "verbal_explanation": "נכפול מונה במונה ומכנה במכנה.", "math_expression": "\\dfrac{18}{12}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקת המונה והמכנה באותו מספר. במקרה זה נחלק בשש.", "math_expression": "\\dfrac{18 \\div 6}{12 \\div 6} = \\dfrac{3}{2}" },
            { "verbal_explanation": "נהפוך את השבר שקיבלנו למספר מעורב מכיוון שהמונה גדול מהמכנה.", "math_expression": "1\\dfrac{1}{2}" }
        ],
        "final_answer": "1 1/2"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( 1\\dfrac{1}{2} \\div \\dfrac{1}{2} \\)&rlm;",
        "options": ["3", "1 1/4", "3/4", "2"],
        "correctAnswer": 0,
        "hint": "לפני שמחלקים, חובה להפוך את המספר המעורב לשבר מדומה (שבר שהמונה בו גדול מהמכנה).",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את המספר המעורב לשבר מדומה: נכפול את השלם במכנה ונוסיף למונה.", "math_expression": "1 \\times 2 + 1 = 3 \\Rightarrow \\dfrac{3}{2}" },
            { "verbal_explanation": "נרשום את התרגיל מחדש עם השבר המדומה שנוצר.", "math_expression": "\\dfrac{3}{2} \\div \\dfrac{1}{2}" },
            { "verbal_explanation": "נהפוך לכפל בשבר ההופכי.", "math_expression": "\\dfrac{3}{2} \\times \\dfrac{2}{1}" },
            { "verbal_explanation": "נצמצם את השתיים באלכסון ונקבל את התשובה כשלם.", "math_expression": "\\dfrac{3}{1} = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{5}{8} \\div \\dfrac{1}{4} \\)&rlm;",
        "options": ["2 1/2", "5/32", "1 1/4", "2"],
        "correctAnswer": 0,
        "hint": "הפכו לכפל בשבר השני כשהוא הפוך. נסו למצוא קשר בין המספר ארבע למספר שמונה כדי לצמצם.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך לכפל בשבר ההופכי.", "math_expression": "\\dfrac{5}{8} \\times \\dfrac{4}{1}" },
            { "verbal_explanation": "נכפול מונה במונה ומכנה במכנה.", "math_expression": "\\dfrac{20}{8}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקת המונה והמכנה בארבע.", "math_expression": "\\dfrac{5}{2}" },
            { "verbal_explanation": "נהפוך למספר מעורב.", "math_expression": "2\\dfrac{1}{2}" }
        ],
        "final_answer": "2 1/2"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( 3 \\div 1\\dfrac{1}{2} \\)&rlm;",
        "options": ["2", "4 1/2", "1 1/2", "1"],
        "correctAnswer": 0,
        "hint": "הפכו גם את השלם וגם את המספר המעורב לשברים לפני שתהפכו לכפל.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את המספר השלם כשבר, ונהפוך את המספר המעורב לשבר מדומה.", "math_expression": "\\dfrac{3}{1} \\div \\dfrac{3}{2}" },
            { "verbal_explanation": "נשנה את פעולת החילוק לכפל ונהפוך את השבר השני.", "math_expression": "\\dfrac{3}{1} \\times \\dfrac{2}{3}" },
            { "verbal_explanation": "נצמצם את המספר שלוש מהמונה של השבר הראשון ומהמכנה של השני.", "math_expression": "\\dfrac{2}{1}" },
            { "verbal_explanation": "התוצאה היא מספר שלם.", "math_expression": "2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{7}{10} \\div \\dfrac{14}{15} \\)&rlm;",
        "options": ["3/4", "98/150", "4/3", "1/2"],
        "correctAnswer": 0,
        "hint": "הפכו לכפל, ושימו לב שניתן לצמצם את המספרים באלכסון (שבע עם ארבע עשרה, ועשר עם חמש עשרה).",
        "solution_steps": [
            { "verbal_explanation": "נחליף את החילוק בכפל בשבר ההפוך.", "math_expression": "\\dfrac{7}{10} \\times \\dfrac{15}{14}" },
            { "verbal_explanation": "נכפול את המספרים במונים ובמכנים.", "math_expression": "\\dfrac{105}{140}" },
            { "verbal_explanation": "נצמצם את השבר הגדול על ידי חלוקה של המונה והמכנה במספר שמחלק את שניהם, למשל שלושים וחמש.", "math_expression": "\\dfrac{105 \\div 35}{140 \\div 35}" },
            { "verbal_explanation": "נרשום את השבר המצומצם שקיבלנו לתשובה סופית.", "math_expression": "\\dfrac{3}{4}" }
        ],
        "final_answer": "3/4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חילוק שברים פשוטים",
        "question_text": "חשבו את התרגיל הבא: \\( 2\\dfrac{1}{4} \\div 1\\dfrac{1}{2} \\)&rlm;",
        "options": ["1 1/2", "3 3/8", "2/3", "1 1/4"],
        "correctAnswer": 0,
        "hint": "הפכו את שני המספרים המעורבים לשברים מדומים לפני כל פעולה אחרת.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את שני המספרים המעורבים לשברים מדומים. במספר הראשון נכפול שתיים בארבע ונוסיף אחד. במספר השני נכפול אחד בשתיים ונוסיף אחד.", "math_expression": "\\dfrac{9}{4} \\div \\dfrac{3}{2}" },
            { "verbal_explanation": "כעת, נהפוך את התרגיל לכפל, ואת השבר השני נהפוך (נחליף בין המונה למכנה).", "math_expression": "\\dfrac{9}{4} \\times \\dfrac{2}{3}" },
            { "verbal_explanation": "נבצע את הכפל בין המונים למכנים.", "math_expression": "\\dfrac{18}{12}" },
            { "verbal_explanation": "נצמצם ונשנה למספר מעורב.", "math_expression": "\\dfrac{18 \\div 6}{12 \\div 6} = \\dfrac{3}{2} = 1\\dfrac{1}{2}" }
        ],
        "final_answer": "1 1/2"
    },

    // ==========================================
    // תת נושא 5: חישוב חלק של כמות ומציאת הכמות היסודית (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "question_text": "כמה הם \\( \\dfrac{1}{4} \\) מתוך \\( 20 \\)?&rlm;",
        "options": ["5", "80", "10", "4"],
        "correctAnswer": 0,
        "hint": "כדי למצוא חלק של כמות, יש לכפול את השבר בכמות השלמה.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב תרגיל כפל של השבר במספר השלם.", "math_expression": "\\dfrac{1}{4} \\times 20" },
            { "verbal_explanation": "נהפוך את המספר השלם לשבר כדי שיהיה קל לכפול.", "math_expression": "\\dfrac{1}{4} \\times \\dfrac{20}{1}" },
            { "verbal_explanation": "נכפול מונה במונה ומכנה במכנה.", "math_expression": "\\dfrac{20}{4}" },
            { "verbal_explanation": "נפתור את פעולת החילוק של הקו שבר לקבלת התוצאה הסופית.", "math_expression": "20 \\div 4 = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "question_text": "כמה הם \\( \\dfrac{2}{3} \\) מתוך \\( 15 \\)?&rlm;",
        "options": ["10", "5", "30", "45"],
        "correctAnswer": 0,
        "hint": "אפשר לחלק את הכמות בשלוש כדי למצוא כמה זה שליש אחד, ואז לכפול בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "ראשית, נחלץ כמה זה שליש אחד מתוך חמש עשרה. נחלק במכנה.", "math_expression": "15 \\div 3 = 5" },
            { "verbal_explanation": "כעת אנו יודעים ששליש אחד שווה לחמש. אנחנו מחפשים שני שלישים.", "math_expression": "5 \\times 2" },
            { "verbal_explanation": "נכפול ונקבל את התשובה הסופית.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "question_text": "חצי מתוך כמות מסוימת הוא \\( 8 \\). מהי הכמות כולה?&rlm;",
        "options": ["16", "4", "24", "10"],
        "correctAnswer": 0,
        "hint": "אם החצי הוא שמונה, הכמות השלמה צריכה להיות גדולה פי שתיים.",
        "solution_steps": [
            { "verbal_explanation": "החלק הנתון מייצג חצי אחד, והכמות כולה מורכבת משני חצאים.", "math_expression": "\\dfrac{1}{2} \\times \\text{?} = 8" },
            { "verbal_explanation": "כדי למצוא את השלם מהחלק, יש לכפול את הערך של החלק במספר החלקים שיש בשלם (במכנה).", "math_expression": "8 \\times 2" },
            { "verbal_explanation": "נחשב ונקבל את הכמות המלאה.", "math_expression": "16" }
        ],
        "final_answer": "16"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "question_text": "כמה הם \\( \\dfrac{3}{4} \\) מתוך \\( 40 \\)?&rlm;",
        "options": ["30", "10", "120", "20"],
        "correctAnswer": 0,
        "hint": "חלקו את ארבעים לארבעה חלקים שווים, וקחו שלושה מהם.",
        "solution_steps": [
            { "verbal_explanation": "נחשב קודם כמה שווה רבע אחד מתוך ארבעים. נחלק את הכמות במכנה.", "math_expression": "40 \\div 4 = 10" },
            { "verbal_explanation": "אם רבע שווה עשר, אז כדי למצוא שלושה רבעים נכפול בשלוש (במונה).", "math_expression": "10 \\times 3" },
            { "verbal_explanation": "נרשום את התוצאה הסופית.", "math_expression": "30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "question_text": "\\( \\dfrac{2}{5} \\) מכמות מסוימת הם \\( 10 \\). מהי הכמות כולה?&rlm;",
        "options": ["25", "4", "50", "20"],
        "correctAnswer": 0,
        "hint": "אם שתי חמישיות שוות לעשר, כמה שווה חמישית אחת? חלקו בשתיים, ואז כפלו בחמש.",
        "solution_steps": [
            { "verbal_explanation": "אנו יודעים ששני חלקים (מתוך חמישה) שווים לעשר. כדי למצוא כמה שווה חלק אחד (חמישית), נחלק בשתיים.", "math_expression": "10 \\div 2 = 5" },
            { "verbal_explanation": "כעת מצאנו שחמישית אחת שווה לחמש. הכמות השלמה מורכבת מחמישה חלקים כאלה.", "math_expression": "5 \\times 5" },
            { "verbal_explanation": "נכפול לקבלת התשובה עבור השלם כולו.", "math_expression": "25" }
        ],
        "final_answer": "25"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "question_text": "בכיתה \\( 30 \\) תלמידים. \\( \\dfrac{1}{5} \\) מהם מרכיבים משקפיים. כמה תלמידים מרכיבים משקפיים?&rlm;",
        "options": ["6", "5", "150", "10"],
        "correctAnswer": 0,
        "hint": "מציאת חמישית מכמות היא פשוט לחלק את הכמות בחמש.",
        "solution_steps": [
            { "verbal_explanation": "עלינו למצוא חלק מתוך שלם. לכן, נרשום תרגיל כפל בין השבר למספר התלמידים הכולל.", "math_expression": "\\dfrac{1}{5} \\times 30" },
            { "verbal_explanation": "נכתוב את המספר השלם כשבר, ונבצע כפל.", "math_expression": "\\dfrac{1}{5} \\times \\dfrac{30}{1} = \\dfrac{30}{5}" },
            { "verbal_explanation": "קו השבר הוא כמו סימן חילוק. נחלק שלושים בחמש.", "math_expression": "30 \\div 5 = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "question_text": "קניתי ספר ב-\\( 60 \\) שקלים, שהם \\( \\dfrac{2}{3} \\) מהכסף שהיה לי. כמה כסף היה לי בהתחלה?&rlm;",
        "options": ["90", "40", "120", "180"],
        "correctAnswer": 0,
        "hint": "שישים שקלים שווים לשני שלישים. מצאו כמה זה שליש אחד, ואז מצאו כמה זה שלוש שלישים (הכל).",
        "solution_steps": [
            { "verbal_explanation": "המספר שישים מייצג שני חלקים מתוך שלושה. כדי למצוא חלק אחד (שליש), נחלק את שישים בשתיים.", "math_expression": "60 \\div 2 = 30" },
            { "verbal_explanation": "כעת אנחנו יודעים ששליש מהכסף הוא שלושים שקלים. הכסף ההתחלתי השלם מורכב משלושה שלישים.", "math_expression": "30 \\times 3" },
            { "verbal_explanation": "נכפול ונקבל את סך הכסף ההתחלתי.", "math_expression": "90" }
        ],
        "final_answer": "90"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "question_text": "כמה הם \\( \\dfrac{5}{6} \\) מתוך \\( 24 \\)?&rlm;",
        "options": ["20", "4", "120", "24"],
        "correctAnswer": 0,
        "hint": "מצאו מהי שישית אחת של עשרים וארבע, ואז כפלו בחמש.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את המספר השלם במכנה כדי למצוא כמה זה שישית אחת.", "math_expression": "24 \\div 6 = 4" },
            { "verbal_explanation": "קיבלנו ששישית שווה לארבע. כעת נכפול את זה במספר החלקים שאנחנו מחפשים, שמופיע במונה.", "math_expression": "4 \\times 5" },
            { "verbal_explanation": "התוצאה הסופית התקבלה מהכפל.", "math_expression": "20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "question_text": "\\( \\dfrac{3}{8} \\) מכמות מסוימת הם \\( 15 \\). מהי הכמות כולה?&rlm;",
        "options": ["40", "5", "120", "24"],
        "correctAnswer": 0,
        "hint": "חלקו את חמש עשרה בשלוש כדי למצוא שמינית אחת, ולאחר מכן כפלו בשמונה.",
        "solution_steps": [
            { "verbal_explanation": "המספר חמש עשרה מייצג שלושה חלקים. נחלק בשלוש כדי למצוא את ערכו של חלק אחד (שמינית).", "math_expression": "15 \\div 3 = 5" },
            { "verbal_explanation": "מצאנו ששמינית אחת שווה לחמש. הכמות השלמה היא שמונה שמיניות.", "math_expression": "5 \\times 8" },
            { "verbal_explanation": "נבצע את הכפל ונקבל את התשובה לשלם.", "math_expression": "40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "math_5_6",
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "question_text": "כמה הם \\( \\dfrac{7}{10} \\) מתוך \\( 50 \\)?&rlm;",
        "options": ["35", "5", "350", "70"],
        "correctAnswer": 0,
        "hint": "חלקו את חמישים לעשרה חלקים, וקחו שבעה מהם.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא עשירית אחת, נחלק את המספר השלם בעשר.", "math_expression": "50 \\div 10 = 5" },
            { "verbal_explanation": "אם עשירית שווה לחמש, נכפול בשבע כדי למצוא כמה הם שבע עשיריות.", "math_expression": "5 \\times 7" },
            { "verbal_explanation": "נרשום את התוצאה.", "math_expression": "35" }
        ],
        "final_answer": "35"
    },
    // ==========================================
    // תת נושא 6: כפל וחילוק שברים עשרוניים ב-10, 100 וכו' (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "question_text": "חשבו את התרגיל הבא: \\( 3.45 \\times 10 \\)&rlm;",
        "options": ["34.5", "345", "0.345", "3.450"],
        "correctAnswer": 0,
        "hint": "כפל בעשר מגדיל את המספר, ולכן מזיז את הנקודה העשרונית מקום אחד ימינה.",
        "solution_steps": [
            { "verbal_explanation": "כאשר כופלים בעשר (מספר עם אפס אחד), הנקודה העשרונית קופצת צעד אחד ימינה כדי להגדיל את המספר.", "math_expression": "3.45 \\times 10" },
            { "verbal_explanation": "נזיז את הנקודה ימינה, מעבר לספרה ארבע.", "math_expression": "34.5" },
            { "verbal_explanation": "נקבל את התשובה הסופית.", "math_expression": "34.5" }
        ],
        "final_answer": "34.5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "question_text": "חשבו את התרגיל הבא: \\( 12.7 \\div 100 \\)&rlm;",
        "options": ["0.127", "1.27", "1270", "0.0127"],
        "correctAnswer": 0,
        "hint": "חילוק במאה מקטין את המספר, ולכן מזיז את הנקודה העשרונית שני מקומות שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "כאשר מחלקים במאה (מספר עם שני אפסים), הנקודה העשרונית קופצת שני צעדים שמאלה כדי להקטין את המספר.", "math_expression": "12.7 \\div 100" },
            { "verbal_explanation": "נזיז את הנקודה מעבר לשתיים ומעבר לאחת. מכיוון שאין יותר ספרות, נוסיף אפס משמאל.", "math_expression": "0.127" },
            { "verbal_explanation": "נרשום את התוצאה הסופית.", "math_expression": "0.127" }
        ],
        "final_answer": "0.127"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "question_text": "חשבו את התרגיל הבא: \\( 0.08 \\times 100 \\)&rlm;",
        "options": ["8", "0.8", "80", "0.0008"],
        "correctAnswer": 0,
        "hint": "כפל במאה מזיז את הנקודה שני מקומות ימינה.",
        "solution_steps": [
            { "verbal_explanation": "מאה הוא מספר עם שני אפסים, ולכן נזיז את הנקודה העשרונית שני צעדים ימינה.", "math_expression": "0.08 \\times 100" },
            { "verbal_explanation": "לאחר הזזה של שני צעדים ימינה, הנקודה נמצאת אחרי הספרה שמונה.", "math_expression": "08." },
            { "verbal_explanation": "האפסים השמאליים מיותרים במספר שלם, ולכן התשובה היא שמונה.", "math_expression": "8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "question_text": "חשבו את התרגיל הבא: \\( 4 \\div 10 \\)&rlm;",
        "options": ["0.4", "0.04", "40", "4.1"],
        "correctAnswer": 0,
        "hint": "במספר שלם, הנקודה העשרונית מתחבאת מימין לספרה האחרונה. חלקו בעשר על ידי הזזתה שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "במספר ארבע, הנקודה העשרונית נמצאת בסוף המספר אף על פי שאינה כתובה.", "math_expression": "4.0 \\div 10" },
            { "verbal_explanation": "חלוקה בעשר מקטינה את המספר ומזיזה את הנקודה צעד אחד שמאלה.", "math_expression": ".4" },
            { "verbal_explanation": "נוסיף אפס משמאל לנקודה כדי לכתוב את המספר העשרוני בצורה תקינה.", "math_expression": "0.4" }
        ],
        "final_answer": "0.4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "question_text": "חשבו את התרגיל הבא: \\( 5.6 \\times 1000 \\)&rlm;",
        "options": ["5600", "560", "0.0056", "56000"],
        "correctAnswer": 0,
        "hint": "הכפלה באלף מזיזה את הנקודה שלושה מקומות ימינה. אם נגמרות הספרות, מוסיפים אפסים.",
        "solution_steps": [
            { "verbal_explanation": "מספר אלף מכיל שלושה אפסים, לכן נגדיל את המספר על ידי הזזת הנקודה שלושה צעדים ימינה.", "math_expression": "5.6 \\times 1000" },
            { "verbal_explanation": "צעד אחד מעביר את הנקודה מעבר לשש. לשני הצעדים הנוספים נוסיף שני אפסים.", "math_expression": "5600" },
            { "verbal_explanation": "נרשום את המספר השלם שקיבלנו.", "math_expression": "5600" }
        ],
        "final_answer": "5600"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "question_text": "חשבו את התרגיל הבא: \\( 350 \\div 100 \\)&rlm;",
        "options": ["3.5", "0.35", "35", "35000"],
        "correctAnswer": 0,
        "hint": "חילוק במאה מזיז את הנקודה הנסתרת שבסוף המספר השלם, שני צעדים שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "הנקודה מתחבאת בסוף המספר השלם. נזיז אותה שני צעדים שמאלה כדי לחלק במאה.", "math_expression": "350.0 \\div 100" },
            { "verbal_explanation": "הנקודה תעבור שמאלה ותיעצר בין השלוש לחמש.", "math_expression": "3.50" },
            { "verbal_explanation": "אפס בסוף שבר עשרוני אינו משנה את הערך, לכן אפשר למחוק אותו.", "math_expression": "3.5" }
        ],
        "final_answer": "3.5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "question_text": "חשבו את התרגיל הבא: \\( 0.9 \\times 10 \\)&rlm;",
        "options": ["9", "0.09", "90", "0.90"],
        "correctAnswer": 0,
        "hint": "הכפלה בעשר מזיזה את הנקודה מקום אחד בלבד ימינה.",
        "solution_steps": [
            { "verbal_explanation": "נזיז את הנקודה העשרונית צעד אחד ימינה כדי להכפיל בעשר.", "math_expression": "0.9 \\times 10" },
            { "verbal_explanation": "הנקודה עוברת את הספרה תשע, והאפס השמאלי נעלם.", "math_expression": "9." },
            { "verbal_explanation": "התוצאה היא מספר שלם.", "math_expression": "9" }
        ],
        "final_answer": "9"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "question_text": "חשבו את התרגיל הבא: \\( 1.2 \\div 1000 \\)&rlm;",
        "options": ["0.0012", "0.012", "1200", "0.12"],
        "correctAnswer": 0,
        "hint": "חילוק באלף מקטין את המספר מאוד ומזיז את הנקודה שלושה מקומות שמאלה. השתמשו באפסים לשמירת מקום.",
        "solution_steps": [
            { "verbal_explanation": "חילוק באלף דורש הזזת הנקודה שלושה צעדים שמאלה.", "math_expression": "1.2 \\div 1000" },
            { "verbal_explanation": "נזיז פעם אחת מעבר לאחד, ונוסיף עוד שני אפסים כדי להשלים שלושה צעדים.", "math_expression": ".0012" },
            { "verbal_explanation": "נוסיף אפס שלם מצד שמאל לקבלת התוצאה הסופית.", "math_expression": "0.0012" }
        ],
        "final_answer": "0.0012"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "question_text": "חשבו את התרגיל הבא: \\( 0.004 \\times 100 \\)&rlm;",
        "options": ["0.4", "4", "0.04", "0.00004"],
        "correctAnswer": 0,
        "hint": "מאה שווה לשני צעדים ימינה עם הנקודה העשרונית.",
        "solution_steps": [
            { "verbal_explanation": "הכפלה במאה מזיזה את הנקודה שני צעדים ימינה.", "math_expression": "0.004 \\times 100" },
            { "verbal_explanation": "הנקודה עוברת שני אפסים ונעצרת לפני הארבע.", "math_expression": "0.4" },
            { "verbal_explanation": "האפסים המיותרים משמאל נמחקים, ונשארנו עם התשובה.", "math_expression": "0.4" }
        ],
        "final_answer": "0.4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "question_text": "חשבו את התרגיל הבא: \\( 10.5 \\div 10 \\)&rlm;",
        "options": ["1.05", "105", "0.105", "1.5"],
        "correctAnswer": 0,
        "hint": "חלוקה בעשר מזיזה את הנקודה צעד אחד קטן שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "כדי לחלק בעשר, נזיז את הנקודה מקום אחד שמאלה.", "math_expression": "10.5 \\div 10" },
            { "verbal_explanation": "הנקודה תקפוץ מעבר לאפס ותעמוד בין האחד לאפס.", "math_expression": "1.05" },
            { "verbal_explanation": "המספר קטן פי עשר, כנדרש.", "math_expression": "1.05" }
        ],
        "final_answer": "1.05"
    },

    // ==========================================
    // תת נושא 7: כפל שבר בשבר כולל מספרים מעורבים (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{1}{2} \\times \\dfrac{3}{4} \\)&rlm;",
        "options": ["3/8", "4/6", "3/4", "1/8"],
        "correctAnswer": 0,
        "hint": "בכפל שברים, כופלים את המונה במונה (המספרים למעלה) ואת המכנה במכנה (המספרים למטה).",
        "solution_steps": [
            { "verbal_explanation": "נכפול את המספרים העליונים (המונים) זה בזה.", "math_expression": "1 \\times 3 = 3" },
            { "verbal_explanation": "נכפול את המספרים התחתונים (המכנים) זה בזה.", "math_expression": "2 \\times 4 = 8" },
            { "verbal_explanation": "נרשום את התוצאה הסופית כשבר חדש.", "math_expression": "\\dfrac{3}{8}" }
        ],
        "final_answer": "3/8"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{2}{3} \\times \\dfrac{3}{5} \\)&rlm;",
        "options": ["2/5", "6/15", "5/8", "1/5"],
        "correctAnswer": 0,
        "hint": "לפני שאתם כופלים, נסו לצמצם מספרים דומים שמופיעים גם במונה וגם במכנה (באלכסון).",
        "solution_steps": [
            { "verbal_explanation": "נבחין שהמספר שלוש מופיע גם במונה של שבר אחד וגם במכנה של השני. נחלק את שניהם בשלוש ונצמצם אותם לאחד.", "math_expression": "\\dfrac{2 \\times 3}{3 \\times 5} = \\dfrac{2 \\times 1}{1 \\times 5}" },
            { "verbal_explanation": "כעת נכפול את המספרים שנשארו פשוט וקל.", "math_expression": "\\dfrac{2}{5}" },
            { "verbal_explanation": "התשובה מוכנה ומצומצמת.", "math_expression": "\\dfrac{2}{5}" }
        ],
        "final_answer": "2/5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "question_text": "חשבו את התרגיל הבא: \\( 1\\dfrac{1}{2} \\times \\dfrac{1}{4} \\)&rlm;",
        "options": ["3/8", "1 1/8", "2/8", "3/4"],
        "correctAnswer": 0,
        "hint": "בכפל, אי אפשר לעבוד עם מספר מעורב. הפכו אותו קודם לשבר מדומה (שבר רגיל ללא שלם).",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את המספר המעורב לשבר מדומה. נכפול את השלם במכנה ונוסיף למונה.", "math_expression": "1 \\times 2 + 1 = 3 \\Rightarrow \\dfrac{3}{2}" },
            { "verbal_explanation": "נכתוב את תרגיל הכפל מחדש עם השבר המדומה.", "math_expression": "\\dfrac{3}{2} \\times \\dfrac{1}{4}" },
            { "verbal_explanation": "נכפול מונה במונה ומכנה במכנה.", "math_expression": "\\dfrac{3 \\times 1}{2 \\times 4} = \\dfrac{3}{8}" }
        ],
        "final_answer": "3/8"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "question_text": "חשבו את התרגיל הבא: \\( 2\\dfrac{1}{3} \\times 1\\dfrac{1}{5} \\)&rlm;",
        "options": ["2 4/5", "2 1/15", "3 2/15", "14/5"],
        "correctAnswer": 0,
        "hint": "הפכו את שני המספרים המעורבים לשברים מדומים לפני הכפל.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את המספר הראשון לשבר מדומה: שתיים כפול שלוש ועוד אחת שווה שבע.", "math_expression": "2\\dfrac{1}{3} = \\dfrac{7}{3}" },
            { "verbal_explanation": "נהפוך את המספר השני: אחת כפול חמש ועוד אחת שווה שש.", "math_expression": "1\\dfrac{1}{5} = \\dfrac{6}{5}" },
            { "verbal_explanation": "נכפול את השברים שיצרנו. אפשר לצמצם את השש והשלוש באלכסון (שש חלקי שלוש שווה שתיים).", "math_expression": "\\dfrac{7}{3} \\times \\dfrac{6}{5} = \\dfrac{7 \\times 2}{1 \\times 5} = \\dfrac{14}{5}" },
            { "verbal_explanation": "נהפוך את התשובה בחזרה למספר מעורב על ידי חילוק עם שארית.", "math_expression": "14 \\div 5 = 2 \\quad , \\quad \\dfrac{4}{5} \\Rightarrow 2\\dfrac{4}{5}" }
        ],
        "final_answer": "2 4/5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{5}{6} \\times \\dfrac{2}{5} \\)&rlm;",
        "options": ["1/3", "10/30", "2/6", "5/15"],
        "correctAnswer": 0,
        "hint": "צמצמו מספרים זהים או מספרים שיש להם מחלק משותף (כמו שתיים ושש) באלכסון לפני שתכפלו.",
        "solution_steps": [
            { "verbal_explanation": "נצמצם את החמש במונה ואת החמש במכנה לאחד.", "math_expression": "\\dfrac{1}{6} \\times \\dfrac{2}{1}" },
            { "verbal_explanation": "נצמצם את השתיים והשש: נחלק את שניהם בשתיים ונקבל אחד ושלוש.", "math_expression": "\\dfrac{1}{3} \\times \\dfrac{1}{1}" },
            { "verbal_explanation": "נכפול את המספרים הקטנים שנשארו ונקבל את התשובה.", "math_expression": "\\dfrac{1}{3}" }
        ],
        "final_answer": "1/3"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "question_text": "חשבו את התרגיל הבא: \\( 3\\dfrac{1}{2} \\times 2 \\)&rlm;",
        "options": ["7", "6 1/2", "3", "5"],
        "correctAnswer": 0,
        "hint": "הפכו את המספר המעורב לשבר מדומה ואת המספר השלם לשבר עם מכנה אחד.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את המספר המעורב כשבר מדומה.", "math_expression": "3\\dfrac{1}{2} = \\dfrac{7}{2}" },
            { "verbal_explanation": "נכתוב את המספר השלם כשבר עם מכנה אחד.", "math_expression": "2 = \\dfrac{2}{1}" },
            { "verbal_explanation": "נרשום את תרגיל הכפל ונצמצם את השתיים באלכסון.", "math_expression": "\\dfrac{7}{2} \\times \\dfrac{2}{1} = \\dfrac{7}{1} \\times \\dfrac{1}{1}" },
            { "verbal_explanation": "התשובה היא שבע חלקי אחד, שזה פשוט שבע שלמים.", "math_expression": "7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{3}{8} \\times \\dfrac{4}{9} \\)&rlm;",
        "options": ["1/6", "12/72", "3/18", "1/8"],
        "correctAnswer": 0,
        "hint": "בדקו אם אפשר לצמצם את השלוש עם התשע, ואת הארבע עם השמונה.",
        "solution_steps": [
            { "verbal_explanation": "נצמצם באלכסון: נחלק את השלוש והתשע בשלוש (נקבל אחד ושלוש).", "math_expression": "\\dfrac{1}{8} \\times \\dfrac{4}{3}" },
            { "verbal_explanation": "נצמצם את הארבע והשמונה: נחלק בארבע (נקבל אחד ושתיים).", "math_expression": "\\dfrac{1}{2} \\times \\dfrac{1}{3}" },
            { "verbal_explanation": "נכפול את המספרים המצומצמים פשוט ומהר.", "math_expression": "\\dfrac{1 \\times 1}{2 \\times 3} = \\dfrac{1}{6}" }
        ],
        "final_answer": "1/6"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "question_text": "חשבו את התרגיל הבא: \\( 1\\dfrac{3}{4} \\times \\dfrac{2}{7} \\)&rlm;",
        "options": ["1/2", "2/4", "1 6/28", "1/4"],
        "correctAnswer": 0,
        "hint": "הפכו לשבר מדומה וצמצמו את השבע באלכסון.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את המספר המעורב לשבר מדומה.", "math_expression": "1\\dfrac{3}{4} = \\dfrac{7}{4}" },
            { "verbal_explanation": "נכתוב את תרגיל הכפל.", "math_expression": "\\dfrac{7}{4} \\times \\dfrac{2}{7}" },
            { "verbal_explanation": "נצמצם את השבע עם השבע באלכסון לאחד, ואת השתיים והארבע נחלק בשתיים.", "math_expression": "\\dfrac{1}{2} \\times \\dfrac{1}{1} = \\dfrac{1}{2}" }
        ],
        "final_answer": "1/2"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{7}{10} \\times \\dfrac{5}{14} \\)&rlm;",
        "options": ["1/4", "35/140", "1/2", "1/8"],
        "correctAnswer": 0,
        "hint": "חפשו קשרים באלכסונים: חמש נכנס בעשר פעמיים, ושבע נכנס בארבע עשרה פעמיים.",
        "solution_steps": [
            { "verbal_explanation": "נצמצם חמש ועשר באלכסון על ידי חלוקה בחמש. נקבל אחד ושתיים.", "math_expression": "\\dfrac{7}{2} \\times \\dfrac{1}{14}" },
            { "verbal_explanation": "נצמצם שבע וארבע עשרה באלכסון על ידי חלוקה בשבע. נקבל אחד ושתיים.", "math_expression": "\\dfrac{1}{2} \\times \\dfrac{1}{2}" },
            { "verbal_explanation": "נכפול את השברים החדשים מונה במונה ומכנה במכנה.", "math_expression": "\\dfrac{1 \\times 1}{2 \\times 2} = \\dfrac{1}{4}" }
        ],
        "final_answer": "1/4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "question_text": "חשבו את התרגיל הבא: \\( 1\\dfrac{2}{5} \\times 1\\dfrac{3}{7} \\)&rlm;",
        "options": ["2", "1 6/35", "10/7", "2 1/5"],
        "correctAnswer": 0,
        "hint": "הפכו את שני המספרים לשברים מדומים וצמצמו את מה שאפשר באלכסון.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את המספר הראשון לשבר מדומה.", "math_expression": "1\\dfrac{2}{5} = \\dfrac{7}{5}" },
            { "verbal_explanation": "נהפוך את המספר השני לשבר מדומה.", "math_expression": "1\\dfrac{3}{7} = \\dfrac{10}{7}" },
            { "verbal_explanation": "נצמצם את השבע עם השבע באלכסון, ונחלק את העשר והחמש בחמש.", "math_expression": "\\dfrac{1}{1} \\times \\dfrac{2}{1}" },
            { "verbal_explanation": "נכפול ונקבל תוצאה שהיא מספר שלם.", "math_expression": "2" }
        ],
        "final_answer": "2"
    },

    // ==========================================
    // תת נושא 8: כפל שברים עשרוניים ואומדן תוצאות (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "question_text": "חשבו את התרגיל הבא: \\( 0.3 \\times 0.4 \\)&rlm;",
        "options": ["0.12", "1.2", "12", "0.012"],
        "correctAnswer": 0,
        "hint": "הכפילו את המספרים כאילו היו שלמים (שלוש כפול ארבע), ואז ספרו כמה ספרות היו אחרי הנקודה בשני המספרים יחד.",
        "solution_steps": [
            { "verbal_explanation": "נתעלם לרגע מהנקודות ונעשה כפל רגיל של מספרים שלמים.", "math_expression": "3 \\times 4 = 12" },
            { "verbal_explanation": "נספור כמה ספרות עשרוניות (אחרי הנקודה) יש בשני המספרים המקוריים יחד. יש ספרה אחת בראשון וספרה אחת בשני, סך הכל שתיים.", "math_expression": "1 + 1 = 2" },
            { "verbal_explanation": "נמקם את הנקודה העשרונית בתשובה כך שיהיו בדיוק שתי ספרות אחריה.", "math_expression": "0.12" }
        ],
        "final_answer": "0.12"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "question_text": "חשבו את התרגיל הבא: \\( 1.2 \\times 3 \\)&rlm;",
        "options": ["3.6", "36", "0.36", "3.2"],
        "correctAnswer": 0,
        "hint": "אומדן קצר: התשובה צריכה להיות קצת יותר גדולה מאחד כפול שלוש. כפלו כמספרים שלמים וסדרו את הנקודה.",
        "solution_steps": [
            { "verbal_explanation": "נעשה כפל בלי נקודות: שנים עשר כפול שלוש.", "math_expression": "12 \\times 3 = 36" },
            { "verbal_explanation": "בתרגיל המקורי הייתה רק ספרה אחת אחרי הנקודה (השתיים). נחזיר את הנקודה מקום אחד שמאלה.", "math_expression": "3.6" },
            { "verbal_explanation": "זה גם מתאים לאומדן שלנו, כי התשובה היא באזור השלוש.", "math_expression": "3.6" }
        ],
        "final_answer": "3.6"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "question_text": "חשבו את התרגיל הבא: \\( 0.05 \\times 0.2 \\)&rlm;",
        "options": ["0.01", "0.1", "0.001", "1"],
        "correctAnswer": 0,
        "hint": "כפלו חמש בשתיים. זכרו לספור את כל הספרות אחרי הנקודה משני המספרים יחד.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את המספרים כאילו היו שלמים.", "math_expression": "5 \\times 2 = 10" },
            { "verbal_explanation": "בתרגיל המקורי יש שלוש ספרות אחרי הנקודה (שתיים במספר הראשון ואחת בשני). לכן צריך להזיז את הנקודה שלושה מקומות שמאלה.", "math_expression": "0.010" },
            { "verbal_explanation": "אפס בסוף מספר עשרוני אפשר למחוק, לכן התשובה נראית קצרה יותר.", "math_expression": "0.01" }
        ],
        "final_answer": "0.01"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "question_text": "חשבו את התרגיל הבא: \\( 2.5 \\times 1.2 \\)&rlm;",
        "options": ["3", "30", "0.3", "3.5"],
        "correctAnswer": 0,
        "hint": "אומדן: שתיים וחצי כפול אחד זה קצת יותר משתיים וחצי. כפלו כשלמים והזיזו את הנקודה.",
        "solution_steps": [
            { "verbal_explanation": "נכפול עשרים וחמש בשנים עשר (אפשר בעזרת כפל במאונך).", "math_expression": "25 \\times 12 = 300" },
            { "verbal_explanation": "נספור שתי ספרות עשרוניות בתרגיל המקורי, ונשים את הנקודה שני מקומות שמאלה.", "math_expression": "3.00" },
            { "verbal_explanation": "המספר שקיבלנו הוא מספר שלם ללא צורך באפסים בסוף.", "math_expression": "3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "question_text": "אמדו (העריכו) ולאחר מכן חשבו: \\( 4.1 \\times 2.1 \\)&rlm;",
        "options": ["8.61", "8.2", "8.1", "86.1"],
        "correctAnswer": 0,
        "hint": "לצורך אומדן, עגלו את המספרים: ארבע כפול שתיים שווה שמונה. התשובה צריכה להיות קרובה לשמונה.",
        "solution_steps": [
            { "verbal_explanation": "ראשית נבצע אומדן מקורב: המספרים קרובים לארבע ושתיים, אז נצפה לתשובה שקרובה לשמונה.", "math_expression": "4 \\times 2 = 8" },
            { "verbal_explanation": "כעת נחשב במדויק: נכפול ארבעים ואחת בעשרים ואחת במאונך.", "math_expression": "41 \\times 21 = 861" },
            { "verbal_explanation": "נספור שתי ספרות אחרי הנקודה (אחת מכל מספר), ונדחף את הנקודה שמאלה פעמיים.", "math_expression": "8.61" },
            { "verbal_explanation": "התוצאה קרובה לאומדן שלנו, לכן היא הגיונית.", "math_expression": "8.61 \\approx 8" }
        ],
        "final_answer": "8.61"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "question_text": "חשבו את התרגיל הבא: \\( 0.8 \\times 5 \\)&rlm;",
        "options": ["4", "40", "0.4", "4.8"],
        "correctAnswer": 0,
        "hint": "הכפילו שמונה בחמש, ואל תשכחו את הנקודה העשרונית בסוף.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את הספרות ללא הנקודה העשרונית.", "math_expression": "8 \\times 5 = 40" },
            { "verbal_explanation": "במספר הראשון יש ספרה אחת אחרי הנקודה, לכן התשובה צריכה להכיל גם היא ספרה אחת אחרי הנקודה.", "math_expression": "4.0" },
            { "verbal_explanation": "זהו בעצם מספר שלם נקי.", "math_expression": "4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "question_text": "חשבו את התרגיל הבא: \\( 0.11 \\times 0.3 \\)&rlm;",
        "options": ["0.033", "0.33", "3.3", "0.0033"],
        "correctAnswer": 0,
        "hint": "כפלו כאילו מדובר באחת עשרה כפול שלוש, ולאחר מכן ספרו היטב כמה ספרות צריך להשאיר מימין לנקודה.",
        "solution_steps": [
            { "verbal_explanation": "נכפול אחת עשרה בשלוש.", "math_expression": "11 \\times 3 = 33" },
            { "verbal_explanation": "יש שתי ספרות אחרי הנקודה במספר הראשון, ועוד אחת במספר השני. סך הכל שלוש ספרות עשרוניות.", "math_expression": "2 + 1 = 3" },
            { "verbal_explanation": "נמקם את הנקודה כך שייווצרו שלוש ספרות מימינה. נוסיף אפס כדי להשלים את המקום החסר.", "math_expression": "0.033" }
        ],
        "final_answer": "0.033"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "question_text": "חשבו את התרגיל הבא: \\( 10.5 \\times 0.2 \\)&rlm;",
        "options": ["2.1", "21", "0.21", "2.05"],
        "correctAnswer": 0,
        "hint": "הכפילו את המספר בפי שתיים, ואז הזיזו את הנקודה העשרונית לפי כמות המקומות הכוללת.",
        "solution_steps": [
            { "verbal_explanation": "נכפול מאה וחמש בשתיים.", "math_expression": "105 \\times 2 = 210" },
            { "verbal_explanation": "במספר הראשון יש ספרה אחת אחרי הנקודה, וגם בשני יש אחת. נזיז את הנקודה שני מקומות שמאלה.", "math_expression": "2.10" },
            { "verbal_explanation": "אפס בסוף שבר עשרוני מיותר.", "math_expression": "2.1" }
        ],
        "final_answer": "2.1"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "question_text": "חשבו את התרגיל הבא: \\( 0.9 \\times 0.9 \\)&rlm;",
        "options": ["0.81", "8.1", "0.081", "0.18"],
        "correctAnswer": 0,
        "hint": "תשע כפול תשע מלוח הכפל. ואז, כמה צעדים שמאלה עם הנקודה?",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בלוח הכפל הפשוט.", "math_expression": "9 \\times 9 = 81" },
            { "verbal_explanation": "סך הספרות שמימין לנקודה בתרגיל הוא שתיים.", "math_expression": "1 + 1 = 2" },
            { "verbal_explanation": "נשים את הנקודה לפני שתי הספרות שקיבלנו.", "math_expression": "0.81" }
        ],
        "final_answer": "0.81"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "question_text": "אמדו ולאחר מכן חשבו את התרגיל הבא: \\( 5.2 \\times 4.8 \\)&rlm;",
        "options": ["24.96", "25", "25.96", "2.496"],
        "correctAnswer": 0,
        "hint": "לעריכת אומדן, עגלו את המספרים לחמש. התשובה תהיה קרובה לעשרים וחמש.",
        "solution_steps": [
            { "verbal_explanation": "המספרים קרובים לחמש, אז אומדן טוב יהיה אזור העשרים וחמש.", "math_expression": "5 \\times 5 = 25" },
            { "verbal_explanation": "נבצע את הכפל המדויק ללא נקודות עשרוניות במאונך.", "math_expression": "52 \\times 48 = 2496" },
            { "verbal_explanation": "יש שתי ספרות אחרי הנקודה במקור (אחת לכל מספר). נחזיר את הנקודה שני צעדים שמאלה.", "math_expression": "24.96" },
            { "verbal_explanation": "התוצאה קרובה לאומדן, לכן היא נכונה.", "math_expression": "24.96 \\approx 25" }
        ],
        "final_answer": "24.96"
    },

    // ==========================================
    // תת נושא 9: כפל שלם בשבר פשוט ובמספר מעורב (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "question_text": "חשבו את התרגיל הבא: \\( 4 \\times \\dfrac{1}{5} \\)&rlm;",
        "options": ["4/5", "1/20", "5/4", "1 1/5"],
        "correctAnswer": 0,
        "hint": "הפכו את המספר השלם לשבר עם מכנה אחד, ואז כפלו רגיל.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את המספר השלם כשבר על ידי צירוף המכנה אחד.", "math_expression": "\\dfrac{4}{1} \\times \\dfrac{1}{5}" },
            { "verbal_explanation": "נכפול מונה במונה ומכנה במכנה.", "math_expression": "\\dfrac{4 \\times 1}{1 \\times 5}" },
            { "verbal_explanation": "נקבל את התשובה הסופית.", "math_expression": "\\dfrac{4}{5}" }
        ],
        "final_answer": "4/5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "question_text": "חשבו את התרגיל הבא: \\( 6 \\times \\dfrac{2}{3} \\)&rlm;",
        "options": ["4", "12", "18/2", "3"],
        "correctAnswer": 0,
        "hint": "כפלו את השלם במונה, וחלקו במכנה. אפשר גם לצמצם באלכסון לפני.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב כתרגיל כפל שברים.", "math_expression": "\\dfrac{6}{1} \\times \\dfrac{2}{3}" },
            { "verbal_explanation": "נכפול את המונים ואת המכנים.", "math_expression": "\\dfrac{12}{3}" },
            { "verbal_explanation": "קו שבר הוא סימן חילוק. נחלק את השניים עשר בשלוש כדי לקבל מספר שלם.", "math_expression": "12 \\div 3 = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "question_text": "חשבו את התרגיל הבא: \\( 5 \\times 1\\dfrac{1}{2} \\)&rlm;",
        "options": ["7 1/2", "6 1/2", "5 1/2", "10"],
        "correctAnswer": 0,
        "hint": "הפכו קודם את המספר המעורב לשבר מדומה.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את המספר המעורב לשבר מדומה: אחד כפול שתיים ועוד אחד במונה.", "math_expression": "1\\dfrac{1}{2} = \\dfrac{3}{2}" },
            { "verbal_explanation": "נכתוב את תרגיל הכפל החדש כשהשלם הופך גם הוא לשבר.", "math_expression": "\\dfrac{5}{1} \\times \\dfrac{3}{2}" },
            { "verbal_explanation": "נכפול מונים ומכנים.", "math_expression": "\\dfrac{15}{2}" },
            { "verbal_explanation": "נהפוך חזרה למספר מעורב: כמה פעמים שתיים נכנס בחמש עשרה? שבע פעמים, ויישאר חצי אחד.", "math_expression": "7\\dfrac{1}{2}" }
        ],
        "final_answer": "7 1/2"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "question_text": "חשבו את התרגיל הבא: \\( 3 \\times \\dfrac{3}{4} \\)&rlm;",
        "options": ["2 1/4", "9", "9/12", "1 3/4"],
        "correctAnswer": 0,
        "hint": "כפלו את השלם במונה, ואל תשנו את המכנה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את התרגיל כשברים.", "math_expression": "\\dfrac{3}{1} \\times \\dfrac{3}{4}" },
            { "verbal_explanation": "נבצע את הכפל.", "math_expression": "\\dfrac{9}{4}" },
            { "verbal_explanation": "נהפוך את השבר למספר מעורב. ארבע נכנס בתשע פעמיים עם שארית אחת.", "math_expression": "2\\dfrac{1}{4}" }
        ],
        "final_answer": "2 1/4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "question_text": "חשבו את התרגיל הבא: \\( 2 \\times 2\\dfrac{2}{5} \\)&rlm;",
        "options": ["4 4/5", "4 2/5", "24/10", "5"],
        "correctAnswer": 0,
        "hint": "הפכו את המספר המעורב לשבר, וכפלו אותו בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את המספר המעורב לשבר מדומה. נכפול שתיים בחמש ונוסיף שתיים למונה.", "math_expression": "2\\dfrac{2}{5} = \\dfrac{12}{5}" },
            { "verbal_explanation": "נכתוב את התרגיל שוב.", "math_expression": "\\dfrac{2}{1} \\times \\dfrac{12}{5}" },
            { "verbal_explanation": "נכפול מונה במונה ומכנה במכנה.", "math_expression": "\\dfrac{24}{5}" },
            { "verbal_explanation": "נוציא שלמים מהשבר המדומה לקבלת מספר מעורב.", "math_expression": "4\\dfrac{4}{5}" }
        ],
        "final_answer": "4 4/5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "question_text": "חשבו את התרגיל הבא: \\( 10 \\times \\dfrac{3}{5} \\)&rlm;",
        "options": ["6", "30", "15", "50/3"],
        "correctAnswer": 0,
        "hint": "תוכלו לצמצם את העשר (במונה) עם החמש (במכנה) לפני הכפל.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את התרגיל בעזרת קווי שבר.", "math_expression": "\\dfrac{10}{1} \\times \\dfrac{3}{5}" },
            { "verbal_explanation": "נכפול ונקבל שבר גדול.", "math_expression": "\\dfrac{30}{5}" },
            { "verbal_explanation": "נחלק את המונה במכנה כדי לקבל מספר שלם סופי.", "math_expression": "30 \\div 5 = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "question_text": "חשבו את התרגיל הבא: \\( 8 \\times 1\\dfrac{1}{4} \\)&rlm;",
        "options": ["10", "9 1/4", "8 1/4", "32/4"],
        "correctAnswer": 0,
        "hint": "הפכו לשבר מדומה ונסו לצמצם את הארבע במכנה עם השמונה בשלמים.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את המספר המעורב לשבר מדומה.", "math_expression": "1\\dfrac{1}{4} = \\dfrac{5}{4}" },
            { "verbal_explanation": "נרשום את התרגיל כשברים.", "math_expression": "\\dfrac{8}{1} \\times \\dfrac{5}{4}" },
            { "verbal_explanation": "נכפול מונים ומכנים.", "math_expression": "\\dfrac{40}{4}" },
            { "verbal_explanation": "פעולת החילוק של השבר נותנת לנו תוצאה עגולה ויפה.", "math_expression": "40 \\div 4 = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "question_text": "חשבו את התרגיל הבא: \\( 7 \\times \\dfrac{2}{7} \\)&rlm;",
        "options": ["2", "14", "1", "49/2"],
        "correctAnswer": 0,
        "hint": "כשכופלים שלם בשבר שהמכנה שלו זהה לאותו שלם, אפשר פשוט לצמצם אותם.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את התרגיל בצורה מלאה.", "math_expression": "\\dfrac{7}{1} \\times \\dfrac{2}{7}" },
            { "verbal_explanation": "אפשר למחוק (לצמצם) את המספר שבע שמופיע גם למעלה וגם למטה באלכסון.", "math_expression": "\\dfrac{1}{1} \\times \\dfrac{2}{1}" },
            { "verbal_explanation": "נשארנו עם שתיים שלמים.", "math_expression": "2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "question_text": "חשבו את התרגיל הבא: \\( 4 \\times 3\\dfrac{1}{8} \\)&rlm;",
        "options": ["12 1/2", "12 1/8", "12 4/8", "7"],
        "correctAnswer": 0,
        "hint": "הפכו לשבר מדומה, כפלו, ולאחר מכן הפכו חזרה למעורב תוך צמצום השבר.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את המספר המעורב לשבר. שלוש כפול שמונה ועוד אחד שווה עשרים וחמש במונה.", "math_expression": "3\\dfrac{1}{8} = \\dfrac{25}{8}" },
            { "verbal_explanation": "נכפול את השלם בשבר החדש.", "math_expression": "\\dfrac{4}{1} \\times \\dfrac{25}{8} = \\dfrac{100}{8}" },
            { "verbal_explanation": "נחלק מאה בשמונה כדי להפוך למספר מעורב, ונקבל שנים עשר עם שארית ארבע.", "math_expression": "12\\dfrac{4}{8}" },
            { "verbal_explanation": "נצמצם את השבר (נחלק מונה ומכנה בארבע) לקבלת צורה פשוטה יותר.", "math_expression": "12\\dfrac{1}{2}" }
        ],
        "final_answer": "12 1/2"
    },
    {
        "topic": "math_5_6",
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "question_text": "חשבו את התרגיל הבא: \\( 9 \\times \\dfrac{5}{6} \\)&rlm;",
        "options": ["7 1/2", "7 3/6", "45", "15/2"],
        "correctAnswer": 0,
        "hint": "כפלו, הפיקו מספר מעורב וצמצמו. אפשר גם לצמצם מראש את התשע והשש בחלוקה לשלוש.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את התרגיל. אפשר לראות שהמספר תשע במונה והשש במכנה מתחלקים שניהם בשלוש.", "math_expression": "\\dfrac{9}{1} \\times \\dfrac{5}{6}" },
            { "verbal_explanation": "אם נכפול לפני הצמצום נקבל ארבעים וחמש חלקי שש.", "math_expression": "\\dfrac{45}{6}" },
            { "verbal_explanation": "נוציא שלמים: שש נכנס בארבעים וחמש שבע פעמים, ונשארת שארית שלוש במונה.", "math_expression": "7\\dfrac{3}{6}" },
            { "verbal_explanation": "נצמצם את השבר לקבלת חצי.", "math_expression": "7\\dfrac{1}{2}" }
        ],
        "final_answer": "7 1/2"
    },

    // ==========================================
    // תת נושא 10: מיקום על ישר המספרים (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "מיקום על ישר המספרים",
        "question_text": "איזה מספר נמצא בדיוק באמצע על ישר המספרים בין \\( 0 \\) ל-\\( 1 \\)?&rlm;",
        "options": ["0.5", "0.1", "0.9", "1.5"],
        "correctAnswer": 0,
        "hint": "המרחק בין אפס לאחד הוא שלם אחד. האמצע הוא חצי הדרך.",
        "solution_steps": [
            { "verbal_explanation": "המרחק الكולל בין אפס לאחד הוא שלם אחד.", "math_expression": "1 - 0 = 1" },
            { "verbal_explanation": "כדי למצוא את האמצע נחלק את השלם בשתיים.", "math_expression": "1 \\div 2" },
            { "verbal_explanation": "חצי בשבר עשרוני נכתב כחמש עשיריות.", "math_expression": "0.5" }
        ],
        "final_answer": "0.5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מיקום על ישר המספרים",
        "question_text": "איזה מספר מתאים לנקודה שנמצאת בדיוק באמצע בין \\( 2 \\) ל-\\( 3 \\) על ישר המספרים?&rlm;",
        "options": ["2.5", "2.1", "3.5", "2.9"],
        "correctAnswer": 0,
        "hint": "המרווח הוא בין השלם שתיים לשלם שלוש. הוסיפו חצי לשתיים.",
        "solution_steps": [
            { "verbal_explanation": "השלם שמתחיל את הקטע הוא שתיים.", "math_expression": "2" },
            { "verbal_explanation": "אמצע הדרך בין שני שלמים עוקבים הוא תמיד חצי.", "math_expression": "0.5" },
            { "verbal_explanation": "נחבר את המספרים יחד כדי לדעת איזה מספר מסתתר שם.", "math_expression": "2 + 0.5 = 2.5" }
        ],
        "final_answer": "2.5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מיקום על ישר המספרים",
        "question_text": "מחלקים את הקטע בין \\( 0 \\) ל-\\( 1 \\) על הישר לעשרה חלקים שווים. מהו המספר שמייצג את הסימון (שנתה) השלישי?&rlm;",
        "options": ["0.3", "0.03", "3", "1.3"],
        "correctAnswer": 0,
        "hint": "חלוקה של שלם אחד לעשרה חלקים שווים יוצרת עשיריות. ספרו שלוש קפיצות.",
        "solution_steps": [
            { "verbal_explanation": "כאשר מחלקים את הקטע שבין אפס לאחד לעשר, כל קפיצה קטנה שווה לעשירית אחת.", "math_expression": "0.1" },
            { "verbal_explanation": "אנו מחפשים את המקום של הסימון השלישי, כלומר שלוש קפיצות של עשירית.", "math_expression": "0.1 \\times 3" },
            { "verbal_explanation": "המספר שיתקבל הוא שלוש עשיריות.", "math_expression": "0.3" }
        ],
        "final_answer": "0.3"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מיקום על ישר המספרים",
        "question_text": "היכן ימוקם השבר \\( \\dfrac{3}{4} \\) על ישר המספרים?&rlm;",
        "options": ["בין 0 ל-1", "בין 1 ל-2", "בין 3 ל-4", "אחרי 4"],
        "correctAnswer": 0,
        "hint": "שלושה רבעים הוא שבר בו המונה קטן מהמכנה. לכן הוא קטן משלם אחד אך גדול מאפס.",
        "solution_steps": [
            { "verbal_explanation": "המספר שלוש קטן מהמספר ארבע. לכן, השבר אינו מגיע לשלם אחד.", "math_expression": "\\dfrac{3}{4} < 1" },
            { "verbal_explanation": "השבר הוא מספר חיובי ולכן הוא גדול מאפס.", "math_expression": "\\dfrac{3}{4} > 0" },
            { "verbal_explanation": "מכאן נובע שהשבר נמצא בדיוק בקטע הראשון של הישר, בין אפס לאחד.", "math_expression": "0 < \\dfrac{3}{4} < 1" }
        ],
        "final_answer": "בין 0 ל-1"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מיקום על ישר המספרים",
        "question_text": "איזה שבר עשרוני נמצא בדיוק באמצע הדרך בין \\( 1.2 \\) ל-\\( 1.3 \\)?&rlm;",
        "options": ["1.25", "1.21", "1.35", "1.15"],
        "correctAnswer": 0,
        "hint": "כדי לראות את האמצע ברור יותר, הוסיפו אפס בסוף כל מספר (מאה ועשרים, ומאה ושלושים).",
        "solution_steps": [
            { "verbal_explanation": "נוסיף אפס בסוף המספרים העשרוניים כדי שיהיה נוח לחשב, ללא שינוי בגודלם.", "math_expression": "1.20 \\quad , \\quad 1.30" },
            { "verbal_explanation": "המספר שנמצא בדיוק באמצע בין עשרים לשלושים הוא עשרים וחמש.", "math_expression": "25" },
            { "verbal_explanation": "לכן, המספר שבאמצע הוא אחת נקודה עשרים וחמש.", "math_expression": "1.25" }
        ],
        "final_answer": "1.25"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מיקום על ישר המספרים",
        "question_text": "הקטע שבין המספרים \\( 4 \\) ל-\\( 5 \\) על ישר המספרים מחולק ל-4 חלקים שווים. איזה מספר מתאים לסימון הראשון אחרי הספרה \\( 4 \\)?&rlm;",
        "options": ["4.25", "4.1", "4.5", "4.4"],
        "correctAnswer": 0,
        "hint": "כאשר מחלקים קטע לארבעה חלקים, כל קפיצה שווה לרבע (או עשרים וחמש מאיות).",
        "solution_steps": [
            { "verbal_explanation": "חלוקה של שלם אחד לארבעה חלקים שווים נותנת לנו רבע לכל חלק.", "math_expression": "1 \\div 4 = 0.25" },
            { "verbal_explanation": "התחלנו את הספירה מהמספר השלם ארבע.", "math_expression": "4" },
            { "verbal_explanation": "הסימון הראשון נמצא במרחק של קפיצה אחת של רבע מהמספר ארבע. נחבר אותם יחד.", "math_expression": "4 + 0.25 = 4.25" }
        ],
        "final_answer": "4.25"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מיקום על ישר המספרים",
        "question_text": "על ישר המספרים, מי נמצא ימינה יותר (כלומר, איזה מספר גדול יותר), \\( 0.7 \\) או \\( 0.09 \\)?&rlm;",
        "options": ["0.7", "0.09", "הם באותו מקום", "אי אפשר לדעת"],
        "correctAnswer": 0,
        "hint": "השוו קודם את ספרת העשיריות (הספרה הראשונה אחרי הנקודה).",
        "solution_steps": [
            { "verbal_explanation": "נסתכל על הספרה הראשונה אחרי הנקודה העשרונית בשני המספרים.", "math_expression": "0.7 \\quad , \\quad 0.09" },
            { "verbal_explanation": "במספר הראשון יש שבע עשיריות. במספר השני יש אפס עשיריות.", "math_expression": "7 > 0" },
            { "verbal_explanation": "לכן המספר הראשון גדול יותר, וימוקם יותר ימינה על ישר המספרים.", "math_expression": "0.7" }
        ],
        "final_answer": "0.7"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מיקום על ישר המספרים",
        "question_text": "איזה מספר שלם נמצא הכי קרוב על ישר המספרים לשבר המעורב \\( 5\\dfrac{5}{6} \\)?&rlm;",
        "options": ["6", "5", "7", "4"],
        "correctAnswer": 0,
        "hint": "המספר נמצא בין חמש לשש. השבר חמש שישיות קרוב מאוד לשלם נוסף.",
        "solution_steps": [
            { "verbal_explanation": "המספר המעורב נמצא בתוך הקטע שבין חמש לשש.", "math_expression": "5 < 5\\dfrac{5}{6} < 6" },
            { "verbal_explanation": "החלק השברי, חמש שישיות, אומר שחסרה רק שישית אחת כדי להשלים לשלם הבא.", "math_expression": "\\dfrac{5}{6}" },
            { "verbal_explanation": "מכיוון שהשבר קרוב מאוד לאחד שלם (יותר מחצי), המספר קרוב יותר לשש מאשר לחמש.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מיקום על ישר המספרים",
        "question_text": "מהו המספר הנמצא במרחק שווה מ-\\( 0.2 \\) ומ-\\( 0.8 \\) על ישר המספרים?&rlm;",
        "options": ["0.5", "0.6", "0.4", "1"],
        "correctAnswer": 0,
        "hint": "כדי למצוא את האמצע המדויק, חברו את שני המספרים וחלקו את התוצאה בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא את נקודת האמצע, קודם נחבר את שני המספרים יחד.", "math_expression": "0.2 + 0.8 = 1.0" },
            { "verbal_explanation": "עכשיו נחלק את הסכום שקיבלנו בשתיים.", "math_expression": "1.0 \\div 2" },
            { "verbal_explanation": "התוצאה היא חצי, שזה המספר שנמצא בדיוק באמצע.", "math_expression": "0.5" }
        ],
        "final_answer": "0.5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מיקום על ישר המספרים",
        "question_text": "איזה מהשברים הבאים נמצא ימינה מ-\\( \\dfrac{1}{2} \\) (כלומר, גדול יותר מחצי) על ישר המספרים?&rlm;",
        "options": ["5/8", "1/3", "2/5", "3/8"],
        "correctAnswer": 0,
        "hint": "בשבר ששווה לחצי, המונה הוא בדיוק חצי מהמכנה. בדקו באיזה שבר המונה גדול מחצי מהמכנה שלו.",
        "solution_steps": [
            { "verbal_explanation": "בשבר שהמכנה שלו הוא שמונה, חצי שלם יהיה ארבע שמיניות.", "math_expression": "\\dfrac{1}{2} = \\dfrac{4}{8}" },
            { "verbal_explanation": "נבחן את השבר חמש שמיניות. חמש גדול מארבע.", "math_expression": "5 > 4" },
            { "verbal_explanation": "מכיוון שחמש שמיניות גדול מארבע שמיניות, הוא גדול מחצי ולכן ממוקם מימינו.", "math_expression": "\\dfrac{5}{8}" }
        ],
        "final_answer": "5/8"
    },
    // ==========================================
    // תת נושא 11: מעבר משבר פשוט לשבר עשרוני (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "question_text": "הפכו את השבר הפשוט הבא לשבר עשרוני: \\( \\dfrac{1}{2} \\)&rlm;",
        "options": ["0.5", "0.2", "0.1", "0.05"],
        "correctAnswer": 0,
        "hint": "כדי להפוך לשבר עשרוני, צריך שהמכנה (המספר למטה) יהיה 10, 100 או 1000. נסו להרחיב את השבר כך שהמכנה יהיה עשר.",
        "solution_steps": [
            { "verbal_explanation": "נרחיב את השבר כדי שהמכנה שלו יהיה עשר. לשם כך, נכפול גם את המונה וגם את המכנה בחמש.", "math_expression": "\\dfrac{1 \\times 5}{2 \\times 5}" },
            { "verbal_explanation": "נקבל שבר פשוט חדש ששווה בדיוק לשבר המקורי.", "math_expression": "\\dfrac{5}{10}" },
            { "verbal_explanation": "חמש עשיריות נכתבות בשבר עשרוני כספרה חמש הממוקמת מקום אחד מימין לנקודה.", "math_expression": "0.5" }
        ],
        "final_answer": "0.5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "question_text": "הפכו את השבר הפשוט הבא לשבר עשרוני: \\( \\dfrac{3}{4} \\)&rlm;",
        "options": ["0.75", "0.34", "0.4", "0.25"],
        "correctAnswer": 0,
        "hint": "אי אפשר להפוך את המכנה ארבע לעשר, אבל אפשר להפוך אותו למאה על ידי כפל בעשרים וחמש.",
        "solution_steps": [
            { "verbal_explanation": "נרחיב את השבר כך שהמכנה יהיה מאה. נכפול את המונה ואת המכנה בעשרים וחמש.", "math_expression": "\\dfrac{3 \\times 25}{4 \\times 25}" },
            { "verbal_explanation": "נבצע את פעולת הכפל ונקבל שבר פשוט עם מכנה מאה.", "math_expression": "\\dfrac{75}{100}" },
            { "verbal_explanation": "שבעים וחמש מאיות נכתבות כשתי ספרות מימין לנקודה העשרונית.", "math_expression": "0.75" }
        ],
        "final_answer": "0.75"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "question_text": "הפכו את השבר הפשוט הבא לשבר עשרוני: \\( \\dfrac{1}{5} \\)&rlm;",
        "options": ["0.2", "0.5", "0.15", "0.02"],
        "correctAnswer": 0,
        "hint": "חשבו באיזה מספר צריך לכפול את חמש כדי להגיע לעשר.",
        "solution_steps": [
            { "verbal_explanation": "כדי להגיע למכנה עשר, נכפול את המונה ואת המכנה בשתיים.", "math_expression": "\\dfrac{1 \\times 2}{5 \\times 2}" },
            { "verbal_explanation": "נקבל שבר של שתי עשיריות.", "math_expression": "\\dfrac{2}{10}" },
            { "verbal_explanation": "נרשום את התוצאה כמספר עשרוני עם ספרה אחת אחרי הנקודה.", "math_expression": "0.2" }
        ],
        "final_answer": "0.2"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "question_text": "הפכו את השבר הפשוט הבא לשבר עשרוני: \\( \\dfrac{4}{5} \\)&rlm;",
        "options": ["0.8", "0.4", "0.45", "0.08"],
        "correctAnswer": 0,
        "hint": "הרחיבו את השבר כך שהמכנה יהיה שווה לעשר.",
        "solution_steps": [
            { "verbal_explanation": "נרחיב את השבר פי שתיים כדי לקבל מכנה עשר.", "math_expression": "\\dfrac{4 \\times 2}{5 \\times 2}" },
            { "verbal_explanation": "נקבל שבר של שמונה עשיריות.", "math_expression": "\\dfrac{8}{10}" },
            { "verbal_explanation": "נכתוב את השמונה במקום של העשיריות, מיד אחרי הנקודה.", "math_expression": "0.8" }
        ],
        "final_answer": "0.8"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "question_text": "הפכו את השבר הפשוט הבא לשבר עשרוני: \\( \\dfrac{9}{20} \\)&rlm;",
        "options": ["0.45", "0.9", "0.20", "0.045"],
        "correctAnswer": 0,
        "hint": "כדי להפוך את המכנה עשרים למאה, יש לכפול אותו בחמש.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את המונה ואת המכנה בחמש כדי להגיע למכנה מאה.", "math_expression": "\\dfrac{9 \\times 5}{20 \\times 5}" },
            { "verbal_explanation": "נחשב את הכפל ונקבל ארבעים וחמש חלקי מאה.", "math_expression": "\\dfrac{45}{100}" },
            { "verbal_explanation": "נרשום את המספר כשבר עשרוני בעל שתי ספרות אחרי הנקודה.", "math_expression": "0.45" }
        ],
        "final_answer": "0.45"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "question_text": "הפכו את השבר הפשוט הבא לשבר עשרוני: \\( \\dfrac{3}{50} \\)&rlm;",
        "options": ["0.06", "0.6", "0.3", "0.03"],
        "correctAnswer": 0,
        "hint": "איך הופכים את המספר חמישים למאה? כופלים בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נרחיב את השבר פי שתיים כדי שנקבל מאה במכנה.", "math_expression": "\\dfrac{3 \\times 2}{50 \\times 2}" },
            { "verbal_explanation": "נקבל שש מאיות.", "math_expression": "\\dfrac{6}{100}" },
            { "verbal_explanation": "שש מאיות נכתבות עם אפס במקום של העשיריות ושש במקום של המאיות.", "math_expression": "0.06" }
        ],
        "final_answer": "0.06"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "question_text": "הפכו את המספר המעורב הבא לשבר עשרוני: \\( 2\\dfrac{1}{4} \\)&rlm;",
        "options": ["2.25", "2.14", "2.5", "2.025"],
        "correctAnswer": 0,
        "hint": "השאירו את השלם כפי שהוא, והרחיבו רק את השבר (רבע) כך שהמכנה שלו יהיה מאה.",
        "solution_steps": [
            { "verbal_explanation": "המספר השלם שתיים יישאר כפי שהוא משמאל לנקודה העשרונית. נרחיב רק את הרבע פי עשרים וחמש.", "math_expression": "\\dfrac{1 \\times 25}{4 \\times 25} = \\dfrac{25}{100}" },
            { "verbal_explanation": "נחבר את המספר השלם עם השבר העשרוני שקיבלנו.", "math_expression": "2 + 0.25" },
            { "verbal_explanation": "נרשום את התוצאה המלאה.", "math_expression": "2.25" }
        ],
        "final_answer": "2.25"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "question_text": "הפכו את השבר הפשוט הבא לשבר עשרוני: \\( \\dfrac{7}{25} \\)&rlm;",
        "options": ["0.28", "0.7", "0.25", "0.14"],
        "correctAnswer": 0,
        "hint": "כפלו את המונה ואת המכנה בארבע כדי להגיע למכנה של מאה.",
        "solution_steps": [
            { "verbal_explanation": "כדי להגיע למאה במכנה, נרחיב את השבר פי ארבע.", "math_expression": "\\dfrac{7 \\times 4}{25 \\times 4}" },
            { "verbal_explanation": "נחשב את הכפל ונקבל עשרים ושמונה מאיות.", "math_expression": "\\dfrac{28}{100}" },
            { "verbal_explanation": "נרשום זאת כשבר עשרוני מסודר.", "math_expression": "0.28" }
        ],
        "final_answer": "0.28"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "question_text": "הפכו את השבר הפשוט הבא לשבר עשרוני: \\( \\dfrac{1}{8} \\)&rlm;",
        "options": ["0.125", "0.8", "0.12", "0.25"],
        "correctAnswer": 0,
        "hint": "את המספר שמונה אי אפשר להפוך למאה בעזרת כפל במספר שלם, אבל אפשר להפוך אותו לאלף אם נכפול במאה עשרים וחמש.",
        "solution_steps": [
            { "verbal_explanation": "נרחיב את השבר פי מאה עשרים וחמש כדי שהמכנה יהיה אלף.", "math_expression": "\\dfrac{1 \\times 125}{8 \\times 125}" },
            { "verbal_explanation": "הכפל נותן לנו מאה עשרים וחמש אלפיות.", "math_expression": "\\dfrac{125}{1000}" },
            { "verbal_explanation": "נכתוב את המספר עם שלוש ספרות אחרי הנקודה (אלפיות).", "math_expression": "0.125" }
        ],
        "final_answer": "0.125"
    },
    {
        "topic": "math_5_6",
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "question_text": "הפכו את המספר המעורב הבא לשבר עשרוני: \\( 1\\dfrac{2}{5} \\)&rlm;",
        "options": ["1.4", "1.2", "1.25", "1.04"],
        "correctAnswer": 0,
        "hint": "השאירו את השלם והרחיבו את השבר כך שיהיה עם מכנה עשר.",
        "solution_steps": [
            { "verbal_explanation": "השלם אחד יישאר משמאל לנקודה. נרחיב רק את השבר שתי חמישיות פי שתיים כדי לקבל עשיריות.", "math_expression": "\\dfrac{2 \\times 2}{5 \\times 2} = \\dfrac{4}{10}" },
            { "verbal_explanation": "כעת יש לנו שלם אחד ועוד ארבע עשיריות.", "math_expression": "1 + 0.4" },
            { "verbal_explanation": "נרשום אותם יחד כמספר עשרוני אחד.", "math_expression": "1.4" }
        ],
        "final_answer": "1.4"
    },

    // ==========================================
    // תת נושא 12: צמצום והרחבה של שברים פשוטים (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "question_text": "צמצמו את השבר הבא לצורתו הפשוטה ביותר: \\( \\dfrac{4}{6} \\)&rlm;",
        "options": ["2/3", "1/2", "4/3", "1/3"],
        "correctAnswer": 0,
        "hint": "חפשו מספר שניתן לחלק בו גם את המונה וגם את המכנה ללא שארית.",
        "solution_steps": [
            { "verbal_explanation": "נחפש מספר שמחלק גם את ארבע וגם את שש. המספר הזה הוא שתיים.", "math_expression": "4 \\div 2 \\quad , \\quad 6 \\div 2" },
            { "verbal_explanation": "נחלק את המונה ואת המכנה בשתיים כדי לצמצם את השבר.", "math_expression": "\\dfrac{4 \\div 2}{6 \\div 2}" },
            { "verbal_explanation": "נרשום את השבר החדש שקיבלנו, שהוא שווה בדיוק לשבר המקורי.", "math_expression": "\\dfrac{2}{3}" }
        ],
        "final_answer": "2/3"
    },
    {
        "topic": "math_5_6",
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "question_text": "צמצמו את השבר הבא לצורתו הפשוטה ביותר: \\( \\dfrac{15}{20} \\)&rlm;",
        "options": ["3/4", "5/10", "1/4", "3/5"],
        "correctAnswer": 0,
        "hint": "שני המספרים מסתיימים בחמש או באפס, לכן שניהם מתחלקים בחמש.",
        "solution_steps": [
            { "verbal_explanation": "המספרים חמש עשרה ועשרים נמצאים שניהם בכפולות של חמש. נחלק אותם בחמש.", "math_expression": "\\dfrac{15 \\div 5}{20 \\div 5}" },
            { "verbal_explanation": "המונה החדש יהיה שלוש, והמכנה החדש יהיה ארבע.", "math_expression": "\\dfrac{3}{4}" },
            { "verbal_explanation": "אי אפשר לצמצם את השבר הזה יותר, לכן זו התשובה הסופית.", "math_expression": "\\dfrac{3}{4}" }
        ],
        "final_answer": "3/4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "question_text": "הרחיבו את השבר \\( \\dfrac{2}{3} \\) כך שהמכנה שלו יהיה 12. מה יהיה המונה החדש?&rlm;",
        "options": ["8", "6", "4", "10"],
        "correctAnswer": 0,
        "hint": "בדקו בכמה צריך לכפול את המספר שלוש כדי להגיע לשנים עשר, ואז כפלו גם את המונה באותו מספר.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק בכמה כפלנו את המכנה שלוש כדי לקבל שנים עשר.", "math_expression": "12 \\div 3 = 4" },
            { "verbal_explanation": "הבנו שהרחבנו את השבר פי ארבע. לכן, חובה לכפול גם את המונה פי ארבע כדי לשמור על ערך השבר.", "math_expression": "2 \\times 4 = 8" },
            { "verbal_explanation": "המונה החדש שמצאנו הוא שמונה.", "math_expression": "8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "math_5_6",
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "question_text": "צמצמו את השבר הבא לצורתו הפשוטה ביותר: \\( \\dfrac{12}{18} \\)&rlm;",
        "options": ["2/3", "6/9", "4/6", "1/2"],
        "correctAnswer": 0,
        "hint": "חפשו את המספר הגדול ביותר שמחלק גם את שנים עשר וגם את שמונה עשרה.",
        "solution_steps": [
            { "verbal_explanation": "שני המספרים מתחלקים בשש ללא שארית, לכן נשתמש במספר שש כדי לצמצם את השבר בפעם אחת.", "math_expression": "\\dfrac{12 \\div 6}{18 \\div 6}" },
            { "verbal_explanation": "נחשב את החילוק במונה: שנים עשר חלקי שש נותן שתיים.", "math_expression": "12 \\div 6 = 2" },
            { "verbal_explanation": "נחשב את החילוק במכנה: שמונה עשרה חלקי שש נותן שלוש.", "math_expression": "18 \\div 6 = 3" },
            { "verbal_explanation": "נרכיב את השבר המצומצם.", "math_expression": "\\dfrac{2}{3}" }
        ],
        "final_answer": "2/3"
    },
    {
        "topic": "math_5_6",
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "question_text": "מצאו את המספר החסר במונה: \\( \\dfrac{5}{7} = \\dfrac{?}{21} \\)&rlm;",
        "options": ["15", "10", "14", "20"],
        "correctAnswer": 0,
        "hint": "בדקו פי כמה גדל המכנה (משבע לעשרים ואחת), והגדילו את המונה באותו אופן.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק פי כמה הרחבנו את המכנה משבע לעשרים ואחת.", "math_expression": "21 \\div 7 = 3" },
            { "verbal_explanation": "המכנה הוכפל פי שלוש, אז נכפול גם את המונה פי שלוש כדי שהשבר יישאר שווה.", "math_expression": "5 \\times 3 = 15" },
            { "verbal_explanation": "המספר שחסר במונה הוא חמש עשרה.", "math_expression": "15" }
        ],
        "final_answer": "15"
    },
    {
        "topic": "math_5_6",
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "question_text": "צמצמו את השבר \\( \\dfrac{10}{100} \\) לצורתו הפשוטה ביותר.&rlm;",
        "options": ["1/10", "1/5", "2/20", "1/100"],
        "correctAnswer": 0,
        "hint": "אפשר 'למחוק' (לצמצם) אפס אחד מהמונה ואפס אחד מהמכנה. זה כמו לחלק בעשר.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את המונה ואת המכנה בעשר, שזה המספר הגדול ביותר שמחלק את שניהם בקלות.", "math_expression": "\\dfrac{10 \\div 10}{100 \\div 10}" },
            { "verbal_explanation": "במונה נקבל אחד, ובמכנה נקבל עשר.", "math_expression": "\\dfrac{1}{10}" },
            { "verbal_explanation": "זהו השבר בצורתו הפשוטה ביותר.", "math_expression": "\\dfrac{1}{10}" }
        ],
        "final_answer": "1/10"
    },
    {
        "topic": "math_5_6",
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "question_text": "מצאו את המספר החסר במכנה: \\( \\dfrac{3}{4} = \\dfrac{15}{?} \\)&rlm;",
        "options": ["20", "16", "24", "12"],
        "correctAnswer": 0,
        "hint": "בדקו פי כמה הוכפל המונה שלוש כדי להגיע לחמש עשרה, והכפילו גם את המכנה באותו אופן.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק פי כמה המונה הוכפל. שלוש כפול מה שווה לחמש עשרה?", "math_expression": "15 \\div 3 = 5" },
            { "verbal_explanation": "מכיוון שהמונה הורחב פי חמש, נרחיב גם את המכנה פי חמש.", "math_expression": "4 \\times 5 = 20" },
            { "verbal_explanation": "המספר שחסר במכנה הוא עשרים.", "math_expression": "20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "math_5_6",
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "question_text": "צמצמו את השבר הבא לצורתו הפשוטה ביותר: \\( \\dfrac{9}{24} \\)&rlm;",
        "options": ["3/8", "1/3", "3/4", "9/8"],
        "correctAnswer": 0,
        "hint": "האם שני המספרים מתחלקים בשלוש ללא שארית?",
        "solution_steps": [
            { "verbal_explanation": "שני המספרים, תשע ועשרים וארבע, נמצאים בלוח הכפל של שלוש. נחלק את שניהם בשלוש.", "math_expression": "\\dfrac{9 \\div 3}{24 \\div 3}" },
            { "verbal_explanation": "תשע לחלק לשלוש זה שלוש. עשרים וארבע לחלק לשלוש זה שמונה.", "math_expression": "\\dfrac{3}{8}" },
            { "verbal_explanation": "הגענו לשבר שאי אפשר לצמצם אותו יותר.", "math_expression": "\\dfrac{3}{8}" }
        ],
        "final_answer": "3/8"
    },
    {
        "topic": "math_5_6",
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "question_text": "צמצמו את השבר \\( \\dfrac{20}{25} \\) לצורתו הפשוטה ביותר.&rlm;",
        "options": ["4/5", "2/5", "10/15", "4/25"],
        "correctAnswer": 0,
        "hint": "שני המספרים מסתיימים באפס או בחמש, ולכן מתחלקים בחמש.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את המונה ואת המכנה בחמש.", "math_expression": "\\dfrac{20 \\div 5}{25 \\div 5}" },
            { "verbal_explanation": "עשרים לחלק לחמש זה ארבע. עשרים וחמש לחלק לחמש זה חמש.", "math_expression": "\\dfrac{4}{5}" },
            { "verbal_explanation": "קיבלנו את השבר המצומצם.", "math_expression": "\\dfrac{4}{5}" }
        ],
        "final_answer": "4/5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "question_text": "הרחיבו את השבר \\( \\dfrac{1}{6} \\) פי שלוש. מהו השבר שיתקבל?&rlm;",
        "options": ["3/18", "1/18", "3/6", "4/9"],
        "correctAnswer": 0,
        "hint": "להרחיב פי שלוש אומר לכפול גם את המונה וגם את המכנה בשלוש.",
        "solution_steps": [
            { "verbal_explanation": "נרשום תרגיל בו אנו כופלים את המספר למעלה (מונה) והמספר למטה (מכנה) בשלוש.", "math_expression": "\\dfrac{1 \\times 3}{6 \\times 3}" },
            { "verbal_explanation": "אחד כפול שלוש שווה שלוש. שש כפול שלוש שווה שמונה עשרה.", "math_expression": "\\dfrac{3}{18}" },
            { "verbal_explanation": "קיבלנו שבר חדש, בעל מספרים גדולים יותר, אך הוא שווה בדיוק לשבר המקורי.", "math_expression": "\\dfrac{3}{18}" }
        ],
        "final_answer": "3/18"
    },

    // ==========================================
    // תת נושא 13: שבר כמנת חילוק (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "שבר כמנת חילוק",
        "question_text": "איזה שבר מייצג את פעולת החילוק \\( 2 \\div 5 \\)?&rlm;",
        "options": ["2/5", "5/2", "2 1/5", "1/5"],
        "correctAnswer": 0,
        "hint": "סימן החילוק יכול להיכתב כקו שבר. המספר הראשון יושב למעלה והמספר השני למטה.",
        "solution_steps": [
            { "verbal_explanation": "פעולת החילוק היא בדיוק כמו קו שבר.", "math_expression": "2 \\div 5" },
            { "verbal_explanation": "המספר שאנחנו מחלקים (שתיים) נכתב במונה (למעלה).", "math_expression": "2" },
            { "verbal_explanation": "המספר שבו מחלקים (חמש) נכתב במכנה (למטה). לכן התשובה היא שתי חמישיות.", "math_expression": "\\dfrac{2}{5}" }
        ],
        "final_answer": "2/5"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר כמנת חילוק",
        "question_text": "שלושה ילדים חילקו ביניהם שבע מגשיות פיצה שווה בשווה. כמה פיצה קיבל כל ילד?&rlm;",
        "options": ["2 1/3", "7/3", "3/7", "2 1/7"],
        "correctAnswer": 0,
        "hint": "רשמו שבע לחלק לשלוש כשבר. אם המונה גדול מהמכנה, הפכו למספר מעורב (הוציאו שלמים).",
        "solution_steps": [
            { "verbal_explanation": "יש לנו שבע מגשיות לחלק לשלושה ילדים. נרשום תרגיל חילוק.", "math_expression": "7 \\div 3" },
            { "verbal_explanation": "נהפוך את תרגיל החילוק לשבר שבו שבע למעלה ושלוש למטה.", "math_expression": "\\dfrac{7}{3}" },
            { "verbal_explanation": "מכיוון ששבע גדול משלוש, נוציא שלמים. שלוש נכנס בשבע פעמיים (זה שש), ונשארת שארית אחת שהיא שליש.", "math_expression": "2\\dfrac{1}{3}" }
        ],
        "final_answer": "2 1/3"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר כמנת חילוק",
        "question_text": "איזה מספר מעורב שווה לתרגיל החילוק \\( 11 \\div 4 \\)?&rlm;",
        "options": ["2 3/4", "3 1/4", "2 1/4", "11/4"],
        "correctAnswer": 0,
        "hint": "כתבו כשבר, ובדקו כמה פעמים ארבע נכנס באחת עשרה שלם, ומה השארית שנשארת למעלה.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את תרגיל החילוק בצורה של קו שבר.", "math_expression": "\\dfrac{11}{4}" },
            { "verbal_explanation": "נבדוק כמה פעמים ארבע נכנס באחת עשרה. ארבע כפול שתיים זה שמונה. (אם נכפול בשלוש נקבל שנים עשר וזה יותר מדי). אז יש לנו שני שלמים.", "math_expression": "2" },
            { "verbal_explanation": "השארית שנותרה היא ההפרש בין אחת עשרה לשמונה. השארית היא שלוש. נרשום את השלם והשארית יחד.", "math_expression": "2\\dfrac{3}{4}" }
        ],
        "final_answer": "2 3/4"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר כמנת חילוק",
        "question_text": "כתבו את פעולת החילוק הבאה כשבר פשוט: \\( 5 \\div 8 \\)&rlm;",
        "options": ["5/8", "8/5", "1 3/5", "1 5/8"],
        "correctAnswer": 0,
        "hint": "המספר הראשון הולך למונה, והמספר השני למכנה.",
        "solution_steps": [
            { "verbal_explanation": "נתבונן בתרגיל החילוק שלפנינו.", "math_expression": "5 \\div 8" },
            { "verbal_explanation": "נמקם את המספר חמש, אותו אנחנו רוצים לחלק, למעלה במונה.", "math_expression": "5" },
            { "verbal_explanation": "נמקם את המספר שמונה למטה במכנה. התשובה היא פשוט חמש שמיניות.", "math_expression": "\\dfrac{5}{8}" }
        ],
        "final_answer": "5/8"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר כמנת חילוק",
        "question_text": "שתי עוגות חולקו שווה בשווה בין תשעה חברים. איזה חלק מהעוגה קיבל כל חבר?&rlm;",
        "options": ["2/9", "9/2", "4 1/2", "1/9"],
        "correctAnswer": 0,
        "hint": "מה מחלקים במי? את העוגות מחלקים לחברים. לכן שתיים לחלק לתשע.",
        "solution_steps": [
            { "verbal_explanation": "הדבר שאותו מחלקים (העוגות) מופיע ראשון בתרגיל והוא יהיה המונה.", "math_expression": "2 \\div 9" },
            { "verbal_explanation": "אנו מחלקים את העוגות לתשעה אנשים, ולכן המספר תשע יהיה המכנה.", "math_expression": "\\dfrac{2}{9}" },
            { "verbal_explanation": "כל חבר יקבל שתי תשיעיות של עוגה.", "math_expression": "\\dfrac{2}{9}" }
        ],
        "final_answer": "2/9"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר כמנת חילוק",
        "question_text": "איזה מספר מעורב שווה לתרגיל \\( 15 \\div 6 \\)?&rlm;",
        "options": ["2 1/2", "2 3/6", "3 1/6", "2 1/6"],
        "correctAnswer": 0,
        "hint": "כתבו כשבר מדומה, הוציאו שלמים וצמצמו את השבר שיישאר.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את תרגיל החילוק לשבר מדומה.", "math_expression": "\\dfrac{15}{6}" },
            { "verbal_explanation": "נבדוק כמה שלמים של שש נכנסים בחמש עשרה. שש ועוד שש זה שנים עשר (שני שלמים). נשארת שארית של שלוש.", "math_expression": "2\\dfrac{3}{6}" },
            { "verbal_explanation": "את השבר שלוש שישיות ניתן לצמצם לחצי על ידי חלוקת המונה והמכנה בשלוש.", "math_expression": "2\\dfrac{1}{2}" }
        ],
        "final_answer": "2 1/2"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר כמנת חילוק",
        "question_text": "כתבו את פעולת החילוק הבאה כשבר: \\( 1 \\div 6 \\)&rlm;",
        "options": ["1/6", "6/1", "6", "0.6"],
        "correctAnswer": 0,
        "hint": "חילוק של אחד למספר כלשהו הופך אותו לשבר יסודי (שבר שהמונה שלו הוא אחד).",
        "solution_steps": [
            { "verbal_explanation": "ניקח את המספר אחד ונשים אותו בראש השבר (במונה).", "math_expression": "1" },
            { "verbal_explanation": "ניקח את המספר שש ונשים אותו למטה (במכנה).", "math_expression": "\\dfrac{1}{6}" },
            { "verbal_explanation": "קיבלנו שבר שנקרא שישית.", "math_expression": "\\dfrac{1}{6}" }
        ],
        "final_answer": "1/6"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר כמנת חילוק",
        "question_text": "איזה מספר מעורב שווה לתרגיל החילוק \\( 9 \\div 2 \\)?&rlm;",
        "options": ["4 1/2", "3 1/2", "4", "5 1/2"],
        "correctAnswer": 0,
        "hint": "כמה פעמים שתיים נכנס בתשע, ומה השארית?",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את החילוק לשבר מדומה שנקרא תשע חצאים.", "math_expression": "\\dfrac{9}{2}" },
            { "verbal_explanation": "נבדוק כמה זוגות שלמים יש בתשע. שתיים נכנס בתשע ארבע פעמים בדיוק (שזה שמונה).", "math_expression": "4" },
            { "verbal_explanation": "נשארה לנו שארית של אחד, שאותה נרשום בחלק השברי כחצי. נחבר את השלם והחצי.", "math_expression": "4\\dfrac{1}{2}" }
        ],
        "final_answer": "4 1/2"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר כמנת חילוק",
        "question_text": "שמונה ילדים רצו להתחלק שווה בשווה בחמישה תפוחים. איזה חלק של תפוח יקבל כל ילד?&rlm;",
        "options": ["5/8", "1 3/5", "8/5", "3/8"],
        "correctAnswer": 0,
        "hint": "חשבו תמיד: מה הדבר שמחולק? התפוחים. לכמה מחלקים? לילדים.",
        "solution_steps": [
            { "verbal_explanation": "אנחנו מחלקים חמישה תפוחים לכן החמש יופיע ראשון.", "math_expression": "5 \\div 8" },
            { "verbal_explanation": "הקו שבר משמש כסימן חילוק, לכן נרשום את התרגיל כשבר פשוט.", "math_expression": "\\dfrac{5}{8}" },
            { "verbal_explanation": "קיבלנו שכל ילד יקבל חמש שמיניות של תפוח.", "math_expression": "\\dfrac{5}{8}" }
        ],
        "final_answer": "5/8"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר כמנת חילוק",
        "question_text": "איזה תרגיל חילוק מתאים לשבר המדומה \\( \\dfrac{12}{5} \\)?&rlm;",
        "options": ["12 ÷ 5", "5 ÷ 12", "12 ÷ 12", "5 ÷ 5"],
        "correctAnswer": 0,
        "hint": "קו השבר הוא בדיוק כמו סימן החילוק. קראו את השבר מלמעלה למטה.",
        "solution_steps": [
            { "verbal_explanation": "המספר שנמצא למעלה (במונה) הוא המספר אותו אנחנו מתכוונים לחלק.", "math_expression": "12" },
            { "verbal_explanation": "המספר שנמצא למטה (במכנה) הוא המספר שבו מחלקים.", "math_expression": "5" },
            { "verbal_explanation": "נרשום את התרגיל עם סימן חילוק רגיל.", "math_expression": "12 \\div 5" }
        ],
        "final_answer": "12 ÷ 5"
    },

    // ==========================================
    // תת נושא 14: שבר עשרוני מחזורי (10 שאלות)
    // ==========================================
    {
        "topic": "math_5_6",
        "subTopic": "שבר עשרוני מחזורי",
        "question_text": "איך ייראה השבר \\( \\dfrac{1}{3} \\) כשהוא נכתב כשבר עשרוני?&rlm;",
        "options": ["0.333...", "0.3", "3.333...", "0.13"],
        "correctAnswer": 0,
        "hint": "כשמחלקים במחשבון אחד לשלוש, התוצאה לא נגמרת. הספרה שלוש חוזרת על עצמה לנצח.",
        "solution_steps": [
            { "verbal_explanation": "נבצע חילוק ארוך של אחד לחלק לשלוש.", "math_expression": "1 \\div 3" },
            { "verbal_explanation": "נראה ששלוש נכנס בעשר שלוש פעמים, ונשארת שארית אחד שוב ושוב.", "math_expression": "0.333" },
            { "verbal_explanation": "כדי להראות שהספרה שלוש חוזרת על עצמה ללא הפסקה, נוסיף שלוש נקודות בסוף המספר.", "math_expression": "0.333..." }
        ],
        "final_answer": "0.333..."
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר עשרוני מחזורי",
        "question_text": "איזה שבר פשוט שווה למספר העשרוני המחזורי \\( 0.666... \\)?&rlm;",
        "options": ["2/3", "1/6", "3/4", "1/3"],
        "correctAnswer": 0,
        "hint": "אם שליש הוא אפס נקודה שלוש שלוש שלוש, אז כמה זה שני שלישים?",
        "solution_steps": [
            { "verbal_explanation": "אנו זוכרים שהשבר שליש נכתב עם ספרות שלוש שחוזרות על עצמן.", "math_expression": "\\dfrac{1}{3} = 0.333..." },
            { "verbal_explanation": "המספר בשאלה הוא פי שתיים בדיוק מהמספר של השליש.", "math_expression": "0.666... = 2 \\times 0.333..." },
            { "verbal_explanation": "לכן, השבר המתאים חייב להיות שני שלישים.", "math_expression": "\\dfrac{2}{3}" }
        ],
        "final_answer": "2/3"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר עשרוני מחזורי",
        "question_text": "מה קורה כשמנסים להפוך את השבר \\( \\dfrac{1}{9} \\) לשבר עשרוני?&rlm;",
        "options": ["הוא הופך ל- 0.111... מחזורי", "הוא הופך ל- 0.9 רגיל", "הוא הופך ל- 0.999... מחזורי", "הוא הופך ל- 0.1 רגיל"],
        "correctAnswer": 0,
        "hint": "חלקו אחד בתשע. כמה פעמים תשע נכנס בעשר? פעם אחת. ומה השארית? תמיד אחד.",
        "solution_steps": [
            { "verbal_explanation": "נבצע תרגיל חילוק ארוך של אחד לחלק לתשע.", "math_expression": "1 \\div 9" },
            { "verbal_explanation": "תשע נכנס בעשר פעם אחת בדיוק. נרשום אחת מימין לנקודה, ונשאר עם שארית של אחד.", "math_expression": "0.1" },
            { "verbal_explanation": "השארית לעולם אינה נגמרת אלא חוזרת על עצמה שוב ושוב באותה צורה. לכן נוסיף נקודות לציון שבר מחזורי.", "math_expression": "0.111..." }
        ],
        "final_answer": "הוא הופך ל- 0.111... מחזורי"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר עשרוני מחזורי",
        "question_text": "איך ייראה השבר \\( \\dfrac{5}{9} \\) כשהוא נכתב כשבר עשרוני?&rlm;",
        "options": ["0.555...", "0.5", "0.95", "0.5959..."],
        "correctAnswer": 0,
        "hint": "אם תשיעית אחת היא 0.111, פשוט כפלו את התוצאה בחמש.",
        "solution_steps": [
            { "verbal_explanation": "אנו כבר יודעים ששבר של תשיעית נכתב כסיפרה אחת שחוזרת על עצמה כל הזמן.", "math_expression": "\\dfrac{1}{9} = 0.111..." },
            { "verbal_explanation": "כדי למצוא כמה שוות חמש תשיעיות, נכפול בחמש.", "math_expression": "5 \\times 0.111..." },
            { "verbal_explanation": "נקבל את הספרה חמש חוזרת על עצמה פעמים רבות.", "math_expression": "0.555..." }
        ],
        "final_answer": "0.555..."
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר עשרוני מחזורי",
        "question_text": "איזה שבר שווה למספר העשרוני המחזורי \\( 0.444... \\)?&rlm;",
        "options": ["4/9", "4/10", "2/5", "1/4"],
        "correctAnswer": 0,
        "hint": "ראינו שכשספרה חוזרת על עצמה, היא בדרך כלל קשורה לשברים שהמכנה שלהם הוא תשע.",
        "solution_steps": [
            { "verbal_explanation": "אנו מזהים שהספרה ארבע חוזרת על עצמה ללא סוף.", "math_expression": "0.444..." },
            { "verbal_explanation": "ספרה שחוזרת על עצמה היא תוצאה של חלוקה במספר תשע.", "math_expression": "\\div 9" },
            { "verbal_explanation": "נרשום את הספרה שחוזרת במונה, ואת המספר תשע במכנה.", "math_expression": "\\dfrac{4}{9}" }
        ],
        "final_answer": "4/9"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר עשרוני מחזורי",
        "question_text": "מה קורה שמחברים \\( \\dfrac{1}{9} + \\dfrac{2}{9} \\) כשהם כתובים כשברים עשרוניים מחזוריים?&rlm;",
        "options": ["מקבלים 0.333... שהוא שווה ל 1/3", "מקבלים 0.3 רגיל", "מקבלים 0.1212...", "מקבלים 3/18"],
        "correctAnswer": 0,
        "hint": "הפכו כל אחד לשבר עשרוני ואז חברו. אחד ועוד שתיים זה שלוש.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את תשיעית כשבר מחזורי.", "math_expression": "\\dfrac{1}{9} = 0.111..." },
            { "verbal_explanation": "נכתוב את שתי תשיעיות כשבר מחזורי ונחבר.", "math_expression": "0.111... + 0.222..." },
            { "verbal_explanation": "כאשר נחבר, הספרה שלוש תחזור על עצמה ללא הפסקה. אנו יודעים שזה שווה לשלוש תשיעיות או לשליש.", "math_expression": "0.333... = \\dfrac{3}{9} = \\dfrac{1}{3}" }
        ],
        "final_answer": "מקבלים 0.333... שהוא שווה ל 1/3"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר עשרוני מחזורי",
        "question_text": "מי גדול יותר, השבר \\( \\dfrac{1}{3} \\) או המספר העשרוני \\( 0.3 \\)?&rlm;",
        "options": ["השבר 1/3 גדול יותר", "המספר 0.3 גדול יותר", "הם שווים בדיוק", "אי אפשר לדעת"],
        "correctAnswer": 0,
        "hint": "הפכו את השליש לשבר עשרוני. זכרו שהוא מחזורי: אפס נקודה שלוש שלוש שלוש... מה יש בו שאין באפס נקודה שלוש?",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את השבר שליש בצורתו המחזורית כדי שנוכל להשוות בקלות.", "math_expression": "\\dfrac{1}{3} = 0.333..." },
            { "verbal_explanation": "המספר העשרוני הנתון הוא אפס נקודה שלוש, שאפשר להוסיף לו אפסים מבלי לשנותו.", "math_expression": "0.3 = 0.300" },
            { "verbal_explanation": "נשווה בין המספרים. הספרה במקום המאיות במספר המחזורי גדולה מהאפס במספר הרגיל, לכן השבר גדול יותר.", "math_expression": "0.333... > 0.300" }
        ],
        "final_answer": "השבר 1/3 גדול יותר"
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר עשרוני מחזורי",
        "question_text": "איך ייראה השבר \\( \\dfrac{8}{9} \\) כשבר עשרוני מחזורי?&rlm;",
        "options": ["0.888...", "0.8", "0.8989...", "0.0888..."],
        "correctAnswer": 0,
        "hint": "כשהמכנה הוא תשע, המונה הוא הספרה שחוזרת על עצמה.",
        "solution_steps": [
            { "verbal_explanation": "נזכור שחלוקה בתשע גורמת לספרת המונה לחזור על עצמה ללא סוף מימין לנקודה.", "math_expression": "\\div 9" },
            { "verbal_explanation": "המונה בתרגיל זה הוא שמונה.", "math_expression": "8" },
            { "verbal_explanation": "לכן, המספר העשרוני יורכב מספרות שמונה רבות שחוזרות על עצמן.", "math_expression": "0.888..." }
        ],
        "final_answer": "0.888..."
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר עשרוני מחזורי",
        "question_text": "אם השבר \\( \\dfrac{1}{6} \\) מתחיל ב- \\( 0.16 \\) והספרה שש ממשיכה לחזור על עצמה, כיצד נרשום זאת?&rlm;",
        "options": ["0.1666...", "0.16", "0.1616...", "0.666..."],
        "correctAnswer": 0,
        "hint": "הספרה אחד מופיעה פעם אחת, ורק השש חוזר על עצמו. שימו את הנקודות בסוף.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את תחילת המספר שכוללת את הספרה אחד שאינה חוזרת ואת הספרה שש.", "math_expression": "0.16" },
            { "verbal_explanation": "מכיוון שרק הספרה שש ממשיכה לחזור, נוסיף עוד כמה שישיות כדי להראות את החוקיות.", "math_expression": "0.1666" },
            { "verbal_explanation": "נוסיף את שלוש הנקודות בסוף כדי להראות שהמספר לא נגמר שם.", "math_expression": "0.1666..." }
        ],
        "final_answer": "0.1666..."
    },
    {
        "topic": "math_5_6",
        "subTopic": "שבר עשרוני מחזורי",
        "question_text": "מה יהיה השבר הפשוט של המספר העשרוני המחזורי הבא: \\( 0.777... \\)?&rlm;",
        "options": ["7/9", "7/10", "77/100", "7/8"],
        "correctAnswer": 0,
        "hint": "מספר שבו ספרה אחת חוזרת על עצמה כל הזמן קשור תמיד לשבר שהמכנה שלו הוא תשע.",
        "solution_steps": [
            { "verbal_explanation": "אנו רואים שהספרה שבע חוזרת על עצמה שוב ושוב בלי הפסקה בתוך השבר.", "math_expression": "0.777..." },
            { "verbal_explanation": "הכלל אומר שספרה בודדת שחוזרת על עצמה נכתבת מעל המספר תשע בשבר פשוט.", "math_expression": "\\dfrac{?}{9}" },
            { "verbal_explanation": "נציב את הספרה שבע במונה ונקבל את התשובה המלאה.", "math_expression": "\\dfrac{7}{9}" }
        ],
        "final_answer": "7/9"
    }
];
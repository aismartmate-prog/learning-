const questionsDB = [
    // ==========================================
    // תת נושא 1: חיבור וחיסור שברים פשוטים (12 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "פתרו את התרגיל הבא וחברו את שני השברים הפשוטים: \\( \\dfrac{1}{2} + \\dfrac{1}{3} \\).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='60' cy='50' r='30' fill='none' stroke='#3b82f6' stroke-width='2'/><path d='M 60 20 A 30 30 0 0 1 60 80 Z' fill='#3b82f6' fill-opacity='0.4'/><text x='95' y='55' font-size='20' font-family='Arial'>+</text><circle cx='140' cy='50' r='30' fill='none' stroke='#ef4444' stroke-width='2'/><path d='M 140 50 L 140 20 A 30 30 0 0 1 166 65 Z' fill='#ef4444' fill-opacity='0.4'/></svg></div>",
        options: ["5 : 6", "2 : 5", "1 : 5", "1 : 6"],
        correctAnswer: 0,
        hint: "כדי לחבר שברים בעלי מכנים שונים, יש למצוא תחילה מכנה משותף. המכנה המשותף הקטן ביותר של 2 ו-3 הוא 6.",
        solution_steps: [
            { verbal_explanation: "כתיבת התרגיל המקורי המכיל שני שברים בעלי מכנים שונים.", math_expression: "\\dfrac{1}{2} + \\dfrac{1}{3}" },
            { verbal_explanation: "מציאת המכנה המשותף הקטן ביותר לשני המספרים (שתיים ושלוש).", math_expression: "2 \\times 3 = 6" },
            { verbal_explanation: "הרחבת השבר הראשון כך שהמכנה שלו יהיה שש (הכפלת המונה והמכנה בשלוש).", math_expression: "\\dfrac{1 \\times 3}{2 \\times 3} = \\dfrac{3}{6}" },
            { verbal_explanation: "הרחבת השבר השני כך שהמכנה שלו יהיה שש (הכפלת המונה והמכנה בשתיים).", math_expression: "\\dfrac{1 \\times 2}{3 \\times 2} = \\dfrac{2}{6}" },
            { verbal_explanation: "חיבור המונים של שני השברים המורחבים, תוך שמירה על המכנה המשותף כפי שהוא.", math_expression: "3 + 2 = 5" },
            { verbal_explanation: "כתיבת התוצאה הסופית של חיבור השברים.", math_expression: "\\dfrac{5}{6}" }
        ],
        final_answer: "5 : 6"
    },
    {
        topic: "math_5_6",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חשבו את תוצאת חיסור השברים הבאה: \\( \\dfrac{3}{4} - \\dfrac{1}{6} \\).&rlm;",
        options: ["7 : 12", "2 : 12", "5 : 12", "1 : 2"],
        correctAnswer: 0,
        hint: "מצאו את המכנה המשותף של 4 ו-6. המכנה המשותף הקטן ביותר הוא 12. הרחיבו את שני השברים למכנה זה ואז חסרו את המונים.",
        solution_steps: [
            { verbal_explanation: "הצגת תרגיל החיסור עם השברים הנתונים.", math_expression: "\\dfrac{3}{4} - \\dfrac{1}{6}" },
            { verbal_explanation: "איתור המכנה המשותף המינימלי עבור המספרים ארבע ושש.", math_expression: "12" },
            { verbal_explanation: "הרחבת השבר הראשון על ידי הכפלת המונה והמכנה בשלוש.", math_expression: "\\dfrac{3 \\times 3}{4 \\times 3} = \\dfrac{9}{12}" },
            { verbal_explanation: "הרחבת השבר השני על ידי הכפלת המונה והמכנה בשתיים.", math_expression: "\\dfrac{1 \\times 2}{6 \\times 2} = \\dfrac{2}{12}" },
            { verbal_explanation: "הצבת השברים החדשים בתרגיל החיסור.", math_expression: "\\dfrac{9}{12} - \\dfrac{2}{12}" },
            { verbal_explanation: "ביצוע פעולת החיסור על המונים לקבלת התשובה המדויקת.", math_expression: "\\dfrac{9 - 2}{12} = \\dfrac{7}{12}" }
        ],
        final_answer: "7 : 12"
    },
    {
        topic: "math_5_6",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חברו את המספרים המעורבים הבאים: \\( 1\\dfrac{1}{2} + 2\\dfrac{1}{4} \\).&rlm;",
        options: ["3 3:4", "3 1:4", "4 1:4", "3 1:2"],
        correctAnswer: 0,
        hint: "ניתן לחבר את השלמים בנפרד ואת השברים בנפרד. הרחיבו את החצי למכנה 4 ואז חברו.",
        solution_steps: [
            { verbal_explanation: "פיצול התרגיל לחיבור השלמים לחוד וחיבור השברים לחוד.", math_expression: "(1 + 2) + (\\dfrac{1}{2} + \\dfrac{1}{4})" },
            { verbal_explanation: "חיבור המספרים השלמים.", math_expression: "1 + 2 = 3" },
            { verbal_explanation: "הכנת השברים לחיבור על ידי מציאת מכנה משותף (ארבע).", math_expression: "\\dfrac{1}{2} = \\dfrac{1 \\times 2}{2 \\times 2} = \\dfrac{2}{4}" },
            { verbal_explanation: "חיבור השברים בעלי המכנה המשותף.", math_expression: "\\dfrac{2}{4} + \\dfrac{1}{4} = \\dfrac{3}{4}" },
            { verbal_explanation: "איחוד השלמים עם השבר שהתקבל למספר מעורב אחד.", math_expression: "3 + \\dfrac{3}{4}" },
            { verbal_explanation: "התוצאה הסופית.", math_expression: "3\\dfrac{3}{4}" }
        ],
        final_answer: "3 3:4"
    },
    {
        topic: "math_5_6",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "פתרו את תרגיל החיסור של המספרים המעורבים: \\( 3\\dfrac{1}{5} - 1\\dfrac{1}{2} \\).&rlm;",
        options: ["1 7:10", "2 1:10", "1 3:10", "2 3:10"],
        correctAnswer: 0,
        hint: "כיוון שהשבר הראשון קטן מהשבר השני (חמישית קטנה מחצי), כדאי להמיר את המספרים המעורבים לשברים מדומים (שבר שהמונה גדול מהמכנה), למצוא מכנה משותף, לחסר, ואז להחזיר למספר מעורב.",
        solution_steps: [
            { verbal_explanation: "המרת המספר המעורב הראשון לשבר מדומה על ידי הכפלת השלם במכנה והוספת המונה.", math_expression: "3\\dfrac{1}{5} = \\dfrac{3 \\times 5 + 1}{5} = \\dfrac{16}{5}" },
            { verbal_explanation: "המרת המספר המעורב השני לשבר מדומה באותה הדרך.", math_expression: "1\\dfrac{1}{2} = \\dfrac{1 \\times 2 + 1}{2} = \\dfrac{3}{2}" },
            { verbal_explanation: "כתיבת התרגיל החדש עם השברים המדומים.", math_expression: "\\dfrac{16}{5} - \\dfrac{3}{2}" },
            { verbal_explanation: "מציאת מכנה משותף לשני השברים (עשר) והרחבתם בהתאם.", math_expression: "\\dfrac{16 \\times 2}{10} - \\dfrac{3 \\times 5}{10} = \\dfrac{32}{10} - \\dfrac{15}{10}" },
            { verbal_explanation: "ביצוע החיסור במונים מעל המכנה המשותף.", math_expression: "\\dfrac{32 - 15}{10} = \\dfrac{17}{10}" },
            { verbal_explanation: "המרת השבר המדומה חזרה למספר מעורב (כמה פעמים עשר נכנס בשבע עשרה).", math_expression: "1\\dfrac{7}{10}" }
        ],
        final_answer: "1 7:10"
    },
    {
        topic: "math_5_6",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חשבו את התוצאה של שרשרת הפעולות הבאה: \\( \\dfrac{5}{8} + \\dfrac{3}{4} - \\dfrac{1}{2} \\).&rlm;",
        options: ["7 : 8", "5 : 8", "1 1:8", "1 : 2"],
        correctAnswer: 0,
        hint: "מצאו מכנה משותף אחד לכל שלושת השברים יחד (8 הוא המכנה המשותף הקטן ביותר). הרחיבו את כל השברים ובצעו את פעולות החיבור והחיסור משמאל לימין.",
        solution_steps: [
            { verbal_explanation: "זיהוי המכנה המשותף הקטן ביותר לכל המספרים שמונה, ארבע ושתיים.", math_expression: "8" },
            { verbal_explanation: "השבר הראשון כבר כתוב עם המכנה הנכון, לכן אין צורך להרחיבו.", math_expression: "\\dfrac{5}{8}" },
            { verbal_explanation: "הרחבת השבר השני למכנה שמונה (הכפלה בשתיים).", math_expression: "\\dfrac{3 \\times 2}{4 \\times 2} = \\dfrac{6}{8}" },
            { verbal_explanation: "הרחבת השבר השלישי למכנה שמונה (הכפלה בארבע).", math_expression: "\\dfrac{1 \\times 4}{2 \\times 4} = \\dfrac{4}{8}" },
            { verbal_explanation: "כתיבת התרגיל המלא עם השברים בעלי המכנה המשותף.", math_expression: "\\dfrac{5}{8} + \\dfrac{6}{8} - \\dfrac{4}{8}" },
            { verbal_explanation: "ביצוע פעולות החשבון על המונים לפי הסדר משמאל לימין.", math_expression: "\\dfrac{5 + 6 - 4}{8} = \\dfrac{11 - 4}{8} = \\dfrac{7}{8}" }
        ],
        final_answer: "7 : 8"
    },
    {
        topic: "math_5_6",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "פתרו את תרגיל החיסור של שבר מתוך מספר שלם: \\( 4 - 1\\dfrac{2}{7} \\).&rlm;",
        options: ["2 5:7", "3 5:7", "2 2:7", "3 2:7"],
        correctAnswer: 0,
        hint: "פרטו את המספר השלם (4) לשלם אחד פחות ועוד שבר השווה לאחת (למשל 3 ועוד 7/7). לאחר מכן חסרו שלמים משלמים ושברים משברים.",
        solution_steps: [
            { verbal_explanation: "המרת המספר השלם הראשון כך שיכיל שבר עם מכנה זהה לשבר אותו אנו מחסרים.", math_expression: "4 = 3 + 1 = 3 + \\dfrac{7}{7} = 3\\dfrac{7}{7}" },
            { verbal_explanation: "כתיבת תרגיל החיסור החדש והנוח לעבודה.", math_expression: "3\\dfrac{7}{7} - 1\\dfrac{2}{7}" },
            { verbal_explanation: "חיסור המספרים השלמים זה מזה.", math_expression: "3 - 1 = 2" },
            { verbal_explanation: "חיסור החלק השברי זה מזה.", math_expression: "\\dfrac{7}{7} - \\dfrac{2}{7} = \\dfrac{5}{7}" },
            { verbal_explanation: "איחוד התוצאות למספר מעורב אחד.", math_expression: "2 + \\dfrac{5}{7}" },
            { verbal_explanation: "קבלת התשובה הסופית.", math_expression: "2\\dfrac{5}{7}" }
        ],
        final_answer: "2 5:7"
    },
    {
        topic: "math_5_6",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חברו את השברים הבאים והציגו את התוצאה כמספר מעורב: \\( \\dfrac{2}{9} + \\dfrac{5}{6} \\).&rlm;",
        options: ["1 1:18", "17 : 18", "1 1:9", "15 : 18"],
        correctAnswer: 0,
        hint: "המכנה המשותף של 9 ו-6 הוא 18. הרחיבו את השברים, חברו את המונים ואז המירו את השבר המדומה שיתקבל למספר מעורב.",
        solution_steps: [
            { verbal_explanation: "מציאת הכפולה המשותפת המינימלית למכנים שש ותשע.", math_expression: "18" },
            { verbal_explanation: "הרחבת השבר הראשון (הכפלה בשתיים).", math_expression: "\\dfrac{2 \\times 2}{9 \\times 2} = \\dfrac{4}{18}" },
            { verbal_explanation: "הרחבת השבר השני (הכפלה בשלוש).", math_expression: "\\dfrac{5 \\times 3}{6 \\times 3} = \\dfrac{15}{18}" },
            { verbal_explanation: "חיבור המונים של שני השברים המורחבים.", math_expression: "\\dfrac{4}{18} + \\dfrac{15}{18} = \\dfrac{19}{18}" },
            { verbal_explanation: "חלוקת המונה במכנה כדי להוציא מספר שלם מתוך השבר המדומה.", math_expression: "19 = 1 \\times 18 + 1" },
            { verbal_explanation: "כתיבת התוצאה כמספר מעורב תקני.", math_expression: "1\\dfrac{1}{18}" }
        ],
        final_answer: "1 1:18"
    },
    {
        topic: "math_5_6",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חשבו: \\( 5\\dfrac{1}{3} - 2\\dfrac{5}{6} \\).&rlm;",
        options: ["2 1:2", "3 1:6", "2 1:6", "3 1:2"],
        correctAnswer: 0,
        hint: "כדי לחסר שבר גדול משבר קטן, כדאי ללוות שלם אחד מהחלק השלם ולהפוך אותו לשבר, או להמיר הכל לשברים מדומים.",
        solution_steps: [
            { verbal_explanation: "הרחבת השבר הראשון כך שיהיה בעל מכנה זהה לשבר השני.", math_expression: "5\\dfrac{1}{3} = 5\\dfrac{1 \\times 2}{3 \\times 2} = 5\\dfrac{2}{6}" },
            { verbal_explanation: "הבנה שלא ניתן לחסר חמש ששיות משתי ששיות, ולכן נלווה שלם אחד מהחמש.", math_expression: "5\\dfrac{2}{6} = 4 + 1 + \\dfrac{2}{6} = 4 + \\dfrac{6}{6} + \\dfrac{2}{6} = 4\\dfrac{8}{6}" },
            { verbal_explanation: "כתיבת תרגיל החיסור החדש המבוסס על ההמרה שעשינו.", math_expression: "4\\dfrac{8}{6} - 2\\dfrac{5}{6}" },
            { verbal_explanation: "חיסור השלמים זה מזה.", math_expression: "4 - 2 = 2" },
            { verbal_explanation: "חיסור השברים זה מזה.", math_expression: "\\dfrac{8}{6} - \\dfrac{5}{6} = \\dfrac{3}{6}" },
            { verbal_explanation: "איחוד התוצאות וצמצום השבר לקבלת הצורה הסופית הפשוטה ביותר.", math_expression: "2\\dfrac{3}{6} = 2\\dfrac{1}{2}" }
        ],
        final_answer: "2 1:2"
    },
    {
        topic: "math_5_6",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "פתרו את שרשרת הפעולות הבאה: \\( \\dfrac{7}{10} - \\dfrac{2}{5} + \\dfrac{1}{2} \\).&rlm;",
        options: ["4 : 5", "3 : 10", "1 : 2", "9 : 10"],
        correctAnswer: 0,
        hint: "המכנה המשותף הקטן ביותר הוא 10. המירו את כל השברים למכנה זה וחשבו משמאל לימין.",
        solution_steps: [
            { verbal_explanation: "קביעת המכנה המשותף לכלל השברים בתרגיל.", math_expression: "10" },
            { verbal_explanation: "השבר הראשון מוכן לעבודה.", math_expression: "\\dfrac{7}{10}" },
            { verbal_explanation: "הרחבת השבר השני להכיל עשיריות במכנה.", math_expression: "\\dfrac{2 \\times 2}{5 \\times 2} = \\dfrac{4}{10}" },
            { verbal_explanation: "הרחבת השבר השלישי להכיל עשיריות.", math_expression: "\\dfrac{1 \\times 5}{2 \\times 5} = \\dfrac{5}{10}" },
            { verbal_explanation: "הרכבת התרגיל כולו באמצעות עשיריות.", math_expression: "\\dfrac{7}{10} - \\dfrac{4}{10} + \\dfrac{5}{10}" },
            { verbal_explanation: "ביצוע פעולות החשבון במונה ברצף משמאל לימין וצמצום התוצאה.", math_expression: "\\dfrac{7 - 4 + 5}{10} = \\dfrac{8}{10} = \\dfrac{4}{5}" }
        ],
        final_answer: "4 : 5"
    },
    {
        topic: "math_5_6",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חברו את המספרים הבאים: \\( 4\\dfrac{3}{8} + 1\\dfrac{5}{12} \\).&rlm;",
        options: ["5 19:24", "5 8:20", "6 1:24", "5 11:24"],
        correctAnswer: 0,
        hint: "מצאו מכנה משותף קטן ביותר עבור 8 ו-12, שהוא 24. הרחיבו את שני השברים וחברו.",
        solution_steps: [
            { verbal_explanation: "איתור המכנה המשותף הקטן ביותר למספרים שמונה ושתים עשרה.", math_expression: "24" },
            { verbal_explanation: "חיבור המספרים השלמים בתרגיל בנפרד.", math_expression: "4 + 1 = 5" },
            { verbal_explanation: "הרחבת השבר הראשון (הכפלה בשלוש).", math_expression: "\\dfrac{3 \\times 3}{8 \\times 3} = \\dfrac{9}{24}" },
            { verbal_explanation: "הרחבת השבר השני (הכפלה בשתיים).", math_expression: "\\dfrac{5 \\times 2}{12 \\times 2} = \\dfrac{10}{24}" },
            { verbal_explanation: "חיבור שני השברים המורחבים.", math_expression: "\\dfrac{9}{24} + \\dfrac{10}{24} = \\dfrac{19}{24}" },
            { verbal_explanation: "חיבור השלמים עם השבר שנוצר לתוצאה אחת מוגמרת.", math_expression: "5\\dfrac{19}{24}" }
        ],
        final_answer: "5 19:24"
    },
    {
        topic: "math_5_6",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "חשבו את ההפרש הבא: \\( 6\\dfrac{1}{4} - 3\\dfrac{5}{8} \\).&rlm;",
        options: ["2 5:8", "3 3:8", "2 3:8", "3 5:8"],
        correctAnswer: 0,
        hint: "הרחיבו תחילה את השבר רבע למונחים של שמיניות (2/8). כיוון ש-2 שמיניות קטנות מ-5 שמיניות, יש 'לפרוט' שלם אחד לשמיניות ואז לחסר.",
        solution_steps: [
            { verbal_explanation: "הרחבת השבר הראשון על מנת להתאים למכנה של השבר השני.", math_expression: "6\\dfrac{1}{4} = 6\\dfrac{1 \\times 2}{4 \\times 2} = 6\\dfrac{2}{8}" },
            { verbal_explanation: "כדי לאפשר את חיסור השברים, נמיר שלם אחד מהמספר שש לשבר המורכב משמיניות.", math_expression: "6\\dfrac{2}{8} = 5 + \\dfrac{8}{8} + \\dfrac{2}{8} = 5\\dfrac{10}{8}" },
            { verbal_explanation: "כתיבת תרגיל החיסור מחדש בעזרת המספרים המותאמים.", math_expression: "5\\dfrac{10}{8} - 3\\dfrac{5}{8}" },
            { verbal_explanation: "חיסור המספרים השלמים.", math_expression: "5 - 3 = 2" },
            { verbal_explanation: "חיסור חלקי השבר.", math_expression: "\\dfrac{10}{8} - \\dfrac{5}{8} = \\dfrac{5}{8}" },
            { verbal_explanation: "איחוד החלק השלם והשבר לתוצאה מורכבת סופית.", math_expression: "2\\dfrac{5}{8}" }
        ],
        final_answer: "2 5:8"
    },
    {
        topic: "math_5_6",
        subTopic: "חיבור וחיסור שברים פשוטים",
        question_text: "רן אכל \\( \\dfrac{1}{3} \\) ממגש פיצה, ודן אכל \\( \\dfrac{1}{4} \\) מאותו המגש. איזה חלק של הפיצה נשאר במגש בסך הכל?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 100 100' style='max-width:150px; width:100%; border-radius:50%; background:#f8fafc; border:2px solid #e2e8f0;'><path d='M 50 50 L 50 0 A 50 50 0 0 1 93.3 25 Z' fill='#ef4444' fill-opacity='0.6'/><path d='M 50 50 L 93.3 25 A 50 50 0 0 1 100 50 L 50 50 Z' fill='#3b82f6' fill-opacity='0.6'/></svg></div>",
        options: ["5 : 12", "7 : 12", "1 : 12", "1 : 2"],
        correctAnswer: 0,
        hint: "מגש הפיצה השלם נחשב למספר 1. ראשית מצאו כמה אכלו רן ודן יחד על ידי חיבור השברים, ואז חסרו את התוצאה מ-1.",
        solution_steps: [
            { verbal_explanation: "חיבור החלקים שנאכלו על ידי שני הילדים.", math_expression: "\\dfrac{1}{3} + \\dfrac{1}{4}" },
            { verbal_explanation: "מציאת מכנה משותף שנים עשר והרחבת השברים בהתאמה.", math_expression: "\\dfrac{1 \\times 4}{3 \\times 4} + \\dfrac{1 \\times 3}{4 \\times 3} = \\dfrac{4}{12} + \\dfrac{3}{12}" },
            { verbal_explanation: "חיבור השברים לאיתור הסך הכולל של הפיצה שנאכלה.", math_expression: "\\dfrac{4 + 3}{12} = \\dfrac{7}{12}" },
            { verbal_explanation: "הגדרת מגש הפיצה המלא כשלם אחד והמרתו לשבר בעל מכנה תואם.", math_expression: "1 = \\dfrac{12}{12}" },
            { verbal_explanation: "חיסור החלק שנאכל מהמגש השלם כדי למצוא את החלק שנותר.", math_expression: "\\dfrac{12}{12} - \\dfrac{7}{12}" },
            { verbal_explanation: "קבלת התוצאה המייצגת את שארית הפיצה במגש.", math_expression: "\\dfrac{5}{12}" }
        ],
        final_answer: "5 : 12"
    },

    // ==========================================
    // תת נושא 2: חישוב ערך האחוז וחישוב האחוז (12 שאלות)
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "כמה הם 20% מתוך 50?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 60' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='10' y='20' width='180' height='20' rx='10' fill='#cbd5e1'/><rect x='10' y='20' width='36' height='20' rx='10' fill='#10b981'/><text x='15' y='15' font-size='10' font-family='Arial'>20%</text><text x='180' y='15' font-size='10' font-family='Arial'>50</text></svg></div>",
        options: ["10", "20", "5", "15"],
        correctAnswer: 0,
        hint: "המירו את האחוז לשבר פשוט (20 חלקי 100 שווים לחמישית), ולאחר מכן הכפילו את הכמות הכוללת (50) בשבר זה.",
        solution_steps: [
            { verbal_explanation: "כתיבת האחוז כשבר עשרוני או פשוט על ידי חלוקתו במאה.", math_expression: "20\\% = \\dfrac{20}{100}" },
            { verbal_explanation: "צמצום השבר על ידי חלוקת המונה והמכנה בעשרים כדי לפשט את החישוב.", math_expression: "\\dfrac{20}{100} = \\dfrac{1}{5}" },
            { verbal_explanation: "הכפלת השבר המצומצם בכמות הכוללת שממנה אנו רוצים למצוא את החלק.", math_expression: "50 \\times \\dfrac{1}{5}" },
            { verbal_explanation: "ביצוע הכפל של מספר שלם בשבר (הכפלת השלם במונה).", math_expression: "\\dfrac{50 \\times 1}{5} = \\dfrac{50}{5}" },
            { verbal_explanation: "ביצוע פעולת החילוק לקבלת הערך המספרי של האחוז.", math_expression: "10" },
            { verbal_explanation: "התוצאה הסופית והמדויקת.", math_expression: "10" }
        ],
        final_answer: "10"
    },
    {
        topic: "math_5_6",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "איזה אחוז מהווים 15 תלמידים מתוך כיתה של 60 תלמידים?&rlm;",
        options: ["25%", "20%", "15%", "30%"],
        correctAnswer: 0,
        hint: "רשמו את החלק מתוך השלם כשבר (15 חלקי 60). צמצמו את השבר ולאחר מכן הרחיבו אותו כך שהמכנה יהיה 100.",
        solution_steps: [
            { verbal_explanation: "כתיבת היחס בין החלק לשלם כשבר פשוט.", math_expression: "\\dfrac{15}{60}" },
            { verbal_explanation: "צמצום השבר על ידי חלוקת המונה והמכנה במספר חמש עשרה.", math_expression: "\\dfrac{15 \\div 15}{60 \\div 15} = \\dfrac{1}{4}" },
            { verbal_explanation: "כדי למצוא אחוז, נרחיב את השבר כך שהמכנה שלו יהיה מאה. נכפיל את המונה והמכנה בעשרים וחמש.", math_expression: "\\dfrac{1 \\times 25}{4 \\times 25} = \\dfrac{25}{100}" },
            { verbal_explanation: "שבר שהמכנה שלו הוא מאה ניתן לכתיבה ישירה כאחוז.", math_expression: "\\dfrac{25}{100} = 25\\%" },
            { verbal_explanation: "השלמת ההמרה לקבלת אחוז מדויק.", math_expression: "25\\%" },
            { verbal_explanation: "אנו רואים שחמש עשרה הם עשרים וחמישה אחוזים מתוך שישים.", math_expression: "25\\%" }
        ],
        final_answer: "25%"
    },
    {
        topic: "math_5_6",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "30% ממספר מסוים הם 12. מהו המספר השלם?&rlm;",
        options: ["40", "36", "60", "50"],
        correctAnswer: 0,
        hint: "המירו את האחוז לשבר. משמעות הנתון היא ששלוש עשיריות מהמספר שוות ל-12. חלקו 12 ב-3 כדי למצוא כמה שווה עשירית אחת, והכפילו ב-10.",
        solution_steps: [
            { verbal_explanation: "המרת האחוז הנתון לשבר המייצג חלק מהשלם.", math_expression: "30\\% = \\dfrac{30}{100} = \\dfrac{3}{10}" },
            { verbal_explanation: "כתיבת המשוואה המייצגת את המצב: החלק כפול המספר השלם שווה לתוצאה.", math_expression: "\\dfrac{3}{10} \\times x = 12" },
            { verbal_explanation: "לשם מציאת המספר השלם, נחלק את התוצאה בשבר, מה ששקול להכפלה בהופכי שלו.", math_expression: "x = 12 \\times \\dfrac{10}{3}" },
            { verbal_explanation: "הכפלת המספר השלם במונה של השבר ההופכי.", math_expression: "x = \\dfrac{120}{3}" },
            { verbal_explanation: "ביצוע פעולת החילוק כדי לגלות את המספר המלא.", math_expression: "x = 40" },
            { verbal_explanation: "המספר השלם אותר בהצלחה.", math_expression: "40" }
        ],
        final_answer: "40"
    },
    {
        topic: "math_5_6",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "כמה הם 5% מתוך 200?&rlm;",
        options: ["10", "5", "20", "15"],
        correctAnswer: 0,
        hint: "אחוז אחד מתוך 200 שווה ל-2 (מחלקים 200 ב-100). כדי למצוא חמישה אחוזים, הכפילו את הערך של אחוז אחד ב-5.",
        solution_steps: [
            { verbal_explanation: "הבנת משמעות האחוז כחלוקת השלם למאה חלקים שווים.", math_expression: "1\\% = \\dfrac{200}{100} = 2" },
            { verbal_explanation: "כדי למצוא את הערך של חמישה אחוזים, נכפיל את הערך של אחוז אחד בחמש.", math_expression: "5\\% = 5 \\times 2" },
            { verbal_explanation: "ביצוע פעולת הכפל הפשוטה.", math_expression: "5 \\times 2 = 10" },
            { verbal_explanation: "דרך חלופית: כתיבת האחוז כשבר והכפלה בשלם.", math_expression: "\\dfrac{5}{100} \\times 200" },
            { verbal_explanation: "צמצום האפסים (חילוק במאה) המפשט את התרגיל משמעותית.", math_expression: "5 \\times 2 = 10" },
            { verbal_explanation: "התוצאה זהה בשתי הדרכים ומוחלטת.", math_expression: "10" }
        ],
        final_answer: "10"
    },
    {
        topic: "math_5_6",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "איזה אחוז מהווים 25 מתוך 125?&rlm;",
        options: ["20%", "25%", "15%", "10%"],
        correctAnswer: 0,
        hint: "כתבו את הנתונים בצורת שבר (25 חלקי 125) ונסו לצמצם אותו לשבר יסודי קטן יותר. איזה אחוז מייצג השבר שהתקבל?",
        solution_steps: [
            { verbal_explanation: "בניית שבר המייצג את החלק המבוקש מתוך השלם הנתון בבעיה.", math_expression: "\\dfrac{25}{125}" },
            { verbal_explanation: "צמצום השבר על ידי חלוקת המונה והמכנה במספר חמש עשרים.", math_expression: "\\dfrac{25 \\div 25}{125 \\div 25} = \\dfrac{1}{5}" },
            { verbal_explanation: "כדי לגלות איזה אחוז מייצגת חמישית אחת, נרחיב את השבר למכנה של מאה.", math_expression: "\\dfrac{1 \\times 20}{5 \\times 20} = \\dfrac{20}{100}" },
            { verbal_explanation: "שבר עשרוני בעל מכנה מאה מתורגם ישירות לאחוז.", math_expression: "\\dfrac{20}{100} = 20\\%" },
            { verbal_explanation: "הצגת תוצאת האחוזים הנדרשת.", math_expression: "20\\%" },
            { verbal_explanation: "הסבר הושלם ללא תוספות.", math_expression: "20\\%" }
        ],
        final_answer: "20%"
    },
    {
        topic: "math_5_6",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "בזמן מכירת סוף עונה ניתנה הנחה של 25% על חולצה שמחירה המקורי היה 80 שקלים. מהו סכום ההנחה בשקלים?&rlm;",
        options: ["20", "25", "60", "15"],
        correctAnswer: 0,
        hint: "האחוז 25% מקביל לשבר פשוט ידוע (רבע). כדי למצוא את ההנחה, חשבו כמה הם רבע מתוך 80.",
        solution_steps: [
            { verbal_explanation: "המרת אחוז ההנחה לשבר פשוט על ידי חלוקה למאה והשמטת סמל האחוז.", math_expression: "25\\% = \\dfrac{25}{100}" },
            { verbal_explanation: "צמצום השבר לצורה פשוטה יותר המקלה על החישוב בהמשך הדרך.", math_expression: "\\dfrac{25}{100} = \\dfrac{1}{4}" },
            { verbal_explanation: "בניית התרגיל לחישוב סכום ההנחה: הכפלת המחיר המקורי בשבר שגילינו.", math_expression: "80 \\times \\dfrac{1}{4}" },
            { verbal_explanation: "הכפלת המספר השלם במונה וחלוקה במכנה.", math_expression: "\\dfrac{80 \\times 1}{4} = \\dfrac{80}{4}" },
            { verbal_explanation: "ביצוע פעולת החילוק לקבלת סכום ההנחה הסופי במטבעות.", math_expression: "20" },
            { verbal_explanation: "סיכום הממצאים: סכום ההנחה הוא עשרים.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "math_5_6",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "מחיר של חולצה היה 120 שקלים. בעקבות עליית מחירים, המחיר עלה ב-10%. מהו מחירה החדש של החולצה?&rlm;",
        options: ["132", "130", "110", "122"],
        correctAnswer: 0,
        hint: "חשבו קודם כל כמה הם 10% מתוך 120 (עשירית מהמחיר). לאחר מכן, הוסיפו את הסכום הזה למחיר המקורי של החולצה.",
        solution_steps: [
            { verbal_explanation: "חישוב הערך המייצג עשרה אחוזים מתוך המחיר המקורי. עשרה אחוזים הם למעשה עשירית מהשלם.", math_expression: "10\\% = \\dfrac{10}{100} = \\dfrac{1}{10}" },
            { verbal_explanation: "הכפלת המחיר המקורי בשבר המייצג את התוספת כדי לגלות את סכום ההתייקרות.", math_expression: "120 \\times \\dfrac{1}{10}" },
            { verbal_explanation: "חלוקת המספר בעשר מסירה אפס אחד בסוף המספר.", math_expression: "\\dfrac{120}{10} = 12" },
            { verbal_explanation: "סכום ההתייקרות הוא שנים עשר שקלים. כעת נוסיף זאת למחיר ההתחלתי.", math_expression: "120 + 12" },
            { verbal_explanation: "ביצוע פעולת החיבור לקבלת המחיר החדש לאחר העלייה.", math_expression: "132" },
            { verbal_explanation: "המחיר החדש הוא מאה שלושים ושניים שקלים.", math_expression: "132" }
        ],
        final_answer: "132"
    },
    {
        topic: "math_5_6",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "איזה אחוז מהווים 40 תלמידים מתוך בית ספר שבו לומדים 200 תלמידים?&rlm;",
        options: ["20%", "40%", "25%", "5%"],
        correctAnswer: 0,
        hint: "כתבו שבר המייצג את היחס בין 40 ל-200. כעת, נסו להפוך את המכנה ל-100 על ידי חלוקה מתאימה.",
        solution_steps: [
            { verbal_explanation: "הצגת הנתונים כשבר המבטא את החלק מתוך השלם.", math_expression: "\\dfrac{40}{200}" },
            { verbal_explanation: "כדי להגיע למכנה של מאה המייצג אחוזים, נחלק את המונה ואת המכנה במספר שתיים.", math_expression: "\\dfrac{40 \\div 2}{200 \\div 2}" },
            { verbal_explanation: "ביצוע פעולות החילוק לקבלת השבר המצומצם הרצוי.", math_expression: "\\dfrac{20}{100}" },
            { verbal_explanation: "שבר בעל מכנה מאה שווה לאחוז המופיע במונה שלו באופן ישיר.", math_expression: "20\\%" },
            { verbal_explanation: "כתיבת התוצאה הסופית והברורה.", math_expression: "20\\%" },
            { verbal_explanation: "אכן כך.", math_expression: "20\\%" }
        ],
        final_answer: "20%"
    },
    {
        topic: "math_5_6",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "כמה הם 150% מתוך 40?&rlm;",
        options: ["60", "150", "20", "100"],
        correctAnswer: 0,
        hint: "אחוז הגדול מ-100 משמעותו שהתוצאה תהיה גדולה מהמספר המקורי. 150% שווים למספר עצמו (100%) פלוס חצי ממנו (50%).",
        solution_steps: [
            { verbal_explanation: "פירוק האחוז לשני חלקים שקלים יותר לחישוב בראש: השלם עצמו ומחצית ממנו.", math_expression: "150\\% = 100\\% + 50\\%" },
            { verbal_explanation: "מאה אחוז מתוך ארבעים הם המספר עצמו ללא שום שינוי.", math_expression: "100\\% \\times 40 = 40" },
            { verbal_explanation: "חמישים אחוזים הם בדיוק מחצית מהשלם שלנו.", math_expression: "50\\% \\times 40 = 20" },
            { verbal_explanation: "חיבור שני החלקים יחדיו כדי להגיע לאחוז המורכב שהתבקש בשאלה.", math_expression: "40 + 20 = 60" },
            { verbal_explanation: "דרך חלופית: המרת האחוז לשבר מעורב והכפלה.", math_expression: "\\dfrac{150}{100} \\times 40 = 1.5 \\times 40 = 60" },
            { verbal_explanation: "התוצאה זהה בשתי הדרכים.", math_expression: "60" }
        ],
        final_answer: "60"
    },
    {
        topic: "math_5_6",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "75% ממספר כלשהו הם 60. מהו אותו מספר שלם?&rlm;",
        options: ["80", "100", "75", "45"],
        correctAnswer: 0,
        hint: "האחוז 75% שווה ל-3/4. אם שלושה רבעים שווים ל-60, חלקו 60 ב-3 כדי למצוא כמה שווה רבע אחד, והכפילו ב-4.",
        solution_steps: [
            { verbal_explanation: "המרת האחוז הנתון לשבר פשוט המוכר לנו היטב.", math_expression: "75\\% = \\dfrac{75}{100} = \\dfrac{3}{4}" },
            { verbal_explanation: "בניית משוואה המראה כי השבר כפול השלם הנעלם שווה לתוצאה הידועה לנו.", math_expression: "\\dfrac{3}{4} \\times x = 60" },
            { verbal_explanation: "כדי למצוא את הנעלם, נחלק את התוצאה בשבר, שזה כמו להכפיל בשבר ההופכי לו.", math_expression: "x = 60 \\times \\dfrac{4}{3}" },
            { verbal_explanation: "הכפלת המספר השלם במונה של השבר ההופכי.", math_expression: "x = \\dfrac{60 \\times 4}{3} = \\dfrac{240}{3}" },
            { verbal_explanation: "ביצוע פעולת החילוק לקבלת המספר השלם והמלא המהווה את התשובה.", math_expression: "x = 80" },
            { verbal_explanation: "הצגת התשובה החותמת את התרגיל.", math_expression: "80" }
        ],
        final_answer: "80"
    },
    {
        topic: "math_5_6",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "בכיתה ישנם 30 תלמידים. ביום גשום אחד נעדרו 20% מתלמידי הכיתה. כמה תלמידים כן הגיעו לכיתה באותו יום?&rlm;",
        options: ["24", "6", "20", "28"],
        correctAnswer: 0,
        hint: "חשבו קודם איזה אחוז מהתלמידים הגיעו לכיתה (השלם הוא 100%, פחות הנעדרים). אחר כך חשבו את האחוז הזה מתוך 30.",
        solution_steps: [
            { verbal_explanation: "מציאת אחוז התלמידים שהגיעו על ידי הפחתת אחוז הנעדרים מהשלם (מאה אחוז).", math_expression: "100\\% - 20\\% = 80\\%" },
            { verbal_explanation: "בניית התרגיל לחישוב כמות התלמידים שהגיעו בפועל על ידי הכפלת סך התלמידים באחוז הנוכחות.", math_expression: "30 \\times 80\\%" },
            { verbal_explanation: "המרת האחוז לשבר לשם חישוב קל ונוח יותר בכתב.", math_expression: "30 \\times \\dfrac{80}{100}" },
            { verbal_explanation: "הכפלת השלם במונה של השבר העשרוני.", math_expression: "\\dfrac{30 \\times 80}{100}" },
            { verbal_explanation: "ביצוע הכפל במונה.", math_expression: "\\dfrac{2400}{100}" },
            { verbal_explanation: "צמצום האפסים בחלוקה למאה כדי לקבל את מספר התלמידים שהגיעו.", math_expression: "24" }
        ],
        final_answer: "24"
    },
    {
        topic: "math_5_6",
        subTopic: "חישוב ערך האחוז וחישוב האחוז",
        question_text: "משחק מחשב נמכר בהנחה של 50 שקלים. ידוע שמחירו המקורי של המשחק היה 200 שקלים. מהו אחוז ההנחה שניתן על המשחק?&rlm;",
        options: ["25%", "20%", "50%", "30%"],
        correctAnswer: 0,
        hint: "כתבו שבר שבו המונה הוא סכום ההנחה והמכנה הוא המחיר המקורי. צמצמו את השבר או הפכו את המכנה ל-100 כדי לגלות את האחוז.",
        solution_steps: [
            { verbal_explanation: "יצירת שבר המבטא את היחס בין סכום ההנחה שניתנה למחיר ההתחלתי השלם.", math_expression: "\\dfrac{50}{200}" },
            { verbal_explanation: "כדי להגיע למכנה של מאה המייצג אחוזים נחלק את המונה ואת המכנה בשתיים.", math_expression: "\\dfrac{50 \\div 2}{200 \\div 2}" },
            { verbal_explanation: "קבלת השבר בעל המכנה העשרוני המדויק.", math_expression: "\\dfrac{25}{100}" },
            { verbal_explanation: "שבר שבו המכנה שווה מאה מקביל ישירות למספר האחוזים המבוקש בבעיה הצרכנית הזו.", math_expression: "25\\%" },
            { verbal_explanation: "דרך חלופית: צמצום ישיר לרבע, ורבע ידוע כעשרים וחמישה אחוזים במדויק.", math_expression: "\\dfrac{1}{4} = 25\\%" },
            { verbal_explanation: "התשובה מוכנה.", math_expression: "25\\%" }
        ],
        final_answer: "25%"
    },
    // ==========================================
    // תת נושא: מבוא (12 שאלות) - כיתות ה'-ו'
    // ==========================================

    {
        topic: "math_5_6",
        subTopic: "מבוא",
        question_text: "איזה שבר מתאר את החלק הצבוע בכחול מתוך העיגול כולו?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 100 100' style='max-width:150px; width:100%; border-radius:50%; background:#f8fafc; border:2px solid #e2e8f0;'><path d='M 50 50 L 50 0 A 50 50 0 0 1 100 50 Z' fill='#3b82f6' fill-opacity='0.8' stroke='#1e293b' stroke-width='1'/><path d='M 50 50 L 100 50 A 50 50 0 0 1 50 100 Z' fill='#3b82f6' fill-opacity='0.8' stroke='#1e293b' stroke-width='1'/><path d='M 50 50 L 50 100 A 50 50 0 0 1 0 50 Z' fill='#3b82f6' fill-opacity='0.8' stroke='#1e293b' stroke-width='1'/><path d='M 50 50 L 0 50 A 50 50 0 0 1 50 0 Z' fill='none' stroke='#1e293b' stroke-width='1'/></svg></div>",
        options: ["3 : 4", "1 : 4", "3 : 8", "1 : 3"],
        correctAnswer: 0,
        hint: "ספרו לכמה חלקים שווים מחולק העיגול כולו (זה יהיה המכנה). לאחר מכן, ספרו כמה חלקים צבועים בכחול (זה יהיה המונה).",
        solution_steps: [
            { verbal_explanation: "ספירת סך כל החלקים השווים שמרכיבים את השלם המלא באיור הנתון.", math_expression: "4" },
            { verbal_explanation: "קביעת המכנה של השבר על פי מספר החלקים הכולל שמצאנו כעת.", math_expression: "\\dfrac{x}{4}" },
            { verbal_explanation: "ספירת החלקים הצבועים בלבד המייצגים את המונה של השבר שלנו.", math_expression: "3" },
            { verbal_explanation: "כתיבת המונה החיובי שמצאנו מעל קו השבר והמכנה הקיים.", math_expression: "\\dfrac{3}{4}" },
            { verbal_explanation: "הצגת השבר המלא המייצג את החלק הצבוע מתוך השלם כולו באופן מדויק.", math_expression: "\\dfrac{3}{4}" }
        ],
        final_answer: "3 : 4"
    },
    {
        topic: "math_5_6",
        subTopic: "מבוא",
        question_text: "איזה מהשברים הבאים שווה בערכו לשבר \\( \\dfrac{2}{3} \\)?&rlm;",
        options: ["8 : 12", "4 : 9", "6 : 8", "5 : 6"],
        correctAnswer: 0,
        hint: "כדי למצוא שבר שווה ערך, יש להרחיב את השבר המקורי על ידי הכפלת המונה והמכנה באותו מספר בדיוק.",
        solution_steps: [
            { verbal_explanation: "כתיבת השבר המקורי הנתון בשאלה לבדיקה וחקירה יסודית.", math_expression: "\\dfrac{2}{3}" },
            { verbal_explanation: "בדיקת אפשרות הרחבה: הכפלת המונה והמכנה יחד במספר ארבע.", math_expression: "\\dfrac{2 \\times 4}{3 \\times 4}" },
            { verbal_explanation: "ביצוע פעולת הכפל בשורת המונה בלבד.", math_expression: "2 \\times 4 = 8" },
            { verbal_explanation: "ביצוע פעולת הכפל בשורת המכנה התחתון בהתאמה מוחלטת.", math_expression: "3 \\times 4 = 12" },
            { verbal_explanation: "הרכבת השבר החדש והמורחב שנוצר כתוצאה מפעולת החשבון.", math_expression: "\\dfrac{8}{12}" },
            { verbal_explanation: "קביעה כי השבר שהתקבל זהה לחלוטין בערכו לשבר המקורי שניתן בתרגיל.", math_expression: "\\dfrac{2}{3} = \\dfrac{8}{12}" }
        ],
        final_answer: "8 : 12"
    },
    {
        topic: "math_5_6",
        subTopic: "מבוא",
        question_text: "הפכו את המספר המעורב \\( 4\\dfrac{2}{5} \\) לשבר מדומה (שבר שבו המונה גדול מהמכנה).&rlm;",
        options: ["22 : 5", "11 : 5", "20 : 5", "8 : 5"],
        correctAnswer: 0,
        hint: "כדי להפוך מספר מעורב לשבר מדומה, מכפילים את המספר השלם במכנה, מוסיפים את המונה הקיים, וכותבים את התוצאה מעל המכנה המקורי.",
        solution_steps: [
            { verbal_explanation: "הכפלת החלק השלם של המספר במכנה של השבר המצורף אליו לאיתור הכמות המלאה.", math_expression: "4 \\times 5 = 20" },
            { verbal_explanation: "הוספת המונה המקורי של השבר לתוצאת הכפל שהתקבלה כרגע.", math_expression: "20 + 2 = 22" },
            { verbal_explanation: "כתיבת התוצאה החדשה מעל המכנה המקורי שנותר תמיד ללא שום שינוי.", math_expression: "\\dfrac{22}{5}" },
            { verbal_explanation: "קבלת השבר המדומה הסופי והמוחלט התואם לאפשרויות בתרגיל.", math_expression: "\\dfrac{22}{5}" }
        ],
        final_answer: "22 : 5"
    },
    {
        topic: "math_5_6",
        subTopic: "מבוא",
        question_text: "הפכו את השבר המדומה \\( \\dfrac{17}{4} \\) למספר מעורב (המכיל שלמים ושבר).&rlm;",
        options: ["4 1:4", "3 3:4", "4 3:4", "4 1:2"],
        correctAnswer: 0,
        hint: "בדקו כמה פעמים המכנה (4) נכנס בתוך המונה (17) בשלמותו. השארית שתיוותר היא המונה החדש של השבר הפשוט ליד השלם.",
        solution_steps: [
            { verbal_explanation: "חלוקת המונה במכנה למציאת מספר הפעמים השלם שהוא נכנס בו במדויק.", math_expression: "17 \\div 4 = 4" },
            { verbal_explanation: "חישוב השארית שנותרה לאחר החלוקה לשלמים שביצענו הרגע.", math_expression: "17 - (4 \\times 4) = 1" },
            { verbal_explanation: "כתיבת השלמים שמצאנו לצד השארית הכתובה כעת מעל המכנה המקורי.", math_expression: "4\\dfrac{1}{4}" },
            { verbal_explanation: "הצגת המספר המעורב בצורתו התקנית והברורה לקריאה והבנה.", math_expression: "\\dfrac{17}{4} = 4\\dfrac{1}{4}" }
        ],
        final_answer: "4 1:4"
    },
    {
        topic: "math_5_6",
        subTopic: "מבוא",
        question_text: "איזה שבר מבין השניים גדול יותר מבחינה כמותית: \\( \\dfrac{5}{9} \\) או \\( \\dfrac{7}{9} \\)?&rlm;",
        options: ["7 : 9", "5 : 9", "הם שווים בערכם", "לא ניתן לדעת מנתונים אלו"],
        correctAnswer: 0,
        hint: "כאשר המכנים שווים זה לזה, שני השברים מחולקים לאותה כמות של חלקים בדיוק. לכן, השבר בעל המונה הגדול יותר הוא המנצח.",
        solution_steps: [
            { verbal_explanation: "בדיקת המכנים של שני השברים כדי לוודא שהם אכן זהים ומאפשרים השוואה ישירה לחלוטין.", math_expression: "9 = 9" },
            { verbal_explanation: "כאשר המכנים זהים לגמרי, אנו משווים אך ורק את המונים העליונים של השברים.", math_expression: "7 > 5" },
            { verbal_explanation: "הסקת מסקנה מתבקשת: השבר שהמונה שלו גדול יותר מייצג בהכרח כמות גדולה יותר מתוך השלם.", math_expression: "\\dfrac{7}{9} > \\dfrac{5}{9}" },
            { verbal_explanation: "התשובה מתגבשת באופן ברור ומוחלט.", math_expression: "\\dfrac{7}{9}" }
        ],
        final_answer: "7 : 9"
    },
    {
        topic: "math_5_6",
        subTopic: "מבוא",
        question_text: "איזה שבר מבין השניים גדול יותר מבחינה כמותית: \\( \\dfrac{3}{7} \\) או \\( \\dfrac{3}{5} \\)?&rlm;",
        options: ["3 : 5", "3 : 7", "הם שווים בערכם", "לא ניתן לדעת מנתונים אלו"],
        correctAnswer: 0,
        hint: "כאשר המונים שווים, אנו בוחנים את המכנים. מכנה גדול יותר אומר שהשלם חולק ליותר חלקים, ולכן כל חלק בנפרד הוא קטן יותר.",
        solution_steps: [
            { verbal_explanation: "בדיקת המונים של שני השברים כדי לוודא שהם אכן זהים לחלוטין לצורך חקירה מהירה.", math_expression: "3 = 3" },
            { verbal_explanation: "כאשר המונים שווים, השבר בעל המכנה הקטן יותר הוא השבר הגדול יותר מבחינה כמותית מאחר וחלקיו גדולים יותר.", math_expression: "5 < 7" },
            { verbal_explanation: "חלוקת שלם כלשהו לחמישה חלקים בלבד, יוצרת חתיכות גדולות הרבה יותר מאשר חלוקתו לשבעה חלקים.", math_expression: "\\dfrac{1}{5} > \\dfrac{1}{7}" },
            { verbal_explanation: "מכאן נובע בבירור כי שלושה חלקים של חמישית גדולים משלושה חלקים של שביעית.", math_expression: "\\dfrac{3}{5} > \\dfrac{3}{7}" }
        ],
        final_answer: "3 : 5"
    },
    {
        topic: "math_5_6",
        subTopic: "מבוא",
        question_text: "סמנו את הסימן הגיאומטרי המתאים בין שני השברים הבאים: \\( \\dfrac{3}{4} \\quad \\_\\_\\_ \\quad \\dfrac{5}{6} \\).&rlm;",
        options: ["<", ">", "=", "≤"],
        correctAnswer: 0,
        hint: "מכיוון שהמונים והמכנים שונים לחלוטין, עליכם להביא את השברים למכנה משותף כלשהו כדי להשוות ביניהם. המכנה המשותף הקטן של 4 ו-6 הוא 12.",
        solution_steps: [
            { verbal_explanation: "מציאת מכנה משותף יעיל למספרים ארבע ושש לצורך ביצוע השוואה הוגנת ונכונה.", math_expression: "12" },
            { verbal_explanation: "הרחבת השבר הראשון (שלושה רבעים) על ידי הכפלת המונה והמכנה בשלוש במקביל.", math_expression: "\\dfrac{3 \\times 3}{4 \\times 3} = \\dfrac{9}{12}" },
            { verbal_explanation: "הרחבת השבר השני (חמש ששיות) על ידי הכפלת המונה והמכנה שלו בשניים.", math_expression: "\\dfrac{5 \\times 2}{6 \\times 2} = \\dfrac{10}{12}" },
            { verbal_explanation: "השוואה אובייקטיבית בין המונים החדשים לאחר שהמכנים הושוו לחלוטין.", math_expression: "9 < 10" },
            { verbal_explanation: "הצבת סימן אי השוויון המתאים המעיד על כך שהשבר השני גדול בערכו מן הראשון.", math_expression: "\\dfrac{9}{12} < \\dfrac{10}{12} \\Rightarrow \\dfrac{3}{4} < \\dfrac{5}{6}" }
        ],
        final_answer: "<"
    },
    {
        topic: "math_5_6",
        subTopic: "מבוא",
        question_text: "כמה הם \\( \\dfrac{2}{5} \\) מתוך קבוצה של 20 תפוחים?&rlm;",
        options: ["8", "10", "4", "12"],
        correctAnswer: 0,
        hint: "כדי למצוא חלק מכמות שלמה, תחילה חלקו את הכמות הכוללת במכנה (כדי לדעת כמה שווה חמישית אחת), ולאחר מכן הכפילו את התוצאה במונה.",
        solution_steps: [
            { verbal_explanation: "כתיבת התרגיל החשבוני לחישוב החלק הנדרש מתוך הכמות השלמה הנתונה לנו.", math_expression: "20 \\times \\dfrac{2}{5}" },
            { verbal_explanation: "חלוקת הכמות הכוללת במכנה של השבר כדי למצוא את הערך של יחידת שבר אחת ויחידה (חמישית).", math_expression: "20 \\div 5 = 4" },
            { verbal_explanation: "הכפלת הערך של יחידה אחת במונה של השבר המבוקש בתרגיל כדי להשלים את הכמות.", math_expression: "4 \\times 2 = 8" },
            { verbal_explanation: "קבלת הכמות המדויקת והסופית של התפוחים מתוך השלם.", math_expression: "8" }
        ],
        final_answer: "8"
    },
    {
        topic: "math_5_6",
        subTopic: "מבוא",
        question_text: "איזה שבר פשוט ממוקם בדיוק באמצע הדרך בין 0 ל-1 על ציר המספרים?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 60' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='30' x2='180' y2='30' stroke='#94a3b8' stroke-width='2'/><line x1='20' y1='25' x2='20' y2='35' stroke='#1e293b' stroke-width='2'/><line x1='180' y1='25' x2='180' y2='35' stroke='#1e293b' stroke-width='2'/><line x1='100' y1='25' x2='100' y2='35' stroke='#ef4444' stroke-width='2'/><text x='15' y='50' font-size='12' font-family='Arial'>0</text><text x='175' y='50' font-size='12' font-family='Arial'>1</text><text x='95' y='20' font-size='16' font-family='Arial' fill='#ef4444'>?</text></svg></div>",
        options: ["1 : 2", "1 : 4", "2 : 3", "3 : 4"],
        correctAnswer: 0,
        hint: "הנקודה הנמצאת בדיוק באמצע הדרך מחלקת את השלם לשני חלקים שווים לחלוטין. שבר שמייצג חלוקה לשניים נקרא חצי.",
        solution_steps: [
            { verbal_explanation: "הגדרת המרחק המלא והרציף שבין אפס לאחת כשלם אחד במערכת המספרים.", math_expression: "1" },
            { verbal_explanation: "חלוקת השלם לשני חלקים שווים זה לזה כדי למצוא את אמצע הדרך בקו ישר.", math_expression: "1 \\div 2" },
            { verbal_explanation: "כתיבת פעולת החילוק בתור שבר פשוט, קריא ותקני לשימוש במתמטיקה.", math_expression: "\\dfrac{1}{2}" },
            { verbal_explanation: "אימות כי המרחק המוחלט מאפס לחצי שווה למרחק הקיים מחצי לאחת.", math_expression: "\\dfrac{1}{2} - 0 = 1 - \\dfrac{1}{2}" },
            { verbal_explanation: "הסקת מסקנה כי הנקודה האמצעית על הציר היא אכן חצי.", math_expression: "\\dfrac{1}{2}" }
        ],
        final_answer: "1 : 2"
    },
    {
        topic: "math_5_6",
        subTopic: "מבוא",
        question_text: "הרחיבו את השבר \\( \\dfrac{3}{8} \\) כך שהמכנה החדש שלו יהיה 24. מה יהיה הערך של המונה החדש לאחר ביצוע ההרחבה?&rlm;",
        options: ["9", "6", "12", "15"],
        correctAnswer: 0,
        hint: "כדי להגיע במכנה מ-8 ל-24, עליכם להכפיל ב-3. עליכם להכפיל גם את המונה באותו מספר בדיוק כדי לשמור על ערך השבר המקורי ללא שינוי.",
        solution_steps: [
            { verbal_explanation: "כתיבת המשוואה המייצגת את תהליך הרחבת השבר למכנה המבוקש בשאלה.", math_expression: "\\dfrac{3}{8} = \\dfrac{x}{24}" },
            { verbal_explanation: "בדיקת המספר שבו הוכפל המכנה כדי להגיע מעשרים וארבע לשמונה.", math_expression: "24 \\div 8 = 3" },
            { verbal_explanation: "הכפלת המונה של השבר המקורי באותו מספר בדיוק כדי לשמור על יחס קבוע ותקין.", math_expression: "3 \\times 3 = 9" },
            { verbal_explanation: "כתיבת השבר המלא והמורחב המציג את המונה החדש שהתקבל בפעולה.", math_expression: "\\dfrac{9}{24}" },
            { verbal_explanation: "זיהוי כי המונה החדש שהתבקשנו למצוא הוא אכן תשע.", math_expression: "x = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "math_5_6",
        subTopic: "מבוא",
        question_text: "צמצמו את השבר \\( \\dfrac{18}{24} \\) לצורתו הפשוטה והמצומצמת ביותר האפשרית.&rlm;",
        options: ["3 : 4", "6 : 8", "9 : 12", "2 : 3"],
        correctAnswer: 0,
        hint: "חפשו את המספר הגדול ביותר שמתחלק גם ב-18 וגם ב-24 ללא שום שארית (המחלק המשותף הגדול ביותר הוא 6).",
        solution_steps: [
            { verbal_explanation: "בחינת השבר המקורי הנתון בשאלה לפני תחילת תהליך הצמצום הנדרש מאיתנו.", math_expression: "\\dfrac{18}{24}" },
            { verbal_explanation: "מציאת המספר השלם והגדול ביותר שמחלק גם את שמונה עשרה וגם את עשרים וארבע.", math_expression: "6" },
            { verbal_explanation: "חלוקת מונה השבר במספר המחלק המשותף שמצאנו כעת.", math_expression: "18 \\div 6 = 3" },
            { verbal_explanation: "חלוקת מכנה השבר באותו המספר בדיוק במקביל ובהתאמה מלאה.", math_expression: "24 \\div 6 = 4" },
            { verbal_explanation: "הרכבת השבר החדש והמצומצם שאינו ניתן לחלוקה נוספת במספרים שלמים וטהורים.", math_expression: "\\dfrac{3}{4}" }
        ],
        final_answer: "3 : 4"
    },
    {
        topic: "math_5_6",
        subTopic: "מבוא",
        question_text: "לדני היו 30 שקלים. הוא הוציא בדיוק \\( \\dfrac{1}{6} \\) מכספו על קניית גלידה מתוקה. כמה כסף נשאר לדני בארנק לאחר ביצוע הקנייה?&rlm;",
        options: ["25", "5", "20", "15"],
        correctAnswer: 0,
        hint: "תחילה, חשבו כמה הם שישית מתוך 30 שקלים (זהו הסכום שדני הוציא מחשבונו). לאחר מכן, חסרו סכום זה מסך כל הכסף שהיה לו בהתחלה.",
        solution_steps: [
            { verbal_explanation: "יצירת התרגיל לחישוב הסכום המדויק שדני שילם על הגלידה שקנה.", math_expression: "30 \\times \\dfrac{1}{6}" },
            { verbal_explanation: "חלוקת הסכום הכולל בשש כדי לברר כמה שווה יחידת שישית אחת מתוכו.", math_expression: "30 \\div 6 = 5" },
            { verbal_explanation: "הכפלת התוצאה במונה כדי לאמת את ההוצאה המלאה של הקנייה.", math_expression: "5 \\times 1 = 5" },
            { verbal_explanation: "חיסור סכום ההוצאה מסך הכסף שהיה לדני בתחילה כדי לגלות את העודף בארנק.", math_expression: "30 - 5 = 25" },
            { verbal_explanation: "קבלת הסכום המלא והסופי שנותר ברשותו.", math_expression: "25" }
        ],
        final_answer: "25"
    }
];
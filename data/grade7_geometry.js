const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: שטח והיקף מלבן (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "Low",
        "question_text": "נתון מלבן שאורכו 12 ס\"מ ורוחבו 5 ס\"מ. מהו <strong>היקף</strong> המלבן?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='90'><rect x='40' y='20' width='100' height='50' fill='#fdfbf7' stroke='#b09151' stroke-width='3'/><text x='90' y='15' font-family='Heebo' font-size='14' text-anchor='middle'>12</text><text x='25' y='50' font-family='Heebo' font-size='14' text-anchor='middle'>5</text></svg></div>",
        "hint": "היקף מלבן הוא סכום כל צלעותיו. זכרו שיש שתי צלעות מכל אורך.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחה: פעמיים (אורך + רוחב).", "math_expression": "2 × (12 + 5)" },
            { "verbal_explanation": "נחשב קודם את הסכום שבתוך הסוגריים.", "math_expression": "12 + 5 = 17" },
            { "verbal_explanation": "נכפיל את התוצאה פי 2.", "math_expression": "2 × 17 = 34" }
        ],
        "final_answer": "34 ס\"מ",
        "options": ["17 ס\"מ", "34 ס\"מ", "60 ס\"מ", "24 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "Medium",
        "question_text": "היקף של מלבן הוא 40 ס\"מ. אם אורך המלבן הוא 14 ס\"מ, מהו <strong>שטח</strong> המלבן?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='80'><rect x='40' y='20' width='120' height='40' fill='#f8fafc' stroke='#1e293b' stroke-width='2' stroke-dasharray='5'/><text x='100' y='45' font-family='Heebo' font-size='14' text-anchor='middle'>P = 40</text><text x='100' y='15' font-family='Heebo' font-size='14' text-anchor='middle'>14</text><text x='20' y='45' font-family='Heebo' font-size='14' text-anchor='middle'>?</text></svg></div>",
        "hint": "מצאו קודם את הרוחב. חצי מההיקף שווה לאורך ועוד הרוחב.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את חצי ההיקף (סכום של אורך אחד ורוחב אחד).", "math_expression": "40 ÷ 2 = 20" },
            { "verbal_explanation": "נחסיר את האורך הידוע כדי למצוא את הרוחב.", "math_expression": "20 - 14 = 6" },
            { "verbal_explanation": "כעת נחשב את השטח (אורך כפול רוחב).", "math_expression": "14 × 6 = 84" }
        ],
        "final_answer": "84 סמ\"ר",
        "options": ["56 סמ\"ר", "84 סמ\"ר", "20 סמ\"ר", "120 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "High",
        "question_text": "נתון מלבן שרוחבו X ואורכו גדול ב-4 ס\"מ מהרוחב. היקף המלבן הוא 36 ס\"מ. מהו <strong>שטח</strong> המלבן?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='90'><rect x='40' y='20' width='100' height='50' fill='#fdfbf7' stroke='#b09151' stroke-width='3'/><text x='90' y='15' font-family='Heebo' font-size='14' font-weight='bold' text-anchor='middle'>X + 4</text><text x='25' y='50' font-family='Heebo' font-size='14' font-weight='bold' text-anchor='middle'>X</text></svg></div>",
        "hint": "בנו משוואה להיקף: 2 כפול (X ועוד X פלוס 4) שווה 36.",
        "solution_steps": [
            { "verbal_explanation": "נבנה משוואת היקף עם הנעלמים.", "math_expression": "2(x + x + 4) = 36" },
            { "verbal_explanation": "נחלק ב-2 ונכנס איברים (שני איקס ועוד 4 שווה 18).", "math_expression": "2x + 4 = 18" },
            { "verbal_explanation": "נפתור את המשוואה למציאת X (הרוחב).", "math_expression": "2x = 14 -> x = 7" },
            { "verbal_explanation": "הרוחב הוא 7, האורך הוא 11. נחשב שטח.", "math_expression": "7 × 11 = 77" }
        ],
        "final_answer": "77 סמ\"ר",
        "options": ["77 סמ\"ר", "36 סמ\"ר", "45 סמ\"ר", "63 סמ\"ר"],
        "correctAnswer": 0
    },
    {
        "id": 4,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "Medium",
        "question_text": "שלושה ריבועים זהים שצלעם 5 ס\"מ חוברו יחד בשורה כדי ליצור מלבן. מהו <strong>היקף</strong> המלבן החדש שנוצר?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='60'><rect x='20' y='10' width='40' height='40' fill='#e2e8f0' stroke='#1e293b' stroke-width='2'/><rect x='60' y='10' width='40' height='40' fill='#e2e8f0' stroke='#1e293b' stroke-width='2'/><rect x='100' y='10' width='40' height='40' fill='#e2e8f0' stroke='#1e293b' stroke-width='2'/></svg></div>",
        "hint": "שימו לב: הצלעות הפנימיות שנוגעות זו בזו אינן חלק מההיקף. מצאו את אורך ורוחב המלבן השלם.",
        "solution_steps": [
            { "verbal_explanation": "רוחב המלבן נשאר כצלע של ריבוע אחד.", "math_expression": "5" },
            { "verbal_explanation": "אורך המלבן מורכב מ-3 צלעות ריבוע.", "math_expression": "3 × 5 = 15" },
            { "verbal_explanation": "נחשב את היקף המלבן השלם (15 על 5).", "math_expression": "2 × (15 + 5) = 40" }
        ],
        "final_answer": "40 ס\"מ",
        "options": ["60 ס\"מ", "40 ס\"מ", "30 ס\"מ", "50 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "High",
        "question_text": "אורך צלע ריבוע הוא A ס\"מ. הגדילו צלע אחת ב-2 ס\"מ, ואת הצלע הסמוכה לה הקטינו ב-2 ס\"מ, וכך נוצר מלבן. מה נכון לומר על <strong>שטח</strong> הצורות?",
        "hint": "שטח הריבוע הוא A². שטח המלבן הוא (A+2) כפול (A-2). היזכרו בנוסחאות הכפל המקוצר.",
        "solution_steps": [
            { "verbal_explanation": "שטח הריבוע המקורי.", "math_expression": "A²" },
            { "verbal_explanation": "שטח המלבן לפי נוסחת כפל מקוצר.", "math_expression": "(A + 2)(A - 2) = A² - 4" },
            { "verbal_explanation": "ניתן לראות שהשטח החדש קטן ב-4 משטח הריבוע.", "math_expression": "A² - 4 < A²" }
        ],
        "final_answer": "שטח המלבן קטן משטח הריבוע",
        "options": ["שטח המלבן גדול יותר", "שטח המלבן קטן משטח הריבוע", "השטחים שווים", "תלוי בערך של A"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "High",
        "question_text": "שטיח מלבני מונח בתוך חדר שמידותיו 6 מטרים על 5 מטרים. השטיח רחוק מכל קירות החדר במרחק קבוע של 0.5 מטר. מהו <strong>שטח השטיח</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='120'><rect x='10' y='10' width='160' height='100' fill='none' stroke='#1e293b' stroke-width='2'/><rect x='30' y='30' width='120' height='60' fill='#b09151' opacity='0.5' stroke='#b09151' stroke-width='2'/></svg></div>",
        "hint": "צריך להחסיר את המרחק (0.5 מטר) *פעמיים* מכל מימד, כי יש רווח גם מימין וגם משמאל, גם מלמעלה וגם מלמטה.",
        "solution_steps": [
            { "verbal_explanation": "אורך השטיח: 6 מטרים פחות 0.5 מכל צד.", "math_expression": "6 - 0.5 - 0.5 = 5" },
            { "verbal_explanation": "רוחב השטיח: 5 מטרים פחות 0.5 מכל צד.", "math_expression": "5 - 0.5 - 0.5 = 4" },
            { "verbal_explanation": "נחשב את שטח השטיח.", "math_expression": "5 × 4 = 20" }
        ],
        "final_answer": "20 מ\"ר",
        "options": ["30 מ\"ר", "20 מ\"ר", "24 מ\"ר", "25 מ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "Medium",
        "question_text": "מלבן שהיקפו 50 ס\"מ 'נמעך' והפך למקבילית (מבלי שאורכי הצלעות השתנו). מה קרה ל<strong>היקף</strong> הצורה?",
        "hint": "האם הטיה של צלעות משנה את האורך שלהן?",
        "solution_steps": [
            { "verbal_explanation": "היקף נמדד רק לפי אורך הצלעות החיצוניות.", "math_expression": "Perimeter" },
            { "verbal_explanation": "כיוון שאורכי הצלעות לא השתנו, ההיקף נשאר בדיוק אותו הדבר.", "math_expression": "50 = 50" }
        ],
        "final_answer": "ההיקף לא ישתנה",
        "options": ["ההיקף יגדל", "ההיקף יקטן", "ההיקף לא ישתנה", "לא ניתן לדעת"],
        "correctAnswer": 2
    },
    {
        "id": 8,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "High",
        "question_text": "מלבן שמידותיו 10x8 ס\"מ. חתכו מאחת הפינות שלו ריבוע קטן שמידותיו 2x2 ס\"מ. מה קרה ל<strong>היקף</strong> של הצורה החדשה שנוצרה?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='100'><polygon points='10,10 130,10 130,50 100,50 100,80 10,80' fill='#fdfbf7' stroke='#1e293b' stroke-width='3'/></svg></div>",
        "hint": "הסתכלו על הצורה שנוצרה. הצלעות שהורדנו בפינה (שתיים באורך 2) הוחלפו בשתי צלעות חדשות פנימיות (גם הן באורך 2).",
        "solution_steps": [
            { "verbal_explanation": "כשחותכים פינה ממלבן, שתי צלעות חיצוניות יורדות.", "math_expression": "-2 , -2" },
            { "verbal_explanation": "במקומן נוצרות שתי צלעות פנימיות באותו אורך בדיוק המרכיבות את ה'מדרגה'.", "math_expression": "+2 , +2" },
            { "verbal_explanation": "לכן, ההיקף לא מאבד ולא מרוויח שום אורך.", "math_expression": "0" }
        ],
        "final_answer": "ההיקף נשאר זהה למלבן המקורי",
        "options": ["ההיקף קטן ב-4 ס\"מ", "ההיקף גדל ב-4 ס\"מ", "ההיקף נשאר זהה למלבן המקורי", "ההיקף קטן ב-8 ס\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 9,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "Medium",
        "question_text": "אורך מלבן הוא X. הרוחב שלו שווה לחצי מהאורך. איזה מהביטויים הבאים מייצג את <strong>שטח</strong> המלבן?",
        "hint": "אורך = X. רוחב = 0.5X. כפלו ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את המידות.", "math_expression": "L = x , W = 0.5x" },
            { "verbal_explanation": "נכפיל אורך ברוחב למציאת השטח.", "math_expression": "x × 0.5x" },
            { "verbal_explanation": "נסדר את הביטוי.", "math_expression": "0.5x²" }
        ],
        "final_answer": "0.5x²",
        "options": ["1.5x", "3x", "0.5x²", "x²"],
        "correctAnswer": 2
    },
    {
        "id": 10,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "High",
        "question_text": "שטח מלבן הוא 100 סמ\"ר. אורך המלבן גדול פי 4 מרוחבו. מהו <strong>היקף</strong> המלבן?",
        "hint": "סמנו רוחב ב-X ואורך ב-4X. מצאו את X דרך משוואת השטח.",
        "solution_steps": [
            { "verbal_explanation": "משוואת שטח: X כפול 4X שווה 100.", "math_expression": "4x² = 100" },
            { "verbal_explanation": "נחלק ב-4 ונוציא שורש.", "math_expression": "x² = 25 -> x = 5" },
            { "verbal_explanation": "המידות הן 5 ו-20. נחשב היקף.", "math_expression": "2 × (5 + 20) = 50" }
        ],
        "final_answer": "50 ס\"מ",
        "options": ["40 ס\"מ", "50 ס\"מ", "100 ס\"מ", "25 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "Low",
        "question_text": "מלבן א' הוא במידות 6x4 ס\"מ. מלבן ב' הוא במידות 8x3 ס\"מ. מה ניתן לומר על המלבנים הללו?",
        "hint": "חשבו את השטח של כל אחד מהם ואת ההיקף של כל אחד מהם להשוואה.",
        "solution_steps": [
            { "verbal_explanation": "שטח מלבן א': 6 כפול 4.", "math_expression": "24" },
            { "verbal_explanation": "שטח מלבן ב': 8 כפול 3.", "math_expression": "24" },
            { "verbal_explanation": "היקף א': פעמיים 10. היקף ב': פעמיים 11. רק השטחים שווים.", "math_expression": "20 ≠ 22" }
        ],
        "final_answer": "השטחים שלהם שווים אך ההיקפים שונים",
        "options": ["ההיקפים והשטחים שווים", "ההיקפים שווים אך השטחים שונים", "השטחים שלהם שווים אך ההיקפים שונים", "אין ביניהם שום קשר"],
        "correctAnswer": 2
    },
    {
        "id": 12,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "Medium",
        "question_text": "חוט ברזל באורך 24 ס\"מ כופף ליצירת ריבוע. לאחר מכן, יישרו את החוט וכופפו אותו שוב ליצירת מלבן שרוחבו 4 ס\"מ. מהו <strong>שטח המלבן</strong>?",
        "hint": "אורך החוט הוא ההיקף (24). מצאו את אורך המלבן לפי ההיקף.",
        "solution_steps": [
            { "verbal_explanation": "היקף המלבן הוא כאורך החוט (24). חצי היקף הוא 12.", "math_expression": "24 ÷ 2 = 12" },
            { "verbal_explanation": "הרוחב הוא 4, לכן האורך חייב להיות 8.", "math_expression": "12 - 4 = 8" },
            { "verbal_explanation": "נחשב את השטח: 8 כפול 4.", "math_expression": "32" }
        ],
        "final_answer": "32 סמ\"ר",
        "options": ["36 סמ\"ר", "32 סמ\"ר", "24 סמ\"ר", "16 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "High",
        "question_text": "חדר מלבני במידות 4 מטרים על 3 מטרים. רוצים לרצף אותו באריחים ריבועיים שגודלם 20 ס\"מ על 20 ס\"מ. כמה אריחים יידרשו? (שימו לב ליחידות המידה!)",
        "hint": "המרו את מידות החדר לסנטימטרים (מטר = 100 ס\"מ), חשבו שטח חדר ושטח אריח, וחלקו.",
        "solution_steps": [
            { "verbal_explanation": "מידות החדר בס\"מ: 400 על 300. שטח החדר.", "math_expression": "400 × 300 = 120,000" },
            { "verbal_explanation": "שטח אריח בודד.", "math_expression": "20 × 20 = 400" },
            { "verbal_explanation": "נחלק שטח חדר בשטח אריח.", "math_expression": "120,000 ÷ 400 = 300" }
        ],
        "final_answer": "300 אריחים",
        "options": ["30 אריחים", "300 אריחים", "120 אריחים", "600 אריחים"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "High",
        "question_text": "שני מלבנים זהים לחלוטין שמידותיהם 10x4 ס\"מ הונחו זה על זה בצורת צלב (פלוס +). אזור החפיפה באמצע הוא ריבוע מושלם. מהו <strong>השטח הכולל</strong> של הצורה שנוצרה?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='120'><rect x='40' y='10' width='40' height='100' fill='#e2e8f0' stroke='#1e293b' stroke-width='2'/><rect x='10' y='40' width='100' height='40' fill='#e2e8f0' stroke='#1e293b' stroke-width='2' opacity='0.8'/></svg></div>",
        "hint": "חברו את השטח של שני המלבנים, אך זכרו שהריבוע באמצע נספר פעמיים! עליכם להחסיר אותו פעם אחת.",
        "solution_steps": [
            { "verbal_explanation": "שטח מלבן אחד הוא 40. שני מלבנים הם 80.", "math_expression": "2 × 40 = 80" },
            { "verbal_explanation": "אזור החפיפה מוגבל על ידי רוחב המלבנים, לכן הוא ריבוע של 4x4. שטחו 16.", "math_expression": "4 × 4 = 16" },
            { "verbal_explanation": "נחסיר את אזור החפיפה שנמנה פעמיים.", "math_expression": "80 - 16 = 64" }
        ],
        "final_answer": "64 סמ\"ר",
        "options": ["80 סמ\"ר", "64 סמ\"ר", "40 סמ\"ר", "72 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "שטח והיקף מלבן",
        "difficulty": "Medium",
        "question_text": "במלבן, אורך צלע אחת גדולה פי 3 מהשנייה. היקף המלבן הוא 32 ס\"מ. מהו <strong>שטחו</strong> של מלבן זה?",
        "hint": "סמנו רוחב X ואורך 3X. פתרו משוואת היקף.",
        "solution_steps": [
            { "verbal_explanation": "משוואת היקף: 2 פעמים (X + 3X) שווה 32.", "math_expression": "8x = 32" },
            { "verbal_explanation": "נמצא את הצלעות.", "math_expression": "x = 4 , 3x = 12" },
            { "verbal_explanation": "נחשב שטח: 4 כפול 12.", "math_expression": "4 × 12 = 48" }
        ],
        "final_answer": "48 סמ\"ר",
        "options": ["32 סמ\"ר", "48 סמ\"ר", "64 סמ\"ר", "24 סמ\"ר"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 2: שטח והיקף משולש (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "Low",
        "question_text": "במשולש ישר זווית, אורכי הניצבים (הצלעות שיוצרות את הזווית הישרה) הם 6 ס\"מ ו-8 ס\"מ. מהו <strong>שטח</strong> המשולש?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100'><polygon points='20,10 20,80 100,80' fill='#f8fafc' stroke='#b09151' stroke-width='3'/><rect x='20' y='70' width='10' height='10' fill='none' stroke='#b09151' stroke-width='1'/><text x='60' y='95' font-family='Heebo' font-size='14' text-anchor='middle'>8</text><text x='10' y='50' font-family='Heebo' font-size='14' text-anchor='middle'>6</text></svg></div>",
        "hint": "במשולש ישר זווית, הניצבים משמשים כבסיס וגובה זה לזה. הכפילו אותם וחלקו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את הבסיס בגובה.", "math_expression": "6 × 8 = 48" },
            { "verbal_explanation": "נוסחת משולש דורשת חלוקה ב-2.", "math_expression": "48 ÷ 2 = 24" }
        ],
        "final_answer": "24 סמ\"ר",
        "options": ["48 סמ\"ר", "24 סמ\"ר", "14 סמ\"ר", "10 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "Medium",
        "question_text": "שטח משולש הוא 30 סמ\"ר. אם ידוע שאורך הבסיס הוא 10 ס\"מ, מהו <strong>אורך הגובה</strong> לצלע זו?",
        "hint": "השתמשו בנוסחה ההפוכה: גובה = (פעמיים השטח) חלקי הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "נציב בנוסחת השטח: 10 כפול H חלקי 2 שווה 30.", "math_expression": "(10 × h) ÷ 2 = 30" },
            { "verbal_explanation": "נכפיל ב-2.", "math_expression": "10h = 60" },
            { "verbal_explanation": "נחלק ב-10 למציאת הגובה.", "math_expression": "h = 6" }
        ],
        "final_answer": "6 ס\"מ",
        "options": ["3 ס\"מ", "6 ס\"מ", "15 ס\"מ", "5 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "High",
        "question_text": "משולש שווה שוקיים בעל היקף של 36 ס\"מ. אורך הבסיס הוא 10 ס\"מ. מהו <strong>אורך כל אחת משוקי המשולש</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100'><polygon points='60,10 20,80 100,80' fill='#f8fafc' stroke='#b09151' stroke-width='3'/><text x='60' y='95' font-family='Heebo' font-size='14' text-anchor='middle'>10</text></svg></div>",
        "hint": "הורידו את הבסיס מההיקף הכולל. מה שנשאר הוא הסכום של שתי השוקיים השוות.",
        "solution_steps": [
            { "verbal_explanation": "נחסיר את הבסיס מההיקף כדי למצוא את סכום השוקיים.", "math_expression": "36 - 10 = 26" },
            { "verbal_explanation": "מכיוון שהשוקיים שוות, נחלק את הסכום ב-2.", "math_expression": "26 ÷ 2 = 13" }
        ],
        "final_answer": "13 ס\"מ",
        "options": ["13 ס\"מ", "26 ס\"מ", "18 ס\"מ", "8 ס\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 19,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "High",
        "question_text": "בתוך מלבן ששטחו 50 סמ\"ר חסום משולש. בסיס המשולש מתלכד עם צלע המלבן התחתונה, והקודקוד השלישי שלו נוגע בצלע העליונה. מהו <strong>שטח המשולש</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='160' height='80'><rect x='30' y='10' width='100' height='60' fill='none' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4'/><polygon points='80,10 30,70 130,70' fill='#e2e8f0' stroke='#b09151' stroke-width='3'/></svg></div>",
        "hint": "למשולש ולמלבן יש בדיוק את אותו בסיס ואותו גובה. מה היחס בין שטח מלבן לשטח משולש במצב כזה?",
        "solution_steps": [
            { "verbal_explanation": "הבסיס של שניהם זהה (a). הגובה של שניהם זהה (h).", "math_expression": "Base, Height" },
            { "verbal_explanation": "נוסחת מלבן היא a×h. נוסחת משולש היא a×h÷2.", "math_expression": "Triangle = Rectangle ÷ 2" },
            { "verbal_explanation": "לכן שטח המשולש הוא בדיוק חצי מהמלבן.", "math_expression": "50 ÷ 2 = 25" }
        ],
        "final_answer": "25 סמ\"ר",
        "options": ["50 סמ\"ר", "25 סמ\"ר", "12.5 סמ\"ר", "לא ניתן לדעת מנתונים אלו"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "Medium",
        "question_text": "היקף משולש שווה צלעות הוא 24 ס\"מ. מהו <strong>אורך צלע המשולש</strong>?",
        "hint": "במשולש שווה צלעות כל 3 הצלעות שוות באורכן.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את ההיקף הנתון ל-3 חלקים שווים.", "math_expression": "24 ÷ 3 = 8" }
        ],
        "final_answer": "8 ס\"מ",
        "options": ["6 ס\"מ", "8 ס\"מ", "12 ס\"מ", "24 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 21,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "High",
        "question_text": "במשולש ישר זווית שטח המשולש הוא 24 סמ\"ר, ואורך אחד הניצבים הוא 6 ס\"מ. אם היתר (הצלע הארוכה) הוא 10 ס\"מ, מהו <strong>היקף המשולש</strong>?",
        "hint": "השתמשו בשטח כדי למצוא את הניצב השני. לאחר מכן, חברו את שלוש הצלעות.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הניצב השני באמצעות השטח. 6 כפול X חלקי 2 שווה 24.", "math_expression": "3x = 24 -> x = 8" },
            { "verbal_explanation": "צלעות המשולש הן: 6, 8, ו-10 (היתר שניתן).", "math_expression": "6, 8, 10" },
            { "verbal_explanation": "נחבר לחישוב ההיקף.", "math_expression": "6 + 8 + 10 = 24" }
        ],
        "final_answer": "24 ס\"מ",
        "options": ["20 ס\"מ", "24 ס\"מ", "48 ס\"מ", "30 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "High",
        "question_text": "נתון משולש קהה זווית. הגובה לבסיס משורטט מחוץ למשולש. אם הבסיס הוא 5 ס\"מ והגובה החיצוני הוא 4 ס\"מ, מהו <strong>שטח</strong> המשולש?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><polygon points='50,80 120,80 140,20' fill='#f8fafc' stroke='#b09151' stroke-width='3'/><line x1='140' y1='20' x2='140' y2='80' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4'/><line x1='120' y1='80' x2='140' y2='80' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4'/><text x='85' y='95' font-family='Heebo' font-size='14'>5</text><text x='150' y='50' font-family='Heebo' font-size='14'>4</text></svg></div>",
        "hint": "גובה חיצוני עובד בדיוק כמו גובה פנימי. הכפילו את אורך הבסיס האמיתי של המשולש (5) בגובה (4) וחלקו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את הבסיס בגובה.", "math_expression": "5 × 4 = 20" },
            { "verbal_explanation": "נחלק ב-2 לפי נוסחת המשולש.", "math_expression": "20 ÷ 2 = 10" }
        ],
        "final_answer": "10 סמ\"ר",
        "options": ["10 סמ\"ר", "20 סמ\"ר", "9 סמ\"ר", "12.5 סמ\"ר"],
        "correctAnswer": 0
    },
    {
        "id": 23,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "High",
        "question_text": "שני משולשים (א' ו-ב') יושבים על אותו בסיס בדיוק. הגובה של משולש א' גדול פי 2 מהגובה של משולש ב'. מהו היחס בין <strong>השטח של משולש א' לשטח משולש ב'</strong>?",
        "hint": "מכיוון שהבסיס קבוע והחלוקה ב-2 קבועה, השטח תלוי אך ורק בגובה.",
        "solution_steps": [
            { "verbal_explanation": "שטח משולש ב' (הקטן יותר).", "math_expression": "(B × h) ÷ 2" },
            { "verbal_explanation": "שטח משולש א' שגובהו 2h.", "math_expression": "(B × 2h) ÷ 2 = B × h" },
            { "verbal_explanation": "ניתן לראות ששטח א' גדול פי 2 משטח ב'.", "math_expression": "2 : 1" }
        ],
        "final_answer": "פי 2",
        "options": ["פי 2", "פי 4", "אותו שטח", "פי 1.5"],
        "correctAnswer": 0
    },
    {
        "id": 24,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "Medium",
        "question_text": "במשולש שווה שוקיים, זווית הראש (מול הבסיס) היא בת 40 מעלות. מהו גודלה של כל אחת מ<strong>זוויות הבסיס</strong>?",
        "hint": "במשולש יש 180 מעלות. החסירו את הראש, ואת השארית חלקו שווה בשווה בין שתי זוויות הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את סכום שתי זוויות הבסיס.", "math_expression": "180 - 40 = 140" },
            { "verbal_explanation": "נחלק ב-2 כי זוויות הבסיס שוות זו לזו.", "math_expression": "140 ÷ 2 = 70" }
        ],
        "final_answer": "70 מעלות",
        "options": ["40 מעלות", "70 מעלות", "140 מעלות", "100 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "High",
        "question_text": "ביטוי המייצג שטח של משולש הוא 12X. אם אורך בסיס המשולש הוא 4X, מהו ביטוי המייצג את <strong>הגובה</strong> שלו?",
        "hint": "הציבו את הנתונים בנוסחה: (4X כפול גובה) חלקי 2 שווה 12X.",
        "solution_steps": [
            { "verbal_explanation": "נבנה משוואה: (4X * h) / 2 = 12X.", "math_expression": "2x × h = 12x" },
            { "verbal_explanation": "נחלק ב-2X כדי לבודד את הגובה (h).", "math_expression": "h = 12x ÷ 2x = 6" }
        ],
        "final_answer": "6",
        "options": ["3X", "6", "6X", "8"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "High",
        "question_text": "היקף משולש שווה שוקיים הוא 30 ס\"מ. אורך כל שוק גדול ב-3 ס\"מ מאורך הבסיס. מהו אורך <strong>הבסיס</strong>?",
        "hint": "סמנו בסיס ב-X ושוקיים ב-(X+3). בנו משוואת היקף.",
        "solution_steps": [
            { "verbal_explanation": "המשוואה: בסיס + שוק + שוק = 30.", "math_expression": "x + (x+3) + (x+3) = 30" },
            { "verbal_explanation": "נפשט ונפתור.", "math_expression": "3x + 6 = 30" },
            { "verbal_explanation": "3X = 24.", "math_expression": "x = 8" }
        ],
        "final_answer": "8 ס\"מ",
        "options": ["6 ס\"מ", "8 ס\"מ", "11 ס\"מ", "10 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "Medium",
        "question_text": "משולש ישר זווית הוא גם שווה שוקיים. שטח המשולש הוא 18 סמ\"ר. מהו אורך <strong>הניצב</strong> שלו?",
        "hint": "במשולש ישר זווית שווה שוקיים, שני הניצבים (הבסיס והגובה) שווים זה לזה (X). X כפול X חלקי 2 שווה 18.",
        "solution_steps": [
            { "verbal_explanation": "הניצבים שווים, נסמן כל אחד כ-X.", "math_expression": "(x × x) ÷ 2 = 18" },
            { "verbal_explanation": "נכפיל ב-2.", "math_expression": "x² = 36" },
            { "verbal_explanation": "נוציא שורש.", "math_expression": "x = 6" }
        ],
        "final_answer": "6 ס\"מ",
        "options": ["6 ס\"מ", "9 ס\"מ", "4.5 ס\"מ", "12 ס\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 28,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "High",
        "question_text": "במערכת צירים משורטט משולש שקודקודיו בנקודות: A(0,0), B(8,0), C(4,5). מהו <strong>שטח</strong> המשולש?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='100'><line x1='10' y1='80' x2='130' y2='80' stroke='#94a3b8' stroke-width='2'/><line x1='20' y1='90' x2='20' y2='10' stroke='#94a3b8' stroke-width='2'/><polygon points='20,80 100,80 60,30' fill='#fdfbf7' stroke='#b09151' stroke-width='3'/></svg></div>",
        "hint": "הבסיס מונח על ציר ה-X. אורכו הוא ההפרש בין שיעורי ה-X. הגובה הוא שיעור ה-Y של קודקוד C.",
        "solution_steps": [
            { "verbal_explanation": "אורך הבסיס על ציר X מ-0 עד 8.", "math_expression": "b = 8" },
            { "verbal_explanation": "אורך הגובה (המרחק האנכי מקודקוד C לציר X).", "math_expression": "h = 5" },
            { "verbal_explanation": "נחשב שטח: בסיס כפול גובה חלקי 2.", "math_expression": "(8 × 5) ÷ 2 = 20" }
        ],
        "final_answer": "20 יחידות שטח",
        "options": ["40", "20", "13", "10"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "High",
        "question_text": "מלבן במידות 10x6 ס\"מ משורטט על דף. בתוכו צויר משולש שבסיסו 10 וגובהו 6. מהו <strong>שטח האזור במלבן שנשאר מחוץ למשולש</strong>?",
        "hint": "חשבו את שטח המלבן, חשבו את שטח המשולש, ובדקו מה ההפרש ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שטח המלבן המלא.", "math_expression": "10 × 6 = 60" },
            { "verbal_explanation": "שטח המשולש הפנימי.", "math_expression": "60 ÷ 2 = 30" },
            { "verbal_explanation": "השטח שנותר מסביב למשולש (הפרש).", "math_expression": "60 - 30 = 30" }
        ],
        "final_answer": "30 סמ\"ר",
        "options": ["60 סמ\"ר", "30 סמ\"ר", "20 סמ\"ר", "10 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "שטח והיקף משולש",
        "difficulty": "Medium",
        "question_text": "צורה מורכבת בנויה ממלבן שמידותיו 8x5 ס\"מ, ומעליו 'גג' בצורת משולש ישר זווית שהניצבים שלו הם 3 ו-4 ס\"מ. מהו <strong>השטח הכולל</strong> של הצורה?",
        "hint": "חשבו את שטח המלבן בנפרד ואת שטח המשולש בנפרד וחברו אותם.",
        "solution_steps": [
            { "verbal_explanation": "שטח המלבן התחתון.", "math_expression": "8 × 5 = 40" },
            { "verbal_explanation": "שטח המשולש העליון.", "math_expression": "(3 × 4) ÷ 2 = 6" },
            { "verbal_explanation": "נחבר את שני השטחים.", "math_expression": "40 + 6 = 46" }
        ],
        "final_answer": "46 סמ\"ר",
        "options": ["40 סמ\"ר", "52 סמ\"ר", "46 סמ\"ר", "64 סמ\"ר"],
        "correctAnswer": 2
    },,
    // ==============================================================
    // --- תת נושא 3: היקף ושטח מקבילית (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "Low",
        "question_text": "נתונה מקבילית שבה אורך הבסיס הוא 10 ס\"מ והגובה היורד אליו הוא 6 ס\"מ. מהו <strong>שטח</strong> המקבילית?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><polygon points='40,20 140,20 120,70 20,70' fill='#fdfbf7' stroke='#b09151' stroke-width='3'/><line x1='120' y1='20' x2='120' y2='70' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4'/><text x='70' y='85' font-family='Heebo' font-size='14' text-anchor='middle'>10</text><text x='130' y='50' font-family='Heebo' font-size='14' text-anchor='middle'>6</text></svg></div>",
        "hint": "שטח מקבילית מחושב על ידי מכפלת הבסיס בגובה היורד אליו (S = a × h).",
        "solution_steps": [
            { "verbal_explanation": "נזהה את אורך הבסיס (10) ואת הגובה המתאים לו (6).", "math_expression": "a = 10, h = 6" },
            { "verbal_explanation": "נכפיל את הבסיס בגובה לפי הנוסחה.", "math_expression": "10 × 6 = 60" }
        ],
        "final_answer": "60 סמ\"ר",
        "options": ["30 סמ\"ר", "60 סמ\"ר", "32 סמ\"ר", "16 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "Medium",
        "question_text": "במקבילית, אורכי שתי צלעות סמוכות הם 8 ס\"מ ו-5 ס\"מ. מהו <strong>היקף</strong> המקבילית?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><polygon points='40,20 140,20 120,70 20,70' fill='#f8fafc' stroke='#1e293b' stroke-width='3'/><text x='90' y='15' font-family='Heebo' font-size='14' text-anchor='middle'>8</text><text x='145' y='50' font-family='Heebo' font-size='14' text-anchor='middle'>5</text></svg></div>",
        "hint": "במקבילית, כל זוג צלעות נגדיות שוות זו לזו. ההיקף הוא סכום כל ארבע הצלעות.",
        "solution_steps": [
            { "verbal_explanation": "במקבילית יש זוג צלעות באורך 8 וזוג צלעות באורך 5.", "math_expression": "8, 8, 5, 5" },
            { "verbal_explanation": "נחבר את כל הצלעות (או נכפיל את סכום הצלעות הסמוכות ב-2).", "math_expression": "2 × (8 + 5) = 2 × 13 = 26" }
        ],
        "final_answer": "26 ס\"מ",
        "options": ["13 ס\"מ", "26 ס\"מ", "40 ס\"מ", "20 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "High",
        "question_text": "שטח מקבילית הוא 48 סמ\"ר. אם אורך הבסיס הוא 12 ס\"מ, מהו אורך <strong>הגובה</strong> היורד לבסיס זה?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><polygon points='40,20 140,20 120,70 20,70' fill='#fdfbf7' stroke='#b09151' stroke-width='2' stroke-dasharray='4'/><line x1='120' y1='20' x2='120' y2='70' stroke='#b09151' stroke-width='2'/><text x='70' y='85' font-family='Heebo' font-size='14' text-anchor='middle'>12</text><text x='130' y='50' font-family='Heebo' font-size='14' text-anchor='middle'>h=?</text><text x='80' y='50' font-family='Heebo' font-size='14' text-anchor='middle'>S=48</text></svg></div>",
        "hint": "השתמשו בנוסחה ההפוכה: גובה = שטח חלקי בסיס (h = S / a).",
        "solution_steps": [
            { "verbal_explanation": "נציב את השטח והבסיס בנוסחת השטח.", "math_expression": "48 = 12 × h" },
            { "verbal_explanation": "נחלק את השטח באורך הבסיס כדי למצוא את h.", "math_expression": "48 ÷ 12 = 4" }
        ],
        "final_answer": "4 ס\"מ",
        "options": ["4 ס\"מ", "6 ס\"מ", "8 ס\"מ", "36 ס\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 34,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "Medium",
        "question_text": "במקבילית ABCD, הגובה היורד לצלע AB הוא 5 ס\"מ. אם נגדיל את צלע AB פי 3 מבלי לשנות את הגובה, מה יקרה ל<strong>שטח</strong> המקבילית?",
        "hint": "השטח הוא בסיס כפול גובה. אם רק אחד הגורמים גדל פי 3, איך זה משפיע על המכפלה?",
        "solution_steps": [
            { "verbal_explanation": "השטח המקורי הוא S = AB × h.", "math_expression": "S = AB × 5" },
            { "verbal_explanation": "השטח החדש הוא (3 כפול AB) כפול h.", "math_expression": "S_new = (3 × AB) × 5 = 3 × (AB × 5)" },
            { "verbal_explanation": "ניתן לראות שהשטח החדש גדול פי 3 מהמקורי.", "math_expression": "3 × S" }
        ],
        "final_answer": "השטח יגדל פי 3",
        "options": ["השטח יגדל פי 3", "השטח יגדל פי 9", "השטח לא ישתנה", "השטח יקטן פי 3"],
        "correctAnswer": 0
    },
    {
        "id": 35,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "High",
        "question_text": "נתונה מקבילית שבה צלע אחת היא 10 ס\"מ והגובה היורד אליה הוא 4 ס\"מ. צלע שנייה (סמוכה) היא 8 ס\"מ. מהו אורך <strong>הגובה היורד לצלע השנייה</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><polygon points='40,20 160,20 130,80 10,80' fill='#fdfbf7' stroke='#1e293b' stroke-width='2'/><line x1='130' y1='20' x2='130' y2='80' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4'/><text x='85' y='95' font-family='Heebo' font-size='14' text-anchor='middle'>10</text><text x='140' y='55' font-family='Heebo' font-size='14' text-anchor='middle'>4</text><text x='5' y='55' font-family='Heebo' font-size='14' text-anchor='middle'>8</text></svg></div>",
        "hint": "שטח המקבילית הוא קבוע. חשבו אותו פעם אחת לפי הזוג הראשון, והשתמשו בו כדי למצוא את הגובה השני.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח המקבילית לפי הבסיס 10 והגובה 4.", "math_expression": "10 × 4 = 40" },
            { "verbal_explanation": "השטח (40) שווה גם למכפלת הבסיס השני (8) בגובה הלא ידוע (h2).", "math_expression": "40 = 8 × h2" },
            { "verbal_explanation": "נחלק ב-8 למציאת הגובה השני.", "math_expression": "40 ÷ 8 = 5" }
        ],
        "final_answer": "5 ס\"מ",
        "options": ["4 ס\"מ", "5 ס\"מ", "6.4 ס\"מ", "3.2 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "Medium",
        "question_text": "היקף מקבילית הוא 48 ס\"מ. אחת מצלעותיה גדולה ב-4 ס\"מ מהצלע השנייה. מהם <strong>אורכי צלעות</strong> המקבילית?",
        "hint": "סמנו צלע קצרה ב-X וצלע ארוכה ב- X+4. בנו משוואת היקף.",
        "solution_steps": [
            { "verbal_explanation": "חצי היקף המקבילית (סכום שתי צלעות סמוכות) הוא 24.", "math_expression": "48 ÷ 2 = 24" },
            { "verbal_explanation": "נבנה משוואה: x + (x + 4) = 24.", "math_expression": "2x + 4 = 24" },
            { "verbal_explanation": "נפתור: 2X=20, לכן X=10. הצלע השנייה היא 14.", "math_expression": "x = 10, x + 4 = 14" }
        ],
        "final_answer": "10 ס\"מ ו-14 ס\"מ",
        "options": ["10 ו-14", "12 ו-12", "8 ו-12", "11 ו-15"],
        "correctAnswer": 0
    },
    {
        "id": 37,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "High",
        "question_text": "שטח מקבילית הוא 45 סמ\"ר. גובה המקבילית קטן ב-4 ס\"מ מהבסיס אליו הוא יורד. מהו <strong>אורך הבסיס</strong>?",
        "hint": "סמנו בסיס ב-X וגובה ב- (X-4). חפשו שני מספרים שהפרשם 4 ומכפלתם 45.",
        "solution_steps": [
            { "verbal_explanation": "בניית משוואת שטח: x כפול (x - 4) שווה 45.", "math_expression": "x(x - 4) = 45" },
            { "verbal_explanation": "נחשוב על זוג מספרים מתאים מלוח הכפל: 9 ו-5.", "math_expression": "9 × 5 = 45" },
            { "verbal_explanation": "מכיוון שהבסיס גדול מהגובה, הוא חייב להיות 9.", "math_expression": "x = 9" }
        ],
        "final_answer": "9 ס\"מ",
        "options": ["5 ס\"מ", "9 ס\"מ", "15 ס\"מ", "10 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "Low",
        "question_text": "באיזה מהמקרים הבאים מקבילית הופכת להיות <strong>מלבן</strong>?",
        "hint": "מלבן הוא סוג מיוחד של מקבילית. מה מייחד אותו?",
        "solution_steps": [
            { "verbal_explanation": "במלבן, כל הזוויות הן ישרות (90 מעלות).", "math_expression": "90°" },
            { "verbal_explanation": "כאשר אחת מזוויות המקבילית היא 90 מעלות, כולן הופכות לישרות והיא הופכת למלבן.", "math_expression": "Rectangle" }
        ],
        "final_answer": "כאשר כל זוויותיה הן בנות 90 מעלות",
        "options": ["כאשר כל צלעותיה שוות", "כאשר כל זוויותיה הן בנות 90 מעלות", "כאשר השטח שלה גדול מ-20", "כאשר יש לה זוג צלעות מקבילות"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "High",
        "question_text": "נתונה מקבילית שבה הבסיס הוא 2X והגובה הוא X. אם שטח המקבילית הוא 50 סמ\"ר, מהו <strong>אורך הבסיס</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><polygon points='40,20 140,20 110,70 10,70' fill='#fdfbf7' stroke='#1e293b' stroke-width='2'/><line x1='110' y1='20' x2='110' y2='70' stroke='#b09151' stroke-width='2' stroke-dasharray='4'/><text x='60' y='85' font-family='Heebo' font-size='14' text-anchor='middle'>2X</text><text x='125' y='50' font-family='Heebo' font-size='14' text-anchor='middle'>X</text></svg></div>",
        "hint": "הציבו את הביטויים בנוסחת השטח: 2X כפול X שווה 50.",
        "solution_steps": [
            { "verbal_explanation": "משוואת שטח: 2x כפול x שווה 50.", "math_expression": "2x² = 50" },
            { "verbal_explanation": "נחלק ב-2: x² = 25. לכן X = 5.", "math_expression": "x = 5" },
            { "verbal_explanation": "נמצא את הבסיס שהוא 2X.", "math_expression": "2 × 5 = 10" }
        ],
        "final_answer": "10 ס\"מ",
        "options": ["5 ס\"מ", "10 ס\"מ", "25 ס\"מ", "20 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "Medium",
        "question_text": "האם ייתכן שגובה המקבילית יהיה <strong>ארוך יותר</strong> מהצלע אליה הוא יורד?",
        "hint": "חשבו על מקבילית 'שוכבת' וצרה מאוד.",
        "solution_steps": [
            { "verbal_explanation": "במקבילית נטויה מאוד, הגובה (המרחק האנכי) יכול להיות גדול משמעותית מאורך הבסיס.", "math_expression": "h > a" },
            { "verbal_explanation": "הגובה הוא מרחק בין קווים מקבילים ואינו מוגבל על ידי אורך הצלע.", "math_expression": "True" }
        ],
        "final_answer": "כן, זה ייתכן",
        "options": ["כן, זה ייתכן", "לא, הגובה תמיד קצר יותר", "רק אם המקבילית היא ריבוע", "רק אם המקבילית היא מעוין"],
        "correctAnswer": 0
    },
    {
        "id": 41,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "High",
        "question_text": "מקבילית חולקה לשני משולשים שווי שטח על ידי אחד מאלכסוניה. אם שטח כל משולש הוא 15 סמ\"ר והבסיס של המקבילית הוא 6 ס\"מ, מהו <strong>גובה המקבילית</strong>?",
        "hint": "שטח המקבילית הוא סכום שטחי שני המשולשים.",
        "solution_steps": [
            { "verbal_explanation": "שטח המקבילית כולה.", "math_expression": "15 + 15 = 30 סמ\"ר" },
            { "verbal_explanation": "נשתמש בנוסחת השטח למציאת הגובה: 6 כפול h שווה 30.", "math_expression": "6h = 30" },
            { "verbal_explanation": "נחלק ב-6.", "math_expression": "h = 5" }
        ],
        "final_answer": "5 ס\"מ",
        "options": ["2.5 ס\"מ", "5 ס\"מ", "10 ס\"מ", "7.5 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "Medium",
        "question_text": "שטח מקבילית הוא 40 סמ\"ר. אם נכפיל את הבסיס פי 2 ונקטין את הגובה פי 2, מה יהיה <strong>השטח החדש</strong>?",
        "hint": "בדקו מה קורה למכפלה (a*h) אם גורם אחד גדל פי 2 והשני קטן פי 2.",
        "solution_steps": [
            { "verbal_explanation": "השינוי בשטח: (2 כפול a) כפול (חצי כפול h).", "math_expression": "2 × 0.5 = 1" },
            { "verbal_explanation": "המכפלה נשארת זהה למקור.", "math_expression": "40" }
        ],
        "final_answer": "40 סמ\"ר (ללא שינוי)",
        "options": ["80 סמ\"ר", "20 סמ\"ר", "40 סמ\"ר", "160 סמ\"ר"],
        "correctAnswer": 2
    },
    {
        "id": 43,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "Low",
        "question_text": "במקבילית, מה ניתן לומר על כל שתי זוויות <strong>נגדיות</strong>?",
        "hint": "הסתכלו על צורת המקבילית. האם הזוויות ה'מוליות' נראות שוות?",
        "solution_steps": [
            { "verbal_explanation": "אחת התכונות היסודיות של מקבילית היא שכל זוג זוויות נגדיות הן שוות בגודלן.", "math_expression": "∠A = ∠C, ∠B = ∠D" }
        ],
        "final_answer": "הן שוות זו לזו",
        "options": ["סכומן 180°", "הן שוות זו לזו", "סכומן 90°", "אין קשר ביניהן"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "High",
        "question_text": "נתונה מקבילית שבה הבסיס הוא 12 ס\"מ. הגובה קטן מהבסיס ב-X ס\"מ. שטח המקבילית הוא 84 סמ\"ר. מהו <strong>הערך של X</strong>?",
        "hint": "הגובה הוא (12 פחות X). הציבו בנוסחה: 12 כפול (12-X) שווה 84.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הגובה: שטח חלקי בסיס.", "math_expression": "84 ÷ 12 = 7" },
            { "verbal_explanation": "אם הגובה הוא 7 והבסיס הוא 12, נמצא את ההפרש X.", "math_expression": "12 - x = 7" },
            { "verbal_explanation": "X שווה ל-5.", "math_expression": "x = 5" }
        ],
        "final_answer": "5",
        "options": ["5", "7", "4", "12"],
        "correctAnswer": 0
    },
    {
        "id": 45,
        "subTopic": "היקף ושטח מקבילית",
        "difficulty": "High",
        "question_text": "מקבילית ומלבן הם בעלי <strong>אותו בסיס ואותו שטח</strong>. מה ניתן לומר על הגבהים שלהם?",
        "hint": "השוו את נוסחאות השטח: S_rec = a*h1, S_par = a*h2.",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שהשטח והבסיס זהים בשתי הצורות, הגורם השלישי (הגובה) חייב להיות זהה בשתיהן.", "math_expression": "h1 = h2" }
        ],
        "final_answer": "הגבהים שלהם שווים",
        "options": ["הגבהים שווים", "גובה המקבילית גדול יותר", "גובה המלבן גדול יותר", "לא ניתן לדעת"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 4: נפח תיבה וקובייה (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "נפח תיבה",
        "difficulty": "Low",
        "question_text": "מהו <strong>נפח</strong> תיבה שמידותיה הן: אורך 5 ס\"מ, רוחב 3 ס\"מ וגובה 10 ס\"מ?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='120'><path d='M30,50 L80,50 L80,90 L30,90 Z' fill='#fdfbf7' stroke='#1e293b' stroke-width='2'/><path d='M30,50 L50,30 L100,30 L80,50 Z' fill='#fdfbf7' stroke='#1e293b' stroke-width='2'/><path d='M80,50 L100,30 L100,70 L80,90 Z' fill='#fdfbf7' stroke='#1e293b' stroke-width='2'/><text x='55' y='105' font-family='Heebo' font-size='12' text-anchor='middle'>5</text><text x='105' y='55' font-family='Heebo' font-size='12'>3</text><text x='15' y='75' font-family='Heebo' font-size='12'>10</text></svg></div>",
        "hint": "נפח תיבה מחושב על ידי מכפלת שלוש המידות: אורך × רוחב × גובה (V = a × b × c).",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את האורך ברוחב.", "math_expression": "5 × 3 = 15" },
            { "verbal_explanation": "נכפיל את התוצאה בגובה התיבה.", "math_expression": "15 × 10 = 150" }
        ],
        "final_answer": "150 סמ\"ק",
        "options": ["150 סמ\"ק", "18 סמ\"ק", "80 סמ\"ק", "100 סמ\"ק"],
        "correctAnswer": 0
    },
    {
        "id": 47,
        "subTopic": "נפח תיבה",
        "difficulty": "Medium",
        "question_text": "נפח של תיבה הוא 120 סמ\"ק. שטח הבסיס שלה הוא 30 סמ\"ר. מהו <strong>גובה</strong> התיבה?",
        "hint": "נפח שווה לשטח הבסיס כפול הגובה (V = S_base × h).",
        "solution_steps": [
            { "verbal_explanation": "נחלק את הנפח הנתון בשטח הבסיס.", "math_expression": "120 ÷ 30 = 4" }
        ],
        "final_answer": "4 ס\"מ",
        "options": ["3 ס\"מ", "4 ס\"מ", "5 ס\"מ", "6 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "subTopic": "נפח תיבה",
        "difficulty": "Low",
        "question_text": "מהו <strong>נפח</strong> קובייה שאורך צלעה הוא 4 ס\"מ?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='120'><path d='M30,40 L70,40 L70,80 L30,80 Z' fill='#fdfbf7' stroke='#b09151' stroke-width='2'/><path d='M30,40 L50,20 L90,20 L70,40 Z' fill='#fdfbf7' stroke='#b09151' stroke-width='2'/><path d='M70,40 L90,20 L90,60 L70,80 Z' fill='#fdfbf7' stroke='#b09151' stroke-width='2'/><text x='50' y='95' font-family='Heebo' font-size='14' text-anchor='middle'>4</text></svg></div>",
        "hint": "בקובייה כל הצלעות שוות. הנפח הוא צלע בשלישית (V = a³).",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את אורך הצלע בעצמו 3 פעמים.", "math_expression": "4 × 4 × 4" },
            { "verbal_explanation": "נחשב: 16 כפול 4.", "math_expression": "64" }
        ],
        "final_answer": "64 סמ\"ק",
        "options": ["12 סמ\"ק", "16 סמ\"ק", "64 סמ\"ק", "32 סמ\"ק"],
        "correctAnswer": 2
    },
    {
        "id": 49,
        "subTopic": "נפח תיבה",
        "difficulty": "Medium",
        "question_text": "כמה <strong>ליטרים</strong> של מים יכולים להיכנס למכל בצורת תיבה שמידותיו 50 ס\"מ, 20 ס\"מ ו-30 ס\"מ?",
        "hint": "חשבו קודם את הנפח בסמ\"ק. זכרו: 1,000 סמ\"ק הם ליטר אחד.",
        "solution_steps": [
            { "verbal_explanation": "נחשב נפח בסמ\"ק.", "math_expression": "50 × 20 × 30 = 30,000" },
            { "verbal_explanation": "נמיר סמ\"ק לליטרים על ידי חלוקה ב-1,000.", "math_expression": "30,000 ÷ 1,000 = 30" }
        ],
        "final_answer": "30 ליטר",
        "options": ["3 ליטר", "30 ליטר", "300 ליטר", "30,000 ליטר"],
        "correctAnswer": 1
    },
    {
        "id": 50,
        "subTopic": "נפח תיבה",
        "difficulty": "High",
        "question_text": "אם נכפיל את כל מידות התיבה (אורך, רוחב וגובה) <strong>פי 2</strong>, פי כמה יגדל הנפח שלה?",
        "hint": "נפח הוא תלת-ממדי. חשבו מה קורה ל- (2a * 2b * 2c).",
        "solution_steps": [
            { "verbal_explanation": "הנפח החדש מושפע מהכפלת כל שלוש המידות.", "math_expression": "2 × 2 × 2 = 8" }
        ],
        "final_answer": "פי 8",
        "options": ["פי 2", "פי 4", "פי 6", "פי 8"],
        "correctAnswer": 3
    },
    {
        "id": 51,
        "subTopic": "נפח תיבה",
        "difficulty": "High",
        "question_text": "מהו <strong>שטח הפנים</strong> (סכום שטחי כל הפאות) של קובייה שצלעה 3 ס\"מ?",
        "hint": "לקובייה יש 6 פאות ריבועיות זהות.",
        "solution_steps": [
            { "verbal_explanation": "שטח פאה אחת של הקובייה.", "math_expression": "3 × 3 = 9 סמ\"ר" },
            { "verbal_explanation": "נכפיל את שטח הפאה במספר הפאות (6).", "math_expression": "9 × 6 = 54" }
        ],
        "final_answer": "54 סמ\"ר",
        "options": ["27 סמ\"ר", "54 סמ\"ר", "36 סמ\"ר", "18 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "נפח תיבה",
        "difficulty": "High",
        "question_text": "מהו שטח הפנים של תיבה שמידותיה 2 ס\"מ, 3 ס\"מ ו-4 ס\"מ?",
        "hint": "חשבו שטח של 3 זוגות פאות: (2x3), (2x4), (3x4) והכפילו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטחי שלוש הפאות השונות.", "math_expression": "6, 8, 12" },
            { "verbal_explanation": "נחבר אותן ונכפיל ב-2.", "math_expression": "2 × (6 + 8 + 12) = 2 × 26 = 52" }
        ],
        "final_answer": "52 סמ\"ר",
        "options": ["24 סמ\"ר", "52 סמ\"ר", "48 סמ\"ר", "60 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 53,
        "subTopic": "נפח תיבה",
        "difficulty": "Medium",
        "question_text": "נפח קובייה הוא 125 סמ\"ק. מהו <strong>אורך צלע</strong> הקובייה?",
        "hint": "חפשו מספר שכשמכפילים אותו בעצמו 3 פעמים מקבלים 125 (שורש שלישי).",
        "solution_steps": [
            { "verbal_explanation": "נבדוק מספרים: 4*4*4=64. נבדוק 5.", "math_expression": "5 × 5 × 5 = 125" }
        ],
        "final_answer": "5 ס\"מ",
        "options": ["5 ס\"מ", "25 ס\"מ", "15 ס\"מ", "10 ס\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 54,
        "subTopic": "נפח תיבה",
        "difficulty": "High",
        "question_text": "מכל שמידותיו 10x10x10 ס\"מ מלא במים עד ל<strong>חצי גובהו</strong>. כמה מים (בסמ\"ק) יש במכל?",
        "hint": "חצי גובה פירושו גובה של 5 ס\"מ.",
        "solution_steps": [
            { "verbal_explanation": "נחשב נפח עם גובה 5 במקום 10.", "math_expression": "10 × 10 × 5 = 500" }
        ],
        "final_answer": "500 סמ\"ק",
        "options": ["1000 סמ\"ק", "500 סמ\"ק", "250 סמ\"ק", "100 סמ\"ק"],
        "correctAnswer": 1
    },
    {
        "id": 55,
        "subTopic": "נפח תיבה",
        "difficulty": "Medium",
        "question_text": "נתונה תיבה שמידות בסיסה הן X ו-3X. הגובה שלה הוא 2. מהו הביטוי ל<strong>נפח</strong> התיבה?",
        "hint": "נפח = אורך × רוחב × גובה.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את כל המידות בביטוי אחד.", "math_expression": "x × 3x × 2" },
            { "verbal_explanation": "נסדר את המקדמים והנעלמים.", "math_expression": "6x²" }
        ],
        "final_answer": "6X²",
        "options": ["6X", "6X²", "5X", "4X²"],
        "correctAnswer": 1
    },
    {
        "id": 56,
        "subTopic": "נפח תיבה",
        "difficulty": "Low",
        "question_text": "פריסה של איזה גוף מורכבת מ-<strong>6 ריבועים זהים</strong>?",
        "hint": "זהו הגוף התלת-ממדי המשוכלל ביותר.",
        "solution_steps": [
            { "verbal_explanation": "לתיבה יש פאות מלבניות. לקובייה יש פאות שהן כולן ריבועים שווים.", "math_expression": "Cube" }
        ],
        "final_answer": "קובייה",
        "options": ["תיבה", "קובייה", "מנסרה", "פירמידה"],
        "correctAnswer": 1
    },
    {
        "id": 57,
        "subTopic": "נפח תיבה",
        "difficulty": "High",
        "question_text": "כמה קוביות שצלען 2 ס\"מ ניתן להכניס בתוך תיבה שמידותיה 10x6x4 ס\"מ?",
        "hint": "חלקו את נפח התיבה בנפח של קובייה אחת.",
        "solution_steps": [
            { "verbal_explanation": "נפח התיבה הגדולה.", "math_expression": "10 × 6 × 4 = 240" },
            { "verbal_explanation": "נפח קובייה קטנה (צלע 2).", "math_expression": "2 × 2 × 2 = 8" },
            { "verbal_explanation": "נחלק את הנפחים.", "math_expression": "240 ÷ 8 = 30" }
        ],
        "final_answer": "30 קוביות",
        "options": ["15", "30", "60", "120"],
        "correctAnswer": 1
    },
    {
        "id": 58,
        "subTopic": "נפח תיבה",
        "difficulty": "Medium",
        "question_text": "נפח תיבה הוא 80 סמ\"ק. אם נכפיל <strong>רק את הגובה</strong> פי 4, מה יהיה הנפח החדש?",
        "hint": "הנפח תלוי ביחס ישיר בכל אחד מהממדים.",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שרק ממד אחד הוכפל, כל הנפח יוכפל באותו גורם.", "math_expression": "80 × 4 = 320" }
        ],
        "final_answer": "320 סמ\"ק",
        "options": ["80 סמ\"ק", "160 סמ\"ק", "320 סמ\"ק", "640 סמ\"ק"],
        "correctAnswer": 2
    },
    {
        "id": 59,
        "subTopic": "נפח תיבה",
        "difficulty": "High",
        "question_text": "לשתי תיבות יש אותו נפח. בתיבה א' המידות הן 2x5x10 ס\"מ. בתיבה ב' הבסיס הוא ריבוע במידות 5x5 ס\"מ. מהו <strong>גובה</strong> תיבה ב'?",
        "hint": "השוו את הנפח של תיבה א' למשוואת הנפח של תיבה ב'.",
        "solution_steps": [
            { "verbal_explanation": "נפח תיבה א'.", "math_expression": "2 × 5 × 10 = 100" },
            { "verbal_explanation": "נחלק בשטח הבסיס של תיבה ב' (25) כדי למצוא את הגובה.", "math_expression": "100 ÷ (5 × 5) = 100 ÷ 25 = 4" }
        ],
        "final_answer": "4 ס\"מ",
        "options": ["2 ס\"מ", "4 ס\"מ", "5 ס\"מ", "10 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "subTopic": "נפח תיבה",
        "difficulty": "High",
        "question_text": "בתיבה שמידות בסיסה הן 8 ס\"מ על 5 ס\"מ יש מים בגובה 3 ס\"מ. מכניסים לתוך המים קובייה שצלעה 2 ס\"מ. בכמה ס\"מ <strong>יעלה גובה המים</strong>?",
        "hint": "נפח הקובייה שנוספה שווה לנפח המים ש'נדחקו' למעלה.",
        "solution_steps": [
            { "verbal_explanation": "נפח הקובייה שנכנסה.", "math_expression": "2 × 2 × 2 = 8 סמ\"ק" },
            { "verbal_explanation": "הנפח הזה מתחלק על פני שטח הבסיס של התיבה (40).", "math_expression": "8 ÷ (8 × 5) = 8 ÷ 40" },
            { "verbal_explanation": "נחשב את תוספת הגובה.", "math_expression": "0.2 ס\"מ" }
        ],
        "final_answer": "0.2 ס\"מ",
        "options": ["2 ס\"מ", "0.2 ס\"מ", "0.5 ס\"מ", "1 ס\"מ"],
        "correctAnswer": 1
    }
];
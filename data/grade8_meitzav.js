const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: חזרה על חומר כיתה ז' (20 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Low",
        "question_text": "מהי התוצאה של התרגיל: <strong>20 - 4 * (2 + 3)</strong>?",
        "hint": "זכרו את סדר פעולות חשבון: קודם סוגריים, אחר כך כפל וחילוק, ולבסוף חיבור וחיסור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לפי סדר פעולות חשבון, קודם נחשב את מה שבתוך הסוגריים.", "math_expression": "2 + 3 = 5" },
            { "verbal_explanation": "שלב 2: כעת התרגיל שלנו נראה כך: 20 פחות 4 כפול 5. הפעולה הבאה בתור היא כפל.", "math_expression": "4 * 5 = 20" },
            { "verbal_explanation": "שלב 3: נבצע את פעולת החיסור האחרונה שנשארה: 20 פחות 20.", "math_expression": "20 - 20 = 0" }
        ],
        "final_answer": "0",
        "options": ["0", "80", "11", "32"],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Low",
        "question_text": "פתרו את המשוואה הבאה: <strong>5x - 7 = 3x + 9</strong>",
        "hint": "רכזו את כל האיברים עם x באגף אחד (למשל שמאל), ואת המספרים החופשיים באגף השני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעביר את ה-3x לאגף שמאל (יעבור בסימן מינוס).", "math_expression": "5x - 3x - 7 = 9" },
            { "verbal_explanation": "שלב 2: נעביר את מינוס 7 לאגף ימין (יעבור בסימן פלוס).", "math_expression": "2x = 9 + 7" },
            { "verbal_explanation": "שלב 3: נחבר את המספרים שבאגף ימין.", "math_expression": "2x = 16" },
            { "verbal_explanation": "שלב 4: נחלק את שני האגפים ב-2 כדי למצוא את x.", "math_expression": "x = 8" }
        ],
        "final_answer": "x = 8",
        "options": ["x = 1", "x = 8", "x = 2", "x = 16"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Low",
        "question_text": "מהו ה<strong>שטח</strong> של מלבן שאורכו 8 ס\"מ ורוחבו 5 ס\"מ?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='100'><rect x='10' y='10' width='120' height='75' fill='#f1f5f9' stroke='#1e293b' stroke-width='2'/><text x='60' y='95' font-size='12'>8</text><text x='135' y='50' font-size='12'>5</text></svg></div>",
        "hint": "שטח מלבן מחושב על ידי הכפלת האורך ברוחב.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניזכר בנוסחה לחישוב שטח מלבן: שטח = אורך כפול רוחב.", "math_expression": "S = a * b" },
            { "verbal_explanation": "שלב 2: נציב את הנתונים מהשאלה לתוך הנוסחה.", "math_expression": "S = 8 * 5" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה במטרים או סנטימטרים רבועים.", "math_expression": "S = 40" }
        ],
        "final_answer": "40 סמ\"ר",
        "options": ["26 סמ\"ר", "13 סמ\"ר", "40 סמ\"ר", "80 סמ\"ר"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Medium",
        "question_text": "בכיתה יש 30 תלמידים. <strong>40%</strong> מהם מרכיבים משקפיים. כמה תלמידים מרכיבים משקפיים?",
        "hint": "כדי למצוא אחוז ממספר, מכפילים את המספר באחוז ומחלקים ב-100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתרגם את האחוז (40%) לשבר עשרוני או שבר פשוט.", "math_expression": "40 / 100 = 0.4" },
            { "verbal_explanation": "שלב 2: נכפיל את השבר בכמות השלמה של התלמידים בכיתה.", "math_expression": "0.4 * 30" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה. דרך קלה: 4 כפול 3 שווה 12.", "math_expression": "12" }
        ],
        "final_answer": "12 תלמידים",
        "options": ["12 תלמידים", "15 תלמידים", "10 תלמידים", "4 תלמידים"],
        "correctAnswer": 0
    },
    {
        "id": 5,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי האלגברי הבא: <strong>3x + 2 + 5x - 8</strong>",
        "hint": "חברו את האיברים הדומים יחד: איקסים עם איקסים, ומספרים חופשיים עם מספרים חופשיים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסדר את הביטוי כך שהאיברים הדומים יהיו סמוכים זה לזה.", "math_expression": "3x + 5x + 2 - 8" },
            { "verbal_explanation": "שלב 2: נחבר את המקדמים של הנעלם x. 3 איקסים ועוד 5 איקסים נותנים 8 איקסים.", "math_expression": "8x" },
            { "verbal_explanation": "שלב 3: נסכם את המספרים החופשיים: 2 פחות 8 נותן מינוס 6.", "math_expression": "-6" },
            { "verbal_explanation": "שלב 4: נחבר את התוצאות לביטוי אחד מצומצם.", "math_expression": "8x - 6" }
        ],
        "final_answer": "8x - 6",
        "options": ["8x - 6", "15x - 6", "8x + 6", "2x"],
        "correctAnswer": 0
    },
    {
        "id": 6,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Medium",
        "question_text": "סכום זוויות במשולש הוא תמיד 180 מעלות. אם שתי זוויות במשולש הן 50° ו-60°, מה גודלה של הזווית השלישית?",
        "hint": "חברו את שתי הזוויות הנתונות והחסירו את התוצאה מ-180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את גודל שתי הזוויות הידועות לנו.", "math_expression": "50 + 60 = 110" },
            { "verbal_explanation": "שלב 2: נשתמש במשפט שסכום כל הזוויות חייב להיות 180, ונחסיר ממנו את הסכום שחישבנו.", "math_expression": "180 - 110" },
            { "verbal_explanation": "שלב 3: נחשב את ההפרש כדי למצוא את הזווית החסרה.", "math_expression": "70" }
        ],
        "final_answer": "70 מעלות",
        "options": ["70 מעלות", "80 מעלות", "90 מעלות", "60 מעלות"],
        "correctAnswer": 0
    },
    {
        "id": 7,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Low",
        "question_text": "חשבו: <strong>1/2 + 1/4</strong>",
        "hint": "כדי לחבר שברים, עליכם להביא אותם קודם למכנה משותף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא מכנה משותף ל-2 ו-4. המכנה המשותף הקטן ביותר הוא 4.", "math_expression": "מכנה משותף = 4" },
            { "verbal_explanation": "שלב 2: נרחיב את השבר חצי. נכפול את המונה והמכנה שלו ב-2.", "math_expression": "1/2 = 2/4" },
            { "verbal_explanation": "שלב 3: נחבר את המונים (המספרים העליונים) כעת כשהמכנים זהים.", "math_expression": "2/4 + 1/4 = 3/4" }
        ],
        "final_answer": "3 / 4",
        "options": ["2 / 6", "3 / 4", "1 / 3", "2 / 4"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Medium",
        "question_text": "הציבו <strong>x = 3</strong> בתוך הביטוי הבא וחשבו את התוצאה: <strong>2x² - 5</strong>",
        "hint": "החליפו את האות x במספר 3. זכרו שקודם עושים חזקה, אחר כך כפל, ובסוף חיסור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את המספר 3 במקום האות x בביטוי.", "math_expression": "2 * (3²) - 5" },
            { "verbal_explanation": "שלב 2: לפי סדר פעולות, נחשב קודם את החזקה (3 כפול 3).", "math_expression": "2 * 9 - 5" },
            { "verbal_explanation": "שלב 3: נבצע את פעולת הכפל.", "math_expression": "18 - 5" },
            { "verbal_explanation": "שלב 4: נבצע את פעולת החיסור.", "math_expression": "13" }
        ],
        "final_answer": "13",
        "options": ["13", "7", "31", "1"],
        "correctAnswer": 0
    },
    {
        "id": 9,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "High",
        "question_text": "תיבה שמידותיה הן: אורך 10 ס\"מ, רוחב 4 ס\"מ וגובה 5 ס\"מ. מהו ה<strong>נפח</strong> שלה?",
        "hint": "נפח של תיבה מחושב על ידי הכפלת אורך, רוחב וגובה זה בזה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניזכר בנוסחת הנפח לתיבה (אורך כפול רוחב כפול גובה).", "math_expression": "V = a * b * h" },
            { "verbal_explanation": "שלב 2: נציב את הנתונים המספריים.", "math_expression": "V = 10 * 4 * 5" },
            { "verbal_explanation": "שלב 3: נחשב תחילה 4 כפול 5 שזה 20.", "math_expression": "10 * 20" },
            { "verbal_explanation": "שלב 4: נכפול ב-10 ונקבל את הנפח בסמ\"ק.", "math_expression": "200" }
        ],
        "final_answer": "200 סמ\"ק",
        "options": ["100 סמ\"ק", "200 סמ\"ק", "40 סמ\"ק", "19 סמ\"ק"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Medium",
        "question_text": "סמארטפון עולה 2,000 שקלים. כעת יש עליו הנחה של <strong>15%</strong>. כמה שקלים נחסוך בעקבות ההנחה?",
        "hint": "חשבו כמה הם 15% מתוך 2000. קל יותר לחשב קודם כמה זה 10% וכמה זה 5%.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמיר את האחוז (15%) לשבר עשרוני.", "math_expression": "15 / 100 = 0.15" },
            { "verbal_explanation": "שלב 2: נכפיל את השבר העשרוני במחיר המקורי.", "math_expression": "0.15 * 2000" },
            { "verbal_explanation": "שלב 3: שיטה חלופית: 10% מ-2000 זה 200. 5% זה חצי מזה (100). סך הכל 300.", "math_expression": "200 + 100 = 300" }
        ],
        "final_answer": "300 שקלים",
        "options": ["150 שקלים", "200 שקלים", "300 שקלים", "1700 שקלים"],
        "correctAnswer": 2
    },
    {
        "id": 11,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Low",
        "question_text": "באיזה <strong>רביע</strong> במערכת הצירים נמצאת הנקודה (4-, 3)?",
        "hint": "זכרו שרביע ראשון הוא (פלוס, פלוס). הביטו בסימנים: ה-x חיובי וה-y שלילי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבחן את שיעור ה-x של הנקודה. ה-x הוא 3, שזהו מספר חיובי.", "math_expression": "x > 0 (ימינה)" },
            { "verbal_explanation": "שלב 2: נבחן את שיעור ה-y של הנקודה. ה-y הוא 4-, שזהו מספר שלילי.", "math_expression": "y < 0 (למטה)" },
            { "verbal_explanation": "שלב 3: כיוון ימינה ולמטה מתאים לאזור הימני-תחתון של מערכת הצירים, שמוגדר כרביע הרביעי.", "math_expression": "רביע רביעי" }
        ],
        "final_answer": "רביע רביעי",
        "options": ["רביע ראשון", "רביע שני", "רביע שלישי", "רביע רביעי"],
        "correctAnswer": 3
    },
    {
        "id": 12,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "High",
        "question_text": "גילו של אבא גדול ב-25 מגילו של בנו. סכום הגילאים שלהם יחד הוא 45. מהו גילו של <strong>הבן</strong>?",
        "hint": "הגדירו את גיל הבן כ-x. גיל האבא יהיה x + 25. חברו אותם והשוו ל-45.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר משתנה: x הוא גיל הבן.", "math_expression": "בן = x" },
            { "verbal_explanation": "שלב 2: גיל האבא גדול ב-25, ולכן הביטוי שלו יהיה תוספת ל-x.", "math_expression": "אבא = x + 25" },
            { "verbal_explanation": "שלב 3: נבנה משוואה המייצגת את סכום הגילאים.", "math_expression": "x + (x + 25) = 45" },
            { "verbal_explanation": "שלב 4: נכנס איברים. איקס ועוד איקס זה 2 איקס.", "math_expression": "2x + 25 = 45" },
            { "verbal_explanation": "שלב 5: נפתור: נעביר 25 אגף (נשאר 20) ונחלק ב-2.", "math_expression": "2x = 20 -> x = 10" }
        ],
        "final_answer": "10",
        "options": ["10", "15", "20", "25"],
        "correctAnswer": 0
    },
    {
        "id": 13,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Medium",
        "question_text": "השלימו את הסימן החסר: <strong>5-  ___  12-</strong>",
        "hint": "במספרים שליליים, המספר שקרוב יותר לאפס הוא למעשה הגדול יותר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: שני המספרים הנתונים הם מספרים שליליים הממוקמים שמאלה מאפס על ציר המספרים.", "math_expression": "-5 , -12" },
            { "verbal_explanation": "שלב 2: על ציר המספרים, ככל שמתקדמים ימינה (לכיוון האפס והחיוביים), הערך גדל.", "math_expression": "ימינה = גדול יותר" },
            { "verbal_explanation": "שלב 3: המספר 5- נמצא מימין למספר 12-, ולכן הוא גדול יותר (הוא מייצג 'חוב קטן יותר').", "math_expression": "-5 > -12" }
        ],
        "final_answer": "> (גדול מ-)",
        "options": [">", "<", "=", "≥"],
        "correctAnswer": 0
    },
    {
        "id": 14,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Medium",
        "question_text": "שני קווים ישרים נחתכים ויוצרים <strong>זוויות קודקודיות</strong>. אם זווית אחת היא בת 40°, מהו גודל הזווית הקודקודית לה?",
        "hint": "זוויות קודקודיות נמצאות זו מול זו בצומת (X). משפט חשוב קובע שהן שוות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור את המשפט הגיאומטרי הבסיסי: זוויות קודקודיות הן זוויות שנוצרות מחיתוך של שני ישרים ונמצאות אחת מול השנייה.", "math_expression": "צורת X" },
            { "verbal_explanation": "שלב 2: המשפט אומר שזוויות קודקודיות תמיד שוות זו לזו בגודלן.", "math_expression": "זווית א' = זווית ב'" },
            { "verbal_explanation": "שלב 3: לכן, אם הזווית הנתונה היא 40 מעלות, גם הזווית ממול תהיה 40 מעלות.", "math_expression": "40° = 40°" }
        ],
        "final_answer": "40 מעלות",
        "options": ["140 מעלות", "40 מעלות", "90 מעלות", "50 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "High",
        "question_text": "מרחק בין שתי ערים על המפה הוא 5 ס\"מ. קנה המידה של המפה הוא <strong>1:100,000</strong>. מהו המרחק האמיתי ב<strong>קילומטרים</strong>?",
        "hint": "הכפילו את ה-5 בקנה המידה כדי למצוא את המרחק בסנטימטרים, ואז זכרו שבקילומטר אחד יש 100,000 סנטימטרים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את המרחק האמיתי בסנטימטרים על ידי הכפלת המרחק במפה בפי 100,000.", "math_expression": "5 * 100,000 = 500,000 ס\"מ" },
            { "verbal_explanation": "שלב 2: כדי להמיר מסנטימטרים למטרים נוריד 2 אפסים (נחלק ב-100).", "math_expression": "5,000 מטרים" },
            { "verbal_explanation": "שלב 3: כדי להמיר ממטרים לקילומטרים נוריד עוד 3 אפסים (נחלק ב-1,000).", "math_expression": "5 קילומטרים" }
        ],
        "final_answer": "5 קילומטרים",
        "options": ["50 קילומטרים", "5 קילומטרים", "500 מטרים", "0.5 קילומטרים"],
        "correctAnswer": 1
    },
    {
        "id": 16,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Low",
        "question_text": "חשבו: <strong>3- פחות 8-</strong>",
        "hint": "תרגיל של מינוס ברצף: שני סימני מינוס צמודים הופכים לפלוס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את התרגיל בצורה אלגברית ברורה. נראה שיש לנו חיסור של מספר שלילי.", "math_expression": "-3 - (-8)" },
            { "verbal_explanation": "שלב 2: נשתמש בכלל שלפיו שני מינוסים רצופים (פחות מינוס) הופכים לפעולת חיבור.", "math_expression": "-3 + 8" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה: אם אנו בחוב של 3 וקיבלנו 8, אנחנו בפלוס 5.", "math_expression": "5" }
        ],
        "final_answer": "5",
        "options": ["11-", "5-", "5", "11"],
        "correctAnswer": 2
    },
    {
        "id": 17,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Medium",
        "question_text": "מהי <strong>ההסתברות</strong> לקבל את המספר 3 בהטלת קוביית משחק רגילה והוגנת?",
        "hint": "ההסתברות מחושבת על ידי חלוקת מספר האפשרויות הרצויות (המספר 3) בסך כל האפשרויות (6 פאות).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את סך התוצאות האפשריות. לקובייה יש 6 פאות (המספרים 1 עד 6).", "math_expression": "סך הכל = 6" },
            { "verbal_explanation": "שלב 2: נזהה את התוצאה הרצויה. אנו רוצים את המספר 3, שמופיע בדיוק פעם אחת על הקובייה.", "math_expression": "רצוי = 1" },
            { "verbal_explanation": "שלב 3: נרשום את ההסתברות כשבר: תוצאות רצויות חלקי סך התוצאות.", "math_expression": "1 / 6" }
        ],
        "final_answer": "1/6",
        "options": ["1/3", "1/6", "3/6", "1/2"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "High",
        "question_text": "משולש בעל זווית אחת בת 90 מעלות ושתי זוויות נוספות השוות זו לזו. מהו גודלן של שתי הזוויות השוות?",
        "hint": "סכום זוויות במשולש הוא 180. חסרו 90 מהסכום, וחלקו את השארית לשני חלקים שווים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סכום כל הזוויות במשולש הוא תמיד 180 מעלות.", "math_expression": "סכום = 180°" },
            { "verbal_explanation": "שלב 2: נחסיר את הזווית הישרה (90 מעלות) מסך הכל.", "math_expression": "180 - 90 = 90" },
            { "verbal_explanation": "שלב 3: נותרו 90 מעלות לחלוקה שווה בין שתי הזוויות הנותרות (כי נאמר שהן שוות).", "math_expression": "90 / 2 = 45" },
            { "verbal_explanation": "שלב 4: כל אחת מהזוויות היא בת 45 מעלות (זהו משולש ישר זווית ושווה שוקיים).", "math_expression": "45°" }
        ],
        "final_answer": "45 מעלות",
        "options": ["60 מעלות", "30 מעלות", "45 מעלות", "90 מעלות"],
        "correctAnswer": 2
    },
    {
        "id": 19,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Medium",
        "question_text": "מהו שטחו של <strong>משולש</strong> שאורך צלעו הוא 10 ס\"מ, והגובה היורד אל צלע זו הוא 6 ס\"מ?",
        "hint": "נוסחת שטח משולש היא (צלע כפול הגובה לאותה צלע) חלקי 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניזכר בנוסחה לשטח משולש: אורך בסיס כפול גובה, וכל זה חלקי 2.", "math_expression": "S = (a * h) / 2" },
            { "verbal_explanation": "שלב 2: נציב את הנתונים שלנו: צלע 10 וגובה 6.", "math_expression": "S = (10 * 6) / 2" },
            { "verbal_explanation": "שלב 3: נחשב את המונה (10 כפול 6 הם 60).", "math_expression": "S = 60 / 2" },
            { "verbal_explanation": "שלב 4: נחלק ב-2 כדי לקבל את השטח הסופי.", "math_expression": "30" }
        ],
        "final_answer": "30 סמ\"ר",
        "options": ["60 סמ\"ר", "30 סמ\"ר", "16 סמ\"ר", "15 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "חזרה על חומר כיתה ז'",
        "difficulty": "Low",
        "question_text": "ממוצע הציונים של יוסי ב-3 מבחנים הוא 80. סך הכל הנקודות שצבר הוא:",
        "hint": "ממוצע מחושב על ידי סכום הנקודות חלקי מספר המבחנים. לכן, סכום הנקודות הוא הממוצע כפול מספר המבחנים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את נוסחת הממוצע.", "math_expression": "ממוצע = סכום / כמות" },
            { "verbal_explanation": "שלב 2: כדי למצוא את הסכום, נבצע את הפעולה ההפוכה וניצור משוואה: נכפיל את הממוצע בכמות.", "math_expression": "סכום = ממוצע * כמות" },
            { "verbal_explanation": "שלב 3: נציב את הנתונים ונחשב: 80 כפול 3.", "math_expression": "80 * 3 = 240" }
        ],
        "final_answer": "240",
        "options": ["80", "160", "240", "320"],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 2: פתרון מבחנים משנים קודמות (20 שאלות) ---
    // ==============================================================
    {
        "id": 21,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "Medium",
        "question_text": "שאלת מיצ\"ב: במשולש ישר זווית אורך ניצב אחד הוא 3 ס\"מ ואורך הניצב השני הוא 4 ס\"מ. מהו אורך ה<strong>יתר</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100'><polygon points='10,10 10,90 90,90' fill='#f1f5f9' stroke='#1e293b' stroke-width='2'/><text x='45' y='85' font-size='12'>4</text><text x='15' y='55' font-size='12'>3</text><text x='60' y='50' font-size='12' fill='red'>?</text></svg></div>",
        "hint": "השתמשו במשפט פיתגורס: סכום ריבועי הניצבים שווה לריבוע היתר (a² + b² = c²).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את משפט פיתגורס המתאים למשולש ישר זווית.", "math_expression": "a² + b² = c²" },
            { "verbal_explanation": "שלב 2: נציב את אורכי הניצבים הנתונים לנו.", "math_expression": "3² + 4² = c²" },
            { "verbal_explanation": "שלב 3: נחשב את הריבועים. 3 בריבוע זה 9, 4 בריבוע זה 16.", "math_expression": "9 + 16 = 25" },
            { "verbal_explanation": "שלב 4: מצאנו ש-c² שווה ל-25. נוציא שורש ריבועי כדי למצוא את אורך היתר c.", "math_expression": "c = √25 = 5" }
        ],
        "final_answer": "5 ס\"מ",
        "options": ["5 ס\"מ", "7 ס\"מ", "12 ס\"מ", "25 ס\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 22,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "High",
        "question_text": "שאלת מיצ\"ב: פתרו את מערכת המשוואות הבאה:<br>משוואה א: <strong>x + y = 10</strong><br>משוואה ב: <strong>x - y = 4</strong>",
        "hint": "הכי קל להשתמש בשיטת חיבור משוואות (השוואת מקדמים). אם תחברו את שתי המשוואות בטור, ה-y יתבטל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את שתי המשוואות בטור. ה-x ועוד x הופך ל-2x. ה-y ומינוס y מבטלים זה את זה. ה-10 ועוד 4 הופך ל-14.", "math_expression": "2x = 14" },
            { "verbal_explanation": "שלב 2: נחלק ב-2 כדי למצוא את ערכו של x.", "math_expression": "x = 7" },
            { "verbal_explanation": "שלב 3: נציב x=7 באחת המשוואות (הראשונה למשל) כדי למצוא את y.", "math_expression": "7 + y = 10" },
            { "verbal_explanation": "שלב 4: נפתור: y שווה 10 פחות 7, שזה 3.", "math_expression": "y = 3" }
        ],
        "final_answer": "x = 7, y = 3",
        "options": ["x=6, y=4", "x=7, y=3", "x=5, y=5", "x=8, y=2"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "Medium",
        "question_text": "שאלת מיצ\"ב: נתונה הפונקציה הקווית <strong>y = 3x - 6</strong>. מהי נקודת החיתוך של הפונקציה עם <strong>ציר ה-x</strong>?",
        "hint": "כדי למצוא את החיתוך עם ציר ה-x, זכרו שבנקודה זו הגובה הוא 0, כלומר מציבים y=0 במשוואה ופותרים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בנקודת חיתוך עם ציר x, ערך ה-y תמיד שווה לאפס. נציב זאת במשוואה.", "math_expression": "0 = 3x - 6" },
            { "verbal_explanation": "שלב 2: נפתור את המשוואה. נעביר את ה-6 לאגף השמאלי (סימנו ישתנה לפלוס).", "math_expression": "6 = 3x" },
            { "verbal_explanation": "שלב 3: נחלק ב-3 כדי למצוא את x.", "math_expression": "x = 2" },
            { "verbal_explanation": "שלב 4: נרשום את התוצאה כנקודה מלאה עם שיעורי x ו-y.", "math_expression": "(2, 0)" }
        ],
        "final_answer": "(2, 0)",
        "options": ["(0, -6)", "(2, 0)", "(-2, 0)", "(6, 0)"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "Medium",
        "question_text": "שאלת מיצ\"ב: מחיר חולצה הוא x שקלים. מחיר מכנסיים יקר ב-20 שקלים ממחיר החולצה. דני קנה 3 חולצות ומכנסיים אחד ושילם 140 שקלים. איזה משוואה מייצגת את הבעיה?",
        "hint": "רשמו את הביטוי למחיר המכנסיים (x+20), ואז הרכיבו סכום של 3 חולצות ועוד מכנסיים אחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתרגם למתמטיקה את מחיר החולצה (x).", "math_expression": "חולצה = x" },
            { "verbal_explanation": "שלב 2: נתרגם למתמטיקה את מחיר המכנסיים שיקרים ב-20.", "math_expression": "מכנסיים = x + 20" },
            { "verbal_explanation": "שלב 3: נבנה את המשוואה לסך התשלום (140): 3 פעמים חולצה פלוס פעם אחת מכנסיים.", "math_expression": "3 * x + 1 * (x + 20) = 140" },
            { "verbal_explanation": "שלב 4: נחבר את החלקים למשוואה סופית אחת.", "math_expression": "3x + x + 20 = 140" }
        ],
        "final_answer": "3x + (x + 20) = 140",
        "options": ["3x + x = 140", "x + 20 = 140", "3x + (x + 20) = 140", "3(x + 20) = 140"],
        "correctAnswer": 2
    },
    {
        "id": 25,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "High",
        "question_text": "שאלת מיצ\"ב: פתרו את אי-השוויון הבא: <strong>4x - 5 > 15</strong>",
        "hint": "פתרו בדיוק כמו משוואה רגילה, על ידי העברת מספרים לצד אחד ו-x לצד שני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעביר את המינוס 5 לאגף הימני בסימן פלוס.", "math_expression": "4x > 15 + 5" },
            { "verbal_explanation": "שלב 2: נחשב את הסכום באגף הימני.", "math_expression": "4x > 20" },
            { "verbal_explanation": "שלב 3: נחלק את שני אגפי אי-השוויון ב-4, כדי לבודד את ה-x (מכיוון שמחלקים במספר חיובי, הסימן לא מתהפך).", "math_expression": "x > 5" }
        ],
        "final_answer": "x > 5",
        "options": ["x < 5", "x > 5", "x > 20", "x < 4"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "Medium",
        "question_text": "שאלת מיצ\"ב: סדרה חשבונית מתחילה במספרים: 7, 10, 13... מה תהיה 'חוקיות' הקפיצה, ומהו המספר הבא?",
        "hint": "בדקו מהו ההפרש (הפער) בין כל שני מספרים סמוכים בסדרה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את ההפרש בין המספר השני לראשון.", "math_expression": "10 - 7 = 3" },
            { "verbal_explanation": "שלב 2: נוודא שהקפיצה זהה גם למספר השלישי.", "math_expression": "13 - 10 = 3" },
            { "verbal_explanation": "שלב 3: החוקיות היא הוספת 3 לכל איבר קודם (+3). נוסיף 3 למספר האחרון הידוע כדי למצוא את הבא.", "math_expression": "13 + 3 = 16" }
        ],
        "final_answer": "הקפיצה היא +3, והמספר הבא 16.",
        "options": ["קפיצה +3, מספר בא 16.", "קפיצה +4, מספר בא 17.", "קפיצה +2, מספר בא 15.", "קפיצה *2, מספר בא 26."],
        "correctAnswer": 0
    },
    {
        "id": 27,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "High",
        "question_text": "שאלת מיצ\"ב: פתרו את המשוואה עם השברים: <strong>x/2 + x/4 = 6</strong>",
        "hint": "מצאו מכנה משותף ל-2 ול-4 (שהוא 4) והכפילו את כל המשוואה בו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את כל איברי המשוואה במכנה משותף 4 כדי להיפטר מהשברים.", "math_expression": "(x/2)*4 + (x/4)*4 = 6*4" },
            { "verbal_explanation": "שלב 2: נבצע את הצמצומים במונים.", "math_expression": "2x + x = 24" },
            { "verbal_explanation": "שלב 3: נכנס איברים דומים באגף שמאל.", "math_expression": "3x = 24" },
            { "verbal_explanation": "שלב 4: נחלק ב-3 למציאת התוצאה.", "math_expression": "x = 8" }
        ],
        "final_answer": "x = 8",
        "options": ["x = 6", "x = 8", "x = 12", "x = 24"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "Medium",
        "question_text": "שאלת מיצ\"ב: מהו נפח גליל ששטח בסיסו הוא 20 סמ\"ר וגובהו הוא 5 ס\"מ?",
        "hint": "הנוסחה הפשוטה לנפח של כל גוף בעל בסיס ישר (כמו גליל או מנסרה) היא: שטח הבסיס כפול הגובה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור את נוסחת הנפח: הנפח (V) שווה לשטח הבסיס (S) כפול הגובה (h).", "math_expression": "V = S * h" },
            { "verbal_explanation": "שלב 2: נציב את המספרים שקיבלנו מהשאלה.", "math_expression": "V = 20 * 5" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה.", "math_expression": "V = 100" }
        ],
        "final_answer": "100 סמ\"ק",
        "options": ["25 סמ\"ק", "100 סמ\"ק", "4 סמ\"ק", "50 סמ\"ק"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "High",
        "question_text": "שאלת מיצ\"ב: שתי מכוניות יצאו מאותה נקודה לכיוונים מנוגדים. האחת נסעה במהירות 60 קמ\"ש והשנייה ב-80 קמ\"ש. מה יהיה המרחק ביניהן לאחר שעתיים?",
        "hint": "מכיוון שהן נוסעות לכיוונים מנוגדים, מהירויותיהן מתחברות. חשבו את המרחק המשותף בשעה, והכפילו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב בכמה מתרחקות המכוניות זו מזו בכל שעה (סכום המהירויות).", "math_expression": "60 + 80 = 140 קמ\"ש" },
            { "verbal_explanation": "שלב 2: נכפיל את קצב ההתרחקות (140) במספר השעות שעברו (2).", "math_expression": "140 * 2 = 280" }
        ],
        "final_answer": "280 ק\"מ",
        "options": ["140 ק\"מ", "280 ק\"מ", "120 ק\"מ", "160 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "Medium",
        "question_text": "שאלת מיצ\"ב: מהו ה<strong>שכיח</strong> בציוני הכיתה הבאים: 70, 80, 80, 90, 80, 100?",
        "hint": "שכיח בסטטיסטיקה הוא הערך שמופיע הכי הרבה פעמים (תדירותו היא הגבוהה ביותר).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נספור כמה פעמים מופיע כל ציון ברשימה שקיבלנו.", "math_expression": "70: 1, 80: 3, 90: 1, 100: 1" },
            { "verbal_explanation": "שלב 2: נחפש את הציון שהתדירות שלו הכי גדולה. הציון 80 מופיע 3 פעמים.", "math_expression": "שכיח = 80" }
        ],
        "final_answer": "80",
        "options": ["70", "80", "90", "100"],
        "correctAnswer": 1
    },
    {
        "id": 31,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "High",
        "question_text": "שאלת מיצ\"ב: נתון שהישרים <strong>y = ax + 3</strong> ו- <strong>y = -2x - 1</strong> הם ישרים מקבילים. למה שווה הפרמטר a?",
        "hint": "תנאי לישרים מקבילים במערכת צירים הוא שיש להם בדיוק את אותו השיפוע (המקדם של ה-x).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את השיפוע של הישר השני שהוא הישר המלא שנתון לנו.", "math_expression": "שיפוע = -2" },
            { "verbal_explanation": "שלב 2: נדע שכדי להיות מקביל אליו, גם הישר הראשון חייב להיות בעל אותו שיפוע.", "math_expression": "a = -2" }
        ],
        "final_answer": "-2",
        "options": ["3", "-1", "-2", "2"],
        "correctAnswer": 2
    },
    {
        "id": 32,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "Low",
        "question_text": "שאלת מיצ\"ב: מה ההסתברות לקבל מספר המתחלק ב-2 בהטלת קוביית משחק רגילה?",
        "hint": "אלו הם בעצם כל המספרים הזוגיים שעל פאות הקובייה. כמה כאלו יש מתוך 6?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מרחב המדגם בקובייה הוא 6 אפשרויות (המספרים 1 עד 6).", "math_expression": "סך הכל = 6" },
            { "verbal_explanation": "שלב 2: המספרים שמתחלקים ב-2 (הזוגיים) הם 2, 4 ו-6.", "math_expression": "רצויים = 3" },
            { "verbal_explanation": "שלב 3: נבנה הסתברות ונצמצם את השבר.", "math_expression": "3 / 6 = 1 / 2" }
        ],
        "final_answer": "1/2",
        "options": ["1/6", "1/3", "1/2", "3/4"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "Medium",
        "question_text": "שאלת מיצ\"ב: חשבו את שטח המעגל שרדיוסו 5 ס\"מ (השתמשו ב-π=3.14 לצורך אומדן).",
        "hint": "נוסחת שטח מעגל היא π כפול הרדיוס בריבוע (π * r²).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את הנוסחה לחישוב שטח מעגל.", "math_expression": "S = π * r²" },
            { "verbal_explanation": "שלב 2: נציב את הנתונים, כאשר נבצע תחילה את החזקה על הרדיוס 5.", "math_expression": "S = 3.14 * (5²)" },
            { "verbal_explanation": "שלב 3: נחשב 5 בריבוע שזה 25, ואז נכפול בפאי.", "math_expression": "S = 3.14 * 25" },
            { "verbal_explanation": "שלב 4: התוצאה היא 78.5 (ניתן גם לרשום כ-25π).", "math_expression": "78.5" }
        ],
        "final_answer": "78.5 סמ\"ר",
        "options": ["31.4 סמ\"ר", "78.5 סמ\"ר", "25 סמ\"ר", "100 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "High",
        "question_text": "שאלת מיצ\"ב: קבוצת מספרים מכילה את: 10, 20, 30. איזה מספר יש להוסיף לקבוצה כדי שהממוצע החדש יהיה 25?",
        "hint": "חשבו מהו סכום 4 המספרים הדרוש כדי שהממוצע יהיה 25, ואז חסרו את מה שכבר יש לכם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב מה אמור להיות סכום הנקודות של כל 4 המספרים יחד (ממוצע 25 כפול 4).", "math_expression": "25 * 4 = 100" },
            { "verbal_explanation": "שלב 2: נחשב מהו הסכום הנוכחי של שלושת המספרים שבידינו.", "math_expression": "10 + 20 + 30 = 60" },
            { "verbal_explanation": "שלב 3: נחסיר את הסכום הקיים מהסכום הכולל הנדרש כדי לגלות את המספר החסר להשלמה.", "math_expression": "100 - 60 = 40" }
        ],
        "final_answer": "40",
        "options": ["40", "25", "30", "50"],
        "correctAnswer": 0
    },
    {
        "id": 35,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "Medium",
        "question_text": "שאלת מיצ\"ב: משולש שווה שוקיים נחצה על ידי גובה לבסיס. אילו שני משולשים נוצרו?",
        "hint": "חשבו אילו תכונות יש לגובה (זווית 90) וכיצד הוא מחלק את משולש שווה השוקיים האם לחלקים זהים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במשולש שווה שוקיים, הגובה שיורד לבסיס הוא גם תיכון וגם חוצה זווית הראש.", "math_expression": "גובה = תיכון" },
            { "verbal_explanation": "שלב 2: לכן הוא מחלק את המשולש המקורי לשני משולשים ישרים זווית שזהים בגודלם ובצורתם לחלוטין (חופפים).", "math_expression": "חופפים" }
        ],
        "final_answer": "שני משולשים ישרי זווית חופפים.",
        "options": ["שני משולשים שוני צלעות", "שני משולשים חופפים.", "שני משולשים קהי זווית", "שני משולשים שאינם קשורים"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "Low",
        "question_text": "שאלת מיצ\"ב: איזה ביטוי שווה ערך לביטוי: <strong>2(x - 3) + 4</strong>?",
        "hint": "פתחו את הסוגריים בעזרת חוק הפילוג וכנסו את המספרים החופשיים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק הפילוג כדי לפתוח סוגריים. נכפיל את ה-2 ב-x ובמינוס 3.", "math_expression": "2x - 6 + 4" },
            { "verbal_explanation": "שלב 2: נסכם את המספרים החופשיים שנותרו בחוץ: מינוס 6 פלוס 4 שווה מינוס 2.", "math_expression": "2x - 2" }
        ],
        "final_answer": "2x - 2",
        "options": ["2x - 6", "2x + 1", "2x - 2", "2x + 4"],
        "correctAnswer": 2
    },
    {
        "id": 37,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "High",
        "question_text": "שאלת מיצ\"ב: נתון אי-שוויון: <strong>-3x < 12</strong>. מהו פתרונו?",
        "hint": "כאשר מחלקים את שני האגפים של אי-שוויון במספר שלילי, חובה להפוך את כיוון הסימן!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי לבודד את ה-x, עלינו לחלק את התרגיל כולו במקדם שלו, שהוא מינוס 3.", "math_expression": "-3x / -3" },
            { "verbal_explanation": "שלב 2: מכיוון שחילקנו במספר שלילי, הכלל דורש שנהפוך את כיוון אי-השוויון מ'קטן' ל'גדול'.", "math_expression": "x > 12 / -3" },
            { "verbal_explanation": "שלב 3: נחשב את החלוקה ונקבל את הפתרון הסופי.", "math_expression": "x > -4" }
        ],
        "final_answer": "x > -4",
        "options": ["x < -4", "x > -4", "x < 4", "x > 4"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "Medium",
        "question_text": "שאלת מיצ\"ב: שטח טרפז מחושב על ידי הכפלת סכום הבסיסים בגובה, וחילוק ב-2. בסיסי טרפז הם 6 ו-10. גובהו 4. מהו שטחו?",
        "hint": "הציבו את הנתונים בדיוק לפי סדר הנוסחה שתוארה בשאלה: (6+10) כפול 4, ואז חלקי 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סכום שני הבסיסים של הטרפז.", "math_expression": "6 + 10 = 16" },
            { "verbal_explanation": "שלב 2: נכפיל את הסכום שקיבלנו בגובה הנתון.", "math_expression": "16 * 4 = 64" },
            { "verbal_explanation": "שלב 3: לבסוף, נחלק את המכפלה ב-2 כפי שהנוסחה דורשת.", "math_expression": "64 / 2 = 32" }
        ],
        "final_answer": "32 סמ\"ר",
        "options": ["64 סמ\"ר", "20 סמ\"ר", "32 סמ\"ר", "40 סמ\"ר"],
        "correctAnswer": 2
    },
    {
        "id": 39,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "Medium",
        "question_text": "שאלת מיצ\"ב: מה יהיה תחום ההצבה (התחום המותר) של הפונקציה הרציונלית <strong>y = 5 / (x - 2)</strong>?",
        "hint": "כלל הברזל במתמטיקה: אסור בשום פנים ואופן לחלק באפס. איזה ערך של x יגרום למכנה להתאפס?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמשוך רק את החלק של המכנה מהמשוואה כדי לבחון אותו מקרוב.", "math_expression": "x - 2" },
            { "verbal_explanation": "שלב 2: נדרוש בתוקף שהמכנה הזה יהיה שונה מאפס.", "math_expression": "x - 2 ≠ 0" },
            { "verbal_explanation": "שלב 3: נעביר את ה-2 אגף ונגלה מה מותר.", "math_expression": "x ≠ 2" }
        ],
        "final_answer": "x שונה מ-2",
        "options": ["כל x", "x שונה מ-0", "x שונה מ-2", "x גדול מ-2"],
        "correctAnswer": 2
    },
    {
        "id": 40,
        "subTopic": "פתרון מבחנים משנים קודמות",
        "difficulty": "High",
        "question_text": "שאלת מיצ\"ב (אתגר): פתרו את המשוואה הבאה: <strong>x² = 36</strong>. כמה פתרונות יש לה ומהם?",
        "hint": "זכרו שפעולת שורש ריבועי על מספר חיובי תמיד מניבה שתי תוצאות: אחת חיובית ואחת שלילית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי לבטל את פונקציית הריבוע (החזקה), עלינו להפעיל פעולת שורש ריבועי (√) על שני אגפי המשוואה.", "math_expression": "x = ±√36" },
            { "verbal_explanation": "שלב 2: נחשב את השורש של 36 ונקבל 6. לכן התשובה יכולה להיות פלוס 6 או מינוס 6.", "math_expression": "x = 6 , x = -6" },
            { "verbal_explanation": "שלב 3: נוודא: 6 כפול 6 הם 36, וגם מינוס 6 כפול מינוס 6 הם 36. לכן שניהם נכונים.", "math_expression": "(6)² = 36 , (-6)² = 36" }
        ],
        "final_answer": "שני פתרונות: 6 ומינוס 6.",
        "options": ["פתרון אחד: 6", "שני פתרונות: 6 ומינוס 6.", "אין פתרון", "פתרון אחד: 18"],
        "correctAnswer": 1
    }
];
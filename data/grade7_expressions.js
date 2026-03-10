const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: מושג המשתנה (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "מושג המשתנה",
        "difficulty": "Low",
        "question_text": "איזה ביטוי אלגברי מתאר את המשפט: <strong>'מספר הגדול ב-5 מהמספר X'</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='60'><rect x='20' y='10' width='40' height='40' rx='5' fill='#fefce8' stroke='#1e293b' stroke-width='2'/><text x='40' y='35' font-size='16' font-weight='bold' text-anchor='middle'>X</text><line x1='70' y1='30' x2='120' y2='30' stroke='#b09151' stroke-width='3'/><polygon points='110,20 130,30 110,40' fill='#b09151'/><text x='95' y='20' font-size='14' font-weight='bold'>+ 5</text><rect x='140' y='10' width='50' height='40' rx='5' fill='#f8fafc' stroke='#1e293b' stroke-width='2' stroke-dasharray='4'/><text x='165' y='35' font-size='20' text-anchor='middle'>?</text></svg></div>",
        "hint": "המילה 'גדול ב-' מצביעה תמיד על פעולת חיבור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אנו מתחילים מהמספר הנתון שלנו, שהוא הנעלם X.", "math_expression": "X" },
            { "verbal_explanation": "שלב 2: אומרים לנו שהמספר החדש 'גדול ב-5'. פעולה המציינת הגדלה בכמות מסוימת היא פעולת החיבור (+).", "math_expression": "+ 5" },
            { "verbal_explanation": "שלב 3: נחבר את שני החלקים יחד לקבלת הביטוי האלגברי השלם.", "math_expression": "X + 5" }
        ],
        "final_answer": "X + 5",
        "options": ["5X", "X + 5", "X - 5", "X / 5"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "מושג המשתנה",
        "difficulty": "Low",
        "question_text": "איזה ביטוי מתאר: <strong>'מספר הקטן ב-3 מהמספר Y'</strong>?",
        "hint": "המילה 'קטן ב-' מצביעה על חיסור. ממי מחסרים? מהמספר המקורי Y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המספר ההתחלתי שלנו הוא Y.", "math_expression": "Y" },
            { "verbal_explanation": "שלב 2: עלינו להקטין אותו. המילה 'קטן ב-' מתורגמת לפעולת חיסור.", "math_expression": "- 3" },
            { "verbal_explanation": "שלב 3: לכן, ניקח את Y ונחסיר ממנו 3. שימו לב שסדר הכתיבה משנה (זה לא 3 פחות Y).", "math_expression": "Y - 3" }
        ],
        "final_answer": "Y - 3",
        "options": ["Y - 3", "3 - Y", "3Y", "Y / 3"],
        "correctAnswer": 0
    },
    {
        "id": 3,
        "subTopic": "מושג המשתנה",
        "difficulty": "Medium",
        "question_text": "כיצד נכתוב בצורה מקוצרת ונכונה את המשפט: <strong>'מספר הגדול פי 4 מהמספר A'</strong>?",
        "hint": "המילה 'פי' מצביעה על כפל. באלגברה, נהוג לכתוב את המספר (המקדם) לפני האות, ללא סימן כפל ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 'גדול פי 4' משמעותו לקחת את המספר (A) ולהכפיל אותו ב-4.", "math_expression": "4 * A" },
            { "verbal_explanation": "שלב 2: בשפת האלגברה, כדי למנוע בלבול בין סימן הכפל (X) לאות X, אנו משמיטים את נקודת הכפל כשהיא בין מספר לאות.", "math_expression": "4A" },
            { "verbal_explanation": "שלב 3: תמיד רושמים קודם את המספר ואז את האות.", "math_expression": "4A" }
        ],
        "final_answer": "4A",
        "options": ["A + 4", "A4", "4A", "A / 4"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "מושג המשתנה",
        "difficulty": "Low",
        "question_text": "איזה ביטוי מתאר <strong>'מחצית מהמספר X'</strong>?",
        "hint": "מחצית (חצי) פירושה לחלק את המספר ב-2. אפשר לכתוב זאת גם בעזרת קו שבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לקחת מחצית ממשהו אומר לחלק אותו ל-2 חלקים שווים.", "math_expression": "X / 2" },
            { "verbal_explanation": "שלב 2: באלגברה, נהוג ויפה יותר לכתוב פעולת חילוק בעזרת קו שבר. ה-X במונה וה-2 במכנה.", "math_expression": "X / 2" }
        ],
        "final_answer": "X / 2",
        "options": ["X - 2", "2X", "X / 2", "X + 0.5"],
        "correctAnswer": 2
    },
    {
        "id": 5,
        "subTopic": "מושג המשתנה",
        "difficulty": "Medium",
        "question_text": "כתבו ביטוי עבור: <strong>'כפלו את המספר X ב-2, ולאחר מכן הוסיפו לתוצאה 7'</strong>.",
        "hint": "עקבו אחרי סדר הפעולות בסיפור. קודם כפל (2X), ואז הוספה (+7).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל בפעולה הראשונה. כפל של המספר X ב-2 נכתב באלגברה כ-2X.", "math_expression": "2X" },
            { "verbal_explanation": "שלב 2: כעת ניקח את התוצאה הזו (2X) ונוסיף לה את המספר 7 בעזרת פעולת חיבור.", "math_expression": "2X + 7" }
        ],
        "final_answer": "2X + 7",
        "options": ["2(X + 7)", "X + 14", "2X + 7", "7X + 2"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "מושג המשתנה",
        "difficulty": "Medium",
        "question_text": "גילו של דן היום הוא <strong>X שנים</strong>. מה יהיה גילו של דן בעוד <strong>10 שנים</strong>?",
        "hint": "כשאדם מתבגר, הגיל שלו גדל. איזו פעולת חשבון מתאימה לתהליך של הוספת שנים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אנו יודעים שהגיל הנוכחי מיוצג על ידי המשתנה X.", "math_expression": "גיל כיום = X" },
            { "verbal_explanation": "שלב 2: בעוד 10 שנים, יתווספו לגילו של דן בדיוק 10 שנים.", "math_expression": "+ 10" },
            { "verbal_explanation": "שלב 3: נחבר את כמות השנים שחלפו לגיל הנוכחי.", "math_expression": "X + 10" }
        ],
        "final_answer": "X + 10",
        "options": ["10X", "X + 10", "X - 10", "10 / X"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "מושג המשתנה",
        "difficulty": "Medium",
        "question_text": "מחיר של קילוגרם עגבניות הוא <strong>M שקלים</strong>. מה יהיה המחיר של <strong>3 קילוגרמים</strong> עגבניות?",
        "hint": "אם קילו אחד עולה M, שני קילו יעלו פעמיים M, ושלושה קילו יעלו...",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מחיר של יחידה אחת נתון לנו בתור M.", "math_expression": "1 קילו = M" },
            { "verbal_explanation": "שלב 2: כדי למצוא מחיר של כמות גדולה יותר, אנו מכפילים את הכמות במחיר ליחידה.", "math_expression": "3 * M" },
            { "verbal_explanation": "שלב 3: נכתוב את התוצאה לפי כללי האלגברה (מספר לפני אות, ללא סימן כפל).", "math_expression": "3M" }
        ],
        "final_answer": "3M",
        "options": ["M + 3", "M / 3", "3M", "3 - M"],
        "correctAnswer": 2
    },
    {
        "id": 8,
        "subTopic": "מושג המשתנה",
        "difficulty": "High",
        "question_text": "אם מספר שלם מסוים הוא <strong>N</strong>, איזה ביטוי מתאר את <strong>המספר העוקב לו</strong> (המספר שבא מיד אחריו בספירה)?",
        "hint": "חשבו על מספרים רגילים. המספר העוקב ל-5 הוא 6. המספר העוקב ל-10 הוא 11. בכמה גדל המספר בכל פעם?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בסדרת המספרים השלמים (1, 2, 3...), כל מספר גדול מקודמו בדיוק ב-1.", "math_expression": "+ 1" },
            { "verbal_explanation": "שלב 2: לכן, אם אנו נמצאים על המספר N, כדי להגיע למספר הבא בתור עלינו פשוט להוסיף לו 1.", "math_expression": "N + 1" }
        ],
        "final_answer": "N + 1",
        "options": ["2N", "N + 1", "N - 1", "N + 2"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "מושג המשתנה",
        "difficulty": "High",
        "question_text": "ידוע ש- <strong>K</strong> הוא מספר שלם כלשהו (זוגי או אי-זוגי). איזה ביטוי יבטיח שהתוצאה תהיה <strong>תמיד מספר זוגי</strong>?",
        "hint": "איזו פעולת חשבון, אם נפעיל אותה על כל מספר בעולם (כמו 3, 4, או 7), תמיד תהפוך אותו לזוגי?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הגדרה של מספר זוגי היא מספר שמתחלק ב-2 ללא שארית.", "math_expression": "זוגי = מתחלק ב-2" },
            { "verbal_explanation": "שלב 2: לכן, כל מספר (בין אם הוא במקור זוגי ובין אם אי-זוגי), אם נכפיל אותו ב-2, הוא יהפוך בהכרח למספר זוגי.", "math_expression": "2 * K" },
            { "verbal_explanation": "שלב 3: הביטוי המייצג תמיד מספר זוגי באלגברה הוא 2K.", "math_expression": "2K" }
        ],
        "final_answer": "2K",
        "options": ["K + 2", "K / 2", "2K", "K - 2"],
        "correctAnswer": 2
    },
    {
        "id": 10,
        "subTopic": "מושג המשתנה",
        "difficulty": "Low",
        "question_text": "אורך צלע של ריבוע הוא <strong>A ס\"מ</strong>. מהו <strong>היקף הריבוע</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='100' height='100'><rect x='10' y='10' width='80' height='80' fill='#fefce8' stroke='#1e293b' stroke-width='2'/><text x='50' y='105' font-size='16' font-weight='bold' text-anchor='middle'>A</text><text x='105' y='55' font-size='16' font-weight='bold' text-anchor='middle'>A</text></svg></div>",
        "hint": "היקף הוא סכום כל הצלעות של הצורה. לריבוע יש 4 צלעות שוות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בריבוע יש 4 צלעות. נתון לנו שכל צלע אורכה A.", "math_expression": "A , A , A , A" },
            { "verbal_explanation": "שלב 2: היקף מחשבים על ידי חיבור כל הצלעות: A + A + A + A.", "math_expression": "A + A + A + A" },
            { "verbal_explanation": "שלב 3: כתיבה מקוצרת לחיבור של אותו איבר 4 פעמים היא פשוט כפל ב-4.", "math_expression": "4A" }
        ],
        "final_answer": "4A",
        "options": ["A + 4", "4A", "A / 4", "A²"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "מושג המשתנה",
        "difficulty": "Low",
        "question_text": "אורך מלבן הוא <strong>a</strong> ורוחבו הוא <strong>b</strong>. מהו הביטוי המייצג את <strong>שטח המלבן</strong>?",
        "hint": "שטח מלבן מחושב על ידי הכפלת האורך ברוחב.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הנוסחה לחישוב שטח מלבן היא צלע אחת כפול הצלע הסמוכה לה (אורך כפול רוחב).", "math_expression": "אורך * רוחב" },
            { "verbal_explanation": "שלב 2: נציב את האותיות הנתונות שלנו בנוסחה.", "math_expression": "a * b" },
            { "verbal_explanation": "שלב 3: באלגברה, כשמכפילים שני משתנים שונים, אפשר פשוט לכתוב אותם צמודים זה לזה.", "math_expression": "ab" }
        ],
        "final_answer": "ab",
        "options": ["a + b", "2a + 2b", "ab", "a / b"],
        "correctAnswer": 2
    },
    {
        "id": 12,
        "subTopic": "מושג המשתנה",
        "difficulty": "Medium",
        "question_text": "רונית נכנסה לחנות עם <strong>50 שקלים</strong>. היא קנתה ספר שמחירו <strong>X שקלים</strong>. כמה <strong>עודף</strong> היא תקבל?",
        "hint": "העודף הוא מה שנשאר לה מהכסף ההתחלתי אחרי שהיא שילמה על הספר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הסכום ההתחלתי שהיה ברשותה של רונית הוא 50.", "math_expression": "50" },
            { "verbal_explanation": "שלב 2: כשהיא קונה ספר, הכסף הזה יורד מהסכום הכולל שלה. כלומר, פעולת חיסור.", "math_expression": "- X" },
            { "verbal_explanation": "שלב 3: לכן, העודף הוא הסכום ההתחלתי פחות מחיר הקנייה.", "math_expression": "50 - X" }
        ],
        "final_answer": "50 - X",
        "options": ["X - 50", "50 - X", "50X", "50 + X"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "מושג המשתנה",
        "difficulty": "Medium",
        "question_text": "בביטוי האלגברי <strong>5m</strong>, המספר 5 נקרא 'מקדם'. מה המשמעות המתמטית של ביטוי זה?",
        "hint": "כאשר מספר ואות צמודים זה לזה ללא סימן ביניהם, איזו פעולת חשבון מתחבאת שם?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ביטוי כמו 5m הוא למעשה דרך מקוצרת לכתוב חיבור חוזר: m + m + m + m + m.", "math_expression": "m + m + m + m + m" },
            { "verbal_explanation": "שלב 2: המשמעות של חיבור חוזר היא פעולת כפל.", "math_expression": "5 * m" },
            { "verbal_explanation": "שלב 3: לכן, המספר 5 'מכפיל' את המשתנה m.", "math_expression": "5 כפול m" }
        ],
        "final_answer": "5 כפול m",
        "options": ["5 ועוד m", "5 כפול m", "m בחזקת 5", "5 פחות m"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "מושג המשתנה",
        "difficulty": "High",
        "question_text": "איזה מהביטויים הבאים <strong>אינו</strong> מייצג את המשפט 'מחצית מ-X'?",
        "hint": "יש כמה דרכים לכתוב חצי מכמות: לחלק ב-2, או להכפיל בשבר חצי, או להכפיל ב-0.5 עשרוני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק את X/2. זהו שבר שמייצג חלוקה של X ב-2. זה נכון.", "math_expression": "X / 2" },
            { "verbal_explanation": "שלב 2: נבדוק את 0.5X. זהו חצי עשרוני כפול X, שזה בדיוק מחצית מ-X. זה נכון.", "math_expression": "0.5X" },
            { "verbal_explanation": "שלב 3: נבדוק את X - 0.5. כאן אנו מחסרים חצי שקל (למשל) מכמות ה-X, ולא לוקחים חצי מתוך ה-X עצמו. זהו הביטוי השגוי.", "math_expression": "X - 0.5" }
        ],
        "final_answer": "X - 0.5",
        "options": ["X / 2", "0.5X", "1/2 * X", "X - 0.5"],
        "correctAnswer": 3
    },
    {
        "id": 15,
        "subTopic": "מושג המשתנה",
        "difficulty": "High",
        "question_text": "איזה ביטוי מתאר את המשפט: <strong>'מספר הקטן ב-3 מפעמיים המספר P'</strong>?",
        "hint": "פרקו את המשפט: קודם בנו את 'פעמיים P', ורק לאחר מכן 'קטן ב-3' (החסרו ממנו 3).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתרגם את החלק 'פעמיים המספר P'. המשמעות היא להכפיל את P ב-2.", "math_expression": "2P" },
            { "verbal_explanation": "שלב 2: עכשיו נטפל בחלק של 'קטן ב-3'. עלינו לקחת את התוצאה שקיבלנו (2P) ולהחסיר ממנה 3.", "math_expression": "2P - 3" },
            { "verbal_explanation": "שלב 3: חיבור של שני החלקים נותן את הביטוי המבוקש.", "math_expression": "2P - 3" }
        ],
        "final_answer": "2P - 3",
        "options": ["2P - 3", "3 - 2P", "2(P - 3)", "P/2 - 3"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 2: הצבה (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "הצבה",
        "difficulty": "Low",
        "question_text": "חשבו את ערכו של הביטוי <strong> X + 7 </strong> כאשר נתון כי <strong> X = 3 </strong>.",
        "hint": "פשוט החליפו את האות X במספר 3, וחשבו את התרגיל הרגיל שנוצר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניקח את הביטוי המקורי ובמקום האות X נכתוב (נציב) את המספר 3 שקיבלנו.", "math_expression": "3 + 7" },
            { "verbal_explanation": "שלב 2: נחשב את תרגיל החיבור הפשוט שנוצר.", "math_expression": "10" }
        ],
        "final_answer": "10",
        "options": ["21", "4", "10", "11"],
        "correctAnswer": 2
    },
    {
        "id": 17,
        "subTopic": "הצבה",
        "difficulty": "Low",
        "question_text": "נתון הביטוי <strong> 4Y </strong>. מה יהיה ערכו אם נציב <strong> Y = 5 </strong>?",
        "hint": "זכרו שבין המספר 4 לאות Y מסתתר סימן כפל! זה לא המספר 45.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור שהביטוי 4Y משמעותו 4 כפול Y.", "math_expression": "4 * Y" },
            { "verbal_explanation": "שלב 2: נציב את המספר 5 במקום האות Y בתרגיל הכפל.", "math_expression": "4 * 5" },
            { "verbal_explanation": "שלב 3: נחשב את המכפלה.", "math_expression": "20" }
        ],
        "final_answer": "20",
        "options": ["45", "9", "20", "1"],
        "correctAnswer": 2
    },
    {
        "id": 18,
        "subTopic": "הצבה",
        "difficulty": "Medium",
        "question_text": "חשבו את ערך הביטוי <strong> 2a + 3 </strong> כאשר <strong> a = 4 </strong>.",
        "hint": "הקפידו על סדר פעולות חשבון: קודם בצעו את הכפל (2 כפול 4), ורק אחר כך את החיבור (+3).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את המספר 4 במקום האות a. נזכור שיש כפל בין ה-2 ל-a.", "math_expression": "2 * 4 + 3" },
            { "verbal_explanation": "שלב 2: לפי סדר פעולות חשבון, כפל קודם לחיבור. נחשב קודם 2 כפול 4.", "math_expression": "8 + 3" },
            { "verbal_explanation": "שלב 3: כעת נבצע את פעולת החיבור כדי לקבל את התוצאה הסופית.", "math_expression": "11" }
        ],
        "final_answer": "11",
        "options": ["11", "14", "9", "243"],
        "correctAnswer": 0
    },
    {
        "id": 19,
        "subTopic": "הצבה",
        "difficulty": "Medium",
        "question_text": "הציבו <strong> X = -2 </strong> בביטוי <strong> X + 5 </strong> וחשבו את התוצאה.",
        "hint": "איך מחברים מספר שלילי לחיובי? חשבו על זה כחוב של 2 שקלים שיש להוסיף לו 5 שקלים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את המספר השלילי (-2) במקום האות X בתוך הביטוי.", "math_expression": "-2 + 5" },
            { "verbal_explanation": "שלב 2: יש לנו חוב של 2, ואנו מוסיפים לו 5. מכיוון שהפלוס גדול מהמינוס, התוצאה תהיה חיובית (5 פחות 2).", "math_expression": "3" }
        ],
        "final_answer": "3",
        "options": ["7-", "3", "7", "3-"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "הצבה",
        "difficulty": "Medium",
        "question_text": "מה יהיה הערך של <strong> 3m </strong> אם <strong> m = -4 </strong>?",
        "hint": "הכפילו את 3 במינוס 4. זכרו את חוקי הסימנים: פלוס כפול מינוס נותן...",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור שהביטוי אומר לנו להכפיל את 3 ב-m.", "math_expression": "3 * m" },
            { "verbal_explanation": "שלב 2: נציב את המספר השלילי (-4) בתוך התרגיל. נשתמש בסוגריים כדי שיהיה מסודר.", "math_expression": "3 * (-4)" },
            { "verbal_explanation": "שלב 3: כפל של מספר חיובי במספר שלילי נותן תוצאה שלילית.", "math_expression": "-12" }
        ],
        "final_answer": "12-",
        "options": ["1-", "12", "12-", "7"],
        "correctAnswer": 2
    },
    {
        "id": 21,
        "subTopic": "הצבה",
        "difficulty": "High",
        "question_text": "זהירות, מוקש מיוחד! חשבו את ערך הביטוי <strong> 10 - X </strong> כאשר <strong> X = -3 </strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='40'><rect x='20' y='5' width='140' height='30' fill='#fefce8' stroke='#b09151' stroke-width='2'/><text x='90' y='25' font-size='16' font-weight='bold' text-anchor='middle'>- ( - ) = +</text></svg></div>",
        "hint": "בביטוי יש כבר סימן מינוס. כשמציבים מספר שלילי (-3), ייווצרו לנו שני סימני מינוס רצופים!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את (3-) במקום ה-X בדיוק איפה שהוא נמצא. נשמור על המינוס המקורי של הביטוי.", "math_expression": "10 - (-3)" },
            { "verbal_explanation": "שלב 2: באלגברה, כששני סימני מינוס נפגשים ברצף (חיסור של מספר שלילי), הם מתבטלים והופכים לפעולת חיבור.", "math_expression": "10 + 3" },
            { "verbal_explanation": "שלב 3: נחשב את פעולת החיבור הפשוטה שנותרה.", "math_expression": "13" }
        ],
        "final_answer": "13",
        "options": ["7", "13", "7-", "13-"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "הצבה",
        "difficulty": "Low",
        "question_text": "חשבו את ערכו של שבר: <strong> X / 4 </strong>, אם ידוע ש- <strong> X = 20 </strong>.",
        "hint": "הציבו את 20 במקום ה-X שבמונה, ובצעו את פעולת החילוק שמייצג קו השבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: קו שבר מסמל תמיד פעולת חילוק. נציב את 20 במקום ה-X למעלה.", "math_expression": "20 / 4" },
            { "verbal_explanation": "שלב 2: נשאל את עצמנו: כמה פעמים נכנס 4 בתוך 20? נבצע את החילוק.", "math_expression": "5" }
        ],
        "final_answer": "5",
        "options": ["80", "16", "5", "0.2"],
        "correctAnswer": 2
    },
    {
        "id": 23,
        "subTopic": "הצבה",
        "difficulty": "Medium",
        "question_text": "הציבו שני משתנים: חשבו את <strong> a + b </strong> כאשר נתון ש- <strong> a = 5 </strong> וכן <strong> b = -2 </strong>.",
        "hint": "הציבו את שני המספרים במקומם המתאים בביטוי וחברו אותם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחליף את a ב-5 ואת b ב-(2-).", "math_expression": "5 + (-2)" },
            { "verbal_explanation": "שלב 2: חיבור של מספר שלילי שקול לפעולת חיסור רגילה.", "math_expression": "5 - 2" },
            { "verbal_explanation": "שלב 3: נחשב את החיסור.", "math_expression": "3" }
        ],
        "final_answer": "3",
        "options": ["7", "3", "3-", "7-"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "הצבה",
        "difficulty": "High",
        "question_text": "חשבו את ערך הביטוי <strong> 3x - 2y </strong> כאשר מציבים <strong> x = 4 </strong> ו- <strong> y = 1 </strong>.",
        "hint": "הציבו את המספרים בזהירות. קודם בצעו את פעולות הכפל בכל צד, ואז את החיסור ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הערכים בתרגיל ונחשוף את פעולות הכפל המוסתרות.", "math_expression": "3 * 4 - 2 * 1" },
            { "verbal_explanation": "שלב 2: לפי סדר פעולות חשבון, נחשב קודם את משימות הכפל.", "math_expression": "12 - 2" },
            { "verbal_explanation": "שלב 3: נבצע את פעולת החיסור לקבלת התוצאה הסופית.", "math_expression": "10" }
        ],
        "final_answer": "10",
        "options": ["10", "14", "8", "5"],
        "correctAnswer": 0
    },
    {
        "id": 25,
        "subTopic": "הצבה",
        "difficulty": "Medium",
        "question_text": "הציבו <strong> x = 5 </strong> בביטוי עם חזקה: <strong> x² </strong>.",
        "hint": "החזקה 'בריבוע' אומרת לקחת את המספר ולהכפיל אותו בעצמו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את המספר 5 במקום הבסיס X.", "math_expression": "5²" },
            { "verbal_explanation": "שלב 2: המשמעות של חזקת 2 (בריבוע) היא הכפלת המספר בעצמו פעם אחת.", "math_expression": "5 * 5" },
            { "verbal_explanation": "שלב 3: נחשב את תוצאת הכפל.", "math_expression": "25" }
        ],
        "final_answer": "25",
        "options": ["10", "25", "5", "7"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "הצבה",
        "difficulty": "High",
        "question_text": "חשבו את ערך הביטוי <strong> x² </strong> כאשר מציבים מספר שלילי: <strong> x = -3 </strong>.",
        "hint": "כשמעלים מספר שלילי בריבוע, חובה לשים אותו בסוגריים! המינוס מוכפל בעצמו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכיוון שה-X כולו מועלה בריבוע, אנו חייבים להציב את כל המספר השלילי (-3) בתוך סוגריים לפני החזקה.", "math_expression": "(-3)²" },
            { "verbal_explanation": "שלב 2: המשמעות היא להכפיל את המינוס 3 בעצמו.", "math_expression": "(-3) * (-3)" },
            { "verbal_explanation": "שלב 3: לפי חוקי הכפל, מינוס כפול מינוס נותן תוצאה חיובית! לכן התוצאה היא 9 פלוס.", "math_expression": "9" }
        ],
        "final_answer": "9",
        "options": ["9-", "6-", "9", "6"],
        "correctAnswer": 2
    },
    {
        "id": 27,
        "subTopic": "הצבה",
        "difficulty": "High",
        "question_text": "הציבו <strong> x = 4 </strong> בביטוי המכיל סוגריים: <strong> 2(x + 3) </strong>.",
        "hint": "לפי סדר פעולות חשבון, חייבים קודם לחשב את התוצאה שבתוך הסוגריים, ורק אז להכפיל במספר שבחוץ.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את המספר 4 במקום ה-x בתוך הסוגריים.", "math_expression": "2(4 + 3)" },
            { "verbal_explanation": "שלב 2: סוגריים תמיד קודמים לכל. נחשב את החיבור שבפנים (4 ועוד 3).", "math_expression": "2 * (7)" },
            { "verbal_explanation": "שלב 3: נכפיל את התוצאה ב-2 שהמתין בחוץ.", "math_expression": "14" }
        ],
        "final_answer": "14",
        "options": ["11", "14", "10", "24"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "הצבה",
        "difficulty": "High",
        "question_text": "חשבו את הערך של <strong> (x + 2) / 3 </strong> (קו שבר ארוך) כאשר נציב <strong> x = 10 </strong>.",
        "hint": "קו שבר מתנהג כמו סוגריים: חובה לחשב קודם את כל המונה למעלה, ורק בסוף לבצע את משימת החילוק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הערך 10 במונה במקום ה-x.", "math_expression": "(10 + 2) / 3" },
            { "verbal_explanation": "שלב 2: נחשב את פעולת החיבור שמופיעה במונה השבר.", "math_expression": "12 / 3" },
            { "verbal_explanation": "שלב 3: כעת נבצע את החילוק: 12 לחלק ל-3.", "math_expression": "4" }
        ],
        "final_answer": "4",
        "options": ["12", "5", "4", "6"],
        "correctAnswer": 2
    },
    {
        "id": 29,
        "subTopic": "הצבה",
        "difficulty": "Medium",
        "question_text": "הציבו את המספר אפס <strong> x = 0 </strong> בתוך הביטוי: <strong> 5x - 7 </strong>.",
        "hint": "זכרו שכל מספר שמוכפל באפס, הופך לאפס ו'נעלם'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את האפס בתרגיל ונזכור את פעולת הכפל.", "math_expression": "5 * 0 - 7" },
            { "verbal_explanation": "שלב 2: כפל באפס מאפס את כל האיבר הראשון.", "math_expression": "0 - 7" },
            { "verbal_explanation": "שלב 3: נשארנו רק עם פעולת החיסור.", "math_expression": "-7" }
        ],
        "final_answer": "7-",
        "options": ["0", "7", "7-", "12-"],
        "correctAnswer": 2
    },
    {
        "id": 30,
        "subTopic": "הצבה",
        "difficulty": "Medium",
        "question_text": "נוסחת המרחק בפיזיקה היא: מרחק = מהירות × זמן ( <strong> d = v * t </strong> ). מהו המרחק (d) אם המהירות היא <strong> v = 60 </strong> והזמן הוא <strong> t = 2 </strong>?",
        "hint": "הציבו את שני הנתונים שקיבלתם בתוך הנוסחה להחלפת האותיות v ו-t.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הביטוי מורה לנו להכפיל את המהירות בזמן.", "math_expression": "v * t" },
            { "verbal_explanation": "שלב 2: נציב במקום האותיות את המספרים שניתנו לנו בבעיה.", "math_expression": "60 * 2" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה למציאת המרחק הסופי בקילומטרים.", "math_expression": "120" }
        ],
        "final_answer": "120",
        "options": ["62", "120", "30", "260"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 3: פישוט וכינוס איברים (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "Low",
        "question_text": "פשטו את הביטוי הבא על ידי כינוס איברים דומים: <strong> 3x + 4x </strong>",
        "hint": "חשבו על ה-x כמו על חפץ. כמה זה 3 תפוחים ועוד 4 תפוחים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה ששני האיברים שייכים לאותה 'משפחה' מכיוון שלשניהם יש את המשתנה x.", "math_expression": "3x , 4x" },
            { "verbal_explanation": "שלב 2: כדי לכנס (לחבר) אותם, אנו פשוט מחברים את המספרים שמופיעים לפניהם (המקדמים).", "math_expression": "3 + 4 = 7" },
            { "verbal_explanation": "שלב 3: כעת נצמיד חזרה את המשתנה x לתוצאה שקיבלנו.", "math_expression": "7x" }
        ],
        "final_answer": "7x",
        "options": ["7x", "12x", "x7", "7"],
        "correctAnswer": 0
    },
    {
        "id": 32,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "Low",
        "question_text": "פשטו את הביטוי: <strong> 8y - 3y </strong>",
        "hint": "כמו בחיבור, גם בחיסור אפשר לחסר איברים אם הם מאותה 'משפחה' (אותו משתנה).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: שני האיברים מכילים את המשתנה y, לכן מותר לחסר ביניהם.", "math_expression": "8y , -3y" },
            { "verbal_explanation": "שלב 2: נחסר את המקדמים: 8 פחות 3 נותן 5.", "math_expression": "8 - 3 = 5" },
            { "verbal_explanation": "שלב 3: נצמיד את ה-y לתוצאה.", "math_expression": "5y" }
        ],
        "final_answer": "5y",
        "options": ["5y", "11y", "5", "y5"],
        "correctAnswer": 0
    },
    {
        "id": 33,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "Medium",
        "question_text": "כנסו איברים דומים בביטוי המעורב: <strong> 5x + 2 + 3x + 4 </strong>",
        "hint": "מיינו למשפחות: חברו את משפחת ה-x בנפרד, ואת המספרים הרגילים (ללא אותיות) בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נקבץ יחד את כל האיברים שמכילים x. יש לנו 5x ועוד 3x. סך הכל קיבלנו 8x.", "math_expression": "5x + 3x = 8x" },
            { "verbal_explanation": "שלב 2: כעת נקבץ את המספרים החופשיים (אלו ללא האות x). יש לנו 2 ועוד 4, שהם 6.", "math_expression": "2 + 4 = 6" },
            { "verbal_explanation": "שלב 3: נרשום את שתי התוצאות זו לצד זו כביטוי אחד. אסור לחבר ביניהן!", "math_expression": "8x + 6" }
        ],
        "final_answer": "8x + 6",
        "options": ["14x", "8x + 6", "15x", "8 + 6x"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי הבא: <strong> 7m - 2m - 4m </strong>",
        "hint": "בצעו את החיסור צעד אחר צעד, משמאל לימין. כולם מאותה משפחה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל עם שני האיברים הראשונים. 7m פחות 2m נותן לנו 5m.", "math_expression": "7m - 2m = 5m" },
            { "verbal_explanation": "שלב 2: ניקח את התוצאה שקיבלנו (5m) ונחסיר ממנה את האיבר האחרון (4m).", "math_expression": "5m - 4m" },
            { "verbal_explanation": "שלב 3: 5 פחות 4 זה 1. קיבלנו 1m, שזה פשוט m אחד בודד.", "math_expression": "m" }
        ],
        "final_answer": "m",
        "options": ["m", "0", "2m", "11m"],
        "correctAnswer": 0
    },
    {
        "id": 35,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי הכולל מינוסים: <strong> 6a - 5 + 2a - 3 </strong>",
        "hint": "שימו לב היטב לסימנים! המספרים הם 5- ו- 3-. חברו חובות לחובות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נטפל קודם במשפחת האותיות. יש לנו 6a ועוד 2a (הפלוס שייך ל-2a). סך הכל 8a.", "math_expression": "6a + 2a = 8a" },
            { "verbal_explanation": "שלב 2: נטפל במשפחת המספרים. יש לנו מינוס 5 ומינוס 3. שניהם חובות, לכן החוב גדל למינוס 8.", "math_expression": "-5 - 3 = -8" },
            { "verbal_explanation": "שלב 3: נרכיב את הביטוי הסופי מהתוצאות של שתי המשפחות.", "math_expression": "8a - 8" }
        ],
        "final_answer": "8a - 8",
        "options": ["8a - 8", "4a - 8", "8a + 2", "4a - 2"],
        "correctAnswer": 0
    },
    {
        "id": 36,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "Medium",
        "question_text": "מה קורה בביטוי הזה כשמכנסים איברים? פשטו: <strong> 4x + 7 - 4x </strong>",
        "hint": "מה קורה כשלוקחים 4 תפוחים, אבל מיד אחר כך מחסרים 4 תפוחים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נאסוף את איברי ה-x. יש לנו בתחילת הביטוי 4x, ובסוף הביטוי מחסרים 4x.", "math_expression": "4x - 4x" },
            { "verbal_explanation": "שלב 2: 4x פחות 4x שווה בדיוק לאפס. משפחת ה-x למעשה 'התבטלה' ונעלמה מהביטוי.", "math_expression": "0" },
            { "verbal_explanation": "שלב 3: מה שנשאר לנו בביטוי הוא רק המספר הרגיל 7.", "math_expression": "7" }
        ],
        "final_answer": "7",
        "options": ["x + 7", "7", "0", "8x + 7"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "High",
        "question_text": "כנסו את האיברים הדומים בביטוי המעורב הבא: <strong> 3x + 2y + 4x + 5y </strong>",
        "hint": "יש כאן שלוש משפחות! משפחת x, משפחת y, ו... זהו. חברו כל אות רק לאות הזהה לה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתמקד קודם רק ב-x. נחבר 3x ו-4x ונקבל 7x.", "math_expression": "3x + 4x = 7x" },
            { "verbal_explanation": "שלב 2: כעת נתמקד רק ב-y. נחבר 2y ו-5y ונקבל 7y.", "math_expression": "2y + 5y = 7y" },
            { "verbal_explanation": "שלב 3: נרשום את התוצאות יחד. אי אפשר לכנס x עם y, ולכן התשובה נשארת עם שני איברים.", "math_expression": "7x + 7y" }
        ],
        "final_answer": "7x + 7y",
        "options": ["14xy", "7x + 7y", "7xy", "14x + y"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "Low",
        "question_text": "מהו הביטוי המפושט של: <strong> x + x + x </strong>?",
        "hint": "כשמופיעה אות לבדה ללא מספר, מסתתר לפניה המקדם 1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: באלגברה, כתיבת האות x שקולה לחלוטין לכתיבה 1x.", "math_expression": "1x + 1x + 1x" },
            { "verbal_explanation": "שלב 2: נחבר את המקדמים הנסתרים. 1 ועוד 1 ועוד 1 נותן 3.", "math_expression": "3" },
            { "verbal_explanation": "שלב 3: נצמיד חזרה את האות לקבלת הביטוי הקצר ביותר.", "math_expression": "3x" }
        ],
        "final_answer": "3x",
        "options": ["x³", "3 + x", "3x", "x3"],
        "correctAnswer": 2
    },
    {
        "id": 39,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי: <strong> 5k - k </strong>",
        "hint": "מה קורה כשיש לנו 5 יחידות ממשהו, ואנחנו לוקחים יחידה אחת (נסתרת) החוצה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור שהביטוי -k זהה למינוס 1k.", "math_expression": "5k - 1k" },
            { "verbal_explanation": "שלב 2: נחסר את המקדמים: 5 פחות 1 שווה ל-4.", "math_expression": "4" },
            { "verbal_explanation": "שלב 3: נצמיד חזרה את המשתנה k.", "math_expression": "4k" }
        ],
        "final_answer": "4k",
        "options": ["5", "4k", "5k", "6k"],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי על ידי פתיחת סוגריים וכינוס איברים: <strong> 2(x + 4) + 3x </strong>",
        "hint": "סדר הפעולות קובע שקודם כל מטפלים בסוגריים (בעזרת חוק הפילוג), ורק אז מחברים איברים דומים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את הסוגריים לפי חוק הפילוג. נכפיל את ה-2 גם ב-x וגם ב-4.", "math_expression": "2x + 8" },
            { "verbal_explanation": "שלב 2: נרשום את הביטוי המלא החדש. נוסיף לו את ה-3x שחיכה בסבלנות בחוץ.", "math_expression": "2x + 8 + 3x" },
            { "verbal_explanation": "שלב 3: כעת נכנס את האיברים הדומים. נחבר את 2x עם 3x ונקבל 5x. המספר 8 נשאר ללא שינוי.", "math_expression": "5x + 8" }
        ],
        "final_answer": "5x + 8",
        "options": ["5x + 8", "5x + 4", "2x + 12", "10x"],
        "correctAnswer": 0
    },
    {
        "id": 41,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי הבא (זהירות עם המינוס): <strong> 10 - 2(x + 3) </strong>",
        "hint": "המספר שמכפיל את הסוגריים הוא 2-. הוא יהפוך את כל מה שבפנים לשלילי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתמקד בכפל הסוגריים. אנו מכפילים את x ואת 3 במספר שלילי (מינוס 2).", "math_expression": "-2x - 6" },
            { "verbal_explanation": "שלב 2: נציב זאת חזרה בביטוי השלם, יחד עם ה-10 שהמתין בהתחלה.", "math_expression": "10 - 2x - 6" },
            { "verbal_explanation": "שלב 3: נכנס איברים דומים. משפחת ה-x כוללת רק את 2x-. במשפחת המספרים נחשב: 10 פחות 6 שווה 4.", "math_expression": "4 - 2x" }
        ],
        "final_answer": "4 - 2x",
        "options": ["4 - 2x", "8 - 2x", "16 - 2x", "4 + 2x"],
        "correctAnswer": 0
    },
    {
        "id": 42,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי הכולל שברים: <strong> 1/2x + 1/2x </strong>",
        "hint": "חצי פלוס חצי זה שלם אחד. כיצד רושמים שלם אחד של x?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: האיברים דומים (לשניהם יש x). נחבר את המקדמים: חצי ועוד חצי.", "math_expression": "1/2 + 1/2 = 1" },
            { "verbal_explanation": "שלב 2: קיבלנו 1 שלם. לכן התוצאה היא 1x.", "math_expression": "1x" },
            { "verbal_explanation": "שלב 3: כזכור, אין צורך לכתוב את המספר 1 לפני משתנה, לכן פשוט נכתוב x.", "math_expression": "x" }
        ],
        "final_answer": "x",
        "options": ["1/4x", "x", "2x", "0.25x"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "High",
        "question_text": "אורכי צלעות של מלבן הם <strong> x </strong> ו- <strong> x + 2 </strong>. איזה ביטוי אלגברי מפושט מתאר את <strong>היקף המלבן</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='160' height='80'><rect x='20' y='20' width='120' height='50' fill='#fdfbf7' stroke='#1e293b' stroke-width='2'/><text x='80' y='15' font-size='12' font-weight='bold' text-anchor='middle'>x + 2</text><text x='10' y='50' font-size='12' font-weight='bold'>x</text></svg></div>",
        "hint": "למלבן יש 4 צלעות! שתיים שהן x, ושתיים שהן (x+2). חברו את כולן וכנסו איברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את סכום כל ארבעת הצלעות. אורך ועוד אורך ועוד רוחב ועוד רוחב.", "math_expression": "x + (x+2) + x + (x+2)" },
            { "verbal_explanation": "שלב 2: נכנס את משפחת ה-x. יש לנו בסך הכל 4 פעמים את האות x.", "math_expression": "4x" },
            { "verbal_explanation": "שלב 3: נכנס את המספרים החופשיים. 2 ועוד 2 שווה 4. נחבר את שתי התוצאות.", "math_expression": "4x + 4" }
        ],
        "final_answer": "4x + 4",
        "options": ["4x + 4", "2x + 2", "x² + 2x", "4x + 2"],
        "correctAnswer": 0
    },
    {
        "id": 44,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי הארוך: <strong> 12p - 3 + p - 7 </strong>",
        "hint": "אל תשכחו שהאות p היא בעצם 1p. בנוסף, חברו את שני החובות (-3 ו- -7) יחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכנס את איברי ה-p. 12p ועוד p אחד (1p) שווים ל-13p.", "math_expression": "12p + 1p = 13p" },
            { "verbal_explanation": "שלב 2: נכנס את המספרים. מינוס 3 ומינוס 7 שווים יחד למינוס 10.", "math_expression": "-3 - 7 = -10" },
            { "verbal_explanation": "שלב 3: נחבר את שתי המשפחות לקבלת הביטוי המפושט הסופי.", "math_expression": "13p - 10" }
        ],
        "final_answer": "13p - 10",
        "options": ["13p + 4", "13p - 10", "11p - 10", "11p + 4"],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "subTopic": "פישוט וכינוס איברים",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי עם המינוס לפני הסוגריים: <strong> -(x - 5) + 2x </strong>",
        "hint": "המינוס לפני הסוגריים הופך את ה-x לשלילי ואת ה-5 לחיובי! לאחר מכן, כנסו עם ה-2x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח סוגריים. המינוס משנה את הסימנים בפנים: מינוס כפול x הופך ל-x שלילי. מינוס כפול מינוס 5 הופך ל-5 חיובי.", "math_expression": "-x + 5" },
            { "verbal_explanation": "שלב 2: נרשום את הביטוי המלא עם ה-2x שחיכה בחוץ.", "math_expression": "-x + 5 + 2x" },
            { "verbal_explanation": "שלב 3: נכנס איברים. יש לנו שני איקסים (2x) פחות איקס אחד (-x). זה משאיר אותנו עם איקס יחיד. המספר 5 נשאר.", "math_expression": "x + 5" }
        ],
        "final_answer": "x + 5",
        "options": ["x + 5", "3x - 5", "x - 5", "-3x + 5"],
        "correctAnswer": 0
    }
];
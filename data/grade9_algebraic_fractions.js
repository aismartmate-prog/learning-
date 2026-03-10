const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: תחום הצבה וצמצום שברים אלגבריים (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "מהו <strong>תחום ההצבה</strong> של השבר האלגברי הבא: <strong>5 / (x - 3)</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100' viewBox='0 0 180 100'><text x='90' y='40' font-size='24' font-weight='bold' text-anchor='middle' fill='#1e293b'>5</text><line x1='50' y1='50' x2='130' y2='50' stroke='#1e293b' stroke-width='2'/><text x='90' y='80' font-size='24' font-weight='bold' text-anchor='middle' fill='#ef4444'>x - 3</text><text x='150' y='80' font-size='20' font-weight='bold' fill='#ef4444'>≠ 0</text></svg></div>",
        "hint": "תחום הצבה נקבע על פי הכלל שאסור לחלק באפס. אילו ערכים של איקס יגרמו למכנה להיות אפס?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור את חוק היסוד במתמטיקה - חלוקה באפס אינה מוגדרת. לכן, המכנה של השבר חייב להיות שונה מאפס.", "math_expression": "מכנה ≠ 0" },
            { "verbal_explanation": "שלב 2: ניקח את הביטוי שנמצא במכנה ונבנה אי-שוויון.", "math_expression": "x - 3 ≠ 0" },
            { "verbal_explanation": "שלב 3: נפתור את האי-שוויון כמו משוואה רגילה. נעביר את המספר 3- לאגף הימני בסימן חיובי.", "math_expression": "x ≠ 3" },
            { "verbal_explanation": "שלב 4: נסיק את המסקנה: מותר להציב כל מספר בעולם במקום איקס, פרט למספר 3 שמורס את השבר." }
        ],
        "final_answer": "x ≠ 3",
        "options": ["x ≠ 0", "x ≠ 3", "x ≠ -3", "כל איקס"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "מצאו את תחום ההצבה של השבר: <strong>x / (2x + 8)</strong>.",
        "hint": "התעלמו מהמונה. התמקדו רק במכנה ובדקו מתי הוא מתאפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נדרוש שהמכנה יהיה שונה מאפס.", "math_expression": "2x + 8 ≠ 0" },
            { "verbal_explanation": "שלב 2: נעביר את המספר 8 לאגף השני (סימנו ישתנה למינוס).", "math_expression": "2x ≠ -8" },
            { "verbal_explanation": "שלב 3: נחלק את שני האגפים במקדם של איקס, שהוא 2.", "math_expression": "x ≠ -8 / 2" },
            { "verbal_explanation": "שלב 4: נחשב את התוצאה הסופית.", "math_expression": "x ≠ -4" }
        ],
        "final_answer": "x ≠ -4",
        "options": ["x ≠ 4", "x ≠ -4", "x ≠ 0", "x ≠ 8"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "מהו תחום ההצבה של השבר האלגברי: <strong>(x + 1) / (x² - 25)</strong>?",
        "hint": "המכנה הוא תבנית של הפרש ריבועים. אילו שני מספרים, כשנעלה אותם בריבוע, ייתנו 25 ויאפסו את המכנה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את התנאי שהמכנה חייב להיות שונה מאפס.", "math_expression": "x² - 25 ≠ 0" },
            { "verbal_explanation": "שלב 2: נעביר את 25 לאגף הימני.", "math_expression": "x² ≠ 25" },
            { "verbal_explanation": "שלב 3: נוציא שורש ריבועי. עלינו לזכור ששורש ריבועי נותן שתי תוצאות: אחת חיובית ואחת שלילית.", "math_expression": "x ≠ 5  וגם  x ≠ -5" },
            { "verbal_explanation": "שלב 4: נסיק כי ישנם שני מספרים שאסור להציב בשבר." }
        ],
        "final_answer": "x ≠ 5 וגם x ≠ -5",
        "options": ["x ≠ 5", "x ≠ 25", "x ≠ 5 וגם x ≠ -5", "x ≠ 0"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "מצאו את תחום ההצבה של השבר: <strong>7 / (x² - 5x)</strong>. הציגו את הדרך המלאה לפירוק המכנה.",
        "hint": "במכנה יש שני איברים המכילים את המשתנה איקס. הוציאו גורם משותף מחוץ לסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נדרוש שהמכנה לא יתאפס.", "math_expression": "x² - 5x ≠ 0" },
            { "verbal_explanation": "שלב 2: נוציא את המשתנה איקס כגורם משותף מחוץ לסוגריים.", "math_expression": "x * (x - 5) ≠ 0" },
            { "verbal_explanation": "שלב 3: מכפלה שונה מאפס רק אם אף אחד מהגורמים שלה אינו אפס. נבדוק כל גורם בנפרד.", "math_expression": "גורם ראשון: x ≠ 0" },
            { "verbal_explanation": "שלב 4: נבדוק את הגורם השני (הסוגריים).", "math_expression": "x - 5 ≠ 0  =>  x ≠ 5" },
            { "verbal_explanation": "שלב 5: נרשום את התנאי המשולב: איקס אינו אפס ואינו חמש." }
        ],
        "final_answer": "x ≠ 0 וגם x ≠ 5",
        "options": ["x ≠ 5", "x ≠ 0", "x ≠ 0 וגם x ≠ 5", "כל איקס מותר"],
        "correctAnswer": 2
    },
    {
        "id": 5,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "High",
        "question_text": "מהו תחום ההצבה של הביטוי: <strong>(x - 2) / (x² - 6x + 8)</strong>?",
        "hint": "כדי לגלות מתי המכנה מתאפס, עליכם לפרק את הביטוי הריבועי (טרינום) לשני סוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את דרישת תחום ההצבה למכנה.", "math_expression": "x² - 6x + 8 ≠ 0" },
            { "verbal_explanation": "שלב 2: נחפש שני מספרים שמכפלתם שווה ל-8 וסכומם שווה למינוס 6.", "math_expression": "(-2) * (-4) = 8  ,  (-2) + (-4) = -6" },
            { "verbal_explanation": "שלב 3: נרשום את המכנה כמכפלה של שני סוגריים (פירוק טרינום).", "math_expression": "(x - 2) * (x - 4) ≠ 0" },
            { "verbal_explanation": "שלב 4: נמצא את הערכים שאסור להציב, אלו המאפסים כל אחד מהסוגריים.", "math_expression": "x ≠ 2  וגם  x ≠ 4" }
        ],
        "final_answer": "x ≠ 2 וגם x ≠ 4",
        "options": ["x ≠ 2", "x ≠ -2 וגם x ≠ -4", "x ≠ 2 וגם x ≠ 4", "x ≠ 8"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "צמצמו את השבר האלגברי הבא ככל הניתן: <strong>(4x) / (2x)</strong>. (הניחו כי איקס שונה מאפס).",
        "hint": "מכיוון שבין המקדם למשתנה יש פעולת כפל, ניתן לצמצם את המשתנים הזהים ולחלק את המספרים בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את השבר ונזהה שמדובר בפעולות כפל בלבד גם במונה וגם במכנה.", "math_expression": "(4 * x) / (2 * x)" },
            { "verbal_explanation": "שלב 2: נצמצם את המשתנה איקס שמופיע גם למעלה וגם למטה (איקס חלקי איקס שווה אחת).", "math_expression": "4 / 2" },
            { "verbal_explanation": "שלב 3: נחלק את המספרים הנותרים (ארבע לחלק לשתיים).", "math_expression": "2" }
        ],
        "final_answer": "2",
        "options": ["2x", "2", "x", "8x²"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פשטו וצמצמו את השבר הבא: <strong>(3x + 6) / 3</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100' viewBox='0 0 200 100'><text x='100' y='40' font-size='24' font-weight='bold' text-anchor='middle' fill='#1e293b'>3x + 6</text><line x1='50' y1='50' x2='150' y2='50' stroke='#1e293b' stroke-width='2'/><text x='100' y='80' font-size='24' font-weight='bold' text-anchor='middle' fill='#1e293b'>3</text></svg></div>",
        "hint": "זהירות! אסור לצמצם רק חלק מהמונה כשיש בו פעולת חיבור. הוציאו תחילה גורם משותף מהמונה כולו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה פעולת חיבור במונה. כדי לצמצם עלינו להפוך את המונה למכפלה. נוציא 3 כגורם משותף.", "math_expression": "3 * (x + 2)" },
            { "verbal_explanation": "שלב 2: נרשום את השבר מחדש עם המונה המפורק.", "math_expression": "[3 * (x + 2)] / 3" },
            { "verbal_explanation": "שלב 3: כעת ישנה פעולת כפל המאפשרת לנו לצמצם את המספר 3 מהמונה והמכנה.", "math_expression": "x + 2" }
        ],
        "final_answer": "x + 2",
        "options": ["x + 6", "3x + 2", "x + 2", "x"],
        "correctAnswer": 2
    },
    {
        "id": 8,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "צמצמו את השבר האלגברי: <strong>(x² - 4x) / x</strong>. (הניחו כי איקס שונה מאפס).",
        "hint": "הוציאו את המשתנה איקס כגורם משותף במונה לפני שאתם מבצעים את הצמצום.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המונה לגורמים על ידי הוצאת איקס מחוץ לסוגריים.", "math_expression": "x * (x - 4)" },
            { "verbal_explanation": "שלב 2: נציב את המונה החדש בתוך השבר.", "math_expression": "[x * (x - 4)] / x" },
            { "verbal_explanation": "שלב 3: נצמצם את המשתנה איקס הנמצא כמכפיל יחיד במונה יחד עם האיקס שבמכנה.", "math_expression": "x - 4" }
        ],
        "final_answer": "x - 4",
        "options": ["x - 4", "x² - 4", "x", "-4x"],
        "correctAnswer": 0
    },
    {
        "id": 9,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פשטו את השבר הבא בעזרת פירוק לגורמים: <strong>(x² - 9) / (x - 3)</strong>. (תחום הצבה: איקס שונה מ-3).<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100' viewBox='0 0 180 100'><text x='90' y='35' font-size='22' font-weight='bold' text-anchor='middle' fill='#3b82f6'>(x - 3)(x + 3)</text><line x1='30' y1='50' x2='150' y2='50' stroke='#1e293b' stroke-width='2'/><text x='90' y='80' font-size='22' font-weight='bold' text-anchor='middle' fill='#3b82f6'>(x - 3)</text><line x1='40' y1='20' x2='80' y2='40' stroke='#ef4444' stroke-width='3'/><line x1='60' y1='65' x2='120' y2='85' stroke='#ef4444' stroke-width='3'/></svg></div>",
        "hint": "המונה הוא תבנית הפרש ריבועים הקלאסית. פרקו אותו לשני סוגריים, ואז חפשו ביטוי זהה במכנה כדי לצמצמו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את המונה כתבנית 'הפרש ריבועים' (איקס בריבוע פחות שלוש בריבוע).", "math_expression": "x² - 3²" },
            { "verbal_explanation": "שלב 2: נפרק את המונה לפי הנוסחה למכפלה של שני סוגריים: חיבור וחיסור.", "math_expression": "(x - 3) * (x + 3)" },
            { "verbal_explanation": "שלב 3: נכתוב את השבר מחדש עם המונה המפורק.", "math_expression": "[(x - 3) * (x + 3)] / (x - 3)" },
            { "verbal_explanation": "שלב 4: נצמצם את הביטוי (איקס פחות שלוש) שמופיע בשלמותו גם למעלה וגם למטה.", "math_expression": "x + 3" }
        ],
        "final_answer": "x + 3",
        "options": ["x - 3", "x + 3", "x² - 3", "1"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "High",
        "question_text": "צמצמו את השבר: <strong>(x² + 5x + 6) / (x + 2)</strong>. מהי התוצאה לאחר הצמצום?",
        "hint": "פרקו את הטרינום במונה. חפשו שני מספרים שכפלם 6 וחיבורם 5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נטפל במונה בעזרת פירוק לטרינום. נמצא שני מספרים שמכפלתם 6 וסכומם 5.", "math_expression": "2 * 3 = 6  ,  2 + 3 = 5" },
            { "verbal_explanation": "שלב 2: נרשום את המונה כמכפלה של שני סוגריים.", "math_expression": "(x + 2) * (x + 3)" },
            { "verbal_explanation": "שלב 3: נציב את הביטוי החדש בתוך השבר.", "math_expression": "[(x + 2) * (x + 3)] / (x + 2)" },
            { "verbal_explanation": "שלב 4: נצמצם את הסוגריים הזהים (איקס ועוד שתיים) מהמונה ומהמכנה.", "math_expression": "x + 3" }
        ],
        "final_answer": "x + 3",
        "options": ["x + 2", "x + 3", "x + 5", "x² + 3"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פשטו את השבר הבא (הניחו כי איקס שונה מ-3): <strong>(5x - 15) / (15 - 5x)</strong>",
        "hint": "שימו לב שהמונה והמכנה דומים מאוד, אך סדר האיברים הפוך. הוצאת גורם משותף שלילי (מינוס אחד) תסדר את הבעיה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא גורם משותף 5 במונה.", "math_expression": "5 * (x - 3)" },
            { "verbal_explanation": "שלב 2: נוציא גורם משותף 5 במכנה.", "math_expression": "5 * (3 - x)" },
            { "verbal_explanation": "שלב 3: נצמצם את המספר 5 מהשבר.", "math_expression": "(x - 3) / (3 - x)" },
            { "verbal_explanation": "שלב 4: כדי להפוך את הסדר במכנה, נוציא מינוס אחד כגורם משותף.", "math_expression": "(x - 3) / [-1 * (x - 3)]" },
            { "verbal_explanation": "שלב 5: נצמצם את הסוגריים. התוצאה היא אחת לחלק למינוס אחת.", "math_expression": "-1" }
        ],
        "final_answer": "-1",
        "options": ["1", "-1", "0", "x - 3"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "High",
        "question_text": "צמצמו את השבר הבא במספר שלבים: <strong>(2x² - 8) / (x + 2)</strong>.",
        "hint": "קודם הוציאו את המספר 2 כגורם משותף, ולאחר מכן השתמשו בנוסחת הפרש ריבועים על מה שנשאר בתוך הסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא את המספר 2 כגורם משותף מכל איברי המונה.", "math_expression": "2 * (x² - 4)" },
            { "verbal_explanation": "שלב 2: נזהה שהביטוי בסוגריים הוא תבנית של הפרש ריבועים, ונפרק אותו לשני סוגריים.", "math_expression": "2 * (x - 2) * (x + 2)" },
            { "verbal_explanation": "שלב 3: נרשום את השבר כולו עם המונה המפורק באופן מלא.", "math_expression": "[2 * (x - 2) * (x + 2)] / (x + 2)" },
            { "verbal_explanation": "שלב 4: נצמצם את הביטוי (איקס ועוד שתיים) המשותף.", "math_expression": "2 * (x - 2)" }
        ],
        "final_answer": "2(x - 2)",
        "options": ["2(x + 2)", "x - 2", "2(x - 2)", "2x - 8"],
        "correctAnswer": 2
    },
    {
        "id": 13,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "High",
        "question_text": "צמצמו את השבר הבא (לאחר וידוא תחום הצבה): <strong>(x² - 4x + 4) / (x² - 4)</strong>",
        "hint": "המונה הוא נוסחת כפל מקוצר של דו-איבר בריבוע. המכנה הוא תבנית הפרש ריבועים. פרקו את שניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המונה לפי נוסחת הכפל המקוצר לדו-איבר בריבוע, או בעזרת טרינום.", "math_expression": "(x - 2) * (x - 2)  או  (x - 2)²" },
            { "verbal_explanation": "שלב 2: נפרק את המכנה לפי תבנית הפרש ריבועים.", "math_expression": "(x - 2) * (x + 2)" },
            { "verbal_explanation": "שלב 3: נרשום את השבר בצורתו המפורקת להכנה לצמצום.", "math_expression": "[(x - 2) * (x - 2)] / [(x - 2) * (x + 2)]" },
            { "verbal_explanation": "שלב 4: נצמצם פעם אחת את הביטוי (איקס פחות שתיים) מהמונה ומהמכנה.", "math_expression": "(x - 2) / (x + 2)" }
        ],
        "final_answer": "(x - 2) / (x + 2)",
        "options": ["1", "(x - 2) / (x + 2)", "(x + 2) / (x - 2)", "-1"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פשטו וצמצמו את שבר החזקות הבא: <strong>(a² * b) / (a * b²)</strong>. (הניחו שהאותיות שונות מאפס).",
        "hint": "צמצמו כל משתנה (אות) בנפרד לפי חוקי חילוק חזקות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכתוב את המונים והמכנים בצורה מפורשת ללא חזקות כדי לראות את המרכיבים.", "math_expression": "(a * a * b) / (a * b * b)" },
            { "verbal_explanation": "שלב 2: נצמצם את האות איי. אחת למעלה תתבטל עם אחת למטה, ותישאר אות איי אחת במונה.", "math_expression": "a / 1" },
            { "verbal_explanation": "שלב 3: נצמצם את האות בי. אחת למעלה תתבטל עם אחת למטה, ותישאר אות בי אחת במכנה.", "math_expression": "1 / b" },
            { "verbal_explanation": "שלב 4: נאחד את התוצאות לשבר אחד.", "math_expression": "a / b" }
        ],
        "final_answer": "a / b",
        "options": ["ab", "b / a", "a / b", "1 / ab"],
        "correctAnswer": 2
    },
    {
        "id": 15,
        "subTopic": "תחום הצבה וצמצום שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "נתון השבר <strong>(x + 2) / x</strong>. תלמיד הציע לצמצם את האיקס במונה עם האיקס במכנה ולקבל 2. האם הוא צודק? מדוע?",
        "hint": "חשבו על הפעולה החשבונית המקשרת בין האיקס למספר שתיים במונה. האם חוקי הצמצום חלים כאן?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור את כלל הברזל של שברים אלגבריים: צמצום מותר אך ורק כאשר קיימת פעולת כפל המקשרת בין כל חלקי המונה.", "math_expression": "כפל מאפשר צמצום" },
            { "verbal_explanation": "שלב 2: נבחן את השבר שלנו. במונה ישנה פעולת חיבור בין האיקס למספר שתיים.", "math_expression": "x + 2" },
            { "verbal_explanation": "שלב 3: פעולת החיבור 'נועלת' את שני האיברים כיחידה אחת (כביכול הם בתוך סוגריים). לכן, אסור 'לתלוש' את האיקס החוצה לצורך צמצום.", "math_expression": "חיבור אוסר צמצום חלקי" },
            { "verbal_explanation": "שלב 4: נסיק שהשבר נמצא כבר בצורתו הפשוטה ביותר ולא ניתן לצמצמו." }
        ],
        "final_answer": "לא, אסור לצמצם מכיוון שיש פעולת חיבור במונה.",
        "options": ["כן, זו פעולה חוקית.", "לא, מכיוון שאיקס יכול להיות אפס.", "לא, אסור לצמצם מכיוון שיש פעולת חיבור במונה.", "כן, אבל התוצאה תהיה 3."],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 2: כפל וחילוק שברים אלגבריים (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "בצעו את פעולת הכפל הבאה ופשטו את התוצאה: <strong>(x / 2) * (4 / x²)</strong>.",
        "hint": "בכפל שברים מכפילים מונה במונה ומכנה במכנה. לאחר מכן, צמצמו את התוצאה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את מונה השבר הראשון במונה של השבר השני.", "math_expression": "x * 4 = 4x" },
            { "verbal_explanation": "שלב 2: נכפיל את מכנה השבר הראשון במכנה של השבר השני.", "math_expression": "2 * x² = 2x²" },
            { "verbal_explanation": "שלב 3: נרכיב את השבר החדש שנוצר.", "math_expression": "(4x) / (2x²)" },
            { "verbal_explanation": "שלב 4: נצמצם את המספרים (ארבע חלקי שתיים) ואת האותיות (איקס אחד מהמונה ואיקס אחד מהמכנה).", "math_expression": "2 / x" }
        ],
        "final_answer": "2 / x",
        "options": ["2x", "x / 2", "2 / x", "4 / 2x"],
        "correctAnswer": 2
    },
    {
        "id": 17,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "חשבו את תוצאת חילוק השברים הבא: <strong>(3 / x) : (9 / x²)</strong>. (הסימן : מייצג חילוק).<br><div style='text-align:center; margin:15px 0;'><svg width='220' height='80' viewBox='0 0 220 80'><text x='50' y='35' font-size='20' font-weight='bold' text-anchor='middle'>3</text><line x1='30' y1='45' x2='70' y2='45' stroke='black' stroke-width='2'/><text x='50' y='70' font-size='20' font-weight='bold' text-anchor='middle'>x</text><text x='100' y='55' font-size='24' font-weight='bold' text-anchor='middle' fill='#3b82f6'>:</text><text x='150' y='35' font-size='20' font-weight='bold' text-anchor='middle'>9</text><line x1='130' y1='45' x2='170' y2='45' stroke='black' stroke-width='2'/><text x='150' y='70' font-size='20' font-weight='bold' text-anchor='middle'>x²</text></svg></div>",
        "hint": "חילוק בשבר שקול לכפל בהופכי שלו. הפכו את השבר השני (השמאלי או הימני לפי סדר הקריאה) למונה ומכנה הפוכים, ושנו את הפעולה לכפל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בכלל ההופכי להפיכת פעולת החילוק לפעולת כפל. נהפוך את השבר השני למעלה ולמטה.", "math_expression": "(3 / x) * (x² / 9)" },
            { "verbal_explanation": "שלב 2: נכפול מונה במונה ומכנה במכנה.", "math_expression": "(3 * x²) / (9 * x)" },
            { "verbal_explanation": "שלב 3: נצמצם את המספרים. שלוש חלקי תשע שווה לשליש (1 במונה, 3 במכנה).", "math_expression": "1 / 3" },
            { "verbal_explanation": "שלב 4: נצמצם את האות איקס. איקס בריבוע חלקי איקס משאיר איקס בודד במונה.", "math_expression": "x" },
            { "verbal_explanation": "שלב 5: נאחד לתוצאה סופית.", "math_expression": "x / 3" }
        ],
        "final_answer": "x / 3",
        "options": ["3 / x", "x / 3", "27 / x³", "3x"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "בצעו את פעולת הכפל הבאה וצמצמו: <strong>[x / (x+1)] * [(x+1) / 5]</strong>.",
        "hint": "לפני שאתם פותחים סוגריים ומכפילים באמת, בדקו האם יש ביטוי שלם שמופיע גם למעלה וגם למטה וניתן לצמצמו מיד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את התרגיל כשבר אחד גדול המכיל את המכפלות, אך לא נפתח סוגריים כדי שנוכל לזהות איברים משותפים.", "math_expression": "[x * (x+1)] / [5 * (x+1)]" },
            { "verbal_explanation": "שלב 2: נזהה שהסוגריים (איקס ועוד אחת) מהווים גורם משותף שנמצא גם במונה וגם במכנה.", "math_expression": "ביטוי משותף: (x+1)" },
            { "verbal_explanation": "שלב 3: מכיוון שכל הפעולות בשבר הן פעולות כפל, מותר לנו למחוק (לצמצם) את הביטוי המשותף.", "math_expression": "צמצום הסוגריים" },
            { "verbal_explanation": "שלב 4: נרשום את מה שנותר לאחר הצמצום.", "math_expression": "x / 5" }
        ],
        "final_answer": "x / 5",
        "options": ["x", "1 / 5", "x / 5", "(x² + x) / 5"],
        "correctAnswer": 2
    },
    {
        "id": 19,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "High",
        "question_text": "חשבו ופשטו את ביטוי הכפל: <strong>[(x² - 1) / x] * [2x / (x - 1)]</strong>.",
        "hint": "פרקו תחילה את תבנית הפרש הריבועים שבשבר הראשון, ורק אז אחדו את השברים וצמצמו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המונה של השבר הראשון (איקס בריבוע פחות אחת) בעזרת נוסחת הפרש ריבועים.", "math_expression": "(x - 1) * (x + 1)" },
            { "verbal_explanation": "שלב 2: נרשום את התרגיל המלא כאשר כל הביטויים מפורקים לגורמים וללא פתיחת סוגריים.", "math_expression": "[ (x - 1)(x + 1) / x ] * [ 2x / (x - 1) ]" },
            { "verbal_explanation": "שלב 3: נאחד הכל לשבר אחד גדול. פעולה זו מקלה על ראיית האיברים לצמצום.", "math_expression": "[2x * (x - 1) * (x + 1)] / [x * (x - 1)]" },
            { "verbal_explanation": "שלב 4: נצמצם את האות איקס (המופיעה לבדה) מהמונה ומהמכנה.", "math_expression": "צמצום x" },
            { "verbal_explanation": "שלב 5: נצמצם את הסוגריים (איקס פחות אחת) המופיעים בשלמותם למעלה ולמטה.", "math_expression": "צמצום (x - 1)" },
            { "verbal_explanation": "שלב 6: נרשום את התוצאה הסופית שנותרה במונה (במכנה נשאר 1).", "math_expression": "2 * (x + 1)" }
        ],
        "final_answer": "2(x + 1)",
        "options": ["x + 1", "2(x - 1)", "2x", "2(x + 1)"],
        "correctAnswer": 3
    },
    {
        "id": 20,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "High",
        "question_text": "בצעו את פעולת החילוק הבאה ופשטו: <strong>[(x² - 4x) / 2] : [(x - 4) / 4]</strong>.",
        "hint": "בחילוק שברים - הופכים את השבר השני וכופלים. במקביל, נסו להוציא גורם משותף בשבר הראשון.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את השבר השני (נחליף בין המונה למכנה) ונשנה את הפעולה לכפל.", "math_expression": "[(x² - 4x) / 2] * [4 / (x - 4)]" },
            { "verbal_explanation": "שלב 2: נפרק את הביטוי (איקס בריבוע פחות ארבעה איקס) על ידי הוצאת איקס כגורם משותף מחוץ לסוגריים.", "math_expression": "x * (x - 4)" },
            { "verbal_explanation": "שלב 3: נרשום את התרגיל כאחד משותף, מפורק ומוכן לצמצום.", "math_expression": "[4 * x * (x - 4)] / [2 * (x - 4)]" },
            { "verbal_explanation": "שלב 4: נצמצם את המספרים - ארבע לחלק לשתיים נותן שתיים במונה.", "math_expression": "4 / 2 = 2" },
            { "verbal_explanation": "שלב 5: נצמצם את הסוגריים הזהים (איקס פחות ארבע).", "math_expression": "צמצום מלא" },
            { "verbal_explanation": "שלב 6: נרשום את מה שנשאר.", "math_expression": "2x" }
        ],
        "final_answer": "2x",
        "options": ["x/2", "2x", "4x", "x - 4"],
        "correctAnswer": 1
    },
    {
        "id": 21,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "כפלו ופשטו את השברים: <strong>(2a / 3b) * (6b / 4a)</strong>.",
        "hint": "הכפילו קודם הכל למעלה והכל למטה כדי ליצור שבר יחיד, ואז צמצמו מספרים ואותיות בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול את המונים יחד. מספר כפול מספר ואות כפול אות.", "math_expression": "2a * 6b = 12ab" },
            { "verbal_explanation": "שלב 2: נכפול את המכנים יחד באותה צורה.", "math_expression": "3b * 4a = 12ab" },
            { "verbal_explanation": "שלב 3: נרשום את השבר החדש שקיבלנו.", "math_expression": "(12ab) / (12ab)" },
            { "verbal_explanation": "שלב 4: נבחין שהמונה והמכנה זהים לחלוטין. חלוקה של ביטוי בעצמו שווה תמיד לאחת (בהנחה שאינו אפס).", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["1", "ab", "12 / ab", "2"],
        "correctAnswer": 0
    },
    {
        "id": 22,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה של הכפל הבא: <strong>[(x + 3) / (x - 3)] * [(x - 3) / (x + 3)]</strong>?",
        "hint": "שימו לב לאיברים המופיעים באלכסון. האם ניתן לצמצם אותם לפני שמכפילים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את שני השברים לשבר אחד ארוך. נכפיל את המונים ונכפיל את המכנים.", "math_expression": "[(x + 3) * (x - 3)] / [(x - 3) * (x + 3)]" },
            { "verbal_explanation": "שלב 2: בזכות חוק החילוף של הכפל, אנו רואים שהמונה והמכנה מכילים בדיוק את אותם גורמים.", "math_expression": "מונה זהה למכנה" },
            { "verbal_explanation": "שלב 3: נצמצם את (איקס ועוד שלוש) מלמעלה ולמטה.", "math_expression": "צמצום ראשון" },
            { "verbal_explanation": "שלב 4: נצמצם את (איקס פחות שלוש) מלמעלה ולמטה.", "math_expression": "צמצום שני" },
            { "verbal_explanation": "שלב 5: כשמצמצמים הכל בפעולת חילוק, התוצאה אינה אפס אלא אחת.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["x² - 9", "1", "0", "-1"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "High",
        "question_text": "חילוק שברים מורכב: <strong>[(x² - 25) / (x + 2)] : [(x + 5) / (2x + 4)]</strong>. (הסימן : מייצג חילוק).",
        "hint": "זהו תרגיל שמשלב הכל: כפל בהופכי, נוסחת כפל מקוצר במונה, והוצאת גורם משותף במכנה. עבדו שלב-שלב.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמיר את פעולת החילוק לכפל, על ידי הפיכת השבר השני.", "math_expression": "[(x² - 25) / (x + 2)] * [(2x + 4) / (x + 5)]" },
            { "verbal_explanation": "שלב 2: נפרק לגורמים את (איקס בריבוע פחות עשרים וחמש) לפי הפרש ריבועים.", "math_expression": "(x - 5) * (x + 5)" },
            { "verbal_explanation": "שלב 3: נפרק לגורמים את הביטוי (שני איקס ועוד ארבע) על ידי הוצאת המספר 2 מחוץ לסוגריים.", "math_expression": "2 * (x + 2)" },
            { "verbal_explanation": "שלב 4: נבנה שבר אחד גדול הכולל את כל הפירוקים שלנו.", "math_expression": "[2 * (x - 5) * (x + 5) * (x + 2)] / [(x + 2) * (x + 5)]" },
            { "verbal_explanation": "שלב 5: נצמצם את הסוגריים (איקס ועוד חמש).", "math_expression": "נמחק (x+5)" },
            { "verbal_explanation": "שלב 6: נצמצם את הסוגריים (איקס ועוד שתיים).", "math_expression": "נמחק (x+2)" },
            { "verbal_explanation": "שלב 7: נרשום את הביטוי הסופי שנותר.", "math_expression": "2 * (x - 5)" }
        ],
        "final_answer": "2(x - 5)",
        "options": ["2(x + 5)", "x - 5", "2(x - 5)", "2x - 5"],
        "correctAnswer": 2
    },
    {
        "id": 24,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פשטו את המכפלה: <strong>[(x - 2)² / 3] * [9 / (x - 2)]</strong>.",
        "hint": "זכרו שביטוי בריבוע פירושו שהסוגריים מוכפלים בעצמם פעמיים. אפשר לצמצם סוגריים אחד מהמונה עם הסוגריים במכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את הביטוי בריבוע בצורה מפורשת (כפל כפול) כדי להבין אותו טוב יותר.", "math_expression": "(x - 2) * (x - 2)" },
            { "verbal_explanation": "שלב 2: נאחד את השברים ונרשום את התרגיל בשלמותו.", "math_expression": "[9 * (x - 2) * (x - 2)] / [3 * (x - 2)]" },
            { "verbal_explanation": "שלב 3: נצמצם את המספרים החופשיים. תשע לחלק לשלוש נותן שלוש.", "math_expression": "9 / 3 = 3" },
            { "verbal_explanation": "שלב 4: נצמצם סט אחד של סוגריים (איקס פחות שתיים) מלמעלה ומלמטה.", "math_expression": "צמצום ביטוי משותף" },
            { "verbal_explanation": "שלב 5: נרשום את התוצאה הסופית המכילה את המספר ואת הסוגריים שנותרו.", "math_expression": "3 * (x - 2)" }
        ],
        "final_answer": "3(x - 2)",
        "options": ["3(x - 2)²", "3(x - 2)", "x - 2", "9(x - 2)"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "High",
        "question_text": "כפלו ופשטו: <strong>[(x² + 3x + 2) / (x - 1)] * [(x - 1) / (x + 2)]</strong>.",
        "hint": "המונה של השבר הראשון הוא טרינום בר-פירוק. פרקו אותו לשני סוגריים, ואז תראו שחלקים רבים מצטמצמים בקלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את הטרינום במונה. נחפש שני מספרים שכפלם 2 וחיבורם 3. המספרים הם 1 ו-2.", "math_expression": "(x + 1) * (x + 2)" },
            { "verbal_explanation": "שלב 2: נציב את הטרינום המפורק ונבנה את תרגיל הכפל כגוש אחד ארוך.", "math_expression": "[(x + 1) * (x + 2) * (x - 1)] / [(x - 1) * (x + 2)]" },
            { "verbal_explanation": "שלב 3: נצמצם את הסוגריים (איקס פחות אחת) שמופיעים בשני צידי קו השבר.", "math_expression": "מחיקת (x - 1)" },
            { "verbal_explanation": "שלב 4: נצמצם את הסוגריים (איקס ועוד שתיים) המופיעים אף הם בשני המקומות.", "math_expression": "מחיקת (x + 2)" },
            { "verbal_explanation": "שלב 5: נרשום את התוצאה הסופית ששרדה את פעולות הצמצום.", "math_expression": "x + 1" }
        ],
        "final_answer": "x + 1",
        "options": ["x + 2", "x - 1", "x + 1", "x² + 2"],
        "correctAnswer": 2
    },
    {
        "id": 26,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "בצעו פעולת חילוק: <strong>[5x / (x + 1)] : [10x² / (x + 1)]</strong>. (הסימן : הוא חילוק).",
        "hint": "כמו תמיד בחילוק שברים, הופכים את השבר השני לכפל. המכנים המשותפים יצטמצמו לחלוטין.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את השבר הימני ונעבור לפעולת כפל.", "math_expression": "[5x / (x + 1)] * [(x + 1) / 10x²]" },
            { "verbal_explanation": "שלב 2: נאחד לשבר גדול כדי לזהות איברים משותפים.", "math_expression": "[5x * (x + 1)] / [10x² * (x + 1)]" },
            { "verbal_explanation": "שלב 3: נצמצם לחלוטין את הסוגריים הזהים (איקס ועוד אחת).", "math_expression": "5x / 10x²" },
            { "verbal_explanation": "שלב 4: נצמצם את המספרים (חמש חלקי עשר נותן חצי - 2 במכנה).", "math_expression": "1 / 2" },
            { "verbal_explanation": "שלב 5: נצמצם משתנים (איקס חלקי איקס בריבוע נותן איקס במכנה).", "math_expression": "1 / (2x)" }
        ],
        "final_answer": "1 / 2x",
        "options": ["2x", "1 / 2x", "5 / x", "1 / 2"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פשטו את התרגיל המאתגר הבא: <strong>[(x² - 16) / (x² - 9)] * [(x + 3) / (x - 4)]</strong>.",
        "hint": "יש כאן שני ביטויים של 'הפרש ריבועים'. פרקו גם את המונה וגם את המכנה של השבר הראשון.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המונה של השבר הראשון (איקס בריבוע פחות 16) לשני סוגריים.", "math_expression": "(x - 4) * (x + 4)" },
            { "verbal_explanation": "שלב 2: נפרק גם את המכנה של השבר הראשון (איקס בריבוע פחות 9).", "math_expression": "(x - 3) * (x + 3)" },
            { "verbal_explanation": "שלב 3: נכתוב את המכפלה הארוכה עם כל הגורמים שפירקנו.", "math_expression": "[(x - 4)(x + 4)(x + 3)] / [(x - 3)(x + 3)(x - 4)]" },
            { "verbal_explanation": "שלב 4: נבצע צמצום של הסוגריים (איקס פחות ארבע).", "math_expression": "מחיקת (x - 4)" },
            { "verbal_explanation": "שלב 5: נבצע צמצום נוסף של הסוגריים (איקס ועוד שלוש).", "math_expression": "מחיקת (x + 3)" },
            { "verbal_explanation": "שלב 6: נרשום את השבר הסופי מהביטויים שנותרו במונה ובמכנה.", "math_expression": "(x + 4) / (x - 3)" }
        ],
        "final_answer": "(x + 4) / (x - 3)",
        "options": ["(x + 4) / (x + 3)", "(x - 4) / (x - 3)", "(x + 4) / (x - 3)", "1"],
        "correctAnswer": 2
    },
    {
        "id": 28,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "הכפילו את השברים הבאים ופשטו: <strong>[(x - y) / 2] * [4 / (y - x)]</strong>.",
        "hint": "שימו לב: הסוגריים דומים אך הפוכים בסימניהם. הוצאת גורם משותף שלילי (מינוס אחד) מאחד מהם תאפשר צמצום.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהביטויים (איקס פחות וואי) ו-(וואי פחות איקס) הם נגדיים זה לזה.", "math_expression": "(x - y)  vs  (y - x)" },
            { "verbal_explanation": "שלב 2: נוציא מינוס אחד מהסוגריים השניים כדי להשוות אותם לראשונים.", "math_expression": "(y - x) = -1 * (x - y)" },
            { "verbal_explanation": "שלב 3: נרשום את התרגיל המאוחד עם המינוס שהוצאנו.", "math_expression": "[4 * (x - y)] / [-2 * (x - y)]" },
            { "verbal_explanation": "שלב 4: נצמצם את הסוגריים המשותפים לחלוטין משני האגפים.", "math_expression": "נשאר: 4 / -2" },
            { "verbal_explanation": "שלב 5: נבצע את פעולת החלוקה המספרית הסופית.", "math_expression": "-2" }
        ],
        "final_answer": "-2",
        "options": ["2", "-2", "2(x - y)", "0"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "High",
        "question_text": "בצעו חילוק של שברים אלגבריים: <strong>[(x² - 6x + 9) / x] : [(x - 3) / x²]</strong>. (הסימן : הוא חילוק).",
        "hint": "זהו שילוב של נוסחת דו-איבר בריבוע (או טרינום) במונה, וכפל בהופכי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את השבר השני ונחליף את הפעולה לכפל.", "math_expression": "[(x² - 6x + 9) / x] * [x² / (x - 3)]" },
            { "verbal_explanation": "שלב 2: נזהה ונפרק את המונה הריבועי. זוהי בדיוק נוסחת הכפל המקוצר, או טרינום של מינוס שלוש ומינוס שלוש.", "math_expression": "(x - 3) * (x - 3)" },
            { "verbal_explanation": "שלב 3: נאחד הכל לשבר אחד.", "math_expression": "[x² * (x - 3) * (x - 3)] / [x * (x - 3)]" },
            { "verbal_explanation": "שלב 4: נצמצם פעם אחת את הסוגריים (איקס פחות שלוש).", "math_expression": "נמחק זוג אחד" },
            { "verbal_explanation": "שלב 5: נצמצם את המשתנה איקס (איקס בריבוע חלקי איקס משאיר איקס אחד למעלה).", "math_expression": "x" },
            { "verbal_explanation": "שלב 6: נרשום את המכפלה הסופית שנותרה במונה.", "math_expression": "x * (x - 3)" }
        ],
        "final_answer": "x(x - 3)",
        "options": ["x - 3", "x²", "x(x - 3)", "(x - 3) / x"],
        "correctAnswer": 2
    },
    {
        "id": 30,
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "שאלת הבנה: מהו השלב הראשון והקריטי ביותר <strong>לפני</strong> שמבצעים פעולת כפל בין שני שברים אלגבריים שונים?",
        "hint": "האם כדאי לפתוח סוגריים ולהתחיל לכפול איבר-איבר, או שיש פעולה שתהפוך את התרגיל לפשוט יותר?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין שמטרתנו באלגברה היא תמיד לפשט ביטויים ולא לסבך אותם. פתיחת סוגריים לרוב יוצרת ביטויים ארוכים ומסובכים להבנה.", "math_expression": "פישוט לפני חישוב" },
            { "verbal_explanation": "שלב 2: הדרך היעילה ביותר לפתרון היא קודם כל לפרק כל חלק (מונה ומכנה בנפרד) לגורמים קטנים ופשוטים בעזרת גורם משותף, טרינום ונוסחאות הכפל המקוצר.", "math_expression": "פירוק לגורמים" },
            { "verbal_explanation": "שלב 3: רק לאחר הפירוק נבדוק אילו גורמים ניתן לצמצם (למחוק) ורק אז נבצע את פעולת הכפל על מה שנותר." }
        ],
        "final_answer": "לפרק את המונים והמכנים לגורמים כדי לחפש איברים שאפשר לצמצם.",
        "options": ["לפתוח את כל הסוגריים בעזרת חוק הפילוג.", "למצוא מכנה משותף (כמו בפעולת חיבור).", "להפוך את השבר השני ולהחליף את הסימן.", "לפרק את המונים והמכנים לגורמים כדי לחפש איברים שאפשר לצמצם."],
        "correctAnswer": 3
    },,
    // ==============================================================
    // --- תת נושא 3: חיבור וחיסור שברים אלגבריים (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "חברו את השברים הבאים בעלי המכנה הזהה: <strong>(x / 5) + (2x / 5)</strong>.",
        "hint": "כאשר המכנים זהים, פשוט מחברים את המונים ומשאירים את המכנה כפי שהוא.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמכנה בשני השברים הוא זהה (המספר 5).", "math_expression": "מכנה משותף = 5" },
            { "verbal_explanation": "שלב 2: נחבר את המונים יחד מעל קו שבר אחד.", "math_expression": "(x + 2x) / 5" },
            { "verbal_explanation": "שלב 3: נכנס איברים דומים במונה. איקס ועוד שני איקס שווה שלושה איקס.", "math_expression": "3x / 5" }
        ],
        "final_answer": "3x / 5",
        "options": ["3x / 10", "3x / 5", "2x² / 5", "x / 5"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "בצעו את פעולת החיבור הבאה: <strong>(x / 3) + (x / 4)</strong>.",
        "hint": "מצאו מכנה משותף שמתחלק גם ב-3 וגם ב-4, והרחיבו את המונים בהתאם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחפש את המכנה המשותף המינימלי למספרים 3 ו-4. המספר הקטן ביותר שמתחלק בשניהם הוא 12.", "math_expression": "מכנה משותף = 12" },
            { "verbal_explanation": "שלב 2: נרחיב את השבר הראשון. כדי להגיע מ-3 ל-12 נכפול פי 4. לכן נכפול גם את המונה שלו ב-4.", "math_expression": "4 * x = 4x" },
            { "verbal_explanation": "שלב 3: נרחיב את השבר השני. נכפול את המונה שלו ב-3.", "math_expression": "3 * x = 3x" },
            { "verbal_explanation": "שלב 4: נחבר את המונים החדשים מעל המכנה המשותף.", "math_expression": "(4x + 3x) / 12" },
            { "verbal_explanation": "שלב 5: נסכם את התוצאה הסופית במונה.", "math_expression": "7x / 12" }
        ],
        "final_answer": "7x / 12",
        "options": ["2x / 7", "7x / 12", "x / 12", "x² / 12"],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "חברו את השברים הבאים (הניחו כי איקס שונה מאפס): <strong>(5 / x) + (2 / 3x)</strong>.",
        "hint": "המכנה המשותף חייב לכלול את כל הגורמים השונים. במקרה זה: המספר 3 והאות איקס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את המכנים. מכנה אחד הוא איקס, והשני הוא שלושה איקס. המכנה המשותף הקטן ביותר המכיל את שניהם הוא שלושה איקס.", "math_expression": "מכנה משותף = 3x" },
            { "verbal_explanation": "שלב 2: נבדוק פי כמה צריך להרחיב כל שבר. את השבר הראשון יש להכפיל ב-3.", "math_expression": "הרחבת מונה 1: 5 * 3 = 15" },
            { "verbal_explanation": "שלב 3: השבר השני כבר נמצא על המכנה המשותף, לכן המונה שלו (2) נשאר כמו שהוא.", "math_expression": "הרחבת מונה 2: 2 * 1 = 2" },
            { "verbal_explanation": "שלב 4: נחבר את המונים החדשים מעל המכנה המשותף.", "math_expression": "(15 + 2) / 3x" },
            { "verbal_explanation": "שלב 5: נחשב את התוצאה הסופית.", "math_expression": "17 / 3x" }
        ],
        "final_answer": "17 / 3x",
        "options": ["7 / 4x", "17 / x", "17 / 3x", "10 / 3x²"],
        "correctAnswer": 2
    },
    {
        "id": 34,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "בצעו את פעולת החיסור: <strong>(3x / (x - 1)) - (3 / (x - 1))</strong>.",
        "hint": "המכנים זהים. חסרו את המונים ובידקו האם ניתן לפרק ולצמצם את התוצאה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכיוון שהמכנים זהים לחלוטין (איקס פחות אחת), נאחד את השברים תחת קו שבר אחד.", "math_expression": "(3x - 3) / (x - 1)" },
            { "verbal_explanation": "שלב 2: נבחין שניתן לפרק את המונה. נוציא את המספר 3 כגורם משותף מחוץ לסוגריים.", "math_expression": "[3 * (x - 1)] / (x - 1)" },
            { "verbal_explanation": "שלב 3: כעת ישנה פעולת כפל במונה, המאפשרת לנו לצמצם את הסוגריים (איקס פחות אחת) עם המכנה.", "math_expression": "צמצום הסוגריים" },
            { "verbal_explanation": "שלב 4: התוצאה הסופית נותרת מספר שלם.", "math_expression": "3" }
        ],
        "final_answer": "3",
        "options": ["3", "x", "3x", "1 / (x - 1)"],
        "correctAnswer": 0
    },
    {
        "id": 35,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "חברו את השברים: <strong>(4 / (x + 2)) + (3 / (x - 2))</strong>.",
        "hint": "המכנים שונים ואין להם גורם משותף. המכנה המשותף יהיה מכפלתם. הקפידו להכפיל כל מונה במכנה הנגדי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את המכנה המשותף כמכפלת שני המכנים.", "math_expression": "(x + 2) * (x - 2)" },
            { "verbal_explanation": "שלב 2: נרחיב את המונה הראשון על ידי הכפלתו במכנה השני.", "math_expression": "4 * (x - 2) = 4x - 8" },
            { "verbal_explanation": "שלב 3: נרחיב את המונה השני על ידי הכפלתו במכנה הראשון.", "math_expression": "3 * (x + 2) = 3x + 6" },
            { "verbal_explanation": "שלב 4: נחבר את שני המונים המורחבים מעל המכנה המשותף.", "math_expression": "(4x - 8 + 3x + 6) / [(x + 2)(x - 2)]" },
            { "verbal_explanation": "שלב 5: נכנס איברים דומים במונה. ארבעה איקס ועוד שלושה איקס שווה 7x. מינוס 8 ועוד 6 שווה מינוס 2.", "math_expression": "(7x - 2) / (x² - 4)" }
        ],
        "final_answer": "(7x - 2) / (x² - 4)",
        "options": ["7 / (2x)", "(7x - 2) / (x² - 4)", "(7x + 14) / (x² - 4)", "12 / (x² - 4)"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "בצעו את פעולת החיסור הבאה: <strong>(5 / (x - 3)) - (2 / (3 - x))</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100' viewBox='0 0 180 100'><text x='40' y='40' font-size='20' font-weight='bold' text-anchor='middle'>5</text><line x1='10' y1='50' x2='70' y2='50' stroke='black' stroke-width='2'/><text x='40' y='75' font-size='18' font-weight='bold' text-anchor='middle'>x - 3</text><text x='90' y='60' font-size='28' font-weight='bold' text-anchor='middle' fill='#ef4444'>-</text><text x='140' y='40' font-size='20' font-weight='bold' text-anchor='middle'>2</text><line x1='110' y1='50' x2='170' y2='50' stroke='black' stroke-width='2'/><text x='140' y='75' font-size='18' font-weight='bold' text-anchor='middle'>3 - x</text></svg></div>",
        "hint": "טריק חשוב: המכנים הפוכים בסימנים. הוציאו מינוס מחוץ למכנה השני כדי להשוות אותו לראשון, וראו כיצד זה משפיע על פעולת החיסור כולה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמכנים נגדיים. נשנה את המכנה השני מ-(3 פחות איקס) למינוס של (איקס פחות 3).", "math_expression": "3 - x = -1 * (x - 3)" },
            { "verbal_explanation": "שלב 2: כעת נסתכל על השבר השני. יש לו מינוס לפני השבר ומינוס נוסף במכנה. מינוס כפול מינוס הופך לפלוס.", "math_expression": "- [ 2 / -(x - 3) ] = + [ 2 / (x - 3) ]" },
            { "verbal_explanation": "שלב 3: נרשום את התרגיל החדש עם המכנים הזהים ופעולת החיבור שנוצרה.", "math_expression": "(5 / (x - 3)) + (2 / (x - 3))" },
            { "verbal_explanation": "שלב 4: המכנה כעת משותף. נחבר את המונים (חמש ועוד שתיים).", "math_expression": "7 / (x - 3)" }
        ],
        "final_answer": "7 / (x - 3)",
        "options": ["3 / (x - 3)", "7 / (x - 3)", "3 / (2x - 6)", "10 / (x - 3)²"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פשטו את ביטוי החיבור הבא: <strong>(3 / (x² - 4)) + (1 / (x - 2))</strong>.",
        "hint": "אל תכפילו את המכנים מיד! המכנה הראשון הוא הפרש ריבועים המכיל בתוכו את המכנה השני. פרקו אותו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המכנה של השבר הראשון בעזרת נוסחת הפרש ריבועים.", "math_expression": "x² - 4 = (x - 2) * (x + 2)" },
            { "verbal_explanation": "שלב 2: נרשום את התרגיל מחדש כדי לראות את המכנים.", "math_expression": "[3 / ((x - 2)(x + 2))] + [1 / (x - 2)]" },
            { "verbal_explanation": "שלב 3: נבחין שהמכנה המשותף המינימלי הוא בדיוק המכנה הראשון. נרחיב רק את השבר השני על ידי הכפלתו ב-(איקס ועוד שתיים).", "math_expression": "1 * (x + 2) = x + 2" },
            { "verbal_explanation": "שלב 4: נחבר את המונים מעל המכנה המשותף (שלוש ועוד איקס ועוד שתיים).", "math_expression": "(3 + x + 2) / (x² - 4)" },
            { "verbal_explanation": "שלב 5: נסכם את המספרים במונה.", "math_expression": "(x + 5) / (x² - 4)" }
        ],
        "final_answer": "(x + 5) / (x² - 4)",
        "options": ["4 / (x² - 4)", "4 / (x - 2)", "(x + 5) / (x² - 4)", "(3x + 6) / (x² - 4)"],
        "correctAnswer": 2
    },
    {
        "id": 38,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "חסרו את השברים: <strong>(2x + 1) / 3 - (x - 2) / 4</strong>.",
        "hint": "מצאו מכנה משותף מספרי. הדבר החשוב ביותר: סימן המינוס מול השבר השני חל על כל המונה שלו, לכן כדאי להשתמש בסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא מכנה משותף למספרים 3 ו-4, שהוא 12.", "math_expression": "מכנה משותף = 12" },
            { "verbal_explanation": "שלב 2: נרחיב את המונה של השבר הראשון פי 4.", "math_expression": "4 * (2x + 1) = 8x + 4" },
            { "verbal_explanation": "שלב 3: נרחיב את המונה של השבר השני פי 3. חובה לשים לב למינוס שלפני השבר שפועל על כולו.", "math_expression": "-3 * (x - 2) = -3x + 6" },
            { "verbal_explanation": "שלב 4: נאחד את המונים המורחבים מעל המכנה 12.", "math_expression": "(8x + 4 - 3x + 6) / 12" },
            { "verbal_explanation": "שלב 5: נכנס איברים דומים (איקסים בנפרד ומספרים בנפרד).", "math_expression": "(5x + 10) / 12" }
        ],
        "final_answer": "(5x + 10) / 12",
        "options": ["(5x - 2) / 12", "(5x + 10) / 12", "x / 12", "(x - 1) / -1"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "חסרו שבר ממספר שלם: <strong>1 - (2 / (x + 1))</strong>.",
        "hint": "הפכו את המספר 1 לשבר שמונה ומכנה שלו זהים למכנה של השבר השני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמיר את המספר השלם 1 לשבר שהמונה והמכנה שלו הם (איקס ועוד אחת), כדי ליצור מכנה משותף מידי.", "math_expression": "1 = (x + 1) / (x + 1)" },
            { "verbal_explanation": "שלב 2: נרשום את התרגיל עם השברים בעלי המכנה הזהה.", "math_expression": "[(x + 1) / (x + 1)] - [2 / (x + 1)]" },
            { "verbal_explanation": "שלב 3: נחסר את המונים מעל המכנה המשותף.", "math_expression": "(x + 1 - 2) / (x + 1)" },
            { "verbal_explanation": "שלב 4: נחשב את המספרים במונה (אחת פחות שתיים שווה מינוס אחת).", "math_expression": "(x - 1) / (x + 1)" }
        ],
        "final_answer": "(x - 1) / (x + 1)",
        "options": ["-1 / (x + 1)", "(x - 1) / (x + 1)", "1 / (x + 1)", "x / (x + 1)"],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "מה קורה למכנה המשותף לאחר שמסיימים לחבר או לחסר שברים אלגבריים ב<strong>ביטוי אלגברי</strong> (שאינו משוואה)?",
        "hint": "האם מותר לנו 'להעלים' חלק מביטוי אם אין לנו שני אגפים שאפשר להכפיל?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבחין בין 'משוואה' (שיש בה סימן שווה ושני אגפים) לבין 'ביטוי' (תרגיל חישוב פשוט).", "math_expression": "ביטוי לעומת משוואה" },
            { "verbal_explanation": "שלב 2: במשוואה מותר להכפיל את שני הצדדים במכנה כדי להעלימו, כי אנו שומרים על איזון.", "math_expression": "מותר במשוואה" },
            { "verbal_explanation": "שלב 3: בביטוי אלגברי אין לנו צד שני שיאזן הכפלה כזו. אם נמחק את המכנה, למעשה שינינו את ערך הביטוי לחלוטין.", "math_expression": "אסור בביטוי" },
            { "verbal_explanation": "שלב 4: מסקנה: המכנה המשותף חייב להישאר בתוצאה הסופית." }
        ],
        "final_answer": "הוא נשאר בתוצאה הסופית, אסור להעלים אותו.",
        "options": ["הוא נעלם ומשאיר רק את המונה.", "הוא נשאר בתוצאה הסופית, אסור להעלים אותו.", "מעבירים אותו לאגף ימין.", "הוא מתאפס."],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "חברו את השברים הבאים: <strong>(3 / (x² + 2x)) + (1 / x)</strong>.",
        "hint": "הוציאו גורם משותף במכנה הראשון. לאחר מכן, גלו מה חסר למכנה השני כדי להפוך למשותף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המכנה הראשון על ידי הוצאת איקס מחוץ לסוגריים.", "math_expression": "x² + 2x = x * (x + 2)" },
            { "verbal_explanation": "שלב 2: נבחן את המכנה השני (שהוא רק איקס). כדי להגיע למכנה המשותף, חסר לו רק הביטוי שבסוגריים.", "math_expression": "חסר: (x + 2)" },
            { "verbal_explanation": "שלב 3: נרחיב את המונה של השבר השני על ידי הכפלתו ב-(איקס ועוד שתיים).", "math_expression": "1 * (x + 2) = x + 2" },
            { "verbal_explanation": "שלב 4: השבר הראשון כבר מכיל את המכנה המשותף ולכן המונה שלו נשאר 3.", "math_expression": "מונה 1 = 3" },
            { "verbal_explanation": "שלב 5: נחבר את המונים (שלוש ועוד איקס ועוד שתיים) מעל המכנה המפורק.", "math_expression": "(x + 5) / [x * (x + 2)]" }
        ],
        "final_answer": "(x + 5) / (x² + 2x)",
        "options": ["4 / (x² + 3x)", "(x + 5) / (x² + 2x)", "(3x + 2) / x", "(x + 3) / (x² + 2x)"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "חסרו ופשטו: <strong>x / (x + 1) - x / (x - 1)</strong>.",
        "hint": "המכנה המשותף הוא מכפלת המכנים. הרחיבו כל מונה בהתאם, ופשטו את המונה המאוחד בזהירות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המכנה המשותף הוא (איקס פלוס אחת) כפול (איקס מינוס אחת), שזו בעצם נוסחת הפרש ריבועים.", "math_expression": "מכנה משותף = x² - 1" },
            { "verbal_explanation": "שלב 2: נרחיב את המונה השמאלי (איקס) על ידי הכפלתו ב-(איקס מינוס אחת).", "math_expression": "x * (x - 1) = x² - x" },
            { "verbal_explanation": "שלב 3: נרחיב את המונה הימני (איקס) על ידי הכפלתו ב-(איקס פלוס אחת). נזכור שיש פעולת חיסור לפניו.", "math_expression": "-x * (x + 1) = -x² - x" },
            { "verbal_explanation": "שלב 4: נחבר את תוצאות המונים.", "math_expression": "x² - x - x² - x" },
            { "verbal_explanation": "שלב 5: נכנס איברים דומים. האיקס בריבוע מתבטל, ונשארים עם מינוס שני איקס.", "math_expression": "-2x / (x² - 1)" }
        ],
        "final_answer": "-2x / (x² - 1)",
        "options": ["0", "-2x / (x² - 1)", "2x / (x² - 1)", "-2 / (x² - 1)"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה של חיבור שני השברים הבאים: <strong>(3 / a) + (4 / b)</strong>?",
        "hint": "כשאין שום גורם משותף בין האותיות, המכנה המשותף הוא פשוט המכפלה שלהן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את המכנה המשותף כמכפלת שני המכנים.", "math_expression": "מכנה משותף = ab" },
            { "verbal_explanation": "שלב 2: נרחיב את המונה הראשון (שלוש). כדי להגיע מ-איי ל-איי-בי, נכפיל ב-בי.", "math_expression": "3 * b = 3b" },
            { "verbal_explanation": "שלב 3: נרחיב את המונה השני (ארבע). כדי להגיע מ-בי ל-איי-בי, נכפיל ב-איי.", "math_expression": "4 * a = 4a" },
            { "verbal_explanation": "שלב 4: נאחד את המונים המורחבים מעל המכנה המשותף.", "math_expression": "(3b + 4a) / ab" }
        ],
        "final_answer": "(3b + 4a) / ab",
        "options": ["7 / ab", "7 / (a + b)", "(3b + 4a) / ab", "12ab"],
        "correctAnswer": 2
    },
    {
        "id": 44,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פשטו את התרגיל הבא: <strong>(x + 1) / x - (x - 1) / x</strong>.",
        "hint": "המכנים זהים! פשוט חסרו את המונה השני מהראשון, אך חובה לשים את המונה השני בסוגריים כדי שהמינוס יתהפך כראוי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכיוון שהמכנה המשותף כבר קיים (איקס), נרשום קו שבר אחד ארוך.", "math_expression": "[ (x + 1) - (x - 1) ] / x" },
            { "verbal_explanation": "שלב 2: נפתח את הסוגריים של המונה השני. המינוס משנה את הסימנים שבפנים: איקס הופך למינוס איקס, ומינוס אחת הופך לפלוס אחת.", "math_expression": "x + 1 - x + 1" },
            { "verbal_explanation": "שלב 3: נכנס איברים דומים. האיקסים מתבטלים זה עם זה (איקס פחות איקס), והמספרים מתחברים (אחת ועוד אחת שווה שתיים).", "math_expression": "2 / x" }
        ],
        "final_answer": "2 / x",
        "options": ["2x / x", "0", "2 / x", "2x"],
        "correctAnswer": 2
    },
    {
        "id": 45,
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "difficulty": "High",
        "question_text": "חסרו את השברים: <strong>[2 / (x² - 2x)] - [1 / (x² - 4)]</strong>.",
        "hint": "זהו תרגיל קלאסי: פרקו את המכנה הראשון בעזרת גורם משותף איקס, פרקו את המכנה השני בעזרת הפרש ריבועים, והרכיבו מכנה משותף ענק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המכנה השמאלי.", "math_expression": "x * (x - 2)" },
            { "verbal_explanation": "שלב 2: נפרק את המכנה הימני.", "math_expression": "(x - 2) * (x + 2)" },
            { "verbal_explanation": "שלב 3: נרכיב מכנה משותף שיכיל את כל החלקים ללא כפילויות מיותרות.", "math_expression": "מכנה משותף = x * (x - 2) * (x + 2)" },
            { "verbal_explanation": "שלב 4: נרחיב את המונה השמאלי (2). חסר לו החלק של (איקס ועוד שתיים).", "math_expression": "2 * (x + 2) = 2x + 4" },
            { "verbal_explanation": "שלב 5: נרחיב את המונה הימני (1). חסר לו האיקס הבודד. נזכור שיש פעולת חיסור.", "math_expression": "-1 * x = -x" },
            { "verbal_explanation": "שלב 6: נחבר ונפשט במונה.", "math_expression": "2x + 4 - x = x + 4" },
            { "verbal_explanation": "שלב 7: התוצאה הסופית היא המונה המפושט מעל המכנה המשותף הארוך.", "math_expression": "(x + 4) / [x(x² - 4)]" }
        ],
        "final_answer": "(x + 4) / [x(x² - 4)]",
        "options": ["1 / (x - 2)", "(x + 4) / [x(x² - 4)]", "x / (x² - 4)", "-1 / 2x"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 4: משוואות עם שברים אלגבריים (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "פתרו את משוואת הפרופורציה הפשוטה: <strong>x / 3 = 12 / x</strong>. אל תשכחו לבדוק תחום הצבה בתחילת התרגיל.",
        "hint": "במשוואה שבה שבר שווה לשבר אחר, הדרך המהירה ביותר היא כפל בהצלבה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר תחום הצבה. המכנה אינו יכול להיות אפס, לכן איקס שונה מאפס.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: נבצע כפל באלכסון (הצלבה) בין המונים והמכנים.", "math_expression": "x * x = 12 * 3" },
            { "verbal_explanation": "שלב 3: נחשב את המכפלות משני צידי המשוואה הריבועית שנוצרה.", "math_expression": "x² = 36" },
            { "verbal_explanation": "שלב 4: נוציא שורש ריבועי. זכרו שיש תמיד שתי תוצאות לשורש במשוואה כזו.", "math_expression": "x = 6 , x = -6" },
            { "verbal_explanation": "שלב 5: נבדוק את התוצאות מול תחום ההצבה. שתיהן חוקיות (אינן אפס)." }
        ],
        "final_answer": "x1 = 6, x2 = -6",
        "options": ["x = 36", "x1 = 6, x2 = -6", "x = 6", "x = 4"],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה הבאה: <strong>(x + 2) / (x - 1) = 0</strong>.",
        "hint": "זהו כלל ברזל באלגברה: הדרך היחידה שבה שבר יכול להיות שווה לאפס, היא אם המונה שלו (החלק העליון) שווה לאפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר תחום הצבה למכנה. איקס שונה מאחת.", "math_expression": "x ≠ 1" },
            { "verbal_explanation": "שלב 2: נשווה רק את המונה לאפס, מכיוון שזו הדרך היחידה לאפס את השבר כולו.", "math_expression": "x + 2 = 0" },
            { "verbal_explanation": "שלב 3: נפתור את המשוואה הפשוטה שנוצרה על ידי העברת אגף.", "math_expression": "x = -2" },
            { "verbal_explanation": "שלב 4: נוודא שהתוצאה אינה מתנגשת עם תחום ההצבה שהגדרנו. התוצאה תקינה." }
        ],
        "final_answer": "x = -2",
        "options": ["x = 1", "x = 0", "x = -2", "אין פתרון"],
        "correctAnswer": 2
    },
    {
        "id": 48,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <strong>(1 / x) + (1 / 2) = 1</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='220' height='70' viewBox='0 0 220 70'><rect x='10' y='10' width='200' height='50' rx='8' fill='#fef3c7' stroke='#22c55e' stroke-width='2'/><text x='110' y='42' font-size='20' font-weight='bold' text-anchor='middle' fill='#166534'>כופלים במכנה המשותף</text></svg></div>",
        "hint": "המכנה המשותף הוא 2x. הכפילו כל איבר במשוואה (גם באגף ימין) במכנה המשותף כדי 'לשטח' את המשוואה לשורה אחת.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום ההצבה נקבע כאיקס שונה מאפס.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: נזהה את המכנה המשותף לשני השברים.", "math_expression": "מכנה משותף = 2x" },
            { "verbal_explanation": "שלב 3: נכפיל את כל המשוואה ב-2x. בשבר הראשון איקס מצטמצם ונשאר 2. בשבר השני 2 מצטמצם ונשאר איקס. האגף הימני מוכפל כולו.", "math_expression": "2 + x = 2x" },
            { "verbal_explanation": "שלב 4: נפתור את המשוואה הרגילה. נעביר את האיקס שמאלה.", "math_expression": "2 = 2x - x" },
            { "verbal_explanation": "שלב 5: נחשב את התוצאה הסופית.", "math_expression": "x = 2" },
            { "verbal_explanation": "שלב 6: בדיקת תקינות מול תחום ההצבה - חוקי." }
        ],
        "final_answer": "x = 2",
        "options": ["x = 1", "x = 0.5", "x = 2", "x = -1"],
        "correctAnswer": 2
    },
    {
        "id": 49,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "High",
        "question_text": "מצאו את איקס: <strong>2 / (x - 3) = 1 / (x - 2)</strong>.",
        "hint": "שוב לפנינו פרופורציה (שבר מול שבר). בצעו כפל בהצלבה: מונה ימין במכנה שמאל, ומונה שמאל במכנה ימין.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הגדרת תחום הצבה משני המכנים.", "math_expression": "x ≠ 3 , x ≠ 2" },
            { "verbal_explanation": "שלב 2: נשתמש בשיטת ההצלבה ונרשום את המכפלות בשורה אחת.", "math_expression": "2 * (x - 2) = 1 * (x - 3)" },
            { "verbal_explanation": "שלב 3: נפתח את הסוגריים משני הצדדים לפי חוק הפילוג.", "math_expression": "2x - 4 = x - 3" },
            { "verbal_explanation": "שלב 4: נעביר איקסים שמאלה ומספרים ימינה.", "math_expression": "2x - x = -3 + 4" },
            { "verbal_explanation": "שלב 5: נחשב את האגפים לקבלת פתרון.", "math_expression": "x = 1" },
            { "verbal_explanation": "שלב 6: הפתרון תואם את תחום ההצבה ולכן הוא קביל." }
        ],
        "final_answer": "x = 1",
        "options": ["x = 2", "x = 3", "x = 1", "x = -1"],
        "correctAnswer": 2
    },
    {
        "id": 50,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <strong>x² / (x - 2) = 4 / (x - 2)</strong>. שימו לב היטב לתחום ההצבה!",
        "hint": "כשהמכנים זהים, אפשר פשוט להשוות בין המונים (איקס בריבוע שווה ארבע). אך האם כל הפתרונות יהיו חוקיים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את תחום ההצבה המחמיר למשוואה, האוסר על איקס להיות שווה לשתיים.", "math_expression": "x ≠ 2" },
            { "verbal_explanation": "שלב 2: מכיוון שהמכנים משני צידי המשוואה זהים לחלוטין, נכפיל בהם כדי להיפטר מהם ונישאר רק עם השוואת המונים.", "math_expression": "x² = 4" },
            { "verbal_explanation": "שלב 3: נוציא שורש ריבועי ונקבל שתי פתרונות מתמטיים אפשריים.", "math_expression": "x1 = 2 , x2 = -2" },
            { "verbal_explanation": "שלב 4: נסנן את הפתרונות. לפי תחום ההצבה, איקס אינו יכול להיות שתיים, ולכן פתרון זה נפסל (נקרא פתרון זר/שקרי).", "math_expression": "x=2 מבוטל" },
            { "verbal_explanation": "שלב 5: המסקנה היא שהמשוואה מחזיקה בפתרון אחד בלבד.", "math_expression": "x = -2" }
        ],
        "final_answer": "x = -2",
        "options": ["x1 = 2, x2 = -2", "x = 2", "x = -2", "אין פתרון כלל"],
        "correctAnswer": 2
    },
    {
        "id": 51,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "Low",
        "question_text": "שאלת תיאוריה: מהו השלב <strong>הראשון וההכרחי</strong> שיש לבצע תמיד לפני שמתחילים לפתור משוואה הכוללת נעלם במכנה?",
        "hint": "אם נדלג על שלב זה, אנו עלולים להגיש למורה פתרון שמבחינה מתמטית הוא בלתי אפשרי (חלוקה באפס).",
        "solution_steps": [
            { "verbal_explanation": "באלגברה, המכנה של שבר מהווה סכנה מכיוון שחלוקה באפס גורמת לביטוי להיות חסר משמעות.", "math_expression": "שבר / 0 = אסון אלגברי" },
            { "verbal_explanation": "כדי להגן על הפתרון, חובה עלינו לבדוק מראש אילו ערכים אסור לאיקס לקבל.", "math_expression": "הגדרת גבולות" },
            { "verbal_explanation": "פעולה מקדימה זו נקראת קביעת תחום הצבה (או תחום הגדרה)." }
        ],
        "final_answer": "מציאת ורישום תחום ההצבה (התחום שבו המכנה שונה מאפס).",
        "options": ["לכפול באלכסון.", "למצוא מכנה משותף מינימלי.", "להעלות בריבוע את המשוואה.", "מציאת ורישום תחום ההצבה (התחום שבו המכנה שונה מאפס)."],
        "correctAnswer": 3
    },
    {
        "id": 52,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <strong>5 / (2x) = 10</strong>.",
        "hint": "הפכו את המספר 10 לשבר (עשר חלקי אחת) והשתמשו בשיטת ההצלבה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: רישום תחום הצבה המונע מהמכנה להתאפס.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: רישום המשוואה מחדש כפרופורציה פשוטה (שבר שווה שבר).", "math_expression": "5 / (2x) = 10 / 1" },
            { "verbal_explanation": "שלב 3: ביצוע כפל באלכסון.", "math_expression": "2x * 10 = 5 * 1" },
            { "verbal_explanation": "שלב 4: חישוב המכפלה באגף שמאל.", "math_expression": "20x = 5" },
            { "verbal_explanation": "שלב 5: בידוד איקס על ידי חלוקה במקדם שלו (עשרים).", "math_expression": "x = 5 / 20" },
            { "verbal_explanation": "שלב 6: צמצום השבר הסופי. חמש חלקי עשרים שווה לרבע.", "math_expression": "x = 1 / 4  (0.25)" }
        ],
        "final_answer": "x = 1/4",
        "options": ["x = 2", "x = 4", "x = 1/4", "x = 5"],
        "correctAnswer": 2
    },
    {
        "id": 53,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <strong>[x / (x + 1)] + [2 / (x + 1)] = 3</strong>.",
        "hint": "חברו קודם את שני השברים באגף שמאל (יש להם מכנה זהה), ואז הכפילו במכנה את שני אגפי המשוואה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: רישום תחום הצבה למכנה המשותף.", "math_expression": "x ≠ -1" },
            { "verbal_explanation": "שלב 2: נאחד את אגף שמאל מעל המכנה הזהה שלו.", "math_expression": "(x + 2) / (x + 1) = 3" },
            { "verbal_explanation": "שלב 3: נכפיל את שני אגפי המשוואה במכנה כדי להעלימו משורת השבר.", "math_expression": "x + 2 = 3 * (x + 1)" },
            { "verbal_explanation": "שלב 4: נפתח סוגריים באגף ימין בעזרת חוק הפילוג.", "math_expression": "x + 2 = 3x + 3" },
            { "verbal_explanation": "שלב 5: נעביר איקסים ימינה (כדי שיישארו חיוביים) ומספרים שמאלה.", "math_expression": "2 - 3 = 3x - x" },
            { "verbal_explanation": "שלב 6: נחשב את האגפים ונחלק לבידוד איקס.", "math_expression": "-1 = 2x  =>  x = -0.5" }
        ],
        "final_answer": "x = -0.5",
        "options": ["x = 1", "x = -0.5", "x = 0.5", "x = -2"],
        "correctAnswer": 1
    },
    {
        "id": 54,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "High",
        "question_text": "נסו לפתור את המשוואה הבאה: <strong>[1 / (x - 1)] + [1 / (x + 1)] = [2 / (x² - 1)]</strong>.",
        "hint": "זהירות! שימו לב מהו המכנה המשותף של כל המשוואה הזו, ובמיוחד מהו תחום ההצבה המחמיר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמכנה הימני (איקס בריבוע פחות אחת) הוא פירוק הפרש הריבועים של שני המכנים השמאליים.", "math_expression": "x² - 1 = (x - 1)(x + 1)" },
            { "verbal_explanation": "שלב 2: נגדיר תחום הצבה קפדני האוסר גם על אחת וגם על מינוס אחת.", "math_expression": "x ≠ 1 , x ≠ -1" },
            { "verbal_explanation": "שלב 3: נכפיל את כל המשוואה במכנה המשותף הכולל. השבר הראשון יקבל (איקס ועוד אחת), והשני (איקס פחות אחת).", "math_expression": "1 * (x + 1) + 1 * (x - 1) = 2" },
            { "verbal_explanation": "שלב 4: נפתח סוגריים ונחבר איברים באגף שמאל. האחת והמינוס אחת מתבטלים.", "math_expression": "2x = 2" },
            { "verbal_explanation": "שלב 5: נבודד את איקס על ידי חלוקה בשתיים.", "math_expression": "x = 1" },
            { "verbal_explanation": "שלב 6: נבדוק מול תחום ההצבה. גילינו שהפתרון שיצא לנו הוא איקס שווה אחת, אך אסרנו על כך מראש! לכן נפסול אותו.", "math_expression": "הפתרון נפסל" }
        ],
        "final_answer": "אין פתרון (קבוצה ריקה).",
        "options": ["x = 1", "x = -1", "x = 0", "אין פתרון (קבוצה ריקה)."],
        "correctAnswer": 3
    },
    {
        "id": 55,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <strong>(x - 5) / x = 2</strong>.",
        "hint": "הכפילו את כל המשוואה במכנה (איקס).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: קביעת תחום הצבה פשוט - איקס שונה מאפס.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: הכפלת שני אגפי המשוואה באיקס כדי לבטל את השבר.", "math_expression": "x - 5 = 2 * x" },
            { "verbal_explanation": "שלב 3: העברת האיקס הבודד מאגף שמאל לאגף ימין בחיסור.", "math_expression": "-5 = 2x - x" },
            { "verbal_explanation": "שלב 4: סיכום סופי של האגפים.", "math_expression": "x = -5" }
        ],
        "final_answer": "x = -5",
        "options": ["x = 5", "x = -5", "x = 2.5", "x = 0"],
        "correctAnswer": 1
    },
    {
        "id": 56,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה הבאה: <strong>3 / (x² - x) = 1 / x</strong>.",
        "hint": "פרקו את המכנה השמאלי (הוציאו איקס מחוץ לסוגריים), מצאו מכנה משותף (שיהיה בעצם המכנה המפורק עצמו) והכפילו בו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את המכנה השמאלי לגורמים כדי לראות ממה הוא מורכב.", "math_expression": "x * (x - 1)" },
            { "verbal_explanation": "שלב 2: נקבע תחום הצבה האוסר על איקס להיות אפס או אחת.", "math_expression": "x ≠ 0 , x ≠ 1" },
            { "verbal_explanation": "שלב 3: נזהה שהמכנה השמאלי המפורק הוא המכנה המשותף לכל המשוואה. נכפיל בו הכל.", "math_expression": "3 = 1 * (x - 1)" },
            { "verbal_explanation": "שלב 4: נפתור את המשוואה הפשוטה שנותרה. נעביר את המינוס אחת שמאלה.", "math_expression": "3 + 1 = x" },
            { "verbal_explanation": "שלב 5: התוצאה היא 4, ובהתאם לתחום ההצבה היא חוקית לחלוטין.", "math_expression": "x = 4" }
        ],
        "final_answer": "x = 4",
        "options": ["x = 3", "x = 4", "x = 1", "אין פתרון"],
        "correctAnswer": 1
    },
    {
        "id": 57,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "High",
        "question_text": "מצאו את הפתרון: <strong>(2x + 1) / (x - 3) = 5</strong>.",
        "hint": "הכפילו את שני האגפים במכנה ופתרו משוואה רגילה עם פתיחת סוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום הצבה אוסר על הצבת 3.", "math_expression": "x ≠ 3" },
            { "verbal_explanation": "שלב 2: נכפיל את שני אגפי המשוואה בביטוי (איקס פחות שלוש).", "math_expression": "2x + 1 = 5 * (x - 3)" },
            { "verbal_explanation": "שלב 3: נפתח סוגריים באגף ימין.", "math_expression": "2x + 1 = 5x - 15" },
            { "verbal_explanation": "שלב 4: נסדר את המשוואה. נעביר איקסים ימינה ומספרים שמאלה.", "math_expression": "1 + 15 = 5x - 2x" },
            { "verbal_explanation": "שלב 5: נחשב ונחלק בשלוש.", "math_expression": "16 = 3x  =>  x = 16 / 3" }
        ],
        "final_answer": "x = 16 / 3  (או 5 ו-1/3)",
        "options": ["x = 5", "x = 14 / 3", "x = 16 / 3", "x = 3"],
        "correctAnswer": 2
    },
    {
        "id": 58,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "פתרו את פרופורציית השברים הבאה: <strong>x / 4 = (x - 2) / 3</strong>.",
        "hint": "זהו תרגיל קלאסי לכפל בהצלבה. שימו את המונה הימני בתוך סוגריים לפני שאתם מכפילים אותו בארבע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכיוון שאין נעלמים במכנה, תחום ההצבה הוא כל איקס. נבצע כפל באלכסון (הצלבה).", "math_expression": "3 * x = 4 * (x - 2)" },
            { "verbal_explanation": "שלב 2: נפתח את הסוגריים באגף ימין.", "math_expression": "3x = 4x - 8" },
            { "verbal_explanation": "שלב 3: נעביר את השמונה שמאלה (לפלוס) ואת שלושת האיקסים ימינה (למינוס).", "math_expression": "8 = 4x - 3x" },
            { "verbal_explanation": "שלב 4: נחשב את התוצאה הסופית.", "math_expression": "x = 8" }
        ],
        "final_answer": "x = 8",
        "options": ["x = 2", "x = 8", "x = -8", "x = 4"],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <strong>1 / x + 1 / x² = 2 / x²</strong>.",
        "hint": "המכנה המשותף הגדול ביותר במשוואה הזו הוא איקס בריבוע. הכפילו את כל המשוואה בו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הגדרת תחום הצבה - אסור שהמכנה יתאפס.", "math_expression": "x ≠ 0" },
            { "verbal_explanation": "שלב 2: זיהוי המכנה המשותף המינימלי שמכסה את כל השברים. במקרה זה מדובר באיקס בריבוע.", "math_expression": "מכנה משותף = x²" },
            { "verbal_explanation": "שלב 3: הכפלת כל המשוואה במכנה המשותף. השבר הראשון מקבל איקס, השניים האחרים מאבדים את המכנה לחלוטין.", "math_expression": "1 * x + 1 = 2" },
            { "verbal_explanation": "שלב 4: פתרון המשוואה הפשוטה (נעביר את האחת בחיסור).", "math_expression": "x = 2 - 1  =>  x = 1" }
        ],
        "final_answer": "x = 1",
        "options": ["x = 2", "x = 0", "x = 1", "אין פתרון"],
        "correctAnswer": 2
    },
    {
        "id": 60,
        "subTopic": "משוואות עם שברים אלגבריים",
        "difficulty": "Medium",
        "question_text": "שאלת הבנה לסיכום: מדוע <strong>מותר</strong> לנו 'להעלים' את המכנה המשותף כאשר פותרים משוואה, אך <strong>אסור</strong> לנו לעשות זאת כשאנו מחברים שברים רגילים?",
        "hint": "חשבו על ההבדל בין מאזניים לבין תרגיל מתמטי רגיל. במשוואה יש שני צדדים שאפשר לעשות להם אותה פעולה.",
        "solution_steps": [
            { "verbal_explanation": "במשוואה, שני האגפים שווים זה לזה בדומה למאזניים. אם נכפיל את שני הצדדים באותו מספר (המכנה המשותף), הם יישארו מאוזנים ושווים.", "math_expression": "הכפלת שני אגפים" },
            { "verbal_explanation": "בביטוי מתמטי רגיל (חיבור שברים בלי סימן שווה באמצע), אין צד שני לאזן איתו. ולכן, אם נשמיט או נכפול את הביטוי במשהו, נשנה את הערך שלו לחלוטין, וזוהי טעות גסה.", "math_expression": "אסור לשנות ערך ביטוי" }
        ],
        "final_answer": "משוואה שומרת על איזון כשכופלים את שני אגפיה, ואילו בביטוי רגיל הכפלה משנה את ערכו לחלוטין.",
        "options": ["כי במשוואה תמיד יש אפס בצד אחד.", "זהו סתם כלל טכני שצריך לשנן ללא סיבה.", "משוואה שומרת על איזון כשכופלים את שני אגפיה, ואילו בביטוי רגיל הכפלה משנה את ערכו לחלוטין.", "מותר להעלים את המכנה גם בביטוי אלגברי."],
        "correctAnswer": 2
    }
];
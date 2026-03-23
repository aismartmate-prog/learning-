const questionsDB = [
    // ==========================================
    // תת נושא 1: זוויות צמודות (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות צמודות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"180\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"100\" y1=\"100\" x2=\"150\" y2=\"30\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 120 100 A 20 20 0 0 0 115 78\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2\"/><path d=\"M 80 100 A 20 20 0 0 1 115 78\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\"/><text x=\"130\" y=\"90\" font-family=\"Arial\" font-size=\"14\" fill=\"#f87171\">50°</text><text x=\"70\" y=\"80\" font-family=\"Arial\" font-size=\"14\" fill=\"#3b82f6\">?</text></svg></div><br>שתי זוויות מונחות על קו ישר אחד ולכן הן זוויות צמודות. גודלה של זווית אחת הוא 50 מעלות. מהו גודלה של הזווית השנייה הצמודה לה?&rlm;",
        "options": ["130", "150", "40", "140"],
        "correctAnswer": 0,
        "hint": "סכום של שתי זוויות צמודות על קו ישר הוא תמיד מאה ושמונים מעלות. חסרו את הזווית הידועה מהסכום הכולל.",
        "solution_steps": [
            { "verbal_explanation": "זוויות צמודות משלימות זו את זו לזווית שטוחה שגודלה קבוע.", "math_expression": "180" },
            { "verbal_explanation": "נחסר מתוך הסכום הכולל את גודל הזווית שכבר נתון לנו.", "math_expression": "180 - 50" },
            { "verbal_explanation": "נחשב את ההפרש כדי לגלות את הזווית החסרה.", "math_expression": "130" }
        ],
        "final_answer": "130"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות צמודות",
        "question_text": "זווית אחת שווה ל-110 מעלות. מהו הגודל של הזווית הצמודה לה?&rlm;",
        "options": ["70", "80", "90", "60"],
        "correctAnswer": 0,
        "hint": "השלימו את המספר מאה ועשר למאה ושמונים.",
        "solution_steps": [
            { "verbal_explanation": "הכלל קובע שחיבור של שתי זוויות צמודות נותן תמיד מאה ושמונים מעלות.", "math_expression": "180" },
            { "verbal_explanation": "נוריד מסכום זה את הזווית שאנו מכירים.", "math_expression": "180 - 110" },
            { "verbal_explanation": "תוצאת החיסור היא גודלה של הזווית הצמודה.", "math_expression": "70" }
        ],
        "final_answer": "70"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות צמודות",
        "question_text": "שתי זוויות צמודות שוות זו לזו בדיוק בגודלן. מהו הגודל של כל אחת מהן?&rlm;",
        "options": ["90", "45", "180", "60"],
        "correctAnswer": 0,
        "hint": "אם שתיהן יחד מרכיבות מאה ושמונים מעלות והן שוות, חלקו את הסכום בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "הסכום של שתי הזוויות יחד הוא זווית שטוחה שלמה.", "math_expression": "180" },
            { "verbal_explanation": "מכיוון ששתיהן שוות בדיוק, נחלק את הסכום לשני חלקים שווים.", "math_expression": "180 \\div 2" },
            { "verbal_explanation": "כל זווית כזו היא זווית ישרה בת תשעים מעלות.", "math_expression": "90" }
        ],
        "final_answer": "90"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות צמודות",
        "question_text": "זווית אחת קטנה וגודלה 15 מעלות בלבד. מה גודל הזווית הצמודה אליה על אותו הקו?&rlm;",
        "options": ["165", "175", "155", "75"],
        "correctAnswer": 0,
        "hint": "בצעו פעולת חיסור פשוטה של חמש עשרה מתוך מאה ושמונים.",
        "solution_steps": [
            { "verbal_explanation": "הסכום המלא של הקו הישר הוא מאה ושמונים.", "math_expression": "180" },
            { "verbal_explanation": "נחסר מהסכום את הזווית הקטנה שנתונה לנו.", "math_expression": "180 - 15" },
            { "verbal_explanation": "נקבל זווית קהה גדולה שמשלימה אותה.", "math_expression": "165" }
        ],
        "final_answer": "165"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות צמודות",
        "question_text": "האם ייתכן ששתי זוויות צמודות תהיינה שתיהן זוויות קהות (גדולות מ-90 מעלות)?&rlm;",
        "options": ["לא, כי סכומן יעבור את ה-180 מעלות", "כן, זה מצב רגיל", "כן, אם הקו אלכסוני", "לא, כי שתיהן חייבות להיות חדות"],
        "correctAnswer": 0,
        "hint": "נסו לחבר שני מספרים שכל אחד מהם גדול מ-90, וראו האם התוצאה יכולה להיות 180.",
        "solution_steps": [
            { "verbal_explanation": "סכום שתי הזוויות חייב להיות מוגבל בדיוק למאה ושמונים.", "math_expression": "180" },
            { "verbal_explanation": "אם ניקח למשל שתי זוויות שמעט גדולות מתשעים, הסכום שלהן יהיה גדול ממאה ושמונים.", "math_expression": "91 + 91 = 182" },
            { "verbal_explanation": "הגענו לסתירה לכלל הבסיסי, ולכן מצב כזה הוא בלתי אפשרי בגאומטריה.", "math_expression": "182 > 180" }
        ],
        "final_answer": "לא, כי סכומן יעבור את ה-180 מעלות"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות צמודות",
        "question_text": "הזווית הצמודה לזווית של 135 מעלות שווה ל-?&rlm;",
        "options": ["45", "55", "35", "180"],
        "correctAnswer": 0,
        "hint": "איזה מספר צריך להוסיף למאה שלושים וחמש כדי להגיע למאה ושמונים?",
        "solution_steps": [
            { "verbal_explanation": "סכום זוויות צמודות הוא קבוע וידוע.", "math_expression": "180" },
            { "verbal_explanation": "נבצע חיסור של הזווית הקהה שניתנה לנו.", "math_expression": "180 - 135" },
            { "verbal_explanation": "התוצאה היא הזווית החדה המשלימה.", "math_expression": "45" }
        ],
        "final_answer": "45"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות צמודות",
        "question_text": "זווית אחת גדולה פי 5 מהזווית הצמודה לה. מהו גודלה של הזווית הקטנה מבין השתיים?&rlm;",
        "options": ["30", "150", "36", "60"],
        "correctAnswer": 0,
        "hint": "אם זווית אחת שווה לחלק אחד והשנייה שווה לחמישה חלקים, יש בסך הכל שישה חלקים שווים המרכיבים את ה-180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "הזווית הקטנה היא חלק אחד. הזווית הגדולה מורכבת מחמישה חלקים כאלו. ביחד יש שישה חלקים.", "math_expression": "1 + 5 = 6" },
            { "verbal_explanation": "נחלק את הסכום הכולל בששת החלקים כדי למצוא כמה שווה חלק אחד בודד.", "math_expression": "180 \\div 6" },
            { "verbal_explanation": "נחשב את החילוק ונגלה שהחלק האחד (הזווית הקטנה) שווה לשלושים מעלות.", "math_expression": "30" },
            { "verbal_explanation": "לצורך בדיקה: הזווית הגדולה תהיה מאה וחמישים, וסכומן אכן מאה ושמונים.", "math_expression": "30 \\times 5 = 150" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות צמודות",
        "question_text": "גודל זווית אחת הוא 90 מעלות. מה ניתן לומר על הזווית הצמודה אליה?&rlm;",
        "options": ["היא גם זווית ישרה (90)", "היא זווית חדה", "היא זווית קהה", "היא שווה ל-0"],
        "correctAnswer": 0,
        "hint": "מאה ושמונים פחות תשעים.",
        "solution_steps": [
            { "verbal_explanation": "סכום הזוויות מונח על קו ישר אחד.", "math_expression": "180" },
            { "verbal_explanation": "נחסר מהסכום את זווית התשעים שניתנה.", "math_expression": "180 - 90" },
            { "verbal_explanation": "ההפרש הוא בדיוק תשעים, מה שאומר ששתי הזוויות ישרות.", "math_expression": "90" }
        ],
        "final_answer": "היא גם זווית ישרה (90)"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות צמודות",
        "question_text": "זווית אחת גדולה ב-20 מעלות מהזווית הצמודה אליה. מה גודל הזווית הקטנה?&rlm;",
        "options": ["80", "100", "70", "90"],
        "correctAnswer": 0,
        "hint": "אם שתיהן היו שוות הן היו בנות 90 כל אחת. מכיוון שאחת גדולה ב-20, נוריד מהסכום 20, נחלק לשתיים, ואז נוסיף לאחת מהן את ה-20.",
        "solution_steps": [
            { "verbal_explanation": "נחסר מהסכום הכולל את ההפרש כדי שנוכל לחלק את השארית לשני חלקים שווים.", "math_expression": "180 - 20 = 160" },
            { "verbal_explanation": "נחלק את מאה ושישים לשתיים. התוצאה תהיה הזווית הקטנה.", "math_expression": "160 \\div 2" },
            { "verbal_explanation": "הזווית הקטנה היא שמונים מעלות. הזווית השנייה תהיה מאה, וסכומן מאה ושמונים.", "math_expression": "80" }
        ],
        "final_answer": "80"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות צמודות",
        "question_text": "גודל זווית אחת הוא 123 מעלות. מה הגודל של הזווית הצמודה לה?&rlm;",
        "options": ["57", "67", "63", "53"],
        "correctAnswer": 0,
        "hint": "עשו חיסור במאונך של מאה עשרים ושלוש מתוך מאה ושמונים.",
        "solution_steps": [
            { "verbal_explanation": "הסכום המלא נשאר ללא שינוי.", "math_expression": "180" },
            { "verbal_explanation": "נבצע את פעולת החיסור כדי להשלים לקו הישר.", "math_expression": "180 - 123" },
            { "verbal_explanation": "נחשב ונגיע לתוצאה המדויקת.", "math_expression": "57" }
        ],
        "final_answer": "57"
    },

    // ==========================================
    // תת נושא 2: זוויות קודקודיות (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות קודקודיות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"30\" x2=\"160\" y2=\"120\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"120\" x2=\"160\" y2=\"30\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 115 65 A 25 25 0 0 0 85 65\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2\"/><path d=\"M 85 85 A 25 25 0 0 0 115 85\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\"/><text x=\"90\" y=\"55\" font-family=\"Arial\" font-size=\"14\" fill=\"#f87171\">110°</text><text x=\"95\" y=\"110\" font-family=\"Arial\" font-size=\"14\" fill=\"#3b82f6\">?</text></svg></div><br>שני קווים ישרים נחתכים ויוצרים צורת X. הזווית העליונה היא בת 110 מעלות. מהו הגודל של הזווית התחתונה המצוירת מולה (זווית קודקודית לה)?&rlm;",
        "options": ["110", "70", "180", "55"],
        "correctAnswer": 0,
        "hint": "זוויות קודקודיות הן זוויות שנמצאות אחת מול השנייה בצומת בין שני קווים. הכלל אומר שהן תמיד שוות זו לזו.",
        "solution_steps": [
            { "verbal_explanation": "נזהה שמדובר בשני קווים ישרים שחותכים זה את זה ויוצרים זוויות נגדיות.", "math_expression": "X" },
            { "verbal_explanation": "הכלל הגאומטרי קובע שזוויות קודקודיות הנמצאות אחת מול השנייה שוות זו לזו בדיוק.", "math_expression": "110 = 110" },
            { "verbal_explanation": "לכן, הזווית התחתונה שווה לזווית העליונה.", "math_expression": "110" }
        ],
        "final_answer": "110"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות קודקודיות",
        "question_text": "שני קווים נחתכים. זווית אחת היא בת 45 מעלות. מה גודלה של הזווית הקודקודית לה?&rlm;",
        "options": ["45", "135", "90", "180"],
        "correctAnswer": 0,
        "hint": "העתיקו את הכלל מהשאלה הקודמת: זוויות קודקודיות הן זהות לחלוטין.",
        "solution_steps": [
            { "verbal_explanation": "זוויות קודקודיות מונחות על קודקוד משותף בכיוונים הפוכים.", "math_expression": "\\text{Opposite}" },
            { "verbal_explanation": "הן משלימות את אותן זוויות צמודות, ולכן חייבות להיות שוות בגודלן.", "math_expression": "45 = 45" },
            { "verbal_explanation": "התשובה היא זהה לנתון המקורי.", "math_expression": "45" }
        ],
        "final_answer": "45"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות קודקודיות",
        "question_text": "סכום של שתי זוויות קודקודיות (שנמצאות אחת מול השנייה) הוא 100 מעלות. מהו הגודל של כל אחת מהן בנפרד?&rlm;",
        "options": ["50", "100", "80", "180"],
        "correctAnswer": 0,
        "hint": "אם שתיהן יחד מרכיבות 100 והן שוות זו לזו, פשוט חלקו את הסכום לשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נתון שסכום שתי הזוויות יחד הוא מאה.", "math_expression": "100" },
            { "verbal_explanation": "מכיוון שהן זוויות קודקודיות, אנו יודעים בוודאות שהן שוות זו לזו. נחלק את הסכום לשניים.", "math_expression": "100 \\div 2" },
            { "verbal_explanation": "כל זווית כזו שווה לחמישים מעלות.", "math_expression": "50" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות קודקודיות",
        "question_text": "שני ישרים נחתכים. זווית אחת שווה ל-60 מעלות. מהו הגודל של הזווית שנמצאת צמוד אליה (לא מולה)?&rlm;",
        "options": ["120", "60", "30", "90"],
        "correctAnswer": 0,
        "hint": "שימו לב: לא שאלו על הזווית שמולה (הקודקודית), אלא על הזווית שצמודה לה על אותו הקו. סכומן הוא 180.",
        "solution_steps": [
            { "verbal_explanation": "הזווית שמבקשים לא נמצאת מול הזווית הידועה, אלא חולקת איתה קו ישר אחד, כלומר היא זווית צמודה.", "math_expression": "\\text{Adjacent}" },
            { "verbal_explanation": "סכום זוויות צמודות הוא מאה ושמונים מעלות.", "math_expression": "180" },
            { "verbal_explanation": "נחסר את הזווית הידועה מהסכום הכולל.", "math_expression": "180 - 60" },
            { "verbal_explanation": "הזווית הצמודה היא בת מאה ועשרים מעלות.", "math_expression": "120" }
        ],
        "final_answer": "120"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות קודקודיות",
        "question_text": "שני ישרים נחתכים. סכום של שתי זוויות קודקודיות הוא 260 מעלות. מה גודלה של כל אחת משתי הזוויות האחרות בצומת (אלה שגם הן קודקודיות זו לזו)?&rlm;",
        "options": ["50", "130", "100", "80"],
        "correctAnswer": 0,
        "hint": "מצאו קודם את הגודל של אחת הזוויות הקהות (260 חלקי 2). לאחר מכן, מצאו את הזווית הצמודה אליה.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הגודל של זווית אחת מתוך הזוג הנתון על ידי חלוקה בשתיים.", "math_expression": "260 \\div 2 = 130" },
            { "verbal_explanation": "הזווית שמבקשים למצוא נמצאת צמוד לזווית של מאה ושלושים מעלות על אותו קו ישר. לכן נחסר ממאה ושמונים.", "math_expression": "180 - 130" },
            { "verbal_explanation": "זווית זו תהיה שווה לחמישים מעלות (וגם הזווית שמולה תהיה חמישים).", "math_expression": "50" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות קודקודיות",
        "question_text": "שני קווים ישרים נחתכים ויוצרים 4 זוויות סביב נקודת האמצע. סכום של 3 מתוך 4 הזוויות הללו הוא 300 מעלות. מה גודלה של הזווית הרביעית?&rlm;",
        "options": ["60", "30", "120", "100"],
        "correctAnswer": 0,
        "hint": "כל ארבע הזוויות יחד יוצרות מעגל שלם סביב הנקודה.",
        "solution_steps": [
            { "verbal_explanation": "סיבוב שלם סביב נקודה מכיל תמיד שלוש מאות ושישים מעלות בדיוק.", "math_expression": "360" },
            { "verbal_explanation": "ידוע לנו שהסכום של שלוש מתוך הזוויות הוא שלוש מאות.", "math_expression": "300" },
            { "verbal_explanation": "נחסר את הסכום החלקי מהסכום המלא של הסיבוב השלם כדי לגלות מה חסר.", "math_expression": "360 - 300" },
            { "verbal_explanation": "הזווית שנותרה היא בת שישים מעלות.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות קודקודיות",
        "question_text": "שני קווים ישרים נחתכים כך שזווית אחת בצומת היא זווית ישרה (90 מעלות). מה ניתן לומר על כל שאר שלוש הזוויות בצומת?&rlm;",
        "options": ["כולן שוות ל-90 מעלות", "רק הקודקודית לה שווה 90", "שתיים מהן 45 מעלות", "הן חדות"],
        "correctAnswer": 0,
        "hint": "אם אחת שווה לתשעים, הקודקודית לה שווה לתשעים. והצמודה אליה היא מאה ושמונים פחות תשעים.",
        "solution_steps": [
            { "verbal_explanation": "הזווית מול הזווית הישרה (הקודקודית לה) שווה לה ולכן גם היא תשעים.", "math_expression": "90" },
            { "verbal_explanation": "הזווית הצמודה לה משלימה למאה ושמונים.", "math_expression": "180 - 90 = 90" },
            { "verbal_explanation": "יוצא שכל ארבע הזוויות סביב נקודת המפגש הזו הן זוויות ישרות של תשעים מעלות.", "math_expression": "90" }
        ],
        "final_answer": "כולן שוות ל-90 מעלות"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות קודקודיות",
        "question_text": "זווית קודקודית אחת גדולה מזווית קודקודית שנייה ב-20 מעלות. האם המשפט הזה אפשרי?&rlm;",
        "options": ["לא, כי הן תמיד שוות", "כן, אם הקו לא לגמרי ישר", "כן, זה תמיד ככה", "לא, כי סכומן חייב להיות 180"],
        "correctAnswer": 0,
        "hint": "חזרו על הגדרת הזווית הקודקודית.",
        "solution_steps": [
            { "verbal_explanation": "החוק החשוב ביותר של זוויות קודקודיות שנוצרות מחיתוך של שני קווים ישרים הוא שהן שוות בדיוק זו לזו תמיד.", "math_expression": "=" },
            { "verbal_explanation": "לכן, לא ייתכן שקיים הפרש של עשרים מעלות ביניהן.", "math_expression": "20 \\neq 0" },
            { "verbal_explanation": "המשפט בשאלה שגוי לחלוטין גאומטרית.", "math_expression": "0" }
        ],
        "final_answer": "לא, כי הן תמיד שוות"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות קודקודיות",
        "question_text": "בצומת של שני ישרים נחתכים, סכום של שתי זוויות צמודות הוא 180 מעלות. מהו סכום שתי הזוויות הצמודות האחרות שנמצאות בצד השני של הצומת?&rlm;",
        "options": ["180 מעלות", "360 מעלות", "90 מעלות", "אי אפשר לדעת"],
        "correctAnswer": 0,
        "hint": "קו ישר תמיד מכיל עליו מאה ושמונים מעלות, מכל צד שתסתכלו עליו.",
        "solution_steps": [
            { "verbal_explanation": "שני קווים ישרים יוצרים מעגל שלם סביב נקודת המפגש בסך של שלוש מאות ושישים מעלות.", "math_expression": "360" },
            { "verbal_explanation": "אם חצי מהמעגל (שתי זוויות צמודות) שווה למאה ושמונים, נחסר זאת מהשלם.", "math_expression": "360 - 180" },
            { "verbal_explanation": "החצי השני חייב להיות גם הוא שווה למאה ושמונים בדיוק.", "math_expression": "180" }
        ],
        "final_answer": "180 מעלות"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות קודקודיות",
        "question_text": "אם נחסר זווית אחת מתוך הזווית הקודקודית שלה, מה תהיה התוצאה תמיד?&rlm;",
        "options": ["0", "180", "90", "תלוי בגודל הזווית"],
        "correctAnswer": 0,
        "hint": "חיסור של שני מספרים שווים לחלוטין.",
        "solution_steps": [
            { "verbal_explanation": "שתי זוויות קודקודיות זהות במידתן לחלוטין.", "math_expression": "1 = 1" },
            { "verbal_explanation": "כאשר אנו לוקחים מספר ומחסרים ממנו את עצמו, לא נשאר כלום.", "math_expression": "1 - 1 = 0" },
            { "verbal_explanation": "התוצאה של החיסור תהיה תמיד אפס מעלות.", "math_expression": "0" }
        ],
        "final_answer": "0"
    },

    // ==========================================
    // תת נושא 3: זוויות בין מקבילים (10 שאלות)
    // ==========================================
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות בין מקבילים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"50\" x2=\"180\" y2=\"50\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"110\" x2=\"180\" y2=\"110\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"60\" y1=\"20\" x2=\"140\" y2=\"140\" stroke=\"#f87171\" stroke-width=\"2\"/><path d=\"M 85 50 A 15 15 0 0 0 75 60\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\"/><path d=\"M 125 110 A 15 15 0 0 0 115 120\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\"/><text x=\"55\" y=\"45\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">130°</text><text x=\"130\" y=\"135\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">?</text></svg></div><br>שני קווים מקבילים נחתכים על ידי קו ישר שלישי (חותך). נוצרת זווית קהה בגודל 130 מעלות. מהו הגודל של הזווית המתחלפת הפנימית לה (זו שבצד השני של החותך ובין המקבילים)?&rlm;",
        "options": ["130", "50", "260", "180"],
        "correctAnswer": 0,
        "hint": "זוויות מתחלפות בין ישרים מקבילים שוות תמיד זו לזו. חשבו על צורת האות Z.",
        "solution_steps": [
            { "verbal_explanation": "נזהה שמדובר בקווים מקבילים שנחצים, ולכן חלים כללי הזוויות המיוחדות.", "math_expression": "\\parallel" },
            { "verbal_explanation": "הכלל קובע שזוויות מתחלפות שוות זו לזו בדיוק. ניתן לזהות אותן בפינות של צורת זיג-זג (Z).", "math_expression": "130 = 130" },
            { "verbal_explanation": "הזווית המבוקשת שווה לזווית הנתונה.", "math_expression": "130" }
        ],
        "final_answer": "130"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות בין מקבילים",
        "question_text": "בין שני קווים מקבילים יש קו חותך. זווית אחת שווה ל-70 מעלות. מה גודלה של הזווית המתאימה לה (זו שנמצאת באותו מיקום ביחס לקו השני)?&rlm;",
        "options": ["70", "110", "140", "180"],
        "correctAnswer": 0,
        "hint": "זוויות מתאימות, הנמצאות באותו צד של החותך ובאותו צד של המקבילים, הן שוות.",
        "solution_steps": [
            { "verbal_explanation": "זוויות מתאימות יושבות בדיוק באותה פינה בשני הצמתים השונים שיוצר הקו החותך עם המקבילים.", "math_expression": "\\text{Corresponding}" },
            { "verbal_explanation": "כלל גאומטרי קובע שבין מקבילים, זוויות מתאימות שוות זו לזו.", "math_expression": "70 = 70" },
            { "verbal_explanation": "התשובה תהיה זהה לנתון.", "math_expression": "70" }
        ],
        "final_answer": "70"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות בין מקבילים",
        "question_text": "שני קווים מקבילים נחתכים. זווית פנימית אחת שווה ל-100 מעלות. מה גודלה של הזווית החד-צדדית (פנימית באותו צד של החותך) שמעליה או מתחתיה?&rlm;",
        "options": ["80", "100", "260", "90"],
        "correctAnswer": 0,
        "hint": "סכום של שתי זוויות חד-צדדיות פנימיות בין ישרים מקבילים הוא תמיד 180 מעלות (הן משלימות זו את זו כמו צורת ח).",
        "solution_steps": [
            { "verbal_explanation": "זוויות פנימיות שנמצאות באותו צד של הקו החותך משלימות יחד למאה ושמונים מעלות.", "math_expression": "180" },
            { "verbal_explanation": "נחסר מהסכום הכולל את הזווית שכבר יש לנו.", "math_expression": "180 - 100" },
            { "verbal_explanation": "נחשב ונקבל את הזווית השנייה שמשלימה אותה.", "math_expression": "80" }
        ],
        "final_answer": "80"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות בין מקבילים",
        "question_text": "זווית חיצונית מתחלפת (נמצאת בצד השני של החותך ומחוץ למקבילים) לזווית של 65 מעלות. מהו הגודל של הזווית המתחלפת החיצונית הזו?&rlm;",
        "options": ["65", "115", "180", "25"],
        "correctAnswer": 0,
        "hint": "כמו זוויות מתחלפות פנימיות, גם זוויות מתחלפות חיצוניות שוות זו לזו.",
        "solution_steps": [
            { "verbal_explanation": "התכונה של שוויון בין זוויות מתחלפות חלה גם על הזוויות שנמצאות בחלק החיצוני של הקווים המקבילים.", "math_expression": "\\text{Alternate Exterior}" },
            { "verbal_explanation": "לכן, גם הן שוות זו לזו במידתן ללא שום חישוב נוסף.", "math_expression": "65 = 65" },
            { "verbal_explanation": "התשובה נשארת כפי שהייתה.", "math_expression": "65" }
        ],
        "final_answer": "65"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות בין מקבילים",
        "question_text": "זווית אחת בין מקבילים היא 120 מעלות. מה גודל הזווית החד-צדדית לה?&rlm;",
        "options": ["60", "120", "180", "90"],
        "correctAnswer": 0,
        "hint": "חברו שני מספרים שייתנו יחד מאה ושמונים.",
        "solution_steps": [
            { "verbal_explanation": "זכרו שהמילה 'חד-צדדיות' מרמזת על השלמה למאה ושמונים, בניגוד ל'מתחלפות' או 'מתאימות' שהן שוות.", "math_expression": "180" },
            { "verbal_explanation": "נחסר את הזווית הקהה שנתונה מהסכום השלם.", "math_expression": "180 - 120" },
            { "verbal_explanation": "נקבל זווית חדה שמשלימה אותה בצד הפנימי.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות בין מקבילים",
        "question_text": "אם זווית מתאימה לזווית אחרת, והשנייה שווה ל-45 מעלות. כמה שווה הראשונה?&rlm;",
        "options": ["45", "135", "90", "180"],
        "correctAnswer": 0,
        "hint": "מתאימות תמיד שוות ביניהן.",
        "solution_steps": [
            { "verbal_explanation": "זוויות מתאימות בין ישרים מקבילים זהות תמיד.", "math_expression": "45 = 45" },
            { "verbal_explanation": "נעתיק את המספר הנתון ישירות לפתרון.", "math_expression": "45" }
        ],
        "final_answer": "45"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות בין מקבילים",
        "question_text": "בין ישרים מקבילים, יש זווית קהה בגודל 135 מעלות. כמה תהיה שווה הזווית שמתחלפת איתה?&rlm;",
        "options": ["135", "45", "180", "90"],
        "correctAnswer": 0,
        "hint": "מתחלפות שוות.",
        "solution_steps": [
            { "verbal_explanation": "זוויות מתחלפות (בצורת זיג-זג) שומרות על השוויון ביניהן בתוך המערכת המקבילה.", "math_expression": "135 = 135" },
            { "verbal_explanation": "המספר נשאר זהה.", "math_expression": "135" }
        ],
        "final_answer": "135"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות בין מקבילים",
        "question_text": "שתי זוויות חד-צדדיות פנימיות. האחת שווה ל-90 מעלות. למה שווה השנייה?&rlm;",
        "options": ["90", "180", "45", "0"],
        "correctAnswer": 0,
        "hint": "מה צריך להוסיף לתשעים כדי להגיע למאה ושמונים?",
        "solution_steps": [
            { "verbal_explanation": "חד-צדדיות משלימות זו את זו לסכום קבוע.", "math_expression": "180" },
            { "verbal_explanation": "נחסר את זווית התשעים שקיימת כבר.", "math_expression": "180 - 90" },
            { "verbal_explanation": "הזווית השנייה היא גם זווית ישרה של תשעים מעלות. (זה קורה כשהחותך מאונך למקבילים).", "math_expression": "90" }
        ],
        "final_answer": "90"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות בין מקבילים",
        "question_text": "נתונה זווית בגודל 45 מעלות. מה תהיה הזווית המתאימה לה בחיתוך המקבילים התחתון?&rlm;",
        "options": ["45", "135", "90", "180"],
        "correctAnswer": 0,
        "hint": "מתאימה - שווה.",
        "solution_steps": [
            { "verbal_explanation": "הכלל של זוויות מתאימות מציין שוויון פשוט.", "math_expression": "45 = 45" },
            { "verbal_explanation": "הערך הוא ארבעים וחמש.", "math_expression": "45" }
        ],
        "final_answer": "45"
    },
    {
        "topic": "geometry_angles_grade_7",
        "subTopic": "זוויות בין מקבילים",
        "question_text": "ישנן שתי זוויות חד-צדדיות. אחת מהן בגודל 65 מעלות. מצאו את הזווית השנייה.&rlm;",
        "options": ["115", "65", "25", "180"],
        "correctAnswer": 0,
        "hint": "השלימו למאה ושמונים.",
        "solution_steps": [
            { "verbal_explanation": "הסכום הדרוש לזוויות חד-צדדיות במערכת זו הוא מאה ושמונים.", "math_expression": "180" },
            { "verbal_explanation": "נחסר שישים וחמש מתוך הסכום השלם במאונך.", "math_expression": "180 - 65" },
            { "verbal_explanation": "נחשב את ההפרש לקבלת הזווית השנייה.", "math_expression": "115" }
        ],
        "final_answer": "115"
    }
];
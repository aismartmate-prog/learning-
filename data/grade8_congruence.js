const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: משפט חפיפה צ.ז.צ (Side-Angle-Side) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "Low",
        "question_text": "נתונים שני משולשים ABC ו-DEF. ידוע כי: <strong>AB = DE</strong>, <strong>זווית B = זווית E</strong>, וכן <strong>BC = EF</strong>. האם המשולשים חופפים? ואם כן, לפי איזה משפט?",
        "hint": "בדקו האם הזווית הנתונה נמצאת בדיוק בין שתי הצלעות השוות.",
        "solution_steps": [
            { "verbal_explanation": "נתון בשאלה (צלע)", "math_expression": "AB = DE" },
            { "verbal_explanation": "נתון בשאלה (זווית)", "math_expression": "\\angle B = \\angle E" },
            { "verbal_explanation": "נתון בשאלה (צלע)", "math_expression": "BC = EF" },
            { "verbal_explanation": "לפי משפט חפיפה צלע-זווית-צלע (צ.ז.צ)", "math_expression": "\\Delta ABC \\cong \\Delta DEF" }
        ],
        "final_answer": "חופפים לפי צ.ז.צ",
        "options": ["חופפים לפי צ.צ.צ", "חופפים לפי צ.ז.צ", "חופפים לפי ז.צ.ז", "לא ניתן לקבוע חפיפה"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "Medium",
        "question_text": "במלבן ABCD, הנקודה O היא נקודת מפגש האלכסונים. ידוע כי <strong>AO = BO</strong> וכי <strong>זווית AOB = 60°</strong>. הוכח כי <strong>\\Delta AOB \\cong \\Delta COD</strong>. מהו הנימוק לשוויון הזוויות במרכז?",
        "hint": "אלכסונים במלבן חוצים זה את זה ושווים זה לזה. איזה סוג זוויות נוצרות בנקודת המפגש?",
        "solution_steps": [
            { "verbal_explanation": "אלכסונים במלבן שווים וחוצים זה את זה", "math_expression": "AO = CO , BO = DO" },
            { "verbal_explanation": "זוויות קודקודיות שוות זו לזו", "math_expression": "\\angle AOB = \\angle COD" },
            { "verbal_explanation": "לפי משפט חפיפה צ.ז.צ", "math_expression": "\\Delta AOB \\cong \\Delta COD" }
        ],
        "final_answer": "זוויות קודקודיות",
        "options": ["זוויות מתחלפות", "זוויות קודקודיות", "נתון", "זוויות צמודות"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "Medium",
        "question_text": "נתון משולש ABC שבו AD הוא <strong>חוצה זווית A</strong> וגם <strong>AB = AC</strong>. האם המשולשים ABD ו-ACD חופפים?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100'><polygon points='60,10 10,90 110,90' fill='#f1f5f9' stroke='#1e293b' stroke-width='2'/><line x1='60' y1='10' x2='60' y2='90' stroke='#b09151' stroke-width='2'/></svg></div>",
        "hint": "אל תשכחו את הצלע המשותפת AD שנמצאת בשני המשולשים.",
        "solution_steps": [
            { "verbal_explanation": "נתון בשאלה (צלע)", "math_expression": "AB = AC" },
            { "verbal_explanation": "הגדרת חוצה זווית (זווית)", "math_expression": "\\angle BAD = \\angle CAD" },
            { "verbal_explanation": "צלע משותפת לשני המשולשים (צלע)", "math_expression": "AD = AD" },
            { "verbal_explanation": "לפי משפט חפיפה צ.ז.צ", "math_expression": "\\Delta ABD \\cong \\Delta ACD" }
        ],
        "final_answer": "כן, לפי צ.ז.צ",
        "options": ["כן, לפי צ.ז.צ", "כן, לפי ז.צ.ז", "לא, חסר נתון על BD", "לא, חסר נתון על זווית D"],
        "correctAnswer": 0
    },
    {
        "id": 4,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "Low",
        "question_text": "במשפט חפיפה צ.ז.צ, מהי המשמעות של סדר האותיות (צלע, זווית, צלע)?",
        "hint": "נסו לדמיין מה קורה אם הזווית לא נמצאת 'בתוך' שתי הצלעות.",
        "solution_steps": [
            { "verbal_explanation": "הצלע הראשונה", "math_expression": "צ" },
            { "verbal_explanation": "הזווית שכלואה (נמצאת בין) שתי הצלעות", "math_expression": "ז" },
            { "verbal_explanation": "הצלע השנייה", "math_expression": "צ" },
            { "verbal_explanation": "לכן החפיפה תקפה רק אם הזווית ביניהן", "math_expression": "הזווית הכלואה" }
        ],
        "final_answer": "הזווית חייבת להיות כלואה בין שתי הצלעות.",
        "options": ["הזווית יכולה להיות בכל מקום.", "הזווית חייבת להיות כלואה בין שתי הצלעות.", "הזווית חייבת להיות זווית ישרה.", "הסדר לא משנה באלגברה."],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "High",
        "question_text": "נתון מרובע ABCD שבו האלכסונים AC ו-BD <strong>חוצים זה את זה</strong> בנקודה O. הוכח כי המשולשים AOB ו-COD חופפים. מהי הטענה לגבי הצלעות?",
        "hint": "השתמשו בהגדרה של 'חוצים זה את זה'.",
        "solution_steps": [
            { "verbal_explanation": "הגדרה של קטעים החוצים זה את זה (אלכסון אחד)", "math_expression": "AO = CO" },
            { "verbal_explanation": "זוויות קודקודיות שוות", "math_expression": "\\angle AOB = \\angle COD" },
            { "verbal_explanation": "הגדרה של קטעים החוצים זה את זה (אלכסון שני)", "math_expression": "BO = DO" },
            { "verbal_explanation": "לפי משפט חפיפה צ.ז.צ", "math_expression": "\\Delta AOB \\cong \\Delta COD" }
        ],
        "final_answer": "AO=CO ו-BO=DO",
        "options": ["AB = CD", "AO = BO", "AO = CO ו-BO = DO", "BC = AD"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "Medium",
        "question_text": "נתונים שני משולשים שווי שוקיים. בשניהם השוק היא <strong>5 ס\"מ</strong> וזווית הראש היא <strong>40°</strong>. האם המשולשים חופפים?",
        "hint": "במשולש שווה שוקיים יש שתי שוקיים שוות. האם יש לנו צלע-זווית-צלע?",
        "solution_steps": [
            { "verbal_explanation": "שוק ראשונה שווה בשני המשולשים", "math_expression": "5 = 5" },
            { "verbal_explanation": "נתון שזווית הראש (בין השוקיים) שווה", "math_expression": "40^\\circ = 40^\\circ" },
            { "verbal_explanation": "שוק שנייה שווה (כי המשולשים שווי שוקיים)", "math_expression": "5 = 5" },
            { "verbal_explanation": "מתקיים משפט חפיפה צ.ז.צ", "math_expression": "\\text{חופפים}" }
        ],
        "final_answer": "כן, לפי צ.ז.צ",
        "options": ["כן", "לא", "רק אם הבסיס שווה", "לא ניתן לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 7,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "High",
        "question_text": "נתון קטע AB המאונך לקטע CD בנקודת האמצע שלו O. הוכח כי <strong>\\Delta COA \\cong \\Delta COB</strong>.",
        "hint": "מה זה אומר שקטע מאונך לאחר בנקודת האמצע? זה נותן לנו גם זווית וגם שוויון צלעות.",
        "solution_steps": [
            { "verbal_explanation": "הגדרה של נקודת אמצע על AB", "math_expression": "AO = BO" },
            { "verbal_explanation": "הגדרה של קטעים מאונכים (90 מעלות)", "math_expression": "\\angle COA = \\angle COB = 90^\\circ" },
            { "verbal_explanation": "צלע משותפת לשני המשולשים", "math_expression": "CO = CO" },
            { "verbal_explanation": "לפי משפט חפיפה צ.ז.צ", "math_expression": "\\Delta COA \\cong \\Delta COB" }
        ],
        "final_answer": "חופפים לפי צ.ז.צ",
        "options": ["לפי צ.צ.צ", "לפי ז.צ.ז", "לפי צ.ז.צ", "הם לא חופפים"],
        "correctAnswer": 2
    },
    {
        "id": 8,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "Medium",
        "question_text": "האם שני משולשים ישרי זווית בעלי <strong>ניצבים שווים</strong> חופפים תמיד?",
        "hint": "ניצבים הם הצלעות שביניהן נמצאת הזווית הישרה (90 מעלות).",
        "solution_steps": [
            { "verbal_explanation": "ניצב ראשון (צלע)", "math_expression": "a1 = a2" },
            { "verbal_explanation": "זווית ישרה בשניהם (זווית)", "math_expression": "90^\\circ = 90^\\circ" },
            { "verbal_explanation": "ניצב שני (צלע)", "math_expression": "b1 = b2" },
            { "verbal_explanation": "הזווית כלואה בין הניצבים, לכן חופפים לפי צ.ז.צ", "math_expression": "\\text{חפיפה}" }
        ],
        "final_answer": "כן, לפי צ.ז.צ",
        "options": ["כן, לפי צ.ז.צ", "לא, היתר חייב להיות שווה", "רק אם הם שווי שוקיים", "כן, לפי צ.צ.צ"],
        "correctAnswer": 0
    },
    {
        "id": 9,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "Low",
        "question_text": "במשולשים חופפים, מה ניתן להגיד על <strong>השטחים</strong> שלהם?",
        "hint": "חפיפה פירושה שהמשולשים זהים לחלוטין (אחד יכול להתכסות בדיוק על ידי השני).",
        "solution_steps": [
            { "verbal_explanation": "הגדרה: משולשים חופפים הם בעלי צלעות וזוויות שוות בהתאמה", "math_expression": "\\Delta 1 \\cong \\Delta 2" },
            { "verbal_explanation": "מכיוון שהם זהים בצורתם ובגודלם", "math_expression": "Area1 = Area2" },
            { "verbal_explanation": "מכאן נובע ששטחיהם שווים תמיד", "math_expression": "\\text{שטחים שווים}" }
        ],
        "final_answer": "שטחיהם שווים תמיד.",
        "options": ["שטחיהם שונים.", "שטחיהם שווים תמיד.", "רק אם הם ישרי זווית.", "אי אפשר לדעת."],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "Medium",
        "question_text": "נתון משולש ABC. הארכנו את הצלע AB כאורכה לנקודה D, ואת הצלע AC כאורכה לנקודה E. האם <strong>\\Delta ABC \\cong \\Delta ADE</strong>?",
        "hint": "השתמשו בזוויות קודקודיות הנוצרות בנקודה A.",
        "solution_steps": [
            { "verbal_explanation": "נתון (הארכה כאורכה)", "math_expression": "AB = AD" },
            { "verbal_explanation": "זוויות קודקודיות שוות", "math_expression": "\\angle BAC = \\angle DAE" },
            { "verbal_explanation": "נתון (הארכה כאורכה)", "math_expression": "AC = AE" },
            { "verbal_explanation": "לפי משפט חפיפה צ.ז.צ", "math_expression": "\\Delta ABC \\cong \\Delta ADE" }
        ],
        "final_answer": "כן, לפי צ.ז.צ",
        "options": ["כן", "לא", "רק אם המשולש שווה צלעות", "אין מספיק נתונים"],
        "correctAnswer": 0
    },
    {
        "id": 11,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "High",
        "question_text": "במשולש שווה צלעות ABC, נקודות D, E ו-F הן <strong>אמצעי הצלעות</strong>. האם המשולשים הקטנים שנוצרים חופפים?",
        "hint": "במשולש שווה צלעות כל הצלעות שוות (למשל 10) וכל הזוויות הן 60 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "חצאי צלעות שוות במשולש שווה צלעות", "math_expression": "AD = AF = BE = BD = CF = CE" },
            { "verbal_explanation": "זוויות המשולש כולן שוות ל-60", "math_expression": "\\angle A = \\angle B = \\angle C = 60^\\circ" },
            { "verbal_explanation": "בכל משולש קטן יש שתי צלעות וזווית כלואה ביניהן", "math_expression": "\\text{צ.ז.צ}" },
            { "verbal_explanation": "לכן המשולשים בפינות חופפים", "math_expression": "\\text{חפיפה}" }
        ],
        "final_answer": "כן, לפי צ.ז.צ",
        "options": ["כן", "לא", "רק אם המשולש ישר זווית", "אין מספיק נתונים"],
        "correctAnswer": 0
    },
    {
        "id": 12,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "Medium",
        "question_text": "ידוע כי $AB=DE$, $\\angle A = \\angle D$ ו-$AC=DF$. מה נובע מהחפיפה לגבי הצלעות BC ו-EF?",
        "hint": "במשולשים חופפים, לכל זוג חלקים שווים בהתאמה יש 'חלקים מתאימים שווים' (צמ\"ש).",
        "solution_steps": [
            { "verbal_explanation": "הוכחת חפיפה (נתון)", "math_expression": "\\Delta ABC \\cong \\Delta DEF" },
            { "verbal_explanation": "לפי משפט חפיפה", "math_expression": "\\text{צ.ז.צ}" },
            { "verbal_explanation": "במשולשים חופפים צלעות מתאימות שוות זו לזו", "math_expression": "BC = EF" }
        ],
        "final_answer": "הן שוות (BC = EF)",
        "options": ["BC > EF", "BC < EF", "BC = EF", "אין קשר ביניהן"],
        "correctAnswer": 2
    },
    {
        "id": 13,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "High",
        "question_text": "בתוך מלבן ABCD העבירו קטע EF שעובר דרך נקודת מרכז המלבן O. הוכח כי <strong>\\Delta AOE \\cong \\Delta COF</strong>.",
        "hint": "אלכסונים חוצים זה את זה, ויש זוויות מתחלפות בין ישרים מקבילים (צלעות המלבן).",
        "solution_steps": [
            { "verbal_explanation": "אלכסוני המלבן חוצים זה את זה", "math_expression": "AO = CO" },
            { "verbal_explanation": "זוויות קודקודיות שוות", "math_expression": "\\angle AOE = \\angle COF" },
            { "verbal_explanation": "זוויות מתחלפות בין ישרים מקבילים (AB||CD)", "math_expression": "\\angle EAO = \\angle FCO" },
            { "verbal_explanation": "ניתן להשתמש גם במשפט ז.צ.ז וגם ב-צ.ז.צ בהתאם לנתוני המשנה", "math_expression": "\\text{חפיפה}" }
        ],
        "final_answer": "כן, המשולשים חופפים",
        "options": ["כן", "לא", "רק אם המלבן הוא ריבוע", "אין מספיק נתונים"],
        "correctAnswer": 0
    },
    {
        "id": 14,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "Medium",
        "question_text": "נתון משולש ABC. על הצלעות AB ו-AC בנו משולשים שווי צלעות חיצוניים (ABD ו-ACE). הוכח כי <strong>AD=AB</strong> ו-<strong>AE=AC</strong>. האם \\Delta ABC ו-\\Delta ADE חופפים תמיד?",
        "hint": "חשבו על הזווית שבין הצלעות. האם היא שווה?",
        "solution_steps": [
            { "verbal_explanation": "צלעות משולשים שווי צלעות", "math_expression": "AD = AB , AE = AC" },
            { "verbal_explanation": "זווית הראש של משולש שווה צלעות היא 60", "math_expression": "60^\\circ" },
            { "verbal_explanation": "זווית DAE וזווית BAC אינן בהכרח שוות", "math_expression": "\\angle DAE \\neq \\angle BAC" },
            { "verbal_explanation": "לכן לא ניתן להוכיח חפיפה ללא נתון נוסף על הזוויות", "math_expression": "\\text{אין חפיפה}" }
        ],
        "final_answer": "לא בהכרח",
        "options": ["כן", "לא בהכרח", "רק אם הזווית A היא 60", "תמיד חופפים"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "משפט חפיפה צ.ז.צ",
        "difficulty": "Low",
        "question_text": "איזה מהנתונים הבאים <strong>מספיק</strong> כדי להוכיח חפיפה לפי צ.ז.צ?",
        "hint": "חפשו שתי צלעות וזווית אחת ביניהן.",
        "solution_steps": [
            { "verbal_explanation": "המשפט דורש שתי צלעות שוות", "math_expression": "\\text{צ , צ}" },
            { "verbal_explanation": "ודורש זווית שווה אחת ביניהן", "math_expression": "\\text{ז}" },
            { "verbal_explanation": "השילוב המתאים הוא שתי צלעות והזווית הכלואה", "math_expression": "\\text{צ.ז.צ}" }
        ],
        "final_answer": "שתי צלעות והזווית הכלואה ביניהן.",
        "options": ["שלוש צלעות שוות.", "שתי זוויות והצלע ביניהן.", "שתי צלעות והזווית הכלואה ביניהן.", "שלוש זוויות שוות."],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 2: משפט חפיפה ז.צ.ז (Angle-Side-Angle) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "Low",
        "question_text": "נתון כי $\\angle A = \\angle D$, <strong>AB = DE</strong>, וכן $\\angle B = \\angle E$. לפי איזה משפט חופפים המשולשים?",
        "hint": "בדקו האם הצלע נמצאת 'בין' שתי הזוויות השוות.",
        "solution_steps": [
            { "verbal_explanation": "נתון (זווית)", "math_expression": "\\angle A = \\angle D" },
            { "verbal_explanation": "נתון (צלע שמונחת בין הזוויות)", "math_expression": "AB = DE" },
            { "verbal_explanation": "נתון (זווית)", "math_expression": "\\angle B = \\angle E" },
            { "verbal_explanation": "לפי משפט חפיפה זווית-צלע-זווית (ז.צ.ז)", "math_expression": "\\Delta ABC \\cong \\Delta DEF" }
        ],
        "final_answer": "משפט ז.צ.ז",
        "options": ["צ.ז.צ", "צ.צ.צ", "ז.צ.ז", "לא חופפים"],
        "correctAnswer": 2
    },
    {
        "id": 17,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "Medium",
        "question_text": "במלבן ABCD, האלכסון AC מחלק את המלבן לשני משולשים. הוכח כי <strong>\\Delta ABC \\cong \\Delta CDA</strong>. מה הנימוק לשוויון הזוויות המתחלפות?",
        "hint": "צלעות נגדיות במלבן הן מקבילות. זוויות מתחלפות בין מקבילים הן שוות.",
        "solution_steps": [
            { "verbal_explanation": "זוויות מתחלפות שוות בין ישרים מקבילים (AB||CD)", "math_expression": "\\angle BAC = \\angle DCA" },
            { "verbal_explanation": "צלע משותפת לשני המשולשים", "math_expression": "AC = AC" },
            { "verbal_explanation": "זוויות מתחלפות שוות בין ישרים מקבילים (BC||AD)", "math_expression": "\\angle BCA = \\angle DAC" },
            { "verbal_explanation": "לפי משפט חפיפה ז.צ.ז", "math_expression": "\\Delta ABC \\cong \\Delta CDA" }
        ],
        "final_answer": "זוויות מתחלפות בין מקבילים",
        "options": ["נתון", "זוויות קודקודיות", "זוויות מתחלפות בין מקבילים", "זוויות צמודות"],
        "correctAnswer": 2
    },
    {
        "id": 18,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "High",
        "question_text": "נתון קטע AB הנחתך על ידי קטע CD בנקודה O. ידוע כי O היא <strong>אמצע הקטע CD</strong>, וכן ש-<strong>AC || BD</strong>. הוכח \\Delta AOC \\cong \\Delta BOD.",
        "hint": "אמצע קטע נותן צלע. ישרים מקבילים נותנים זוויות מתחלפות. בנוסף יש זוויות קודקודיות.",
        "solution_steps": [
            { "verbal_explanation": "זוויות מתחלפות שוות בין מקבילים", "math_expression": "\\angle C = \\angle D" },
            { "verbal_explanation": "הגדרה של נקודת אמצע על CD", "math_expression": "CO = DO" },
            { "verbal_explanation": "זוויות קודקודיות שוות", "math_expression": "\\angle AOC = \\angle BOD" },
            { "verbal_explanation": "לפי משפט חפיפה ז.צ.ז", "math_expression": "\\Delta AOC \\cong \\Delta BOD" }
        ],
        "final_answer": "חופפים לפי ז.צ.ז",
        "options": ["לפי צ.ז.צ", "לפי ז.צ.ז", "לפי צ.צ.צ", "לא חופפים"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "Medium",
        "question_text": "במשולש שווה שוקיים ABC (AB=AC), הגובה לבסיס AD יוצר שני משולשים. הוכח חפיפה לפי ז.צ.ז.",
        "hint": "הגובה מאונך לבסיס (90 מעלות) ובמשולש שווה שוקיים הוא גם חוצה את זווית הראש.",
        "solution_steps": [
            { "verbal_explanation": "הגובה הוא חוצה זווית הראש בשווה שוקיים", "math_expression": "\\angle BAD = \\angle CAD" },
            { "verbal_explanation": "צלע משותפת", "math_expression": "AD = AD" },
            { "verbal_explanation": "הגדרה של גובה (זווית ישרה)", "math_expression": "\\angle ADB = \\angle ADC = 90^\\circ" },
            { "verbal_explanation": "לפי משפט חפיפה ז.צ.ז", "math_expression": "\\Delta ABD \\cong \\Delta ACD" }
        ],
        "final_answer": "חופפים לפי ז.צ.ז",
        "options": ["חופפים לפי ז.צ.ז", "חופפים לפי צ.צ.צ", "לא חופפים", "רק לפי צ.ז.צ"],
        "correctAnswer": 0
    },
    {
        "id": 20,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "Medium",
        "question_text": "האם שני משולשים שבהם שתי זוויות שוות בהתאמה וההיקף שלהם שווה, הם בהכרח חופפים?",
        "hint": "זכרו שמשפט ז.צ.ז דורש צלע ספציפית שמונחת בין שתי הזוויות.",
        "solution_steps": [
            { "verbal_explanation": "שתי זוויות שוות אומר שהמשולשים דומים", "math_expression": "\\text{דמיון}" },
            { "verbal_explanation": "היקף שווה וזוויות שוות מחייב שהצלעות יהיו שוות", "math_expression": "\\text{צלעות שוות}" },
            { "verbal_explanation": "מאחר והצלעות והזוויות שוות, הם חופפים", "math_expression": "\\text{חפיפה}" }
        ],
        "final_answer": "כן",
        "options": ["כן", "לא", "רק אם הם ישרי זווית", "רק אם הם שווי שוקיים"],
        "correctAnswer": 0
    },
    {
        "id": 21,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "Low",
        "question_text": "נתון משולש ABC שבו זווית B שווה לזווית C. האם הוא חופף למשולש DEF שבו זווית E שווה לזווית F, אם ידוע ש-<strong>BC = EF</strong>?",
        "hint": "זוויות הבסיס שוות והצלע שביניהן שווה.",
        "solution_steps": [
            { "verbal_explanation": "נתון (זווית)", "math_expression": "\\angle B = \\angle E" },
            { "verbal_explanation": "נתון (צלע)", "math_expression": "BC = EF" },
            { "verbal_explanation": "נתון (זווית)", "math_expression": "\\angle C = \\angle F" },
            { "verbal_explanation": "משפט חפיפה ז.צ.ז", "math_expression": "\\Delta ABC \\cong \\Delta DEF" }
        ],
        "final_answer": "כן, לפי ז.צ.ז",
        "options": ["כן, לפי ז.צ.ז", "כן, לפי צ.ז.צ", "לא", "אין מספיק נתונים"],
        "correctAnswer": 0
    },
    {
        "id": 22,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "High",
        "question_text": "נתון קטע AB. דרך נקודת האמצע M שלו מעבירים ישר כלשהו. מורידים אנכים מהקצוות A ו-B אל הישר הזה (נקודות C ו-D). הוכח חפיפה.",
        "hint": "נקודת אמצע נותנת צלע (AM=BM). אנכים נותנים 90 מעלות. יש גם זוויות קודקודיות.",
        "solution_steps": [
            { "verbal_explanation": "זוויות קודקודיות שוות", "math_expression": "\\angle AMC = \\angle BMD" },
            { "verbal_explanation": "הגדרה של נקודת אמצע על AB", "math_expression": "AM = BM" },
            { "verbal_explanation": "הגדרה של אנך (זווית ישרה)", "math_expression": "\\angle ACM = \\angle BDM = 90^\\circ" },
            { "verbal_explanation": "משפט חפיפה ז.צ.ז", "math_expression": "\\Delta ACM \\cong \\Delta BDM" }
        ],
        "final_answer": "חופפים לפי ז.צ.ז",
        "options": ["כן", "לא", "לפי צ.ז.צ", "לפי צ.צ.צ"],
        "correctAnswer": 0
    },
    {
        "id": 23,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "Medium",
        "question_text": "במשולש חופף, מהו המשפט המקביל למשפט 'צלעות מתאימות שוות' עבור זוויות?",
        "hint": "כששני משולשים זהים לחלוטין, מה נכון לגבי הזוויות שלהם?",
        "solution_steps": [
            { "verbal_explanation": "הגדרה של חפיפה", "math_expression": "\\Delta 1 \\cong \\Delta 2" },
            { "verbal_explanation": "תוצאה של חפיפה", "math_expression": "\\text{זוויות מתאימות שוות}" }
        ],
        "final_answer": "זוויות מתאימות שוות (זמ\"ש)",
        "options": ["סכום הזוויות 180.", "זוויות מתחלפות שוות.", "זוויות מתאימות שוות (זמ\"ש).", "אין קשר בין הזוויות."],
        "correctAnswer": 2
    },
    {
        "id": 24,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "Medium",
        "question_text": "האם שני משולשים שבהם שתי זוויות שוות והצלע ש<strong>מול</strong> אחת הזוויות שווה, חופפים לפי ז.צ.ז?",
        "hint": "משפט ז.צ.ז מחייב שהצלע תהיה <strong>בין</strong> שתי הזוויות (הצלע עליה 'נשענות' הזוויות).",
        "solution_steps": [
            { "verbal_explanation": "בדיקת התנאים למשפט ז.צ.ז", "math_expression": "\\text{ז . צ . ז}" },
            { "verbal_explanation": "הצלע חייבת להיות כלואה בין הזוויות", "math_expression": "\\text{תנאי הכרחי}" },
            { "verbal_explanation": "אם הצלע מול אחת הזוויות, זהו משפט אחר (או דורש הוכחה נוספת)", "math_expression": "\\text{לא ז.צ.ז קלאסי}" }
        ],
        "final_answer": "לא (הצלע חייבת להיות בין הזוויות)",
        "options": ["כן", "לא (הצלע חייבת להיות בין הזוויות)", "רק במשולש שווה צלעות", "תלוי בגודל הזווית"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "High",
        "question_text": "נתונה מקבילית ABCD. האלכסון BD מחלק אותה לשניים. הוכח חפיפה לפי ז.צ.ז.",
        "hint": "במקבילית צלעות נגדיות מקבילות. השתמשו בזוויות מתחלפות ובצלע משותפת.",
        "solution_steps": [
            { "verbal_explanation": "זוויות מתחלפות שוות (AB||CD)", "math_expression": "\\angle ABD = \\angle CDB" },
            { "verbal_explanation": "צלע משותפת לשני המשולשים", "math_expression": "BD = BD" },
            { "verbal_explanation": "זוויות מתחלפות שוות (AD||BC)", "math_expression": "\\angle ADB = \\angle CBD" },
            { "verbal_explanation": "משפט חפיפה ז.צ.ז", "math_expression": "\\Delta ABD \\cong \\Delta CDB" }
        ],
        "final_answer": "חופפים לפי ז.צ.ז",
        "options": ["לפי צ.ז.צ", "לפי ז.צ.ז", "לפי צ.צ.צ", "לא ניתן להוכיח"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "Medium",
        "question_text": "במשולש ABC, נתון שזווית A=40, זווית B=60 וצלע AB=10. במשולש DEF נתון זווית D=40, זווית E=60 וצלע DE=10. האם הם חופפים?",
        "hint": "הציבו את הנתונים לפי הסדר: זווית, צלע שביניהן, זווית.",
        "solution_steps": [
            { "verbal_explanation": "זווית ראשונה שווה", "math_expression": "40^\\circ = 40^\\circ" },
            { "verbal_explanation": "צלע שמונחת בין שתי הזוויות שווה בשניהם", "math_expression": "10 = 10" },
            { "verbal_explanation": "זווית שנייה שווה", "math_expression": "60^\\circ = 60^\\circ" },
            { "verbal_explanation": "חופפים לפי ז.צ.ז", "math_expression": "\\text{חפיפה}" }
        ],
        "final_answer": "כן, לפי ז.צ.ז",
        "options": ["כן", "לא", "רק אם הזווית השלישית 80", "אין מספיק נתונים"],
        "correctAnswer": 0
    },
    {
        "id": 27,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "High",
        "question_text": "נתונים שני משולשים ישרי זווית. ידוע שבשניהם <strong>זווית חדה אחת שווה</strong> ו<strong>הניצב הצמוד לה שווה</strong>. האם הם חופפים?",
        "hint": "ניצב צמוד לזווית חדה נמצא בינה לבין הזווית הישרה (90).",
        "solution_steps": [
            { "verbal_explanation": "זווית חדה ראשונה שווה", "math_expression": "\\alpha = \\alpha" },
            { "verbal_explanation": "ניצב צמוד (הצלע שביניהן) שווה", "math_expression": "a = a" },
            { "verbal_explanation": "זווית ישרה (90) קיימת בשניהם", "math_expression": "90^\\circ = 90^\\circ" },
            { "verbal_explanation": "מתקיים משפט חפיפה ז.צ.ז", "math_expression": "\\text{חפיפה}" }
        ],
        "final_answer": "כן, לפי ז.צ.ז",
        "options": ["כן", "לא", "רק אם היתר שווה", "לפי צ.ז.צ"],
        "correctAnswer": 0
    },
    {
        "id": 28,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "Low",
        "question_text": "במשולש שווה שוקיים, זוויות הבסיס הן <strong>70°</strong> כל אחת. אם בסיס המשולש הוא <strong>8 ס\"מ</strong>, האם כל משולש אחר עם אותם נתונים יהיה חופף לו?",
        "hint": "שתי זוויות והצלע שביניהן.",
        "solution_steps": [
            { "verbal_explanation": "זווית בסיס א'", "math_expression": "70^\\circ" },
            { "verbal_explanation": "בסיס המשולש (צלע)", "math_expression": "8" },
            { "verbal_explanation": "זווית בסיס ב'", "math_expression": "70^\\circ" },
            { "verbal_explanation": "לפי משפט ז.צ.ז, כל משולש כזה יהיה זהה (חופף)", "math_expression": "\\text{חפיפה}" }
        ],
        "final_answer": "כן, לפי ז.צ.ז",
        "options": ["כן", "לא", "רק אם הוא ישר זווית", "אי אפשר לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 29,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "High",
        "question_text": "נתון קטע AB וקטע CD המקבילים זה לזה (AB || CD). קטע שלישי חוצה את שניהם בנקודות E ו-F. ידוע כי המרחק EF נחצה בנקודה O. הוכח חפיפה.",
        "hint": "ישרים מקבילים + זוויות מתחלפות + נקודת אמצע.",
        "solution_steps": [
            { "verbal_explanation": "זוויות מתחלפות שוות", "math_expression": "\\angle AEO = \\angle DFO" },
            { "verbal_explanation": "נתון שנקודה O היא אמצע EF", "math_expression": "EO = FO" },
            { "verbal_explanation": "זוויות קודקודיות שוות", "math_expression": "\\angle AOE = \\angle DOF" },
            { "verbal_explanation": "משפט חפיפה ז.צ.ז", "math_expression": "\\text{חפיפה}" }
        ],
        "final_answer": "כן, חופפים",
        "options": ["כן", "לא", "רק אם הם מאונכים", "אין מספיק נתונים"],
        "correctAnswer": 0
    },
    {
        "id": 30,
        "subTopic": "משפט חפיפה ז.צ.ז",
        "difficulty": "Low",
        "question_text": "מהי הטענה הנכונה לגבי משפט ז.צ.ז?",
        "hint": "חשבו על המיקום של הצלע ביחס לזוויות.",
        "solution_steps": [
            { "verbal_explanation": "זווית", "math_expression": "ז" },
            { "verbal_explanation": "צלע שנמצאת בין שתי הזוויות", "math_expression": "צ" },
            { "verbal_explanation": "זווית", "math_expression": "ז" }
        ],
        "final_answer": "הצלע חייבת להיות מונחת בין שתי הזוויות השוות.",
        "options": ["הצלע חייבת להיות מול הזווית הגדולה.", "הצלע חייבת להיות מונחת בין שתי הזוויות השוות.", "הצלע חייבת להיות היתר.", "הזוויות חייבות להיות חדות."],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 3: משפט חפיפה צ.צ.צ (Side-Side-Side) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "משפט חפיפה צ.צ.צ",
        "difficulty": "Low",
        "question_text": "נתונים המשולשים ABC ו-DEF. נתון: <strong>AB=DE</strong>, <strong>BC=EF</strong>, <strong>AC=DF</strong>. לפי איזה משפט המשולשים חופפים?",
        "hint": "כאשר שלוש הצלעות במשולש אחד שוות לשלוש הצלעות במשולש השני, המשולשים זהים לחלוטין.",
        "solution_steps": [
            { "verbal_explanation": "נתון (צלע ראשונה)", "math_expression": "AB = DE" },
            { "verbal_explanation": "נתון (צלע שנייה)", "math_expression": "BC = EF" },
            { "verbal_explanation": "נתון (צלע שלישית)", "math_expression": "AC = DF" },
            { "verbal_explanation": "לפי משפט חפיפה צלע-צלע-צלע", "math_expression": "\\Delta ABC \\cong \\Delta DEF" }
        ],
        "final_answer": "חופפים לפי צ.צ.צ",
        "options": ["לפי צ.ז.צ", "לפי ז.צ.ז", "לפי צ.צ.צ", "הם לא חופפים"],
        "correctAnswer": 2
    },
    {
        "id": 32,
        "subTopic": "משפט חפיפה צ.צ.צ",
        "difficulty": "Medium",
        "question_text": "נתון דלתון ABCD שבו AB=AD ו-CB=CD. האלכסון הראשי AC מחלק את הדלתון לשני משולשים. הוכח: <strong>\\Delta ABC \\cong \\Delta ADC</strong>. מהו הנימוק לשוויון הצלע השלישית?",
        "hint": "הסתכלו על הקו AC. הוא שייך לשני המשולשים בו זמנית.",
        "solution_steps": [
            { "verbal_explanation": "נתון בדלתון", "math_expression": "AB = AD" },
            { "verbal_explanation": "נתון בדלתון", "math_expression": "CB = CD" },
            { "verbal_explanation": "צלע משותפת לשני המשולשים", "math_expression": "AC = AC" },
            { "verbal_explanation": "חפיפה לפי משפט צ.צ.צ", "math_expression": "\\Delta ABC \\cong \\Delta ADC" }
        ],
        "final_answer": "צלע משותפת",
        "options": ["נתון", "צלע משותפת", "הגדרת דלתון", "זוויות בסיס"],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "subTopic": "משפט חפיפה צ.צ.צ",
        "difficulty": "High",
        "question_text": "נתונים שני מעגלים בעלי <strong>רדיוס שווה</strong> שנחתכים בנקודות A ו-B. מרכז המעגל הראשון הוא O ומרכז השני הוא P. הוכח: <strong>\\Delta OAP \\cong \\Delta OBP</strong>.",
        "hint": "כל הרדיוסים בשני המעגלים שווים זה לזה. אל תשכחו את הצלע שביניהם.",
        "solution_steps": [
            { "verbal_explanation": "רדיוסים שווים במעגל הראשון", "math_expression": "OA = OB" },
            { "verbal_explanation": "רדיוסים שווים במעגל השני (נתון רדיוסים שווים)", "math_expression": "PA = PB" },
            { "verbal_explanation": "צלע משותפת", "math_expression": "OP = OP" },
            { "verbal_explanation": "משפט חפיפה צ.צ.צ", "math_expression": "\\Delta OAP \\cong \\Delta OBP" }
        ],
        "final_answer": "חופפים לפי צ.צ.צ",
        "options": ["כן, לפי צ.צ.צ", "כן, לפי צ.ז.צ", "לא, חסרה זווית", "רק אם המעגלים זהים"],
        "correctAnswer": 0
    },
    {
        "id": 34,
        "subTopic": "משפט חפיפה צ.צ.צ",
        "difficulty": "Medium",
        "question_text": "במשולש שווה שוקיים ABC, הנקודה D היא <strong>אמצע הבסיס BC</strong>. הוכח כי המשולשים ABD ו-ACD חופפים.",
        "hint": "אמצע קטע מחלק את הצלע לשני חלקים שווים.",
        "solution_steps": [
            { "verbal_explanation": "נתון משולש שווה שוקיים", "math_expression": "AB = AC" },
            { "verbal_explanation": "נתון ש-D היא אמצע BC", "math_expression": "BD = CD" },
            { "verbal_explanation": "צלע משותפת", "math_expression": "AD = AD" },
            { "verbal_explanation": "משפט חפיפה צ.צ.צ", "math_expression": "\\Delta ABD \\cong \\Delta ACD" }
        ],
        "final_answer": "חופפים לפי צ.צ.צ",
        "options": ["לפי צ.ז.צ", "לפי ז.צ.ז", "לפי צ.צ.צ", "אין חפיפה"],
        "correctAnswer": 2
    },
    {
        "id": 35,
        "subTopic": "משפט חפיפה צ.צ.צ",
        "difficulty": "High",
        "question_text": "נתון מרובע ABCD שבו כל הצלעות שוות (מעוין). הוכח כי האלכסון AC מחלק אותו לשני משולשים חופפים.",
        "hint": "במעוין כל ארבע הצלעות שוות באורכן.",
        "solution_steps": [
            { "verbal_explanation": "במעוין צלעות סמוכות שוות", "math_expression": "AB = AD" },
            { "verbal_explanation": "במעוין צלעות סמוכות שוות", "math_expression": "CB = CD" },
            { "verbal_explanation": "צלע משותפת", "math_expression": "AC = AC" },
            { "verbal_explanation": "משפט חפיפה צ.צ.צ", "math_expression": "\\Delta ABC \\cong \\Delta ADC" }
        ],
        "final_answer": "חופפים לפי צ.צ.צ",
        "options": ["לפי צ.צ.צ", "לפי צ.ז.צ", "לפי ז.צ.ז", "לא חופפים"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 4: משפט חפיפה צ.צ.ז (Side-Side-Angle) ---
    // ==============================================================
    {
        "id": 36,
        "subTopic": "משפט חפיפה צ.צ.ז",
        "difficulty": "Low",
        "question_text": "מהו התנאי הקריטי שחייב להתקיים במשפט חפיפה צ.צ.ז כדי שהמשולשים יהיו חופפים בוודאות?",
        "hint": "המשפט הרביעי דורש שוויון של שתי צלעות וזווית, אבל למיקום הזווית יש חשיבות גדולה.",
        "solution_steps": [
            { "verbal_explanation": "צלע אחת שווה", "math_expression": "צ" },
            { "verbal_explanation": "צלע שנייה שווה", "math_expression": "צ" },
            { "verbal_explanation": "הזווית מול הצלע הגדולה מבין השתיים", "math_expression": "ז" },
            { "verbal_explanation": "זהו התנאי להבטחת פתרון יחיד וחפיפה", "math_expression": "\\text{מול הצלע הגדולה}" }
        ],
        "final_answer": "הזווית חייבת להיות מול הצלע הגדולה.",
        "options": ["הזווית חייבת להיות קטנה.", "הזווית חייבת להיות מול הצלע הגדולה.", "הזווית חייבת להיות בין הצלעות.", "הצלעות חייבות להיות שוות."],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "משפט חפיפה צ.צ.ז",
        "difficulty": "Medium",
        "question_text": "נתון $\\Delta ABC$ ו-$\\Delta DEF$. ידוע: <strong>AB=DE=10</strong>, <strong>BC=EF=7</strong>, וכן <strong>$\\angle A = \\angle D = 40^\\circ$</strong>. האם המשולשים חופפים?",
        "hint": "בדקו: האם הזווית הנתונה (40) נמצאת מול הצלע הגדולה (10) או מול הצלע הקטנה (7)?",
        "solution_steps": [
            { "verbal_explanation": "נשווה את אורכי הצלעות הנתונות", "math_expression": "10 > 7" },
            { "verbal_explanation": "הזווית הנתונה (40) נמצאת מול הצלע שאורכה 7", "math_expression": "\\angle A \\text{ is opposite } BC" },
            { "verbal_explanation": "מכיוון שהזווית היא מול הצלע הקטנה, לא ניתן להוכיח חפיפה", "math_expression": "\\text{אין חפיפה ודאית}" }
        ],
        "final_answer": "לא בהכרח",
        "options": ["כן, לפי צ.צ.ז", "לא בהכרח", "כן, לפי צ.ז.צ", "רק אם הם ישרי זווית"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "משפט חפיפה צ.צ.ז",
        "difficulty": "Medium",
        "question_text": "במשולש ישר זווית, שוויון של ה<strong>יתר</strong> ושל <strong>ניצב</strong> אחד מספיק לחפיפה. לפי איזה משפט?",
        "hint": "היתר הוא תמיד הצלע הארוכה ביותר במשולש ישר זווית. הזווית הישרה (90) נמצאת מולו.",
        "solution_steps": [
            { "verbal_explanation": "שוויון יתר (הצלע הגדולה)", "math_expression": "c1 = c2" },
            { "verbal_explanation": "שוויון ניצב (צלע נוספת)", "math_expression": "a1 = a2" },
            { "verbal_explanation": "זווית ישרה (90) מול היתר הגדול", "math_expression": "90^\\circ = 90^\\circ" },
            { "verbal_explanation": "לפי משפט צ.צ.ז (זווית מול צלע גדולה)", "math_expression": "\\Delta 1 \\cong \\Delta 2" }
        ],
        "final_answer": "משפט צ.צ.ז",
        "options": ["צ.ז.צ", "ז.צ.ז", "צ.צ.ז", "צ.צ.צ"],
        "correctAnswer": 2
    },
    {
        "id": 39,
        "subTopic": "משפט חפיפה צ.צ.ז",
        "difficulty": "High",
        "question_text": "נתון $\\Delta ABC$ קהה זווית (זווית B = 110). ידוע כי $AB=DE$, $AC=DF$. האם הזווית B נמצאת מול הצלע הגדולה?",
        "hint": "במשולש, מול הזווית הגדולה ביותר נמצאת הצלע הארוכה ביותר.",
        "solution_steps": [
            { "verbal_explanation": "זווית קהה היא תמיד הזווית הגדולה במשולש", "math_expression": "110^\\circ > 90^\\circ" },
            { "verbal_explanation": "לכן הצלע שמולה היא הצלע הארוכה ביותר", "math_expression": "AC \\text{ is Max}" },
            { "verbal_explanation": "הזווית הנתונה היא מול הצלע הגדולה ביותר", "math_expression": "\\text{תנאי צ.צ.ז מתקיים}" }
        ],
        "final_answer": "כן",
        "options": ["כן", "לא", "רק אם השוקיים שוות", "אין לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "משפט חפיפה צ.צ.ז",
        "difficulty": "High",
        "question_text": "נתון משולש ABC שבו AB=AC. הנקודה D נמצאת מחוץ למשולש כך ש-DC=DB. הוכח כי $\\Delta ABD \\cong \\Delta ACD$. באיזה משפט נשתמש?",
        "hint": "יש לנו שתי צלעות שוות מהנתונים וצלע אחת משותפת.",
        "solution_steps": [
            { "verbal_explanation": "נתון (שוקיים)", "math_expression": "AB = AC" },
            { "verbal_explanation": "נתון", "math_expression": "DB = DC" },
            { "verbal_explanation": "צלע משותפת", "math_expression": "AD = AD" },
            { "verbal_explanation": "משפט חפיפה צ.צ.צ (עדיף כאן על פני צ.צ.ז)", "math_expression": "\\Delta ABD \\cong \\Delta ACD" }
        ],
        "final_answer": "צ.צ.צ",
        "options": ["צ.ז.צ", "ז.צ.ז", "צ.צ.צ", "צ.צ.ז"],
        "correctAnswer": 2
    },
    {
        "id": 41,
        "subTopic": "משפט חפיפה צ.צ.ז",
        "difficulty": "Medium",
        "question_text": "האם שני משולשים שווי שוקיים בעלי <strong>בסיס שווה</strong> ו<strong>שוק שווה</strong> חופפים?",
        "hint": "כשיודעים את כל הצלעות, ניתן להשתמש ב-צ.צ.צ.",
        "solution_steps": [
            { "verbal_explanation": "שוק ראשונה שווה", "math_expression": "a1 = a2" },
            { "verbal_explanation": "שוק שנייה שווה (כי הם שווי שוקיים)", "math_expression": "a1 = a2" },
            { "verbal_explanation": "בסיס שווה", "math_expression": "b1 = b2" },
            { "verbal_explanation": "חופפים לפי צ.צ.צ", "math_expression": "\\text{חפיפה}" }
        ],
        "final_answer": "כן, לפי צ.צ.צ",
        "options": ["כן, לפי צ.צ.צ", "לא", "רק אם הזווית שווה", "לפי ז.צ.ז"],
        "correctAnswer": 0
    },
    {
        "id": 42,
        "subTopic": "משפט חפיפה צ.צ.ז",
        "difficulty": "Low",
        "question_text": "מדוע משפט 'צלע-צלע-זווית' (ללא התנאי על הצלע הגדולה) אינו משפט חפיפה?",
        "hint": "חשבו האם ניתן לצייר שני משולשים שונים עם אותם נתונים.",
        "solution_steps": [
            { "verbal_explanation": "ניתן לבנות שני משולשים שונים", "math_expression": "\\text{שתי אפשרויות בנייה}" },
            { "verbal_explanation": "הזווית מול הצלע הקטנה יוצרת חוסר ודאות", "math_expression": "\\text{חוסר חפיפה}" }
        ],
        "final_answer": "כי ניתן לבנות שני משולשים שונים עם נתונים אלו.",
        "options": ["כי זה לא נוח.", "כי ניתן לבנות שני משולשים שונים עם נתונים אלו.", "כי חסרה צלע.", "כי חסרה זווית."],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "משפט חפיפה צ.צ.ז",
        "difficulty": "High",
        "question_text": "במשולשים ABC ו-DEF נתון: AB=DE=8, AC=DF=5, וזווית B שווה לזווית E. האם הם חופפים?",
        "hint": "הזווית הנתונה היא B (מול הצלע AC=5). האם 5 היא הצלע הגדולה?",
        "solution_steps": [
            { "verbal_explanation": "השוואת צלעות: 8 גדול מ-5", "math_expression": "8 > 5" },
            { "verbal_explanation": "הזווית הנתונה היא מול הצלע הקטנה (5)", "math_expression": "\\angle B \\text{ opposite } 5" },
            { "verbal_explanation": "מכיוון שהזווית לא מול הצלע הגדולה (8), אין חפיפה ודאית", "math_expression": "\\text{לא חופפים בהכרח}" }
        ],
        "final_answer": "לא בהכרח",
        "options": ["כן", "לא בהכרח", "רק אם הם ישרי זווית", "לפי צ.ז.צ"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "משפט חפיפה צ.צ.ז",
        "difficulty": "Medium",
        "question_text": "נתונים שני משולשים שווי צלעות בעלי <strong>צלע שווה</strong>. האם הם חופפים?",
        "hint": "במשולש שווה צלעות כל הצלעות שוות.",
        "solution_steps": [
            { "verbal_explanation": "צלע ראשונה שווה", "math_expression": "a = a" },
            { "verbal_explanation": "צלע שנייה שווה", "math_expression": "a = a" },
            { "verbal_explanation": "צלע שלישית שווה", "math_expression": "a = a" },
            { "verbal_explanation": "חופפים לפי צ.צ.צ", "math_expression": "\\text{חפיפה}" }
        ],
        "final_answer": "כן, לפי צ.צ.צ",
        "options": ["כן", "לא", "רק אם הזווית שווה", "אין מספיק נתונים"],
        "correctAnswer": 0
    },
    {
        "id": 45,
        "subTopic": "משפט חפיפה צ.צ.ז",
        "difficulty": "Low",
        "question_text": "במשפט החפיפה הרביעי (צ.צ.ז), איפה חייבת להיות ממוקמת הזווית?",
        "hint": "מול אחת משתי הצלעות השוות.",
        "solution_steps": [
            { "verbal_explanation": "הזווית לא נמצאת בין הצלעות", "math_expression": "\\text{לא כלואה}" },
            { "verbal_explanation": "היא חייבת להיות מול הצלע הגדולה", "math_expression": "\\text{מול הצלע הארוכה}" }
        ],
        "final_answer": "מול הצלע הגדולה מבין השתיים.",
        "options": ["בין הצלעות.", "מול הצלע הקטנה.", "מול הצלע הגדולה מבין השתיים.", "ליד הזווית הישרה."],
        "correctAnswer": 2
    },,
    // ==============================================================
    // --- תת נושא 5: משולש שווה שוקיים (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "Low",
        "question_text": "במשולש שווה שוקיים, שתי הצלעות השוות נקראות 'שוקיים' והצלע השלישית נקראת 'בסיס'. מהו הכלל לגבי <strong>זוויות הבסיס</strong> במשולש זה?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100'><polygon points='60,10 10,90 110,90' fill='#f8fafc' stroke='#1e293b' stroke-width='2'/><path d='M25,80 A15,15 0 0,1 40,90' fill='none' stroke='#b09151' stroke-width='2'/><path d='M95,80 A15,15 0 0,0 80,90' fill='none' stroke='#b09151' stroke-width='2'/><text x='25' y='75' font-size='12' fill='#b09151'>\u03B1</text><text x='85' y='75' font-size='12' fill='#b09151'>\u03B1</text></svg></div>",
        "hint": "הסתכלו על הסימטריה של המשולש. אם השוקיים שוות, גם הזוויות שמולן חייבות להיות...",
        "solution_steps": [
            { "verbal_explanation": "במשולש שווה שוקיים, הזוויות הנמצאות מול השוקיים השוות נקראות זוויות הבסיס.", "math_expression": "\u2221B , \u2221C" },
            { "verbal_explanation": "משפט יסוד בגיאומטריה קובע שבמשולש שווה שוקיים, זוויות הבסיס תמיד שוות זו לזו.", "math_expression": "\u2221B = \u2221C" }
        ],
        "final_answer": "זוויות הבסיס שוות זו לזו.",
        "options": ["זוויות הבסיס משלימות ל-180.", "זוויות הבסיס שוות זו לזו.", "זווית הראש שווה לזווית בסיס.", "אין קשר בין הזוויות."],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "Medium",
        "question_text": "נתון משולש שווה שוקיים שבו <strong>זווית הראש</strong> היא <strong>40°</strong>. מהו הגודל של כל אחת מ<strong>זוויות הבסיס</strong>?",
        "hint": "סכום הזוויות במשולש הוא 180°. החסירו את זווית הראש מהסכום, וחלקו את השאר שווה-בשווה בין שתי זוויות הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא כמה מעלות נותרו לשתי זוויות הבסיס יחד. נחסיר 40 מתוך 180.", "math_expression": "180 - 40 = 140" },
            { "verbal_explanation": "שלב 2: מכיוון שמדובר במשולש שווה שוקיים, שתי זוויות הבסיס שוות זו לזו.", "math_expression": "\u2221B = \u2221C" },
            { "verbal_explanation": "שלב 3: נחלק את 140 המעלות שנותרו לשני חלקים שווים.", "math_expression": "140 / 2 = 70" }
        ],
        "final_answer": "70 מעלות",
        "options": ["70 מעלות", "40 מעלות", "140 מעלות", "60 מעלות"],
        "correctAnswer": 0
    },
    {
        "id": 48,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "Medium",
        "question_text": "נתון משולש שווה שוקיים שבו אחת מ<strong>זוויות הבסיס</strong> היא <strong>50°</strong>. מהו גודלה של <strong>זווית הראש</strong>?",
        "hint": "אם זווית בסיס אחת היא 50, אז גם השנייה היא 50. כמה חסר כדי להגיע ל-180?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את שתי זוויות הבסיס. מאחר והן שוות, שתיהן בנות 50 מעלות.", "math_expression": "50 + 50 = 100" },
            { "verbal_explanation": "שלב 2: סכום כל הזוויות הוא 180. נחסיר את סכום זוויות הבסיס מהסך הכל.", "math_expression": "180 - 100 = 80" },
            { "verbal_explanation": "שלב 3: התוצאה היא גודלה של זווית הראש.", "math_expression": "80" }
        ],
        "final_answer": "80 מעלות",
        "options": ["50 מעלות", "100 מעלות", "80 מעלות", "130 מעלות"],
        "correctAnswer": 2
    },
    {
        "id": 49,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "Low",
        "question_text": "היקף משולש שווה שוקיים הוא <strong>20 ס\"מ</strong>. אורך הבסיס הוא <strong>6 ס\"מ</strong>. מהו אורך כל אחת מן <strong>השוקיים</strong>?",
        "hint": "החסירו את הבסיס מההיקף הכולל. מה שנשאר שייך לשתי השוקיים השוות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את סכום שתי השוקיים יחד. נחסיר את אורך הבסיס מההיקף.", "math_expression": "20 - 6 = 14" },
            { "verbal_explanation": "שלב 2: במשולש שווה שוקיים, שתי השוקיים שוות באורכן.", "math_expression": "\u05e9\u05d5\u05e7 \u05d0 = \u05e9\u05d5\u05e7 \u05d1" },
            { "verbal_explanation": "שלב 3: נחלק את היתרה (14) ב-2 כדי למצוא צלע אחת.", "math_expression": "14 / 2 = 7" }
        ],
        "final_answer": "7 ס\"מ",
        "options": ["14 ס\"מ", "7 ס\"מ", "6 ס\"מ", "10 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 50,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "High",
        "question_text": "במשולש שווה שוקיים, זווית הראש <strong>גדולה פי 4</strong> מזווית בסיס. מהו גודלה של <strong>זווית הבסיס</strong>?",
        "hint": "סמנו את זווית הבסיס ב-x. לכן זווית הראש היא 4x. בנו משוואה לסכום הזוויות (180).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את זוויות הבסיס כ-x (כל אחת). זווית הראש תהיה 4x.", "math_expression": "x , x , 4x" },
            { "verbal_explanation": "שלב 2: סכום שלוש הזוויות יחד חייב להיות 180 מעלות.", "math_expression": "x + x + 4x = 180" },
            { "verbal_explanation": "שלב 3: נכנס איברים (6x = 180) ונחלק ב-6.", "math_expression": "x = 180 / 6 = 30" }
        ],
        "final_answer": "30 מעלות",
        "options": ["30 מעלות", "45 מעלות", "20 מעלות", "60 מעלות"],
        "correctAnswer": 0
    },
    {
        "id": 51,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "Medium",
        "question_text": "האם משולש שבו שתי זוויות הן <strong>60°</strong> הוא בהכרח משולש שווה שוקיים?",
        "hint": "חשבו מה גודל הזווית השלישית. אם יש לפחות שתי זוויות שוות, המשולש הוא שווה שוקיים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את הזווית השלישית: 180 פחות (60 ועוד 60).", "math_expression": "180 - 120 = 60" },
            { "verbal_explanation": "שלב 2: גילינו שכל שלוש הזוויות הן 60 מעלות. זהו משולש שווה צלעות.", "math_expression": "60, 60, 60" },
            { "verbal_explanation": "שלב 3: כל משולש שווה צלעות הוא 'מקרה פרטי' של משולש שווה שוקיים (כי בטוח יש לו לפחות 2 צלעות שוות).", "math_expression": "\u05db\u05df" }
        ],
        "final_answer": "כן, הוא אפילו משולש שווה צלעות.",
        "options": ["לא, הוא שווה צלעות.", "כן, הוא אפילו משולש שווה צלעות.", "רק אם הצלעות הן 5 ס\"מ.", "אי אפשר לדעת."],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "Low",
        "question_text": "מה ניתן לומר על משולש שבו <strong>התיכון לבסיס</strong> הוא גם <strong>גובה לבסיס</strong>?",
        "hint": "זוהי תכונה ייחודית של משולשים סימטריים.",
        "solution_steps": [
            { "verbal_explanation": "במשולש כללי, התיכון והגובה הם בדרך כלל קווים שונים.", "math_expression": "\u05ea\u05d9\u05db\u05d5\u05df \u2260 \u05d2\u05d5\u05d1\u05d4" },
            { "verbal_explanation": "כאשר קו אחד ממלא את שני התפקידים (חוצה את הצלע ומאונך לה), זה מעיד על שוויון של שתי הצלעות מהן הוא יוצא.", "math_expression": "\u05de\u05e9\u05d5\u05dc\u05e9 \u05e9\u05d5\u05d5\u05d4 \u05e9\u05d5\u05e7\u05d9\u05d9\u05dd" }
        ],
        "final_answer": "הוא משולש שווה שוקיים.",
        "options": ["הוא משולש ישר זווית.", "הוא משולש שווה שוקיים.", "הוא משולש שונה צלעות.", "הוא לא קיים."],
        "correctAnswer": 1
    },
    {
        "id": 53,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "High",
        "question_text": "במשולש שווה שוקיים, זווית בסיס אחת היא <strong>x + 10</strong> וזווית הראש היא <strong>x</strong>. מהו ערכו של x?",
        "hint": "חברו את שתי זוויות הבסיס (שתיהן x+10) ואת זווית הראש (x) והשוו ל-180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את כל הזוויות: שתי זוויות בסיס (x+10) וזווית ראש אחת (x).", "math_expression": "2(x + 10) + x = 180" },
            { "verbal_explanation": "שלב 2: נפתח סוגריים ונכנס איברים: 2x + 20 + x = 180.", "math_expression": "3x + 20 = 180" },
            { "verbal_explanation": "שלב 3: נחסיר 20 ונחלק ב-3: 3x = 160.", "math_expression": "x = 160 / 3 = 53.33" }
        ],
        "final_answer": "53.33",
        "options": ["50", "53.33", "60", "40"],
        "correctAnswer": 1
    },
    {
        "id": 54,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "Medium",
        "question_text": "האם ייתכן משולש שווה שוקיים שבו זווית בסיס אחת היא <strong>95°</strong>?",
        "hint": "זכרו ששתי זוויות הבסיס שוות. מה יקרה אם תחברו שתי זוויות כאלו?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אם זווית בסיס אחת היא 95, השנייה חייבת להיות גם היא 95.", "math_expression": "95 + 95 = 190" },
            { "verbal_explanation": "שלב 2: סכום שתי הזוויות הללו בלבד כבר עבר את ה-180 מעלות המותרות במשולש.", "math_expression": "190 > 180" },
            { "verbal_explanation": "שלב 3: מכאן נובע שזוויות הבסיס במשולש שווה שוקיים חייבות תמיד להיות חדות (קטנות מ-90).", "math_expression": "\u05dc\u05d0 \u05d9\u05d9\u05ea\u05db\u05df" }
        ],
        "final_answer": "לא, כי סכום הזוויות יעבור את 180 מעלות.",
        "options": ["כן, זה משולש קהה זווית.", "לא, כי סכום הזוויות יעבור את 180 מעלות.", "כן, בתנאי שהבסיס קצר מאוד.", "רק אם המשולש שווה צלעות."],
        "correctAnswer": 1
    },
    {
        "id": 55,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "Medium",
        "question_text": "במשולש שווה שוקיים ABC, השוק AB גדולה ב-<strong>5 ס\"מ</strong> מהבסיס BC. ההיקף הוא <strong>40 ס\"מ</strong>. מהו אורך <strong>הבסיס</strong>?",
        "hint": "סמנו את הבסיס ב-x. השוקיים יהיו (x+5). חברו הכל ל-40.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר בסיס כ-x. כל שוק היא x+5. יש שתי שוקיים.", "math_expression": "x + 2(x + 5) = 40" },
            { "verbal_explanation": "שלב 2: נפתח סוגריים: x + 2x + 10 = 40.", "math_expression": "3x + 10 = 40" },
            { "verbal_explanation": "שלב 3: נעביר 10 ונקבל 3x = 30. נחלק ב-3.", "math_expression": "x = 10" }
        ],
        "final_answer": "10 ס\"מ",
        "options": ["10 ס\"מ", "15 ס\"מ", "5 ס\"מ", "12 ס\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 56,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "Low",
        "question_text": "נתון משולש ABC שבו <strong>\u2221B = \u2221C</strong>. מה ניתן להסיק לגבי הצלעות AB ו-AC?",
        "hint": "זהו המשפט ההפוך למשפט זוויות הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "אם שתי זוויות במשולש שוות זו לזו, המשולש הוא בהכרח שווה שוקיים.", "math_expression": "\u2221B = \u2221C \u2192 \u05e9\u05d5\u05d5\u05d4 \u05e9\u05d5\u05d7" },
            { "verbal_explanation": "הצלעות שנמצאות מול הזוויות השוות הן השוקיים, ולכן הן שוות באורכן.", "math_expression": "AB = AC" }
        ],
        "final_answer": "הן שוות (AB = AC).",
        "options": ["AB > AC", "AB < AC", "הן שוות (AB = AC).", "אין קשר ביניהן."],
        "correctAnswer": 2
    },
    {
        "id": 57,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "High",
        "question_text": "במשולש שווה שוקיים, <strong>הזווית החיצונית</strong> לזווית הראש היא בת <strong>100°</strong>. מהו גודל <strong>זווית הבסיס</strong>?",
        "hint": "זווית חיצונית משלימה את הפנימית ל-180 על קו ישר. מצאו את זווית הראש תחילה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את זווית הראש הפנימית. היא צמודה לחיצונית (180 פחות 100).", "math_expression": "180 - 100 = 80" },
            { "verbal_explanation": "שלב 2: כעת נמצא את סכום זוויות הבסיס: 180 פחות זווית הראש שמצאנו.", "math_expression": "180 - 80 = 100" },
            { "verbal_explanation": "שלב 3: נחלק את ה-100 בשתי זוויות הבסיס השוות.", "math_expression": "100 / 2 = 50" }
        ],
        "final_answer": "50 מעלות",
        "options": ["50 מעלות", "80 מעלות", "40 מעלות", "100 מעלות"],
        "correctAnswer": 0
    },
    {
        "id": 58,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "Medium",
        "question_text": "במשולש שווה שוקיים, <strong>זווית בסיס</strong> גדולה ב-<strong>30°</strong> מזווית הראש. מהו גודל <strong>זווית הראש</strong>?",
        "hint": "סמנו ראש ב-x. בסיס ב-x+30. חברו הכל (ראש + בסיס + בסיס) ל-180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר: ראש = x. בסיס א' = x+30. בסיס ב' = x+30.", "math_expression": "x + (x + 30) + (x + 30) = 180" },
            { "verbal_explanation": "שלב 2: נכנס איברים: 3x + 60 = 180.", "math_expression": "3x = 120" },
            { "verbal_explanation": "שלב 3: נחלק ב-3 למציאת זווית הראש.", "math_expression": "x = 40" }
        ],
        "final_answer": "40 מעלות",
        "options": ["40 מעלות", "70 מעלות", "60 מעלות", "30 מעלות"],
        "correctAnswer": 0
    },
    {
        "id": 59,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "High",
        "question_text": "נתון משולש ABC שבו AB=AC. הנקודה D נמצאת על המשך הבסיס BC. האם משולש ABD הוא שווה שוקיים?",
        "hint": "חשבו על המרחקים. האם השוק החדשה AD יכולה להיות שווה ל-AB?",
        "solution_steps": [
            { "verbal_explanation": "במשולש שווה שוקיים, הזוויות הפנימיות בבסיס הן חדות.", "math_expression": "\u2221C < 90^\\circ" },
            { "verbal_explanation": "הזווית הצמודה לה (החיצונית) חייבת להיות קהה.", "math_expression": "\u2221ACD_{ext} > 90^\\circ" },
            { "verbal_explanation": "במשולש ACD שנוצר, הזווית הקהה היא הגדולה ביותר, ולכן הצלע שמולה (AD) היא הארוכה ביותר. היא לא יכולה להיות שווה ל-AC.", "math_expression": "AD > AC = AB" }
        ],
        "final_answer": "לא, הצלע החדשה תמיד תהיה ארוכה יותר.",
        "options": ["כן, תמיד.", "לא, הצלע החדשה תמיד תהיה ארוכה יותר.", "רק אם המשולש ישר זווית.", "רק אם D היא אמצע הקטע."],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "subTopic": "משולש שווה שוקיים",
        "difficulty": "Low",
        "question_text": "איזה מהמשולשים הבאים הוא <strong>בוודאות</strong> שווה שוקיים?",
        "hint": "חפשו את התנאי המינימלי לשוויון.",
        "solution_steps": [
            { "verbal_explanation": "משולש שבו שתי צלעות שוות.", "math_expression": "a = b" },
            { "verbal_explanation": "או משולש שבו שתי זוויות שוות.", "math_expression": "\u03B1 = \u03B2" }
        ],
        "final_answer": "משולש בעל שתי זוויות שוות.",
        "options": ["משולש ישר זווית.", "משולש בעל שתי זוויות שוות.", "משולש שסכום זוויותיו 180.", "כל משולש."],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 6: תיכון, גובה וחוצה זווית (15 שאלות) ---
    // ==============================================================
    {
        "id": 61,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "Low",
        "question_text": "מהו התפקיד של <strong>תיכון</strong> במשולש?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100'><polygon points='60,10 10,90 110,90' fill='#f1f5f9' stroke='#1e293b' stroke-width='2'/><line x1='60' y1='10' x2='60' y2='90' stroke='#b09151' stroke-width='2'/><text x='30' y='98' font-size='10'>||</text><text x='80' y='98' font-size='10'>||</text></svg></div>",
        "hint": "המילה 'תיכון' באה מהמילה 'תיכון' (אמצע).",
        "solution_steps": [
            { "verbal_explanation": "תיכון הוא קטע היוצא מקודקוד המשולש אל הצלע שמולו.", "math_expression": "Vertex \u2192 Side" },
            { "verbal_explanation": "תפקידו היחיד הוא לחצות את הצלע שמולו לשני קטעים שווים בדיוק.", "math_expression": "BD = CD" }
        ],
        "final_answer": "לחצות את הצלע שמולו לשני חלקים שווים.",
        "options": ["ליצור זווית של 90 מעלות.", "לחצות את הזווית ממנה הוא יוצא.", "לחצות את הצלע שמולו לשני חלקים שווים.", "לחבר בין שני אמצעי צלעות."],
        "correctAnswer": 2
    },
    {
        "id": 62,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "Low",
        "question_text": "מהו התפקיד של <strong>גובה</strong> במשולש?",
        "hint": "גובה תמיד נמדד בקו ישר ומאונך (כמו למדוד גובה של אדם).",
        "solution_steps": [
            { "verbal_explanation": "גובה הוא קטע היוצא מקודקוד אל הצלע שמולו.", "math_expression": "h" },
            { "verbal_explanation": "הוא חייב ליצור זווית ישרה (90 מעלות) עם הצלע שבה הוא פוגע.", "math_expression": "\u2221 = 90^\\circ" }
        ],
        "final_answer": "ליצור זווית של 90 מעלות עם הצלע שמולו.",
        "options": ["לחצות את הצלע.", "לחצות את הזווית.", "ליצור זווית של 90 מעלות עם הצלע שמולו.", "להיות שווה לשוק."],
        "correctAnswer": 2
    },
    {
        "id": 63,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "Low",
        "question_text": "מהו התפקיד של <strong>חוצה זווית</strong>?",
        "hint": "כשמו כן הוא - חוצה את הזווית.",
        "solution_steps": [
            { "verbal_explanation": "חוצה זווית הוא קטע המחלק את זווית הקודקוד לשתי זוויות קטנות יותר.", "math_expression": "Angle Bisector" },
            { "verbal_explanation": "שתי הזוויות שנוצרו שוות זו לזו בדיוק בערכן.", "math_expression": "\u03B11 = \u03B12" }
        ],
        "final_answer": "לחלק את הזווית לשתי זוויות שוות.",
        "options": ["לחלק את הצלע לשתיים.", "לחלק את הזווית לשתי זוויות שוות.", "ליצור זווית של 90 מעלות.", "לחבר קודקוד למרכז המשולש."],
        "correctAnswer": 1
    },
    {
        "id": 64,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "Medium",
        "question_text": "במשולש <strong>שווה שוקיים</strong>, מה מיוחד בקו היוצא מזווית הראש אל הבסיס?",
        "hint": "זהו ה'נס' של משולש שווה שוקיים - קו אחד עושה הכל.",
        "solution_steps": [
            { "verbal_explanation": "במשולש שווה שוקיים, הקו היוצא מזווית הראש לבסיס הוא סימטרי לחלוטין.", "math_expression": "Symmetry" },
            { "verbal_explanation": "לכן, קטע זה הוא גם תיכון (חוצה בסיס), גם גובה (90 מעלות) וגם חוצה זווית הראש.", "math_expression": "\u05d4\u05db\u05dc \u05d1\u05d0\u05d7\u05d3" }
        ],
        "final_answer": "הוא גם תיכון, גם גובה וגם חוצה זווית.",
        "options": ["הוא רק גובה.", "הוא רק תיכון.", "הוא גם תיכון, גם גובה וגם חוצה זווית.", "הוא לא אף אחד מהם."],
        "correctAnswer": 2
    },
    {
        "id": 65,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "Medium",
        "question_text": "במשולש ABC, הקטע AD הוא <strong>תיכון</strong> לצלע BC. ידוע כי BC = 12 ס\"מ. מהו אורך הקטע <strong>BD</strong>?",
        "hint": "תיכון מחלק את הצלע לשני חלקים שווים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה ש-AD הוא תיכון, ולכן D היא נקודת האמצע של הצלע BC.", "math_expression": "BD = DC" },
            { "verbal_explanation": "שלב 2: נחלק את האורך הכולל של הצלע (12) ב-2.", "math_expression": "12 / 2 = 6" }
        ],
        "final_answer": "6 ס\"מ",
        "options": ["12 ס\"מ", "6 ס\"מ", "24 ס\"מ", "אין מספיק נתונים"],
        "correctAnswer": 1
    },
    {
        "id": 66,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "Medium",
        "question_text": "במשולש ABC, הקטע AD הוא <strong>חוצה זווית A</strong>. ידוע כי \u2221A = 70°. מהו גודל הזווית <strong>BAD</strong>?",
        "hint": "חוצה זווית מחלק את הזווית המקורית לשני חצאים שווים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין שחוצה הזווית מחלק את 70 המעלות לשני חלקים זהים.", "math_expression": "70 / 2" },
            { "verbal_explanation": "שלב 2: נחשב את הערך של כל חצי.", "math_expression": "35" }
        ],
        "final_answer": "35 מעלות",
        "options": ["70 מעלות", "35 מעלות", "140 מעלות", "20 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 67,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "High",
        "question_text": "במשולש <strong>ישר זווית</strong>, שניים מתוך שלושת הגבהים של המשולש הם למעשה...",
        "hint": "חשבו איפה הגובה פוגע בצלע במשולש שיש בו כבר 90 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "גובה חייב להיות מאונך לצלע.", "math_expression": "90^\\circ" },
            { "verbal_explanation": "במשולש ישר זווית, הניצבים כבר מאונכים זה לזה.", "math_expression": "a \u22a5 b" },
            { "verbal_explanation": "לכן, כל ניצב הוא הגובה של הניצב השני.", "math_expression": "\u05d4\u05e0\u05d9\u05e6\u05d1\u05d9\u05dd" }
        ],
        "final_answer": "הניצבים של המשולש.",
        "options": ["היתר של המשולש.", "הניצבים של המשולש.", "התיכונים.", "הם מחוץ למשולש."],
        "correctAnswer": 1
    },
    {
        "id": 68,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "Medium",
        "question_text": "היכן נפגשים שלושת הגבהים בתוך <strong>משולש קהה זווית</strong>?",
        "hint": "נסו לדמיין מתיחת קווים ישרים מקודקודים אל המשכי הצלעות בחוץ.",
        "solution_steps": [
            { "verbal_explanation": "במשולש קהה זווית, שניים מהגבהים נופלים מחוץ למשולש (על המשכי הצלעות).", "math_expression": "External" },
            { "verbal_explanation": "לכן, נקודת המפגש של שלושתם (או המשכיהם) תהיה מחוץ לשטח המשולש.", "math_expression": "\u05de\u05d7\u05d5\u05e5 \u05dc\u05de\u05e9\u05d5\u05dc\u05e9" }
        ],
        "final_answer": "מחוץ למשולש.",
        "options": ["בתוך המשולש.", "על אחת הצלעות.", "מחוץ למשולש.", "בקדקוד הזווית הקהה."],
        "correctAnswer": 2
    },
    {
        "id": 69,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "High",
        "question_text": "במשולש שווה שוקיים ABC, הגובה לבסיס AD הוא באורך <strong>8 ס\"מ</strong>. אם שטח המשולש הוא <strong>48 סמ\"ר</strong>, מהו אורך <strong>הבסיס BC</strong>?",
        "hint": "השתמשו בנוסחת השטח: (בסיס כפול גובה) חלקי 2 שווה לשטח.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הנתונים בנוסחת שטח משולש: (BC * 8) / 2 = 48.", "math_expression": "4 * BC = 48" },
            { "verbal_explanation": "שלב 2: נחלק ב-4 כדי למצוא את אורך הבסיס BC.", "math_expression": "BC = 48 / 4 = 12" }
        ],
        "final_answer": "12 ס\"מ",
        "options": ["6 ס\"מ", "12 ס\"מ", "10 ס\"מ", "16 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 70,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "Medium",
        "question_text": "כמה תיכונים יש לכל משולש בעולם?",
        "hint": "מכל קודקוד אפשר להוציא תיכון אחד.",
        "solution_steps": [
            { "verbal_explanation": "לכל משולש יש שלושה קודקודים ושלוש צלעות.", "math_expression": "3" },
            { "verbal_explanation": "מכיוון שניתן להעביר תיכון מכל קודקוד אל אמצע הצלע שמולו, יש בדיוק 3 תיכונים.", "math_expression": "3" }
        ],
        "final_answer": "3",
        "options": ["1", "2", "3", "4"],
        "correctAnswer": 2
    },
    {
        "id": 71,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "High",
        "question_text": "במשולש שווה שוקיים, האם <strong>התיכונים לשוקיים</strong> שווים זה לזה?",
        "hint": "חשבו על הסימטריה של המשולש. אם השוקיים זהות, האם גם הקווים שחוצים אותן יהיו זהים?",
        "solution_steps": [
            { "verbal_explanation": "במשולש שווה שוקיים קיימת סימטריה מלאה סביב הגובה לבסיס.", "math_expression": "Symmetry" },
            { "verbal_explanation": "מכאן נובע שכל זוג קטעים 'תואמים' (כמו תיכונים לשוקיים או גבהים לשוקיים) חייבים להיות שווים באורכם.", "math_expression": "\u05db\u05df" }
        ],
        "final_answer": "כן, הם שווים תמיד.",
        "options": ["לא, רק התיכון לבסיס שונה.", "כן, הם שווים תמיד.", "רק במשולש שווה צלעות.", "רק אם הזווית ישרה."],
        "correctAnswer": 1
    },
    {
        "id": 72,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "Medium",
        "question_text": "נתון משולש ABC שבו AD הוא גם <strong>תיכון</strong> וגם <strong>חוצה זווית</strong>. מה ניתן להסיק על המשולש?",
        "hint": "אם קו אחד ממלא שני תפקידים 'חופפים', המשולש חייב להיות...",
        "solution_steps": [
            { "verbal_explanation": "תכונה זו (תיכון שהוא גם חוצה זווית) מתקיימת רק כאשר המשולש סימטרי ביחס לאותו קו.", "math_expression": "\u05e1\u05d9\u05de\u05d8\u05e8\u05d9\u05d4" },
            { "verbal_explanation": "לכן, הצלעות AB ו-AC חייבות להיות שוות, והמשולש הוא שווה שוקיים.", "math_expression": "AB = AC" }
        ],
        "final_answer": "הוא משולש שווה שוקיים.",
        "options": ["הוא משולש שווה צלעות.", "הוא משולש ישר זווית.", "הוא משולש שווה שוקיים.", "אין מספיק נתונים."],
        "correctAnswer": 2
    },
    {
        "id": 73,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "High",
        "question_text": "במשולש שווה צלעות, מה ניתן לומר על נקודת המפגש של התיכונים, הגבהים וחוצי הזוויות?",
        "hint": "במשולש שווה צלעות הכל שווה והכל סימטרי.",
        "solution_steps": [
            { "verbal_explanation": "במשולש שווה צלעות, כל קודקוד הוא ראש של 'משולש שווה שוקיים' (ביחס לצלעות האחרות).", "math_expression": "a=b=c" },
            { "verbal_explanation": "לכן כל תיכון הוא גם גובה וגם חוצה זווית. כתוצאה מכך, כולם נפגשים בדיוק באותה נקודה במרכז המשולש.", "math_expression": "\u05e0\u05e7\u05d5\u05d3\u05d4 \u05d0\u05d7\u05ea" }
        ],
        "final_answer": "כולם נפגשים באותה נקודה בדיוק.",
        "options": ["הם נפגשים בנקודות שונות.", "כולם נפגשים באותה נקודה בדיוק.", "הם אף פעם לא נפגשים.", "הם נפגשים רק על הצלעות."],
        "correctAnswer": 1
    },
    {
        "id": 74,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "Medium",
        "question_text": "במשולש ABC, הקטע AD הוא <strong>גובה</strong>. ידוע כי \u2221ADB = 3x + 30. מהו ערכו של x?",
        "hint": "גובה יוצר זווית של 90 מעלות. השוו את הביטוי ל-90.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: גובה יוצר זווית ישרה, לכן הזווית שווה ל-90 מעלות.", "math_expression": "3x + 30 = 90" },
            { "verbal_explanation": "שלב 2: נחסיר 30 משני האגפים: 3x = 60.", "math_expression": "3x = 60" },
            { "verbal_explanation": "שלב 3: נחלק ב-3 למציאת x.", "math_expression": "x = 20" }
        ],
        "final_answer": "20",
        "options": ["30", "20", "10", "90"],
        "correctAnswer": 1
    },
    {
        "id": 75,
        "subTopic": "תיכון, גובה וחוצה זווית",
        "difficulty": "High",
        "question_text": "במשולש שווה שוקיים ABC (AB=AC), הקטע AD הוא התיכון לבסיס. אם \u2221BAD = 25°, מהו גודלה של <strong>זווית הראש BAC</strong> כולה?",
        "hint": "במשולש שווה שוקיים, התיכון לבסיס הוא גם חוצה את זווית הראש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מאחר וזה משולש שווה שוקיים, התיכון AD הוא גם חוצה זווית הראש.", "math_expression": "\u2221BAD = \u2221CAD" },
            { "verbal_explanation": "שלב 2: אם חצי מזווית הראש הוא 25 מעלות, זווית הראש כולה גדולה פי 2.", "math_expression": "25 * 2 = 50" }
        ],
        "final_answer": "50 מעלות",
        "options": ["25 מעלות", "50 מעלות", "75 מעלות", "100 מעלות"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 7: דמיון משולשים (15 שאלות) ---
    // ==============================================================
    {
        "id": 76,
        "subTopic": "דמיון משולשים",
        "difficulty": "Low",
        "question_text": "מהי ההגדרה הבסיסית של <strong>משולשים דומים</strong> ($\sim$)?",
        "hint": "חישבו על צורה שעברה 'זום' (הגדלה או הקטנה). מה נשאר אותו דבר ומה משתנה?",
        "solution_steps": [
            { "verbal_explanation": "במשולשים דומים, כל הזוויות הפנימיות נשארות שוות בדיוק לאלו של המשולש המקורי.", "math_expression": "\u2221A=\u2221D, \u2221B=\u2221E, \u2221C=\u2221F" },
            { "verbal_explanation": "הצלעות אינן שוות, אך היחס (החילוק) בין כל זוג צלעות מתאימות הוא קבוע.", "math_expression": "AB/DE = BC/EF = AC/DF = k" }
        ],
        "final_answer": "זוויות שוות וצלעות פרופורציונליות.",
        "options": ["זוויות שוות וצלעות שוות.", "זוויות שוות וצלעות פרופורציונליות.", "רק הצלעות שוות.", "השטחים שלהם שווים."],
        "correctAnswer": 1
    },
    {
        "id": 77,
        "subTopic": "דמיון משולשים",
        "difficulty": "Low",
        "question_text": "מהו <strong>יחס הדמיון (k)</strong> בין משולש שצלעותיו 3, 4, 5 למשולש שצלעותיו 6, 8, 10?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='80'><polygon points='10,70 50,70 10,20' fill='#f1f5f9' stroke='#1e293b' stroke-width='2'/><text x='25' y='85' font-size='10'>4</text><text x='0' y='50' font-size='10'>3</text><polygon points='80,70 160,70 80,10' fill='#f8fafc' stroke='#1e293b' stroke-width='2'/><text x='115' y='85' font-size='10'>8</text><text x='70' y='45' font-size='10'>6</text></svg></div>",
        "hint": "חלקו צלע מהמשולש הגדול בצלע המתאימה לה מהמשולש הקטן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבחר זוג צלעות מתאימות, למשל הניצבים הקצרים: 6 ו-3.", "math_expression": "6 , 3" },
            { "verbal_explanation": "שלב 2: נחלק את צלע המשולש השני בצלע המשולש הראשון.", "math_expression": "6 / 3 = 2" },
            { "verbal_explanation": "שלב 3: נבדוק זוג נוסף כדי לוודא: 8 לחלק ל-4 זה גם 2. לכן יחס הדמיון הוא 2.", "math_expression": "k = 2" }
        ],
        "final_answer": "k = 2",
        "options": ["k = 1", "k = 2", "k = 0.5", "k = 3"],
        "correctAnswer": 1
    },
    {
        "id": 78,
        "subTopic": "דמיון משולשים",
        "difficulty": "Medium",
        "question_text": "מהו משפט הדמיון הנפוץ ביותר: <strong>ז.ז (Angle-Angle)</strong>?",
        "hint": "אם שתי זוויות שוות, האם השלישית חייבת להיות שווה גם היא?",
        "solution_steps": [
            { "verbal_explanation": "בכל משולש סכום הזוויות הוא 180. לכן, אם שתי זוויות שוות בשני משולשים, גם הזווית השלישית חייבת להיות שוה.", "math_expression": "\u03B11=\u03B12, \u03B21=\u03B22 \u2192 \u03B31=\u03B32" },
            { "verbal_explanation": "כאשר כל הזוויות שוות, המשולשים הם בעלי אותה צורה בדיוק.", "math_expression": "\u05d3\u05de\u05d9\u05d5\u05df" },
            { "verbal_explanation": "לפיכך, מספיק להראות שתי זוויות שוות כדי להוכיח שהמשולשים דומים.", "math_expression": "AA Similarity" }
        ],
        "final_answer": "מספיק ששתי זוויות יהיו שוות כדי שהמשולשים יהיו דומים.",
        "options": ["חייבים שכל הצלעות יהיו שוות.", "מספיק ששתי זוויות יהיו שוות כדי שהמשולשים יהיו דומים.", "הזווית חייבת להיות 90 מעלות.", "זה משפט חפיפה, לא דמיון."],
        "correctAnswer": 1
    },
    {
        "id": 79,
        "subTopic": "דמיון משולשים",
        "difficulty": "Medium",
        "question_text": "נתונים שני משולשים דומים $\Delta ABC \sim \Delta DEF$. יחס הדמיון הוא <strong>k = 3</strong>. אם אורך הצלע AB הוא <strong>4 ס\"מ</strong>, מהו אורך הצלע המתאימה <strong>DE</strong>?",
        "hint": "יחס דמיון 3 אומר שהמשולש השני גדול פי 3 מהראשון.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הקשר לפי סדר האותיות. הצלע AB מתאימה לצלע DE.", "math_expression": "AB \u2192 DE" },
            { "verbal_explanation": "שלב 2: יחס הדמיון k=3 אומר שכל צלע במשולש השני גדולה פי 3.", "math_expression": "DE = AB * k" },
            { "verbal_explanation": "שלב 3: נכפיל 4 ב-3 ונקבל את האורך המבוקש.", "math_expression": "4 * 3 = 12" }
        ],
        "final_answer": "12 ס\"מ",
        "options": ["7 ס\"מ", "12 ס\"מ", "1.33 ס\"מ", "4 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 80,
        "subTopic": "דמיון משולשים",
        "difficulty": "High",
        "question_text": "יחס הדמיון בין שני משולשים הוא <strong>k = 2</strong>. מה יהיה היחס בין <strong>השטחים</strong> שלהם?",
        "hint": "בשטח אנחנו מכפילים אורך ברוחב (שני ממדים). לכן כל הגדלה 'נספרת' פעמיים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: יחס הצלעות (וההיקפים) הוא k.", "math_expression": "k = 2" },
            { "verbal_explanation": "שלב 2: חוק גיאומטרי קובע שיחס השטחים בין צורות דומות שווה תמיד לריבוע של יחס הדמיון.", "math_expression": "Ratio of Areas = k²" },
            { "verbal_explanation": "שלב 3: נחשב 2 בריבוע (2 כפול 2) ונקבל 4.", "math_expression": "2² = 4" }
        ],
        "final_answer": "יחס השטחים הוא 4 (פי 4).",
        "options": ["פי 2", "פי 4", "פי 8", "פי 1"],
        "correctAnswer": 1
    },
    {
        "id": 81,
        "subTopic": "דמיון משולשים",
        "difficulty": "Medium",
        "question_text": "במשולש ABC העבירו קטע DE המקביל לבסיס BC. האם <strong>\\Delta ABC \sim \\Delta ADE</strong>?",
        "hint": "השתמשו בזוויות מתאימות בין ישרים מקבילים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זווית A משותפת לשני המשולשים (הקטן והגדול).", "math_expression": "\u2221A = \u2221A" },
            { "verbal_explanation": "שלב 2: מכיוון ש-DE מקביל ל-BC, נוצרות זוויות מתאימות שוות.", "math_expression": "\u2221ADE = \u2221ABC" },
            { "verbal_explanation": "שלב 3: לפי משפט דמיון ז.ז, המשולשים דומים.", "math_expression": "\u05db\u05df, \u05d3\u05d5\u05de\u05d9\u05dd" }
        ],
        "final_answer": "כן, לפי משפט ז.ז.",
        "options": ["לא, הם לא חופפים.", "כן, לפי משפט ז.ז.", "רק אם DE הוא אמצע הצלעות.", "רק אם המשולש ישר זווית."],
        "correctAnswer": 1
    },
    {
        "id": 82,
        "subTopic": "דמיון משולשים",
        "difficulty": "Low",
        "question_text": "אם שני משולשים <strong>חופפים</strong>, האם הם גם <strong>דומים</strong>?",
        "hint": "חפיפה היא מקרה פרטי שבו הכל שווה בדיוק.",
        "solution_steps": [
            { "verbal_explanation": "בחפיפה, כל הזוויות שוות. זהו התנאי הראשון לדמיון.", "math_expression": "\u2713 Angles" },
            { "verbal_explanation": "בחפיפה, יחס הצלעות הוא בדיוק 1 (כי הן שוות). זהו התנאי השני לדמיון.", "math_expression": "k = 1" },
            { "verbal_explanation": "לכן, כל שני משולשים חופפים הם גם דומים (ביחס דמיון 1).", "math_expression": "\u05db\u05df" }
        ],
        "final_answer": "כן, ביחס דמיון k=1.",
        "options": ["לא, חפיפה זה משהו אחר.", "כן, ביחס דמיון k=1.", "רק אם הם שווי צלעות.", "רק אם השטח שלהם גדול."],
        "correctAnswer": 1
    },
    {
        "id": 83,
        "subTopic": "דמיון משולשים",
        "difficulty": "Medium",
        "question_text": "נתונים שני משולשים ישרי זווית. בראשון יש זווית של <strong>30°</strong> ובשני יש זווית של <strong>60°</strong>. האם הם דומים?",
        "hint": "חשבו את הזווית השלישית בכל משולש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במשולש הראשון הזוויות הן 90, 30 והשלישית היא 60 (180-120).", "math_expression": "90, 30, 60" },
            { "verbal_explanation": "שלב 2: במשולש השני הזוויות הן 90, 60 והשלישית היא 30.", "math_expression": "90, 60, 30" },
            { "verbal_explanation": "שלב 3: לשני המשולשים יש בדיוק אותן זוויות, לכן הם דומים לפי ז.ז.", "math_expression": "\u05d3\u05d5\u05de\u05d9\u05dd" }
        ],
        "final_answer": "כן, לפי משפט ז.ז.",
        "options": ["כן", "לא", "רק אם היתר שווה", "אין מספיק נתונים"],
        "correctAnswer": 0
    },
    {
        "id": 84,
        "subTopic": "דמיון משולשים",
        "difficulty": "High",
        "question_text": "במשולשים דומים, יחס השטחים הוא <strong>9</strong>. מהו <strong>יחס הדמיון (k)</strong> בין הצלעות?",
        "hint": "זו השאלה ההפוכה: אם k בריבוע שווה ל-9, למה שווה k?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור את הנוסחה: יחס השטחים שווה ל-k בריבוע.", "math_expression": "k² = 9" },
            { "verbal_explanation": "שלב 2: כדי למצוא את k, נוציא שורש ריבועי מהמספר 9.", "math_expression": "k = \u221a9" },
            { "verbal_explanation": "שלב 3: השורש של 9 הוא 3. לכן יחס הדמיון הוא 3.", "math_expression": "k = 3" }
        ],
        "final_answer": "k = 3",
        "options": ["k = 9", "k = 81", "k = 3", "k = 4.5"],
        "correctAnswer": 2
    },
    {
        "id": 85,
        "subTopic": "דמיון משולשים",
        "difficulty": "Medium",
        "question_text": "נתונים שני משולשים שווי שוקיים. לשניהם יש <strong>זווית ראש</strong> שווה של <strong>50°</strong>. האם הם דומים?",
        "hint": "אם זווית הראש שווה, האם גם זוויות הבסיס יהיו שוות בשני המשולשים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בשניהם זווית הראש היא 50.", "math_expression": "50 = 50" },
            { "verbal_explanation": "שלב 2: זוויות הבסיס בשניהם יחושבו כ: (180-50) חלקי 2, שזה 65 מעלות.", "math_expression": "65 = 65" },
            { "verbal_explanation": "שלב 3: מאחר וכל הזוויות שוות בהתאמה, המשולשים דומים לפי ז.ז.", "math_expression": "\u05d3\u05d5\u05de\u05d9\u05dd" }
        ],
        "final_answer": "כן, לפי משפט ז.ז.",
        "options": ["כן", "לא", "רק אם השוקיים שוות", "רק אם הם חופפים"],
        "correctAnswer": 0
    },
    {
        "id": 86,
        "subTopic": "דמיון משולשים",
        "difficulty": "High",
        "question_text": "במשולש ABC, הנקודות D ו-E הן <strong>אמצעי הצלעות</strong> AB ו-AC. מהו <strong>יחס הדמיון</strong> בין המשולש הקטן ADE למשולש הגדול ABC?",
        "hint": "קטע המחבר אמצעי שתי צלעות נקרא 'קטע אמצעים' והוא שווה למחצית מהבסיס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הצלע AD היא חצי מהצלע AB (כי D היא האמצע).", "math_expression": "AD = 0.5 * AB" },
            { "verbal_explanation": "שלב 2: הצלע AE היא חצי מהצלע AC.", "math_expression": "AE = 0.5 * AC" },
            { "verbal_explanation": "שלב 3: היחס בין כל צלע קטנה לגדולה הוא חצי. לכן יחס הדמיון הוא 0.5.", "math_expression": "k = 0.5" }
        ],
        "final_answer": "k = 0.5 (חצי)",
        "options": ["k = 2", "k = 0.5", "k = 1", "k = 0.25"],
        "correctAnswer": 1
    },
    {
        "id": 87,
        "subTopic": "דמיון משולשים",
        "difficulty": "High",
        "question_text": "בהמשך לשאלה הקודמת (קטע אמצעים), אם שטח המשולש הגדול ABC הוא <strong>40 סמ\"ר</strong>, מהו שטח המשולש הקטן ADE?",
        "hint": "השתמשו ביחס השטחים (k בריבוע). מצאנו קודם ש-k = 0.5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: יחס הדמיון הוא חצי (0.5).", "math_expression": "k = 0.5" },
            { "verbal_explanation": "שלב 2: יחס השטחים הוא חצי בריבוע, שזה רבע (0.25).", "math_expression": "k² = 0.25 = 1/4" },
            { "verbal_explanation": "שלב 3: שטח המשולש הקטן הוא רבע משטח הגדול. 40 לחלק ל-4 שווה ל-10.", "math_expression": "40 / 4 = 10" }
        ],
        "final_answer": "10 סמ\"ר",
        "options": ["20 סמ\"ר", "10 סמ\"ר", "5 סמ\"ר", "30 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 88,
        "subTopic": "דמיון משולשים",
        "difficulty": "Medium",
        "question_text": "נתונים שני משולשים דומים. היקף המשולש הראשון הוא <strong>20 ס\"מ</strong> והיקף השני הוא <strong>60 ס\"מ</strong>. מהו יחס הדמיון k?",
        "hint": "היחס בין ההיקפים שווה בדיוק ליחס בין הצלעות (k).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: היקף הוא סכום צלעות (ממד אחד), ולכן הוא שומר על יחס הדמיון המקורי.", "math_expression": "Ratio of Perimeters = k" },
            { "verbal_explanation": "שלב 2: נחלק את ההיקף הגדול בקטן: 60 לחלק ל-20.", "math_expression": "60 / 20 = 3" },
            { "verbal_explanation": "שלב 3: יחס הדמיון הוא 3.", "math_expression": "k = 3" }
        ],
        "final_answer": "k = 3",
        "options": ["k = 3", "k = 9", "k = 2", "k = 40"],
        "correctAnswer": 0
    },
    {
        "id": 89,
        "subTopic": "דמיון משולשים",
        "difficulty": "Medium",
        "question_text": "משולש ABC דומה למשולש DEF. נתון: AB=5, BC=6, AC=7. במשולש השני הצלע הקצרה ביותר היא 10. מהו אורך הצלע <strong>הארוכה ביותר</strong> במשולש השני?",
        "hint": "מצאו קודם את k על ידי השוואת שתי הצלעות הקצרות ביותר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הצלע הקצרה בראשון היא 5. בשני היא 10. לכן k = 10/5 = 2.", "math_expression": "k = 2" },
            { "verbal_explanation": "שלב 2: הצלע הארוכה בראשון היא 7.", "math_expression": "Max = 7" },
            { "verbal_explanation": "שלב 3: נכפיל את הצלע הארוכה ביחס הדמיון: 7 כפול 2 שווה 14.", "math_expression": "7 * 2 = 14" }
        ],
        "final_answer": "14",
        "options": ["12", "14", "15", "20"],
        "correctAnswer": 1
    },
    {
        "id": 90,
        "subTopic": "דמיון משולשים",
        "difficulty": "Low",
        "question_text": "האם כל שני <strong>ריבועים</strong> בעולם דומים זה לזה?",
        "hint": "בדקו: האם הזוויות תמיד שוות? והאם היחס בין הצלעות תמיד נשמר?",
        "solution_steps": [
            { "verbal_explanation": "בכל ריבוע כל הזוויות הן 90 מעלות. לכן תנאי הזוויות תמיד מתקיים.", "math_expression": "90^\\circ = 90^\\circ" },
            { "verbal_explanation": "בכל ריבוע כל 4 הצלעות שוות. לכן היחס בין צלעות של ריבוע א' לריבוע ב' יהיה תמיד קבוע.", "math_expression": "a/b = a/b" },
            { "verbal_explanation": "מכאן שכל שני ריבועים (וכל שני מעגלים) דומים זה לזה תמיד.", "math_expression": "\u05db\u05df" }
        ],
        "final_answer": "כן, תמיד.",
        "options": ["לא, רק אם הם באותו גודל.", "כן, תמיד.", "רק אם הם בתוך מלבן.", "אי אפשר לדעת."],
        "correctAnswer": 1
    }
];
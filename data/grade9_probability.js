// ========================================================================
// שכבת גיל: כיתה ט' | נושא: הסתברות (48 שאלות)
// >>> גרסה 6 - רמה גבוהה, מתמטיקה טהורה ואיורי 3D סלקטיביים <<<
// ========================================================================

// ==========================================
// מאגר איורי פרימיום 3D (16 איורים שונים)
// ==========================================
const wSvg = (svg) => `\n<div dir='ltr' style='display:block; text-align:center; margin-top:20px; clear:both;'><svg viewBox='0 0 200 120' width='200' height='120'><defs><filter id='sh' x='-20%' y='-20%' width='140%' height='140%'><feDropShadow dx='2' dy='4' stdDeviation='3' flood-opacity='0.2'/></filter><linearGradient id='gGold' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#fde047'/><stop offset='100%' stop-color='#ca8a04'/></linearGradient><radialGradient id='rRed' cx='30%' cy='30%' r='70%'><stop offset='0%' stop-color='#fca5a5'/><stop offset='100%' stop-color='#dc2626'/></radialGradient><radialGradient id='rBlue' cx='30%' cy='30%' r='70%'><stop offset='0%' stop-color='#93c5fd'/><stop offset='100%' stop-color='#2563eb'/></radialGradient><radialGradient id='rGreen' cx='30%' cy='30%' r='70%'><stop offset='0%' stop-color='#86efac'/><stop offset='100%' stop-color='#16a34a'/></radialGradient><radialGradient id='rDark' cx='30%' cy='30%' r='70%'><stop offset='0%' stop-color='#94a3b8'/><stop offset='100%' stop-color='#1e293b'/></radialGradient></defs>${svg}</svg></div>`;

// תת נושא 1
const svg1_coin = wSvg(`<circle cx='100' cy='60' r='40' fill='url(#gGold)' filter='url(#sh)'/><circle cx='100' cy='60' r='30' fill='none' stroke='#a16207' stroke-width='2' stroke-dasharray='4,2'/><text x='100' y='68' font-family='sans-serif' font-size='22' font-weight='bold' fill='#713f12' text-anchor='middle'>עץ</text>`);
const svg1_dice = wSvg(`<rect x='40' y='30' width='50' height='50' rx='8' fill='url(#rRed)' filter='url(#sh)'/><circle cx='65' cy='55' r='5' fill='#fff'/><rect x='110' y='30' width='50' height='50' rx='8' fill='url(#rBlue)' filter='url(#sh)'/><circle cx='125' cy='45' r='5' fill='#fff'/><circle cx='145' cy='65' r='5' fill='#fff'/><circle cx='125' cy='65' r='5' fill='#fff'/><circle cx='145' cy='45' r='5' fill='#fff'/>`);
const svg1_spinner = wSvg(`<g filter='url(#sh)'><circle cx='100' cy='60' r='45' fill='#fca5a5'/><path d='M100 60 L145 60 A45 45 0 0 0 100 15 Z' fill='#93c5fd'/><path d='M100 60 L100 15 A45 45 0 0 0 55 60 Z' fill='#86efac'/><path d='M100 60 L55 60 A45 45 0 0 0 100 105 Z' fill='#fde047'/><circle cx='100' cy='60' r='8' fill='#1e293b'/><polygon points='100,60 115,35 95,35' fill='#1e293b'/></g>`);
const svg1_weather = wSvg(`<circle cx='80' cy='40' r='25' fill='url(#gGold)' filter='url(#sh)'/><path d='M70 70 A 20 20 0 0 1 110 50 A 25 25 0 0 1 155 65 A 15 15 0 0 1 150 90 L 75 90 A 15 15 0 0 1 70 70 Z' fill='#cbd5e1' filter='url(#sh)'/><path d='M90 95 L85 105 M110 95 L105 105 M130 95 L125 105' stroke='#3b82f6' stroke-width='3' stroke-linecap='round'/>`);

// תת נושא 2
const svg2_tree1 = wSvg(`<line x1='40' y1='60' x2='90' y2='25' stroke='#94a3b8' stroke-width='3'/><line x1='40' y1='60' x2='90' y2='95' stroke='#94a3b8' stroke-width='3'/><circle cx='40' cy='60' r='10' fill='url(#rDark)' filter='url(#sh)'/><circle cx='90' cy='25' r='10' fill='url(#rGreen)' filter='url(#sh)'/><circle cx='90' cy='95' r='10' fill='url(#rRed)' filter='url(#sh)'/><line x1='90' y1='25' x2='140' y2='10' stroke='#94a3b8' stroke-width='3'/><line x1='90' y1='25' x2='140' y2='40' stroke='#94a3b8' stroke-width='3'/><circle cx='140' cy='10' r='8' fill='url(#gGold)' filter='url(#sh)'/><circle cx='140' cy='40' r='8' fill='url(#gGold)' filter='url(#sh)'/>`);
const svg2_tree2 = wSvg(`<line x1='40' y1='60' x2='90' y2='25' stroke='#94a3b8' stroke-width='3'/><line x1='40' y1='60' x2='90' y2='95' stroke='#94a3b8' stroke-width='3'/><circle cx='40' cy='60' r='10' fill='url(#rBlue)' filter='url(#sh)'/><circle cx='90' cy='25' r='10' fill='url(#gGold)' filter='url(#sh)'/><circle cx='90' cy='95' r='10' fill='url(#rDark)' filter='url(#sh)'/><line x1='90' y1='95' x2='140' y2='80' stroke='#94a3b8' stroke-width='3'/><line x1='90' y1='95' x2='140' y2='110' stroke='#94a3b8' stroke-width='3'/><circle cx='140' cy='80' r='8' fill='url(#rRed)' filter='url(#sh)'/><circle cx='140' cy='110' r='8' fill='url(#rRed)' filter='url(#sh)'/>`);
const svg2_target = wSvg(`<circle cx='100' cy='60' r='50' fill='#ef4444' filter='url(#sh)'/><circle cx='100' cy='60' r='35' fill='#ffffff'/><circle cx='100' cy='60' r='20' fill='#ef4444'/><circle cx='100' cy='60' r='8' fill='#facc15'/><line x1='50' y1='60' x2='150' y2='60' stroke='#1e293b' stroke-width='1'/><line x1='100' y1='10' x2='100' y2='110' stroke='#1e293b' stroke-width='1'/>`);
const svg2_factory = wSvg(`<rect x='50' y='50' width='100' height='50' fill='#94a3b8' filter='url(#sh)'/><rect x='60' y='30' width='20' height='20' fill='#64748b'/><rect x='120' y='30' width='20' height='20' fill='#64748b'/><polygon points='50,50 70,10 90,50' fill='#475569'/><polygon points='110,50 130,10 150,50' fill='#475569'/><rect x='70' y='70' width='20' height='30' fill='#1e293b'/>`);

// תת נושא 3
const svg3_table6x6 = wSvg(`<rect x='50' y='10' width='100' height='100' fill='#ffffff' stroke='#1e293b' stroke-width='2' filter='url(#sh)'/><line x1='50' y1='26.6' x2='150' y2='26.6' stroke='#cbd5e1' stroke-width='1'/><line x1='50' y1='43.3' x2='150' y2='43.3' stroke='#cbd5e1' stroke-width='1'/><line x1='50' y1='60' x2='150' y2='60' stroke='#cbd5e1' stroke-width='1'/><line x1='50' y1='76.6' x2='150' y2='76.6' stroke='#cbd5e1' stroke-width='1'/><line x1='50' y1='93.3' x2='150' y2='93.3' stroke='#cbd5e1' stroke-width='1'/><line x1='66.6' y1='10' x2='66.6' y2='110' stroke='#cbd5e1' stroke-width='1'/><line x1='83.3' y1='10' x2='83.3' y2='110' stroke='#cbd5e1' stroke-width='1'/><line x1='100' y1='10' x2='100' y2='110' stroke='#cbd5e1' stroke-width='1'/><line x1='116.6' y1='10' x2='116.6' y2='110' stroke='#cbd5e1' stroke-width='1'/><line x1='133.3' y1='10' x2='133.3' y2='110' stroke='#cbd5e1' stroke-width='1'/><polygon points='150,10 50,110 66.6,110 150,26.6' fill='#bfdbfe' opacity='0.5'/>`);
const svg3_table4x4 = wSvg(`<rect x='60' y='20' width='80' height='80' fill='#ffffff' stroke='#1e293b' stroke-width='2' filter='url(#sh)'/><line x1='60' y1='40' x2='140' y2='40' stroke='#cbd5e1' stroke-width='1'/><line x1='60' y1='60' x2='140' y2='60' stroke='#cbd5e1' stroke-width='1'/><line x1='60' y1='80' x2='140' y2='80' stroke='#cbd5e1' stroke-width='1'/><line x1='80' y1='20' x2='80' y2='100' stroke='#cbd5e1' stroke-width='1'/><line x1='100' y1='20' x2='100' y2='100' stroke='#cbd5e1' stroke-width='1'/><line x1='120' y1='20' x2='120' y2='100' stroke='#cbd5e1' stroke-width='1'/><rect x='80' y='60' width='20' height='20' fill='#fca5a5' opacity='0.5'/><rect x='100' y='40' width='20' height='20' fill='#fca5a5' opacity='0.5'/>`);
const svg3_table_blocks = wSvg(`<g filter='url(#sh)'><path d='M70 40 L100 25 L130 40 L100 55 Z' fill='#bfdbfe' stroke='#3b82f6'/><path d='M70 40 L70 70 L100 85 L100 55 Z' fill='#93c5fd' stroke='#3b82f6'/><path d='M130 40 L130 70 L100 85 L100 55 Z' fill='#60a5fa' stroke='#3b82f6'/></g>`);
const svg3_axis = wSvg(`<line x1='40' y1='100' x2='160' y2='100' stroke='#1e293b' stroke-width='2'/><line x1='50' y1='110' x2='50' y2='20' stroke='#1e293b' stroke-width='2'/><polygon points='160,100 150,95 150,105' fill='#1e293b'/><polygon points='50,20 45,30 55,30' fill='#1e293b'/><circle cx='100' cy='60' r='4' fill='#ef4444'/><circle cx='120' cy='40' r='4' fill='#ef4444'/><circle cx='80' cy='80' r='4' fill='#ef4444'/>`);

// תת נושא 4
const svg4_urn_rb = wSvg(`<path d='M60 30 L140 30 L150 100 C150 110 140 115 100 115 C60 115 50 110 50 100 Z' fill='#f8fafc' stroke='#cbd5e1' stroke-width='3' filter='url(#sh)'/><ellipse cx='100' cy='30' rx='40' ry='10' fill='#e2e8f0' stroke='#94a3b8' stroke-width='2'/><circle cx='85' cy='95' r='12' fill='url(#rRed)'/><circle cx='115' cy='95' r='12' fill='url(#rBlue)'/><circle cx='100' cy='75' r='12' fill='url(#rRed)'/><circle cx='75' cy='65' r='12' fill='url(#rBlue)'/><circle cx='125' cy='65' r='12' fill='url(#rRed)'/>`);
const svg4_urn_gy = wSvg(`<path d='M70 20 L130 20 L145 90 C145 100 130 105 100 105 C70 105 55 100 55 90 Z' fill='#fefce8' stroke='#fde047' stroke-width='3' filter='url(#sh)'/><ellipse cx='100' cy='20' rx='30' ry='8' fill='#fef08a' stroke='#facc15' stroke-width='2'/><circle cx='90' cy='85' r='10' fill='url(#rGreen)'/><circle cx='110' cy='85' r='10' fill='url(#gGold)'/><circle cx='100' cy='68' r='10' fill='url(#gGold)'/><circle cx='80' cy='60' r='10' fill='url(#rGreen)'/><circle cx='120' cy='60' r='10' fill='url(#rGreen)'/>`);
const svg4_cards = wSvg(`<g filter='url(#sh)'><g transform='translate(60, 20) rotate(-15)'><rect x='0' y='0' width='40' height='60' fill='#fff' stroke='#cbd5e1' stroke-width='2' rx='3'/><text x='8' y='18' font-family='sans-serif' font-size='14' font-weight='bold' fill='#ef4444'>A</text></g><g transform='translate(90, 15) rotate(5)'><rect x='0' y='0' width='40' height='60' fill='#fff' stroke='#cbd5e1' stroke-width='2' rx='3'/><text x='8' y='18' font-family='sans-serif' font-size='14' font-weight='bold' fill='#1e293b'>K</text></g><g transform='translate(120, 30) rotate(20)'><rect x='0' y='0' width='40' height='60' fill='#fff' stroke='#cbd5e1' stroke-width='2' rx='3'/><text x='8' y='18' font-family='sans-serif' font-size='14' font-weight='bold' fill='#ef4444'>Q</text></g></g>`);
const svg4_box = wSvg(`<rect x='50' y='40' width='100' height='60' fill='#d97706' filter='url(#sh)'/><polygon points='50,40 70,20 170,20 150,40' fill='#f59e0b'/><polygon points='150,40 170,20 170,80 150,100' fill='#b45309'/><circle cx='80' cy='70' r='8' fill='url(#rBlue)'/><circle cx='100' cy='80' r='8' fill='url(#rRed)'/><circle cx='120' cy='65' r='8' fill='url(#rDark)'/>`);

const questionsDB = [

    // ==========================================================
    // תת נושא 1: הסתברות במאורע דו-שלבי (בלתי תלוי)
    // ==========================================================
    
    // 1-4 עם איורים
    {
        topic: "probability",
        subTopic: "הסתברות במאורע דו-שלבי",
        question_text: "זורקים מטבע הוגן פעמיים ברצף. מה ההסתברות שיתקבל עץ גם בזריקה הראשונה וגם בזריקה השנייה?" + svg1_coin,
        options: [
            "\\frac{1}{4}", 
            "\\frac{1}{2}", 
            "\\frac{1}{3}", 
            "\\frac{3}{4}"
        ],
        correctAnswer: 0,
        hint: "ההסתברות לעץ בהטלה אחת היא חצי. כיוון שההטלות בלתי תלויות, כופלים את ההסתברויות.",
        solution_steps: [
            { verbal_explanation: "ההסתברות לקבל עץ בהטלה הראשונה.", math_expression: "\\frac{1}{2}" },
            { verbal_explanation: "ההסתברות לקבל עץ בהטלה השנייה.", math_expression: "\\frac{1}{2}" },
            { verbal_explanation: "כפל הסתברויות של מאורעות בלתי תלויים.", math_expression: "\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}" }
        ],
        final_answer: "\\frac{1}{4}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות במאורע דו-שלבי",
        question_text: "מטילים שתי קוביות משחק הוגנות. מה ההסתברות שעל הקובייה הראשונה יתקבל המספר 3 ועל השנייה יתקבל מספר זוגי?" + svg1_dice,
        options: [
            "\\frac{1}{12}", 
            "\\frac{1}{6}", 
            "\\frac{1}{4}", 
            "\\frac{1}{18}"
        ],
        correctAnswer: 0,
        hint: "חשבו את ההסתברות לכל קובייה בנפרד (מספר זוגי זה 3 אפשרויות מתוך 6) והכפילו.",
        solution_steps: [
            { verbal_explanation: "ההסתברות לספרה שלוש בקובייה הראשונה.", math_expression: "\\frac{1}{6}" },
            { verbal_explanation: "ההסתברות למספר זוגי בקובייה השנייה (לאחר צמצום של שלוש שישיות).", math_expression: "\\frac{1}{2}" },
            { verbal_explanation: "נכפיל את שתי ההסתברויות.", math_expression: "\\frac{1}{6} \\times \\frac{1}{2} = \\frac{1}{12}" }
        ],
        final_answer: "\\frac{1}{12}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות במאורע דו-שלבי",
        question_text: "מסובבים סביבון הוגן המחולק לארבע גזרות שוות פעמיים ברציפות. גזרה אחת בלבד צבועה באדום. מה ההסתברות שהסביבון ייעצר על אדום בשתי הפעמים?" + svg1_spinner,
        options: [
            "\\frac{1}{16}", 
            "\\frac{1}{8}", 
            "\\frac{1}{4}", 
            "\\frac{2}{16}"
        ],
        correctAnswer: 0,
        hint: "ההסתברות לאדום בסיבוב יחיד היא רבע.",
        solution_steps: [
            { verbal_explanation: "ההסתברות לאדום בסיבוב הראשון.", math_expression: "\\frac{1}{4}" },
            { verbal_explanation: "ההסתברות לאדום בסיבוב השני.", math_expression: "\\frac{1}{4}" },
            { verbal_explanation: "נכפיל את ההסתברויות.", math_expression: "\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}" }
        ],
        final_answer: "\\frac{1}{16}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות במאורע דו-שלבי",
        question_text: "לפי התחזית, ההסתברות לגשם ביום שני היא שליש. ההסתברות לגשם ביום שלישי היא רבע. בהנחה שהימים בלתי תלויים, מה ההסתברות שיירד גשם בשני הימים ברצף?" + svg1_weather,
        options: [
            "\\frac{1}{12}", 
            "\\frac{1}{7}", 
            "\\frac{2}{12}", 
            "\\frac{1}{6}"
        ],
        correctAnswer: 0,
        hint: "כפל הסתברויות בסיסי של מאורעות רצופים.",
        solution_steps: [
            { verbal_explanation: "הסתברות לגשם ביום שני.", math_expression: "\\frac{1}{3}" },
            { verbal_explanation: "הסתברות לגשם ביום שלישי.", math_expression: "\\frac{1}{4}" },
            { verbal_explanation: "מכפלת ההסתברויות.", math_expression: "\\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{12}" }
        ],
        final_answer: "\\frac{1}{12}"
    },
    // 5-12 ללא איורים
    {
        topic: "probability",
        subTopic: "הסתברות במאורע דו-שלבי",
        question_text: "זורקים שתי קוביות משחק הוגנות. מה ההסתברות שעל שתיהן יתקבל בדיוק המספר 5?",
        options: [
            "\\frac{1}{36}", 
            "\\frac{1}{18}", 
            "\\frac{2}{6}", 
            "\\frac{1}{12}"
        ],
        correctAnswer: 0,
        hint: "ההסתברות לחמש בקובייה אחת היא שישית.",
        solution_steps: [
            { verbal_explanation: "ההסתברות לחמש בראשונה.", math_expression: "\\frac{1}{6}" },
            { verbal_explanation: "ההסתברות לחמש בשנייה.", math_expression: "\\frac{1}{6}" },
            { verbal_explanation: "נכפיל להתרחשות משותפת.", math_expression: "\\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36}" }
        ],
        final_answer: "\\frac{1}{36}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות במאורע דו-שלבי",
        question_text: "בתוך כד שמונה כדורים: חמישה שחורים ושלושה לבנים. דני שולף כדור, מחזיר אותו לכד, ושולף כדור נוסף. מה ההסתברות שישלוף כדור לבן בשתי הפעמים?",
        options: [
            "\\frac{9}{64}", 
            "\\frac{3}{8}", 
            "\\frac{6}{64}", 
            "\\frac{9}{56}"
        ],
        correctAnswer: 0,
        hint: "הוצאה עם החזרה אומרת שההסתברות בשליפה השנייה נשארת זהה לראשונה.",
        solution_steps: [
            { verbal_explanation: "ההסתברות ללבן בשליפה הראשונה (שלושה מתוך שמונה).", math_expression: "\\frac{3}{8}" },
            { verbal_explanation: "ההסתברות ללבן בשליפה השנייה.", math_expression: "\\frac{3}{8}" },
            { verbal_explanation: "נכפיל את השברים.", math_expression: "\\frac{3}{8} \\times \\frac{3}{8} = \\frac{9}{64}" }
        ],
        final_answer: "\\frac{9}{64}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות במאורע דו-שלבי",
        question_text: "במפעל שני פסי ייצור. פס א' מייצר רכיב פגום בהסתברות של עשירית. פס ב' מייצר פגום בהסתברות של חמישית. דוגמים רכיב מכל פס. מה ההסתברות ששני הרכיבים תקינים?",
        options: [
            "\\frac{18}{25}", 
            "\\frac{9}{50}", 
            "\\frac{7}{10}", 
            "\\frac{4}{25}"
        ],
        correctAnswer: 0,
        hint: "חשבו את ההסתברות לתקין בכל פס (המשלים לאחד) והכפילו.",
        solution_steps: [
            { verbal_explanation: "ההסתברות לרכיב תקין בפס א' (המשלים לעשירית).", math_expression: "\\frac{9}{10}" },
            { verbal_explanation: "ההסתברות לרכיב תקין בפס ב' (המשלים לחמישית).", math_expression: "\\frac{4}{5}" },
            { verbal_explanation: "נכפיל את ההסתברויות.", math_expression: "\\frac{9}{10} \\times \\frac{4}{5} = \\frac{36}{50}" },
            { verbal_explanation: "נצמצם את השבר בחלוקה לשתיים.", math_expression: "\\frac{18}{25}" }
        ],
        final_answer: "\\frac{18}{25}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות במאורע דו-שלבי",
        question_text: "קשת יורה למטרה. ההסתברות שיפגע במרכז היא שבע עשיריות. הוא יורה שתי יריות. מה ההסתברות שיחטיא את המרכז בדיוק בירייה אחת מתוך השתיים?",
        options: [
            "\\frac{21}{50}", 
            "\\frac{42}{100}", 
            "\\frac{9}{100}", 
            "\\frac{49}{100}"
        ],
        correctAnswer: 0,
        hint: "ישנם שני תרחישים רלוונטיים: (פגע ואז החטיא) או (החטיא ואז פגע). חיברו את שניהם.",
        solution_steps: [
            { verbal_explanation: "ההסתברות להחטיא היא המשלים לשבע עשיריות.", math_expression: "\\frac{3}{10}" },
            { verbal_explanation: "מסלול ראשון: פגע ואז החטיא.", math_expression: "\\frac{7}{10} \\times \\frac{3}{10} = \\frac{21}{100}" },
            { verbal_explanation: "המסלול השני (החטיא ואז פגע) נותן תוצאה זהה. נחבר את שניהם.", math_expression: "\\frac{21}{100} + \\frac{21}{100} = \\frac{42}{100}" },
            { verbal_explanation: "נצמצם בחלוקה לשתיים.", math_expression: "\\frac{21}{50}" }
        ],
        final_answer: "\\frac{21}{50}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות במאורע דו-שלבי",
        question_text: "זורקים שתי קוביות משחק. מה ההסתברות שלפחות קובייה אחת תראה את המספר 6?",
        options: [
            "\\frac{11}{36}", 
            "\\frac{1}{36}", 
            "\\frac{10}{36}", 
            "\\frac{25}{36}"
        ],
        correctAnswer: 0,
        hint: "במקום לחבר הרבה מקרים, מצאו את ההסתברות שאף קובייה לא תראה 6, וחסרו מ-1.",
        solution_steps: [
            { verbal_explanation: "ההסתברות שקובייה בודדת לא תראה שש היא חמש שישיות.", math_expression: "\\frac{5}{6}" },
            { verbal_explanation: "ההסתברות ששתי הקוביות לא יראו שש.", math_expression: "\\frac{5}{6} \\times \\frac{5}{6} = \\frac{25}{36}" },
            { verbal_explanation: "ההסתברות שלפחות אחת תראה שש היא השלם פחות המאורע המשלים.", math_expression: "1 - \\frac{25}{36} = \\frac{11}{36}" }
        ],
        final_answer: "\\frac{11}{36}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות במאורע דו-שלבי",
        question_text: "מטילים שלוש קוביות משחק הוגנות בבת אחת. מה ההסתברות שכל שלוש הקוביות יראו את אותו המספר בדיוק (למשל 2-2-2)?",
        options: [
            "\\frac{1}{36}", 
            "\\frac{1}{216}", 
            "\\frac{1}{18}", 
            "\\frac{1}{72}"
        ],
        correctAnswer: 0,
        hint: "הקובייה הראשונה יכולה להיות כל מספר. הקוביות הבאות חייבות להראות את אותו המספר שהראתה הראשונה.",
        solution_steps: [
            { verbal_explanation: "הקובייה הראשונה מראה מספר כלשהו (הסתברות ודאית של אחד).", math_expression: "1" },
            { verbal_explanation: "הקובייה השנייה חייבת להתאים לראשונה.", math_expression: "\\frac{1}{6}" },
            { verbal_explanation: "הקובייה השלישית חייבת גם היא להתאים.", math_expression: "\\frac{1}{6}" },
            { verbal_explanation: "נכפיל הכל.", math_expression: "1 \\times \\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36}" }
        ],
        final_answer: "\\frac{1}{36}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות במאורע דו-שלבי",
        question_text: "בחפיסת קלפים יש 52 קלפים, 13 מתוכם מסוג תלתן. שולפים קלף, מחזירים אותו, ושולפים קלף נוסף. מה ההסתברות שבשתי הפעמים לא נשלף קלף מסוג תלתן?",
        options: [
            "\\frac{9}{16}", 
            "\\frac{1}{16}", 
            "\\frac{3}{8}", 
            "\\frac{7}{16}"
        ],
        correctAnswer: 0,
        hint: "ההסתברות לשלוף תלתן היא 13 חלקי 52, שזה רבע. לכן ההסתברות לא לשלוף תלתן היא המשלים.",
        solution_steps: [
            { verbal_explanation: "ההסתברות לקלף שאינו תלתן היא שלושה רבעים.", math_expression: "\\frac{3}{4}" },
            { verbal_explanation: "מכיוון שהקלף הוחזר, ההסתברות נשארת זהה בשליפה השנייה.", math_expression: "\\frac{3}{4}" },
            { verbal_explanation: "נכפיל את שתי ההסתברויות.", math_expression: "\\frac{3}{4} \\times \\frac{3}{4} = \\frac{9}{16}" }
        ],
        final_answer: "\\frac{9}{16}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות במאורע דו-שלבי",
        question_text: "שחקן מטיל מטבע הוגן 3 פעמים. מה ההסתברות שיקבל בדיוק פעמיים 'עץ' ופעם אחת 'פלי' (ללא חשיבות לסדר)?",
        options: [
            "\\frac{3}{8}", 
            "\\frac{1}{8}", 
            "\\frac{1}{4}", 
            "\\frac{1}{2}"
        ],
        correctAnswer: 0,
        hint: "יש 3 מסלולים אפשריים שעונים לתנאי (עץ-עץ-פלי, עץ-פלי-עץ, פלי-עץ-עץ).",
        solution_steps: [
            { verbal_explanation: "ההסתברות לכל רצף ספציפי של שלוש הטלות היא שמינית.", math_expression: "\\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}" },
            { verbal_explanation: "כיוון שישנם שלושה מסלולים שונים שמובילים לתוצאה המבוקשת, נחבר אותם.", math_expression: "\\frac{1}{8} + \\frac{1}{8} + \\frac{1}{8} = \\frac{3}{8}" }
        ],
        final_answer: "\\frac{3}{8}"
    },

    // --------------------------------------------------------
    // תת נושא 2: חישובים בעזרת דיאגרמת עץ
    // --------------------------------------------------------
    
    // 13-16 עם איורים
    {
        topic: "probability",
        subTopic: "חישובים בעזרת דיאגרמת עץ",
        question_text: "ההסתברות שטיסת הבוקר תמריא בזמן היא שבע עשיריות. ההסתברות שטיסת הערב תמריא בזמן תלויה בבוקר: אם טיסת בוקר יצאה בזמן, ההסתברות שהערב תצא בזמן היא שמונה עשיריות. אם הבוקר איחרה, ההסתברות שהערב תצא בזמן יורדת לארבע עשיריות. מה ההסתברות ששתי הטיסות ימריאו בזמן?" + svg2_tree1,
        options: [
            "\\frac{14}{25}", 
            "\\frac{7}{25}", 
            "\\frac{12}{25}", 
            "\\frac{28}{100}"
        ],
        correctAnswer: 0,
        hint: "בדיאגרמת העץ אנו מחפשים את ענף ההצלחה המלא.",
        solution_steps: [
            { verbal_explanation: "הסתברות שטיסה ראשונה יצאה בזמן.", math_expression: "\\frac{7}{10}" },
            { verbal_explanation: "הסתברות שטיסה שנייה תצא בזמן בהינתן שהראשונה יצאה בזמן.", math_expression: "\\frac{8}{10}" },
            { verbal_explanation: "נכפיל את הערכים ונצמצם את השבר בחלוקה לארבע.", math_expression: "\\frac{7}{10} \\times \\frac{8}{10} = \\frac{56}{100} = \\frac{14}{25}" }
        ],
        final_answer: "\\frac{14}{25}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת דיאגרמת עץ",
        question_text: "בהמשך לשאלת הטיסות: מה ההסתברות שבדיוק טיסה אחת תתעכב?" + svg2_tree2,
        options: [
            "\\frac{13}{50}", 
            "\\frac{33}{100}", 
            "\\frac{14}{25}", 
            "\\frac{7}{25}"
        ],
        correctAnswer: 0,
        hint: "חברו שני ענפים בעץ: (בזמן ואז איחור) ועוד (איחור ואז בזמן).",
        solution_steps: [
            { verbal_explanation: "מסלול א': ראשונה בזמן והשנייה באיחור (המשלים לשמונה עשיריות).", math_expression: "\\frac{7}{10} \\times \\frac{2}{10} = \\frac{14}{100}" },
            { verbal_explanation: "מסלול ב': ראשונה באיחור (שלוש עשיריות) והשנייה בזמן בתנאי זה (ארבע עשיריות).", math_expression: "\\frac{3}{10} \\times \\frac{4}{10} = \\frac{12}{100}" },
            { verbal_explanation: "חיבור המסלולים וצמצום השבר לשבר פשוט ביותר.", math_expression: "\\frac{14}{100} + \\frac{12}{100} = \\frac{26}{100} = \\frac{13}{50}" }
        ],
        final_answer: "\\frac{13}{50}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת דיאגרמת עץ",
        question_text: "חולה עובר בדיקה למחלה נדירה הקיימת אצל שתי מאיות מהאוכלוסייה. אם אדם חולה, הבדיקה תזהה אותו בוודאות (1). אם הוא בריא, הבדיקה תטעה ותכריז שהוא חולה בסיכוי של מאית אחת. מה ההסתברות שאדם אקראי יקבל תוצאה 'חיובית' (חולה)?" + svg2_target,
        options: [
            "\\frac{149}{5000}", 
            "\\frac{3}{100}", 
            "\\frac{2}{100}", 
            "\\frac{1}{50}"
        ],
        correctAnswer: 0,
        hint: "תוצאה חיובית מגיעה משני ענפים: חולה שזוהה כחולה, ובריא שזוהה בטעות כחולה.",
        solution_steps: [
            { verbal_explanation: "מסלול חולה שזוהה נכון.", math_expression: "\\frac{2}{100} \\times 1 = \\frac{2}{100} = \\frac{100}{5000}" },
            { verbal_explanation: "מסלול בריא (תשעים ושמונה מאיות) שזוהה בטעות כחולה (מאית).", math_expression: "\\frac{98}{100} \\times \\frac{1}{100} = \\frac{98}{10000} = \\frac{49}{5000}" },
            { verbal_explanation: "נחבר את המסלולים.", math_expression: "\\frac{100}{5000} + \\frac{49}{5000} = \\frac{149}{5000}" }
        ],
        final_answer: "\\frac{149}{5000}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת דיאגרמת עץ",
        question_text: "במפעל רכב, חצי מהמכוניות מיוצרות בפס א' והחצי השני בפס ב'. ההסתברות לפגם בצבע בפס א' היא מאית. בפס ב', ההסתברות לפגם היא חמש מאיות. מה ההסתברות שרכב שנדגם אקראית מהרחבה יהיה פגום בצבעו?" + svg2_factory,
        options: [
            "\\frac{3}{100}", 
            "\\frac{1}{50}", 
            "\\frac{7}{100}", 
            "\\frac{1}{100}"
        ],
        correctAnswer: 0,
        hint: "חשבו את המסלול של מפעל א' ופגם, ועוד המסלול של מפעל ב' ופגם.",
        solution_steps: [
            { verbal_explanation: "מסלול פס א' (חצי מהרכבים) ופגם.", math_expression: "\\frac{1}{2} \\times \\frac{1}{100} = \\frac{1}{200}" },
            { verbal_explanation: "מסלול פס ב' ופגם.", math_expression: "\\frac{1}{2} \\times \\frac{5}{100} = \\frac{5}{200}" },
            { verbal_explanation: "חיבור המסלולים וצמצום בשתיים.", math_expression: "\\frac{1}{200} + \\frac{5}{200} = \\frac{6}{200} = \\frac{3}{100}" }
        ],
        final_answer: "\\frac{3}{100}"
    },
    // 17-24 ללא איורים
    {
        topic: "probability",
        subTopic: "חישובים בעזרת דיאגרמת עץ",
        question_text: "קבוצת כדורסל קולעת עונשין. שחקן קולע בהסתברות קבועה של שלוש חמישיות. אם הוא זורק שתי זריקות, מה ההסתברות שיקלע לפחות זריקה אחת?",
        options: [
            "\\frac{21}{25}", 
            "\\frac{16}{25}", 
            "\\frac{9}{25}", 
            "\\frac{4}{25}"
        ],
        correctAnswer: 0,
        hint: "לחשב את המשלים (להחטיא פעמיים) ולחסר מאחד.",
        solution_steps: [
            { verbal_explanation: "ההסתברות להחטיא בזריקה בודדת היא שתי חמישיות.", math_expression: "1 - \\frac{3}{5} = \\frac{2}{5}" },
            { verbal_explanation: "ההסתברות להחטיא פעמיים ברצף.", math_expression: "\\frac{2}{5} \\times \\frac{2}{5} = \\frac{4}{25}" },
            { verbal_explanation: "לפחות קליעה אחת היא השלם פחות החטאה כפולה.", math_expression: "1 - \\frac{4}{25} = \\frac{21}{25}" }
        ],
        final_answer: "\\frac{21}{25}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת דיאגרמת עץ",
        question_text: "מטילים קוביית משחק הוגנת. אם יוצא מספר אי-זוגי, המשחק מסתיים בהפסד. אם יוצא מספר זוגי, השחקן זוכה להטיל מטבע. אם במטבע יצא פלי, הוא מנצח. מה ההסתברות לנצח במשחק?",
        options: [
            "\\frac{1}{4}", 
            "\\frac{1}{2}", 
            "\\frac{3}{4}", 
            "\\frac{1}{6}"
        ],
        correctAnswer: 0,
        hint: "יש רק מסלול אחד בעץ שמוביל לניצחון.",
        solution_steps: [
            { verbal_explanation: "ההסתברות למספר זוגי בקובייה היא שלוש שישיות (חצי).", math_expression: "\\frac{1}{2}" },
            { verbal_explanation: "ההסתברות לפלי במטבע היא חצי.", math_expression: "\\frac{1}{2}" },
            { verbal_explanation: "נכפיל את שלבי המסלול המנצח.", math_expression: "\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}" }
        ],
        final_answer: "\\frac{1}{4}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת דיאגרמת עץ",
        question_text: "מועמד עובר ראיון מקיף בשני שלבים. ההסתברות לעבור את השלב הראשון היא חצי. אם עבר, ההסתברות לעבור את המבחן המעשי היא שליש. מה ההסתברות שהמועמד לא יתקבל לעבודה?",
        options: [
            "\\frac{5}{6}", 
            "\\frac{1}{6}", 
            "\\frac{2}{3}", 
            "\\frac{1}{2}"
        ],
        correctAnswer: 0,
        hint: "חשבו את ההסתברות לקבלה מלאה וחסרו מאחד.",
        solution_steps: [
            { verbal_explanation: "ההסתברות להצליח בשני השלבים גם יחד (המסלול היחיד שמוביל לקבלה).", math_expression: "\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}" },
            { verbal_explanation: "אי קבלה היא המאורע המשלים להצלחה המלאה.", math_expression: "1 - \\frac{1}{6} = \\frac{5}{6}" }
        ],
        final_answer: "\\frac{5}{6}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת דיאגרמת עץ",
        question_text: "חברת שליחויות מעבירה שבע עשיריות מהחבילות בציר הצפוני, והשאר בדרומי. הסיכוי לעיכוב בצפון הוא שתי עשיריות. הסיכוי לעיכוב בדרום הוא ארבע עשיריות. מה ההסתברות הכללית שחבילה תגיע ללא עיכוב?",
        options: [
            "\\frac{37}{50}", 
            "\\frac{13}{50}", 
            "\\frac{14}{25}", 
            "\\frac{3}{5}"
        ],
        correctAnswer: 0,
        hint: "חברו את שני המסלולים שמובילים להגעה בזמן (המשלים לעיכוב).",
        solution_steps: [
            { verbal_explanation: "מסלול צפוני בזמן (שבע עשיריות כפול שמונה עשיריות).", math_expression: "\\frac{7}{10} \\times \\frac{8}{10} = \\frac{56}{100}" },
            { verbal_explanation: "מסלול דרומי בזמן (שלוש עשיריות כפול שש עשיריות).", math_expression: "\\frac{3}{10} \\times \\frac{6}{10} = \\frac{18}{100}" },
            { verbal_explanation: "נחבר את המסלולים ונצמצם את השבר.", math_expression: "\\frac{56}{100} + \\frac{18}{100} = \\frac{74}{100} = \\frac{37}{50}" }
        ],
        final_answer: "\\frac{37}{50}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת דיאגרמת עץ",
        question_text: "תלמיד מתלבט אם להכין שיעורי בית. ההסתברות שיכין היא שני שלישים. אם הכין, ההסתברות לציון טוב במבחן הפתע היא תשע עשיריות. אם לא הכין, ההסתברות לציון טוב היא רק שלוש עשיריות. מה ההסתברות שיקבל ציון טוב?",
        options: [
            "\\frac{7}{10}", 
            "\\frac{3}{5}", 
            "\\frac{1}{2}", 
            "\\frac{4}{5}"
        ],
        correctAnswer: 0,
        hint: "חברו מסלול של (הכין והצליח) עם המסלול של (לא הכין והצליח).",
        solution_steps: [
            { verbal_explanation: "מסלול הכנה והצלחה.", math_expression: "\\frac{2}{3} \\times \\frac{9}{10} = \\frac{18}{30}" },
            { verbal_explanation: "מסלול אי-הכנה והצלחה.", math_expression: "\\frac{1}{3} \\times \\frac{3}{10} = \\frac{3}{30}" },
            { verbal_explanation: "נחבר את שני המסלולים ונצמצם את התוצאה הסופית בשלוש.", math_expression: "\\frac{18}{30} + \\frac{3}{30} = \\frac{21}{30} = \\frac{7}{10}" }
        ],
        final_answer: "\\frac{7}{10}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת דיאגרמת עץ",
        question_text: "ההסתברות לעבור מבחן ראשון היא שישית. אם התלמיד עבר, ההסתברות שיעבור את השני היא חצי. אם נכשל בראשון, ההסתברות לעבור את השני היא עשירית. מה ההסתברות שהתלמיד ייכשל בשני המבחנים יחד?",
        options: [
            "\\frac{3}{4}", 
            "\\frac{2}{3}", 
            "\\frac{5}{6}", 
            "\\frac{1}{10}"
        ],
        correctAnswer: 0,
        hint: "זהו המסלול של כישלון ואז שוב כישלון.",
        solution_steps: [
            { verbal_explanation: "ההסתברות לכישלון במבחן הראשון.", math_expression: "\\frac{5}{6}" },
            { verbal_explanation: "ההסתברות לכישלון בשני תחת התנאי שנכשל בראשון (המשלים לעשירית).", math_expression: "\\frac{9}{10}" },
            { verbal_explanation: "נכפיל את הערכים לאורך הענף ונצמצם בחמש-עשרה.", math_expression: "\\frac{5}{6} \\times \\frac{9}{10} = \\frac{45}{60} = \\frac{3}{4}" }
        ],
        final_answer: "\\frac{3}{4}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת דיאגרמת עץ",
        question_text: "קבוצת תלמידים יצאה לטיול. ההסתברות שיבחרו במסלול המים היא חצי. אם בחרו בו, ההסתברות שיירטבו היא תשע עשיריות. אם בחרו ביבש, ההסתברות להירטב היא שתי עשיריות. מה ההסתברות שתלמיד אקראי נרטב בטיול?",
        options: [
            "\\frac{11}{20}", 
            "\\frac{9}{20}", 
            "\\frac{11}{100}", 
            "\\frac{1}{2}"
        ],
        correctAnswer: 0,
        hint: "חברו את שני המסלולים שמובילים להירטבות.",
        solution_steps: [
            { verbal_explanation: "מסלול המים והירטבות.", math_expression: "\\frac{1}{2} \\times \\frac{9}{10} = \\frac{9}{20}" },
            { verbal_explanation: "מסלול יבש והירטבות.", math_expression: "\\frac{1}{2} \\times \\frac{2}{10} = \\frac{2}{20}" },
            { verbal_explanation: "סכום המסלולים.", math_expression: "\\frac{9}{20} + \\frac{2}{20} = \\frac{11}{20}" }
        ],
        final_answer: "\\frac{11}{20}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת דיאגרמת עץ",
        question_text: "נהג בוחר בכביש 1 בהסתברות של שלושה רבעים. אם נסע שם, ההסתברות לפקק היא חמישית. אם נסע בכביש החלופי (443), ההסתברות לפקק היא שתי חמישיות. מה ההסתברות שהנהג ייתקע בפקק?",
        options: [
            "\\frac{1}{4}", 
            "\\frac{3}{20}", 
            "\\frac{1}{5}", 
            "\\frac{7}{20}"
        ],
        correctAnswer: 0,
        hint: "סכמו את ההסתברויות של שני המסלולים המסתיימים בפקק.",
        solution_steps: [
            { verbal_explanation: "מסלול כביש אחד עם פקק.", math_expression: "\\frac{3}{4} \\times \\frac{1}{5} = \\frac{3}{20}" },
            { verbal_explanation: "מסלול כביש חלופי (רבע) עם פקק.", math_expression: "\\frac{1}{4} \\times \\frac{2}{5} = \\frac{2}{20}" },
            { verbal_explanation: "סכום וצמצום בחמש.", math_expression: "\\frac{3}{20} + \\frac{2}{20} = \\frac{5}{20} = \\frac{1}{4}" }
        ],
        final_answer: "\\frac{1}{4}"
    },

    // --------------------------------------------------------
    // תת נושא 3: חישובים בעזרת טבלה דו-ממדית (שאלות 25-36)
    // --------------------------------------------------------
    
    // 25-28 עם איורים
    {
        topic: "probability",
        subTopic: "חישובים בעזרת טבלה דו-ממדית",
        question_text: "מטילים שתי קוביות משחק הוגנות (מרחב מדגם של 36 תוצאות בטבלה). מה ההסתברות שסכום המספרים שיתקבל יהיה בדיוק 8?" + svg3_table6x6,
        options: [
            "\\frac{5}{36}", 
            "\\frac{1}{6}", 
            "\\frac{7}{36}", 
            "\\frac{1}{9}"
        ],
        correctAnswer: 0,
        hint: "חפשו את התאים בטבלה שבהם סכום השורה והעמודה נותן 8.",
        solution_steps: [
            { verbal_explanation: "סך המשבצות בטבלה הדו-ממדית.", math_expression: "6 \\times 6 = 36" },
            { verbal_explanation: "הזוגות הנותנים סכום 8 מתחילים מ-(2,6) ויורדים באלכסון.", math_expression: "5" },
            { verbal_explanation: "מציבים חמש חלקי שלושים ושש. השבר לא מצטמצם.", math_expression: "\\frac{5}{36}" }
        ],
        final_answer: "\\frac{5}{36}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת טבלה דו-ממדית",
        question_text: "מסובבים שני סביבונים הממוספרים 1, 2, 3, 4. מרכיבים טבלת תוצאות בגודל 4 על 4. מה ההסתברות שסכום המספרים בטבלה יהיה בדיוק 5?" + svg3_table4x4,
        options: [
            "\\frac{1}{4}", 
            "\\frac{1}{8}", 
            "\\frac{3}{16}", 
            "\\frac{5}{16}"
        ],
        correctAnswer: 0,
        hint: "בטבלה קטנה של ארבע על ארבע, כמה תאים מניבים סכום חמש?",
        solution_steps: [
            { verbal_explanation: "מרחב המדגם של הטבלה הקטנה.", math_expression: "4 \\times 4 = 16" },
            { verbal_explanation: "זוגות לסכום 5: (1,4), (2,3), (3,2), (4,1). סך הכל 4 משבצות.", math_expression: "4" },
            { verbal_explanation: "נציב ונצמצם בארבע.", math_expression: "\\frac{4}{16} = \\frac{1}{4}" }
        ],
        final_answer: "\\frac{1}{4}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת טבלה דו-ממדית",
        question_text: "מטילים שתי קוביות משחק הוגנות. מה ההסתברות שגם בקובייה הראשונה וגם בשנייה יתקבל מספר ראשוני (2, 3, או 5)?" + svg3_table_blocks,
        options: [
            "\\frac{1}{4}", 
            "\\frac{1}{6}", 
            "\\frac{2}{9}", 
            "\\frac{1}{3}"
        ],
        correctAnswer: 0,
        hint: "יש 3 מספרים ראשוניים בכל קובייה. החיתוך שלהם בטבלה יוצר ריבוע של משבצות.",
        solution_steps: [
            { verbal_explanation: "כמות תאי החיתוך בטבלה מחושבת על ידי הכפלת הכמויות.", math_expression: "3 \\times 3 = 9" },
            { verbal_explanation: "ההסתברות היא 9 תאים מתאימים מתוך סך כל 36 התאים. נצמצם בתשע.", math_expression: "\\frac{9}{36} = \\frac{1}{4}" }
        ],
        final_answer: "\\frac{1}{4}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת טבלה דו-ממדית",
        question_text: "מטילים שתי קוביות משחק. מה ההסתברות שההפרש בין המספר שיופיע בקובייה הראשונה למספר בשנייה (הראשון פחות השני) הוא בדיוק 1 חיובי?" + svg3_axis,
        options: [
            "\\frac{5}{36}", 
            "\\frac{1}{6}", 
            "\\frac{1}{12}", 
            "\\frac{5}{18}"
        ],
        correctAnswer: 0,
        hint: "זה אומר שהראשונה גדולה באחד. חפשו את התאים הסמוכים לאלכסון המרכזי.",
        solution_steps: [
            { verbal_explanation: "הזוגות שבהם השמאלי גדול ב-1: (2,1), (3,2), (4,3), (5,4), (6,5).", math_expression: "5" },
            { verbal_explanation: "הסדר ההפוך ייתן תוצאה שלילית, לכן יש רק חמש אפשרויות.", math_expression: "\\frac{5}{36}" }
        ],
        final_answer: "\\frac{5}{36}"
    },
    // 29-36 ללא איורים
    {
        topic: "probability",
        subTopic: "חישובים בעזרת טבלה דו-ממדית",
        question_text: "מטילים שתי קוביות משחק. מתוך הטבלה, מה ההסתברות שמכפלת התוצאות תהיה בדיוק 12?",
        options: [
            "\\frac{1}{9}", 
            "\\frac{1}{12}", 
            "\\frac{5}{36}", 
            "\\frac{1}{6}"
        ],
        correctAnswer: 0,
        hint: "אלו מספרים מכפלתם 12? כל זוג מופיע פעמיים בטבלה.",
        solution_steps: [
            { verbal_explanation: "המספרים שמכפלתם שתים-עשרה הם (3,4) ו-(2,6). בטבלה הם מופיעים גם בסדר הפוך, סך הכל ארבע משבצות.", math_expression: "4" },
            { verbal_explanation: "נציב ונצמצם בארבע.", math_expression: "\\frac{4}{36} = \\frac{1}{9}" }
        ],
        final_answer: "\\frac{1}{9}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת טבלה דו-ממדית",
        question_text: "מטילים שתי קוביות משחק. מה ההסתברות שסכום שתי הקוביות יהיה גדול מ-9?",
        options: [
            "\\frac{1}{6}", 
            "\\frac{1}{12}", 
            "\\frac{5}{36}", 
            "\\frac{1}{4}"
        ],
        correctAnswer: 0,
        hint: "סכום שגדול מתשע חייב להיות 10, 11 או 12.",
        solution_steps: [
            { verbal_explanation: "סכום 10: (4,6), (5,5), (6,4). סכום 11: (5,6), (6,5). סכום 12: (6,6).", math_expression: "6" },
            { verbal_explanation: "שש משבצות מתוך השלושים ושש. נצמצם בשש.", math_expression: "\\frac{6}{36} = \\frac{1}{6}" }
        ],
        final_answer: "\\frac{1}{6}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת טבלה דו-ממדית",
        question_text: "מטילים שתי קוביות משחק. מה ההסתברות שמכפלת התוצאות תהיה מספר אי-זוגי?",
        options: [
            "\\frac{1}{4}", 
            "\\frac{1}{2}", 
            "\\frac{1}{3}", 
            "\\frac{1}{6}"
        ],
        correctAnswer: 0,
        hint: "מכפלה היא אי-זוגית אך ורק אם כל אחד מהגורמים הוא אי-זוגי בעצמו.",
        solution_steps: [
            { verbal_explanation: "יש שלושה מספרים אי-זוגיים בכל קובייה. החיתוך בטבלה יכיל תשע משבצות.", math_expression: "3 \\times 3 = 9" },
            { verbal_explanation: "ההסתברות היא תשע חלקי שלושים ושש, שאחרי צמצום בתשע מגיעים לרבע.", math_expression: "\\frac{9}{36} = \\frac{1}{4}" }
        ],
        final_answer: "\\frac{1}{4}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת טבלה דו-ממדית",
        question_text: "במשחק קלפים מיוחד יש כרטיסים צהובים (ממוספרים 1 עד 3) וכרטיסים ירוקים (ממוספרים 1 עד 4). שולפים כרטיס אחד מכל צבע ובונים טבלה. מה ההסתברות שמכפלת המספרים שייצאו תהיה שווה ל-4?",
        options: [
            "\\frac{1}{6}", 
            "\\frac{1}{12}", 
            "\\frac{1}{4}", 
            "\\frac{1}{3}"
        ],
        correctAnswer: 0,
        hint: "בטבלה יש 3 שורות ו-4 עמודות. מרחב המדגם הוא 12.",
        solution_steps: [
            { verbal_explanation: "מרחב המדגם (גודל הטבלה).", math_expression: "3 \\times 4 = 12" },
            { verbal_explanation: "תאים בהם המכפלה היא 4: (1 צהוב, 4 ירוק) ו-(2 צהוב, 2 ירוק). אין 4 צהוב.", math_expression: "2" },
            { verbal_explanation: "נצמצם את השבר (חלוקה בשתיים).", math_expression: "\\frac{2}{12} = \\frac{1}{6}" }
        ],
        final_answer: "\\frac{1}{6}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת טבלה דו-ממדית",
        question_text: "מטילים שתי קוביות משחק. מה ההסתברות שרק קובייה אחת תראה את המספר 4 (כלומר הקובייה השנייה לא מראה 4)?",
        options: [
            "\\frac{5}{18}", 
            "\\frac{1}{6}", 
            "\\frac{11}{36}", 
            "\\frac{1}{4}"
        ],
        correctAnswer: 0,
        hint: "בטבלה, אלו כל התאים בשורת ה-4 ובעמודת ה-4, פרט לנקודת המפגש ביניהן (התא 4,4).",
        solution_steps: [
            { verbal_explanation: "אפשרויות שהראשונה היא ארבע והשנייה לא (חמש אפשרויות).", math_expression: "5" },
            { verbal_explanation: "אפשרויות שהשנייה היא ארבע והראשונה לא (חמש אפשרויות).", math_expression: "5" },
            { verbal_explanation: "נחבר את הכמויות ונצמצם את השבר בחלוקה בשתיים.", math_expression: "\\frac{10}{36} = \\frac{5}{18}" }
        ],
        final_answer: "\\frac{5}{18}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת טבלה דו-ממדית",
        question_text: "מטילים קוביית משחק הוגנת ומסובבים סביבון עליו הספרות 1 עד 3. מה ההסתברות שסכום שני המספרים בטבלת האפשרויות יהיה בדיוק 4?",
        options: [
            "\\frac{1}{6}", 
            "\\frac{1}{9}", 
            "\\frac{2}{9}", 
            "\\frac{1}{18}"
        ],
        correctAnswer: 0,
        hint: "הטבלה כאן מורכבת מ-6 שורות ו-3 עמודות.",
        solution_steps: [
            { verbal_explanation: "כמות משבצות כוללת בטבלה.", math_expression: "6 \\times 3 = 18" },
            { verbal_explanation: "משבצות לסכום 4: (1,3), (2,2), (3,1). אלו 3 משבצות.", math_expression: "3" },
            { verbal_explanation: "נחלק ונצמצם בשלוש.", math_expression: "\\frac{3}{18} = \\frac{1}{6}" }
        ],
        final_answer: "\\frac{1}{6}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת טבלה דו-ממדית",
        question_text: "מטילים שתי קוביות משחק. מה ההסתברות שהמספר בקובייה הראשונה יהיה כפול במדויק מהמספר בשנייה?",
        options: [
            "\\frac{1}{12}", 
            "\\frac{1}{9}", 
            "\\frac{1}{18}", 
            "\\frac{1}{6}"
        ],
        correctAnswer: 0,
        hint: "חפשו את התאים בטבלה מהסוג (2,1) שבו השמאלי כפול מהימני.",
        solution_steps: [
            { verbal_explanation: "הזוגות שמקיימים שהשמאלי כפול מהימני הם: (2,1), (4,2) ו-(6,3).", math_expression: "3" },
            { verbal_explanation: "אין יותר זוגות אפשריים. מציבים את השלוש מתוך השלושים ושש ומצמצמים בשלוש.", math_expression: "\\frac{3}{36} = \\frac{1}{12}" }
        ],
        final_answer: "\\frac{1}{12}"
    },
    {
        topic: "probability",
        subTopic: "חישובים בעזרת טבלה דו-ממדית",
        question_text: "מטילים שתי קוביות משחק. מה ההסתברות שההפרש בין המספרים הוא אפס (דאבל)?",
        options: [
            "\\frac{1}{6}", 
            "\\frac{1}{12}", 
            "\\frac{5}{36}", 
            "\\frac{1}{3}"
        ],
        correctAnswer: 0,
        hint: "אלו המשבצות באלכסון המרכזי של הטבלה.",
        solution_steps: [
            { verbal_explanation: "ההפרש הוא אפס רק כשהמספרים זהים.", math_expression: "6" },
            { verbal_explanation: "ההסתברות היא שש חלקי שלושים ושש. נצמצם בשש.", math_expression: "\\frac{6}{36} = \\frac{1}{6}" }
        ],
        final_answer: "\\frac{1}{6}"
    },

    // --------------------------------------------------------
    // תת נושא 4: הסתברות מותנית (הוצאה ללא החזרה) (שאלות 37-48)
    // --------------------------------------------------------
    
    // 37-40 עם איורים
    {
        topic: "probability",
        subTopic: "הסתברות מותנית (הוצאה ללא החזרה)",
        question_text: "בקופסה יש 4 כדורים אדומים ו-6 כדורים כחולים. מוציאים באקראי כדור אחד ללא החזרה, ואז מוציאים כדור שני. מה ההסתברות ששני הכדורים שהוצאו הם אדומים?" + svg4_urn_rb,
        options: [
            "\\frac{2}{15}", 
            "\\frac{16}{100}", 
            "\\frac{1}{5}", 
            "\\frac{2}{9}"
        ],
        correctAnswer: 0,
        hint: "בהוצאה השנייה ללא החזרה, מספר הכדורים בשק קטן באחד, וכך גם מספר האדומים.",
        solution_steps: [
            { verbal_explanation: "ההסתברות להוציא כדור אדום בפעם הראשונה.", math_expression: "\\frac{4}{10}" },
            { verbal_explanation: "נותרו תשעה כדורים, מתוכם שלושה אדומים. נצמצם לשליש.", math_expression: "\\frac{3}{9} = \\frac{1}{3}" },
            { verbal_explanation: "נכפיל את ההסתברויות ונצמצם בחלוקה לשתיים.", math_expression: "\\frac{4}{10} \\times \\frac{1}{3} = \\frac{4}{30} = \\frac{2}{15}" }
        ],
        final_answer: "\\frac{2}{15}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות מותנית (הוצאה ללא החזרה)",
        question_text: "בצנצנת מיוחדת ישנן 5 סוכריות לימון ו-5 סוכריות תפוח. יעל מוציאה סוכרייה, אוכלת אותה, ומוציאה נוספת. מה ההסתברות שאכלה שתי סוכריות תפוח?" + svg4_urn_gy,
        options: [
            "\\frac{2}{9}", 
            "\\frac{1}{4}", 
            "\\frac{5}{18}", 
            "\\frac{1}{5}"
        ],
        correctAnswer: 0,
        hint: "בפעם הראשונה יש 5 מתוך 10 סוכריות. עדכנו את הכמויות לקראת ההוצאה השנייה.",
        solution_steps: [
            { verbal_explanation: "ההסתברות לתפוח בהוצאה הראשונה היא חצי.", math_expression: "\\frac{5}{10} = \\frac{1}{2}" },
            { verbal_explanation: "נותרו 9 סוכריות בסך הכל, ורק 4 מתוכן בטעם תפוח.", math_expression: "\\frac{4}{9}" },
            { verbal_explanation: "מכפלת ההסתברויות, וצמצום בחלוקה ל-2.", math_expression: "\\frac{1}{2} \\times \\frac{4}{9} = \\frac{4}{18} = \\frac{2}{9}" }
        ],
        final_answer: "\\frac{2}{9}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות מותנית (הוצאה ללא החזרה)",
        question_text: "מחפיסה של עשרה קלפים מיוחדים הממוספרים מ-1 ועד 10, מושכים שני קלפים בזה אחר זה ללא החזרה. מה ההסתברות ששניהם יהיו קלפים זוגיים?" + svg4_cards,
        options: [
            "\\frac{2}{9}", 
            "\\frac{1}{4}", 
            "\\frac{5}{18}", 
            "\\frac{1}{5}"
        ],
        correctAnswer: 0,
        hint: "ישנם 5 קלפים זוגיים (2, 4, 6, 8, 10). זכרו להפחית אחד בשליפה השנייה.",
        solution_steps: [
            { verbal_explanation: "ההסתברות למשוך זוגי בפעם הראשונה היא חצי.", math_expression: "\\frac{5}{10} = \\frac{1}{2}" },
            { verbal_explanation: "נותרו בקופה תשעה קלפים, מתוכם ארבעה זוגיים.", math_expression: "\\frac{4}{9}" },
            { verbal_explanation: "נכפיל את ההסתברויות המותנות ונצמצם בשתיים.", math_expression: "\\frac{1}{2} \\times \\frac{4}{9} = \\frac{4}{18} = \\frac{2}{9}" }
        ],
        final_answer: "\\frac{2}{9}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות מותנית (הוצאה ללא החזרה)",
        question_text: "בקופסת הפתעות יש 6 כדורים לבנים ו-4 שחורים. מוציאים שני כדורים ללא החזרה. מה ההסתברות ששני הכדורים יהיו בעלי צבעים שונים?" + svg4_box,
        options: [
            "\\frac{8}{15}", 
            "\\frac{24}{100}", 
            "\\frac{48}{100}", 
            "\\frac{7}{15}"
        ],
        correctAnswer: 0,
        hint: "צבעים שונים פירושם שני מסלולים נפרדים: 'לבן ואז שחור', או 'שחור ואז לבן'.",
        solution_steps: [
            { verbal_explanation: "מסלול א' (לבן, שחור).", math_expression: "\\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90}" },
            { verbal_explanation: "מסלול ב' (שחור, לבן).", math_expression: "\\frac{4}{10} \\times \\frac{6}{9} = \\frac{24}{90}" },
            { verbal_explanation: "נחבר את המסלולים ונצמצם את השבר הסופי בחלוקה בשש.", math_expression: "\\frac{24}{90} + \\frac{24}{90} = \\frac{48}{90} = \\frac{8}{15}" }
        ],
        final_answer: "\\frac{8}{15}"
    },
    // 41-48 ללא איורים
    {
        topic: "probability",
        subTopic: "הסתברות מותנית (הוצאה ללא החזרה)",
        question_text: "בכד 3 כדורים צהובים ו-7 ירוקים. מוציאים שני כדורים ללא החזרה. מה ההסתברות שהראשון צהוב והשני ירוק?",
        options: [
            "\\frac{7}{30}", 
            "\\frac{21}{100}", 
            "\\frac{1}{4}", 
            "\\frac{3}{10}"
        ],
        correctAnswer: 0,
        hint: "הראשון שיוצא הוא צהוב, ולכן כמות הירוקים בכד לא משתנה לקראת ההוצאה השנייה.",
        solution_steps: [
            { verbal_explanation: "הסתברות לצהוב בהוצאה ראשונה מתוך עשרה.", math_expression: "\\frac{3}{10}" },
            { verbal_explanation: "נותרו תשעה כדורים, והירוקים נשארו שבעה.", math_expression: "\\frac{7}{9}" },
            { verbal_explanation: "נכפיל את השברים ונצמצם (נחלק בשלוש).", math_expression: "\\frac{3}{10} \\times \\frac{7}{9} = \\frac{21}{90} = \\frac{7}{30}" }
        ],
        final_answer: "\\frac{7}{30}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות מותנית (הוצאה ללא החזרה)",
        question_text: "בקופסת שוקולד 3 חטיפים מרירים ו-5 חלביים. יונתן שולף חטיף, אוכל אותו, ושולף חטיף נוסף. מה ההסתברות שאכל שני שוקולדים מרירים?",
        options: [
            "\\frac{3}{28}", 
            "\\frac{9}{64}", 
            "\\frac{1}{8}", 
            "\\frac{2}{7}"
        ],
        correctAnswer: 0,
        hint: "עדכנו את הכמות הכללית של החטיפים ואת כמות המרירים לפני השליפה השנייה.",
        solution_steps: [
            { verbal_explanation: "שליפה ראשונה של מריר מתוך שמונה.", math_expression: "\\frac{3}{8}" },
            { verbal_explanation: "שליפה שנייה של מריר (נותרו שניים מתוך שבעה).", math_expression: "\\frac{2}{7}" },
            { verbal_explanation: "נכפיל את השברים ונצמצם בחלוקה לשתיים.", math_expression: "\\frac{3}{8} \\times \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}" }
        ],
        final_answer: "\\frac{3}{28}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות מותנית (הוצאה ללא החזרה)",
        question_text: "בכיתה 12 בנות ו-8 בנים. נבחרים באקראי שני תלמידים לאותו צוות. מה ההסתברות שייבחרו שתי בנות?",
        options: [
            "\\frac{33}{95}", 
            "\\frac{9}{25}", 
            "\\frac{11}{30}", 
            "\\frac{36}{100}"
        ],
        correctAnswer: 0,
        hint: "בחירת תפקידים שקולה להוצאה ללא החזרה מתוך המאגר של עשרים תלמידים.",
        solution_steps: [
            { verbal_explanation: "ההסתברות לבחור בת בראשונה שווה לשלוש חמישיות.", math_expression: "\\frac{12}{20} = \\frac{3}{5}" },
            { verbal_explanation: "ההסתברות לבחור בת שנייה מתוך התשעה-עשר שנותרו.", math_expression: "\\frac{11}{19}" },
            { verbal_explanation: "נכפיל את ההסתברויות.", math_expression: "\\frac{3}{5} \\times \\frac{11}{19} = \\frac{33}{95}" }
        ],
        final_answer: "\\frac{33}{95}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות מותנית (הוצאה ללא החזרה)",
        question_text: "במגירה 4 כפתורים כחולים, 3 אדומים ו-2 ירוקים. מוציאים שני כפתורים ברצף ללא החזרה. מה ההסתברות ששניהם ייצאו כחולים?",
        options: [
            "\\frac{1}{6}", 
            "\\frac{16}{81}", 
            "\\frac{4}{27}", 
            "\\frac{1}{8}"
        ],
        correctAnswer: 0,
        hint: "יש 9 כפתורים במגירה בהתחלה.",
        solution_steps: [
            { verbal_explanation: "שליפה ראשונה של כחול.", math_expression: "\\frac{4}{9}" },
            { verbal_explanation: "שליפה שנייה של כחול מתוך השארית (שלוש שמיניות).", math_expression: "\\frac{3}{8}" },
            { verbal_explanation: "נכפיל את שני השברים ונקבל שתים עשרה חלקי שבעים ושתיים. נצמצם.", math_expression: "\\frac{4}{9} \\times \\frac{3}{8} = \\frac{12}{72} = \\frac{1}{6}" }
        ],
        final_answer: "\\frac{1}{6}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות מותנית (הוצאה ללא החזרה)",
        question_text: "בסלסלה 5 תפוחים ו-4 תפוזים. ילד אוכל פרי ואחותו אוכלת פרי נוסף. מה ההסתברות ששניהם אכלו את אותו הסוג?",
        options: [
            "\\frac{4}{9}", 
            "\\frac{5}{9}", 
            "\\frac{1}{2}", 
            "\\frac{32}{81}"
        ],
        correctAnswer: 0,
        hint: "חברו את מסלול (תפוח-תפוח) למסלול (תפוז-תפוז).",
        solution_steps: [
            { verbal_explanation: "מסלול תפוחים (חמש תשיעיות כפול ארבע שמיניות).", math_expression: "\\frac{5}{9} \\times \\frac{4}{8} = \\frac{20}{72}" },
            { verbal_explanation: "מסלול תפוזים (ארבע תשיעיות כפול שלוש שמיניות).", math_expression: "\\frac{4}{9} \\times \\frac{3}{8} = \\frac{12}{72}" },
            { verbal_explanation: "נחבר את המסלולים ונצמצם בחלוקה לשמונה.", math_expression: "\\frac{20}{72} + \\frac{12}{72} = \\frac{32}{72} = \\frac{4}{9}" }
        ],
        final_answer: "\\frac{4}{9}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות מותנית (הוצאה ללא החזרה)",
        question_text: "לשומרת 10 מפתחות, ורק אחד פותח את הדלת. היא מנסה באקראי וזורקת מפתחות שגויים. מה ההסתברות שתצליח בדיוק בניסיון השני?",
        options: [
            "\\frac{1}{10}", 
            "\\frac{1}{9}", 
            "\\frac{1}{100}", 
            "\\frac{2}{9}"
        ],
        correctAnswer: 0,
        hint: "חייב להתרחש הרצף הבא: כישלון בניסיון הראשון, והצלחה בניסיון השני.",
        solution_steps: [
            { verbal_explanation: "הסתברות לכישלון בניסיון הראשון.", math_expression: "\\frac{9}{10}" },
            { verbal_explanation: "הסתברות להצלחה בניסיון השני מתוך התשעה שנותרו.", math_expression: "\\frac{1}{9}" },
            { verbal_explanation: "נכפיל את ההסתברויות, התשע מצטמצם ונשארת רק עשירית.", math_expression: "\\frac{9}{10} \\times \\frac{1}{9} = \\frac{1}{10}" }
        ],
        final_answer: "\\frac{1}{10}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות מותנית (הוצאה ללא החזרה)",
        question_text: "בקופסה 7 פתקים אדומים ו-3 צהובים. מגרילים שני פתקים ברצף ללא החזרה. מה ההסתברות שיעלה בגורל לפחות פתק אחד צהוב?",
        options: [
            "\\frac{8}{15}", 
            "\\frac{7}{15}", 
            "\\frac{1}{15}", 
            "\\frac{14}{30}"
        ],
        correctAnswer: 0,
        hint: "מצאו את המאורע המשלים: אף צהוב (כלומר שניהם אדומים), וחסרו מאחד.",
        solution_steps: [
            { verbal_explanation: "המאורע המשלים הוא שניהם אדומים. שבע עשיריות כפול שש תשיעיות.", math_expression: "\\frac{7}{10} \\times \\frac{6}{9} = \\frac{42}{90}" },
            { verbal_explanation: "נחסר מהשלם (אחד).", math_expression: "1 - \\frac{42}{90} = \\frac{48}{90}" },
            { verbal_explanation: "נצמצם את השבר על ידי חלוקה בשש.", math_expression: "\\frac{8}{15}" }
        ],
        final_answer: "\\frac{8}{15}"
    },
    {
        topic: "probability",
        subTopic: "הסתברות מותנית (הוצאה ללא החזרה)",
        question_text: "בשקית 6 מדליות: 3 זהב, 2 כסף ו-1 ארד. שולפים שתי מדליות ללא החזרה. מה ההסתברות שתישלף מדליית זהב אחת וכסף אחת (בכל סדר שהוא)?",
        options: [
            "\\frac{2}{5}", 
            "\\frac{1}{5}", 
            "\\frac{1}{6}", 
            "\\frac{3}{10}"
        ],
        correctAnswer: 0,
        hint: "הסדר אינו משנה. חברו שני מסלולים (זהב ואז כסף + כסף ואז זהב).",
        solution_steps: [
            { verbal_explanation: "מסלול ראשון: זהב (שלוש שישיות) ואז כסף (שתיים חמישיות).", math_expression: "\\frac{3}{6} \\times \\frac{2}{5} = \\frac{6}{30}" },
            { verbal_explanation: "מסלול שני: כסף (שתי שישיות) ואז זהב (שלוש חמישיות).", math_expression: "\\frac{2}{6} \\times \\frac{3}{5} = \\frac{6}{30}" },
            { verbal_explanation: "נחבר את שני המסלולים החלופיים ונצמצם את השבר בחלוקה לשש.", math_expression: "\\frac{6}{30} + \\frac{6}{30} = \\frac{12}{30} = \\frac{2}{5}" }
        ],
        final_answer: "\\frac{2}{5}"
    }

];
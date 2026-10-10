const tasks = {
  classroom: {
    number: '01', shortTitle: '教室降温', title: '怎样让午后的教室更凉快？',
    summary: '分析三组实测数据，为东侧教室提出低成本、可验证的降温方案。',
    subtitle: '用数据选择方案，并完成“主张—证据—推理”论证。',
    scenarioTitle: '东侧教室的午后难题',
    scenarioText: '连续一周，八年级 2 班在 14:00—16:00 的室温高于相邻教室。学校希望在预算有限、不新增空调的前提下改善学习环境。',
    facts: [{ icon: 'thermometer', label: '峰值温度', value: '32.1°C' }, { icon: 'wallet-cards', label: '预算上限', value: '2,000 元' }, { icon: 'calendar-clock', label: '验证周期', value: '5 天' }],
    hypothesisLabel: '如果采取……，那么……，因为……',
    hypothesisPlaceholder: '例如：如果在午后关闭东侧遮光帘并保持对流通风，那么……',
    options: [{ value: '遮光帘', icon: 'panel-top-close', note: '降低太阳辐射' }, { value: '对流通风', icon: 'wind', note: '促进热量交换' }, { value: '绿植蒸腾', icon: 'sprout', note: '增加蒸发散热' }],
    chart: { title: '三种方案的 5 日观测', labels: ['周一', '周二', '周三', '周四', '周五'], min: 28, max: 33, tick: 1, unit: '°C', series: [{ name: '基线', color: '#9ba59f', values: [31.4, 31.8, 32.1, 31.6, 31.9] }, { name: '遮光帘', color: '#2f6b50', values: [28.8, 29.1, 29.3, 28.9, 29.0] }, { name: '对流通风', color: '#c47b2b', values: [29.8, 30.2, 30.4, 29.7, 30.0] }] },
    table: { headers: ['方案', '平均降温', '成本', '噪声影响', '证据可靠度'], rows: [['遮光帘', '2.6°C', '¥1,680', '无', '高'], ['对流通风', '1.8°C', '¥320', '轻微', '中'], ['绿植蒸腾', '0.5°C', '¥760', '无', '低']] },
    source: '数据由校内同型教室连续观测 5 天；传感器误差 ±0.2°C。绿植组仅有 2 天完整数据。',
    evidence: ['遮光帘平均降温 2.6°C，效果最明显', '遮光帘成本 1,680 元，低于预算上限', '5 天数据完整，证据可靠度高', '对流通风成本更低但降温较少'],
    welcome: '先别急着选降温最多的方案。学校提出了哪三个限制条件？',
    replies: { '比较证据': '先确定比较标准：效果、成本、稳定性和副作用。哪一项是学校的硬约束？哪一项证据最可靠？', '检查推理': '你的结论是否同时解释了“为什么有效”和“为什么适合这个场景”？试着指出证据与主张之间的因果关系。', '发现局限': '比较每组数据的观测天数、测量误差和环境条件。哪一组最可能因样本不足而高估效果？' },
    transferPlaceholder: '如果换成西侧教室，你会怎样重新验证？'
  },
  'heat-island': {
    number: '02', shortTitle: '城市热岛', title: '城市热岛是如何形成的？',
    summary: '比较不同地表和时段的温度，解释城市中心为何升温更快、夜间降温更慢。',
    subtitle: '从地表覆盖、植被和人为热源中寻找热岛形成的证据链。',
    scenarioTitle: '为什么城市夜晚迟迟不凉？',
    scenarioText: '气象社团发现，晴朗少风的夏日夜晚，城市中心仍比郊区明显偏热。市民感受到的闷热并不会随着日落立刻消失，请用观测数据解释这一现象。',
    facts: [{ icon: 'thermometer-sun', label: '中心峰值', value: '39.2°C' }, { icon: 'move-up-right', label: '城乡温差', value: '最高 4.3°C' }, { icon: 'clock-3', label: '观测周期', value: '连续 24 小时' }],
    hypothesisLabel: '如果城市地表……，那么昼夜温度会……，因为……',
    hypothesisPlaceholder: '例如：如果不透水地表吸收并储存更多太阳辐射，那么夜间……',
    options: [{ value: '不透水地表', icon: 'building-2', note: '吸热快、散热慢' }, { value: '植被覆盖', icon: 'trees', note: '遮阴与蒸腾降温' }, { value: '人为热排放', icon: 'factory', note: '交通与设备持续放热' }],
    chart: { title: '不同地表测点的 24 小时温度', labels: ['06时', '10时', '14时', '18时', '22时'], min: 24, max: 40, tick: 4, unit: '°C', series: [{ name: '中心广场', color: '#b75e4c', values: [27.2, 34.5, 39.2, 35.8, 31.4] }, { name: '城市林荫地', color: '#2f6b50', values: [25.8, 30.2, 33.1, 29.3, 26.4] }, { name: '郊区农田', color: '#4a78a8', values: [24.9, 29.0, 31.0, 27.2, 24.6] }] },
    table: { headers: ['测点', '14时温度', '22时温度', '地表特征', '证据可靠度'], rows: [['中心广场', '39.2°C', '31.4°C', '沥青、建筑密集', '高'], ['城市林荫地', '33.1°C', '26.4°C', '乔木覆盖 72%', '高'], ['郊区农田', '31.0°C', '24.6°C', '土壤与作物', '中']] },
    source: '数据为教学用模拟观测，三个测点使用同型号传感器；当日天气晴、平均风速低于 1.5 m/s，郊区测点缺少 02 时记录。',
    evidence: ['14 时中心广场比郊区高 8.2°C', '22 时中心广场仍比郊区高 6.8°C', '林荫地峰值比中心广场低 6.1°C', '三个测点天气条件与传感器型号一致'],
    welcome: '先区分“白天升温快”和“夜间降温慢”。哪一组数据更能证明热量被城市地表储存？',
    replies: { '比较证据': '比较同一时刻的不同测点，再比较同一测点从 14 时到 22 时的降温幅度。哪种比较能减少天气变化的干扰？', '检查推理': '你是否把地表材料、植被蒸腾和人为热源分别连接到了观测数据？哪些是数据直接支持的，哪些仍是合理推测？', '发现局限': '三个测点是否完全相同？建筑高度、风速和交通量可能怎样影响结果？一天的数据能否代表整个夏季？' },
    transferPlaceholder: '如果研究另一座城市，你会怎样选择测点并控制变量？'
  },
  pond: {
    number: '03', shortTitle: '池塘生态', title: '校园池塘水质为何发生变化？',
    summary: '追踪营养盐、藻类覆盖、水温与溶解氧，解释池塘生态系统的连锁变化。',
    subtitle: '利用多指标观测，建立水质变化与生态影响之间的因果解释。',
    scenarioTitle: '池塘里的鱼为什么浮到水面？',
    scenarioText: '连续高温和一次降雨后，校园池塘水色变绿，清晨出现鱼群浮头。生态小组采集了三个位置的水样，需要判断水质发生了什么变化，并提出下一步验证方案。',
    facts: [{ icon: 'droplets', label: '最低溶解氧', value: '3.1 mg/L' }, { icon: 'leaf', label: '藻类覆盖', value: '最高 68%' }, { icon: 'calendar-days', label: '连续观测', value: '5 次' }],
    hypothesisLabel: '如果池塘中的……增加，那么……会变化，因为……',
    hypothesisPlaceholder: '例如：如果雨水带入更多营养盐并促进藻类繁殖，那么清晨溶解氧会……',
    options: [{ value: '营养盐输入', icon: 'test-tubes', note: '促进藻类繁殖' }, { value: '藻类呼吸分解', icon: 'microscope', note: '消耗水中氧气' }, { value: '水温升高', icon: 'thermometer-sun', note: '降低氧气溶解度' }],
    chart: { title: '三个测点的清晨溶解氧变化', labels: ['5月6日', '5月8日', '5月10日', '5月12日', '5月14日'], min: 2, max: 8, tick: 1, unit: 'mg/L', series: [{ name: '进水口', color: '#4a78a8', values: [7.8, 7.6, 7.4, 7.2, 7.1] }, { name: '池塘中央', color: '#2f6b50', values: [7.2, 6.6, 5.8, 4.9, 4.3] }, { name: '排水侧', color: '#c47b2b', values: [6.8, 5.9, 4.7, 3.6, 3.1] }] },
    table: { headers: ['测点', '硝酸盐', '藻类覆盖', '水温', '清晨溶解氧'], rows: [['进水口', '1.2 mg/L', '18%', '24.6°C', '7.1 mg/L'], ['池塘中央', '2.8 mg/L', '51%', '27.4°C', '4.3 mg/L'], ['排水侧', '3.4 mg/L', '68%', '28.1°C', '3.1 mg/L']] },
    source: '数据为教学用模拟观测；水样均在 06:30 采集。排水侧 5 月 12 日硝酸盐数据由同一水样复测两次，溶解氧仪误差 ±0.2 mg/L。',
    evidence: ['排水侧硝酸盐和藻类覆盖均为最高', '排水侧溶解氧由 6.8 降至 3.1 mg/L', '水温更高的测点溶解氧更低', '三个测点均在清晨同一时间采样'],
    welcome: '鱼浮头通常与缺氧有关，但“同时发生”不一定就是因果。你能找出营养盐、藻类和溶解氧之间的证据链吗？',
    replies: { '比较证据': '先比较三个测点的硝酸盐、藻类覆盖和溶解氧，再比较五次观测的变化方向。哪些指标同步变化？', '检查推理': '你的解释是否包含“营养盐促进藻类—夜间呼吸和分解耗氧—鱼类缺氧”这条机制？水温在其中起什么作用？', '发现局限': '当前数据能否区分藻类呼吸和高水温的影响？还需要测量夜间与午后的溶解氧、降雨量或有机物吗？' },
    transferPlaceholder: '如果换到另一个池塘，你会增加哪些测点和观测时段？'
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const savedFields = ['questionInput', 'hypothesisInput', 'claimInput', 'reasoningInput', 'reflectionEvidence', 'reflectionLimit', 'reflectionTransfer'];
const savedTask = localStorage.getItem('wenzheng-current-task');
const state = { task: tasks[savedTask] ? savedTask : 'classroom', step: 1, evidence: [], hypotheses: [] };

lucide.createIcons();
const storageKey = (suffix) => `wenzheng-${state.task}-${suffix}`;

function toast(message) {
  $('#toast span').textContent = message;
  $('#toast').classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => $('#toast').classList.remove('show'), 1800);
}

function showView(id) {
  $$('.view').forEach((view) => view.classList.toggle('active', view.id === id));
  $$('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.view === id));
  $('#crumb').textContent = $(`.nav-item[data-view="${id}"] span`)?.textContent || '学习总览';
  $('.sidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'inquiry') requestAnimationFrame(drawTaskChart);
  if (id === 'evidence') drawRing();
}

function setStep(step, persist = true) {
  state.step = Math.max(1, Math.min(5, step));
  if (persist) localStorage.setItem(storageKey('step'), state.step);
  $$('.stepper button').forEach((button) => button.classList.toggle('active', Number(button.dataset.step) === state.step));
  $$('.step-content').forEach((content) => content.classList.toggle('active', Number(content.dataset.stepContent) === state.step));
  $('#prevStep').disabled = state.step === 1;
  $('#nextStep').style.visibility = state.step === 5 ? 'hidden' : 'visible';
  $('#progressText').textContent = `${state.step} / 5 步`;
  $('#progressBar').style.width = `${state.step * 20}%`;
  if (state.step === 3) requestAnimationFrame(drawTaskChart);
}

const reliabilityClass = (value) => value === '高' ? 'high' : value === '中' ? 'medium' : 'low';

function renderTask() {
  const task = tasks[state.task];
  $('#taskSelect').value = state.task;
  $('#taskNumber').textContent = `探究任务 ${task.number}`;
  $('#taskTitle').textContent = task.title;
  $('#taskSubtitle').textContent = task.subtitle;
  $('#focusTaskTitle').textContent = task.title;
  $('#focusTaskSummary').textContent = task.summary;
  $('#scenarioTitle').textContent = task.scenarioTitle;
  $('#scenarioText').textContent = task.scenarioText;
  $('#hypothesisLabel').textContent = task.hypothesisLabel;
  $('#hypothesisInput').placeholder = task.hypothesisPlaceholder;
  $('#reflectionTransfer').placeholder = task.transferPlaceholder;
  $('#chartTitle').textContent = task.chart.title;
  $('#sourceNote').textContent = task.source;
  $('#coachWelcome').textContent = task.welcome;
  $('#factStrip').innerHTML = task.facts.map((fact) => `<div><i data-lucide="${fact.icon}"></i><span>${fact.label}</span><strong>${fact.value}</strong></div>`).join('');
  $('#hypothesisOptions').innerHTML = task.options.map((option) => `<button data-value="${option.value}" class="${state.hypotheses.includes(option.value) ? 'selected' : ''}"><i data-lucide="${option.icon}"></i><span>${option.value}</span><small>${option.note}</small></button>`).join('');
  $('#chartLegend').innerHTML = task.chart.series.map((series) => `<span><i class="dot" style="background:${series.color}"></i>${series.name}</span>`).join('');
  $('#dataTableHead').innerHTML = task.table.headers.map((header) => `<th>${header}</th>`).join('');
  $('#dataTableBody').innerHTML = task.table.rows.map((row, rowIndex) => `<tr>${row.map((cell, cellIndex) => {
    if (cellIndex === 0) return `<td><span class="table-swatch" style="background:${task.chart.series[rowIndex]?.color || '#9ba59f'}"></span>${cell}</td>`;
    if (cellIndex === row.length - 1 && ['高', '中', '低'].includes(cell)) return `<td><span class="reliability ${reliabilityClass(cell)}">${cell}</span></td>`;
    return `<td>${cellIndex === 1 ? `<b>${cell}</b>` : cell}</td>`;
  }).join('')}</tr>`).join('');
  $('#evidencePicks').innerHTML = task.evidence.map((item) => `<button data-evidence="${item}" class="${state.evidence.includes(item) ? 'selected' : ''}">${item}</button>`).join('');
  $$('.coach-message', $('#coachThread')).slice(1).forEach((message) => message.remove());
  $$('.task-card').forEach((card) => card.classList.toggle('active', card.dataset.taskCard === state.task));
  bindDynamicTaskControls();
  lucide.createIcons();
  setStep(state.step, false);
}

function loadTask(id, openInquiry = false, announce = true) {
  state.task = id;
  localStorage.setItem('wenzheng-current-task', id);
  state.step = Number(localStorage.getItem(storageKey('step')) || (id === 'classroom' ? localStorage.getItem('wenzheng-step') : 1) || 1);
  state.evidence = JSON.parse(localStorage.getItem(storageKey('evidence')) || (id === 'classroom' ? localStorage.getItem('wenzheng-evidence') : null) || '[]');
  state.hypotheses = JSON.parse(localStorage.getItem(storageKey('hypotheses')) || '[]');
  savedFields.forEach((field) => {
    const legacy = id === 'classroom' ? localStorage.getItem(`wenzheng-${field}`) : '';
    $(`#${field}`).value = localStorage.getItem(storageKey(field)) || legacy || '';
  });
  renderTask();
  if (openInquiry) showView('inquiry');
  if (announce) toast(`已切换到“${tasks[id].shortTitle}”`);
}

function bindDynamicTaskControls() {
  $$('#hypothesisOptions button').forEach((button) => button.addEventListener('click', () => {
    button.classList.toggle('selected');
    state.hypotheses = $$('#hypothesisOptions .selected').map((item) => item.dataset.value);
    localStorage.setItem(storageKey('hypotheses'), JSON.stringify(state.hypotheses));
    toast(`${button.dataset.value}已${button.classList.contains('selected') ? '加入' : '移除'}假设`);
  }));
  $$('#evidencePicks button').forEach((button) => button.addEventListener('click', () => {
    button.classList.toggle('selected');
    state.evidence = $$('#evidencePicks .selected').map((item) => item.dataset.evidence);
    localStorage.setItem(storageKey('evidence'), JSON.stringify(state.evidence));
    toast(`已选择 ${state.evidence.length} 条证据`);
  }));
}

$$('.nav-item').forEach((button) => button.addEventListener('click', () => showView(button.dataset.view)));
$$('[data-go]').forEach((button) => button.addEventListener('click', () => showView(button.dataset.go)));
$$('[data-start-task]').forEach((button) => button.addEventListener('click', () => loadTask(button.dataset.startTask, true)));
$('#taskSelect').addEventListener('change', (event) => loadTask(event.target.value));
$('#menuButton').addEventListener('click', () => $('.sidebar').classList.toggle('open'));

$$('[data-role]').forEach((button) => button.addEventListener('click', () => {
  $$('[data-role]').forEach((item) => item.classList.toggle('active', item === button));
  const teacher = button.dataset.role === 'teacher';
  $('#userName').textContent = teacher ? '周老师' : '林晓雨';
  $('#userMeta').textContent = teacher ? '科学教师' : '八年级 2 班';
  showView(teacher ? 'teacher' : 'overview');
}));

$$('.stepper button').forEach((button) => button.addEventListener('click', () => setStep(Number(button.dataset.step))));
$('#prevStep').addEventListener('click', () => setStep(state.step - 1));
$('#nextStep').addEventListener('click', () => setStep(state.step + 1));

savedFields.forEach((id) => {
  const element = $(`#${id}`);
  element.addEventListener('input', () => {
    localStorage.setItem(storageKey(id), element.value);
    $('#saveHint').textContent = '正在保存…';
    clearTimeout(element.saveTimer);
    element.saveTimer = setTimeout(() => $('#saveHint').textContent = '内容自动保存', 500);
  });
});

$('#resetTask').addEventListener('click', () => {
  savedFields.forEach((id) => { localStorage.removeItem(storageKey(id)); $(`#${id}`).value = ''; });
  ['evidence', 'hypotheses', 'step'].forEach((suffix) => localStorage.removeItem(storageKey(suffix)));
  state.evidence = [];
  state.hypotheses = [];
  setStep(1);
  renderTask();
  toast(`${tasks[state.task].shortTitle}任务已重置`);
});

function coachMessage(text, user = false) {
  const message = document.createElement('div');
  message.className = `coach-message${user ? ' user' : ''}`;
  message.innerHTML = `<span>${user ? '我' : 'AI'}</span><p></p>`;
  $('p', message).textContent = text;
  $('#coachThread').appendChild(message);
  $('#coachThread').scrollTop = $('#coachThread').scrollHeight;
}

function askCoach(text) {
  if (!text.trim()) return;
  coachMessage(text, true);
  const reply = tasks[state.task].replies[text] || '先写下你的当前判断，再指出支持它的数据。有没有另一条证据可能挑战这个判断？';
  setTimeout(() => coachMessage(reply), 260);
}

$$('[data-prompt]').forEach((button) => button.addEventListener('click', () => askCoach(button.dataset.prompt)));
$('#sendCoach').addEventListener('click', () => { askCoach($('#coachInput').value); $('#coachInput').value = ''; });
$('#coachInput').addEventListener('keydown', (event) => { if (event.key === 'Enter') $('#sendCoach').click(); });
$('#openCoach').addEventListener('click', () => { showView('inquiry'); setTimeout(() => $('#coachInput').focus(), 100); });

function drawTaskChart() {
  const canvas = $('#tempChart');
  if (!canvas || !canvas.offsetWidth) return;
  const chart = tasks[state.task].chart;
  const dpr = window.devicePixelRatio || 1;
  const width = canvas.offsetWidth;
  const height = canvas.offsetHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  const pad = { l: chart.unit === 'mg/L' ? 54 : 42, r: 18, t: 18, b: 34 };
  ctx.font = '10px Microsoft YaHei';
  ctx.fillStyle = '#7b8580';
  ctx.textAlign = 'right';
  for (let value = chart.min; value <= chart.max + 0.001; value += chart.tick) {
    const y = pad.t + (chart.max - value) / (chart.max - chart.min) * (height - pad.t - pad.b);
    ctx.strokeStyle = '#e7ebe8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad.l, y);
    ctx.lineTo(width - pad.r, y);
    ctx.stroke();
    ctx.fillText(`${value}${chart.unit}`, pad.l - 8, y + 3);
  }
  ctx.textAlign = 'center';
  chart.labels.forEach((label, index) => {
    const x = pad.l + index / (chart.labels.length - 1) * (width - pad.l - pad.r);
    ctx.fillText(label, x, height - 10);
  });
  chart.series.forEach((item) => {
    ctx.strokeStyle = item.color;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    item.values.forEach((value, index) => {
      const x = pad.l + index / (item.values.length - 1) * (width - pad.l - pad.r);
      const y = pad.t + (chart.max - value) / (chart.max - chart.min) * (height - pad.t - pad.b);
      index ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    });
    ctx.stroke();
    item.values.forEach((value, index) => {
      const x = pad.l + index / (item.values.length - 1) * (width - pad.l - pad.r);
      const y = pad.t + (chart.max - value) / (chart.max - chart.min) * (height - pad.t - pad.b);
      ctx.fillStyle = '#fff';
      ctx.strokeStyle = item.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
  });
}

function drawRing() {
  const canvas = $('#ringChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const center = 90;
  ctx.clearRect(0, 0, 180, 180);
  ctx.lineWidth = 12;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#e8ece9';
  ctx.beginPath();
  ctx.arc(center, center, 66, -Math.PI * .75, Math.PI * .75);
  ctx.stroke();
  ctx.strokeStyle = '#2f6b50';
  ctx.beginPath();
  ctx.arc(center, center, 66, -Math.PI * .75, -Math.PI * .75 + Math.PI * 1.5 * .79);
  ctx.stroke();
}

const heatValues = [4,3,3,2,4,1,3,2,4,3,2,2,4,1,3,4,2,3,1,2,4,3,2,1,3,4,4,2,3,1,2,3,4,2,1,3,3,4,2,1,3,2];
heatValues.forEach((value, index) => {
  const cell = document.createElement('span');
  cell.className = `l${value}`;
  cell.dataset.label = `${index + 1}号学生 · ${['需支持', '发展中', '良好', '扎实'][value - 1]}`;
  $('#heatmap').appendChild(cell);
});

function openModal(title, text) {
  $('#modalTitle').textContent = title;
  $('#modalText').textContent = text;
  $('#modalBackdrop').hidden = false;
}
const closeModal = () => { $('#modalBackdrop').hidden = true; };
$('#makeIntervention').addEventListener('click', () => openModal('分层追问已生成', '已按三类共性困难生成课堂追问卡：比较限制条件、判断数据可靠度、解释因果机制。'));
$('#completeTask').addEventListener('click', () => openModal('探究档案已生成', `“${tasks[state.task].shortTitle}”任务的问题、假设、证据、论证和反思已保存。`));
$('#modalClose').addEventListener('click', closeModal);
$('#modalConfirm').addEventListener('click', closeModal);
$('#modalBackdrop').addEventListener('click', (event) => { if (event.target === $('#modalBackdrop')) closeModal(); });

$('#exportEvidence').addEventListener('click', () => {
  const task = tasks[state.task];
  const payload = { project: '问证智学', task: task.title, exportedAt: new Date().toISOString(), step: state.step, evidence: state.evidence, hypotheses: state.hypotheses, fields: Object.fromEntries(savedFields.map((id) => [id, $(`#${id}`).value])) };
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
  link.download = `问证智学-${task.shortTitle}-探究档案.json`;
  link.click();
  URL.revokeObjectURL(link.href);
  toast('档案已导出');
});

window.addEventListener('resize', () => { if ($('#inquiry').classList.contains('active')) drawTaskChart(); });
loadTask(state.task, false, false);

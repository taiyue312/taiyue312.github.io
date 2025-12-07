# 📚 期末复习资料站

一个现代简约风格的期末复习网页，支持直接添加 PDF 等资料文件。

## 📁 文件结构

```
exam-review/
├── index.html          # 主页面
├── README.md           # 说明文档
└── materials/          # 📂 把你的资料放在这里
    ├── 分子生物学笔记.pdf
    ├── 基因表达调控.pptx
    ├── 细胞周期.pdf
    └── ...
```

## 🚀 快速开始

### 第一步：下载项目

下载 `index.html` 和 `materials` 文件夹

### 第二步：添加你的资料

1. 把 PDF、PPT、Word 等文件放入 `materials` 文件夹
2. 打开 `index.html`，找到 `CONFIG` 配置区域
3. 按格式添加你的文件信息

### 第三步：部署到 GitHub

1. 创建新仓库（如 `exam-review`）
2. 上传所有文件（包括 materials 文件夹里的资料）
3. 启用 GitHub Pages（Settings → Pages → main 分支）
4. 访问 `https://你的用户名.github.io/exam-review/`

## ⚙️ 配置说明

打开 `index.html`，找到 `CONFIG` 部分进行配置：

### 配置考试时间

```javascript
exams: [
  {
    name: "分子生物学",      // 考试名称
    date: "2025-01-15",     // 日期 (YYYY-MM-DD)
    time: "09:00",          // 时间
    location: "教学楼 A301"  // 地点
  },
  // 添加更多考试...
]
```

### 配置科目和资料

```javascript
subjects: [
  {
    name: "分子生物学",       // 科目名称
    icon: "🧬",              // 图标
    color: "#fee2e2",        // 背景色
    materials: [
      {
        title: "课程笔记",              // 显示的标题
        file: "materials/笔记.pdf",    // 文件路径
        type: "pdf"                    // 类型: pdf/doc/ppt/note/link
      },
      // 添加更多资料...
    ],
    flashcards: [
      {
        q: "问题内容",
        a: "答案内容"
      },
      // 添加更多闪卡...
    ]
  },
  // 添加更多科目...
]
```

### 文件类型说明

| type | 图标 | 说明 |
|------|-----|------|
| pdf  | 📄  | PDF 文件 |
| doc  | 📝  | Word 文档 |
| ppt  | 📊  | PPT 演示文稿 |
| note | 📋  | 笔记 |
| link | 🔗  | 外部链接 |

## 📝 添加资料的完整流程

1. **准备资料文件**
   - 把 `复习要点.pdf` 放入 `materials` 文件夹

2. **编辑 index.html**
   - 找到对应科目的 `materials` 数组
   - 添加一行配置：
   ```javascript
   { title: "复习要点", file: "materials/复习要点.pdf", type: "pdf" },
   ```

3. **上传到 GitHub**
   - 提交 `materials/复习要点.pdf`
   - 提交修改后的 `index.html`

4. **完成！** 刷新网页即可看到新资料

## 🎨 自定义颜色

可用的预设颜色：

- `#fee2e2` - 红色系
- `#dbeafe` - 蓝色系
- `#d1fae5` - 绿色系
- `#fef3c7` - 黄色系
- `#ede9fe` - 紫色系
- `#fce7f3` - 粉色系

## 💡 提示

- 文件名建议使用中文或英文，避免特殊字符
- PDF 文件会在浏览器中直接打开
- 闪卡点击可以展开/收起答案
- 考试倒计时会根据剩余天数显示不同颜色

---

祝复习顺利！📖✨

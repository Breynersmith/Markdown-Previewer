import  { useState, useEffect } from 'react';

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const defaultMarkdown = `
Texto escrito en pantalla
`;

    setMarkdown(defaultMarkdown);
  }, []);

  const convertToHTML = (markdownText) => {
    return markdownText
      .replace(/# (.+)/g, '<h1>$1</h1>')
      .replace(/## (.+)/g, '<h2>$1</h2>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*(.+)\*\*/g, '<strong>$1</strong>')
  };

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown-previewer">
      <div className="editor-container">
        <label htmlFor="editor">Editor</label>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="preview-container">
        <label htmlFor="preview">Preview</label>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: convertToHTML(markdown) }}
        ></div>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;

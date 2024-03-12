import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkDown.css';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('# Write your Markdown here');
  const [selectedText, setSelectedText] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleSelection = () => {
    // const editor = document.getElementById('editor');
    const selection = window.getSelection();
    setSelectedText(selection.toString());
  };

  const applyBold = () => {
    const updatedMarkdown = markdown.replace(
      selectedText,
      `**${selectedText}**`
    );
    setMarkdown(updatedMarkdown);
  };

  const applyItalic = () => {
    const updatedMarkdown = markdown.replace(
      selectedText,
      `*${selectedText}*`
    );
    setMarkdown(updatedMarkdown);
  };

  const applyHeader = (level) => {
    const updatedMarkdown = markdown.concat(`\n${'#'.repeat(level)} `);
    setMarkdown(updatedMarkdown);
  };

  const applyList = () => {
    const updatedMarkdown = markdown.concat('\n- ');
    setMarkdown(updatedMarkdown);
  };

  const applyLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      const updatedMarkdown = markdown.concat(`[${selectedText}](${url})`);
      setMarkdown(updatedMarkdown);
    }
  };

  return (
    <div className="markdown-editor-container">
      <div className="markdown-editor-column">
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
          onSelect={handleSelection}
          className="markdown-editor-textarea"
        />
        <div className="markdown-editor-buttons">
          <button className='btn' onClick={applyBold}>Bold</button>
          <button className='btn' onClick={applyItalic}>Italic</button>
          <button className='btn' onClick={() => applyHeader(1)}>H1</button>
          <button className='btn' onClick={() => applyHeader(2)}>H2</button>
          <button className='btn' onClick={applyList}>List</button>
          <button className='btn' onClick={applyLink}>Link</button>
        </div>
      </div>
      <div className="markdown-editor-column">
        <h2>Preview</h2>
        <div className="markdown-editor-preview">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;

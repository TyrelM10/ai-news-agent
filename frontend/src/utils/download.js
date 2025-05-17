export function downloadSummary(summary, title) {
    const blob = new Blob([summary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/[^a-z0-9]/gi, '_')}_summary.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }
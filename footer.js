(function() {
    // SCANS FOR EXISTING FOOTER NODES
    const existingSignal = document.querySelector('footer, .terminal-footer, .admin-note');
    
    // ONLY DEPLOYS IF NO SIGNAL DETECTED
    if (!existingSignal) {
        const unifiedFooter = `
        <footer style="margin-top: 80px; padding: 40px 20px; border-top: 1px solid rgba(0, 229, 255, 0.15); text-align: center; font-family: 'Courier New', monospace;">
            <div style="max-width: 600px; margin: 0 auto;">
                <span style="color: #666; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; display: block; margin-bottom: 20px;">
                    © 2026 THE MOORE SIGNAL ARCHIVE // THE SIGNAL SURVIVES ON HONOR.
                </span>
                <div style="padding: 12px; border: 1px solid rgba(0, 229, 255, 0.3); background: rgba(0, 229, 255, 0.03); border-radius: 4px; display: inline-block;">
                    <span style="color: #00bcd4; font-weight: bold; font-size: 0.8rem; letter-spacing: 2px;">STATUS:</span> 
                    <span style="color: #fff; text-shadow: 0 0 8px rgba(0, 229, 255, 0.6); font-size: 0.8rem; letter-spacing: 2px;">VETTED // NOMINAL</span>
                </div>
                <p style="margin-top: 20px; font-size: 0.6rem; color: #4a5568; line-height: 1.8; letter-spacing: 1px; text-transform: uppercase;">
                    // LOG_NOTE: PERSONAL_STUDY // BENCHMARKS_INTERNAL // <br>
                    // ADVISORY: NOT_FINANCIAL_ADVICE //
                </p>
            </div>
        </footer>`;
        document.body.insertAdjacentHTML('beforeend', unifiedFooter);
    }
})();

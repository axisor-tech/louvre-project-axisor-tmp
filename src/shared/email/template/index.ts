export const noReplyTemplate = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contato Recebido - Axisor Technologies Brasil</title>
</head>
<body style="margin:0; padding:0; font-family: 'Segoe UI', 'Roboto', Arial, sans-serif; background-color:#f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px; background:#fff; border-radius:18px; box-shadow:0 4px 16px rgba(30,41,59,0.07); overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(90deg,#0F172A 0%,#2563eb 100%); padding:38px 32px 28px 32px; text-align:center;">
              <div style="color:#fff; font-size:28px; font-weight:700; letter-spacing:-0.5px;">Axisor Technologies Brasil</div>
              <div style="color:#cbd5e1; font-size:15px; margin-top:8px;">Inovação • Tecnologia • Excelência</div>
            </td>
          </tr>
          <!-- Main Content -->
          <tr>
            <td style="padding:40px 32px 28px 32px;">
              <h2 style="color:#1a202c; font-size:24px; font-weight:600; margin:0 0 18px 0; text-align:center;">Sua mensagem foi recebida com sucesso</h2>
              <p style="color:#334155; font-size:16px; margin:0 0 22px 0; text-align:center;">Olá <strong style="color:#1e293b;">${username}</strong>,</p>
              <p style="color:#475569; font-size:16px; margin:0 0 22px 0; line-height:1.7; text-align:center;">
                Obrigado por entrar em contato com a <strong>Axisor Technologies Brasil</strong>.<br/>
                Recebemos sua mensagem e nossa equipe irá analisá-la cuidadosamente.
              </p>
              <div style="background-color:#f1f5f9; border-left:4px solid #2563eb; padding:20px 24px; margin:28px 0 24px 0; border-radius:7px;">
                <p style="color:#1e293b; margin:0; font-size:15px; text-align:center;">
                  Você receberá uma resposta em breve.<br/>
                  Se sua solicitação for urgente, por favor, consulte nossos canais oficiais.
                </p>
              </div>
              <p style="color:#64748b; font-size:15px; margin:24px 0 0 0; text-align:center;">
               Estamos desenvolvendo uma plataforma perfeita para você, onde você pode 
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc; padding:32px 24px 28px 24px; text-align:center; border-top:1px solid #e2e8f0;">
              <div style="margin-bottom:18px;">
                <a href="https://axisor.com.br" style="display:inline-block; margin:0 10px; color:#2563eb; text-decoration:none; font-size:14px;">Website</a>
                <span style="color:#cbd5e1;">•</span>
                <a href="https://linkedin.com/company/axisor" style="display:inline-block; margin:0 10px; color:#2563eb; text-decoration:none; font-size:14px;">LinkedIn</a>
                <span style="color:#cbd5e1;">•</span>
                <a href="https://twitter.com/axisorbr" style="display:inline-block; margin:0 10px; color:#2563eb; text-decoration:none; font-size:14px;">Twitter</a>
              </div>
              <div style="color:#94a3b8; font-size:13px; margin-bottom:8px;">
                Axisor Technologies Brasil &mdash; Soluções em Tecnologia de Excelência
              </div>
              <div style="color:#cbd5e1; font-size:12px; margin-bottom:6px;">
                Este é um e-mail automático, não responda. Enviado para ${email}.
              </div>
              <div style="color:#cbd5e1; font-size:12px;">
                © ${new Date().getFullYear()} Axisor Technologies Brasil. Todos os direitos reservados.
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

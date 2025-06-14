export const noReplyTemplate = `
 <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Obrigado pelo seu Contato - Axisor Technologies Brasil</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8fafc;">
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); overflow: hidden;">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 50px 40px; text-align: center;">
                    <div style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                      Axisor Technologies Brasil
                    </div>
                    <p style="color: #e2e8f0; margin: 15px 0 0 0; font-size: 16px; opacity: 0.9;">
                      Inovação • Tecnologia • Excelência
                    </p>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 50px 40px;">
                    <h2 style="color: #1a202c; margin: 0 0 30px 0; font-size: 28px; font-weight: 600; text-align: center;">
                      Recebemos sua mensagem! 👍
                    </h2>
                    
                    <p style="color: #4a5568; margin: 0 0 25px 0; font-size: 16px; text-align: center;">
                      Olá <strong style="color: #2d3748;">${username}</strong>,
                    </p>
                    
                    <p style="color: #4a5568; margin: 0 0 25px 0; font-size: 16px; line-height: 1.7; text-align: center;">
                      Agradecemos por entrar em contato com a <strong>Axisor Technologies Brasil</strong>! Sua mensagem é muito importante para nós.
                    </p>

                    <div style="background-color: #f7fafc; border-left: 4px solid #3B82F6; padding: 25px 30px; margin: 30px 0; border-radius: 8px;">
                      <p style="color: #2d3748; margin: 0; font-size: 16px; font-weight: 400; text-align: center;">
                        Nossa equipe está analisando sua solicitação e entrará em contato o mais breve possível.
                      </p>
                    </div>

                    <p style="color: #4a5568; margin: 30px 0 0 0; font-size: 16px; line-height: 1.7; text-align: center;">
                      Enquanto isso, fique à vontade para explorar nosso site e conhecer mais sobre nossas soluções tecnológicas.
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 40px; text-align: center; border-top: 1px solid #e2e8f0;">
                    <div style="margin-bottom: 25px;">
                      <a href="https://axisor.com.br" style="display: inline-block; margin: 0 10px; color: #3B82F6; text-decoration: none; font-size: 14px;">Website</a>
                      <span style="color: #CBD5E1;">•</span>
                      <a href="https://linkedin.com/company/axisor" style="display: inline-block; margin: 0 10px; color: #3B82F6; text-decoration: none; font-size: 14px;">LinkedIn</a>
                      <span style="color: #CBD5E1;">•</span>
                      <a href="https://twitter.com/axisorbr" style="display: inline-block; margin: 0 10px; color: #3B82F6; text-decoration: none; font-size: 14px;">Twitter</a>
                    </div>
                    <p style="color: #718096; margin: 0 0 15px 0; font-size: 14px;">
                      Axisor Technologies Brasil • Soluções Tecnológicas de Excelência
                    </p>
                    <p style="color: #a0aec0; margin: 15px 0 0 0; font-size: 12px;">
                      Este é um email automático, por favor não responda. Enviado para ${email} pela Axisor Technologies Brasil.
                    </p>
                    <p style="color: #a0aec0; margin: 5px 0 0 0; font-size: 12px;">
                      © ${new Date().getFullYear()} Axisor Technologies Brasil. Todos os direitos reservados.
                    </p>
                  </td>
                </tr>

              </table>  
            </td>
          </tr>
        </table>
      </body>
      </html>
`;

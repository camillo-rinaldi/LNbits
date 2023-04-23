import React from "react";

export function TermsOfUse() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-4xl font-bold">Terms of Use</h1>

      <p className="mb-4">Last updated: 2023-04-23</p>

      <p className={"leading-normal"}>
        Please read these terms of use carefully before using the PDF Converter
        website
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">
        1. Acceptance of Terms
      </h2>
      <p className={"leading-normal"}>
        By accessing or using the Service, you agree to be bound by these Terms.
        If you do not agree with any part of these Terms, you may not access or
        use the Service.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">
        2. Use of the Service
      </h2>
      <p className={"mb-4 leading-normal"}>
        The Service allows users to upload and convert PDF files. By using the
        Service, you acknowledge and agree that:
      </p>
      <ul className="list-disc pl-8">
        <li>
          You are solely responsible for the content of the files you upload and
          the results of the conversion process.
        </li>
        <li>
          We do not guarantee the accuracy, quality, or completeness of the
          conversion results.
        </li>
        <li>
          We are not responsible for any errors, omissions, or inaccuracies that
          may occur during the conversion process.
        </li>
      </ul>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">3. Data and Privacy</h2>
      <ul className="list-disc pl-8">
        <li>
          We do not store, share, or sell any data related to the files you
          upload or the conversion results.
        </li>
        <li>
          We are not responsible for any unauthorized access, loss, or
          corruption of data related to your use of the Service.
        </li>
      </ul>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">
        4. Limitation of Liability
      </h2>
      <p className={"leading-normal"}>
        In no event shall the website developer be liable for any direct,
        indirect, incidental, special, consequential, or punitive damages,
        including, but not limited to, loss of profits, data, use, goodwill, or
        other intangible losses, resulting from (i) your access to or use of, or
        inability to access or use, the Service; (ii) any conduct or content of
        any third party on the Service; or (iii) any content obtained from the
        Service.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">5. Changes to Terms</h2>
      <p className={"leading-normal"}>
        We reserve the right, at our sole discretion, to modify or replace these
        Terms at any time. We will notify you of any changes by posting the new
        Terms on this page. Your continued use of the Service following the
        posting of any changes to these Terms constitutes acceptance of those
        changes.
      </p>
    </div>
  );
}

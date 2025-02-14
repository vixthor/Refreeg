import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          RefreeG is committed to ensuring the privacy, security, and
          responsible handling of user data in compliance with the Nigeria Data
          Protection Regulation (NDPR) 2019 and other applicable data protection
          laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">2. Data Collection</h2>
        <h3 className="text-xl font-medium mt-2">2.1 What Data We Collect</h3>
        <ul className="list-disc ml-6">
          <li>
            <strong>Personal Information:</strong> Full Name, Email Address,
            Phone Number, Date of Birth, NIN/BVN
          </li>
          <li>
            <strong>Financial Information:</strong> Payment method details,
            Donation history, Withdrawal requests
          </li>
          <li>
            <strong>Cause-Related Data:</strong> Cause descriptions, images,
            verification documents
          </li>
          <li>
            <strong>Technical Data:</strong> IP addresses, browser type,
            cookies, analytics data
          </li>
          <li>
            <strong>Communication Data:</strong> Messages, customer support
            interactions
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">3. Data Storage & Retention</h2>
        <h3 className="text-xl font-medium mt-2">3.1 Where We Store Data</h3>
        <ul className="list-disc ml-6">
          <li>Cloud storage on ISO-certified servers within Nigeria</li>
          <li>Blockchain records for transaction transparency</li>
        </ul>
        <h3 className="text-xl font-medium mt-2">3.2 How Long We Store Data</h3>
        <ul className="list-disc ml-6">
          <li>
            Indefinite retention of user accounts unless deletion is requested
          </li>
          <li>Transaction records stored for at least 5 years</li>
          <li>Inactive accounts deleted or anonymized after 24 months</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">
          4. Data Protection & Security Measures
        </h2>
        <ul className="list-disc ml-6">
          <li>End-to-End Encryption (AES-256, SSL/TLS)</li>
          <li>Two-Factor Authentication (2FA) available</li>
          <li>Strict access control policies</li>
          <li>Regular security audits</li>
          <li>Automated fraud prevention systems</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">
          5. User Rights & Data Ownership
        </h2>
        <ul className="list-disc ml-6">
          <li>Right to Access, Correction, and Deletion</li>
          <li>Right to Object to data processing</li>
          <li>Right to Data Portability</li>
          <li>
            Requests can be sent to{" "}
            <a href="mailto:support@refreeg.com" className="text-blue-600">
              Refreegcorrespondence@gmail.com
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">
          6. Data Sharing & Third-Party Access
        </h2>
        <ul className="list-disc ml-6">
          <li>Shared with regulatory authorities as required by law</li>
          <li>Shared with payment providers for processing transactions</li>
          <li>
            Shared with security services in case of fraud or cyber threats
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">
          7. Compliance with Nigerian Data Protection Laws
        </h2>
        <ul className="list-disc ml-6">
          <li>Compliance with NDPR 2019, CBN Data Security Guidelines</li>
          <li>
            Adherence to Cybercrimes Act 2015 and NCC Data Protection Framework
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">
          8. Breach Notification & Incident Response
        </h2>
        <ul className="list-disc ml-6">
          <li>Users notified within 72 hours of data breaches</li>
          <li>Regulatory authorities informed as per NDPR guidelines</li>
          <li>Immediate security patches deployed</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

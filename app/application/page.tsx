"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Modal, ModalContent, ModalHeader, ModalFooter } from "@/components/ui/modal";
import { FadeIn } from "@/components/animations";
import { FileText, CheckCircle } from "lucide-react";

interface FormData {
  // Tenant Information
  full_name: string;
  home_phone: string;
  work_phone: string;
  cell_phone: string;
  dob: string;
  ssn: string;
  driver_license: string;
  driver_license_state: string;
  email: string;
  co_app_name: string;
  co_app_dob: string;
  co_app_ssn: string;
  occupants: string;
  pets: string;
  vehicle_make: string;
  vehicle_year: string;
  vehicle_license: string;
  // Employment Information
  emp_status: string;
  employer: string;
  emp_address: string;
  job_title: string;
  supervisor: string;
  date_employed: string;
  emp_phone: string;
  monthly_pay: string;
  other_income_amount: string;
  other_income_contact: string;
  // Current Address
  curr_address: string;
  curr_move_in: string;
  curr_rent: string;
  curr_owner: string;
  curr_owner_phone: string;
  curr_reason: string;
  // Previous Address 1
  prev_address: string;
  prev_move_in: string;
  prev_move_out: string;
  prev_rent: string;
  prev_owner: string;
  prev_owner_phone: string;
  prev_reason: string;
  // Previous Address 2
  prev2_address: string;
  prev2_move_in: string;
  prev2_move_out: string;
  prev2_rent: string;
  prev2_owner: string;
  prev2_owner_phone: string;
  prev2_reason: string;
  // Credit History
  bankruptcy: string;
  evicted: string;
  lawsuits: string;
  late_payments: string;
  judgments: string;
  credit_explanation: string;
  // Bank References
  bank1_name: string;
  bank1_account_type: string;
  bank1_account_no: string;
  bank2_name: string;
  bank2_account_type: string;
  bank2_account_no: string;
  // Credit References
  credit_ref1_name: string;
  credit_ref1_phone: string;
  credit_ref2_name: string;
  credit_ref2_phone: string;
  credit_ref3_name: string;
  credit_ref3_phone: string;
  // Authorization
  signature_name: string;
  signature_date: string;
  co_signature_name: string;
  co_signature_date: string;
  auth_signature_name: string;
  auth_signature_date: string;
}

export default function ApplicationPage() {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    home_phone: "",
    work_phone: "",
    cell_phone: "",
    dob: "",
    ssn: "",
    driver_license: "",
    driver_license_state: "",
    email: "",
    co_app_name: "",
    co_app_dob: "",
    co_app_ssn: "",
    occupants: "",
    pets: "",
    vehicle_make: "",
    vehicle_year: "",
    vehicle_license: "",
    emp_status: "",
    employer: "",
    emp_address: "",
    job_title: "",
    supervisor: "",
    date_employed: "",
    emp_phone: "",
    monthly_pay: "",
    other_income_amount: "",
    other_income_contact: "",
    curr_address: "",
    curr_move_in: "",
    curr_rent: "",
    curr_owner: "",
    curr_owner_phone: "",
    curr_reason: "",
    prev_address: "",
    prev_move_in: "",
    prev_move_out: "",
    prev_rent: "",
    prev_owner: "",
    prev_owner_phone: "",
    prev_reason: "",
    prev2_address: "",
    prev2_move_in: "",
    prev2_move_out: "",
    prev2_rent: "",
    prev2_owner: "",
    prev2_owner_phone: "",
    prev2_reason: "",
    bankruptcy: "",
    evicted: "",
    lawsuits: "",
    late_payments: "",
    judgments: "",
    credit_explanation: "",
    bank1_name: "",
    bank1_account_type: "",
    bank1_account_no: "",
    bank2_name: "",
    bank2_account_type: "",
    bank2_account_no: "",
    credit_ref1_name: "",
    credit_ref1_phone: "",
    credit_ref2_name: "",
    credit_ref2_phone: "",
    credit_ref3_name: "",
    credit_ref3_phone: "",
    signature_name: "",
    signature_date: "",
    co_signature_name: "",
    co_signature_date: "",
    auth_signature_name: "",
    auth_signature_date: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    // Aquí puedes agregar la lógica para enviar los datos a tu API
    try {
      // await fetch('/api/application', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleCloseModal = () => {
    setSubmitSuccess(false);
    // Reset form data
    setFormData({
      full_name: "",
      home_phone: "",
      work_phone: "",
      cell_phone: "",
      dob: "",
      ssn: "",
      driver_license: "",
      driver_license_state: "",
      email: "",
      co_app_name: "",
      co_app_dob: "",
      co_app_ssn: "",
      occupants: "",
      pets: "",
      vehicle_make: "",
      vehicle_year: "",
      vehicle_license: "",
      emp_status: "",
      employer: "",
      emp_address: "",
      job_title: "",
      supervisor: "",
      date_employed: "",
      emp_phone: "",
      monthly_pay: "",
      other_income_amount: "",
      other_income_contact: "",
      curr_address: "",
      curr_move_in: "",
      curr_rent: "",
      curr_owner: "",
      curr_owner_phone: "",
      curr_reason: "",
      prev_address: "",
      prev_move_in: "",
      prev_move_out: "",
      prev_rent: "",
      prev_owner: "",
      prev_owner_phone: "",
      prev_reason: "",
      prev2_address: "",
      prev2_move_in: "",
      prev2_move_out: "",
      prev2_rent: "",
      prev2_owner: "",
      prev2_owner_phone: "",
      prev2_reason: "",
      bankruptcy: "",
      evicted: "",
      lawsuits: "",
      late_payments: "",
      judgments: "",
      credit_explanation: "",
      bank1_name: "",
      bank1_account_type: "",
      bank1_account_no: "",
      bank2_name: "",
      bank2_account_type: "",
      bank2_account_no: "",
      credit_ref1_name: "",
      credit_ref1_phone: "",
      credit_ref2_name: "",
      credit_ref2_phone: "",
      credit_ref3_name: "",
      credit_ref3_phone: "",
      signature_name: "",
      signature_date: "",
      co_signature_name: "",
      co_signature_date: "",
      auth_signature_name: "",
      auth_signature_date: "",
    });
  };

  const handleGoHome = () => {
    handleCloseModal();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <Navbar />
      <WhatsAppFloat />

      {/* Success Modal */}
      <Modal isOpen={submitSuccess} onClose={handleCloseModal}>
        <ModalHeader onClose={handleCloseModal}>
          <h2 className="text-2xl sm:text-3xl font-black text-[rgb(23,46,123)]">
            Application Submitted!
          </h2>
        </ModalHeader>
        <ModalContent>
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Thank you for completing your application. We will contact you soon.
            </p>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button
            onClick={handleGoHome}
            variant="default"
            size="default"
            className="w-full sm:w-auto"
          >
            Return to Home
          </Button>
        </ModalFooter>
      </Modal>

      {/* Header */}
      <div className="pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[rgb(23,46,123)] via-[rgb(18,37,98)] to-[rgb(23,46,123)]">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-12 w-12 sm:h-16 sm:w-16 text-white mr-4" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                Rental Application
              </h1>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] to-white rounded-full mx-auto mb-6" />
            <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto">
              Complete the following form to apply for our properties
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Form */}
      <div className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 overflow-x-hidden">
        <div className="container mx-auto max-w-6xl w-full">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full">
            {/* Tenant Information */}
            <FadeIn>
              <Card className="shadow-xl border-t-4 border-[rgb(23,46,123)]">
                <CardHeader className="bg-gradient-to-r from-[rgb(23,46,123)] to-[rgb(18,37,98)] text-white rounded-t-lg py-4 px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl font-black">
                    Tenant Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                  <div className="space-y-3">
                    <div className="w-full">
                      <Label htmlFor="fullName" className="text-sm sm:text-base">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="full_name"
                        type="text"
                        value={formData.full_name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full min-w-0"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      <div className="w-full min-w-0">
                        <Label htmlFor="homePhone" className="text-sm sm:text-base">Home Phone</Label>
                        <Input
                          id="homePhone"
                          name="home_phone"
                          type="tel"
                          value={formData.home_phone}
                          onChange={handleInputChange}
                          placeholder="(239) 555-1234"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="workPhone" className="text-sm sm:text-base">Work Phone</Label>
                        <Input
                          id="workPhone"
                          name="work_phone"
                          type="tel"
                          value={formData.work_phone}
                          onChange={handleInputChange}
                          placeholder="(239) 555-5678"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="cellPhone" className="text-sm sm:text-base">Cell Phone</Label>
                        <Input
                          id="cellPhone"
                          name="cell_phone"
                          type="tel"
                          value={formData.cell_phone}
                          onChange={handleInputChange}
                          placeholder="(239) 555-9012"
                          className="w-full min-w-0"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="w-full min-w-0">
                        <Label htmlFor="dob" className="text-sm sm:text-base">Date of Birth</Label>
                        <Input
                          id="dob"
                          name="dob"
                          type="date"
                          value={formData.dob}
                          onChange={handleInputChange}
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="ssn" className="text-sm sm:text-base">Social Security Number</Label>
                        <Input
                          id="ssn"
                          name="ssn"
                          type="text"
                          value={formData.ssn}
                          onChange={handleInputChange}
                          placeholder="XXX-XX-XXXX"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="driverLicense" className="text-sm sm:text-base">Driver's License Number</Label>
                        <Input
                          id="driverLicense"
                          name="driver_license"
                          type="text"
                          value={formData.driver_license}
                          onChange={handleInputChange}
                          placeholder="License number"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="driverLicenseState" className="text-sm sm:text-base">State</Label>
                        <Select
                          id="driverLicenseState"
                          name="driver_license_state"
                          value={formData.driver_license_state}
                          onChange={handleInputChange}
                          className="w-full min-w-0"
                        >
                          <option value="">Select a state</option>
                          <option value="FL">Florida</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </Select>
                      </div>
                    </div>

                    <div className="w-full min-w-0">
                      <Label htmlFor="email" className="text-sm sm:text-base">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full min-w-0"
                      />
                    </div>

                    <div className="pt-3 border-t border-gray-200">
                      <h3 className="text-base sm:text-lg font-bold text-[rgb(23,46,123)] mb-3">
                        Co-Applicant Information
                      </h3>
                      <div className="space-y-3">
                        <div className="w-full min-w-0">
                          <Label htmlFor="coAppName" className="text-sm sm:text-base">Co-Applicant Name</Label>
                          <Input
                            id="coAppName"
                            name="co_app_name"
                            type="text"
                            value={formData.co_app_name}
                            onChange={handleInputChange}
                            placeholder="Full name"
                            className="w-full min-w-0"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div className="w-full min-w-0">
                            <Label htmlFor="coAppDob" className="text-sm sm:text-base">Date of Birth</Label>
                            <Input
                              id="coAppDob"
                              name="co_app_dob"
                              type="date"
                              value={formData.co_app_dob}
                              onChange={handleInputChange}
                              className="w-full min-w-0"
                            />
                          </div>
                          <div className="w-full min-w-0">
                            <Label htmlFor="coAppSsn" className="text-sm sm:text-base">Social Security Number</Label>
                            <Input
                              id="coAppSsn"
                              name="co_app_ssn"
                              type="text"
                              value={formData.co_app_ssn}
                              onChange={handleInputChange}
                              placeholder="XXX-XX-XXXX"
                              className="w-full min-w-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full min-w-0">
                      <Label htmlFor="occupants" className="text-sm sm:text-base">
                        Names and ages of everyone who will live in the residence
                      </Label>
                      <Textarea
                        id="occupants"
                        name="occupants"
                        value={formData.occupants}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Example: John Smith, 35 years old; Jane Smith, 32 years old; etc."
                        className="w-full min-w-0"
                      />
                    </div>

                    <div className="w-full min-w-0">
                      <Label htmlFor="pets" className="text-sm sm:text-base">List of all pets</Label>
                      <Textarea
                        id="pets"
                        name="pets"
                        value={formData.pets}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="Example: 1 dog, Golden Retriever, 2 years old"
                        className="w-full min-w-0"
                      />
                    </div>

                    <div className="pt-3 border-t border-gray-200">
                      <h3 className="text-base sm:text-lg font-bold text-[rgb(23,46,123)] mb-3">
                        Vehicle Information
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        <div className="w-full min-w-0">
                          <Label htmlFor="vehicleMake" className="text-sm sm:text-base">Make/Model</Label>
                          <Input
                            id="vehicleMake"
                            name="vehicle_make"
                            type="text"
                            value={formData.vehicle_make}
                            onChange={handleInputChange}
                            placeholder="Example: Toyota Camry"
                            className="w-full min-w-0"
                          />
                        </div>
                        <div className="w-full min-w-0">
                          <Label htmlFor="vehicleYear" className="text-sm sm:text-base">Year</Label>
                          <Input
                            id="vehicleYear"
                            name="vehicle_year"
                            type="number"
                            value={formData.vehicle_year}
                            onChange={handleInputChange}
                            placeholder="2020"
                            min="1900"
                            max="2030"
                            className="w-full min-w-0"
                          />
                        </div>
                        <div className="w-full min-w-0">
                          <Label htmlFor="vehicleLicense" className="text-sm sm:text-base">License Plate/State</Label>
                          <Input
                            id="vehicleLicense"
                            name="vehicle_license"
                            type="text"
                            value={formData.vehicle_license}
                            onChange={handleInputChange}
                            placeholder="ABC123 / FL"
                            className="w-full min-w-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Employment Information */}
            <FadeIn delay={0.1}>
              <Card className="shadow-xl border-t-4 border-[rgb(180,22,40)]">
                <CardHeader className="bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(144,18,32)] text-white rounded-t-lg py-4 px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl font-black">
                    Información de Empleo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                  <div className="space-y-3">
                    <div className="w-full min-w-0">
                      <Label className="block mb-2 text-sm sm:text-base">Estado de Empleo del Solicitante:</Label>
                      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="emp_status"
                            value="full_time"
                            checked={formData.emp_status === "full_time"}
                            onChange={() => handleRadioChange("emp_status", "full_time")}
                            className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                          />
                          <span className="text-sm">Tiempo Completo</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="emp_status"
                            value="part_time"
                            checked={formData.emp_status === "part_time"}
                            onChange={() => handleRadioChange("emp_status", "part_time")}
                            className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                          />
                          <span className="text-sm">Medio Tiempo</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="emp_status"
                            value="student"
                            checked={formData.emp_status === "student"}
                            onChange={() => handleRadioChange("emp_status", "student")}
                            className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                          />
                          <span className="text-sm">Estudiante</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="emp_status"
                            value="unemployed"
                            checked={formData.emp_status === "unemployed"}
                            onChange={() => handleRadioChange("emp_status", "unemployed")}
                            className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                          />
                          <span className="text-sm">Desempleado</span>
                        </label>
                      </div>
                    </div>

                    <div className="w-full min-w-0">
                      <Label htmlFor="employer" className="text-sm sm:text-base">Empleador</Label>
                      <Input
                        id="employer"
                        name="employer"
                        type="text"
                        value={formData.employer}
                        onChange={handleInputChange}
                        placeholder="Nombre de la empresa"
                        className="w-full min-w-0"
                      />
                    </div>

                    <div className="w-full min-w-0">
                      <Label htmlFor="empAddress" className="text-sm sm:text-base">Dirección</Label>
                      <Input
                        id="empAddress"
                        name="emp_address"
                        type="text"
                        value={formData.emp_address}
                        onChange={handleInputChange}
                        placeholder="Dirección completa del empleador"
                        className="w-full min-w-0"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="w-full min-w-0">
                        <Label htmlFor="jobTitle" className="text-sm sm:text-base">Título del Trabajo</Label>
                        <Input
                          id="jobTitle"
                          name="job_title"
                          type="text"
                          value={formData.job_title}
                          onChange={handleInputChange}
                          placeholder="Ej: Gerente de Ventas"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="supervisor" className="text-sm sm:text-base">Nombre del Supervisor</Label>
                        <Input
                          id="supervisor"
                          name="supervisor"
                          type="text"
                          value={formData.supervisor}
                          onChange={handleInputChange}
                          placeholder="Nombre del supervisor"
                          className="w-full min-w-0"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="w-full min-w-0">
                        <Label htmlFor="dateEmployed" className="text-sm sm:text-base">Fecha de Empleo</Label>
                        <Input
                          id="dateEmployed"
                          name="date_employed"
                          type="text"
                          value={formData.date_employed}
                          onChange={handleInputChange}
                          placeholder="Ej: 2020-Presente"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="empPhone" className="text-sm sm:text-base">Teléfono</Label>
                        <Input
                          id="empPhone"
                          name="emp_phone"
                          type="tel"
                          value={formData.emp_phone}
                          onChange={handleInputChange}
                          placeholder="(239) 555-1234"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="monthlyPay" className="text-sm sm:text-base">Salario Mensual ($)</Label>
                        <Input
                          id="monthlyPay"
                          name="monthly_pay"
                          type="number"
                          step="0.01"
                          value={formData.monthly_pay}
                          onChange={handleInputChange}
                          placeholder="0.00"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="otherIncomeAmount" className="text-sm sm:text-base">Otros Ingresos ($)</Label>
                        <Input
                          id="otherIncomeAmount"
                          name="other_income_amount"
                          type="number"
                          step="0.01"
                          value={formData.other_income_amount}
                          onChange={handleInputChange}
                          placeholder="0.00"
                          className="w-full min-w-0"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="otherIncomeContact">Nombre de Contacto para Otros Ingresos</Label>
                      <Input
                        id="otherIncomeContact"
                        name="other_income_contact"
                        type="text"
                        value={formData.other_income_contact}
                        onChange={handleInputChange}
                        placeholder="Nombre del contacto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Residential History */}
            <FadeIn delay={0.2}>
              <Card className="shadow-xl border-t-4 border-[rgb(23,46,123)]">
                <CardHeader className="bg-gradient-to-r from-[rgb(23,46,123)] to-[rgb(18,37,98)] text-white rounded-t-lg py-4 px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl font-black">
                    Residential History (Last 3 Years)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-5">
                  {/* Current Address */}
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-[rgb(23,46,123)] border-b border-gray-200 pb-2">
                      Current Address
                    </h3>
                    <div className="w-full min-w-0">
                      <Label htmlFor="currAddress" className="text-sm sm:text-base">Address</Label>
                      <Input
                        id="currAddress"
                        name="curr_address"
                        type="text"
                        value={formData.curr_address}
                        onChange={handleInputChange}
                        placeholder="Complete address"
                        className="w-full min-w-0"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="w-full min-w-0">
                        <Label htmlFor="currMoveIn" className="text-sm sm:text-base">Move In Date</Label>
                        <Input
                          id="currMoveIn"
                          name="curr_move_in"
                          type="date"
                          value={formData.curr_move_in}
                          onChange={handleInputChange}
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="currRent" className="text-sm sm:text-base">Rent ($)</Label>
                        <Input
                          id="currRent"
                          name="curr_rent"
                          type="number"
                          step="0.01"
                          value={formData.curr_rent}
                          onChange={handleInputChange}
                          placeholder="0.00"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="currOwner" className="text-sm sm:text-base">Owner / Agent</Label>
                        <Input
                          id="currOwner"
                          name="curr_owner"
                          type="text"
                          value={formData.curr_owner}
                          onChange={handleInputChange}
                          placeholder="Name"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="currOwnerPhone" className="text-sm sm:text-base">Phone</Label>
                        <Input
                          id="currOwnerPhone"
                          name="curr_owner_phone"
                          type="tel"
                          value={formData.curr_owner_phone}
                          onChange={handleInputChange}
                          placeholder="(239) 555-1234"
                          className="w-full min-w-0"
                        />
                      </div>
                    </div>
                    <div className="w-full min-w-0">
                      <Label htmlFor="currReason" className="text-sm sm:text-base">Reason for Moving</Label>
                      <Input
                        id="currReason"
                        name="curr_reason"
                        type="text"
                        value={formData.curr_reason}
                        onChange={handleInputChange}
                        placeholder="Reason for leaving current address"
                        className="w-full min-w-0"
                      />
                    </div>
                  </div>

                  {/* Previous Address */}
                  <div className="pt-4 sm:pt-6 border-t border-gray-200 space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-lg font-bold text-[rgb(23,46,123)] border-b border-gray-200 pb-2">
                      Previous Address 1
                    </h3>
                    <div className="w-full min-w-0">
                      <Label htmlFor="prevAddress" className="text-sm sm:text-base">Address</Label>
                      <Input
                        id="prevAddress"
                        name="prev_address"
                        type="text"
                        value={formData.prev_address}
                        onChange={handleInputChange}
                        placeholder="Complete address"
                        className="w-full min-w-0"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="w-full min-w-0">
                        <Label htmlFor="prevMoveIn" className="text-sm sm:text-base">Move In Date</Label>
                        <Input
                          id="prevMoveIn"
                          name="prev_move_in"
                          type="date"
                          value={formData.prev_move_in}
                          onChange={handleInputChange}
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="prevMoveOut" className="text-sm sm:text-base">Move Out Date</Label>
                        <Input
                          id="prevMoveOut"
                          name="prev_move_out"
                          type="date"
                          value={formData.prev_move_out}
                          onChange={handleInputChange}
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="prevRent" className="text-sm sm:text-base">Rent ($)</Label>
                        <Input
                          id="prevRent"
                          name="prev_rent"
                          type="number"
                          step="0.01"
                          value={formData.prev_rent}
                          onChange={handleInputChange}
                          placeholder="0.00"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="prevOwnerPhone" className="text-sm sm:text-base">Owner Phone</Label>
                        <Input
                          id="prevOwnerPhone"
                          name="prev_owner_phone"
                          type="tel"
                          value={formData.prev_owner_phone}
                          onChange={handleInputChange}
                          placeholder="(239) 555-1234"
                          className="w-full min-w-0"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="w-full min-w-0">
                        <Label htmlFor="prevOwner" className="text-sm sm:text-base">Owner / Agent</Label>
                        <Input
                          id="prevOwner"
                          name="prev_owner"
                          type="text"
                          value={formData.prev_owner}
                          onChange={handleInputChange}
                          placeholder="Owner or agent name"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="prevReason" className="text-sm sm:text-base">Reason for Moving</Label>
                        <Input
                          id="prevReason"
                          name="prev_reason"
                          type="text"
                          value={formData.prev_reason}
                          onChange={handleInputChange}
                          placeholder="Reason for leaving previous address"
                          className="w-full min-w-0"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Previous Address 2 */}
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-[rgb(23,46,123)] border-b border-gray-200 pb-2">
                      Previous Address 2
                    </h3>
                    <div className="w-full min-w-0">
                      <Label htmlFor="prev2Address" className="text-sm sm:text-base">Address</Label>
                      <Input
                        id="prev2Address"
                        name="prev2_address"
                        type="text"
                        value={formData.prev2_address}
                        onChange={handleInputChange}
                        placeholder="Complete address"
                        className="w-full min-w-0"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="w-full min-w-0">
                        <Label htmlFor="prev2MoveIn" className="text-sm sm:text-base">Move In Date</Label>
                        <Input
                          id="prev2MoveIn"
                          name="prev2_move_in"
                          type="date"
                          value={formData.prev2_move_in}
                          onChange={handleInputChange}
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="prev2MoveOut" className="text-sm sm:text-base">Move Out Date</Label>
                        <Input
                          id="prev2MoveOut"
                          name="prev2_move_out"
                          type="date"
                          value={formData.prev2_move_out}
                          onChange={handleInputChange}
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="prev2Rent" className="text-sm sm:text-base">Rent ($)</Label>
                        <Input
                          id="prev2Rent"
                          name="prev2_rent"
                          type="number"
                          step="0.01"
                          value={formData.prev2_rent}
                          onChange={handleInputChange}
                          placeholder="0.00"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="prev2OwnerPhone" className="text-sm sm:text-base">Owner Phone</Label>
                        <Input
                          id="prev2OwnerPhone"
                          name="prev2_owner_phone"
                          type="tel"
                          value={formData.prev2_owner_phone}
                          onChange={handleInputChange}
                          placeholder="(239) 555-1234"
                          className="w-full min-w-0"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="w-full min-w-0">
                        <Label htmlFor="prev2Owner" className="text-sm sm:text-base">Owner / Agent</Label>
                        <Input
                          id="prev2Owner"
                          name="prev2_owner"
                          type="text"
                          value={formData.prev2_owner}
                          onChange={handleInputChange}
                          placeholder="Owner or agent name"
                          className="w-full min-w-0"
                        />
                      </div>
                      <div className="w-full min-w-0">
                        <Label htmlFor="prev2Reason" className="text-sm sm:text-base">Reason for Moving</Label>
                        <Input
                          id="prev2Reason"
                          name="prev2_reason"
                          type="text"
                          value={formData.prev2_reason}
                          onChange={handleInputChange}
                          placeholder="Reason for leaving this address"
                          className="w-full min-w-0"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Credit History */}
            <FadeIn delay={0.3}>
              <Card className="shadow-xl border-t-4 border-[rgb(180,22,40)]">
                <CardHeader className="bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(144,18,32)] text-white rounded-t-lg py-4 px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl font-black">
                    Credit History
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      <div>
                        <Label className="block mb-2 text-sm">Have you filed for bankruptcy?</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="bankruptcy"
                              value="yes"
                              checked={formData.bankruptcy === "yes"}
                              onChange={() => handleRadioChange("bankruptcy", "yes")}
                              className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                            />
                            <span className="text-sm">Yes</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="bankruptcy"
                              value="no"
                              checked={formData.bankruptcy === "no"}
                              onChange={() => handleRadioChange("bankruptcy", "no")}
                              className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                            />
                            <span className="text-sm">No</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <Label className="block mb-2 text-sm">Have you been evicted?</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="evicted"
                              value="yes"
                              checked={formData.evicted === "yes"}
                              onChange={() => handleRadioChange("evicted", "yes")}
                              className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                            />
                            <span className="text-sm">Yes</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="evicted"
                              value="no"
                              checked={formData.evicted === "no"}
                              onChange={() => handleRadioChange("evicted", "no")}
                              className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                            />
                            <span className="text-sm">No</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <Label className="block mb-2 text-sm">Are you involved in any legal lawsuits?</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="lawsuits"
                              value="yes"
                              checked={formData.lawsuits === "yes"}
                              onChange={() => handleRadioChange("lawsuits", "yes")}
                              className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                            />
                            <span className="text-sm">Yes</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="lawsuits"
                              value="no"
                              checked={formData.lawsuits === "no"}
                              onChange={() => handleRadioChange("lawsuits", "no")}
                              className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                            />
                            <span className="text-sm">No</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <Label className="block mb-2 text-sm">Late payments in the past year?</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="late_payments"
                              value="yes"
                              checked={formData.late_payments === "yes"}
                              onChange={() => handleRadioChange("late_payments", "yes")}
                              className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                            />
                            <span className="text-sm">Yes</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="late_payments"
                              value="no"
                              checked={formData.late_payments === "no"}
                              onChange={() => handleRadioChange("late_payments", "no")}
                              className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                            />
                            <span className="text-sm">No</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <Label className="block mb-2 text-sm">Any judgments against you?</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="judgments"
                              value="yes"
                              checked={formData.judgments === "yes"}
                              onChange={() => handleRadioChange("judgments", "yes")}
                              className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                            />
                            <span className="text-sm">Yes</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="judgments"
                              value="no"
                              checked={formData.judgments === "no"}
                              onChange={() => handleRadioChange("judgments", "no")}
                              className="mr-2 h-4 w-4 text-[rgb(23,46,123)] focus:ring-[rgb(23,46,123)]"
                            />
                            <span className="text-sm">No</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="w-full min-w-0">
                      <Label htmlFor="creditExplanation" className="text-sm sm:text-base">
                        If you answered &quot;Yes&quot; to any of the above questions, please explain:
                      </Label>
                      <Textarea
                        id="creditExplanation"
                        name="credit_explanation"
                        value={formData.credit_explanation}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Provide details about any affirmative answers..."
                        className="w-full min-w-0"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* References */}
            <FadeIn delay={0.4}>
              <Card className="shadow-xl border-t-4 border-[rgb(23,46,123)]">
                <CardHeader className="bg-gradient-to-r from-[rgb(23,46,123)] to-[rgb(18,37,98)] text-white rounded-t-lg py-4 px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl font-black">
                    References
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-5">
                  {/* Bank References */}
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-[rgb(23,46,123)] border-b border-gray-200 pb-2">
                      Bank References
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-3 p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-sm text-gray-700">Bank Reference 1</h4>
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="bank1Name" className="text-sm">Bank Name</Label>
                            <Input
                              id="bank1Name"
                              name="bank1_name"
                              type="text"
                              value={formData.bank1_name}
                              onChange={handleInputChange}
                              placeholder="Bank name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="bank1AccountType" className="text-sm">Account Type</Label>
                            <Select
                              id="bank1AccountType"
                              name="bank1_account_type"
                              value={formData.bank1_account_type}
                              onChange={handleInputChange}
                            >
                              <option value="">Select</option>
                              <option value="checking">Checking</option>
                              <option value="savings">Savings</option>
                              <option value="both">Both</option>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="bank1AccountNo" className="text-sm">Account Number</Label>
                            <Input
                              id="bank1AccountNo"
                              name="bank1_account_no"
                              type="text"
                              value={formData.bank1_account_no}
                              onChange={handleInputChange}
                              placeholder="Account number"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3 p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-sm text-gray-700">Bank Reference 2</h4>
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="bank2Name" className="text-sm">Bank Name</Label>
                            <Input
                              id="bank2Name"
                              name="bank2_name"
                              type="text"
                              value={formData.bank2_name}
                              onChange={handleInputChange}
                              placeholder="Bank name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="bank2AccountType" className="text-sm">Account Type</Label>
                            <Select
                              id="bank2AccountType"
                              name="bank2_account_type"
                              value={formData.bank2_account_type}
                              onChange={handleInputChange}
                            >
                              <option value="">Select</option>
                              <option value="checking">Checking</option>
                              <option value="savings">Savings</option>
                              <option value="both">Both</option>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="bank2AccountNo" className="text-sm">Account Number</Label>
                            <Input
                              id="bank2AccountNo"
                              name="bank2_account_no"
                              type="text"
                              value={formData.bank2_account_no}
                              onChange={handleInputChange}
                              placeholder="Account number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Credit References */}
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <h3 className="text-lg font-bold text-[rgb(23,46,123)] border-b border-gray-200 pb-2">
                      Credit/Personal References
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      <div className="space-y-2 p-3 bg-gray-50 rounded-lg">
                        <Label htmlFor="creditRef1Name" className="text-sm font-semibold">Reference 1</Label>
                        <Input
                          id="creditRef1Name"
                          name="credit_ref1_name"
                          type="text"
                          value={formData.credit_ref1_name}
                          onChange={handleInputChange}
                          placeholder="Full name"
                          className="mb-2"
                        />
                        <Input
                          id="creditRef1Phone"
                          name="credit_ref1_phone"
                          type="tel"
                          value={formData.credit_ref1_phone}
                          onChange={handleInputChange}
                          placeholder="(239) 555-1234"
                        />
                      </div>
                      <div className="space-y-2 p-3 bg-gray-50 rounded-lg">
                        <Label htmlFor="creditRef2Name" className="text-sm font-semibold">Reference 2</Label>
                        <Input
                          id="creditRef2Name"
                          name="credit_ref2_name"
                          type="text"
                          value={formData.credit_ref2_name}
                          onChange={handleInputChange}
                          placeholder="Full name"
                          className="mb-2"
                        />
                        <Input
                          id="creditRef2Phone"
                          name="credit_ref2_phone"
                          type="tel"
                          value={formData.credit_ref2_phone}
                          onChange={handleInputChange}
                          placeholder="(239) 555-1234"
                        />
                      </div>
                      <div className="space-y-2 p-3 bg-gray-50 rounded-lg">
                        <Label htmlFor="creditRef3Name" className="text-sm font-semibold">Reference 3</Label>
                        <Input
                          id="creditRef3Name"
                          name="credit_ref3_name"
                          type="text"
                          value={formData.credit_ref3_name}
                          onChange={handleInputChange}
                          placeholder="Full name"
                          className="mb-2"
                        />
                        <Input
                          id="creditRef3Phone"
                          name="credit_ref3_phone"
                          type="tel"
                          value={formData.credit_ref3_phone}
                          onChange={handleInputChange}
                          placeholder="(239) 555-1234"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Authorization and Signature */}
            <FadeIn delay={0.5}>
              <Card className="shadow-xl border-t-4 border-[rgb(180,22,40)]">
                <CardHeader className="bg-gradient-to-r from-[rgb(180,22,40)] to-[rgb(144,18,32)] text-white rounded-t-lg py-4 px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl font-black">
                    Statement and Authorization
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed break-words">
                        By my signature below, I declare that all information I have provided in this Florida Rental Application is true, accurate, and complete. I acknowledge that all information provided is material and the Landlord relies on this information to decide whether to grant or deny this Application.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <Label htmlFor="signatureName">Name (Applicant Signature) *</Label>
                          <Input
                            id="signatureName"
                            name="signature_name"
                            type="text"
                            value={formData.signature_name}
                            onChange={handleInputChange}
                            required
                            placeholder="Full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="signatureDate">Date *</Label>
                          <Input
                            id="signatureDate"
                            name="signature_date"
                            type="date"
                            value={formData.signature_date}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <Label htmlFor="coSignatureName">Name (Co-Applicant)</Label>
                          <Input
                            id="coSignatureName"
                            name="co_signature_name"
                            type="text"
                            value={formData.co_signature_name}
                            onChange={handleInputChange}
                            placeholder="Full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="coSignatureDate">Date</Label>
                          <Input
                            id="coSignatureDate"
                            name="co_signature_date"
                            type="date"
                            value={formData.co_signature_date}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-lg font-bold text-[rgb(23,46,123)] mb-3 underline">
                        AUTHORIZATION
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          I authorize the Landlord to request and review my credit and criminal history, and investigate the accuracy of all information contained in this Florida Rental Application. Furthermore, I authorize all banks, employers, and creditors to provide the Landlord with any information related to my credit.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <Label htmlFor="authSignatureName">Name (Authorization) *</Label>
                          <Input
                            id="authSignatureName"
                            name="auth_signature_name"
                            type="text"
                            value={formData.auth_signature_name}
                            onChange={handleInputChange}
                            required
                            placeholder="Full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="authSignatureDate">Date *</Label>
                          <Input
                            id="authSignatureDate"
                            name="auth_signature_date"
                            type="date"
                            value={formData.auth_signature_date}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Submit Button */}
            <FadeIn delay={0.6}>
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[200px] text-base sm:text-lg px-8 py-6"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </FadeIn>
          </form>
        </div>
      </div>
    </div>
  );
}


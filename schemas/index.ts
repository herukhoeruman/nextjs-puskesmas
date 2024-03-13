// import { UserRole } from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, {
    message: "Username tidak boleh kosong",
  }),
  password: z.string().min(1, {
    message: "Password tidak boleh kosong",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  username: z.string().min(1, {
    message: "Username tidak boleh kosong",
  }),
  email: z.string().email({
    message: "Mohon masukkan email yang valid",
  }),
  password: z.string().min(6, {
    message: "Password minimal 8 karakter",
  }),
  name: z.string().min(1, {
    message: "Nama tidak boleh kosong",
  }),
});

export const SuratMasukSchema = z
  .object({
    tanggalSurat: z.date({
      required_error: "Tanggal Surat tidak boleh kosong",
    }),
    nomorSurat: z.string().min(1, {
      message: "Nomor Surat tidak boleh kosong",
    }),
    tanggalTerima: z.date({
      required_error: "Tanggal Surat tidak boleh kosong",
    }),
    dari: z.string().min(1, {
      message: "Dari tidak boleh kosong",
    }),
    kepada: z.string().min(1, {
      message: "Kepada tidak boleh kosong",
    }),
    sifatPenyampaian: z.string().min(1, {
      message: "Sifat Penyampaian tidak boleh kosong",
    }),
    sifatPengamanan: z.string().min(1, {
      message: "Sifat Pengamanan tidak boleh kosong",
    }),
    lampiranJumlah: z.optional(z.string()),
    lampiranJenis: z.optional(z.string()),
    perihal: z.string().min(1, {
      message: "Perihal tidak boleh kosong",
    }),
    tembusan: z.optional(z.array(z.string().min(1))),
    keterangan: z.optional(
      z.string().min(1, {
        message: "Keterangan tidak boleh kosong",
      })
    ),
    lampiranFile: z.array(
      z.string().min(1, { message: "Lampiran tidak boleh kosong" })
    ),
  })
  .refine(
    (data) => {
      if (data.lampiranJumlah && !data.lampiranJenis) {
        return false;
      }

      return true;
    },
    {
      message: "Lampiran jenis harus diisi jika lampiran jumlah diisi!",
      path: ["lampiranJumlah"],
    }
  )
  .refine(
    (data) => {
      if (!data.lampiranJumlah && data.lampiranJenis) {
        return false;
      }

      return true;
    },
    {
      message: "Lampiran jumlah harus diisi jika lampiran jenis diisi!",
      path: ["lampiranJenis"],
    }
  );

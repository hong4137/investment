// ═══════════════════════════════════════════════════════════
// CIO 투자 노트 — 인증 게이트
//
// 정적 자산(index.html, data/reports.json)을 sharktalk 로그인 뒤로 숨긴다.
// 쿠키의 JWT 를 로컬 검증하고, 없으면 로그인 화면으로 보낸다.
//   - 문서 요청  → auth.sharktalk.co.kr/login?next=... 로 302
//   - 데이터 요청 → 401 JSON
// ═══════════════════════════════════════════════════════════

import { guardAssets } from "./shared/gate.js";

export default { fetch: guardAssets };
